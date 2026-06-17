// draft.js — modo de jogo "Draft": escolha do XI por cartas aleatórias.
//
// Fluxo: o usuário escolhe o estilo "Draft" e a formação, clica em "Começar"
// (a coluna esquerda some, o campo cresce), depois clica em cada vaga do campo.
// A cada vaga aparecem 5 cartas de jogadores aleatórios e ELEGÍVEIS para aquela
// posição, respeitando a competição selecionada (Libertadores ou Champions).
// Escolhida a carta e confirmado o "Selecionar", o jogador ocupa a vaga.
//
// Reaproveita a lógica existente de mover/trocar (iniciarMover, concluirMover,
// concluirTroca) e o box score/forças (atualizarBoxScore), além de podeOcupar.

// --- Estado transitório do draft (estiloJogo/draftIniciado ficam em estado.js) ---
var draftSlotAtual  = null;   // índice da vaga sendo preenchida
var draftCartaSel   = null;   // índice (no pool exibido) da carta escolhida
var draftPoolCartas = [];     // as 5 cartas atualmente na tela
var _draftPoolCache = {};     // pool achatado por competição (memoizado)


// POOL DE JOGADORES — achata DADOS da competição atual em jogadores com clube/edição.
// Só inclui a competição selecionada: nunca mistura Libertadores com Champions.
function obterPoolDraft() {
  var chave = modoSelecionado;
  if (_draftPoolCache[chave]) return _draftPoolCache[chave];

  var pool = [];

  API.getClubesDoModo(modoSelecionado).forEach(function (entrada) {
    entrada.jogadores.forEach(function (j) {
      pool.push({
        nome:       j.nome,
        posicoes:   j.posicoes,
        forca:      j.forca,
        clube:      entrada.clube,
        edicao:     entrada.edicao,
        competicao: entrada.competicao
      });
    });
  });

  _draftPoolCache[chave] = pool;
  return pool;
}

// Já está em campo pelo NOME? (o mesmo jogador pode existir em várias edições,
// mas só pode entrar uma vez na escalação)
function nomeJaEscalado(nome) {
  return escalacao.some(function (e) { return e && e.nome === nome; });
}

// Sorteia até 5 cartas elegíveis para a vaga, com NOMES distintos entre si e
// sem jogadores que já estão na escalação. Se um mesmo nome existir em várias
// edições, escolhe uma edição ao acaso para representá-lo.
function sortearCartas(indice) {
  var codigo = slotsJogo[indice].dataset.codigo;
  var pool   = obterPoolDraft();

  var elegiveis = pool.filter(function (j) {
    return podeOcupar(j, codigo) && !nomeJaEscalado(j.nome);
  });

  // Agrupa as edições por nome de jogador
  var porNome = {};
  var nomes = [];
  elegiveis.forEach(function (j) {
    if (!porNome[j.nome]) { porNome[j.nome] = []; nomes.push(j.nome); }
    porNome[j.nome].push(j);
  });

  // Embaralha os nomes (Fisher–Yates) e pega até 5 distintos
  for (var i = nomes.length - 1; i > 0; i--) {
    var k = Math.floor(Math.random() * (i + 1));
    var t = nomes[i]; nomes[i] = nomes[k]; nomes[k] = t;
  }

  return nomes.slice(0, 5).map(function (nome) {
    var opcoes = porNome[nome];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
  });
}

// Rótulo amigável de cada posição, exibido no título do overlay.
var ROTULOS_POSICAO = {
  GOL: 'Goleiro',      LE: 'Lateral Esquerdo', LD: 'Lateral Direito',
  ZAG: 'Zagueiro',     VOL: 'Volante',         MC: 'Meio-Campo',
  ME: 'Meia Esquerda', MD: 'Meia Direita',     MEI: 'Meia',
  PE: 'Ponta Esquerda',PD: 'Ponta Direita',    ATA: 'Atacante'
};

// Faixa de raridade pela força — define a cor da borda/glow da carta.
function tierDaForca(forca) {
  if (forca >= 90) return 'diamante';
  if (forca >= 86) return 'elite';
  if (forca >= 82) return 'ouro';
  if (forca >= 78) return 'prata';
  return 'bronze';
}


// SELETOR DE ESTILO — alterna Clássico ↔ Draft (só antes de "Começar"/"Rolar").
function selecionarEstilo(novoEstilo) {
  if (draftIniciado || formacaoTravada) return;  // já começou/rolou: estilo travado
  estiloJogo = novoEstilo;

  pilulasEstilo.forEach(function (p) {
    if (p.dataset.estilo === novoEstilo) {
      p.classList.add('pilula-ativa');
    } else {
      p.classList.remove('pilula-ativa');
    }
  });

  aplicarVisibilidadeEstilo();
  atualizarHeaderInfo();
}

