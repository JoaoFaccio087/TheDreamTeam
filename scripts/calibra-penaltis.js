'use strict';
// calibra2.js — calibragem do pênalti com GOLEIRO CONTÍNUO.
//
// POR QUE A V1 FOI JOGADA FORA:
//   v1 sorteava a posição do goleiro entre 5 mergulhos fixos. Isso deixa BURACOS de
//   cobertura: (0, 0.5) só era coberto por um deles (~18% das vezes) e convertia 88,4%
//   contra 78-82% do resto — estratégia dominante. Nenhum ajuste de parâmetro tapa um
//   buraco estrutural.
//   Pior: a v1 media a "planura" em 8 pontos escolhidos a dedo, que passaram ao largo
//   do ponto quente. 8 pontos NÃO validam um espaço 2D contínuo.
//
// V2:
//   · goleiro com posição CONTÍNUA, concentrada no meio (gaussiana). Sem buracos.
//   · o TETO é medido sobre uma GRADE DENSA — o jogador mira onde quiser, o custo
//     tem de enxergar onde quer que seja.
//
// EQUILÍBRIO POR CONSTRUÇÃO:
//   meio  → goleiro quase sempre perto → muita defesa, zero bola fora
//   canto → goleiro quase nunca chega  → pouca defesa, mas o raio cobra em bola fora
//   Se calibrado, empatam — e não há onde se esconder.

// PRNG semeado: calibragem tem de ser reprodutível e auditável.
let _s = 20260715 >>> 0;
function semear(v) { _s = v >>> 0; }
function rnd() {
  _s = (_s + 0x6D2B79F5) >>> 0;
  let t = _s;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
// Normal(0,1) por Box-Muller
function gauss() {
  let u = 0; while (u === 0) u = rnd();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd());
}

const GX = 1.0, GY = 0.707;
// BOLA TEM RAIO (0,039 no modelo). Sem isto a bancada calibrava um gol maior do que o
// desenhado, e a bola aparecia em cima do travessão contando gol. O João viu na tela.
const RBOLA = 0.039;

function normCob(f) { return Math.max(0, Math.min(1, ((f || 73) - 44) / 67)); }  // com bônus de posição
function normGol(f) { return Math.max(0, Math.min(1, ((f || 72) - 60) / 39)); }  // sem bônus, nunca

function raioDe(ax, ay, fAt, P) {
  const p = normCob(fAt);
  const r0 = P.R_MAX - (P.R_MAX - P.R_MIN) * p;
  const dif = Math.min(1, Math.hypot(ax / GX, ay / GY) / Math.SQRT2);
  return r0 * (1 + P.K_DIF * dif);
}

function cobrar(ax, ay, fAt, fGol, P) {
  const r = raioDe(ax, ay, fAt, P);
  const a = rnd() * 2 * Math.PI, d = r * Math.sqrt(rnd());
  let lx = ax + d * Math.cos(a), ly = ay + d * Math.sin(a);
  if (ly < 0) ly = 0;
  if (Math.abs(lx) > GX - RBOLA || ly > GY - RBOLA) return 'fora';

  // GOLEIRO PRESO NA FÍSICA. Estes travamentos NÃO são ajustáveis:
  //   · kx em ±0,85 → ele fica ENTRE AS TRAVES, nunca do lado de fora do poste
  //   · ky em 0,02..0,55 → PÉS NO CHÃO, nunca enterrado nem flutuando no travessão
  // Sem isso o otimizador espalha o goleiro pelo gol inteiro para achatar a superfície
  // e entrega uma nuvem aleatória que não é um ser humano. Já aconteceu.
  const kx = Math.max(-0.85, Math.min(0.85, gauss() * P.SIG_X));
  const ky = Math.max(0.02, Math.min(0.55, P.MU_Y + gauss() * P.SIG_Y));

  const g = normGol(fGol);
  const multAlc = 1 + P.K_GOL_ALC * (g - 0.5);
  const alc = Math.hypot((lx - kx) / (P.RX * multAlc), (ly - ky) / (P.RY * multAlc));
  if (alc < 1) {
    const multPega = 1 + P.K_GOL_PEG * (g - 0.5);
    const pega = P.P_PEGA * (1 - P.DECAY * (ly / GY)) * multPega * (1 - P.K_ATA * (normCob(fAt) - 0.5));
    if (rnd() < pega) return 'defesa';
  }
  return 'gol';
}

