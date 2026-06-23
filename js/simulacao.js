// simulacao.js — motor da partida: placar, gols, pênaltis e cards.

// --- Cadência em ms por minuto de jogo, lida ao vivo em cada tick ---
function cadenciaAtual() {
  if (velocidadeSimulacao === 'lento')  return 130;
  if (velocidadeSimulacao === 'rapida') return 45;
  return 80; // normal
}

// Cadência das cobranças de pênalti (mais lenta que o relógio, p/ suspense). Lida a
// cada cobrança, então mudar a velocidade no meio já vale na cobrança seguinte.
function cadenciaPenalti() {
  if (velocidadeSimulacao === 'lento')  return 1500;
  if (velocidadeSimulacao === 'rapida') return 650;
  return 1000; // normal
}

// --- Peso de gol de um jogador: atacantes > meias > volantes > defensores ---
function pesoGol(jogador) {
  var pos = jogador.posicoes;
  var base;
  if      (pos.some(function(p) { return ['ATA','PE','PD'].indexOf(p) >= 0; }))       base = 10;
  else if (pos.some(function(p) { return ['MEI','MC','ME','MD'].indexOf(p) >= 0; }))  base = 5;
  else if (pos.some(function(p) { return ['VOL'].indexOf(p) >= 0; }))                 base = 2;
  else if (pos.some(function(p) { return ['LD','LE','ZAG'].indexOf(p) >= 0; }))       base = 1;
  else                                                                                  base = 0.1; // GOL
  return base * (jogador.forca / 80); // mais forte → mais provável
}

// --- Peso de assistência: meias têm prioridade, depois atacantes ---
function pesoAssist(jogador) {
  var pos = jogador.posicoes;
  if (pos.some(function(p) { return ['MEI','ME','MD'].indexOf(p) >= 0; }))        return 9;
  if (pos.some(function(p) { return ['ATA','PE','PD','MC'].indexOf(p) >= 0; }))   return 6;
  if (pos.some(function(p) { return ['VOL'].indexOf(p) >= 0; }))                  return 2;
  if (pos.some(function(p) { return ['LD','LE','ZAG'].indexOf(p) >= 0; }))        return 1;
  return 0.1;
}

// --- Sorteio ponderado: escolhe 1 jogador da lista excluindo "excluido" ---
function sortearPorPeso(lista, fnPeso, excluido) {
  var cands = lista.filter(function(j) { return j && j !== excluido; });
  var pesos = cands.map(fnPeso);
  var total = pesos.reduce(function(s, p) { return s + p; }, 0);
  var r = Math.random() * total, acum = 0;
  for (var i = 0; i < cands.length; i++) {
    acum += pesos[i];
    if (r <= acum) return cands[i];
  }
  return cands[cands.length - 1];
}

// --- Distribuição de Poisson (algoritmo de Knuth) para número de gols ---
function sortearPoisson(lambda) {
  var L = Math.exp(-lambda), k = 0, p = 1;
  do { k++; p *= Math.random(); } while (p > L);
  return k - 1;
}

// --- Força média do meu time escalado ---
function forcaDoTime() {
  var soma = 0, n = 0;
  for (var i = 0; i < 11; i++) {
    if (escalacao[i]) { soma += escalacao[i].forca; n++; }
  }
  return n > 0 ? soma / n : 70;
}

// --- Força média de um clube vindo do DADOS ---
function forcaDoClube(entrada) {
  var jj = entrada.jogadores;
  if (!jj || jj.length === 0) return 70;
  return jj.reduce(function(s, j) { return s + j.forca; }, 0) / jj.length;
}

// --- Gera o placar esperado com base nas forças + aleatoriedade (zebra possível) ---
function gerarPlacar(forcaMinha, forcaAdv, ehMeuJogo) {
  // --- Ajustes de equilíbrio (mexa nestes 3 números para calibrar a dificuldade) ---
  var BASE      = 1.30;  // gols esperados num jogo equilibrado (cada lado)
  var POR_PONTO = 0.05;  // quanto cada ponto de diferença de força vale em gols
  var MANDO     = 0.25;  // vantagem fixa do SEU time (protagonista / mando de campo)

  // A vantagem de mando vale só nos jogos do jogador (não nos jogos de bastidores)
  var mando   = ehMeuJogo ? MANDO : 0;
  var swing   = (forcaMinha - forcaAdv) * POR_PONTO;
  var expMeus = Math.max(0.20, BASE + mando + swing);
  var expAdv  = Math.max(0.20, BASE - swing);
  return { meus: sortearPoisson(expMeus), adversario: sortearPoisson(expAdv) };
}

