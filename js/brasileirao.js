// brasileirao.js — campanha em formato de LIGA (pontos corridos).
// 20 times (você + 19 sorteados), 38 rodadas (returno duplo), sem eliminação; o
// título é o 1º lugar. Reaproveita o motor de partida; aqui ficam a montagem da
// liga, a resolução dos jogos de bastidores, a tabela e o "Pular tudo".


// MONTAGEM DA LIGA -------------------------------------------------------------

// Calendário de returno duplo (método do círculo): n times → (n-1)*2 rodadas,
// cada time joga 1 vez por rodada. Índices 0..n-1 (0 = você).
function gerarCalendarioLiga(n) {
  var idx = [];
  for (var i = 0; i < n; i++) idx.push(i);

  var arr   = idx.slice(1); // parte que gira (mantém o time 0 fixo)
  var half  = n / 2;
  var turno = [];

  for (var r = 0; r < n - 1; r++) {
    var fila = [idx[0]].concat(arr); // n elementos
    var rodada = [];
    for (var k = 0; k < half; k++) {
      var a = fila[k], b = fila[n - 1 - k];
      rodada.push(r % 2 === 0 ? [a, b] : [b, a]);
    }
    turno.push(rodada);
    arr.unshift(arr.pop()); // rotaciona
  }

  // Returno: mesmos confrontos com o mando invertido
  var returno = turno.map(function (rodada) {
    return rodada.map(function (par) { return [par[1], par[0]]; });
  });

  return turno.concat(returno);
}

// Monta a liga: você + 19 clubes sorteados do Brasileirão, tabela zerada.
function montarLigaBrasileirao() {
  var comp = COMPETICOES.brasileirao.dados;
  var pool = UI.shuffle(API.getClubesPorCompeticao(comp));
  var outros = pool.slice(0, 19);

  var tabela = [{
    nome: nomeDoTime, voce: true, forca: forcaDoTime(), clubeRef: null,
    pts: 0, j: 0, v: 0, e: 0, d: 0, gf: 0, ga: 0
  }];
  outros.forEach(function (c) {
    tabela.push({
      nome: c.clube + ' ' + c.edicao, voce: false, forca: forcaDoClube(c), clubeRef: c,
      pts: 0, j: 0, v: 0, e: 0, d: 0, gf: 0, ga: 0
    });
  });

  liga = { tabela: tabela, calendario: gerarCalendarioLiga(20), rodadaAtual: 0 };
  renderTabelaBrasileirao();
}


// TABELA E RESULTADOS ----------------------------------------------------------

// Registra um jogo na tabela (J, V/E/D, GF, GS e pontos dos dois times).
function registrarResultadoLiga(A, B, golsA, golsB) {
  A.j++; B.j++;
  A.gf += golsA; A.ga += golsB;
  B.gf += golsB; B.ga += golsA;
  if (golsA > golsB)      { A.pts += 3; A.v++; B.d++; }
  else if (golsB > golsA) { B.pts += 3; B.v++; A.d++; }
  else                    { A.pts++;  B.pts++; A.e++; B.e++; }
}

// Ordena: pontos → saldo → gols feitos → vitórias.
function ordenarLiga(a, b) {
  if (b.pts !== a.pts) return b.pts - a.pts;
  var sa = a.gf - a.ga, sb = b.gf - b.ga;
  if (sb !== sa) return sb - sa;
  if (b.gf !== a.gf) return b.gf - a.gf;
  return b.v - a.v;
}

// Encontra o índice do seu adversário numa rodada do calendário.
function confrontoSeu(rIdx) {
  var rodada = liga.calendario[rIdx];
  for (var i = 0; i < rodada.length; i++) {
    if (rodada[i][0] === 0) return { advIdx: rodada[i][1] };
    if (rodada[i][1] === 0) return { advIdx: rodada[i][0] };
  }
  return null;
}

