'use strict';
// Teste de regressão do NÚCLEO da fase de liga da Champions.
// Importa as funções REAIS do servidor (sem duplicar) via module.exports._champions.
// Rodar antes de cada deploy:  node api/socket/champions.test.js
//
// Cobre: montagem dos 8 jogos por time (potes), divisão em 8 rodadas válidas,
// tabela única e os cortes 1–8 / 9–24 / 25–36. NÃO sobe servidor (só usa as
// funções puras). O motor de partida e o mata-mata são testados em outro lugar.

const {
  montarLigaChampions, dividirLigaEmRodadas, montarFaseLigaChampions,
  tabelaLigaVazia, registrarLiga, ordenarTabelaLiga, cortesChampions,
} = require('./index.js')._champions;

let falhas = 0;
function ok(cond, msg) { if (!cond) { falhas++; console.log('  \u2717 ' + msg); } else { console.log('  \u2713 ' + msg); } }

function times36() {
  const t = [];
  for (let i = 1; i <= 36; i++) t.push({ userId: i, forca: 55 + (i * 41) % 40 });
  return t;
}

// ── 1) Fixture: 8 jogos/time, 2 por pote, 4 casa / 4 fora ──
(function () {
  const { potes, jogos } = montarLigaChampions(times36());
  ok(potes.length === 4 && potes.every(p => p.length === 9), 'fixture: 4 potes de 9');
  ok(jogos.length === 144, 'fixture: 144 jogos (36\u00d78/2)');
  const poteDe = {}; potes.forEach((p, idx) => p.forEach(u => { poteDe[u] = idx; }));
  let okJogos = true, okCasa = true, okDist = true, okPote = true, okSelf = true;
  for (let u = 1; u <= 36; u++) {
    const meus = jogos.filter(g => g.home === u || g.away === u);
    if (meus.length !== 8) okJogos = false;
    if (meus.filter(g => g.home === u).length !== 4) okCasa = false;
    const advs = meus.map(g => g.home === u ? g.away : g.home);
    if (new Set(advs).size !== 8) okDist = false;
    if (advs.some(a => a === u)) okSelf = false;
    const c = [0, 0, 0, 0]; advs.forEach(a => c[poteDe[a]]++);
    if (!c.every(x => x === 2)) okPote = false;
  }
  ok(okJogos, 'fixture: cada time joga 8');
  ok(okCasa, 'fixture: 4 casa / 4 fora por time');
  ok(okDist, 'fixture: 8 adversários distintos');
  ok(okPote, 'fixture: 2 adversários de cada pote');
  ok(okSelf, 'fixture: ninguém joga contra si mesmo');
})();

// ── 2) Divisão em 8 rodadas válidas (várias tentativas) ──
(function () {
  let ok8 = true;
  for (let trial = 0; trial < 50; trial++) {
    const times = times36();
    const { rodadas } = montarFaseLigaChampions(times);
    if (rodadas.length !== 8) { ok8 = false; break; }
    for (const rd of rodadas) {
      if (rd.length !== 18) { ok8 = false; break; }
      const vis = new Set();
      rd.forEach(g => { vis.add(g.home); vis.add(g.away); });
      if (vis.size !== 36) { ok8 = false; break; }
    }
  }
  ok(ok8, 'rodadas: 8 matchdays de 18, cada time 1x/rodada (50 tentativas)');
})();

// ── 3) Tabela e cortes ──
(function () {
  const times = times36();
  const { rodadas } = montarFaseLigaChampions(times);
  const tab = tabelaLigaVazia(times);
  rodadas.forEach(rd => rd.forEach(g => {
    const gh = (g.home * 7) % 4, ga = (g.away * 5) % 3;   // placares determinísticos
    registrarLiga(tab, g.home, g.away, gh, ga);
  }));
  const tabela = ordenarTabelaLiga(tab);
  ok(tabela.length === 36, 'tabela: 36 times');
  ok(tabela.every(r => r.j === 8), 'tabela: todos com 8 jogos');
  const ordenada = tabela.every((r, i) => i === 0 ||
    tabela[i - 1].pts > r.pts ||
    (tabela[i - 1].pts === r.pts && (tabela[i - 1].sg > r.sg ||
      (tabela[i - 1].sg === r.sg && tabela[i - 1].gf >= r.gf))));
  ok(ordenada, 'tabela: ordenada por pts \u2192 SG \u2192 GF');
  const c = cortesChampions(tabela);
  ok(c.direto.length === 8 && c.playoff.length === 16 && c.eliminados.length === 12,
    'cortes: 8 (oitavas) / 16 (playoff) / 12 (eliminados)');
})();

console.log('\n' + (falhas === 0
  ? '\u2705 NÚCLEO DA CHAMPIONS OK'
  : '\u274c ' + falhas + ' falha(s) — investigar antes do deploy'));
process.exit(falhas === 0 ? 0 : 1);
