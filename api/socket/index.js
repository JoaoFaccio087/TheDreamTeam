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

// Draft em turnos: 5 turnos de 2 picks + 1 turno final de 1 pick = 11 jogadores.
// A vez só passa quando o usuário completa os picks do turno.
const PICKS_POR_RODADA = [2, 2, 2, 2, 2, 1];
const TURNOS_DRAFT     = PICKS_POR_RODADA.length;   // 6

function picksDoTurno(sala, indiceTurno) {
  const n = sala.jogadores.length || 1;
  return PICKS_POR_RODADA[Math.floor(indiceTurno / n)] || 1;
}

// Picks do turno no draft POR GRUPO: indexado direto pelo turno (0..5) → [2,2,2,2,2,1].
function picksDoTurnoGrupo(indiceTurno) {
  return PICKS_POR_RODADA[indiceTurno] || 1;
}

// ── Bots (times da máquina que completam a liga até 20) ────────────────────────

const TOTAL_TIMES    = 20;
const BOT_PICK_DELAY = 400;   // ms entre escolhas de bot (visível: a vez passa 1 a 1)
const GRUPO_PACE     = 650;   // ms de pausa entre turnos de grupo (não passar instantâneo)
const BOT_PREFIXOS = [
  'Tigres','Albatroz','Furacão','Leões','Raio','Inter','Dragões','Cometa','Falcões','União',
  'Trovão','Pantera','Águias','Vendaval','Lobo','Corsário','Meteoro','Bisões','Titãs','Cobras',
  'Sentinela','Vulcano','Aurora','Imperial','Bravos','Tubarões','Gaviões','Centauros','Fênix','Lince',
  'Javali','Cervos','Andorinhas','Gralhas','Olímpico','Sparta','Cosmos','Galácticos','Nômades','Bandeirantes',
  'Guará','Onça','Jaguar','Tatu','Saci','Curupira','Boitatá','Iara','Muriqui','Sabiá',
  'Tucano','Arara','Capivara','Sucuri','Estrela','Relâmpago','Tornado','Avalanche','Pampa','Serra',
];
const BOT_SUFIXOS = ['FC','EC','SC','AC','United','City','Atlético','Real','Sporting','Athletic'];
const FORMACOES_BOT = ['4-3-3','4-4-2','3-5-2','4-2-3-1','4-3-2-1','4-5-1','3-4-3','4-1-2-1-2'];

function gerarBots(qtd, nomesUsados) {
  const usados = new Set(nomesUsados || []);
  const bots = [];
  for (let i = 0; i < qtd; i++) {
    let nome, tent = 0;
    do {
      const pre = BOT_PREFIXOS[Math.floor(Math.random() * BOT_PREFIXOS.length)];
      const suf = BOT_SUFIXOS[Math.floor(Math.random() * BOT_SUFIXOS.length)];
      nome = pre + ' ' + suf;
    } while (usados.has(nome) && ++tent < 60);
    if (usados.has(nome)) nome = nome + ' ' + (i + 1);   // garante unicidade no caso raro
    usados.add(nome);
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
// Amostra balanceada de uma posição por faixas de força (humano, bot e timeout
// usam a mesma distribuição). Dá chance de craques sem encher o time deles.
function amostraPosicao(fonte, n) {
  n = n || 12;
  if (!fonte || !fonte.length) return [];
  if (fonte.length <= n) return shuffle(fonte.slice());
  const F     = p => (p.forca || 70);
  const elite = fonte.filter(p => F(p) >= 88);
  const bom   = fonte.filter(p => F(p) >= 82 && F(p) < 88);
  const medio = fonte.filter(p => F(p) >= 76 && F(p) < 82);
  const resto = fonte.filter(p => F(p) <  76);
  const pega  = (arr, k) => shuffle(arr.slice()).slice(0, k);
  // ~3 craques + 4 bons + 3 médios + 2 resto → ofertas variadas, com craque possível
  let amostra = [].concat(pega(elite, 3), pega(bom, 4), pega(medio, 3), pega(resto, 2));
  if (amostra.length < n) {                       // completa se alguma faixa for curta
    const ids = new Set(amostra.map(p => p.id));
    const ord = fonte.slice().sort((a, b) => F(b) - F(a));
    for (const p of ord) { if (amostra.length >= n) break; if (!ids.has(p.id)) { amostra.push(p); ids.add(p.id); } }
  }
  return shuffle(amostra).slice(0, n);
}

// Bot/timeout: escolha ponderada (linear) na amostra — favorece os melhores sem
// pegar sempre o máximo.
function escolherPickBotDe(fonte) {
  if (!fonte || !fonte.length) return null;
  const amostra = amostraPosicao(fonte, 12);
  let total = 0;
  const pesos = amostra.map(p => { const w = Math.max(1, (p.forca || 70) - 60); total += w; return w; });
  let r = Math.random() * total, acum = 0;
  for (let i = 0; i < amostra.length; i++) { acum += pesos[i]; if (r <= acum) return amostra[i]; }
  return amostra[0];
}

// Coloca um jogador numa vaga ABERTA e VÁLIDA. Bot: vaga aleatória; timeout: 1ª aberta.
function colocarEmVagaAberta(io, sala, jogador, ehBot) {
  const codigos = codigosDaFormacao(jogador.formacao || '4-3-3');
  jogador.picks = jogador.picks || [];
  const abertas = [];
  for (let i = 0; i < codigos.length; i++) { if (!jogador.picks[i]) abertas.push(i); }
  if (!abertas.length) return;
  // Posição SEMPRE aleatória (vale para bot e para humano que perdeu o tempo) — nunca em ordem.
  const slotIdx   = abertas[Math.floor(Math.random() * abertas.length)];
  const cod       = codigos[slotIdx];
  const elegiveis = sala.poolDisponivel.filter(p => podeOcupar(p, cod));
  const fonte     = elegiveis.length ? elegiveis : sala.poolDisponivel;
  // Bot e timeout: pick justo ponderado pela amostra de faixas (decente, não o mais fraco).
  const picked    = escolherPickBotDe(fonte);
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

// ── Fase de grupos (formato 'mata') ──────────────────────────────────────────
// Calendário: round-robin SIMPLES dentro de cada grupo; a rodada r junta a rodada r
// de TODOS os grupos (jogos em paralelo). Grupo de 4 → 3 rodadas.
function gerarCalendarioGrupos(sala) {
  const cfg      = configGrupos(sala.competicao);
  const nRodadas = cfg.porGrupo - 1;            // 4 times → 3 rodadas
  const calendario = [];
  for (let r = 0; r < nRodadas; r++) calendario.push([]);
  cfg.letras.forEach(L => {
    const uids = sala.grupos[L] || [];
    const rr   = gerarCalendario(uids).slice(0, nRodadas);   // só o turno único
    rr.forEach((rodada, r) => { calendario[r].push(...rodada); });
  });
  return calendario;
}

// Classificação ordenada de um grupo.
function classificacaoDoGrupo(sala, uids) {
  return uids.map(uid => {
    const j = sala.jogadores.find(x => x.userId === uid) || {};
    const s = sala.resultados[uid] || { vitorias:0, empates:0, derrotas:0, gf:0, ga:0 };
    return {
      userId: uid, nomeDoTime: j.nomeDoTime, username: j.username, ehBot: !!j.ehBot,
      vitorias: s.vitorias, empates: s.empates, derrotas: s.derrotas, gf: s.gf, ga: s.ga,
      jogos: s.vitorias + s.empates + s.derrotas, pontos: s.vitorias * 3 + s.empates, saldo: s.gf - s.ga,
    };
  }).sort((a, b) => (b.pontos - a.pontos) || (b.saldo - a.saldo) || (b.gf - a.gf));
}

function classificacaoTodosGrupos(sala) {
  const cfg = configGrupos(sala.competicao);
  const out = {};
  cfg.letras.forEach(L => { out[L] = classificacaoDoGrupo(sala, sala.grupos[L] || []); });
  return out;
}

// Classificação atual da LIGA (Brasileirão / fase de liga da Champions), ordenada.
// Reutilizada pelo snapshot de reconexão para reconstruir a tabela sem recalcular a rodada.
function montarClassificacaoAtual(sala) {
  return sala.jogadores.map(j => {
    const s = sala.resultados[j.userId] || { vitorias:0, empates:0, derrotas:0, gf:0, ga:0 };
    return {
      userId: j.userId, username: j.username, nomeDoTime: j.nomeDoTime, ehBot: !!j.ehBot,
      vitorias: s.vitorias, empates: s.empates, derrotas: s.derrotas, gf: s.gf, ga: s.ga,
      jogos:  s.vitorias + s.empates + s.derrotas,
      pontos: s.vitorias * 3 + s.empates,
      saldo:  s.gf - s.ga,
    };
  }).sort((a, b) => (b.pontos - a.pontos) || (b.saldo - a.saldo) || (b.gf - a.gf));
}

// Apura os classificados: 2 primeiros de cada grupo + melhores terceiros até a chave.
// Copa → 32 (24 diretos + 8 melhores 3os). Libertadores → 16 (só os 2 primeiros).
function apurarClassificados(sala) {
  const cfg     = configGrupos(sala.competicao);
  const classif = classificacaoTodosGrupos(sala);
  const ALVO    = (sala.competicao === 'Copa do Mundo') ? 32 : 16;

  const diretos = [], terceiros = [];
  cfg.letras.forEach(L => {
    (classif[L] || []).forEach((t, idx) => {
      if (idx < 2)        diretos.push(Object.assign({ grupo: L, pos: idx + 1 }, t));
      else if (idx === 2) terceiros.push(Object.assign({ grupo: L, pos: 3 }, t));
    });
  });
  terceiros.sort((a, b) => (b.pontos - a.pontos) || (b.saldo - a.saldo) || (b.gf - a.gf));
  const faltam = Math.max(0, ALVO - diretos.length);
  return { classificacao: classif, classificados: diretos.concat(terceiros.slice(0, faltam)) };
}

// Simula UMA rodada da liga (confrontos diretos) e devolve o payload do round:results.
function simularUmaRodada(sala) {
  sala.rodadaAtual++;
  const rodada   = sala.rodadaAtual;
  const isUltima = rodada >= sala.totalRodadas;

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
    const resultado  = simularPartida(homeElenco, { jogadores: awayElenco }, true);
    const gHome = resultado.gMeus, gAway = resultado.gAdv;

    const sh = sala.resultados[home.userId];
    const sa = sala.resultados[away.userId];
    sh.gf += gHome; sh.ga += gAway;
    sa.gf += gAway; sa.ga += gHome;
    if      (gHome > gAway) { sh.vitorias++; sa.derrotas++; }
    else if (gHome < gAway) { sa.vitorias++; sh.derrotas++; }
    else                    { sh.empates++;  sa.empates++;  }

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
      gHome, gAway, fila: resultado.fila,
    });
  }

  const classificacao = sala.jogadores.map(j => {
    const s = sala.resultados[j.userId] || { vitorias:0, empates:0, derrotas:0, gf:0, ga:0 };
    return {
      userId: j.userId, username: j.username, nomeDoTime: j.nomeDoTime, ehBot: !!j.ehBot,
      vitorias: s.vitorias, empates: s.empates, derrotas: s.derrotas, gf: s.gf, ga: s.ga,
      jogos:  s.vitorias + s.empates + s.derrotas,
      pontos: s.vitorias * 3 + s.empates,
      saldo:  s.gf - s.ga,
    };
  }).sort((a, b) => (b.pontos - a.pontos) || (b.saldo - a.saldo) || (b.gf - a.gf));

  const timeDoJogador = {};
  sala.jogadores.forEach(j => { (j.picks || []).forEach(p => { if (p && p.nome) timeDoJogador[p.nome] = j.nomeDoTime; }); });
  const artilharia   = Object.entries(sala.statsGols).sort((a, b) => b[1]-a[1]).slice(0,18).map(([nome,gols])    => ({ nome, gols,    time: timeDoJogador[nome] || '' }));
  const assistencias = Object.entries(sala.statsAssists).sort((a, b) => b[1]-a[1]).slice(0,18).map(([nome,assists]) => ({ nome, assists, time: timeDoJogador[nome] || '' }));

  const proxFix = sala.calendario[rodada] || [];
  const proxima = {
    rodada: rodada + 1,
    jogos: proxFix.map(par => {
      const h = mapaJog[par[0]] || {}, a = mapaJog[par[1]] || {};
      return { homeUid: par[0], homeNome: h.nomeDoTime, homeBot: !!h.ehBot, awayUid: par[1], awayNome: a.nomeDoTime, awayBot: !!a.ehBot };
    }),
  };

  return {
    rodada, isUltima,
    payload: { rodada, total: sala.totalRodadas, resultados: resultadosRodada, classificacao, artilharia, assistencias, proxima },
  };
}