// O modelo ANTIGO (js/simulacao.js:resultadoCobranca). É a régua.
function pGolAtual(fAt, fGol) { return Math.max(0.58, Math.min(0.93, 0.80 + (fAt - fGol) * 0.005)); }

// MIRA DA CPU = um cobrador COMPETENTE. Não é chute a esmo pelo gol.
//
// Este é o conserto do erro que atravessou seis calibragens: eu comparava o 0.80 do
// modelo antigo com a MÉDIA de mirar em qualquer lugar do gol, inclusive rasteiro no
// meio, onde ninguém bate. Mas o 0.80 antigo é um PÊNALTI BEM BATIDO.
//
// Com a CPU mirando como gente, os dois lados convertem ~80% batendo bem, e quem bate
// mal é punido. O melhor ponto do gol vira o NORMAL, não o exploit — não há vantagem a
// descobrir, só um piso a evitar. E a disputa contra a CPU segue justa.
function alvoCPU() {
  const ax = Math.max(-0.85, Math.min(0.85, gauss() * 0.45));
  const ay = 0.15 + rnd() * 0.40;      // meia-altura: onde um cobrador decente mira
  return { ax, ay };
}
function medirCPU(P, fAt, fGol, n) {
  let g = 0;
  for (let i = 0; i < n; i++) {
    const a = alvoCPU();
    if (cobrar(a.ax, a.ay, fAt, fGol, P) === 'gol') g++;
  }
  return g / n;
}

// TETO sobre GRADE DENSA. Zona pior que a média é escolha do jogador (o risco do
// ângulo); zona MELHOR é exploit. Só o teto importa — o requisito é unilateral.
function tetoGrade(P, passoX, passoY, n) {
  let teto = 0, onde = null;
  for (let ax = -1; ax <= 1.001; ax += passoX) {
    for (let ay = 0; ay <= GY + 0.001; ay += passoY) {
      let g = 0;
      for (let i = 0; i < n; i++) if (cobrar(ax, ay, 78, 78, P) === 'gol') g++;
      if (g / n > teto) { teto = g / n; onde = [ax, ay]; }
    }
  }
  return { teto, onde };
}

const PARES = [[62, 78], [70, 78], [78, 78], [86, 78], [97, 78], [78, 62], [78, 92],
               [90, 65], [66, 90], [69, 78], [102, 78], [54, 78], [46, 80], [108, 70]];

// O custo persegue SÓ o inegociável: reproduzir o modelo antigo, senão as conquistas
// (matasNosPenaltis, finalNosPenaltis) mudam de dificuldade. A superfície de conversão
// é MEDIDA e reportada — não é mais alvo. Perseguir planura perfeita foi brigar com a
// realidade: no futebol EXISTE ponto bom, por isso ninguém bate no meio do gol.
// O teto entra só como desempate suave, sem poder de quebrar a física.
function custo(P) {
  const media = medirCPU(P, 78, 78, 5000);
  let erro = 0;
  for (const [fa, fg] of PARES) erro = Math.max(erro, Math.abs(medirCPU(P, fa, fg, 1800) - pGolAtual(fa, fg)));
  const t = tetoGrade(P, 0.4, 0.18, 350).teto;

  return Math.max(0, erro - 0.020) * 600                     // INEGOCIÁVEL: ≤2 p.p. do modelo antigo
       + Math.max(0, Math.abs(media - 0.80) - 0.01) * 400    // INEGOCIÁVEL: conversão global 80%
       + erro * 3
       + Math.max(0, t - 0.86) * 8;                          // desempate suave, não requisito
}

