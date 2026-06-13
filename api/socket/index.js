// socket/index.js — servidor Socket.IO completo

const { Server }   = require('socket.io');
const jwt          = require('jsonwebtoken');
const db           = require('../db');
const loader       = require('../dados/loader');
const { criarSala, getSala, deleteSala } = require('./salaState');
const { simularPartida } = require('./simulacao');

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Gera a ordem snake para N jogadores × rounds de picks
function gerarOrdemSnake(ids, rounds) {
  const ordem = [];
  const base  = [...ids];
  for (let r = 0; r < rounds; r++) {
    ordem.push(...(r % 2 === 0 ? base : [...base].reverse()));
  }
  return ordem;
}

function buildRoomState(sala) {
  const prontos = sala.jogadores.filter(j => j.pronto).length;
  return {
    codigo:     sala.codigo,
    status:     sala.status,
    hostUserId: sala.hostUserId,
    competicao: sala.competicao,
    prontos,
    total:      sala.jogadores.length,
    jogadores:  sala.jogadores.map(j => ({
      userId:    j.userId,
      username:  j.username,
      nomeDoTime: j.nomeDoTime,
      formacao:  j.formacao  || '4-3-3',
      conectado: j.conectado,
      pronto:    j.pronto,
      picks:     j.picks     || [],
      numPicks:  (j.picks    || []).length,
    })),
  };
}

function buildRanking(sala) {
  return sala.jogadores
    .map(j => ({
      userId:    j.userId,
      username:  j.username,
      nomeDoTime: j.nomeDoTime,
      formacao:  j.formacao  || '4-3-3',
      picks:     j.picks     || [],
      ...(sala.resultados[j.userId] || { vitorias:0, empates:0, derrotas:0, gf:0, ga:0, campeao:false }),
    }))
    .sort((a, b) => {
      const ptA = a.vitorias * 3 + a.empates;
      const ptB = b.vitorias * 3 + b.empates;
      if (ptA !== ptB) return ptB - ptA;
      return (b.gf - b.ga) - (a.gf - a.ga);
    });
}

function determinarCampeao(sala) {
  return sala.jogadores.reduce((melhor, j) => {
    const s  = sala.resultados[j.userId];
    if (!s) return melhor;
    const pts = s.vitorias * 3 + s.empates;
    const sg  = s.gf - s.ga;
    if (!melhor) return { j, pts, sg };
    if (pts > melhor.pts || (pts === melhor.pts && sg > melhor.sg)) return { j, pts, sg };
    return melhor;
  }, null)?.j || null;
}

function codigosAceitosServidor(codigo) {
  const mapa = { 'ME': ['ME','PE','MC','MEI'], 'MD': ['MD','PD','MC','MEI'] };
  return mapa[codigo] || [codigo];
}

// ── Turno de Draft ─────────────────────────────────────────────────────────────

function iniciarTurno(io, sala) {
  if (sala.indiceTurno >= sala.ordemDraft.length) return;
  const userId  = sala.ordemDraft[sala.indiceTurno];
  const jogador = sala.jogadores.find(j => j.userId === userId);
  const pool50  = sala.poolDisponivel.slice(0, 50);

  io.to(sala.codigo).emit('draft:turno', {
    userId,
    username:    jogador?.username,
    nomeDoTime:  jogador?.nomeDoTime,
    segundos:    30,
    pool:        pool50,
    turnoNum:    Math.floor(sala.indiceTurno / sala.jogadores.length) + 1,
    totalTurnos: sala.totalPicksNecessarios,
    numPicks:    (jogador?.picks || []).length,
  });

  if (jogador?.socketId) {
    io.to(jogador.socketId).emit('draft:yourTurn', { pool: pool50 });
  }

  sala.timerDraft = setTimeout(() => {
    if (!sala.poolDisponivel.length) return;
    const idx    = Math.floor(Math.random() * Math.min(sala.poolDisponivel.length, 50));
    const picked = sala.poolDisponivel.splice(idx, 1)[0];
    if (jogador) {
      jogador.picks = jogador.picks || [];
      jogador.picks.push(picked);
    }
    io.to(sala.codigo).emit('draft:pick', {
      userId,
      username:   jogador?.username,
      nomeDoTime: jogador?.nomeDoTime,
      jogador:    picked,
      numPicks:   (jogador?.picks || []).length,
      timeout:    true,
    });
    avancarTurno(io, sala);
  }, 30_000);
}

