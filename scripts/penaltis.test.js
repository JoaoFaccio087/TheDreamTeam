'use strict';
// penaltis.test.js — audita o modelo DENTRO do js/penaltis.js real (não a bancada).
// Se a calibragem não sobreviver ao código de produção, ela não vale nada.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj/TheDreamTeam';

const dom = new JSDOM('<!DOCTYPE html><body></body>', { pretendToBeVisual: true });
global.window = dom.window; global.document = dom.window.document;
dom.window.eval(fs.readFileSync(path.join(RAIZ, 'js/penaltis.js'), 'utf8'));
const P = dom.window.Penaltis;

let falhas = 0;
function ok(c, m) { if (!c) { falhas++; console.log('  \u2717 ' + m); } else console.log('  \u2713 ' + m); }

console.log('\n\u2500\u2500 API exposta \u2500\u2500');
['cobrar', 'raioDe', 'alvoCPU', 'decidiu', 'MIRA', 'disputar'].forEach(k =>
  ok(P[k] !== undefined, 'Penaltis.' + k + ' existe'));

// O modelo de HOJE (js/simulacao.js:resultadoCobranca). É o alvo a bater.
function pGolAtual(fAt, fGol) {
  return Math.max(0.58, Math.min(0.93, 0.80 + (fAt - fGol) * 0.005));
}

const ZONAS = [
  ['ângulo esq. alto',  -0.82, 0.60], ['ângulo dir. alto',  0.82, 0.60],
  ['canto esq. baixo',  -0.82, 0.12], ['canto dir. baixo',  0.82, 0.12],
  ['meio alto',          0.00, 0.60], ['meio rasteiro',     0.00, 0.10],
  ['meia-altura esq.',  -0.50, 0.35], ['meia-altura dir.',  0.50, 0.35],
];

function medirZona(ax, ay, fAt, fGol, n) {
  let g = 0;
  for (let i = 0; i < n; i++) if (P.cobrar(ax, ay, fAt, fGol).resultado === 'gol') g++;
  return g / n;
}
function medirTudo(fAt, fGol, n) {
  return ZONAS.map(([, ax, ay]) => medirZona(ax, ay, fAt, fGol, n));
}
// A régua certa: um cobrador COMPETENTE. O 0.80 do modelo antigo é um pênalti bem
// batido — não a média de mirar em qualquer lugar do gol, inclusive onde ninguém bate.
function medirCPU(fAt, fGol, n) {
  let g = 0;
  for (let i = 0; i < n; i++) {
    const a = P.alvoCPU();
    if (P.cobrar(a.x, a.y, fAt, fGol).resultado === 'gol') g++;
  }
  return g / n;
}

console.log('\n\u2500\u2500 R1: reproduz o resultadoCobranca antigo? (conquistas dependem disto) \u2500\u2500');
const PARES = [[62, 78], [70, 78], [78, 78], [86, 78], [97, 78], [78, 62], [78, 92], [90, 65], [66, 90]];
let pior = 0;
PARES.forEach(([fa, fg]) => {
  const md = medirCPU(fa, fg, 25000);
  const at = pGolAtual(fa, fg);
  const dif = Math.abs(md - at) * 100;
  pior = Math.max(pior, dif);
  console.log('    atacante ' + String(fa).padStart(2) + ' \u00d7 goleiro ' + String(fg).padStart(2) +
              ':  antigo ' + (at * 100).toFixed(1) + '%  novo ' + (md * 100).toFixed(1) + '%  (' + dif.toFixed(1) + ' p.p.)');
});
// TOLERÂNCIA 3,5 p.p. — não é número redondo por acaso. É o que o modelo geométrico
// entrega SEM violar o requisito do spread (nenhum canto dominante). Os dois objetivos
// CONFLITAM: apertar aqui afrouxa lá — foi medido, não suposto. 3,5 p.p. sobre base 80%
// é ~4% relativo (~0,17 gol numa disputa de 5). Se mexer, rode scripts/calibra-penaltis.js
// e confira as TRÊS restrições juntas, nunca uma isolada.
ok(pior <= 3.5, 'pior divergência ' + pior.toFixed(1) + ' p.p. \u2264 3,5 (não desloca as conquistas)');

console.log('\n\u2500\u2500 R2: superfície de conversão (GRADE DENSA, não 8 pontos escolhidos) \u2500\u2500');
// 8 pontos escolhidos a dedo NÃO validam um espaço 2D contínuo. Foi assim que a v1
// declarou "spread 3,7 p.p." enquanto (0, 0.5) convertia 88,4% — os 8 pontos passaram
// ao largo do ponto quente. O jogador mira onde quiser; o teste tem de olhar em tudo.
function grade(fAt, fGol, n) {
  let teto = 0, onde = null, piso = 1;
  for (let ax = -0.9; ax <= 0.91; ax += 0.15) {
    for (let ay = 0; ay <= 0.708; ay += 0.07) {
      let g = 0;
      for (let i = 0; i < n; i++) if (P.cobrar(ax, ay, fAt, fGol).resultado === 'gol') g++;
      const v = g / n;
      if (v > teto) { teto = v; onde = [ax.toFixed(2), ay.toFixed(2)]; }
      if (v < piso) piso = v;
    }
  }
  return { teto, onde, piso };
}
const G = grade(78, 78, 1400);
console.log('    melhor ponto: ' + (G.teto * 100).toFixed(1) + '% em (' + G.onde[0] + ', ' + G.onde[1] + ')');
console.log('    pior ponto:   ' + (G.piso * 100).toFixed(1) + '%');
// A superfície NÃO é plana, e não deve ser: no futebol existe ponto bom — por isso
// ninguém bate no meio do gol. O que o teste trava é o teto não escapar de vez.
ok(G.teto <= 0.95, 'melhor ponto do gol = ' + (G.teto * 100).toFixed(1) + '% \u2264 95%');