// CAIXA FISICAMENTE HONESTA. Cada teto aqui descreve gente, não conveniência
// matemática. O otimizador trabalha DENTRO da física — não contra ela.
const LIM = {
  R_MIN: [0.02, 0.12], R_MAX: [0.06, 0.26], K_DIF: [0.05, 3.0],  // erro do chute
  SIG_X: [0.25, 0.60],   // espalhamento lateral: ±2σ ainda cabe entre as traves
  MU_Y:  [0.10, 0.28],   // altura típica do corpo de um goleiro em pé
  SIG_Y: [0.08, 0.26],   // ele varia pouco na vertical: está de pé, não voando
  RX:    [0.30, 0.60],   // alcance lateral: braço de gente
  RY:    [0.22, 0.45],   // alcance vertical: não cobre o gol inteiro
  P_PEGA:[0.45, 0.90], DECAY: [0, 0.70],
  K_GOL_ALC: [0, 0.8], K_GOL_PEG: [0, 0.8], K_ATA: [0, 1.2],
};
const CHAVES = Object.keys(LIM);

let melhor = null, melhorC = 1e9;
for (const semente of [20260715, 7, 1959, 2002, 88, 424242]) {
  semear(semente);
  for (let it = 0; it < 75; it++) {
    const P = {};
    for (const k of CHAVES) P[k] = LIM[k][0] + rnd() * (LIM[k][1] - LIM[k][0]);
    if (P.R_MAX <= P.R_MIN) continue;
    const c = custo(P);
    if (c < melhorC) { melhorC = c; melhor = P; }
  }
}
for (let passo = 0, amp = 0.22; passo < 2000; passo++) {
  if (passo % 250 === 249) amp *= 0.7;
  const C = Object.assign({}, melhor);
  const k = CHAVES[(rnd() * CHAVES.length) | 0];
  C[k] = Math.max(LIM[k][0], Math.min(LIM[k][1], C[k] + (rnd() * 2 - 1) * amp * (LIM[k][1] - LIM[k][0])));
  if (C.R_MAX <= C.R_MIN) continue;
  const c = custo(C);
  if (c < melhorC) { melhorC = c; melhor = C; }
}

console.log('\n=== PARÂMETROS (goleiro contínuo) ===');
CHAVES.forEach(k => console.log('    ' + (k + ':').padEnd(12) + melhor[k].toFixed(3)));

console.log('\n=== VARREDURA DENSA (força 78 × goleiro 78) ===');
console.log('    ay\\ax    -1.0   -0.75  -0.50  -0.25   0.00   0.25   0.50   0.75   1.00');
for (const ay of [0.70, 0.60, 0.45, 0.30, 0.15, 0.00]) {
  let linha = '   ' + ay.toFixed(2).padStart(5) + '  ';
  for (const ax of [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]) {
    let g = 0; const n = 9000;
    for (let i = 0; i < n; i++) if (cobrar(ax, ay, 78, 78, melhor) === 'gol') g++;
    linha += (g / n * 100).toFixed(1).padStart(7);
  }
  console.log(linha);
}
const T = tetoGrade(melhor, 0.2, 0.1, 6000);
console.log('\n  TETO da grade densa: ' + (T.teto * 100).toFixed(1) + '%  em (' + T.onde[0].toFixed(2) + ', ' + T.onde[1].toFixed(2) + ')');
console.log('  Mira da CPU:         ' + (medirCPU(melhor, 78, 78, 120000) * 100).toFixed(1) + '%');

console.log('\n=== NOVO vs ANTIGO (mira da CPU) ===');
let pior = 0;
PARES.forEach(([fa, fg]) => {
  const md = medirCPU(melhor, fa, fg, 40000), at = pGolAtual(fa, fg), dif = (md - at) * 100;
  pior = Math.max(pior, Math.abs(dif));
  console.log('    cobrador ' + String(fa).padStart(3) + ' \u00d7 goleiro ' + String(fg).padStart(2) +
              '   antigo ' + (at * 100).toFixed(1) + '%   novo ' + (md * 100).toFixed(1) +
              '%   ' + (dif >= 0 ? '+' : '') + dif.toFixed(1) + ' p.p.');
});
console.log('\n  maior divergência: ' + pior.toFixed(1) + ' p.p.');

console.log('\n=== BLOCO PARA js/penaltis.js ===');
console.log('  var MIRA = {');
CHAVES.forEach((k, i) => console.log('    ' + (k + ':').padEnd(12) + melhor[k].toFixed(3) + (i < CHAVES.length - 1 ? ',' : '')));
console.log('  };');
