//  main.js — INICIALIZAÇÃO e todos os event listeners (carregar por último)

// EVENTOS

pilulasModo.forEach(function (pilula) {
  pilula.addEventListener('click', function () { selecionarModo(this.dataset.modo); });
});

pilulasFormacao.forEach(function (pilula) {
  pilula.addEventListener('click', function () {
    selecionarFormacaoAmostra(this.dataset.formacaoAmostra);
  });
});

botaoJogar.addEventListener('click', jogarAgora);
botaoVoltarHome.addEventListener('click', voltarHome);
if (btnVoltarMobile) btnVoltarMobile.addEventListener('click', voltarHome);

pilulasFormacaoJogo.forEach(function (pilula) {
  pilula.addEventListener('click', function () {
    selecionarFormacaoJogo(this.dataset.formacaoJogo);
  });
});

btnRolar.addEventListener('click', rolar);

// --- Modo Draft: estilo, começar, seleção de carta, fechar overlay ---
pilulasEstilo.forEach(function (pilula) {
  pilula.addEventListener('click', function () { selecionarEstilo(this.dataset.estilo); });
});

btnComecarDraft.addEventListener('click', comecarDraft);
btnSelecionarDraft.addEventListener('click', confirmarSelecaoDraft);
btnResortearDraft.addEventListener('click', resortearCartas);

// Clicar no fundo do overlay (fora das cartas e do botão) fecha sem selecionar
draftOverlay.addEventListener('click', function (ev) {
  if (ev.target === draftOverlay) fecharCartasDraft();
});

// Esc também fecha o overlay de cartas
document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape' && !draftOverlay.classList.contains('escondida')) {
    fecharCartasDraft();
  }
});

// Delegação: um único ouvinte no campo captura cliques em qualquer slot,
// inclusive jogadores já alocados (evita problemas de escopo de closure)
campoJogo.addEventListener('click', function (ev) {
  var slotAlvo = ev.target.closest('.slot-jogo');
  if (!slotAlvo) return;
  var indice = Array.from(slotsJogo).indexOf(slotAlvo);
  if (indice >= 0) clicarSlot(indice);
});

// Simular: entra na tela de simulação SEMPRE começando uma campanha limpa
// com o time atual (evita herdar histórico/stats de uma campanha anterior
// quando o usuário volta pra escalação e simula de novo).
btnSimular.addEventListener('click', function () {
  reiniciarCampanha();              // zera histórico, stats e contadores
  acaoBotao = 'iniciar';            // garante o estado inicial do botão
  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.textContent = 'Iniciar Campanha \u25BA';
  configurarTelaSimulacao();        // mostra/esconde a tabela e o "Pular tudo" do Brasileirão
  mostrarTela(telaSimulacao);
});

// Tela de simulação: comportamento do botão muda conforme o estado da campanha
document.getElementById('btn-iniciar-jogo').addEventListener('click', function () {
  if (acaoBotao === 'nova-campanha') {
    // Venceu a Final → reinicia e começa nova campanha imediatamente
    reiniciarCampanha();
    montarCampanha();
    acaoBotao = 'iniciar';
    this.textContent = 'Iniciar Campanha ►';
    iniciarPartida();
  } else if (acaoBotao === 'novo-time') {
    // Derrota/eliminação → zera tudo e volta pra tela inicial
    reiniciarCampanha();
    acaoBotao = 'iniciar';
    this.textContent = 'Iniciar Campanha ►';
    voltarHome();
  } else if (acaoBotao === 'proximo') {
    iniciarPartida();
  } else {
    // 'iniciar' → monta a campanha (grupo + fases) e dispara o primeiro jogo
    montarCampanha();
    iniciarPartida();
  }
});

// Pílulas de MODO da simulação: alterna ativo e salva a escolha
simPilulasModo.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modoSimulacao = this.dataset.simModo;
    simPilulasModo.forEach(function (b) { b.classList.remove('sim-pilula-ativa'); });
    this.classList.add('sim-pilula-ativa');
  });
});

// Pílulas de VELOCIDADE da simulação: alterna ativo e salva a escolha
simPilulasVel.forEach(function (btn) {
  btn.addEventListener('click', function () {
    velocidadeSimulacao = this.dataset.simVel;
    simPilulasVel.forEach(function (b) { b.classList.remove('sim-pilula-ativa'); });
    this.classList.add('sim-pilula-ativa');
  });
});

// Tela de simulação: voltar para a escalação
document.getElementById('btn-voltar-escalacao').addEventListener('click', function () {
  mostrarTela(telaJogo);
});

// Skip: re-sorteia qualquer clube e qualquer ano da competição, sem gastar rolagem
btnSkip.addEventListener('click', fazerSkip);

// "Pular tudo" (Brasileirão): abre o modal de confirmação
if (btnPularTudo) btnPularTudo.addEventListener('click', abrirConfirmPularTudo);
if (btnConfirmConfirmar) btnConfirmConfirmar.addEventListener('click', function () {
  fecharConfirmPularTudo();
  pularTudoBrasileirao();
});
if (btnConfirmCancelar) btnConfirmCancelar.addEventListener('click', fecharConfirmPularTudo);
if (btnConfirmBackdrop) btnConfirmBackdrop.addEventListener('click', fecharConfirmPularTudo);

// Abre a tela de resumo da campanha (botão aparece ao fim de cada campanha)
if (btnResumo) btnResumo.addEventListener('click', mostrarResumo);