// --- Distribui gols em minutos únicos e crescentes (1–90) ---
function distribuirMinutos(total) {
  var mins = [];
  while (mins.length < total) {
    var m = Math.floor(Math.random() * 90) + 1;
    if (mins.indexOf(m) < 0) mins.push(m);
  }
  return mins.sort(function(a, b) { return a - b; });
}

// --- Registra gol/assistência e reconstrói a tabela de estatísticas ---
function registrarStats(nomeGol, nomeAssist) {
  if (nomeGol) {
    if (!statsJogadores[nomeGol]) statsJogadores[nomeGol] = { gols: 0, asis: 0 };
    statsJogadores[nomeGol].gols++;
  }
  if (nomeAssist) {
    if (!statsJogadores[nomeAssist]) statsJogadores[nomeAssist] = { gols: 0, asis: 0 };
    statsJogadores[nomeAssist].asis++;
  }

  // Converte em array, ordena por gols (depois por assistências) e reconstrói o tbody
  var lista = Object.keys(statsJogadores).map(function(nome) {
    return { nome: nome, gols: statsJogadores[nome].gols, asis: statsJogadores[nome].asis };
  }).sort(function(a, b) {
    return b.gols !== a.gols ? b.gols - a.gols : b.asis - a.asis;
  });

  var corpo = document.getElementById('stats-campanha-corpo');
  if (!corpo) return;
  corpo.innerHTML = '';
  lista.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + item.nome + '</td>' +
      '<td>' + item.gols + '</td>' +
      '<td>' + item.asis + '</td>';
    corpo.appendChild(tr);
  });
}

// --- Expande ou recolhe um card de partida (clique no cabeçalho) ---
function toggleCard(id) {
  var card = document.getElementById('partida-' + id);
  if (!card) return;
  card.classList.toggle('expandido');
  // Atualiza a seta do botão de acordo com o estado atual
  var btn = card.querySelector('.partida-toggle-btn');
  if (btn) btn.textContent = card.classList.contains('expandido') ? '▾' : '▴';
}

// --- Cria o card HTML de uma partida e adiciona ao FINAL do histórico ---
function criarCardPartida(id, adversario, fase) {
  // Recolhe o card anterior antes de abrir o novo
  if (id > 1) {
    var anterior = document.getElementById('partida-' + (id - 1));
    if (anterior) {
      anterior.classList.remove('expandido');
      var btnAnt = anterior.querySelector('.partida-toggle-btn');
      if (btnAnt) btnAnt.textContent = '▴';
    }
  }

  var div = document.createElement('div');
  div.className = 'partida-card expandido';
  div.id        = 'partida-' + id;

  div.innerHTML =
    '<div class="partida-fase">' + fase + '</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + adversario.clube + '</span>' +
        '<span class="partida-adversario-ano">' + rotuloCompeticao(adversario.competicao) + ' \xB7 ' + adversario.edicao + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="partida-placar" id="pplacar-' + id + '">0 – 0</span>' +
        '<span class="partida-relogio" id="prelogio-' + id + '">0\'</span>' +
        '<span class="partida-mini-res" id="pmres-' + id + '"></span>' +
        '<button class="partida-toggle-btn" type="button">▾</button>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="partida-eventos" id="peventos-' + id + '"></div>' +
      '<div class="partida-resultado escondida" id="presultado-' + id + '"></div>' +
    '</div>';

  // Clique no cabeçalho abre/fecha o card
  div.querySelector('.partida-header').addEventListener('click', function() {
    toggleCard(id);
  });

  var hist = document.getElementById('historico-jogos');
  if (modoSelecionado === 'brasileirao') {
    hist.insertBefore(div, hist.firstChild); // Brasileirão: mais recente no topo
  } else {
    hist.appendChild(div);                   // mata-mata: cronológico (mais recente embaixo)
  }
}

