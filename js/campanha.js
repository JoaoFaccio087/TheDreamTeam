// campanha.js — fluxo da campanha: grupos, tabela e mata-mata.

var chaveCopa = null;   // chave (organograma) do mata-mata da Copa do Mundo

// Ajusta os cabeçalhos da tabela de estatísticas do jogador conforme o esporte:
// futebol usa G (gols) / A (assistências); vôlei usa PTS (pontos) / ACE (aces).
function ajustarCabecalhosStats() {
  var ehVolei = (typeof ehCompeticaoVolei === 'function') && ehCompeticaoVolei(modoSelecionado);
  var thG = document.getElementById('stats-th-g');
  var thA = document.getElementById('stats-th-a');
  if (thG) { thG.textContent = ehVolei ? 'PTS' : 'G'; thG.title = ehVolei ? 'Pontos' : 'Gols'; }
  if (thA) { thA.textContent = ehVolei ? 'ACE' : 'A'; thA.title = ehVolei ? 'Aces' : 'Assistências'; }
}

// --- Zera a campanha: fases, adversários usados, estatísticas e histórico visual ---
function reiniciarCampanha() {
  faseAtual         = 0;
  adversariosUsados = [];
  grupo             = null;
  liga              = null;
  chaveCopa         = null;   // chave do mata-mata da Copa
  statsJogadores    = {};
  campanhaPartidas  = 0;
  campanhaGF        = 0;
  campanhaGA        = 0;
  campanhaVitorias  = 0;
  campanhaEmpates   = 0;
  campanhaDerrotas  = 0;
  resumoCampeao     = false;
  // Estado do basquete (não vaza entre campanhas): rebotes e a campanha da NBA.
  if (typeof statsRebotesBasquete !== 'undefined') statsRebotesBasquete = {};
  campanhaBasqueteAtual = null;
  partidaIdBasquete = 0;
  campanhaFlags     = {
    hatTrick: false, poker: false, showDeBola: false,
    maiorSaldoJogo: 0, finalNosPenaltis: false, matasNosPenaltis: 0
  };
  if (btnResumo) btnResumo.classList.add('escondida'); // some até a próxima campanha terminar
  var stats = document.getElementById('stats-campanha');
  if (stats) stats.classList.add('escondida');          // só reaparece ao iniciar a 1ª partida
  var corpo = document.getElementById('stats-campanha-corpo');
  if (corpo) corpo.innerHTML = '';
  var hist  = document.getElementById('historico-jogos');
  if (hist)  hist.innerHTML  = '';
  if (tabelaBrasileiraoCorpo) tabelaBrasileiraoCorpo.innerHTML = ''; // limpa a tabela da liga
}

// --- Monta a campanha: liga (Brasileirão) OU grupos + mata-mata (Liberta/Champions) ---
function montarCampanha() {
  faseAtual         = 0;
  adversariosUsados = [];
  chaveCopa         = null;

  // Formato LIGA (Brasileirão, Premier): 20 times em 38 rodadas, sem grupos/mata-mata
  if (ehFormatoLiga(modoSelecionado)) {
    if (!liga) montarLigaBrasileirao();   // monta uma vez por campanha (tabela + calendário)
    if (tabelaBrasileirao) tabelaBrasileirao.classList.remove('escondida');
    if (btnPularTudo)      btnPularTudo.classList.remove('escondida');
    fasesCampanha = [];
    for (var rd = 1; rd <= 38; rd++) {
      fasesCampanha.push({ nome: 'Rodada ' + rd, tipo: 'liga', rodada: rd });
    }
    faseAtual = liga.rodadaAtual;
    return;
  }

  var comp        = COMPETICOES[modoSelecionado].dados;
  var isChampions = (modoSelecionado === 'champions');
  var isCopa      = (modoSelecionado === 'copa');
  var nGrupoJogos = isChampions ? 4  : 3;    // jogos SEUS na fase de grupos
  var tamGrupo    = isChampions ? 10 : 4;    // total de times no grupo
  var avancam     = isChampions ? 6  : 2;    // quantos avançam

  // Nome do grupo: Champions é liga única; Copa sorteia A–L (12 grupos); demais A–H
  var nomeGrupo = isChampions
    ? 'FASE DE LIGA'
    : 'GRUPO ' + (isCopa ? 'ABCDEFGHIJKL'.charAt(Math.floor(Math.random() * 12))
                         : 'ABCDEFGH'.charAt(Math.floor(Math.random() * 8)));

  // Fases: N rodadas de grupo + mata-mata.
  // Copa entra com 16-avos (chave de 32); as demais começam nas oitavas.
  fasesCampanha = [];
  for (var r = 1; r <= nGrupoJogos; r++) {
    fasesCampanha.push({ nome: nomeGrupo, tipo: 'grupo', rodada: r });
  }
  var mataFases = isCopa
    ? ['16-AVOS DE FINAL', 'OITAVAS DE FINAL', 'QUARTAS DE FINAL', 'SEMIFINAL', 'FINAL']
    : ['OITAVAS DE FINAL', 'QUARTAS DE FINAL', 'SEMIFINAL', 'FINAL'];
  mataFases.forEach(function (n) {
    fasesCampanha.push({ nome: n, tipo: 'mata' });
  });

  // Sorteia os clubes do grupo (você + (tamGrupo-1) adversários distintos)
  var pool = UI.shuffle(API.getClubesPorCompeticao(comp));
  var outros = pool.slice(0, tamGrupo - 1);

  var tabela = [{ nome: nomeDoTime, voce: true, forca: forcaDoTime(), pts: 0, jogos: 0, gf: 0, ga: 0, clubeRef: null }];
  outros.forEach(function (c) {
    tabela.push({ nome: c.clube + ' ' + c.edicao, voce: false, forca: forcaDoClube(c), pts: 0, jogos: 0, gf: 0, ga: 0, clubeRef: c });
  });

  // Tabela de jogos (você = índice 0)
  var jogosVoce = [];   // índices dos seus adversários, na ordem das rodadas
  var jogosBg   = [];   // pares [a,b] resolvidos nos bastidores
  if (!isChampions) {
    jogosVoce = [1, 2, 3];
    jogosBg   = [[1, 2], [1, 3], [2, 3]];
  } else {
    // grupo de 10: cada time joga 4 (vizinhos ±1 e ±2 num círculo)
    var n = tamGrupo, vistos = {};
    for (var a = 0; a < n; a++) {
      for (var d = 1; d <= 2; d++) {
        var b = (a + d) % n;
        var key = Math.min(a, b) + '-' + Math.max(a, b);
        if (vistos[key]) continue;
        vistos[key] = true;
        if (a === 0 || b === 0) jogosVoce.push(a === 0 ? b : a);
        else jogosBg.push([a, b]);
      }
    }
  }

  // Resolve os jogos de bastidores agora (placar instantâneo por força + sorte)
  jogosBg.forEach(function (par) {
    var A = tabela[par[0]], B = tabela[par[1]];
    var p = gerarPlacar(A.forca, B.forca);
    registrarResultadoTabela(A, B, p.meus, p.adversario);
  });

  grupo = { nome: nomeGrupo, tabela: tabela, jogosVoce: jogosVoce, avancam: avancam, idxJogo: 0 };
}

// --- Atualiza pontos/gols de dois times da tabela após um jogo ---
function registrarResultadoTabela(A, B, golsA, golsB) {
  A.jogos = (A.jogos || 0) + 1; B.jogos = (B.jogos || 0) + 1;
  A.gf += golsA; A.ga += golsB;
  B.gf += golsB; B.ga += golsA;
  if (golsA > golsB)      A.pts += 3;
  else if (golsB > golsA) B.pts += 3;
  else { A.pts += 1; B.pts += 1; }
}

// --- Ordena a tabela: pontos → saldo de gols → gols feitos ---
function ordenarTabela(a, b) {
  if (b.pts !== a.pts) return b.pts - a.pts;
  var sa = a.gf - a.ga, sb = b.gf - b.ga;
  if (sb !== sa) return sb - sa;
  return b.gf - a.gf;
}

// --- Desenha a tabela do grupo dentro do card (só no último jogo do grupo) ---
function renderTabelaGrupo(id, ordenada) {
  var cardEl = document.getElementById('partida-' + id);
  var corpo  = cardEl ? cardEl.querySelector('.partida-corpo') : null;
  var elRes  = document.getElementById('presultado-' + id);
  if (!corpo) return;

  var linhas = '';
  ordenada.forEach(function (t, i) {
    var sg = (t.gf - t.ga >= 0 ? '+' : '') + (t.gf - t.ga);
    var cls = (t.voce ? 'grupo-voce' : '') + (i < grupo.avancam ? ' grupo-classifica' : '');
    // Escudo pelo TIME: o seu vem do Perfil, o do adversário vem do clubeRef.
    var esc = (typeof Escudos !== 'undefined' && Escudos.porTime)
      ? Escudos.porTime(t, modoSelecionado) : '';
    var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
    linhas +=
      '<tr class="' + cls + '">' +
        '<td class="grupo-pos">' + (i + 1) + '</td>' +
        '<td class="grupo-time">' + escHTML + '<span class="grupo-nome">' + t.nome + '</span></td>' +
        '<td class="grupo-num">' + t.gf + '</td>' +
        '<td class="grupo-num">' + t.ga + '</td>' +
        '<td class="grupo-num">' + sg + '</td>' +
        '<td class="grupo-pts">' + t.pts + '</td>' +
      '</tr>';
  });

  var wrap = document.createElement('div');
  wrap.className = 'grupo-tabela';
  wrap.innerHTML =
    '<p class="grupo-tabela-titulo">' + grupo.nome + ' \u00B7 Classifica\u00E7\u00E3o</p>' +
    '<table><thead><tr><th></th><th>Time</th><th>GF</th><th>GS</th><th>SG</th><th>Pts</th></tr></thead>' +
    '<tbody>' + linhas + '</tbody></table>';
  if (elRes) corpo.insertBefore(wrap, elRes); else corpo.appendChild(wrap);
}

// --- Versão condensada (Champions): em vez do tabelão de 10, mostra um resumo da
//     SUA campanha + uma janela em torno da linha de corte (no máx. ~5 linhas) ---
function renderResumoFaseLiga(id, ordenada, posVoce) {
  var cardEl = document.getElementById('partida-' + id);
  var corpo  = cardEl ? cardEl.querySelector('.partida-corpo') : null;
  var elRes  = document.getElementById('presultado-' + id);
  if (!corpo) return;

  var corte = grupo.avancam, total = ordenada.length;

  // Linhas em foco: vizinhança da linha de corte + a sua posição (se ficar de fora).
  var foco = {};
  [corte - 2, corte - 1, corte, corte + 1].forEach(function (p) { if (p >= 1 && p <= total) foco[p] = true; });
  foco[posVoce] = true;
  var posicoes = Object.keys(foco).map(Number).sort(function (a, b) { return a - b; });

  var linhas = '';
  posicoes.forEach(function (p, idx) {
    if (idx > 0 && p > posicoes[idx - 1] + 1) linhas += '<tr class="fl-gap"><td colspan="5">&middot;&middot;&middot;</td></tr>';
    var t = ordenada[p - 1];
    var sg = (t.gf - t.ga >= 0 ? '+' : '') + (t.gf - t.ga);
    var cls = (t.voce ? 'fl-voce ' : '') + (p <= corte ? 'fl-classifica' : 'fl-fora') + (p === corte + 1 ? ' fl-corte' : '');
    linhas +=
      '<tr class="' + cls + '">' +
        '<td class="fl-pos">' + p + '</td>' +
        '<td class="fl-time">' + UI.esc(t.nome) + '</td>' +
        '<td class="fl-num">' + (t.jogos || 0) + '</td>' +
        '<td class="fl-num">' + sg + '</td>' +
        '<td class="fl-pts">' + t.pts + '</td>' +
      '</tr>';
  });

  var ok = posVoce <= corte;
  var wrap = document.createElement('div');
  wrap.className = 'fase-liga-resumo';
  wrap.innerHTML =
    '<p class="fl-titulo">Fase de Liga &middot; sua campanha</p>' +
    '<p class="fl-status ' + (ok ? 'ok' : 'out') + '">' + posVoce + 'º de ' + total + ' &middot; ' +
      (ok ? '&#10003; Classificado' : '&#10005; Eliminado') + '</p>' +
    '<table class="fl-tabela"><thead><tr><th></th><th>Time</th><th>J</th><th>SG</th><th>Pts</th></tr></thead>' +
      '<tbody>' + linhas + '</tbody></table>' +
    '<p class="fl-legenda">Top ' + corte + ' avançam ao mata-mata</p>';
  if (elRes) corpo.insertBefore(wrap, elRes); else corpo.appendChild(wrap);
}
function concluirJogoGrupo(est) {
  var advIdx = grupo.jogosVoce[grupo.idxJogo];
  registrarResultadoTabela(grupo.tabela[0], grupo.tabela[advIdx], est.gMeus, est.gAdv);

  var venc = est.gMeus > est.gAdv, perd = est.gMeus < est.gAdv;
  if (venc) campanhaVitorias++; else if (perd) campanhaDerrotas++; else campanhaEmpates++;
  var elMini = document.getElementById('pmres-' + est.id);
  if (elMini) {
    elMini.textContent = venc ? '✓' : (perd ? '✗' : '=');
    elMini.className = 'partida-mini-res' + (venc ? ' vitoria' : (perd ? ' derrota' : ''));
  }

  var btn = document.getElementById('btn-iniciar-jogo');
  var ehUltimo = (grupo.idxJogo === grupo.jogosVoce.length - 1);

  if (!ehUltimo) {
    grupo.idxJogo++;
    faseAtual++;
    btn.textContent = 'Próximo Jogo ►';
    acaoBotao = 'proximo';
    btn.disabled = false;
    if (modoSimulacao === 'automatico') {
      btn.disabled = true;
      setTimeout(function () { btn.disabled = false; iniciarPartida(); }, 1500);
    }
    return;
  }

  // Último jogo do grupo: classifica e mostra a tabela
  var ordenada = grupo.tabela.slice().sort(ordenarTabela);
  var posVoce = 1;
  for (var i = 0; i < ordenada.length; i++) { if (ordenada[i].voce) { posVoce = i + 1; break; } }
  if (modoSelecionado === 'champions') renderResumoFaseLiga(est.id, ordenada, posVoce);
  else renderTabelaGrupo(est.id, ordenada);

  var ondeTxt = (modoSelecionado === 'champions') ? 'na fase de liga' : 'no grupo';
  var elRes = document.getElementById('presultado-' + est.id);
  if (posVoce <= grupo.avancam) {
    if (elRes) { elRes.textContent = '✓ CLASSIFICADO — ' + posVoce + 'º ' + ondeTxt; elRes.className = 'partida-resultado vitoria'; }
    faseAtual++; // entra no mata-mata (oitavas)

    // Copa: monta a chave AGORA (fim dos grupos) para a aba Mata-a-Mata já exibir,
    // sem precisar iniciar o primeiro jogo do mata-mata.
    if (modoSelecionado === 'copa') {
      if (!chaveCopa) montarChaveCopa();
      if (typeof renderChaveCopa === 'function') renderChaveCopa();
    }

    btn.textContent = 'Próximo Jogo ►';
    acaoBotao = 'proximo';
    btn.disabled = false;
    if (modoSimulacao === 'automatico') {
      btn.disabled = true;
      setTimeout(function () { btn.disabled = false; iniciarPartida(); }, 1500);
    }
  } else {
    if (elRes) { elRes.textContent = '✕ ELIMINADO ' + ((modoSelecionado === 'champions') ? 'NA FASE DE LIGA' : 'NA FASE DE GRUPOS') + ' — ' + posVoce + 'º'; elRes.className = 'partida-resultado derrota'; }
    btn.textContent = 'Montar Novo Time ►';
    acaoBotao = 'novo-time';
    btn.disabled = false;
    mostrarBotaoResumo(false);  // eliminado no grupo → botão de resumo da campanha
  }
}


