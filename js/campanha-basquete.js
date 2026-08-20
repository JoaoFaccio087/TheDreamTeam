// ============================================================
//  campanha-basquete.js — estrutura da campanha da NBA
//
//  A NBA real: 30 times em 2 CONFERÊNCIAS (Leste/Oeste, 15 cada) →
//  TEMPORADA REGULAR (82 jogos) → PLAY-IN (7º-10º) → PLAYOFFS (8 por
//  conferência, séries MELHOR-DE-7: 1ª rodada → semis de conf. → finais
//  de conf. → FINAIS DA NBA (campeão Leste × campeão Oeste)).
//
//  No jogo espelhamos o "reduzido" do futebol/VNL: no OFFLINE você joga
//  só N jogos da temporada regular (adversários sorteados), os bastidores
//  preenchem a tabela da sua conferência, e os playoffs correm em mata-mata
//  (série melhor-de-N, N reduzido no offline). No ONLINE roda completo.
//
//  O jogador entra como TIME À PARTE (voce:true, clubeRef:null), cai numa
//  conferência, joga a temporada, e se classificar vai aos playoffs. SEM
//  empate (o motor de basquete sempre dá vencedor; prorrogação se preciso).
//
//  MÓDULO SEPARADO: não toca em nada do futebol/vôlei. Puro/testável (Node).
//
//  ── COMO ESCALAR ──
//  FORMATOS_NBA predefinidos abaixo. escolheFormatoNBA() pega o maior que
//  cabe no nº de times disponíveis — então HOJE (poucos times) roda o
//  reduzido, e quando a coleta crescer, os formatos maiores valem sozinhos.
// ============================================================

