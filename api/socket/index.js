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

// ── Bots (times da máquina que completam a liga até 20) ────────────────────────

const TOTAL_TIMES    = 20;
const BOT_PICK_DELAY = 400;   // ms entre escolhas de bot (visível: a vez passa 1 a 1)
const NOMES_BOTS = [
  'Tigres FC','Albatroz EC','Furacão Azul','Leões do Vale','Raio Verde',
  'Inter Estelar','Dragões FC','Cometa SC','Falcões Real','União Atlética',
  'Trovão EC','Pantera Negra','Águias Douradas','Vendaval FC','Lobo Cinza',
  'Corsário SC','Meteoro FC','Bisões FC','Titãs do Norte','Cobras Reais',
  'Sentinela FC','Vulcano EC','Nova Aurora','Imperial SC','Bravos FC',
];
const FORMACOES_BOT = ['4-3-3','4-4-2','3-5-2','4-2-3-1','4-3-2-1','4-5-1','3-4-3','4-1-2-1-2'];

function gerarBots(qtd, nomesUsados) {
  const disp = shuffle(NOMES_BOTS.filter(n => !nomesUsados.includes(n)));
  const bots = [];
  for (let i = 0; i < qtd; i++) {
    const nome = disp[i] || ('Bot FC ' + (i + 1));
    bots.push({
      userId:     -(i + 1),               // ids negativos nunca colidem com humanos
      username:   nome,
      nomeDoTime: nome,
      formacao:   FORMACOES_BOT[Math.floor(Math.random() * FORMACOES_BOT.length)],
      socketId:   null,
      conectado:  false,
      picks:      [],
      pronto:     true,
      ehBot:      true,
    });
  }
  return bots;
}

// ── Posições: códigos por vaga (mesma fonte do front) + elegibilidade ─────────
const CODIGOS_FORMACAO = {
  '4-3-3':    ['GOL','LE','ZAG','ZAG','LD','MC','MEI','MC','PE','ATA','PD'],
  '4-4-2':    ['GOL','LE','ZAG','ZAG','LD','ME','MC','MC','MD','ATA','ATA'],
  '4-2-3-1':  ['GOL','LE','ZAG','ZAG','LD','VOL','VOL','PE','MEI','PD','ATA'],
  '3-5-2':    ['GOL','ZAG','ZAG','ZAG','ME','MC','MEI','MC','MD','ATA','ATA'],
  '4-3-2-1':  ['GOL','LE','ZAG','ZAG','LD','VOL','MC','MC','MEI','MEI','ATA'],
  '4-5-1':    ['GOL','LE','ZAG','ZAG','LD','VOL','MC','MC','ME','MD','ATA'],
  '3-4-3':    ['GOL','ZAG','ZAG','ZAG','VOL','MC','MC','MEI','PE','ATA','PD'],
  '4-1-2-1-2':['GOL','LE','ZAG','ZAG','LD','VOL','ME','MD','MEI','ATA','ATA'],
};
function codigosDaFormacao(formacao) { return CODIGOS_FORMACAO[formacao] || CODIGOS_FORMACAO['4-3-3']; }
function codigosAceitos(cod) { const m = { ME: ['ME','PE'], MD: ['MD','PD'] }; return m[cod] || [cod]; }
function podeOcupar(jogador, cod) {
  const ok = codigosAceitos(cod);
  return (jogador.posicoes || []).some(p => ok.indexOf(p) >= 0);
}

// Escolha "equilibrada" a partir de uma lista: bons jogadores, mas com variação.
function escolherPickBotDe(fonte) {
  if (!fonte.length) return null;
  const ord  = fonte.slice().sort((a, b) => (b.forca || 70) - (a.forca || 70));
  const topo = ord.slice(0, Math.min(12, ord.length));   // só o topo da posição → times fortes
  let total = 0;
  const pesos = topo.map(p => { const f = (p.forca || 70); const w = f * f * f; total += w; return w; });
  let r = Math.random() * total, acum = 0;
  for (let i = 0; i < topo.length; i++) { acum += pesos[i]; if (r <= acum) return topo[i]; }
  return topo[0];
}

