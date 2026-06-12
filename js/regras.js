// regras.js — competições (fonte única) e regras de elegibilidade de posições.

// Fonte única das competições. A chave é o id usado no código (ex.: modoSelecionado);
// dela saem o valor de "competicao" em DADOS (para filtrar), o rótulo exibido e o tema de cor.
const COMPETICOES = {
  libertadores: { dados: 'Libertadores', label: 'Libertadores',    tema: 'tema-libertadores' },
  champions:    { dados: 'Champions',    label: 'Champions League', tema: 'tema-champions' },
  brasileirao:  { dados: 'Brasileirão',  label: 'Brasileirão',      tema: 'tema-brasileirao' }
};

// Converte o valor de "competicao" dos dados no rótulo exibido (ex.: "Champions" → "Champions League").
function rotuloCompeticao(valorDados) {
  for (var id in COMPETICOES) {
    if (COMPETICOES[id].dados === valorDados) return COMPETICOES[id].label;
  }
  return valorDados;
}

// Códigos de posição que uma vaga aceita. As alas ME e MD aceitam também os
// pontas do mesmo lado (PE para ME, PD para MD) — alas naturais —, mas NÃO os
// meias centrais (MC/MEI), que não jogam abertos. As demais vagas só aceitam
// jogadores que tenham exatamente aquela posição.
function codigosAceitos(codigoVaga) {
  var mapa = {
    'ME': ['ME', 'PE'],
    'MD': ['MD', 'PD']
  };
  return mapa[codigoVaga] || [codigoVaga];
}

// Retorna true se o jogador tem ao menos uma posição aceita pela vaga.
function podeOcupar(jogador, codigoVaga) {
  var aceitos = codigosAceitos(codigoVaga);
  return jogador.posicoes.some(function (p) { return aceitos.indexOf(p) >= 0; });
}