// --- Adiciona uma linha de evento (gol, pênaltis) ao card ---
function adicionarEventoCard(id, html, classeExtra) {
  var el = document.getElementById('peventos-' + id);
  if (!el) return;
  var linha = document.createElement('div');
  linha.className = 'partida-evento' + (classeExtra ? ' ' + classeExtra : '');
  linha.innerHTML = html;
  el.appendChild(linha);
}

// --- Tick da partida: avança 1 minuto, processa gols e agenda o próximo tick ---
// setTimeout recursivo (não setInterval) p/ ler a cadência a cada chamada — mudar a
// velocidade no meio do jogo vale já no próximo tick.
function tickPartida(est) {
  est.minuto++;

  // Atualiza relógio
  var elRel = document.getElementById('prelogio-' + est.id);
  if (elRel) elRel.textContent = est.minuto + '\'';

  // Processa todos os gols que caem neste minuto
  while (est.idx < est.fila.length && est.fila[est.idx].minuto === est.minuto) {
    var ev = est.fila[est.idx];

    if (ev.lado === 'meu') {
      est.gMeus++;
      var html = '&#9917; ' + est.minuto + '\' <strong>' + ev.autor.nome + '</strong>';
      if (ev.assist) {
        html += ' <span class="evento-assist">(assist.: ' + ev.assist.nome + ')</span>';
      }
      adicionarEventoCard(est.id, html, 'evento-meu');
      registrarStats(ev.autor.nome, ev.assist ? ev.assist.nome : null);
    } else {
      est.gAdv++;
      // Mostra o autor do gol adversário + nome do clube menor ao lado
      var nomeAutAdv = ev.autorAdv ? ev.autorAdv.nome : ev.adversario.clube;
      var htmlAdv    = est.minuto + '\' <strong>' + nomeAutAdv + '</strong>';
      if (ev.autorAdv) {
        htmlAdv += ' <span class="evento-adv-clube">(' + ev.adversario.clube + ')</span>';
      }
      adicionarEventoCard(est.id, htmlAdv, 'evento-adv');
    }

    // Atualiza placar no card imediatamente após o gol
    var elPlacar = document.getElementById('pplacar-' + est.id);
    if (elPlacar) elPlacar.textContent = est.gMeus + ' – ' + est.gAdv;

    est.idx++;
  }

  if (est.minuto >= 90) {
    encerrarPartida(est);
    return;
  }

  // Agenda próximo tick com a cadência atual (pode ter mudado via seletor)
  timerPartida = setTimeout(function() { tickPartida(est); }, cadenciaAtual());
}

// --- Cobradores: os 11 mais fortes em ordem embaralhada (índice % tamanho não repete) ---
function montarCobradores(lista) {
  var onze = lista.slice()
    .sort(function(a, b) { return b.forca - a.forca; })
    .slice(0, 11);
  return UI.shuffle(onze);   // ordem de cobrança aleatória
}