// ── C2: Mata-mata online ─────────────────────────────────────────────────────
function forcaDoElenco(picks) {
  const fs = (picks || []).filter(Boolean).map(p => p.forca || 70);
  return fs.length ? fs.reduce((s, f) => s + f, 0) / fs.length : 70;
}
function picksDe(sala, uid) {
  const j = sala.jogadores.find(x => String(x.userId) === String(uid)) || {};
  return (j.picks || []).filter(Boolean);
}
function refTime(sala, uid) {
  const j = sala.jogadores.find(x => String(x.userId) === String(uid)) || {};
  return { userId: uid, nome: j.nomeDoTime || j.username || 'Time', ehBot: !!j.ehBot };
}
function nomesFasesMata(n) {
  const todos = ['16-AVOS', 'OITAVAS', 'QUARTAS', 'SEMIFINAL', 'FINAL'];
  const nr = Math.round(Math.log2(n));   // 32→5, 16→4
  return todos.slice(todos.length - nr);
}

// Constrói a chave a partir de uma lista ORDENADA de sementes (refTimes): pareia
// 1×n, 2×(n-1), … e cria as fases seguintes vazias. Base comum dos dois formatos.
function montarChaveDeSementes(sala, seeds) {
  const n = seeds.length;
  const r0 = [];
  for (let i = 0; i < n / 2; i++) {
    r0.push({ a: seeds[i], b: seeds[n - 1 - i], winner: null, gA: null, gB: null, pen: null });
  }
  const rounds = [r0];
  let qtd = r0.length / 2;
  while (qtd >= 1) {
    const arr = [];
    for (let q = 0; q < qtd; q++) arr.push({ a: null, b: null, winner: null, gA: null, gB: null, pen: null });
    rounds.push(arr);
    if (qtd === 1) break;
    qtd = qtd / 2;
  }
  sala.chave = { rounds, rodadaAtual: 0, fases: nomesFasesMata(n) };
  return sala.chave;
}

// Copa/Liberta: semeia por desempenho (melhor × pior) e monta a chave.
function montarChaveOnline(sala) {
  const cls = (sala.classificados || []).slice()
    .sort((a, b) => (b.pontos - a.pontos) || (b.saldo - a.saldo) || (b.gf - a.gf));
  return montarChaveDeSementes(sala, cls.map(c => refTime(sala, c.userId)));
}

// Champions: 1–8 diretos + 9–16 vencedores do playoff (cada um HERDA a posição do
// melhor do seu confronto). Ordem das sementes é dada — sem reordenar por pontos.
function montarChaveChampions(sala, vencedores) {
  const direto = ((sala.cortesLiga && sala.cortesLiga.direto) || []).slice(0, 8);
  const seeds = direto.map(r => refTime(sala, r.userId))
    .concat((vencedores || []).map(v => refTime(sala, v.userId)));
  return montarChaveDeSementes(sala, seeds);
}

// ── Champions: FASE DE LIGA (formato fiel 25/26) ─────────────────────────────
// 36 times, tabela única, 8 jogos por time (2 de cada um dos 4 potes, 4 casa /
// 4 fora). Cortes: 1–8 oitavas diretas, 9–24 playoff, 25–36 eliminados.
// Núcleo puro (sem efeitos na sala); a fiação no ciclo da sala vem depois.

// Distribui os times em 4 potes por força e monta os jogos da fase de liga.
// times: [{ userId, forca }]. Devolve { potes:[[uid…]x4], jogos:[{home,away}] }.
function montarLigaChampions(times) {
  const N = times.length;
  const porPote = Math.floor(N / 4);
  const ordenados = times.slice().sort((a, b) => (b.forca || 70) - (a.forca || 70));
  const potes = [];
  for (let p = 0; p < 4; p++) potes.push(shuffle(ordenados.slice(p * porPote, (p + 1) * porPote)));

  const jogos = [];
  // Mesmo pote: ciclo direcionado (1 casa vs próximo, 1 fora vs anterior).
  for (let p = 0; p < 4; p++) {
    const T = potes[p], n = T.length;
    for (let k = 0; k < n; k++) jogos.push({ home: T[k].userId, away: T[(k + 1) % n].userId });
  }
  // Potes distintos (i<j): 2 jogos com o outro pote — 1 casa, 1 fora.
  for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
    const A = potes[i], B = potes[j], n = A.length;
    for (let k = 0; k < n; k++) {
      jogos.push({ home: A[k].userId,           away: B[k].userId });
      jogos.push({ home: B[(k + 1) % n].userId, away: A[k].userId });
    }
  }
  return { potes: potes.map(pt => pt.map(t => t.userId)), jogos };
}

function tabelaLigaVazia(times) {
  const t = {};
  times.forEach(x => { t[x.userId] = { userId: x.userId, pts: 0, j: 0, v: 0, e: 0, d: 0, gf: 0, ga: 0 }; });
  return t;
}
function registrarLiga(tab, home, away, gh, ga) {
  const H = tab[home], A = tab[away];
  H.j++; A.j++; H.gf += gh; H.ga += ga; A.gf += ga; A.ga += gh;
  if (gh > ga) { H.v++; A.d++; H.pts += 3; }
  else if (ga > gh) { A.v++; H.d++; A.pts += 3; }
  else { H.e++; A.e++; H.pts++; A.pts++; }
}
function ordenarTabelaLiga(tab) {
  return Object.values(tab)
    .map(r => Object.assign({ sg: r.gf - r.ga }, r))
    .sort((a, b) => (b.pts - a.pts) || (b.sg - a.sg) || (b.gf - a.gf));
}
function cortesChampions(tabelaOrdenada) {
  return {
    direto:     tabelaOrdenada.slice(0, 8),
    playoff:    tabelaOrdenada.slice(8, 24),
    eliminados: tabelaOrdenada.slice(24, 36),
  };
}

// Distribui os 144 jogos em 8 rodadas (1 jogo/time por rodada) via emparelhamento
// perfeito; se um arranjo de potes travar, o chamador re-sorteia.
function chaveJogo(a, b) { return a < b ? a + '-' + b : b + '-' + a; }

function emparelhamentoPerfeito(nodes, adj, maxPassos) {
  const matched = new Set(), pairs = []; let passos = 0;
  function dfs() {
    if (++passos > maxPassos) return false;
    let u = null;
    for (const x of nodes) if (!matched.has(x)) { u = x; break; }
    if (u == null) return true;
    matched.add(u);
    const parts = shuffle([...adj.get(u)].filter(v => !matched.has(v)));
    for (const v of parts) {
      matched.add(v); pairs.push([u, v]);
      if (dfs()) return true;
      pairs.pop(); matched.delete(v);
    }
    matched.delete(u);
    return false;
  }
  return dfs() ? pairs : null;
}

function dividirLigaEmRodadas(times, jogos) {
  const nodes = times.map(t => t.userId);
  const adj = new Map(nodes.map(n => [n, new Set()]));
  const orient = new Map();
  jogos.forEach(g => {
    adj.get(g.home).add(g.away); adj.get(g.away).add(g.home);
    orient.set(chaveJogo(g.home, g.away), { home: g.home, away: g.away });
  });
  const rodadas = [];
  for (let r = 0; r < 8; r++) {
    const m = emparelhamentoPerfeito(nodes, adj, 20000);
    if (!m) return null;
    rodadas.push(m.map(([a, b]) => { adj.get(a).delete(b); adj.get(b).delete(a); return orient.get(chaveJogo(a, b)); }));
  }
  return rodadas;
}

// Fallback garantido (método do círculo): 8 rodadas, adversários distintos, mando
// alternado. Só é usado no caso raríssimo de a divisão com potes não fechar.
function rodadasCirculo(ids) {
  const n = ids.length, fixo = ids[0]; let resto = ids.slice(1);
  const rodadas = [];
  for (let r = 0; r < 8; r++) {
    const linha = [fixo, ...resto], rod = [];
    for (let i = 0; i < n / 2; i++) {
      const a = linha[i], b = linha[n - 1 - i];
      rod.push((r + i) % 2 === 0 ? { home: a, away: b } : { home: b, away: a });
    }
    rodadas.push(rod);
    resto = [resto[resto.length - 1], ...resto.slice(0, resto.length - 1)];
  }
  return rodadas;
}

