'use strict';
// pote.test.js — o modal do pote: filtro, limites e o Avançar travado.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://localhost/' });
const W = dom.window;
W.requestAnimationFrame = (cb) => setTimeout(cb, 0);
W.IntersectionObserver = function (cb) {   // jsdom não tem: desenha tudo na hora
  this.observe = (el) => cb([{ isIntersecting: true, target: el }]);
  this.unobserve = () => {}; this.disconnect = () => {};
};

// Base falsa: 3 clubes × décadas diferentes. O alvo é o FILTRO, não os dados reais.
const STUB = `
  var DADOS_LIBERTADORES=[], DADOS_CHAMPIONS=[], DADOS_BRASILEIRAO=[], DADOS_COPA=[];
  [['São Paulo',1970],['São Paulo',1985],['Boca Juniors',1970],['Boca Juniors',2000],
   ['Peñarol',1960],['Peñarol',1985],['River Plate',2000],['Grêmio',1985],
   ['Santos',1960],['Olimpia',1970],['Nacional',1985],['Cruzeiro',2000],
   ['Flamengo',1980],['Palmeiras',1990],['Vasco',1990],['Internacional',1980],
   ['Atlético-MG',2010],['Corinthians',2010]].forEach(function(p){
    DADOS_LIBERTADORES.push({competicao:'Libertadores',edicao:p[1],clube:p[0],
      jogadores:[{nome:'G',posicoes:['GOL'],forca:80},{nome:'A',posicoes:['ATA'],forca:80}]});
  });
`;
const ORDEM = ['js/dados/dados.js','js/esportes.js','js/escudos.js','js/escudos-cores.js','js/ui.js',
  'js/estado.js','js/formacoes.js','js/regras.js','js/api.js','js/interface.js','js/sorteio.js',
  'js/escalacao.js','js/draft.js','js/livre.js'];
const src = STUB + '\n;\n' + ORDEM.map(a => `/* ${a} */\n` + fs.readFileSync(path.join(RAIZ, a),'utf8')).join('\n;\n');

let ler, falhas = 0;
const ok = (c,m) => { if(!c){falhas++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); };
try { ler = W.eval(src + '\n;(function(){ return function(e){ return eval(e); }; })()'); }
catch (e) { console.log('  \u2717 cascata estourou: ' + e.message + '\n' + e.stack.split('\n')[1]); process.exit(1); }

const D = W.document, $ = (i) => D.getElementById(i);
ler('modoSelecionado = "libertadores"; estiloJogo = "livre"; poteLivre = []');

console.log('\n\u2500\u2500 o modal abre e monta \u2500\u2500');
ok(typeof W.abrirModalPote === 'function', 'abrirModalPote existe (o main.js chama isto)');
W.abrirModalPote();
ok($('modal-pote') && !$('modal-pote').classList.contains('escondida'), 'modal aberto');
ok(D.querySelectorAll('.pote-card').length === 18, '18 edições na grade');
ok($('pote-avancar').disabled, 'Avançar começa TRAVADO (0 de 8)');

console.log('\n\u2500\u2500 o Avançar só libera no mínimo (o pedido do João) \u2500\u2500');
const cards = () => Array.from(D.querySelectorAll('.pote-card'));
for (let i = 0; i < 7; i++) cards()[i].click();
ok(ler('poteLivre.length') === 7, '7 escolhidos');
ok($('pote-avancar').disabled, 'com 7 (abaixo do mínimo) → ainda travado');
cards()[7].click();
ok(ler('poteLivre.length') === 8, '8 escolhidos');
ok(!$('pote-avancar').disabled, 'com 8 (o mínimo) → LIBERA');

console.log('\n\u2500\u2500 o teto de 16 \u2500\u2500');
for (let i = 8; i < 18; i++) cards()[i].click();
ok(ler('poteLivre.length') === 16, 'para em 16 mesmo clicando em 18 (POTE_MAX)');
ok(D.getElementById('pote-grade').classList.contains('pote-cheio'), 'a grade marca "cheio" (cards inertes, não clique morto)');
const antes = ler('poteLivre.slice().join(",")');
cards()[17].click();
ok(ler('poteLivre.slice().join(",")') === antes, 'no teto, clicar em não-escolhido NÃO troca ninguém por baixo dos panos');

console.log('\n\u2500\u2500 desmarcar funciona mesmo no teto \u2500\u2500');
cards()[0].click();
ok(ler('poteLivre.length') === 15, 'desmarcar libera vaga');

console.log('\n\u2500\u2500 busca sem acento \u2500\u2500');
ler('poteLivre = []');
W.abrirModalPote();
$('pote-busca').value = 'sao paulo';
$('pote-busca').oninput();
ok(D.querySelectorAll('.pote-card').length === 2, '"sao paulo" acha "São Paulo" (2 edições) — busca sem acento');
$('pote-busca').value = '1985';
$('pote-busca').oninput();
ok(D.querySelectorAll('.pote-card').length === 4, 'buscar por ANO também funciona (4 de 1985)');
$('pote-busca').value = 'zzzz';
$('pote-busca').oninput();
ok(D.querySelector('.pote-vazio'), 'sem resultado → mensagem, não grade vazia calada');

console.log('\n\u2500\u2500 filtro por década \u2500\u2500');
$('pote-busca').value = ''; $('pote-busca').oninput();
const decs = Array.from(D.querySelectorAll('#pote-decadas [data-dec]')).map(b => b.dataset.dec);
ok(decs.join(',') === ',1960,1970,1980,1985,1990,2000,2010' || decs.length >= 6,
   'décadas saem dos dados: ' + decs.filter(Boolean).join(', '));
const b70 = D.querySelector('#pote-decadas [data-dec="1970"]');
if (b70) { b70.click(); ok(D.querySelectorAll('.pote-card').length === 3, 'década de 1970 → 3 edições'); }

console.log('\n\u2500\u2500 o pote alimenta o sorteio \u2500\u2500');
ler('poteLivre = ["São Paulo|1970","Boca Juniors|1970","Olimpia|1970"]');
ok(ler('universoDoSorteio().length') === 3, 'o dado só rola entre os 3 do pote');

console.log('\n' + (falhas === 0 ? '\u2705 MODAL DO POTE OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