// --- Ponto de entrada: sorteia adversário e dispara a simulação ---
function iniciarPartida() {
  if (timerPartida !== null) return; // já tem uma partida rodando

  // ── Bifurcação multi-esporte (fatia 3) ──────────────────────────────
  // Se a competição selecionada é de vôlei, desvia para o fluxo dedicado
  // e RETORNA antes de tocar em qualquer lógica de futebol. O caminho do
  // futebol abaixo fica 100% intocado — ele nunca atravessa este portão.
  if (typeof ehCompeticaoVolei === 'function' && ehCompeticaoVolei(modoSelecionado)) {
    iniciarPartidaVolei();
    return;
  }
  // Basquete (NBA): fluxo próprio (temporada → playoffs → Finais NBA).
  if (typeof ehCompeticaoBasquete === 'function' && ehCompeticaoBasquete(modoSelecionado)) {
    iniciarPartidaBasquete();
    return;
  }

  var stats = document.getElementById('stats-campanha');
  if (stats) stats.classList.remove('escondida'); // a 1ª partida revela as estatísticas
  ajustarCabecalhosStats();   // G/A (futebol) ou PTS/ACE (vôlei)

  var filtroComp = COMPETICOES[modoSelecionado].dados;
  var fase = fasesCampanha[faseAtual];
  var adversario, faseLabel;

  if (fase && fase.tipo === 'liga' && liga) {
    // Brasileirão: adversário vem do calendário da rodada atual
    var confL = confrontoSeu(liga.rodadaAtual);
    adversario = liga.tabela[confL.advIdx].clubeRef;
    faseLabel  = 'Rodada ' + (liga.rodadaAtual + 1) + ' \u00B7 Brasileir\u00E3o';
  } else if (fase && fase.tipo === 'grupo' && grupo) {
    // Adversário vem da tabela do grupo (jogo agendado, não aleatório)
    var advIdx = grupo.jogosVoce[grupo.idxJogo];
    adversario = grupo.tabela[advIdx].clubeRef;
    faseLabel  = grupo.nome + ' · Rodada ' + (grupo.idxJogo + 1);
    // Marca como usado pra não reencontrá-lo no mata-mata
    adversariosUsados.push(adversario.clube + '|' + adversario.edicao);
  } else {
    // Mata-mata.
    if (modoSelecionado === 'copa') {
      // Copa: chave real de 32. Monta na 1ª fase do mata e o adversário vem dela.
      if (!chaveCopa) montarChaveCopa();
      adversario = getAdversarioChave();
      faseLabel  = fase ? fase.nome : '';
      if (adversario) adversariosUsados.push(adversario.clube + '|' + adversario.edicao);
    } else {
      // Liberta/Champions: sorteia adversário da competição, sem repetir os já enfrentados
      var candidatos = API.getClubesPorCompeticao(filtroComp).filter(function (d) {
        return adversariosUsados.indexOf(d.clube + '|' + d.edicao) < 0;
      });
      if (candidatos.length === 0) {
        candidatos = API.getClubesPorCompeticao(filtroComp);
      }
      if (candidatos.length === 0) { console.warn('Sem adversários para', filtroComp); return; }
      adversario = candidatos[Math.floor(Math.random() * candidatos.length)];
      adversariosUsados.push(adversario.clube + '|' + adversario.edicao);
      faseLabel = fase ? fase.nome : '';
    }
  }

  contadorPartidas++;
  var id = contadorPartidas;

  // Card exibe a fase atual da campanha
  criarCardPartida(id, adversario, faseLabel);

  var forcaMinha = forcaDoTime();
  var forcaAdv   = forcaDoClube(adversario);
  var placar     = gerarPlacar(forcaMinha, forcaAdv, true);
  var total      = placar.meus + placar.adversario;
  var mins       = distribuirMinutos(total);

  // Gols do meu time: autor + assistente ponderados por posição
  var jogadores = escalacao.filter(function(j) { return j !== null; });
  var golsTime  = [];
  for (var g = 0; g < placar.meus; g++) {
    var autor  = sortearPorPeso(jogadores, pesoGol, null);
    var assist = Math.random() < 0.70 ? sortearPorPeso(jogadores, pesoAssist, autor) : null;
    golsTime.push({ autor: autor, assist: assist });
  }

  // Gols do adversário: sorteio pelo elenco dele (reutiliza pesoGol)
  var jogadoresAdv = adversario.jogadores || [];
  var golsAdv = [];
  for (var h = 0; h < placar.adversario; h++) {
    var autorAdv = jogadoresAdv.length > 0 ? sortearPorPeso(jogadoresAdv, pesoGol, null) : null;
    golsAdv.push({ autor: autorAdv });
  }

  // Embaralha a atribuição meu/adv mantendo os minutos ordenados
  var attrs = [];
  for (var a = 0; a < placar.meus; a++)       attrs.push('meu');
  for (var a = 0; a < placar.adversario; a++) attrs.push('adv');
  attrs = UI.shuffle(attrs);

  var fila = [];
  var iMeu = 0, iAdv = 0;
  for (var f = 0; f < total; f++) {
    if (attrs[f] === 'meu') {
      fila.push({ minuto: mins[f], lado: 'meu', autor: golsTime[iMeu].autor, assist: golsTime[iMeu].assist });
      iMeu++;
    } else {
      fila.push({ minuto: mins[f], lado: 'adv', adversario: adversario, autorAdv: golsAdv[iAdv].autor });
      iAdv++;
    }
  }

  var est = {
    id:         id,
    fila:       fila,
    idx:        0,
    gMeus:      0,
    gAdv:       0,
    adversario: adversario,
    forcaMinha: forcaMinha,
    forcaAdv:   forcaAdv,
    minuto:     0,
    golsPorJogador: {}   // { nomeJogador: nº de gols NESTE jogo } — p/ hat-trick/pôquer/show de bola
  };

  document.getElementById('btn-iniciar-jogo').disabled = true;
  timerPartida = setTimeout(function() { tickPartida(est); }, cadenciaAtual());
}




// ─────────────────────── VÔLEI: fluxo de partida (fatia 3) ───────────────────────
// Estado da campanha de vôlei (separado do futebol para não colidir). Guarda a
// estrutura de grupos/mata montada pelo CampanhaVolei e por onde a campanha vai.
var campanhaVoleiAtual = null;

// ════════════════════════════════════════════════════════════════════
//  BASQUETE / NBA — fluxo da campanha (temporada regular → playoffs →
//  Finais da NBA). Espelha o vôlei/VNL, mas usa CampanhaBasquete e
//  AnimacaoBasquete. Estado próprio (campanhaBasqueteAtual). Não toca
//  no futebol nem no vôlei.
// ════════════════════════════════════════════════════════════════════
var campanhaBasqueteAtual = null;
var partidaIdBasquete = 0;

// Handle da animação de partida em curso (basquete ou vôlei). Guardado para poder
// CANCELAR uma animação ainda rodando quando o usuário clica "Pular Tudo" — senão a
// partida que estava animando continua no seu timer e "fica simulando" por cima do pulo.
var animacaoEmCurso = null;
function cancelarAnimacaoEmCurso() {
  if (animacaoEmCurso && typeof animacaoEmCurso.cancel === 'function') {
    try { animacaoEmCurso.cancel(); } catch (e) {}
  }
  animacaoEmCurso = null;
}

// Força média de um time de basquete (0-100), média das forças dos jogadores.
function forcaTimeBasquete(t) {
  if (!t || !t.jogadores || !t.jogadores.length) return 80;
  var s = 0;
  for (var i = 0; i < t.jogadores.length; i++) s += t.jogadores[i].forca;
  return s / t.jogadores.length;
}

// Times da competição de basquete atual (filtra os dados pela "competicao" = 'NBA').
function timesDaCompeticaoBasquete() {
  var filtro = COMPETICOES[modoSelecionado].dados;   // 'NBA'
  var fonte = [];
  if (typeof DADOS_NBA !== 'undefined') fonte = fonte.concat(DADOS_NBA);
  return fonte.filter(function (c) { return c.competicao === filtro; });
}

// Acumula as estatísticas de UMA partida de basquete nas variáveis globais do resumo.
// Basquete tem 3 estatísticas (pontos/rebotes/assistências); guardamos pontos em `gols`
// e assistências em `asis` (compat com o resumo do vôlei/futebol), e rebotes num mapa
// dedicado (statsRebotesBasquete) que o resumo do basquete lê à parte.
var statsRebotesBasquete = {};
function acumularStatsBasquete(roteiro, pontosVoce, pontosAdv) {
  if (typeof campanhaPartidas === 'undefined') return;
  campanhaPartidas++;
  campanhaGF += pontosVoce;   // "GF/GA" do resumo = pontos feitos/sofridos
  campanhaGA += pontosAdv;
  if (pontosVoce > pontosAdv) campanhaVitorias++; else campanhaDerrotas++;

  var meusNomes = {};
  escalacao.forEach(function (j) { if (j) meusNomes[j.nome] = true; });
  var stats = AnimacaoBasquete.coletarEstatisticas(roteiro);
  stats.forEach(function (s) {
    if (!meusNomes[s.nome]) return;   // só o meu time
    if (!statsJogadores[s.nome]) statsJogadores[s.nome] = { gols: 0, asis: 0 };
    statsJogadores[s.nome].gols += s.pontos;         // pontos
    statsJogadores[s.nome].asis += s.assistencias;   // assistências
    if (!statsRebotesBasquete[s.nome]) statsRebotesBasquete[s.nome] = 0;
    statsRebotesBasquete[s.nome] += s.rebotes;       // rebotes (à parte)
  });
}

// Monta a mini meia-quadra com os 5 titulares do MEU time posicionados (para exibir
// dentro do card durante o jogo). Espelha o mapa de escalação da home/perfil: usa as
// coordenadas de formacoes['basquete'] na MESMA ordem de escalacao/codigosFormacao.
function montarMiniQuadraBasquete() {
  var coords = (typeof formacoes !== 'undefined' && formacoes['basquete']) ? formacoes['basquete'] : [];
  var cods = (typeof codigosFormacao !== 'undefined' && codigosFormacao['basquete']) ? codigosFormacao['basquete'] : [];
  if (!coords.length) return '';

  var fichas = coords.map(function (c, i) {
    var jog = escalacao[i] || null;
    var cod = (jog && jog.codigo) || cods[i] || c.grupo;
    var nome = jog ? jog.nome : '\u2014';
    var vazio = jog ? '' : ' pbq-ficha-vazia';
    return '<div class="pbq-ficha' + vazio + '" style="left:' + c.left + '%;top:' + c.top + '%">' +
             '<span class="pbq-cod">' + cod + '</span>' +
             '<span class="pbq-nome">' + nome + '</span>' +
           '</div>';
  }).join('');

  return '<div class="pbq-mapa">' +
           '<div class="pbq-quadra quadra-basquete">' +
             '<div class="bq-piso"></div><div class="bq-garrafao"></div><div class="bq-linha3"></div>' +
             fichas +
           '</div>' +
         '</div>';
}

