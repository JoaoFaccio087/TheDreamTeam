// ============================================================
//  campanha-volei.js — estrutura da campanha do Mundial de Vôlei
//  (FATIA 2, versão PARAMETRIZÁVEL)
//
//  O Mundial real: fase de GRUPOS (round-robin) → MATA-MATA (oitavas →
//  quartas → semis → final). O tamanho varia por época: 16 (anos 90),
//  24 (2002-2022), 32 (2025+). Este módulo monta essa estrutura para
//  QUALQUER escala, controlada por uma CONFIG — assim o single-player
//  (16 seleções) e o multiplayer futuro (32) usam o MESMO código, só
//  trocando a config. Nada é reescrito quando a escala mudar.
//
//  O jogador entra como TIME À PARTE (voce:true, clubeRef:null), igual
//  ao futebol. Ele cai num grupo, joga o round-robin, e se avançar vai
//  ao mata-mata. SEM empate (o motor de vôlei sempre dá vencedor).
//
//  MÓDULO SEPARADO: não toca no campanha.js do futebol. Puro/testável.
//
//  ── COMO ESCALAR ──
//  FORMATOS predefinidos abaixo (reduzido/mini/m16/m24/m32). A função
//  escolheFormato() pega o maior formato que cabe no nº de seleções
//  disponíveis — então HOJE (4-5 seleções) roda 'reduzido'/'mini', e
//  quando a coleta grande chegar, 'm16'/'m32' passam a valer sozinhos.
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

  // ── Formatos de Mundial (config parametrizável) ──────────────────
  // nGrupos      = quantidade de grupos na fase de grupos
  // porGrupo     = seleções por grupo (round-robin)
  // avancamPorGrupo = quantas de cada grupo passam ao mata-mata
  // Total de seleções necessárias = nGrupos * porGrupo (incluindo você).
  // mataFases é DERIVADO do nº de classificados (não hard-coded).
  var FORMATOS = {
    // usável HOJE, com 4-5 seleções: 1 grupo, todos jogam, top-4 ao mata
    reduzido: { id: 'reduzido', nGrupos: 1, porGrupo: 4, avancamPorGrupo: 4 },
    mini:     { id: 'mini',     nGrupos: 1, porGrupo: 5, avancamPorGrupo: 4 },
    // escalas reais do Mundial (para quando a coleta grande chegar)
    m16:      { id: 'm16',      nGrupos: 4, porGrupo: 4, avancamPorGrupo: 2 }, // 8 no mata
    m24:      { id: 'm24',      nGrupos: 6, porGrupo: 4, avancamPorGrupo: 2 }, // 12 → ajustes
    m32:      { id: 'm32',      nGrupos: 8, porGrupo: 4, avancamPorGrupo: 2 }  // 16 no mata
  };

  // ── Formatos VNL / Liga das Nações (config parametrizável) ───────
  // A VNL real: FASE PRELIMINAR (liga única de pontos corridos — cada seleção joga
  // várias rodadas, mas NÃO contra todas) → FINAL EIGHT (mata-mata dos 8 melhores).
  // No jogo, espelhamos o "reduzido" do futebol: no OFFLINE você joga só `jogosVoce`
  // rodadas (adversários sorteados da tabela), os bastidores resolvem o resto e
  // classificam os 8 melhores; no ONLINE roda a preliminar inteira. `preliminar:'liga'`
  // marca a bifurcação — é UMA tabela só (não grupos), com mais times que classificados.
  //   totalSel   = seleções na tabela preliminar (incluindo você)
  //   jogosVoce  = quantas rodadas VOCÊ disputa no offline (reduzido)
  //   classificam = quantos vão à Final Eight (sempre 8 na VNL real)
  var FORMATOS_VNL = {
    // usável HOJE com poucos dados: 6 na tabela, você joga 3, top-4 à "Final Four"
    vnl_mini:  { id: 'vnl_mini',  preliminar: 'liga', totalSel: 6,  jogosVoce: 3, classificam: 4 },
    // 9 na tabela (8 seleções + você), você joga 4, top-8 à Final Eight (elimina 1)
    vnl_small: { id: 'vnl_small', preliminar: 'liga', totalSel: 9,  jogosVoce: 4, classificam: 8 },
    // meio-termo: 12 na tabela, você joga 5, top-8 à Final Eight
    vnl_med:   { id: 'vnl_med',   preliminar: 'liga', totalSel: 12, jogosVoce: 5, classificam: 8 },
    // escala real: 18 na tabela, você joga 5, top-8 à Final Eight
    vnl_full:  { id: 'vnl_full',  preliminar: 'liga', totalSel: 18, jogosVoce: 5, classificam: 8 }
  };

  // Escolhe o maior formato VNL cujo total de seleções cabe no disponível.
  function escolheFormatoVNL(disponivel) {
    var total = disponivel + 1; // você ocupa uma vaga
    var ordem = ['vnl_full', 'vnl_med', 'vnl_small', 'vnl_mini'];
    for (var i = 0; i < ordem.length; i++) {
      var f = FORMATOS_VNL[ordem[i]];
      if (f.totalSel <= total) return f;
    }
    return FORMATOS_VNL.vnl_mini;
  }

  // Escolhe o maior formato cujo total de seleções cabe no disponível.
  // disponivel = nº de seleções na edição (SEM contar você; você entra numa vaga).
  function escolheFormato(disponivel) {
    // +1 porque você ocupa uma vaga do total
    var total = disponivel + 1;
    var ordem = ['m32', 'm24', 'm16', 'mini', 'reduzido'];
    for (var i = 0; i < ordem.length; i++) {
      var f = FORMATOS[ordem[i]];
      if (f.nGrupos * f.porGrupo <= total) return f;
    }
    return FORMATOS.reduzido;
  }

  // Deriva as fases do mata-mata a partir do nº de classificados.
  // Ex.: 8 classificados → QUARTAS → SEMIFINAL → FINAL.
  function fasesMataDe(nClassificados) {
    var nomes = { 16: 'OITAVAS DE FINAL', 8: 'QUARTAS DE FINAL', 4: 'SEMIFINAL', 2: 'FINAL' };
    var fases = [];
    var n = nClassificados;
    while (n >= 2) {
      fases.push({ nome: nomes[n] || (n + ' AVOS'), tipo: 'mata-volei', confrontos: n / 2 });
      n = n / 2;
    }
    return fases;
  }

  // ============================================================
  //  Monta a campanha completa (grupos + mata) para uma edição.
  //  Params:
  //   selecoes = seleções da edição [{clube, edicao, jogadores}, ...]
  //   voce     = { nome, forca, jogadores }
  //   forcaDe  = função(selecao) -> número
  //   formatoForcado = (opcional) id de FORMATOS p/ testes
  //  Retorna { formato, grupos, seuGrupo, fasesMata, ... }.
  // ============================================================
  function montarCampanhaVolei(selecoes, voce, forcaDe, formatoForcado) {
    var fmt = formatoForcado ? FORMATOS[formatoForcado] : escolheFormato(selecoes.length);

    // Monta os participantes: você + seleções (sorteadas). Se faltarem seleções
    // para preencher o formato, usamos só as que há (o formato já foi escolhido
    // para caber, então normalmente preenche certo).
    var poolSel = shuffle(selecoes).slice(0, fmt.nGrupos * fmt.porGrupo - 1);
    var eu = { nome: voce.nome, voce: true, forca: voce.forca, clubeRef: null, jogadores: voce.jogadores };
    var participantes = [eu].concat(poolSel.map(function (s) {
      return { nome: s.clube + ' ' + s.edicao, voce: false, forca: forcaDe(s), clubeRef: s };
    }));
    participantes = shuffle(participantes);

    // Distribui em grupos (serpentina simples: round-robin de alocação)
    var grupos = [];
    for (var g = 0; g < fmt.nGrupos; g++) grupos.push({ nome: 'GRUPO ' + String.fromCharCode(65 + g), times: [], tabela: [] });
    participantes.forEach(function (p, i) { grupos[i % fmt.nGrupos].times.push(p); });

    // Descobre em qual grupo você caiu
    var seuGrupo = 0;
    grupos.forEach(function (gr, gi) { if (gr.times.some(function (t) { return t.voce; })) seuGrupo = gi; });

    // Inicializa a tabela de cada grupo (V/D, sets pró/contra — sem empate)
    grupos.forEach(function (gr) {
      gr.tabela = gr.times.map(function (t) {
        return { time: t, v: 0, d: 0, sp: 0, sc: 0, pts: 0 };
      });
    });

    var nClassificados = fmt.nGrupos * fmt.avancamPorGrupo;
    var fasesMata = fasesMataDe(nClassificados);

    return {
      formato: fmt,
      grupos: grupos,
      seuGrupo: seuGrupo,
      avancamPorGrupo: fmt.avancamPorGrupo,
      nClassificados: nClassificados,
      fasesMata: fasesMata,
      faseAtual: { etapa: 'grupos', rodada: 0 }
    };
  }

  // ============================================================
  //  VNL — monta a campanha (fase preliminar em LIGA + Final Eight).
  //  Params iguais aos de montarCampanhaVolei. Retorna um `camp` com
  //  camp.vnl = true e camp.tabelaVNL (a liga preliminar). A Final Eight
  //  reusa montarMataVolei/registrarJogoMata (é um mata-mata comum).
  // ============================================================
  function montarCampanhaVNL(selecoes, voce, forcaDe, formatoForcado) {
    var fmt = formatoForcado ? FORMATOS_VNL[formatoForcado] : escolheFormatoVNL(selecoes.length);

    // Participantes: você + (totalSel-1) seleções sorteadas.
    var poolSel = shuffle(selecoes).slice(0, fmt.totalSel - 1);
    var eu = { nome: voce.nome, voce: true, forca: voce.forca, clubeRef: null, jogadores: voce.jogadores };
    var participantes = [eu].concat(poolSel.map(function (s) {
      return { nome: s.clube + ' ' + s.edicao, voce: false, forca: forcaDe(s), clubeRef: s };
    }));

    // Tabela única (liga). Cada linha acumula V/D e sets pró/contra.
    var tabela = participantes.map(function (t) {
      return { time: t, v: 0, d: 0, sp: 0, sc: 0, pts: 0 };
    });

    // Adversários SEUS na preliminar (offline reduzido): sorteia `jogosVoce`
    // seleções distintas da tabela (que não são você).
    var outros = shuffle(participantes.filter(function (t) { return !t.voce; }));
    var seusJogos = outros.slice(0, Math.min(fmt.jogosVoce, outros.length));

    // Fases da Final Eight derivadas do nº de classificados (8 → QUARTAS→SEMI→FINAL).
    var fasesMata = fasesMataDe(fmt.classificam);

    return {
      vnl: true,
      formato: fmt,
      tabelaVNL: tabela,
      participantes: participantes,
      seusJogos: seusJogos,       // adversários que VOCÊ enfrenta na preliminar
      jogosFeitos: 0,
      classificam: fmt.classificam,
      fasesMata: fasesMata,
      faseAtual: { etapa: 'preliminar', rodada: 0 }
    };
  }

  // Seu adversário na rodada atual da preliminar (ou null se acabou sua preliminar).
  function adversarioVNLRodada(camp) {
    return camp.seusJogos[camp.jogosFeitos] || null;
  }

  // Registra o resultado do SEU jogo da preliminar na tabela única (sets, sem empate).
  function registrarJogoVNL(camp, adversarioTime, setsVoce, setsAdv) {
    function linhaDe(pred) { return camp.tabelaVNL.filter(pred)[0]; }
    var lEu  = linhaDe(function (l) { return l.time.voce; });
    var lAdv = linhaDe(function (l) { return l.time === adversarioTime; });
    if (!lEu || !lAdv) return;
    lEu.sp += setsVoce;  lEu.sc += setsAdv;
    lAdv.sp += setsAdv;  lAdv.sc += setsVoce;
    if (setsVoce > setsAdv) { lEu.v++; lEu.pts += 3; lAdv.d++; }
    else                    { lAdv.v++; lAdv.pts += 3; lEu.d++; }
    camp.jogosFeitos++;
  }

  // Simula a preliminar dos OUTROS (bastidores). Como é liga reduzida, damos a cada
  // seleção (menos você) um nº comparável de jogos por força+sorte, preenchendo a
  // tabela para gerar uma classificação realista. Não é round-robin completo — cada
  // seleção "joga" `rodadas` partidas contra oponentes aleatórios da tabela.
  function simularPreliminarVNL(camp, rodadas) {
    rodadas = rodadas || 5;
    var times = camp.tabelaVNL.map(function (l) { return l.time; });
    function linha(t) { return camp.tabelaVNL.filter(function (l) { return l.time === t; })[0]; }
    times.forEach(function (t) {
      if (t.voce) return; // seus jogos são registrados de verdade
      var la = linha(t);
      var faltam = rodadas - (la.v + la.d);
      for (var k = 0; k < faltam; k++) {
        // sorteia um oponente distinto (que não seja você, para não falsear seus jogos)
        var oponentes = times.filter(function (o) { return o !== t && !o.voce; });
        var b = oponentes[Math.floor(Math.random() * oponentes.length)];
        if (!b) break;
        var lb = linha(b);
        var pa = t.forca + (Math.random() - 0.5) * 12;
        var pb = b.forca + (Math.random() - 0.5) * 12;
        var setsA = pa >= pb ? 3 : (Math.random() < 0.5 ? 0 : 1);
        var setsB = pa >= pb ? (Math.random() < 0.5 ? 0 : 1) : 3;
        la.sp += setsA; la.sc += setsB; lb.sp += setsB; lb.sc += setsA;
        if (setsA > setsB) { la.v++; la.pts += 3; lb.d++; } else { lb.v++; lb.pts += 3; la.d++; }
      }
    });
  }

  // Classificação da preliminar VNL (ordena por pts, depois saldo de sets).
  function classificacaoVNL(camp) {
    return camp.tabelaVNL.slice().sort(function (a, b) {
      if (b.pts !== a.pts) return b.pts - a.pts;
      return (b.sp - b.sc) - (a.sp - a.sc);
    });
  }

  // Você entrou na Final Eight? (está entre os top-`classificam`)
  function voceClassificouVNL(camp) {
    var top = classificacaoVNL(camp).slice(0, camp.classificam);
    return top.some(function (l) { return l.time.voce; });
  }

  // Monta a Final Eight a partir dos classificados da preliminar. Reusa o formato de
  // camp.mata (mesmo que o Mundial), então registrarJogoMata funciona sem alteração.
  function montarFinalEightVNL(camp) {
    var cls = classificacaoVNL(camp).slice(0, camp.classificam).map(function (l) { return l.time; });
    var confrontos = [];
    var i = 0, j = cls.length - 1;
    while (i < j) { confrontos.push([cls[i], cls[j]]); i++; j--; }
    camp.mata = {
      faseIdx: 0,
      fases: camp.fasesMata,
      vivos: cls,
      confrontos: confrontos,
      seuConfrontoIdx: confrontos.findIndex(function (par) { return par[0].voce || par[1].voce; }),
      historico: []
    };
    return camp.mata;
  }

  // ── Fase de grupos: quem você enfrenta na rodada, e registro ──────
  // Adversários do seu grupo, em ordem (round-robin: você joga contra todos).
  function adversariosDoSeuGrupo(camp) {
    var gr = camp.grupos[camp.seuGrupo];
    return gr.times.filter(function (t) { return !t.voce; });
  }

  // Registra o resultado de um jogo de grupo na tabela (sets, sem empate).
  // vencedor: 'voce' ou o objeto time adversário; setsVoce/setsAdv = placar de sets.
  function registrarJogoGrupo(camp, adversarioTime, setsVoce, setsAdv) {
    var gr = camp.grupos[camp.seuGrupo];
    function linhaDe(pred) { return gr.tabela.filter(pred)[0]; }
    var lEu  = linhaDe(function (l) { return l.time.voce; });
    var lAdv = linhaDe(function (l) { return l.time === adversarioTime; });
    if (!lEu || !lAdv) return;
    lEu.sp += setsVoce;  lEu.sc += setsAdv;
    lAdv.sp += setsAdv;  lAdv.sc += setsVoce;
    if (setsVoce > setsAdv) { lEu.v++; lEu.pts += 3; lAdv.d++; }
    else                    { lAdv.v++; lAdv.pts += 3; lEu.d++; }
  }

  // Simula os jogos ENTRE ADVERSÁRIOS do seu grupo (bastidores) por força+sorte.
  // Preenche a tabela para dar uma classificação realista sem você ver cada jogo.
  function simularJogosAdversariosGrupo(camp) {
    var gr = camp.grupos[camp.seuGrupo];
    var times = gr.times.filter(function (t) { return !t.voce; });
    for (var i = 0; i < times.length; i++) {
      for (var j = i + 1; j < times.length; j++) {
        var a = times[i], b = times[j];
        var pa = a.forca + (Math.random() - 0.5) * 12;
        var pb = b.forca + (Math.random() - 0.5) * 12;
        var setsA = pa >= pb ? 3 : (Math.random() < 0.5 ? 0 : 1);
        var setsB = pa >= pb ? (Math.random() < 0.5 ? 0 : 1) : 3;
        var la = gr.tabela.filter(function (l) { return l.time === a; })[0];
        var lb = gr.tabela.filter(function (l) { return l.time === b; })[0];
        la.sp += setsA; la.sc += setsB; lb.sp += setsB; lb.sc += setsA;
        if (setsA > setsB) { la.v++; la.pts += 3; lb.d++; } else { lb.v++; lb.pts += 3; la.d++; }
      }
    }
  }

  // Classificação final do grupo (ordena por pts, depois saldo de sets).
  function classificacaoGrupo(camp, idxGrupo) {
    var gr = camp.grupos[idxGrupo == null ? camp.seuGrupo : idxGrupo];
    return gr.tabela.slice().sort(function (a, b) {
      if (b.pts !== a.pts) return b.pts - a.pts;
      return (b.sp - b.sc) - (a.sp - a.sc);
    });
  }

  // Você se classificou? (está entre os top-N do seu grupo)
  function voceClassificou(camp) {
    var cls = classificacaoGrupo(camp);
    var top = cls.slice(0, camp.avancamPorGrupo);
    return top.some(function (l) { return l.time.voce; });
  }

  // ── MATA-MATA ────────────────────────────────────────────────────
  // Monta o chaveamento do mata a partir dos classificados do grupo. Com 1 grupo,
  // os top-N avançam. Semeadura simples: 1º x último, 2º x penúltimo (evita você
  // pegar o líder logo de cara se você passou em 1º). Guarda em camp.mata.
  function montarMataVolei(camp) {
    var cls = classificacaoGrupo(camp).slice(0, camp.avancamPorGrupo).map(function (l) { return l.time; });
    // chaveamento: emparelha extremos
    var confrontos = [];
    var i = 0, j = cls.length - 1;
    while (i < j) { confrontos.push([cls[i], cls[j]]); i++; j--; }
    camp.mata = {
      faseIdx: 0,
      fases: camp.fasesMata,
      vivos: cls,            // times ainda na disputa
      confrontos: confrontos,
      seuConfrontoIdx: confrontos.findIndex(function (par) {
        return par[0].voce || par[1].voce;
      }),
      historico: []          // { fase, adversario, setsVoce, setsAdv, venceu }
    };
    return camp.mata;
  }

  // Seu adversário no confronto atual do mata (ou null se você não está mais vivo).
  function seuAdversarioMata(camp) {
    if (!camp.mata) return null;
    var meu = camp.mata.confrontos[camp.mata.seuConfrontoIdx];
    if (!meu) return null;
    return meu[0].voce ? meu[1] : meu[0];
  }

  // Registra o resultado do SEU jogo do mata e resolve os outros confrontos da fase
  // (bastidores). Monta a próxima fase com os vencedores. Retorna:
  //   { venceu, campeao, eliminado, proximaFase }  para a UI decidir o texto.
  function registrarJogoMata(camp, setsVoce, setsAdv, forcaDe) {
    var m = camp.mata;
    var venceu = setsVoce > setsAdv;
    var faseNome = m.fases[m.faseIdx] ? m.fases[m.faseIdx].nome : 'MATA';
    m.historico.push({ fase: faseNome, setsVoce: setsVoce, setsAdv: setsAdv, venceu: venceu });

    // Vencedores da fase: o seu (se venceu) + os dos outros confrontos (por força+sorte).
    var vencedores = [];
    m.confrontos.forEach(function (par, idx) {
      if (idx === m.seuConfrontoIdx) {
        vencedores.push(venceu ? (par[0].voce ? par[0] : par[1]) : (par[0].voce ? par[1] : par[0]));
      } else {
        var a = par[0], b = par[1];
        var pa = (a.forca || 70) + (Math.random() - 0.5) * 12;
        var pb = (b.forca || 70) + (Math.random() - 0.5) * 12;
        vencedores.push(pa >= pb ? a : b);
      }
    });

    m.faseIdx++;
    var acabou = (m.faseIdx >= m.fases.length) || vencedores.length < 2;
    var voceVivo = venceu && vencedores.some(function (t) { return t.voce; });

    if (acabou) {
      // Última fase era a final: campeão = vencedor do seu confronto se você venceu.
      return { venceu: venceu, campeao: venceu && voceVivo, eliminado: !venceu,
               proximaFase: null };
    }

    if (!voceVivo) {
      return { venceu: venceu, campeao: false, eliminado: true, proximaFase: null };
    }

    // Monta os confrontos da próxima fase com os vencedores.
    var novos = [];
    var i = 0, j = vencedores.length - 1;
    while (i < j) { novos.push([vencedores[i], vencedores[j]]); i++; j--; }
    m.confrontos = novos;
    m.vivos = vencedores;
    m.seuConfrontoIdx = novos.findIndex(function (par) { return par[0].voce || par[1].voce; });

    return { venceu: venceu, campeao: false, eliminado: false,
             proximaFase: m.fases[m.faseIdx] ? m.fases[m.faseIdx].nome : null };
  }

  var API = {
    FORMATOS: FORMATOS,
    FORMATOS_VNL: FORMATOS_VNL,
    escolheFormato: escolheFormato,
    escolheFormatoVNL: escolheFormatoVNL,
    fasesMataDe: fasesMataDe,
    montarCampanhaVolei: montarCampanhaVolei,
    adversariosDoSeuGrupo: adversariosDoSeuGrupo,
    registrarJogoGrupo: registrarJogoGrupo,
    simularJogosAdversariosGrupo: simularJogosAdversariosGrupo,
    classificacaoGrupo: classificacaoGrupo,
    voceClassificou: voceClassificou,
    montarMataVolei: montarMataVolei,
    seuAdversarioMata: seuAdversarioMata,
    registrarJogoMata: registrarJogoMata,
    // VNL / Liga das Nações
    montarCampanhaVNL: montarCampanhaVNL,
    adversarioVNLRodada: adversarioVNLRodada,
    registrarJogoVNL: registrarJogoVNL,
    simularPreliminarVNL: simularPreliminarVNL,
    classificacaoVNL: classificacaoVNL,
    voceClassificouVNL: voceClassificouVNL,
    montarFinalEightVNL: montarFinalEightVNL
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.CampanhaVolei = API;

})(typeof window !== 'undefined' ? window : this);
