// draft.js — modo "Draft": escolha do XI por cartas aleatórias.
// O usuário clica em cada vaga do campo e escolhe entre 5 cartas elegíveis para a
// posição (da competição selecionada). Reaproveita mover/trocar e o box score.

// --- Estado transitório do draft (estiloJogo/draftIniciado ficam em estado.js) ---
var draftSlotAtual  = null;   // índice da vaga sendo preenchida
var draftCartaSel   = null;   // índice (no pool exibido) da carta escolhida
var draftPoolCartas = [];     // as 5 cartas atualmente na tela
var _draftPoolCache = {};     // pool achatado por competição (memoizado)


// POOL DE JOGADORES — achata o DADOS da competição atual (nunca mistura competições).
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
        temporada:  entrada.temporada,   // basquete usa temporada ("2024-25"); preserva p/ o card
        competicao: entrada.competicao
      });
    });
  });

  _draftPoolCache[chave] = pool;
  return pool;
}

// Índice do pool por CÓDIGO DE VAGA (cacheado por competição). Sem ele, sortearCartas
// filtraria os 5504 atletas da NBA a cada clique. Aqui pré-agrupamos: para cada código
// de vaga que o campo pode ter, guardamos os jogadores agrupados POR NOME (um mesmo
// jogador aparece em várias edições) — isso evita refazer o filtro E o agrupamento a
// cada sorteio.
var _draftIdxCache = {};
function indicePorVaga(codigo) {
  var chave = modoSelecionado;
  if (!_draftIdxCache[chave]) _draftIdxCache[chave] = {};
  var idx = _draftIdxCache[chave];
  if (idx[codigo]) return idx[codigo];
  var pool = obterPoolDraft();
  var porNome = {};
  var nomes = [];
  pool.forEach(function (j) {
    if (!podeOcupar(j, codigo)) return;
    if (!porNome[j.nome]) { porNome[j.nome] = []; nomes.push(j.nome); }
    porNome[j.nome].push(j);
  });
  idx[codigo] = { porNome: porNome, nomes: nomes };
  return idx[codigo];
}

// Já está em campo pelo NOME? (o mesmo jogador pode existir em várias edições,
// mas só pode entrar uma vez na escalação)
function nomeJaEscalado(nome) {
  return escalacao.some(function (e) { return e && e.nome === nome; });
}

