// resumo.js — modal de resumo da campanha: 4 cards, mapa da escalação, lista de
// estatísticas e ações (baixar imagem · compartilhar · jogar de novo).

var resumoShareTexto = '';   // texto usado no compartilhamento

// Ícones (SVG inline) dos botões de ação — herdam a cor do texto via currentColor
var ICONE_BAIXAR =
  '<svg class="resumo-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
  'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 3v11"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/>' +
  '</svg>';
var ICONE_COMPARTILHAR =
  '<svg class="resumo-ico" viewBox="0 0 24 24" aria-hidden="true">' +
    '<circle cx="6" cy="12" r="2.6" fill="currentColor"/>' +
    '<circle cx="18" cy="5.5" r="2.6" fill="currentColor"/>' +
    '<circle cx="18" cy="18.5" r="2.6" fill="currentColor"/>' +
    '<path d="M8.2 10.9l7.6-4.1M8.2 13.1l7.6 4.1" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round"/>' +
  '</svg>';

function mostrarBotaoResumo(campeao) {
  resumoCampeao = campeao;
  try { salvarCampanhaNoHistorico(campeao); } catch (e) {}
  if (!btnResumo) return;
  btnResumo.textContent = campeao ? '\u2605 Ver Resumo da Campanha' : 'Ver Resumo da Campanha';
  btnResumo.classList.remove('escondida');
}

// Grava a campanha encerrada no histórico do usuário (logado → backend via /matches;
// convidado/offline → localStorage, tudo tratado dentro de api.js). Roda uma vez por campanha.
var _campanhaHistKey = null;
function salvarCampanhaNoHistorico(campeao) {
  if (typeof API === 'undefined' || !API.salvarPartida) return;
  if (typeof campanhaPartidas !== 'undefined' && campanhaPartidas <= 0) return;

  var comp = (typeof COMPETICOES !== 'undefined' && typeof modoSelecionado !== 'undefined' && COMPETICOES[modoSelecionado])
    ? COMPETICOES[modoSelecionado].label
    : 'Campanha';

  var pos = null;
  if (typeof modoSelecionado !== 'undefined' && modoSelecionado === 'brasileirao' &&
      typeof posicaoNaTabela === 'function') {
    try { pos = posicaoNaTabela(); } catch (e) {}
  }

  var v  = campanhaVitorias | 0, e = campanhaEmpates | 0, d = campanhaDerrotas | 0;
  var gf = campanhaGF | 0, ga = campanhaGA | 0;

  // Evita gravar a MESMA campanha duas vezes (ex.: jogo-a-jogo vs. pular tudo).
  var chave = comp + '|' + v + '|' + e + '|' + d + '|' + gf + '|' + ga + '|' + (campeao ? 1 : 0);
  if (chave === _campanhaHistKey) return;
  _campanhaHistKey = chave;

  var art = null, asi = null;
  if (statsJogadores && typeof statsJogadores === 'object') {
    Object.keys(statsJogadores).forEach(function (n) {
      var s = statsJogadores[n];
      if (s.gols > 0 && (!art || s.gols > art.gols)) art = { nome: n, gols: s.gols };
      if (s.asis > 0 && (!asi || s.asis > asi.assistencias)) asi = { nome: n, assistencias: s.asis };
    });
  }

  // Snapshot (formação + titulares com força/gols/assist.) para reabrir o resumo
  // no histórico. Mantém os índices das vagas (null nas vazias) p/ remontar o mapa.
  var picks = [];
  // `escalacao` pode não existir aqui (a guarda abaixo já existia). Preserva o número de vagas.
  var _totalVagas = (typeof escalacao !== 'undefined' && escalacao)
    ? escalacao.length
    : ((typeof titularesAtuais === 'function') ? titularesAtuais() : 11);
  for (var pi = 0; pi < _totalVagas; pi++) {
    var jp = (typeof escalacao !== 'undefined') ? escalacao[pi] : null;
    if (!jp) { picks.push(null); continue; }
    var sp = (statsJogadores && statsJogadores[jp.nome]) || { gols: 0, asis: 0 };
    // ⚠️ O `id` TEM de vir junto. É este snapshot que vai para o banco e alimenta as
    // conquistas de Combinação (api/achievements.js). Sem ele o id morre aqui e as
    // conquistas voltam a casar por nome — sem distinguir o Ronaldo Fenômeno do goleiro
    // do Bahia. O dado existiria no escalacao e não chegaria a lugar nenhum.
    picks.push({ id: jp.id, codigo: jp.codigo, nome: jp.nome, forca: jp.forca, gols: sp.gols | 0, asis: sp.asis | 0 });
  }
  var aprovCalc = (typeof campanhaPartidas !== 'undefined' && campanhaPartidas > 0)
    ? Math.round((v * 3 + e) / (campanhaPartidas * 3) * 100) : 0;
  var snapshot = {
    formacao: (typeof formacaoJogo !== 'undefined') ? formacaoJogo : '4-3-3',
    aprov:    aprovCalc,
    picks:    picks
  };

  // Flags de eventos finos da campanha (conquistas). Espalhados em detalhes p/ o backend ler.
  var flags = (typeof campanhaFlags !== 'undefined' && campanhaFlags) ? campanhaFlags : {};

  API.salvarPartida({
    competicao: comp,
    modo:       'solo',
    vitorias:   v,
    empates:    e,
    derrotas:   d,
    gf:         gf,
    ga:         ga,
    posicao:    pos,
    campeao:    !!campeao,
    detalhes:   {
      artilheiro: art, assistente: asi, snapshot: snapshot,
      hatTrick:         !!flags.hatTrick,
      poker:            !!flags.poker,
      showDeBola:       !!flags.showDeBola,
      maiorSaldoJogo:   flags.maiorSaldoJogo | 0,
      finalNosPenaltis: !!flags.finalNosPenaltis,
      matasNosPenaltis: flags.matasNosPenaltis | 0
    }
  }).then(function (resp) {
    // Toast das conquistas recém-desbloqueadas (o backend retorna novasConquistas).
    if (resp && resp.novasConquistas && typeof mostrarToastConquistas === 'function') {
      mostrarToastConquistas(resp.novasConquistas);
    }
  }).catch(function () {});
}

