// online.js — Modo multiplayer online (Socket.IO)

(function () {
  'use strict';

  // ── Estado ────────────────────────────────────────────────────────────────
  var socket           = null;
  var meuUserId        = null;
  var codigoSala       = null;
  var hostUserId       = null;
  var ehHost           = false;
  var minhaVez         = false;
  var timerInterval    = null;
  var timerSeg         = 30;
  var rodadaAtual      = 0;
  var totalRodadas     = 5;
  var formatoOnline    = 'liga';   // 'liga' (Brasileirão), 'mata' (Copa/Liberta) ou 'champions'
  var chaveOnline      = null;     // chave do mata-mata online {rounds, rodadaAtual, fases}
  var championsFimLiga = false;    // fase de liga da Champions encerrada (host vai ao playoff)
  var championsClassifFinal = null;// tabela final da fase de liga (p/ re-render com cortes)
  var gruposEncerrados = false;    // fase de grupos terminou (aguardando host iniciar o mata-mata)
  var emMataMata       = false;    // estamos no mata-mata (avançar = chave:advance, não round:simulate)
  var simulandoRodada  = false;
  var seguidoKey       = null;     // time assistido no mata-mata (chave 'u:'/'n:'); começa no próprio time

  var poolLocal        = [];   // pool de jogadores disponíveis no turno atual
  var poolPorPosicao   = {};   // draft em grupo: cartas já validadas por posição (servidor)
  var carouselIndex    = 0;    // offset do carousel
  var selectedPlayer   = null; // objeto do jogador selecionado no carousel
  var selectedSlot     = null; // vaga (índice de slot) escolhida no campo
  var repositionFrom   = null; // vaga de origem ao remanejar um jogador já escalado
  var allPlayers       = {};   // { userId: { username, nomeDoTime, formacao, picks, pronto } }
  var ordemDraftIds    = [];   // ordem dos userId no draft
  var picksSnapshot    = {};   // { userId: nº de picks } autoritativo do servidor (mesma lista p/ todos)
  var indiceTurnoAtual = 0;    // índice na ordemDraft
  var draftPicksTurno  = 1;    // picks que o turno atual concede (2, ou 1 no último)
  var draftPicksFeitos = 0;    // picks já feitos neste turno (para o status 1/2)
  var draftTurnoUid    = null; // userId de quem está escolhendo agora (destaque)

  // ── Referências DOM ───────────────────────────────────────────────────────
  var telaOnline, modalOnline, modalAuth;
  var barraEspectador = null;   // barra "Assistindo: <time>" (criada sob demanda)

  // Modal online
  var modalOnlineFechar, btnCopiarCodigo, lobbyCodigo;
  var btnCriarSala, inputCodigoSala, btnEntrarSala, modalOnlineErro;

  // Lobby
  var lobbyNomeTime, lobbyPilulasFormacao, lobbyProntosCount;
  var btnLobbyPronto, btnLobbyComecar, btnLobbyVoltar;
  var modalSairOnline, modalSairCancelar, modalSairConfirmar;
  var lobbyCampo, lobbyBoxScore;

  // Draft
  var draftTituloEl, draftSubtituloEl, draftOrdemLista;
  var draftTimerBar, draftTimerNum, draftCampo, draftCampoLabel, draftMeuTime;
  var draftCarouselWrap, draftCarousel, draftArrowEsq, draftArrowDir, btnDraftSelecionar, draftCarouselLabel;
  var modalDraftPick, modalDraftPickCartas, modalDraftPickTitulo, modalDraftPickSelecionar;
  var modalDraftPickResortear, modalDraftPickContador;
  var draftResortsRestantes = 3;   // orçamento de re-sorteios para o draft (igual ao offline)
  var modalPoolPos = [];           // elegíveis (embaralhados) da posição aberta no modal
  var modalPosPage = 0;            // página atual (6 por página) no modal

  // Elencos
  var elencosUsersLista, elencosCampoLabel, elencosCampo, elencosForca;
  var elencosProntosCount, btnElencosPronto, btnElencosComecar;

  // Rodada
  var rodadaTituloEl, rodadaPartidas, btnRodadaProxima, btnRodadaFim;
  var rodadaClassif, rodadaArtilharia, rodadaAssistencias;
  var chaveArtilharia, chaveAssistencias;
  var rodadaProximos, proximosTitulo, rodadaAguardandoHost;
  var tabPartidas, tabClassif, abaPartidas, abaClassif, tabChave, abaChave;
  var animTimer = null;   // timer da animação da partida do usuário
  var animacaoAtiva = false;   // true enquanto a partida do usuário está sendo animada
  var aoFimDaAnimacao = null;  // callback rodado quando a animação termina (atualiza a classificação só então)
  var btnPularTudo, modalPular, modalPularConfirmar, modalPularCancelar, skipContador, prontosLabel;
  var euVoteiPular = false, skipVotos = 0, skipTotal = 0;

  // Fim
  var onlineRankingFinal;
  var btnVerResumo, btnVoltarInicio, fimAcoes, modalPremiacao, modalPremFechar;
  var fimAcoesFixo;
  var meuRankingFinal = null, ultimaArtilharia = [], ultimaAssistencia = [], rankingFinalCache = [];
  var _campanhaOnlineSalva = false;

  // ── Formações (posições por slot) ─────────────────────────────────────────
  // (Os rótulos de posição vêm de `codigosFormacao` do formacoes.js — a mesma
  //  fonte do offline. Não duplicamos a lista aqui para não haver divergência.)

  // ── Subviews ──────────────────────────────────────────────────────────────

  function subview(id) {
    document.querySelectorAll('.online-subview').forEach(function (el) {
      el.classList.toggle('escondida', el.id !== id);
    });
    if (_btnTopo) _btnTopo.classList.remove('visivel');   // troca de tela → some o botão flutuante
  }

  function mostrarTelaOnline() {
    document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); });
    telaOnline.classList.remove('escondida');
  }

  function mostrarTelaInicial() {
    document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); });
    document.getElementById('tela-inicial').classList.remove('escondida');
  }

  // ── Erros / Modais ────────────────────────────────────────────────────────

  function erroOnline(msg) {
    if (!modalOnlineErro) return;
    modalOnlineErro.textContent = msg;
    modalOnlineErro.classList.remove('escondida');
    setTimeout(function () { modalOnlineErro.classList.add('escondida'); }, 4000);
  }

  function _mostrarModalOnline() {
    modalOnlineErro.classList.add('escondida');
    var _nomeEl = document.getElementById('input-nome-sala');
    if (_nomeEl) _nomeEl.value = '';
    btnCriarSala.disabled    = false;
    btnCriarSala.textContent = 'Criar sala';
    btnEntrarSala.disabled   = false;
    btnEntrarSala.textContent = 'Entrar';
    modalOnline.classList.remove('escondida');
    document.body.style.overflow = 'hidden';
  }

  // Garante uma identidade (login real OU convidado) antes de uma ação online.
  // Verifica se um JWT ainda é válido pela expiração (com 30s de margem).
  function tokenValido(token) {
    if (!token) return false;
    try {
      var payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      if (payload && payload.exp) return (payload.exp * 1000) > (Date.now() + 30000);
      return true;   // sem exp: assume válido
    } catch (e) { return false; }
  }

  function garantirToken(forcar) {
    var token = localStorage.getItem('dreamteam_token');
    if (!forcar && tokenValido(token)) return Promise.resolve(token);
    // ausente/expirado/inválido (ou forçado) → pega um novo token de convidado
    localStorage.removeItem('dreamteam_token');
    return api.tokenConvidado().then(function (r) {
      if (r && r.token) { localStorage.setItem('dreamteam_token', r.token); return r.token; }
      return null;
    });
  }

  function abrirModalOnline() {
    // Login NÃO é obrigatório: abre direto. Sem token, busca uma identidade de
    // convidado em segundo plano (login serve só para salvar histórico).
    _mostrarModalOnline();
    if (!localStorage.getItem('dreamteam_token')) {
      garantirToken().catch(function () { /* tentará de novo na ação */ });
    }
  }

  function fecharModalOnline() {
    modalOnline.classList.add('escondida');
    document.body.style.overflow = '';
  }

  // Exposto para o main.js: a pílula "Brasileirão - Online" + "Jogar agora" abrem o online.
  window.abrirModalOnline = abrirModalOnline;

  // ── Helpers ───────────────────────────────────────────────────────────────

  function htmlEsc(str) {
    if (window.UI && UI.esc) return UI.esc(str);
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function getMeuId() {
    var token = localStorage.getItem('dreamteam_token');
    if (!token) return null;
    try {
      var payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      return payload.id;
    } catch (e) { return null; }
  }

  // Aviso sonoro leve quando chega a vez do jogador (gerado, sem arquivo de áudio).
  var _audioCtx = null;
  function tocarAvisoVez() {
    try {
      if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var ctx = _audioCtx;
      if (ctx.state === 'suspended') ctx.resume();
      var t = ctx.currentTime;
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(880, t);
      o.frequency.exponentialRampToValueAtTime(1320, t + 0.12);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.13, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
      o.connect(g); g.connect(ctx.destination);
      o.start(t); o.stop(t + 0.35);
    } catch (e) { /* sem áudio, tudo bem */ }
  }

  // ── Conexão ───────────────────────────────────────────────────────────────

  function _doConectar(callback) {
    var token = localStorage.getItem('dreamteam_token');
    if (socket && socket.connected) { if (callback) callback(); return; }
    if (socket) socket.disconnect();

    var _bk = (typeof BACKEND_URL !== 'undefined') ? BACKEND_URL : '';
    socket = io(_bk, { auth: { token: token }, transports: ['websocket', 'polling'] });
    setupEventos();
    socket.on('connect',       function () { if (callback) callback(); });
    socket.on('connect_error', function (err) {
      erroOnline('Erro de conexão: ' + (err.message || 'tente novamente'));
    });
  }

  function conectar(callback) {
    if (typeof io !== 'undefined') { _doConectar(callback); return; }

    // socket.io.js ainda não carregou (race condition na inicialização do Docker)
    // — injeta o script dinamicamente e tenta novamente
    var s = document.createElement('script');
    s.src = '/socket.io/socket.io.js';
    s.onload  = function () { _doConectar(callback); };
    s.onerror = function () {
      erroOnline('Servidor WebSocket indisponível. Verifique se o Docker está rodando e recarregue a página.');
    };
    document.head.appendChild(s);
  }

  function desconectar() {
    pararTimer();
    if (socket) { socket.disconnect(); socket = null; }
    codigoSala       = null;
    hostUserId       = null;
    ehHost           = false;
    minhaVez         = false;
    rodadaAtual      = 0;
    simulandoRodada  = false;
    seguidoKey       = null;
    if (barraEspectador) barraEspectador.classList.add('escondida');
    poolLocal        = [];
    allPlayers       = {};
    ordemDraftIds    = [];
    indiceTurnoAtual = 0;
    selectedPlayer   = null;
    selectedSlot     = null;
    repositionFrom   = null;
    euVoteiPular     = false;
    skipVotos        = 0;
    skipTotal        = 0;
    animacaoAtiva    = false;
    pararAnimacaoPartida();
  }

  // ── Eventos Socket ────────────────────────────────────────────────────────

  function setupEventos() {
    socket.on('session:me',       onSessionMe);
    socket.on('room:state',       onRoomState);
    socket.on('room:playerOrder', onPlayerOrder);
    socket.on('grupos:sorteio',   onGruposSorteio);
    socket.on('grupos:pular',     onGruposPular);
    socket.on('gdraft:start',      onGdraftStart);
    socket.on('gdraft:turnoGrupo', onGdraftTurnoGrupo);
    socket.on('gdraft:yourPick',   onGdraftYourPick);
    socket.on('gdraft:picked',     onGdraftPicked);
    socket.on('gdraft:complete',   onGdraftComplete);
    socket.on('draft:turno',      onDraftTurno);
    socket.on('draft:yourTurn',   onDraftYourTurn);
    socket.on('draft:pick',       onDraftPickEvt);
    socket.on('draft:moved',      onDraftMoved);
    socket.on('draft:complete',   onDraftComplete);
    socket.on('ready:count',      onReadyCount);
    socket.on('round:start',      onRoundStart);
    socket.on('round:results',    onRoundResults);
    socket.on('grupos:fim',       onGruposFim);
    socket.on('chave:state',      onChaveState);
    socket.on('chave:results',    onChaveResults);
    socket.on('chave:prontos',    onProntos);
    socket.on('round:skipVotes',  onSkipVotes);
    socket.on('game:end',         onGameEnd);
    socket.on('champions:faseLigaFim', onChampionsFaseLigaFim);
    socket.on('champions:playoff',     onChampionsPlayoff);
    socket.on('erro',             function (msg) {
      erroOnline(msg);
      // Destrava os botões do lobby caso uma ação (ex.: Começar) tenha falhado.
      if (btnLobbyComecar) { btnLobbyComecar.disabled = false; btnLobbyComecar.textContent = 'Começar →'; }
      if (btnLobbyPronto)  { btnLobbyPronto.disabled  = false; }
    });
  }

  // session:me — o servidor diz qual é o MEU userId (fonte da verdade da identidade)
  function onSessionMe(dados) {
    if (dados && dados.userId != null) meuUserId = dados.userId;
  }

  // room:state — lobby
  function onRoomState(sala) {
    codigoSala = sala.codigo;
    if (lobbyCodigo) lobbyCodigo.textContent = codigoSala || '----';
    hostUserId = sala.hostUserId;
    ehHost     = String(meuUserId) === String(hostUserId);

    // Atualiza dados dos jogadores
    (sala.jogadores || []).forEach(function (j) {
      if (!allPlayers[j.userId]) allPlayers[j.userId] = {};
      Object.assign(allPlayers[j.userId], j);
    });

    // Só mexe na UI do lobby enquanto a sala estiver no lobby (evita "Iniciando..."
    // preso e flicker depois que o draft começa).
    if (sala.status && sala.status !== 'lobby') return;

    var prontos = sala.prontos || 0;
    var total   = sala.total   || 0;

    lobbyProntosCount.textContent = prontos + '/' + total + ' prontos';

    // Renderiza lista de jogadores no lobby (box-score à direita)
    renderLobbyJogadores(sala.jogadores || []);

    // Campo: mostra a formação já escolhida pelo usuário atual (slots vazios)
    var eu = (sala.jogadores || []).find(function (j) { return String(j.userId) === String(meuUserId); });
    if (eu) renderCampoOnline(lobbyCampo, eu.picks || [], eu.formacao || '4-3-3');

    // Pré-preenche o nome do time (logado → nome do cadastro; convidado → "Seu time"),
    // sem sobrescrever o que o usuário já tiver digitado.
    if (lobbyNomeTime && !lobbyNomeTime.value && eu && eu.nomeDoTime) {
      lobbyNomeTime.value = eu.nomeDoTime;
    }

    // Botões host
    // O "Começar" é do host e aparece quando todos os humanos estão prontos
    // (mínimo 1 — as vagas restantes da liga viram bots no início).
    if (ehHost && prontos >= total && total >= 1) {
      btnLobbyComecar.classList.remove('escondida');
      btnLobbyComecar.disabled    = false;
      btnLobbyComecar.textContent = 'Começar →';
      btnLobbyPronto.classList.add('escondida');
    } else {
      btnLobbyComecar.classList.add('escondida');
      btnLobbyPronto.classList.remove('escondida');
      var jaPronto = !!(eu && eu.pronto);
      btnLobbyPronto.disabled = jaPronto;
      btnLobbyPronto.textContent = jaPronto ? 'Aguardando...' : 'Pronto ✓';
    }

    if (sala.status === 'lobby') subview('online-lobby');
  }

  // ── Sorteio de Grupos (Copa/Libertadores) ─────────────────────────────────
  var sorteioTimer    = null;
  var sorteioSeq      = [];
  var sorteioIdx      = 0;
  var sorteioPorGrupo = 4;
  var sorteioLetras   = [];

  // grupos:sorteio — servidor manda a sequência pronta; o cliente anima.
  function onGruposSorteio(dados) {
    if (sorteioTimer) { clearInterval(sorteioTimer); sorteioTimer = null; }
    sorteioSeq      = dados.sequencia  || [];
    sorteioLetras   = dados.gruposNomes || [];
    sorteioPorGrupo = dados.porGrupo   || 4;
    sorteioIdx      = 0;

    var comp = document.getElementById('sorteio-comp');
    if (comp) comp.textContent = (dados.competicao || '').toUpperCase();
    var info = document.getElementById('sorteio-header-info');
    if (info) info.textContent = sorteioLetras.length + ' grupos · ' + sorteioSeq.length + ' seleções';

    renderSorteioGrade();
    resetSorteioBotoes(false);

    subview('online-sorteio');
    sorteioTimer = setInterval(passoSorteio, 420);
  }

  function renderSorteioGrade() {
    var grade = document.getElementById('sorteio-grade');
    if (!grade) return;
    var nGrupos = sorteioLetras.length;
    // Desktop: máx. 6 por linha (2 linhas). Celular: 2 colunas (nomes inteiros).
    var larg = window.innerWidth || 1024;
    var colunas;
    if (larg <= 600)      colunas = 2;
    else if (larg <= 900) colunas = 3;
    else                  colunas = Math.min(6, Math.ceil(nGrupos / 2));
    grade.style.gridTemplateColumns = 'repeat(' + colunas + ', minmax(0, 1fr))';
    grade.style.maxWidth = (larg <= 900) ? '100%' : (colunas * 200) + 'px';
    grade.style.margin   = '0 auto';
    var html = '';
    sorteioLetras.forEach(function (L) {
      html += '<div class="sorteio-grupo" id="sgrupo-' + L + '">' +
                '<div class="sorteio-grupo-tit">Grupo ' + L + '</div>' +
                '<div class="sorteio-grupo-slots" id="sslots-' + L + '">';
      for (var i = 0; i < sorteioPorGrupo; i++) {
        html += '<div class="sorteio-slot">&mdash;</div>';
      }
      html += '</div></div>';
    });
    grade.innerHTML = html;
  }

  function passoSorteio() {
    if (sorteioIdx >= sorteioSeq.length) { finalizarSorteio(); return; }
    colocarNoSorteio(sorteioSeq[sorteioIdx], true);
    sorteioIdx++;
    if (sorteioIdx >= sorteioSeq.length) finalizarSorteio();
  }

  function colocarNoSorteio(item, animar) {
    var slotsEl = document.getElementById('sslots-' + item.grupo);
    var grupoEl = document.getElementById('sgrupo-' + item.grupo);
    if (!slotsEl || !grupoEl) return;
    var slots = slotsEl.querySelectorAll('.sorteio-slot');
    var idx = 0;
    while (idx < slots.length && slots[idx].dataset.preenchido === '1') idx++;
    if (idx >= slots.length) return;

    var slot = slots[idx];
    slot.dataset.preenchido = '1';
    slot.textContent = item.nomeDoTime;

    if (String(item.uid) === String(meuUserId)) {
      slot.classList.add('sorteio-slot-meu');
      grupoEl.classList.add('sorteio-grupo-meu');
    }
    if (animar) {
      var a = document.getElementById('sorteio-atual');
      var d = document.getElementById('sorteio-destino');
      if (a) a.textContent = item.nomeDoTime;
      if (d) d.textContent = '→ Grupo ' + item.grupo;
      slot.classList.add('sorteio-slot-novo');
      grupoEl.classList.add('sorteio-grupo-pulse');
      setTimeout(function () { grupoEl.classList.remove('sorteio-grupo-pulse'); }, 460);
    }
  }

  function finalizarSorteio() {
    if (sorteioTimer) { clearInterval(sorteioTimer); sorteioTimer = null; }
    var a = document.getElementById('sorteio-atual');
    var d = document.getElementById('sorteio-destino');
    if (a) a.textContent = 'Grupos definidos!';
    if (d) d.textContent = '';
    resetSorteioBotoes(true);
  }

  function resetSorteioBotoes(terminou) {
    var btnPular   = document.getElementById('btn-sorteio-pular');
    var btnAvancar = document.getElementById('btn-sorteio-avancar');
    var aguardando = document.getElementById('sorteio-aguardando');
    if (ehHost) {
      // Pular some ao terminar; Avançar fica sempre visível ao lado, clicável só no fim.
      if (btnPular)   btnPular.classList.toggle('escondida', terminou);
      if (btnAvancar) { btnAvancar.classList.remove('escondida'); btnAvancar.disabled = !terminou; }
      if (aguardando) aguardando.classList.add('escondida');
    } else {
      if (btnPular)   btnPular.classList.add('escondida');
      if (btnAvancar) btnAvancar.classList.add('escondida');
      if (aguardando) aguardando.classList.toggle('escondida', !terminou);
    }
  }

  // grupos:pular — todos pulam a animação e veem os grupos já preenchidos.
  function onGruposPular() {
    if (sorteioTimer) { clearInterval(sorteioTimer); sorteioTimer = null; }
    for (; sorteioIdx < sorteioSeq.length; sorteioIdx++) {
      colocarNoSorteio(sorteioSeq[sorteioIdx], false);
    }
    finalizarSorteio();
  }

  // ── Draft por grupo (Bloco B) — reaproveita a subview #online-draft ─────────
  var draftEhGrupo      = false;
  var gPodeEscolher     = false;
  var gGrupos           = {};
  var gOrdemGrupos      = [];
  var gPicksNecessarios = 11;
  var gGrupoAtivo       = null;
  var gPickNum          = 1;
  var gPicksSnap        = {};
  var gPicksTurno       = 1;      // picks que o turno de grupo concede (2, ou 1 no último)
  var gPicksFeitosTurno = 0;      // picks que EU já fiz no turno atual
  var gTotalTurnos      = 6;
  var gVisualizandoUid  = null;   // uid do time que estou olhando no campo (null = o meu)

  function onGdraftStart(dados) {
    draftEhGrupo      = true;
    gGrupos           = (dados && dados.grupos) || {};
    gOrdemGrupos      = (dados && dados.ordemGrupos) || [];
    gPicksNecessarios = (dados && dados.picksNecessarios) || 11;
    gGrupoAtivo       = null;
    gPickNum          = 1;
    gPicksSnap        = {};
    gPicksTurno       = 1;
    gPicksFeitosTurno = 0;
    gPodeEscolher     = false;
    draftResortsRestantes = 3;   // 3 re-sorteios para todo o draft (faltava resetar aqui — "Re-sortear 0" na Copa)

    subview('online-draft');
    var titulo = document.getElementById('online-draft-titulo');
    if (titulo) titulo.textContent = 'Draft por Grupo';
    if (draftSubtituloEl) draftSubtituloEl.textContent = 'Turno 1 / ' + gTotalTurnos;

    var minhaForm = (allPlayers[meuUserId] && allPlayers[meuUserId].formacao) || '4-3-3';
    if (draftCampo) renderCampoOnline(draftCampo, [], minhaForm);
    renderMeuTime();
    renderPainelGrupos();
    if (draftCarouselWrap) draftCarouselWrap.classList.add('escondida');
    fecharModalDraftPick();
  }

  // gdraft:turnoGrupo — é a vez de um grupo (todos dele escolhem em paralelo).
  function onGdraftTurnoGrupo(dados) {
    gGrupoAtivo = dados.grupo;
    gPickNum    = dados.pickNumero || 1;     // nº do TURNO (1..6)
    gPicksTurno = dados.picksTurno || 1;     // picks deste turno (2, ou 1 no último)
    gTotalTurnos = dados.totalTurnos || gTotalTurnos;
    gPicksFeitosTurno = 0;                   // novo turno: ainda não escolhi nada
    if (dados.picks) gPicksSnap = dados.picks;

    // O título do header continua "THE DREAM TEAM"; o grupo vai para o slogan
    // (antes o grupo sobrescrevia o título, apagando o nome do jogo).
    var titulo = document.getElementById('online-draft-titulo');
    if (titulo) titulo.textContent = 'THE DREAM TEAM';
    var subMarca = document.getElementById('draft-subtitulo-marca');
    if (subMarca) subMarca.textContent = 'GRUPO ' + dados.grupo;
    atualizarSubtituloGrupo();

    renderPainelGrupos();

    var membros   = (gGrupos[dados.grupo] || []).map(String);
    var euNoGrupo = membros.indexOf(String(meuUserId)) >= 0;

    if (euNoGrupo) {
      gPodeEscolher    = true;          // posso clicar nas vagas; as cartas chegam em gdraft:yourPick
      gVisualizandoUid = null;          // na minha vez, sempre volto pro MEU time
      selectedPlayer = null; selectedSlot = null;
      verTimeDoUsuario(meuUserId);      // mostra meu campo e destaca as vagas
      if (dados.segundos > 0) iniciarTimer(dados.segundos); else pararTimer();
      tocarAvisoVez();
      if (ehCelular()) setTimeout(function () { scrollParaEl(document.getElementById('draft-campo')); }, 120);
    } else {
      gPodeEscolher = false;
      verTimeDoUsuario(gVisualizandoUid || meuUserId);   // mantém o time que estou olhando
      limparDestaquesVaga();
      if (draftCarouselWrap) draftCarouselWrap.classList.add('escondida');
      fecharModalDraftPick();
      pararTimer();
    }
  }

  // Subtítulo do draft de grupos: "Turno X / 6" (+ "· pick Y/2" quando o turno dá 2 picks).
  function atualizarSubtituloGrupo() {
    if (!draftSubtituloEl) return;
    var txt = 'Turno ' + gPickNum + ' / ' + gTotalTurnos;
    if (gPicksTurno > 1) txt += ' \u00b7 pick ' + Math.min(gPicksFeitosTurno + 1, gPicksTurno) + '/' + gPicksTurno;
    draftSubtituloEl.textContent = txt;
  }

  // gdraft:yourPick — minhas cartas para o pick atual (mapa por posição, já validado).
  function onGdraftYourPick(dados) {
    poolPorPosicao = (dados && dados.porPosicao) || {};
    if (dados && typeof dados.picksTurno === 'number')       gPicksTurno = dados.picksTurno;
    if (dados && typeof dados.picksFeitosTurno === 'number') gPicksFeitosTurno = dados.picksFeitosTurno;
    gPodeEscolher  = true;
    gVisualizandoUid = null;
    selectedPlayer = null; selectedSlot = null;
    atualizarSubtituloGrupo();
    verTimeDoUsuario(meuUserId);
  }

  // gdraft:picked — alguém escolheu (broadcast).
  function onGdraftPicked(dados) {
    if (dados.picks) gPicksSnap = dados.picks;
    if (dados.jogador) {
      allPlayers[dados.userId] = allPlayers[dados.userId] || {};
      allPlayers[dados.userId].picks = allPlayers[dados.userId].picks || [];
      var slotIdx = (typeof dados.slotIndex === 'number')
        ? dados.slotIndex
        : allPlayers[dados.userId].picks.filter(Boolean).length;
      allPlayers[dados.userId].picks[slotIdx] = dados.jogador;
      poolLocal = poolLocal.filter(function (p) { return p.id !== dados.jogador.id; });

      if (String(dados.userId) === String(meuUserId)) {
        // Contabiliza minha pick no turno. Se ainda falta (1/2), o servidor reabre minha
        // vez via gdraft:yourPick; senão, fecho o turno e fico aguardando o grupo.
        if (typeof dados.picksFeitosTurno === 'number') gPicksFeitosTurno = dados.picksFeitosTurno;
        else gPicksFeitosTurno++;
        var fecheiTurno = gPicksFeitosTurno >= gPicksTurno;
        if (fecheiTurno) {
          gPodeEscolher = false;
          limparDestaquesVaga();
          fecharModalDraftPick();
          pararTimer();
        }
        selectedPlayer = null; selectedSlot = null;
        atualizarSubtituloGrupo();
      }
      mostrarCampoDaVez(gVisualizandoUid || meuUserId);
      renderMeuTime();
    }
    renderPainelGrupos();
  }

  // gdraft:complete — elencos completos → tela de elencos/pronto (fase de grupos a seguir).
  function onGdraftComplete(dados) {
    draftEhGrupo  = false;
    gPodeEscolher = false;
    gVisualizandoUid = null;
    pararTimer();
    fecharModalDraftPick();
    if (dados && dados.jogadores) {
      dados.jogadores.forEach(function (j) {
        allPlayers[j.userId] = Object.assign(allPlayers[j.userId] || {}, j);
      });
    }
    if (draftCarouselWrap) draftCarouselWrap.classList.add('escondida');
    limparDestaquesVaga();

    // Vai para a tela de elencos: cada um confirma "Pronto" e o host inicia a fase de grupos.
    subview('online-elencos');
    renderElencos();
    if (elencosProntosCount) elencosProntosCount.textContent = '0/? Prontos';
    if (btnElencosPronto)  { btnElencosPronto.disabled = false; btnElencosPronto.textContent = 'Pronto ✓'; }
    if (btnElencosComecar) btnElencosComecar.classList.add('escondida');
  }

  // Painel lateral: grupos com status de cada participante na rodada atual.
  // Letra do MEU grupo (procura nos membros de cada grupo).
  function meuGrupoLetra() {
    for (var i = 0; i < gOrdemGrupos.length; i++) {
      var membros = gGrupos[gOrdemGrupos[i]] || [];
      if (membros.some(function (u) { return String(u) === String(meuUserId); })) return gOrdemGrupos[i];
    }
    return null;
  }

  // Total de picks que um jogador deve ter ao FECHAR o turno T (1-based): [2,4,6,8,10,11].
  function picksAlvoAteTurno(turno) {
    var seq = [2, 2, 2, 2, 2, 1], acc = 0;
    for (var i = 0; i < turno && i < seq.length; i++) acc += seq[i];
    return acc;
  }
  // Um uid já fechou o turno atual? (total de picks atingiu o alvo acumulado do turno).
  function fechouTurno(uid) {
    return ((gPicksSnap && gPicksSnap[uid]) || 0) >= picksAlvoAteTurno(gPickNum);
  }

  // Texto de status: de quem é a vez agora e quanto falta pra minha.
  function textoStatusDraft() {
    var meuG = meuGrupoLetra();
    if (!meuG || !gGrupoAtivo) return '';
    if (gGrupoAtivo === meuG) {
      return fechouTurno(meuUserId) ? 'Você já escolheu — aguardando os outros grupos…' : 'É a sua vez! Escolha um jogador.';
    }
    var iAtivo = gOrdemGrupos.indexOf(gGrupoAtivo);
    var iMeu   = gOrdemGrupos.indexOf(meuG);
    if (iMeu > iAtivo) {
      var faltam = iMeu - iAtivo;
      return 'Escolhendo: Grupo ' + gGrupoAtivo + ' · sua vez em ' + faltam + (faltam === 1 ? ' grupo' : ' grupos');
    }
    return 'Escolhendo: Grupo ' + gGrupoAtivo + ' · você já escolheu nesta rodada';
  }

  function renderPainelGrupos() {
    var cont = document.getElementById('draft-ordem-lista');
    if (!cont) return;
    var status = textoStatusDraft();
    var minhaVez = (gGrupoAtivo && gGrupoAtivo === meuGrupoLetra() && !fechouTurno(meuUserId));
    var html = status ? '<div class="gdraft-status' + (minhaVez ? ' gdraft-status-vez' : '') + '">' + htmlEsc(status) + '</div>' : '';
    gOrdemGrupos.forEach(function (L) {
      var ativo   = (L === gGrupoAtivo);
      var membros = gGrupos[L] || [];
      var temMeu  = membros.some(function (u) { return String(u) === String(meuUserId); });
      html += '<div class="gdraft-grupo' + (ativo ? ' gdraft-grupo-ativo' : '') + (temMeu ? ' gdraft-grupo-meu' : '') + '">';
      html += '<div class="gdraft-grupo-cab">Grupo ' + L + (ativo ? ' · escolhendo' : '') + '</div>';
      membros.forEach(function (uid) {
        var p      = allPlayers[uid] || {};
        var nome   = p.nomeDoTime || p.username || 'Time';
        var pronto = fechouTurno(uid);
        var ehMeu  = String(uid) === String(meuUserId);
        var vendo  = String(uid) === String(gVisualizandoUid);
        // Badge "1/2" só no membro ativo que ainda não fechou um turno de 2 picks.
        var badge  = '';
        if (ativo && !pronto && gPicksTurno > 1 && ehMeu) {
          badge = ' <span class="gdraft-membro-badge">' + Math.min(gPicksFeitosTurno + 1, gPicksTurno) + '/' + gPicksTurno + '</span>';
        }
        var statusTxt, statusCls;
        if (ativo) { statusTxt = pronto ? 'Pronto' : 'Escolhendo…'; statusCls = pronto ? ' ok' : ' escolhendo'; }
        else       { statusTxt = pronto ? '✓' : '·';                statusCls = pronto ? ' ok' : ''; }
        html += '<div class="gdraft-membro' + (ehMeu ? ' gdraft-membro-meu' : '') + (vendo ? ' gdraft-membro-vendo' : '') +
                  '" data-uid="' + htmlEsc(String(uid)) + '" title="Ver o time de ' + htmlEsc(nome) + '">' +
                  '<span class="gdraft-membro-nome">' + htmlEsc(nome) + '</span>' +
                  '<span class="gdraft-membro-status' + statusCls + '">' + statusTxt + badge + '</span>' +
                '</div>';
      });
      html += '</div>';
    });
    cont.innerHTML = html;
  }

  // Envia o pick no canal certo conforme o modo (snake ou grupo).
  function enviarPick() {
    if (!selectedPlayer || selectedSlot === null) return false;
    if (draftEhGrupo) {
      if (!gPodeEscolher) return false;
      socket.emit('gdraft:pick', { playerId: selectedPlayer.id, slotIndex: selectedSlot });
      gPodeEscolher = false;
    } else {
      if (String(draftTurnoUid) !== String(meuUserId)) return false;
      socket.emit('draft:pick', { playerId: selectedPlayer.id, slotIndex: selectedSlot });
      minhaVez = false;
    }
    selectedPlayer = null;
    selectedSlot   = null;
    return true;
  }

  // room:playerOrder — início do draft
  function onPlayerOrder(dados) {
    ordemDraftIds    = dados.ordem || [];
    indiceTurnoAtual = 0;
    draftResortsRestantes = 3;   // 3 re-sorteios para todo o draft (igual ao offline)
    _campanhaOnlineSalva  = false;
    subview('online-draft');
    renderOrdemLista();
    // Desenha o campo já com as posições da minha formação (vazio), desde o início.
    var minhaForm = (allPlayers[meuUserId] && allPlayers[meuUserId].formacao) || '4-3-3';
    if (draftCampo) renderCampoOnline(draftCampo, [], minhaForm);
    renderMeuTime();
  }

  // draft:turno — vez de alguém
  function onDraftTurno(dados) {
    minhaVez         = String(dados.userId) === String(meuUserId);
    draftTurnoUid    = dados.userId;
    poolLocal        = dados.pool || [];
    indiceTurnoAtual = dados.turnoNum ? dados.turnoNum - 1 : indiceTurnoAtual;
    draftPicksTurno  = dados.picksTurno || 1;
    draftPicksFeitos = dados.picksFeitosTurno || 0;
    if (dados.picks) picksSnapshot = dados.picks;   // contagem autoritativa p/ a lista de ordem
    if (dados.ordemBase && dados.ordemBase.length) ordemDraftIds = dados.ordemBase;  // ordem idêntica p/ todos

    draftSubtituloEl.textContent = 'Turno ' + (dados.turnoNum || '?') + ' / ' + (dados.totalTurnos || '?')
      + (draftPicksTurno > 1 ? ' \u00b7 pick ' + (draftPicksFeitos + 1) + '/' + draftPicksTurno : '');

    // Som só no INÍCIO do turno — não repete no 2º pick (re-emit da mesma vez).
    if (minhaVez && draftPicksFeitos === 0) tocarAvisoVez();

    renderOrdemLista();
    mostrarCampoDaVez(dados.userId);   // o campo segue o time do jogador da vez
    renderMeuTime();
    // Timer visível para TODOS: mostra a contagem do jogador da vez (só humanos têm relógio).
    if (dados.segundos > 0) iniciarTimer(dados.segundos);
    else                    pararTimer();

    if (minhaVez) {
      iniciarMinhaVez();
    } else {
      limparDestaquesVaga();
      draftCarouselWrap.classList.add('escondida');
      fecharModalDraftPick();
    }
  }

  // Prepara a MINHA vez: acende as vagas abertas (clicáveis). A escolha do jogador
  // acontece no MODAL (fundo opaco) ao clicar numa posição — não há carousel inline.
  function iniciarMinhaVez() {
    selectedPlayer = null;
    selectedSlot   = null;
    limparDestaquesVaga();
    destacarVagasAbertas();
    if (draftCarouselWrap) draftCarouselWrap.classList.add('escondida');
    if (modalDraftPick)    modalDraftPick.classList.add('escondida');
  }

  // Acende todas as vagas ABERTAS do meu time (clicáveis para escolher a posição).
  function destacarVagasAbertas() {
    if (!draftCampo) return;
    var meu = allPlayers[meuUserId] || {};
    draftCampo.querySelectorAll('.slot-ol').forEach(function (slot, i) {
      slot.classList.remove('vaga-valida', 'vaga-selecionada', 'vaga-origem');
      var ocupado = meu.picks && meu.picks[i];
      if (!ocupado) slot.classList.add('vaga-valida');
    });
  }

  // draft:yourTurn — confirmação ao jogador da vez
  function onDraftYourTurn(dados) {
    // O broadcast draft:turno é a fonte da verdade da vez. Só age se for REALMENTE
    // a minha vez — assim um socketId velho/compartilhado não "vira a vez" de quem não é.
    if (String(draftTurnoUid) !== String(meuUserId)) return;
    minhaVez = true;
    if (dados && dados.pool && dados.pool.length) poolLocal = dados.pool;
    iniciarMinhaVez();
  }

  // draft:pick — alguém escolheu (broadcast)
  function onDraftPickEvt(dados) {
    pararTimer();
    minhaVez = false;
    draftCarouselWrap.classList.add('escondida');
    fecharModalDraftPick();

    if (dados.jogador) {
      if (!allPlayers[dados.userId]) allPlayers[dados.userId] = {};
      if (!allPlayers[dados.userId].picks) allPlayers[dados.userId].picks = [];
      // Coloca na vaga escolhida (indexado por slot); fallback: 1ª vaga livre.
      var slotIdx = (typeof dados.slotIndex === 'number')
        ? dados.slotIndex
        : allPlayers[dados.userId].picks.filter(Boolean).length;
      allPlayers[dados.userId].picks[slotIdx] = dados.jogador;

      // Remove do pool local
      poolLocal = poolLocal.filter(function (p) { return p.id !== dados.jogador.id; });

      // O campo mostra o time de quem acabou de escolher (o pick "aterrissa").
      mostrarCampoDaVez(dados.userId);
      renderMeuTime();

      // Se foi meu pick, limpa a seleção/destaques.
      if (String(dados.userId) === String(meuUserId)) {
        limparDestaquesVaga();
        selectedPlayer = null;
        selectedSlot   = null;
      }
    }

    indiceTurnoAtual++;
    renderOrdemLista();
  }

  // draft:moved — alguém remanejou/trocou jogadores já escalados (broadcast)
  function onDraftMoved(dados) {
    if (!dados || dados.picks == null) return;
    allPlayers[dados.userId] = allPlayers[dados.userId] || {};
    allPlayers[dados.userId].picks = dados.picks;
    if (String(dados.userId) === String(meuUserId)) {
      mostrarCampoDaVez(dados.userId);
      renderMeuTime();
      limparDestaquesVaga();
      // Reacende as vagas abertas (douradas) que ainda preciso preencher — senão o
      // re-render disparado pelo servidor deixava o campo "apagado" após mover.
      var podeAgora = draftEhGrupo ? gPodeEscolher : (String(draftTurnoUid) === String(meuUserId));
      if (podeAgora && repositionFrom === null) destacarVagasAbertas();
    }
  }

  // draft:complete — todos escolheram
  function onDraftComplete(dados) {
    pararTimer();
    minhaVez = false;
    draftCarouselWrap.classList.add('escondida');

    if (dados && dados.jogadores) {
      dados.jogadores.forEach(function (j) {
        allPlayers[j.userId] = Object.assign(allPlayers[j.userId] || {}, j);
      });
    }
    fecharModalDraftPick();

    subview('online-elencos');
    renderElencos();
    elencosProntosCount.textContent = '0/? Prontos';
    btnElencosPronto.disabled    = false;
    btnElencosPronto.textContent = 'Pronto ✓';
    btnElencosComecar.classList.add('escondida');
  }

  // ready:count — votos para começar
  function onReadyCount(dados) {
    elencosProntosCount.textContent = dados.prontos + '/' + dados.total + ' Prontos';

    if (ehHost && dados.prontos >= dados.total && dados.total >= 2) {
      btnElencosComecar.classList.remove('escondida');
    }
  }

  // round:start — nova rodada
  function onRoundStart(dados) {
    rodadaAtual     = dados.rodada || 1;
    totalRodadas    = dados.total  || 38;
    formatoOnline   = dados.formato || formatoOnline;
    simulandoRodada = false;
    championsFimLiga = false;
    pararAnimacaoPartida();
    euVoteiPular    = false;
    skipVotos       = 0;
    skipTotal       = 0;
    renderSkipContador();

    var ehGrupos = formatoOnline === 'mata';
    gruposEncerrados = false;
    emMataMata = false;
    var bannerMataEl = document.getElementById('grupos-mata-banner');
    if (bannerMataEl) bannerMataEl.classList.add('escondida');
    configurarAbasRodada();
    rodadaTituloEl.textContent = (ehGrupos ? 'FASE DE GRUPOS · RODADA ' : 'RODADA ') + rodadaAtual + ' DE ' + totalRodadas;
    var infoEl = document.getElementById('rodada-header-info');
    if (infoEl) infoEl.textContent = ehGrupos
      ? 'FASE DE GRUPOS · ' + totalRodadas + ' RODADAS'
      : ((formatoOnline === 'champions' ? '36 TIMES · ' : '20 TIMES · ') + totalRodadas + ' RODADAS');
    rodadaPartidas.innerHTML   = '<p style="color:#888;text-align:center;padding:2rem">Simulando rodada ' + rodadaAtual + '…</p>';
    btnRodadaProxima.classList.add('escondida');
    btnRodadaFim.classList.add('escondida');
    selecionarAbaRodada('partidas');

    subview('online-rodada');

    // Só o host dispara a simulação; os demais recebem o resultado por broadcast.
    if (ehHost && socket && socket.connected) {
      simulandoRodada = true;
      socket.emit('round:simulate');
    }
  }

  // Alterna entre as abas "Partidas", "Classificação/Grupos" e "Mata-a-Mata"
  function selecionarAbaRodada(qual) {
    var abas = { partidas: abaPartidas, classif: abaClassif, chave: abaChave };
    var tabs = { partidas: tabPartidas, classif: tabClassif, chave: tabChave };
    Object.keys(abas).forEach(function (k) {
      if (abas[k]) abas[k].classList.toggle('escondida', k !== qual);
      if (tabs[k]) tabs[k].classList.toggle('ativa', k === qual);
    });
  }

  // Configura os rótulos/visibilidade das abas conforme o formato (liga x grupos+mata).
  function configurarAbasRodada() {
    var mata = formatoOnline === 'mata';
    if (tabClassif) tabClassif.textContent = mata ? 'Grupos' : 'Classificação';
    if (tabChave)   tabChave.classList.toggle('escondida', !mata);
    var compEl = document.getElementById('rodada-comp');
    if (compEl) compEl.textContent = (window.__compOnline || (mata ? 'Copa do Mundo' : 'Brasileirão')).toUpperCase();
  }

  function pararAnimacaoPartida() { if (animTimer) { clearTimeout(animTimer); animTimer = null; } animacaoAtiva = false; }

  // Card grande da partida do usuário — ANIMA o jogo (relógio + gols + placar ao vivo).
  function cardPartidaGrande(m) {
    pararAnimacaoPartida();
    animacaoAtiva = true;
    var persp  = seguidoKey || minhaKey();   // perspectiva = time que estou seguindo
    var euCasa = homeKey(m) === persp;
    var euFora = awayKey(m) === persp;
    // Vencedor: tempo normal e, se empatou, a disputa de pênaltis (m.pen).
    var venceMandante = (m.gHome !== m.gAway) ? (m.gHome > m.gAway)
                      : (m.pen && m.pen.length === 2) ? (m.pen[0] > m.pen[1])
                      : null;
    var res = (venceMandante === null) ? 'empate'
            : (((euCasa && venceMandante) || (euFora && !venceMandante)) ? 'vitoria' : 'derrota');

    var card = document.createElement('div');
    card.className = 'partida-grande anim';
    card.innerHTML =
      '<div class="pg-topo">' +
        '<div class="pg-time' + (euCasa ? ' eu' : '') + '">' + htmlEsc(m.homeNome || 'Time') + (m.homeBot ? ' <span class="draft-bot-tag">BOT</span>' : '') + '</div>' +
        '<div class="pg-centro">' +
          '<div class="pg-relogio">0\'</div>' +
          '<div class="pg-placar"><span class="pg-gh">0</span><span class="placar-sep"> × </span><span class="pg-ga">0</span></div>' +
          '<div class="pg-pen"></div>' +
        '</div>' +
        '<div class="pg-time dir' + (euFora ? ' eu' : '') + '">' + htmlEsc(m.awayNome || 'Time') + (m.awayBot ? ' <span class="draft-bot-tag">BOT</span>' : '') + '</div>' +
      '</div>' +
      '<div class="pg-gols"></div>';

    var eventos = (m.fila || []).slice().filter(function (ev) {
      return ev.lado === 'meu' ? (ev.autor && ev.autor.nome) : (ev.autorAdv && ev.autorAdv.nome);
    }).sort(function (a, b) { return a.minuto - b.minuto; });

    var relEl  = card.querySelector('.pg-relogio');
    var ghEl   = card.querySelector('.pg-gh');
    var gaEl   = card.querySelector('.pg-ga');
    var golsEl = card.querySelector('.pg-gols');
    var gh = 0, ga = 0, idx = 0, minuto = 0;
    var CADENCIA = 55;   // ms por minuto de jogo (~5s no total)

    function linhaGol(ev, nova) {
      var ladoCasa = ev.lado === 'meu';
      var autor  = ladoCasa ? ev.autor.nome  : ev.autorAdv.nome;
      var assist = ladoCasa ? (ev.assist && ev.assist.nome) : (ev.assistAdv && ev.assistAdv.nome);
      var d = document.createElement('div');
      d.className = 'pg-gol ' + (ladoCasa ? 'esq' : 'dir') + (nova ? ' pg-gol-novo' : '');
      d.innerHTML = '<span class="pg-min">' + ev.minuto + "'</span> " +
                    '<span class="pg-autor">⚽ ' + htmlEsc(autor) + '</span>' +
                    (assist ? '<span class="pg-assist"> (' + htmlEsc(assist) + ')</span>' : '');
      return d;
    }
    function finalizar() {
      pararAnimacaoPartida();
      if (relEl) relEl.textContent = 'ENC';
      if (ghEl) ghEl.textContent = m.gHome;
      if (gaEl) gaEl.textContent = m.gAway;
      card.classList.remove('anim');
      card.classList.add(res);
      golsEl.innerHTML = '';
      if (eventos.length) {
        eventos.forEach(function (ev) { golsEl.appendChild(linhaGol(ev, false)); });
      } else {
        golsEl.className = 'pg-gols pg-sem';
        golsEl.textContent = 'Sem gols na partida';
      }

      var temPen = m.pen && m.pen.length === 2;
      if (temPen && relEl) relEl.textContent = 'PÊN';

      function concluir() {
        animacaoAtiva = false;
        if (temPen) {
          var penEl = card.querySelector('.pg-pen');
          if (penEl) penEl.textContent = 'pênaltis ' + m.pen[0] + ' × ' + m.pen[1];
        }
        atualizarAcoesRodada();   // libera os botões só após o fim/pulo da animação
        if (typeof aoFimDaAnimacao === 'function') { var cb = aoFimDaAnimacao; aoFimDaAnimacao = null; cb(); }
      }

      // Disputa de pênaltis animada, na perspectiva do time seguido.
      if (temPen && m.penSeq && m.penSeq.length && window.Penaltis && Penaltis.disputar) {
        var sequencia = m.penSeq.map(function (k) {
          var lado = (k.lado === 'a') ? (euCasa ? 'meu' : 'adv') : (euCasa ? 'adv' : 'meu');
          return { lado: lado, nome: k.nome, resultado: k.resultado };
        });
        var venceMand = m.pen[0] > m.pen[1];
        Penaltis.disputar({
          meuNome:    euCasa ? (m.homeNome || 'Mandante') : (m.awayNome || 'Visitante'),
          advNome:    euCasa ? (m.awayNome || 'Visitante') : (m.homeNome || 'Mandante'),
          sequencia:  sequencia,
          vencedor:   (euCasa === venceMand) ? 'meu' : 'adv',
          velocidade: 'normal',
          onFim:      concluir
        });
      } else {
        concluir();
      }
    }
    function tick() {
      minuto++;
      if (relEl) relEl.textContent = minuto + "'";
      while (idx < eventos.length && eventos[idx].minuto <= minuto) {
        var ev = eventos[idx++];
        if (ev.lado === 'meu') { gh++; if (ghEl) ghEl.textContent = gh; }
        else                   { ga++; if (gaEl) gaEl.textContent = ga; }
        golsEl.appendChild(linhaGol(ev, true));
      }
      if (minuto >= 90) { finalizar(); return; }
      animTimer = setTimeout(tick, CADENCIA);
    }

    card.addEventListener('click', finalizar);   // clique para pular a animação
    animTimer = setTimeout(tick, 350);            // começa após o card entrar no DOM
    return card;
  }

  // Card pequeno das outras partidas
  function cardPartidaPequena(m) {
    var card = document.createElement('div');
    card.className = 'partida-mini';
    card.innerHTML =
      '<span class="pm-time">' + htmlEsc(m.homeNome || 'Time') + (m.homeBot ? ' <span class="draft-bot-tag">BOT</span>' : '') + '</span>' +
      '<span class="pm-placar">' + m.gHome + ' × ' + m.gAway + '</span>' +
      '<span class="pm-time dir">' + htmlEsc(m.awayNome || 'Time') + (m.awayBot ? ' <span class="draft-bot-tag">BOT</span>' : '') + '</span>';
    return card;
  }

  // Monta a lista de confrontos da 1ª fase do mata-mata (após o fim dos grupos),
  // destacando o meu. Retorna null se o mata-mata ainda não foi sorteado.
  function cardProximoAdversarioMata() {
    if (!gruposEncerrados) return null;
    if (!chaveOnline || !chaveOnline.rounds || !chaveOnline.rounds.length) return null;
    var primeira = chaveOnline.rounds[0] || [];
    if (!primeira.length) return null;
    var faseNome = (chaveOnline.fases && chaveOnline.fases[0]) || 'MATA-A-MATA';
    var wrap = document.createElement('div');
    wrap.className = 'proximo-mata-lista';
    wrap.innerHTML = '<span class="proximo-fase-tag">' + htmlEsc(faseNome) + '</span>';
    primeira.forEach(function (j) {
      var sou = (j.a && String(j.a.userId) === String(meuUserId)) ||
                (j.b && String(j.b.userId) === String(meuUserId));
      var linha = document.createElement('div');
      linha.className = 'proximo-mata-jogo' + (sou ? ' proximo-mata-meu' : '');
      linha.innerHTML =
        '<span class="pmj-time">' + (j.a ? htmlEsc(j.a.nome) : 'A definir') + '</span>' +
        '<span class="pmj-vs">x</span>' +
        '<span class="pmj-time pmj-time-dir">' + (j.b ? htmlEsc(j.b.nome) : 'A definir') + '</span>';
      wrap.appendChild(linha);
    });
    return wrap;
  }

  // Lista de próximos jogos (rodada seguinte), destacando o meu confronto
  function renderProximos(proxima) {
    if (!rodadaProximos) return;
    rodadaProximos.innerHTML = '';
    if (!proxima || !proxima.jogos || !proxima.jogos.length) {
      // Fim dos grupos: se o mata-mata já foi sorteado (chaveOnline existe) e eu me
      // classifiquei, mostro meu primeiro adversário do mata-mata aqui. Senão, aviso.
      var card = cardProximoAdversarioMata();
      if (card) {
        if (proximosTitulo) proximosTitulo.textContent = 'CONFRONTOS DO MATA-MATA';
        rodadaProximos.appendChild(card);
        return;
      }
      if (proximosTitulo) proximosTitulo.textContent = 'PRÓXIMA RODADA';
      rodadaProximos.innerHTML = '<p style="color:#666;font-size:0.75rem;text-align:center;padding:0.6rem">Última rodada.</p>';
      return;
    }
    if (proximosTitulo) proximosTitulo.textContent = 'RODADA ' + proxima.rodada;
    proxima.jogos.forEach(function (j) {
      var sou = String(j.homeUid) === String(meuUserId) || String(j.awayUid) === String(meuUserId);
      var row = document.createElement('div');
      row.className = 'prox-jogo' + (sou ? ' eu' : '');
      row.innerHTML =
        '<span class="pj-time">' + htmlEsc(j.homeNome || 'Time') + '</span>' +
        '<span class="pj-x">×</span>' +
        '<span class="pj-time dir">' + htmlEsc(j.awayNome || 'Time') + '</span>';
      rodadaProximos.appendChild(row);
    });
  }

  // Lista de estatística (artilharia/assistências) — nome + time abaixo
  function renderStatsLista(el, lista, campo, sufixo) {
    if (!el) return;
    el.innerHTML = '';
    (lista || []).slice(0, 10).forEach(function (p, i) {
      var row = document.createElement('div');
      row.className = 'stats-linha';
      row.innerHTML =
        '<span class="stats-pos">' + (i + 1) + '</span>' +
        '<span class="stats-jog">' +
          '<span class="stats-nome">' + htmlEsc(p.nome) + '</span>' +
          '<span class="stats-time">' + htmlEsc(p.time || '') + '</span>' +
        '</span>' +
        '<span class="stats-valor">' + (p[campo] || 0) + sufixo + '</span>';
      el.appendChild(row);
    });
  }

  // Renderiza artilharia + assistências nas DUAS cópias de uma vez: a da aba
  // Classificação e a da aba Mata-a-Mata (assim a pessoa acompanha sem trocar de aba).
  function renderStatsTodas(artilharia, assistencias) {
    renderStatsLista(rodadaArtilharia,   artilharia,   'gols',    'G');
    renderStatsLista(rodadaAssistencias, assistencias, 'assists', 'A');
    renderStatsLista(chaveArtilharia,    artilharia,   'gols',    'G');
    renderStatsLista(chaveAssistencias,  assistencias, 'assists', 'A');
  }

  // round:skipVotes — contador de votos para pular tudo
  function onSkipVotes(dados) {
    skipVotos = dados.votos || 0;
    skipTotal = dados.total || 0;
    renderSkipContador();
    atualizarAcoesRodada();
  }
  function renderSkipContador() {
    if (!skipContador) return;
    if (skipVotos > 0 && skipVotos < skipTotal) {
      skipContador.textContent = 'Pular tudo: ' + skipVotos + '/' + skipTotal;
      skipContador.classList.remove('escondida');
    } else {
      skipContador.classList.add('escondida');
    }
  }

  // Ações da rodada — host avança; todos os humanos podem votar "pular tudo".
  function atualizarAcoesRodada() {
    btnRodadaProxima.classList.add('escondida');
    delete btnRodadaProxima.dataset.acao;   // limpa ação especial (iniciar-mata) entre estados
    btnRodadaFim.classList.add('escondida');
    if (btnPularTudo) btnPularTudo.classList.add('escondida');
    if (rodadaAguardandoHost) rodadaAguardandoHost.classList.add('escondida');

    // Última rodada → encerrar
    if (rodadaAtual >= totalRodadas) {
      // Mas só libera o avanço DEPOIS que a partida da última rodada terminou de
      // animar. Sem isto, o botão "Ir para o Mata-mata"/"Ver Resultado" aparecia
      // assim que a 3ª rodada começava, deixando pular a partida em andamento.
      if (animacaoAtiva || simulandoRodada) return;
      // Copa/Liberta: o fim dos grupos NÃO encerra o jogo — o mata-mata vem em
      // seguida. Antes a transição só existia no banner da aba Grupos, prendendo
      // quem estava na aba Partidas. Agora a própria aba Partidas oferece o avanço.
      if (formatoOnline === 'mata') {
        if (ehHost) {
          btnRodadaProxima.disabled    = false;
          btnRodadaProxima.textContent = 'Ir para o Mata-mata →';
          btnRodadaProxima.dataset.acao = 'iniciar-mata';
          btnRodadaProxima.classList.remove('escondida');
        } else if (rodadaAguardandoHost) {
          rodadaAguardandoHost.textContent = 'Fase de grupos encerrada! Aguardando o host…';
          rodadaAguardandoHost.classList.remove('escondida');
        }
        return;
      }
      // Champions: fim da fase de liga → host vai ao playoff (não há premiação aqui).
      if (formatoOnline === 'champions') {
        if (championsFimLiga && ehHost) {
          btnRodadaProxima.disabled    = false;
          btnRodadaProxima.textContent = 'Ir ao playoff →';
          btnRodadaProxima.classList.remove('escondida');
        } else if (!ehHost && rodadaAguardandoHost) {
          rodadaAguardandoHost.textContent = 'Fase de liga encerrada! Aguardando o host…';
          rodadaAguardandoHost.classList.remove('escondida');
        }
        return;
      }
      if (ehHost) {
        btnRodadaFim.classList.remove('escondida');
      } else if (rodadaAguardandoHost) {
        rodadaAguardandoHost.textContent = 'Campeonato encerrado!';
        rodadaAguardandoHost.classList.remove('escondida');
      }
      return;
    }

    // Durante a animação da partida ninguém avança (corrige o "Próximo jogo" precoce).
    if (animacaoAtiva) return;

    // Próximo jogo: só o host
    if (ehHost) {
      btnRodadaProxima.disabled    = false;
      btnRodadaProxima.textContent = 'Próximo jogo →';
      btnRodadaProxima.classList.remove('escondida');
    } else if (rodadaAguardandoHost) {
      rodadaAguardandoHost.textContent = 'Aguardando o host avançar…';
      rodadaAguardandoHost.classList.remove('escondida');
    }

    // Pular tudo: todos os humanos votam
    if (btnPularTudo) {
      btnPularTudo.classList.remove('escondida');
      if (euVoteiPular) {
        btnPularTudo.disabled    = true;
        btnPularTudo.textContent = 'Aguardando todos' + (skipTotal ? ' (' + skipVotos + '/' + skipTotal + ')' : '') + '…';
      } else {
        btnPularTudo.disabled    = false;
        btnPularTudo.textContent = 'Pular tudo';
      }
    }
  }

  // Renderiza a tabela de classificação (usada na rodada e no fim do campeonato)
  // Tabelas por grupo (fase de grupos da Copa/Liberta). Top-2 destacado = classifica.
  function renderGruposClassif(grupos) {
    if (!rodadaClassif) return;
    var wrap = rodadaClassif.closest ? rodadaClassif.closest('.classif-wrapper') : null;
    if (wrap) wrap.classList.add('modo-grupos');
    var head = document.querySelector('.classif-tabela-head');
    if (head) head.style.display = 'none';   // cada card tem seu próprio cabeçalho
    var letras = Object.keys(grupos || {}).sort();
    var html = '<div class="grupos-classif-grade">';
    letras.forEach(function (L) {
      var times = grupos[L] || [];
      html += '<div class="grupo-classif-card">' +
        '<div class="grupo-classif-tit">Grupo ' + htmlEsc(L) + '</div>' +
        '<div class="gc-head"><span class="gc-pos">#</span><span class="gc-time">Time</span>' +
          '<span>P</span><span>J</span><span>SG</span></div>';
      times.forEach(function (t, i) {
        var meu = String(t.userId) === String(meuUserId);
        var sg  = (t.saldo >= 0 ? '+' : '') + (t.saldo || 0);
        html += '<div class="gc-linha' + (i < 2 ? ' gc-classifica' : '') + (meu ? ' gc-meu' : '') + '">' +
          '<span class="gc-pos">' + (i + 1) + '</span>' +
          '<span class="gc-time">' + htmlEsc(t.nomeDoTime || t.username || '?') +
            (t.ehBot ? ' <span class="draft-bot-tag">BOT</span>' : '') + '</span>' +
          '<span>' + (t.pontos || 0) + '</span>' +
          '<span>' + (t.jogos  || 0) + '</span>' +
          '<span>' + sg + '</span>' +
        '</div>';
      });
      html += '</div>';
    });
    html += '</div>';
    rodadaClassif.innerHTML = html;
  }

  function renderClassifLista(lista) {
    if (!rodadaClassif) return;
    var wrap = rodadaClassif.closest ? rodadaClassif.closest('.classif-wrapper') : null;
    if (wrap) wrap.classList.remove('modo-grupos');
    var head = document.querySelector('.classif-tabela-head');
    if (head) head.style.display = '';        // restaura o cabeçalho da liga
    rodadaClassif.innerHTML = '';
    (lista || []).forEach(function (p, i) {
      var sou = String(p.userId) === String(meuUserId);
      var pts   = (typeof p.pontos === 'number') ? p.pontos : ((p.vitorias || 0) * 3 + (p.empates || 0));
      var jogos = (typeof p.jogos  === 'number') ? p.jogos  : ((p.vitorias || 0) + (p.empates || 0) + (p.derrotas || 0));
      var sg    = (typeof p.saldo  === 'number') ? p.saldo  : ((p.gf || 0) - (p.ga || 0));
      var tagBot = p.ehBot ? ' <span class="draft-bot-tag">BOT</span>' : '';
      var tagEu  = sou ? ' <span class="draft-eu-tag">VOCÊ</span>' : '';
      var row = document.createElement('div');
      var corte = '';
      if (formatoOnline === 'champions') {
        corte = (i < 8) ? ' ct-direto' : (i < 24) ? ' ct-playoff' : ' ct-eliminado';
      }
      row.className = 'ct-linha' + (sou ? ' eu' : '') + (i === 0 ? ' primeiro' : '') + corte;
      row.innerHTML =
        '<span class="ct-pos">' + (i + 1) + '</span>' +
        '<span class="ct-time">' + htmlEsc(p.nomeDoTime || p.username || '?') + tagEu + tagBot + '</span>' +
        '<span class="ct-num ct-pts">' + pts + '</span>' +
        '<span class="ct-num">' + jogos + '</span>' +
        '<span class="ct-num">' + (p.vitorias || 0) + '</span>' +
        '<span class="ct-num">' + (p.empates || 0) + '</span>' +
        '<span class="ct-num">' + (p.derrotas || 0) + '</span>' +
        '<span class="ct-num">' + (p.gf || 0) + '</span>' +
        '<span class="ct-num">' + (p.ga || 0) + '</span>' +
        '<span class="ct-num">' + (sg >= 0 ? '+' : '') + sg + '</span>';
      rodadaClassif.appendChild(row);
    });
  }

  // round:results — resultados da rodada
  function onRoundResults(dados) {
    simulandoRodada = false;
    pararAnimacaoPartida();
    rodadaAtual     = dados.rodada || rodadaAtual;
    ultimaArtilharia  = dados.artilharia   || ultimaArtilharia;
    ultimaAssistencia = dados.assistencias || ultimaAssistencia;
    rodadaTituloEl.textContent = 'RODADA ' + rodadaAtual + ' DE ' + totalRodadas;

    // Partidas: card grande (usuário) + cards menores (outros) + próximos jogos
    var matches = (dados.resultados || []).slice();
    var minha = null, outras = [];
    matches.forEach(function (m) {
      if (String(m.homeUid) === String(meuUserId) || String(m.awayUid) === String(meuUserId)) minha = m;
      else outras.push(m);
    });
    rodadaPartidas.innerHTML = '';
    if (minha) rodadaPartidas.appendChild(cardPartidaGrande(minha));
    outras.forEach(function (m) { rodadaPartidas.appendChild(cardPartidaPequena(m)); });
    renderProximos(dados.proxima);

    // A classificação, a artilharia e as assistências só atualizam QUANDO A PARTIDA
    // (animação) TERMINA — para não revelar o resultado antes da hora na aba Classificação.
    function aplicarClassifEStats() {
      if (dados.grupos) renderGruposClassif(dados.grupos);     // fase de grupos (Copa/Liberta)
      else              renderClassifLista(dados.classificacao || []);
      renderStatsTodas(dados.artilharia, dados.assistencias);
    }
    if (minha) aoFimDaAnimacao = aplicarClassifEStats;   // espera a animação da minha partida
    else       aplicarClassifEStats();                   // sem animação → aplica direto

    // Ações da rodada (somente host avança)
    atualizarAcoesRodada();
  }

  // Fim da fase de liga: fixa a tabela final (com os cortes) e libera o host ao playoff.
  function onChampionsFaseLigaFim(dados) {
    championsFimLiga = true;
    championsClassifFinal = dados.classificacao || championsClassifFinal;
    if (!animacaoAtiva && championsClassifFinal) renderClassifLista(championsClassifFinal);
    atualizarAcoesRodada();
  }

  // Playoff (9–24): mostra os 8 confrontos na aba Partidas; as oitavas vêm logo via onChaveState.
  function onChampionsPlayoff(dados) {
    championsFimLiga = false;
    var confrontos = dados.confrontos || [];
    if (rodadaTituloEl) rodadaTituloEl.textContent = 'PLAYOFF · IDA E VOLTA';
    if (rodadaPartidas) {
      rodadaPartidas.innerHTML = '';
      confrontos.forEach(function (c) { rodadaPartidas.appendChild(cardPlayoff(c)); });
    }
    if (rodadaProximos) rodadaProximos.innerHTML = '';
    var proxTit = document.getElementById('proximos-titulo');
    if (proxTit) proxTit.textContent = 'OITAVAS A SEGUIR';
    selecionarAbaRodada('partidas');
    subview('online-rodada');
  }

  // Card de um confronto do playoff (ida/volta + agregado + classificado).
  function cardPlayoff(c) {
    var div = document.createElement('div');
    var altoNome = htmlEsc(c.alto.nome), baixoNome = htmlEsc(c.baixo.nome);
    var altoVence = c.vencedor && String(c.vencedor.userId) === String(c.alto.userId);
    var meu = String(c.alto.userId) === String(meuUserId) || String(c.baixo.userId) === String(meuUserId);
    var penTxt = (c.pen && c.pen.length === 2) ? ' · pênaltis ' + c.pen[0] + '–' + c.pen[1] : '';
    div.className = 'po-card' + (meu ? ' po-card-meu' : '');
    div.innerHTML =
      '<div class="po-times">' +
        '<span class="po-time' + (altoVence ? ' po-venc' : '') + '">' + altoNome + '</span>' +
        '<span class="po-x">×</span>' +
        '<span class="po-time' + (!altoVence ? ' po-venc' : '') + '">' + baixoNome + '</span>' +
      '</div>' +
      '<div class="po-maos">' +
        '<span>1ª mão: ' + baixoNome + ' ' + (c.ida.gMandante | 0) + '–' + (c.ida.gVisitante | 0) + ' ' + altoNome + '</span>' +
        '<span>2ª mão: ' + altoNome + ' ' + (c.volta.gMandante | 0) + '–' + (c.volta.gVisitante | 0) + ' ' + baixoNome + '</span>' +
      '</div>' +
      '<div class="po-agg">Agregado ' + (c.aggAlto | 0) + '–' + (c.aggBaixo | 0) + penTxt + '</div>' +
      '<div class="po-venc-badge">Classificado: ' + htmlEsc(c.vencedor ? c.vencedor.nome : '?') + '</div>';
    return div;
  }

  // game:end — ranking final
  // grupos:fim — após a animação do último jogo, leva à aba Grupos com o banner
  // do mata-mata. Não pula direto para o mata-mata.
  function onGruposFim(dados) {
    gruposEncerrados = true;

    function finalizarGrupos() {
      subview('online-rodada');
      selecionarAbaRodada('classif');                 // aba "Grupos"
      if (rodadaTituloEl) rodadaTituloEl.textContent = 'FASE DE GRUPOS ENCERRADA';
      var banner = document.getElementById('grupos-mata-banner');
      var btnIni = document.getElementById('btn-iniciar-mata');
      var aguard = document.getElementById('gmb-aguardando');
      if (banner) banner.classList.remove('escondida');
      if (btnIni) { btnIni.classList.toggle('escondida', !ehHost); btnIni.disabled = false; }
      if (aguard) aguard.classList.toggle('escondida', ehHost);
    }

    // Se a partida ainda está animando, encadeia para DEPOIS dela; senão, aplica já.
    if (animacaoAtiva) {
      var prev = aoFimDaAnimacao;
      aoFimDaAnimacao = function () { if (typeof prev === 'function') prev(); finalizarGrupos(); };
    } else {
      finalizarGrupos();
    }
  }

  // ── Mata-mata online (C2) ──────────────────────────────────────────────────
  function renderChaveOnline() {
    var alvo = document.getElementById('chave-online');
    if (!alvo) return;
    if (!chaveOnline || !chaveOnline.rounds) {
      alvo.innerHTML = '<p class="chave-online-aguardando">O mata-mata começa após a fase de grupos.</p>';
      return;
    }
    var fases = chaveOnline.fases || [];
    function ehMeu(t) { return t && String(t.userId) === String(meuUserId); }
    function celula(time, ehVenc, resolvido, gols, pen) {
      if (!time) return '<div class="ck-time ck-vazio">A definir</div>';
      var cls = 'ck-time' + (ehMeu(time) ? ' ck-voce' : '') +
                (resolvido && ehVenc ? ' ck-venc' : '') + (resolvido && !ehVenc ? ' ck-perd' : '');
      var placar = (gols != null) ? '<span class="ck-gols">' + gols + (pen != null ? ' (' + pen + ')' : '') + '</span>' : '';
      return '<div class="' + cls + '">' + htmlEsc(time.nome) + placar + '</div>';
    }
    var html = '';
    chaveOnline.rounds.forEach(function (jogos, idx) {
      html += '<div class="ck-col"><div class="ck-fase">' + htmlEsc(fases[idx] || '') + '</div><div class="ck-jogos">';
      jogos.forEach(function (j) {
        var resolvido = !!j.winner;
        var aVenc = resolvido && j.a && String(j.winner.userId) === String(j.a.userId);
        var bVenc = resolvido && j.b && String(j.winner.userId) === String(j.b.userId);
        var meu = ehMeu(j.a) || ehMeu(j.b);
        var penA = (j.pen && j.pen.length === 2) ? j.pen[0] : null;
        var penB = (j.pen && j.pen.length === 2) ? j.pen[1] : null;
        html += '<div class="ck-jogo' + (meu ? ' ck-jogo-meu' : '') + '">' +
                  celula(j.a, aVenc, resolvido, resolvido ? j.gA : null, penA) +
                  celula(j.b, bVenc, resolvido, resolvido ? j.gB : null, penB) +
                '</div>';
      });
      html += '</div></div>';
    });
    var ultima  = chaveOnline.rounds[chaveOnline.rounds.length - 1][0];
    var campeao = ultima ? ultima.winner : null;
    html += '<div class="ck-col ck-col-campeao"><div class="ck-fase">CAMPEÃO</div>' +
            '<div class="ck-jogos ck-jogos-campeao"><div class="ck-campeao' + (ehMeu(campeao) ? ' ck-voce' : '') + '">' +
            '<span class="ck-trofeu"></span>' + (campeao ? htmlEsc(campeao.nome) : 'A definir') + '</div></div></div>';
    alvo.innerHTML = html;
  }

  // chave:state — prepara a chave sem trocar de aba. A ida ao mata-mata ocorre
  // quando o host clica em "Iniciar Mata-mata".
  function onChaveState(dados) {
    chaveOnline = { rounds: dados.rounds, rodadaAtual: dados.rodadaAtual || 0, fases: dados.fases || [] };
    emMataMata = true;
    if (tabChave) tabChave.classList.remove('escondida');
    renderChaveOnline();
    // Os grupos acabaram de encerrar e a chave chegou: atualiza a coluna lateral
    // para mostrar meu primeiro adversário do mata-mata (em vez de "Última rodada.").
    if (gruposEncerrados) renderProximos(null);
    var btnAv = document.getElementById('btn-chave-avancar');
    if (btnAv) btnAv.classList.add('escondida');
    // Champions: não há banner "Iniciar Mata-mata" — o host avança pelas próprias ações.
    if (formatoOnline === 'champions') atualizarAcoesMata();
  }

  // Ações da rodada no mata-mata (host avança a fase pela aba Partidas).
  function atualizarAcoesMata() {
    if (btnRodadaProxima)     btnRodadaProxima.classList.add('escondida');
    if (btnRodadaFim)         btnRodadaFim.classList.add('escondida');
    if (btnPularTudo)         btnPularTudo.classList.add('escondida');
    if (rodadaAguardandoHost) rodadaAguardandoHost.classList.add('escondida');
    if (chaveOnline && chaveOnline.rodadaAtual >= chaveOnline.rounds.length) return;  // game:end encerra
    // Durante a animação da partida, o botão aparece mas fica BLOQUEADO (sem deixar
    // pular o jogo em andamento). Só vira clicável quando a animação termina.
    var animando = animacaoAtiva || simulandoRodada;
    if (ehHost) {
      btnRodadaProxima.disabled    = animando;
      btnRodadaProxima.textContent = animando ? 'Simulando…' : 'Próxima fase →';
      btnRodadaProxima.classList.remove('escondida');
    } else if (rodadaAguardandoHost) {
      rodadaAguardandoHost.textContent = animando ? 'Simulando…' : 'Aguardando o host avançar…';
      rodadaAguardandoHost.classList.remove('escondida');
    }
  }

  // Indicador não-bloqueante "X/Y prontos" — quantos humanos já assistiram à fase.
  function onProntos(d) {
    if (!prontosLabel) return;
    var x = (d && d.x) || 0, y = (d && d.y) || 0;
    var acabou = chaveOnline && chaveOnline.rounds && chaveOnline.rodadaAtual >= chaveOnline.rounds.length;
    if (y >= 2 && !acabou) {
      prontosLabel.textContent = x + '/' + y + ' prontos';
      prontosLabel.classList.remove('escondida');
    } else {
      prontosLabel.classList.add('escondida');
    }
  }

  // ── Espectador do mata-mata ───────────────────────────────────────────────
  // Cada jogador segue um time: começa no próprio e, ao ser eliminado, passa a
  // seguir quem o venceu (ou um time escolhido). A partida animada é a do seguido.

  function timeKey(uid, nome) { return (uid != null && uid !== '') ? 'u:' + uid : 'n:' + (nome || ''); }
  function homeKey(m) { return timeKey(m.homeUid, m.homeNome); }
  function awayKey(m) { return timeKey(m.awayUid, m.awayNome); }
  function minhaKey()  { return timeKey(meuUserId, null); }

  // Chave do vencedor do confronto (tempo normal e, se empatou, os pênaltis).
  function vencedorConfronto(m) {
    var venceMand = (m.gHome !== m.gAway) ? (m.gHome > m.gAway)
                  : (m.pen && m.pen.length === 2) ? (m.pen[0] > m.pen[1]) : null;
    if (venceMand === null) return null;
    return venceMand ? homeKey(m) : awayKey(m);
  }

  function confrontoDoSeguido(resultados) {
    for (var i = 0; i < (resultados || []).length; i++) {
      if (homeKey(resultados[i]) === seguidoKey || awayKey(resultados[i]) === seguidoKey) return resultados[i];
    }
    return null;
  }

  // Nome do time seguido, buscado na chave (rounds).
  function nomeTimePorKey(key) {
    if (!key || !chaveOnline || !chaveOnline.rounds) return '';
    var achou = '';
    chaveOnline.rounds.forEach(function (jogos) {
      jogos.forEach(function (j) {
        if (j.a && timeKey(j.a.userId, j.a.nome) === key) achou = j.a.nome;
        if (j.b && timeKey(j.b.userId, j.b.nome) === key) achou = j.b.nome;
      });
    });
    return achou;
  }

  // Times ainda vivos (jogam a próxima fase); se a final acabou, o campeão.
  function timesVivos() {
    var vivos = [], vistos = {};
    if (!chaveOnline || !chaveOnline.rounds) return vivos;
    function add(t) {
      if (!t) return;
      var k = timeKey(t.userId, t.nome);
      if (!vistos[k]) { vistos[k] = 1; vivos.push({ key: k, nome: t.nome }); }
    }
    var prox = chaveOnline.rounds[chaveOnline.rodadaAtual];
    if (prox) prox.forEach(function (j) { add(j.a); add(j.b); });
    if (!vivos.length) {
      var ult = chaveOnline.rounds[chaveOnline.rounds.length - 1][0];
      if (ult && ult.winner) add(ult.winner);
    }
    return vivos;
  }

  function garantirBarraEspectador() {
    if (barraEspectador) return;
    var ref = document.querySelector('#online-rodada .rodada-barra');
    if (!ref || !ref.parentNode) return;
    barraEspectador = document.createElement('div');
    barraEspectador.id = 'online-espectador';
    barraEspectador.className = 'online-espectador escondida';
    barraEspectador.innerHTML =
      '<span class="esp-rotulo">Assistindo</span>' +
      '<span class="esp-time" id="esp-time">—</span>' +
      '<button type="button" class="esp-btn" id="esp-trocar">Trocar</button>' +
      '<button type="button" class="esp-casa" id="esp-casa" title="Voltar ao início" aria-label="Voltar ao início">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9h14v-9"/></svg>' +
      '</button>' +
      '<div class="esp-lista escondida" id="esp-lista"></div>';
    ref.parentNode.insertBefore(barraEspectador, ref.nextSibling);
    barraEspectador.querySelector('#esp-trocar').addEventListener('click', function () {
      var lista = barraEspectador.querySelector('#esp-lista');
      if (lista) lista.classList.toggle('escondida');
    });
    barraEspectador.querySelector('#esp-casa').addEventListener('click', function () {
      if (modalSairOnline) modalSairOnline.classList.remove('escondida');
    });
  }

  // Mostra/atualiza a barra quando estou assistindo a um time que não é o meu.
  function atualizarBarraEspectador() {
    var souEspectador = seguidoKey && seguidoKey !== minhaKey();
    if (!souEspectador) { if (barraEspectador) barraEspectador.classList.add('escondida'); return; }
    garantirBarraEspectador();
    if (!barraEspectador) return;
    barraEspectador.classList.remove('escondida');
    barraEspectador.querySelector('#esp-time').textContent = nomeTimePorKey(seguidoKey) || '—';

    var lista = barraEspectador.querySelector('#esp-lista');
    lista.innerHTML = '';
    timesVivos().forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'esp-opcao' + (t.key === seguidoKey ? ' esp-opcao-ativa' : '');
      b.textContent = t.nome;
      b.addEventListener('click', function () {
        seguidoKey = t.key;
        lista.classList.add('escondida');
        atualizarBarraEspectador();
      });
      lista.appendChild(b);
    });
  }

  // chave:results — uma fase do mata-mata foi simulada. Anima a partida do time
  // seguido na aba Partidas (com pênaltis, se houver) e atualiza a chave ao fim.
  function onChaveResults(dados) {
    simulandoRodada = false;
    emMataMata = true;
    chaveOnline = { rounds: dados.rounds, rodadaAtual: dados.rodadaAtual, fases: dados.fases || (chaveOnline && chaveOnline.fases) || [] };
    ultimaArtilharia  = dados.artilharia   || ultimaArtilharia;
    ultimaAssistencia = dados.assistencias || ultimaAssistencia;
    // A atualização do botão de avançar foi MOVIDA para depois de sabermos se a minha
    // partida vai animar (mais abaixo). Se chamássemos aqui, o botão "Próxima fase"
    // ficaria clicável durante a animação, porque animacaoAtiva ainda é false neste ponto.

    var fase = dados.fase || chaveOnline.fases[chaveOnline.rodadaAtual - 1] || 'MATA-A-MATA';
    var compEl = document.getElementById('rodada-comp');
    if (compEl) compEl.textContent = 'MATA-A-MATA';
    if (rodadaTituloEl) rodadaTituloEl.textContent = htmlEsc(fase);
    var infoEl = document.getElementById('rodada-header-info');
    if (infoEl) infoEl.textContent = htmlEsc(fase);
    var bannerMata = document.getElementById('grupos-mata-banner');
    if (bannerMata) bannerMata.classList.add('escondida');

    if (seguidoKey == null) seguidoKey = minhaKey();
    var alvo = confrontoDoSeguido(dados.resultados), outras = [];
    if (!alvo) {
      // Não tenho/sigo ninguém vivo nesta fase → viro espectador de um jogo
      // (de preferência um com humano) e passo a seguir o vencedor dele.
      var cands = dados.resultados || [], escolha = null;
      for (var ci = 0; ci < cands.length; ci++) { if (!(cands[ci].homeBot && cands[ci].awayBot)) { escolha = cands[ci]; break; } }
      if (!escolha) escolha = cands[0] || null;
      if (escolha) { seguidoKey = vencedorConfronto(escolha) || homeKey(escolha); alvo = escolha; }
    }
    (dados.resultados || []).forEach(function (m) { if (m !== alvo) outras.push(m); });

    function aplicarPosAnim() {
      // Re-aponta: se o time que eu seguia perdeu, passo a seguir quem o venceu.
      if (alvo) {
        var vk = vencedorConfronto(alvo);
        if ((seguidoKey === homeKey(alvo) || seguidoKey === awayKey(alvo)) && vk && vk !== seguidoKey) seguidoKey = vk;
      }
      renderChaveOnline();
      renderStatsTodas(ultimaArtilharia, ultimaAssistencia);
      atualizarAcoesMata();
      atualizarBarraEspectador();
      if (socket && socket.connected) socket.emit('chave:assisti'); // "X/Y prontos"
    }

    if (alvo) {
      // Anima a partida do time seguido na aba Partidas (com pênaltis, se houver).
      pararAnimacaoPartida();
      rodadaPartidas.innerHTML = '';
      rodadaPartidas.appendChild(cardPartidaGrande(alvo));   // aqui animacaoAtiva vira true
      outras.forEach(function (m) { rodadaPartidas.appendChild(cardPartidaPequena(m)); });
      if (proximosTitulo) proximosTitulo.textContent = 'PRÓXIMA FASE';
      if (rodadaProximos) rodadaProximos.innerHTML = '';
      atualizarAcoesMata();   // agora animacaoAtiva=true → botão fica "Simulando…" BLOQUEADO
      aoFimDaAnimacao = aplicarPosAnim;
      selecionarAbaRodada('partidas');
    } else if (!animacaoAtiva) {
      // Sem confrontos para animar: mostra os resultados e o organograma.
      rodadaPartidas.innerHTML = '<p class="rodada-fase-tit">' + htmlEsc(fase) + '</p>';
      outras.forEach(function (m) { rodadaPartidas.appendChild(cardPartidaPequena(m)); });
      if (proximosTitulo) proximosTitulo.textContent = 'PRÓXIMA FASE';
      if (rodadaProximos) rodadaProximos.innerHTML = '';
      aplicarPosAnim();
      selecionarAbaRodada('chave');
    }
    // Se houver animação ativa (auto-finish chegando durante minha última partida),
    // só atualizamos a chave; o render acontece ao fim da animação.
  }

  function onGameEnd(dados) {
    if (prontosLabel) prontosLabel.classList.add('escondida');
    var ranking = dados.ranking || [];
    // Champions termina no mata-mata, igual à Copa/Liberta (chave + chaveOnline + rótulo).
    var ehChaveFinal = (formatoOnline === 'mata' || formatoOnline === 'champions');
    rankingFinalCache = ranking;
    meuRankingFinal = ranking.find(function (p) { return String(p.userId) === String(meuUserId); }) || null;

    // Grava a campanha online no histórico (logado → backend; convidado → local).
    if (meuRankingFinal && !_campanhaOnlineSalva && typeof API !== 'undefined' && API.salvarPartida) {
      _campanhaOnlineSalva = true;
      try {
        var _idx = ranking.findIndex(function (p) { return String(p.userId) === String(meuUserId); });
        var r = meuRankingFinal;
        API.salvarPartida({
          competicao: ehChaveFinal ? (window.__compOnline || 'Copa do Mundo') : 'Brasileirão',
          modo:       'online',
          vitorias:   r.vitorias | 0,
          empates:    r.empates  | 0,
          derrotas:   r.derrotas | 0,
          gf:         r.gf | 0,
          ga:         r.ga | 0,
          posicao:    _idx >= 0 ? _idx + 1 : null,
          campeao:    _idx === 0,
          detalhes:   { online: true }
        });
      } catch (e) {}
    }

    // Fica na tela da liga, na aba Classificação, com a tabela FINAL.
    subview('online-rodada');
    rodadaAtual = totalRodadas;
    // Atualiza o cabeçalho para o estado final (antes ficava parado na rodada
    // em que o "pular tudo" foi acionado). No mata-mata o título reflete a FASE
    // (OITAVAS, QUARTAS…), não "RODADA X DE Y" — então só ajusta fora dele.
    if (rodadaTituloEl && !emMataMata) rodadaTituloEl.textContent = 'RODADA ' + totalRodadas + ' DE ' + totalRodadas;
    ultimaArtilharia  = dados.artilharia   || ultimaArtilharia;
    ultimaAssistencia = dados.assistencias || ultimaAssistencia;
    // Atualiza a chave com o estado final (necessário no auto-finish do mata-mata).
    if (ehChaveFinal && dados.rounds) {
      chaveOnline = { rounds: dados.rounds, rodadaAtual: dados.rodadaAtual, fases: dados.fases || (chaveOnline && chaveOnline.fases) || [] };
    }
    emMataMata = false;

    function revelarFinal() {
    if (ehChaveFinal) {
      renderChaveOnline();
      renderStatsTodas(ultimaArtilharia, ultimaAssistencia);
      selecionarAbaRodada('chave');
    } else {
      renderClassifLista(ranking);
      renderStatsTodas(ultimaArtilharia, ultimaAssistencia);
      selecionarAbaRodada('classif');
    }

    // Acabou: nada de avançar rodada.
    pararAnimacaoPartida();
    if (btnRodadaProxima)     btnRodadaProxima.classList.add('escondida');
    if (btnRodadaFim)         btnRodadaFim.classList.add('escondida');
    if (btnPularTudo)         btnPularTudo.classList.add('escondida');
    if (rodadaAguardandoHost) rodadaAguardandoHost.classList.add('escondida');
    if (skipContador)         skipContador.classList.add('escondida');

    // ── Premiação ──────────────────────────────────────────────────────────
    var campeao  = ranking[0] || null;
    var pato     = ranking.length ? ranking[ranking.length - 1] : null;
    var goleador = null, peneira = null;
    ranking.forEach(function (p) {
      if (!goleador || (p.gf || 0) > (goleador.gf || 0)) goleador = p;
      if (!peneira  || (p.ga || 0) > (peneira.ga  || 0)) peneira  = p;
    });

    function nomeTimePrem(p) { return p ? (p.nomeDoTime || nomeUsuario(p)) : '—'; }
    function vedPrem(p) {
      return '<b class="rec-v">' + (p.vitorias || 0) + 'V</b> · ' +
             '<b class="rec-e">' + (p.empates  || 0) + 'E</b> · ' +
             '<b class="rec-d">' + (p.derrotas || 0) + 'D</b>';
    }
    function setPrem(idTime, idStat, time, statHtml) {
      var et = document.getElementById(idTime), es = document.getElementById(idStat);
      if (et) et.textContent = time;
      if (es) es.innerHTML  = statHtml;
    }
    if (campeao)  setPrem('prem-campeao-time',  'prem-campeao-stat',  nomeTimePrem(campeao),  vedPrem(campeao));
    if (pato)     setPrem('prem-pato-time',     'prem-pato-stat',     nomeTimePrem(pato),     vedPrem(pato));
    if (goleador) setPrem('prem-goleador-time', 'prem-goleador-stat', nomeTimePrem(goleador), (goleador.gf || 0) + ' gols feitos');
    if (peneira)  setPrem('prem-peneira-time',  'prem-peneira-stat',  nomeTimePrem(peneira),  (peneira.ga  || 0) + ' gols sofridos');

    // Abre o modal automaticamente; os botões (coluna direita) só aparecem ao fechar.
    if (fimAcoes) fimAcoes.classList.add('escondida');
    if (fimAcoesFixo) fimAcoesFixo.classList.add('escondida');
    if (modalPremiacao) modalPremiacao.classList.remove('escondida');
    }   // fim revelarFinal

    // No auto-finish do mata-mata (Copa/Liberta/Champions), espera a animação da minha
    // última partida terminar antes de revelar a premiação.
    if (ehChaveFinal && animacaoAtiva) aoFimDaAnimacao = revelarFinal;
    else revelarFinal();
  }

  // Resumo da campanha do MEU time (estilo do resumo offline do Brasileirão)
  function curtoNome(nome) {
    if (!nome) return '';
    var p = String(nome).trim().split(/\s+/);
    return p.length === 1 ? p[0] : (p[0].charAt(0) + '. ' + p[p.length - 1]);
  }

  function abrirResumoOnline() {
    var overlay = document.getElementById('resumo-overlay');
    if (!overlay || !meuRankingFinal) return;
    var me = meuRankingFinal;
    // O ranking final do servidor pode não incluir o elenco (picks) nem a formação —
    // nesse caso o mapa de escalação e a lista sairiam vazios. Buscamos o elenco que
    // ficou guardado em allPlayers (populado durante o draft) como fonte confiável.
    var meuElenco = allPlayers[meuUserId] || {};
    var v = me.vitorias || 0, e = me.empates || 0, d = me.derrotas || 0;
    var gf = me.gf || 0, ga = me.ga || 0, saldo = gf - ga;
    var pts = v * 3 + e, jogos = v + e + d;
    var aprov = jogos > 0 ? Math.round(pts / (jogos * 3) * 100) : 0;
    var form   = me.formacao || meuElenco.formacao || '4-3-3';
    var coords = (typeof formacoes !== 'undefined' ? formacoes : {})[form] || [];
    var cods   = (typeof codigosFormacao !== 'undefined' ? codigosFormacao : {})[form] || [];
    var picks  = (me.picks && me.picks.length ? me.picks : meuElenco.picks) || [];

    var idx = (rankingFinalCache || []).findIndex(function (p) { return String(p.userId) === String(me.userId); });
    var pos = idx >= 0 ? (idx + 1) : null;
    var ehCampeao = !!me.campeao || pos === 1;

    var golMap = {}, asiMap = {};
    (ultimaArtilharia  || []).forEach(function (a) { golMap[a.nome] = a.gols; });
    (ultimaAssistencia || []).forEach(function (a) { asiMap[a.nome] = a.assists; });

    var trofeu = '<svg class="resumo-trofeu" viewBox="0 0 64 64" aria-hidden="true">' +
      '<path d="M20 6h24v10a12 12 0 0 1-24 0V6z" fill="currentColor"/>' +
      '<path d="M20 9H9v5a8 8 0 0 0 9 8" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '<path d="M44 9h11v5a8 8 0 0 1-9 8" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '<rect x="29" y="28" width="6" height="9" fill="currentColor"/>' +
      '<rect x="21" y="37" width="22" height="5" rx="1" fill="currentColor"/>' +
      '<rect x="25" y="42" width="14" height="6" rx="1" fill="currentColor"/></svg>';

    function card(rot, val, sub) {
      return '<div class="resumo-card-item"><span class="rci-rot">' + rot + '</span>' +
             '<span class="rci-val">' + val + '</span><span class="rci-sub">' + sub + '</span></div>';
    }
    var cardsHtml =
      card('Campanha', '<b class="rec-v">' + v + '</b><i>·</i><b class="rec-e">' + e + '</b><i>·</i><b class="rec-d">' + d + '</b>', 'V · E · D') +
      card('Gols', '<b>' + gf + '</b><i>:</i><b>' + ga + '</b>', 'Feitos · Sofridos (' + (saldo >= 0 ? '+' : '') + saldo + ')') +
      card('Posição', (pos ? pos + 'º' : '—'), 'na tabela') +
      card('Pontos', pts, aprov + '% aproveitamento');

    var campoHtml = '<div class="rc-linha-meio"></div><div class="rc-circulo"></div>' +
      '<div class="rc-area rc-area-cima"></div><div class="rc-area rc-area-baixo"></div>';
    for (var i = 0; i < 11; i++) {
      var pc = coords[i]; if (!pc) continue;
      var jg = picks[i];
      campoHtml += '<div class="resumo-jogador" style="left:' + pc.left + '%;top:' + pc.top + '%">' +
        '<span class="resumo-jogador-marca">' + (cods[i] || '') + '</span>' +
        '<span class="resumo-jogador-nome">' + (jg ? htmlEsc(curtoNome(jg.nome)) : '') + '</span></div>';
    }

    var listaHtml = '<div class="resumo-lista-head"><span class="rl-nome">Jogador</span>' +
      '<span class="rl-num">Fça</span><span class="rl-num">G</span><span class="rl-num">A</span></div>';
    for (var k = 0; k < 11; k++) {
      var j = picks[k]; if (!j) continue;
      listaHtml += '<div class="resumo-lista-linha">' +
        '<span class="rl-nome"><i class="rl-cod">' + (cods[k] || '') + '</i>' + htmlEsc(curtoNome(j.nome)) + '</span>' +
        '<span class="rl-num rl-forca">' + (j.forca || '') + '</span>' +
        '<span class="rl-num">' + (golMap[j.nome] || 0) + '</span>' +
        '<span class="rl-num">' + (asiMap[j.nome] || 0) + '</span></div>';
    }

    var titulo = ehCampeao ? 'CAMPEÃO' : (pos ? pos + 'º LUGAR' : 'FIM DE TEMPORADA');

    overlay.innerHTML =
      '<div class="resumo-backdrop"></div>' +
      '<div class="resumo-card" id="resumo-card">' +
        '<div class="resumo-conteudo">' +
          '<div class="resumo-hero">' + (ehCampeao ? trofeu : '') +
            '<h2 class="resumo-titulo">' + titulo + '</h2>' +
            '<p class="resumo-sub">BRASILEIRÃO · ' + htmlEsc(me.nomeDoTime || nomeUsuario(me)) + ' · ' + form + '</p>' +
          '</div>' +
          '<div class="resumo-cards">' + cardsHtml + '</div>' +
          '<div class="resumo-grid">' +
            '<div class="resumo-col-campo"><p class="resumo-bloco-rot">Mapa de Escalação</p><div class="resumo-campo">' + campoHtml + '</div></div>' +
            '<div class="resumo-col-lista"><p class="resumo-bloco-rot">Jogadores &amp; Estatísticas</p><div class="resumo-lista">' + listaHtml + '</div></div>' +
          '</div>' +
          '<div class="resumo-marca">THE DREAM TEAM</div>' +
        '</div>' +
        '<div class="resumo-acoes">' +
          '<button id="resumo-online-baixar" class="resumo-btn">Baixar imagem</button>' +
          '<button id="resumo-online-fechar" class="resumo-btn-destaque">Fechar</button>' +
        '</div>' +
      '</div>';

    overlay.classList.remove('escondida');
    function fechar() { overlay.classList.add('escondida'); }
    overlay.querySelector('.resumo-backdrop').addEventListener('click', fechar);
    document.getElementById('resumo-online-fechar').addEventListener('click', fechar);
    document.getElementById('resumo-online-baixar').addEventListener('click', function () {
      var alvo = document.getElementById('resumo-card');
      if (typeof html2canvas === 'undefined' || !alvo) return;
      var fundo = getComputedStyle(document.body).backgroundColor;
      html2canvas(alvo, { backgroundColor: fundo, scale: 2 }).then(function (canvas) {
        var link = document.createElement('a');
        link.download = 'the-dream-team-resumo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  }

  // ── Timer ─────────────────────────────────────────────────────────────────

  function iniciarTimer(segundos) {
    pararTimer();
    timerSeg = segundos;
    atualizarTimerUI();
    timerInterval = setInterval(function () {
      timerSeg--;
      if (timerSeg <= 0) { pararTimer(); return; }
      atualizarTimerUI();
    }, 1000);
  }

  function pararTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    if (draftTimerBar) { draftTimerBar.style.width = '0%'; draftTimerBar.classList.remove('urgente'); }
    if (draftTimerNum)   draftTimerNum.textContent = '0';
  }

  function atualizarTimerUI() {
    var pct = Math.max(0, (timerSeg / 30) * 100);
    if (draftTimerBar) {
      draftTimerBar.style.width = pct + '%';
      draftTimerBar.classList.toggle('urgente', timerSeg <= 8);
    }
    if (draftTimerNum) draftTimerNum.textContent = timerSeg;
  }

  // ── Carousel ──────────────────────────────────────────────────────────────

  // Códigos de posição da minha formação (mesma fonte do offline: formacoes.js).
  function codigosOnline(form) {
    if (typeof codigosFormacao === 'undefined') return [];
    return codigosFormacao[form] || codigosFormacao['4-3-3'];
  }
  function minhaFormacaoOnline() {
    return (allPlayers[meuUserId] && allPlayers[meuUserId].formacao) || '4-3-3';
  }

  function renderCarousel(lista) {
    draftCarousel.innerHTML = '';
    var pool = (lista || poolLocal || []).slice();
    if (!pool.length) {
      draftCarousel.innerHTML = '<p style="color:#888;font-size:0.8rem;padding:0.6rem">Nenhum jogador disponível para esta posição.</p>';
      return;
    }

    pool.forEach(function (jogador) {
      var card = document.createElement('div');
      card.className   = 'draft-card' + (selectedPlayer && jogador.id === selectedPlayer.id ? ' selecionado' : '');
      card.dataset.id  = jogador.id;

      var posStr = (jogador.posicoes || []).join('/') || '—';
      var revelaF = (typeof mostrarForca === 'undefined') ? true : mostrarForca;
      card.innerHTML =
        '<div class="draft-card-pos">' + htmlEsc(posStr) + '</div>' +
        '<div class="draft-card-nome">' + htmlEsc(jogador.nome || '—') + '</div>' +
        '<div class="draft-card-forca">' + (revelaF ? (jogador.forca || '—') : '?') + '</div>' +
        '<div class="draft-card-clube">' + htmlEsc(jogador.clube || '') + (jogador.edicao ? ' ' + jogador.edicao : '') + '</div>';

      card.addEventListener('click', function () { selecionarCardOnline(jogador, card); });
      draftCarousel.appendChild(card);
    });

    draftCarousel.scrollLeft = 0;
  }

  // Clicou num card: marca o card e ACENDE só as vagas abertas onde ele pode jogar.
  // Clicou num jogador da lista: a POSIÇÃO já foi escolhida (selectedSlot) → libera confirmar.
  function selecionarCardOnline(jogador, cardEl) {
    if (selectedSlot === null) return;   // precisa clicar numa posição aberta antes
    selectedPlayer = jogador;
    draftCarousel.querySelectorAll('.draft-card').forEach(function (c) { c.classList.remove('selecionado'); });
    if (cardEl) cardEl.classList.add('selecionado');
    btnDraftSelecionar.disabled = false;
  }

  // Acende as vagas ABERTAS e VÁLIDAS para um jogador (e apaga as demais).
  function destacarVagasValidas(jogador) {
    if (!draftCampo) return;
    var meu     = allPlayers[meuUserId] || {};
    var codigos = codigosOnline(meu.formacao || '4-3-3');
    draftCampo.querySelectorAll('.slot-ol').forEach(function (slot, i) {
      slot.classList.remove('vaga-valida', 'vaga-selecionada', 'vaga-origem');
      var ocupado = meu.picks && meu.picks[i];
      if (jogador && !ocupado && podeOcupar(jogador, codigos[i])) {
        slot.classList.add('vaga-valida');
      }
    });
  }

  function limparDestaquesVaga() {
    repositionFrom = null;
    if (!draftCampo) return;
    draftCampo.querySelectorAll('.slot-ol').forEach(function (s) {
      s.classList.remove('vaga-valida', 'vaga-selecionada', 'vaga-origem');
    });
  }

  // Clique numa vaga do campo (só na minha vez):
  //  • remanejo em curso → completa o movimento;
  //  • vaga OCUPADA → começa a remanejar;
  //  • vaga ABERTA → escolhe a POSIÇÃO e lista os jogadores elegíveis do draft (slot-first).
  function clicarSlotDraftOnline(i) {
    // Vendo o time de OUTRO usuário → somente leitura, nenhuma ação no campo.
    if (gVisualizandoUid && String(gVisualizandoUid) !== String(meuUserId)) return;
    // Autoritativo: no draft por grupo, só quando posso escolher; no snake, só na minha vez.
    if (draftEhGrupo) { if (!gPodeEscolher) return; }
    else if (String(draftTurnoUid) !== String(meuUserId)) return;
    var meu     = allPlayers[meuUserId] || {};
    var codigos = codigosOnline(meu.formacao || '4-3-3');
    var ocupado = meu.picks && meu.picks[i];

    // MODO REMANEJAR em curso → completa o movimento (destino vazio = move; ocupado = troca).
    if (repositionFrom !== null) {
      if (i === repositionFrom) { cancelarReposicionar(); return; }
      var jogMov = meu.picks[repositionFrom];
      if (!jogMov) { cancelarReposicionar(); return; }
      var destino = meu.picks[i];
      if (!destino) {
        if (!podeOcupar(jogMov, codigos[i])) return;
        meu.picks[i] = jogMov;
        meu.picks[repositionFrom] = undefined;
      } else {
        if (!podeOcupar(jogMov, codigos[i]) || !podeOcupar(destino, codigos[repositionFrom])) return;
        meu.picks[i] = jogMov;
        meu.picks[repositionFrom] = destino;
      }
      renderCampoOnline(draftCampo, meu.picks, meu.formacao || '4-3-3');
      renderMeuTime();
      socket.emit(draftEhGrupo ? 'gdraft:move' : 'draft:move', { fromSlot: repositionFrom, toSlot: i });
      cancelarReposicionar();
      return;
    }

    // VAGA OCUPADA → começa a remanejar (acende destinos válidos).
    if (ocupado) {
      repositionFrom = i;
      destacarVagasValidasParaMover(meu.picks[i], i);
      return;
    }

    // VAGA ABERTA → abre o MODAL (fundo opaco) com as 6 opções da posição.
    selectedSlot   = i;
    selectedPlayer = null;
    destacarVagasAbertas();
    var slotEl = draftCampo.querySelectorAll('.slot-ol')[i];
    if (slotEl) slotEl.classList.add('vaga-selecionada');
    abrirModalDraftPick(codigos[i]);
  }

  function embaralhar(arr) {
    if (window.UI && UI.shuffle) return UI.shuffle(arr);
    var a = (arr || []).slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // Abre o modal de escolha com cartas ALEATÓRIAS da posição clicada (estilo do draft offline).
  function abrirModalDraftPick(cod) {
    if (!modalDraftPick) return;
    var lista;
    if (draftEhGrupo) {
      // Draft em grupo: o servidor já manda 6+ cartas validadas por posição. Usa direto.
      lista = (poolPorPosicao && poolPorPosicao[cod]) ? poolPorPosicao[cod].slice() : [];
    } else {
      // Snake: filtra o pool do turno pela posição e remove repetidos.
      var filtrados = (poolLocal || []).filter(function (p) { return podeOcupar(p, cod); });
      var vistos = {}; lista = [];
      filtrados.forEach(function (p) { if (p && !vistos[p.id]) { vistos[p.id] = 1; lista.push(p); } });
      // Rede de segurança: NUNCA mostrar menos de 6 opções. Se a posição tiver poucos
      // elegíveis, completa com o resto do pool do turno (o jogador pode escalar ali
      // mesmo fora da posição natural) — melhor 6 opções do que travar o draft.
      if (lista.length < 6) {
        (poolLocal || []).forEach(function (p) {
          if (lista.length >= 6) return;
          if (p && !vistos[p.id]) { vistos[p.id] = 1; lista.push(p); }
        });
      }
    }
    modalPoolPos = embaralhar(lista);
    modalPosPage = 0;
    if (modalDraftPickTitulo) modalDraftPickTitulo.textContent = 'Escolha um jogador para ' + (cod || '?');
    // Limpa antes de exibir para não "piscar" as cartas da abertura anterior, e
    // só renderiza as novas no PRÓXIMO frame — assim o paint do modal (abrir) não
    // disputa com a animação de entrada das cartas (deal 3D), evitando a travada.
    if (modalDraftPickCartas) modalDraftPickCartas.innerHTML = '';
    modalDraftPick.classList.remove('escondida');
    requestAnimationFrame(function () { renderModalCartas(); });
  }

  // Renderiza 6 cartas da página atual (mesma estrutura/visual do draft offline).
  function renderModalCartas() {
    selectedPlayer = null;
    if (modalDraftPickSelecionar) { modalDraftPickSelecionar.disabled = true; modalDraftPickSelecionar.textContent = 'Selecionar'; }
    if (!modalDraftPickCartas) return;
    modalDraftPickCartas.innerHTML = '';

    var inicio = modalPosPage * 6;
    var cartas = modalPoolPos.slice(inicio, inicio + 6);
    if (!cartas.length && modalPoolPos.length) { modalPosPage = 0; cartas = modalPoolPos.slice(0, 6); }

    if (!cartas.length) {
      modalDraftPickCartas.innerHTML = '<p class="draft-vazio">Nenhum jogador disponível para esta posição.</p>';
      atualizarBotaoResortearOnline();
      return;
    }

    cartas.forEach(function (j, idx) {
      var atraso = idx * 0.09;
      var revelaF = (typeof mostrarForca === 'undefined') ? true : mostrarForca;
      var tierC   = revelaF ? (typeof tierDaForca === 'function' ? tierDaForca(j.forca) : 'bronze') : 'oculto';
      var carta = document.createElement('div');
      carta.className = 'draft-carta carta-entrando tier-' + tierC;
      carta.style.animationDelay = atraso + 's';
      carta.innerHTML =
        '<span class="carta-brilho" style="animation-delay:' + (atraso + 0.26).toFixed(2) + 's"></span>' +
        '<span class="carta-nome" title="' + htmlEsc(j.nome || '') + '">' + htmlEsc(j.nome || '—') + '</span>' +
        '<span class="carta-time">' + htmlEsc(j.clube || '') + '</span>' +
        '<span class="carta-ano">' + htmlEsc(j.edicao || '') + '</span>' +
        '<span class="carta-posicoes">' + htmlEsc((j.posicoes || []).join('/')) + '</span>' +
        '<span class="carta-forca">' + (revelaF ? (j.forca || '—') : '?') + '</span>';
      carta.addEventListener('click', function () {
        modalDraftPickCartas.querySelectorAll('.draft-carta').forEach(function (c) { c.classList.remove('escolhida'); });
        carta.classList.add('escolhida');
        selectedPlayer = j;
        if (modalDraftPickSelecionar) modalDraftPickSelecionar.disabled = false;
      });
      carta.addEventListener('animationend', function (e) {
        if (e.animationName === 'carta-deal') carta.classList.remove('carta-entrando');
      });
      modalDraftPickCartas.appendChild(carta);
    });
    atualizarBotaoResortearOnline();
  }

  function atualizarBotaoResortearOnline() {
    if (modalDraftPickContador) modalDraftPickContador.textContent = draftResortsRestantes;
    if (modalDraftPickResortear) {
      var temMais = modalPoolPos.length > 6;   // só vale re-sortear se há mais de 6 opções
      modalDraftPickResortear.disabled = (draftResortsRestantes <= 0) || !temMais;
    }
  }

  // Re-sortear: gasta 1 do orçamento e mostra outras 6 cartas (próxima página embaralhada).
  function resortearModalDraftPick() {
    if (draftResortsRestantes <= 0 || modalPoolPos.length <= 6) return;
    draftResortsRestantes--;
    var totalPaginas = Math.ceil(modalPoolPos.length / 6);
    modalPosPage = (modalPosPage + 1) % totalPaginas;
    renderModalCartas();
  }

  function fecharModalDraftPick() {
    if (modalDraftPick) modalDraftPick.classList.add('escondida');
  }

  function marcarVagaSelecionada(i) {
    draftCampo.querySelectorAll('.slot-ol').forEach(function (s, k) {
      s.classList.toggle('vaga-selecionada', k === i);
    });
  }

  // Remanejar: acende as vagas onde o jogador movido pode ir (vazias válidas +
  // ocupadas onde caberia uma troca) e marca a vaga de origem.
  function destacarVagasValidasParaMover(jogador, fromIdx) {
    if (!draftCampo) return;
    var meu     = allPlayers[meuUserId] || {};
    var codigos = codigosOnline(meu.formacao || '4-3-3');
    draftCampo.querySelectorAll('.slot-ol').forEach(function (slot, i) {
      slot.classList.remove('vaga-valida', 'vaga-selecionada', 'vaga-origem');
      if (i === fromIdx) { slot.classList.add('vaga-origem'); return; }
      var ocup = meu.picks && meu.picks[i];
      var podeIr = podeOcupar(jogador, codigos[i]);
      // vaga vazia válida, ou troca válida (o outro jogador caberia na origem)
      var trocaOk = ocup && podeIr && podeOcupar(meu.picks[i], codigos[fromIdx]);
      if ((!ocup && podeIr) || trocaOk) slot.classList.add('vaga-valida');
    });
  }

  function cancelarReposicionar() {
    repositionFrom = null;
    if (!draftCampo) return;
    draftCampo.querySelectorAll('.slot-ol').forEach(function (s) {
      s.classList.remove('vaga-valida', 'vaga-selecionada', 'vaga-origem');
    });
    // Se ainda é a minha vez, reacende as vagas abertas.
    var minhaVez = draftEhGrupo ? gPodeEscolher : (String(draftTurnoUid) === String(meuUserId));
    if (minhaVez) destacarVagasAbertas();
  }

  function atualizarCarouselPos() { /* faixa agora rola nativamente; sem transform */ }

  // ── Campo online ──────────────────────────────────────────────────────────

  function renderCampoOnline(campoEl, picks, formacao, forcaSempre) {
    var slots    = campoEl.querySelectorAll('.slot-ol');
    // "Mostrar Força" desligado esconde a força no lobby/draft; em Elencos sempre aparece.
    var revela   = !!forcaSempre || (typeof mostrarForca === 'undefined' ? true : mostrarForca);
    // Rótulos das posições: mesma fonte do offline (codigosFormacao), mesma ordem.
    var posis    = (typeof codigosFormacao !== 'undefined' && codigosFormacao[formacao])
                 ? codigosFormacao[formacao]
                 : (typeof codigosFormacao !== 'undefined' ? codigosFormacao['4-3-3'] : null);

    UI.posicionarCampo(slots, formacao);

    slots.forEach(function (slot, i) {
      var jog = picks[i];
      slot.innerHTML = '';
      if (jog) {
        slot.classList.add('preenchido');
        var pos  = posis ? (posis[i] || '?') : ((jog.posicoes && jog.posicoes[0]) || '?');
        var nome = jog.nome ? jog.nome.split(' ').slice(-1)[0] : '?';
        slot.innerHTML =
          '<span style="font-size:0.64rem;font-weight:800;color:#D9B25A;line-height:1">' + htmlEsc(pos) + '</span>' +
          '<span class="slot-nome">' + htmlEsc(nome) + '</span>' +
          (jog.forca ? '<span class="slot-ol-forca">' + (revela ? jog.forca : '?') + '</span>' : '');
      } else {
        slot.classList.remove('preenchido');
        slot.textContent = posis ? (posis[i] || '?') : '?';
      }
    });
  }

  // Mostra no campo o time do jogador da vez (segue o turno, inclusive bots) e
  // atualiza o HEADER "É a vez de:" — roda em todo pick, então nunca fica preso.
  function mostrarCampoDaVez(uid) {
    var jog   = allPlayers[uid] || {};
    var sou   = String(uid) === String(meuUserId);
    var ehBot = !!jog.ehBot;
    // HEADER primeiro, sem depender do campo — assim nunca fica preso em "—".
    if (draftTituloEl) {
      var tag = ehBot ? ' <span class="draft-bot-tag">BOT</span>' : '';
      draftTituloEl.innerHTML = (sou ? 'É a SUA vez!' : 'É a vez de: ' + htmlEsc(nomeUsuario(jog))) + tag;
    }
    if (!draftCampo) return;
    if (draftCampoLabel) {
      draftCampoLabel.textContent = sou ? 'Sua escalação — clique numa posição aberta' : ('Time de: ' + nomeUsuario(jog));
    }
    renderCampoOnline(draftCampo, jog.picks || [], jog.formacao || '4-3-3');
    // Reacende as vagas abertas quando este é o MEU campo e ainda posso agir
    // (ex.: um colega de grupo escolheu e disparou um re-render no meio da minha vez).
    var podeAgora = draftEhGrupo ? gPodeEscolher : (String(draftTurnoUid) === String(meuUserId));
    if (sou && podeAgora && repositionFrom === null) destacarVagasAbertas();
  }
  function verTimeDoUsuario(uid) {
    var sou = !uid || String(uid) === String(meuUserId);
    gVisualizandoUid = sou ? null : uid;
    var jog = allPlayers[uid] || {};
    if (draftTituloEl) {
      if (sou) {
        draftTituloEl.innerHTML = gPodeEscolher ? 'É a SUA vez!' : 'Seu time';
      } else {
        var tag = jog.ehBot ? ' <span class="draft-bot-tag">BOT</span>' : '';
        draftTituloEl.innerHTML = 'Time de: ' + htmlEsc(nomeUsuario(jog)) + tag;
      }
    }
    if (draftCampoLabel) {
      draftCampoLabel.textContent = sou
        ? (gPodeEscolher ? 'Sua escalação — clique numa posição aberta' : 'Sua escalação')
        : ('Time de: ' + nomeUsuario(jog) + ' (somente leitura)');
    }
    if (draftCampo) {
      renderCampoOnline(draftCampo, jog.picks || [], jog.formacao || '4-3-3');
      // Somente leitura ao ver o time de OUTRO: limpa destaques e bloqueia cliques.
      draftCampo.classList.toggle('campo-readonly', !sou);
      if (!sou) {
        cancelarReposicionar();
        draftCampo.querySelectorAll('.slot-ol').forEach(function (s) {
          s.classList.remove('vaga-aberta', 'vaga-valida', 'vaga-selecionada', 'vaga-origem');
        });
      }
    }
    if (sou && gPodeEscolher) destacarVagasAbertas();
    renderPainelGrupos();
  }

  // Faixa "MEU TIME": minhas 11 vagas com o jogador alocado ou marcação de vaga faltando.
  function renderMeuTime() {
    if (!draftMeuTime) return;
    var meu     = allPlayers[meuUserId] || {};
    var codigos = codigosOnline(meu.formacao || '4-3-3');
    var picks   = meu.picks || [];
    draftMeuTime.innerHTML = '';
    codigos.forEach(function (cod, i) {
      var jog  = picks[i];
      var chip = document.createElement('div');
      chip.className = 'meu-time-chip' + (jog ? '' : ' vazio');
      var nome = jog ? (jog.nome ? jog.nome.split(' ').slice(-1)[0] : '?') : 'falta';
      chip.innerHTML =
        '<span class="mt-pos">' + htmlEsc(cod) + '</span>' +
        '<span class="mt-nome">' + htmlEsc(nome) + '</span>';
      draftMeuTime.appendChild(chip);
    });
  }

  // ── Lobby: lista de jogadores ─────────────────────────────────────────────
  // Nome a exibir: com login → username; convidado → nome do time (nunca "Convidado-XXXX").
  function nomeUsuario(jog) {
    if (!jog) return 'Jogador';
    if (jog.guest || !jog.username) return jog.nomeDoTime || 'Jogador';
    return jog.username;
  }

  function renderLobbyJogadores(jogadores) {
    lobbyBoxScore.innerHTML = '';
    if (!jogadores.length) {
      lobbyBoxScore.innerHTML = '<p style="color:#666;font-size:0.75rem">Aguardando jogadores…</p>';
      return;
    }
    jogadores.forEach(function (j) {
      var sou = String(j.userId) === String(meuUserId);
      var row = document.createElement('div');
      row.className = 'lobby-jogador-row' + (sou ? ' ativo' : '') + (j.pronto ? ' pronto' : '');

      var titulo  = nomeUsuario(j);
      var inicial = titulo.charAt(0).toUpperCase();
      var detalhe = (j.guest ? '' : (j.nomeDoTime ? j.nomeDoTime + ' · ' : '')) + (j.formacao || '4-3-3');
      var badge   = j.pronto
        ? '<span class="lobby-jog-badge pronto">Pronto</span>'
        : '<span class="lobby-jog-badge aguardando">Aguardando</span>';
      row.innerHTML =
        '<div class="lobby-jog-avatar">' + htmlEsc(inicial) + '</div>' +
        '<div class="lobby-jog-info">' +
          '<div class="lobby-jog-nome">' + htmlEsc(titulo) + '</div>' +
          '<div class="lobby-jog-detalhe">' + htmlEsc(detalhe) + '</div>' +
        '</div>' +
        badge;
      lobbyBoxScore.appendChild(row);
    });
  }

  // ── Elencos ───────────────────────────────────────────────────────────────

  // ── Helpers de responsividade (scroll no celular) ──────────────────────────
  function ehCelular() { return (window.innerWidth || 1024) <= 768; }
  function scrollParaEl(el) {
    if (!el) return;
    try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    catch (e) { el.scrollIntoView(); }
  }
  var _btnTopo = null;
  function botaoVoltarTopo() {
    if (_btnTopo) return _btnTopo;
    _btnTopo = document.createElement('button');
    _btnTopo.className = 'btn-voltar-topo';
    _btnTopo.type = 'button';
    _btnTopo.textContent = '↑ Voltar à lista';
    _btnTopo.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      _btnTopo.classList.remove('visivel');
    });
    document.body.appendChild(_btnTopo);
    return _btnTopo;
  }
  function mostrarBotaoTopo(v) { botaoVoltarTopo().classList.toggle('visivel', !!v && ehCelular()); }

  function renderElencos() {
    elencosUsersLista.innerHTML = '';
    var uids = Object.keys(allPlayers);
    if (!uids.length) return;

    // Exibe o elenco do próprio jogador primeiro
    var firstUid = String(meuUserId) || uids[0];

    uids.forEach(function (uid) {
      var jog = allPlayers[uid];
      var row = document.createElement('div');
      row.className = 'elencos-user-row' + (String(uid) === String(firstUid) ? ' ativo' : '');
      row.dataset.uid = uid;
      row.style.cursor = 'pointer';

      var titulo  = nomeUsuario(jog);
      var detalhe = jog.guest ? '' : (jog.nomeDoTime || '');
      var tagBot  = jog.ehBot ? ' <span class="draft-bot-tag">BOT</span>' : '';
      var tagEu   = (String(uid) === String(meuUserId)) ? ' <span class="draft-eu-tag">VOCÊ</span>' : '';
      row.innerHTML =
        '<div class="lobby-jog-avatar">' + htmlEsc(titulo.charAt(0).toUpperCase()) + '</div>' +
        '<div class="lobby-jog-info">' +
          '<div class="lobby-jog-nome">' + htmlEsc(titulo) + tagEu + tagBot + '</div>' +
          '<div class="lobby-jog-detalhe">' + htmlEsc(detalhe) + '</div>' +
        '</div>';

      row.addEventListener('click', function () {
        elencosUsersLista.querySelectorAll('.elencos-user-row').forEach(function (r) { r.classList.remove('ativo'); });
        row.classList.add('ativo');
        mostrarElencoUsuario(uid);
        if (ehCelular()) { scrollParaEl(elencosCampo); mostrarBotaoTopo(true); }
      });

      elencosUsersLista.appendChild(row);
    });

    mostrarElencoUsuario(firstUid);
  }

  function mostrarElencoUsuario(uid) {
    var jog = allPlayers[uid];
    if (!jog) return;

    // Cabeçalho = nome do time; força pequena logo abaixo (via CSS de ordem).
    elencosCampoLabel.textContent = jog.nomeDoTime || nomeUsuario(jog);
    renderCampoOnline(elencosCampo, jog.picks || [], jog.formacao || '4-3-3', true);

    var titulares = (jog.picks || []).filter(Boolean);
    var forcaTot  = titulares.reduce(function (s, p) { return s + (p.forca || 70); }, 0);
    var forcaMed  = titulares.length ? Math.round(forcaTot / titulares.length) : 0;
    elencosForca.textContent = titulares.length ? ('Força ' + forcaMed) : 'Força —';
  }

  // ── Ordem do Draft ────────────────────────────────────────────────────────

  function renderOrdemLista() {
    if (!draftOrdemLista) return;
    draftOrdemLista.innerHTML = '';
    ordemDraftIds.forEach(function (uid, i) {
      var jog = allPlayers[uid];
      var ativo = String(uid) === String(draftTurnoUid);
      var sou   = String(uid) === String(meuUserId);
      // Contagem autoritativa do servidor (mesma p/ todos); cai para o local só se faltar.
      var picks = (picksSnapshot && picksSnapshot[uid] != null)
        ? picksSnapshot[uid]
        : (jog ? (jog.picks || []).filter(Boolean).length : 0);

      var row = document.createElement('div');
      row.className = 'draft-ordem-item' + (ativo ? ' ativo' : '') + (sou ? ' eu' : '');
      var nomeTime = jog ? nomeUsuario(jog) : String(uid);
      var tagBot   = (jog && jog.ehBot) ? ' <span class="draft-bot-tag">BOT</span>' : '';
      var tagEu    = sou ? ' <span class="draft-eu-tag">VOCÊ</span>' : '';
      var badge12  = (ativo && draftPicksTurno > 1)
        ? '<span class="draft-ordem-turno">' + draftPicksFeitos + '/' + draftPicksTurno + '</span>'
        : '';
      row.innerHTML =
        '<span class="draft-ordem-num">' + (i + 1) + '</span>' +
        '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + htmlEsc(nomeTime) + tagEu + tagBot + '</span>' +
        badge12 +
        '<span class="draft-ordem-picks">' + picks + ' picks</span>';
      draftOrdemLista.appendChild(row);
    });
  }

  // ── Ações UI ──────────────────────────────────────────────────────────────

  function criarSala() {
    var nome = (document.getElementById('input-nome-sala').value || '').trim();
    if (!nome) {
      erroOnline('Dê um nome à sala para continuar.');
      var _campoNome = document.getElementById('input-nome-sala');
      if (_campoNome) _campoNome.focus();
      return;
    }

    btnCriarSala.disabled    = true;
    btnCriarSala.textContent = 'Criando...';

    var velEl = document.querySelector('#sala-velocidade .pilula-ativa');
    var velocidade = velEl ? velEl.dataset.vel : 'normal';
    var competicao = window.__compOnline || 'Brasileirão';

    function pedirCriar(forcarToken) {
      return garantirToken(forcarToken).then(function () {
        return api.criarSala({ competicao: competicao, nome: nome, velocidade: velocidade });
      });
    }

    pedirCriar(false)
      .catch(function (err) {
        // Token recusado pelo backend → renova e tenta UMA vez mais.
        if (/token/i.test(err && err.message || '')) return pedirCriar(true);
        throw err;
      })
      .then(function (res) {
        codigoSala = res.codigo;

        conectar(function () {
          socket.emit('room:join', { codigo: res.codigo });
          fecharModalOnline();
          meuUserId = getMeuId();
          mostrarTelaOnline();
          subview('online-lobby');
        });
      })
      .catch(function (err) {
        erroOnline(err.message || 'Erro ao criar sala.');
        btnCriarSala.disabled    = false;
        btnCriarSala.textContent = 'Criar sala';
      });
  }

  function entrarSala() {
    var codigo = (inputCodigoSala.value || '').trim().toUpperCase();
    if (codigo.length < 4) { erroOnline('Digite o código de 4 caracteres.'); return; }

    btnEntrarSala.disabled    = true;
    btnEntrarSala.textContent = '...';

    function pedirEntrar(forcarToken) {
      return garantirToken(forcarToken).then(function () { return api.entrarSala(codigo); });
    }

    pedirEntrar(false)
      .catch(function (err) {
        if (/token/i.test(err && err.message || '')) return pedirEntrar(true);
        throw err;
      })
      .then(function () {
        codigoSala = codigo;
        conectar(function () {
          socket.emit('room:join', { codigo: codigo });
          fecharModalOnline();
          meuUserId = getMeuId();
          mostrarTelaOnline();
          subview('online-lobby');
        });
      })
      .catch(function (err) {
        erroOnline(err.message || 'Sala não encontrada.');
        btnEntrarSala.disabled    = false;
        btnEntrarSala.textContent = 'Entrar';
      });
  }

  // ── Init ──────────────────────────────────────────────────────────────────

  function init() {
    telaOnline = document.getElementById('tela-online');
    if (!telaOnline) return;

    // Cabeçalhos padronizados (lib UI) — montados ANTES de ler os ids internos.
    if (window.UI) {
      UI.setHeader('hdr-lobby',   { infoId: 'lobby-header-info' });
      UI.setHeader('hdr-sorteio', { slogan: 'COPA DO MUNDO', sloganId: 'sorteio-comp', infoId: 'sorteio-header-info' });
      UI.setHeader('hdr-draft',   { tituloId: 'online-draft-titulo', sloganId: 'draft-subtitulo-marca',
        infoId: 'draft-header-info', infoHtml: '<span id="draft-ctx" class="draft-ctx"></span><span id="draft-subtitulo" class="draft-pick-num"></span>' });
      UI.setHeader('hdr-elencos', { slogan: 'VISUALIZAR ELENCOS', infoId: 'elencos-header-info' });
      UI.setHeader('hdr-rodada',  { slogan: 'BRASILEIRÃO', sloganId: 'rodada-comp', infoId: 'rodada-header-info' });
    }

    modalOnline = document.getElementById('modal-online');
    modalAuth   = document.getElementById('modal-auth');

    // Modal online
    modalOnlineFechar  = document.getElementById('modal-online-fechar');
    btnCopiarCodigo    = document.getElementById('btn-copiar-codigo');
    lobbyCodigo        = document.getElementById('lobby-codigo');
    btnCriarSala       = document.getElementById('btn-criar-sala');
    inputCodigoSala    = document.getElementById('input-codigo-sala');
    btnEntrarSala      = document.getElementById('btn-entrar-sala');
    modalOnlineErro    = document.getElementById('modal-online-erro');

    // Lobby
    lobbyNomeTime        = document.getElementById('lobby-nome-time');
    lobbyPilulasFormacao = document.querySelectorAll('#lobby-pilulas-formacao .pilula');
    lobbyProntosCount    = document.getElementById('lobby-prontos-count');
    btnLobbyPronto       = document.getElementById('btn-lobby-pronto');
    btnLobbyComecar      = document.getElementById('btn-lobby-comecar');
    btnLobbyVoltar       = document.getElementById('btn-lobby-voltar');
    modalSairOnline      = document.getElementById('modal-sair-online');
    modalSairCancelar    = document.getElementById('modal-sair-cancelar');
    modalSairConfirmar   = document.getElementById('modal-sair-confirmar');
    lobbyCampo           = document.getElementById('lobby-campo');
    lobbyBoxScore        = document.getElementById('lobby-box-score');

    // Draft
    draftTituloEl      = document.getElementById('draft-ctx');
    draftSubtituloEl   = document.getElementById('draft-subtitulo');
    draftOrdemLista    = document.getElementById('draft-ordem-lista');
    // Clique em qualquer participante do painel → visualiza o time dele (somente leitura).
    if (draftOrdemLista) {
      draftOrdemLista.addEventListener('click', function (ev) {
        if (!draftEhGrupo) return;
        var alvo = ev.target.closest ? ev.target.closest('.gdraft-membro') : null;
        if (!alvo || !alvo.dataset || !alvo.dataset.uid) return;
        verTimeDoUsuario(alvo.dataset.uid);
      });
    }
    draftTimerBar      = document.getElementById('draft-timer-bar');
    draftTimerNum      = document.getElementById('draft-timer-num');
    draftCampo         = document.getElementById('draft-campo');
    draftCampoLabel    = document.getElementById('draft-campo-label');
    draftMeuTime       = document.getElementById('draft-meu-time');
    if (draftCampo) {
      draftCampo.querySelectorAll('.slot-ol').forEach(function (slot, i) {
        slot.addEventListener('click', function () { clicarSlotDraftOnline(i); });
      });
    }
    draftCarouselWrap  = document.getElementById('draft-carousel-wrap');
    draftCarousel      = document.getElementById('draft-carousel');
    draftCarouselLabel = document.getElementById('draft-carousel-label');
    modalDraftPick          = document.getElementById('modal-draft-pick');
    modalDraftPickCartas    = document.getElementById('modal-draft-pick-cartas');
    modalDraftPickTitulo    = document.getElementById('modal-draft-pick-titulo');
    modalDraftPickSelecionar = document.getElementById('modal-draft-pick-selecionar');
    modalDraftPickResortear  = document.getElementById('modal-draft-pick-resortear');
    modalDraftPickContador   = document.getElementById('modal-draft-pick-contador');
    draftArrowEsq      = document.getElementById('draft-arrow-esq');
    draftArrowDir      = document.getElementById('draft-arrow-dir');
    btnDraftSelecionar = document.getElementById('btn-draft-selecionar');

    // Elencos
    elencosUsersLista   = document.getElementById('elencos-users-lista');
    elencosCampoLabel   = document.getElementById('elencos-campo-label');
    elencosCampo        = document.getElementById('elencos-campo');
    elencosForca        = document.getElementById('elencos-forca');
    elencosProntosCount = document.getElementById('elencos-prontos-count');
    btnElencosPronto    = document.getElementById('btn-elencos-pronto');
    btnElencosComecar   = document.getElementById('btn-elencos-comecar');

    // Rodada
    rodadaTituloEl     = document.getElementById('rodada-titulo');
    rodadaPartidas     = document.getElementById('rodada-partidas');
    btnRodadaProxima   = document.getElementById('btn-rodada-proxima');
    btnRodadaFim       = document.getElementById('btn-rodada-fim');
    rodadaClassif      = document.getElementById('rodada-classif');
    rodadaArtilharia   = document.getElementById('rodada-artilharia');
    rodadaAssistencias = document.getElementById('rodada-assistencias');
    chaveArtilharia    = document.getElementById('chave-artilharia');
    chaveAssistencias  = document.getElementById('chave-assistencias');
    rodadaProximos       = document.getElementById('rodada-proximos');
    proximosTitulo       = document.getElementById('proximos-titulo');
    var btnChaveAvancar  = document.getElementById('btn-chave-avancar');
    if (btnChaveAvancar) btnChaveAvancar.addEventListener('click', function () {
      btnChaveAvancar.disabled = true;
      if (socket && socket.connected) socket.emit('chave:advance');
    });
    var btnIniciarMata = document.getElementById('btn-iniciar-mata');
    if (btnIniciarMata) btnIniciarMata.addEventListener('click', function () {
      btnIniciarMata.disabled = true;
      if (socket && socket.connected) socket.emit('chave:advance');
    });
    rodadaAguardandoHost = document.getElementById('rodada-aguardando-host');
    tabPartidas = document.getElementById('tab-partidas');
    tabClassif  = document.getElementById('tab-classif');
    abaPartidas = document.getElementById('aba-partidas');
    abaClassif  = document.getElementById('aba-classif');
    tabChave    = document.getElementById('tab-chave');
    abaChave    = document.getElementById('aba-chave');
    btnPularTudo        = document.getElementById('online-btn-pular');
    modalPular          = document.getElementById('modal-pular');
    modalPularConfirmar = document.getElementById('modal-pular-confirmar');
    modalPularCancelar  = document.getElementById('modal-pular-cancelar');
    skipContador        = document.getElementById('online-skip-cont');
    prontosLabel        = document.getElementById('online-prontos');

    // Fim
    onlineRankingFinal = document.getElementById('online-ranking-final');
    btnVerResumo    = document.getElementById('btn-ver-resumo');
    btnVoltarInicio = document.getElementById('btn-voltar-inicio');
    fimAcoes        = document.getElementById('fim-acoes');
    fimAcoesFixo    = document.getElementById('fim-acoes-fixo');
    modalPremiacao  = document.getElementById('modal-premiacao');
    modalPremFechar = document.getElementById('modal-prem-fechar');

    // ── Eventos ────────────────────────────────────────────────────────────

    var btnJogarOnline = document.getElementById('btn-jogar-online');
    if (btnJogarOnline) btnJogarOnline.addEventListener('click', abrirModalOnline);

    if (modalOnlineFechar) modalOnlineFechar.addEventListener('click', fecharModalOnline);
    var backdrop = modalOnline.querySelector('.modal-auth-backdrop');
    if (backdrop) backdrop.addEventListener('click', fecharModalOnline);

    btnCopiarCodigo.addEventListener('click', function () {
      var cod = (lobbyCodigo.textContent || '').trim();
      if (!cod || cod === '----') return;
      var orig = btnCopiarCodigo.innerHTML;
      (navigator.clipboard
        ? navigator.clipboard.writeText(cod)
        : Promise.reject()
      ).catch(function () {
        var ta = document.createElement('textarea');
        ta.value = cod;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }).finally(function () {
        btnCopiarCodigo.innerHTML = '✓';
        setTimeout(function () { btnCopiarCodigo.innerHTML = orig; }, 1200);
      });
    });

    btnCriarSala.addEventListener('click', criarSala);
    btnEntrarSala.addEventListener('click', entrarSala);
    inputCodigoSala.addEventListener('input',   function () { inputCodigoSala.value = inputCodigoSala.value.toUpperCase(); });
    inputCodigoSala.addEventListener('keydown', function (e) { if (e.key === 'Enter') entrarSala(); });

    // Pílulas de velocidade (Crie sua sala): alterna a pílula ativa
    document.querySelectorAll('#sala-velocidade .pilula').forEach(function (p) {
      p.addEventListener('click', function () {
        document.querySelectorAll('#sala-velocidade .pilula').forEach(function (x) { x.classList.remove('pilula-ativa'); });
        p.classList.add('pilula-ativa');
      });
    });

    // Lobby
    lobbyPilulasFormacao.forEach(function (p) {
      p.addEventListener('click', function () {
        lobbyPilulasFormacao.forEach(function (x) { x.classList.remove('pilula-ativa'); });
        p.classList.add('pilula-ativa');
        // Atualiza o campo na hora pra refletir a formação escolhida (slots vazios).
        if (lobbyCampo) renderCampoOnline(lobbyCampo, [], p.dataset.fl || '4-3-3');
        if (ehCelular()) scrollParaEl(lobbyCampo);   // mostra o "mapinha" da formação escolhida
      });
    });

    // Switch "Mostrar Força" do lobby — reflete e altera a preferência global.
    var switchForcaOnline = document.getElementById('switch-forca-online');
    if (switchForcaOnline) {
      if (typeof mostrarForca !== 'undefined') switchForcaOnline.checked = mostrarForca;
      switchForcaOnline.addEventListener('change', function () {
        if (typeof setMostrarForca === 'function') setMostrarForca(this.checked);
        else if (typeof mostrarForca !== 'undefined') mostrarForca = this.checked;
        // Re-renderiza o campo do lobby com a nova preferência.
        var fl = document.querySelector('#lobby-pilulas-formacao .pilula-ativa');
        if (lobbyCampo) renderCampoOnline(lobbyCampo, [], fl ? fl.dataset.fl : '4-3-3');
      });
    }

    btnLobbyPronto.addEventListener('click', function () {
      var nomeTime = (lobbyNomeTime.value || '').trim() || 'Seu time';
      var fl       = document.querySelector('#lobby-pilulas-formacao .pilula-ativa');
      var formacao = fl ? fl.dataset.fl : '4-3-3';

      btnLobbyPronto.disabled    = true;
      btnLobbyPronto.textContent = 'Aguardando...';

      if (socket && socket.connected) {
        socket.emit('lobby:config', { nomeDoTime: nomeTime, formacao: formacao });
      }
    });

    btnLobbyComecar.addEventListener('click', function () {
      if (!socket || !socket.connected) return;
      btnLobbyComecar.disabled    = true;
      btnLobbyComecar.textContent = 'Iniciando...';
      socket.emit('room:start');
    });

    // ── Botões do Sorteio de Grupos ──
    var btnSorteioPular    = document.getElementById('btn-sorteio-pular');
    var btnSorteioAvancar  = document.getElementById('btn-sorteio-avancar');
    var modalSorteioPular  = document.getElementById('modal-sorteio-pular');
    var sorteioPularCancel = document.getElementById('sorteio-pular-cancelar');
    var sorteioPularConfir = document.getElementById('sorteio-pular-confirmar');

    if (btnSorteioPular) btnSorteioPular.addEventListener('click', function () {
      if (modalSorteioPular) modalSorteioPular.classList.remove('escondida');
    });
    if (sorteioPularCancel) sorteioPularCancel.addEventListener('click', function () {
      if (modalSorteioPular) modalSorteioPular.classList.add('escondida');
    });
    if (sorteioPularConfir) sorteioPularConfir.addEventListener('click', function () {
      if (modalSorteioPular) modalSorteioPular.classList.add('escondida');
      if (socket && socket.connected) socket.emit('grupos:pular');
    });
    if (btnSorteioAvancar) btnSorteioAvancar.addEventListener('click', function () {
      if (!socket || !socket.connected) return;
      btnSorteioAvancar.disabled = true;
      socket.emit('grupos:avancar');
    });

    btnLobbyVoltar.addEventListener('click', function () {
      if (modalSairOnline) modalSairOnline.classList.remove('escondida');
    });
    if (modalSairCancelar) modalSairCancelar.addEventListener('click', function () {
      if (modalSairOnline) modalSairOnline.classList.add('escondida');
    });
    if (modalSairConfirmar) modalSairConfirmar.addEventListener('click', function () {
      if (modalSairOnline) modalSairOnline.classList.add('escondida');
      if (socket && socket.connected) socket.emit('room:leave');
      desconectar();
      mostrarTelaInicial();
    });

    // Draft: setas rolam a lista de jogadores (scroll nativo).
    draftArrowEsq.addEventListener('click', function () {
      if (draftCarousel) draftCarousel.scrollBy({ left: -220, behavior: 'smooth' });
    });

    draftArrowDir.addEventListener('click', function () {
      if (draftCarousel) draftCarousel.scrollBy({ left: 220, behavior: 'smooth' });
    });

    btnDraftSelecionar.addEventListener('click', function () {
      if (!selectedPlayer || selectedSlot === null) return;
      btnDraftSelecionar.disabled    = true;
      btnDraftSelecionar.textContent = 'Escolhendo...';
      enviarPick();
    });

    // Modal de escolha (fundo opaco): confirmar pick. Clicar no fundo NÃO fecha — só o botão.
    if (modalDraftPickResortear) modalDraftPickResortear.addEventListener('click', resortearModalDraftPick);
    if (modalDraftPickSelecionar) modalDraftPickSelecionar.addEventListener('click', function () {
      if (!selectedPlayer || selectedSlot === null) return;
      modalDraftPickSelecionar.disabled    = true;
      modalDraftPickSelecionar.textContent = 'Escolhendo...';
      if (enviarPick()) fecharModalDraftPick();
      else { modalDraftPickSelecionar.disabled = false; modalDraftPickSelecionar.textContent = 'Selecionar'; }
    });

    // Elencos
    btnElencosPronto.addEventListener('click', function () {
      btnElencosPronto.disabled    = true;
      btnElencosPronto.textContent = 'Aguardando...';
      if (socket && socket.connected) socket.emit('ready:vote');
    });

    btnElencosComecar.addEventListener('click', function () {
      btnElencosComecar.disabled    = true;
      btnElencosComecar.textContent = 'Iniciando...';
    });

    // Rodada
    btnRodadaProxima.addEventListener('click', function () {
      if (simulandoRodada) return;
      // Transição grupos → mata-mata (Copa/Liberta) disparada pela aba Partidas.
      if (btnRodadaProxima.dataset.acao === 'iniciar-mata') {
        btnRodadaProxima.disabled    = true;
        btnRodadaProxima.textContent = 'Carregando mata-mata…';
        if (socket && socket.connected) socket.emit('chave:advance');
        return;
      }
      // Champions: fim da fase de liga → host dispara o playoff (9–24, ida e volta).
      if (championsFimLiga) {
        btnRodadaProxima.disabled    = true;
        btnRodadaProxima.textContent = 'Carregando playoff…';
        if (socket && socket.connected) socket.emit('champions:advancePlayoff');
        return;
      }
      simulandoRodada              = true;
      btnRodadaProxima.disabled    = true;
      btnRodadaProxima.textContent = 'Simulando...';
      rodadaPartidas.innerHTML     = '<p style="color:#888;text-align:center;padding:2rem">Simulando…</p>';
      if (socket && socket.connected) socket.emit(emMataMata ? 'chave:advance' : 'round:simulate');
    });

    if (tabPartidas) tabPartidas.addEventListener('click', function () { selecionarAbaRodada('partidas'); });
    if (tabClassif)  tabClassif.addEventListener('click', function () { selecionarAbaRodada('classif'); });
    if (tabChave)    tabChave.addEventListener('click', function () { selecionarAbaRodada('chave'); });

    if (btnPularTudo) btnPularTudo.addEventListener('click', function () {
      if (euVoteiPular) return;
      if (modalPular) modalPular.classList.remove('escondida');
    });
    if (modalPularCancelar) modalPularCancelar.addEventListener('click', function () {
      if (modalPular) modalPular.classList.add('escondida');
    });
    if (modalPularConfirmar) modalPularConfirmar.addEventListener('click', function () {
      if (modalPular) modalPular.classList.add('escondida');
      euVoteiPular = true;
      if (socket && socket.connected) socket.emit('round:skipAll');
      atualizarAcoesRodada();
    });

    btnRodadaFim.addEventListener('click', function () {
      if (modalPremiacao) modalPremiacao.classList.remove('escondida');
    });

    // Fim
    if (modalPremFechar) modalPremFechar.addEventListener('click', function () {
      if (modalPremiacao) modalPremiacao.classList.add('escondida');
      // Só a barra do TOPO (#fim-acoes-fixo) é exibida — ela aparece em todas as abas.
      // O #fim-acoes de baixo (rodapé das estatísticas) foi desativado para não duplicar.
      if (fimAcoesFixo) fimAcoesFixo.classList.remove('escondida');
    });
    if (btnVerResumo) btnVerResumo.addEventListener('click', abrirResumoOnline);
    var btnVerResumoFixo = document.getElementById('btn-ver-resumo-fixo');
    if (btnVerResumoFixo) btnVerResumoFixo.addEventListener('click', abrirResumoOnline);
    var btnVoltarInicioFixo = document.getElementById('btn-voltar-inicio-fixo');
    if (btnVoltarInicioFixo) btnVoltarInicioFixo.addEventListener('click', function () {
      desconectar();
      mostrarTelaInicial();
    });
    if (btnVoltarInicio) btnVoltarInicio.addEventListener('click', function () {
      desconectar();
      mostrarTelaInicial();
    });

    // Esc
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOnline && !modalOnline.classList.contains('escondida')) {
        fecharModalOnline();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);

})();
