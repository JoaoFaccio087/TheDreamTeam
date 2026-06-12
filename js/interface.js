// interface.js — temas, navegação entre telas e posicionamento dos campos.

function aplicarTema(idCompeticao) {
  document.body.classList.remove('tema-libertadores', 'tema-champions', 'tema-brasileirao');
  var cfg = COMPETICOES[idCompeticao];
  if (cfg) document.body.classList.add(cfg.tema);
}

function removerTema() {
  document.body.classList.remove('tema-libertadores', 'tema-champions', 'tema-brasileirao');
}

function mostrarTela(telaParaMostrar) {
  document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); });
  telaParaMostrar.classList.remove('escondida');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Posiciona as 11 fichas decorativas do campo de amostra (tela inicial).
function posicionarFichas(nomeFormacao) {
  const posicoes = formacoes[nomeFormacao];

  fichas.forEach(function (ficha, indice) {
    const pos = posicoes[indice];
    ficha.style.left  = pos.left + '%';
    ficha.style.top   = pos.top  + '%';
    ficha.textContent = pos.grupo;
  });
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
  const posicoes = formacoes[nomeFormacao];
  const codigos  = codigosFormacao[nomeFormacao];

  slotsJogo.forEach(function (slot, i) {
    slot.style.left     = posicoes[i].left + '%';
    slot.style.top      = posicoes[i].top  + '%';
    slot.dataset.codigo = codigos[i];

    if (!escalacao[i]) {
      slot.textContent = codigos[i];
    }
  });
}