// Monta a fase de liga completa: { potes, rodadas:[ [ {home,away} x18 ] x8 ] }.
function montarFaseLigaChampions(times) {
  for (let tent = 0; tent < 60; tent++) {
    const { potes, jogos } = montarLigaChampions(times);
    const rodadas = dividirLigaEmRodadas(times, jogos);
    if (rodadas) return { potes, rodadas };
  }
  const { potes } = montarLigaChampions(times);
  return { potes, rodadas: rodadasCirculo(times.map(t => t.userId)) };
}

// Ponte sala → fase de liga: usa os elencos (força média) p/ montar as 8 rodadas no
// MESMO shape do calendário da liga ([ [casa,fora], … ]), consumível por simularUmaRodada.
function montarCalendarioChampions(sala) {
  const times = sala.jogadores.map(j => ({ userId: j.userId, forca: forcaDoElenco(j.picks) }));
  const { potes, rodadas } = montarFaseLigaChampions(times);
  sala.ligaPotes = potes;
  return rodadas.map(rod => rod.map(g => [g.home, g.away]));
}

// ── Champions: PLAYOFF (9º–24º, ida e volta) ─────────────────────────────────
// 16 times (posições 9–24) → 8 confrontos (9×24, 10×23, … 16×17). O melhor
// classificado de cada par decide a VOLTA em casa. Soma dos dois jogos; empate
// no agregado → pênaltis. Vencedores avançam às oitavas.

// Resolve um confronto de ida e volta. alto = melhor seed (manda na volta).
function resolverConfrontoDuasMaos(sala, alto, baixo) {
  const altoEl  = picksDe(sala, alto.userId);
  const baixoEl = picksDe(sala, baixo.userId);
  const ida   = simularPartida(baixoEl, { jogadores: altoEl }, true);   // ida: casa do pior
  const volta = simularPartida(altoEl,  { jogadores: baixoEl }, true);  // volta: casa do melhor
  acumularStats(sala, ida.fila); acumularStats(sala, volta.fila);
  const aggAlto  = ida.gAdv  + volta.gMeus;
  const aggBaixo = ida.gMeus + volta.gAdv;
  let vencedor, pen = null, penSeq = null;
  if (aggAlto > aggBaixo)      vencedor = alto;
  else if (aggBaixo > aggAlto) vencedor = baixo;
  else {
    const d = simularPenaltisOnline(altoEl, baixoEl);
    pen = [d.penA, d.penB]; penSeq = d.seq;
    vencedor = d.vence === 'a' ? alto : baixo;
  }
  return {
    alto, baixo, aggAlto, aggBaixo, pen, penSeq, vencedor,
    ida:   { mandante: baixo.userId, gMandante: ida.gMeus,   gVisitante: ida.gAdv,   fila: ida.fila },
    volta: { mandante: alto.userId,  gMandante: volta.gMeus, gVisitante: volta.gAdv, fila: volta.fila },
  };
}

// Monta os 8 confrontos do playoff a partir das posições 9–24 (cortesLiga.playoff).
function montarPlayoffChampions(sala) {
  const p = (sala.cortesLiga && sala.cortesLiga.playoff) || [];   // 16 linhas, ordem 9..24
  const confrontos = [];
  for (let i = 0; i < Math.floor(p.length / 2); i++) {
    confrontos.push({
      alto:  refTime(sala, p[i].userId),                 // 9..16 (melhor — manda na volta)
      baixo: refTime(sala, p[p.length - 1 - i].userId),  // 24..17 (pior)
    });
  }
  sala.playoffConfrontos = confrontos;
  return confrontos;
}

// Simula o playoff inteiro; devolve confrontos resolvidos + os 8 vencedores.
function simularPlayoffChampions(sala) {
  const confrontos = montarPlayoffChampions(sala).map(c => resolverConfrontoDuasMaos(sala, c.alto, c.baixo));
  return { confrontos, vencedores: confrontos.map(r => r.vencedor) };
}

function acumularStats(sala, fila) {
  (fila || []).forEach(ev => {
    if (ev.lado === 'meu') {
      if (ev.autor && ev.autor.nome)   sala.statsGols[ev.autor.nome]     = (sala.statsGols[ev.autor.nome]     || 0) + 1;
      if (ev.assist && ev.assist.nome) sala.statsAssists[ev.assist.nome] = (sala.statsAssists[ev.assist.nome] || 0) + 1;
    } else {
      if (ev.autorAdv && ev.autorAdv.nome)   sala.statsGols[ev.autorAdv.nome]     = (sala.statsGols[ev.autorAdv.nome]     || 0) + 1;
      if (ev.assistAdv && ev.assistAdv.nome) sala.statsAssists[ev.assistAdv.nome] = (sala.statsAssists[ev.assistAdv.nome] || 0) + 1;
    }
  });
}

// Resolve um confronto eliminatório (sempre define vencedor; empate → pênaltis).
// Cobradores: os 11 mais fortes do elenco, em ordem embaralhada.
function cobradoresSrv(el) {
  const ord = (el || []).filter(Boolean).slice().sort((x, y) => (y.forca || 70) - (x.forca || 70)).slice(0, 11);
  return ord.length ? ord : [{ nome: 'Cobrador', forca: 72 }];
}

function limitaSrv(v, min, max) { return Math.max(min, Math.min(max, v)); }

// Força do goleiro do elenco (por código 'GOL' ou por posição); 72 se não achar.
function forcaGoleiroSrv(el) {
  const g = (el || []).filter(Boolean).filter(p => p.codigo === 'GOL' || (p.posicoes && p.posicoes.indexOf('GOL') >= 0));
  if (g.length) return g.sort((a, b) => (b.forca || 70) - (a.forca || 70))[0].forca;
  return 72;
}

// Bônus de conversão por posição (atacantes/meias ofensivos melhores; defesa/goleiro piores).
function bonusPosicaoSrv(jog) {
  const p = jog.codigo || (jog.posicoes && jog.posicoes[0]) || '';
  if (p === 'ATA' || p === 'PE' || p === 'PD') return 0.06;
  if (p === 'MEI' || p === 'SA') return 0.04;
  if (p === 'ZAG') return -0.05;
  if (p === 'GOL') return -0.08;
  if (p === 'LD' || p === 'LE') return -0.02;
  return 0;
}

// Resultado de uma cobrança: 'gol' | 'defesa' | 'fora' (atacante x goleiro + posição).
// Os limites do pGol são a "zebra" (até o craque erra; goleiro fraco às vezes pega).
function resultadoCobrancaSrv(cob, fGoleiro) {
  const fAt = cob.forca || 72;
  const pGol = limitaSrv(0.74 + (fAt - fGoleiro) * 0.006 + bonusPosicaoSrv(cob), 0.45, 0.90);
  if (Math.random() < pGol) return 'gol';
  const pDefesa = limitaSrv(0.45 + (fGoleiro - fAt) * 0.006, 0.25, 0.78);
  return Math.random() < pDefesa ? 'defesa' : 'fora';
}

// Disputa de pênaltis cobrança a cobrança (best-of-5 + morte súbita), ponderada
// pela força. Devolve placar + sequência [{lado:'a'|'b', nome, ok}] + vencedor.
function simularPenaltisOnline(aEl, bEl) {
  const cobA = cobradoresSrv(aEl), cobB = cobradoresSrv(bEl);
  const golA = forcaGoleiroSrv(aEl), golB = forcaGoleiroSrv(bEl);
  const seq = []; let pA = 0, pB = 0, iA = 0, iB = 0, morte = false, lado = 'a', guard = 0;
  function decidiu() {
    if (!morte) {
      const rA = Math.max(0, 5 - iA), rB = Math.max(0, 5 - iB);
      if (pA > pB + rB) return 'a';
      if (pB > pA + rA) return 'b';
      if (iA >= 5 && iB >= 5) { if (pA > pB) return 'a'; if (pB > pA) return 'b'; morte = true; }
    } else if (iA === iB) { if (pA > pB) return 'a'; if (pB > pA) return 'b'; }
    return null;
  }
  while (guard++ < 60) {
    let cob, res;
    if (lado === 'a') { cob = cobA[iA % cobA.length]; res = resultadoCobrancaSrv(cob, golB); if (res === 'gol') pA++; iA++; }
    else { cob = cobB[iB % cobB.length]; res = resultadoCobrancaSrv(cob, golA); if (res === 'gol') pB++; iB++; }
    seq.push({ lado, nome: cob.nome, resultado: res });
    const d = decidiu();
    if (d) return { penA: pA, penB: pB, seq, vence: d };
    lado = lado === 'a' ? 'b' : 'a';
  }
  return { penA: pA, penB: pB, seq, vence: pA >= pB ? 'a' : 'b' };
}

function resolverConfronto(sala, node) {
  const aEl = picksDe(sala, node.a.userId);
  const bEl = picksDe(sala, node.b.userId);
  const res = simularPartida(aEl, { jogadores: bEl }, false);   // campo neutro
  let gA = res.gMeus, gB = res.gAdv, pen = null, penSeq = null, vencedor;
  if (gA === gB) {
    const d = simularPenaltisOnline(aEl, bEl);
    pen = [d.penA, d.penB];
    penSeq = d.seq;
    vencedor = d.vence === 'a' ? node.a : node.b;
  } else {
    vencedor = gA > gB ? node.a : node.b;
  }
  node.gA = gA; node.gB = gB; node.pen = pen; node.penSeq = penSeq; node.winner = vencedor;
  acumularStats(sala, res.fila);
  return { fila: res.fila, gA, gB, pen, penSeq };
}