// Cria o card visual de uma partida de basquete (casca reaproveitada do futebol/vôlei).
function criarCardPartidaBasquete(id, adversario, fase) {
  if (id > 1) {
    var anterior = document.getElementById('partida-basquete-' + (id - 1));
    if (anterior) anterior.classList.remove('expandido');
  }
  var div = document.createElement('div');
  div.className = 'partida-card partida-basquete expandido';
  div.id = 'partida-basquete-' + id;

  var forcaAdv = Math.round(forcaTimeBasquete(adversario));
  var escudo = (typeof Escudos !== 'undefined' && Escudos.porNomeSeModo)
    ? (function () { var s = Escudos.porNomeSeModo(adversario.clube, modoSelecionado); return s ? '<span class="partida-escudo">' + s + '</span>' : ''; })()
    : '';

  div.innerHTML =
    '<div class="partida-fase">' + fase + '</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + escudo + adversario.clube + '</span>' +
        '<span class="partida-adversario-ano">NBA \u00B7 ' + (adversario.temporada || '') + '</span>' +
        '<span class="partida-adversario-forca">Força ' + forcaAdv + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="pb-placar partida-placar">0 \u2013 0</span>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="pb-status"></div>' +
      montarMiniQuadraBasquete() +
      '<div class="pb-quartos"></div>' +
      '<div class="pb-resumo"></div>' +
    '</div>';

  var hist = document.getElementById('historico-jogos');
  if (hist) hist.appendChild(div);
  return div;
}

// Mostra o CHAVEAMENTO (bracket) dos playoffs da sua conferência + as Finais da NBA,
// em colunas por fase. Cada confronto é um par de times; destaca você e os vencedores.
// Lê camp.playoff.bracketConf (preenchido pelo motor). Recria a cada avanço de fase.
function mostrarBracketPlayoffs(camp) {
  if (!camp.playoff || !camp.playoff.bracketConf) return;
  var po = camp.playoff;

  function nomeT(t) {
    if (!t) return '<span class="bkt-vazio">A definir</span>';
    return t.voce ? nomeDoTime : t.nome;
  }
  function celula(t, ehVenc) {
    var cls = 'bkt-time' + (t && t.voce ? ' bkt-voce' : '') + (ehVenc ? ' bkt-venc' : '');
    var esc = (t && typeof Escudos !== 'undefined' && Escudos.porTime) ? (Escudos.porTime(t, modoSelecionado) || '') : '';
    var escHTML = esc ? '<span class="bkt-escudo">' + esc + '</span>' : '';
    return '<div class="' + cls + '">' + escHTML + '<span class="bkt-nome">' + nomeT(t) + '</span></div>';
  }
  function jogoHTML(j) {
    var vencA = j.vencedor && j.a && (j.vencedor === j.a);
    var vencB = j.vencedor && j.b && (j.vencedor === j.b);
    return '<div class="bkt-jogo' + (j.seuJogo ? ' bkt-seujogo' : '') + '">' +
             celula(j.a, vencA) + celula(j.b, vencB) +
           '</div>';
  }
  var nomesFase = po.fases.map(function (f) { return f.nome; });

  // Colunas de uma conferência. `espelhado` inverte a ordem (a outra conf cresce da
  // direita para o centro), para o layout ficar simétrico em torno das Finais.
  function colunasDe(bracket, espelhado) {
    var cols = bracket.map(function (rodada, ri) {
      var titulo = tituloCurto(nomesFase[ri] || ('Rodada ' + (ri + 1)));
      return '<div class="bkt-coluna">' +
               '<div class="bkt-coluna-tit">' + titulo + '</div>' +
               rodada.map(jogoHTML).join('') +
             '</div>';
    });
    return (espelhado ? cols.reverse() : cols).join('');
  }

  // Finais da NBA no centro (você — se campeão de conf — vs campeão da outra conf).
  var meuLado = { voce: true };
  var outro = po.finalistaOutraConf;
  var euCampeaoConf = po.faseIdx >= 0 && po.fases[po.faseIdx] && po.fases[po.faseIdx].finalNBA;
  var finalHTML = '';
  if (euCampeaoConf || outro) {
    var vencFinal = null;
    var finalHist = (po.historico || []).filter(function (h) { return h.fase === 'FINAIS DA NBA'; })[0];
    if (finalHist) vencFinal = finalHist.venceu ? meuLado : outro;
    finalHTML =
      '<div class="bkt-coluna bkt-coluna-final">' +
        '<div class="bkt-coluna-tit">Finais NBA</div>' +
        '<div class="bkt-jogo bkt-seujogo bkt-jogo-final">' +
          celula(meuLado, vencFinal === meuLado) +
          celula(outro, vencFinal === outro) +
        '</div>' +
      '</div>';
  }

  // Nomes das conferências (novo formato de liga não tem camp.conferencias; deriva do id).
  function nomeConfId(id) {
    if (camp.conferencias && camp.conferencias[id]) return camp.conferencias[id].nome;
    return (id === 'LESTE') ? 'Leste' : 'Oeste';
  }
  var nomeSua = nomeConfId(camp.suaConf);
  var nomeOutra = nomeConfId(po.outraConf);

  var html = '<div class="bkt-wrap">' +
    '<div class="bkt-titulo">Chaveamento dos Playoffs</div>' +
    '<div class="bkt-conf-rotulos">' +
      '<span class="bkt-rot bkt-rot-sua">Conf. ' + nomeSua + ' (você)</span>' +
      '<span class="bkt-rot">Conf. ' + nomeOutra + '</span>' +
    '</div>' +
    '<div class="bkt-colunas">' +
      colunasDe(po.bracketConf, false) +
      finalHTML +
      colunasDe(po.bracketOutra || [], true) +
    '</div>' +
  '</div>';

  // Renderiza o chaveamento no painel da aba Playoff (#chave-copa).
  var painelChave = document.getElementById('chave-copa');
  if (painelChave) {
    painelChave.innerHTML = html;
  }
}

// Encurta o nome da fase para caber na coluna do bracket.
function tituloCurto(nome) {
  return nome
    .replace('PRIMEIRA RODADA', '1ª Rodada')
    .replace('SEMIFINAL DE CONFERÊNCIA', 'Semifinal')
    .replace('FINAL DE CONFERÊNCIA', 'Final Conf.')
    .replace('FINAIS DA NBA', 'Finais NBA');
}

// Mostra a classificação da SUA conferência (tabela V/D/saldo), integrada no card.
// Renderiza a classificação das DUAS conferências no painel dedicado (aba Classificação).
function mostrarClassificacaoConf(camp) {
  var alvo = document.getElementById('nba-classificacao');
  if (!alvo) return;   // painel ainda não criado (montado em prepararAbasBasquete)

  function tabelaConf(confId, nomeConf) {
    var cls;
    if (camp.liga && CampanhaBasquete.classificacaoDaConf) {
      cls = CampanhaBasquete.classificacaoDaConf(camp, confId);
    } else {
      cls = CampanhaBasquete.classificacaoConf(camp, confId).map(function (l) { return l.time; });
    }
    var classificam = camp.classificamConf | 0;
    var linhas = cls.map(function (t, i) {
      var saldo = (t.pf - t.pa >= 0 ? '+' : '') + (t.pf - t.pa);
      var classe = (t.voce ? 'grupo-voce' : '') + (i < classificam ? ' grupo-classifica' : '');
      var nome = t.voce ? nomeDoTime : t.nome;
      var esc = (typeof Escudos !== 'undefined' && Escudos.porTime) ? (Escudos.porTime(t, modoSelecionado) || '') : '';
      var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
      return '<tr class="' + classe + '">' +
               '<td class="grupo-pos">' + (i + 1) + '</td>' +
               '<td class="grupo-time">' + escHTML + '<span class="grupo-nome">' + nome + '</span></td>' +
               '<td class="grupo-num">' + t.j + '</td>' +
               '<td class="grupo-num">' + t.v + '</td>' +
               '<td class="grupo-num">' + t.d + '</td>' +
               '<td class="grupo-num">' + saldo + '</td>' +
             '</tr>';
    }).join('');
    return '<div class="grupo-tabela">' +
             '<p class="grupo-tabela-titulo">Conferência ' + nomeConf + '</p>' +
             '<table class="fl-tabela">' +
               '<thead><tr><th></th><th>Time</th><th>J</th><th>V</th><th>D</th><th>Saldo</th></tr></thead>' +
               '<tbody>' + linhas + '</tbody>' +
             '</table>' +
           '</div>';
  }

  var suaPrimeiro = (camp.suaConf === 'LESTE');
  var htmlL = tabelaConf('LESTE', 'Leste');
  var htmlO = tabelaConf('OESTE', 'Oeste');
  alvo.innerHTML =
    '<p class="nba-classif-legenda">Top ' + (camp.classificamConf | 0) + ' de cada conferência avançam aos playoffs</p>' +
    '<div class="nba-classif-grid">' + (suaPrimeiro ? htmlL + htmlO : htmlO + htmlL) + '</div>';
}

// Prepara/exibe as abas do basquete: Simulação, Classificação, Playoff.
function prepararAbasBasquete() {
  var simTabs = document.getElementById('sim-tabs');
  var tabClassif = document.getElementById('sim-tab-classif');
  var tabChave = document.getElementById('sim-tab-chave');
  if (simTabs) simTabs.classList.remove('escondida');
  if (tabClassif) tabClassif.classList.remove('escondida');
  if (tabChave) tabChave.textContent = 'Playoff';

  // Cria o painel de classificação (dentro de sim-painel-jogos, escondido por padrão) se
  // ainda não existir.
  var painelJogos = document.getElementById('sim-painel-jogos');
  if (painelJogos && !document.getElementById('nba-classif-painel')) {
    var d = document.createElement('div');
    d.id = 'nba-classif-painel';
    d.className = 'nba-classif-painel escondida';
    d.innerHTML = '<div id="nba-classificacao"></div>';
    painelJogos.appendChild(d);
  }
  selecionarAbaBasquete('jogos');
}

// Alterna entre as 3 abas do basquete (Simulação / Classificação / Playoff).
function selecionarAbaBasquete(qual) {
  var histJogos   = document.getElementById('historico-jogos');
  var painelClass = document.getElementById('nba-classif-painel');
  var painelChave = document.getElementById('chave-copa');
  var tabJogos    = document.getElementById('sim-tab-jogos');
  var tabClassif  = document.getElementById('sim-tab-classif');
  var tabChave    = document.getElementById('sim-tab-chave');
  var tabelaBras  = document.getElementById('tabela-brasileirao');

  if (tabelaBras) tabelaBras.classList.add('escondida');   // a tabela do brasileirão não é usada aqui

  var mostraJogos  = (qual === 'jogos');
  var mostraClass  = (qual === 'classif');
  var mostraChave  = (qual === 'chave');

  if (histJogos)   histJogos.classList.toggle('escondida', !mostraJogos);
  if (painelClass) painelClass.classList.toggle('escondida', !mostraClass);
  if (painelChave) painelChave.classList.toggle('escondida', !mostraChave);

  if (tabJogos)   tabJogos.classList.toggle('sim-tab-ativa', mostraJogos);
  if (tabClassif) tabClassif.classList.toggle('sim-tab-ativa', mostraClass);
  if (tabChave)   tabChave.classList.toggle('sim-tab-ativa', mostraChave);

  if (mostraClass && campanhaBasqueteAtual) mostrarClassificacaoConf(campanhaBasqueteAtual);
  if (mostraChave && campanhaBasqueteAtual && campanhaBasqueteAtual.playoff) mostrarBracketPlayoffs(campanhaBasqueteAtual);

  // Amplia a largura da tela na aba de classificação (2 conferências lado a lado).
  var telaSim = document.getElementById('tela-simulacao');
  if (telaSim) telaSim.classList.toggle('nba-classif-ampla', mostraClass);
}

