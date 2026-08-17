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
    // escala cheia: 16 por conf. (32 total ~ NBA), você joga 8, top-8 → melhor de 3 (offline)
    nba_full:  { id: 'nba_full',  totalTimes: 30, jogosVoce: 8, classificamConf: 8, melhorDe: 3 }
  };

  // Escolhe o maior formato NBA cujo total de times cabe no disponível (+1 = você).
  function escolheFormatoNBA(disponivel) {
    var total = disponivel + 1;
    var ordem = ['nba_full', 'nba_med', 'nba_mini'];
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
  function montarCampanhaNBA(times, voce, forcaDe, formatoForcado) {
    var fmt = formatoForcado ? FORMATOS_NBA[formatoForcado] : escolheFormatoNBA(times.length);

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

    // Seus adversários da temporada regular (offline reduzido): sorteia jogosVoce times
    // distintos (de qualquer conferência, como na NBA real que cruza conferências).
    var outros = shuffle(participantes.filter(function (t) { return !t.voce; }));
    var seusJogos = outros.slice(0, Math.min(fmt.jogosVoce, outros.length));

    var fasesPlayoff = fasesPlayoffDe(fmt.classificamConf);

    return {
      basquete: true,
      formato: fmt,
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
    camp.playoff = {
      faseIdx: 0,
      fases: camp.fasesPlayoff,
      vivos: cls,
      confrontos: confrontos,
      seuConfrontoIdx: confrontos.findIndex(function (par) { return par[0].voce || par[1].voce; }),
      historico: [],
      // Campeão da OUTRA conferência (resolvido por força/sorte quando você chega às Finais).
      finalistaOutraConf: null,
      // Semeadura inicial (times 1..N da sua conferência) — para desenhar o bracket.
      seeds: cls.slice(),
      // Registro do bracket por rodada: cada item é a lista de confrontos daquela fase,
      // com o vencedor de cada um (preenchido conforme as fases são resolvidas). A
      // renderização do chaveamento (mostrarBracketPlayoffs) lê isto.
      bracketConf: [confrontos.map(function (par) {
        return { a: par[0], b: par[1], vencedor: null, seuJogo: (par[0].voce || par[1].voce) };
      })]
    };
    return camp.playoff;
  }

  // Seu adversário no confronto atual do playoff (ou null).
  function seuAdversarioPlayoff(camp) {
    if (!camp.playoff) return null;
    var fase = camp.playoff.fases[camp.playoff.faseIdx];
    if (fase && fase.finalNBA) {
      // Nas Finais da NBA, seu adversário é o campeão da outra conferência.
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