// Simula a rodada atual do mata-mata; preenche vencedores e avança a chave.
function simularRodadaMata(sala) {
  const chave = sala.chave;
  const r     = chave.rodadaAtual;
  const jogos = chave.rounds[r] || [];
  const resultados = [];
  jogos.forEach(node => {
    if (!node.a || !node.b || node.winner) return;
    const { fila, gA, gB, pen, penSeq } = resolverConfronto(sala, node);
    resultados.push({
      homeUid: node.a.userId, homeNome: node.a.nome, homeBot: !!node.a.ehBot,
      awayUid: node.b.userId, awayNome: node.b.nome, awayBot: !!node.b.ehBot,
      gHome: gA, gAway: gB, pen, penSeq, fila,
    });
  });
  const ehFinal = (r === chave.rounds.length - 1);
  if (!ehFinal) {
    const prox = chave.rounds[r + 1];
    for (let i = 0; i < jogos.length; i += 2) {
      const slot = prox[i / 2];
      if (slot) { slot.a = (jogos[i] && jogos[i].winner) || null; slot.b = (jogos[i + 1] && jogos[i + 1].winner) || null; }
    }
  }
  chave.rodadaAtual = r + 1;
  const campeao = ehFinal ? (jogos[0] && jogos[0].winner) : null;
  return { resultados, ehFinal, campeao, faseNome: chave.fases[r] };
}

// Ranking final do mata-mata (campeão primeiro; depois por rodada de eliminação).
function rankingMata(sala) {
  const chave = sala.chave;
  const elim = {};
  chave.rounds.forEach((jogos, r) => {
    jogos.forEach(node => {
      if (node.a && node.b && node.winner) {
        const perdedor = String(node.winner.userId) === String(node.a.userId) ? node.b : node.a;
        elim[perdedor.userId] = r;
      }
    });
  });
  const final = chave.rounds[chave.rounds.length - 1][0];
  if (final && final.winner) elim[final.winner.userId] = chave.rounds.length;
  // Jogadores que caíram ANTES do mata-mata (ex.: fase de grupos da Liberta) não aparecem em
  // nenhum confronto da chave. Sem isto, ficam fora do ranking e o "Ver Resumo" fica indisponível
  // para eles. Incluímos todos com rank -1 (abaixo de quem chegou ao mata-mata).
  sala.jogadores.forEach(j => {
    if (!(j.userId in elim)) elim[j.userId] = -1;
  });
  return Object.keys(elim).sort((a, b) => elim[b] - elim[a]).map(uid => {
    const j = sala.jogadores.find(x => String(x.userId) === String(uid)) || {};
    const s = sala.resultados[uid] || {};
    return {
      userId: j.userId, nomeDoTime: j.nomeDoTime, username: j.username, ehBot: !!j.ehBot,
      vitorias: s.vitorias || 0, empates: s.empates || 0, derrotas: s.derrotas || 0, gf: s.gf || 0, ga: s.ga || 0,
    };
  });
}

// Fim da fase de liga da Champions: aplica os cortes (1–8 / 9–24 / 25–36) e emite o
// checkpoint. O playoff (9–24) e a chave a partir das oitavas entram na próxima etapa.
function finalizarFaseLigaChampions(io, sala, code, payload) {
  const classificacao = (payload && payload.classificacao) || [];
  const cortes = cortesChampions(classificacao);
  sala.cortesLiga = cortes;
  sala.status = 'fimLiga';
  io.to(code).emit('champions:faseLigaFim', {
    classificacao,
    direto:     cortes.direto.map(r => r.userId),
    playoff:    cortes.playoff.map(r => r.userId),
    eliminados: cortes.eliminados.map(r => r.userId),
  });
}

// Encerra o campeonato: define campeão, emite game:end, persiste e limpa a sala.
function emitirFimDeJogo(io, sala, code) {
  const campeao = determinarCampeao(sala);
  if (campeao) sala.resultados[campeao.userId].campeao = true;
  sala.status = 'fim';

  // Artilharia/assistências FINAIS (importante p/ "Pular tudo", que não emite as rodadas).
  const timeDoJogador = {};
  sala.jogadores.forEach(j => { (j.picks || []).forEach(p => { if (p && p.nome) timeDoJogador[p.nome] = j.nomeDoTime; }); });
  const artilharia   = Object.entries(sala.statsGols).sort((a, b) => b[1] - a[1]).slice(0, 18).map(([nome, gols])    => ({ nome, gols,    time: timeDoJogador[nome] || '' }));
  const assistencias = Object.entries(sala.statsAssists).sort((a, b) => b[1] - a[1]).slice(0, 18).map(([nome, assists]) => ({ nome, assists, time: timeDoJogador[nome] || '' }));

  io.to(code).emit('game:end', { ranking: buildRanking(sala), artilharia, assistencias, statsGols: sala.statsGols || {}, statsAssists: sala.statsAssists || {} });
  (async () => {
    for (const jogador of sala.jogadores) {
      if (jogador.ehBot || jogador.guest) continue;
      const s = sala.resultados[jogador.userId];
      if (!s) continue;
      try {
        await db.query(
          `INSERT INTO matches (user_id, competicao, modo, vitorias, empates, derrotas, gf, ga, campeao, detalhes)
           VALUES ($1,$2,'online',$3,$4,$5,$6,$7,$8,$9)`,
          [jogador.userId, sala.competicao, s.vitorias, s.empates, s.derrotas, s.gf, s.ga, s.campeao,
           JSON.stringify({ sala: code, rodadas: sala.totalRodadas, numPicks: (jogador.picks || []).length })]
        );
      } catch (e) { console.error('[socket] Erro ao salvar partida:', e); }
    }
    deleteSala(code);
  })();
}

function codigosAceitosServidor(codigo) {
  const mapa = { 'ME': ['ME','PE','MC','MEI'], 'MD': ['MD','PD','MC','MEI'] };
  return mapa[codigo] || [codigo];
}

// ── Turno de Draft ─────────────────────────────────────────────────────────────

function iniciarTurno(io, sala) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  if (sala.indiceTurno >= sala.ordemDraft.length) return;
  const userId  = sala.ordemDraft[sala.indiceTurno];
  const jogador = sala.jogadores.find(j => j.userId === userId);
  const picksTurno = picksDoTurno(sala, sala.indiceTurno);   // 2 (ou 1 no último)

  // Snapshot autoritativo do nº de picks de CADA jogador — vai junto do turno para
  // que a lista de ordem fique idêntica em todos os clientes (sem drift por evento perdido).
  const picksSnapshot = {};
  sala.jogadores.forEach(j => { picksSnapshot[j.userId] = (j.picks || []).filter(Boolean).length; });

  const turnoNum = Math.floor(sala.indiceTurno / sala.jogadores.length) + 1;

  // Vez de um BOT: anuncia a vez e completa os picks do turno após um instante.
  if (jogador && jogador.ehBot) {
    io.to(sala.codigo).emit('draft:turno', {
      userId:      jogador.userId,
      username:    jogador.username,
      nomeDoTime:  jogador.nomeDoTime,
      ehBot:       true,
      segundos:    0,
      pool:        [],
      turnoNum,
      totalTurnos: TURNOS_DRAFT,
      picksTurno,
      picksFeitosTurno: sala.picksNoTurno,
      numPicks:    (jogador.picks || []).filter(Boolean).length,
      picks:       picksSnapshot,
      ordemBase:   sala.ordemBase,
    });
    sala.timerDraft = setTimeout(() => {
      const faltam = picksTurno - sala.picksNoTurno;
      for (let p = 0; p < faltam; p++) botEscolhe(io, sala, jogador);
      sala.picksNoTurno = 0;
      avancarTurno(io, sala);
    }, BOT_PICK_DELAY);
    return;
  }

  // Vagas abertas do jogador (códigos de posição da formação)
  const codigosForm = codigosDaFormacao(jogador?.formacao || '4-3-3');
  const picksJog    = (jogador && jogador.picks) || [];
  const abertos     = [];
  for (let i = 0; i < codigosForm.length; i++) { if (!picksJog[i]) abertos.push(codigosForm[i]); }

  // Seleção por POSIÇÃO: cada vaga aberta recebe a SUA própria amostra de elegíveis,
  // garantindo SEMPRE pelo menos MIN_POR_POS cartas para aquela posição (o cliente
  // filtra o pool pela posição clicada, então cada posição precisa se sustentar sozinha).
  // Um jogador versátil (ex.: LD/ZAG) pode aparecer como opção em mais de uma posição —
  // isso é correto, ele realmente pode jogar nas duas. Só evitamos repetir a MESMA carta
  // dentro da MESMA posição.
  const PER_POS     = 30;   // teto de variedade por posição (6 cartas + re-sorteios)
  const MIN_POR_POS = 6;    // piso: nunca menos de 6 opções para qualquer posição aberta
  const vistosIds = new Set();
  let cards = [];
  abertos.forEach(cod => {
    const elegiveis = shuffle(sala.poolDisponivel.filter(p => podeOcupar(p, cod)));
    const doCod = elegiveis.slice(0, PER_POS);
    let adicionadosNaPos = 0;
    doCod.forEach(p => {
      if (!vistosIds.has(p.id)) { vistosIds.add(p.id); cards.push(p); adicionadosNaPos++; }
    });
    // Se a deduplicação global deixou esta posição com menos de MIN_POR_POS cartas,
    // completa reaproveitando elegíveis desta posição (mesmo que já vistos em outra).
    if (adicionadosNaPos < MIN_POR_POS) {
      for (let i = 0; i < elegiveis.length && adicionadosNaPos < MIN_POR_POS; i++) {
        const p = elegiveis[i];
        if (!cards.includes(p)) { cards.push(p); adicionadosNaPos++; }
      }
    }
    // ÚLTIMO RECURSO: no fim do draft o pool pode não ter 6 jogadores DESTA posição
    // (ex.: goleiros esgotados). Para NUNCA mostrar menos de 6 opções, completa com o
    // resto do pool disponível (fora da posição natural — melhor isso do que travar).
    if (adicionadosNaPos < MIN_POR_POS) {
      const resto = shuffle(sala.poolDisponivel.slice());
      for (let i = 0; i < resto.length && adicionadosNaPos < MIN_POR_POS; i++) {
        const p = resto[i];
        if (!cards.includes(p)) { cards.push(p); adicionadosNaPos++; }
      }
    }
  });

  io.to(sala.codigo).emit('draft:turno', {
    userId,
    username:    jogador?.username,
    nomeDoTime:  jogador?.nomeDoTime,
    segundos:    30,
    pool:        cards,    // candidatos elegíveis (melhores por posição aberta)
    cards,
    turnoNum,
    totalTurnos: TURNOS_DRAFT,
    picksTurno,
    picksFeitosTurno: sala.picksNoTurno,
    numPicks:    (jogador?.picks || []).filter(Boolean).length,
    picks:       picksSnapshot,
    ordemBase:   sala.ordemBase,
  });

  if (jogador?.socketId) {
    io.to(jogador.socketId).emit('draft:yourTurn', { pool: cards, picksTurno, picksFeitosTurno: sala.picksNoTurno });
  }

  agendarAutoPickSnake(io, sala, jogador, 30_000);
}