console.log('\n\u2500\u2500 o goleiro continua sendo GENTE? \u2500\u2500');
let foraDaTrave = 0, enterrado = 0, voando = 0, N = 60000;
for (let i = 0; i < N; i++) {
  const g = P.cobrar(0, 0.3, 78, 78).goleiro;
  if (Math.abs(g.x) > 0.851) foraDaTrave++;
  if (g.y < 0.019) enterrado++;
  if (g.y > 0.551) voando++;
}
ok(foraDaTrave === 0, 'nunca fica fora das traves (|kx| \u2264 0,85)');
ok(enterrado === 0, 'nunca fica enterrado no chão (ky \u2265 0,02)');
ok(voando === 0, 'nunca flutua no travessão (ky \u2264 0,55)');
ok(P.MIRA.RX <= 0.6 && P.MIRA.RY <= 0.45, 'alcance de braço humano (RX ' + P.MIRA.RX + ', RY ' + P.MIRA.RY + ')');

console.log('\n\u2500\u2500 a força importa nos DOIS lados \u2500\u2500');
const fraco = medirCPU(62, 78, 25000);
const craque = medirCPU(97, 78, 25000);
ok(craque - fraco > 0.10, 'craque converte ' + ((craque - fraco) * 100).toFixed(1) + ' p.p. a mais que perna-de-pau');
const golRuim = medirCPU(78, 62, 25000);
const golBom = medirCPU(78, 92, 25000);
ok(golRuim - golBom > 0.08, 'goleirão defende ' + ((golRuim - golBom) * 100).toFixed(1) + ' p.p. a mais que frango');

console.log('\n\u2500\u2500 geometria coerente \u2500\u2500');
// BOLA TEM RAIO. Antes o teste (e o modelo) comparavam só o CENTRO da bola com a trave:
// centro em ly=0,70 dava GOL, mas a borda ficava em 0,739 — a bola aparecia EM CIMA do
// travessão e contava. O João viu na tela. Bola passa limpo ou não passa.
const RB = 0.039;
let foraDentro = 0, golInvadindo = 0;
for (let i = 0; i < 60000; i++) {
  const r = P.cobrar((Math.random() * 2 - 1) * 0.95, Math.random() * 0.70, 78, 78);
  const passaLimpo = Math.abs(r.bola.x) + RB <= P.GX && r.bola.y + RB <= P.GY;
  if (r.resultado === 'fora' && passaLimpo) foraDentro++;
  if (r.resultado !== 'fora' && !passaLimpo) golInvadindo++;
}
ok(foraDentro === 0, 'nunca marca FORA com a bola passando limpo');
ok(golInvadindo === 0, 'nunca marca GOL/DEFESA com a bola invadindo a trave/travessão');

console.log('\n\u2500\u2500 raio: o que o cursor vai desenhar \u2500\u2500');
const rCentro = P.raioDe(0, 0, 78), rAngulo = P.raioDe(0.95, 0.68, 78);
ok(rAngulo > rCentro, 'raio no ângulo (' + rAngulo.toFixed(3) + ') > no meio (' + rCentro.toFixed(3) + ') \u2014 a ideia do João');
ok(P.raioDe(0.5, 0.3, 97) < P.raioDe(0.5, 0.3, 62), 'craque tem raio menor que perna-de-pau');

console.log('\n\u2500\u2500 decidiu(): best-of-5 + morte súbita \u2500\u2500');
ok(P.decidiu({ pM: 3, pA: 0, iM: 3, iA: 3, morte: false }) === 'meu', '3\u00d70 em 3 cobranças \u2192 meu (o adv não alcança)');
ok(P.decidiu({ pM: 1, pA: 1, iM: 2, iA: 2, morte: false }) === null, '1\u00d71 em 2 \u2192 continua');
ok(P.decidiu({ pM: 3, pA: 3, iM: 5, iA: 5, morte: false }) === null, '3\u00d73 em 5 \u2192 morte súbita');
ok(P.decidiu({ pM: 1, pA: 0, iM: 6, iA: 6, morte: true }) === 'meu', 'morte súbita: 1\u00d70 na mesma rodada \u2192 meu');
ok(P.decidiu({ pM: 1, pA: 0, iM: 6, iA: 5, morte: true }) === null, 'morte súbita: adv ainda não bateu \u2192 continua');

console.log('\n' + (falhas === 0 ? '\u2705 MODELO DE PÊNALTI OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
