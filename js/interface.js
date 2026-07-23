// interface.js — temas, navegação entre telas e posicionamento dos campos.

function aplicarTema(idCompeticao) {
  document.body.classList.remove('tema-libertadores', 'tema-champions', 'tema-brasileirao', 'tema-copa');
  var cfg = COMPETICOES[idCompeticao];
  // Só Libertadores e Champions têm identidade visual própria. Brasileirão e Copa
  // usam a paleta da plataforma (e por isso acompanham o modo claro/escuro).
  if (cfg && cfg.tema) document.body.classList.add(cfg.tema);
}

function removerTema() {
  document.body.classList.remove('tema-libertadores', 'tema-champions', 'tema-brasileirao', 'tema-copa');
}

function mostrarTela(telaParaMostrar) {
  document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); });
  telaParaMostrar.classList.remove('escondida');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Posiciona as 11 fichas decorativas do campo de amostra (tela inicial).
function posicionarFichas(nomeFormacao) {
  var coords = UI.posicionarCampo(fichas, nomeFormacao);
  if (!coords) return;
  fichas.forEach(function (ficha, i) { ficha.textContent = coords[i].grupo; });
}

// Posiciona as fichas sem animação na carga (evita o "voo" a partir do canto 0,0).
fichas.forEach(function (f) { f.classList.add('sem-transicao'); });
posicionarFichas('4-3-3');

requestAnimationFrame(function () {
  requestAnimationFrame(function () {
    fichas.forEach(function (f) { f.classList.remove('sem-transicao'); });
  });
});

// Posiciona os 11 slots do campo do jogo e grava o código de cada vaga.
function posicionarSlotsJogo(nomeFormacao) {
  UI.posicionarCampo(slotsJogo, nomeFormacao);
  const codigos = codigosFormacao[nomeFormacao];
  slotsJogo.forEach(function (slot, i) {
    slot.dataset.codigo = codigos[i];
    if (!escalacao[i]) slot.textContent = codigos[i];
  });
}
