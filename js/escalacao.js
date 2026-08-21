// escalacao.js — montar XI: lista, alocar, mover, trocar, box score.

// Força deve aparecer? ON sempre mostra; OFF só revela com o time completo (todas as vagas).
function forcaVisivel() {
  return (typeof mostrarForca === 'undefined') ? true : (mostrarForca || slotsPreenchidos >= escalacao.length);
}

// BOX SCORE — reconstrói a lista de vagas a cada alocação ou mover

function atualizarBoxScore() {
  var codigos = codigosFormacao[formacaoJogo];
  boxScore.innerHTML = '';
  var revela = forcaVisivel();

  for (var i = 0; i < escalacao.length; i++) {
    var div    = document.createElement('div');
    var codigo = escalacao[i] ? escalacao[i].codigo : codigos[i];
    var nome   = escalacao[i] ? escalacao[i].nome   : '---';
    div.className = 'box-linha' + (escalacao[i] ? '' : ' vazio');

    // Força só nos slots preenchidos; oculta ("?") se "Mostrar Força" estiver off.
    var forcaHtml = escalacao[i]
      ? '<span class="box-forca' + (revela ? '' : ' forca-oculta') + '">' + (revela ? escalacao[i].forca : '?') + '</span>'
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
  // Futebol: MC conta em ambas (meio-campo misto).
  // Vôlei: PON/OPO/CEN atacam (pontuam); LEV (armador) e LIB (defensor puro) = defesa.
  var codigosAtaque = ['PE', 'PD', 'ATA', 'MD', 'ME', 'MEI', 'MC', 'PON', 'OPO', 'CEN'];
  var codigosDefesa = ['GOL', 'ZAG', 'LD', 'LE', 'VOL', 'MC', 'LEV', 'LIB'];

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

  // "Mostrar Força" desligado → médias só aparecem com o time completo.
  if (!forcaVisivel()) {
    if (forcaGeral)  forcaGeral.textContent  = '?';
    if (forcaAtaque) forcaAtaque.textContent = '?';
    if (forcaDefesa) forcaDefesa.textContent = '?';
    return;
  }

  if (forcaGeral)  forcaGeral.textContent  = media(todos);
  if (forcaAtaque) forcaAtaque.textContent = media(ataque);
  if (forcaDefesa) forcaDefesa.textContent = media(defesa);
}


// INICIAR TELA DO JOGO — reseta TUDO ao entrar numa nova partida

// Atualiza a barra de orçamento acima do mapa (só visível no modo Orçamento).
function atualizarBarraOrcamento() {
  var barra = document.getElementById('orcamento-barra');
  if (!barra) return;
  var modoOrc = (typeof estiloJogo !== 'undefined' && estiloJogo === 'orcamento');
  barra.classList.toggle('escondida', !modoOrc);
  if (!modoOrc) return;

  var restante = orcamentoRestante();
  var elRest = document.getElementById('orcamento-restante');
  var elTeto = barra.querySelector('.orcamento-teto');
  var elFill = document.getElementById('orcamento-preenchido');
  if (elRest) elRest.textContent = '$' + restante;
  if (elTeto) elTeto.textContent = '/ $' + ORCAMENTO_TETO;
  if (elFill) {
    // A barra reflete o que RESTA: cheia no início, esvazia ao comprar (tipo tanque).
    var pctRestante = Math.max(0, Math.min(100, (restante / ORCAMENTO_TETO) * 100));
    elFill.style.width = pctRestante + '%';
    // Cores pelo que resta: verde (folgado) → amarelo (apertando) → vermelho (quase no fim).
    elFill.classList.toggle('orc-medio', pctRestante <= 30 && pctRestante > 10);
    elFill.classList.toggle('orc-alto', pctRestante <= 10);
  }
}

// Atualiza o texto "formação · modo" no cabeçalho da tela do jogo
function atualizarHeaderInfo() {
  if (jogoHeaderInfo) {
    var estilo = 'CLÁSSICO';
    if (typeof estiloJogo !== 'undefined') {
      if (estiloJogo === 'draft') estilo = 'DRAFT';
      else if (estiloJogo === 'orcamento') estilo = 'ORÇAMENTO';
    }
    // No vôlei/basquete não há formação (posições fixas), então o cabeçalho não mostra
    // 'volei'/'basquete' como se fosse uma — começa direto pela competição.
    var ehVolei = (typeof ehCompeticaoVolei === 'function') && ehCompeticaoVolei(modoSelecionado);
    var ehBasquete = (typeof ehCompeticaoBasquete === 'function') && ehCompeticaoBasquete(modoSelecionado);
    var semFormacao = ehVolei || ehBasquete;
    var comp = COMPETICOES[modoSelecionado].label.toUpperCase();
    var txt = semFormacao
      ? (comp + ' · ' + estilo)
      : (formacaoJogo + ' · ' + comp + ' · ' + estilo);
    jogoHeaderInfo.textContent = txt;
  }
  // A barra de orçamento (acima do mapa) mostra o valor em destaque no modo Orçamento.
  if (typeof atualizarBarraOrcamento === 'function') atualizarBarraOrcamento();
}

function iniciarTelaJogo() {
  // Bifurca por esporte: vôlei usa a "formação" própria (LEV/PON/CEN/LIB/OPO);
  // basquete usa a sua (PG/SG/SF/PF/C); futebol segue no 4-3-3 padrão.
  var ehVolei = (typeof ehCompeticaoVolei === 'function') && ehCompeticaoVolei(modoSelecionado);
  var ehBasquete = (typeof ehCompeticaoBasquete === 'function') && ehCompeticaoBasquete(modoSelecionado);
  // Modo Leilão (futebol reduzido, 5 jogadores): usa a formação de leilão escolhida.
  var ehLeilao = (typeof estiloJogo !== 'undefined' && estiloJogo === 'leilao');
  var formLeilao = (typeof Leilao !== 'undefined' && Leilao.formacao && Leilao.formacao() === 'ofensivo')
    ? 'leilao_ofensivo' : 'leilao_normal';
  formacaoJogo       = ehVolei ? 'volei' : (ehBasquete ? 'basquete' : (ehLeilao ? formLeilao : '4-3-3'));
  // NÃO usar formacaoTravada aqui: ela significa "time já rolado" no resto do sistema
  // (trava troca de ESTILO, salva sessão, etc.). As pílulas de formação já ficam
  // escondidas no vôlei (mais abaixo), então não há o que travar.
  jogadorSelecionado = null;
  // Estado de "time já rolado" começa limpo a cada nova partida (evita herdar true de
  // uma partida anterior, o que travaria a troca de estilo e a rolagem).
  formacaoTravada    = false;
  if (typeof draftIniciado !== 'undefined') draftIniciado = false;
  // SEMENTE do número de titulares: único ponto que consulta o catálogo de esportes.
  // Todo o resto do código deriva de `escalacao.length` — nada mais crava o 11.
  // Exceção: modo Leilão é reduzido (5 jogadores), independente do esporte base (futebol).
  var nTitulares = ehLeilao ? 5 : (typeof titularesAtuais === 'function' ? titularesAtuais() : 11);
  escalacao          = Array(nTitulares).fill(null);
  slotsPreenchidos   = 0;
  slotMovendo        = null;
  clubeSorteado      = '';
  edicaoSorteada     = null;
  skipsRestantes     = 5;

  // Remonta o campo de jogo se o nº de slots mudou (troca de esporte: 11 futebol ↔ 6 vôlei).
  // slotsJogo é montado na carga com o esporte inicial; aqui garantimos que bate com escalacao.
  if (typeof remontarCampoJogo === 'function' && slotsJogo.length !== escalacao.length) {
    remontarCampoJogo(escalacao.length);
  }


  // Vôlei e basquete não têm formação (posições fixas): esconde o bloco de pílulas de
  // formação. Futebol mostra normalmente.
  if (ehVolei || ehBasquete) {
    formacaoBloco.classList.add('escondida');
  } else {
    formacaoBloco.classList.remove('escondida');
  }

  // Tamanho da temporada: SÓ no basquete (reduzida/regular/completa).
  var tamanhoBloco = document.getElementById('jogo-tamanho-bloco');
  if (tamanhoBloco) {
    tamanhoBloco.classList.toggle('escondida', !ehBasquete);
    // Trava a escolha depois que a campanha já começou (não dá para mudar no meio).
    var campanhaEmAndamento = (typeof campanhaBasqueteAtual !== 'undefined' && campanhaBasqueteAtual);
    tamanhoBloco.classList.toggle('jogo-tamanho-travado', !!campanhaEmAndamento);
    var pilulasTam = tamanhoBloco.querySelectorAll('.pilula');
    pilulasTam.forEach(function (b) { b.disabled = !!campanhaEmAndamento; });
  }
  if (jogoNomeBloco) jogoNomeBloco.classList.remove('escondida');

  // Aparência do campo de jogo: quadra de vôlei/basquete ou campo de futebol.
  if (campoJogo) {
    campoJogo.classList.toggle('quadra-volei', ehVolei);
    campoJogo.classList.toggle('quadra-basquete', ehBasquete);
    // Elementos internos da quadra. Vôlei: piso/rede/linhas. Basquete: piso/garrafão/
    // linha de 3. Removidos ao trocar de esporte. Mesma abordagem do mapa-vitrine.
    var elsVolei = ['piso', 'rede', 'linha-ataque', 'linha-ataque-baixo'];
    var elsBasq = ['bq-piso', 'bq-garrafao', 'bq-linha3'];
    var jaTemPiso = campoJogo.querySelector('.piso');
    var jaTemBqPiso = campoJogo.querySelector('.bq-piso');
    // limpa o que não for do esporte atual
    if (!ehVolei && jaTemPiso) elsVolei.forEach(function (cls) { var el = campoJogo.querySelector('.' + cls); if (el && el.parentNode) el.parentNode.removeChild(el); });
    if (!ehBasquete && jaTemBqPiso) elsBasq.forEach(function (cls) { var el = campoJogo.querySelector('.' + cls); if (el && el.parentNode) el.parentNode.removeChild(el); });
    // cria os do esporte atual
    if (ehVolei && !jaTemPiso) {
      elsVolei.forEach(function (cls) {
        var el = document.createElement('div'); el.className = cls;
        campoJogo.insertBefore(el, campoJogo.querySelector('.slot-jogo') || null);
      });
    } else if (ehBasquete && !jaTemBqPiso) {
      elsBasq.forEach(function (cls) {
        var el = document.createElement('div'); el.className = cls;
        campoJogo.insertBefore(el, campoJogo.querySelector('.slot-jogo') || null);
      });
    }
  }

  // Reexibe o switch "Mostrar Força" e sincroniza com a preferência atual.
  if (jogoForcaBloco) jogoForcaBloco.classList.remove('escondida');
  var _swForca = document.getElementById('switch-forca');
  if (_swForca && typeof mostrarForca !== 'undefined') _swForca.checked = mostrarForca;

  // Pílulas de formação: só no futebol (vôlei e basquete não trocam de formação —
  // posições fixas). Antes checava só !ehVolei, deixando o basquete habilitar as pílulas.
  if (!ehVolei && !ehBasquete) {
    pilulasFormacaoJogo.forEach(function (p) {
      p.disabled = false;
      if (p.dataset.formacaoJogo === '4-3-3') {
        p.classList.add('pilula-ativa');
      } else {
        p.classList.remove('pilula-ativa');
      }
    });
  }

  // A visibilidade dos botões é da tabela BOTAO_DO_ESTILO (draft.js) — mostrar o
  // btnRolar direto aqui furava a tabela e deixava dois botões visíveis ao voltar
  // de um Jogo Livre. Um lugar decide qual botão aparece.
  btnRolar.classList.remove('escondida');
  clubeCard.classList.add('escondida');
  listaJogadores.classList.add('escondida');
  blocoSkips.classList.add('escondida');
  btnSimular.classList.add('escondida');
  skipContador.textContent = '5'; // restaura o contador visual

  // Volta ao estilo Clássico e desfaz qualquer estado de Draft
  if (typeof resetEstiloDraft === 'function') resetEstiloDraft();
  // Mostra/esconde a pílula "Orçamento" conforme a competição (fase 1: só Libertadores).
  if (typeof sincronizarPilulaOrcamento === 'function') sincronizarPilulaOrcamento();

  campoJogo.classList.remove('tem-selecao');

  atualizarBoxScore();
  atualizarHeaderInfo();

  slotsJogo.forEach(function (s) {
    s.classList.add('sem-transicao');
    s.classList.remove('compativel', 'preenchido', 'movendo');
  });
  posicionarSlotsJogo(formacaoJogo);

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      slotsJogo.forEach(function (s) { s.classList.remove('sem-transicao'); });
    });
  });
}


