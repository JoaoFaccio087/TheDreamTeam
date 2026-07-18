// main.js — inicialização e event listeners (carregar por último).

// Competição do multiplayer (definida ao escolher a pílula). Default: Libertadores (1º da lista).
window.__compOnline = window.__compOnline || 'Libertadores';

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

// Pílula "Brasileirão - Online": seleciona o modo online (igual às outras pílulas).
// O modal de login/sala só abre quando o usuário clica em "Jogar agora".
var btnModoOnline     = document.getElementById('btn-modo-online');
var btnModoOnlineCopa = document.getElementById('btn-modo-online-copa');
var btnModoOnlineChampions = document.getElementById('btn-modo-online-champions');
var btnModoOnlineLibertadores = document.getElementById('btn-modo-online-libertadores');

// Define a competição do online e destaca a pílula escolhida.
function escolherOnline(comp, pilula) {
  modoOnlineSelecionado = true;
  window.__compOnline = comp;
  pilulasModo.forEach(function (p) { p.classList.remove('pilula-ativa'); });
  if (btnModoOnline)     btnModoOnline.classList.remove('pilula-ativa');
  if (btnModoOnlineCopa) btnModoOnlineCopa.classList.remove('pilula-ativa');
  if (btnModoOnlineChampions) btnModoOnlineChampions.classList.remove('pilula-ativa');
  if (btnModoOnlineLibertadores) btnModoOnlineLibertadores.classList.remove('pilula-ativa');
  if (pilula) pilula.classList.add('pilula-ativa');
}

if (btnModoOnline) {
  btnModoOnline.addEventListener('click', function () { escolherOnline('Brasileirão', btnModoOnline); });
}
if (btnModoOnlineLibertadores) {
  btnModoOnlineLibertadores.addEventListener('click', function () { escolherOnline('Libertadores', btnModoOnlineLibertadores); });
}
if (btnModoOnlineChampions) {
  btnModoOnlineChampions.addEventListener('click', function () { escolherOnline('Champions', btnModoOnlineChampions); });
}
if (btnModoOnlineCopa) {
  btnModoOnlineCopa.addEventListener('click', function () { escolherOnline('Copa do Mundo', btnModoOnlineCopa); });
}

// Seletor Um Jogador / Multijogador — alterna as abas de competições.
(function () {
  var seletor  = document.getElementById('modo-seletor');
  var abaSolo  = document.getElementById('modo-aba-solo');
  var abaMulti = document.getElementById('modo-aba-multi');
  if (!seletor || !abaSolo || !abaMulti) return;

  function ativarAba(aba) {
    var multi = (aba === 'multi');
    abaSolo.classList.toggle('escondida', multi);
    abaMulti.classList.toggle('escondida', !multi);
    seletor.querySelectorAll('.modo-seg').forEach(function (s) {
      s.classList.toggle('modo-seg-ativa', s.dataset.aba === aba);
    });

    if (multi) {
      // Multijogador: por padrão, seleciona a Libertadores online (1º da lista).
      escolherOnline('Libertadores', btnModoOnlineLibertadores);
    } else {
      // Um Jogador: volta a valer a competição já selecionada.
      modoOnlineSelecionado = false;
      if (btnModoOnline)     btnModoOnline.classList.remove('pilula-ativa');
      if (btnModoOnlineCopa) btnModoOnlineCopa.classList.remove('pilula-ativa');
      if (btnModoOnlineChampions) btnModoOnlineChampions.classList.remove('pilula-ativa');
      if (btnModoOnlineLibertadores) btnModoOnlineLibertadores.classList.remove('pilula-ativa');
      selecionarModo(modoSelecionado);
    }
  }

  seletor.querySelectorAll('.modo-seg').forEach(function (seg) {
    seg.addEventListener('click', function () { ativarAba(seg.dataset.aba); });
  });
})();

pilulasFormacao.forEach(function (pilula) {
  pilula.addEventListener('click', function () {
    selecionarFormacaoAmostra(this.dataset.formacaoAmostra);
  });
});

botaoJogar.addEventListener('click', function () {
  // Modo online selecionado → abre o fluxo online (login + sala). Senão, joga normal.
  if (modoOnlineSelecionado) {
    if (typeof window.abrirModalOnline === 'function') window.abrirModalOnline();
    return;
  }
  jogarAgora();
});
botaoVoltarHome.addEventListener('click', voltarHome);
if (btnVoltarMobile) btnVoltarMobile.addEventListener('click', voltarHome);

// Abas da tela de simulação (Copa): Simulação / Mata-a-Mata
var simTabJogos = document.getElementById('sim-tab-jogos');
var simTabChave = document.getElementById('sim-tab-chave');
if (simTabJogos) simTabJogos.addEventListener('click', function () { selecionarAbaSim('jogos'); });
if (simTabChave) simTabChave.addEventListener('click', function () { selecionarAbaSim('chave'); });

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
// Jogo Livre: o "Próximo" abre o modal do pote. Depois de montado, a tabela
// BOTAO_DO_ESTILO troca este botão pelo "Rolar" e o fluxo vira o do Clássico.
if (btnProximoLivre) btnProximoLivre.addEventListener('click', function () { abrirModalPote(); });
btnSelecionarDraft.addEventListener('click', confirmarSelecaoDraft);
btnResortearDraft.addEventListener('click', resortearCartas);