// Mostra/esconde os controles conforme o estilo escolhido.
function aplicarVisibilidadeEstilo() {
  if (estiloJogo === 'draft') {
    // Draft: esconde o fluxo de sorteio, mostra "Começar"
    btnRolar.classList.add('escondida');
    clubeCard.classList.add('escondida');
    blocoSkips.classList.add('escondida');
    listaJogadores.classList.add('escondida');
    btnComecarDraft.classList.remove('escondida');

    // Com o campo ainda vazio, garante a escolha de formação no Draft
    // (caso a formação tenha sido travada por um sorteio Clássico anterior).
    if (slotsPreenchidos === 0) {
      formacaoTravada = false;
      formacaoBloco.classList.remove('escondida');
      pilulasFormacaoJogo.forEach(function (p) { p.disabled = false; });
    }
  } else {
    // Clássico: volta o fluxo de sorteio
    btnComecarDraft.classList.add('escondida');
    btnRolar.classList.remove('escondida');
  }
}


// COMEÇAR — trava a formação, remove a coluna esquerda e amplia o campo.
function comecarDraft() {
  if (estiloJogo !== 'draft' || draftIniciado) return;

  draftIniciado       = true;
  formacaoTravada     = true;
  draftSkipsRestantes = 3;   // orçamento de re-sorteios para este draft

  var wrapper = document.querySelector('.jogo-wrapper');
  if (wrapper) wrapper.classList.add('draft-ativo');

  // Recalcula as posições no campo já ampliado e garante os códigos nas vagas
  posicionarSlotsJogo(formacaoJogo);
  atualizarHeaderInfo();
}


// CLICAR NUMA VAGA (modo Draft) — abre as cartas ou roteia para mover/trocar.
function clicarSlotDraft(indice) {
  var slot = slotsJogo[indice];

  // Em modo de edição: clicou de novo na mesma vaga → cancela
  if (slot.classList.contains('movendo'))  { cancelarSelecao();      return; }
  // Vaga trocável (com outra em edição) → efetua a troca
  if (slot.classList.contains('trocavel')) { concluirTroca(indice);  return; }
  // Vaga preenchida → entra no modo mover (reposicionar/trocar jogador)
  if (slot.classList.contains('preenchido')) { iniciarMover(indice); return; }
  // Vaga vazia destacada durante um mover → conclui o mover
  if (slot.classList.contains('compativel')) {
    if (slotMovendo !== null) concluirMover(indice);
    return;
  }

  // Vaga vazia comum: se havia um mover ativo, cancela; senão, abre as cartas
  if (slotMovendo !== null) { cancelarSelecao(); return; }
  abrirCartasDraft(indice);
}


// ABRIR CARTAS — destaca a vaga escolhida e mostra 5 opções de jogadores.
function abrirCartasDraft(indice) {
  cancelarSelecao(); // limpa qualquer mover/seleção pendente

  draftSlotAtual = indice;
  draftCartaSel  = null;
  draftPoolCartas = sortearCartas(indice);

  // Marca a vaga-alvo (amarela) no campo
  slotsJogo.forEach(function (s) { s.classList.remove('draft-alvo'); });
  slotsJogo[indice].classList.add('draft-alvo');

  // Título do overlay com a posição em montagem
  if (draftTitulo) {
    var codigo = slotsJogo[indice].dataset.codigo;
    draftTitulo.textContent = 'Escolha seu ' + (ROTULOS_POSICAO[codigo] || codigo);
  }

  renderizarCartas();

  btnSelecionarDraft.disabled = true;
  draftOverlay.classList.remove('escondida');
}

// Renderiza as cartas no overlay com animação de "abertura de pacote":
// entrada escalonada (deal), brilho diagonal e glow de raridade por força.
function renderizarCartas() {
  draftCartasEl.innerHTML = '';

  if (draftPoolCartas.length === 0) {
    var aviso = document.createElement('p');
    aviso.className = 'draft-vazio';
    aviso.textContent = 'Nenhum jogador disponível para esta posição.';
    draftCartasEl.appendChild(aviso);
    atualizarBotaoResortear();
    return;
  }

  draftPoolCartas.forEach(function (j, idx) {
    var atraso = idx * 0.09; // escalonamento do "deal" entre as cartas

    // "Mostrar Força" desligado: oculta a força ("?") e neutraliza o tier
    // (a raridade pela cor revelaria a força, então fica escondida também).
    var revela = (typeof forcaVisivel === 'function') ? forcaVisivel() : true;
    var tier   = revela ? tierDaForca(j.forca) : 'oculto';

    var carta = document.createElement('div');
    carta.className = 'draft-carta carta-entrando tier-' + tier;
    carta.dataset.idx = idx;
    carta.style.animationDelay = atraso + 's';

    carta.innerHTML =
      '<span class="carta-brilho" style="animation-delay:' + (atraso + 0.26).toFixed(2) + 's"></span>' +
      '<span class="carta-nome" title="' + j.nome + '">' + j.nome + '</span>' +
      '<span class="carta-time">' + j.clube + '</span>' +
      '<span class="carta-ano">' + j.edicao + '</span>' +
      '<span class="carta-posicoes">' + j.posicoes.join('/') + '</span>' +
      '<span class="carta-forca">' + (revela ? j.forca : '?') + '</span>';

    carta.addEventListener('click', function () { selecionarCarta(idx, carta); });
    // Tira a classe de entrada quando o "deal" acaba: a partir daí, selecionar/
    // desselecionar só mexe em borda/escala (transição), nunca re-anima a entrada.
    carta.addEventListener('animationend', function (e) {
      if (e.animationName === 'carta-deal') carta.classList.remove('carta-entrando');
    });
    draftCartasEl.appendChild(carta);
  });

  atualizarBotaoResortear();
}