// Inicia (ou continua) a campanha da NBA e joga a próxima partida.
// Inicia (ou continua) a campanha da NBA e joga a próxima partida.
function iniciarPartidaBasquete() {
  if (typeof CampanhaBasquete === 'undefined' || typeof AnimacaoBasquete === 'undefined') {
    console.warn('[nba] módulos do basquete não carregados'); return;
  }

  // Monta a campanha na 1ª partida: LIGA de pontos corridos (82/40/20 jogos por tamanho),
  // com times de VÁRIAS EDIÇÕES misturadas (como o futebol), divididos em 2 conferências.
  if (!campanhaBasqueteAtual) {
    var todos = timesDaCompeticaoBasquete();   // TODAS as edições (não filtra uma só)
    if (!todos.length) { console.warn('[nba] sem times para', modoSelecionado); return; }

    var voceMonta = { nome: nomeDoTime, forca: forcaDoTime(), jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var tamNBA = (typeof tamanhoTemporadaNBA !== 'undefined' && tamanhoTemporadaNBA) ? tamanhoTemporadaNBA : 'regular';
    campanhaBasqueteAtual = CampanhaBasquete.montarLigaNBA(todos, voceMonta, forcaTimeBasquete, tamNBA);
    prepararAbasBasquete();
    mostrarClassificacaoConf(campanhaBasqueteAtual);
  }

  var camp = campanhaBasqueteAtual;
  if (camp.rodadaAtual >= camp.calendario.length) { return; }

  var conf = CampanhaBasquete.seuConfrontoNaRodada(camp, camp.rodadaAtual);
  if (!conf) {
    CampanhaBasquete.resolverDemaisJogosNBA(camp, camp.rodadaAtual, placarBastidoresBasquete);
    camp.rodadaAtual++;
    mostrarClassificacaoConf(camp);
    return iniciarPartidaBasquete();
  }
  var advRegistro = camp.tabela[conf.advIdx];
  var adversario = advRegistro.clubeRef;

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoBasquete.prepararPartida(meuTime, advTime);

  acumularStatsBasquete(roteiro, roteiro.pontosA, roteiro.pontosB);

  var rodadaNum = camp.rodadaAtual + 1;
  var faseLabel = 'Rodada ' + rodadaNum + '/' + camp.calendario.length + ' \u00B7 NBA';
  var idCard = partidaIdBasquete + 1;
  partidaIdBasquete = idCard;
  var advComAno = adversario.clube + ' ' + adversario.temporada;
  var card = criarCardPartidaBasquete(idCard, adversario, faseLabel, advComAno);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoBasquete.animar({
    elCard: card, roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    onFim: function () {
      if (btn) btn.disabled = false;
      CampanhaBasquete.registrarResultadoNBA(camp.tabela[0], advRegistro, roteiro.pontosA, roteiro.pontosB);
      CampanhaBasquete.resolverDemaisJogosNBA(camp, camp.rodadaAtual, placarBastidoresBasquete);
      camp.rodadaAtual++;
      mostrarClassificacaoConf(camp);

      var acabou = (camp.rodadaAtual >= camp.calendario.length);
      if (btn) {
        if (acabou) {
          salvarCampanhaBasquete(camp);
          if (CampanhaBasquete.voceClassificouLigaNBA(camp)) {
            CampanhaBasquete.montarPlayoffsLigaNBA(camp);
            mostrarBracketPlayoffs(camp);
            btn.innerHTML = 'Iniciar Mata-a-Mata \u25BA';
            acaoBotao = 'playoffs-nba';
          } else {
            btn.innerHTML = 'Montar Novo Time \u25BA';
            acaoBotao = 'novo-time';
          }
        } else {
          btn.innerHTML = 'Próximo Jogo \u25BA';
          acaoBotao = 'proximo-nba';
        }
      }
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' && !acabou) {
        setTimeout(function () { iniciarPartidaBasquete(); }, 700);
      }
    }
  });
}

// Placar de bastidores para jogos que não são seus (instantâneo, por força + sorte).
function placarBastidoresBasquete(A, B) {
  var fa = A.forca + (Math.random() - 0.5) * 16;
  var fb = B.forca + (Math.random() - 0.5) * 16;
  var base = 104;
  var pa = Math.round(base + (fa - fb) * 0.6 + (Math.random() - 0.5) * 10);
  var pb = Math.round(base + (fb - fa) * 0.6 + (Math.random() - 0.5) * 10);
  if (pa === pb) pa += (Math.random() < 0.5 ? 1 : -1) * 2;
  return { a: Math.max(80, pa), b: Math.max(80, pb) };
}

// Joga um confronto de PLAYOFF (primeira rodada → semi conf → final conf → Finais NBA).
function iniciarPartidaPlayoffNBA() {
  var camp = campanhaBasqueteAtual;
  if (!camp || !camp.playoff) return;
  var adversario_reg = CampanhaBasquete.seuAdversarioLigaPlayoff(camp);
  if (!adversario_reg) return;
  var adversario = adversario_reg.clubeRef || adversario_reg;
  var po = camp.playoff;
  var fase = po.fases[po.faseIdx];
  var faseNome = fase ? fase.nome : 'PLAYOFFS';
  var melhorDe = CampanhaBasquete.melhorDeDaFase(camp);
  var alvo = CampanhaBasquete.vitoriasParaFechar(melhorDe);

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoBasquete.prepararPartida(meuTime, advTime);

  var jogoSerie = (po.serie.vMeu + po.serie.vAdv + 1);
  var faseLabel = faseNome + ' \u00B7 Jogo ' + jogoSerie + ' (melhor de ' + melhorDe + ') \u00B7 s\u00E9rie ' + po.serie.vMeu + '-' + po.serie.vAdv;
  var idCard = partidaIdBasquete + 1;
  partidaIdBasquete = idCard;
  var card = criarCardPartidaBasquete(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoBasquete.animar({
    elCard: card, roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    onFim: function () {
      if (btn) btn.disabled = false;
      var res = CampanhaBasquete.registrarJogoSerieNBA(camp, roteiro.pontosA, roteiro.pontosB, forcaTimeBasquete);
      acumularStatsBasquete(roteiro, roteiro.pontosA, roteiro.pontosB);
      mostrarBracketPlayoffs(camp);

      var virouCampeao = false, foiEliminado = false;
      if (res.serieAcabou) {
        if (res.eliminado) { foiEliminado = true; }
        else if (!res.proximaFase) { virouCampeao = true; }   // venceu a última série
        else if (res.campeaoNBA) { virouCampeao = true; }
      }

      if (btn) {
        if (virouCampeao) {
          btn.innerHTML = 'Nova Campanha'; acaoBotao = 'nova-campanha';
          if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = true; mostrarBotaoResumo(true); }
        } else if (foiEliminado) {
          btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time';
        } else {
          btn.innerHTML = 'Próximo Jogo \u25BA'; acaoBotao = 'playoffs-nba';
        }
      }
      if (virouCampeao || foiEliminado) {
        salvarCampanhaBasquete(camp, { campeaoNBA: virouCampeao, faseAlcancada: faseNome });
      }
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' && !virouCampeao && !foiEliminado) {
        setTimeout(function () { iniciarPartidaPlayoffNBA(); }, 800);
      }
    }
  });
}

// "Pular tudo" do basquete: simula sua temporada restante e, se classificar, todo o playoff.
function pularTudoBasquete(soTemporada) {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (!campanhaBasqueteAtual) return;
  var camp = campanhaBasqueteAtual;
  if (!camp.liga) return;   // só o novo formato de liga

  // 1) Simula (rápido, sem animar) todas as rodadas restantes da temporada regular.
  while (camp.rodadaAtual < camp.calendario.length) {
    var conf = CampanhaBasquete.seuConfrontoNaRodada(camp, camp.rodadaAtual);
    if (conf) {
      var adv = camp.tabela[conf.advIdx];
      var p = placarBastidoresBasquete(camp.tabela[0], adv);
      CampanhaBasquete.registrarResultadoNBA(camp.tabela[0], adv, p.a, p.b);
    }
    CampanhaBasquete.resolverDemaisJogosNBA(camp, camp.rodadaAtual, placarBastidoresBasquete);
    camp.rodadaAtual++;
  }
  mostrarClassificacaoConf(camp);

  var btn = document.getElementById('btn-iniciar-jogo');
  var bp = document.getElementById('btn-pular-tudo');

  var classificou = CampanhaBasquete.voceClassificouLigaNBA(camp);

  // Se pediu só os pontos corridos: para aqui (deixa o playoff para o usuário jogar).
  if (soTemporada) {
    if (classificou) {
      if (!camp.playoff) CampanhaBasquete.montarPlayoffsLigaNBA(camp);
      mostrarBracketPlayoffs(camp);
      selecionarAbaBasquete('classif');   // mostra a classificação final
      if (btn) { btn.innerHTML = 'Iniciar Mata-a-Mata \u25BA'; acaoBotao = 'playoffs-nba'; btn.disabled = false; }
      if (bp) bp.classList.add('escondida');   // não faz sentido "pular tudo" agora; use o botão do playoff
    } else {
      salvarCampanhaBasquete(camp);
      if (btn) { btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; btn.disabled = false; }
      if (bp) bp.classList.add('escondida');
      if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    }
    return;
  }

  // 2) Pular TUDO: se não classificou, encerra; se classificou, simula o playoff inteiro.
  if (!classificou) {
    salvarCampanhaBasquete(camp);
    if (bp) bp.classList.add('escondida');
    if (btn) { btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; btn.disabled = false; }
    if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    return;
  }

  if (!camp.playoff) CampanhaBasquete.montarPlayoffsLigaNBA(camp);
  var resultado = pularPlayoffLigaNBA(camp);
  mostrarBracketPlayoffs(camp);
  if (bp) bp.classList.add('escondida');
  if (btn) {
    if (resultado.campeaoNBA) { btn.innerHTML = 'Nova Campanha'; acaoBotao = 'nova-campanha'; }
    else { btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; }
    btn.disabled = false;
  }
  if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = !!resultado.campeaoNBA; mostrarBotaoResumo(!!resultado.campeaoNBA); }
}

// Simula (sem animar) todo o playoff em séries até você ser campeão ou eliminado.
function pularPlayoffLigaNBA(camp) {
  var res = { campeaoNBA: false, eliminado: false };
  var guarda = 0;
  while (guarda++ < 200) {
    var adv = CampanhaBasquete.seuAdversarioLigaPlayoff(camp);
    if (!adv) break;
    var advTime = adv.clubeRef || adv;
    // joga a série inteira de uma vez
    var r;
    do {
      var meu = { forca: forcaDoTime() }, out = { forca: (advTime.jogadores ? forcaTimeBasquete(advTime) : adv.forca) };
      var p = placarBastidoresBasquete(meu, out);
      r = CampanhaBasquete.registrarJogoSerieNBA(camp, p.a, p.b, forcaTimeBasquete);
    } while (!r.serieAcabou);
    if (r.eliminado) { res.eliminado = true; break; }
    if (r.campeaoNBA || !r.proximaFase) { res.campeaoNBA = true; break; }
  }
  var faseFinal = camp.playoff.fases[Math.min(camp.playoff.faseIdx, camp.playoff.fases.length - 1)];
  salvarCampanhaBasquete(camp, { campeaoNBA: res.campeaoNBA, faseAlcancada: faseFinal ? faseFinal.nome : 'PLAYOFFS' });
  return res;
}


// Salva a campanha de basquete (espelha salvarCampanhaVolei; usa classificação da conf).
function salvarCampanhaBasquete(camp, resultadoPlayoff) {
  if (typeof API === 'undefined' || !API.salvarPartida) return;

  // Classificação na estrutura de LIGA (não a antiga por conferências).
  var cls;
  if (camp.liga && CampanhaBasquete.classificacaoDaConf) {
    cls = CampanhaBasquete.classificacaoDaConf(camp, camp.suaConf);
  } else {
    cls = CampanhaBasquete.classificacaoConf(camp, camp.suaConf).map(function (l) { return l.time; });
  }
  var minha = cls.filter(function (t) { return t.voce; })[0] || { v: 0, d: 0, pf: 0, pa: 0 };
  var posicao = 0;
  cls.forEach(function (t, i) { if (t.voce) posicao = i + 1; });

  var classificou = camp.liga
    ? CampanhaBasquete.voceClassificouLigaNBA(camp)
    : CampanhaBasquete.voceClassificouNBA(camp);
  var campeao = !!(resultadoPlayoff && resultadoPlayoff.campeaoNBA);
  var nomeConf = (camp.conferencias && camp.conferencias[camp.suaConf])
    ? camp.conferencias[camp.suaConf].nome
    : ((camp.suaConf === 'LESTE') ? 'Leste' : 'Oeste');

  // Snapshot da SUA escalação → alimenta o "time mais escalado" no perfil. Sem isto, o
  // mapa do perfil de basquete fica vazio (era o bug: nunca salvávamos os picks).
  var picks = (typeof escalacao !== 'undefined' ? escalacao : [])
    .filter(function (j) { return j; })
    .map(function (j) {
      return { id: j.id, codigo: j.codigo, nome: j.nome, forca: j.forca | 0, gols: 0, asis: 0 };
    });

  API.salvarPartida({
    modo: modoSelecionado,
    esporte: 'basquete',
    campeao: campeao,
    vitorias: minha.v, empates: 0, derrotas: minha.d,
    golsPro: minha.pf, golsContra: minha.pa,
    detalhes: {
      temporada: camp.temporada,
      formato: (camp.formato && camp.formato.id) || (camp.tamanho && camp.tamanho.id) || 'liga',
      conferencia: nomeConf,
      classificado: !!classificou,
      faseAlcancada: (resultadoPlayoff && resultadoPlayoff.faseAlcancada) ||
                     (classificou ? 'PLAYOFFS' : 'TEMPORADA REGULAR'),
      posicao: posicao,
      snapshot: { formacao: 'basquete', picks: picks }
    }
  }).then(function (resp) {
    // Toast das conquistas recém-desbloqueadas, FILTRADO para basquete (não vaza futebol/vôlei).
    if (resp && resp.novasConquistas && typeof mostrarToastConquistas === 'function') {
      mostrarToastConquistas(resp.novasConquistas, 'basquete');
    }
  }).catch(function () {});
}

