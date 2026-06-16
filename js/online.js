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
  var simulandoRodada  = false;

  var poolLocal        = [];   // pool de jogadores disponíveis no turno atual
  var carouselIndex    = 0;    // offset do carousel
  var selectedPlayer   = null; // objeto do jogador selecionado no carousel
  var selectedSlot     = null; // vaga (índice de slot) escolhida no campo
  var repositionFrom   = null; // vaga de origem ao remanejar um jogador já escalado
  var allPlayers       = {};   // { userId: { username, nomeDoTime, formacao, picks, pronto } }
  var ordemDraftIds    = [];   // ordem dos userId no draft
  var picksSnapshot    = {};   // { userId: nº de picks } autoritativo do servidor (mesma lista p/ todos)
  var indiceTurnoAtual = 0;    // índice na ordemDraft
  var draftTurnoUid    = null; // userId de quem está escolhendo agora (destaque)

  // ── Referências DOM ───────────────────────────────────────────────────────
  var telaOnline, modalOnline, modalAuth;

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
  var rodadaProximos, proximosTitulo, rodadaAguardandoHost;
  var tabPartidas, tabClassif, abaPartidas, abaClassif;
  var animTimer = null;   // timer da animação da partida do usuário
  var animacaoAtiva = false;   // true enquanto a partida do usuário está sendo animada
  var aoFimDaAnimacao = null;  // callback rodado quando a animação termina (atualiza a classificação só então)
  var btnPularTudo, modalPular, modalPularConfirmar, modalPularCancelar, skipContador;
  var euVoteiPular = false, skipVotos = 0, skipTotal = 0;

  // Fim
  var onlineRankingFinal;
  var btnVerResumo, btnVoltarInicio, fimAcoes, modalPremiacao, modalPremFechar;
  var meuRankingFinal = null, ultimaArtilharia = [], ultimaAssistencia = [], rankingFinalCache = [];

  // ── Formações (posições por slot) ─────────────────────────────────────────
  // (Os rótulos de posição vêm de `codigosFormacao` do formacoes.js — a mesma
  //  fonte do offline. Não duplicamos a lista aqui para não haver divergência.)

  // ── Subviews ──────────────────────────────────────────────────────────────

  function subview(id) {
    document.querySelectorAll('.online-subview').forEach(function (el) {
      el.classList.toggle('escondida', el.id !== id);
    });
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
  function garantirToken() {
    var token = localStorage.getItem('dreamteam_token');
    if (token) return Promise.resolve(token);
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
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
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
    socket.on('draft:turno',      onDraftTurno);
    socket.on('draft:yourTurn',   onDraftYourTurn);
    socket.on('draft:pick',       onDraftPickEvt);
    socket.on('draft:moved',      onDraftMoved);
    socket.on('draft:complete',   onDraftComplete);
    socket.on('ready:count',      onReadyCount);
    socket.on('round:start',      onRoundStart);
    socket.on('round:results',    onRoundResults);
    socket.on('round:skipVotes',  onSkipVotes);
    socket.on('game:end',         onGameEnd);
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

  // room:playerOrder — início do draft
  function onPlayerOrder(dados) {
    ordemDraftIds    = dados.ordem || [];
    indiceTurnoAtual = 0;
    draftResortsRestantes = 3;   // 3 re-sorteios para todo o draft (igual ao offline)
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
    if (dados.picks) picksSnapshot = dados.picks;   // contagem autoritativa p/ a lista de ordem
    if (dados.ordemBase && dados.ordemBase.length) ordemDraftIds = dados.ordemBase;  // ordem idêntica p/ todos

    draftSubtituloEl.textContent = 'Pick ' + (dados.turnoNum || '?') + ' / ' + (dados.totalTurnos || '?');

    if (minhaVez) tocarAvisoVez();

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
    simulandoRodada = false;
    pararAnimacaoPartida();
    euVoteiPular    = false;
    skipVotos       = 0;
    skipTotal       = 0;
    renderSkipContador();

    rodadaTituloEl.textContent = 'RODADA ' + rodadaAtual + ' DE ' + totalRodadas;
    var infoEl = document.getElementById('rodada-header-info');
    if (infoEl) infoEl.textContent = '20 TIMES · ' + totalRodadas + ' RODADAS';
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

  // Alterna entre as abas "Partidas" e "Classificação"
  function selecionarAbaRodada(qual) {
    var p = qual === 'partidas';
    if (abaPartidas) abaPartidas.classList.toggle('escondida', !p);
    if (abaClassif)  abaClassif.classList.toggle('escondida', p);
    if (tabPartidas) tabPartidas.classList.toggle('ativa', p);
    if (tabClassif)  tabClassif.classList.toggle('ativa', !p);
  }

  function pararAnimacaoPartida() { if (animTimer) { clearTimeout(animTimer); animTimer = null; } animacaoAtiva = false; }

  // Card grande da partida do usuário — ANIMA o jogo (relógio + gols + placar ao vivo).
  function cardPartidaGrande(m) {
    pararAnimacaoPartida();
    animacaoAtiva = true;
    var euCasa = String(m.homeUid) === String(meuUserId);
    var euFora = String(m.awayUid) === String(meuUserId);
    var res = (m.gHome === m.gAway) ? 'empate'
            : (((euCasa && m.gHome > m.gAway) || (euFora && m.gAway > m.gHome)) ? 'vitoria' : 'derrota');

    var card = document.createElement('div');
    card.className = 'partida-grande anim';
    card.innerHTML =
      '<div class="pg-topo">' +
        '<div class="pg-time' + (euCasa ? ' eu' : '') + '">' + htmlEsc(m.homeNome || 'Time') + (m.homeBot ? ' <span class="draft-bot-tag">BOT</span>' : '') + '</div>' +
        '<div class="pg-centro">' +
          '<div class="pg-relogio">0\'</div>' +
          '<div class="pg-placar"><span class="pg-gh">0</span><span class="placar-sep"> × </span><span class="pg-ga">0</span></div>' +
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
      animacaoAtiva = false;
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
      atualizarAcoesRodada();   // libera os botões só após o fim/pulo da animação
      if (typeof aoFimDaAnimacao === 'function') { var cb = aoFimDaAnimacao; aoFimDaAnimacao = null; cb(); }
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

  // Lista de próximos jogos (rodada seguinte), destacando o meu confronto
  function renderProximos(proxima) {
    if (!rodadaProximos) return;
    rodadaProximos.innerHTML = '';
    if (!proxima || !proxima.jogos || !proxima.jogos.length) {
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
    btnRodadaFim.classList.add('escondida');
    if (btnPularTudo) btnPularTudo.classList.add('escondida');
    if (rodadaAguardandoHost) rodadaAguardandoHost.classList.add('escondida');

    // Última rodada → encerrar
    if (rodadaAtual >= totalRodadas) {
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
      btnRodadaProxima.textContent = 'Próximo jogo ▶';
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
  function renderClassifLista(lista) {
    if (!rodadaClassif) return;
    rodadaClassif.innerHTML = '';
    (lista || []).forEach(function (p, i) {
      var sou = String(p.userId) === String(meuUserId);
      var pts   = (typeof p.pontos === 'number') ? p.pontos : ((p.vitorias || 0) * 3 + (p.empates || 0));
      var jogos = (typeof p.jogos  === 'number') ? p.jogos  : ((p.vitorias || 0) + (p.empates || 0) + (p.derrotas || 0));
      var sg    = (typeof p.saldo  === 'number') ? p.saldo  : ((p.gf || 0) - (p.ga || 0));
      var tagBot = p.ehBot ? ' <span class="draft-bot-tag">BOT</span>' : '';
      var tagEu  = sou ? ' <span class="draft-eu-tag">VOCÊ</span>' : '';
      var row = document.createElement('div');
      row.className = 'ct-linha' + (sou ? ' eu' : '') + (i === 0 ? ' primeiro' : '');
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
      renderClassifLista(dados.classificacao || []);
      renderStatsLista(rodadaArtilharia,   dados.artilharia,   'gols',    'G');
      renderStatsLista(rodadaAssistencias, dados.assistencias, 'assists', 'A');
    }
    if (minha) aoFimDaAnimacao = aplicarClassifEStats;   // espera a animação da minha partida
    else       aplicarClassifEStats();                   // sem animação → aplica direto

    // Ações da rodada (somente host avança)
    atualizarAcoesRodada();
  }

  // game:end — ranking final
  function onGameEnd(dados) {
    var ranking = dados.ranking || [];
    rankingFinalCache = ranking;
    meuRankingFinal = ranking.find(function (p) { return String(p.userId) === String(meuUserId); }) || null;

    // Fica na tela da liga, na aba Classificação, com a tabela FINAL.
    subview('online-rodada');
    rodadaAtual = totalRodadas;
    ultimaArtilharia  = dados.artilharia   || ultimaArtilharia;
    ultimaAssistencia = dados.assistencias || ultimaAssistencia;
    renderClassifLista(ranking);
    renderStatsLista(rodadaArtilharia,   ultimaArtilharia,  'gols',    'G');
    renderStatsLista(rodadaAssistencias, ultimaAssistencia, 'assists', 'A');
    selecionarAbaRodada('classif');

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
    if (modalPremiacao) modalPremiacao.classList.remove('escondida');
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
    var v = me.vitorias || 0, e = me.empates || 0, d = me.derrotas || 0;
    var gf = me.gf || 0, ga = me.ga || 0, saldo = gf - ga;
    var pts = v * 3 + e, jogos = v + e + d;
    var aprov = jogos > 0 ? Math.round(pts / (jogos * 3) * 100) : 0;
    var form   = me.formacao || '4-3-3';
    var coords = (typeof formacoes !== 'undefined' ? formacoes : {})[form] || [];
    var cods   = (typeof codigosFormacao !== 'undefined' ? codigosFormacao : {})[form] || [];
    var picks  = me.picks || [];

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
      card.innerHTML =
        '<div class="draft-card-pos">' + htmlEsc(posStr) + '</div>' +
        '<div class="draft-card-nome">' + htmlEsc(jogador.nome || '—') + '</div>' +
        '<div class="draft-card-forca">' + (jogador.forca || '—') + '</div>' +
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
    if (String(draftTurnoUid) !== String(meuUserId)) return;   // autoritativo: só na minha vez
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
      socket.emit('draft:move', { fromSlot: repositionFrom, toSlot: i });
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
    modalPoolPos = embaralhar((poolLocal || []).filter(function (p) { return podeOcupar(p, cod); }));
    modalPosPage = 0;
    if (modalDraftPickTitulo) modalDraftPickTitulo.textContent = 'Escolha um jogador para ' + (cod || '?');
    renderModalCartas();
    modalDraftPick.classList.remove('escondida');
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
      var carta = document.createElement('div');
      carta.className = 'draft-carta carta-entrando tier-' + (typeof tierDaForca === 'function' ? tierDaForca(j.forca) : 'bronze');
      carta.style.animationDelay = atraso + 's';
      carta.innerHTML =
        '<span class="carta-brilho" style="animation-delay:' + (atraso + 0.26).toFixed(2) + 's"></span>' +
        '<span class="carta-nome" title="' + htmlEsc(j.nome || '') + '">' + htmlEsc(j.nome || '—') + '</span>' +
        '<span class="carta-time">' + htmlEsc(j.clube || '') + '</span>' +
        '<span class="carta-ano">' + htmlEsc(j.edicao || '') + '</span>' +
        '<span class="carta-posicoes">' + htmlEsc((j.posicoes || []).join('/')) + '</span>' +
        '<span class="carta-forca">' + (j.forca || '—') + '</span>';
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
  }

  function atualizarCarouselPos() { /* faixa agora rola nativamente; sem transform */ }

  // ── Campo online ──────────────────────────────────────────────────────────

  function renderCampoOnline(campoEl, picks, formacao) {
    var slots    = campoEl.querySelectorAll('.slot-ol');
    // Rótulos das posições: usa a MESMA fonte do offline (codigosFormacao, global
    // do formacoes.js), na mesma ordem das coordenadas — nada de lista paralela.
    var posis    = (typeof codigosFormacao !== 'undefined' && codigosFormacao[formacao])
                 ? codigosFormacao[formacao]
                 : (typeof codigosFormacao !== 'undefined' ? codigosFormacao['4-3-3'] : null);
    // Coordenadas dos slots, também do formacoes.js (mesma ordem).
    var coords   = (typeof formacoes !== 'undefined' && formacoes[formacao])
                 ? formacoes[formacao]
                 : (typeof formacoes !== 'undefined' ? formacoes['4-3-3'] : null);

    slots.forEach(function (slot, i) {
      // Apply position from formation coordinates
      if (coords && coords[i]) {
        slot.style.left = coords[i].left + '%';
        slot.style.top  = coords[i].top  + '%';
      }

      var jog = picks[i];
      slot.innerHTML = '';
      if (jog) {
        slot.classList.add('preenchido');
        var pos  = posis ? (posis[i] || '?') : ((jog.posicoes && jog.posicoes[0]) || '?');
        var nome = jog.nome ? jog.nome.split(' ').slice(-1)[0] : '?';
        slot.innerHTML =
          '<span style="font-size:0.64rem;font-weight:800;color:#D9B25A;line-height:1">' + htmlEsc(pos) + '</span>' +
          '<span class="slot-nome">' + htmlEsc(nome) + '</span>' +
          (jog.forca ? '<span class="slot-ol-forca">' + jog.forca + '</span>' : '');
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
      draftTituloEl.innerHTML = (sou ? '⚡ É a SUA vez!' : 'É a vez de: ' + htmlEsc(nomeUsuario(jog))) + tag;
    }
    if (!draftCampo) return;
    if (draftCampoLabel) {
      draftCampoLabel.textContent = sou ? 'Sua escalação — clique numa posição aberta' : ('Time de: ' + nomeUsuario(jog));
    }
    renderCampoOnline(draftCampo, jog.picks || [], jog.formacao || '4-3-3');
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
    renderCampoOnline(elencosCampo, jog.picks || [], jog.formacao || '4-3-3');

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
      row.innerHTML =
        '<span class="draft-ordem-num">' + (i + 1) + '</span>' +
        '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + htmlEsc(nomeTime) + tagEu + tagBot + '</span>' +
        '<span class="draft-ordem-picks">' + picks + ' picks</span>';
      draftOrdemLista.appendChild(row);
    });
  }

  // ── Ações UI ──────────────────────────────────────────────────────────────

  function criarSala() {
    btnCriarSala.disabled    = true;
    btnCriarSala.textContent = 'Criando...';

    var nome  = (document.getElementById('input-nome-sala').value || '').trim();
    var velEl = document.querySelector('#sala-velocidade .pilula-ativa');
    var velocidade = velEl ? velEl.dataset.vel : 'normal';

    garantirToken()
      .then(function () {
        return api.criarSala({ competicao: 'Brasileirão', nome: nome || undefined, velocidade: velocidade });
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

    garantirToken()
      .then(function () {
        return api.entrarSala(codigo);
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
    draftTituloEl      = document.getElementById('online-draft-titulo');
    draftSubtituloEl   = document.getElementById('draft-subtitulo');
    draftOrdemLista    = document.getElementById('draft-ordem-lista');
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
    rodadaProximos       = document.getElementById('rodada-proximos');
    proximosTitulo       = document.getElementById('proximos-titulo');
    rodadaAguardandoHost = document.getElementById('rodada-aguardando-host');
    tabPartidas = document.getElementById('tab-partidas');
    tabClassif  = document.getElementById('tab-classif');
    abaPartidas = document.getElementById('aba-partidas');
    abaClassif  = document.getElementById('aba-classif');
    btnPularTudo        = document.getElementById('online-btn-pular');
    modalPular          = document.getElementById('modal-pular');
    modalPularConfirmar = document.getElementById('modal-pular-confirmar');
    modalPularCancelar  = document.getElementById('modal-pular-cancelar');
    skipContador        = document.getElementById('online-skip-cont');

    // Fim
    onlineRankingFinal = document.getElementById('online-ranking-final');
    btnVerResumo    = document.getElementById('btn-ver-resumo');
    btnVoltarInicio = document.getElementById('btn-voltar-inicio');
    fimAcoes        = document.getElementById('fim-acoes');
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
      });
    });

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
      if (String(draftTurnoUid) !== String(meuUserId)) return;   // só na MINHA vez (autoritativo)
      btnDraftSelecionar.disabled    = true;
      btnDraftSelecionar.textContent = 'Escolhendo...';
      socket.emit('draft:pick', { playerId: selectedPlayer.id, slotIndex: selectedSlot });
      selectedPlayer = null;
      selectedSlot   = null;
      minhaVez       = false;
    });

    // Modal de escolha (fundo opaco): confirmar pick. Clicar no fundo NÃO fecha — só o botão.
    if (modalDraftPickResortear) modalDraftPickResortear.addEventListener('click', resortearModalDraftPick);
    if (modalDraftPickSelecionar) modalDraftPickSelecionar.addEventListener('click', function () {
      if (!selectedPlayer || selectedSlot === null) return;
      if (String(draftTurnoUid) !== String(meuUserId)) return;
      modalDraftPickSelecionar.disabled    = true;
      modalDraftPickSelecionar.textContent = 'Escolhendo...';
      socket.emit('draft:pick', { playerId: selectedPlayer.id, slotIndex: selectedSlot });
      fecharModalDraftPick();
      selectedPlayer = null;
      selectedSlot   = null;
      minhaVez       = false;
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
      simulandoRodada              = true;
      btnRodadaProxima.disabled    = true;
      btnRodadaProxima.textContent = 'Simulando...';
      rodadaPartidas.innerHTML     = '<p style="color:#888;text-align:center;padding:2rem">Simulando…</p>';
      if (socket && socket.connected) socket.emit('round:simulate');
    });

    if (tabPartidas) tabPartidas.addEventListener('click', function () { selecionarAbaRodada('partidas'); });
    if (tabClassif)  tabClassif.addEventListener('click', function () { selecionarAbaRodada('classif'); });

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
      if (fimAcoes) fimAcoes.classList.remove('escondida');   // libera os botões ao fechar
    });
    if (btnVerResumo) btnVerResumo.addEventListener('click', abrirResumoOnline);
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