// Resolve (placar instantâneo) os demais jogos da rodada — os que não são seus.
function resolverDemaisJogos(rIdx) {
  var rodada = liga.calendario[rIdx];
  rodada.forEach(function (par) {
    if (par[0] === 0 || par[1] === 0) return; // seu jogo é tratado à parte
    var A = liga.tabela[par[0]], B = liga.tabela[par[1]];
    var p = gerarPlacar(A.forca, B.forca, false);
    registrarResultadoLiga(A, B, p.meus, p.adversario);
  });
}

// Desenha a Tabela do Brasileirão (20 times) na coluna da esquerda.
// HTML do escudo de um clube (20px), para a tabela. Usa a API única Escudos.porNome (decide
// clube/seleção e já tem guarda). Devolve '' se os módulos não estiverem carregados.
function escudoClubeHTML(nome) {
  if (typeof Escudos === 'undefined' || !Escudos.porNome) return '';
  var svg = Escudos.porNome(nome);
  return svg ? '<span class="tb-escudo">' + svg + '</span>' : '';
}

function renderTabelaBrasileirao() {
  if (!tabelaBrasileiraoCorpo || !liga) return;
  var ordenada = liga.tabela.slice().sort(ordenarLiga);

  var html = '';
  ordenada.forEach(function (t, i) {
    var sg  = (t.gf - t.ga >= 0 ? '+' : '') + (t.gf - t.ga);
    var cls = (t.voce ? 'tb-voce' : '') + (i < 4 ? ' tb-g4' : (i >= 16 ? ' tb-z4' : ''));
    html +=
      '<tr class="' + cls + '">' +
        '<td class="tb-pos">' + (i + 1) + '</td>' +
        '<td class="tb-time">' + escudoClubeHTML(t.nome) + '<span class="tb-nome">' + t.nome + '</span></td>' +
        '<td class="tb-pts">' + t.pts + '</td>' +
        '<td>' + t.j + '</td><td>' + t.v + '</td><td>' + t.e + '</td><td>' + t.d + '</td>' +
        '<td>' + t.gf + '</td><td>' + t.ga + '</td><td>' + sg + '</td>' +
      '</tr>';
  });
  tabelaBrasileiraoCorpo.innerHTML = html;
}


// FLUXO DA RODADA --------------------------------------------------------------

// Conclui a rodada após a SUA partida (chamado por encerrarPartida no modo liga).
function concluirRodadaBrasileirao(est) {
  var rIdx = liga.rodadaAtual;
  var conf = confrontoSeu(rIdx);
  var advTeam = liga.tabela[conf.advIdx];

  // Seu resultado entra na tabela
  registrarResultadoLiga(liga.tabela[0], advTeam, est.gMeus, est.gAdv);

  var venc = est.gMeus > est.gAdv, perd = est.gMeus < est.gAdv;
  if (venc) campanhaVitorias++; else if (perd) campanhaDerrotas++; else campanhaEmpates++;

  var elMini = document.getElementById('pmres-' + est.id);
  if (elMini) {
    elMini.textContent = venc ? '✓' : (perd ? '✗' : '=');
    elMini.className = 'partida-mini-res' + (venc ? ' vitoria' : (perd ? ' derrota' : ''));
  }

  // Demais jogos da rodada + atualização da tabela
  resolverDemaisJogos(rIdx);
  renderTabelaBrasileirao();

  var btn = document.getElementById('btn-iniciar-jogo');
  var ehUltima = (rIdx >= liga.calendario.length - 1);

  if (!ehUltima) {
    liga.rodadaAtual++;
    faseAtual++;
    btn.textContent = 'Próxima Rodada ►';
    acaoBotao = 'proximo';
    btn.disabled = false;
    if (modoSimulacao === 'automatico') {
      btn.disabled = true;
      setTimeout(function () { btn.disabled = false; iniciarPartida(); }, 1200);
    }
  } else {
    finalizarBrasileirao(est.id);
  }
}

