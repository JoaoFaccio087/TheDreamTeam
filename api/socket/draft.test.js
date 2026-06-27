'use strict';
// Teste de regressão do draft online "snake" com 2 picks por turno.
// Dirige um draft inteiro (todos bots) pelas funções REAIS do servidor — com setTimeout
// síncrono — e confere a estrutura de turnos (5×2 + 1 = 11) e os 11 picks por usuário.
// Rodar antes de deploys:  node api/socket/draft.test.js
// (Cobre a estrutura de turnos e o caminho dos bots. O pick do humano usa o mesmo
//  picksDoTurno + avanço de turno.)

let fila = [];
global.setTimeout = (cb) => { fila.push(cb); return 0; };
global.clearTimeout = () => {};

const { _draft } = require('./index.js');
const { gerarOrdemSnake, picksDoTurno, iniciarTurno, TURNOS_DRAFT, PICKS_POR_RODADA } = _draft;

const io = { to: () => ({ emit: () => {} }) };
const TODAS = ['GOL', 'ZAG', 'LD', 'LE', 'VOL', 'MEI', 'MC', 'ME', 'MD', 'PE', 'PD', 'ATA'];

function salaFake(n) {
  const jogadores = [];
  for (let i = 1; i <= n; i++) {
    jogadores.push({ userId: i, username: 'Bot' + i, nomeDoTime: 'T' + i, ehBot: true, formacao: '4-3-3', picks: [] });
  }
  const pool = [];
  for (let k = 0; k < 700; k++) pool.push({ id: 'p' + k, nome: 'J' + k, posicoes: TODAS.slice(), forca: 60 + (k % 35) });
  const base = jogadores.map(j => j.userId);
  return {
    codigo: 'TEST', jogadores, poolDisponivel: pool, ordemBase: base,
    ordemDraft: gerarOrdemSnake(base, TURNOS_DRAFT), indiceTurno: 0, picksNoTurno: 0,
    status: 'draft', totalPicksNecessarios: 11, timerDraft: null,
  };
}
function drena() { let g = 0; while (fila.length && g++ < 1e6) fila.shift()(); }

let falhas = 0;
function ok(c, m) { if (!c) { falhas++; console.log('  \u2717 ' + m); } else { console.log('  \u2713 ' + m); } }

ok(JSON.stringify(PICKS_POR_RODADA) === JSON.stringify([2, 2, 2, 2, 2, 1]), 'estrutura: 2,2,2,2,2,1 (= 11 picks)');
ok(TURNOS_DRAFT === 6, 'estrutura: 6 turnos por usuário');

[4, 20, 36].forEach(N => {
  const sala = salaFake(N);
  ok(sala.ordemDraft.length === N * 6, 'N=' + N + ': ordem snake = N\u00d76 turnos');
  const seq = [];
  for (let r = 0; r < 6; r++) seq.push(picksDoTurno(sala, r * N));
  ok(JSON.stringify(seq) === JSON.stringify([2, 2, 2, 2, 2, 1]), 'N=' + N + ': picksDoTurno por rodada = 2,2,2,2,2,1');
  fila = []; iniciarTurno(io, sala); drena();
  const counts = sala.jogadores.map(j => j.picks.filter(Boolean).length);
  ok(counts.every(c => c === 11), 'N=' + N + ': todos terminam com 11 picks');
  ok(counts.reduce((a, b) => a + b, 0) === N * 11, 'N=' + N + ': total de picks = N\u00d711 (' + (N * 11) + ')');
});

console.log('\n' + (falhas === 0 ? '\u2705 SNAKE 2-POR-TURNO OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
