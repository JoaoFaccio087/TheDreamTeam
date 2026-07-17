// sorteio.js — animação do sorteio, skips e novo sorteio de clube.

// O sorteio/skip só caem em clubes que conseguem preencher alguma vaga ainda vazia
// (se só falta LE, só entram clubes com um lateral-esquerdo elegível).

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
// ── MODO ORÇAMENTO ────────────────────────────────────────────────────────────
// No Orçamento, "servir" não é só ter a posição: o jogador precisa CABER no que sobrou.
// Sem isto, o sorteio entregava clubes cujos jogadores da posição faltante eram caros demais.
function _modoOrcamento() {
  return (typeof estiloJogo !== 'undefined' && estiloJogo === 'orcamento');
}
function jogadorCabeNoOrcamento(j) {
  if (!_modoOrcamento()) return true;
  return precoJogador(j.forca) <= orcamentoRestante();
}

// Um clube serve se tem ALGUM jogador que (a) ocupa uma vaga vazia e (b) cabe no orçamento.
function clubeServeVagas(clube, codigos) {
  if (!codigos.length) return true; // nada faltando → qualquer clube serve
  return clube.jogadores.some(function (j) {
    if (!jogadorCabeNoOrcamento(j)) return false;
    return codigos.some(function (cod) { return podeOcupar(j, cod); });
  });
}

// Reduz aos clubes úteis. Nos modos normais, se nenhum servir devolve a lista original
// (nunca trava). No Orçamento, devolver [] é a resposta correta: significa FALÊNCIA — não
// adianta sortear um clube onde nada é comprável.
function filtrarClubesUteis(candidatos) {
  var faltam = codigosVagasVazias();
  var uteis = candidatos.filter(function (c) { return clubeServeVagas(c, faltam); });
  if (uteis.length > 0) return uteis;
  if (_modoOrcamento() && faltam.length) return [];
  return candidatos;
}

// Dá para comprar alguém no clube que está na tela agora?
function haCompraPossivelNoClubeAtual() {
  if (!edicaoSorteada) return true;
  var faltam = codigosVagasVazias();
  if (!faltam.length) return true;
  return clubeServeVagas(edicaoSorteada, faltam);
}

// Existe, em toda a competição, algum clube que ainda serviria?
function existeClubeQueServe() {
  if (typeof modoSelecionado === 'undefined' || !COMPETICOES[modoSelecionado]) return false;
  var faltam = codigosVagasVazias();
  if (!faltam.length) return false;
  // MESMO universo do rolar(): no Jogo Livre, olhar a competição inteira aqui diria que
  // "existe clube que serve" quando na verdade ele está fora do pote e nunca vai cair.
  return universoDoSorteio().some(function (c) { return clubeServeVagas(c, faltam); });
}

// FALÊNCIA: time incompleto e NENHUM jogador comprável — nem no clube da vez, nem em qualquer
// outro clube da competição. Não depende dos skips: o botão "Rolar" já sorteia um clube por
// jogador (o skip só troca o clube da vez). Chamada após cada alocação e após cada sorteio/skip.
function verificarFalencia() {
  if (!_modoOrcamento()) return false;
  if (!codigosVagasVazias().length) return false;        // time completo: nada a fazer
  if (haCompraPossivelNoClubeAtual()) return false;      // ainda dá para comprar aqui
  if (existeClubeQueServe()) return false;               // ainda dá para sortear outro clube
  mostrarFalencia();
  return true;
}

function mostrarFalencia() {
  var restante = (typeof orcamentoRestante === 'function') ? orcamentoRestante() : 0;
  var vagas = 0;
  for (var i = 0; i < escalacao.length; i++) { if (!escalacao[i]) vagas++; }
  var plural = vagas === 1 ? 'vaga' : 'vagas';
  var html =
    '<p>Você ficou com <strong>$' + restante + '</strong> e ainda faltam <strong>' +
    vagas + ' ' + plural + '</strong> para preencher.</p>' +
    '<p>Nenhum jogador disponível cabe no que sobrou.</p>';

  if (typeof UI === 'undefined' || typeof UI.modalConfirm !== 'function') {
    if (typeof iniciarTelaJogo === 'function') iniciarTelaJogo();
    return;
  }
  UI.modalConfirm({
    titulo: 'Falência!',
    html: html,
    confirmar: 'Recomeçar',
    cancelar: 'Voltar ao início',
    perigo: true
  }).then(function (recomecar) {
    if (recomecar) { if (typeof iniciarTelaJogo === 'function') iniciarTelaJogo(); }
    else { if (typeof voltarHome === 'function') voltarHome(); }
  });
}