// Força média de uma seleção (0-100), usada para resolver jogos neutros na chave.
function forcaSelecaoVolei(sel) {
  if (!sel || !sel.jogadores || !sel.jogadores.length) return 80;
  var s = 0;
  for (var i = 0; i < sel.jogadores.length; i++) s += sel.jogadores[i].forca;
  return s / sel.jogadores.length;
}

// Retorna todas as seleções da competição de vôlei selecionada (via DADOS globais).
function selecoesDaCompeticaoVolei() {
  var filtro = COMPETICOES[modoSelecionado].dados;   // ex.: "Mundial de Vôlei (M)" / "VNL (M)"
  var fonte  = [];
  if (typeof DADOS_VOLEI_M !== 'undefined') fonte = fonte.concat(DADOS_VOLEI_M);
  if (typeof DADOS_VOLEI_F !== 'undefined') fonte = fonte.concat(DADOS_VOLEI_F);
  if (typeof DADOS_VNL_M !== 'undefined') fonte = fonte.concat(DADOS_VNL_M);
  if (typeof DADOS_VNL_F !== 'undefined') fonte = fonte.concat(DADOS_VNL_F);
  return fonte.filter(function (c) { return c.competicao === filtro; });
}

// Acumula as estatísticas de UMA partida de vôlei nas MESMAS variáveis globais que o
// resumo da campanha lê (statsJogadores, campanhaVitorias/…/GF/GA/Partidas). Assim o
// resumo do vôlei mostra sets, maior pontuador e mais aces — sem reescrever o resumo.
// `roteiro` vem de AnimacaoVolei.prepararPartida; `setsVoce`/`setsAdv` são o placar.
// O vôlei não tem empate, então campanhaEmpates nunca cresce.
function acumularStatsVolei(roteiro, setsVoce, setsAdv) {
  if (typeof campanhaPartidas === 'undefined') return;
  campanhaPartidas++;
  campanhaGF += setsVoce;   // no vôlei, "GF/GA" do resumo = sets feitos/sofridos
  campanhaGA += setsAdv;
  if (setsVoce > setsAdv) campanhaVitorias++; else campanhaDerrotas++;

  // Pontos/aces por jogador — só do MEU time (a lista de estatísticas do resumo é a
  // minha escalação). O autor do ponto é o nome do jogador; filtramos pelos meus.
  var meusNomes = {};
  escalacao.forEach(function (j) { if (j) meusNomes[j.nome] = true; });
  var stats = AnimacaoVolei.coletarEstatisticas(roteiro);
  stats.forEach(function (s) {
    if (!meusNomes[s.nome]) return;   // ignora pontos do adversário
    if (!statsJogadores[s.nome]) statsJogadores[s.nome] = { gols: 0, asis: 0 };
    // Reusa os campos gols/asis: no vôlei, gols=pontos e asis=aces (o resumo já rotula
    // como PTS/ACE via ehVolei). Mantém uma estrutura só para os dois esportes.
    statsJogadores[s.nome].gols += s.pontos;
    statsJogadores[s.nome].asis += s.aces;
  });
}

// Inicia (ou continua) a campanha de vôlei e joga a próxima partida.
function iniciarPartidaVolei() {
  if (typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') {
    console.warn('[volei] módulos do vôlei não carregados'); return;
  }

  // ── Bifurcação VNL vs Mundial ───────────────────────────────────────
  // A VNL tem estrutura própria (preliminar em liga + Final Eight). Se a
  // competição é a VNL, desvia para o fluxo dedicado e RETORNA. O caminho
  // do Mundial abaixo (grupos + mata) fica intocado.
  if (typeof ehCompeticaoVNL === 'function' && ehCompeticaoVNL(modoSelecionado)) {
    iniciarPartidaVNL();
    return;
  }

  // Monta a campanha na 1ª partida (escolhe uma edição e monta grupos+mata).
  if (!campanhaVoleiAtual) {
    var todas = selecoesDaCompeticaoVolei();
    if (!todas.length) { console.warn('[volei] sem seleções para', modoSelecionado); return; }
    var anos = [];
    todas.forEach(function (c) { if (anos.indexOf(c.edicao) < 0) anos.push(c.edicao); });
    var ano = anos[Math.floor(Math.random() * anos.length)];
    var selecoes = todas.filter(function (c) { return c.edicao === ano; });

    var voceMonta = { nome: nomeDoTime, forca: forcaDoTime(), jogadores: escalacao.filter(function (j) { return j !== null; }) };
    campanhaVoleiAtual = CampanhaVolei.montarCampanhaVolei(selecoes, voceMonta, forcaSelecaoVolei);
    campanhaVoleiAtual.edicaoAno = ano;
    campanhaVoleiAtual.jogosGrupoFeitos = 0;
  }

  var camp = campanhaVoleiAtual;

  // Fase de grupos: você enfrenta cada adversário do seu grupo, um por partida.
  var advs = CampanhaVolei.adversariosDoSeuGrupo(camp);
  var idx  = camp.jogosGrupoFeitos;
  if (idx >= advs.length) {
    console.log('[volei] fase de grupos concluída (mata-mata vem na fatia seguinte)');
    return;
  }
  var adversarioTime = advs[idx];
  var adversario     = adversarioTime.clubeRef;

  // Monta o roteiro da partida com o motor de vôlei (núcleo + animação).
  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  // Registra o resultado na tabela do grupo (sets do roteiro).
  CampanhaVolei.registrarJogoGrupo(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
  acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
  camp.jogosGrupoFeitos++;

  // Cria o card visual (reaproveita a casca do card de futebol) e anima ponto a ponto.
  var faseLabel = 'Grupo ' + String.fromCharCode(65 + camp.seuGrupo) + ' \u00B7 ' +
                  rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  // roda a animação usando a velocidade global já existente (mesma do futebol).
  // IMPORTANTE: o automático NÃO pula a animação — ele só encadeia a próxima partida
  // sozinha (igual ao futebol). Só o "Pular tudo" pula de fato as simulações.
  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    onFim: function () {
      if (btn) btn.disabled = false;
      var acabaramJogosGrupo = (camp.jogosGrupoFeitos >= advs.length);

      // Se terminou os jogos do grupo, resolve a classificação nos bastidores.
      if (acabaramJogosGrupo) {
        CampanhaVolei.simularJogosAdversariosGrupo(camp);
        mostrarTabelaGrupoVolei(camp);   // exibe o "grupinho" com a classificação final
        // Só salva AGORA se você foi eliminado nos grupos. Se classificou, o save
        // acontece no fim do mata-mata (com o resultado final, evitando duplicar).
        if (!CampanhaVolei.voceClassificou(camp)) salvarCampanhaVolei(camp);
      }

      // Atualiza o BOTÃO conforme o estado.
      if (btn) {
        if (acabaramJogosGrupo) {
          var classificou = CampanhaVolei.voceClassificou(camp);
          if (classificou) {
            // Classificou → monta o mata-mata e leva o jogador até ele.
            CampanhaVolei.montarMataVolei(camp);
            btn.innerHTML = 'Ir ao Mata-Mata \u25BA';
            acaoBotao = 'mata-volei';
          } else {
            // Eliminado na fase de grupos → montar time novo.
            btn.innerHTML = 'Montar Novo Time \u25BA';
            acaoBotao = 'novo-time';
          }
        } else {
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'proximo-volei';
        }
      }

      // Encadeamento no modo automático:
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico') {
        if (camp.jogosGrupoFeitos < advs.length) {
          // ainda há jogos de grupo → próximo jogo de grupo
          setTimeout(function () { iniciarPartidaVolei(); }, 800);
        } else if (acabaramJogosGrupo && CampanhaVolei.voceClassificou(camp)) {
          // grupos acabaram e você classificou → segue direto ao mata-mata
          setTimeout(function () { iniciarPartidaMataVolei(); }, 900);
        }
      }
    }
  });
}

// "Pular tudo" do vôlei: simula sem animação todos os jogos restantes do grupo,
// registra na tabela, salva a campanha e mostra o resultado no botão. Evita cair
// no pularTudoBrasileirao/pularTudoMata (que assumem futebol e travam).
function pularTudoVolei() {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (!campanhaVoleiAtual || typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') return;
  var camp = campanhaVoleiAtual;
  var advs = CampanhaVolei.adversariosDoSeuGrupo(camp);

  while (camp.jogosGrupoFeitos < advs.length) {
    var adversarioTime = advs[camp.jogosGrupoFeitos];
    var adversario     = adversarioTime.clubeRef;
    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);
    CampanhaVolei.registrarJogoGrupo(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    var faseLabel = 'Grupo ' + String.fromCharCode(65 + camp.seuGrupo) + ' \u00B7 ' +
                    rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    // Usa a própria animação em modo "pular" (preenche o card com o resultado final
    // instantaneamente, sem ponto a ponto).
    animacaoEmCurso = AnimacaoVolei.animar({
      elCard: card,
      roteiro: roteiro,
      velocidade: function () { return velocidadeSimulacao; },
      pular: true
    });
    camp.jogosGrupoFeitos++;
  }

  CampanhaVolei.simularJogosAdversariosGrupo(camp);
  mostrarTabelaGrupoVolei(camp);   // mostra o "grupinho" também ao pular tudo
  // Só salva agora se eliminado nos grupos; se classificou, salva no fim do mata.
  if (!CampanhaVolei.voceClassificou(camp)) salvarCampanhaVolei(camp);

  var btn = document.getElementById('btn-iniciar-jogo');
  var bp = document.getElementById('btn-pular-tudo');
  if (bp) bp.classList.add('escondida');

  if (!CampanhaVolei.voceClassificou(camp)) {
    // Eliminado nos grupos → fim da campanha.
    if (btn) {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
      btn.disabled = false;
    }
    if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    return;
  }

  // Classificou → "Pular tudo" deve simular TODO o mata-mata até o fim (campeão ou
  // eliminação), sem parar no "Ir ao Mata-Mata". Monta o mata e resolve cada fase.
  CampanhaVolei.montarMataVolei(camp);
  var resultado = pularMataVolei(camp);

  if (btn) {
    if (resultado.campeao) {
      btn.innerHTML = 'Nova Campanha';
      acaoBotao = 'nova-campanha';
    } else {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
    }
    btn.disabled = false;
  }
  if (typeof mostrarBotaoResumo === 'function') {
    resumoCampeao = !!resultado.campeao;
    mostrarBotaoResumo(!!resultado.campeao);
  }
}

// Simula (sem animação) todos os confrontos do mata-mata do vôlei a partir do estado
// atual de camp.mata, até você ser campeão ou eliminado. Registra cada card e salva a
// campanha com o desfecho final. Retorna { campeao, faseAlcancada }.
function pularMataVolei(camp) {
  var ultimaFase = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'MATA-MATA';
  var res = { campeao: false, eliminado: false, proximaFase: null };

  while (true) {
    var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
    if (!adversarioTime) break;
    var adversario = adversarioTime.clubeRef;
    var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'MATA-MATA';
    ultimaFase = faseNome;

    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

    var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    AnimacaoVolei.animar({ elCard: card, roteiro: roteiro, velocidade: function () { return velocidadeSimulacao; }, pular: true });

    res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    if (res.campeao || res.eliminado) break;
  }

  // Salva o resultado final da campanha com o desfecho (alimenta resumo e conquistas).
  salvarCampanhaVolei(camp, { campeao: res.campeao, faseAlcancada: ultimaFase });
  return { campeao: res.campeao, faseAlcancada: ultimaFase };
}

// ════════════════════════════════════════════════════════════════════
//  VNL / LIGA DAS NAÇÕES — fluxo da campanha (preliminar em liga + Final Eight).
//  Espelha iniciarPartidaVolei/pularTudoVolei/iniciarPartidaMataVolei, mas usa
//  a estrutura própria da VNL (camp.vnl, tabela única, seusJogos, Final Eight).
// ════════════════════════════════════════════════════════════════════

// Joga uma rodada da FASE PRELIMINAR da VNL (você enfrenta um adversário sorteado).
function iniciarPartidaVNL() {
  if (typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') {
    console.warn('[vnl] módulos do vôlei não carregados'); return;
  }

  // Monta a campanha VNL na 1ª partida (escolhe edição e monta preliminar+Final Eight).
  if (!campanhaVoleiAtual) {
    var todas = selecoesDaCompeticaoVolei();
    if (!todas.length) { console.warn('[vnl] sem seleções para', modoSelecionado); return; }
    var anos = [];
    todas.forEach(function (c) { if (anos.indexOf(c.edicao) < 0) anos.push(c.edicao); });
    var ano = anos[Math.floor(Math.random() * anos.length)];
    var selecoes = todas.filter(function (c) { return c.edicao === ano; });

    var voceMonta = { nome: nomeDoTime, forca: forcaDoTime(), jogadores: escalacao.filter(function (j) { return j !== null; }) };
    campanhaVoleiAtual = CampanhaVolei.montarCampanhaVNL(selecoes, voceMonta, forcaSelecaoVolei);
    campanhaVoleiAtual.edicaoAno = ano;
  }

  var camp = campanhaVoleiAtual;
  var adversarioTime = CampanhaVolei.adversarioVNLRodada(camp);
  if (!adversarioTime) {
    console.log('[vnl] fase preliminar concluída');
    return;
  }
  var adversario = adversarioTime.clubeRef;

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  CampanhaVolei.registrarJogoVNL(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
  acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);

  var faseLabel = 'Fase Preliminar \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    onFim: function () {
      if (btn) btn.disabled = false;
      var acabouPreliminar = (camp.jogosFeitos >= camp.seusJogos.length);

      if (acabouPreliminar) {
        // Bastidores preenchem a preliminar e geram a classificação.
        CampanhaVolei.simularPreliminarVNL(camp, camp.formato.jogosVoce);
        mostrarTabelaVNL(camp);
        if (!CampanhaVolei.voceClassificouVNL(camp)) salvarCampanhaVolei(camp);
      }

      if (btn) {
        if (acabouPreliminar) {
          if (CampanhaVolei.voceClassificouVNL(camp)) {
            CampanhaVolei.montarFinalEightVNL(camp);
            btn.innerHTML = 'Ir \u00e0 Final Eight \u25BA';
            acaoBotao = 'final-eight-vnl';
          } else {
            btn.innerHTML = 'Montar Novo Time \u25BA';
            acaoBotao = 'novo-time';
          }
        } else {
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'proximo-vnl';
        }
      }

      // Encadeamento automático
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico') {
        if (camp.jogosFeitos < camp.seusJogos.length) {
          setTimeout(function () { iniciarPartidaVNL(); }, 800);
        } else if (acabouPreliminar && CampanhaVolei.voceClassificouVNL(camp)) {
          setTimeout(function () { iniciarPartidaFinalEightVNL(); }, 900);
        }
      }
    }
  });
}