// Define a posição final e o resultado do card encerrado da temporada.
function finalizarBrasileirao(idCard) {
  var pos = posicaoNaTabela();
  var campeao = (pos === 1);

  var elRes = document.getElementById('presultado-' + idCard);
  if (elRes) {
    if (campeao) { elRes.textContent = '★ CAMPEÃO BRASILEIRO!'; elRes.className = 'partida-resultado vitoria'; }
    else { elRes.textContent = pos + 'º lugar — fim de temporada'; elRes.className = 'partida-resultado' + (pos <= 4 ? ' vitoria' : ''); }
    elRes.classList.remove('escondida');
  }

  var btn = document.getElementById('btn-iniciar-jogo');
  btn.textContent = 'Nova Campanha';
  acaoBotao = 'nova-campanha';
  btn.disabled = false;
  if (btnPularTudo) btnPularTudo.classList.add('escondida');
  mostrarBotaoResumo(campeao);
}

// Posição (1..20) do seu time na tabela ordenada.
function posicaoNaTabela() {
  var ordenada = liga.tabela.slice().sort(ordenarLiga);
  for (var i = 0; i < ordenada.length; i++) {
    if (ordenada[i].voce) return i + 1;
  }
  return 20;
}


// PULAR TUDO -------------------------------------------------------------------

// Simula todas as rodadas restantes (com gols atribuídos aos jogadores e card por
// rodada) e vai para o resultado final.
function pularTudoBrasileirao() {
  if (modoSelecionado !== 'brasileirao') return;

  // Se uma partida estava animando, interrompe e remove o card incompleto dela
  var estavaRodando = (timerPartida !== null);
  if (estavaRodando) { clearTimeout(timerPartida); timerPartida = null; }
  if (!liga) montarCampanha();
  if (estavaRodando) {
    var congelado = document.getElementById('partida-' + contadorPartidas);
    if (congelado) { congelado.parentNode.removeChild(congelado); contadorPartidas--; }
  }

  var jogadores = escalacao.filter(function (j) { return j !== null; });

  while (liga.rodadaAtual < liga.calendario.length) {
    var rIdx = liga.rodadaAtual;
    var conf = confrontoSeu(rIdx);
    var advTeam = liga.tabela[conf.advIdx];
    var adversario = advTeam.clubeRef;

    var p = gerarPlacar(liga.tabela[0].forca, advTeam.forca, true);

    // Gols do seu time: sorteia autor + assistente e CONTABILIZA nas estatísticas
    var golsTime = [];
    for (var g = 0; g < p.meus; g++) {
      var autor  = sortearPorPeso(jogadores, pesoGol, null);
      var assist = Math.random() < 0.70 ? sortearPorPeso(jogadores, pesoAssist, autor) : null;
      golsTime.push({ autor: autor, assist: assist });
      registrarStats(autor.nome, assist ? assist.nome : null);
    }

    // Gols do adversário: sorteia pelo elenco dele (sem entrar nas suas estatísticas)
    var jogadoresAdv = (adversario && adversario.jogadores) ? adversario.jogadores : [];
    var golsAdv = [];
    for (var h = 0; h < p.adversario; h++) {
      var autorAdv = jogadoresAdv.length > 0 ? sortearPorPeso(jogadoresAdv, pesoGol, null) : null;
      golsAdv.push({ autor: autorAdv });
    }

    registrarResultadoLiga(liga.tabela[0], advTeam, p.meus, p.adversario);

    // Flags de conquista deste jogo (hat-trick/pôquer/massacre/show de bola) — mesmo
    // no "pular tudo", que não passa por encerrarPartida.
    if (typeof registrarFlagsDoJogo === 'function') {
      var gpjRodada = {};
      for (var gi = 0; gi < golsTime.length; gi++) {
        var nmA = golsTime[gi].autor && golsTime[gi].autor.nome;
        if (nmA) gpjRodada[nmA] = (gpjRodada[nmA] || 0) + 1;
      }
      registrarFlagsDoJogo(gpjRodada, p.meus, p.adversario);
    }

    var venc = p.meus > p.adversario, perd = p.meus < p.adversario;
    if (venc) campanhaVitorias++; else if (perd) campanhaDerrotas++; else campanhaEmpates++;
    campanhaGF += p.meus; campanhaGA += p.adversario; campanhaPartidas++;

    // Histórico: card da rodada (colapsado) com placar e quem marcou
    criarCardLigaInstantaneo(rIdx + 1, adversario, p.meus, p.adversario, golsTime, golsAdv);

    resolverDemaisJogos(rIdx);
    liga.rodadaAtual++;
  }

  renderTabelaBrasileirao();

  var pos = posicaoNaTabela();
  criarCardFinalBrasileirao(pos, pos === 1);

  faseAtual = fasesCampanha.length - 1;
  var btn = document.getElementById('btn-iniciar-jogo');
  btn.textContent = 'Nova Campanha';
  acaoBotao = 'nova-campanha';
  btn.disabled = false;
  if (btnPularTudo) btnPularTudo.classList.add('escondida');
  mostrarBotaoResumo(pos === 1);
}