// Preenche o escudo/bandeira no card do sorteio, usando a API única (decide clube/seleção).
function preencherEscudoCard(edicao) {
  if (typeof clubeEscudo === 'undefined' || !clubeEscudo) return;
  clubeEscudo.innerHTML = (typeof Escudos !== 'undefined' && Escudos.porNomeSeModo)
    ? Escudos.porNomeSeModo(edicao.clube, modoSelecionado) : '';
}

// Animação estilo "slot machine" (~900ms) até revelar o clube sorteado.
function animarSorteio(opcoes, sorteado, onFim) {
  clubeCard.classList.remove('escondida');
  if (clubeEscudo) clubeEscudo.innerHTML = '';   // limpa durante o giro

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
      preencherEscudoCard(sorteado);
      onFim();
    }
  }, intervaloMs);
}

// Atualiza o contador e habilita o skip só se há saldo e algum candidato.
function atualizarBotoesSkip() {
  skipContador.textContent = skipsRestantes;

  var candidatos = candidatosSkip();
  btnSkip.disabled = (skipsRestantes <= 0) || candidatos.length === 0;
}

// Candidatos do "outro sorteio": tudo menos a edição atual, dentro do universo do modo.
// ⚠️ Tem de sair de `universoDoSorteio()`, não da competição: no Jogo Livre o skip
// entregaria clube FORA do pote — um buraco no modo, e silencioso.
function candidatosSkip() {
  var c = universoDoSorteio().filter(function (d) {
    return !(edicaoSorteada && d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao);
  });
  // No Orçamento, um clube só conta se tiver jogador comprável para uma vaga.
  return filtrarClubesUteis(c);
}

// Re-sorteia qualquer clube/ano do universo do modo, menos a edição atual.
function fazerSkip() {
  if (skipsRestantes <= 0 || !edicaoSorteada) return;

  var candidatos = candidatosSkip();
  if (candidatos.length === 0) {                 // sem clube comprável → falência
    if (_modoOrcamento()) mostrarFalencia();
    return;
  }

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
// O universo de onde o dado sorteia. No Jogo Livre é o POTE que o usuário montou;
// nos demais, a competição inteira — exatamente como sempre foi.
// É a única diferença do Jogo Livre: o resto do fluxo (rola → cai clube → escolhe 1
// jogador → rola de novo) já é o do Clássico e não muda em nada.
function universoDoSorteio() {
  var todos = API.getClubesPorCompeticao(COMPETICOES[modoSelecionado].dados);
  if (estiloJogo !== 'livre' || !poteLivre.length) return todos;
  return todos.filter(function (d) { return poteLivre.indexOf(d.clube + '|' + d.edicao) >= 0; });
}

function rolar() {
  var opcoes = universoDoSorteio().filter(function (d) {
    if (edicaoSorteada && d.clube === edicaoSorteada.clube && d.edicao === edicaoSorteada.edicao) return false;
    return true;
  });
  opcoes = filtrarClubesUteis(opcoes);   // só clubes que ajudam a preencher uma vaga vazia
  if (opcoes.length === 0) {              // no Orçamento, isso significa que nada é comprável
    if (_modoOrcamento()) mostrarFalencia();
    return;
  }

  var sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
  clubeSorteado  = sorteado.clube;
  edicaoSorteada = sorteado;

  cancelarSelecao();
  listaJogadores.classList.add('escondida');

  // No primeiro sorteio, esconde os blocos de formação, estilo e nome (já escolhidos).
  if (!formacaoTravada) {
    formacaoTravada = true;
    // O pote não pode mais ser editado depois do 1º sorteio — some com o resumo.
    if (typeof renderResumoPote === 'function') renderResumoPote();
    formacaoBloco.classList.add('escondida');
    if (estiloBloco) estiloBloco.classList.add('escondida');
    if (jogoNomeBloco) jogoNomeBloco.classList.add('escondida');
    if (jogoForcaBloco) jogoForcaBloco.classList.add('escondida'); // trava o "Mostrar Força" durante o jogo
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