// Abrevia "Marcos Acuña" → "Acuña"; nomes de uma palavra ficam iguais
function nomeCurto(nome) {
  var p = String(nome).trim().split(/\s+/);
  return p.length > 1 ? p[p.length - 1] : p[0];
}

function mostrarResumo() {
  if (!resumoOverlay) return;

  // ---- Destaques: maior goleador e maior assistente da campanha ----
  var artilheiro = null, assistente = null;
  Object.keys(statsJogadores).forEach(function (nome) {
    var s = statsJogadores[nome];
    if (s.gols > 0 && (!artilheiro || s.gols > artilheiro.v)) artilheiro = { nome: nome, v: s.gols };
    if (s.asis > 0 && (!assistente || s.asis > assistente.v)) assistente = { nome: nome, v: s.asis };
  });

  var saldo  = campanhaGF - campanhaGA;
  var comp   = COMPETICOES[modoSelecionado].label.toUpperCase();
  var titulo = resumoCampeao ? 'CAMPE\u00C3O' : 'FIM DE CAMPANHA';

  // Aproveitamento: pontos conquistados sobre pontos possíveis (3 por jogo)
  var pts   = campanhaVitorias * 3 + campanhaEmpates;
  var aprov = campanhaPartidas > 0 ? Math.round(pts / (campanhaPartidas * 3) * 100) : 0;

  // Texto de compartilhamento
  resumoShareTexto =
    (resumoCampeao ? 'Fui CAMPE\u00C3O' : 'Terminei minha campanha') +
    ' no The Dream Team \u2014 ' + COMPETICOES[modoSelecionado].label +
    ', com ' + aprov + '% de aproveitamento e ' + campanhaGF + ' gols! \u26BD\uD83C\uDFC6';

  // ---- Troféu (SVG) — herda a cor de destaque do tema ----
  var trofeu =
    '<svg class="resumo-trofeu" viewBox="0 0 64 64" aria-hidden="true">' +
      '<path d="M20 6h24v10a12 12 0 0 1-24 0V6z" fill="currentColor"/>' +
      '<path d="M20 9H9v5a8 8 0 0 0 9 8" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '<path d="M44 9h11v5a8 8 0 0 1-9 8" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '<rect x="29" y="28" width="6" height="9" fill="currentColor"/>' +
      '<rect x="21" y="37" width="22" height="5" rx="1" fill="currentColor"/>' +
      '<rect x="25" y="42" width="14" height="6" rx="1" fill="currentColor"/>' +
    '</svg>';

  // ---- 4 cards do topo ----
  function card(rot, val, sub) {
    return '<div class="resumo-card-item">' +
             '<span class="rci-rot">' + rot + '</span>' +
             '<span class="rci-val">' + val + '</span>' +
             '<span class="rci-sub">' + sub + '</span>' +
           '</div>';
  }
  var cardsHtml =
    card('Campanha',
         '<b class="rec-v">' + campanhaVitorias + '</b><i>\u00B7</i>' +
         '<b class="rec-e">' + campanhaEmpates  + '</b><i>\u00B7</i>' +
         '<b class="rec-d">' + campanhaDerrotas + '</b>',
         'V \u00B7 E \u00B7 D') +
    card('Gols',
         '<b>' + campanhaGF + '</b><i>:</i><b>' + campanhaGA + '</b>',
         'Feitos \u00B7 Sofridos  (' + (saldo >= 0 ? '+' : '') + saldo + ')') +
    card('Artilheiro',
         artilheiro ? nomeCurto(artilheiro.nome) : '\u2014',
         artilheiro ? (artilheiro.v + ' gols') : 'sem gols') +
    card('Assistente',
         assistente ? nomeCurto(assistente.nome) : '\u2014',
         assistente ? (assistente.v + ' assist\u00EAncias') : 'sem assist\u00EAncias');

  // ---- MINI-CAMPO: titulares posicionados pela formação ----
  var coords = formacoes[formacaoJogo] || [];
  var campoHtml =
    '<div class="rc-linha-meio"></div><div class="rc-circulo"></div>' +
    '<div class="rc-area rc-area-cima"></div><div class="rc-area rc-area-baixo"></div>';
  for (var i = 0; i < coords.length; i++) {
    var pos = coords[i];
    if (!pos) continue;
    var jog = escalacao[i];
    campoHtml +=
      '<div class="resumo-jogador" style="left:' + pos.left + '%;top:' + pos.top + '%">' +
        '<span class="resumo-jogador-marca">' + (jog ? jog.codigo : '') + '</span>' +
        '<span class="resumo-jogador-nome">' + (jog ? nomeCurto(jog.nome) : '') + '</span>' +
      '</div>';
  }

  // ---- Lista de estatísticas, na ordem das vagas da formação (GOL primeiro) ----
  var titulares = [];
  for (var k = 0; k < escalacao.length; k++) { if (escalacao[k]) titulares.push(escalacao[k]); }

  var listaHtml =
    '<div class="resumo-lista-head">' +
      '<span class="rl-nome">Jogador</span><span class="rl-num">F\u00E7a</span>' +
      '<span class="rl-num">G</span><span class="rl-num">A</span>' +
    '</div>';
  titulares.forEach(function (j) {
    var s = statsJogadores[j.nome] || { gols: 0, asis: 0 };
    listaHtml +=
      '<div class="resumo-lista-linha">' +
        '<span class="rl-nome"><i class="rl-cod">' + j.codigo + '</i>' + nomeCurto(j.nome) + '</span>' +
        '<span class="rl-num rl-forca">' + j.forca + '</span>' +
        '<span class="rl-num">' + s.gols + '</span>' +
        '<span class="rl-num">' + s.asis + '</span>' +
      '</div>';
  });

  // ---- Monta o modal ----
  resumoOverlay.innerHTML =
    '<div class="resumo-backdrop"></div>' +
    '<div class="resumo-card" id="resumo-card">' +
      '<div class="resumo-conteudo" id="resumo-conteudo">' +
        '<div class="resumo-hero">' + (resumoCampeao ? trofeu : '') +
          '<h2 class="resumo-titulo">' + titulo + '</h2>' +
          '<p class="resumo-sub">' + comp + ' \u00B7 ' + formacaoJogo + ' \u00B7 ' + aprov + '% APROVEITAMENTO</p>' +
        '</div>' +
        '<div class="resumo-cards">' + cardsHtml + '</div>' +
        '<div class="resumo-grid">' +
          '<div class="resumo-col-campo">' +
            '<p class="resumo-bloco-rot">Mapa de Escala\u00E7\u00E3o</p>' +
            '<div class="resumo-campo">' + campoHtml + '</div>' +
          '</div>' +
          '<div class="resumo-col-lista">' +
            '<p class="resumo-bloco-rot">Jogadores &amp; Estat\u00EDsticas</p>' +
            '<div class="resumo-lista">' + listaHtml + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="resumo-marca">THE DREAM TEAM</div>' +
      '</div>' +
      '<div class="resumo-acoes">' +
        '<button id="resumo-baixar" class="resumo-btn">' + ICONE_BAIXAR + 'Baixar imagem</button>' +
        '<button id="resumo-compartilhar" class="resumo-btn">' + ICONE_COMPARTILHAR + 'Compartilhar</button>' +
        '<button id="resumo-jogar" class="resumo-btn-destaque">Jogar de Novo \u25BA</button>' +
      '</div>' +
    '</div>';

  resumoOverlay.classList.remove('escondida');
  resumoOverlay.querySelector('.resumo-backdrop').addEventListener('click', fecharResumo);
  UI.on('resumo-baixar', 'click', baixarResumo);
  UI.on('resumo-compartilhar', 'click', compartilharResumo);
  UI.on('resumo-jogar', 'click', jogarDeNovo);
}

