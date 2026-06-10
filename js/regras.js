// ============================================================
//  regras.js — COMPETICOES (fonte única) + elegibilidade de posições
// ============================================================

// ====================================================================
// COMPETIÇÕES — FONTE ÚNICA DE VERDADE
//
// A chave (id) é o identificador usado INTERNAMENTE no código
// (ex.: modoSelecionado === 'champions'). Dela saem:
//   - dados: valor de "competicao" no array DADOS  (filtra os clubes)
//   - label: rótulo exibido na interface
//   - tema:  classe CSS de cor aplicada ao <body>
// Assim some o antigo "'Champions League' ? 'Champions' : ..." espalhado.
// ====================================================================

const COMPETICOES = {
  libertadores: { dados: 'Libertadores', label: 'Libertadores',    tema: 'tema-libertadores' },
  champions:    { dados: 'Champions',    label: 'Champions League', tema: 'tema-champions' }
};

// Rótulo de exibição a partir do valor de competição dos DADOS
// (ex.: "Champions" → "Champions League"). Usado nos cards e no sorteio.
function rotuloCompeticao(valorDados) {
  for (var id in COMPETICOES) {
    if (COMPETICOES[id].dados === valorDados) return COMPETICOES[id].label;
  }
  return valorDados; // segurança: se não achar, mostra o valor cru
}


// ====================================================================
// HELPERS DE ELEGIBILIDADE
//
// codigosAceitos: retorna os códigos de posição do jogador que são
//   válidos para ocupar uma vaga com aquele código de slot.
//   ME e MD não existem em dados.js, então mapeamos para os equivalentes.
//
// podeOcupar: retorna true se o jogador tem ao menos uma posição
//   aceita pelo slot.
// ====================================================================

function codigosAceitos(codigoVaga) {
  var mapa = {
    'ME': ['PE', 'MC', 'MEI'],  // meia-ala esquerda aceita PE, MC ou MEI
    'MD': ['PD', 'MC', 'MEI']   // meia-ala direita  aceita PD, MC ou MEI
  };
  // Para qualquer outro código (GOL, LD, ZAG, etc.), exige exatamente aquele código
  return mapa[codigoVaga] || [codigoVaga];
}

function podeOcupar(jogador, codigoVaga) {
  var aceitos = codigosAceitos(codigoVaga);
  return jogador.posicoes.some(function (p) { return aceitos.indexOf(p) >= 0; });
}


