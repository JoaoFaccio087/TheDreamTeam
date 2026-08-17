// ============================================================
//  simulacao-basquete.js — NÚCLEO da simulação de um jogo de basquete
//
//  Puro e testável (Node). Espelha simulacao-volei.js: recebe dois times
//  ({ nome, jogadores:[{nome, posicoes:['PG'..], forca}] }) e devolve o
//  resultado de UM jogo — placar final, evolução por QUARTO, e stats por
//  jogador (pontos, rebotes, assistências).
//
//  Modelo (realista mas leve):
//   - Força de cada time por FACETA (ataque, defesa, ritmo) a partir dos
//     jogadores, ponderada por posição.
//   - Placar-base de basquete (~105) ajustado pela força relativa + ruído.
//   - Sem empate: se der igual, PRORROGAÇÃO (mais pontos aos dois, até
//     desempatar).
//   - Distribuição por jogador conforme posição: armador (PG) lidera
//     assistências; pivô (C) e ala-pivô (PF) lideram rebotes; alas e
//     armadores lideram pontos.
//
//  A animação (animacao-basquete.js) CONSOME este núcleo. O motor de
//  futebol/vôlei NÃO é tocado.
// ============================================================

(function (global) {
  'use strict';

  // Pesos por posição para cada faceta (quanto a posição contribui).
  var PESO_ATAQUE  = { PG: 0.9, SG: 1.0, SF: 0.95, PF: 0.85, C: 0.8 };
  var PESO_DEFESA  = { PG: 0.8, SG: 0.85, SF: 0.9, PF: 0.95, C: 1.0 };
  var PESO_RITMO   = { PG: 1.0, SG: 0.9, SF: 0.8, PF: 0.7, C: 0.6 };

  // Peso de PONTOS por posição (quem tende a marcar).
  var PESO_PONTO   = { PG: 0.85, SG: 1.0, SF: 0.95, PF: 0.8, C: 0.75 };
  // Peso de REBOTES por posição (pivôs e alas-pivôs dominam).
  var PESO_REBOTE  = { PG: 0.25, SG: 0.35, SF: 0.6, PF: 0.95, C: 1.0 };
  // Peso de ASSISTÊNCIAS por posição (armadores dominam).
  var PESO_ASSIST  = { PG: 1.0, SG: 0.7, SF: 0.5, PF: 0.35, C: 0.3 };

  function posDe(j) { return (j.posicoes && j.posicoes[0]) || 'SF'; }

  // Força média de uma faceta: média das forças ponderada pelo peso da posição.
  function forcaFaceta(jogadores, pesos) {
    var somaFP = 0, somaP = 0;
    jogadores.forEach(function (j) {
      var w = pesos[posDe(j)] != null ? pesos[posDe(j)] : 0.7;
      somaFP += j.forca * w;
      somaP += w;
    });
    return somaP > 0 ? somaFP / somaP : 78;
  }

  function facetasDoTime(jogadores) {
    // Usa os 5 mais fortes como "titulares" (peso maior), mas considera todos.
    var ordenados = jogadores.slice().sort(function (a, b) { return b.forca - a.forca; });
    var titulares = ordenados.slice(0, 5);
    return {
      ataque: forcaFaceta(titulares, PESO_ATAQUE),
      defesa: forcaFaceta(titulares, PESO_DEFESA),
      ritmo:  forcaFaceta(titulares, PESO_RITMO)
    };
  }

  // Pontos-base de um time = ataque dele vs defesa do outro, escalado p/ ~105.
  function pontosBase(facA, facB, rng) {
    var r = rng || Math.random;
    // diferença ataque-defesa em torno de 0; cada ponto de força ≈ 0.8 ponto no placar.
    var base = 105 + (facA.ataque - facB.defesa) * 0.8;
    // ritmo do jogo (média dos ritmos) desloca o total dos dois times.
    var ajusteRitmo = ((facA.ritmo + facB.ritmo) / 2 - 80) * 0.5;
    base += ajusteRitmo;
    // ruído de jogo
    base += (r() - 0.5) * 18;
    return Math.max(80, Math.round(base));
  }

  // Distribui um total de pontos/rebotes/assist pelos jogadores conforme pesos.
  function distribuir(jogadores, total, pesos, rng) {
    var r = rng || Math.random;
    var ws = jogadores.map(function (j) {
      var w = pesos[posDe(j)] != null ? pesos[posDe(j)] : 0.5;
      return w * (j.forca / 82) * (0.75 + r() * 0.5); // variação individual
    });
    var soma = ws.reduce(function (s, w) { return s + w; }, 0) || 1;
    var out = jogadores.map(function (j, i) { return Math.round(total * ws[i] / soma); });
    // acerta o arredondamento para bater o total exato
    var dif = total - out.reduce(function (s, v) { return s + v; }, 0);
    var idx = 0;
    while (dif !== 0 && jogadores.length) {
      out[idx % out.length] += dif > 0 ? 1 : -1;
      if (out[idx % out.length] < 0) out[idx % out.length] = 0;
      dif = total - out.reduce(function (s, v) { return s + v; }, 0);
      idx++;
      if (idx > 500) break;
    }
    return out;
  }

  // Divide um total de pontos de um time em 4 quartos (com leve variação).
  function dividirEmQuartos(total, rng) {
    var r = rng || Math.random;
    var pesos = [1, 1, 1, 1].map(function () { return 0.85 + r() * 0.3; });
    var soma = pesos.reduce(function (s, p) { return s + p; }, 0);
    var q = pesos.map(function (p) { return Math.round(total * p / soma); });
    var dif = total - q.reduce(function (s, v) { return s + v; }, 0);
    q[0] += dif;
    return q;
  }

  // Simula uma partida completa. Retorna placar, quartos, stats por jogador.
  function jogarPartida(timeA, timeB, rng) {
    var r = rng || Math.random;
    var facA = facetasDoTime(timeA.jogadores);
    var facB = facetasDoTime(timeB.jogadores);

    var pa = pontosBase(facA, facB, r);
    var pb = pontosBase(facB, facA, r);

    // Sem empate: prorrogação (adiciona pontos aos dois até desempatar).
    var prorrogacoes = 0;
    while (pa === pb) {
      pa += Math.round(8 + r() * 8);
      pb += Math.round(8 + r() * 8);
      prorrogacoes++;
      if (prorrogacoes > 5) { pa += 1; break; }
    }

    // Evolução por quarto (quartos "normais"; a prorrogação fica embutida no total).
    var quartosA = dividirEmQuartos(pa, r);
    var quartosB = dividirEmQuartos(pb, r);
    var quartos = [];
    for (var i = 0; i < 4; i++) quartos.push([quartosA[i], quartosB[i]]);

    // Stats por jogador (pontos batem com o placar; rebotes/assist são plausíveis).
    function statsTime(time, pontos) {
      var js = time.jogadores;
      var pts = distribuir(js, pontos, PESO_PONTO, r);
      var totalReb = Math.round(38 + r() * 12);        // ~38-50 rebotes/time
      var totalAst = Math.round(20 + r() * 10);        // ~20-30 assist/time
      var reb = distribuir(js, totalReb, PESO_REBOTE, r);
      var ast = distribuir(js, totalAst, PESO_ASSIST, r);
      return js.map(function (j, i) {
        return { nome: j.nome, pos: posDe(j), pontos: pts[i], rebotes: reb[i], assistencias: ast[i] };
      }).sort(function (x, y) { return y.pontos - x.pontos; });
    }

    return {
      pontosA: pa, pontosB: pb,
      vencedor: pa > pb ? 'a' : 'b',
      prorrogacao: prorrogacoes > 0,
      quartos: quartos,
      statsA: statsTime(timeA, pa),
      statsB: statsTime(timeB, pb),
      placar: pa + ' - ' + pb + (prorrogacoes > 0 ? ' (PRO)' : '')
    };
  }

  var API = {
    facetasDoTime: facetasDoTime,
    jogarPartida: jogarPartida
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.SimulacaoBasquete = API;

})(typeof window !== 'undefined' ? window : this);