function fecharResumo() {
  if (resumoOverlay) resumoOverlay.classList.add('escondida');
}

// Gera o canvas do card (escondendo os botões e liberando a altura p/ capturar tudo)
function gerarCanvasResumo(callback) {
  var card = document.getElementById('resumo-card');
  if (typeof html2canvas === 'undefined' || !card) {
    alert('Para gerar a imagem \u00E9 preciso estar conectado \u00E0 internet (a biblioteca de captura carrega online). Enquanto isso, voc\u00EA pode tirar um print da tela.');
    return;
  }
  var acoes   = card.querySelector('.resumo-acoes');
  var prevMax = card.style.maxHeight, prevOv = card.style.overflowY;
  if (acoes) acoes.style.visibility = 'hidden';   // some os botões na imagem
  card.style.maxHeight = 'none';                   // garante captura do card inteiro
  card.style.overflowY = 'visible';
  function restaurar() {
    if (acoes) acoes.style.visibility = '';
    card.style.maxHeight = prevMax;
    card.style.overflowY = prevOv;
  }
  // Fundo SÓLIDO (resolve var(--bg) para rgb) — evita PNG "lavado"/transparente.
  var fundo = getComputedStyle(document.body).backgroundColor || '#0E0F13';
  html2canvas(card, { backgroundColor: fundo, scale: 2 }).then(function (canvas) {
    restaurar();
    callback(canvas);
  }).catch(function () {
    restaurar();
    alert('N\u00E3o consegui gerar a imagem agora. Tente um print da tela.');
  });
}

