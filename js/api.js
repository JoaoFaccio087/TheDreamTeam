// api.js — camada única de acesso a dados

// ===== DADOS LOCAIS (jogo offline) =========================================

const API = {

  getTodosClubes: function () {
    return DADOS;
  },

  getClubesPorCompeticao: function (comp) {
    return DADOS.filter(function (d) { return d.competicao === comp; });
  },

  getClubesDoModo: function (modoId) {
    var cfg = COMPETICOES[modoId];
    return cfg ? API.getClubesPorCompeticao(cfg.dados) : [];
  },

  // Os métodos de REDE ficam neste mesmo objeto, adicionados na seção HTTP lá embaixo.
  // Antes existia um segundo objeto `api` (minúsculo) com o HTTP, e este aqui só REPASSAVA
  // chamada para ele. Dois objetos que diferiam só por maiúscula, um repassando para o outro:
  // método novo no `api` precisava de repasse aqui, senão sumia calado. Foi assim que
  // `getEstatisticas` nasceu morta — a rota GET /matches/stats NUNCA foi chamada em produção,
  // e o Perfil anunciava "0 campanhas" para quem tinha o histórico inteiro salvo.
  // Um objeto só. Não há repasse para esquecer.
};

// ===== BACKEND HTTP (autenticação + multiplayer) ============================

// Local (Docker): usa o proxy /api do nginx. Publicado: fala direto com o backend no Render.
var _ehLocal    = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
var BACKEND_URL = _ehLocal ? '' : 'https://thedreamteam.onrender.com';
var API_BASE    = _ehLocal ? '/api' : BACKEND_URL;

// SESSÃO EXPIRADA — 401 com token na mão significa que o JWT venceu ou é inválido.
//
// Por que isto existe: antes o 401 era engolido lá em cima (getEstatisticas tem
// `.catch(() => null)`) e o Perfil desenhava "0 campanhas" / "0/76 conquistas". O app
// ficava num limbo: o cabeçalho mostrava nome e time (vêm do localStorage, não do
// servidor) enquanto TODA chamada era recusada. A tela dizia "você não tem nada" quando
// a verdade era "não consegui perguntar". O dono do projeto achou que tinha perdido o
// histórico; quem revisou o código foi caçar migração destrutiva. Custou caro aos dois.
//
// Aqui a sessão é encerrada DE VERDADE e o app avisa, em vez de mentir calado.
function _sessaoExpirou() {
  if (typeof limparSessao === 'function') limparSessao();
  else { localStorage.removeItem('dreamteam_token'); localStorage.removeItem('dreamteam_user'); }
  if (typeof atualizarDropdown === 'function') { try { atualizarDropdown(null); } catch (e) {} }
  try { window.dispatchEvent(new CustomEvent('dreamteam:sessao-expirada')); } catch (e) {}
}

function _req(method, path, body) {
  var token   = localStorage.getItem('dreamteam_token');
  var headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;

  // Rotas de autenticação respondem 401 para SENHA ERRADA — isso não é sessão expirada.
  var ehAuth = path.indexOf('/auth/') === 0;

  return fetch(API_BASE + path, {
    method:  method,
    headers: headers,
    body:    body !== undefined ? JSON.stringify(body) : undefined,
  }).then(function (r) {
    // Um 502/503 do Render devolve HTML, não JSON — sem esta guarda o r.json() estoura
    // e o erro que chega em quem chamou não diz nada sobre o que aconteceu.
    return r.json().catch(function () { return {}; }).then(function (d) {
      if (r.status === 401 && token && !ehAuth) {
        _sessaoExpirou();
        var e401 = new Error(d.error || 'Sessão expirada');
        e401.sessaoExpirada = true;
        throw e401;
      }
      if (!r.ok) {
        var err = new Error(d.error || 'Erro ' + r.status);
        err.status = r.status;
        throw err;
      }
      return d;
    });
  });
}

function apiGet(rota, token) {
  var headers = {};
  if (token) headers['Authorization'] = 'Bearer ' + token;
  return fetch(API_BASE + rota, { headers: headers }).then(function (r) {
    return r.json().then(function (d) {
      if (!r.ok) throw new Error(d.error || 'Erro ' + r.status);
      return d;
    });
  });
}

function apiPost(rota, corpo) {
  return _req('POST', rota, corpo);
}

// Decodifica o payload do JWT salvo (login real OU convidado).
function _decodificarToken() {
  var token = localStorage.getItem('dreamteam_token');
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
  } catch (e) { return null; }
}
// "Login de verdade" = tem token E não é convidado. Convidado não salva no banco.
function _temLoginReal() {
  var p = _decodificarToken();
  return !!(p && !p.guest);
}