// Coloca um jogador numa vaga ABERTA e VÁLIDA. Bot: vaga aleatória; timeout: 1ª aberta.
function colocarEmVagaAberta(io, sala, jogador, ehBot) {
  const codigos = codigosDaFormacao(jogador.formacao || '4-3-3');
  jogador.picks = jogador.picks || [];
  const abertas = [];
  for (let i = 0; i < codigos.length; i++) { if (!jogador.picks[i]) abertas.push(i); }
  if (!abertas.length) return;
  const slotIdx   = ehBot ? abertas[Math.floor(Math.random() * abertas.length)] : abertas[0];
  const cod       = codigos[slotIdx];
  const elegiveis = sala.poolDisponivel.filter(p => podeOcupar(p, cod));
  const picked    = escolherPickBotDe(elegiveis.length ? elegiveis : sala.poolDisponivel);
  if (!picked) return;
  const idx = sala.poolDisponivel.indexOf(picked);
  if (idx !== -1) sala.poolDisponivel.splice(idx, 1);
  jogador.picks[slotIdx] = picked;
  io.to(sala.codigo).emit('draft:pick', {
    userId:     jogador.userId,
    username:   jogador.username,
    nomeDoTime: jogador.nomeDoTime,
    jogador:    picked,
    slotIndex:  slotIdx,
    numPicks:   jogador.picks.filter(Boolean).length,
    timeout:    !ehBot,
    ehBot:      !!ehBot,
  });
}
function botEscolhe(io, sala, jogador) { colocarEmVagaAberta(io, sala, jogador, true); }

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
      ehBot:     !!j.ehBot,
      guest:     !!j.guest,
      picks:     j.picks     || [],
      numPicks:  (j.picks    || []).filter(Boolean).length,
    })),
  };
}

