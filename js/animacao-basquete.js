// ============================================================
//  animacao-basquete.js — camada de ANIMAÇÃO da partida de basquete
//
//  CONSOME o núcleo (SimulacaoBasquete) e desenha a partida na tela.
//  Espelha animacao-volei.js (mesma interface: prepararPartida,
//  coletarEstatisticas, animar) para encaixar no motor de campanha e no
//  acumulador de stats sem retrabalho.
//
//  Decisões de UX (alinhar com João):
//   - O placar sobe por QUARTO (não lance a lance): a cada tick, avança
//     um quarto e mostra o placar acumulado + linha-resumo do quarto.
//   - Ao fechar os 4 quartos: placar final; se houve prorrogação, indica.
//   - Destaques ao fim: pts/reb/ast dos maiores pontuadores.
//   - Velocidade (lento/normal/rápida) e "pular tudo" reaproveitados.
//
//  Autocontido e demonstrável: monta seu próprio card se preciso. O motor
//  de futebol/vôlei NÃO é tocado.
// ============================================================

(function (global) {
  'use strict';

  var Nucleo = (typeof SimulacaoBasquete !== 'undefined') ? SimulacaoBasquete
             : (typeof require !== 'undefined' ? require('./simulacao-basquete.js') : null);

  // Cadência (ms entre quartos), lida a cada tick p/ refletir a velocidade ao vivo.
  function cadenciaQuarto(velocidade) {
    if (velocidade === 'lento')  return 1100;
    if (velocidade === 'rapida') return 350;
    return 700; // normal
  }

  // ============================================================
  //  Prepara os dados da partida (chama o núcleo) SEM animar ainda.
  //  Retorna um "roteiro" que a animação consome quarto a quarto.
  //  Mantém pontosA/pontosB no topo (o fluxo de campanha lê isso, como
  //  lê setsA/setsB no vôlei).
  // ============================================================
  function prepararPartida(timeA, timeB, rng) {
    rng = rng || Math.random;
    var res = Nucleo.jogarPartida(timeA, timeB, rng);
    return {
      nomeA: timeA.nome, nomeB: timeB.nome,
      pontosA: res.pontosA, pontosB: res.pontosB,
      // Alias p/ compatibilidade com quem espera setsA/setsB (placar do jogo):
      setsA: res.pontosA, setsB: res.pontosB,
      vencedor: res.vencedor,
      prorrogacao: res.prorrogacao,
      quartos: res.quartos,
      statsA: res.statsA, statsB: res.statsB,
      placar: res.placar
    };
  }

  // ============================================================
  //  Coleta estatísticas por jogador (pontos/rebotes/assistências) a
  //  partir do roteiro — dos DOIS times. Usado na animação e no "pular".
  //  Formato compatível com o vôlei (campo `pontos`), + rebotes/assist.
  // ============================================================
  function coletarEstatisticas(roteiro) {
    var todos = (roteiro.statsA || []).concat(roteiro.statsB || []);
    return todos.map(function (s) {
      return {
        nome: s.nome, pos: s.pos,
        pontos: s.pontos, rebotes: s.rebotes, assistencias: s.assistencias,
        // alias p/ o acumulador de stats do vôlei (pontos/aces): aqui aces=0,
        // e as 3 estatísticas próprias ficam nos campos acima.
        aces: 0
      };
    }).sort(function (a, b) { return b.pontos - a.pontos; });
  }

  // ============================================================
  //  ANIMAÇÃO na tela. Recebe:
  //   opts = { elCard, roteiro, velocidade(), pular, onFim }
  //  O placar sobe por quarto; ao fim, destaques. Retorna { cancel() }.
  // ============================================================
  function animar(opts) {
    var roteiro   = opts.roteiro;
    var elPlacar  = opts.elCard.querySelector('.pb-placar');
    var elQuartos = opts.elCard.querySelector('.pb-quartos');
    var elStatus  = opts.elCard.querySelector('.pb-status');
    var elResumo  = opts.elCard.querySelector('.pb-resumo');
    var velFn     = opts.velocidade || function () { return 'normal'; };

    var cancelado = false;
    var timer = null;

    function pintarResumoQuartos(ate) {
      if (!elQuartos) return;
      var txt = roteiro.quartos.slice(0, ate)
        .map(function (q, i) { return 'Q' + (i + 1) + ': ' + q[0] + '-' + q[1]; })
        .join('  \u00B7  ');
      elQuartos.textContent = txt;
    }

    function fim() {
      if (elStatus) elStatus.textContent = '';
      if (elPlacar) elPlacar.textContent = roteiro.pontosA + ' \u2013 ' + roteiro.pontosB +
        (roteiro.prorrogacao ? '  (PRO)' : '');
      pintarResumoQuartos(4);
      if (elResumo) {
        var stats = coletarEstatisticas(roteiro).slice(0, 5);
        elResumo.innerHTML = '<div class="pb-resumo-tit">Destaques</div>' +
          stats.map(function (s) {
            var det = s.pontos + ' pts \u00B7 ' + s.rebotes + ' reb \u00B7 ' + s.assistencias + ' ast';
            return '<div class="pb-stat"><span class="pb-stat-nome">' + s.nome +
                   '</span><span class="pb-stat-num">' + det + '</span></div>';
          }).join('');
      }
      if (opts.onFim) opts.onFim(roteiro);
    }

    // Modo "pular tudo": direto ao resultado.
    if (opts.pular) {
      fim();
      return { cancel: function () {} };
    }

    // Estado: avança quarto a quarto, acumulando o placar.
    var qIdx = 0, paAtual = 0, pbAtual = 0;

    function tick() {
      if (cancelado) return;
      if (qIdx >= roteiro.quartos.length) { fim(); return; }

      var q = roteiro.quartos[qIdx];
      paAtual += q[0]; pbAtual += q[1];
      qIdx++;

      if (elPlacar) elPlacar.textContent = paAtual + ' \u2013 ' + pbAtual;
      if (elStatus) elStatus.textContent = qIdx + 'º quarto';
      pintarResumoQuartos(qIdx);

      if (qIdx >= roteiro.quartos.length) {
        // último quarto exibido → fecha
        timer = setTimeout(fim, cadenciaQuarto(velFn()));
        return;
      }
      timer = setTimeout(tick, cadenciaQuarto(velFn()));
    }

    // arranque
    if (elStatus) elStatus.textContent = '1º quarto';
    if (elPlacar) elPlacar.textContent = '0 \u2013 0';
    timer = setTimeout(tick, cadenciaQuarto(velFn()));

    return { cancel: function () { cancelado = true; if (timer) clearTimeout(timer); } };
  }

  var API = {
    prepararPartida: prepararPartida,
    coletarEstatisticas: coletarEstatisticas,
    animar: animar,
    _cadenciaQuarto: cadenciaQuarto
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.AnimacaoBasquete = API;

})(typeof window !== 'undefined' ? window : this);
