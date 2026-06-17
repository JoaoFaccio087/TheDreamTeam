// perfil.js — modais de "Perfil" e "Histórico" (abrem pelo dropdown do header).
// Só aparecem para usuários logados (ficam dentro de #menu-logado).
// Reaproveitam a estrutura visual do modal de auth (.modal-auth / .auth-card).
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function usuarioLogado() { return (typeof getUser === 'function' ? getUser() : null); }

  var modalPerfil    = $('modal-perfil');
  var modalHistorico = $('modal-historico');

  function abrir(m)  { if (m) { m.classList.remove('escondida'); document.body.style.overflow = 'hidden'; } }
  function fechar(m) { if (m) { m.classList.add('escondida'); document.body.style.overflow = ''; } }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function setTexto(id, t) { var el = $(id); if (el) el.textContent = t; }
  function setAvatar(username) {
    var el = $('perfil-avatar');
    if (el) el.textContent = (username || '?').charAt(0).toUpperCase();
  }

  // ───────────────────────── PERFIL ─────────────────────────
  function abrirPerfil() {
    if (!modalPerfil) return;
    var u = usuarioLogado() || {};
    setTexto('perfil-username', u.username || '—');
    setTexto('perfil-email', u.email || '');
    setAvatar(u.username);
    var inp = $('perfil-nome-time');
    if (inp) inp.value = u.nomeDoTime || u.nome_do_time || '';
    esconderMsgPerfil();
    abrir(modalPerfil);

    // Dados frescos do servidor (sobrescrevem o cache local da sessão).
    if (typeof api !== 'undefined' && api.getMe) {
      api.getMe().then(function (me) {
        if (!me) return;
        setTexto('perfil-username', me.username || u.username || '—');
        setTexto('perfil-email', me.email || '');
        setAvatar(me.username || u.username);
        if (inp && document.activeElement !== inp) {
          inp.value = me.nome_do_time || me.nomeDoTime || '';
        }
      }).catch(function () {});
    }

    carregarStatsPerfil();
  }

  function carregarStatsPerfil() {
    var box = $('perfil-stats');
    if (!box) return;
    box.innerHTML = '<p class="perfil-carregando">Carregando estatísticas…</p>';
    API.getHistorico().then(function (lista) {
      lista = lista || [];
      var camp = lista.length, tit = 0, v = 0, e = 0, d = 0, gf = 0, ga = 0;
      lista.forEach(function (m) {
        if (m.campeao) tit++;
        v += +m.vitorias || 0; e += +m.empates || 0; d += +m.derrotas || 0;
        gf += +m.gf || 0; ga += +m.ga || 0;
      });
      var jogos = v + e + d;
      var aprov = jogos ? Math.round((v * 3 + e) / (jogos * 3) * 100) : 0;
      box.innerHTML =
        statCard(camp, 'Campanhas') +
        statCard(tit, 'Títulos') +
        statCard(v, 'Vitórias') +
        statCard(e, 'Empates') +
        statCard(d, 'Derrotas') +
        statCard(gf, 'Gols pró') +
        statCard(ga, 'Gols contra') +
        statCard(aprov + '%', 'Aproveit.');
    }).catch(function () {
      box.innerHTML = '<p class="perfil-vazio">Não foi possível carregar as estatísticas.</p>';
    });
  }

  function statCard(num, lbl) {
    return '<div class="perfil-stat"><span class="perfil-stat-num">' + num +
           '</span><span class="perfil-stat-lbl">' + lbl + '</span></div>';
  }

  function salvarNomeTime() {
    var inp = $('perfil-nome-time');
    if (!inp) return;
    var nome = (inp.value || '').trim();
    if (!nome) { msgPerfil('Digite um nome para o time.', true); return; }

    var btn = $('perfil-salvar-nome');
    if (btn) { btn.disabled = true; btn.textContent = 'Salvando…'; }

    api.patchMe({ nome_do_time: nome })
      .then(function () {
        try {
          var user = usuarioLogado() || {};
          user.nomeDoTime = nome;
          localStorage.setItem('dreamteam_user', JSON.stringify(user));
          if (typeof atualizarDropdown === 'function') atualizarDropdown(user);
        } catch (e) {}
        msgPerfil('Nome do time atualizado!', false);
      })
      .catch(function (err) {
        msgPerfil((err && err.message) || 'Erro ao salvar.', true);
      })
      .then(function () {
        if (btn) { btn.disabled = false; btn.textContent = 'Salvar'; }
      });
  }

  function msgPerfil(txt, erro) {
    var el = $('perfil-msg');
    if (!el) return;
    el.textContent = txt;
    el.classList.remove('escondida');
    el.classList.toggle('perfil-msg-erro', !!erro);
  }
  function esconderMsgPerfil() { var el = $('perfil-msg'); if (el) el.classList.add('escondida'); }

  // ──────────────────────── HISTÓRICO ────────────────────────
  function abrirHistorico() {
    if (!modalHistorico) return;
    var lista = $('historico-lista');
    if (lista) lista.innerHTML = '<p class="perfil-carregando">Carregando histórico…</p>';
    abrir(modalHistorico);

    API.getHistorico().then(function (arr) {
      arr = arr || [];
      if (!arr.length) {
        if (lista) lista.innerHTML = '<p class="historico-vazio">Você ainda não terminou nenhuma campanha. Jogue uma temporada e ela aparece aqui!</p>';
        return;
      }
      if (lista) lista.innerHTML = arr.map(itemHistorico).join('');
    }).catch(function () {
      if (lista) lista.innerHTML = '<p class="historico-vazio">Não foi possível carregar o histórico.</p>';
    });
  }

  function itemHistorico(m) {
    var gf = +m.gf || 0, ga = +m.ga || 0, saldo = gf - ga;
    var modo = (m.modo === 'online') ? 'Online' : 'Solo';
    var data = '';
    if (m.played_at) { try { data = new Date(m.played_at).toLocaleDateString('pt-BR'); } catch (e) {} }
    var coloc = m.campeao
      ? '<span class="hist-campeao">★ Campeão</span>'
      : (m.posicao ? '<span class="hist-pos">' + (+m.posicao) + 'º lugar</span>' : '');

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
      '</div>';
  }

  // ──────────────────────── Ligações ─────────────────────────
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

    bindFechar('modal-perfil-fechar',    'modal-perfil-backdrop',    modalPerfil);
    bindFechar('modal-historico-fechar', 'modal-historico-backdrop', modalHistorico);

    var btnSalvar = $('perfil-salvar-nome');
    if (btnSalvar) btnSalvar.addEventListener('click', salvarNomeTime);

    var inpNome = $('perfil-nome-time');
    if (inpNome) inpNome.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); salvarNomeTime(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { fechar(modalPerfil); fechar(modalHistorico); }
    });
  }());
})();
