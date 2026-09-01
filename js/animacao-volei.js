// ============================================================
//  animacao-volei.js — camada de ANIMAÇÃO da partida de vôlei
//
//  CONSOME o núcleo (SimulacaoVolei) e desenha a partida na tela,
//  ponto a ponto, reaproveitando a mesma filosofia de tick recursivo
//  do motor de futebol (setTimeout lendo a cadência a cada chamada).
//
//  Decisões de UX (fechadas com João, ago/2026):
//   - Placar sobe PONTO A PONTO, mas SEM uma linha de texto por ponto.
//   - Ao fechar cada set: 1 linha-resumo ("Set 2: 25-20").
//   - Entre sets: pausa curta "Trocando de lado...".
//   - Saque só VISUAL (indicador de quem saca + aces); não muda cálculo.
//   - Velocidade (lento/normal/rápida) e "pular tudo" reaproveitados.
//
//  Este módulo é AUTOCONTIDO e DEMONSTRÁVEL: monta seu próprio card e
//  anima, sem depender do fluxo de campanha ainda. A integração com a
//  campanha (adversário real, avanço de fase) vem numa etapa posterior.
//  O motor de futebol NÃO é tocado.
// ============================================================

(function (global) {
  'use strict';

  var Nucleo = (typeof SimulacaoVolei !== 'undefined') ? SimulacaoVolei
             : (typeof require !== 'undefined' ? require('./simulacao-volei.js') : null);

  // --- Cadência (ms entre pontos), lida a cada tick p/ refletir a velocidade ao vivo ---
  // Ponto de vôlei é mais rápido que minuto de futebol; valores enxutos p/ não arrastar.
  function cadenciaPonto(velocidade) {
    if (velocidade === 'lento')  return 320;
    if (velocidade === 'rapida') return 90;
    return 180; // normal
  }
  // Pausa do "trocando de lado" entre sets (proporcional à velocidade).
  function pausaTrocaLado(velocidade) {
    if (velocidade === 'lento')  return 1600;
    if (velocidade === 'rapida') return 500;
    return 1000;
  }

  // --- Peso p/ atribuir um PONTO a um jogador (quem tende a pontuar) ---
  // Ataque pontua mais; central pontua em bloqueio; líbero quase nunca marca.
  var PESO_PONTO = { OPO: 1.00, PON: 0.85, CEN: 0.60, LEV: 0.15, LIB: 0.03 };
  function sortearPontuador(jogadores, rng) {
    var cands = jogadores.filter(function (j) {
      return j.posicoes.indexOf('LIB') < 0; // líbero não finaliza
    });
    var pesos = cands.map(function (j) {
      var w = 0;
      j.posicoes.forEach(function (p) { if (PESO_PONTO[p] != null && PESO_PONTO[p] > w) w = PESO_PONTO[p]; });
      return w * (j.forca / 85);
    });
    var total = pesos.reduce(function (s, p) { return s + p; }, 0);
    var r = (rng || Math.random)() * total, acum = 0;
    for (var i = 0; i < cands.length; i++) { acum += pesos[i]; if (r <= acum) return cands[i]; }
    return cands[cands.length - 1];
  }

  // ============================================================
  //  Prepara os dados da partida (chama o núcleo) SEM animar ainda.
  //  Retorna um "roteiro" que a animação vai consumir tick a tick.
  // ============================================================
  function prepararPartida(timeA, timeB, rng) {
    rng = rng || Math.random;
    var fa = Nucleo.facetasDoTime(timeA.jogadores);
    var fb = Nucleo.facetasDoTime(timeB.jogadores);

    var setsA = 0, setsB = 0, roteiroSets = [];
    while (setsA < 3 && setsB < 3) {
      var ehTie = (setsA === 2 && setsB === 2);
      var alvo  = ehTie ? 15 : 25;
      var s = Nucleo.jogarSet(fa, fb, alvo, rng);
      if (s.pa > s.pb) setsA++; else setsB++;

      // Atribui cada ponto a um jogador (p/ estatísticas) e marca aces (visual).
      // Ace = ponto de saque; aqui, chance pequena de um ponto ser ace de quem "sacou".
      var eventos = s.pontos.map(function (lado) {
        var time = (lado === 'a') ? timeA : timeB;
        var autor = sortearPontuador(time.jogadores, rng);
        var ehAce = (rng() < 0.06); // ~6% dos pontos viram ace (só visual/estatística)
        return { lado: lado, autor: autor.nome, ace: ehAce };
      });

      roteiroSets.push({ pa: s.pa, pb: s.pb, eventos: eventos, tie: ehTie });
    }

    return {
      nomeA: timeA.nome, nomeB: timeB.nome,
      setsA: setsA, setsB: setsB,
      vencedor: setsA > setsB ? 'a' : 'b',
      roteiroSets: roteiroSets,
      placar: setsA + '-' + setsB + ' (' +
        roteiroSets.map(function (x) { return x.pa + '-' + x.pb; }).join(', ') + ')'
    };
  }

  // ============================================================
  //  Coleta as estatísticas da partida (pontos/bloqueios/aces por jogador)
  //  a partir do roteiro — usado tanto na animação quanto no "pular tudo".
  // ============================================================
  function coletarEstatisticas(roteiro) {
    var stats = {}; // nome -> { pontos, aces }
    roteiro.roteiroSets.forEach(function (set) {
      set.eventos.forEach(function (ev) {
        if (!stats[ev.autor]) stats[ev.autor] = { pontos: 0, aces: 0 };
        stats[ev.autor].pontos++;
        if (ev.ace) stats[ev.autor].aces++;
      });
    });
    return Object.keys(stats).map(function (nome) {
      return { nome: nome, pontos: stats[nome].pontos, aces: stats[nome].aces };
    }).sort(function (a, b) { return b.pontos - a.pontos; });
  }

  // ============================================================
  //  ANIMAÇÃO na tela. Recebe:
  //   opts = { elCard, roteiro, velocidade(), pular, onFim }
  //  elCard: elemento onde desenhar (placar, sets, eventos).
  //  velocidade(): função que retorna 'lento'|'normal'|'rapida' ao vivo.
  //  pular: se true, calcula tudo e mostra só o final (sem ticks).
  //  Retorna um "controle" com cancel() p/ interromper.
  // ============================================================
  function animar(opts) {
    var roteiro   = opts.roteiro;
    var elPlacar  = opts.elCard.querySelector('.pv-placar');
    var elSetsCont= opts.elCard.querySelector('.pv-sets-contador');
    var elSets    = opts.elCard.querySelector('.pv-sets');
    var elStatus  = opts.elCard.querySelector('.pv-status');
    var elResumo  = opts.elCard.querySelector('.pv-resumo');
    var velFn     = opts.velocidade || function () { return 'normal'; };

    // Sets ganhos até agora (contagem viva, sobe quando um set fecha)
    var setsGanhosA = 0, setsGanhosB = 0;
    function pintarContadorSets() {
      if (elSetsCont) {
        elSetsCont.innerHTML =
          '<span class="pv-sc-nome">' + roteiro.nomeA + '</span>' +
          '<span class="pv-sc-num">' + setsGanhosA + '</span>' +
          '<span class="pv-sc-sep">sets</span>' +
          '<span class="pv-sc-num">' + setsGanhosB + '</span>' +
          '<span class="pv-sc-nome">' + roteiro.nomeB + '</span>';
      }
    }

    var cancelado = false;
    var timer = null;

    function pintarResumoSets() {
      // linha-resumo por set já fechado, ex.: "Set 1: 25-20 · Set 2: 23-25"
      var txt = roteiro.roteiroSets.slice(0, setIdx + (setFechado ? 1 : 0))
        .map(function (s, i) { return 'Set ' + (i + 1) + ': ' + s.pa + '-' + s.pb; })
        .join('  \u00B7  ');
      if (elSets) elSets.textContent = txt;
    }

    // `silencioso: true` preenche o card com o resultado final MAS não chama onFim.
    // Isso existe por causa do "Pular tudo": o onFim da partida em curso é quem agenda
    // a próxima partida no modo automático — se ele disparasse durante o pulo, o
    // encadeamento continuava rodando por cima e as partidas "seguiam simulando".
    function fim(silencioso) {
      if (elStatus) elStatus.textContent = '';
      if (elPlacar) elPlacar.textContent = roteiro.setsA + ' – ' + roteiro.setsB + ' (sets)';
      // Resumo de estatísticas (top pontuadores)
      if (elResumo) {
        var stats = coletarEstatisticas(roteiro).slice(0, 5);
        elResumo.innerHTML = '<div class="pv-resumo-tit">Destaques</div>' +
          stats.map(function (s) {
            var det = s.pontos + ' pts' +
              (s.aces ? ' \u00B7 ' + s.aces + ' ace' + (s.aces > 1 ? 's' : '') : '');
            return '<div class="pv-stat"><span class="pv-stat-nome">' + s.nome +
                   '</span><span class="pv-stat-num">' + det + '</span></div>';
          }).join('');
      }
      // onResultado = COMMIT do placar na tabela/estatísticas. Dispara SEMPRE, inclusive
      // no modo silencioso, porque o resultado precisa ser contabilizado mesmo quando o
      // "Pular tudo" interrompe a partida. Fica separado do onFim (que é UI/encadeamento)
      // para a classificação só passar a contar a partida QUANDO ELA ACABA — antes, o
      // registro era feito antes de animar e a tabela já mostrava a vitória no Set 1.
      if (opts.onResultado) opts.onResultado(roteiro);
      if (opts.onFim && !silencioso) opts.onFim(roteiro);
    }

    // Estado da animação
    var setIdx = 0, ptIdx = 0, paAtual = 0, pbAtual = 0, setFechado = false;

    // Modo "pular tudo": sem ticks, vai direto ao resultado
    if (opts.pular) {
      setIdx = roteiro.roteiroSets.length; setFechado = false;
      // marca todos os sets como exibidos no resumo
      setIdx = roteiro.roteiroSets.length - 1; setFechado = true;
      setsGanhosA = roteiro.setsA; setsGanhosB = roteiro.setsB;
      pintarContadorSets();
      pintarResumoSets();
      fim();
      return { cancel: function () {} };
    }

    function tick() {
      if (cancelado) return;
      var set = roteiro.roteiroSets[setIdx];

      // fim do set atual?
      if (ptIdx >= set.eventos.length) {
        setFechado = true;
        // incrementa o contador de sets vivo conforme quem venceu este set
        if (set.pa > set.pb) setsGanhosA++; else setsGanhosB++;
        pintarContadorSets();
        pintarResumoSets();
        setIdx++; ptIdx = 0; paAtual = 0; pbAtual = 0; setFechado = false;

        if (setIdx >= roteiro.roteiroSets.length) { fim(); return; }

        // "Trocando de lado..." entre sets
        if (elStatus) elStatus.textContent = 'Trocando de lado…';
        if (elPlacar) elPlacar.textContent = '0 – 0';
        timer = setTimeout(tick, pausaTrocaLado(velFn()));
        return;
      }

      // aplica 1 ponto
      var ev = set.eventos[ptIdx];
      if (ev.lado === 'a') paAtual++; else pbAtual++;
      ptIdx++;

      if (elPlacar) elPlacar.textContent = paAtual + ' – ' + pbAtual;
      if (elStatus) {
        var setLabel = set.tie ? 'Tie-break' : ('Set ' + (setIdx + 1));
        var saque = (ev.lado === 'a') ? roteiro.nomeA : roteiro.nomeB;
        elStatus.textContent = setLabel + '  ·  saque: ' + saque +
          (ev.ace ? '  ·  ACE! (' + ev.autor + ')' : '');
      }

      timer = setTimeout(tick, cadenciaPonto(velFn()));
    }

    // arranque
    pintarContadorSets();
    if (elStatus) elStatus.textContent = 'Set 1';
    if (elPlacar) elPlacar.textContent = '0 – 0';
    timer = setTimeout(tick, cadenciaPonto(velFn()));

    return { cancel: function () { cancelado = true; if (timer) clearTimeout(timer); },
             // Finaliza IMEDIATAMENTE: para os ticks e preenche o resultado final no card
             // (usado quando o usuário clica "Pular tudo" no meio de uma partida animando —
             // sem isso o card ficava congelado no placar parcial / 0-0).
             // finalizar(true) = silencioso: pinta o resultado final mas NÃO chama onFim
             // (usado pelo "Pular tudo", para não reagendar a próxima partida).
             finalizar: function (silencioso) {
               cancelado = true; if (timer) clearTimeout(timer);
               setsGanhosA = roteiro.setsA; setsGanhosB = roteiro.setsB;
               pintarContadorSets();
               pintarResumoSets();
               fim(!!silencioso);
             } };
  }

  var API = {
    prepararPartida: prepararPartida,
    coletarEstatisticas: coletarEstatisticas,
    animar: animar,
    _cadenciaPonto: cadenciaPonto
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.AnimacaoVolei = API;

})(typeof window !== 'undefined' ? window : this);
