//  escalacao.js — montar XI: lista, alocar, mover, trocar, box score

// BOX SCORE — reconstrói a lista de 11 linhas a cada alocação ou mover

function atualizarBoxScore() {
  var codigos = codigosFormacao[formacaoJogo];
  boxScore.innerHTML = '';

  for (var i = 0; i < 11; i++) {
    var div    = document.createElement('div');
    var codigo = escalacao[i] ? escalacao[i].codigo : codigos[i];
    var nome   = escalacao[i] ? escalacao[i].nome   : '---';
    div.className = 'box-linha' + (escalacao[i] ? '' : ' vazio');

    // Força aparece só nos slots preenchidos, alinhada à direita
    var forcaHtml = escalacao[i]
      ? '<span class="box-forca">' + escalacao[i].forca + '</span>'
      : '';

    div.innerHTML =
      '<span class="box-codigo">' + codigo   + '</span>' +
      '<span class="box-nome">'   + nome     + '</span>' +
      forcaHtml;

    boxScore.appendChild(div);
  }

  atualizarForcas(); // atualiza as médias junto com o box score
}


// FORÇAS DO TIME — médias de força: geral, ataque e defesa
// MC conta em ambas as categorias (meio-campo misto)

function atualizarForcas() {
  var codigosAtaque = ['PE', 'PD', 'ATA', 'MD', 'ME', 'MEI', 'MC'];
  var codigosDefesa = ['GOL', 'ZAG', 'LD', 'LE', 'VOL', 'MC'];

  var todos  = [];
  var ataque = [];
  var defesa = [];

  escalacao.forEach(function (e) {
    if (!e) return;
    todos.push(e.forca);
    if (codigosAtaque.indexOf(e.codigo) >= 0) ataque.push(e.forca);
    if (codigosDefesa.indexOf(e.codigo) >= 0) defesa.push(e.forca);
  });

  function media(arr) {
    if (arr.length === 0) return '--';
    return Math.round(arr.reduce(function (s, v) { return s + v; }, 0) / arr.length);
  }

  if (forcaGeral)  forcaGeral.textContent  = media(todos);
  if (forcaAtaque) forcaAtaque.textContent = media(ataque);
  if (forcaDefesa) forcaDefesa.textContent = media(defesa);
}


// INICIAR TELA DO JOGO — reseta TUDO ao entrar numa nova partida

// Atualiza o texto "formação · modo" no cabeçalho da tela do jogo
function atualizarHeaderInfo() {
  if (jogoHeaderInfo) {
    jogoHeaderInfo.textContent = formacaoJogo + ' · ' + COMPETICOES[modoSelecionado].label.toUpperCase();
  }
}

function iniciarTelaJogo() {
  formacaoJogo       = '4-3-3';
  formacaoTravada    = false;
  jogadorSelecionado = null;
  escalacao          = Array(11).fill(null);
  slotsPreenchidos   = 0;
  slotMovendo        = null;
  clubeSorteado      = '';
  edicaoSorteada     = null;
  skipsRestantes     = 5;

  formacaoBloco.classList.remove('escondida');

  pilulasFormacaoJogo.forEach(function (p) {
    p.disabled = false;
    if (p.dataset.formacaoJogo === '4-3-3') {
      p.classList.add('pilula-ativa');
    } else {
      p.classList.remove('pilula-ativa');
    }
  });

  btnRolar.classList.remove('escondida');
  clubeCard.classList.add('escondida');
  listaJogadores.classList.add('escondida');
  blocoSkips.classList.add('escondida');
  btnSimular.classList.add('escondida');
  skipContador.textContent = '5'; // restaura o contador visual

  campoJogo.classList.remove('tem-selecao');

  atualizarBoxScore();
  atualizarHeaderInfo();

  slotsJogo.forEach(function (s) {
    s.classList.add('sem-transicao');
    s.classList.remove('compativel', 'preenchido', 'movendo');
  });
  posicionarSlotsJogo('4-3-3');

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      slotsJogo.forEach(function (s) { s.classList.remove('sem-transicao'); });
    });
  });
}


// SELECIONAR FORMAÇÃO NA TELA DO JOGO (só antes do 1º sorteio)

