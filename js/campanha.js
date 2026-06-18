//  campanha.js — fluxo da campanha: grupos, tabela e mata-mata



// --- Zera a campanha: fases, adversários usados, estatísticas e histórico visual ---
function reiniciarCampanha() {
  faseAtual         = 0;
  adversariosUsados = [];
  grupo             = null;
  liga              = null;
  statsJogadores    = {};
  campanhaPartidas  = 0;
  campanhaGF        = 0;
  campanhaGA        = 0;
  campanhaVitorias  = 0;
  campanhaEmpates   = 0;
  campanhaDerrotas  = 0;
  resumoCampeao     = false;
  if (btnResumo) btnResumo.classList.add('escondida'); // some até a próxima campanha terminar
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

  // Brasileirão: liga de 20 times em 38 rodadas (sem fase de grupos/mata-mata)
  if (modoSelecionado === 'brasileirao') {
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
  var pool = API.getClubesPorCompeticao(comp).slice();
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
  }
  var outros = pool.slice(0, tamGrupo - 1);

  var tabela = [{ nome: nomeDoTime, voce: true, forca: forcaDoTime(), pts: 0, gf: 0, ga: 0, clubeRef: null }];
  outros.forEach(function (c) {
    tabela.push({ nome: c.clube + ' ' + c.edicao, voce: false, forca: forcaDoClube(c), pts: 0, gf: 0, ga: 0, clubeRef: c });
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
    linhas +=
      '<tr class="' + cls + '">' +
        '<td class="grupo-pos">' + (i + 1) + '</td>' +
        '<td class="grupo-time">' + t.nome + '</td>' +
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

// --- Conclui um jogo da fase de grupos (sem pênaltis; empate é empate; não elimina) ---
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
  renderTabelaGrupo(est.id, ordenada);

  var elRes = document.getElementById('presultado-' + est.id);
  if (posVoce <= grupo.avancam) {
    if (elRes) { elRes.textContent = '✓ CLASSIFICADO — ' + posVoce + 'º no grupo'; elRes.className = 'partida-resultado vitoria'; }
    faseAtual++; // entra no mata-mata (oitavas)
    btn.textContent = 'Próximo Jogo ►';
    acaoBotao = 'proximo';
    btn.disabled = false;
    if (modoSimulacao === 'automatico') {
      btn.disabled = true;
      setTimeout(function () { btn.disabled = false; iniciarPartida(); }, 1500);
    }
  } else {
    if (elRes) { elRes.textContent = '✕ ELIMINADO NA FASE DE GRUPOS — ' + posVoce + 'º'; elRes.className = 'partida-resultado derrota'; }
    btn.textContent = 'Montar Novo Time ►';
    acaoBotao = 'novo-time';
    btn.disabled = false;
    mostrarBotaoResumo(false);  // eliminado no grupo → botão de resumo da campanha
  }
}


// --- Ponto de entrada: sorteia adversário e dispara a simulação ---
function iniciarPartida() {
  if (timerPartida !== null) return; // já tem uma partida rodando

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
    // Mata-mata: sorteia adversário da competição, sem repetir os já enfrentados
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

  // Embaralha a atribuição meu/adv mantendo os minutos ordenados (Fisher-Yates)
  var attrs = [];
  for (var a = 0; a < placar.meus; a++)       attrs.push('meu');
  for (var a = 0; a < placar.adversario; a++) attrs.push('adv');
  for (var x = attrs.length - 1; x > 0; x--) {
    var y = Math.floor(Math.random() * (x + 1));
    var tmp = attrs[x]; attrs[x] = attrs[y]; attrs[y] = tmp;
  }

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
    minuto:     0
  };

  document.getElementById('btn-iniciar-jogo').disabled = true;
  timerPartida = setTimeout(function() { tickPartida(est); }, cadenciaAtual());
}


