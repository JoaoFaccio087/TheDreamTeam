// ============================================================
//  vnl-f.js — VNL / Liga das Nações (Feminino)
//
//  Estrutura idêntica ao mundial-f.js: cada objeto é uma seleção de
//  uma edição, com "competicao": "VNL (F)" (casa com COMPETICOES.volei_vnl_f.dados).
//  Posições: LEV/OPO/PON/CEN/LIB. Balanceado por seleção.
//
//  IMPORTANTE: elencos da VNL DIFEREM dos do Mundial (mesmas estrelas no topo,
//  mas convocações e reservas próprias da VNL). `id` de mesma pessoa reaproveita
//  o id já usado no mundial-*.js.
//
//  ⚠️ CONFIANÇA: 2025 = fonte WEB. Titulares confirmados; reservas aproximados.
// ============================================================

var DADOS_VNL_F = [

  // ─────────────────────────────────────────── VNL 2025 (Final: Łódź, Polônia)
  // Campeã: Itália (3º título, MVP De Gennaro). Vice: Brasil. 3º: Polônia. 4º: Japão.
  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Itália",
    jogadores: [
      { id: 'alessia-orro',        nome: "Orro",                posicoes: ["LEV"],       forca: 90 },
      { id: 'paola-egonu',         nome: "Egonu",               posicoes: ["OPO"],       forca: 92 },
      { id: 'miriam-sylla',        nome: "Sylla",               posicoes: ["PON"],       forca: 87 },
      { id: 'stella-nervini',      nome: "Nervini",             posicoes: ["PON"],       forca: 82 },
      { id: 'anna-danesi',         nome: "Danesi",              posicoes: ["CEN"],       forca: 86 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 88 },
      { id: 'carlotta-cambi',      nome: "Cambi",               posicoes: ["LEV"],       forca: 80 },
      { id: 'ekaterina-antropova', nome: "Antropova",           posicoes: ["OPO"],       forca: 86 },
      { id: 'gaia-giovannini',     nome: "Giovannini",          posicoes: ["PON"],       forca: 81 },
      { id: 'loveth-omoruyi',      nome: "Omoruyi",             posicoes: ["PON"],       forca: 80 },
      { id: 'sarah-fahr',          nome: "Fahr",                posicoes: ["CEN"],       forca: 84 },
      { id: 'yasmina-akrari',      nome: "Akrari",              posicoes: ["CEN"],       forca: 79 },
      { id: 'linda-nwakalor',      nome: "Nwakalor",            posicoes: ["CEN"],       forca: 80 },
      { id: 'eleonora-fersino',    nome: "Fersino",             posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Brasil",
    jogadores: [
      { id: 'macris-carneiro',     nome: "Macris",              posicoes: ["LEV"],       forca: 85 },
      { id: 'rosamaria-montibeller', nome: "Rosamaria",         posicoes: ["OPO"],       forca: 84 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 89 },
      { id: 'ana-cristina-menezes', nome: "Ana Cristina",       posicoes: ["PON"],       forca: 84 },
      { id: 'julia-kudiess',       nome: "Julia Kudiess",       posicoes: ["CEN"],       forca: 85 },
      { id: 'nyeme-costa',         nome: "Nyeme",               posicoes: ["LIB"],       forca: 82 },
      { id: 'roberta-ratzke',      nome: "Roberta",             posicoes: ["LEV"],       forca: 81 },
      { id: 'kisy-nascimento',     nome: "Kisy",                posicoes: ["OPO"],       forca: 82 },
      { id: 'julia-bergmann',      nome: "Julia Bergmann",      posicoes: ["PON"],       forca: 84 },
      { id: 'tainara-santos',      nome: "Tainara",             posicoes: ["PON"],       forca: 82 },
      { id: 'diana-duarte',        nome: "Diana",               posicoes: ["CEN"],       forca: 81 },
      { id: 'lorenne-teixeira',    nome: "Lorenne",             posicoes: ["CEN"],       forca: 80 },
      { id: 'aparecida-fernanda',  nome: "Fernanda",            posicoes: ["OPO"],       forca: 78 },
      { id: 'marcelle-martins',    nome: "Marcelle",            posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Polônia",
    jogadores: [
      { id: 'katarzyna-wenerska',  nome: "Wenerska",            posicoes: ["LEV"],       forca: 83 },
      { id: 'malwina-smarzek',     nome: "Smarzek",             posicoes: ["OPO"],       forca: 85 },
      { id: 'magdalena-stysiak',   nome: "Stysiak",             posicoes: ["OPO"],       forca: 85 },
      { id: 'martyna-lukasik',     nome: "Łukasik",             posicoes: ["PON"],       forca: 83 },
      { id: 'agnieszka-korneluk',  nome: "Korneluk",            posicoes: ["CEN"],       forca: 85 },
      { id: 'maria-stenzel',       nome: "Stenzel",             posicoes: ["LIB"],       forca: 83 },
      { id: 'olivia-rozanski',     nome: "Różański",            posicoes: ["PON"],       forca: 81 },
      { id: 'weronika-centka',     nome: "Centka",              posicoes: ["CEN"],       forca: 80 },
      { id: 'aleksandra-szczyglowska', nome: "Szczygłowska",    posicoes: ["PON"],       forca: 79 },
      { id: 'julita-piasecka',     nome: "Piasecka",            posicoes: ["LEV"],       forca: 79 },
      { id: 'monika-galkowska',    nome: "Gałkowska",           posicoes: ["PON"],       forca: 80 },
      { id: 'magdalena-jurczyk',   nome: "Jurczyk",             posicoes: ["CEN"],       forca: 81 },
      { id: 'paulina-damaske',     nome: "Damaske",             posicoes: ["PON"],       forca: 78 },
      { id: 'justyna-lysiak',      nome: "Łysiak",              posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Japão",
    jogadores: [
      { id: 'nanami-seki',         nome: "Seki",                posicoes: ["LEV"],       forca: 84 },
      { id: 'mayu-ishikawa',       nome: "Ishikawa",            posicoes: ["PON"],       forca: 86 },
      { id: 'sarina-koga',         nome: "Koga",                posicoes: ["PON"],       forca: 85 },
      { id: 'yoshino-sato',        nome: "Sato",                posicoes: ["OPO"],       forca: 83 },
      { id: 'yukiko-araki',        nome: "Araki",               posicoes: ["CEN"],       forca: 82 },
      { id: 'manami-kojima',       nome: "Kojima",              posicoes: ["LIB"],       forca: 85 },
      { id: 'tsukasa-nakagawa',    nome: "Nakagawa",            posicoes: ["LEV"],       forca: 79 },
      { id: 'sarina-wada',         nome: "Wada",                posicoes: ["PON"],       forca: 81 },
      { id: 'airi-kitamado',       nome: "Kitamado",            posicoes: ["PON"],       forca: 80 },
      { id: 'kotoka-shimamura',    nome: "Shimamura",           posicoes: ["CEN"],       forca: 81 },
      { id: 'nichika-yamada',      nome: "Yamada",              posicoes: ["CEN"],       forca: 79 },
      { id: 'mami-yokota',         nome: "Yokota",              posicoes: ["OPO"],       forca: 79 },
      { id: 'runa-akimoto',        nome: "Akimoto",             posicoes: ["PON"],       forca: 79 },
      { id: 'wakana-fukudome',     nome: "Fukudome",            posicoes: ["LIB"],       forca: 78 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VNL_F;
}