function buildRanking(sala) {
  return sala.jogadores
    .map(j => ({
      userId:    j.userId,
      username:  j.username,
      nomeDoTime: j.nomeDoTime,
      ehBot:     !!j.ehBot,
      guest:     !!j.guest,
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

// Calendário todos-contra-todos ida e volta (método do círculo).
// Para n times (par) gera (n-1) rodadas no 1º turno e espelha no 2º → 2(n-1) rodadas.
function gerarCalendario(uids) {
  const n = uids.length;
  if (n < 2) return [];
  const metade = Math.floor(n / 2);
  let rot = uids.slice();
  const turno1 = [];
  for (let r = 0; r < n - 1; r++) {
    const rodada = [];
    for (let i = 0; i < metade; i++) {
      const a = rot[i], b = rot[n - 1 - i];
      // alterna mando por rodada para equilibrar casa/fora
      rodada.push(r % 2 === 0 ? [a, b] : [b, a]);
    }
    turno1.push(rodada);
    rot = [rot[0], rot[n - 1], ...rot.slice(1, n - 1)];   // rotaciona, fixando rot[0]
  }
  const turno2 = turno1.map(rod => rod.map(([c, f]) => [f, c]));  // returno: inverte mando
  return turno1.concat(turno2);
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

  // Vez de um BOT: anuncia a vez (para o marcador andar 1 a 1) e escolhe após um instante.
  if (jogador && jogador.ehBot) {
    io.to(sala.codigo).emit('draft:turno', {
      userId:      jogador.userId,
      username:    jogador.username,
      nomeDoTime:  jogador.nomeDoTime,
      ehBot:       true,
      segundos:    0,
      pool:        [],
      turnoNum:    Math.floor(sala.indiceTurno / sala.jogadores.length) + 1,
      totalTurnos: sala.totalPicksNecessarios,
      numPicks:    (jogador.picks || []).filter(Boolean).length,
    });
    sala.timerDraft = setTimeout(() => {
      botEscolhe(io, sala, jogador);
      avancarTurno(io, sala);
    }, BOT_PICK_DELAY);
    return;
  }

  // Vagas abertas do jogador (códigos de posição da formação)
  const codigosForm = codigosDaFormacao(jogador?.formacao || '4-3-3');
  const picksJog    = (jogador && jogador.picks) || [];
  const abertos     = [];
  for (let i = 0; i < codigosForm.length; i++) { if (!picksJog[i]) abertos.push(codigosForm[i]); }

  // Elegíveis para QUALQUER vaga aberta — podeOcupar considera TODAS as posições do jogador
  // (ex.: vaga MEI aberta também traz ATAs que podem jogar de MEI).
  const elegiveis = sala.poolDisponivel.filter(p => abertos.some(cod => podeOcupar(p, cod)));
  const fonte     = elegiveis.length ? elegiveis : sala.poolDisponivel.slice();

  // 6 cartas aleatórias; evita repetir as já mostradas a ESTE jogador, completando até 6.
  if (jogador) jogador.cartasVistas = jogador.cartasVistas || {};
  const vistos = (jogador && jogador.cartasVistas) || {};
  let cards = shuffle(fonte.filter(p => !vistos[p.id])).slice(0, 6);
  if (cards.length < 6) {
    const resto = shuffle(fonte.filter(p => cards.indexOf(p) === -1));
    cards = cards.concat(resto.slice(0, 6 - cards.length));
  }
  if (jogador) cards.forEach(p => { jogador.cartasVistas[p.id] = true; });

  io.to(sala.codigo).emit('draft:turno', {
    userId,
    username:    jogador?.username,
    nomeDoTime:  jogador?.nomeDoTime,
    segundos:    30,
    pool:        cards,    // 6 cartas já prontas (elegíveis + aleatórias)
    cards,
    turnoNum:    Math.floor(sala.indiceTurno / sala.jogadores.length) + 1,
    totalTurnos: sala.totalPicksNecessarios,
    numPicks:    (jogador?.picks || []).filter(Boolean).length,
  });

  if (jogador?.socketId) {
    io.to(jogador.socketId).emit('draft:yourTurn', { pool: cards });
  }

  sala.timerDraft = setTimeout(() => {
    if (jogador) colocarEmVagaAberta(io, sala, jogador, false);  // auto-aloca em vaga válida
    avancarTurno(io, sala);
  }, 30_000);
}

function avancarTurno(io, sala) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  sala.indiceTurno++;

  const total  = sala.totalPicksNecessarios || 11;
  const semPick = sala.jogadores.filter(j => (j.picks || []).filter(Boolean).length < total);

  if (!semPick.length) {
    sala.status = 'ready';
    sala.jogadores.forEach(j => { j.pronto = !!j.ehBot; });
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
  // Mesma lógica de CORS do HTTP: lista separada por vírgula, ou '*' em dev.
  const origens = (frontendUrl || '*').split(',').map(s => s.trim()).filter(Boolean);
  const corsOrigin = frontendUrl === '*'
    ? true
    : function (origin, cb) {
        if (!origin || origens.includes(origin)) return cb(null, true);
        return cb(new Error('Origem não permitida'));
      };

  const io = new Server(server, {
    cors: {
      origin:      corsOrigin,
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
        if (!sala) sala = criarSala(code, roomDB.host_user_id || userId, roomDB.competicao);

        let jogador = sala.jogadores.find(j => j.userId === userId);
        if (!jogador) {
          // Novo entrante: só entra se a sala está no lobby e não está cheia.
          // (Reconexão de quem já está na sala cai no 'else' e é sempre permitida.)
          if (sala.status !== 'lobby') return socket.emit('erro', 'A partida já começou');
          if (sala.jogadores.length >= 20) return socket.emit('erro', 'Sala cheia (máx. 20)');
          jogador = {
            userId,
            username,
            nomeDoTime: user?.nome_do_time || 'Seu time',
            formacao:   '4-3-3',
            socketId:   socket.id,
            conectado:  true,
            picks:      [],
            pronto:     false,
            guest:      !!socket.user.guest,
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

      const todosProntos = sala.jogadores.length >= 1 && sala.jogadores.every(j => j.pronto);
      if (!todosProntos) return socket.emit('erro', 'Todos os jogadores precisam estar prontos');

      try {
      // Carrega pool de jogadores a partir dos arquivos estáticos (sem DB)
      const todosJogadores = loader.getPoolPorCompeticao(sala.competicao);
      if (!todosJogadores.length) {
        return socket.emit('erro', `Sem jogadores para a competição: ${sala.competicao}`);
      }

      // Completa a liga até 20 times com bots (máquina) — 1 humano → 19 bots, etc.
      const faltam = Math.max(0, TOTAL_TIMES - sala.jogadores.length);
      if (faltam > 0) {
        const usados = sala.jogadores.map(j => j.nomeDoTime).filter(Boolean);
        sala.jogadores.push(...gerarBots(faltam, usados));
      }
      io.to(code).emit('room:state', buildRoomState(sala));

      // Remove nomes repetidos do pool (mantém a melhor edição de cada jogador),
      // como no draft padrão — nada de "Pelé 1962" e "Pelé 1964" na mesma lista.
      const porNome = new Map();
      for (const j of todosJogadores) {
        const ex = porNome.get(j.nome);
        if (!ex || (j.forca || 70) > (ex.forca || 70)) porNome.set(j.nome, j);
      }
      const unicos = [...porNome.values()];

      // Pool: amostra de 600 (nomes únicos), ordenada por força (melhores primeiro).
      const pool = shuffle(unicos).slice(0, 600)
                     .sort((a, b) => (b.forca || 70) - (a.forca || 70));

      // Reinicia picks; humanos voltam a "não pronto", bots seguem prontos.
      sala.jogadores.forEach(j => { j.picks = []; j.pronto = !!j.ehBot; j.cartasVistas = {}; });

      const baseOrder      = shuffle(sala.jogadores.map(j => j.userId));
      sala.poolDisponivel  = pool;
      sala.ordemDraft      = gerarOrdemSnake(baseOrder, sala.totalPicksNecessarios);
      sala.indiceTurno     = 0;
      sala.status          = 'draft';

      io.to(code).emit('room:playerOrder', {
        ordem:       baseOrder,
        nomes:       baseOrder.map(id => sala.jogadores.find(j => j.userId === id)?.username),
        totalTurnos: sala.totalPicksNecessarios,
      });
      iniciarTurno(io, sala);
      } catch (err) {
        console.error('Erro em room:start:', err);
        socket.emit('erro', 'Erro ao iniciar o draft. Tente novamente.');
      }
    });

    // ── draft:pick — jogador escolhe um player individual ─────────────────────
    socket.on('draft:pick', ({ playerId, slotIndex }) => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'draft') return;
      if (sala.ordemDraft[sala.indiceTurno] !== userId)
        return socket.emit('erro', 'Não é sua vez');

      const jog = sala.jogadores.find(j => j.userId === userId);
      if (!jog) return;
      jog.picks = jog.picks || [];

      const codigos = codigosDaFormacao(jog.formacao || '4-3-3');
      const slot    = Number(slotIndex);
      if (!(slot >= 0 && slot < codigos.length))
        return socket.emit('erro', 'Posição inválida');
      if (jog.picks[slot])
        return socket.emit('erro', 'Posição já preenchida');

      const idx = sala.poolDisponivel.findIndex(p => p.id === playerId);
      if (idx === -1) return socket.emit('erro', 'Jogador não disponível');
      if (!podeOcupar(sala.poolDisponivel[idx], codigos[slot]))
        return socket.emit('erro', 'Jogador não joga nessa posição');

      const [picked] = sala.poolDisponivel.splice(idx, 1);
      jog.picks[slot] = picked;

      io.to(code).emit('draft:pick', {
        userId,
        username:   jog.username,
        nomeDoTime: jog.nomeDoTime,
        jogador:    picked,
        slotIndex:  slot,
        numPicks:   jog.picks.filter(Boolean).length,
        timeout:    false,
      });
      avancarTurno(io, sala);
    });

    // ── draft:move — reposiciona/troca um jogador já escalado (durante a vez) ──
    socket.on('draft:move', ({ fromSlot, toSlot }) => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'draft') return;
      if (sala.ordemDraft[sala.indiceTurno] !== userId)
        return socket.emit('erro', 'Não é sua vez');

      const jog = sala.jogadores.find(j => j.userId === userId);
      if (!jog || !jog.picks) return;

      const codigos = codigosDaFormacao(jog.formacao || '4-3-3');
      const from = Number(fromSlot), to = Number(toSlot);
      if (!(from >= 0 && from < codigos.length && to >= 0 && to < codigos.length) || from === to) return;

      const jogFrom = jog.picks[from];
      if (!jogFrom) return;                       // origem precisa ter jogador
      const jogTo = jog.picks[to];

      if (!jogTo) {                               // mover para vaga vazia
        if (!podeOcupar(jogFrom, codigos[to])) return socket.emit('erro', 'Jogador não joga nessa posição');
        jog.picks[to]   = jogFrom;
        jog.picks[from] = undefined;
      } else {                                    // trocar dois jogadores
        if (!podeOcupar(jogFrom, codigos[to]) || !podeOcupar(jogTo, codigos[from]))
          return socket.emit('erro', 'Troca inválida para essas posições');
        jog.picks[to]   = jogFrom;
        jog.picks[from] = jogTo;
      }

      io.to(code).emit('draft:moved', { userId, fromSlot: from, toSlot: to, picks: jog.picks });
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
        sala.calendario   = gerarCalendario(sala.jogadores.map(j => j.userId));
        sala.totalRodadas = sala.calendario.length || sala.totalRodadas;   // 38 com 20 times
        io.to(code).emit('round:start', { rodada: 1, total: sala.totalRodadas });
      }
    });

    // ── round:simulate — simula uma rodada (servidor deduplica) ───────────────
    socket.on('round:simulate', async () => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'playing') return;
      if (sala.hostUserId !== userId) return;   // só o host avança as rodadas
      if (sala.rodadaEmAndamento) return;

      sala.rodadaEmAndamento = true;
      sala.rodadaAtual++;
      const rodada   = sala.rodadaAtual;
      const isUltima = rodada >= sala.totalRodadas;

      try {
        const resultadosRodada = [];
        const fixtures = sala.calendario[rodada - 1] || [];
        const mapaJog  = {};
        sala.jogadores.forEach(j => { mapaJog[j.userId] = j; });

        for (const par of fixtures) {
          const home = mapaJog[par[0]];
          const away = mapaJog[par[1]];
          if (!home || !away) continue;

          const homeElenco = (home.picks || []).filter(Boolean);
          const awayElenco = (away.picks || []).filter(Boolean);

          // Confronto direto: mando para o time da casa.
          const resultado = simularPartida(homeElenco, { jogadores: awayElenco }, true);
          const gHome = resultado.gMeus, gAway = resultado.gAdv;

          const sh = sala.resultados[home.userId];
          const sa = sala.resultados[away.userId];
          sh.gf += gHome; sh.ga += gAway;
          sa.gf += gAway; sa.ga += gHome;
          if      (gHome > gAway) { sh.vitorias++; sa.derrotas++; }
          else if (gHome < gAway) { sa.vitorias++; sh.derrotas++; }
          else                    { sh.empates++;  sa.empates++;  }

          // Artilharia e assistências — dos DOIS lados
          resultado.fila.forEach(ev => {
            if (ev.lado === 'meu') {
              if (ev.autor?.nome)   sala.statsGols[ev.autor.nome]     = (sala.statsGols[ev.autor.nome]     || 0) + 1;
              if (ev.assist?.nome)  sala.statsAssists[ev.assist.nome] = (sala.statsAssists[ev.assist.nome] || 0) + 1;
            } else {
              if (ev.autorAdv?.nome)  sala.statsGols[ev.autorAdv.nome]     = (sala.statsGols[ev.autorAdv.nome]     || 0) + 1;
              if (ev.assistAdv?.nome) sala.statsAssists[ev.assistAdv.nome] = (sala.statsAssists[ev.assistAdv.nome] || 0) + 1;
            }
          });

          resultadosRodada.push({
            homeUid: home.userId, homeNome: home.nomeDoTime, homeUser: home.username, homeBot: !!home.ehBot,
            awayUid: away.userId, awayNome: away.nomeDoTime, awayUser: away.username, awayBot: !!away.ehBot,
            gHome, gAway,
            fila: resultado.fila,
          });
        }

        // Classificação (20 times)
        const classificacao = sala.jogadores
          .map(j => {
            const s = sala.resultados[j.userId] || { vitorias:0, empates:0, derrotas:0, gf:0, ga:0 };
            return {
              userId: j.userId, username: j.username, nomeDoTime: j.nomeDoTime, ehBot: !!j.ehBot,
              vitorias: s.vitorias, empates: s.empates, derrotas: s.derrotas, gf: s.gf, ga: s.ga,
              jogos:  s.vitorias + s.empates + s.derrotas,
              pontos: s.vitorias * 3 + s.empates,
              saldo:  s.gf - s.ga,
            };
          })
          .sort((a, b) => (b.pontos - a.pontos) || (b.saldo - a.saldo) || (b.gf - a.gf));

        // Artilharia e assistências top-18
        // Mapa nome do jogador → nome do time (cada nome pertence a um único time)
        const timeDoJogador = {};
        sala.jogadores.forEach(j => {
          (j.picks || []).forEach(p => { if (p && p.nome) timeDoJogador[p.nome] = j.nomeDoTime; });
        });

        const artilharia = Object.entries(sala.statsGols)
          .sort((a, b) => b[1] - a[1]).slice(0, 18)
          .map(([nome, gols]) => ({ nome, gols, time: timeDoJogador[nome] || '' }));

        const assistencias = Object.entries(sala.statsAssists)
          .sort((a, b) => b[1] - a[1]).slice(0, 18)
          .map(([nome, assists]) => ({ nome, assists, time: timeDoJogador[nome] || '' }));

        // Próxima rodada (para a coluna "Próximos jogos")
        const mapaNome = {};
        sala.jogadores.forEach(j => { mapaNome[j.userId] = j; });
        const proxFix = sala.calendario[rodada] || [];   // rodada é 1-based → [rodada] = próxima
        const proxima = {
          rodada: rodada + 1,
          jogos: proxFix.map(par => {
            const h = mapaNome[par[0]] || {}, a = mapaNome[par[1]] || {};
            return {
              homeUid: par[0], homeNome: h.nomeDoTime, homeBot: !!h.ehBot,
              awayUid: par[1], awayNome: a.nomeDoTime, awayBot: !!a.ehBot,
            };
          }),
        };

        io.to(code).emit('round:results', {
          rodada,
          total: sala.totalRodadas,
          resultados: resultadosRodada,
          classificacao,
          artilharia,
          assistencias,
          proxima,
        });

        if (isUltima) {
          const campeao = determinarCampeao(sala);
          if (campeao) sala.resultados[campeao.userId].campeao = true;

          sala.status = 'fim';
          io.to(code).emit('game:end', { ranking: buildRanking(sala) });

          // Persiste resultados assincronamente
          (async () => {
            for (const jogador of sala.jogadores) {
              if (jogador.ehBot || jogador.guest) continue;   // bots e convidados não salvam histórico
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
        }
        // Rodadas seguintes são disparadas pelo HOST (botão/auto) via round:simulate.
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
