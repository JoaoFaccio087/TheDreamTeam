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

  salvarPartida: function (resultado) {
    return api.salvarPartida(resultado);
  },

  getHistorico: function () {
    return api.getHistorico();
  },

  getRanking: function () {
    return api.getRanking();
  },
};

// ===== BACKEND HTTP (autenticação + multiplayer) ============================

// Local (Docker): usa o proxy /api do nginx. Publicado: fala direto com o backend no Render.
var _ehLocal    = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
var BACKEND_URL = _ehLocal ? '' : 'https://thedreamteam.onrender.com';
var API_BASE    = _ehLocal ? '/api' : BACKEND_URL;

function _req(method, path, body) {
  var token   = localStorage.getItem('dreamteam_token');
  var headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;

  return fetch(API_BASE + path, {
    method:  method,
    headers: headers,
    body:    body !== undefined ? JSON.stringify(body) : undefined,
  }).then(function (r) {
    return r.json().then(function (d) {
      if (!r.ok) throw new Error(d.error || 'Erro ' + r.status);
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

var api = {

  register: function (username, email, password, nomeTime) {
    return _req('POST', '/auth/register', {
      username: username, email: email, password: password, nomeTime: nomeTime,
    });
  },
  login: function (username, password) {
    return _req('POST', '/auth/login', { username: username, password: password });
  },

  getMe: function () {
    if (!localStorage.getItem('dreamteam_token')) return Promise.resolve(null);
    return _req('GET', '/me');
  },
  patchMe: function (dados) {
    if (!localStorage.getItem('dreamteam_token')) return Promise.resolve(null);
    return _req('PATCH', '/me', dados);
  },

  salvarPartida: function (partida) {
    if (!localStorage.getItem('dreamteam_token')) {
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
  getHistorico: function () {
    if (!localStorage.getItem('dreamteam_token')) {
      try {
        return Promise.resolve(
          JSON.parse(localStorage.getItem('dreamteam_historico') || '[]')
        );
      } catch (e) { return Promise.resolve([]); }
    }
    return _req('GET', '/matches');
  },
  getRanking: function () {
    return _req('GET', '/ranking');
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
};