// "Pular tudo" da VNL: simula suas rodadas restantes da preliminar sem animação.
function pularTudoVNL() {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (!campanhaVoleiAtual || typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') return;
  var camp = campanhaVoleiAtual;

  while (camp.jogosFeitos < camp.seusJogos.length) {
    var adversarioTime = CampanhaVolei.adversarioVNLRodada(camp);
    if (!adversarioTime) break;
    var adversario = adversarioTime.clubeRef;
    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);
    CampanhaVolei.registrarJogoVNL(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    var faseLabel = 'Fase Preliminar \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    AnimacaoVolei.animar({ elCard: card, roteiro: roteiro, velocidade: function () { return velocidadeSimulacao; }, pular: true });
  }

  CampanhaVolei.simularPreliminarVNL(camp, camp.formato.jogosVoce);
  mostrarTabelaVNL(camp);
  if (!CampanhaVolei.voceClassificouVNL(camp)) salvarCampanhaVolei(camp);

  var btn = document.getElementById('btn-iniciar-jogo');
  var bp = document.getElementById('btn-pular-tudo');
  if (bp) bp.classList.add('escondida');

  if (!CampanhaVolei.voceClassificouVNL(camp)) {
    if (btn) {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
      btn.disabled = false;
    }
    if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    return;
  }

  // Classificou → "Pular tudo" simula TODA a Final Eight até o fim.
  CampanhaVolei.montarFinalEightVNL(camp);
  var resultado = pularFinalEightVNL(camp);

  if (btn) {
    if (resultado.campeao) {
      btn.innerHTML = 'Nova Campanha';
      acaoBotao = 'nova-campanha';
    } else {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
    }
    btn.disabled = false;
  }
  if (typeof mostrarBotaoResumo === 'function') {
    resumoCampeao = !!resultado.campeao;
    mostrarBotaoResumo(!!resultado.campeao);
  }
}

// Simula (sem animação) toda a Final Eight da VNL a partir do estado atual de camp.mata,
// até campeão ou eliminação. Espelha pularMataVolei. Retorna { campeao, faseAlcancada }.
function pularFinalEightVNL(camp) {
  var ultimaFase = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'FINAL EIGHT';
  var res = { campeao: false, eliminado: false, proximaFase: null };

  while (true) {
    var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
    if (!adversarioTime) break;
    var adversario = adversarioTime.clubeRef;
    var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'FINAL EIGHT';
    ultimaFase = faseNome;

    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

    var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    AnimacaoVolei.animar({ elCard: card, roteiro: roteiro, velocidade: function () { return velocidadeSimulacao; }, pular: true });

    res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    if (res.campeao || res.eliminado) break;
  }

  salvarCampanhaVolei(camp, { campeao: res.campeao, faseAlcancada: ultimaFase });
  return { campeao: res.campeao, faseAlcancada: ultimaFase };
}

// Joga um confronto da FINAL EIGHT da VNL (quartas, semi, final). Reusa o motor de
// mata do vôlei (registrarJogoMata) — idêntico ao Mundial, só muda o rótulo/desfecho.
function iniciarPartidaFinalEightVNL() {
  var camp = campanhaVoleiAtual;
  if (!camp || !camp.mata) return;
  var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
  if (!adversarioTime) return;
  var adversario = adversarioTime.clubeRef;
  var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'FINAL EIGHT';

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    onFim: function () {
      if (btn) btn.disabled = false;
      var res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
      acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);

      if (btn) {
        if (res.campeao) {
          btn.innerHTML = 'Nova Campanha';
          acaoBotao = 'nova-campanha';
          if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = true; mostrarBotaoResumo(true); }
        } else if (res.eliminado) {
          btn.innerHTML = 'Montar Novo Time \u25BA';
          acaoBotao = 'novo-time';
        } else {
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'final-eight-vnl';
        }
      }

      if (res.campeao || res.eliminado) {
        salvarCampanhaVolei(camp, {
          campeao: res.campeao,
          faseAlcancada: faseNome
        });
      }

      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' && !res.campeao && !res.eliminado) {
        setTimeout(function () { iniciarPartidaFinalEightVNL(); }, 900);
      }
    }
  });
}

// Joga um confronto do MATA-MATA do vôlei (semi, final...). Espelha iniciarPartidaVolei
// mas usa o adversário do chaveamento e resolve avanço/eliminação/título no fim.
function iniciarPartidaMataVolei() {
  var camp = campanhaVoleiAtual;
  if (!camp || !camp.mata) return;
  var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
  if (!adversarioTime) return;
  var adversario = adversarioTime.clubeRef;
  var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'MATA-MATA';

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,   // automático anima normalmente; só "Pular tudo" pula de fato
    onFim: function () {
      if (btn) btn.disabled = false;
      var res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
      acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);

      if (btn) {
        if (res.campeao) {
          btn.innerHTML = 'Nova Campanha';
          acaoBotao = 'nova-campanha';
          if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = true; mostrarBotaoResumo(true); }
        } else if (res.eliminado) {
          btn.innerHTML = 'Montar Novo Time \u25BA';
          acaoBotao = 'novo-time';
        } else {
          // Avançou de fase: próximo confronto do mata.
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'mata-volei';
        }
      }

      // Quando a campanha ACABA no mata (título ou eliminação), salva o resultado final
      // com o desfecho — isto alimenta o resumo e as conquistas (Campeão Mundial etc.).
      if (res.campeao || res.eliminado) {
        salvarCampanhaVolei(camp, {
          campeao: res.campeao,
          posicao: res.campeao ? 1 : null,
          faseAlcancada: faseNome   // fase em que a campanha terminou
        });
      }

      // encadeia no modo automático enquanto você seguir vivo
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' &&
          !res.campeao && !res.eliminado) {
        setTimeout(function () { iniciarPartidaMataVolei(); }, 800);
      }
    }
  });
}

// Mostra a tabela de classificação do grupo de vôlei (o "grupinho"), no mesmo lugar
// dos cards de partida. Destaca você e os classificados ao mata-mata.
function mostrarTabelaGrupoVolei(camp) {
  var cls = CampanhaVolei.classificacaoGrupo(camp);
  var avancam = camp.avancamPorGrupo | 0;
  var nomeGrupo = 'Grupo ' + String.fromCharCode(65 + camp.seuGrupo);

  var linhas = cls.map(function (l, i) {
    var t = l.time;
    var saldo = (l.sp - l.sc >= 0 ? '+' : '') + (l.sp - l.sc);
    var classe = (t.voce ? 'grupo-voce' : '') + (i < avancam ? ' grupo-classifica' : '');
    var nome = t.voce ? nomeDoTime : t.nome;
    // Escudo: usa porTime, que resolve o SEU escudo (t.voce → doUsuario) e o dos
    // adversários (clubeRef). Antes só gerava p/ quem tinha clubeRef → seu time ficava sem.
    var esc = (typeof Escudos !== 'undefined' && Escudos.porTime)
      ? (Escudos.porTime(t, modoSelecionado) || '') : '';
    var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
    return '<tr class="' + classe + '">' +
             '<td class="grupo-pos">' + (i + 1) + '</td>' +
             '<td class="grupo-time">' + escHTML + '<span class="grupo-nome">' + nome + '</span></td>' +
             '<td class="grupo-num">' + l.v + '</td>' +
             '<td class="grupo-num">' + l.d + '</td>' +
             '<td class="grupo-num">' + saldo + '</td>' +
             '<td class="grupo-pts">' + l.pts + '</td>' +
           '</tr>';
  }).join('');

  var tabelaHTML =
    '<div class="grupo-tabela">' +
      '<p class="grupo-tabela-titulo">' + nomeGrupo + ' \u00B7 Classifica\u00E7\u00E3o final</p>' +
      '<table class="fl-tabela">' +
        '<thead><tr><th></th><th>Sele\u00E7\u00E3o</th><th>V</th><th>D</th><th>SS</th><th>Pts</th></tr></thead>' +
        '<tbody>' + linhas + '</tbody>' +
      '</table>' +
      '<p class="fl-legenda">Top ' + avancam + ' avan\u00E7am ao mata-mata</p>' +
    '</div>';

  // Insere a tabela DENTRO do corpo do card da última partida (igual ao futebol),
  // para ficar integrada ao card expansivo — não como um bloco solto no topo.
  var ultimoCard = document.getElementById('partida-volei-' + partidaIdVolei);
  var corpo = ultimoCard ? ultimoCard.querySelector('.partida-corpo') : null;
  if (corpo) {
    var div = document.createElement('div');
    div.innerHTML = tabelaHTML;
    corpo.appendChild(div.firstChild);
  } else {
    // fallback: se não achar o card, insere no histórico
    var hist = document.getElementById('historico-jogos');
    if (hist) { var w = document.createElement('div'); w.innerHTML = tabelaHTML; hist.appendChild(w.firstChild); }
  }
}

// Mostra a tabela da FASE PRELIMINAR da VNL (liga única). Espelha mostrarTabelaGrupoVolei,
// mas é uma tabela só (não grupos) e destaca o top-`classificam` (Final Eight).
function mostrarTabelaVNL(camp) {
  var cls = CampanhaVolei.classificacaoVNL(camp);
  var classificam = camp.classificam | 0;

  var linhas = cls.map(function (l, i) {
    var t = l.time;
    var saldo = (l.sp - l.sc >= 0 ? '+' : '') + (l.sp - l.sc);
    var classe = (t.voce ? 'grupo-voce' : '') + (i < classificam ? ' grupo-classifica' : '');
    var nome = t.voce ? nomeDoTime : t.nome;
    var esc = (typeof Escudos !== 'undefined' && Escudos.porTime)
      ? (Escudos.porTime(t, modoSelecionado) || '') : '';
    var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
    return '<tr class="' + classe + '">' +
             '<td class="grupo-pos">' + (i + 1) + '</td>' +
             '<td class="grupo-time">' + escHTML + '<span class="grupo-nome">' + nome + '</span></td>' +
             '<td class="grupo-num">' + l.v + '</td>' +
             '<td class="grupo-num">' + l.d + '</td>' +
             '<td class="grupo-num">' + saldo + '</td>' +
             '<td class="grupo-pts">' + l.pts + '</td>' +
           '</tr>';
  }).join('');

  var tabelaHTML =
    '<div class="grupo-tabela">' +
      '<p class="grupo-tabela-titulo">Fase Preliminar \u00B7 Classifica\u00E7\u00E3o</p>' +
      '<table class="fl-tabela">' +
        '<thead><tr><th></th><th>Sele\u00E7\u00E3o</th><th>V</th><th>D</th><th>SS</th><th>Pts</th></tr></thead>' +
        '<tbody>' + linhas + '</tbody>' +
      '</table>' +
      '<p class="fl-legenda">Top ' + classificam + ' avan\u00E7am \u00E0 Final Eight</p>' +
    '</div>';

  var ultimoCard = document.getElementById('partida-volei-' + partidaIdVolei);
  var corpo = ultimoCard ? ultimoCard.querySelector('.partida-corpo') : null;
  if (corpo) {
    var div = document.createElement('div');
    div.innerHTML = tabelaHTML;
    corpo.appendChild(div.firstChild);
  } else {
    var hist = document.getElementById('historico-jogos');
    if (hist) { var w = document.createElement('div'); w.innerHTML = tabelaHTML; hist.appendChild(w.firstChild); }
  }
}

