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
                desc: '82 jogos · playoffs melhor de 7' }
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
    // ⚠️ BUG CORRIGIDO (set/2026): o filtro do "bye" era `a !== n-1 && b !== n-1` aplicado
    // SEMPRE, mesmo quando n já era par e nenhum bye tinha sido adicionado. Nesse caso o
    // índice n-1 é um TIME DE VERDADE, e ele era removido de todas as rodadas: ficava com
    // 0 jogos na tabela (o João flagrou "Detroit Pistons 1990-91 · J=0" num print) e, de
    // quebra, o adversário dele folgava naquela rodada — era isso que deixava você com
    // menos jogos que os outros na classificação. O bye só existe se foi criado aqui.
    var comBye = (n % 2 !== 0);
    if (comBye) n = n + 1;
    var byeId = comBye ? (n - 1) : -1;   // -1 = não há bye, todos os índices são reais
    var ids = [];
    for (var i = 0; i < n; i++) ids.push(i);
    var turno = [];
    for (var r = 0; r < n - 1; r++) {
      var rodada = [];
      for (var k = 0; k < n / 2; k++) {
        var a = ids[k], b = ids[n - 1 - k];
        if (a !== byeId && b !== byeId) {
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
        clube: t.clube, temporada: t.temporada,   // separados: a tabela exibe o ano entre ()
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

  // Você se classificou aos playoffs? Usa o MESMO critério de vagas do bracket (maior
  // potência de 2 que cabe nas duas conferências), para não "classificar" a uma vaga
  // que o bracket não teria.
  function voceClassificouLigaNBA(camp) {
    var outraConfId = (camp.suaConf === 'LESTE') ? 'OESTE' : 'LESTE';
    var suaCls = classificacaoDaConf(camp, camp.suaConf);
    var outraCls = classificacaoDaConf(camp, outraConfId);
    function maiorPot2(x) { var p = 1; while (p * 2 <= x) p *= 2; return p; }
    var limite = Math.min(camp.classificamConf, suaCls.length, outraCls.length);
    var n = maiorPot2(limite); if (n < 2) n = 2;
    return suaCls.slice(0, n).some(function (t) { return t.voce; });
  }

  // ── PLAYOFF EM SÉRIES (melhor-de-N) ──────────────────────────────────
  // Vitórias necessárias para fechar uma série de melhor-de-N (ex.: melhor de 7 → 4).
  function vitoriasParaFechar(melhorDe) { return Math.floor(melhorDe / 2) + 1; }

  // Seu adversário no confronto atual do playoff (o time que NÃO é você no seu confronto).
  function seuAdversarioLigaPlayoff(camp) {
    var po = camp.playoff;
    if (!po) return null;
    var par = po.confrontos[po.seuConfrontoIdx];
    if (!par) return null;
    var adv = par[0].voce ? par[1] : par[0];
    return adv || null;
  }

  // melhor-de-N desta fase (a final da NBA pode ser maior).
  function melhorDeDaFase(camp) {
    var po = camp.playoff;
    var fase = po.fases[po.faseIdx];
    if (fase && fase.finalNBA) return camp.melhorDeFinal || camp.melhorDe;
    return camp.melhorDe;
  }

  // Registra UM jogo da série de playoff. Retorna o estado: se a série fechou, se você
  // avançou/foi eliminado, se virou campeão, e a próxima fase.
  function registrarJogoSerieNBA(camp, pontosVoce, pontosAdv, forcaDe) {
    var po = camp.playoff;
    var fase = po.fases[po.faseIdx];
    var venceuJogo = pontosVoce > pontosAdv;
    if (venceuJogo) po.serie.vMeu++; else po.serie.vAdv++;
    po.historico.push({ fase: fase.nome, pf: pontosVoce, pa: pontosAdv, venceu: venceuJogo });

    var alvo = vitoriasParaFechar(melhorDeDaFase(camp));
    var serieAcabou = (po.serie.vMeu >= alvo || po.serie.vAdv >= alvo);

    if (!serieAcabou) {
      return { serieAcabou: false, jogoVenceu: venceuJogo,
               placarSerie: po.serie.vMeu + '-' + po.serie.vAdv,
               campeaoNBA: false, eliminado: false, proximaFase: null };
    }

    // Série fechou:
    var voceVenceuSerie = (po.serie.vMeu >= alvo);
    if (!voceVenceuSerie) {
      return { serieAcabou: true, venceuSerie: false, campeaoNBA: false, eliminado: true,
               placarSerie: po.serie.vMeu + '-' + po.serie.vAdv, proximaFase: null };
    }

    // Você venceu a série: resolve os OUTROS confrontos da sua conf (bastidores) e avança.
    var vencedores = [];
    po.confrontos.forEach(function (par, idx) {
      if (idx === po.seuConfrontoIdx) { vencedores.push(par[0].voce ? par[0] : par[1]); return; }
      var a = par[0], b = par[1];
      var fa = (forcaDe ? forcaDe(a.clubeRef || a) : a.forca) + (Math.random() - 0.5) * 14;
      var fb = (forcaDe ? forcaDe(b.clubeRef || b) : b.forca) + (Math.random() - 0.5) * 14;
      vencedores.push(fa >= fb ? a : b);
    });
    // grava vencedores no bracket visual
    if (po.bracketConf && po.bracketConf[po.faseIdx]) {
      po.bracketConf[po.faseIdx].forEach(function (jogo, idx) { jogo.vencedor = vencedores[idx] || null; });
    }
    // avança a outra conferência uma rodada (em sincronia)
    avancarOutraConfLiga(camp, forcaDe);

    po.faseIdx++;
    po.serie = { vMeu: 0, vAdv: 0 };   // zera para a próxima série

    var proxFase = po.fases[po.faseIdx];
    // É a final da NBA? (você é campeão da conf; enfrenta o campeão da outra)
    if (proxFase && proxFase.finalNBA) {
      var campOutra = po.campeaoOutra || vencedores[0];
      po.confrontos = [[ vencedores[0], campOutra ]];   // você x campeão da outra conf
      po.seuConfrontoIdx = 0;
      montarBracketFinal(po, vencedores[0], campOutra);
      return { serieAcabou: true, venceuSerie: true, campeaoNBA: false, campeaoConf: true,
               eliminado: false, proximaFase: proxFase.nome, placarSerie: alvo + '-' + po.serie.vAdv };
    }

    if (!proxFase) {
      // não havia próxima fase (fim) — campeão
      return { serieAcabou: true, venceuSerie: true, campeaoNBA: true, eliminado: false, proximaFase: null };
    }

    // Monta os confrontos da próxima rodada da sua conf a partir dos vencedores.
    var novos = [];
    for (var i = 0; i < vencedores.length; i += 2) {
      if (vencedores[i + 1]) novos.push([vencedores[i], vencedores[i + 1]]);
    }
    po.confrontos = novos;
    po.seuConfrontoIdx = 0;
    novos.forEach(function (par, i) { if (par[0].voce || par[1].voce) po.seuConfrontoIdx = i; });

    // Preenche os SLOTS da próxima rodada no bracket visual. `bracketVazio` cria as fases
    // futuras com { a: null, b: null } e, até aqui, ninguém as preenchia: só o `vencedor` da
    // fase CORRENTE era gravado. Resultado: a coluna SEMIFINAL da SUA conferência ficava em
    // "A definir" para sempre, mesmo depois de você vencer a 1ª rodada — enquanto a outra
    // conferência avançava normal (avancarOutraConfLiga já preenche a dela).
    if (po.bracketConf && po.bracketConf[po.faseIdx]) {
      novos.forEach(function (par, i) {
        var slot = po.bracketConf[po.faseIdx][i];
        if (slot) { slot.a = par[0]; slot.b = par[1]; slot.vencedor = null; }
      });
    }

    return { serieAcabou: true, venceuSerie: true, campeaoNBA: false, campeaoConf: false,
             eliminado: false, proximaFase: proxFase.nome, placarSerie: alvo + '-' + po.serie.vAdv };
  }

  // Avança a OUTRA conferência uma rodada (bastidores, por força+sorte) e guarda o campeão.
  function avancarOutraConfLiga(camp, forcaDe) {
    var po = camp.playoff;
    if (!po.bracketOutra) return;
    var idx = po.faseIdx;
    var rodada = po.bracketOutra[idx];
    if (!rodada) return;
    rodada.forEach(function (jogo) {
      if (!jogo.a || !jogo.b) return;
      var fa = (forcaDe ? forcaDe(jogo.a.clubeRef || jogo.a) : jogo.a.forca) + (Math.random() - 0.5) * 14;
      var fb = (forcaDe ? forcaDe(jogo.b.clubeRef || jogo.b) : jogo.b.forca) + (Math.random() - 0.5) * 14;
      jogo.vencedor = (fa >= fb) ? jogo.a : jogo.b;
    });
    // propaga vencedores para a próxima rodada da outra conf
    var prox = po.bracketOutra[idx + 1];
    if (prox) {
      var vencs = rodada.map(function (j) { return j.vencedor; }).filter(Boolean);
      for (var i = 0; i < prox.length; i++) {
        prox[i].a = vencs[i * 2] || null;
        prox[i].b = vencs[i * 2 + 1] || null;
      }
    } else {
      // última rodada da outra conf → campeão da outra conferência
      var v = rodada.map(function (j) { return j.vencedor; }).filter(Boolean);
      if (v.length === 1) po.campeaoOutra = v[0];
    }
  }

  // Monta o bracket visual da final (você x campeão da outra conf).
  function montarBracketFinal(po, voceTime, campOutra) {
    po.bracketFinal = [{ a: voceTime, b: campOutra, vencedor: null }];
  }

  // Monta os playoffs a partir da CLASSIFICAÇÃO da liga: top-N de cada conferência,
  // semeados (1º x 8º, 2º x 7º, ...). Reaproveita fasesPlayoffDe e a estrutura de bracket
  // dos 2 lados (bracketConf = sua conf; bracketOutra = outra, resolvida em sincronia).
  function montarPlayoffsLigaNBA(camp) {
    var outraConfId = (camp.suaConf === 'LESTE') ? 'OESTE' : 'LESTE';
    var suaClsFull = classificacaoDaConf(camp, camp.suaConf);
    var outraClsFull = classificacaoDaConf(camp, outraConfId);

    // Nº de classificados = maior potência de 2 que cabe nas DUAS conferências (para o
    // bracket fechar certinho). Ex.: conf com 6 times → top-4; com 10 → top-8.
    function maiorPot2(x) { var p = 1; while (p * 2 <= x) p *= 2; return p; }
    var limite = Math.min(camp.classificamConf, suaClsFull.length, outraClsFull.length);
    var n = maiorPot2(limite);
    if (n < 2) n = 2;
    camp.classificamConf = n;   // ajusta para o valor real usado

    var suaCls = suaClsFull.slice(0, n);
    var outraCls = outraClsFull.slice(0, n);

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
    seuAdversarioLigaPlayoff: seuAdversarioLigaPlayoff,
    registrarJogoSerieNBA: registrarJogoSerieNBA,
    vitoriasParaFechar: vitoriasParaFechar,
    melhorDeDaFase: melhorDeDaFase,
    escolheFormatoNBA: escolheFormatoNBA,
    fasesPlayoffDe: fasesPlayoffDe,
    classificacaoConf: classificacaoConf,
    voceClassificouNBA: voceClassificouNBA,
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else global.CampanhaBasquete = API;

})(typeof window !== 'undefined' ? window : this);