// Auto-pick do turno snake: se o jogador da vez não escolher no tempo, completa por ele.
// Extraído para função nomeada para poder ser REAGENDADO (janela de graça na desconexão).
function agendarAutoPickSnake(io, sala, jogador, ms) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  const picksTurno = picksDoTurno(sala, sala.indiceTurno);
  sala.timerDraft = setTimeout(() => {
    const faltam = picksTurno - sala.picksNoTurno;
    for (let p = 0; p < faltam && jogador; p++) colocarEmVagaAberta(io, sala, jogador, false);
    sala.picksNoTurno = 0;
    avancarTurno(io, sala);
  }, ms);
}

function avancarTurno(io, sala) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  sala.picksNoTurno = 0;
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
        ehBot:     !!j.ehBot,
        guest:     !!j.guest,
        formacao:  j.formacao || '4-3-3',
        picks:     j.picks    || [],
      })),
    });
    return;
  }

  iniciarTurno(io, sala);
}

// ── Setup principal ─────────────────────────────────────────────────────────────

// ── Formato 'mata' (Copa/Libertadores): grupos + sorteio ─────────────────────
function configGrupos(competicao) {
  if (competicao === 'Copa do Mundo') return { letras: 'ABCDEFGHIJKL'.split(''), porGrupo: 4 };
  // Champions: 4 blocos de 9 (36 times). Os blocos organizam só o DRAFT; a competição usa a
  // fase de liga (montarFaseLigaChampions), independente. 4 blocos → draft mais rápido que 8.
  if (competicao === 'Champions') return { letras: 'ABCD'.split(''), porGrupo: 9 };
  return { letras: 'ABCDEFGH'.split(''), porGrupo: 4 };   // Libertadores
}

// Máximo de participantes (humanos+bots) por formato: liga=20, champions=36, Copa=48.
function maxParticipantes(sala) {
  if (sala.formato === 'champions') return 36;
  if (sala.formato !== 'mata') return TOTAL_TIMES;
  const cfg = configGrupos(sala.competicao);
  return cfg.letras.length * cfg.porGrupo;
}

// Monta o pool de jogadores únicos (melhor edição de cada nome), como no snake draft.
function montarPool(competicao, limite) {
  const todos = loader.getPoolPorCompeticao(competicao);
  const porNome = new Map();
  for (const j of todos) {
    const ex = porNome.get(j.nome);
    if (!ex || (j.forca || 70) > (ex.forca || 70)) porNome.set(j.nome, j);
  }
  return shuffle([...porNome.values()]).slice(0, limite || 800)
           .sort((a, b) => (b.forca || 70) - (a.forca || 70));
}

// Sorteia os participantes nos grupos (round-robin) e dispara a animação no cliente.
function iniciarSorteioGrupos(io, sala) {
  const cfg   = configGrupos(sala.competicao);
  const total = cfg.letras.length * cfg.porGrupo;

  if (!loader.getPoolPorCompeticao(sala.competicao).length) {
    return io.to(sala.codigo).emit('erro', `Sem jogadores para a competição: ${sala.competicao}`);
  }

  // Completa com bots até o total e trava no total (caso raro de excesso de humanos).
  const faltam = Math.max(0, total - sala.jogadores.length);
  if (faltam > 0) {
    const usados = sala.jogadores.map(j => j.nomeDoTime).filter(Boolean);
    sala.jogadores.push(...gerarBots(faltam, usados));
  }
  if (sala.jogadores.length > total) sala.jogadores = sala.jogadores.slice(0, total);

  // Zera picks (humanos voltam a "não pronto", bots seguem prontos).
  sala.jogadores.forEach(j => { j.picks = []; j.pronto = !!j.ehBot; j.cartasVistas = {}; });

  // Round-robin: i % nGrupos → cada grupo recebe exatamente porGrupo participantes.
  const participantes = shuffle(sala.jogadores.map(j => j.userId));
  const grupos = {};
  cfg.letras.forEach(L => { grupos[L] = []; });
  const sequencia = [];
  participantes.forEach((uid, i) => {
    const L = cfg.letras[i % cfg.letras.length];
    grupos[L].push(uid);
    const j = sala.jogadores.find(x => x.userId === uid);
    sequencia.push({
      uid,
      grupo:      L,
      username:   j ? j.username   : '',
      nomeDoTime: j ? j.nomeDoTime : 'Time',
      ehBot:      !!(j && j.ehBot),
    });
  });

  sala.grupos       = grupos;
  sala.ordemSorteio = sequencia;
  sala.status       = 'sorteio';

  io.to(sala.codigo).emit('room:state', buildRoomState(sala));
  io.to(sala.codigo).emit('grupos:sorteio', {
    competicao:  sala.competicao,
    gruposNomes: cfg.letras,
    porGrupo:    cfg.porGrupo,
    sequencia,                       // o cliente acha o próprio uid e destaca o grupo dele
  });
}

// Avança do sorteio para o draft por grupo.
function iniciarDraftGrupos(io, sala) {
  sala.poolDisponivel = montarPool(sala.competicao, 800);
  sala.poolCompleto   = montarPool(sala.competicao, 2500);  // não-esvaziante: cartas do draft por grupo
  sala.grupoDraftIdx  = 0;
  sala.pickRodada     = 0;   // índice do TURNO (0..5); cada turno vale picksDoTurnoGrupo() picks
  sala.status         = 'gdraft';
  io.to(sala.codigo).emit('gdraft:start', {
    grupos:           sala.grupos,
    ordemGrupos:      configGrupos(sala.competicao).letras,
    picksNecessarios: sala.totalPicksNecessarios,
  });
  iniciarTurnoGrupo(io, sala);
}

function grupoDoUid(sala, uid) {
  for (const L in sala.grupos) { if ((sala.grupos[L] || []).indexOf(uid) >= 0) return L; }
  return null;
}

function picksSnapshotDe(sala) {
  const snap = {};
  sala.jogadores.forEach(j => { snap[j.userId] = (j.picks || []).filter(Boolean).length; });
  return snap;
}

// Cartas para um jogador: amostra por posição aberta (igual ao snake draft).
// IDs que o jogador já tem no time (para não oferecer repetidos a ELE).
function idsPicados(jogador) {
  const set = new Set();
  (jogador.picks || []).forEach(p => { if (p && p.id != null) set.add(p.id); });
  return set;
}

function cartasParaJogador(sala, jogador) {
  const codigos = codigosDaFormacao(jogador.formacao || '4-3-3');
  const picks   = jogador.picks || [];
  const jaTenho = idsPicados(jogador);
  const pool    = sala.poolCompleto || sala.poolDisponivel || [];
  const porPosicao = {};
  const feitas = new Set();
  for (let i = 0; i < codigos.length; i++) {
    const cod = codigos[i];
    if (feitas.has(cod)) continue;
    feitas.add(cod);
    // Cartas para toda posição (mesmo preenchidas): permite remanejar e reabrir vaga no turno.
    const eleg = pool.filter(p => podeOcupar(p, cod) && !jaTenho.has(p.id));
    porPosicao[cod] = amostraPosicao(eleg, 12);
  }
  return porPosicao;   // { 'ZAG': [..6-12..], 'LE': [...], ... } — cliente usa direto
}

function emitGdraftPicked(io, sala, jogador, picked, slotIdx, timeout, ehBot, picksTurno, picksFeitosTurno) {
  io.to(sala.codigo).emit('gdraft:picked', {
    userId:     jogador.userId,
    username:   jogador.username,
    nomeDoTime: jogador.nomeDoTime,
    grupo:      grupoDoUid(sala, jogador.userId),
    jogador:    picked,
    slotIndex:  slotIdx,
    numPicks:   (jogador.picks || []).filter(Boolean).length,
    picks:      picksSnapshotDe(sala),
    picksTurno:       (typeof picksTurno === 'number') ? picksTurno : undefined,
    picksFeitosTurno: (typeof picksFeitosTurno === 'number') ? picksFeitosTurno : undefined,
    timeout:    !!timeout,
    ehBot:      !!ehBot,
  });
}

// Coloca um jogador numa vaga aberta válida e emite no canal do draft por grupo.
function colocarEmVagaGrupo(io, sala, jogador, ehBot) {
  const codigos = codigosDaFormacao(jogador.formacao || '4-3-3');
  jogador.picks = jogador.picks || [];
  const abertas = [];
  for (let i = 0; i < codigos.length; i++) { if (!jogador.picks[i]) abertas.push(i); }
  if (!abertas.length) return;
  const slotIdx   = abertas[Math.floor(Math.random() * abertas.length)];
  const jaTenho   = idsPicados(jogador);
  const pool      = sala.poolCompleto || sala.poolDisponivel || [];
  const elegiveis = pool.filter(p => podeOcupar(p, codigos[slotIdx]) && !jaTenho.has(p.id));
  const fonte     = elegiveis.length ? elegiveis : pool.filter(p => !jaTenho.has(p.id));
  const picked    = escolherPickBotDe(fonte);   // bot e timeout: pick justo (não o mais fraco)
  if (!picked) return;
  jogador.picks[slotIdx] = picked;   // sem splice — jogadores podem repetir entre usuários
  emitGdraftPicked(io, sala, jogador, picked, slotIdx, !ehBot, !!ehBot);
}

// Inicia o turno do grupo da vez: todos do grupo escolhem EM PARALELO.
// Quantos picks ainda faltam a um jogador NESTE turno de grupo (limitado pelo total do elenco).
function faltaNoTurnoGrupo(sala, jog, alvo, total) {
  const jaTem = (jog.picks || []).filter(Boolean).length;
  return Math.max(0, Math.min(alvo - (sala.picksTurnoPorUid[jog.userId] || 0), total - jaTem));
}

