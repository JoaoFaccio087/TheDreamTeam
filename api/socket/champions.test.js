'use strict';
// Teste de regressão do NÚCLEO da Champions online.
// Importa as funções REAIS do servidor (sem duplicar) via module.exports._champions.
// Rodar antes de cada deploy:  node api/socket/champions.test.js
//
// Cobre: fase de liga (potes, 8 rodadas, tabela, cortes), playoff ida/volta
// (mando, agregado, pênaltis no empate) e a semeadura fiel das oitavas. Usa uma
// sala de mentira com elencos válidos; NÃO sobe servidor nem toca no banco.

const {
  montarLigaChampions, dividirLigaEmRodadas, montarFaseLigaChampions,
  tabelaLigaVazia, registrarLiga, ordenarTabelaLiga, cortesChampions,
  montarPlayoffChampions, resolverConfrontoDuasMaos, simularPlayoffChampions,
  montarChaveChampions,
} = require('./index.js')._champions;

let falhas = 0;
function ok(cond, msg) { if (!cond) { falhas++; console.log('  \u2717 ' + msg); } else { console.log('  \u2713 ' + msg); } }

function times36() {
  const t = [];
  for (let i = 1; i <= 36; i++) t.push({ userId: i, forca: 55 + (i * 41) % 40 });
  return t;
}

// Sala de mentira com 36 elencos válidos e os cortes já apurados (direto/playoff/eliminados).
// Os elencos têm jogadores com {nome, forca, posicoes} — o suficiente p/ o simularPartida rodar.
const POS_XI = ['GOL', 'ZAG', 'ZAG', 'LD', 'LE', 'VOL', 'MEI', 'MEI', 'PE', 'PD', 'ATA'];
function elencoFake(uid, forcaBase) {
  return POS_XI.map((p, i) => ({ nome: 'J' + uid + '_' + i, forca: forcaBase + (i % 6), posicoes: [p] }));
}
function salaFake() {
  const jogadores = [];
  for (let i = 1; i <= 36; i++) {
    jogadores.push({ userId: i, nomeDoTime: 'Time ' + i, ehBot: false, picks: elencoFake(i, 58 + (i % 28)) });
  }
  const linhas = jogadores.map((j, idx) => ({ userId: j.userId, pts: 36 - idx, sg: 0, gf: 0 }));
  return {
    jogadores, statsGols: {}, statsAssists: {},
    cortesLiga: { direto: linhas.slice(0, 8), playoff: linhas.slice(8, 24), eliminados: linhas.slice(24, 36) },
  };
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

// ── 4) Playoff: montagem dos 8 confrontos (9×24, 10×23, … 16×17) ──
(function () {
  const sala = salaFake();
  const pl = sala.cortesLiga.playoff;
  const confrontos = montarPlayoffChampions(sala);
  ok(confrontos.length === 8, 'playoff: 8 confrontos');
  let okPar = true;
  for (let i = 0; i < 8; i++) {
    if (confrontos[i].alto.userId !== pl[i].userId) okPar = false;       // 9..16 = melhor
    if (confrontos[i].baixo.userId !== pl[15 - i].userId) okPar = false; // 24..17 = pior
  }
  ok(okPar, 'playoff: pareamento 9×24, 10×23, … 16×17 (melhor × pior)');
})();

// ── 5) Confronto ida/volta: mando correto + sempre define vencedor ──
(function () {
  let okMando = true, okVenc = true, okEmpatePen = true, viuEmpate = false;
  for (let t = 0; t < 80; t++) {
    const sala = salaFake();
    const c = montarPlayoffChampions(sala)[0];
    const r = resolverConfrontoDuasMaos(sala, c.alto, c.baixo);
    if (r.ida.mandante !== c.baixo.userId) okMando = false;   // ida na casa do pior
    if (r.volta.mandante !== c.alto.userId) okMando = false;  // volta na casa do melhor
    if (r.vencedor.userId !== c.alto.userId && r.vencedor.userId !== c.baixo.userId) okVenc = false;
    if (r.aggAlto === r.aggBaixo) { viuEmpate = true; if (!r.penSeq) okEmpatePen = false; }
  }
  ok(okMando, 'ida/volta: ida na casa do pior, volta na casa do melhor');
  ok(okVenc, 'ida/volta: sempre define um vencedor do confronto (80 sorteios)');
  ok(!viuEmpate || okEmpatePen, 'ida/volta: empate no agregado \u2192 pênaltis decidem');
})();

// ── 6) Playoff completo: 8 vencedores válidos e distintos ──
(function () {
  let okOito = true, okVal = true, okDist = true;
  for (let t = 0; t < 60; t++) {
    const sala = salaFake();
    const { confrontos, vencedores } = simularPlayoffChampions(sala);
    if (vencedores.length !== 8) okOito = false;
    const ids = new Set(vencedores.map(v => v.userId));
    if (ids.size !== 8) okDist = false;
    confrontos.forEach(c => {
      if (c.vencedor.userId !== c.alto.userId && c.vencedor.userId !== c.baixo.userId) okVal = false;
    });
  }
  ok(okOito, 'playoff completo: sempre 8 vencedores (60 sorteios)');
  ok(okVal, 'playoff completo: cada vencedor é o alto ou o baixo do seu confronto');
  ok(okDist, 'playoff completo: 8 vencedores distintos');
})();

// ── 7) Semeadura das oitavas (fiel): 1–8 diretos + 9–16 vencedores em ordem do par ──
(function () {
  const sala = salaFake();
  const direto = sala.cortesLiga.direto;                          // seeds 0..7
  const vencedores = [];                                          // seeds 8..15 (1 por confronto)
  for (let i = 0; i < 8; i++) vencedores.push({ userId: 100 + i, nome: 'V' + i, ehBot: false });
  // injeta os vencedores como jogadores p/ o refTime resolver o nome
  vencedores.forEach(v => sala.jogadores.push({ userId: v.userId, nomeDoTime: v.nome, picks: elencoFake(v.userId, 70) }));

  montarChaveChampions(sala, vencedores);
  const ch = sala.chave;
  ok(ch && ch.rounds && ch.rounds[0].length === 8, 'chave: oitavas com 8 jogos (16 times)');
  ok(ch.fases && ch.fases[0] === 'OITAVAS' && ch.fases[ch.fases.length - 1] === 'FINAL', 'chave: fases OITAVAS…FINAL');

  // r0 deve parear seed i × seed (15-i): direto[i] × vencedor[7-i]
  let okSeed = true;
  for (let i = 0; i < 8; i++) {
    if (ch.rounds[0][i].a.userId !== direto[i].userId) okSeed = false;
    if (ch.rounds[0][i].b.userId !== vencedores[7 - i].userId) okSeed = false;
  }
  ok(okSeed, 'chave: diretos nas seeds 1–8 e vencedores nas 9–16, pareados melhor × pior');

  const proxVazias = ch.rounds.slice(1).every(r => r.every(j => j.a === null && j.b === null));
  ok(proxVazias, 'chave: fases seguintes começam vazias');
})();

console.log('\n' + (falhas === 0
  ? '\u2705 NÚCLEO DA CHAMPIONS OK'
  : '\u274c ' + falhas + ' falha(s) — investigar antes do deploy'));
process.exit(falhas === 0 ? 0 : 1);