// Salva a campanha de vôlei no banco/histórico (fatia 5). Espelha o formato do
// futebol (js/resumo.js), mas com esporte:'volei' e semântica de vôlei:
//  - gf/ga = sets feitos/sofridos (reaproveita as colunas; ver migração 009)
//  - empates = 0 (vôlei não empata)
//  - detalhes = placar por sets, edição, e a classificação final do grupo
// Salva a campanha de vôlei. `resultadoMata` (opcional) traz o desfecho do mata-mata:
//   { campeao, posicao, faseAlcancada } — quando ausente, salva o fim da fase de grupos.
function salvarCampanhaVolei(camp, resultadoMata) {
  if (typeof API === 'undefined' || !API.salvarPartida) return;

  // ── VNL: usa a classificação da preliminar (liga única), não grupos ──
  var ehVNL = !!camp.vnl;
  var cls = ehVNL ? CampanhaVolei.classificacaoVNL(camp) : CampanhaVolei.classificacaoGrupo(camp);
  var minhaLinha = cls.filter(function (l) { return l.time.voce; })[0] || { v: 0, d: 0, sp: 0, sc: 0 };
  var posicao = 0;
  cls.forEach(function (l, i) { if (l.time.voce) posicao = i + 1; });
  var classificou = ehVNL ? CampanhaVolei.voceClassificouVNL(camp) : CampanhaVolei.voceClassificou(camp);

  // Soma os jogos do mata-mata (se houver) às vitórias/derrotas e sets.
  var vTot = minhaLinha.v | 0, dTot = minhaLinha.d | 0;
  var spTot = minhaLinha.sp | 0, scTot = minhaLinha.sc | 0;
  if (camp.mata && camp.mata.historico) {
    camp.mata.historico.forEach(function (h) {
      if (h.venceu) vTot++; else dTot++;
      spTot += h.setsVoce | 0; scTot += h.setsAdv | 0;
    });
  }

  var ehCampeao = !!(resultadoMata && resultadoMata.campeao);

  API.salvarPartida({
    competicao: COMPETICOES[modoSelecionado].dados,   // "Mundial de Vôlei (M)" / "(F)"
    esporte:    'volei',
    modo:       'solo',
    vitorias:   vTot,
    empates:    0,                                     // vôlei não empata
    derrotas:   dTot,
    gf:         spTot,                                 // sets feitos
    ga:         scTot,                                 // sets sofridos
    posicao:    (resultadoMata && resultadoMata.posicao) || posicao || null,
    campeao:    ehCampeao,
    detalhes: {
      edicao:       camp.edicaoAno,
      formato:      camp.formato.id,
      grupo:        ehVNL ? 'Preliminar' : String.fromCharCode(65 + camp.seuGrupo),
      classificado: !!classificou,
      faseAlcancada: (resultadoMata && resultadoMata.faseAlcancada) ||
                     (ehVNL ? (classificou ? 'FINAL EIGHT' : 'FASE PRELIMINAR')
                            : (classificou ? 'MATA-MATA' : 'FASE DE GRUPOS')),
      classificacao: cls.map(function (l) {
        return { time: l.time.voce ? '(você)' : l.time.nome, pts: l.pts, sp: l.sp, sc: l.sc };
      }),
      // Snapshot da SUA escalação → alimenta o "time mais escalado" no perfil. Sem isto o
      // mapa do perfil de vôlei fica vazio (mesmo bug que o basquete tinha).
      snapshot: {
        formacao: 'volei',
        picks: (typeof escalacao !== 'undefined' ? escalacao : [])
          .filter(function (j) { return j; })
          .map(function (j) {
            return { id: j.id, codigo: j.codigo, nome: j.nome, forca: j.forca | 0, gols: 0, asis: 0 };
          })
      }
    }
  }).then(function (resp) {
    // Toast das conquistas recém-desbloqueadas, FILTRADO para vôlei (não vaza futebol/basquete).
    if (resp && resp.novasConquistas && typeof mostrarToastConquistas === 'function') {
      mostrarToastConquistas(resp.novasConquistas, 'volei');
    }
  }).catch(function () {});
}

// Cria o card visual de uma partida de vôlei. REAPROVEITA as classes do card de
// futebol (partida-card, partida-fase, partida-header, partida-adversario-bloco,
// partida-escudo, partida-corpo) e adiciona só o miolo próprio do vôlei: o contador
// de sets (pv-sets-contador) e o placar de pontos (pv-placar), além de status/resumo.
// Os seletores que a animação usa (.pv-placar, .pv-sets-contador, .pv-status,
// .pv-sets, .pv-resumo) ficam DENTRO deste card.
function criarCardPartidaVolei(id, adversario, fase) {
  // recolhe o card anterior (mesmo comportamento do futebol)
  if (id > 1) {
    var anterior = document.getElementById('partida-volei-' + (id - 1));
    if (anterior) anterior.classList.remove('expandido');
  }

  var div = document.createElement('div');
  div.className = 'partida-card partida-volei expandido';
  div.id        = 'partida-volei-' + id;

  var forcaAdv = Math.round(forcaSelecaoVolei(adversario));
  var escudo = (typeof Escudos !== 'undefined' && Escudos.porNomeSeModo)
    ? (function () { var sName = Escudos.porNomeSeModo(adversario.clube, modoSelecionado); return sName ? '<span class="partida-escudo">' + sName + '</span>' : ''; })()
    : '';

  div.innerHTML =
    '<div class="partida-fase">' + fase + '</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + escudo + adversario.clube + '</span>' +
        '<span class="partida-adversario-ano">' + rotuloCompeticao(adversario.competicao) + ' \u00B7 ' + adversario.edicao + '</span>' +
        '<span class="partida-adversario-forca">Força ' + forcaAdv + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<div class="pv-sets-contador"></div>' +
        '<span class="pv-placar partida-placar">0 – 0</span>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="pv-status"></div>' +
      '<div class="pv-sets"></div>' +
      '<div class="pv-resumo"></div>' +
    '</div>';

  var hist = document.getElementById('historico-jogos');
  if (hist) hist.appendChild(div);
  return div;
}

var partidaIdVolei = 0;




// ─────────────────────── CHAVE DO MATA-MATA (COPA) ───────────────────────
// Monta a chave de 32: você (sempre na ponta de cima) + 31 seleções sorteadas.
// Cada rodada, seu jogo é o match[0]; os demais são resolvidos nos bastidores.
function montarChaveCopa() {
  var comp = COMPETICOES['copa'].dados;
  var pool = UI.shuffle(API.getClubesPorCompeticao(comp).filter(function (d) {
    return adversariosUsados.indexOf(d.clube + '|' + d.edicao) < 0;
  }));

  var times = [{ nome: nomeDoTime, voce: true, forca: forcaDoTime(), clubeRef: null }];
  for (var k = 0; k < 31; k++) {
    var c = pool[k] || API.getClubesPorCompeticao(comp)[k % API.getClubesPorCompeticao(comp).length];
    times.push({ nome: c.clube + ' ' + c.edicao, voce: false, forca: forcaDoClube(c), clubeRef: c });
  }

  // Embaralha só os adversários (você fica no índice 0)
  times = [times[0]].concat(UI.shuffle(times.slice(1)));

  // Rodadas: 16 → 8 → 4 → 2 → 1 confrontos
  var rounds = [];
  var r0 = [];
  for (var p = 0; p < 32; p += 2) r0.push({ a: times[p], b: times[p + 1], winner: null });
  rounds.push(r0);
  var qtd = 8;
  for (var rr = 0; rr < 4; rr++) {
    var arr = [];
    for (var q = 0; q < qtd; q++) arr.push({ a: null, b: null, winner: null });
    rounds.push(arr);
    qtd = qtd / 2;
  }
  chaveCopa = { rounds: rounds, rodadaAtual: 0 };
}

// Adversário do seu jogo na rodada atual (match[0].b)
function getAdversarioChave() {
  if (!chaveCopa) return null;
  var jogo = chaveCopa.rounds[chaveCopa.rodadaAtual][0];
  return jogo && jogo.b ? jogo.b.clubeRef : null;
}

// Resolve a rodada atual: seu jogo pelo seu resultado; os outros simulados.
function avancarChaveCopa(meuGanhou) {
  if (!chaveCopa) return;
  var r = chaveCopa.rodadaAtual;
  var jogos = chaveCopa.rounds[r];
  jogos[0].winner = meuGanhou ? jogos[0].a : jogos[0].b;
  for (var i = 1; i < jogos.length; i++) resolverJogoChave(jogos[i]);

  if (r + 1 < chaveCopa.rounds.length) {
    var prox = chaveCopa.rounds[r + 1];
    for (var k = 0; k < prox.length; k++) {
      prox[k].a = jogos[2 * k].winner;
      prox[k].b = jogos[2 * k + 1].winner;
    }
  }
  chaveCopa.rodadaAtual = r + 1;
  if (!meuGanhou) simularRestoChave();   // você caiu → completa a chave p/ mostrar o campeão
}

// Resolve um confronto neutro por força + sorte (empate vai nos pênaltis = aleatório)
function resolverJogoChave(jogo) {
  if (!jogo || !jogo.a || !jogo.b) return;
  var pl = gerarPlacar(jogo.a.forca, jogo.b.forca);
  if (pl.meus > pl.adversario)      jogo.winner = jogo.a;
  else if (pl.adversario > pl.meus) jogo.winner = jogo.b;
  else                              jogo.winner = (Math.random() < 0.5 ? jogo.a : jogo.b);
}

// Após sua eliminação, simula as rodadas que faltam só para a chave ficar completa.
function simularRestoChave() {
  for (var r = chaveCopa.rodadaAtual; r < chaveCopa.rounds.length; r++) {
    var jogos = chaveCopa.rounds[r];
    jogos.forEach(resolverJogoChave);
    if (r + 1 < chaveCopa.rounds.length) {
      var prox = chaveCopa.rounds[r + 1];
      for (var k = 0; k < prox.length; k++) {
        prox[k].a = jogos[2 * k].winner;
        prox[k].b = jogos[2 * k + 1].winner;
      }
    }
  }
  chaveCopa.rodadaAtual = chaveCopa.rounds.length;
}

// Renderiza a chave no painel #chave-copa (colunas por fase, da esquerda p/ direita).
function renderChaveCopa() {
  var alvo = document.getElementById('chave-copa');
  if (!alvo || !chaveCopa) return;
  var nomesFase = ['16-AVOS', 'OITAVAS', 'QUARTAS', 'SEMI', 'FINAL'];

  function celula(time, ehVenc, jogoResolvido) {
    if (!time) return '<div class="ck-time ck-vazio">A definir</div>';
    var cls = 'ck-time' + (time.voce ? ' ck-voce' : '') + (jogoResolvido && ehVenc ? ' ck-venc' : '') + (jogoResolvido && !ehVenc ? ' ck-perd' : '');
    var esc = (typeof Escudos !== 'undefined' && Escudos.porTime)
      ? Escudos.porTime(time, modoSelecionado) : '';
    var escHTML = esc ? '<span class="ck-escudo">' + esc + '</span>' : '';
    return '<div class="' + cls + '">' + escHTML + '<span class="ck-nome">' + time.nome + '</span></div>';
  }

  var html = '';
  chaveCopa.rounds.forEach(function (jogos, idx) {
    html += '<div class="ck-col">';
    html += '<div class="ck-fase">' + nomesFase[idx] + '</div>';
    html += '<div class="ck-jogos">';   // só os jogos entram no espaçamento (alinha entre as fases)
    jogos.forEach(function (j) {
      var resolvido = !!j.winner;
      var aVenc = resolvido && j.winner === j.a;
      var bVenc = resolvido && j.winner === j.b;
      var meu = (j.a && j.a.voce) || (j.b && j.b.voce);
      html += '<div class="ck-jogo' + (meu ? ' ck-jogo-meu' : '') + '">' +
                celula(j.a, aVenc, resolvido) +
                celula(j.b, bVenc, resolvido) +
              '</div>';
    });
    html += '</div></div>';
  });

  // Coluna do campeão
  var ultima = chaveCopa.rounds[chaveCopa.rounds.length - 1][0];
  var campeao = ultima ? ultima.winner : null;
  html += '<div class="ck-col ck-col-campeao"><div class="ck-fase">CAMPEÃO</div>' +
          '<div class="ck-jogos ck-jogos-campeao"><div class="ck-campeao' + (campeao && campeao.voce ? ' ck-voce' : '') + '">' +
          '<span class="ck-trofeu">\u2605</span>' + (campeao ? campeao.nome : 'A definir') + '</div></div></div>';

  alvo.innerHTML = html;
}


// ─────────────────── "PULAR TUDO" DOS MATA-MATA (Liberta/Champions/Copa) ───────────────────
// Espelha o pularTudoBrasileirao: simula de uma vez a campanha que resta e cai no
// desfecho (campeão OU eliminado na fase X), reaproveitando os mesmos helpers de
// placar/estatística/flags e a chave da Copa.
//   • Grupos: sem pênaltis; elimina por classificação (top N avançam).
//   • Mata-mata: empate vai nos pênaltis, resolvidos na hora com leve vantagem por força.

// Sorteia autores/assistências dos SEUS gols e já contabiliza nas estatísticas.
function ptGolsMeus(jogadores, n) {
  var gols = [];
  for (var g = 0; g < n; g++) {
    var autor  = sortearPorPeso(jogadores, pesoGol, null);
    var assist = Math.random() < 0.70 ? sortearPorPeso(jogadores, pesoAssist, autor) : null;
    gols.push({ autor: autor, assist: assist });
    registrarStats(autor.nome, assist ? assist.nome : null);
  }
  return gols;
}

