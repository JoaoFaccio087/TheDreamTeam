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

  var API = {
    FORMATOS: FORMATOS,
    escolheFormato: escolheFormato,
    fasesMataDe: fasesMataDe,
    montarCampanhaVolei: montarCampanhaVolei,
    adversariosDoSeuGrupo: adversariosDoSeuGrupo,
    registrarJogoGrupo: registrarJogoGrupo,
    simularJogosAdversariosGrupo: simularJogosAdversariosGrupo,
    classificacaoGrupo: classificacaoGrupo,
    voceClassificou: voceClassificou
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.CampanhaVolei = API;

})(typeof window !== 'undefined' ? window : this);