// Sorteia até 5 cartas elegíveis (nomes distintos, fora da escalação). Para um nome
// presente em várias edições, escolhe uma edição ao acaso.
function sortearCartas(indice) {
  var codigo = slotsJogo[indice].dataset.codigo;

  // Usa o índice pré-agrupado por vaga (filtro + agrupamento por nome já cacheados).
  // Só resta excluir quem já está escalado e embaralhar os nomes disponíveis.
  var idx = indicePorVaga(codigo);
  var nomesLivres = idx.nomes.filter(function (nome) { return !nomeJaEscalado(nome); });

  // Embaralha os nomes e pega até 5 distintos; para cada nome, uma edição ao acaso.
  return UI.shuffle(nomesLivres).slice(0, 5).map(function (nome) {
    var opcoes = idx.porNome[nome];
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
  // Leilão muda o nº de vagas (5) e a formação do campo — remonta a tela de escalação.
  // preservarEstilo=true: mantém o estilo recém-escolhido (senão o reset o zeraria).
  if (typeof iniciarTelaJogo === 'function') iniciarTelaJogo(true);
  atualizarHeaderInfo();
}

// Qual botão de ação cada estilo mostra. TABELA, não if/else: com 4 estilos a cadeia de
// `if` vira sopa e cada estilo novo obriga a reler os outros três. Aqui, estilo novo é
// uma linha — e é impossível esquecer de esconder o botão de outro modo.
//   · classico  → "Rolar"     (sorteia na competição inteira)
//   · orcamento → "Rolar"     (mesmo fluxo, com trava de custo)
//   · draft     → "Começar"   (cartas por posição)
//   · livre     → "Próximo"   (abre o modal do pote; depois vira "Rolar")
var BOTAO_DO_ESTILO = {
  classico:  'btn-rolar',
  orcamento: 'btn-rolar',
  draft:     'btn-comecar-draft',
  livre:     'btn-proximo-livre',
  leilao:    'btn-iniciar-leilao',
};

// Mostra/esconde os controles conforme o estilo escolhido.
function aplicarVisibilidadeEstilo() {
  var alvo = BOTAO_DO_ESTILO[estiloJogo] || 'btn-rolar';

  // No Jogo Livre o "Rolar" só volta DEPOIS que o pote está montado.
  if (estiloJogo === 'livre' && poteLivre.length >= POTE_MIN) alvo = 'btn-rolar';

  [['btn-rolar', btnRolar], ['btn-comecar-draft', btnComecarDraft],
   ['btn-proximo-livre', btnProximoLivre]].forEach(function (par) {
    if (par[1]) par[1].classList.toggle('escondida', par[0] !== alvo);
  });

  // Modo Leilão: mostra os blocos de orçamento e formação do leilão (só no futebol),
  // e esconde a formação normal + a lista de jogadores (o leilão não sorteia elenco aqui).
  var ehLeilao = (estiloJogo === 'leilao');
  var blocoLeilaoOrc = document.getElementById('jogo-leilao-orcamento-bloco');
  var blocoLeilaoForm = document.getElementById('jogo-leilao-formacao-bloco');
  var btnIniciarLeilao = document.getElementById('btn-iniciar-leilao');
  if (blocoLeilaoOrc) blocoLeilaoOrc.classList.toggle('escondida', !ehLeilao);
  if (blocoLeilaoForm) blocoLeilaoForm.classList.toggle('escondida', !ehLeilao);
  if (btnIniciarLeilao) btnIniciarLeilao.classList.toggle('escondida', !ehLeilao);
  var ehVoleiL = (typeof ehCompeticaoVolei === 'function') && ehCompeticaoVolei(modoSelecionado);
  var ehBasqueteL = (typeof ehCompeticaoBasquete === 'function') && ehCompeticaoBasquete(modoSelecionado);
  if (ehLeilao) {
    // esconde a formação normal, o card de clube e a lista (não se aplicam ao leilão)
    if (formacaoBloco) formacaoBloco.classList.add('escondida');
    if (clubeCard) clubeCard.classList.add('escondida');
    if (blocoSkips) blocoSkips.classList.add('escondida');
    if (listaJogadores) listaJogadores.classList.add('escondida');
    // Garante que SÓ o botão do leilão apareça (esconde os demais botões de ação).
    if (btnRolar) btnRolar.classList.add('escondida');
    if (btnComecarDraft) btnComecarDraft.classList.add('escondida');
    if (btnProximoLivre) btnProximoLivre.classList.add('escondida');
  } else if (!ehVoleiL && !ehBasqueteL) {
    // Saindo do leilão para futebol: reexibe SÓ o bloco de formação (4-3-3 etc.).
    // NÃO reexibe clubeCard/blocoSkips/listaJogadores aqui — eles só aparecem DEPOIS de
    // rolar (senão vazam para o estado inicial do Clássico, antes do sorteio).
    if (formacaoBloco) formacaoBloco.classList.remove('escondida');
  }

  // O resumo do pote só existe no Jogo Livre — trocar de estilo tem de sumir com ele.
  if (typeof renderResumoPote === 'function') renderResumoPote();

  // Draft não sorteia: o card do clube e a lista de jogadores não existem lá.
  if (estiloJogo === 'draft') {
    clubeCard.classList.add('escondida');
    blocoSkips.classList.add('escondida');
    listaJogadores.classList.add('escondida');
  }

  // Com o campo vazio, garante a escolha de formação (pode ter sido travada por um
  // sorteio Clássico anterior). Vale para Draft e Livre: os dois começam do zero.
  // EXCETO no vôlei/basquete, que não têm formação (posições fixas) — não reexibe o bloco.
  var ehVolei = (typeof ehCompeticaoVolei === 'function') && ehCompeticaoVolei(modoSelecionado);
  var ehBasquete = (typeof ehCompeticaoBasquete === 'function') && ehCompeticaoBasquete(modoSelecionado);
  if (!ehVolei && !ehBasquete && (estiloJogo === 'draft' || estiloJogo === 'livre') && slotsPreenchidos === 0) {
    formacaoTravada = false;
    formacaoBloco.classList.remove('escondida');
    pilulasFormacaoJogo.forEach(function (p) { p.disabled = false; });
  }
}


// COMEÇAR — trava a formação, remove a coluna esquerda e amplia o campo.
function comecarDraft() {
  if (estiloJogo !== 'draft' || draftIniciado) return;

  draftIniciado       = true;
  formacaoTravada     = true;
  draftSkipsRestantes = 5;   // orçamento de re-sorteios para este draft

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

// Renderiza as cartas com animação de "abertura de pacote" e glow de raridade.
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

    // "Mostrar Força" desligado: oculta a força e o tier (a cor revelaria a força).
    var revela = (typeof forcaVisivel === 'function') ? forcaVisivel() : true;
    var tier   = revela ? tierDaForca(j.forca) : 'oculto';

    var carta = document.createElement('div');
    carta.className = 'draft-carta carta-entrando tier-' + tier;
    carta.dataset.idx = idx;
    carta.style.animationDelay = atraso + 's';

    carta.innerHTML =
      '<span class="carta-brilho" style="animation-delay:' + (atraso + 0.26).toFixed(2) + 's"></span>' +
      '<span class="carta-nome' + (window.UI ? UI.classeNomeCarta(j.nome) : '') + '" title="' + j.nome + '">' + j.nome + '</span>' +
      '<span class="carta-time">' + j.clube + '</span>' +
      '<span class="carta-ano">' + (j.temporada != null ? j.temporada : (j.edicao != null ? j.edicao : '')) + '</span>' +
      '<span class="carta-posicoes">' + j.posicoes.join('/') + '</span>' +
      '<span class="carta-forca">' + (revela ? j.forca : '?') + '</span>';

    carta.addEventListener('click', function () { selecionarCarta(idx, carta); });
    // Ao fim do "deal", remove a classe de entrada (selecionar não re-anima).
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

  // Simular só aparece com TODAS as vagas preenchidas
  if (slotsPreenchidos >= escalacao.length) verificarCompleto();
}

// FECHAR — esconde o overlay e limpa a vaga-alvo (sem alterar a escalação).
function fecharCartasDraft() {
  draftOverlay.classList.add('escondida');
  draftCartasEl.innerHTML = '';
  draftSlotAtual = null;
  draftCartaSel  = null;
  slotsJogo.forEach(function (s) { s.classList.remove('draft-alvo'); });
}


// RESET do ESTILO DE JOGO — chamado por iniciarTelaJogo() ao (re)entrar na tela.
// ⚠️ Apesar do nome, isto reseta TODOS os estilos, não só o draft. Todo estado que
// pertence a UMA PARTIDA morre aqui.
function resetEstiloDraft() {
  estiloJogo          = 'classico';
  draftIniciado       = false;
  draftSlotAtual      = null;
  draftCartaSel       = null;
  draftSkipsRestantes = 5;

  // O pote do Jogo Livre é estado de PARTIDA. Sem esta linha ele sobrevivia à campanha:
  // você terminava, voltava para a home, escolhia Jogo Livre de novo e caía com as MESMAS
  // seleções da vez anterior, sem poder montar outro pote.
  if (typeof poteLivre !== 'undefined') poteLivre.length = 0;

  var wrapper = document.querySelector('.jogo-wrapper');
  if (wrapper) wrapper.classList.remove('draft-ativo');

  if (draftOverlay)  { draftOverlay.classList.add('escondida'); }
  if (draftCartasEl) { draftCartasEl.innerHTML = ''; }
  if (btnComecarDraft) btnComecarDraft.classList.add('escondida');
  if (btnProximoLivre) btnProximoLivre.classList.add('escondida');   // idem para o Jogo Livre
  if (typeof renderResumoPote === 'function') renderResumoPote();    // some com o resumo do pote
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
