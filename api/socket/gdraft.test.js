'use strict';
// Teste de regressão do draft POR GRUPO (Copa/Libertadores) com 2 picks por turno.
// Dirige um draft de grupos inteiro (todos bots) pelas funções REAIS do servidor — com
// setTimeout síncrono — e confere a estrutura (6 turnos: 2,2,2,2,2,1 = 11) e os 11 picks
// por usuário, para Copa (12 grupos de 4 = 48) e Libertadores (8 grupos de 4 = 32).
// Rodar antes de deploys:  node api/socket/gdraft.test.js

let fila = [];
global.setTimeout = (cb) => { fila.push(cb); return 0; };
global.clearTimeout = () => {};

const { _gdraft } = require('./index.js');
const { picksDoTurnoGrupo, iniciarTurnoGrupo, configGrupos, TURNOS_DRAFT, PICKS_POR_RODADA } = _gdraft;

const io = { to: () => ({ emit: () => {} }) };
const TODAS = ['GOL', 'ZAG', 'LD', 'LE', 'VOL', 'MEI', 'MC', 'ME', 'MD', 'PE', 'PD', 'ATA'];

// Sala fake já no estado 'gdraft': pool injetado (sem loader), grupos montados, turno 0.
function salaGruposFake(competicao) {
  const cfg   = configGrupos(competicao);
  const total = cfg.letras.length * cfg.porGrupo;
  const jogadores = [];
  for (let i = 1; i <= total; i++) {
    jogadores.push({ userId: i, username: 'Bot' + i, nomeDoTime: 'T' + i, ehBot: true, formacao: '4-3-3', picks: [] });
  }
  const pool = [];
  for (let k = 0; k < 2500; k++) pool.push({ id: 'p' + k, nome: 'J' + k, posicoes: TODAS.slice(), forca: 60 + (k % 35) });

  const grupos = {};
  let idx = 0;
  cfg.letras.forEach(L => { grupos[L] = jogadores.slice(idx, idx + cfg.porGrupo).map(j => j.userId); idx += cfg.porGrupo; });

  return {
    codigo: 'TEST', competicao, formato: 'mata', status: 'gdraft',
    jogadores, grupos,
    poolDisponivel: pool, poolCompleto: pool,
    grupoDraftIdx: 0, pickRodada: 0, totalPicksNecessarios: 11,
    pickedThisTurn: [], picksTurnoPorUid: {}, timerDraft: null,
  };
}
function drena() { let g = 0; while (fila.length && g++ < 1e7) fila.shift()(); }

let falhas = 0;
function ok(c, m) { if (!c) { falhas++; console.log('  \u2717 ' + m); } else { console.log('  \u2713 ' + m); } }

ok(JSON.stringify(PICKS_POR_RODADA) === JSON.stringify([2, 2, 2, 2, 2, 1]), 'estrutura: 2,2,2,2,2,1 (= 11 picks)');
ok(TURNOS_DRAFT === 6, 'estrutura: 6 turnos por usuário');
const seqG = [];
for (let t = 0; t < 6; t++) seqG.push(picksDoTurnoGrupo(t));
ok(JSON.stringify(seqG) === JSON.stringify([2, 2, 2, 2, 2, 1]), 'picksDoTurnoGrupo(0..5) = 2,2,2,2,2,1');

[['Copa do Mundo', 48], ['Libertadores', 32]].forEach(([comp, esperado]) => {
  const sala = salaGruposFake(comp);
  ok(sala.jogadores.length === esperado, comp + ': ' + esperado + ' participantes (' + Object.keys(sala.grupos).length + ' grupos de 4)');

  fila = [];
  iniciarTurnoGrupo(io, sala);   // pontapé do 1º turno; o resto se encadeia via setTimeout
  drena();

  const counts = sala.jogadores.map(j => j.picks.filter(Boolean).length);
  ok(counts.every(c => c === 11), comp + ': todos terminam com 11 picks');
  ok(counts.reduce((a, b) => a + b, 0) === esperado * 11, comp + ': total de picks = N\u00d711 (' + (esperado * 11) + ')');
  ok(sala.status === 'ready', comp + ': status \u2192 ready ao fim do draft');
  // Sem repetição de jogador no mesmo time (ids distintos por usuário).
  const semDup = sala.jogadores.every(j => {
    const ids = j.picks.filter(Boolean).map(p => p.id);
    return new Set(ids).size === ids.length;
  });
  ok(semDup, comp + ': nenhum time tem jogador repetido');
});

console.log('\n' + (falhas === 0 ? '\u2705 GDRAFT 2-POR-TURNO OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
