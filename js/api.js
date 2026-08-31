// api.js — camada única de acesso a dados

// ===== DADOS LOCAIS (jogo offline) =========================================

const API = {

  getTodosClubes: function () {
    return DADOS;
  },

  getClubesPorCompeticao: function (comp) {
    // Busca no array do esporte certo. Os dados de cada esporte ficam PROPOSITALMENTE
    // separados (DADOS = futebol; DADOS_VOLEI_M/F e DADOS_VNL_M/F = vôlei; DADOS_NBA =
    // basquete) para o código legado de futebol nunca receber entrada de outro esporte
    // por engano. O filtro por `competicao` (string única por competição) garante que
    // nada se mistura.
    // CACHE: concatenar todos os esportes (centenas de milhares de itens com a NBA) a
    // cada chamada travava o Jogo Livre/Draft. Montamos o universo UMA vez e reusamos;
    // além disso, indexamos por competição para o filtro não varrer tudo toda vez.
    if (!API._universoCache) {
      var universo = DADOS;
      if (typeof DADOS_VOLEI_M !== 'undefined' || typeof DADOS_VOLEI_F !== 'undefined' ||
          typeof DADOS_VNL_M !== 'undefined' || typeof DADOS_VNL_F !== 'undefined' ||
          typeof DADOS_NBA !== 'undefined') {
        universo = DADOS.concat(
          (typeof DADOS_VOLEI_M !== 'undefined') ? DADOS_VOLEI_M : [],
          (typeof DADOS_VOLEI_F !== 'undefined') ? DADOS_VOLEI_F : [],
          (typeof DADOS_VNL_M !== 'undefined') ? DADOS_VNL_M : [],
          (typeof DADOS_VNL_F !== 'undefined') ? DADOS_VNL_F : [],
          (typeof DADOS_NBA !== 'undefined') ? DADOS_NBA : []
        );
      }
      API._universoCache = universo;
      API._porCompCache = {};
      universo.forEach(function (d) {
        (API._porCompCache[d.competicao] || (API._porCompCache[d.competicao] = [])).push(d);
      });
    }
    return API._porCompCache[comp] || [];
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
    // SEMPRE guarda uma cópia local. O backend pode não persistir campos ricos como
    // detalhes.snapshot.picks (usados pelo mapa "time mais escalado" do perfil,
    // especialmente p/ vôlei e basquete). Guardando local, o mapa funciona mesmo logado.
    try {
      var hist = JSON.parse(localStorage.getItem('dreamteam_historico') || '[]');
      var copia = JSON.parse(JSON.stringify(partida));
      copia.played_at = copia.played_at || new Date().toISOString();
      hist.unshift(copia);
      if (hist.length > 40) hist = hist.slice(0, 40);
      localStorage.setItem('dreamteam_historico', JSON.stringify(hist));
    } catch (e) { /* silent */ }

    // Nova partida → o histórico mudou: invalida o cache curto para o perfil refletir na hora.
    API._invalidarHistorico();

    if (!_temLoginReal()) {
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
    // Cache curto (in-flight + resultado): ao abrir o perfil, getHistorico é chamado em
    // vários blocos (barras/mapa, histórico em destaque, modal). Sem cache, cada um dispara
    // um GET /matches idêntico — 3+ requisições para o mesmo dado, deixando o perfil lento.
    // Guarda a Promise em voo (chamadas simultâneas compartilham) e o resultado por alguns
    // segundos. Invalidado ao salvar uma partida (ver salvarPartida) para não servir dado velho.
    var agora = Date.now();
    if (API._histCachePromise && (agora - API._histCacheEm) < API._HIST_CACHE_MS) {
      return API._histCachePromise;
    }
    // Logado: junta o histórico do backend com as partidas offline (conjuntos
    // distintos, sem duplicação) e ordena por data (mais recentes primeiro).
    var p = _req('GET', '/matches').then(function (remotas) {
      remotas = Array.isArray(remotas) ? remotas : [];
      var tudo = remotas.concat(API._historicoLocal());
      tudo.sort(function (a, b) {
        var ta = a && a.played_at ? new Date(a.played_at).getTime() : 0;
        var tb = b && b.played_at ? new Date(b.played_at).getTime() : 0;
        return tb - ta;
      });
      return tudo;
    }).catch(function () {
      // Backend indisponível: ao menos mostra o que está salvo localmente, e não cacheia o erro.
      API._histCachePromise = null;
      return API._historicoLocal();
    });
    API._histCachePromise = p;
    API._histCacheEm = agora;
    return p;
  },
  _histCachePromise: null,
  _histCacheEm: 0,
  _HIST_CACHE_MS: 8000,   // 8s: cobre a abertura do perfil sem servir dado velho por muito tempo
  // Invalida o cache do histórico (chamado ao salvar uma partida, para o perfil refletir na hora).
  _invalidarHistorico: function () {
    API._histCachePromise = null; API._histCacheEm = 0;
    API._achCachePromise = null; API._achCacheEm = 0;   // conquistas também mudam ao salvar
  },
  getRanking: function () {
    return _req('GET', '/ranking');
  },

  // Conquistas desbloqueadas do usuário (só logado; convidado não tem persistência).
  getAchievements: function () {
    if (!_temLoginReal()) return Promise.resolve([]);
    // Mesmo padrão do getHistorico: o perfil chama isto em vários blocos (conquistas em
    // destaque, KPIs, modal). Cache curto evita GETs /matches/achievements duplicados.
    var agora = Date.now();
    if (API._achCachePromise && (agora - API._achCacheEm) < API._HIST_CACHE_MS) {
      return API._achCachePromise;
    }
    var p = _req('GET', '/matches/achievements')
      .then(function (arr) { return Array.isArray(arr) ? arr : []; })
      // Falha aqui NÃO é "zero conquistas" — é "não sei". Devolve null para a tela
      // poder dizer a verdade em vez de desenhar 0/76 com o token vencido.
      .catch(function (e) { API._achCachePromise = null; if (e && e.sessaoExpirada) throw e; return null; });
    API._achCachePromise = p;
    API._achCacheEm = agora;
    return p;
  },
  _achCachePromise: null,
  _achCacheEm: 0,

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

// ── WARM-UP DO BACKEND ──────────────────────────────────────────────────────
// O backend no Render (plano free) hiberna após inatividade e leva ~30-50s para
// acordar na 1ª chamada — é o que fazia as estatísticas do perfil demorarem tanto.
// Aqui disparamos um "toque" leve no /health assim que o app carrega, em segundo
// plano, para o servidor já estar acordado quando o usuário abrir o perfil/online.
// Não bloqueia nada e falhas são ignoradas (offline/convidado seguem normais).
(function aquecerBackend() {
  if (_ehLocal) return;                       // local não hiberna
  try {
    fetch(BACKEND_URL + '/health', { method: 'GET', cache: 'no-store' })
      .catch(function () { /* silencioso: se falhar, o fluxo normal cuida */ });
  } catch (e) { /* ambiente sem fetch: ignora */ }
})();
