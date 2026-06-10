// ============================================================
//  interface.js — temas, navegação e posicionamento dos campos
// ============================================================

// ====================================================================
// SISTEMA DE TEMAS
// ====================================================================

function aplicarTema(idCompeticao) {
  document.body.classList.remove('tema-libertadores', 'tema-champions');
  var cfg = COMPETICOES[idCompeticao];
  if (cfg) document.body.classList.add(cfg.tema);
}

function removerTema() {
  document.body.classList.remove('tema-libertadores', 'tema-champions');
}


// ====================================================================
// NAVEGAÇÃO ENTRE TELAS
// ====================================================================

function mostrarTela(telaParaMostrar) {
  // Esconde todas as telas de uma vez — funciona mesmo com novas telas adicionadas
  document.querySelectorAll('.tela').forEach(function (t) { t.classList.add('escondida'); });
  telaParaMostrar.classList.remove('escondida');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ====================================================================
// CAMPO DE AMOSTRA (tela inicial) — posiciona as 11 fichas decorativas
// ====================================================================

function posicionarFichas(nomeFormacao) {
  const posicoes = formacoes[nomeFormacao];

  fichas.forEach(function (ficha, indice) {
    const pos = posicoes[indice];
    ficha.style.left  = pos.left + '%';
    ficha.style.top   = pos.top  + '%';
    ficha.textContent = pos.grupo;
  });
}

// Posiciona as fichas sem animação ao carregar (evita o "voo" do canto 0,0)
fichas.forEach(function (f) { f.classList.add('sem-transicao'); });
posicionarFichas('4-3-3');

requestAnimationFrame(function () {
  requestAnimationFrame(function () {
    fichas.forEach(function (f) { f.classList.remove('sem-transicao'); });
  });
});


// ====================================================================
// CAMPO DO JOGO — posiciona os 11 slots e define o código de cada vaga
// ====================================================================

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


