// ============================================================
//  vnl-m.js — VNL / Liga das Nações (Masculino)
//
//  Estrutura idêntica ao mundial-m.js: cada objeto é uma seleção de
//  uma edição, com "competicao": "VNL (M)" (casa com COMPETICOES.volei_vnl_m.dados).
//  Posições: LEV/OPO/PON/CEN/LIB. Balanceado: >=1 LEV, >=1 OPO, >=2 PON,
//  >=2 CEN, >=1 LIB por seleção.
//
//  IMPORTANTE: os elencos da VNL DIFEREM dos do Mundial — a VNL ocorre antes,
//  com caras novas e ausências (ex.: Brasil 2025 sem Bruninho/Leal; Itália com
//  Sanguinetti/Porro; etc.). Os `id` de uma MESMA PESSOA reaproveitam o id já
//  usado no mundial-*.js (mesmo jogador = mesmo id), para consistência.
//
//  ⚠️ CONFIANÇA: 2025 = dados de fonte WEB (pós-cutoff). Titulares confirmados;
//  reservas aproximados de elencos reais da época.
// ============================================================

var DADOS_VNL_M = [

  // ─────────────────────────────────────────── VNL 2025 (Final: Ningbo, China)
  // Campeã: Polônia (2º título, MVP Kochanowski). Vice: Itália. 3º: Brasil. 4º: Eslovênia.
  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Polônia",
    jogadores: [
      { id: 'marcin-komenda',      nome: "Komenda",             posicoes: ["LEV"],       forca: 84 },
      { id: 'kewin-sasak',         nome: "Sasak",               posicoes: ["OPO"],       forca: 85 },
      { id: 'wilfredo-leon',       nome: "Leon",                posicoes: ["PON"],       forca: 89 },
      { id: 'kamil-semeniuk',      nome: "Semeniuk",            posicoes: ["PON"],       forca: 86 },
      { id: 'jakub-kochanowski',   nome: "Kochanowski",         posicoes: ["CEN"],       forca: 87 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 84 },
      { id: 'aleksander-sliwka',   nome: "Śliwka",              posicoes: ["PON"],       forca: 85 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 86 },
      { id: 'norbert-huber',       nome: "Huber",               posicoes: ["CEN"],       forca: 82 },
      { id: 'mateusz-bieniek',     nome: "Bieniek",             posicoes: ["CEN"],       forca: 83 },
      { id: 'tomasz-fornal',       nome: "Fornal",              posicoes: ["PON"],       forca: 85 },
      { id: 'jan-firlej',          nome: "Firlej",              posicoes: ["LEV"],       forca: 79 },
      { id: 'artur-szalpuk',       nome: "Szalpuk",             posicoes: ["PON"],       forca: 81 },
      { id: 'jakub-popiwczak',     nome: "Popiwczak",           posicoes: ["LIB"],       forca: 81 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Itália",
    jogadores: [
      { id: 'simone-giannelli',    nome: "Giannelli",           posicoes: ["LEV"],       forca: 91 },
      { id: 'yuri-romano',         nome: "Romanò",              posicoes: ["OPO"],       forca: 87 },
      { id: 'alessandro-michieletto', nome: "Michieletto",      posicoes: ["PON"],       forca: 90 },
      { id: 'daniele-lavia',       nome: "Lavia",               posicoes: ["PON"],       forca: 86 },
      { id: 'gianluca-galassi',    nome: "Galassi",             posicoes: ["CEN"],       forca: 85 },
      { id: 'fabio-balaso',        nome: "Balaso",              posicoes: ["LIB"],       forca: 87 },
      { id: 'riccardo-sbertoli',   nome: "Sbertoli",            posicoes: ["LEV"],       forca: 82 },
      { id: 'mattia-bottolo',      nome: "Bottolo",             posicoes: ["PON"],       forca: 84 },
      { id: 'roberto-russo',       nome: "Russo",               posicoes: ["CEN"],       forca: 82 },
      { id: 'giovanni-sanguinetti', nome: "Sanguinetti",        posicoes: ["CEN"],       forca: 80 },
      { id: 'luca-porro',          nome: "Luca Porro",          posicoes: ["PON"],       forca: 80 },
      { id: 'alessandro-bovolenta', nome: "Bovolenta",          posicoes: ["OPO"],       forca: 81 },
      { id: 'francesco-sani',      nome: "Sani",                posicoes: ["PON"],       forca: 79 },
      { id: 'domenico-pace',       nome: "Pace",                posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Brasil",
    jogadores: [
      { id: 'fernando-cachopa',    nome: "Cachopa",             posicoes: ["LEV"],       forca: 83 },
      { id: 'darlan-souza',        nome: "Darlan",              posicoes: ["OPO"],       forca: 87 },
      { id: 'ricardo-lucarelli',   nome: "Lucarelli",           posicoes: ["PON"],       forca: 85 },
      { id: 'adriano-xavier',      nome: "Adriano",             posicoes: ["PON"],       forca: 81 },
      { id: 'flavio-gualberto',    nome: "Flávio",              posicoes: ["CEN"],       forca: 83 },
      { id: 'maique-nascimento',   nome: "Maique",              posicoes: ["LIB"],       forca: 86 },
      { id: 'alan-souza',          nome: "Alan",                posicoes: ["OPO"],       forca: 84 },
      { id: 'honorato-sales',      nome: "Honorato",            posicoes: ["PON"],       forca: 82 },
      { id: 'arthur-bento',        nome: "Arthur",              posicoes: ["PON"],       forca: 81 },
      { id: 'matheus-bispo',       nome: "Bispo",               posicoes: ["CEN"],       forca: 81 },
      { id: 'lucas-lima',          nome: "Lucão",               posicoes: ["CEN"],       forca: 82 },
      { id: 'gabriel-cardoso',     nome: "Cachopinha",          posicoes: ["LEV"],       forca: 79 },
      { id: 'judson-nunes',        nome: "Judson",              posicoes: ["OPO"],       forca: 78 },
      { id: 'thales-hoss',         nome: "Thales",              posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Eslovênia",
    jogadores: [
      { id: 'dejan-vincic',        nome: "Vinčić",              posicoes: ["LEV"],       forca: 82 },
      { id: 'toncek-stern',        nome: "T. Štern",            posicoes: ["OPO"],       forca: 85 },
      { id: 'tine-urnaut',         nome: "Urnaut",              posicoes: ["PON"],       forca: 84 },
      { id: 'rok-mozic',           nome: "Možič",               posicoes: ["PON"],       forca: 85 },
      { id: 'jan-kozamernik',      nome: "Kozamernik",          posicoes: ["CEN"],       forca: 85 },
      { id: 'jani-kovacic',        nome: "Kovačič",             posicoes: ["LIB"],       forca: 82 },
      { id: 'ziga-stern',          nome: "Ž. Štern",            posicoes: ["PON"],       forca: 80 },
      { id: 'nik-mujanovic',       nome: "Mujanović",           posicoes: ["OPO"],       forca: 81 },
      { id: 'saso-stalekar',       nome: "Štalekar",            posicoes: ["CEN"],       forca: 80 },
      { id: 'jan-brozic',          nome: "Brožič",              posicoes: ["LEV"],       forca: 78 },
      { id: 'nejc-najdic',         nome: "Najdič",              posicoes: ["PON"],       forca: 78 },
      { id: 'jaka-sesek',          nome: "Sešek",               posicoes: ["PON"],       forca: 78 },
      { id: 'luka-marovt',         nome: "Marovt",              posicoes: ["CEN"],       forca: 77 },
      { id: 'matic-videcnik',      nome: "Videčnik",            posicoes: ["LIB"],       forca: 76 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VNL_M;
}
