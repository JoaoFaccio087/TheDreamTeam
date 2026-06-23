// regras.js — competições (fonte única) e regras de elegibilidade de posições.

// Fonte única das competições. A chave é o id usado no código; dela saem o valor de
// "competicao" no DADOS, o rótulo exibido e o tema de cor.
const COMPETICOES = {
  libertadores: { dados: 'Libertadores', label: 'Libertadores',    tema: 'tema-libertadores' },
  champions:    { dados: 'Champions',    label: 'Champions League', tema: 'tema-champions' },
  brasileirao:  { dados: 'Brasileirão',  label: 'Brasileirão',      tema: 'tema-brasileirao' },
  copa:         { dados: 'Copa do Mundo', label: 'Copa do Mundo',   tema: 'tema-copa' }
};

// Converte o valor de "competicao" dos dados no rótulo exibido (ex.: "Champions" → "Champions League").
function rotuloCompeticao(valorDados) {
  for (var id in COMPETICOES) {
    if (COMPETICOES[id].dados === valorDados) return COMPETICOES[id].label;
  }
  return valorDados;
}

// Códigos de posição que uma vaga aceita. As alas ME/MD também aceitam o ponta do
// mesmo lado (PE→ME, PD→MD); as demais vagas só aceitam a posição exata.
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
