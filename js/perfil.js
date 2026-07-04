// perfil.js — modais "Meu Perfil", "Alterar Informações" e "Meu Histórico".
// Só para usuários logados; api.js cuida de backend vs offline.
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function usuarioLogado() { return (typeof getUser === 'function' ? getUser() : null); }

  var modalPerfil    = $('modal-perfil');       // legado (removido do HTML) — pode ser null
  var modalEditar    = $('modal-editar-perfil');
  var modalHistorico = $('modal-historico');    // legado (removido do HTML) — pode ser null
  var modalExcluir   = $('modal-excluir-conta');

  var telaPerfil     = $('tela-perfil');
  var _telaAnterior  = null;   // para o botão "voltar" retornar de onde veio

  var _meCache = null;

  // Mostra a tela de Perfil e ativa a aba pedida ('estatisticas' | 'historico' | 'conquistas').
  function mostrarTelaPerfil(aba) {
    if (!telaPerfil) return;
    // guarda a tela visível atual (para voltar depois)
    var atual = document.querySelector('.tela:not(.escondida)');
    if (atual && atual.id !== 'tela-perfil') _telaAnterior = atual;
    if (typeof mostrarTela === 'function') mostrarTela(telaPerfil);
    else { document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); }); telaPerfil.classList.remove('escondida'); }
    document.body.style.overflow = '';
    trocarAbaPerfil(aba || 'estatisticas');
  }

  // Alterna a aba ativa e o painel correspondente.
  function trocarAbaPerfil(aba) {
    var abas = { estatisticas: 'perfil-painel-estatisticas', historico: 'perfil-painel-historico', conquistas: 'perfil-painel-conquistas' };
    Object.keys(abas).forEach(function (k) {
      var painel = $(abas[k]);
      if (painel) painel.classList.toggle('escondida', k !== aba);
    });
    document.querySelectorAll('.perfil-aba').forEach(function (b) {
      b.classList.toggle('perfil-aba-ativa', b.dataset.aba === aba);
    });
  }

  function algumAberto() {
    return [modalPerfil, modalEditar, modalHistorico, modalExcluir].some(function (m) {
      return m && !m.classList.contains('escondida');
    });
  }
  function abrir(m)  { if (m) { m.classList.remove('escondida'); document.body.style.overflow = 'hidden'; } }
  function fechar(m) { if (m) { m.classList.add('escondida'); if (!algumAberto()) document.body.style.overflow = ''; } }

  function esc(s) {
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function setTexto(id, t) { var el = $(id); if (el) el.textContent = t; }
  function setAvatar(id, username) { var el = $(id); if (el) el.textContent = (username || '?').charAt(0).toUpperCase(); }
  function val(id) { var el = $(id); return el ? (el.value || '') : ''; }
  function setVal(id, v) { var el = $(id); if (el) el.value = v; }

  // ───────────────────────── MEU PERFIL ─────────────────────────
  function abrirPerfil() {
    if (!telaPerfil) return;
    var u = usuarioLogado() || {};
    setTexto('perfil-username', u.username || '—');
    setTexto('perfil-email', u.email || '');
    setTexto('perfil-nome-time-txt', u.nomeDoTime || u.nome_do_time || '');
    setAvatar('perfil-avatar', u.username);
    mostrarTelaPerfil('estatisticas');

    if (typeof api !== 'undefined' && api.getMe) {
      api.getMe().then(function (me) {
        if (!me) return;
        _meCache = me;
        setTexto('perfil-username', me.username || u.username || '—');
        setTexto('perfil-email', me.email || '');
        setTexto('perfil-nome-time-txt', me.nome_do_time || me.nomeDoTime || '');
        setAvatar('perfil-avatar', me.username || u.username);
      }).catch(function () {});
    }
    carregarAcordeoes();
  }

  // Grupos do acordeão: Geral + cada competição (match por palavra-chave no nome salvo).
  var GRUPOS = [
    { nome: 'Geral',         chave: null },
    { nome: 'Libertadores',  chave: 'libertadores' },
    { nome: 'Champions',     chave: 'champions' },
    { nome: 'Brasileirão',   chave: 'brasileir' },
    { nome: 'Copa do Mundo', chave: 'copa' }
  ];

  function carregarAcordeoes() {
    var box = $('perfil-acordeoes');
    if (!box) return;
    box.innerHTML = '<p class="perfil-carregando">Carregando estatísticas…</p>';
    API.getHistorico().then(function (lista) {
      lista = lista || [];
      box.innerHTML = GRUPOS.map(function (g, idx) {
        var ms = g.chave
          ? lista.filter(function (m) { return (m.competicao || '').toLowerCase().indexOf(g.chave) >= 0; })
          : lista.slice();
        return acordeaoHTML(g.nome, ms, idx === 0);
      }).join('');
      ligarAcordeoes(box);
    }).catch(function () {
      box.innerHTML = '<p class="perfil-vazio">Não foi possível carregar as estatísticas.</p>';
    });
  }

  function agregaStats(ms) {
    var v = 0, e = 0, d = 0, gf = 0, ga = 0, tit = 0;
    ms.forEach(function (m) {
      if (m.campeao) tit++;
      v += +m.vitorias || 0; e += +m.empates || 0; d += +m.derrotas || 0;
      gf += +m.gf || 0; ga += +m.ga || 0;
    });
    var jogos = v + e + d;
    return {
      camp: ms.length, tit: tit, v: v, e: e, d: d, gf: gf, ga: ga,
      aprov: jogos ? Math.round((v * 3 + e) / (jogos * 3) * 100) : 0
    };
  }

  function acordeaoHTML(nome, ms, aberto) {
    var s = agregaStats(ms);
    var corpo = (s.camp === 0)
      ? '<p class="acord-vazio">Nenhuma campanha ainda nesta categoria.</p>'
      : '<div class="acord-stats">' +
          stat(s.camp, 'Campanhas') + stat(s.tit, 'Títulos') +
          stat(s.v, 'Vitórias') + stat(s.e, 'Empates') + stat(s.d, 'Derrotas') +
          stat(s.gf, 'Gols pró') + stat(s.ga, 'Gols contra') + stat(s.aprov + '%', 'Aproveit.') +
        '</div>';
    return '' +
      '<div class="acord' + (aberto ? ' acord-aberto' : '') + '">' +
        '<button class="acord-head" type="button">' +
          '<span class="acord-nome">' + esc(nome) + '</span>' +
          '<span class="acord-tag">' + s.camp + (s.camp === 1 ? ' campanha' : ' campanhas') + '</span>' +
          '<span class="acord-chevron" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
          '</span>' +
        '</button>' +
        '<div class="acord-body' + (aberto ? '' : ' escondida') + '">' + corpo + '</div>' +
      '</div>';
  }
  function stat(num, lbl) {
    return '<div class="perfil-stat"><span class="perfil-stat-num">' + num +
           '</span><span class="perfil-stat-lbl">' + lbl + '</span></div>';
  }
  function ligarAcordeoes(box) {
    box.querySelectorAll('.acord-head').forEach(function (h) {
      h.addEventListener('click', function () {
        var acc = h.parentNode;
        var body = acc.querySelector('.acord-body');
        var aberto = acc.classList.toggle('acord-aberto');
        if (body) body.classList.toggle('escondida', !aberto);
      });
    });
  }

  // ─────────────────────── ALTERAR INFORMAÇÕES ───────────────────────
  function abrirEditar() {
    if (!modalEditar) return;
    var u = _meCache || usuarioLogado() || {};
    setVal('editar-username',  u.username || '');
    setVal('editar-nome-time', u.nome_do_time || u.nomeDoTime || '');
    setVal('editar-email',     u.email || '');
    setVal('editar-senha-atual', '');
    setVal('editar-nova-senha', '');
    setVal('editar-confirmar-senha', '');
    setAvatar('editar-avatar', u.username);
    esconderMsg('editar-msg');
    fechar(modalPerfil);
    abrir(modalEditar);
  }

  function salvarEditar() {
    var u = _meCache || usuarioLogado() || {};
    var username = val('editar-username').trim();
    var nometime = val('editar-nome-time').trim();
    var email    = val('editar-email').trim();
    var sAtual   = val('editar-senha-atual');
    var sNova    = val('editar-nova-senha');
    var sConf    = val('editar-confirmar-senha');

    if (!username) { msgEditar('O nome de usuário não pode ficar vazio.', true); return; }
    if (!nometime) { msgEditar('O nome do time não pode ficar vazio.', true); return; }
    if (!email)    { msgEditar('O e-mail não pode ficar vazio.', true); return; }

    var payload = {};
    if (username !== (u.username || '')) payload.username = username;
    if (email    !== (u.email || '')) payload.email = email;
    if (nometime !== (u.nome_do_time || u.nomeDoTime || '')) payload.nome_do_time = nometime;

    if (sAtual || sNova || sConf) {
      if (!sAtual) { msgEditar('Informe a senha atual para trocar a senha.', true); return; }
      if (sNova.length < 6) { msgEditar('A nova senha precisa de ao menos 6 caracteres.', true); return; }
      if (sNova !== sConf)  { msgEditar('A confirmação não bate com a nova senha.', true); return; }
      payload.senha_atual = sAtual;
      payload.senha_nova  = sNova;
    }

    if (!Object.keys(payload).length) { msgEditar('Nada para alterar.', false); return; }

    var btn = $('editar-salvar');
    if (btn) { btn.disabled = true; btn.textContent = 'Salvando…'; }

    api.patchMe(payload).then(function (res) {
      res = res || {};
      try {
        var user = usuarioLogado() || {};
        if (res.username) user.username = res.username;
        if (res.email)    user.email = res.email;
        user.nomeDoTime = res.nome_do_time || nometime;
        localStorage.setItem('dreamteam_user', JSON.stringify(user));
        if (typeof atualizarDropdown === 'function') atualizarDropdown(user);
      } catch (e) {}
      _meCache = { username: res.username || username, email: res.email || email, nome_do_time: res.nome_do_time || nometime };
      msgEditar('Informações atualizadas!', false);
      setTimeout(function () { fechar(modalEditar); abrirPerfil(); }, 750);
    }).catch(function (err) {
      msgEditar((err && err.message) || 'Erro ao salvar.', true);
    }).then(function () {
      if (btn) { btn.disabled = false; btn.textContent = 'Salvar'; }
    });
  }

  function msgEditar(t, erro) {
    var el = $('editar-msg'); if (!el) return;
    el.textContent = t;
    el.classList.remove('escondida');
    el.classList.toggle('perfil-msg-erro', !!erro);
  }
  function esconderMsg(id) { var el = $(id); if (el) el.classList.add('escondida'); }

  // ──────────────────── EXCLUIR CONTA (LGPD) ────────────────────
  function abrirExcluir() {
    if (!modalExcluir) return;
    setVal('excluir-senha', '');
    esconderMsg('excluir-msg');
    fechar(modalEditar);
    abrir(modalExcluir);
  }

  function msgExcluir(t, erro) {
    var el = $('excluir-msg'); if (!el) return;
    el.textContent = t;
    el.classList.remove('escondida');
    el.classList.toggle('perfil-msg-erro', !!erro);
  }

  function confirmarExcluir() {
    var senha = val('excluir-senha');
    if (!senha) { msgExcluir('Digite sua senha para confirmar.', true); return; }
    if (!api || !api.excluirConta) { msgExcluir('Indisponível.', true); return; }

    var btn = $('excluir-confirmar');
    if (btn) { btn.disabled = true; btn.textContent = 'Excluindo…'; }

    api.excluirConta(senha).then(function () {
      // Conta apagada: encerra a sessão e atualiza a UI para o estado deslogado.
      fechar(modalExcluir);
      if (typeof limparSessao === 'function') {
        limparSessao();
        try { localStorage.removeItem('dreamteam_historico'); } catch (e) {}
        if (typeof atualizarDropdown === 'function') atualizarDropdown(null);
      } else {
        try {
          localStorage.removeItem('dreamteam_token');
          localStorage.removeItem('dreamteam_user');
          localStorage.removeItem('dreamteam_historico');
        } catch (e) {}
        location.reload();
      }
    }).catch(function (err) {
      msgExcluir((err && err.message) || 'Não foi possível excluir a conta.', true);
    }).then(function () {
      if (btn) { btn.disabled = false; btn.textContent = 'Excluir permanentemente'; }
    });
  }

  // ──────────────────────── MEU HISTÓRICO ────────────────────────
  var _histCache = [];
  function abrirHistorico() {
    if (!telaPerfil) return;
    var lista = $('historico-lista');
    if (lista) lista.innerHTML = '<p class="perfil-carregando">Carregando histórico…</p>';
    mostrarTelaPerfil('historico');
    API.getHistorico().then(function (arr) {
      arr = arr || [];
      if (!arr.length) {
        if (lista) lista.innerHTML = '<p class="historico-vazio">Você ainda não terminou nenhuma campanha. Jogue uma temporada e ela aparece aqui!</p>';
        return;
      }
      // Mostra no máximo as 20 partidas mais recentes.
      _histCache = arr.slice(0, 20);
      if (lista) {
        lista.innerHTML = _histCache.map(itemHistorico).join('');
        // Liga os botões "Ver resumo" pelo índice no cache.
        lista.querySelectorAll('.hist-resumo-btn').forEach(function (b) {
          b.addEventListener('click', function () {
            var idx = +b.dataset.idx;
            var item = _histCache[idx];
            if (item && typeof mostrarResumoHistorico === 'function') mostrarResumoHistorico(item);
          });
        });
      }
    }).catch(function () {
      if (lista) lista.innerHTML = '<p class="historico-vazio">Não foi possível carregar o histórico.</p>';
    });
  }
  function itemHistorico(m, idx) {
    var gf = +m.gf || 0, ga = +m.ga || 0, saldo = gf - ga;
    var modo = (m.modo === 'online') ? 'Online' : 'Solo';
    var data = '';
    if (m.played_at) { try { data = new Date(m.played_at).toLocaleDateString('pt-BR'); } catch (e) {} }
    var coloc = m.campeao
      ? '<span class="hist-campeao">★ Campeão</span>'
      : (m.posicao ? '<span class="hist-pos">' + (+m.posicao) + 'º lugar</span>' : '');
    var icoResumo =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h10"/>' +
      '</svg>';
    return '' +
      '<div class="hist-item' + (m.campeao ? ' hist-item-campeao' : '') + '">' +
        '<div class="hist-topo">' +
          '<span class="hist-comp">' + esc(m.competicao || '—') + '</span>' +
          '<span class="hist-modo">' + modo + '</span>' +
          (data ? '<span class="hist-data">' + data + '</span>' : '') +
        '</div>' +
        '<div class="hist-linha">' +
          '<span class="hist-record">' +
            '<b class="hist-v">' + (+m.vitorias || 0) + 'V</b> ' +
            '<b class="hist-e">' + (+m.empates  || 0) + 'E</b> ' +
            '<b class="hist-d">' + (+m.derrotas || 0) + 'D</b>' +
          '</span>' +
          '<span class="hist-gols">' + gf + ':' + ga + ' <i>(' + (saldo >= 0 ? '+' : '') + saldo + ')</i></span>' +
          coloc +
        '</div>' +
        '<button class="hist-resumo-btn" type="button" data-idx="' + idx + '">' + icoResumo + 'Ver resumo</button>' +
      '</div>';
  }

  // ──────────────────────── Ligações ────────────────────────
  function bindFechar(btnId, backdropId, modal) {
    var b = $(btnId), bd = $(backdropId);
    if (b)  b.addEventListener('click', function () { fechar(modal); });
    if (bd) bd.addEventListener('click', function () { fechar(modal); });
  }

  (function init() {
    var ddPerfil = $('dd-perfil'), ddHistorico = $('dd-historico');
    if (ddPerfil) ddPerfil.addEventListener('click', function () {
      if (typeof fecharDropdown === 'function') fecharDropdown();
      abrirPerfil();
    });
    if (ddHistorico) ddHistorico.addEventListener('click', function () {
      if (typeof fecharDropdown === 'function') fecharDropdown();
      abrirHistorico();
    });

    // Abas da tela de Perfil (Estatísticas / Histórico / Conquistas)
    document.querySelectorAll('.perfil-aba').forEach(function (b) {
      b.addEventListener('click', function () {
        var aba = b.dataset.aba;
        trocarAbaPerfil(aba);
        // Popula sob demanda ao entrar na aba
        if (aba === 'historico') abrirHistorico();
        else if (aba === 'estatisticas') carregarAcordeoes();
        else if (aba === 'conquistas' && typeof renderConquistas === 'function') renderConquistas();
      });
    });

    // Botão voltar da tela de Perfil → retorna à tela anterior (ou à inicial)
    var btnVoltarPerfil = $('perfil-voltar');
    if (btnVoltarPerfil) btnVoltarPerfil.addEventListener('click', function () {
      var destino = _telaAnterior || $('tela-inicial');
      if (typeof mostrarTela === 'function' && destino) mostrarTela(destino);
      else if (destino) { document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); }); destino.classList.remove('escondida'); }
    });

    var lapis = $('perfil-editar');
    if (lapis) lapis.addEventListener('click', abrirEditar);

    var btnSalvar = $('editar-salvar');
    if (btnSalvar) btnSalvar.addEventListener('click', salvarEditar);
    var btnCancelar = $('editar-cancelar');
    if (btnCancelar) btnCancelar.addEventListener('click', function () { fechar(modalEditar); abrirPerfil(); });

    // Excluir conta (LGPD)
    var btnAbrirExcluir = $('editar-excluir-conta');
    if (btnAbrirExcluir) btnAbrirExcluir.addEventListener('click', abrirExcluir);
    var btnExcluirConfirmar = $('excluir-confirmar');
    if (btnExcluirConfirmar) btnExcluirConfirmar.addEventListener('click', confirmarExcluir);
    var btnExcluirCancelar = $('excluir-cancelar');
    if (btnExcluirCancelar) btnExcluirCancelar.addEventListener('click', function () { fechar(modalExcluir); abrirEditar(); });
    bindFechar('modal-excluir-fechar', 'modal-excluir-backdrop', modalExcluir);

    bindFechar('modal-editar-fechar',    'modal-editar-backdrop',    modalEditar);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { fechar(modalExcluir); fechar(modalEditar); fechar(modalPerfil); fechar(modalHistorico); }
    });
  }());
})();