// Card de uma rodada simulada instantaneamente (colapsado): placar + gols.
function criarCardLigaInstantaneo(rodadaNum, adversario, gMeus, gAdv, golsTime, golsAdv) {
  var anterior = document.getElementById('partida-' + contadorPartidas);
  if (anterior) anterior.classList.remove('expandido');

  contadorPartidas++;
  var id = contadorPartidas;
  var venc = gMeus > gAdv, perd = gMeus < gAdv;

  // Eventos ordenados por minuto (mistura seus gols e os do adversário)
  var eventos = [];
  golsTime.forEach(function (e) { eventos.push({ lado: 'meu', autor: e.autor, assist: e.assist }); });
  golsAdv.forEach(function (e) { eventos.push({ lado: 'adv', autor: e.autor }); });
  var mins = distribuirMinutos(eventos.length);
  eventos = UI.shuffle(eventos);
  eventos.forEach(function (e, i) { e.minuto = mins[i]; });
  eventos.sort(function (a, b) { return a.minuto - b.minuto; });

  var eventosHtml = '';
  eventos.forEach(function (e) {
    if (e.lado === 'meu') {
      var hm = '&#9917; ' + e.minuto + '\' <strong>' + e.autor.nome + '</strong>';
      if (e.assist) hm += ' <span class="evento-assist">(assist.: ' + e.assist.nome + ')</span>';
      eventosHtml += '<div class="partida-evento evento-meu">' + hm + '</div>';
    } else {
      var nomeAdv = e.autor ? e.autor.nome : adversario.clube;
      var ha = e.minuto + '\' <strong>' + nomeAdv + '</strong>';
      if (e.autor) ha += ' <span class="evento-adv-clube">(' + adversario.clube + ')</span>';
      eventosHtml += '<div class="partida-evento evento-adv">' + ha + '</div>';
    }
  });
  if (!eventosHtml) eventosHtml = '<div class="partida-evento partida-sem-gols">Sem gols</div>';

  var resCls = venc ? ' vitoria' : (perd ? ' derrota' : '');
  var div = document.createElement('div');
  div.className = 'partida-card';   // começa colapsado (são muitos jogos)
  div.id = 'partida-' + id;
  div.innerHTML =
    '<div class="partida-fase">Rodada ' + rodadaNum + ' \u00B7 Brasileir\u00E3o</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + adversario.clube + '</span>' +
        '<span class="partida-adversario-ano">' + rotuloCompeticao(adversario.competicao) + ' \u00B7 ' + adversario.edicao + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="partida-placar' + resCls + '">' + gMeus + ' \u2013 ' + gAdv + '</span>' +
        '<span class="partida-mini-res' + resCls + '">' + (venc ? '\u2713' : (perd ? '\u2717' : '=')) + '</span>' +
        '<button class="partida-toggle-btn" type="button">\u25B4</button>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="partida-eventos">' + eventosHtml + '</div>' +
    '</div>';

  div.querySelector('.partida-header').addEventListener('click', function () { toggleCard(id); });
  var hist = document.getElementById('historico-jogos');
  if (hist) hist.insertBefore(div, hist.firstChild); // mais recente no topo
}

