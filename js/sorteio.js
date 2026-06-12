// sorteio.js — animação do sorteio, skips e novo sorteio de clube.

// --- Evita travar o usuário: o sorteio/skip só caem em clubes que conseguem
//     preencher ao menos uma das vagas ainda vazias (ex.: se só falta LE, só
//     entram clubes com um lateral-esquerdo elegível). ---

// Códigos das vagas ainda vazias no time (sem repetir).
function codigosVagasVazias() {
  var faltam = [];
  for (var i = 0; i < slotsJogo.length; i++) {
    if (!escalacao[i]) {
      var cod = slotsJogo[i].dataset.codigo;
      if (faltam.indexOf(cod) < 0) faltam.push(cod);
    }
  }
  return faltam;
}

// Um clube "serve" se tem ao menos um jogador elegível para alguma vaga vazia.
function clubeServeVagas(clube, codigos) {
  if (!codigos.length) return true; // nada faltando → qualquer clube serve
  return clube.jogadores.some(function (j) {
    return codigos.some(function (cod) { return podeOcupar(j, cod); });
  });
}

// Reduz a lista de candidatos aos clubes úteis. Se NENHUM servir (praticamente
// impossível com centenas de clubes), devolve a lista original — nunca trava.
function filtrarClubesUteis(candidatos) {
  var faltam = codigosVagasVazias();
  var uteis = candidatos.filter(function (c) { return clubeServeVagas(c, faltam); });
  return uteis.length > 0 ? uteis : candidatos;
}

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

  var candidatos = API.getClubesPorCompeticao(edicaoSorteada.competicao).filter(function (d) {
    return !(d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao);
  });
  btnSkip.disabled = (skipsRestantes <= 0) || candidatos.length === 0;
}

// Re-sorteia qualquer clube/ano da competição, menos a edição atual.
function fazerSkip() {
  if (skipsRestantes <= 0 || !edicaoSorteada) return;

  var candidatos = API.getClubesPorCompeticao(edicaoSorteada.competicao).filter(function (d) {
    return !(d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao);
  });
  candidatos = filtrarClubesUteis(candidatos);   // só clubes que preenchem uma vaga vazia
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
// Evita repetir o clube+edição que acabou de sair (igual ao "Outro sorteio").
function rolar() {
  var filtro = COMPETICOES[modoSelecionado].dados;

  var opcoes = API.getClubesPorCompeticao(filtro).filter(function (d) {
    if (edicaoSorteada && d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao) return false;
    return true;
  });
  opcoes = filtrarClubesUteis(opcoes);   // só clubes que ajudam a preencher uma vaga vazia
  if (opcoes.length === 0) return;

  var sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
  clubeSorteado  = sorteado.clube;
  edicaoSorteada = sorteado;

  cancelarSelecao();
  listaJogadores.classList.add('escondida');

  // No primeiro sorteio, esconde os blocos de formação, estilo e nome (já escolhidos).
  if (!formacaoTravada) {
    formacaoTravada = true;
    formacaoBloco.classList.add('escondida');
    if (estiloBloco) estiloBloco.classList.add('escondida');
    if (jogoNomeBloco) jogoNomeBloco.classList.add('escondida');
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
