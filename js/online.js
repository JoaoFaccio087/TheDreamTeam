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
  var selectedPlayerId = null; // id do jogador selecionado no carousel
  var allPlayers       = {};   // { userId: { username, nomeDoTime, formacao, picks, pronto } }
  var ordemDraftIds    = [];   // ordem dos userId no draft
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
  var lobbyCampo, lobbyBoxScore;

  // Draft
  var draftTituloEl, draftSubtituloEl, draftOrdemLista;
  var draftTimerBar, draftTimerNum, draftCampo;
  var draftCarouselWrap, draftCarousel, draftArrowEsq, draftArrowDir, btnDraftSelecionar;

  // Elencos
  var elencosUsersLista, elencosCampoLabel, elencosCampo, elencosForca;
  var elencosProntosCount, btnElencosPronto, btnElencosComecar;

  // Rodada
  var rodadaTituloEl, rodadaPartidas, btnRodadaProxima, btnRodadaFim;
  var rodadaClassif, rodadaArtilharia, rodadaAssistencias;

  // Fim
  var onlineRankingFinal, btnNovaSala;

  // ── Formações (posições por slot) ─────────────────────────────────────────
  var FORMACOES_POS = {
    '4-3-3':    ['GOL','LD','ZAG','ZAG','LE','MC','VOL','MC','PE','ATA','PD'],
    '4-4-2':    ['GOL','LD','ZAG','ZAG','LE','MD','MC','MC','ME','ATA','ATA'],
    '4-2-3-1':  ['GOL','LD','ZAG','ZAG','LE','VOL','VOL','ME','MC','MD','ATA'],
    '3-5-2':    ['GOL','ZAG','ZAG','ZAG','LD','MC','VOL','MC','LE','ATA','ATA'],
    '4-5-1':    ['GOL','LD','ZAG','ZAG','LE','MD','MC','VOL','MC','ME','ATA'],
    '3-4-3':    ['GOL','ZAG','ZAG','ZAG','LD','MC','MC','LE','PE','ATA','PD'],
  };

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
    selectedPlayerId = null;
    carouselIndex    = 0;
  }

  // ── Eventos Socket ────────────────────────────────────────────────────────

  function setupEventos() {
    socket.on('room:state',       onRoomState);
    socket.on('room:playerOrder', onPlayerOrder);
    socket.on('draft:turno',      onDraftTurno);
    socket.on('draft:yourTurn',   onDraftYourTurn);
    socket.on('draft:pick',       onDraftPickEvt);
    socket.on('draft:complete',   onDraftComplete);
    socket.on('ready:count',      onReadyCount);
    socket.on('round:start',      onRoundStart);
    socket.on('round:results',    onRoundResults);
    socket.on('game:end',         onGameEnd);
    socket.on('erro',             function (msg) { erroOnline(msg); });
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
    subview('online-draft');
    renderOrdemLista();
    // Desenha o campo já com as posições da minha formação (vazio), desde o início.
    var minhaForm = (allPlayers[meuUserId] && allPlayers[meuUserId].formacao) || '4-3-3';
    if (draftCampo) renderCampoOnline(draftCampo, [], minhaForm);
  }

  // draft:turno — vez de alguém
  function onDraftTurno(dados) {
    minhaVez         = String(dados.userId) === String(meuUserId);
    draftTurnoUid    = dados.userId;
    poolLocal        = dados.pool || [];
    indiceTurnoAtual = dados.turnoNum ? dados.turnoNum - 1 : indiceTurnoAtual;

    var nomeVez = dados.nomeDoTime || dados.username || '—';
    draftTituloEl.textContent    = minhaVez ? ('⚡ Sua vez — ' + nomeVez) : ('Vez de: ' + nomeVez);
    draftSubtituloEl.textContent = 'Pick ' + (dados.turnoNum || '?') + ' / ' + (dados.totalTurnos || '?');

    renderOrdemLista();
    iniciarTimer(dados.segundos || 30);

    if (minhaVez && poolLocal.length) {
      carouselIndex    = 0;
      selectedPlayerId = null;
      btnDraftSelecionar.disabled    = true;
      btnDraftSelecionar.textContent = 'Selecionar';
      renderCarousel();
      draftCarouselWrap.classList.remove('escondida');
    } else {
      draftCarouselWrap.classList.add('escondida');
    }
  }

  // draft:yourTurn — confirmação ao jogador da vez
  function onDraftYourTurn(dados) {
    minhaVez = true;
    if (dados && dados.pool && dados.pool.length) poolLocal = dados.pool;
    if (poolLocal.length) {
      carouselIndex    = 0;
      selectedPlayerId = null;
      btnDraftSelecionar.disabled    = true;
      btnDraftSelecionar.textContent = 'Selecionar';
      renderCarousel();
      draftCarouselWrap.classList.remove('escondida');
    }
  }

  // draft:pick — alguém escolheu (broadcast)
  function onDraftPickEvt(dados) {
    pararTimer();
    minhaVez = false;
    draftCarouselWrap.classList.add('escondida');

    if (dados.jogador) {
      if (!allPlayers[dados.userId]) allPlayers[dados.userId] = {};
      if (!allPlayers[dados.userId].picks) allPlayers[dados.userId].picks = [];
      allPlayers[dados.userId].picks.push(dados.jogador);

      // Remove do pool local
      poolLocal = poolLocal.filter(function (p) { return p.id !== dados.jogador.id; });

      // Atualiza campo se for meu pick
      if (String(dados.userId) === String(meuUserId)) {
        var eu = allPlayers[dados.userId];
        renderCampoOnline(draftCampo, eu.picks || [], eu.formacao || '4-3-3');
      }
    }

    indiceTurnoAtual++;
    renderOrdemLista();
  }

  // draft:complete — todos escolheram
  function onDraftComplete(dados) {
    pararTimer();
    minhaVez = false;
    draftCarouselWrap.classList.add('escondida');

    if (dados && dados.jogadores) {
      dados.jogadores.forEach(function (j) {
        allPlayers[j.userId] = j;
      });
    }

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
    totalRodadas    = dados.total  || 5;
    simulandoRodada = false;

    rodadaTituloEl.textContent = 'RODADA ' + rodadaAtual + ' DE ' + totalRodadas;
    rodadaPartidas.innerHTML   = '<p style="color:#888;text-align:center;padding:2rem">Simulando rodada ' + rodadaAtual + '…</p>';
    btnRodadaProxima.classList.add('escondida');
    btnRodadaFim.classList.add('escondida');

    subview('online-rodada');

    // Emite simulação automaticamente
    if (!simulandoRodada && socket && socket.connected) {
      simulandoRodada = true;
      socket.emit('round:simulate');
    }
  }

  // round:results — resultados da rodada
  function onRoundResults(dados) {
    simulandoRodada = false;
    rodadaAtual     = dados.rodada || rodadaAtual;
    rodadaTituloEl.textContent = 'RODADA ' + rodadaAtual + ' DE ' + totalRodadas;

    // Partidas
    rodadaPartidas.innerHTML = '';
    (dados.resultados || []).forEach(function (r) {
      var sou = String(r.userId) === String(meuUserId);
      var res = r.gMeus > r.gAdv ? 'vitoria' : r.gMeus < r.gAdv ? 'derrota' : 'empate';
      var adv = r.adversario ? htmlEsc((r.adversario.clube || 'Bot') + (r.adversario.edicao ? ' ' + r.adversario.edicao : '')) : 'Bot';

      var card = document.createElement('div');
      card.className = 'resultado-card ' + res + (sou ? ' eu' : '');
      card.innerHTML =
        '<div class="resultado-lado-esq">' +
          '<div class="resultado-jogador-nome' + (sou ? ' eu' : '') + '">' + htmlEsc(r.username || 'Jogador') + '</div>' +
          '<div class="resultado-clube-nome">' + htmlEsc(r.nomeDoTime || '') + '</div>' +
        '</div>' +
        '<div class="resultado-placar">' + r.gMeus + '<span class="placar-sep"> × </span>' + r.gAdv + '</div>' +
        '<div class="resultado-lado-dir">' +
          '<div class="resultado-jogador-nome">Bot</div>' +
          '<div class="resultado-clube-nome">' + adv + '</div>' +
        '</div>';
      rodadaPartidas.appendChild(card);
    });

    // Classificação
    rodadaClassif.innerHTML = '';
    (dados.classificacao || []).forEach(function (p, i) {
      var sou = String(p.userId) === String(meuUserId);
      var pts = (p.vitorias || 0) * 3 + (p.empates || 0);
      var row = document.createElement('div');
      row.className = 'classif-linha' + (sou ? ' eu' : '') + (i === 0 ? ' primeiro' : '');
      row.innerHTML =
        '<span class="classif-pos">' + (i + 1) + '</span>' +
        '<span class="classif-nome">' + htmlEsc(p.username || 'Jogador') + '</span>' +
        '<span class="classif-sg" style="flex:1;font-size:0.65rem;color:#888">' + htmlEsc(p.nomeDoTime || '') + '</span>' +
        '<span class="classif-sg">' + (p.vitorias || 0) + 'V ' + (p.empates || 0) + 'E</span>' +
        '<span class="classif-pts">' + pts + '</span>';
      rodadaClassif.appendChild(row);
    });

    // Artilharia
    rodadaArtilharia.innerHTML = '';
    (dados.artilharia || []).slice(0, 10).forEach(function (p, i) {
      var row = document.createElement('div');
      row.className = 'stats-linha';
      row.innerHTML =
        '<span class="stats-pos">' + (i + 1) + '</span>' +
        '<span class="stats-nome">' + htmlEsc(p.nome) + '</span>' +
        '<span class="stats-valor">' + p.gols + 'G</span>';
      rodadaArtilharia.appendChild(row);
    });

    // Assistências
    rodadaAssistencias.innerHTML = '';
    (dados.assistencias || []).slice(0, 10).forEach(function (p, i) {
      var row = document.createElement('div');
      row.className = 'stats-linha';
      row.innerHTML =
        '<span class="stats-pos">' + (i + 1) + '</span>' +
        '<span class="stats-nome">' + htmlEsc(p.nome) + '</span>' +
        '<span class="stats-valor">' + p.assists + 'A</span>';
      rodadaAssistencias.appendChild(row);
    });

    // Botões de navegação
    if (rodadaAtual >= totalRodadas) {
      btnRodadaFim.classList.remove('escondida');
      btnRodadaProxima.classList.add('escondida');
    } else {
      btnRodadaProxima.disabled    = false;
      btnRodadaProxima.textContent = 'Próxima Rodada ▶';
      btnRodadaProxima.classList.remove('escondida');
      btnRodadaFim.classList.add('escondida');
    }
  }

  // game:end — ranking final
  function onGameEnd(dados) {
    subview('online-fim');
    onlineRankingFinal.innerHTML = '';

    (dados.ranking || []).forEach(function (p, i) {
      var sou = String(p.userId) === String(meuUserId);
      var pts = (p.vitorias || 0) * 3 + (p.empates || 0);

      var div = document.createElement('div');
      div.className = 'ranking-final-linha' + (i === 0 ? ' primeiro' : '');
      div.innerHTML =
        '<span class="ranking-pos' + (i === 0 ? ' primeiro' : '') + '">' + (i + 1) + 'º</span>' +
        '<div style="flex:1;min-width:0">' +
          '<div class="ranking-nome' + (sou ? ' eu' : '') + '">' + (sou ? '★ ' : '') + htmlEsc(p.username || 'Jogador') + '</div>' +
          '<div class="ranking-time">' + htmlEsc(p.nomeDoTime || '') + '</div>' +
        '</div>' +
        '<div class="ranking-stats">' + (p.vitorias || 0) + 'V ' + (p.empates || 0) + 'E ' + (p.derrotas || 0) + 'D</div>' +
        '<span class="ranking-pts">' + pts + ' pts</span>';
      onlineRankingFinal.appendChild(div);
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

  function renderCarousel() {
    draftCarousel.innerHTML = '';
    var pool = poolLocal.slice(0, 60);
    pool.forEach(function (jogador) {
      var card = document.createElement('div');
      card.className   = 'draft-card' + (jogador.id === selectedPlayerId ? ' selecionado' : '');
      card.dataset.id  = jogador.id;

      var posStr = (jogador.posicoes || []).join('/') || '—';
      card.innerHTML =
        '<div class="draft-card-pos">' + htmlEsc(posStr) + '</div>' +
        '<div class="draft-card-nome">' + htmlEsc(jogador.nome || '—') + '</div>' +
        '<div class="draft-card-forca">' + (jogador.forca || '—') + '</div>' +
        '<div class="draft-card-clube">' + htmlEsc(jogador.clube || '') + (jogador.edicao ? ' ' + jogador.edicao : '') + '</div>';

      card.addEventListener('click', function () {
        draftCarousel.querySelectorAll('.draft-card').forEach(function (c) { c.classList.remove('selecionado'); });
        card.classList.add('selecionado');
        selectedPlayerId = jogador.id;
        btnDraftSelecionar.disabled = false;
      });

      draftCarousel.appendChild(card);
    });

    atualizarCarouselPos();
  }

  function atualizarCarouselPos() {
    var cardWidth = 146; // 140px + 6px gap
    draftCarousel.style.transform = 'translateX(-' + (carouselIndex * cardWidth) + 'px)';
  }

  // ── Campo online ──────────────────────────────────────────────────────────

  function renderCampoOnline(campoEl, picks, formacao) {
    var slots    = campoEl.querySelectorAll('.slot-ol');
    var posis    = FORMACOES_POS[formacao] || FORMACOES_POS['4-3-3'];
    // Use coordinates from formacoes.js (global const) for slot placement
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
        var pos  = (jog.posicoes && jog.posicoes[0]) ? jog.posicoes[0] : (posis ? posis[i] : '?');
        var nome = jog.nome ? jog.nome.split(' ').slice(-1)[0] : '?';
        slot.innerHTML =
          '<span style="font-size:0.5rem;color:#D9B25A;line-height:1">' + htmlEsc(pos) + '</span>' +
          '<span class="slot-nome">' + htmlEsc(nome) + '</span>' +
          (jog.forca ? '<span class="slot-ol-forca">' + jog.forca + '</span>' : '');
      } else {
        slot.classList.remove('preenchido');
        slot.textContent = posis ? (posis[i] || '?') : '?';
      }
    });
  }

  // ── Lobby: lista de jogadores ─────────────────────────────────────────────

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

      var inicial = (j.username || '?').charAt(0).toUpperCase();
      var badge   = j.pronto
        ? '<span class="lobby-jog-badge pronto">Pronto</span>'
        : '<span class="lobby-jog-badge aguardando">Aguardando</span>';
      row.innerHTML =
        '<div class="lobby-jog-avatar">' + htmlEsc(inicial) + '</div>' +
        '<div class="lobby-jog-info">' +
          '<div class="lobby-jog-nome">' + htmlEsc(j.username || 'Jogador') + (sou ? ' (você)' : '') + '</div>' +
          '<div class="lobby-jog-detalhe">' + htmlEsc(j.nomeDoTime || '') + ' · ' + (j.formacao || '4-3-3') + '</div>' +
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

      var sou = String(uid) === String(meuUserId);
      row.innerHTML =
        '<div class="lobby-jog-avatar">' + htmlEsc((jog.username || '?').charAt(0).toUpperCase()) + '</div>' +
        '<div class="lobby-jog-info">' +
          '<div class="lobby-jog-nome">' + htmlEsc(jog.username || 'Jogador') + (sou ? ' (você)' : '') + '</div>' +
          '<div class="lobby-jog-detalhe">' + htmlEsc(jog.nomeDoTime || '') + '</div>' +
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

    elencosCampoLabel.textContent = htmlEsc((jog.username || 'Jogador') + (jog.nomeDoTime ? ' — ' + jog.nomeDoTime : ''));
    renderCampoOnline(elencosCampo, jog.picks || [], jog.formacao || '4-3-3');

    var picks    = jog.picks || [];
    var forcaTot = picks.reduce(function (s, p) { return s + (p.forca || 70); }, 0);
    var forcaMed = picks.length ? Math.round(forcaTot / picks.length) : 0;
    elencosForca.textContent = 'Força do Elenco: ' + (picks.length ? forcaMed : '—');
  }

  // ── Ordem do Draft ────────────────────────────────────────────────────────

  function renderOrdemLista() {
    if (!draftOrdemLista) return;
    draftOrdemLista.innerHTML = '';
    ordemDraftIds.forEach(function (uid, i) {
      var jog = allPlayers[uid];
      var ativo = String(uid) === String(draftTurnoUid);
      var sou   = String(uid) === String(meuUserId);
      var picks = jog ? (jog.picks || []).length : 0;

      var row = document.createElement('div');
      row.className = 'draft-ordem-item' + (ativo ? ' ativo' : '') + (sou ? ' eu' : '');
      row.innerHTML =
        '<span class="draft-ordem-num">' + (i + 1) + '</span>' +
        '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + htmlEsc(jog ? (jog.nomeDoTime || jog.username) : String(uid)) + '</span>' +
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
    lobbyCampo           = document.getElementById('lobby-campo');
    lobbyBoxScore        = document.getElementById('lobby-box-score');

    // Draft
    draftTituloEl      = document.getElementById('draft-titulo');
    draftSubtituloEl   = document.getElementById('draft-subtitulo');
    draftOrdemLista    = document.getElementById('draft-ordem-lista');
    draftTimerBar      = document.getElementById('draft-timer-bar');
    draftTimerNum      = document.getElementById('draft-timer-num');
    draftCampo         = document.getElementById('draft-campo');
    draftCarouselWrap  = document.getElementById('draft-carousel-wrap');
    draftCarousel      = document.getElementById('draft-carousel');
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

    // Fim
    onlineRankingFinal = document.getElementById('online-ranking-final');
    btnNovaSala        = document.getElementById('btn-nova-sala');

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
      desconectar();
      mostrarTelaInicial();
    });

    // Draft: arrows
    draftArrowEsq.addEventListener('click', function () {
      carouselIndex = Math.max(0, carouselIndex - 1);
      atualizarCarouselPos();
    });

    draftArrowDir.addEventListener('click', function () {
      var max = Math.max(0, Math.min(poolLocal.length, 60) - 4);
      carouselIndex = Math.min(max, carouselIndex + 1);
      atualizarCarouselPos();
    });

    btnDraftSelecionar.addEventListener('click', function () {
      if (!selectedPlayerId || !minhaVez) return;
      btnDraftSelecionar.disabled    = true;
      btnDraftSelecionar.textContent = 'Escolhendo...';
      socket.emit('draft:pick', { playerId: selectedPlayerId });
      selectedPlayerId = null;
      minhaVez         = false;
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

    btnRodadaFim.addEventListener('click', function () {
      subview('online-fim');
    });

    // Fim
    btnNovaSala.addEventListener('click', function () {
      desconectar();
      mostrarTelaInicial();
      abrirModalOnline();
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