// Card de encerramento da temporada (usado pelo "Pular tudo").
function criarCardFinalBrasileirao(pos, campeao) {
  // Recolhe o card anterior, se houver
  var anterior = document.getElementById('partida-' + contadorPartidas);
  if (anterior) anterior.classList.remove('expandido');

  contadorPartidas++;
  var id = contadorPartidas;

  var div = document.createElement('div');
  div.className = 'partida-card expandido';
  div.id = 'partida-' + id;
  div.innerHTML =
    '<div class="partida-fase">TEMPORADA CONCLU\u00CDDA</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + (campeao ? '\u2605 Campe\u00E3o!' : pos + '\u00BA lugar') + '</span>' +
        '<span class="partida-adversario-ano">Brasileir\u00E3o \u00B7 38 rodadas</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="partida-mini-res' + (campeao ? ' vitoria' : '') + '">' + (campeao ? '\u2605' : pos + '\u00BA') + '</span>' +
      '</div>' +
    '</div>';

  var hist = document.getElementById('historico-jogos');
  if (hist) hist.insertBefore(div, hist.firstChild); // mais recente no topo
}


// CONFIGURAÇÃO DA TELA / MODAL --------------------------------------------------

// Mostra/esconde os elementos exclusivos do Brasileirão ao entrar na simulação.
function configurarTelaSimulacao() {
  var ehBrasileirao = (modoSelecionado === 'brasileirao');
  if (tabelaBrasileirao) tabelaBrasileirao.classList.toggle('escondida', !ehBrasileirao);
  if (btnPularTudo)      btnPularTudo.classList.toggle('escondida', !ehBrasileirao);

  if (ehBrasileirao) {
    montarCampanha();          // já monta a liga e mostra a tabela (20 times, zerada)
    renderTabelaBrasileirao();
  }

  // Copa do Mundo: mostra as abas "Simulação" / "Mata-a-Mata"
  var ehCopa  = (modoSelecionado === 'copa');
  var simTabs = document.getElementById('sim-tabs');
  if (simTabs) simTabs.classList.toggle('escondida', !ehCopa);
  selecionarAbaSim('jogos');   // sempre começa na aba de jogos
}

// Alterna entre a aba de Simulação (jogos) e a de Mata-a-Mata (chave)
function selecionarAbaSim(qual) {
  var painelJogos = document.getElementById('sim-painel-jogos');
  var painelChave = document.getElementById('chave-copa');
  var tabJogos    = document.getElementById('sim-tab-jogos');
  var tabChave    = document.getElementById('sim-tab-chave');
  var ehChave = (qual === 'chave');

  if (painelJogos) painelJogos.classList.toggle('escondida', ehChave);
  if (painelChave) painelChave.classList.toggle('escondida', !ehChave);
  if (tabJogos) tabJogos.classList.toggle('sim-tab-ativa', !ehChave);
  if (tabChave) tabChave.classList.toggle('sim-tab-ativa', ehChave);

  if (ehChave) {
    if (typeof chaveCopa !== 'undefined' && chaveCopa && typeof renderChaveCopa === 'function') {
      renderChaveCopa();
    } else if (painelChave) {
      painelChave.innerHTML = '<p class="chave-aviso">A chave do mata-mata aparece aqui quando a fase de grupos terminar.</p>';
    }
  }
}
