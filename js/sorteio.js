// ============================================================
//  sorteio.js — animação do sorteio, skips e rolagem de clube
// ============================================================



// ====================================================================
// ANIMAÇÃO DO SORTEIO — efeito "slot machine" por ~900ms
// ====================================================================

function animarSorteio(opcoes, sorteado, onFim) {
  clubeCard.classList.remove('escondida');

  // Sinaliza que o sorteio está em andamento
  clubeStatus.textContent = 'SORTEANDO…';
  clubeStatus.classList.remove('revelado');

  var duracaoMs   = 900;
  var intervaloMs = 75;
  var decorrido   = 0;

  var temporizador = setInterval(function () {
    var temp = opcoes[Math.floor(Math.random() * opcoes.length)];
    clubeNome.textContent   = temp.clube;
    clubeEdicao.textContent = rotuloCompeticao(temp.competicao) + ' · ' + temp.edicao;

    decorrido += intervaloMs;

    if (decorrido >= duracaoMs) {
      clearInterval(temporizador);
      clubeNome.textContent   = sorteado.clube;
      clubeEdicao.textContent = rotuloCompeticao(sorteado.competicao) + ' · ' + sorteado.edicao;
      // Clube revelado: troca o status e destaca na cor do tema
      clubeStatus.textContent = 'SAIU';
      clubeStatus.classList.add('revelado');
      onFim();
    }
  }, intervaloMs);
}


// ====================================================================
// SKIPS — atualiza o estado dos botões e do contador
// ====================================================================

function atualizarBotoesSkip() {
  skipContador.textContent = skipsRestantes;

  // Skip único: qualquer clube e qualquer ano da competição (menos a edição atual)
  var candidatos = DADOS.filter(function (d) {
    return d.competicao === edicaoSorteada.competicao &&
           !(d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao);
  });
  btnSkip.disabled = (skipsRestantes <= 0) || candidatos.length === 0;
}


// ====================================================================
// SKIPS — executa o skip e anima o novo sorteio
// ====================================================================

function fazerSkip() {
  if (skipsRestantes <= 0 || !edicaoSorteada) return;

  // Skip único: qualquer clube e qualquer ano da competição (menos a edição atual)
  var candidatos = DADOS.filter(function (d) {
    return d.competicao === edicaoSorteada.competicao &&
           !(d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao);
  });
  if (candidatos.length === 0) return;

  skipsRestantes--;
  btnSkip.disabled = true; // evita clique duplo durante a animação

  var novaEdicao = candidatos[Math.floor(Math.random() * candidatos.length)];
  edicaoSorteada = novaEdicao;
  clubeSorteado  = novaEdicao.clube;

  cancelarSelecao();
  listaJogadores.classList.add('escondida');

  animarSorteio(candidatos, novaEdicao, function () {
    construirListaJogadores(novaEdicao.jogadores);
    listaJogadores.classList.remove('escondida');
    requestAnimationFrame(function () { listaJogadores.scrollTop = 0; });
    atualizarBotoesSkip();
  });
}


// ====================================================================
// ROLAR — sorteia um clube e anima o card
// ====================================================================

function rolar() {
  var filtro = COMPETICOES[modoSelecionado].dados;

  var opcoes = DADOS.filter(function (d) { return d.competicao === filtro; });
  if (opcoes.length === 0) return;

  var sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
  clubeSorteado  = sorteado.clube;  // guarda para checar disponibilidade depois
  edicaoSorteada = sorteado;        // guarda a entrada completa para os skips

  // Cancela qualquer seleção pendente antes de mostrar a nova lista
  cancelarSelecao();
  listaJogadores.classList.add('escondida');

  // No 1º sorteio: faz SUMIR o bloco de formação
  if (!formacaoTravada) {
    formacaoTravada = true;
    formacaoBloco.classList.add('escondida');
  }

  // Esconde Rolar e os skips durante a animação
  btnRolar.classList.add('escondida');
  blocoSkips.classList.add('escondida');

  animarSorteio(opcoes, sorteado, function () {
    construirListaJogadores(sorteado.jogadores);
    listaJogadores.classList.remove('escondida');
    // Zera o scroll SÓ com a lista já visível (escondida = display:none ignora o scrollTop)
    requestAnimationFrame(function () { listaJogadores.scrollTop = 0; });
    // Exibe skips e atualiza quais botões estão disponíveis
    blocoSkips.classList.remove('escondida');
    atualizarBotoesSkip();
  });
}