function avancarTurno(io, sala) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  sala.indiceTurno++;

  const total  = sala.totalPicksNecessarios || 11;
  const semPick = sala.jogadores.filter(j => (j.picks || []).length < total);

  if (!semPick.length) {
    sala.status = 'ready';
    sala.jogadores.forEach(j => { j.pronto = false; });
    io.to(sala.codigo).emit('draft:complete', {
      jogadores: sala.jogadores.map(j => ({
        userId:    j.userId,
        username:  j.username,
        nomeDoTime: j.nomeDoTime,
        formacao:  j.formacao || '4-3-3',
        picks:     j.picks    || [],
      })),
    });
    return;
  }

  iniciarTurno(io, sala);
}

// ── Setup principal ─────────────────────────────────────────────────────────────

function setupSocket(server, frontendUrl) {
  const io = new Server(server, {
    cors: {
      origin:      frontendUrl === '*' ? true : frontendUrl,
      credentials: true,
    },
  });

  // Autenticação JWT no handshake
  io.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error('Token requerido'));
    try {
      socket.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch {
      next(new Error('Token inválido'));
    }
  });

  io.on('connection', socket => {
    const { id: userId, username } = socket.user;

    // ── room:join ─────────────────────────────────────────────────────────────
    socket.on('room:join', async ({ codigo }) => {
      if (!codigo) return socket.emit('erro', 'Código inválido');
      const code = codigo.toUpperCase();

      try {
        const { rows: [roomDB] } = await db.query(
          'SELECT * FROM rooms WHERE codigo = $1', [code]
        );
        if (!roomDB) return socket.emit('erro', 'Sala não encontrada');

        const { rows: [user] } = await db.query(
          'SELECT nome_do_time FROM users WHERE id = $1', [userId]
        );

        let sala = getSala(code);
        if (!sala) sala = criarSala(code, roomDB.host_user_id, roomDB.competicao);

        let jogador = sala.jogadores.find(j => j.userId === userId);
        if (!jogador) {
          jogador = {
            userId,
            username,
            nomeDoTime: user?.nome_do_time || 'Meu Time',
            formacao:   '4-3-3',
            socketId:   socket.id,
            conectado:  true,
            picks:      [],
            pronto:     false,
          };
          sala.jogadores.push(jogador);
        } else {
          jogador.socketId  = socket.id;
          jogador.conectado = true;
        }

        socket.join(code);
        socket.salaAtual = code;
        io.to(code).emit('room:state', buildRoomState(sala));
      } catch (err) {
        console.error('[socket room:join]', err);
        socket.emit('erro', 'Erro ao entrar na sala');
      }
    });

    // ── lobby:config — jogador configura time e vota pronto ───────────────────
    socket.on('lobby:config', ({ nomeDoTime, formacao }) => {
      const code = socket.salaAtual;
      if (!code) return;
      const sala = getSala(code);
      if (!sala || sala.status !== 'lobby') return;

      const jog = sala.jogadores.find(j => j.userId === userId);
      if (!jog) return;

      jog.nomeDoTime = (nomeDoTime || jog.nomeDoTime || 'Meu Time').trim().slice(0, 30);
      jog.formacao   = formacao   || '4-3-3';
      jog.pronto     = true;

      io.to(code).emit('room:state', buildRoomState(sala));
    });

    // ── room:start — host inicia o draft (todos devem estar prontos) ──────────
    socket.on('room:start', () => {
      const code = socket.salaAtual;
      if (!code) return socket.emit('erro', 'Não está em nenhuma sala');

      const sala = getSala(code);
      if (!sala)                     return socket.emit('erro', 'Sala não encontrada');
      if (sala.hostUserId !== userId) return socket.emit('erro', 'Apenas o host pode iniciar');
      if (sala.status !== 'lobby')   return socket.emit('erro', 'Draft já iniciado');

      const todosProntos = sala.jogadores.length >= 2 && sala.jogadores.every(j => j.pronto);
      if (!todosProntos) return socket.emit('erro', 'Todos os jogadores precisam estar prontos (mínimo 2)');

      // Carrega pool de jogadores a partir dos arquivos estáticos (sem DB)
      const todosJogadores = loader.getPoolPorCompeticao(sala.competicao);
      if (!todosJogadores.length) {
        return socket.emit('erro', `Sem jogadores para a competição: ${sala.competicao}`);
      }

      const pool = shuffle(todosJogadores).slice(0, 600);

      // Reinicia picks de cada jogador
      sala.jogadores.forEach(j => { j.picks = []; j.pronto = false; });

      const baseOrder      = shuffle(sala.jogadores.map(j => j.userId));
      sala.poolDisponivel  = shuffle(pool);
      sala.ordemDraft      = gerarOrdemSnake(baseOrder, sala.totalPicksNecessarios);
      sala.indiceTurno     = 0;
      sala.status          = 'draft';

      io.to(code).emit('room:playerOrder', {
        ordem:       baseOrder,
        nomes:       baseOrder.map(id => sala.jogadores.find(j => j.userId === id)?.username),
        totalTurnos: sala.totalPicksNecessarios,
      });
      iniciarTurno(io, sala);
    });

    // ── draft:pick — jogador escolhe um player individual ─────────────────────
    socket.on('draft:pick', ({ playerId }) => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'draft') return;
      if (sala.ordemDraft[sala.indiceTurno] !== userId)
        return socket.emit('erro', 'Não é sua vez');

      const idx = sala.poolDisponivel.findIndex(p => p.id === playerId);
      if (idx === -1) return socket.emit('erro', 'Jogador não disponível');

      const [picked] = sala.poolDisponivel.splice(idx, 1);
      const jog      = sala.jogadores.find(j => j.userId === userId);
      if (jog) {
        jog.picks = jog.picks || [];
        jog.picks.push(picked);
      }

      io.to(code).emit('draft:pick', {
        userId,
        username:   jog?.username,
        nomeDoTime: jog?.nomeDoTime,
        jogador:    picked,
        numPicks:   (jog?.picks || []).length,
        timeout:    false,
      });
      avancarTurno(io, sala);
    });

    // ── ready:vote — voto para iniciar as rodadas (na tela de elencos) ────────
    socket.on('ready:vote', () => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'ready') return;

      const jog = sala.jogadores.find(j => j.userId === userId);
      if (jog) jog.pronto = true;

      const prontos = sala.jogadores.filter(j => j.pronto).length;
      const total   = sala.jogadores.length;
      io.to(code).emit('ready:count', { prontos, total });

      if (prontos >= total) {
        sala.status      = 'playing';
        sala.rodadaAtual = 0;
        sala.jogadores.forEach(j => {
          sala.resultados[j.userId] = { vitorias:0, empates:0, derrotas:0, gf:0, ga:0, campeao:false };
        });
        io.to(code).emit('round:start', { rodada: 1, total: sala.totalRodadas });
      }
    });

    // ── round:simulate — simula uma rodada (servidor deduplica) ───────────────
    socket.on('round:simulate', async () => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'playing') return;
      if (sala.rodadaEmAndamento) return;

      sala.rodadaEmAndamento = true;
      sala.rodadaAtual++;
      const rodada   = sala.rodadaAtual;
      const isUltima = rodada >= sala.totalRodadas;

      try {
        const resultadosRodada = [];

        // Obtém lista de clubes para sorteio de bots (dados estáticos)
        const clubesDisponiveis = loader.getClubesPorCompeticao(sala.competicao);

        for (const jogador of sala.jogadores) {
          const meuElenco = jogador.picks || [];
          if (!meuElenco.length) continue;

          // Bot: time aleatório da competição (via loader)
          const botRef = clubesDisponiveis[Math.floor(Math.random() * clubesDisponiveis.length)]
                      || { clube: 'Bot FC', edicao: 2024, competicao: sala.competicao };

          const botElenco = loader.getElencoDoClube(sala.competicao, botRef.clube, botRef.edicao);

          const adversario = {
            clube:      botRef.clube,
            edicao:     botRef.edicao,
            competicao: sala.competicao,
            jogadores:  botElenco,
          };

          const resultado = simularPartida(meuElenco, adversario, true);

          const stats = sala.resultados[jogador.userId];
          stats.gf += resultado.gMeus;
          stats.ga += resultado.gAdv;
          if      (resultado.gMeus > resultado.gAdv)  stats.vitorias++;
          else if (resultado.gMeus === resultado.gAdv) stats.empates++;
          else                                          stats.derrotas++;

          // Acumula artilharia e assistências
          resultado.fila.forEach(ev => {
            if (ev.lado === 'meu') {
              if (ev.autor?.nome) {
                sala.statsGols[ev.autor.nome] = (sala.statsGols[ev.autor.nome] || 0) + 1;
              }
              if (ev.assist?.nome) {
                sala.statsAssists[ev.assist.nome] = (sala.statsAssists[ev.assist.nome] || 0) + 1;
              }
            }
          });

          resultadosRodada.push({
            userId:    jogador.userId,
            username:  jogador.username,
            nomeDoTime: jogador.nomeDoTime,
            adversario: { clube: botRef.clube, edicao: botRef.edicao },
            gMeus:     resultado.gMeus,
            gAdv:      resultado.gAdv,
            fila:      resultado.fila,
          });
        }

        // Classificação
        const classificacao = sala.jogadores
          .map(j => ({
            userId:    j.userId,
            username:  j.username,
            nomeDoTime: j.nomeDoTime,
            ...(sala.resultados[j.userId] || { vitorias:0, empates:0, derrotas:0, gf:0, ga:0 }),
          }))
          .sort((a, b) => {
            const ptA = a.vitorias * 3 + a.empates;
            const ptB = b.vitorias * 3 + b.empates;
            if (ptA !== ptB) return ptB - ptA;
            return (b.gf - b.ga) - (a.gf - a.ga);
          });

        // Artilharia e assistências top-18
        const artilharia = Object.entries(sala.statsGols)
          .sort((a, b) => b[1] - a[1]).slice(0, 18)
          .map(([nome, gols]) => ({ nome, gols }));

        const assistencias = Object.entries(sala.statsAssists)
          .sort((a, b) => b[1] - a[1]).slice(0, 18)
          .map(([nome, assists]) => ({ nome, assists }));

        io.to(code).emit('round:results', {
          rodada,
          resultados: resultadosRodada,
          classificacao,
          artilharia,
          assistencias,
        });

        if (isUltima) {
          const campeao = determinarCampeao(sala);
          if (campeao) sala.resultados[campeao.userId].campeao = true;

          sala.status = 'fim';
          io.to(code).emit('game:end', { ranking: buildRanking(sala) });

          // Persiste resultados assincronamente
          (async () => {
            for (const jogador of sala.jogadores) {
              const s = sala.resultados[jogador.userId];
              if (!s) continue;
              try {
                await db.query(
                  `INSERT INTO matches
                     (user_id, competicao, modo, vitorias, empates, derrotas, gf, ga, campeao, detalhes)
                   VALUES ($1,$2,'online',$3,$4,$5,$6,$7,$8,$9)`,
                  [jogador.userId, sala.competicao,
                   s.vitorias, s.empates, s.derrotas, s.gf, s.ga, s.campeao,
                   JSON.stringify({ sala: code, rodadas: sala.totalRodadas, numPicks: (jogador.picks || []).length })]
                );
              } catch (e) { console.error('[socket] Erro ao salvar partida:', e); }
            }
            deleteSala(code);
          })();
        } else {
          io.to(code).emit('round:start', { rodada: rodada + 1, total: sala.totalRodadas });
        }
      } catch (err) {
        console.error('[socket round:simulate]', err);
        socket.emit('erro', 'Erro na simulação');
      } finally {
        sala.rodadaEmAndamento = false;
      }
    });

    // ── disconnect ────────────────────────────────────────────────────────────
    socket.on('disconnect', () => {
      const code = socket.salaAtual;
      if (!code) return;
      const sala = getSala(code);
      if (!sala) return;
      const jog = sala.jogadores.find(j => j.userId === userId);
      if (jog) { jog.conectado = false; jog.socketId = null; }
      io.to(code).emit('room:state', buildRoomState(sala));
    });
  });

  return io;
}

module.exports = { setupSocket };