// Atualiza o contador e o estado (habilitado/desabilitado) do botão Re-sortear.
function atualizarBotaoResortear() {
  if (!btnResortearDraft) return;
  if (resortearContador) resortearContador.textContent = draftSkipsRestantes;
  var semCartas = draftPoolCartas.length === 0;
  btnResortearDraft.disabled = (draftSkipsRestantes <= 0) || semCartas;
}

// RE-SORTEAR — gasta 1 do orçamento, troca as 5 opções e replica a animação.
function resortearCartas() {
  if (draftSlotAtual === null || draftSkipsRestantes <= 0) return;

  draftSkipsRestantes--;
  draftCartaSel = null;
  draftPoolCartas = sortearCartas(draftSlotAtual);

  renderizarCartas();
  btnSelecionarDraft.disabled = true;
}

// CLICAR NUMA CARTA — destaca (cresce) e libera o botão Selecionar.
function selecionarCarta(idx, elemento) {
  draftCartaSel = idx;

  draftCartasEl.querySelectorAll('.draft-carta').forEach(function (c) {
    c.classList.remove('escolhida');
  });
  elemento.classList.add('escolhida');

  btnSelecionarDraft.disabled = false;
}

// SELECIONAR — coloca a carta escolhida na vaga e fecha o overlay.
function confirmarSelecaoDraft() {
  if (draftCartaSel === null || draftSlotAtual === null) return;

  var j      = draftPoolCartas[draftCartaSel];
  var indice = draftSlotAtual;
  var slot   = slotsJogo[indice];

  escalacao[indice] = {
    nome:     j.nome,
    forca:    j.forca,
    posicoes: j.posicoes,   // usado em podeOcupar() ao mover/trocar
    codigo:   slot.dataset.codigo,
    clube:    j.clube,
    edicao:   j.edicao
  };
  slotsPreenchidos++;

  slot.innerHTML = slot.dataset.codigo + '<span class="slot-nome">' + j.nome + '</span>';
  slot.classList.add('preenchido');
  slot.classList.remove('draft-alvo', 'compativel');

  fecharCartasDraft();
  atualizarBoxScore();

  // Simular só aparece com as 11 vagas preenchidas
  if (slotsPreenchidos >= 11) verificarCompleto();
}

// FECHAR — esconde o overlay e limpa a vaga-alvo (sem alterar a escalação).
function fecharCartasDraft() {
  draftOverlay.classList.add('escondida');
  draftCartasEl.innerHTML = '';
  draftSlotAtual = null;
  draftCartaSel  = null;
  slotsJogo.forEach(function (s) { s.classList.remove('draft-alvo'); });
}


// RESET — chamado por iniciarTelaJogo() ao (re)entrar na tela do jogo.
function resetEstiloDraft() {
  estiloJogo          = 'classico';
  draftIniciado       = false;
  draftSlotAtual      = null;
  draftCartaSel       = null;
  draftSkipsRestantes = 3;

  var wrapper = document.querySelector('.jogo-wrapper');
  if (wrapper) wrapper.classList.remove('draft-ativo');

  if (draftOverlay)  { draftOverlay.classList.add('escondida'); }
  if (draftCartasEl) { draftCartasEl.innerHTML = ''; }
  if (btnComecarDraft) btnComecarDraft.classList.add('escondida');
  if (estiloBloco) estiloBloco.classList.remove('escondida');  // volta a permitir trocar o estilo

  if (pilulasEstilo) {
    pilulasEstilo.forEach(function (p) {
      if (p.dataset.estilo === 'classico') {
        p.classList.add('pilula-ativa');
      } else {
        p.classList.remove('pilula-ativa');
      }
    });
  }

  if (slotsJogo) slotsJogo.forEach(function (s) { s.classList.remove('draft-alvo'); });
}