function baixarResumo() {
  gerarCanvasResumo(function (canvas) {
    var link = document.createElement('a');
    link.download = 'the-dream-team-resumo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

function compartilharResumo() {
  gerarCanvasResumo(function (canvas) {
    canvas.toBlob(function (blob) {
      var arquivo = new File([blob], 'the-dream-team-resumo.png', { type: 'image/png' });
      // Web Share API com arquivo (celular: abre WhatsApp, Instagram, etc.)
      if (navigator.canShare && navigator.canShare({ files: [arquivo] })) {
        navigator.share({
          files: [arquivo],
          title: 'The Dream Team',
          text: resumoShareTexto
        }).catch(function () { /* usuário cancelou — silencioso */ });
      } else {
        // Fallback (desktop sem Web Share): baixa a imagem e abre o WhatsApp com o texto
        var link = document.createElement('a');
        link.download = 'the-dream-team-resumo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        window.open('https://wa.me/?text=' + encodeURIComponent(resumoShareTexto), '_blank');
      }
    }, 'image/png');
  });
}

function jogarDeNovo() {
  fecharResumo();
  reiniciarCampanha();
  acaoBotao = 'iniciar';
  var b = document.getElementById('btn-iniciar-jogo');
  if (b) b.textContent = 'Iniciar Campanha \u25BA';
  voltarHome();
}


// ─────────────────────── RESUMO A PARTIR DO HISTÓRICO ───────────────────────
// Reabre o resumo de uma campanha encerrada. Campanhas offline trazem o snapshot
// completo (mapa + lista); as do backend caem numa versão compacta (só números).
function mostrarResumoHistorico(item) {
  if (!resumoOverlay || !item) return;

  var snap   = (item.detalhes && item.detalhes.snapshot) || null;
  var comp   = String(item.competicao || 'Campanha').toUpperCase();
  var v      = +item.vitorias || 0, e = +item.empates || 0, d = +item.derrotas || 0;
  var gf     = +item.gf || 0, ga = +item.ga || 0, saldo = gf - ga;
  var jogos  = v + e + d;
  var aprov  = (snap && snap.aprov != null) ? snap.aprov
             : (jogos ? Math.round((v * 3 + e) / (jogos * 3) * 100) : 0);
  var formac = snap ? snap.formacao : null;
  var campeao = !!item.campeao;
  var titulo  = campeao ? 'CAMPE\u00C3O' : (item.posicao ? (+item.posicao) + '\u00BA LUGAR' : 'FIM DE CAMPANHA');

  // Artilheiro / assistente: do snapshot (picks) ou do resumo salvo em "detalhes".
  var artilheiro = null, assistente = null;
  if (snap && snap.picks) {
    snap.picks.forEach(function (p) {
      if (!p) return;
      if (p.gols > 0 && (!artilheiro || p.gols > artilheiro.v)) artilheiro = { nome: p.nome, v: p.gols };
      if (p.asis > 0 && (!assistente || p.asis > assistente.v)) assistente = { nome: p.nome, v: p.asis };
    });
  } else if (item.detalhes) {
    if (item.detalhes.artilheiro) artilheiro = { nome: item.detalhes.artilheiro.nome, v: item.detalhes.artilheiro.gols };
    if (item.detalhes.assistente) assistente = { nome: item.detalhes.assistente.nome, v: item.detalhes.assistente.assistencias };
  }

  var trofeu =
    '<svg class="resumo-trofeu" viewBox="0 0 64 64" aria-hidden="true">' +
      '<path d="M20 6h24v10a12 12 0 0 1-24 0V6z" fill="currentColor"/>' +
      '<path d="M20 9H9v5a8 8 0 0 0 9 8" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '<path d="M44 9h11v5a8 8 0 0 1-9 8" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '<rect x="29" y="28" width="6" height="9" fill="currentColor"/>' +
      '<rect x="21" y="37" width="22" height="5" rx="1" fill="currentColor"/>' +
      '<rect x="25" y="42" width="14" height="6" rx="1" fill="currentColor"/>' +
    '</svg>';

  function card(rot, val, sub) {
    return '<div class="resumo-card-item"><span class="rci-rot">' + rot + '</span>' +
           '<span class="rci-val">' + val + '</span><span class="rci-sub">' + sub + '</span></div>';
  }
  var cardsHtml =
    card('Campanha',
         '<b class="rec-v">' + v + '</b><i>\u00B7</i><b class="rec-e">' + e + '</b><i>\u00B7</i><b class="rec-d">' + d + '</b>',
         'V \u00B7 E \u00B7 D') +
    card('Gols', '<b>' + gf + '</b><i>:</i><b>' + ga + '</b>',
         'Feitos \u00B7 Sofridos  (' + (saldo >= 0 ? '+' : '') + saldo + ')') +
    card('Artilheiro', artilheiro ? nomeCurto(artilheiro.nome) : '\u2014', artilheiro ? (artilheiro.v + ' gols') : 'sem gols') +
    card('Assistente', assistente ? nomeCurto(assistente.nome) : '\u2014', assistente ? (assistente.v + ' assist\u00EAncias') : 'sem assist\u00EAncias');

  // Mapa de escalação + lista (só quando há snapshot)
  var gridHtml;
  if (snap && snap.picks && typeof formacoes !== 'undefined' && formacoes[formac]) {
    var coords = formacoes[formac] || [];
    var campoHtml =
      '<div class="rc-linha-meio"></div><div class="rc-circulo"></div>' +
      '<div class="rc-area rc-area-cima"></div><div class="rc-area rc-area-baixo"></div>';
    for (var i = 0; i < coords.length; i++) {
      var c = coords[i]; if (!c) continue;
      var jog = snap.picks[i];
      campoHtml +=
        '<div class="resumo-jogador" style="left:' + c.left + '%;top:' + c.top + '%">' +
          '<span class="resumo-jogador-marca">' + (jog ? jog.codigo : '') + '</span>' +
          '<span class="resumo-jogador-nome">' + (jog ? nomeCurto(jog.nome) : '') + '</span>' +
        '</div>';
    }
    var listaHtml =
      '<div class="resumo-lista-head"><span class="rl-nome">Jogador</span>' +
      '<span class="rl-num">F\u00E7a</span><span class="rl-num">G</span><span class="rl-num">A</span></div>';
    snap.picks.forEach(function (j) {
      if (!j) return;
      listaHtml +=
        '<div class="resumo-lista-linha">' +
          '<span class="rl-nome"><i class="rl-cod">' + j.codigo + '</i>' + nomeCurto(j.nome) + '</span>' +
          '<span class="rl-num rl-forca">' + j.forca + '</span>' +
          '<span class="rl-num">' + (j.gols | 0) + '</span>' +
          '<span class="rl-num">' + (j.asis | 0) + '</span>' +
        '</div>';
    });
    gridHtml =
      '<div class="resumo-grid">' +
        '<div class="resumo-col-campo"><p class="resumo-bloco-rot">Mapa de Escala\u00E7\u00E3o</p>' +
          '<div class="resumo-campo">' + campoHtml + '</div></div>' +
        '<div class="resumo-col-lista"><p class="resumo-bloco-rot">Jogadores &amp; Estat\u00EDsticas</p>' +
          '<div class="resumo-lista">' + listaHtml + '</div></div>' +
      '</div>';
  } else {
    gridHtml = '<p class="resumo-bloco-rot" style="text-align:center;opacity:0.75">' +
               'Mapa detalhado dispon\u00EDvel para campanhas jogadas offline neste dispositivo.</p>';
  }

  var subPartes = [comp];
  if (formac) subPartes.push(formac);
  subPartes.push(aprov + '% APROVEITAMENTO');

  resumoOverlay.innerHTML =
    '<div class="resumo-backdrop"></div>' +
    '<div class="resumo-card" id="resumo-card">' +
      '<div class="resumo-conteudo" id="resumo-conteudo">' +
        '<div class="resumo-hero">' + (campeao ? trofeu : '') +
          '<h2 class="resumo-titulo">' + titulo + '</h2>' +
          '<p class="resumo-sub">' + subPartes.join(' \u00B7 ') + '</p>' +
        '</div>' +
        '<div class="resumo-cards">' + cardsHtml + '</div>' +
        gridHtml +
        '<div class="resumo-marca">THE DREAM TEAM</div>' +
      '</div>' +
      '<div class="resumo-acoes">' +
        '<button id="resumo-baixar" class="resumo-btn">' + ICONE_BAIXAR + 'Baixar imagem</button>' +
        '<button id="resumo-compartilhar" class="resumo-btn">' + ICONE_COMPARTILHAR + 'Compartilhar</button>' +
        '<button id="resumo-hist-fechar" class="resumo-btn-destaque">Fechar</button>' +
      '</div>' +
    '</div>';

  resumoShareTexto =
    (campeao ? 'Fui CAMPE\u00C3O' : 'Terminei minha campanha') +
    ' no The Dream Team \u2014 ' + (item.competicao || '') +
    ', com ' + aprov + '% de aproveitamento e ' + gf + ' gols! \u26BD\uD83C\uDFC6';

  resumoOverlay.classList.remove('escondida');
  resumoOverlay.querySelector('.resumo-backdrop').addEventListener('click', fecharResumo);
  UI.on('resumo-baixar', 'click', baixarResumo);
  UI.on('resumo-compartilhar', 'click', compartilharResumo);
  UI.on('resumo-hist-fechar', 'click', fecharResumo);
}