// --- Disputa de pênaltis: best-of-5 + morte súbita; chama onFim('meu'|'adv') ---
function disputarPenaltis(est, onFim) {
  // Cobradores: os 11 em campo de cada lado (com goleiro), ordem embaralhada
  var jogadores = escalacao.filter(function(j) { return j !== null; });
  var cobradoresMeus = montarCobradores(jogadores);

  var jogadoresAdv = est.adversario.jogadores || [];
  // Fallback: clube sem elenco no DADOS → cria 5 cobradores genéricos
  if (jogadoresAdv.length === 0) {
    for (var fb = 0; fb < 5; fb++) {
      jogadoresAdv.push({ nome: est.adversario.clube + ' ' + (fb + 1), forca: 75 });
    }
  }
  var cobradoresAdv = montarCobradores(jogadoresAdv);

  // Cria o bloco visual dentro do .partida-corpo, antes do .partida-resultado
  var cardEl      = document.getElementById('partida-' + est.id);
  var corpo       = cardEl ? cardEl.querySelector('.partida-corpo') : null;
  var elResultado = document.getElementById('presultado-' + est.id);

  var wrapPen = document.createElement('div');
  wrapPen.className = 'penaltis-wrap';
  wrapPen.innerHTML =
    '<p class="penaltis-titulo">Disputa de P\xEAnaltis</p>' +
    '<div class="penaltis-colunas">' +
      '<div class="penaltis-col">' +
        '<p class="penaltis-col-nome">Seu Time</p>' +
        '<div id="pen-meu-' + est.id + '"></div>' +
      '</div>' +
      '<div class="penaltis-col">' +
        '<p class="penaltis-col-nome">' + est.adversario.clube + '</p>' +
        '<div id="pen-adv-' + est.id + '"></div>' +
      '</div>' +
    '</div>' +
    '<p class="penaltis-placar-txt" id="pen-placar-' + est.id + '">0 – 0</p>';

  if (corpo && elResultado) {
    corpo.insertBefore(wrapPen, elResultado);
  } else if (corpo) {
    corpo.appendChild(wrapPen);
  }

  // Probabilidade de conversão: ~75% base, leve vantagem pro time mais forte
  var diff    = est.forcaMinha - est.forcaAdv;
  var probMeu = Math.max(0.60, Math.min(0.88, 0.75 + diff / 400));
  var probAdv = Math.max(0.60, Math.min(0.88, 0.75 - diff / 400));

  var pMeus = 0, pAdv = 0; // gols marcados nos pênaltis
  var iMeu  = 0, iAdv = 0; // cobranças já realizadas por cada lado
  var morteSubita = false;

  // Atualiza o "x – y" abaixo das colunas
  function atualizarPlacar() {
    var el = document.getElementById('pen-placar-' + est.id);
    if (el) el.textContent = pMeus + ' – ' + pAdv;
  }

  // Adiciona uma linha (nome + ✓/✗) na coluna certa
  function addLinha(lado, nome, ok) {
    var colId = lado === 'meu' ? 'pen-meu-' + est.id : 'pen-adv-' + est.id;
    var col   = document.getElementById(colId);
    if (!col) return;
    var d = document.createElement('div');
    d.className = 'penaltis-linha';
    d.innerHTML =
      '<span class="pen-nome">' + nome + '</span>' +
      '<span class="pen-icone ' + (ok ? 'pen-ok' : 'pen-fail') + '">' +
        (ok ? '✓' : '✗') +
      '</span>';
    col.appendChild(d);
  }

  // Verifica se o resultado já está matematicamente decidido
  // Também faz a transição silenciosa para morteSubita quando tudo empata em 5
  function checarDecisao() {
    if (!morteSubita) {
      var restMeu = Math.max(0, 5 - iMeu);
      var restAdv = Math.max(0, 5 - iAdv);
      if (pMeus > pAdv + restAdv) return 'meu'; // adv já não alcança → encerra antes das 5
      if (pAdv > pMeus + restMeu) return 'adv'; // meu já não alcança → encerra antes das 5
      // Todas as 5 cobranças concluídas de cada lado
      if (iMeu >= 5 && iAdv >= 5) {
        if (pMeus > pAdv) return 'meu';
        if (pAdv > pMeus) return 'adv';
        morteSubita = true; // empate em 5 → morte súbita, continua
      }
    } else {
      // Morte súbita: decide somente após o par completo (ambos chutaram)
      if (iMeu === iAdv) {
        if (pMeus > pAdv) return 'meu';
        if (pAdv > pMeus) return 'adv';
        // Empatou de novo → par seguinte
      }
    }
    return null;
  }

  // Executa um chute, revela no visual, agenda o próximo
  function chutar(lado) {
    var cobrador, prob;
    if (lado === 'meu') {
      cobrador = cobradoresMeus[iMeu % cobradoresMeus.length];
      prob     = probMeu;
    } else {
      cobrador = cobradoresAdv[iAdv % cobradoresAdv.length];
      prob     = probAdv;
    }

    var ok = Math.random() < prob;
    if (ok) { if (lado === 'meu') pMeus++; else pAdv++; }
    if (lado === 'meu') iMeu++; else iAdv++;

    addLinha(lado, cobrador.nome, ok);
    atualizarPlacar();

    var dec = checarDecisao();
    if (dec) {
      // Pequena pausa antes de fechar para o jogador ler o último chute
      setTimeout(function() { onFim(dec); }, cadenciaPenalti());
      return;
    }

    // Alterna o lado: meu → adv → meu → adv …
    var proximoLado = (lado === 'meu') ? 'adv' : 'meu';
    setTimeout(function() { chutar(proximoLado); }, cadenciaPenalti());
  }

  // Inicia com o meu time (pequena pausa para o DOM renderizar o bloco)
  setTimeout(function() { chutar('meu'); }, cadenciaPenalti());
}