function selecionarFormacaoJogo(nome) {
  if (formacaoTravada) return;

  formacaoJogo = nome;

  pilulasFormacaoJogo.forEach(function (p) {
    if (p.dataset.formacaoJogo === nome) {
      p.classList.add('pilula-ativa');
    } else {
      p.classList.remove('pilula-ativa');
    }
  });

  posicionarSlotsJogo(nome);
  atualizarBoxScore();
  atualizarHeaderInfo();
}


// CONSTRUIR LISTA DE JOGADORES
//
// Cada jogador aparece como DISPONÍVEL ou INDISPONÍVEL:
//   (a) já está alocado em algum slot → indisponível
//   (b) nenhuma vaga vazia aceita suas posições → indisponível
//   (c) caso contrário → disponível e clicável

function construirListaJogadores(jogadores) {
  listaJogadores.innerHTML = '';

  // Ranking fixo de posições: GOL → LE → ZAG → LD → VOL → MC → ME → MEI → MD → PE → ATA → PD
  var ordemPosicao = ['GOL', 'LE', 'ZAG', 'LD', 'VOL', 'MC', 'ME', 'MEI', 'MD', 'PE', 'ATA', 'PD'];

  // Ordena pela PRIMEIRA posição do jogador; empate mantém ordem original (sort estável no V8)
  var ordenados = jogadores.slice().sort(function (a, b) {
    var ia = ordemPosicao.indexOf(a.posicoes[0]);
    var ib = ordemPosicao.indexOf(b.posicoes[0]);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  ordenados.forEach(function (jogador) {
    var item = document.createElement('div');
    item.className = 'item-jogador';

    // (a) Já foi alocado (verifica no estado vivo da escalação)
    var jaAlocado = escalacao.some(function (e) {
      return e && e.clube === clubeSorteado && e.nome === jogador.nome;
    });

    // (b) Sem nenhuma vaga vazia compatível com este jogador
    var temVagaDisponivel = false;
    if (!jaAlocado) {
      for (var si = 0; si < 11; si++) {
        if (!escalacao[si] && podeOcupar(jogador, codigosFormacao[formacaoJogo][si])) {
          temVagaDisponivel = true;
          break;
        }
      }
    }

    var disponivel = !jaAlocado && temVagaDisponivel;

    if (!disponivel) {
      // Indisponível: visual apagado, sem evento de clique
      item.classList.add('ja-escalado');
    } else {
      // Disponível: registra o clique
      item.addEventListener('click', function () {
        clicarJogador(jogador, item);
      });
    }

    var posStr = jogador.posicoes.join('/');

    item.innerHTML =
      '<span class="jogador-nome" title="' + jogador.nome + '">' + jogador.nome + '</span>' +
      '<span class="jogador-posicoes">' + posStr        + '</span>' +
      '<span class="jogador-forca">'    + jogador.forca + '</span>';

    listaJogadores.appendChild(item);
  });

  // Reposiciona no topo a cada novo sorteio (evita ficar no meio da lista)
  listaJogadores.scrollTop = 0;
}


// CANCELAR SELEÇÃO — limpa qualquer modo ativo (lista ou mover)

function cancelarSelecao() {
  // Limpa seleção de jogador da lista
  jogadorSelecionado = null;
  document.querySelectorAll('.item-jogador.selecionado').forEach(function (el) {
    el.classList.remove('selecionado');
  });

  // Limpa modo de mover
  if (slotMovendo !== null) {
    slotsJogo[slotMovendo].classList.remove('movendo');
    slotMovendo = null;
  }

  // Remove destaques e escurecimento do campo
  slotsJogo.forEach(function (s) { s.classList.remove('compativel', 'trocavel'); });
  campoJogo.classList.remove('tem-selecao');
}


// CLICAR EM UM JOGADOR DA LISTA
// Destaca só as vagas vazias onde o jogador selecionado pode jogar.

function clicarJogador(jogador, elemento) {
  // Se estava no modo de mover, cancela antes de entrar no modo de lista
  cancelarSelecao();

  elemento.classList.add('selecionado');
  jogadorSelecionado = jogador;

  // Destaca só vagas VAZIAS compatíveis
  slotsJogo.forEach(function (slot, i) {
    if (!escalacao[i] && podeOcupar(jogador, slot.dataset.codigo)) {
      slot.classList.add('compativel');
    }
  });

  // Ativa escurecimento dos slots incompatíveis via CSS
  campoJogo.classList.add('tem-selecao');

  // No celular, leva o usuário direto ao mapa para escolher a posição
  // (no desktop a lista e o campo já aparecem lado a lado, não precisa rolar).
  if (window.innerWidth <= 768) {
    campoJogo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}


// ALOCAR JOGADOR — coloca o jogador da lista no slot clicado
// Esconde o card e a lista após a alocação.

function alocarJogador(indice) {
  var slot = slotsJogo[indice];

  escalacao[indice] = {
    nome:     jogadorSelecionado.nome,
    forca:    jogadorSelecionado.forca,
    posicoes: jogadorSelecionado.posicoes,  // ESSENCIAL: usado depois em podeOcupar() ao mover/trocar
    codigo:   slot.dataset.codigo,
    clube:    clubeSorteado       // guarda o clube de origem
  };
  slotsPreenchidos++;

  // Mantém o código da posição no círculo; exibe o nome no rótulo abaixo
  slot.innerHTML = slot.dataset.codigo + '<span class="slot-nome">' + jogadorSelecionado.nome + '</span>';
  slot.classList.remove('compativel');
  slot.classList.add('preenchido');

  cancelarSelecao();

  // Esconde o card, a lista e os skips — deixa só o Rolar visível
  clubeCard.classList.add('escondida');
  listaJogadores.classList.add('escondida');
  blocoSkips.classList.add('escondida');

  atualizarBoxScore();

  if (slotsPreenchidos >= 11) {
    verificarCompleto();
  } else {
    btnRolar.classList.remove('escondida');
  }
}


// INICIAR MOVER — seleciona um jogador já no campo para reposicioná-lo
//
// Lógica:
//   - Clicou no mesmo slot que já estava em modo mover → cancela (toggle)
//   - Jogador não tem outra vaga compatível vazia → nada acende
//   - Caso contrário → entra no modo mover e acende os destinos possíveis

function iniciarMover(indice) {
  // Toggle: clicou no mesmo slot → sai do modo de edição
  if (slotMovendo === indice) {
    cancelarSelecao();
    return;
  }

  cancelarSelecao();

  var jogadorP = escalacao[indice];
  var codigoS  = slotsJogo[indice].dataset.codigo; // código da vaga original de P

  var destinosVazios    = []; // vagas vazias onde P pode jogar
  var destinosTrocaveis = []; // índices de jogadores Q com quem P pode trocar

  slotsJogo.forEach(function (s, i) {
    if (i === indice) return; // pula o próprio slot de P

    if (!escalacao[i]) {
      // Vaga vazia: P pode jogar aqui?
      if (podeOcupar(jogadorP, s.dataset.codigo)) {
        destinosVazios.push(i);
      }
    } else {
      // Vaga ocupada por Q: P pode ir pra T E Q pode ir pra S?
      if (podeOcupar(jogadorP, s.dataset.codigo) && podeOcupar(escalacao[i], codigoS)) {
        destinosTrocaveis.push(i);
      }
    }
  });

  // Entra no modo de edição sempre (animação começa mesmo sem destinos)
  slotMovendo = indice;
  slotsJogo[indice].classList.add('movendo');

  if (destinosVazios.length > 0 || destinosTrocaveis.length > 0) {
    campoJogo.classList.add('tem-selecao');
    destinosVazios.forEach(function (i) { slotsJogo[i].classList.add('compativel'); });
    destinosTrocaveis.forEach(function (i) { slotsJogo[i].classList.add('trocavel'); });
  }
}


// CONCLUIR MOVER — move o jogador do slot de origem para o de destino

function concluirMover(destinoIndice) {
  var jogador     = escalacao[slotMovendo];
  var slotOrigem  = slotsJogo[slotMovendo];
  var slotDestino = slotsJogo[destinoIndice];

  // Esvazia o slot de origem
  escalacao[slotMovendo] = null;
  slotOrigem.textContent = slotOrigem.dataset.codigo; // volta a mostrar o código
  slotOrigem.classList.remove('preenchido', 'movendo');

  // Preenche o slot de destino com o mesmo jogador (código atualizado)
  escalacao[destinoIndice] = {
    nome:     jogador.nome,
    forca:    jogador.forca,
    posicoes: jogador.posicoes,          // mantém as posições ao mover de vaga
    codigo:   slotDestino.dataset.codigo, // código da nova vaga
    clube:    jogador.clube
  };
  slotDestino.innerHTML = slotDestino.dataset.codigo + '<span class="slot-nome">' + jogador.nome + '</span>';
  slotDestino.classList.add('preenchido');
  slotDestino.classList.remove('compativel');

  // slotsPreenchidos não muda: saiu 1, entrou 1

  cancelarSelecao();
  atualizarBoxScore();
  atualizarDisponibilidadeLista();  // libera quem virou elegível com a vaga aberta
}

// --- Reconstrói a lista do time sorteado (se visível) para atualizar os disponíveis
//     depois de mover/trocar no campo (uma vaga pode ter sido liberada/ocupada). ---
function atualizarDisponibilidadeLista() {
  if (!edicaoSorteada || listaJogadores.classList.contains('escondida')) return;
  var scroll = listaJogadores.scrollTop;
  construirListaJogadores(edicaoSorteada.jogadores);
  listaJogadores.scrollTop = scroll;
}


// CONCLUIR TROCA — inverte as posições de P (em edição) e Q (trocável)

function concluirTroca(indiceQ) {
  var indiceP  = slotMovendo;
  var slotP    = slotsJogo[indiceP];
  var slotQ    = slotsJogo[indiceQ];
  var jogadorP = escalacao[indiceP];
  var jogadorQ = escalacao[indiceQ];

  // Troca os jogadores no array de estado (mantendo o código da vaga de cada slot)
  escalacao[indiceP] = { nome: jogadorQ.nome, forca: jogadorQ.forca, posicoes: jogadorQ.posicoes, codigo: slotP.dataset.codigo, clube: jogadorQ.clube };
  escalacao[indiceQ] = { nome: jogadorP.nome, forca: jogadorP.forca, posicoes: jogadorP.posicoes, codigo: slotQ.dataset.codigo, clube: jogadorP.clube };

  // Atualiza visual: código da posição no círculo, nome no rótulo abaixo
  slotP.innerHTML = slotP.dataset.codigo + '<span class="slot-nome">' + jogadorQ.nome + '</span>';
  slotQ.innerHTML = slotQ.dataset.codigo + '<span class="slot-nome">' + jogadorP.nome + '</span>';

  // cancelarSelecao limpa .movendo de slotP e .trocavel de slotQ automaticamente
  cancelarSelecao();
  atualizarBoxScore();
  atualizarDisponibilidadeLista();
}


// CLICAR NUM SLOT — roteia para a ação correta dependendo do estado
//
//   slot preenchido + sem seleção   → iniciarMover (ou cancelar se toggle)
//   slot compatível + lista ativa   → alocarJogador (novo jogador da lista)
//   slot compatível + mover ativo   → concluirMover (mover existente)
//   slot vazio não-compatível       → cancela qualquer seleção

function clicarSlot(indice) {
  var slot = slotsJogo[indice];

  // 1. Jogador em modo de edição (P): clicou de novo → sai
  if (slot.classList.contains('movendo')) {
    cancelarSelecao();
    return;
  }

  // 2. Jogador trocável (Q, com P em edição): efetua a troca entre P e Q
  if (slot.classList.contains('trocavel')) {
    concluirTroca(indice);
    return;
  }

  // 3. Slot com jogador alocado: entra no modo de edição para esse jogador
  if (slot.classList.contains('preenchido')) {
    iniciarMover(indice);
    return;
  }

  // 4. Vaga vazia compatível: alocar da lista ou concluir mover
  if (slot.classList.contains('compativel')) {
    if (jogadorSelecionado !== null) {
      alocarJogador(indice);
    } else if (slotMovendo !== null) {
      concluirMover(indice);
    }
    return;
  }

  // 5. Vaga vazia fora de contexto: cancela qualquer seleção ativa
  cancelarSelecao();
}


// TIME COMPLETO — mostra o botão Simular

function verificarCompleto() {
  btnSimular.classList.remove('escondida');
  blocoSkips.classList.add('escondida'); // skips não fazem sentido com time completo
}
