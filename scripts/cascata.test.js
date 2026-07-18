'use strict';
// cascata.test.js — sobe a cascata REAL de scripts do index.html (a que não precisa de rede)
// e confere que a carga não estoura e que a escalação funciona ponta a ponta.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj/TheDreamTeam';
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://localhost/' });
const { window } = dom;
window.requestAnimationFrame = (cb) => setTimeout(cb, 0);
window.html2canvas = () => Promise.resolve({ toDataURL: () => '' });
window.io = () => ({ on(){}, emit(){}, close(){} });

// A ordem EXATA do index.html (dados + socket/online ficam de fora: rede/peso).
const STUB_DADOS = "const DADOS_LIBERTADORES=[],DADOS_CHAMPIONS=[],DADOS_BRASILEIRAO=[],DADOS_COPA=[];";
const ORDEM = ['js/dados/dados.js','js/esportes.js','js/escudos.js','js/escudos-cores.js','js/ui.js',
  'js/estado.js','js/formacoes.js','js/regras.js','js/api.js','js/interface.js','js/sorteio.js',
  'js/escalacao.js','js/draft.js'];
const cascata = STUB_DADOS + '\n;\n' + ORDEM.map(a => `/* ${a} */\n` + fs.readFileSync(path.join(RAIZ, a),'utf8')).join('\n;\n');
let leitor, falhas = 0;
function ok(c,m){ if(!c){falhas++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); }
try {
  leitor = window.eval(cascata + '\n;(function(){ return function(e){ return eval(e); }; })()');
  console.log('\n── carga ──');
  ok(true, 'cascata de ' + ORDEM.length + ' scripts subiu sem estourar');
} catch (err) {
  console.log('  \u2717 ERRO na cascata: ' + err.message);
  console.log(err.stack.split('\n').slice(0,4).join('\n'));
  process.exit(1);
}
const d = window.document;
console.log('\n── campos posicionados na carga ──');
const fichas = d.querySelectorAll('#campo .ficha');
ok(fichas.length === 11, '#campo → 11 fichas');
ok(Array.from(fichas).every(f => f.style.top && f.style.left), 'todas as fichas receberam top/left');
ok(Array.from(fichas).every(f => f.textContent.trim() !== ''), 'todas as fichas têm rótulo (GOL/DEF/MEI/ATA)');
ok(fichas[0].textContent.trim() === 'GOL', 'ficha 0 = GOL');

console.log('\n── posicionarSlotsJogo em TODAS as formações ──');
const FORMS = ['4-3-3','4-4-2','4-2-3-1','3-5-2','4-3-2-1','4-5-1','3-4-3','4-1-2-1-2'];
FORMS.forEach(f => {
  leitor(`posicionarSlotsJogo('${f}')`);
  const slots = d.querySelectorAll('#campo-jogo .slot-jogo');
  const posOk = Array.from(slots).every(s => s.style.top && s.style.left);
  const codOk = Array.from(slots).every(s => s.dataset.codigo);
  ok(slots.length === 11 && posOk && codOk, `${f}: 11 slots com posição e data-codigo`);
});

console.log('\n── escalação ponta a ponta (as funções REAIS do jogo) ──');
leitor("posicionarSlotsJogo('4-3-3')");
// alocarJogador(indice) é o que roda quando o usuário clica num slot com jogador selecionado.
leitor("jogadorSelecionado = { nome: 'Teste', posicoes: ['GOL'], forca: 90 }");
leitor('alocarJogador(0)');
ok(leitor('escalacao.length') === 11, 'escalacao continua com 11 vagas');
ok(leitor('escalacao[0] && escalacao[0].nome === "Teste"', 'jogador entrou na vaga 0'), 'alocarJogador(0) preencheu a vaga');
const s0 = d.querySelectorAll('#campo-jogo .slot-jogo')[0];
ok(s0.classList.contains('preenchido'), 'slot 0 → .preenchido');
ok(s0.textContent.includes('Teste'), 'slot 0 mostra o nome do jogador');
ok(leitor('slotsPreenchidos') === 1, 'contador slotsPreenchidos = 1');
// verificarCompleto() lê escalacao.length — o coração do "time completo".
leitor('for (var i=1;i<11;i++) escalacao[i] = { nome:"J"+i, posicoes:["ATA"], forca:80 };');
leitor('slotsPreenchidos = 11');
ok(leitor('escalacao.filter(Boolean).length') === 11, 'XI completo: 11/11 vagas');
ok(leitor("typeof verificarCompleto === 'function'"), 'verificarCompleto existe');
leitor('verificarCompleto()');
ok(!d.getElementById('btn-simular').classList.contains('escondida'), 'XI completo → botão Simular aparece');
console.log('\n' + (falhas === 0 ? '\u2705 CASCATA OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