// Cada jogador faz picksDoTurnoGrupo() escolhas (2, ou 1 no último turno) antes de fechar.
function iniciarTurnoGrupo(io, sala) {
  const cfg   = configGrupos(sala.competicao);
  const grupo = cfg.letras[sala.grupoDraftIdx];
  const uids  = sala.grupos[grupo] || [];
  const total = sala.totalPicksNecessarios || 11;
  const alvo  = picksDoTurnoGrupo(sala.pickRodada);   // picks que cada um faz neste turno

  sala.pickedThisTurn   = [];   // uids que JÁ FECHARAM o turno (atingiram o alvo ou já têm 11)
  sala.picksTurnoPorUid = {};   // contador de picks feitos no turno, por uid

  // Quantas picks faltam pro jogador neste turno (limitado pelas vagas restantes até 11).
  const faltaNoTurno = (jog) => faltaNoTurnoGrupo(sala, jog, alvo, total);

  io.to(sala.codigo).emit('gdraft:turnoGrupo', {
    grupo,
    pickNumero:  sala.pickRodada + 1,      // nº do TURNO (1..6)
    totalPicks:  sala.totalPicksNecessarios,
    picksTurno:  alvo,                     // picks deste turno (2 ou 1)
    turnoNum:    sala.pickRodada + 1,
    totalTurnos: TURNOS_DRAFT,
    uids,
    segundos:    30,
    picks:       picksSnapshotDe(sala),
  });

  uids.forEach(uid => {
    const jog = sala.jogadores.find(j => j.userId === uid);
    if (!jog) { sala.pickedThisTurn.push(uid); return; }
    if (jog.ehBot) {
      let faltam = faltaNoTurno(jog);
      for (let p = 0; p < faltam; p++) colocarEmVagaGrupo(io, sala, jog, true);
      sala.picksTurnoPorUid[uid] = alvo;
      sala.pickedThisTurn.push(uid);
    } else if (jog.socketId) {
      io.to(jog.socketId).emit('gdraft:yourPick', {
        grupo,
        porPosicao:       cartasParaJogador(sala, jog),
        picksTurno:       alvo,
        picksFeitosTurno: 0,
      });
    } else {
      let faltam = faltaNoTurno(jog);   // humano desconectado: auto
      for (let p = 0; p < faltam; p++) colocarEmVagaGrupo(io, sala, jog, false);
      sala.picksTurnoPorUid[uid] = alvo;
      sala.pickedThisTurn.push(uid);
    }
  });

  if (sala.pickedThisTurn.length >= uids.length) {
    // grupo resolvido na hora (só bots/desconectados) → pausa pra ficar visível
    sala.timerDraft = setTimeout(() => avancarGrupoDraft(io, sala), GRUPO_PACE);
    return;
  }

  agendarAutoPickGrupo(io, sala, uids, 30_000);
}

// Auto-pick do turno de grupo: quem não escolheu no tempo recebe picks automáticos.
// Extraído para função nomeada para poder ser REAGENDADO (janela de graça na desconexão).
function agendarAutoPickGrupo(io, sala, uids, ms) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  const alvo  = picksDoTurnoGrupo(sala.pickRodada);
  const total = sala.totalPicksNecessarios || 11;
  sala.timerDraft = setTimeout(() => {
    uids.forEach(uid => {
      if (sala.pickedThisTurn.indexOf(uid) >= 0) return;
      const jog = sala.jogadores.find(j => j.userId === uid);
      if (jog) {
        let faltam = faltaNoTurnoGrupo(sala, jog, alvo, total);
        for (let p = 0; p < faltam; p++) colocarEmVagaGrupo(io, sala, jog, false);
      }
      sala.pickedThisTurn.push(uid);
    });
    avancarGrupoDraft(io, sala);
  }, ms);
}