// SELECIONAR FORMAÇÃO NA TELA DO JOGO (só antes do 1º sorteio)

function selecionarFormacaoJogo(nome) {
  if (formacaoTravada) return;
  // Vôlei e basquete não trocam de formação (posições fixas) — ignora qualquer clique.
  if ((typeof ehCompeticaoVolei === 'function') && ehCompeticaoVolei(modoSelecionado)) return;
  if ((typeof ehCompeticaoBasquete === 'function') && ehCompeticaoBasquete(modoSelecionado)) return;

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


// CONSTRUIR LISTA DE JOGADORES — cada jogador entra disponível ou indisponível
// (já alocado, ou sem vaga vazia compatível).

// Ranking fixo de posições: GOL → LE → ZAG → LD → VOL → MC → ME → MEI → MD → PE → ATA → PD
var ORDEM_POSICAO = ['GOL', 'LE', 'ZAG', 'LD', 'VOL', 'MC', 'ME', 'MEI', 'MD', 'PE', 'ATA', 'PD'];

// O elenco do clube sorteado, cru. Guardado para os filtros re-renderizarem sem novo sorteio.
var _elencoAtual = [];

function construirListaJogadores(jogadores) {
  _elencoAtual = jogadores || [];
  renderListaJogadores();
}

// Redesenha a lista com os filtros atuais — sem sortear de novo.
function renderListaJogadores() {
  listaJogadores.innerHTML = '';
  // Ordena pela PRIMEIRA posição — o comportamento de sempre.
  var ordenados = _elencoAtual.slice().sort(function (a, b) {
    var ia = ORDEM_POSICAO.indexOf(a.posicoes[0]);
    var ib = ORDEM_POSICAO.indexOf(b.posicoes[0]);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  ordenados.forEach(function (jogador) {
    var item = document.createElement('div');
    item.className = 'item-jogador';

    // (a) Já foi alocado: indisponível se o MESMO jogador (pelo nome) já está em
    //     campo, mesmo que venha de outra edição/clube.
    var jaAlocado = escalacao.some(function (e) {
      return e && e.nome === jogador.nome;
    });

    // (b) Sem nenhuma vaga vazia compatível com este jogador
    var temVagaDisponivel = false;
    if (!jaAlocado) {
      for (var si = 0; si < escalacao.length; si++) {
        if (!escalacao[si] && podeOcupar(jogador, codigosFormacao[formacaoJogo][si])) {
          temVagaDisponivel = true;
          break;
        }
      }
    }

    // (c) Modo Orçamento: preço do jogador e se cabe no restante.
    var modoOrc = (typeof estiloJogo !== 'undefined' && estiloJogo === 'orcamento');
    var preco = modoOrc ? precoJogador(jogador.forca) : 0;
    var cabeNoOrcamento = !modoOrc || preco <= orcamentoRestante();

    var disponivel = !jaAlocado && temVagaDisponivel && cabeNoOrcamento;

    if (!disponivel) {
      // Indisponível: visual apagado, sem evento de clique
      item.classList.add('ja-escalado');
      // No orçamento, marca especificamente quem não cabe (custa mais que o restante).
      if (modoOrc && !jaAlocado && temVagaDisponivel && !cabeNoOrcamento) {
        item.classList.add('sem-orcamento');
      }
    } else {
      // Disponível: registra o clique
      item.addEventListener('click', function () {
        clicarJogador(jogador, item);
      });
    }

    var posStr = jogador.posicoes.join('/');
    var revela = forcaVisivel();

    item.innerHTML =
      '<span class="jogador-nome" title="' + jogador.nome + '">' + jogador.nome + '</span>' +
      '<span class="jogador-posicoes">' + posStr        + '</span>' +
      (modoOrc ? '<span class="jogador-preco" title="Custo do jogador">$' + preco + '</span>' : '') +
      '<span class="jogador-forca' + (revela ? '' : ' forca-oculta') + '">' + (revela ? jogador.forca : '?') + '</span>';

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
  //
  // ⚠️ `block: 'center'` centraliza o CAMPO INTEIRO — e o campo é mais alto que a tela do
  // celular. Centralizar empurra o topo dele para fora e o usuário aterrissa no bloco de
  // forças, embaixo. Tinha que subir a cada jogador alocado.
  // `block: 'start'` alinha o TOPO do campo com o topo da tela: você vê o campo inteiro
  // a partir de onde ele começa, que é o que a pessoa quer ver.
  if (window.innerWidth <= 768) {
    campoJogo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// ALOCAR JOGADOR — coloca o jogador da lista no slot clicado
// Esconde o card e a lista após a alocação.

function alocarJogador(indice) {
  var slot = slotsJogo[indice];

  escalacao[indice] = {
    // `id` identifica a PESSOA; `nome` é só o rótulo. Sem ele, as conquistas de Combinação
    // comparam string e não distinguem o Ronaldo Fenômeno do goleiro do Bahia — nem o
    // Luis Suárez uruguaio do espanhol de 1965.
    id:       jogadorSelecionado.id,
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
  atualizarHeaderInfo();   // atualiza o orçamento restante no modo Orçamento

  if (slotsPreenchidos >= escalacao.length) {
    verificarCompleto();
  } else {
    btnRolar.classList.remove('escondida');
  }

  // Modo Orçamento: depois de comprar, checa se o jogador ficou sem saída (falência).
  if (typeof verificarFalencia === 'function') verificarFalencia();
}


// INICIAR MOVER — seleciona um jogador já no campo e acende os destinos possíveis
// (vagas vazias compatíveis e jogadores com quem pode trocar).

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

// --- Reconstrói a lista do time sorteado (se visível) após mover/trocar no campo ---
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


// CLICAR NUM SLOT — roteia para a ação correta conforme o estado da vaga.

function clicarSlot(indice) {
  // No modo Draft já iniciado, o roteamento dos cliques é próprio (cartas + mover)
  if (typeof estiloJogo !== 'undefined' && estiloJogo === 'draft' && draftIniciado) {
    clicarSlotDraft(indice);
    return;
  }

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