(function (global) {
  'use strict';

  function shuffle(arr) {
    if (typeof UI !== 'undefined' && UI.shuffle) return UI.shuffle(arr);
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ── Formatos da NBA (config parametrizável) ──────────────────────
  //   totalTimes  = times na campanha (incluindo você), divididos em 2 conferências
  //   jogosVoce   = quantos jogos VOCÊ disputa na temporada regular (offline reduzido)
  //   classificamConf = quantos de cada conferência vão aos playoffs
  //   melhorDe    = tamanho da série de playoff (1 = jogo único; 7 = série NBA real)
  //  Observação: no offline usamos séries curtas (melhorDe:1 ou 3) p/ não arrastar;
  //  online pode subir p/ 7.
  var FORMATOS_NBA = {
    // usável HOJE com poucos times: 6 no total (3 por conf.), você joga 4, top-2 → jogo único
    nba_mini:  { id: 'nba_mini',  totalTimes: 6,  jogosVoce: 4, classificamConf: 2, melhorDe: 1 },
    // meio-termo: 12 no total (6 por conf.), você joga 6, top-4 → melhor de 3
    nba_med:   { id: 'nba_med',   totalTimes: 12, jogosVoce: 6, classificamConf: 4, melhorDe: 3 },
    // 16 no total (8 por conf.), você joga 7, top-8 → playoffs de 8 por conferência (o
    // formato REAL da NBA: primeira rodada com 8 de cada lado). É o que a base tem hoje.
    nba_grande:{ id: 'nba_grande',totalTimes: 16, jogosVoce: 7, classificamConf: 8, melhorDe: 3 },
    // escala cheia: 30 no total (~NBA completa), você joga 8, top-8 por conferência
    nba_full:  { id: 'nba_full',  totalTimes: 30, jogosVoce: 8, classificamConf: 8, melhorDe: 3 }
  };

  // ── TAMANHOS DE TEMPORADA (escolhidos pelo usuário ao montar o time) ──
  // Todos usam 16 times (8 por conf.) e top-8 nos playoffs — o que muda é quantos jogos
  // VOCÊ joga na temporada regular (todos animados) e o tamanho das SÉRIES de playoff.
  // A final da NBA pode ter série maior que as demais fases (melhorDeFinal).
  var TAMANHOS_TEMPORADA = {
    reduzida: { id: 'reduzida', nome: 'Reduzida', jogosVoce: 20, melhorDe: 3, melhorDeFinal: 3,
                desc: '20 jogos · playoffs melhor de 3' },
    regular:  { id: 'regular',  nome: 'Regular',  jogosVoce: 40, melhorDe: 5, melhorDeFinal: 5,
                desc: '40 jogos · playoffs melhor de 5' },
    completa: { id: 'completa', nome: 'Completa', jogosVoce: 82, melhorDe: 7, melhorDeFinal: 7,
                desc: '82 jogos (temporada real) · playoffs melhor de 7' }
  };
  var TAMANHO_PADRAO = 'regular';

  // ═══════════════════════════════════════════════════════════════════
  //  TEMPORADA REGULAR — LIGA DE PONTOS CORRIDOS (como o Brasileirão)
  //  Espelha a NBA real: 2 conferências, muitos jogos, classificação por
  //  conferência. Os times vêm de VÁRIAS edições misturadas (você pode
  //  enfrentar o time de 2026, de 1992, de 1989...), igual ao futebol.
  // ═══════════════════════════════════════════════════════════════════

  // Nº de jogos da temporada regular por tamanho (offline, todos animados/simulados):
  //   completa = 82 (real), regular = 40, reduzida = 20.
  var JOGOS_TEMPORADA = { reduzida: 20, regular: 40, completa: 82 };

  // Gera o calendário de returno duplo (método do círculo): cada time joga contra
  // todos, ida e volta. n times → (n-1)*2 rodadas. Índice 0 = você.
  function gerarCalendarioNBA(n) {
    if (n % 2 !== 0) n = n + 1;   // com nº ímpar, adiciona um "bye" (folga)
    var ids = [];
    for (var i = 0; i < n; i++) ids.push(i);
    var turno = [];
    for (var r = 0; r < n - 1; r++) {
      var rodada = [];
      for (var k = 0; k < n / 2; k++) {
        var a = ids[k], b = ids[n - 1 - k];
        if (a !== n - 1 && b !== n - 1) {   // ignora o "bye" fictício (índice n-1 extra)
          rodada.push(r % 2 === 0 ? [a, b] : [b, a]);
        }
      }
      // rotação (mantém o índice 0 fixo)
      ids.splice(1, 0, ids.pop());
      turno.push(rodada);
    }
    var returno = turno.map(function (rodada) {
      return rodada.map(function (par) { return [par[1], par[0]]; });
    });
    return turno.concat(returno);
  }

  // Monta a temporada regular: você + N times sorteados de VÁRIAS EDIÇÕES misturadas,
  // divididos em 2 conferências. `todosOsTimes` = todos os registros da NBA (todas as
  // temporadas). `nAlvo` = quantos jogos você quer (define o tamanho da liga).
  function montarLigaNBA(todosOsTimes, voce, forcaDe, tamanhoId) {
    var tam = TAMANHOS_TEMPORADA[tamanhoId] || TAMANHOS_TEMPORADA[TAMANHO_PADRAO];
    var jogosAlvo = JOGOS_TEMPORADA[tam.id] || JOGOS_TEMPORADA.regular;

    // Quantos times no total para gerar ~jogosAlvo jogos (returno duplo → cada time
    // joga (n-1)*2 jogos). Então n = jogosAlvo/2 + 1. Mas limitamos ao nº real de
    // conferências: mantemos par e com pelo menos 8 por conferência quando possível.
    var nTimes = Math.round(jogosAlvo / 2) + 1;
    if (nTimes % 2 !== 0) nTimes++;               // par (returno duplo limpo)
    if (nTimes < 4) nTimes = 4;

    // Sorteia (nTimes-1) times de TODAS as edições misturadas, sem repetir a mesma
    // dupla (clube+temporada). Mistura como no Brasileirão.
    var pool = shuffle(todosOsTimes.slice()).slice(0, nTimes - 1);
    var eu = {
      nome: voce.nome, voce: true, forca: voce.forca, clubeRef: null, jogadores: voce.jogadores,
      confId: null, pts: 0, j: 0, v: 0, d: 0, pf: 0, pa: 0
    };
    var tabela = [eu].concat(pool.map(function (t) {
      return {
        nome: t.clube + ' ' + t.temporada,   // mostra o ANO (mistura de edições visível)
        voce: false, forca: forcaDe(t), clubeRef: t, confId: null,
        pts: 0, j: 0, v: 0, d: 0, pf: 0, pa: 0
      };
    }));

    // Divide em 2 conferências (metade/metade). Você cai na primeira.
    var metade = Math.ceil(tabela.length / 2);
    tabela.forEach(function (t, i) { t.confId = (i < metade) ? 'LESTE' : 'OESTE'; });
    var suaConf = tabela[0].confId;

    return {
      basquete: true,
      liga: true,                 // marca que é temporada de pontos corridos
      tamanho: tam,
      melhorDe: tam.melhorDe,
      melhorDeFinal: tam.melhorDeFinal,
      classificamConf: 8,         // top-8 por conferência vão aos playoffs
      tabela: tabela,
      calendario: gerarCalendarioNBA(tabela.length),
      rodadaAtual: 0,
      suaConf: suaConf,
      playoff: null
    };
  }

  // Registra o resultado de um jogo na tabela (sem empate: quem fez mais pontos vence).
  function registrarResultadoNBA(A, B, pontosA, pontosB) {
    A.j++; B.j++;
    A.pf += pontosA; A.pa += pontosB;
    B.pf += pontosB; B.pa += pontosA;
    if (pontosA > pontosB) { A.v++; B.d++; A.pts += 2; }   // vitória vale 2 (ranking simples)
    else                   { B.v++; A.d++; B.pts += 2; }
  }

  // Ordena a conferência: vitórias → saldo de pontos → pontos feitos.
  function ordenarNBA(a, b) {
    if (b.v !== a.v) return b.v - a.v;
    var sa = a.pf - a.pa, sb = b.pf - b.pa;
    if (sb !== sa) return sb - sa;
    return b.pf - a.pf;
  }

  // Classificação de uma conferência (lista ordenada dos times daquela conf).
  function classificacaoDaConf(camp, confId) {
    return camp.tabela.filter(function (t) { return t.confId === confId; }).sort(ordenarNBA);
  }

  // Índice do seu adversário na rodada (ou null se você folga nesta rodada).
  function seuConfrontoNaRodada(camp, rIdx) {
    var rodada = camp.calendario[rIdx];
    for (var i = 0; i < rodada.length; i++) {
      if (rodada[i][0] === 0) return { advIdx: rodada[i][1], mando: 'casa' };
      if (rodada[i][1] === 0) return { advIdx: rodada[i][0], mando: 'fora' };
    }
    return null;
  }

  // Resolve (placar instantâneo) os demais jogos da rodada — os que não são seus.
  function resolverDemaisJogosNBA(camp, rIdx, simularPlacar) {
    var rodada = camp.calendario[rIdx];
    rodada.forEach(function (par) {
      if (par[0] === 0 || par[1] === 0) return;   // seu jogo é tratado à parte
      var A = camp.tabela[par[0]], B = camp.tabela[par[1]];
      var p = simularPlacar(A, B);
      registrarResultadoNBA(A, B, p.a, p.b);
    });
  }

  // Sua posição (1..N) dentro da SUA conferência.
  function suaPosicaoConf(camp) {
    var cls = classificacaoDaConf(camp, camp.suaConf);
    for (var i = 0; i < cls.length; i++) if (cls[i].voce) return i + 1;
    return cls.length;
  }

  // Você se classificou aos playoffs? (top-N da sua conferência na temporada de liga)
  function voceClassificouLigaNBA(camp) {
    var top = classificacaoDaConf(camp, camp.suaConf).slice(0, camp.classificamConf);
    return top.some(function (t) { return t.voce; });
  }

  // Monta os playoffs a partir da CLASSIFICAÇÃO da liga: top-N de cada conferência,
  // semeados (1º x 8º, 2º x 7º, ...). Reaproveita fasesPlayoffDe e a estrutura de bracket
  // dos 2 lados (bracketConf = sua conf; bracketOutra = outra, resolvida em sincronia).
  function montarPlayoffsLigaNBA(camp) {
    var n = camp.classificamConf;
    var outraConfId = (camp.suaConf === 'LESTE') ? 'OESTE' : 'LESTE';
    var suaCls = classificacaoDaConf(camp, camp.suaConf).slice(0, n);
    var outraCls = classificacaoDaConf(camp, outraConfId).slice(0, n);

    // Confrontos semeados: 1x8, 2x7, 3x6, 4x5 (para n=8).
    function semear(cls) {
      var pares = [];
      for (var i = 0; i < Math.floor(cls.length / 2); i++) {
        pares.push([cls[i], cls[cls.length - 1 - i]]);
      }
      return pares;
    }
    var seusConfrontos = semear(suaCls);
    var outrosConfrontos = semear(outraCls);

    // índice do SEU confronto (onde você está semeado)
    var seuIdx = 0;
    seusConfrontos.forEach(function (par, i) {
      if (par[0].voce || par[1].voce) seuIdx = i;
    });

    var fases = fasesPlayoffDe(n);

    // bracket visual: rodada 0 com os confrontos, próximas rodadas vazias (preenchidas ao avançar)
    function bracketVazio(pares) {
      var rodadas = [];
      var atual = pares.map(function (p) { return { a: p[0], b: p[1], vencedor: null }; });
      rodadas.push(atual);
      var tam = pares.length;
      while (tam > 1) {
        tam = Math.floor(tam / 2);
        var r = [];
        for (var k = 0; k < tam; k++) r.push({ a: null, b: null, vencedor: null });
        rodadas.push(r);
      }
      return rodadas;
    }

    camp.playoff = {
      fases: fases,
      faseIdx: 0,
      suaConf: camp.suaConf,
      outraConf: outraConfId,
      confrontos: seusConfrontos,
      seuConfrontoIdx: seuIdx,
      bracketConf: bracketVazio(seusConfrontos),
      bracketOutra: bracketVazio(outrosConfrontos),
      historico: [],
      serie: { vMeu: 0, vAdv: 0 },   // placar da série atual (melhor de N)
      campeaoConf: null,
      campeaoOutra: null
    };
    return camp.playoff;
  }


  // Escolhe o maior formato NBA cujo total de times cabe no disponível (+1 = você).
  function escolheFormatoNBA(disponivel) {
    var total = disponivel + 1;
    var ordem = ['nba_full', 'nba_grande', 'nba_med', 'nba_mini'];
    for (var i = 0; i < ordem.length; i++) {
      if (FORMATOS_NBA[ordem[i]].totalTimes <= total) return FORMATOS_NBA[ordem[i]];
    }
    return FORMATOS_NBA.nba_mini;
  }

  // Fases do playoff a partir do nº de classificados POR CONFERÊNCIA. Como o campeão de
  // cada conferência se enfrenta nas Finais da NBA, as fases internas vão até a FINAL DE
  // CONFERÊNCIA e depois há as FINAIS DA NBA (tratadas à parte no fluxo).
  function fasesPlayoffDe(nPorConf) {
    var nomes = { 8: 'PRIMEIRA RODADA', 4: 'SEMIFINAL DE CONFERÊNCIA', 2: 'FINAL DE CONFERÊNCIA' };
    var fases = [];
    var n = nPorConf;
    while (n >= 2) {
      fases.push({ nome: nomes[n] || (n + ' AVOS'), confrontos: n / 2 });
      n = n / 2;
    }
    fases.push({ nome: 'FINAIS DA NBA', confrontos: 1, finalNBA: true });
    return fases;
  }

  // ============================================================
  //  Monta a campanha da NBA (conferências + temporada + playoffs).
  //  Params iguais aos do vôlei. Retorna { formato, conferencias, suaConf,
  //  tabela, seusJogos, ... }. camp.basquete = true marca a bifurcação.
  // ============================================================
  function montarCampanhaNBA(times, voce, forcaDe, formatoForcado, tamanhoId) {
    var fmt = formatoForcado ? FORMATOS_NBA[formatoForcado] : escolheFormatoNBA(times.length);

    // Tamanho da temporada escolhido pelo usuário (reduzida/regular/completa). Sobrescreve
    // jogosVoce e o tamanho das séries de playoff. Se não vier, usa o padrão.
    var tam = TAMANHOS_TEMPORADA[tamanhoId] || TAMANHOS_TEMPORADA[TAMANHO_PADRAO];
    // Só aplica o tamanho quando há times suficientes p/ o formato real (16). Com poucos
    // times (fallback mini/med), mantém o jogosVoce do formato p/ não quebrar.
    var usaTamanho = (fmt.classificamConf >= 8);
    var jogosVoce = usaTamanho ? tam.jogosVoce : fmt.jogosVoce;
    var melhorDe = usaTamanho ? tam.melhorDe : fmt.melhorDe;
    var melhorDeFinal = usaTamanho ? tam.melhorDeFinal : fmt.melhorDe;

    // Participantes: você + (totalTimes-1) times sorteados.
    var pool = shuffle(times).slice(0, fmt.totalTimes - 1);
    var eu = { nome: voce.nome, voce: true, forca: voce.forca, clubeRef: null, jogadores: voce.jogadores };
    var participantes = [eu].concat(pool.map(function (t) {
      return { nome: t.clube, voce: false, forca: forcaDe(t), clubeRef: t };
    }));

    // Divide em 2 conferências (Leste/Oeste). Você cai na primeira; o resto é sorteado.
    participantes = shuffle(participantes);
    var metade = Math.ceil(participantes.length / 2);
    var leste = [], oeste = [];
    participantes.forEach(function (t, i) { (i < metade ? leste : oeste).push(t); });
    // Garante que VOCÊ fique numa conferência conhecida (a que contém você).
    var suaConf = leste.some(function (t) { return t.voce; }) ? 'LESTE' : 'OESTE';

    function tabelaDe(lista) {
      return lista.map(function (t) { return { time: t, v: 0, d: 0, pf: 0, pa: 0 }; });
    }
    var conferencias = {
      LESTE: { nome: 'Leste', tabela: tabelaDe(leste) },
      OESTE: { nome: 'Oeste', tabela: tabelaDe(oeste) }
    };

    // Seus adversários da temporada regular. Sorteia jogosVoce adversários; se o tamanho
    // pede mais jogos que times disponíveis (ex.: 24 jogos, 15 adversários), REPETE
    // adversários (como na NBA real, que joga várias vezes contra o mesmo time).
    var outros = participantes.filter(function (t) { return !t.voce; });
    var seusJogos = [];
    var baralho = [];
    for (var g = 0; g < jogosVoce; g++) {
      if (baralho.length === 0) baralho = shuffle(outros.slice());
      seusJogos.push(baralho.pop());
    }

    var fasesPlayoff = fasesPlayoffDe(fmt.classificamConf);

    return {
      basquete: true,
      formato: fmt,
      tamanho: tam,
      melhorDe: melhorDe,
      melhorDeFinal: melhorDeFinal,
      conferencias: conferencias,
      suaConf: suaConf,
      seusJogos: seusJogos,
      jogosFeitos: 0,
      classificamConf: fmt.classificamConf,
      fasesPlayoff: fasesPlayoff,
      faseAtual: { etapa: 'temporada' }
    };
  }

  // Linha (na tabela da conferência certa) de um time participante.
  function linhaDoTime(camp, time) {
    var todas = camp.conferencias.LESTE.tabela.concat(camp.conferencias.OESTE.tabela);
    return todas.filter(function (l) { return l.time === time; })[0];
  }

  // Seu adversário na rodada atual da temporada regular (ou null se acabou).
  function adversarioTemporada(camp) {
    return camp.seusJogos[camp.jogosFeitos] || null;
  }

  // Registra o resultado do SEU jogo da temporada regular (pontos, sem empate).
  function registrarJogoTemporada(camp, adversarioTime, pontosVoce, pontosAdv) {
    var lEu = linhaDoTime(camp, camp.conferencias[camp.suaConf].tabela.filter(function (l) { return l.time.voce; })[0].time);
    var lAdv = linhaDoTime(camp, adversarioTime);
    if (!lEu || !lAdv) return;
    lEu.pf += pontosVoce;  lEu.pa += pontosAdv;
    lAdv.pf += pontosAdv;  lAdv.pa += pontosVoce;
    if (pontosVoce > pontosAdv) { lEu.v++; lAdv.d++; } else { lAdv.v++; lEu.d++; }
    camp.jogosFeitos++;
  }

  // Simula (bastidores) o restante da temporada regular das duas conferências. Cada time
  // (menos você) "joga" `rodadas` partidas contra oponentes aleatórios, preenchendo a
  // tabela para gerar uma classificação realista por força + sorte.
  function simularTemporada(camp, rodadas) {
    rodadas = rodadas || 8;
    var todos = camp.conferencias.LESTE.tabela.concat(camp.conferencias.OESTE.tabela).map(function (l) { return l.time; });
    todos.forEach(function (t) {
      if (t.voce) return;
      var la = linhaDoTime(camp, t);
      var faltam = rodadas - (la.v + la.d);
      for (var k = 0; k < faltam; k++) {
        var oponentes = todos.filter(function (o) { return o !== t && !o.voce; });
        var b = oponentes[Math.floor(Math.random() * oponentes.length)];
        if (!b) break;
        var lb = linhaDoTime(camp, b);
        var base = 100;
        var pa = base + (t.forca - 80) * 1.5 + (Math.random() - 0.5) * 24;
        var pb = base + (b.forca - 80) * 1.5 + (Math.random() - 0.5) * 24;
        pa = Math.round(pa); pb = Math.round(pb);
        if (pa === pb) pa += 2;   // sem empate no basquete
        la.pf += pa; la.pa += pb; lb.pf += pb; lb.pa += pa;
        if (pa > pb) { la.v++; lb.d++; } else { lb.v++; la.d++; }
      }
    });
  }

  // Classificação de uma conferência (ordena por vitórias, depois saldo de pontos).
  function classificacaoConf(camp, conf) {
    return camp.conferencias[conf].tabela.slice().sort(function (a, b) {
      if (b.v !== a.v) return b.v - a.v;
      return (b.pf - b.pa) - (a.pf - a.pa);
    });
  }

  // Você entrou nos playoffs? (top-classificamConf da sua conferência)
  function voceClassificouNBA(camp) {
    var top = classificacaoConf(camp, camp.suaConf).slice(0, camp.classificamConf);
    return top.some(function (l) { return l.time.voce; });
  }

  // Monta o bracket dos playoffs da SUA conferência (semeadura 1×N, 2×(N-1)...). O outro
  // lado (a outra conferência) é resolvido nos bastidores até sair um finalista, que você
  // enfrenta nas Finais da NBA se chegar lá.
  function montarPlayoffsNBA(camp) {
    var cls = classificacaoConf(camp, camp.suaConf).slice(0, camp.classificamConf).map(function (l) { return l.time; });
    var confrontos = [];
    var i = 0, j = cls.length - 1;
    while (i < j) { confrontos.push([cls[i], cls[j]]); i++; j--; }

    // Bracket da OUTRA conferência (mesma semeadura 1×N), simulado em sincronia com o seu.
    var outraConf = camp.suaConf === 'LESTE' ? 'OESTE' : 'LESTE';
    var clsOutra = classificacaoConf(camp, outraConf).slice(0, camp.classificamConf).map(function (l) { return l.time; });
    var confrontosOutra = [];
    var oi = 0, oj = clsOutra.length - 1;
    while (oi < oj) { confrontosOutra.push([clsOutra[oi], clsOutra[oj]]); oi++; oj--; }

    camp.playoff = {
      faseIdx: 0,
      fases: camp.fasesPlayoff,
      vivos: cls,
      confrontos: confrontos,
      seuConfrontoIdx: confrontos.findIndex(function (par) { return par[0].voce || par[1].voce; }),
      historico: [],
      // Campeão da OUTRA conferência (definido quando o bracket dela chega ao fim).
      finalistaOutraConf: null,
      // Semeadura inicial (times 1..N da sua conferência) — para desenhar o bracket.
      seeds: cls.slice(),
      // Registro do bracket por rodada: cada item é a lista de confrontos daquela fase,
      // com o vencedor de cada um (preenchido conforme as fases são resolvidas). A
      // renderização do chaveamento (mostrarBracketPlayoffs) lê isto.
      bracketConf: [confrontos.map(function (par) {
        return { a: par[0], b: par[1], vencedor: null, seuJogo: (par[0].voce || par[1].voce) };
      })],
      // Bracket da outra conferência (todos por força/sorte), avança junto com o seu.
      outraConf: outraConf,
      confrontosOutra: confrontosOutra,
      bracketOutra: [confrontosOutra.map(function (par) {
        return { a: par[0], b: par[1], vencedor: null, seuJogo: false };
      })]
    };
    return camp.playoff;
  }

  // Avança UMA rodada do bracket da outra conferência (resolve por força/sorte) e
  // registra os vencedores. Chamado em sincronia toda vez que você avança no seu lado.
  function avancarOutraConf(camp, forcaDe) {
    var po = camp.playoff;
    if (!po.confrontosOutra || !po.confrontosOutra.length) return;
    var rodadaIdx = po.bracketOutra.length - 1;
    var vencedores = po.confrontosOutra.map(function (par) {
      var a = par[0], b = par[1];
      var fa = (forcaDe ? forcaDe(a.clubeRef || a) : a.forca) + (Math.random() - 0.5) * 14;
      var fb = (forcaDe ? forcaDe(b.clubeRef || b) : b.forca) + (Math.random() - 0.5) * 14;
      return fa >= fb ? a : b;
    });
    // grava vencedores na rodada corrente do bracket da outra conf
    if (po.bracketOutra[rodadaIdx]) {
      po.bracketOutra[rodadaIdx].forEach(function (jogo, idx) { jogo.vencedor = vencedores[idx] || null; });
    }
    // monta a próxima rodada (se ainda houver mais de um vivo)
    if (vencedores.length > 1) {
      var novos = [];
      var i = 0, j = vencedores.length - 1;
      while (i < j) { novos.push([vencedores[i], vencedores[j]]); i++; j--; }
      po.confrontosOutra = novos;
      po.bracketOutra.push(novos.map(function (par) {
        return { a: par[0], b: par[1], vencedor: null, seuJogo: false };
      }));
    } else {
      po.confrontosOutra = [];
      po.finalistaOutraConf = vencedores[0] || null;   // campeão da outra conferência
    }
  }


  // Seu adversário no confronto atual do playoff (ou null).
  function seuAdversarioPlayoff(camp) {
    if (!camp.playoff) return null;
    var fase = camp.playoff.fases[camp.playoff.faseIdx];
    if (fase && fase.finalNBA) {
      // Nas Finais da NBA, seu adversário é o campeão da outra conferência — já resolvido
      // pelo bracket sincronizado (avancarOutraConf). Fallback: resolve na hora.
      if (!camp.playoff.finalistaOutraConf) camp.playoff.finalistaOutraConf = campeaoOutraConf(camp);
      return camp.playoff.finalistaOutraConf;
    }
    var par = camp.playoff.confrontos[camp.playoff.seuConfrontoIdx];
    if (!par) return null;
    return par[0].voce ? par[1] : par[0];
  }

  // Resolve (por força + sorte) o campeão da outra conferência, para as Finais da NBA.
  function campeaoOutraConf(camp) {
    var outra = camp.suaConf === 'LESTE' ? 'OESTE' : 'LESTE';
    var cls = classificacaoConf(camp, outra).slice(0, camp.classificamConf).map(function (l) { return l.time; });
    // Torneio simples entre os classificados: o mais forte tende a vencer.
    while (cls.length > 1) {
      var prox = [];
      for (var i = 0; i < cls.length; i += 2) {
        var a = cls[i], b = cls[i + 1];
        if (!b) { prox.push(a); continue; }
        var pa = a.forca + (Math.random() - 0.5) * 14;
        var pb = b.forca + (Math.random() - 0.5) * 14;
        prox.push(pa >= pb ? a : b);
      }
      cls = prox;
    }
    return cls[0] || null;
  }

  // Registra o resultado do SEU confronto de playoff (série melhor-de-N resumida a um
  // placar decisivo). Avança no bracket, resolve os outros confrontos da sua conf. por
  // força/sorte, e monta a próxima fase. Retorna { venceu, campeaoNBA, campeaoConf,
  // eliminado, proximaFase }.
  function registrarJogoPlayoff(camp, pontosVoce, pontosAdv, forcaDe) {
    var po = camp.playoff;
    var fase = po.fases[po.faseIdx];
    var venceu = pontosVoce > pontosAdv;
    po.historico.push({ fase: fase.nome, pf: pontosVoce, pa: pontosAdv, venceu: venceu });

    // Finais da NBA: fim de linha (campeão ou vice).
    if (fase.finalNBA) {
      return { venceu: venceu, campeaoNBA: venceu, campeaoConf: false, eliminado: !venceu, proximaFase: null };
    }

    if (!venceu) {
      return { venceu: false, campeaoNBA: false, campeaoConf: false, eliminado: true, proximaFase: null };
    }

    // Você venceu: resolve os OUTROS confrontos da sua conferência (bastidores) e monta
    // a próxima fase com os vencedores.
    var vencedores = [];
    po.confrontos.forEach(function (par, idx) {
      if (idx === po.seuConfrontoIdx) {
        vencedores.push(par[0].voce ? par[0] : par[1]);   // você
        return;
      }
      var a = par[0], b = par[1];
      var pa = forcaDe(a.clubeRef || a) + (Math.random() - 0.5) * 14;
      var pb = forcaDe(b.clubeRef || b) + (Math.random() - 0.5) * 14;
      vencedores.push(pa >= pb ? a : b);
    });

    // Grava os vencedores desta rodada no bracket (para o chaveamento visual).
    if (po.bracketConf && po.bracketConf[po.faseIdx]) {
      po.bracketConf[po.faseIdx].forEach(function (jogo, idx) {
        jogo.vencedor = vencedores[idx] || null;
      });
    }

    po.faseIdx++;
    var proxFase = po.fases[po.faseIdx];

    // Avança a OUTRA conferência uma rodada, em sincronia com o seu avanço (sem spoiler:
    // ela caminha no mesmo ritmo). Quando o bracket dela termina, define o finalista.
    avancarOutraConf(camp, forcaDe);

    // Se a próxima fase são as Finais da NBA, você é campeão da CONFERÊNCIA.
    if (proxFase && proxFase.finalNBA) {
      po.confrontos = [];   // as Finais usam finalistaOutraConf, não confrontos
      po.seuConfrontoIdx = -1;
      return { venceu: true, campeaoNBA: false, campeaoConf: true, eliminado: false, proximaFase: proxFase.nome };
    }

    // Caso contrário, remonta o bracket da conferência com os vencedores.
    var novos = [];
    var i = 0, j = vencedores.length - 1;
    while (i < j) { novos.push([vencedores[i], vencedores[j]]); i++; j--; }
    po.confrontos = novos;
    po.vivos = vencedores;
    po.seuConfrontoIdx = novos.findIndex(function (par) { return par[0].voce || par[1].voce; });

    // Registra a nova rodada no bracket (vencedores a definir).
    if (po.bracketConf) {
      po.bracketConf.push(novos.map(function (par) {
        return { a: par[0], b: par[1], vencedor: null, seuJogo: (par[0].voce || par[1].voce) };
      }));
    }

    return { venceu: true, campeaoNBA: false, campeaoConf: false, eliminado: false, proximaFase: proxFase ? proxFase.nome : null };
  }

  var API = {
    FORMATOS_NBA: FORMATOS_NBA,
    TAMANHOS_TEMPORADA: TAMANHOS_TEMPORADA,
    TAMANHO_PADRAO: TAMANHO_PADRAO,
    JOGOS_TEMPORADA: JOGOS_TEMPORADA,
    // — temporada regular (liga de pontos corridos, mistura de edições) —
    montarLigaNBA: montarLigaNBA,
    gerarCalendarioNBA: gerarCalendarioNBA,
    registrarResultadoNBA: registrarResultadoNBA,
    ordenarNBA: ordenarNBA,
    classificacaoDaConf: classificacaoDaConf,
    seuConfrontoNaRodada: seuConfrontoNaRodada,
    resolverDemaisJogosNBA: resolverDemaisJogosNBA,
    suaPosicaoConf: suaPosicaoConf,
    voceClassificouLigaNBA: voceClassificouLigaNBA,
    montarPlayoffsLigaNBA: montarPlayoffsLigaNBA,
    escolheFormatoNBA: escolheFormatoNBA,
    fasesPlayoffDe: fasesPlayoffDe,
    montarCampanhaNBA: montarCampanhaNBA,
    adversarioTemporada: adversarioTemporada,
    registrarJogoTemporada: registrarJogoTemporada,
    simularTemporada: simularTemporada,
    classificacaoConf: classificacaoConf,
    voceClassificouNBA: voceClassificouNBA,
    montarPlayoffsNBA: montarPlayoffsNBA,
    seuAdversarioPlayoff: seuAdversarioPlayoff,
    registrarJogoPlayoff: registrarJogoPlayoff
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.CampanhaBasquete = API;

})(typeof window !== 'undefined' ? window : this);
