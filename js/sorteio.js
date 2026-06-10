// sorteio.js — animação do sorteio, skips e novo sorteio de clube.

// Animação estilo "slot machine" (~900ms) até revelar o clube sorteado.
function animarSorteio(opcoes, sorteado, onFim) {
  clubeCard.classList.remove('escondida');

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
      clubeStatus.textContent = 'SAIU';
      clubeStatus.classList.add('revelado');
      onFim();
    }
  }, intervaloMs);
}

// Atualiza o contador e habilita o skip só se há saldo e algum candidato.
function atualizarBotoesSkip() {
  skipContador.textContent = skipsRestantes;

  var candidatos = DADOS.filter(function (d) {
    return d.competicao === edicaoSorteada.competicao &&
           !(d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao);
  });
  btnSkip.disabled = (skipsRestantes <= 0) || candidatos.length === 0;
}

// Re-sorteia qualquer clube/ano da competição, menos a edição atual.
function fazerSkip() {
  if (skipsRestantes <= 0 || !edicaoSorteada) return;

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

// Sorteia um clube da competição escolhida e dispara a animação.
function rolar() {
  var filtro = COMPETICOES[modoSelecionado].dados;

  var opcoes = DADOS.filter(function (d) { return d.competicao === filtro; });
  if (opcoes.length === 0) return;

  var sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
  clubeSorteado  = sorteado.clube;
  edicaoSorteada = sorteado;

  cancelarSelecao();
  listaJogadores.classList.add('escondida');

  // No primeiro sorteio, esconde o bloco de formação.
  if (!formacaoTravada) {
    formacaoTravada = true;
    formacaoBloco.classList.add('escondida');
  }

  btnRolar.classList.add('escondida');
  blocoSkips.classList.add('escondida');

  animarSorteio(opcoes, sorteado, function () {
    construirListaJogadores(sorteado.jogadores);
    listaJogadores.classList.remove('escondida');
    // scrollTop só funciona com a lista já visível (display:none ignora a rolagem).
    requestAnimationFrame(function () { listaJogadores.scrollTop = 0; });
    blocoSkips.classList.remove('escondida');
    atualizarBotoesSkip();
  });
}
