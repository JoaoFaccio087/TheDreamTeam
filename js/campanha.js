// campanha.js — fluxo da campanha: grupos, tabela e mata-mata.

var chaveCopa = null;   // chave (organograma) do mata-mata da Copa do Mundo

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

  var stats = document.getElementById('stats-campanha');
  if (stats) stats.classList.remove('escondida'); // a 1ª partida revela as estatísticas

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
