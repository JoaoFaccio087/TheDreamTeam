// ============================================================
//  animacao-basquete.js — camada de ANIMAÇÃO da partida de basquete
//
//  CONSOME o núcleo (SimulacaoBasquete) e desenha a partida na tela.
//  Espelha animacao-volei.js (mesma interface: prepararPartida,
//  coletarEstatisticas, animar) para encaixar no motor de campanha e no
//  acumulador de stats sem retrabalho.
//
//  Decisões de UX (alinhar com João):
//   - O placar sobe CESTA A CESTA (de 1, 2 ou 3 pontos), como num jogo real:
//     cada quarto é decomposto numa sequência de cestas e revelado aos poucos,
//     intercalando os dois times. O resumo por quarto (Q1: x-y) aparece ao
//     fechar cada quarto. (Antes subia o quarto inteiro de uma vez.)
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

    // `silencioso: true` preenche o card com o resultado final MAS não chama onFim
    // (mesma razão do vôlei: o onFim é quem encadeia a próxima partida no automático,
    // e durante o "Pular tudo" isso faria as partidas seguirem simulando por cima).
    function fim(silencioso) {
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
      if (opts.onFim && !silencioso) opts.onFim(roteiro);
    }

    // Modo "pular tudo": direto ao resultado.
    if (opts.pular) {
      fim();
      return { cancel: function () {} };
    }

    // Decompõe um total de pontos de um quarto numa sequência realista de cestas:
    // predominam cestas de 2 e 3 pontos, com lances livres de 1 ocasionais. Retorna um
    // array de incrementos (ex.: [2,3,2,2,1,3,...]) cuja soma é exatamente o total.
    function cestasDoQuarto(total, r) {
      r = r || Math.random;
      var out = [];
      var resto = total;
      while (resto > 0) {
        var v;
        if (resto === 1) { v = 1; }
        else if (resto === 2) { v = (r() < 0.5) ? 2 : 1; }
        else {
          var d = r();
          // ~50% cestas de 2pts, ~35% de 3pts, ~15% lance livre de 1pt
          v = (d < 0.50) ? 2 : (d < 0.85 ? 3 : 1);
          if (v > resto) v = resto;
        }
        out.push(v);
        resto -= v;
      }
      return out;
    }

    // Monta a sequência de "lances" do jogo inteiro: para cada quarto, intercala as cestas
    // dos dois times de forma alternada/aleatória, marcando de qual lado é cada cesta.
    // Assim o placar sobe de 1/2/3 por vez, como num jogo real.
    function montarLances() {
      var todos = [];
      for (var i = 0; i < roteiro.quartos.length; i++) {
        var q = roteiro.quartos[i];
        var ca = cestasDoQuarto(q[0]);
        var cb = cestasDoQuarto(q[1]);
        // intercala as cestas de A e B do quarto preservando a ordem de cada um
        var ia = 0, ib = 0;
        var lancesQ = [];
        while (ia < ca.length || ib < cb.length) {
          var pegaA;
          if (ia >= ca.length) pegaA = false;
          else if (ib >= cb.length) pegaA = true;
          else pegaA = Math.random() < 0.5;
          if (pegaA) { lancesQ.push({ lado: 'a', v: ca[ia] }); ia++; }
          else { lancesQ.push({ lado: 'b', v: cb[ib] }); ib++; }
        }
        todos.push({ quarto: i, lances: lancesQ });
      }
      return todos;
    }

    // Cadência de cada CESTA. Um jogo tem ~100 cestas; alvos de duração:
    // normal ~13s (130ms), lento ~21s (210ms), rápida ~7s (70ms). Rápido o bastante
    // para não arrastar, lento o bastante para o placar ser legível subindo de 1/2/3.
    function cadenciaCesta(velocidade) {
      if (velocidade === 'lento')  return 210;
      if (velocidade === 'rapida') return 70;
      return 130; // normal
    }

    // Estado: avança CESTA a CESTA dentro de cada quarto, acumulando o placar.
    var qIdx = 0, paAtual = 0, pbAtual = 0;
    var _plano = montarLances();
    var _qAtual = 0, _lanceIdx = 0;

    function tickCesta() {
      if (cancelado) return;
      if (_qAtual >= _plano.length) { fim(); return; }

      var bloco = _plano[_qAtual];
      // terminou as cestas deste quarto → fecha o quarto e passa ao próximo
      if (_lanceIdx >= bloco.lances.length) {
        qIdx = _qAtual + 1;
        pintarResumoQuartos(qIdx);
        _qAtual++; _lanceIdx = 0;
        if (elStatus) {
          elStatus.textContent = (_qAtual >= _plano.length) ? '' : (_qAtual + 1) + 'º quarto';
        }
        if (_qAtual >= _plano.length) { timer = setTimeout(fim, cadenciaQuarto(velFn())); return; }
        // pequena pausa entre quartos
        timer = setTimeout(tickCesta, cadenciaQuarto(velFn()));
        return;
      }

      var lance = bloco.lances[_lanceIdx];
      if (lance.lado === 'a') paAtual += lance.v; else pbAtual += lance.v;
      _lanceIdx++;

      if (elPlacar) elPlacar.textContent = paAtual + ' \u2013 ' + pbAtual;
      if (elStatus) elStatus.textContent = (_qAtual + 1) + 'º quarto';
      timer = setTimeout(tickCesta, cadenciaCesta(velFn()));
    }

    // arranque (cesta a cesta)
    if (elStatus) elStatus.textContent = '1º quarto';
    if (elPlacar) elPlacar.textContent = '0 \u2013 0';
    timer = setTimeout(tickCesta, cadenciaCesta(velFn()));

    return { cancel: function () { cancelado = true; if (timer) clearTimeout(timer); },
             // finalizar(true) = silencioso: para os ticks e preenche o resultado final no
             // card, sem chamar onFim. Sem isso, o "Pular tudo" clicado no meio de um jogo
             // deixava o card congelado no placar parcial.
             finalizar: function (silencioso) {
               cancelado = true; if (timer) clearTimeout(timer);
               paAtual = roteiro.pontosA; pbAtual = roteiro.pontosB;
               fim(!!silencioso);
             } };
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
