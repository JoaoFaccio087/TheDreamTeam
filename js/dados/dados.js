// ============================================================
//  dados.js  —  junta TODAS as competições em um só array DADOS
//  IMPORTANTE: carregue este arquivo DEPOIS dos arquivos de
//  competição (libertadores.js, champions.js) e ANTES dos
//  módulos da engine (estado.js ... main.js).
//
//  Para adicionar uma nova competição no futuro: crie o arquivo
//  dela em js/dados/ (ex.: js/dados/brasileirao.js com
//  const DADOS_BRASILEIRAO) e some aqui embaixo.
// ============================================================

const DADOS = [
  ...DADOS_LIBERTADORES,
  ...DADOS_CHAMPIONS,
  ...DADOS_BRASILEIRAO,
  ...DADOS_COPA,
  ...DADOS_PREMIER,
  ...DADOS_SERIE_A,
  ...DADOS_LALIGA
];

// Nota (multi-esporte, ago/2026): os dados de OUTROS esportes (ex.: vôlei em
// DADOS_VOLEI_M, carregado de js/dados/volei/mundial-m.js) ficam PROPOSITALMENTE
// FORA do array DADOS acima, que é exclusivo do futebol. O motor multi-esporte
// (Fases 6-9) consumirá cada esporte pelo seu próprio array global, evitando que
// código legado que assume "tudo em DADOS é futebol" (posições, escudos, etc.)
// receba entradas de vôlei por engano. Quando o vôlei for ligado, o carregamento
// passará a ser por esporte selecionado.
