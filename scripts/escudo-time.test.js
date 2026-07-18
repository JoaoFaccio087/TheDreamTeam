'use strict';
// escudo-time.test.js — o SEU time tem escudo na classificação (era o clubeRef: null).
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
// runScripts: 'outside-only' faz o eval rodar DENTRO do jsdom. Sem isso ele cai no
// contexto do Node e `getUser` (posto em window) não é visto como global pelo escudos.js.
const dom = new JSDOM('<!DOCTYPE html><body></body>', { url: 'https://localhost/', runScripts: 'outside-only' });
const W = dom.window; global.window = W; global.document = W.document;
// getUser() vem do auth.js (navegador). O escudos.js só o consome — não lê localStorage,
// porque ele também roda em Node e lá localStorage não existe.
W.eval(fs.readFileSync(path.join(RAIZ, 'js/escudos-cores.js'), 'utf8'));
W.eval(fs.readFileSync(path.join(RAIZ, 'js/escudos.js'), 'utf8'));
const E = W.Escudos;
let f = 0; const ok = (c,m) => { if(!c){f++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); };

const EU  = { nome: 'Faccio FC', voce: true, clubeRef: null };
const ADV = { nome: 'Flamengo 2019', voce: false, clubeRef: { clube: 'Flamengo', edicao: 2019 } };

let _user = null;
W.eval('window.getUser = function () { return window.__u || null; };');

console.log('\n\u2500\u2500 sem escudo salvo: nada muda (opt-in) \u2500\u2500');
W.__u = null;
ok(E.porTime(EU, 'brasileirao') === '', 'quem nunca editou continua SEM escudo');
ok(E.porTime(ADV, 'brasileirao').length > 100, 'o adversário tem escudo, como sempre');

console.log('\n\u2500\u2500 com escudo salvo: aparece \u2500\u2500');
W.__u = { username: 'joao', escudo: { padrao: 'listras-v', cores: ['#E30613', '#FFFFFF'], n: 4 } };
const meu = E.porTime(EU, 'brasileirao');
ok(meu.length > 100, 'o SEU time desenha escudo mesmo com clubeRef: null (era o bug)');
ok(/#e30613/i.test(meu), 'usa a cor que você escolheu no Perfil');
ok(E.porTime(ADV, 'brasileirao') !== meu, 'o seu escudo é diferente do adversário');

console.log('\n\u2500\u2500 o clubeRef continua servindo ao que ele serve \u2500\u2500');
ok(ADV.clubeRef.clube === 'Flamengo', 'o clubeRef do adversário NÃO foi forjado — segue apontando os dados do clube');
ok(EU.clubeRef === null, 'o SEU clubeRef segue null (você não é adversário de ninguém)');

console.log('\n\u2500\u2500 bordas \u2500\u2500');
ok(E.porTime(null, 'brasileirao') === '', 'time null \u2192 vazio, sem estourar');
ok(E.porTime({ voce: false, clubeRef: null }, 'brasileirao') === '', 'adversário sem clubeRef \u2192 vazio');
W.__u = { username: 'joao' };   // logado, sem escudo
ok(E.porTime(EU, 'brasileirao') === '', 'usuário sem escudo \u2192 vazio');
W.eval('window.getUser = undefined;');
ok(E.porTime(EU, 'brasileirao') === '', 'sem getUser (Node, testes) \u2192 vazio, sem estourar');

console.log('\n' + (f === 0 ? '\u2705 ESCUDO DO TIME OK' : '\u274c ' + f + ' falha(s)'));
process.exit(f === 0 ? 0 : 1);