// Sorteia os autores dos gols do adversário (não entram nas suas estatísticas).
function ptGolsAdv(adversario, n) {
  var elenco = (adversario && adversario.jogadores) ? adversario.jogadores : [];
  var gols = [];
  for (var h = 0; h < n; h++) {
    gols.push({ autor: elenco.length > 0 ? sortearPorPeso(elenco, pesoGol, null) : null });
  }
  return gols;
}

// Flags de conquista + gols/partidas da campanha. (V/E/D fica no chamador: no grupo empate
// vale empate; no mata-mata o empate já virou vitória/derrota nos pênaltis.)
function ptAcumular(gMeus, gAdv, golsMeus) {
  if (typeof registrarFlagsDoJogo === 'function') {
    var gpj = {};
    golsMeus.forEach(function (e) {
      var nm = e.autor && e.autor.nome;
      if (nm) gpj[nm] = (gpj[nm] || 0) + 1;
    });
    registrarFlagsDoJogo(gpj, gMeus, gAdv);
  }
  campanhaGF += gMeus; campanhaGA += gAdv; campanhaPartidas++;
}

function pularTudoMata() {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (ehFormatoLiga(modoSelecionado)) return;      // liga tem o seu próprio pular tudo
  if (!COMPETICOES[modoSelecionado]) return;        // só nos modos de campanha

  // Interrompe uma partida em animação e remove o card incompleto (igual ao Brasileirão)
  var estavaRodando = (timerPartida !== null);
  if (estavaRodando) { clearTimeout(timerPartida); timerPartida = null; }
  if (!grupo) montarCampanha();
  if (estavaRodando) {
    var congelado = document.getElementById('partida-' + contadorPartidas);
    if (congelado) { congelado.parentNode.removeChild(congelado); contadorPartidas--; }
  }

  // A 1ª "partida" pulada revela o painel de artilheiros (como o iniciarPartida faz)
  var elStats = document.getElementById('stats-campanha');
  if (elStats) elStats.classList.remove('escondida');

  var jogadores   = escalacao.filter(function (j) { return j !== null; });
  var filtroComp  = COMPETICOES[modoSelecionado].dados;
  var isChampions = (modoSelecionado === 'champions');
  var isCopa      = (modoSelecionado === 'copa');

  // ─── FASE DE GRUPOS (se a campanha ainda estiver nela) ───
  var eliminadoNoGrupo = false;
  var faseIni = fasesCampanha[faseAtual];
  if (faseIni && faseIni.tipo === 'grupo' && grupo) {
    while (grupo.idxJogo < grupo.jogosVoce.length) {
      var ehUltimoG = (grupo.idxJogo === grupo.jogosVoce.length - 1);
      var advTeam   = grupo.tabela[grupo.jogosVoce[grupo.idxJogo]];
      var advClube  = advTeam.clubeRef;

      var pg     = gerarPlacar(grupo.tabela[0].forca, advTeam.forca, true);
      var gMeusG = ptGolsMeus(jogadores, pg.meus);
      var gAdvG  = ptGolsAdv(advClube, pg.adversario);
      registrarResultadoTabela(grupo.tabela[0], advTeam, pg.meus, pg.adversario);

      if (pg.meus > pg.adversario)      campanhaVitorias++;
      else if (pg.meus < pg.adversario) campanhaDerrotas++;
      else                              campanhaEmpates++;
      ptAcumular(pg.meus, pg.adversario, gMeusG);

      if (advClube) adversariosUsados.push(advClube.clube + '|' + advClube.edicao);
      criarCardMataInstantaneo(grupo.nome + ' \u00B7 Rodada ' + (grupo.idxJogo + 1),
                               advClube, pg.meus, pg.adversario, gMeusG, gAdvG, null);

      grupo.idxJogo++;
      if (!ehUltimoG) { faseAtual++; continue; }

      // Último jogo do grupo → classifica
      var ordenada = grupo.tabela.slice().sort(ordenarTabela);
      var posVoce = 1;
      for (var i = 0; i < ordenada.length; i++) { if (ordenada[i].voce) { posVoce = i + 1; break; } }
      if (posVoce <= grupo.avancam) {
        faseAtual++;                                 // entra no mata-mata
        if (isCopa && !chaveCopa) montarChaveCopa();
      } else {
        eliminadoNoGrupo = true;
      }
    }
  }

  if (eliminadoNoGrupo) {
    finalizarPularTudoMata(false, isChampions ? 'FASE DE LIGA' : 'FASE DE GRUPOS');
    return;
  }

  // ─── MATA-MATA ───
  var campeao = false, faseQueCaiu = null;
  while (faseAtual < fasesCampanha.length && fasesCampanha[faseAtual].tipo === 'mata') {
    var fase    = fasesCampanha[faseAtual];
    var ehFinal = (faseAtual === fasesCampanha.length - 1);

    var adversario;
    if (isCopa) {
      if (!chaveCopa) montarChaveCopa();
      adversario = getAdversarioChave();
    } else {
      var cands = API.getClubesPorCompeticao(filtroComp).filter(function (d) {
        return adversariosUsados.indexOf(d.clube + '|' + d.edicao) < 0;
      });
      if (cands.length === 0) cands = API.getClubesPorCompeticao(filtroComp);
      adversario = cands.length ? cands[Math.floor(Math.random() * cands.length)] : null;
    }
    if (!adversario) break;   // segurança: sem adversário, encerra o laço
    adversariosUsados.push(adversario.clube + '|' + adversario.edicao);

    var forcaAdv = forcaDoClube(adversario);
    var pm       = gerarPlacar(forcaDoTime(), forcaAdv, true);
    var gMeusM   = ptGolsMeus(jogadores, pm.meus);
    var gAdvM    = ptGolsAdv(adversario, pm.adversario);

    var meuGanhou, nosPenaltis = false;
    if (pm.meus > pm.adversario)      meuGanhou = true;
    else if (pm.adversario > pm.meus) meuGanhou = false;
    else {
      nosPenaltis = true;   // empate → pênaltis (leve vantagem por força, instantâneo)
      meuGanhou = (Math.random() < forcaDoTime() / (forcaDoTime() + forcaAdv));
    }

    if (meuGanhou) campanhaVitorias++; else campanhaDerrotas++;
    ptAcumular(pm.meus, pm.adversario, gMeusM);
    if (nosPenaltis && meuGanhou && typeof campanhaFlags !== 'undefined' && campanhaFlags) {
      campanhaFlags.matasNosPenaltis++;
      if (ehFinal) campanhaFlags.finalNosPenaltis = true;
    }

    criarCardMataInstantaneo(fase.nome, adversario, pm.meus, pm.adversario, gMeusM, gAdvM,
                             { meuGanhou: meuGanhou, penaltis: nosPenaltis });

    if (isCopa && typeof avancarChaveCopa === 'function') avancarChaveCopa(meuGanhou);

    if (!meuGanhou) { faseQueCaiu = fase.nome; break; }
    faseAtual++;
    if (ehFinal) { campeao = true; break; }
  }

  if (isCopa && typeof renderChaveCopa === 'function') renderChaveCopa();
  finalizarPularTudoMata(campeao, faseQueCaiu);
}

// Card colapsado de uma partida pulada, anexado ao fim (mata-mata é cronológico).
// resMata: null no grupo (=/✓/✗ pelo placar) | { meuGanhou, penaltis } no mata-mata.
function criarCardMataInstantaneo(faseNome, adversario, gMeus, gAdv, golsMeus, golsAdv, resMata) {
  var anterior = document.getElementById('partida-' + contadorPartidas);
  if (anterior) anterior.classList.remove('expandido');

  contadorPartidas++;
  var id = contadorPartidas;

  var venc, perd;
  if (resMata) { venc = resMata.meuGanhou; perd = !resMata.meuGanhou; }
  else { venc = gMeus > gAdv; perd = gMeus < gAdv; }
  var resCls = venc ? ' vitoria' : (perd ? ' derrota' : '');
  var mini   = venc ? '\u2713' : (perd ? '\u2717' : '=');

  // Eventos (seus gols + os do adversário) ordenados por minuto
  var eventos = [];
  golsMeus.forEach(function (e) { eventos.push({ lado: 'meu', autor: e.autor, assist: e.assist }); });
  golsAdv.forEach(function (e) { eventos.push({ lado: 'adv', autor: e.autor }); });
  var mins = distribuirMinutos(eventos.length);
  eventos = UI.shuffle(eventos);
  eventos.forEach(function (e, i) { e.minuto = mins[i]; });
  eventos.sort(function (a, b) { return a.minuto - b.minuto; });

  var nomeAdvClube = adversario ? adversario.clube : 'Advers\u00E1rio';
  var escudoHTML = (adversario && typeof Escudos !== 'undefined' && Escudos.porNomeSeModo)
    ? (function () { var s = Escudos.porNomeSeModo(adversario.clube, modoSelecionado); return s ? '<span class="partida-escudo">' + s + '</span>' : ''; })()
    : '';
  var eventosHtml = '';
  eventos.forEach(function (e) {
    if (e.lado === 'meu') {
      var hm = '&#9917; ' + e.minuto + '\' <strong>' + e.autor.nome + '</strong>';
      if (e.assist) hm += ' <span class="evento-assist">(assist.: ' + e.assist.nome + ')</span>';
      eventosHtml += '<div class="partida-evento evento-meu">' + hm + '</div>';
    } else {
      var nomeAdv = e.autor ? e.autor.nome : nomeAdvClube;
      var ha = e.minuto + '\' <strong>' + nomeAdv + '</strong>';
      if (e.autor) ha += ' <span class="evento-adv-clube">(' + nomeAdvClube + ')</span>';
      eventosHtml += '<div class="partida-evento evento-adv">' + ha + '</div>';
    }
  });
  if (!eventosHtml) eventosHtml = '<div class="partida-evento partida-sem-gols">Sem gols</div>';

  var penNota = (resMata && resMata.penaltis)
    ? '<div class="partida-evento partida-penaltis">Decidido nos p\u00EAnaltis \u00B7 ' + (venc ? 'voc\u00EA avan\u00E7ou' : 'voc\u00EA caiu') + '</div>'
    : '';

  var anoTxt = adversario ? (rotuloCompeticao(adversario.competicao) + ' \u00B7 ' + adversario.edicao) : '';

  var div = document.createElement('div');
  div.className = 'partida-card';   // começa colapsado
  div.id = 'partida-' + id;
  div.innerHTML =
    '<div class="partida-fase">' + faseNome + '</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + escudoHTML + nomeAdvClube + '</span>' +
        '<span class="partida-adversario-ano">' + anoTxt + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="partida-placar' + resCls + '">' + gMeus + ' \u2013 ' + gAdv + '</span>' +
        '<span class="partida-mini-res' + resCls + '">' + mini + '</span>' +
        '<button class="partida-toggle-btn" type="button">\u25B4</button>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="partida-eventos">' + eventosHtml + penNota + '</div>' +
    '</div>';

  div.querySelector('.partida-header').addEventListener('click', function () { toggleCard(id); });
  var hist = document.getElementById('historico-jogos');
  if (hist) hist.appendChild(div);   // mata-mata: cronológico (mais recente embaixo)
}

// Card de encerramento da campanha de mata-mata (campeão ou eliminado na fase X).
function criarCardFinalMata(campeao, faseQueCaiu) {
  var anterior = document.getElementById('partida-' + contadorPartidas);
  if (anterior) anterior.classList.remove('expandido');

  contadorPartidas++;
  var id = contadorPartidas;

  var comp    = (COMPETICOES[modoSelecionado] && COMPETICOES[modoSelecionado].label) || 'Campanha';
  var titulo  = campeao ? '\u2605 Campe\u00E3o!' : 'Eliminado';
  var sub     = campeao ? (comp + ' \u00B7 conclu\u00EDda') : (comp + ' \u00B7 ' + (faseQueCaiu || 'fim da campanha'));
  var mini    = campeao ? '\u2605' : '\u2717';
  var miniCls = campeao ? ' vitoria' : ' derrota';

  var div = document.createElement('div');
  div.className = 'partida-card expandido';
  div.id = 'partida-' + id;
  div.innerHTML =
    '<div class="partida-fase">CAMPANHA CONCLU\u00CDDA</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + titulo + '</span>' +
        '<span class="partida-adversario-ano">' + sub + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="partida-mini-res' + miniCls + '">' + mini + '</span>' +
      '</div>' +
    '</div>';

  var hist = document.getElementById('historico-jogos');
  if (hist) hist.appendChild(div);
}

// Desfecho comum: card final, trava a fase no fim, ajusta o botão e revela o resumo.
function finalizarPularTudoMata(campeao, faseQueCaiu) {
  criarCardFinalMata(campeao, faseQueCaiu);
  faseAtual = fasesCampanha.length - 1;

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) {
    if (campeao) { btn.textContent = 'Nova Campanha';         acaoBotao = 'nova-campanha'; }
    else         { btn.textContent = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; }
    btn.disabled = false;
  }
  if (btnPularTudo) btnPularTudo.classList.add('escondida');
  mostrarBotaoResumo(campeao);
}
