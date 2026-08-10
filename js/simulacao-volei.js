// ============================================================
//  simulacao-volei.js — motor de partida do VÔLEI (núcleo puro)
//
//  Espelha a filosofia do motor de futebol (força → probabilidade),
//  mas adaptado ao vôlei: sem empate, sem relógio. A partida é uma
//  sequência de RALIS; cada rali vale 1 ponto. Sets até 25 (tie-break
//  15), 2 de vantagem; melhor de 5 sets (vence quem faz 3).
//
//  ESTE ARQUIVO É NÚCLEO PURO: nenhuma dependência de DOM/navegador.
//  Toda a lógica é testável no Node. A animação (cards, velocidade,
//  "trocando de lado", saque visual) virá numa camada separada que
//  CONSOME o resultado/eventos daqui — o motor de futebol NÃO é tocado.
//
//  Modelo do rali: SIMPLES por decisão (João, ago/2026). Força de
//  ataque de um lado vs. força de defesa/bloqueio do outro → prob. do
//  ponto, com piso/teto p/ sempre haver zebra. Saque NÃO influencia o
//  cálculo nesta versão (só será visual na camada de animação).
// ============================================================

(function (global) {
  'use strict';

  // ---- Pesos por função no vôlei (quanto cada posição importa) ----
  // Ataque decide o ponto; bloqueio para o ataque adversário; levantador
  // qualifica; líbero sustenta o rali. Números redondos e fáceis de calibrar.
  var PESO_ATAQUE = {
    OPO: 1.00,   // oposto: principal pontuador
    PON: 0.90,   // ponteiro: ataque + recepção
    CEN: 0.55,   // central: ataque rápido, mas menos volume
    LEV: 0.35,   // levantador: ataca pouco (mas organiza)
    LIB: 0.05    // líbero: não ataca
  };
  var PESO_DEFESA = {
    CEN: 1.00,   // central: bloqueio é a principal defesa
    LIB: 0.85,   // líbero: defesa/passe
    PON: 0.55,   // ponteiro: também recebe e defende
    LEV: 0.45,   // levantador: cobre e toca no bloqueio
    OPO: 0.40    // oposto: bloqueia na rede, defende menos
  };

  // Média ponderada de força de um time para uma "faceta" (ataque/defesa).
  function forcaFaceta(jogadores, pesos) {
    var somaFP = 0, somaP = 0;
    for (var i = 0; i < jogadores.length; i++) {
      var j = jogadores[i];
      // pega o maior peso entre as posições do jogador para essa faceta
      var w = 0;
      for (var k = 0; k < j.posicoes.length; k++) {
        var p = j.posicoes[k];
        if (pesos[p] != null && pesos[p] > w) w = pesos[p];
      }
      somaFP += j.forca * w;
      somaP  += w;
    }
    return somaP > 0 ? somaFP / somaP : 80;
  }

  // Força ofensiva e defensiva de um time (a partir do elenco de 6).
  function facetasDoTime(jogadores) {
    return {
      ataque: forcaFaceta(jogadores, PESO_ATAQUE),
      defesa: forcaFaceta(jogadores, PESO_DEFESA)
    };
  }

  // ---- Probabilidade de A ganhar UM rali contra B ----
  // Compara ataque de A vs. defesa de B (e vice-versa), converte a
  // diferença em probabilidade via logística suave, com piso/teto.
  var PISO_RALI = 0.15;   // o time mais fraco nunca fica abaixo disto
  var TETO_RALI = 0.85;   // nem o mais forte passa disto (sempre há zebra)
  var SENSIB    = 0.018;  // sensibilidade à diferença de força (calibrado ago/2026:
                          // 0.045 fazia dif de ~4 pts virar 99% de vitória — vôlei amplifica
                          // vantagens ao longo de ~100 ralis. 0.018 dá favorito claro mas com
                          // zebra viva: dif ~4 → ~81%, dif ~2 → ~66%, dif ~0 → ~50%.)

  function probRaliAganhaB(fa, fb) {
    // vantagem de A = (ataque de A - defesa de B); idem para B
    var vantA = fa.ataque - fb.defesa;
    var vantB = fb.ataque - fa.defesa;
    var diff  = vantA - vantB;                 // saldo líquido para A
    var p = 1 / (1 + Math.exp(-SENSIB * diff)); // logística
    if (p < PISO_RALI) p = PISO_RALI;
    if (p > TETO_RALI) p = TETO_RALI;
    return p;
  }

  // ---- Joga UM set. Retorna { pa, pb, pontos:[...] } ----
  // alvo = 25 (sets normais) ou 15 (tie-break); sempre 2 de vantagem.
  // pontos[] guarda o lado de cada ponto ('a'/'b') p/ a animação futura.
  function jogarSet(fa, fb, alvo, rng) {
    var p = probRaliAganhaB(fa, fb);
    var pa = 0, pb = 0, pontos = [];
    while (true) {
      if (rng() < p) { pa++; pontos.push('a'); }
      else           { pb++; pontos.push('b'); }
      var fim = (pa >= alvo || pb >= alvo) && Math.abs(pa - pb) >= 2;
      if (fim) break;
      // trava de segurança contra loop infinito (não deve acontecer)
      if (pa > 40 || pb > 40) break;
    }
    return { pa: pa, pb: pb, pontos: pontos };
  }

  // ---- Joga uma PARTIDA (melhor de 5). Retorna resultado completo ----
  // Cada time: { nome, jogadores:[6] }. rng opcional (p/ testes determinísticos).
  function jogarPartida(timeA, timeB, rng) {
    rng = rng || Math.random;
    var fa = facetasDoTime(timeA.jogadores);
    var fb = facetasDoTime(timeB.jogadores);

    var setsA = 0, setsB = 0, sets = [];
    while (setsA < 3 && setsB < 3) {
      var ehTie = (setsA === 2 && setsB === 2);   // 5º set
      var alvo  = ehTie ? 15 : 25;
      var s = jogarSet(fa, fb, alvo, rng);
      if (s.pa > s.pb) setsA++; else setsB++;
      sets.push({ pa: s.pa, pb: s.pb });
    }

    return {
      nomeA: timeA.nome, nomeB: timeB.nome,
      setsA: setsA, setsB: setsB,
      sets: sets,                                  // [{pa,pb}, ...]
      vencedor: setsA > setsB ? 'a' : 'b',
      // placar textual tipo "3-1 (25-20, 23-25, 25-18, 25-22)"
      placar: setsA + '-' + setsB + ' (' +
        sets.map(function (x) { return x.pa + '-' + x.pb; }).join(', ') + ')'
    };
  }

  // Exporta o núcleo
  var API = {
    facetasDoTime: facetasDoTime,
    probRaliAganhaB: probRaliAganhaB,
    jogarSet: jogarSet,
    jogarPartida: jogarPartida,
    // expõe constantes p/ calibração/teste
    _pesos: { PESO_ATAQUE: PESO_ATAQUE, PESO_DEFESA: PESO_DEFESA },
    _params: { PISO_RALI: PISO_RALI, TETO_RALI: TETO_RALI, SENSIB: SENSIB }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.SimulacaoVolei = API;

})(typeof window !== 'undefined' ? window : this);
