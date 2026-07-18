'use strict';
// auth.test.js — falha NUNCA pode virar vazio.
// Trava o bug que fez o Perfil anunciar "0 campanhas" / "0/76 conquistas" para um
// usuário com tudo salvo, só porque o token tinha vencido (401 engolido como null).
const fs = require('fs');
const { JSDOM } = require('/home/claude/testenv/node_modules/jsdom');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
// runScripts: 'outside-only' é o que faz window.eval rodar DENTRO do contexto do jsdom
// (com location, localStorage etc). Sem isso o eval cai no contexto do Node e estoura.
const dom = new JSDOM('<!DOCTYPE html><body></body>', { url: 'https://thedreamteam.com.br/', runScripts: 'outside-only' });
const W = dom.window;
global.window = W; global.document = W.document;

let falhas = 0;
const ok = (c, m) => { if (!c) { falhas++; console.log('  \u2717 ' + m); } else console.log('  \u2713 ' + m); };

let saiu = false;
W.limparSessao = function () {
  W.localStorage.removeItem('dreamteam_token');
  W.localStorage.removeItem('dreamteam_user');
  saiu = true;
};
// Reproduz o 401 EXATO que o João recebeu em produção.
W.fetch = (url) => Promise.resolve({
  ok: false, status: 401,
  json: () => Promise.resolve({ error: 'Token inválido ou expirado' })
});
const tok = 'a.' + Buffer.from(JSON.stringify({ sub: 1, username: 'joao' })).toString('base64') + '.z';
W.localStorage.setItem('dreamteam_token', tok);
W.localStorage.setItem('dreamteam_user', '{"username":"joao"}');
// `const API` dentro de um eval NÃO vaza para o eval seguinte (escopo léxico).
// Um eval só, devolvendo um leitor — mesmo truque dos testes da Fase 3.
const ler = W.eval(fs.readFileSync(RAIZ + '/js/api.js', 'utf8') +
  '\n;(function(){ return function(e){ return eval(e); }; })()');

ler('window.__r = API.getEstatisticas();');
W.__r.then(function (v) {
  ok(false, 'getEstatisticas devia REJEITAR, mas resolveu com: ' + v);
  parte2();
}).catch(function (e) {
  console.log('\n\u2500\u2500 UM objeto só: a armadilha api/API não pode voltar \u2500\u2500');
  // O bug: existiam DOIS objetos que diferiam só por maiúscula — `API` (fachada) repassando
  // para `api` (HTTP). Método novo no `api` precisava de repasse no `API`, senão sumia calado.
  // Foi assim que getEstatisticas nasceu morta e o Perfil anunciou "0 campanhas" para quem
  // tinha tudo salvo. Este teste trava o objeto único.
  ok(ler('typeof api') === 'undefined', 'NÃO existe mais um `api` minúsculo global (a armadilha morreu)');

  // Todo método público, num só lugar. Se alguém recriar a camada de repasse e esquecer um,
  // isto quebra ANTES de virar "0 campanhas" na tela do usuário.
  var LOCAIS = ['getTodosClubes', 'getClubesPorCompeticao', 'getClubesDoModo'];
  var REDE = ['register', 'login', 'tokenConvidado', 'getMe', 'patchMe', 'excluirConta',
              'salvarPartida', 'getHistorico', 'getRanking', 'getAchievements',
              'getEstatisticas', 'criarSala', 'entrarSala', 'getEstadoSala'];
  var faltando = LOCAIS.concat(REDE).filter(function (m) { return ler('typeof API.' + m) !== 'function'; });
  ok(faltando.length === 0, 'API tem os ' + (LOCAIS.length + REDE.length) + ' métodos' +
     (faltando.length ? ' — FALTANDO: ' + faltando.join(', ') : ''));

  // ⚠️ EXISTIR NÃO É FUNCIONAR. Conferir `typeof === 'function'` deixou passar o
  // `getHistorico`, que chamava `api._historicoLocal()` — objeto que a fusão apagou.
  // ReferenceError por dentro → promise rejeitada → a aba Histórico do Perfil ficava
  // CARREGANDO PARA SEMPRE. Método pode existir e estourar. Aqui a gente CHAMA.
  // Só os de REDE: os locais (getTodosClubes/getClubesPorCompeticao/getClubesDoModo)
  // dependem de DADOS e COMPETICOES, que vivem em js/dados/* e js/regras.js — fora do
  // alcance deste teste. Um ReferenceError neles aqui seria falso positivo.
  var estouram = [];
  ['getHistorico', 'getRanking', 'getAchievements', 'getEstatisticas'].forEach(function (m) {
    try { var r = ler('API.' + m + '()'); if (r && r.catch) r.catch(function () {}); }
    catch (e) { estouram.push(m + ': ' + e.message); }
  });
  ok(estouram.length === 0, 'todo método CHAMADO sem estourar' +
     (estouram.length ? ' — ESTOURARAM: ' + estouram.join(' | ') : ''));

  console.log('\n\u2500\u2500 401: o app percebe que a sessão morreu? \u2500\u2500');
  ok(e && e.sessaoExpirada === true, 'getEstatisticas REJEITA marcando sessaoExpirada (não vira null calado)');
  ok(e && /Token/.test(e.message), 'mensagem do servidor preservada: "' + (e && e.message) + '"');
  ok(saiu === true, 'sessão encerrada de verdade (limparSessao chamado)');
  ok(W.localStorage.getItem('dreamteam_token') === null, 'token morto removido do localStorage');
  parte2();
});

function parte2() {
  console.log('\n\u2500\u2500 senha errada NÃO é sessão expirada \u2500\u2500');
  saiu = false;
  W.localStorage.setItem('dreamteam_token', tok);
  ler('window.__l = API.login("joao", "senhaerrada");');
  W.__l.then(function () { ok(false, 'login com senha errada devia rejeitar'); fim(); })
       .catch(function (e) {
    ok(!e.sessaoExpirada, '401 em /auth/login não dispara sessão expirada');
    ok(saiu === false && W.localStorage.getItem('dreamteam_token') !== null,
       'errar a senha não desloga quem já estava logado');
    fim();
  });
}

function fim() {
  console.log('\n\u2500\u2500 502 do Render (HTML, não JSON) \u2500\u2500');
  W.fetch = () => Promise.resolve({ ok: false, status: 502, json: () => Promise.reject(new SyntaxError('Unexpected token <')) });
  ler('window.__b = API.getEstatisticas();');
  W.__b.then(function () { ok(false, 'devia rejeitar'); pronto(); })
       .catch(function (e) {
    ok(!(e instanceof SyntaxError), 'r.json() estourando não vaza SyntaxError para quem chamou');
    ok(e.status === 502, 'erro carrega o status HTTP (' + e.status + ') para a tela saber o que dizer');
    pronto();
  });
}
function pronto() {
  console.log('\n' + (falhas === 0 ? '\u2705 FALHA != VAZIO — OK' : '\u274c ' + falhas + ' falha(s)'));
  process.exit(falhas === 0 ? 0 : 1);
}
