// fase3.test.js — carrega o index.html REAL num DOM e confere que os campos nascem por JS.
'use strict';
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');

const RAIZ = '/home/claude/proj/TheDreamTeam';
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');

const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
const { window } = dom;

// Executa, NA ORDEM DO index.html, a cascata que importa para os campos.
// (Não carregamos dados/socket/online: o alvo do teste é a geração dos marcadores.)
//
// ⚠️ Um eval por arquivo NÃO reproduz o navegador: `const` dentro de eval fica preso
// no escopo daquele eval. Com <script> de verdade, o `const` de topo vai para o escopo
// léxico global e o próximo script o enxerga. Concatenar num eval só reproduz isso.
const ORDEM = ['js/esportes.js', 'js/ui.js', 'js/estado.js', 'js/formacoes.js'];
const cascata = ORDEM
  .map(arq => `/* ===== ${arq} ===== */\n` + fs.readFileSync(path.join(RAIZ, arq), 'utf8'))
  .join('\n;\n');

let leitor;
try {
  // Devolve um leitor para espiar os bindings léxicos de topo (o que o teste precisa ver).
  leitor = window.eval(cascata + '\n;(function(){ return function(expr){ return eval(expr); }; })()');
} catch (err) {
  console.log(`  \u2717 ERRO ao executar a cascata: ${err.message}`);
  console.log(err.stack);
  process.exit(1);
}

let falhas = 0;
function ok(c, m) { if (!c) { falhas++; console.log('  \u2717 ' + m); } else { console.log('  \u2713 ' + m); } }

const d = window.document;

console.log('\n── HTML entregue ao navegador (antes do JS) ──');
const htmlSemJS = new JSDOM(html).window.document;
ok(htmlSemJS.querySelectorAll('.ficha').length === 0,     'index.html não tem mais .ficha cravada');
ok(htmlSemJS.querySelectorAll('.slot-jogo').length === 0, 'index.html não tem mais .slot-jogo cravado');
ok(htmlSemJS.querySelectorAll('.slot-ol').length === 0,   'index.html não tem mais .slot-ol cravado');

console.log('\n── marcadores gerados por estado.js ──');
const campos = [
  ['#campo',         '.ficha',              'indice'],
  ['#campo-jogo',    '.slot-jogo',          'indice'],
  ['#lobby-campo',   '.slot-ol',            'ol'],
  ['#draft-campo',   '.slot-ol.slot-draft', 'ol'],
  ['#elencos-campo', '.slot-ol.slot-elencos', 'ol'],
];
for (const [campo, sel, attr] of campos) {
  const els = d.querySelectorAll(campo + ' > ' + sel);
  ok(els.length === 11, `${campo} → 11 ${sel}`);
  const idxOk = Array.from(els).every((el, i) => el.dataset[attr] === String(i));
  ok(idxOk, `${campo} → data-${attr} de 0 a 10, em ordem`);
}

console.log('\n── enfeites do desenho preservados ──');
for (const campo of ['#campo', '#campo-jogo', '#lobby-campo', '#draft-campo', '#elencos-campo']) {
  const el = d.querySelector(campo);
  const enfeites = el.querySelectorAll('.campo-linha-meio, .campo-circulo, .campo-area').length;
  ok(enfeites === 4, `${campo} → linha do meio, círculo e 2 áreas intactos`);
  // Os marcadores têm de vir DEPOIS dos enfeites (mesma ordem do HTML antigo).
  const filhos = Array.from(el.children);
  const ultimoEnfeite = filhos.map(c => c.classList.contains('campo-linha-meio') || c.classList.contains('campo-circulo') || c.classList.contains('campo-area')).lastIndexOf(true);
  const primeiroSlot = filhos.map(c => c.classList.contains('ficha') || c.classList.contains('slot-jogo') || c.classList.contains('slot-ol')).indexOf(true);
  ok(ultimoEnfeite < primeiroSlot, `${campo} → marcadores vêm depois dos enfeites`);
}

console.log('\n── NodeList estáticas capturadas em estado.js ──');
ok(leitor('fichas.length') === 11,     'estado.js: `fichas` capturou 11 (não veio vazia)');
ok(leitor('slotsJogo.length') === 11,  'estado.js: `slotsJogo` capturou 11 (não veio vazia)');
ok(leitor('escalacao.length') === 11,  'estado.js: `escalacao` = Array(11)');
ok(leitor('N_TITULARES') === 11,       'estado.js: N_TITULARES = 11 (do catálogo)');

console.log('\n── posicionamento (UI.posicionarCampo nos gerados) ──');
leitor("UI.posicionarCampo(fichas, '4-3-3')");
const f0 = d.querySelectorAll('#campo .ficha')[0];
const f10 = d.querySelectorAll('#campo .ficha')[10];
ok(f0.style.top !== '' && f0.style.left !== '', 'ficha 0 recebeu top/left');
ok(f10.style.top !== '' && f10.style.left !== '', 'ficha 10 recebeu top/left');
ok(f0.style.top !== f10.style.top, 'goleiro e atacante em alturas diferentes');

console.log('\n── idempotência (troca de esporte refaz sem duplicar) ──');
leitor("UI.montarCampo(document.getElementById('campo-jogo'), 5, { classe: 'slot-jogo' })");
ok(d.querySelectorAll('#campo-jogo .slot-jogo').length === 5, 'remontar com 5 → 5 slots (não 16)');
ok(d.querySelectorAll('#campo-jogo .campo-circulo').length === 1, 'remontar não apagou os enfeites');
leitor("UI.montarCampo(document.getElementById('campo-jogo'), 11, { classe: 'slot-jogo' })");
ok(d.querySelectorAll('#campo-jogo .slot-jogo').length === 11, 'voltar para 11 → 11 slots');

console.log('\n' + (falhas === 0 ? '\u2705 FASE 3 OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
