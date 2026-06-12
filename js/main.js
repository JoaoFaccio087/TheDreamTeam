//  main.js — INICIALIZAÇÃO e todos os event listeners (carregar por último)

// EVENTOS

pilulasModo.forEach(function (pilula) {
  pilula.addEventListener('click', function () {
    // Modos reais (têm data-modo): selecionam a competição e desmarcam o online.
    if (this.dataset.modo) {
      modoOnlineSelecionado = false;
      selecionarModo(this.dataset.modo);
    }
  });
});

// Pílula "Brasileirão - Online": seleciona como modo (igual às outras). O modal de
// sala só abre quando o usuário clica em "Jogar agora".
var btnModoOnline = document.getElementById('btn-modo-online');
if (btnModoOnline) {
  btnModoOnline.addEventListener('click', function () {
    modoOnlineSelecionado = true;
    pilulasModo.forEach(function (p) { p.classList.remove('pilula-ativa'); });
    btnModoOnline.classList.add('pilula-ativa');
  });
}

// --- Modal de sala (MAQUETE do modo online) ---
var salaOverlayEl = document.getElementById('sala-overlay');

function abrirSalaModal() {
  if (salaOverlayEl) salaOverlayEl.classList.remove('escondida');
}
function fecharSalaModal() {
  if (!salaOverlayEl) return;
  salaOverlayEl.classList.add('escondida');
  var aviso = document.getElementById('sala-aviso');
  if (aviso) aviso.classList.add('escondida');
}

(function () {
  if (!salaOverlayEl) return;

  var fechar   = document.getElementById('sala-fechar');
  var backdrop = document.getElementById('sala-backdrop');
  if (fechar)   fechar.addEventListener('click', fecharSalaModal);
  if (backdrop) backdrop.addEventListener('click', fecharSalaModal);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && !salaOverlayEl.classList.contains('escondida')) fecharSalaModal();
  });

  // Copiar o código da sala (maquete: copia o código de exemplo)
  var btnCopiar = document.getElementById('btn-copiar-codigo');
  var inputCod  = document.getElementById('sala-codigo');
  if (btnCopiar && inputCod) {
    btnCopiar.addEventListener('click', function () {
      var iconeOriginal = btnCopiar.innerHTML;
      var ok = function () {
        btnCopiar.innerHTML = '\u2713';           // mostra um "✓" por um instante
        setTimeout(function () { btnCopiar.innerHTML = iconeOriginal; }, 1200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(inputCod.value).then(ok).catch(function () {
          inputCod.select(); document.execCommand('copy'); ok();
        });
      } else {
        inputCod.select(); document.execCommand('copy'); ok();
      }
    });
  }

  // Velocidade (maquete): alterna a pílula ativa, só visual
  document.querySelectorAll('#sala-velocidade .pilula').forEach(function (p) {
    p.addEventListener('click', function () {
      document.querySelectorAll('#sala-velocidade .pilula').forEach(function (b) {
        b.classList.remove('pilula-ativa');
      });
      this.classList.add('pilula-ativa');
    });
  });

  // Botões "Criar sala" / "Entrar" (maquete): mostram o aviso de "em breve"
  document.querySelectorAll('#sala-overlay [data-mock]').forEach(function (b) {
    b.addEventListener('click', function () {
      var aviso = document.getElementById('sala-aviso');
      if (aviso) aviso.classList.remove('escondida');
    });
  });
})();

pilulasFormacao.forEach(function (pilula) {
  pilula.addEventListener('click', function () {
    selecionarFormacaoAmostra(this.dataset.formacaoAmostra);
  });
});

botaoJogar.addEventListener('click', function () {
  // Modo online selecionado → abre o modal de sala (maquete). Senão, joga normal.
  if (modoOnlineSelecionado) { abrirSalaModal(); return; }
  jogarAgora();
});
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

// No Draft, abrir as cartas obriga a escolher: clicar fora ou apertar Esc NÃO fecha
// (senão dava pra reabrir e ganhar cartas novas sem gastar re-sorteio). Para sair da
// seleção, o usuário escolhe uma carta e clica em "Selecionar" — ou usa "Re-sortear".

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
    // Terminou (campeão/temporada) → volta para montar um time NOVO
    // (formação, estilo e mapa de escalação), na mesma competição.
    reiniciarCampanha();
    acaoBotao = 'iniciar';
    this.textContent = 'Iniciar Campanha \u25BA';
    jogarAgora();   // reaplica o tema, zera a escalação e abre a tela de escalação
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

// Nome do time: atualiza a variável global conforme o usuário digita
if (inputNomeTime) {
  inputNomeTime.addEventListener('input', function () {
    nomeDoTime = this.value.trim() || 'Seu time';
  });
}

// Clicar no título "THE DREAM TEAM" do cabeçalho volta para a tela inicial
titulosCabecalho.forEach(function (titulo) {
  titulo.addEventListener('click', function () {
    if (timerPartida !== null) { clearTimeout(timerPartida); timerPartida = null; }
    voltarHome();
  });
});

