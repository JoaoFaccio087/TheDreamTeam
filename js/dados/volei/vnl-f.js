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
  },

  // Seleções adicionais da VNL 2025 (expandem a edição para 8 → ativa a Final Eight).
  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Turquia",
    jogadores: [
      { id: 'cansu-ozbay',         nome: "Özbay",               posicoes: ["LEV"],       forca: 85 },
      { id: 'melissa-vargas',      nome: "Vargas",              posicoes: ["OPO"],       forca: 92 },
      { id: 'ebrar-karakurt',      nome: "Karakurt",            posicoes: ["PON"],       forca: 87 },
      { id: 'hande-baladin',       nome: "Baladın",             posicoes: ["PON"],       forca: 83 },
      { id: 'zehra-gunes',         nome: "Güneş",               posicoes: ["CEN"],       forca: 86 },
      { id: 'gizem-orge',          nome: "Örge",                posicoes: ["LIB"],       forca: 84 },
      { id: 'ilkin-aydin',         nome: "Aydın",               posicoes: ["PON"],       forca: 83 },
      { id: 'eda-erdem',           nome: "Eda Erdem",           posicoes: ["CEN"],       forca: 84 },
      { id: 'derya-cebecioglu',    nome: "Cebecioğlu",          posicoes: ["PON"],       forca: 80 },
      { id: 'asli-kalac',          nome: "Kalaç",               posicoes: ["CEN"],       forca: 80 },
      { id: 'elif-sahin',          nome: "E. Şahin",            posicoes: ["LEV"],       forca: 80 },
      { id: 'tutku-yuzgenc',       nome: "Yüzgenç",             posicoes: ["OPO"],       forca: 80 },
      { id: 'saliha-sahin',        nome: "Şahin",               posicoes: ["PON"],       forca: 79 },
      { id: 'simge-akoz',          nome: "Aköz",                posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'jordyn-poulter',      nome: "Poulter",             posicoes: ["LEV"],       forca: 85 },
      { id: 'taylor-mims',         nome: "Mims",                posicoes: ["OPO"],       forca: 82 },
      { id: 'avery-skinner',       nome: "A. Skinner",          posicoes: ["PON"],       forca: 84 },
      { id: 'ali-frantti',         nome: "Frantti",             posicoes: ["PON"],       forca: 83 },
      { id: 'brionne-butler',      nome: "Butler",              posicoes: ["CEN"],       forca: 82 },
      { id: 'lexi-rodriguez',      nome: "Rodriguez",           posicoes: ["LIB"],       forca: 84 },
      { id: 'madisen-skinner',     nome: "M. Skinner",          posicoes: ["PON"],       forca: 82 },
      { id: 'jenna-gray',          nome: "Gray",                posicoes: ["LEV"],       forca: 80 },
      { id: 'amber-igiede',        nome: "Igiede",              posicoes: ["CEN"],       forca: 81 },
      { id: 'dana-rettke',         nome: "Rettke",              posicoes: ["CEN"],       forca: 82 },
      { id: 'anna-dodson',         nome: "Dodson",              posicoes: ["CEN"],       forca: 79 },
      { id: 'sarah-franklin',      nome: "Franklin",            posicoes: ["PON"],       forca: 80 },
      { id: 'khori-louis',         nome: "Louis",               posicoes: ["OPO"],       forca: 78 },
      { id: 'morgan-hentz',        nome: "Hentz",               posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "China",
    jogadores: [
      { id: 'diao-linyu',          nome: "Diao Linyu",          posicoes: ["LEV"],       forca: 82 },
      { id: 'gong-xiangyu',        nome: "Gong Xiangyu",        posicoes: ["OPO"],       forca: 86 },
      { id: 'li-yingying',         nome: "Li Yingying",         posicoes: ["PON"],       forca: 87 },
      { id: 'wu-mengjie',          nome: "Wu Mengjie",          posicoes: ["PON"],       forca: 82 },
      { id: 'wang-yuanyuan',       nome: "Wang Yuanyuan",       posicoes: ["CEN"],       forca: 84 },
      { id: 'wang-mengjie',        nome: "Wang Mengjie",        posicoes: ["LIB"],       forca: 83 },
      { id: 'zhuang-yushan',       nome: "Zhuang Yushan",       posicoes: ["LEV"],       forca: 79 },
      { id: 'gao-yi',              nome: "Gao Yi",              posicoes: ["CEN"],       forca: 81 },
      { id: 'zheng-yixin',         nome: "Zheng Yixin",         posicoes: ["PON"],       forca: 80 },
      { id: 'wang-yizhu',          nome: "Wang Yizhu",          posicoes: ["CEN"],       forca: 80 },
      { id: 'zhong-hui',           nome: "Zhong Hui",           posicoes: ["PON"],       forca: 80 },
      { id: 'chen-peiyan',         nome: "Chen Peiyan",         posicoes: ["OPO"],       forca: 79 },
      { id: 'gao-yifan',           nome: "Gao Yifan",           posicoes: ["PON"],       forca: 78 },
      { id: 'ni-feifan',           nome: "Ni Feifan",           posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2025,
    clube: "Alemanha",
    jogadores: [
      { id: 'pia-kaesehage',       nome: "Kästehage",           posicoes: ["LEV"],       forca: 79 },
      { id: 'lena-stigrot',        nome: "Stigrot",             posicoes: ["PON"],       forca: 81 },
      { id: 'hanna-orthmann',      nome: "Orthmann",            posicoes: ["PON"],       forca: 82 },
      { id: 'antonia-stautz',      nome: "Stautz",              posicoes: ["OPO"],       forca: 80 },
      { id: 'camilla-weitzel',     nome: "Weitzel",             posicoes: ["CEN"],       forca: 81 },
      { id: 'anna-pogany',         nome: "Pogany",              posicoes: ["LIB"],       forca: 82 },
      { id: 'lina-alsmeier',       nome: "Alsmeier",            posicoes: ["PON"],       forca: 80 },
      { id: 'sarah-straube',       nome: "Straube",             posicoes: ["LEV"],       forca: 78 },
      { id: 'monique-strubbe',     nome: "Strubbe",             posicoes: ["CEN"],       forca: 79 },
      { id: 'lena-grosch',         nome: "Grosch",              posicoes: ["CEN"],       forca: 78 },
      { id: 'corina-glaab',        nome: "Glaab",               posicoes: ["PON"],       forca: 78 },
      { id: 'emilia-weske',        nome: "Weske",               posicoes: ["OPO"],       forca: 78 },
      { id: 'marie-schoelzel',     nome: "Schölzel",            posicoes: ["CEN"],       forca: 78 },
      { id: 'anna-hoelzig',        nome: "Hölzig",              posicoes: ["LIB"],       forca: 76 }
    ]
  },

  // ─────────────────────────────────────────── VNL 2024 (Final: Bangkok, Tailândia)
  // Campeã: Itália (2º título, MVP Egonu). Vice: Japão. 3º: Polônia. 4º: Brasil.
  {
    competicao: "VNL (F)",
    edicao: 2024,
    clube: "Itália",
    jogadores: [
      { id: 'alessia-orro',        nome: "Orro",                posicoes: ["LEV"],       forca: 89 },
      { id: 'paola-egonu',         nome: "Egonu",               posicoes: ["OPO"],       forca: 92 },
      { id: 'miriam-sylla',        nome: "Sylla",               posicoes: ["PON"],       forca: 87 },
      { id: 'caterina-bosetti',    nome: "Bosetti",             posicoes: ["PON"],       forca: 83 },
      { id: 'anna-danesi',         nome: "Danesi",              posicoes: ["CEN"],       forca: 86 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 88 },
      { id: 'carlotta-cambi',      nome: "Cambi",               posicoes: ["LEV"],       forca: 80 },
      { id: 'ekaterina-antropova', nome: "Antropova",           posicoes: ["OPO"],       forca: 85 },
      { id: 'loveth-omoruyi',      nome: "Omoruyi",             posicoes: ["PON"],       forca: 80 },
      { id: 'sarah-fahr',          nome: "Fahr",                posicoes: ["CEN"],       forca: 84 },
      { id: 'marina-lubian',       nome: "Lubian",              posicoes: ["CEN"],       forca: 81 },
      { id: 'gaia-giovannini',     nome: "Giovannini",          posicoes: ["PON"],       forca: 80 },
      { id: 'stella-nervini',      nome: "Nervini",             posicoes: ["PON"],       forca: 80 },
      { id: 'eleonora-fersino',    nome: "Fersino",             posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2024,
    clube: "Japão",
    jogadores: [
      { id: 'nanami-seki',         nome: "Seki",                posicoes: ["LEV"],       forca: 84 },
      { id: 'sarina-koga',         nome: "Koga",                posicoes: ["PON"],       forca: 86 },
      { id: 'mayu-ishikawa',       nome: "Ishikawa",            posicoes: ["PON"],       forca: 85 },
      { id: 'yoshino-sato',        nome: "Sato",                posicoes: ["OPO"],       forca: 83 },
      { id: 'yukiko-araki',        nome: "Araki",               posicoes: ["CEN"],       forca: 82 },
      { id: 'manami-kojima',       nome: "Kojima",              posicoes: ["LIB"],       forca: 86 },
      { id: 'tsukasa-nakagawa',    nome: "Nakagawa",            posicoes: ["LEV"],       forca: 79 },
      { id: 'sarina-wada',         nome: "Wada",                posicoes: ["PON"],       forca: 81 },
      { id: 'airi-kitamado',       nome: "Kitamado",            posicoes: ["PON"],       forca: 80 },
      { id: 'kotoka-shimamura',    nome: "Shimamura",           posicoes: ["CEN"],       forca: 81 },
      { id: 'aki-momii',           nome: "Momii",               posicoes: ["CEN"],       forca: 79 },
      { id: 'mami-yokota',         nome: "Yokota",              posicoes: ["OPO"],       forca: 79 },
      { id: 'runa-akimoto',        nome: "Akimoto",             posicoes: ["PON"],       forca: 79 },
      { id: 'wakana-fukudome',     nome: "Fukudome",            posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2024,
    clube: "Polônia",
    jogadores: [
      { id: 'katarzyna-wenerska',  nome: "Wenerska",            posicoes: ["LEV"],       forca: 83 },
      { id: 'magdalena-stysiak',   nome: "Stysiak",             posicoes: ["OPO"],       forca: 85 },
      { id: 'martyna-lukasik',     nome: "Łukasik",             posicoes: ["PON"],       forca: 83 },
      { id: 'olivia-rozanski',     nome: "Różański",            posicoes: ["PON"],       forca: 81 },
      { id: 'agnieszka-korneluk',  nome: "Korneluk",            posicoes: ["CEN"],       forca: 85 },
      { id: 'maria-stenzel',       nome: "Stenzel",             posicoes: ["LIB"],       forca: 83 },
      { id: 'martyna-czyrnianska', nome: "Czyrniańska",         posicoes: ["PON"],       forca: 81 },
      { id: 'weronika-centka',     nome: "Centka",              posicoes: ["CEN"],       forca: 80 },
      { id: 'magdalena-jurczyk',   nome: "Jurczyk",             posicoes: ["CEN"],       forca: 81 },
      { id: 'julita-piasecka',     nome: "Piasecka",            posicoes: ["LEV"],       forca: 79 },
      { id: 'monika-galkowska',    nome: "Gałkowska",           posicoes: ["PON"],       forca: 80 },
      { id: 'zuzanna-gorecka',     nome: "Górecka",             posicoes: ["PON"],       forca: 80 },
      { id: 'paulina-damaske',     nome: "Damaske",             posicoes: ["OPO"],       forca: 78 },
      { id: 'justyna-lysiak',      nome: "Łysiak",              posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (F)",
    edicao: 2024,
    clube: "Brasil",
    jogadores: [
      { id: 'macris-carneiro',     nome: "Macris",              posicoes: ["LEV"],       forca: 85 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 89 },
      { id: 'kisy-nascimento',     nome: "Kisy",                posicoes: ["OPO"],       forca: 83 },
      { id: 'julia-bergmann',      nome: "Julia Bergmann",      posicoes: ["PON"],       forca: 84 },
      { id: 'thaisa-menezes',      nome: "Thaisa",              posicoes: ["CEN"],       forca: 83 },
      { id: 'nyeme-costa',         nome: "Nyeme",               posicoes: ["LIB"],       forca: 82 },
      { id: 'roberta-ratzke',      nome: "Roberta",             posicoes: ["LEV"],       forca: 81 },
      { id: 'ana-cristina-menezes', nome: "Ana Cristina",       posicoes: ["PON"],       forca: 84 },
      { id: 'rosamaria-montibeller', nome: "Rosamaria",         posicoes: ["OPO"],       forca: 84 },
      { id: 'carol-gattaz',        nome: "Carol Gattaz",        posicoes: ["CEN"],       forca: 82 },
      { id: 'diana-duarte',        nome: "Diana",               posicoes: ["CEN"],       forca: 81 },
      { id: 'julia-kudiess',       nome: "Julia Kudiess",       posicoes: ["CEN"],       forca: 83 },
      { id: 'tainara-santos',      nome: "Tainara",             posicoes: ["PON"],       forca: 82 },
      { id: 'laisa-santos',        nome: "Laís",                posicoes: ["LIB"],       forca: 79 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VNL_F;
}