// No Draft, o overlay de cartas não fecha por clique fora/Esc: só saindo via
// "Selecionar" ou "Re-sortear" (evita reabrir e ganhar cartas sem gastar skip).

// Delegação: um único ouvinte no campo captura cliques em qualquer slot.
campoJogo.addEventListener('click', function (ev) {
  var slotAlvo = ev.target.closest('.slot-jogo');
  if (!slotAlvo) return;
  var indice = Array.from(slotsJogo).indexOf(slotAlvo);
  if (indice >= 0) clicarSlot(indice);
});

// Simular: entra na tela de simulação sempre com uma campanha limpa (não herda
// histórico/stats de uma campanha anterior).
btnSimular.addEventListener('click', function () {
  reiniciarCampanha();              // zera histórico, stats e contadores
  acaoBotao = 'iniciar';            // garante o estado inicial do botão
  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.textContent = 'Iniciar Campanha ►';
  configurarTelaSimulacao();        // mostra/esconde a tabela e o "Pular tudo" do Brasileirão
  mostrarTela(telaSimulacao);
});

// Tela de simulação: comportamento do botão muda conforme o estado da campanha
UI.on('btn-iniciar-jogo', 'click', function () {
  if (acaoBotao === 'nova-campanha') {
    // Terminou (campeão/temporada) → volta para montar um time NOVO
    // (formação, estilo e mapa de escalação), na mesma competição.
    reiniciarCampanha();
    acaoBotao = 'iniciar';
    this.textContent = 'Iniciar Campanha ►';
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
UI.on('btn-voltar-escalacao', 'click', function () {
  mostrarTela(telaJogo);
});

// Skip: re-sorteia qualquer clube e qualquer ano da competição, sem gastar rolagem
btnSkip.addEventListener('click', fazerSkip);

// "Pular tudo" (Brasileirão): confirma via UI.modalConfirm (componente do UIKit).
if (btnPularTudo) btnPularTudo.addEventListener('click', function () {
  UI.modalConfirm({
    titulo: 'Pular tudo?',
    texto: 'Todas as rodadas restantes serão simuladas de uma vez e você irá direto para o resultado final do campeonato.',
    confirmar: 'Confirmar',
    cancelar: 'Cancelar',
    onConfirmar: pularTudoBrasileirao
  });
});

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

// Switch "Mostrar Força" (offline) — reflete a preferência salva e re-renderiza
// o box score / médias / lista do pool ao alternar.
var switchForca = document.getElementById('switch-forca');
if (switchForca) {
  if (typeof mostrarForca !== 'undefined') switchForca.checked = mostrarForca;
  switchForca.addEventListener('change', function () {
    if (typeof setMostrarForca === 'function') setMostrarForca(this.checked);
    else mostrarForca = this.checked;
    if (typeof atualizarBoxScore === 'function') atualizarBoxScore();
    // Atualiza a lista do pool (clássico) se estiver visível.
    if (typeof atualizarDisponibilidadeLista === 'function') atualizarDisponibilidadeLista();
    // Atualiza as cartas do draft, se um pacote estiver aberto.
    if (typeof estiloJogo !== 'undefined' && estiloJogo === 'draft' &&
        typeof draftSlotAtual !== 'undefined' && draftSlotAtual !== null &&
        typeof renderizarCartas === 'function') {
      renderizarCartas();
    }
  });
}


// ────────────────────────────────────────────────────────────────
// Guarda contra F5 / fechar aba com jogo em andamento
// ────────────────────────────────────────────────────────────────
// O jogo é uma SPA: todo o estado (sorteio, escalação, campanha, sala online)
// vive na MEMÓRIA. Um refresh recarrega o index.html e devolve o jogador à home,
// perdendo tudo. Enquanto a restauração de estado não existe, este guarda ao
// menos AVISA antes da perda acidental.
//
// Regra: se a home (tela-inicial) está visível, não há o que perder — não
// atrapalha o F5. Qualquer OUTRA tela visível = jogo em andamento (offline ou
// online) → dispara o aviso nativo do navegador.
window.addEventListener('beforeunload', function (e) {
  var inicial = document.getElementById('tela-inicial');
  if (inicial && !inicial.classList.contains('escondida')) return; // na home: sem aviso

  var emJogo = Array.prototype.some.call(
    document.querySelectorAll('.tela'),
    function (t) { return t.id !== 'tela-inicial' && !t.classList.contains('escondida'); }
  );
  if (!emJogo) return;

  e.preventDefault();
  e.returnValue = ''; // navegadores modernos ignoram texto custom e mostram o padrão
});