// --- Encerra a partida: decide o vencedor e avança (ou encerra) a campanha ---
function encerrarPartida(est) {
  timerPartida = null;

  // Acumula para o resumo da campanha (gols do tempo normal; pênaltis não contam)
  campanhaPartidas++;
  campanhaGF += est.gMeus;
  campanhaGA += est.gAdv;

  // Esconde relógio — partida encerrada, não precisa mostrar "90'"
  var elRel = document.getElementById('prelogio-' + est.id);
  if (elRel) elRel.classList.add('escondida');

  var fase = fasesCampanha[faseAtual];
  if (fase && fase.tipo === 'liga') {
    // Brasileirão: registra na tabela, resolve os outros jogos e avança a rodada
    concluirRodadaBrasileirao(est);
  } else if (fase && fase.tipo === 'grupo') {
    // Fase de grupos: empate vale empate (sem pênaltis), perder não elimina
    concluirJogoGrupo(est);
  } else if (est.gMeus > est.gAdv) {
    aplicarResultado(est, 'meu');           // vitória no tempo normal
  } else if (est.gAdv > est.gMeus) {
    aplicarResultado(est, 'adv');           // derrota no tempo normal
  } else {
    // Mata-mata empatado: disputa de pênaltis antes de definir o resultado
    disputarPenaltis(est, function (ganhador) { aplicarResultado(est, ganhador); });
  }
}

// --- Aplica o resultado final (vitória/derrota) e libera o botão da campanha ---
// Separado de encerrarPartida para ser chamado também após a disputa de pênaltis
function aplicarResultado(est, ganhador) {
  var elPlacar    = document.getElementById('pplacar-'    + est.id);
  var elResultado = document.getElementById('presultado-' + est.id);
  var elMiniRes   = document.getElementById('pmres-'      + est.id);
  var btn         = document.getElementById('btn-iniciar-jogo');

  // V/D do mata-mata (empate já foi resolvido nos pênaltis antes de chegar aqui)
  if (ganhador === 'meu') campanhaVitorias++; else campanhaDerrotas++;

  // Copa: avança a chave (seu resultado + simula os outros confrontos da fase)
  if (modoSelecionado === 'copa' && typeof avancarChaveCopa === 'function') {
    avancarChaveCopa(ganhador === 'meu');
    if (typeof renderChaveCopa === 'function') renderChaveCopa();
  }

  if (ganhador === 'meu') {
    if (elPlacar) elPlacar.classList.add('vitoria');

    if (faseAtual < fasesCampanha.length - 1) {
      // Vitória intermediária: avança para a próxima fase
      if (elResultado) { elResultado.textContent = '✓ VITÓRIA'; elResultado.className = 'partida-resultado vitoria'; }
      if (elMiniRes)   { elMiniRes.textContent = '✓'; elMiniRes.className = 'partida-mini-res vitoria'; }
      faseAtual++;
      btn.textContent = 'Próximo Jogo ►';
      acaoBotao = 'proximo';
      btn.disabled = false;

      // Modo automático: encadeia o próximo jogo sem aguardar clique
      if (modoSimulacao === 'automatico') {
        btn.disabled = true;
        setTimeout(function() { btn.disabled = false; iniciarPartida(); }, 1500);
      }
    } else {
      // Venceu a FINAL: campanha concluída
      if (elResultado) { elResultado.textContent = '★ CAMPEÃO!'; elResultado.className = 'partida-resultado vitoria'; }
      if (elMiniRes)   { elMiniRes.textContent = '★'; elMiniRes.className = 'partida-mini-res vitoria'; }
      btn.textContent = 'Nova Campanha';
      acaoBotao = 'nova-campanha';
      btn.disabled = false;
      mostrarBotaoResumo(true);   // campeão → botão de resumo (com troféu)
    }
  } else {
    // Derrota: campanha encerrada
    if (elPlacar)    elPlacar.classList.add('derrota');
    if (elResultado) { elResultado.textContent = '✕ DERROTA'; elResultado.className = 'partida-resultado derrota'; }
    if (elMiniRes)   { elMiniRes.textContent = '✕'; elMiniRes.className = 'partida-mini-res derrota'; }
    btn.textContent = 'Montar Novo Time ►';
    acaoBotao = 'novo-time';
    btn.disabled = false;
    mostrarBotaoResumo(false);  // derrota → botão de resumo da campanha
  }
}
