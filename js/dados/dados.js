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
  ...DADOS_BRASILEIRAO
];
