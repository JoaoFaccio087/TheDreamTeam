'use strict';
// escudo-perfil.test.js — o escudo desenha e NÃO é apagado pelo callback do getMe.
// O bug: existiam DUAS chamadas de setAvatar('perfil-avatar'). A segunda rodava no
// callback assíncrono e sobrescrevia o SVG com a inicial — mas a classe que zera o
// background ficava. Círculo sem fundo com o "J" solto.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
const html = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://localhost/' });
const W = dom.window;
let falhas = 0;
const ok = (c,m) => { if(!c){falhas++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); };

const ESCUDO = { padrao: 'listras-v', cores: ['#E30613', '#FFFFFF'], n: 4 };
W.localStorage.setItem('dreamteam_token', 'a.b.c');
W.localStorage.setItem('dreamteam_user', JSON.stringify({ username: 'joao', escudo: ESCUDO }));
W.getUser = function () { return JSON.parse(W.localStorage.getItem('dreamteam_user')); };

const ORDEM = ['js/escudos.js','js/escudos-cores.js','js/ui.js'];
const src = ORDEM.map(a => fs.readFileSync(path.join(RAIZ, a),'utf8')).join('\n;\n');
W.eval(src);

// O perfil.js é um IIFE: roda e pendura o que precisa. Aqui só interessa o desenho.
const pf = fs.readFileSync(path.join(RAIZ, 'js/perfil.js'), 'utf8');
console.log('\n\u2500\u2500 o cabeçalho é desenhado num lugar só? \u2500\u2500');
const setAvatarSoltos = (pf.match(/setAvatar\('perfil-avatar'/g) || []).length;
ok(setAvatarSoltos === 1, 'só 1 setAvatar do perfil-avatar (era 2, e a 2ª apagava o escudo) — achei ' + setAvatarSoltos);
const chamadas = (pf.match(/pintarCabecalho\(/g) || []).length;
ok(chamadas >= 3, 'pintarCabecalho definida e chamada nos 2 pontos (' + chamadas + ' ocorrências)');
ok(/if \(me\.escudo !== undefined\)/.test(pf), 'o getMe sincroniza o escudo do banco com o localStorage');

console.log('\n\u2500\u2500 o desenho sai mesmo? \u2500\u2500');
const svg = W.Escudos.porEstilo(ESCUDO);
ok(svg && svg.length > 100, 'porEstilo devolve SVG (' + (svg ? svg.length : 0) + 'b)');
ok(/#e30613/i.test(svg), 'usa a cor escolhida');
ok(W.Escudos.porEstilo(null) === '', 'sem escudo \u2192 vazio (cai na inicial, sem quebrar)');

console.log('\n\u2500\u2500 a ordem dos scripts permite o desenho \u2500\u2500');
const idx = (f) => html.indexOf('js/' + f);
ok(idx('escudos.js') < idx('perfil.js'), 'escudos.js carrega antes de perfil.js');
ok(idx('escudos-cores.js') < idx('perfil.js'), 'escudos-cores.js antes de perfil.js');

console.log('\n' + (falhas === 0 ? '\u2705 ESCUDO NO PERFIL OK' : '\u274c ' + falhas + ' falha(s)'));
process.exit(falhas === 0 ? 0 : 1);
