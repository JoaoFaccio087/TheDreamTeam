// perfil.js — modais "Meu Perfil", "Alterar Informações" e "Meu Histórico".
// Só para usuários logados; API.js cuida de backend vs offline.
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


  // ═════════════════════════ EDITOR DE ESCUDO ═════════════════════════
  // Opt-in: quem nunca salvou fica com o círculo da inicial, aqui e no jogo.
  // `escudo: null` no banco significa exatamente isso — nada muda para quem não pediu.

  // Espelha a lista fechada do servidor (api/routes/users.js: PADROES_ESCUDO).
  // ⚠️ Fora: os brasões de clube real (barcelona-equ, milan, bayern…) e o `tri-v`,
  //    que pinta o 2º e o 3º terço em vez do 1º e do 3º — padrão torto não vira opção.
  // `tri: true` = o formato USA a 3ª cor. Nos demais ela é ignorada em SILÊNCIO — por isso o
  // seletor só aparece quando a cor faz alguma coisa. Oferecer escolha sem efeito é mentir.
  // ⚠️ Em `tri-v`/`tri-h` o FUNDO é a 1ª faixa: [A,B] + cor2 C dá A | B | C.
  var PADROES_ESCUDO = [
    { id: 'solido',        nome: 'Liso' },
    { id: 'listras-v',     nome: 'Listras', n: 4 },
    { id: 'listras-finas', nome: 'Listras finas', tri: true },
    { id: 'listras-v',     nome: 'Listras grossas', n: 2 },
    { id: 'listras-h',     nome: 'Aros', n: 4 },
    { id: 'listras-h',     nome: 'Aros finos', n: 7 },
    { id: 'metade',        nome: 'Metade' },
    { id: 'faixa-v',       nome: 'Faixa', tri: true },
    { id: 'faixa-v',       nome: 'Faixa larga', larg: 0.6, tri: true },
    { id: 'faixa-h',       nome: 'Faixa deitada' },
    { id: 'faixa-bicolor', nome: 'Bicolor', tri: true },
    { id: 'diagonal',      nome: 'Diagonal' },
    { id: 'diagonal-inv',  nome: 'Diagonal inv.' },
    { id: 'tri-h',         nome: 'Três faixas', tri: true },
    { id: 'tri-v',         nome: 'Três faixas em pé', tri: true },
    { id: 'tri-v-base',    nome: 'Base', tri: true },
    { id: 'quartos',       nome: 'Quartos' },
    { id: 'cruz',          nome: 'Cruz' },
  ];

  // Paleta FECHADA, e de propósito: seletor RGB livre deixa escolher preto-no-preto,
  // que some no fundo do jogo. Estas 16 são legíveis sobre o fundo escuro.
  var PALETA = [
    '#FFFFFF', '#E8E8E8', '#9AA0A6', '#2B2B2B', '#000000', '#E30613', '#8E1F2F', '#F18E00',
    '#FDE100', '#2BD46A', '#008B5A', '#0A5CA8', '#004170', '#5B2C86', '#D9B25A', '#7A4A24',
  ];

  var _rascunho = null;   // { padrao, cores, n?, larg? } enquanto o modal está aberto

  // Mesmo critério do api.js: convidado tem token, mas não é login de verdade — e o
  // escudo mora no banco, então convidado não tem onde salvar.
  function temContaReal() {
    var u = usuarioLogado();
    return !!(u && u.username && localStorage.getItem('dreamteam_token') && !u.convidado);
  }

  // UM lugar desenha o cabeçalho. Estava duplicado (aqui e no callback do getMe) e as
  // duas cópias divergiram: a segunda não sabia do escudo e o apagava.
  function pintarCabecalho(username) {
    var av = $('perfil-avatar');
    if (!av) return;
    av.classList.remove('perfil-avatar-escudo', 'perfil-avatar-editavel');
    av.innerHTML = '';
    av.onclick = null; av.title = ''; av.removeAttribute('role');

    var esc = escudoDoUsuario();
    if (!pintarAvatar('perfil-avatar', esc)) setAvatar('perfil-avatar', username);

    if (temContaReal()) {
      av.classList.add('perfil-avatar-editavel');
      av.title = esc ? 'Editar escudo' : 'Criar escudo do seu time';
      av.setAttribute('role', 'button');
      av.onclick = abrirEditorEscudo;
    }
  }

  function escudoDoUsuario() {
    var u = usuarioLogado() || {};
    return u.escudo || null;
  }

  // Desenha o escudo no lugar do círculo da inicial. Sem escudo → devolve false e
  // quem chamou mantém a inicial.
  function pintarAvatar(id, esc) {
    var el = $(id);
    if (!el || !esc || typeof Escudos === 'undefined') return false;
    var svg = Escudos.porEstilo ? Escudos.porEstilo(esc) : null;
    if (!svg) return false;
    el.innerHTML = svg;
    el.classList.add('perfil-avatar-escudo');
    return true;
  }

  function previewEscudo() {
    var alvo = $('escudo-preview');
    if (alvo && typeof Escudos !== 'undefined' && Escudos.porEstilo) {
      alvo.innerHTML = Escudos.porEstilo(_rascunho) || '';
    }
  }

  function montarModalEscudo() {
    var ov = document.createElement('div');
    ov.id = 'modal-escudo';
    ov.className = 'modal-confirm';
    var pads = PADROES_ESCUDO.map(function (p, i) {
      return '<button class="pilula escudo-pad" data-i="' + i + '" type="button">' + UI.esc(p.nome) + '</button>';
    }).join('');
    var cores = function (slot) {
      return PALETA.map(function (c) {
        return '<button class="escudo-cor" data-slot="' + slot + '" data-cor="' + c + '" type="button" style="background:' + c + '" aria-label="' + c + '"></button>';
      }).join('');
    };
    ov.innerHTML =
      '<div class="modal-confirm-box escudo-box">' +
        '<p class="modal-confirm-titulo">Escudo do seu time</p>' +
        '<div id="escudo-preview" class="escudo-preview"></div>' +
        '<div class="escudo-corpo">' +
          '<div class="escudo-controles">' +
            '<p class="jogo-rotulo">FORMATO</p>' +
            '<div class="area-pilulas escudo-pads">' + pads + '</div>' +
            '<p class="jogo-rotulo">COR PRINCIPAL</p><div class="escudo-paleta">' + cores(0) + '</div>' +
            '<p class="jogo-rotulo">COR SECUNDÁRIA</p><div class="escudo-paleta">' + cores(1) + '</div>' +
            '<div id="escudo-bloco-tri">' +
              '<p class="jogo-rotulo">TERCEIRA COR</p>' +
              '<div class="escudo-paleta">' +
                '<button class="escudo-cor escudo-cor-nenhuma" data-slot="2" data-cor="" type="button" title="Sem terceira cor">&#10005;</button>' + cores(2) +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<p id="escudo-erro" class="auth-erro escondida"></p>' +
        '<div class="modal-confirm-acoes escudo-acoes">' +
          '<button id="escudo-remover" class="acao-link" type="button" title="Volta ao círculo com a inicial e remove o escudo do jogo">Sem escudo</button>' +
          '<div class="escudo-acoes-btns">' +
            '<button id="escudo-cancelar" class="btn-rolar btn-sec" type="button">Cancelar</button>' +
            '<button id="escudo-salvar" class="btn-rolar" type="button">Salvar</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);
    return ov;
  }

  function abrirEditorEscudo() {
    if (!temContaReal()) return;   // convidado não salva: não tem onde
    var atual = escudoDoUsuario();
    _rascunho = atual ? JSON.parse(JSON.stringify(atual))
                      : { padrao: 'listras-v', cores: ['#E30613', '#FFFFFF'], n: 4 };

    var ov = $('modal-escudo') || montarModalEscudo();
    ov.classList.remove('escondida');
    previewEscudo();
    marcarSelecionados(ov);

    ov.querySelectorAll('.escudo-pad').forEach(function (b) {
      b.onclick = function () {
        var p = PADROES_ESCUDO[+b.dataset.i];
        _rascunho.padrao = p.id;
        // n e larg pertencem ao formato: trocar de formato tem de LIMPAR o que sobrou,
        // senão 'Faixa larga' contamina a 'Faixa' escolhida depois.
        delete _rascunho.n; delete _rascunho.larg;
        if (p.n) _rascunho.n = p.n;
        if (p.larg) _rascunho.larg = p.larg;
        previewEscudo(); marcarSelecionados(ov);
      };
    });
    ov.querySelectorAll('.escudo-cor').forEach(function (b) {
      b.onclick = function () {
        var slot = +b.dataset.slot, cor = b.dataset.cor;
        if (slot === 2 && !cor) _rascunho.cores = _rascunho.cores.slice(0, 2);
        else _rascunho.cores[slot] = cor;
        previewEscudo(); marcarSelecionados(ov);
      };
    });
    // SAÍDA DE EMERGÊNCIA: se o rodapé sair da tela no celular, o botão Cancelar some e
    // o usuário fica preso. Esc e clique fora sempre saem. O perfil.js já tem o
    // `bindFechar` para os modais antigos — este segue a mesma ideia.
    function fecharEscudo() {
      document.removeEventListener('keydown', escEscudo);
      ov.classList.add('escondida');
    }
    function escEscudo(ev) { if (ev.key === 'Escape') fecharEscudo(); }
    document.addEventListener('keydown', escEscudo);
    ov.onclick = function (ev) { if (ev.target === ov) fecharEscudo(); };

    UI.on('escudo-cancelar', 'click', fecharEscudo);
    UI.on('escudo-remover', 'click', function () { salvarEscudo(null, ov); });
    UI.on('escudo-salvar', 'click', function () { salvarEscudo(_rascunho, ov); });
  }

  function formatoAtual() {
    for (var i = 0; i < PADROES_ESCUDO.length; i++) {
      var p = PADROES_ESCUDO[i];
      if (p.id === _rascunho.padrao && (p.n || null) === (_rascunho.n || null) &&
          (p.larg || null) === (_rascunho.larg || null)) return p;
    }
    return null;
  }

  function marcarSelecionados(ov) {
    // A 3ª cor só existe quando o formato a consome — senão o usuário escolheria uma cor
    // que não aparece em lugar nenhum.
    var f = formatoAtual();
    var bloco = $('escudo-bloco-tri');
    if (bloco) bloco.classList.toggle('escondida', !(f && f.tri));
    if (!(f && f.tri) && _rascunho.cores.length > 2) _rascunho.cores = _rascunho.cores.slice(0, 2);

    ov.querySelectorAll('.escudo-pad').forEach(function (b) {
      var p = PADROES_ESCUDO[+b.dataset.i];
      var igual = p.id === _rascunho.padrao && (p.n || null) === (_rascunho.n || null) &&
                  (p.larg || null) === (_rascunho.larg || null);
      b.classList.toggle('pilula-ativa', igual);
    });
    ov.querySelectorAll('.escudo-cor').forEach(function (b) {
      var slot = +b.dataset.slot;
      var atual = _rascunho.cores[slot] || '';
      b.classList.toggle('escudo-cor-ativa', (b.dataset.cor || '') === atual);
    });
  }

  // Traduz o erro técnico para algo que o usuário entenda e possa agir.
  function mensagemDeErro(e) {
    if (e && e.sessaoExpirada) return 'Sua sessão expirou. Entre de novo para salvar o escudo.';
    if (e && e.status === 400)  return 'Este escudo não pôde ser salvo. Tente outro formato ou cor.';
    if (e && (e.status === 502 || e.status === 503))
      return 'O servidor está indisponível no momento. Tente de novo em alguns instantes.';
    if (e && e.status >= 500)   return 'Algo deu errado no servidor. Tente de novo em alguns instantes.';
    return 'Não foi possível salvar agora. Verifique sua conexão e tente de novo.';
  }

  function salvarEscudo(esc, ov) {
    var err = $('escudo-erro');
    if (err) err.classList.add('escondida');
    API.patchMe({ escudo: esc }).then(function (me) {
      var u = usuarioLogado() || {};
      u.escudo = (me && me.escudo !== undefined) ? me.escudo : esc;
      localStorage.setItem('dreamteam_user', JSON.stringify(u));
      ov.classList.add('escondida');
      abrirPerfil();   // redesenha o cabeçalho com o escudo novo
    }).catch(function (e) {
      // NÃO engolir o erro — mas também não jogar téquiniquês na cara do usuário.
      // O zod vazava "Unrecognized key(s) in object: 'escudo'", que não diz nada a ninguém.
      // Cada caso vira uma frase que a pessoa entende E que sugere o que fazer.
      if (err) { err.textContent = mensagemDeErro(e); err.classList.remove('escondida'); }
    });
  }

  // ───────────────────────── MEU PERFIL ─────────────────────────
  function abrirPerfil() {
    if (!telaPerfil) return;
    var u = usuarioLogado() || {};
    setTexto('perfil-username', u.username || '—');
    setTexto('perfil-email', u.email || '');
    setTexto('perfil-nome-time-txt', u.nomeDoTime || u.nome_do_time || '');
    // Escudo no lugar da inicial — mas SÓ se o usuário já salvou um. `escudo: null` no
    // banco = nunca editou = fica o círculo verde, aqui e no jogo. Opt-in de verdade.
    pintarCabecalho(u.username);
    mostrarTelaPerfil('estatisticas');

    if (typeof API !== 'undefined' && API.getMe) {
      API.getMe().then(function (me) {
        if (!me) return;
        _meCache = me;
        setTexto('perfil-username', me.username || u.username || '—');
        setTexto('perfil-email', me.email || '');
        setTexto('perfil-nome-time-txt', me.nome_do_time || me.nomeDoTime || '');

        // ⚠️ ESTE callback roda DEPOIS do desenho lá em cima. Aqui havia um
        // `setAvatar()` seco: ele apagava o escudo já desenhado e devolvia a inicial —
        // mas a classe `perfil-avatar-escudo` (que zera o background) ficava. Dava
        // círculo sem fundo com o "J" solto. O escudo aparecia e sumia em meio segundo.
        //
        // De quebra: o `escudo` do getMe é a FONTE DE VERDADE (vem do banco). O
        // localStorage pode estar velho — outro dispositivo, ou save que falhou.
        // Sincroniza os dois aqui.
        if (me.escudo !== undefined) {
          var uu = usuarioLogado() || {};
          if (JSON.stringify(uu.escudo || null) !== JSON.stringify(me.escudo || null)) {
            uu.escudo = me.escudo;
            try { localStorage.setItem('dreamteam_user', JSON.stringify(uu)); } catch (e) {}
          }
        }
        pintarCabecalho(me.username || u.username);
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
    // GUARDA: se o API.js no ar for antigo (sem getEstatisticas), chamar .then() em undefined
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
    }).catch(function (err) {
      // "Não consegui carregar" NUNCA pode virar "você não tem nada". Enquanto o 401 era
      // engolido como `null` lá no API.js, esta tela anunciava "0 campanhas" para quem
      // tinha o histórico inteiro salvo — só o token tinha vencido. Dizer que os dados
      // continuam lá é a parte que mais importa da mensagem.
      var msg = (err && err.sessaoExpirada)
        ? 'Sua sessão expirou. Entre de novo para ver suas estatísticas — <b>seus dados continuam salvos</b>.'
        : 'Não foi possível carregar as estatísticas. Verifique sua conexão e tente de novo.';
      box.innerHTML = '<p class="perfil-vazio">' + msg + '</p>';
      var campo = $('perfil-campo-escalados');
      if (campo) campo.innerHTML = '<p class="perfil-vazio">' + msg + '</p>';
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

    API.patchMe(payload).then(function (res) {
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
    if (typeof API === 'undefined' || !API.excluirConta) { msgExcluir('Indisponível.', true); return; }

    var btn = $('excluir-confirmar');
    if (btn) { btn.disabled = true; btn.textContent = 'Excluindo…'; }

    API.excluirConta(senha).then(function () {
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