// ===== REDE (HTTP) =========================================================
// Mesmo objeto API — a separação aqui é de SEÇÃO no arquivo, não de identidade.
Object.assign(API, {

  register: function (username, email, password, nomeTime) {
    return _req('POST', '/auth/register', {
      username: username, email: email, password: password, nomeTime: nomeTime,
    });
  },
  login: function (username, password) {
    return _req('POST', '/auth/login', { username: username, password: password });
  },

  getMe: function () {
    if (!_temLoginReal()) return Promise.resolve(null);
    return _req('GET', '/me');
  },
  patchMe: function (dados) {
    if (!_temLoginReal()) return Promise.resolve(null);
    return _req('PATCH', '/me', dados);
  },

  // Exclui a própria conta (LGPD). Exige a senha atual para confirmar.
  excluirConta: function (senha) {
    if (!_temLoginReal()) return Promise.resolve(null);
    return _req('DELETE', '/me', { senha: senha });
  },

  // Identidade temporária pra jogar online sem login.
  tokenConvidado: function () {
    return _req('POST', '/auth/guest', {});
  },

  salvarPartida: function (partida) {
    if (!_temLoginReal()) {
      try {
        var hist = JSON.parse(localStorage.getItem('dreamteam_historico') || '[]');
        partida.played_at = new Date().toISOString();
        hist.unshift(partida);
        if (hist.length > 20) hist = hist.slice(0, 20);
        localStorage.setItem('dreamteam_historico', JSON.stringify(hist));
      } catch (e) { /* silent */ }
      return Promise.resolve({ ok: true, local: true });
    }
    return _req('POST', '/matches', partida);
  },
  // Lê as partidas guardadas localmente (jogadas offline / como convidado).
  _historicoLocal: function () {
    try {
      var arr = JSON.parse(localStorage.getItem('dreamteam_historico') || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  },

  getHistorico: function () {
    var locais = API._historicoLocal();

    if (!_temLoginReal()) {
      return Promise.resolve(locais);
    }
    // Logado: junta o histórico do backend com as partidas offline (conjuntos
    // distintos, sem duplicação) e ordena por data (mais recentes primeiro).
    return _req('GET', '/matches').then(function (remotas) {
      remotas = Array.isArray(remotas) ? remotas : [];
      var tudo = remotas.concat(locais);
      tudo.sort(function (a, b) {
        var ta = a && a.played_at ? new Date(a.played_at).getTime() : 0;
        var tb = b && b.played_at ? new Date(b.played_at).getTime() : 0;
        return tb - ta;
      });
      return tudo;
    }).catch(function () {
      // Backend indisponível: ao menos mostra o que está salvo localmente.
      return locais;
    });
  },
  getRanking: function () {
    return _req('GET', '/ranking');
  },

  // Conquistas desbloqueadas do usuário (só logado; convidado não tem persistência).
  getAchievements: function () {
    if (!_temLoginReal()) return Promise.resolve([]);
    return _req('GET', '/matches/achievements')
      .then(function (arr) { return Array.isArray(arr) ? arr : []; })
      // Falha aqui NÃO é "zero conquistas" — é "não sei". Devolve null para a tela
      // poder dizer a verdade em vez de desenhar 0/76 com o token vencido.
      .catch(function (e) { if (e && e.sessaoExpirada) throw e; return null; });
  },

  // Estatísticas agregadas no servidor (somas em SQL + time mais escalado). Payload pequeno e
  // constante, independente do número de campanhas. Devolve null p/ convidado ou se a rota falhar
  // (o Perfil então cai no cálculo local a partir do histórico).
  // ⚠️ `null` aqui significa "não consegui carregar", NÃO "não tem nada". Quem chama
  // TEM de distinguir os dois: tratar falha como vazio foi o que fez o Perfil anunciar
  // "0 campanhas" para um usuário com o histórico intacto, só porque o token venceu.
  // O erro segue marcado (err.sessaoExpirada) para a tela saber o que dizer.
  getEstatisticas: function () {
    if (!_temLoginReal()) return Promise.resolve(null);
    return _req('GET', '/matches/stats')
      .then(function (o) { return (o && o.grupos) ? o : null; });
  },

  criarSala: function (opcoes) {
    return _req('POST', '/rooms', opcoes);
  },
  entrarSala: function (codigo) {
    return _req('POST', '/rooms/' + codigo + '/join', {});
  },
  getEstadoSala: function (codigo) {
    return _req('GET', '/rooms/' + codigo);
  },
});
