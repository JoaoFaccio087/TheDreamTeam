'use strict';
// filtros.test.js — busca, posição e ordenação da lista de jogadores.
// O que mais importa: o estado PADRÃO tem de ser o comportamento de sempre.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://localhost/' });
const W = dom.window;
W.requestAnimationFrame = (cb) => setTimeout(cb, 0);

const STUB = `var DADOS_LIBERTADORES=[],DADOS_CHAMPIONS=[],DADOS_BRASILEIRAO=[],DADOS_COPA=[];`;
const ORDEM = ['js/dados/dados.js','js/esportes.js','js/escudos.js','js/escudos-cores.js','js/ui.js',
  'js/estado.js','js/formacoes.js','js/regras.js','js/api.js','js/interface.js','js/sorteio.js',
  'js/escalacao.js','js/draft.js','js/livre.js'];
const src = STUB + '\n;\n' + ORDEM.map(a => fs.readFileSync(path.join(RAIZ, a),'utf8')).join('\n;\n');
let ler, falhas = 0;
const ok = (c,m) => { if(!c){falhas++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); };
try { ler = W.eval(src + '\n;(function(){ return function(e){ return eval(e); }; })()'); }
catch (e) { console.log('  \u2717 cascata: ' + e.message); process.exit(1); }

const D = W.document, $ = (i) => D.getElementById(i);
// Elenco com acento, para provar a busca sem acento
ler(`_elencoAtual = []; escalacao = Array(11).fill(null); slotsPreenchidos = 0;
     formacaoJogo = '4-3-3'; posicionarSlotsJogo('4-3-3');`);
const ELENCO = `[
  {nome:'Müller', posicoes:['ATA'], forca:88}, {nome:'Ronaldinho', posicoes:['MEI'], forca:94},
  {nome:'Cafu', posicoes:['LD'], forca:89}, {nome:'Taffarel', posicoes:['GOL'], forca:85},
  {nome:'Bebeto', posicoes:['ATA'], forca:87}, {nome:'Dunga', posicoes:['VOL'], forca:84},
  {nome:'Branco', posicoes:['LE'], forca:83}, {nome:'Aldair', posicoes:['ZAG'], forca:86},
  {nome:'Rai', posicoes:['MEI'], forca:90}, {nome:'Zico', posicoes:['MEI'], forca:96}
]`;
ler('construirListaJogadores(' + ELENCO + ')');
ler("listaJogadores.classList.remove('escondida')");
const itens = () => Array.from(D.querySelectorAll('#lista-jogadores .item-jogador'));
// O item é <span.jogador-nome><span.jogador-posicoes><span.jogador-forca>. Antes eu
// extraía com regex do textContent ("TaffarelGOL85") e pegava lixo — tem classe própria.
const nomes = () => itens().map(e => e.querySelector('.jogador-nome').textContent.trim());

console.log('\n\u2500\u2500 o PADRÃO é o comportamento de sempre \u2500\u2500');
ok(itens().length === 10, 'os 10 jogadores aparecem');
ok($('filtro-ordem').value === 'posicao', 'ordem padrão = por posição (como sempre foi)');
ok($('filtro-posicao').value === '', 'posição padrão = todas');
ok(nomes()[0] === 'Taffarel', 'o goleiro vem primeiro (ORDEM_POSICAO intacta)');

console.log('\n\u2500\u2500 busca por nome, sem acento \u2500\u2500');
$('filtro-busca').value = 'muller'; ler('renderListaJogadores()');
ok(itens().length === 1 && nomes()[0] === 'Müller', '"muller" acha "Müller"');
$('filtro-busca').value = 'zzz'; ler('renderListaJogadores()');
ok(D.querySelector('.lista-vazia'), 'sem resultado \u2192 mensagem, não lista vazia calada');
$('filtro-busca').value = ''; ler('renderListaJogadores()');
ok(itens().length === 10, 'limpar a busca volta os 10');

console.log('\n\u2500\u2500 filtro de posição \u2500\u2500');
const opts = Array.from($('filtro-posicao').options).map(o => o.value).filter(Boolean);
ok(opts.join(',') === 'GOL,LE,ZAG,LD,VOL,MEI,ATA',
   'só as posições QUE EXISTEM no elenco: ' + opts.join(', '));
ok(opts.indexOf('PD') < 0, 'não oferece PD (ninguém joga lá) — filtro que zera a tela não é filtro');
$('filtro-posicao').value = 'MEI'; ler('renderListaJogadores()');
ok(itens().length === 3, 'MEI \u2192 3 meias');

console.log('\n\u2500\u2500 ordenar por força \u2500\u2500');
$('filtro-posicao').value = ''; $('filtro-ordem').value = 'forca'; ler('renderListaJogadores()');
ok(nomes()[0] === 'Zico', 'o mais forte (Zico 96) vem primeiro');
ok(nomes()[9] === 'Branco', 'o mais fraco (Branco 83) por último');

console.log('\n\u2500\u2500 a barra acompanha a lista sozinha \u2500\u2500');
$('filtro-ordem').value = 'posicao';
ler("listaJogadores.classList.add('escondida'); _sincronizarFiltros()");
ok($('lista-filtros').classList.contains('escondida'), 'lista escondida \u2192 barra some junto');
ler("listaJogadores.classList.remove('escondida'); _sincronizarFiltros()");
ok(!$('lista-filtros').classList.contains('escondida'), 'lista visível \u2192 barra volta');
ler('construirListaJogadores([{nome:"X",posicoes:["GOL"],forca:80}])');
ok($('lista-filtros').classList.contains('escondida'), 'elenco de 1 \u2192 sem barra (filtrar 1 é ruído)');

console.log('\n' + (falhas === 0 ? '\u2705 FILTROS OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
