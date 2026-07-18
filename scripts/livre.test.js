'use strict';
// livre.test.js — o Jogo Livre sorteia SÓ do pote, e não toca nos outros modos.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://localhost/' });
const W = dom.window;
W.requestAnimationFrame = (cb) => setTimeout(cb, 0);

// Base falsa e pequena: o alvo é o FILTRO, não os dados reais.
const STUB = `
  var DADOS_LIBERTADORES=[], DADOS_CHAMPIONS=[], DADOS_BRASILEIRAO=[], DADOS_COPA=[];
  for (var i=1;i<=30;i++) DADOS_LIBERTADORES.push({
    competicao:'Libertadores', edicao:2000+i, clube:'Clube '+i,
    jogadores:[{nome:'G'+i,posicoes:['GOL'],forca:80},{nome:'Z'+i,posicoes:['ZAG'],forca:80},
               {nome:'A'+i,posicoes:['ATA'],forca:80}]
  });
`;
const ORDEM = ['js/dados/dados.js','js/esportes.js','js/escudos.js','js/escudos-cores.js','js/ui.js',
  'js/estado.js','js/formacoes.js','js/regras.js','js/api.js','js/interface.js','js/sorteio.js',
  'js/escalacao.js','js/draft.js'];
const src = STUB + '\n;\n' + ORDEM.map(a => `/* ${a} */\n` + fs.readFileSync(path.join(RAIZ, a),'utf8')).join('\n;\n');

let ler, falhas = 0;
const ok = (c,m) => { if(!c){falhas++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); };
try {
  ler = W.eval(src + '\n;(function(){ return function(e){ return eval(e); }; })()');
} catch (e) { console.log('  \u2717 cascata estourou: ' + e.message); process.exit(1); }

ler('modoSelecionado = "libertadores"');

console.log('\n\u2500\u2500 os outros modos NÃO mudam: universo = competição inteira \u2500\u2500');
['classico','draft','orcamento'].forEach(function (m) {
  ler('estiloJogo = "' + m + '"; poteLivre = ["Clube 1|2001"]');
  ok(ler('universoDoSorteio().length') === 30,
     m + ': 30 clubes mesmo com poteLivre preenchido (o pote só vale no livre)');
});

console.log('\n\u2500\u2500 Jogo Livre: o dado só cai no pote \u2500\u2500');
ler('estiloJogo = "livre"; poteLivre = ["Clube 3|2003","Clube 7|2007","Clube 9|2009"]');
ok(ler('universoDoSorteio().length') === 3, 'universo = os 3 do pote (não os 30)');
const nomes = ler('universoDoSorteio().map(function(d){return d.clube+"|"+d.edicao}).sort().join(",")');
ok(nomes === 'Clube 3|2003,Clube 7|2007,Clube 9|2009', 'são exatamente os escolhidos: ' + nomes);

console.log('\n\u2500\u2500 o SKIP não fura o pote (era o furo silencioso) \u2500\u2500');
ler('edicaoSorteada = universoDoSorteio()[0]; escalacao = Array(11).fill(null); slotsPreenchidos = 0');
ler('posicionarSlotsJogo("4-3-3")');
const skip = ler('candidatosSkip().map(function(d){return d.clube}).sort().join(",")');
ok(skip.indexOf('Clube 1') < 0 && skip.indexOf('Clube 30') < 0, 'skip não oferece clube de fora: ' + skip);
ok(ler('candidatosSkip().length') <= 2, 'skip fica dentro do pote (\u2264 2: os 3 menos o atual)');

console.log('\n\u2500\u2500 pote vazio no livre = competição inteira (nunca trava o jogo) \u2500\u2500');
ler('poteLivre = []');
ok(ler('universoDoSorteio().length') === 30, 'sem pote montado, o livre não fica sem clube nenhum');

console.log('\n\u2500\u2500 o botão certo para cada estilo \u2500\u2500');
[['classico','btn-rolar'],['draft','btn-comecar-draft'],['orcamento','btn-rolar'],['livre','btn-proximo-livre']]
  .forEach(function (par) {
    ler('estiloJogo = "' + par[0] + '"; poteLivre = []; slotsPreenchidos = 0; aplicarVisibilidadeEstilo()');
    const vis = ['btn-rolar','btn-comecar-draft','btn-proximo-livre']
      .filter(function (id) { return !W.document.getElementById(id).classList.contains('escondida'); });
    ok(vis.length === 1 && vis[0] === par[1], par[0] + ' \u2192 ' + par[1] + (vis.length!==1?' (visíveis: '+vis+')':''));
  });

console.log('\n\u2500\u2500 no livre, "Rolar" só volta com o pote no mínimo \u2500\u2500');
ler('estiloJogo = "livre"; poteLivre = ["a|1","b|2"]; aplicarVisibilidadeEstilo()');
ok(!W.document.getElementById('btn-proximo-livre').classList.contains('escondida'), 'pote de 2 \u2192 ainda "Próximo"');
ler('poteLivre = ["a|1","b|2","c|3","d|4","e|5","f|6","g|7","h|8"]; aplicarVisibilidadeEstilo()');
ok(!W.document.getElementById('btn-rolar').classList.contains('escondida'), 'pote de 8 (o mínimo) \u2192 vira "Rolar"');

console.log('\n\u2500\u2500 o pote MORRE ao voltar para a tela do jogo \u2500\u2500');
// O bug: terminava a campanha, voltava para a home, escolhia Jogo Livre e caía com as
// MESMAS seleções da vez anterior. `poteLivre` não estava no reset de partida.
ler('estiloJogo = "livre"; poteLivre = ["Clube 1|2001","Clube 2|2002","Clube 3|2003"]');
ok(ler('poteLivre.length') === 3, 'antes: pote com 3');
ler('iniciarTelaJogo()');
ok(ler('poteLivre.length') === 0, 'iniciarTelaJogo ZERA o pote (era o bug)');
ok(ler('estiloJogo') === 'classico', 'e volta o estilo para Clássico');
ok(ler('draftIniciado') === false, 'e destrava o draftIniciado');
const vis = ['btn-rolar','btn-comecar-draft','btn-proximo-livre']
  .filter(function (id) { return !W.document.getElementById(id).classList.contains('escondida'); });
ok(vis.length === 1 && vis[0] === 'btn-rolar', 'só o "Rolar" visível ao (re)entrar \u2014 sem botão órfão');
const pil = Array.from(W.document.querySelectorAll('[data-estilo]'))
  .filter(function (p) { return p.classList.contains('pilula-ativa'); }).map(function (p) { return p.dataset.estilo; });
ok(pil.length === 1 && pil[0] === 'classico', 'a pílula ativa volta para Clássico (variável e visual juntos)');

console.log('\n' + (falhas === 0 ? '\u2705 JOGO LIVRE OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