// Passa pro próximo grupo; ao fechar a volta, vai pra próxima rodada de pick.
function avancarGrupoDraft(io, sala) {
  if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
  const cfg = configGrupos(sala.competicao);

  sala.grupoDraftIdx++;
  if (sala.grupoDraftIdx >= cfg.letras.length) {
    sala.grupoDraftIdx = 0;
    sala.pickRodada++;
  }

  if (sala.pickRodada >= TURNOS_DRAFT) {
    sala.status = 'ready';
    sala.jogadores.forEach(j => { j.pronto = !!j.ehBot; });
    io.to(sala.codigo).emit('gdraft:complete', {
      grupos: sala.grupos,
      jogadores: sala.jogadores.map(j => ({
        userId:    j.userId,
        username:  j.username,
        nomeDoTime: j.nomeDoTime,
        ehBot:     !!j.ehBot,
        guest:     !!j.guest,
        formacao:  j.formacao || '4-3-3',
        picks:     j.picks    || [],
        grupo:     grupoDoUid(sala, j.userId),
      })),
    });
    return;
  }
  iniciarTurnoGrupo(io, sala);
}

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

    // Informa ao cliente o SEU userId autoritativo (o mesmo que o servidor usa para
    // checar a vez). Evita divergência com o decode do token no navegador, que era a
    // causa de "achar que é a vez dele" para o jogador errado.
    socket.emit('session:me', { userId, username });

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
          const capacidade = maxParticipantes(sala);
          if (sala.jogadores.length >= capacidade) return socket.emit('erro', `Sala cheia (máx. ${capacidade})`);
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

        // ── RECONEXÃO (Fatia 1: rodada + mata-mata) ──────────────────────────
        // Se a sala já passou do lobby, reenvia ao SOCKET que acabou de (re)entrar um
        // snapshot da fase atual, para o cliente reconstruir a tela certa em vez de
        // ficar preso no lobby. Só para este socket (socket.emit, não broadcast).
        if (sala.status === 'playing') {
          socket.emit('reconnect:state', {
            fase: 'rodada',
            formato: sala.formato,
            competicao: sala.competicao,
            rodada: sala.rodadaAtual,
            totalRodadas: sala.totalRodadas,
            classificacao: montarClassificacaoAtual(sala),
            artilharia:   Object.entries(sala.statsGols).sort((a,b)=>b[1]-a[1]).slice(0,18).map(([nome,gols])=>({nome,gols})),
            assistencias: Object.entries(sala.statsAssists).sort((a,b)=>b[1]-a[1]).slice(0,18).map(([nome,assists])=>({nome,assists})),
            grupos: (sala.formato === 'mata') ? classificacaoTodosGrupos(sala) : null,
          });
        } else if (sala.status === 'mata' && sala.chave) {
          socket.emit('reconnect:state', {
            fase: 'mata',
            formato: sala.formato,
            competicao: sala.competicao,
            rounds: sala.chave.rounds,
            rodadaAtual: sala.chave.rodadaAtual,
            fases: sala.chave.fases,
          });
        } else if (sala.status === 'draft') {
          // Draft snake: contagem de picks por jogador (p/ a lista de ordem), de quem é a vez,
          // e os elencos parciais de todos (p/ reconstruir o campo). Nível A: NÃO reabre cartas.
          const picksSnap = {};
          sala.jogadores.forEach(j => { picksSnap[j.userId] = (j.picks || []).filter(Boolean).length; });
          const daVez = (sala.indiceTurno < (sala.ordemDraft || []).length)
            ? sala.ordemDraft[sala.indiceTurno] : null;
          socket.emit('reconnect:state', {
            fase: 'draft',
            formato: sala.formato,
            competicao: sala.competicao,
            ordemBase: sala.ordemBase || [],
            picks: picksSnap,
            turnoUid: daVez,
            elencos: sala.jogadores.map(j => ({ userId: j.userId, picks: j.picks || [] })),
          });
        } else if (sala.status === 'gdraft') {
          // Draft de grupo: grupo ativo, de quem é a vez no grupo, e os elencos parciais.
          const grupoAtivo = (configGrupos(sala.competicao).letras || [])[sala.grupoDraftIdx] || null;
          socket.emit('reconnect:state', {
            fase: 'gdraft',
            formato: sala.formato,
            competicao: sala.competicao,
            grupos: sala.grupos || {},
            grupoAtivo: grupoAtivo,
            elencos: sala.jogadores.map(j => ({ userId: j.userId, picks: j.picks || [] })),
          });
          // Re-sincroniza o TURNO: se o jogador que voltou está no grupo ativo e ainda NÃO
          // fechou o turno, reenvia o estado do turno e as cartas dele — assim ele volta a
          // poder escolher em vez de ficar travado. (Corrige a trava ao reconectar no draft.)
          const uidsAtivo = (sala.grupos && grupoAtivo) ? (sala.grupos[grupoAtivo] || []) : [];
          const estaNoGrupoAtivo = uidsAtivo.some(u => String(u) === String(userId));
          const jaFechou = (sala.pickedThisTurn || []).some(u => String(u) === String(userId));
          if (estaNoGrupoAtivo && !jaFechou) {
            const jog = sala.jogadores.find(j => j.userId === userId);
            if (jog && !jog.ehBot) {
              const alvo = picksDoTurnoGrupo(sala.pickRodada);
              socket.emit('gdraft:turnoGrupo', {
                grupo: grupoAtivo,
                pickNumero:  sala.pickRodada + 1,
                totalPicks:  sala.totalPicksNecessarios,
                picksTurno:  alvo,
                turnoNum:    sala.pickRodada + 1,
                totalTurnos: TURNOS_DRAFT,
                uids: uidsAtivo,
                segundos:    30,
                picks:       picksSnapshotDe(sala),
              });
              socket.emit('gdraft:yourPick', {
                grupo: grupoAtivo,
                porPosicao:       cartasParaJogador(sala, jog),
                picksTurno:       alvo,
                picksFeitosTurno: (sala.picksTurnoPorUid && sala.picksTurnoPorUid[userId]) || 0,
              });
            }
          }
        } else if (sala.status === 'sorteio') {
          // Sorteio de grupos: manda a sequência completa; o cliente mostra o resultado JÁ
          // preenchido (sem re-animar do zero).
          const cfg = configGrupos(sala.competicao);
          socket.emit('reconnect:state', {
            fase: 'sorteio',
            formato: sala.formato,
            competicao: sala.competicao,
            gruposNomes: cfg.letras,
            porGrupo: cfg.porGrupo,
            sequencia: sala.ordemSorteio || [],
          });
        } else if (sala.status === 'ready') {
          // Tela de elencos (todos confirmando "pronto"): manda os elencos e a contagem.
          socket.emit('reconnect:state', {
            fase: 'ready',
            formato: sala.formato,
            competicao: sala.competicao,
            jogadores: sala.jogadores.map(j => ({
              userId: j.userId, username: j.username, nomeDoTime: j.nomeDoTime,
              formacao: j.formacao, ehBot: !!j.ehBot, picks: j.picks || [], pronto: !!j.pronto,
            })),
            prontos: sala.jogadores.filter(j => j.pronto).length,
            total: sala.jogadores.length,
          });
        }
      } catch (err) {
        console.error('[socket room:join]', err);
        socket.emit('erro', 'Erro ao entrar na sala');
      }
    });

    // ── room:leave — jogador sai da sala explicitamente (botão "Voltar") ───────
    socket.on('room:leave', () => {
      const code = socket.salaAtual;
      if (!code) return;
      const sala = getSala(code);
      if (sala) {
        sala.jogadores = sala.jogadores.filter(j => j.userId !== userId);
        const humanos = sala.jogadores.filter(j => !j.ehBot);
        if (humanos.length === 0) {
          if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
          deleteSala(code);
        } else {
          io.to(code).emit('room:state', buildRoomState(sala));
        }
      }
      socket.leave(code);
      socket.salaAtual = null;
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

      // Copa/Libertadores (mata) e Champions: sorteio de blocos + draft por grupo, em vez do
      // snake do Brasileirão. Na Champions os blocos servem só ao draft (a competição usa fase
      // de liga); a distinção de nº de blocos fica no configGrupos.
      if (sala.formato === 'mata' || sala.formato === 'champions') {
        try { iniciarSorteioGrupos(io, sala); }
        catch (err) { console.error('Erro no sorteio de grupos:', err); socket.emit('erro', 'Erro ao iniciar o sorteio.'); }
        return;
      }

      try {
      // Carrega pool de jogadores a partir dos arquivos estáticos (sem DB)
      const todosJogadores = loader.getPoolPorCompeticao(sala.competicao);
      if (!todosJogadores.length) {
        return socket.emit('erro', `Sem jogadores para a competição: ${sala.competicao}`);
      }

      // Completa a competição com bots até a capacidade do formato (liga=20, champions=36).
      const faltam = Math.max(0, maxParticipantes(sala) - sala.jogadores.length);
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
      sala.ordemBase       = baseOrder;
      sala.poolDisponivel  = pool;
      sala.ordemDraft      = gerarOrdemSnake(baseOrder, TURNOS_DRAFT);
      sala.indiceTurno     = 0;
      sala.picksNoTurno    = 0;
      sala.status          = 'draft';

      io.to(code).emit('room:playerOrder', {
        ordem:       baseOrder,
        nomes:       baseOrder.map(id => sala.jogadores.find(j => j.userId === id)?.username),
        totalTurnos: TURNOS_DRAFT,
      });
      iniciarTurno(io, sala);
      } catch (err) {
        console.error('Erro em room:start:', err);
        socket.emit('erro', 'Erro ao iniciar o draft. Tente novamente.');
      }
    });

    // ── grupos:pular / grupos:avancar — controles do host no sorteio ─────────
    socket.on('grupos:pular', () => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala) return;
      if (sala.hostUserId !== userId) return socket.emit('erro', 'Apenas o host pode pular o sorteio');
      if (sala.status !== 'sorteio')  return;
      io.to(code).emit('grupos:pular');   // todos os clientes pulam a animação para o estado final
    });

    socket.on('grupos:avancar', () => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala) return;
      if (sala.hostUserId !== userId) return socket.emit('erro', 'Apenas o host pode avançar');
      if (sala.status !== 'sorteio')  return;
      try { iniciarDraftGrupos(io, sala); }
      catch (err) { console.error('Erro ao iniciar o draft por grupo:', err); socket.emit('erro', 'Erro ao iniciar o draft.'); }
    });

    // ── gdraft:pick — escolha de um humano no draft por grupo (paralelo) ──────
    socket.on('gdraft:pick', ({ playerId, slotIndex }) => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala || sala.status !== 'gdraft') return;

      const cfg   = configGrupos(sala.competicao);
      const grupo = cfg.letras[sala.grupoDraftIdx];
      const uids  = sala.grupos[grupo] || [];
      const total = sala.totalPicksNecessarios || 11;
      const alvo  = picksDoTurnoGrupo(sala.pickRodada);
      if (uids.indexOf(userId) < 0)                         return socket.emit('erro', 'Não é a vez do seu grupo');
      if ((sala.pickedThisTurn || []).indexOf(userId) >= 0) return socket.emit('erro', 'Você já completou as escolhas desta rodada');

      const jog = sala.jogadores.find(j => j.userId === userId);
      if (!jog) return;
      jog.picks = jog.picks || [];

      const codigos = codigosDaFormacao(jog.formacao || '4-3-3');
      const slot    = Number(slotIndex);
      if (!(slot >= 0 && slot < codigos.length)) return socket.emit('erro', 'Posição inválida');
      if (jog.picks[slot])                       return socket.emit('erro', 'Posição já preenchida');

      const jaTenho = idsPicados(jog);
      if (jaTenho.has(playerId)) return socket.emit('erro', 'Você já tem esse jogador no time');
      const pool   = sala.poolCompleto || sala.poolDisponivel || [];
      const picked = pool.find(p => p.id === playerId);
      if (!picked)                            return socket.emit('erro', 'Jogador não disponível');
      if (!podeOcupar(picked, codigos[slot])) return socket.emit('erro', 'Jogador não joga nessa posição');

      jog.picks[slot] = picked;   // sem splice — pode repetir entre usuários
      sala.picksTurnoPorUid = sala.picksTurnoPorUid || {};
      sala.picksTurnoPorUid[userId] = (sala.picksTurnoPorUid[userId] || 0) + 1;
      const feitosTurno = sala.picksTurnoPorUid[userId];
      emitGdraftPicked(io, sala, jog, picked, slot, false, false, alvo, feitosTurno);

      // Turno incompleto e ainda há vaga (até 11)? Reabre a vez deste jogador (status 1/2).
      const jaTem        = jog.picks.filter(Boolean).length;
      const aindaTemVaga = jaTem < total;
      if (feitosTurno < alvo && aindaTemVaga) {
        io.to(socket.id).emit('gdraft:yourPick', {
          grupo,
          porPosicao:       cartasParaJogador(sala, jog),
          picksTurno:       alvo,
          picksFeitosTurno: feitosTurno,
        });
        return;
      }

      // Jogador fechou o turno.
      sala.pickedThisTurn.push(userId);
      if (sala.pickedThisTurn.length >= uids.length) avancarGrupoDraft(io, sala);
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
      sala.picksNoTurno = (sala.picksNoTurno || 0) + 1;

      const picksTurno = picksDoTurno(sala, sala.indiceTurno);
      io.to(code).emit('draft:pick', {
        userId,
        username:   jog.username,
        nomeDoTime: jog.nomeDoTime,
        jogador:    picked,
        slotIndex:  slot,
        numPicks:   jog.picks.filter(Boolean).length,
        picksTurno,
        picksFeitosTurno: sala.picksNoTurno,
        timeout:    false,
      });

      // Turno incompleto e ainda há vaga? Reabre a vez para o próximo pick (status 1/2).
      const aindaTemVaga = jog.picks.filter(Boolean).length < (sala.totalPicksNecessarios || 11);
      if (sala.picksNoTurno < picksTurno && aindaTemVaga) {
        iniciarTurno(io, sala);
      } else {
        sala.picksNoTurno = 0;
        avancarTurno(io, sala);
      }
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

    // ── gdraft:move — reposiciona/troca no draft POR GRUPO (durante a vez do grupo) ─
    socket.on('gdraft:move', ({ fromSlot, toSlot }) => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala || sala.status !== 'gdraft') return;
      const jog = sala.jogadores.find(j => j.userId === userId);
      if (!jog || !jog.picks) return;
      const codigos = codigosDaFormacao(jog.formacao || '4-3-3');
      const from = Number(fromSlot), to = Number(toSlot);
      if (!(from >= 0 && from < codigos.length && to >= 0 && to < codigos.length) || from === to) return;
      const jogFrom = jog.picks[from];
      if (!jogFrom) return;
      const jogTo = jog.picks[to];
      if (!jogTo) {
        if (!podeOcupar(jogFrom, codigos[to])) return socket.emit('erro', 'Jogador não joga nessa posição');
        jog.picks[to] = jogFrom; jog.picks[from] = undefined;
      } else {
        if (!podeOcupar(jogFrom, codigos[to]) || !podeOcupar(jogTo, codigos[from]))
          return socket.emit('erro', 'Troca inválida para essas posições');
        jog.picks[to] = jogFrom; jog.picks[from] = jogTo;
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
        sala.calendario   = (sala.formato === 'mata')
          ? gerarCalendarioGrupos(sala)
          : (sala.formato === 'champions')
            ? montarCalendarioChampions(sala)
            : gerarCalendario(sala.jogadores.map(j => j.userId));
        sala.totalRodadas = sala.calendario.length || sala.totalRodadas;   // 38 (liga) ou 3 (grupos)
        sala.votosPular   = [];
        io.to(code).emit('round:start', { rodada: 1, total: sala.totalRodadas, formato: sala.formato });
      }
    });

    // ── round:simulate — host avança UMA rodada ───────────────────────────────
    socket.on('round:simulate', async () => {
      const code = socket.salaAtual;
      if (!code) return;
      const sala = getSala(code);
      if (!sala || sala.status !== 'playing') return;
      if (sala.hostUserId !== userId) return;   // só o host avança
      if (sala.rodadaEmAndamento) return;

      sala.rodadaEmAndamento = true;
      try {
        const { isUltima, payload } = simularUmaRodada(sala);
        if (sala.formato === 'mata') payload.grupos = classificacaoTodosGrupos(sala);
        io.to(code).emit('round:results', payload);

        if (isUltima) {
          if (sala.formato === 'mata') {
            // Fim da fase de grupos → apura classificados e monta a chave do mata-mata.
            const apur = apurarClassificados(sala);
            sala.classificados = apur.classificados;
            sala.status = 'mata';
            io.to(code).emit('grupos:fim', { classificacao: apur.classificacao, classificados: apur.classificados });
            montarChaveOnline(sala);
            io.to(code).emit('chave:state', { rounds: sala.chave.rounds, rodadaAtual: sala.chave.rodadaAtual, fases: sala.chave.fases });
          } else if (sala.formato === 'champions') {
            finalizarFaseLigaChampions(io, sala, code, payload);
          } else {
            emitirFimDeJogo(io, sala, code);
          }
        }
      } catch (err) {
        console.error('[socket round:simulate]', err);
        socket.emit('erro', 'Erro na simulação');
      } finally {
        sala.rodadaEmAndamento = false;
      }
    });

    // ── champions:advancePlayoff — host roda o playoff (9–24) e abre as oitavas ─
    socket.on('champions:advancePlayoff', () => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala || sala.status !== 'fimLiga' || !sala.cortesLiga) return;
      if (sala.hostUserId !== userId) return;            // só o host avança
      try {
        const { confrontos, vencedores } = simularPlayoffChampions(sala);
        io.to(code).emit('champions:playoff', { confrontos, vencedores });

        // Oitavas = 8 diretos (1–8) + 8 vencedores do playoff. Daqui pra frente
        // reaproveita o mata-mata existente.
        const linhaPorUid = {};
        (sala.cortesLiga.playoff || []).forEach(r => { linhaPorUid[r.userId] = r; });
        const vencedoresLinhas = vencedores.map(v => linhaPorUid[v.userId]).filter(Boolean);
        sala.classificados = (sala.cortesLiga.direto || []).concat(vencedoresLinhas);

        sala.status = 'mata';
        montarChaveChampions(sala, vencedores);   // semeadura fiel (herda a posição do par)
        io.to(code).emit('chave:state', { rounds: sala.chave.rounds, rodadaAtual: sala.chave.rodadaAtual, fases: sala.chave.fases });
      } catch (err) {
        console.error('[socket champions:advancePlayoff]', err);
        socket.emit('erro', 'Erro ao processar o playoff');
      }
    });

    // ── chave:advance — host avança UMA fase do mata-mata (Copa/Liberta) ───────
    socket.on('chave:advance', () => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala || sala.status !== 'mata' || !sala.chave) return;
      if (sala.hostUserId !== userId) return;            // só o host avança
      if (sala.rodadaEmAndamento) return;
      if (sala.chave.rodadaAtual >= sala.chave.rounds.length) return;   // já acabou

      sala.rodadaEmAndamento = true;
      try {
        const { resultados, ehFinal, campeao, faseNome } = simularRodadaMata(sala);
        // Estatísticas atualizadas (artilharia/assistências da campanha inteira).
        const timeDoJogador = {};
        sala.jogadores.forEach(j => (j.picks || []).forEach(p => { if (p && p.nome) timeDoJogador[p.nome] = j.nomeDoTime; }));
        const artilharia   = Object.entries(sala.statsGols).sort((a, b) => b[1]-a[1]).slice(0,18).map(([nome,gols])    => ({ nome, gols,    time: timeDoJogador[nome] || '' }));
        const assistencias = Object.entries(sala.statsAssists).sort((a, b) => b[1]-a[1]).slice(0,18).map(([nome,assists]) => ({ nome, assists, time: timeDoJogador[nome] || '' }));

        io.to(code).emit('chave:results', {
          fase: faseNome, resultados, artilharia, assistencias,
          rounds: sala.chave.rounds, rodadaAtual: sala.chave.rodadaAtual, fases: sala.chave.fases,
        });

        // Contador "X/Y prontos" (não-bloqueante): zera ao começar a fase.
        sala.prontosRodada = new Set();
        io.to(code).emit('chave:prontos', { x: 0, y: sala.jogadores.filter(j => !j.ehBot).length });

        // Se nenhum humano segue vivo na próxima fase, simula o resto direto.
        let finalCampeao = campeao, acabou = ehFinal;
        if (!ehFinal) {
          const prox = sala.chave.rounds[sala.chave.rodadaAtual] || [];
          const temHumano = prox.some(n => [n.a, n.b].some(t => t && !t.ehBot));
          if (!temHumano) {
            let r2; do { r2 = simularRodadaMata(sala); } while (!r2.ehFinal);
            finalCampeao = r2.campeao; acabou = true;
          }
        }

        if (acabou) {
          sala.status = 'fim';
          const art2 = Object.entries(sala.statsGols).sort((a, b) => b[1]-a[1]).slice(0,18).map(([nome,gols])    => ({ nome, gols,    time: timeDoJogador[nome] || '' }));
          const ass2 = Object.entries(sala.statsAssists).sort((a, b) => b[1]-a[1]).slice(0,18).map(([nome,assists]) => ({ nome, assists, time: timeDoJogador[nome] || '' }));
          io.to(code).emit('game:end', {
            campeao: finalCampeao ? { userId: finalCampeao.userId, nome: finalCampeao.nome, ehBot: !!finalCampeao.ehBot } : null,
            ranking: rankingMata(sala), artilharia: art2, assistencias: ass2, mata: true,
            statsGols: sala.statsGols || {}, statsAssists: sala.statsAssists || {},
            rounds: sala.chave.rounds, rodadaAtual: sala.chave.rodadaAtual, fases: sala.chave.fases,
          });
        }
      } catch (err) {
        console.error('[socket chave:advance]', err);
        socket.emit('erro', 'Erro no mata-mata');
      } finally {
        sala.rodadaEmAndamento = false;
      }
    });

    // ── chave:assisti — um humano terminou de ver a fase (indicador não-bloqueante) ──
    socket.on('chave:assisti', () => {
      const code = socket.salaAtual; const sala = code && getSala(code);
      if (!sala || sala.status !== 'mata') return;
      const eu = sala.jogadores.find(j => String(j.userId) === String(userId) && !j.ehBot);
      if (!eu) return;
      sala.prontosRodada = sala.prontosRodada || new Set();
      sala.prontosRodada.add(String(userId));
      io.to(code).emit('chave:prontos', {
        x: sala.prontosRodada.size,
        y: sala.jogadores.filter(j => !j.ehBot).length,
      });
    });

    // ── round:skipAll — voto p/ pular tudo; com TODOS os humanos, simula o resto ─
    socket.on('round:skipAll', () => {
      const code = socket.salaAtual;
      if (!code) return;

      const sala = getSala(code);
      if (!sala || sala.status !== 'playing') return;
      const jog = sala.jogadores.find(j => j.userId === userId);
      if (!jog || jog.ehBot) return;            // só humanos votam

      sala.votosPular = sala.votosPular || [];
      if (!sala.votosPular.includes(userId)) sala.votosPular.push(userId);
      const humanos = sala.jogadores.filter(j => !j.ehBot).length;
      io.to(code).emit('round:skipVotes', { votos: sala.votosPular.length, total: humanos });

      if (humanos > 0 && sala.votosPular.length >= humanos && !sala.rodadaEmAndamento) {
        sala.rodadaEmAndamento = true;
        try {
          let res;
          do { res = simularUmaRodada(sala); } while (!res.isUltima);
          if (sala.formato === 'mata') {
            if (res && res.payload) { res.payload.grupos = classificacaoTodosGrupos(sala); io.to(code).emit('round:results', res.payload); }
            const apur = apurarClassificados(sala);
            sala.classificados = apur.classificados;
            sala.status = 'mata';
            io.to(code).emit('grupos:fim', { classificacao: apur.classificacao, classificados: apur.classificados });
            montarChaveOnline(sala);
            io.to(code).emit('chave:state', { rounds: sala.chave.rounds, rodadaAtual: sala.chave.rodadaAtual, fases: sala.chave.fases });
          } else if (sala.formato === 'champions') {
            if (res && res.payload) io.to(code).emit('round:results', res.payload);
            finalizarFaseLigaChampions(io, sala, code, res && res.payload);
          } else {
            emitirFimDeJogo(io, sala, code);
          }
        } catch (err) {
          console.error('[socket round:skipAll]', err);
        } finally {
          sala.rodadaEmAndamento = false;
        }
      }
    });

    // ── disconnect ────────────────────────────────────────────────────────────
    socket.on('disconnect', () => {
      const code = socket.salaAtual;
      if (!code) return;
      const sala = getSala(code);
      if (!sala) return;

      if (sala.status === 'lobby') {
        // No lobby, desconectar = SAIR da sala (remove o jogador, não deixa fantasma).
        sala.jogadores = sala.jogadores.filter(j => j.userId !== userId);
      } else {
        // Em draft/jogo, mantém a vaga para permitir reconexão.
        const jog = sala.jogadores.find(j => j.userId === userId);
        if (jog) { jog.conectado = false; jog.socketId = null; }

        // Janela de graça (30s) para reconectar antes do auto-pick assumir, para o jogador não
        // perder a vez por uma queda rápida — e SEM travar a sala (o timeout garante o avanço).
        if (jog && !jog.ehBot) {
          if (sala.status === 'gdraft') {
            const cfg = configGrupos(sala.competicao);
            const grupoAtivo = cfg.letras[sala.grupoDraftIdx];
            const uidsAtivo = (sala.grupos && grupoAtivo) ? (sala.grupos[grupoAtivo] || []) : [];
            const noGrupoAtivo = uidsAtivo.some(u => String(u) === String(userId));
            const jaFechou = (sala.pickedThisTurn || []).some(u => String(u) === String(userId));
            if (noGrupoAtivo && !jaFechou) agendarAutoPickGrupo(io, sala, uidsAtivo, 30_000);
          } else if (sala.status === 'draft') {
            const daVez = sala.ordemDraft[sala.indiceTurno];
            if (String(daVez) === String(userId)) agendarAutoPickSnake(io, sala, jog, 30_000);
          }
        }
      }

      // Se a sala ficou sem humano (presente/conectado), descarta — evita salas órfãs.
      const humanos = sala.jogadores.filter(j => !j.ehBot);
      const algumPresente = sala.status === 'lobby'
        ? humanos.length > 0
        : humanos.some(j => j.conectado);
      if (!algumPresente) {
        if (sala.timerDraft) { clearTimeout(sala.timerDraft); sala.timerDraft = null; }
        deleteSala(code);
        return;
      }

      io.to(code).emit('room:state', buildRoomState(sala));
    });
  });

  return io;
}

// `_champions` expõe o núcleo PURO da fase de liga (sem efeitos de sala/io) para
// testes de regressão. Não altera o comportamento do servidor.
module.exports = {
  setupSocket,
  _champions: {
    montarLigaChampions,
    dividirLigaEmRodadas,
    montarFaseLigaChampions,
    tabelaLigaVazia,
    registrarLiga,
    ordenarTabelaLiga,
    cortesChampions,
    montarPlayoffChampions,
    resolverConfrontoDuasMaos,
    simularPlayoffChampions,
    montarChaveChampions,
  },
  _draft: {
    gerarOrdemSnake,
    picksDoTurno,
    iniciarTurno,
    TURNOS_DRAFT,
    PICKS_POR_RODADA,
  },
  _gdraft: {
    picksDoTurnoGrupo,
    iniciarTurnoGrupo,
    avancarGrupoDraft,
    configGrupos,
    TURNOS_DRAFT,
    PICKS_POR_RODADA,
  },
};
