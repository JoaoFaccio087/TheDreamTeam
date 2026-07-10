// perfil.js — modais "Meu Perfil", "Alterar Informações" e "Meu Histórico".
// Só para usuários logados; api.js cuida de backend vs offline.
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function usuarioLogado() { return (typeof getUser === 'function' ? getUser() : null); }

  var modalEditar    = $('modal-editar-perfil');
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
    return [modalEditar, modalExcluir].some(function (m) {
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
  // `chave` filtra o histórico local (substring de competicao); `api` é o id do grupo devolvido
  // por GET /matches/stats (mesmo id de GRUPOS_CONHECIDOS no backend).
  var GRUPOS = [
    { nome: 'Geral',         chave: null,           api: 'geral' },
    { nome: 'Libertadores',  chave: 'libertadores', api: 'liberta' },
    { nome: 'Champions',     chave: 'champions',    api: 'champions' },
    { nome: 'Brasileirão',   chave: 'brasileir',    api: 'brasil' },
    { nome: 'Copa do Mundo', chave: 'copa',         api: 'copa' }
  ];
  // Tradução da chave do seletor do mapa (data-esc) para o id do backend.
  var ESC_PARA_API = { geral: 'geral', libertadores: 'liberta', champions: 'champions', brasileir: 'brasil', copa: 'copa' };
  var _statsCache = null;   // resposta de /matches/stats (quando logado)

  var _histCache = null;   // histórico carregado (reusado por acordeão + time escalado)

  function carregarAcordeoes() {
    var box = $('perfil-acordeoes');
    if (!box) return;
    box.innerHTML = '<p class="perfil-carregando">Carregando estatísticas…</p>';

    // Caminho preferido (logado): somas prontas do servidor — payload pequeno, não depende de
    // baixar o histórico inteiro. Convidado (ou falha da rota) → cálculo local do histórico.
    // GUARDA: se o api.js no ar for antigo (sem getEstatisticas), chamar .then() em undefined
    // lançaria um erro SÍNCRONO que ninguém captura — e a tela ficava presa em "Carregando…".
    var pedirStats;
    try {
      pedirStats = (typeof API !== 'undefined' && API && typeof API.getEstatisticas === 'function')
        ? API.getEstatisticas()
        : Promise.resolve(null);
    } catch (e) {
      pedirStats = Promise.resolve(null);
    }

    Promise.resolve(pedirStats).then(function (stats) {
      if (stats && stats.grupos) {
        _statsCache = stats;
        _histCache = null;                 // não precisamos do histórico completo aqui
        box.innerHTML = GRUPOS.map(function (g, idx) {
          var s = comAproveitamento(stats.grupos[g.api] || STATS_ZERO);
          return acordeaoHTML(g.nome, s, idx === 0);
        }).join('');
        ligarAcordeoes(box);
        renderEscalados('geral');
        return;
      }
      // Fallback: calcula a partir do histórico (convidado/offline).
      return API.getHistorico().then(function (lista) {
        lista = lista || [];
        _statsCache = null;
        _histCache = lista;
        box.innerHTML = GRUPOS.map(function (g, idx) {
          var ms = g.chave
            ? lista.filter(function (m) { return (m.competicao || '').toLowerCase().indexOf(g.chave) >= 0; })
            : lista.slice();
          // A seção "Geral" (idx 0) já vem aberta; as competições, fechadas.
          return acordeaoHTML(g.nome, agregaStats(ms), idx === 0);
        }).join('');
        ligarAcordeoes(box);
        renderEscalados('geral');   // campo à direita começa no "Geral"
      });
    }).catch(function () {
      box.innerHTML = '<p class="perfil-vazio">Não foi possível carregar as estatísticas.</p>';
    });
  }

  // Calcula o aproveitamento a partir das somas. Serve tanto para o objeto do servidor
  // (que manda só as somas) quanto para o calculado localmente.
  function comAproveitamento(s) {
    var v = s.v | 0, e = s.e | 0, d = s.d | 0;
    var jogos = v + e + d;
    return {
      camp: s.camp | 0, tit: s.tit | 0, v: v, e: e, d: d, gf: s.gf | 0, ga: s.ga | 0,
      aprov: jogos ? Math.round((v * 3 + e) / (jogos * 3) * 100) : 0
    };
  }
  var STATS_ZERO = { camp: 0, tit: 0, v: 0, e: 0, d: 0, gf: 0, ga: 0 };

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

  // Escopo textual da categoria, para as dicas dos blocos: 'Geral' → null (dicas globais);
  // competição → 'na Libertadores' / 'no Brasileirão' (preposição correta por nome).
  var PREPOSICAO = { 'Brasileirão': 'no' };   // padrão: 'na'
  function escopoDe(nome) {
    if (!nome || nome === 'Geral') return null;
    return (PREPOSICAO[nome] || 'na') + ' ' + nome;
  }

  // Dicas dos 8 blocos. Sem escopo (Geral) fala do total; com escopo, cita a competição — antes
  // todas as categorias repetiam o texto do Geral ("somando todas as campanhas") mesmo dentro
  // da Libertadores, o que era enganoso.
  function dicasDe(escopo) {
    if (!escopo) return {
      camp:  'Total de campanhas disputadas',
      tit:   'Campanhas em que você foi campeão',
      v:     'Jogos vencidos somando todas as campanhas',
      e:     'Jogos empatados somando todas as campanhas',
      d:     'Jogos perdidos somando todas as campanhas',
      gf:    'Gols marcados pelo seu time no total',
      ga:    'Gols que seu time sofreu no total',
      aprov: 'Aproveitamento: pontos ganhos ÷ pontos possíveis (vitória=3, empate=1)'
    };
    return {
      camp:  'Campanhas disputadas ' + escopo,
      tit:   'Títulos conquistados ' + escopo,
      v:     'Jogos vencidos ' + escopo,
      e:     'Jogos empatados ' + escopo,
      d:     'Jogos perdidos ' + escopo,
      gf:    'Gols marcados pelo seu time ' + escopo,
      ga:    'Gols que seu time sofreu ' + escopo,
      aprov: 'Aproveitamento ' + escopo + ': pontos ganhos ÷ pontos possíveis (vitória=3, empate=1)'
    };
  }

  // Seção expansível por categoria. `s` são as somas já agregadas (do servidor ou calculadas
  // localmente por agregaStats) — assim a montagem do HTML não depende da origem dos dados.
  function acordeaoHTML(nome, s, aberto) {
    var t = dicasDe(escopoDe(nome));
    var corpo = (s.camp === 0)
      ? '<p class="acord-vazio">Nenhuma campanha ainda nesta categoria.</p>'
      : '<div class="acord-stats">' +
          stat(s.camp, 'Campanhas', t.camp) +
          stat(s.tit, 'Títulos', t.tit) +
          stat(s.v, 'Vitórias', t.v) +
          stat(s.e, 'Empates', t.e) +
          stat(s.d, 'Derrotas', t.d) +
          stat(s.gf, 'Gols pró', t.gf) +
          stat(s.ga, 'Gols contra', t.ga) +
          stat(s.aprov + '%', 'Aproveit.', t.aprov) +
        '</div>';
    return '' +
      '<section class="perfil-acord' + (aberto ? ' acord-aberta' : '') + '">' +
        '<button type="button" class="acord-head" aria-expanded="' + (aberto ? 'true' : 'false') + '">' +
          '<span class="acord-nome">' + esc(nome) + '</span>' +
          '<span class="acord-tag">' + s.camp + (s.camp === 1 ? ' campanha' : ' campanhas') + '</span>' +
          '<svg class="acord-seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>' +
        '</button>' +
        '<div class="acord-corpo">' + corpo + '</div>' +
      '</section>';
  }
  function stat(num, lbl, dica) {
    var tip = dica ? ' title="' + esc(dica) + '" data-tip="' + esc(dica) + '"' : '';
    return '<div class="perfil-stat"' + tip + '><span class="perfil-stat-num">' + num +
           '</span><span class="perfil-stat-lbl">' + lbl + '</span></div>';
  }

  // Liga o clique de cada cabeçalho: alterna a classe .acord-aberta e o aria-expanded.
  function ligarAcordeoes(box) {
    var heads = box.querySelectorAll('.acord-head');
    Array.prototype.forEach.call(heads, function (head) {
      head.addEventListener('click', function () {
        var sec = head.parentNode;
        var abrindo = !sec.classList.contains('acord-aberta');
        sec.classList.toggle('acord-aberta', abrindo);
        head.setAttribute('aria-expanded', abrindo ? 'true' : 'false');
      });
    });
  }

  // ─────────────────────── TIME MAIS ESCALADO ───────────────────────
  // Formação fixa de exibição (1 GOL, 4 DEF, 3 MEI, 3 ATA) — as vagas vêm das coords 4-3-3.
  var FORMACAO_ESCALADOS = '4-3-3';

  // Os códigos salvos em pick.codigo são posições ESPECÍFICAS (GOL, LE, ZAG, LD, MC, MEI, VOL,
  // ME, MD, PE, ATA, PD...). Mapeia cada uma para o grupo do campo (GOL/DEF/MEI/ATA).
  var POSICAO_GRUPO = {
    GOL: 'GOL',
    LE: 'DEF', LD: 'DEF', ZAG: 'DEF', LB: 'DEF', RB: 'DEF', ZE: 'DEF', ZD: 'DEF',
    VOL: 'MEI', MC: 'MEI', MEI: 'MEI', ME: 'MEI', MD: 'MEI', MEIA: 'MEI',
    PE: 'ATA', PD: 'ATA', ATA: 'ATA', CA: 'ATA', SA: 'ATA'
  };
  function grupoDaPosicao(codigo) { return POSICAO_GRUPO[String(codigo || '').toUpperCase()] || null; }

  // Conta, nas campanhas filtradas, quantas vezes cada jogador foi escalado, por grupo de posição.
  // Retorna { GOL:[...], DEF:[...], MEI:[...], ATA:[...] }, cada lista ordenada por vezes desc.
  function contarEscalados(matches) {
    var porNome = {};   // (grupo|nome) → { nome, grupo, forca, vezes }
    (matches || []).forEach(function (m) {
      var picks = m && m.detalhes && m.detalhes.snapshot && m.detalhes.snapshot.picks;
      if (!picks || !picks.length) return;
      picks.forEach(function (p) {
        if (!p || !p.nome) return;
        var g = grupoDaPosicao(p.codigo);
        if (!g) return;                    // código desconhecido: ignora em vez de sumir com o jogador
        var k = g + '|' + p.nome;          // mesmo jogador no mesmo setor conta junto (ZAG+LE = DEF)
        if (!porNome[k]) porNome[k] = { nome: p.nome, grupo: g, forca: p.forca | 0, vezes: 0 };
        porNome[k].vezes++;
        if ((p.forca | 0) > porNome[k].forca) porNome[k].forca = p.forca | 0;
      });
    });
    var grupos = { GOL: [], DEF: [], MEI: [], ATA: [] };
    Object.keys(porNome).forEach(function (k) {
      var j = porNome[k];
      if (grupos[j.grupo]) grupos[j.grupo].push(j);
    });
    Object.keys(grupos).forEach(function (g) {
      grupos[g].sort(function (a, b) { return b.vezes !== a.vezes ? b.vezes - a.vezes : b.forca - a.forca; });
    });
    return grupos;
  }

  // Monta os 11 titulares posicionados: para cada vaga da formação, pega o próximo jogador
  // mais escalado do grupo daquela vaga. Vagas sem candidato ficam vazias (—).
  function montarOnzeEscalado(grupos, formacao) {
    var coords = (typeof formacoes !== 'undefined' && formacoes[formacao]) ? formacoes[formacao] : [];
    var cods   = (typeof codigosFormacao !== 'undefined' && codigosFormacao[formacao]) ? codigosFormacao[formacao] : [];
    var usados = { GOL: 0, DEF: 0, MEI: 0, ATA: 0 };
    return coords.map(function (c, i) {
      var g = c.grupo;
      var lista = grupos[g] || [];
      var jog = lista[usados[g]] || null;
      usados[g]++;
      return { left: c.left, top: c.top, grupo: g, cod: cods[i] || g, jog: jog };
    });
  }

  function renderEscalados(chave) {
    var campo = $('perfil-campo-escalados');
    if (!campo) return;

    var grupos;
    if (_statsCache && _statsCache.escalados) {
      // Servidor já contou as escalações: recebe {GOL,DEF,MEI,ATA} ordenados por vezes.
      var apiKey = ESC_PARA_API[chave || 'geral'] || 'geral';
      grupos = _statsCache.escalados[apiKey] || { GOL: [], DEF: [], MEI: [], ATA: [] };
    } else {
      var lista = _histCache || [];
      var ms = (chave && chave !== 'geral')
        ? lista.filter(function (m) { return (m.competicao || '').toLowerCase().indexOf(chave) >= 0; })
        : lista.slice();
      grupos = contarEscalados(ms);
    }

    var temAlgum = ['GOL', 'DEF', 'MEI', 'ATA'].some(function (g) {
      return (grupos[g] || []).length > 0;
    });
    if (!temAlgum) {
      campo.innerHTML = '<p class="perfil-escalados-vazio">Nenhuma campanha nesta competição ainda. Jogue para ver seu time mais escalado aqui.</p>';
      return;
    }

    var vagas = montarOnzeEscalado(grupos, FORMACAO_ESCALADOS);
    var html =
      '<div class="pce-linha-meio"></div><div class="pce-circulo"></div>' +
      '<div class="pce-area pce-area-cima"></div><div class="pce-area pce-area-baixo"></div>';
    vagas.forEach(function (v) {
      var temJog = !!v.jog;
      var titulo = temJog ? (v.jog.nome + ' — escalado ' + v.jog.vezes + (v.jog.vezes === 1 ? ' vez' : ' vezes')) : 'Vaga sem dados';
      // Ancoragem do tooltip: nas bordas ele alinha pelo lado; no topo do campo, abre p/ baixo
      // (o campo tem overflow:hidden, então acima do jogador do topo seria cortado).
      var ancora = v.left <= 25 ? ' tip-esq' : (v.left >= 75 ? ' tip-dir' : '');
      if (v.top <= 20) ancora += ' tip-baixo';
      html +=
        '<div class="pce-jogador' + (temJog ? '' : ' pce-vazio') + ancora + '" style="left:' + v.left + '%;top:' + v.top + '%" title="' + esc(titulo) + '" data-tip="' + esc(titulo) + '">' +
          '<span class="pce-marca">' + esc(v.cod) + '</span>' +
          '<span class="pce-nome">' + (temJog ? esc(nomeCurtoEsc(v.jog.nome)) : '—') + '</span>' +
        '</div>';
    });
    campo.innerHTML = html;
  }

  // "Marcos Acuña" → "Acuña"; uma palavra fica igual.
  function nomeCurtoEsc(nome) {
    var ps = String(nome || '').trim().split(/\s+/);
    return ps.length >= 2 ? ps[ps.length - 1] : String(nome || '');
  }

  function ligarSeletorEscalados() {
    var sel = $('perfil-escalados-sel');
    if (!sel) return;
    sel.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.pilula') : null;
      if (!btn || !sel.contains(btn)) return;
      Array.prototype.forEach.call(sel.querySelectorAll('.pilula'), function (p) { p.classList.remove('pilula-ativa'); });
      btn.classList.add('pilula-ativa');
      renderEscalados(btn.getAttribute('data-esc') || 'geral');
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
  // Cache PRÓPRIO da aba Histórico (as 20 mais recentes, p/ o botão "Ver resumo").
  // Não confundir com o cache das Estatísticas: eram a MESMA variável (mesmo escopo),
  // então abrir o Histórico truncava em 20 os dados do mapa de escalados.
  var _histLista = [];
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
      _histLista = arr.slice(0, 20);
      if (lista) {
        lista.innerHTML = _histLista.map(itemHistorico).join('');
        // Liga os botões "Ver resumo" pelo índice no cache.
        lista.querySelectorAll('.hist-resumo-btn').forEach(function (b) {
          b.addEventListener('click', function () {
            var idx = +b.dataset.idx;
            var item = _histLista[idx];
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

  // Exposta para o auth.js: o clique no ícone de perfil (usuário logado) abre esta tela.
  window.abrirPerfil = abrirPerfil;

  (function init() {
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

    ligarSeletorEscalados();

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
      if (e.key === 'Escape') { fechar(modalExcluir); fechar(modalEditar); }
    });
  }());
})();
