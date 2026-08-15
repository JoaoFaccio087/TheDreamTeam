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
  },

  // Seleções adicionais da VNL 2025 (participaram da fase preliminar; expandem a
  // edição para 8 → ativa a Final Eight no jogo).
  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'micah-ma-a',          nome: "Ma'a",                posicoes: ["LEV"],       forca: 83 },
      { id: 'kyle-ensing',         nome: "Ensing",              posicoes: ["OPO"],       forca: 84 },
      { id: 'tj-defalco',          nome: "DeFalco",             posicoes: ["PON"],       forca: 85 },
      { id: 'ethan-champlin',      nome: "Champlin",            posicoes: ["PON"],       forca: 82 },
      { id: 'taylor-averill',      nome: "Averill",             posicoes: ["CEN"],       forca: 83 },
      { id: 'erik-shoji',          nome: "Shoji",               posicoes: ["LIB"],       forca: 86 },
      { id: 'micah-christenson',   nome: "Christenson",         posicoes: ["LEV"],       forca: 84 },
      { id: 'matt-anderson',       nome: "Anderson",            posicoes: ["PON"],       forca: 85 },
      { id: 'jeff-jendryk',        nome: "Jendryk",             posicoes: ["CEN"],       forca: 82 },
      { id: 'merrick-mchenry',     nome: "McHenry",             posicoes: ["CEN"],       forca: 80 },
      { id: 'gabi-garcia',         nome: "Garcia",              posicoes: ["OPO"],       forca: 82 },
      { id: 'cooper-robinson',     nome: "Robinson",            posicoes: ["PON"],       forca: 80 },
      { id: 'jordan-ewert',        nome: "Ewert",               posicoes: ["PON"],       forca: 79 },
      { id: 'mason-briggs',        nome: "Briggs",              posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "França",
    jogadores: [
      { id: 'antoine-brizard',     nome: "Brizard",             posicoes: ["LEV"],       forca: 87 },
      { id: 'theo-faure',          nome: "Faure",               posicoes: ["OPO"],       forca: 83 },
      { id: 'trevor-clevenot',     nome: "Clévenot",            posicoes: ["PON"],       forca: 84 },
      { id: 'timothee-carle',      nome: "Carle",               posicoes: ["PON"],       forca: 81 },
      { id: 'barthelemy-chinenyeze', nome: "Chinenyeze",        posicoes: ["CEN"],       forca: 85 },
      { id: 'jenia-grebennikov',   nome: "Grebennikov",         posicoes: ["LIB"],       forca: 86 },
      { id: 'quentin-jouffroy',    nome: "Jouffroy",            posicoes: ["CEN"],       forca: 80 },
      { id: 'nicolas-le-goff',     nome: "Le Goff",             posicoes: ["CEN"],       forca: 83 },
      { id: 'jean-patry',          nome: "Patry",               posicoes: ["OPO"],       forca: 85 },
      { id: 'yacine-louati',       nome: "Louati",              posicoes: ["PON"],       forca: 80 },
      { id: 'nathan-mole',         nome: "Molé",                posicoes: ["LEV"],       forca: 79 },
      { id: 'melvin-lawani',       nome: "Lawani",              posicoes: ["OPO"],       forca: 79 },
      { id: 'jordan-thelusma',     nome: "Thélusma",            posicoes: ["PON"],       forca: 78 },
      { id: 'benjamin-diez',       nome: "Diez",                posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Japão",
    jogadores: [
      { id: 'masahiro-sekita',     nome: "Sekita",              posicoes: ["LEV"],       forca: 83 },
      { id: 'yuji-nishida',        nome: "Nishida",             posicoes: ["OPO"],       forca: 87 },
      { id: 'yuki-ishikawa',       nome: "Ishikawa",            posicoes: ["PON"],       forca: 87 },
      { id: 'ran-takahashi',       nome: "Takahashi",           posicoes: ["PON"],       forca: 86 },
      { id: 'akihiro-yamauchi',    nome: "Yamauchi",            posicoes: ["CEN"],       forca: 82 },
      { id: 'tomohiro-yamamoto',   nome: "Yamamoto",            posicoes: ["LIB"],       forca: 85 },
      { id: 'kento-miyaura',       nome: "Miyaura",             posicoes: ["OPO"],       forca: 84 },
      { id: 'tatsunori-otsuka',    nome: "Otsuka",              posicoes: ["PON"],       forca: 83 },
      { id: 'masaki-oya',          nome: "Ōya",                 posicoes: ["LEV"],       forca: 80 },
      { id: 'kentaro-takahashi',   nome: "K. Takahashi",        posicoes: ["CEN"],       forca: 81 },
      { id: 'taishi-onodera',      nome: "Onodera",             posicoes: ["CEN"],       forca: 80 },
      { id: 'shoma-tomita',        nome: "Tomita",              posicoes: ["PON"],       forca: 79 },
      { id: 'haruto-obata',        nome: "Obata",               posicoes: ["PON"],       forca: 78 },
      { id: 'tomohiro-ogawa',      nome: "Ogawa",               posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2025,
    clube: "Argentina",
    jogadores: [
      { id: 'luciano-de-cecco',    nome: "De Cecco",            posicoes: ["LEV"],       forca: 85 },
      { id: 'pablo-kukartsev',     nome: "Kukartsev",           posicoes: ["OPO"],       forca: 82 },
      { id: 'luciano-vicentin',    nome: "Vicentin",            posicoes: ["PON"],       forca: 82 },
      { id: 'ezequiel-palacios',   nome: "Palacios",            posicoes: ["PON"],       forca: 82 },
      { id: 'agustin-loser',       nome: "Loser",               posicoes: ["CEN"],       forca: 84 },
      { id: 'santiago-danani',     nome: "Danani",              posicoes: ["LIB"],       forca: 84 },
      { id: 'matias-sanchez',      nome: "Sánchez",             posicoes: ["LEV"],       forca: 80 },
      { id: 'bruno-lima',          nome: "Lima",                posicoes: ["OPO"],       forca: 83 },
      { id: 'nicolas-mendez',      nome: "Méndez",              posicoes: ["PON"],       forca: 80 },
      { id: 'martin-ramos',        nome: "Ramos",               posicoes: ["CEN"],       forca: 81 },
      { id: 'joaquin-gallego',     nome: "Gallego",             posicoes: ["CEN"],       forca: 79 },
      { id: 'manuel-armoa',        nome: "Armoa",               posicoes: ["PON"],       forca: 79 },
      { id: 'jan-martinez',        nome: "Martínez",            posicoes: ["PON"],       forca: 78 },
      { id: 'tomas-aguilera',      nome: "Aguilera",            posicoes: ["LIB"],       forca: 77 }
    ]
  },

  // ─────────────────────────────────────────── VNL 2024 (Final: Łódź, Polônia)
  // Campeã: França (2º título, MVP Brizard). Vice: Japão. 3º: Polônia. 4º: Eslovênia.
  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "França",
    jogadores: [
      { id: 'antoine-brizard',     nome: "Brizard",             posicoes: ["LEV"],       forca: 88 },
      { id: 'jean-patry',          nome: "Patry",               posicoes: ["OPO"],       forca: 86 },
      { id: 'earvin-ngapeth',      nome: "N'Gapeth",            posicoes: ["PON"],       forca: 87 },
      { id: 'trevor-clevenot',     nome: "Clévenot",            posicoes: ["PON"],       forca: 84 },
      { id: 'nicolas-le-goff',     nome: "Le Goff",             posicoes: ["CEN"],       forca: 84 },
      { id: 'jenia-grebennikov',   nome: "Grebennikov",         posicoes: ["LIB"],       forca: 87 },
      { id: 'benjamin-toniutti',   nome: "Toniutti",            posicoes: ["LEV"],       forca: 84 },
      { id: 'kevin-tillie',        nome: "Tillie",              posicoes: ["PON"],       forca: 82 },
      { id: 'barthelemy-chinenyeze', nome: "Chinenyeze",        posicoes: ["CEN"],       forca: 85 },
      { id: 'theo-faure',          nome: "Faure",               posicoes: ["OPO"],       forca: 81 },
      { id: 'yacine-louati',       nome: "Louati",              posicoes: ["PON"],       forca: 81 },
      { id: 'timothee-carle',      nome: "Carle",               posicoes: ["PON"],       forca: 80 },
      { id: 'quentin-jouffroy',    nome: "Jouffroy",            posicoes: ["CEN"],       forca: 79 },
      { id: 'benjamin-diez',       nome: "Diez",                posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Japão",
    jogadores: [
      { id: 'masahiro-sekita',     nome: "Sekita",              posicoes: ["LEV"],       forca: 83 },
      { id: 'kento-miyaura',       nome: "Miyaura",             posicoes: ["OPO"],       forca: 85 },
      { id: 'yuki-ishikawa',       nome: "Ishikawa",            posicoes: ["PON"],       forca: 87 },
      { id: 'ran-takahashi',       nome: "Takahashi",           posicoes: ["PON"],       forca: 86 },
      { id: 'akihiro-yamauchi',    nome: "Yamauchi",            posicoes: ["CEN"],       forca: 82 },
      { id: 'tomohiro-yamamoto',   nome: "Yamamoto",            posicoes: ["LIB"],       forca: 86 },
      { id: 'yuji-nishida',        nome: "Nishida",             posicoes: ["OPO"],       forca: 87 },
      { id: 'masaki-oya',          nome: "Ōya",                 posicoes: ["LEV"],       forca: 80 },
      { id: 'tatsunori-otsuka',    nome: "Otsuka",              posicoes: ["PON"],       forca: 83 },
      { id: 'kentaro-takahashi',   nome: "K. Takahashi",        posicoes: ["CEN"],       forca: 81 },
      { id: 'taishi-onodera',      nome: "Onodera",             posicoes: ["CEN"],       forca: 80 },
      { id: 'shoma-tomita',        nome: "Tomita",              posicoes: ["PON"],       forca: 79 },
      { id: 'takumi-fujinaka',     nome: "Fujinaka",            posicoes: ["PON"],       forca: 78 },
      { id: 'tomohiro-ogawa',      nome: "Ogawa",               posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Polônia",
    jogadores: [
      { id: 'marcin-komenda',      nome: "Komenda",             posicoes: ["LEV"],       forca: 83 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 87 },
      { id: 'wilfredo-leon',       nome: "Leon",                posicoes: ["PON"],       forca: 89 },
      { id: 'tomasz-fornal',       nome: "Fornal",              posicoes: ["PON"],       forca: 85 },
      { id: 'jakub-kochanowski',   nome: "Kochanowski",         posicoes: ["CEN"],       forca: 86 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 84 },
      { id: 'aleksander-sliwka',   nome: "Śliwka",              posicoes: ["PON"],       forca: 85 },
      { id: 'kamil-semeniuk',      nome: "Semeniuk",            posicoes: ["PON"],       forca: 85 },
      { id: 'mateusz-bieniek',     nome: "Bieniek",             posicoes: ["CEN"],       forca: 83 },
      { id: 'norbert-huber',       nome: "Huber",               posicoes: ["CEN"],       forca: 82 },
      { id: 'grzegorz-lomacz',     nome: "Łomacz",              posicoes: ["LEV"],       forca: 80 },
      { id: 'artur-szalpuk',       nome: "Szalpuk",             posicoes: ["PON"],       forca: 80 },
      { id: 'lukasz-kaczmarek',    nome: "Kaczmarek",           posicoes: ["OPO"],       forca: 82 },
      { id: 'jakub-popiwczak',     nome: "Popiwczak",           posicoes: ["LIB"],       forca: 81 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Eslovênia",
    jogadores: [
      { id: 'gregor-ropret',       nome: "Ropret",              posicoes: ["LEV"],       forca: 82 },
      { id: 'toncek-stern',        nome: "T. Štern",            posicoes: ["OPO"],       forca: 85 },
      { id: 'klemen-cebulj',       nome: "Čebulj",              posicoes: ["PON"],       forca: 83 },
      { id: 'rok-mozic',           nome: "Možič",               posicoes: ["PON"],       forca: 85 },
      { id: 'jan-kozamernik',      nome: "Kozamernik",          posicoes: ["CEN"],       forca: 85 },
      { id: 'jani-kovacic',        nome: "Kovačič",             posicoes: ["LIB"],       forca: 82 },
      { id: 'tine-urnaut',         nome: "Urnaut",              posicoes: ["PON"],       forca: 83 },
      { id: 'alen-pajenk',         nome: "Pajenk",              posicoes: ["CEN"],       forca: 80 },
      { id: 'ziga-stern',          nome: "Ž. Štern",            posicoes: ["PON"],       forca: 80 },
      { id: 'jan-brozic',          nome: "Brožič",              posicoes: ["LEV"],       forca: 78 },
      { id: 'saso-stalekar',       nome: "Štalekar",            posicoes: ["CEN"],       forca: 79 },
      { id: 'nik-mujanovic',       nome: "Mujanović",           posicoes: ["OPO"],       forca: 80 },
      { id: 'rok-bracko',          nome: "Bračko",              posicoes: ["PON"],       forca: 77 },
      { id: 'matic-videcnik',      nome: "Videčnik",            posicoes: ["LIB"],       forca: 76 }
    ]
  },

  // Seleções adicionais da VNL 2024 (expandem a edição para 8 → Final Eight).
  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'micah-christenson',   nome: "Christenson",         posicoes: ["LEV"],       forca: 85 },
      { id: 'matt-anderson',       nome: "Anderson",            posicoes: ["OPO"],       forca: 85 },
      { id: 'tj-defalco',          nome: "DeFalco",             posicoes: ["PON"],       forca: 85 },
      { id: 'aaron-russell',       nome: "Russell",             posicoes: ["PON"],       forca: 84 },
      { id: 'taylor-averill',      nome: "Averill",             posicoes: ["CEN"],       forca: 83 },
      { id: 'erik-shoji',          nome: "Shoji",               posicoes: ["LIB"],       forca: 86 },
      { id: 'micah-ma-a',          nome: "Ma'a",                posicoes: ["LEV"],       forca: 82 },
      { id: 'jeff-jendryk',        nome: "Jendryk",             posicoes: ["CEN"],       forca: 82 },
      { id: 'david-smith',         nome: "Smith",               posicoes: ["CEN"],       forca: 81 },
      { id: 'kyle-ensing',         nome: "Ensing",              posicoes: ["OPO"],       forca: 82 },
      { id: 'garrett-muagututia',  nome: "Muagututia",          posicoes: ["PON"],       forca: 80 },
      { id: 'ethan-champlin',      nome: "Champlin",            posicoes: ["PON"],       forca: 80 },
      { id: 'merrick-mchenry',     nome: "McHenry",             posicoes: ["CEN"],       forca: 79 },
      { id: 'mason-briggs',        nome: "Briggs",              posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Itália",
    jogadores: [
      { id: 'simone-giannelli',    nome: "Giannelli",           posicoes: ["LEV"],       forca: 90 },
      { id: 'yuri-romano',         nome: "Romanò",              posicoes: ["OPO"],       forca: 86 },
      { id: 'alessandro-michieletto', nome: "Michieletto",      posicoes: ["PON"],       forca: 89 },
      { id: 'daniele-lavia',       nome: "Lavia",               posicoes: ["PON"],       forca: 86 },
      { id: 'gianluca-galassi',    nome: "Galassi",             posicoes: ["CEN"],       forca: 84 },
      { id: 'fabio-balaso',        nome: "Balaso",              posicoes: ["LIB"],       forca: 86 },
      { id: 'riccardo-sbertoli',   nome: "Sbertoli",            posicoes: ["LEV"],       forca: 82 },
      { id: 'simone-anzani',       nome: "Anzani",              posicoes: ["CEN"],       forca: 83 },
      { id: 'roberto-russo',       nome: "Russo",               posicoes: ["CEN"],       forca: 82 },
      { id: 'mattia-bottolo',      nome: "Bottolo",             posicoes: ["PON"],       forca: 83 },
      { id: 'kamil-rychlicki',     nome: "Rychlicki",           posicoes: ["OPO"],       forca: 82 },
      { id: 'francesco-recine',    nome: "Recine",              posicoes: ["PON"],       forca: 80 },
      { id: 'giovanni-sanguinetti', nome: "Sanguinetti",        posicoes: ["CEN"],       forca: 79 },
      { id: 'leonardo-scanferla',  nome: "Scanferla",           posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Brasil",
    jogadores: [
      { id: 'fernando-cachopa',    nome: "Cachopa",             posicoes: ["LEV"],       forca: 82 },
      { id: 'alan-souza',          nome: "Alan",                posicoes: ["OPO"],       forca: 84 },
      { id: 'ricardo-lucarelli',   nome: "Lucarelli",           posicoes: ["PON"],       forca: 85 },
      { id: 'yoandy-leal',         nome: "Leal",                posicoes: ["PON"],       forca: 84 },
      { id: 'flavio-gualberto',    nome: "Flávio",              posicoes: ["CEN"],       forca: 83 },
      { id: 'thales-hoss',         nome: "Thales",              posicoes: ["LIB"],       forca: 82 },
      { id: 'bruninho-rezende',    nome: "Bruninho",            posicoes: ["LEV"],       forca: 84 },
      { id: 'darlan-souza',        nome: "Darlan",              posicoes: ["OPO"],       forca: 85 },
      { id: 'lucas-saatkamp',      nome: "Saatkamp",            posicoes: ["CEN"],       forca: 82 },
      { id: 'isac-santos',         nome: "Isac",                posicoes: ["CEN"],       forca: 81 },
      { id: 'honorato-sales',      nome: "Honorato",            posicoes: ["PON"],       forca: 81 },
      { id: 'arthur-bento',        nome: "Arthur",              posicoes: ["PON"],       forca: 80 },
      { id: 'matheus-bispo',       nome: "Bispo",               posicoes: ["CEN"],       forca: 80 },
      { id: 'maique-nascimento',   nome: "Maique",              posicoes: ["LIB"],       forca: 84 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2024,
    clube: "Argentina",
    jogadores: [
      { id: 'luciano-de-cecco',    nome: "De Cecco",            posicoes: ["LEV"],       forca: 85 },
      { id: 'bruno-lima',          nome: "Lima",                posicoes: ["OPO"],       forca: 83 },
      { id: 'luciano-vicentin',    nome: "Vicentin",            posicoes: ["PON"],       forca: 82 },
      { id: 'ezequiel-palacios',   nome: "Palacios",            posicoes: ["PON"],       forca: 82 },
      { id: 'agustin-loser',       nome: "Loser",               posicoes: ["CEN"],       forca: 84 },
      { id: 'santiago-danani',     nome: "Danani",              posicoes: ["LIB"],       forca: 84 },
      { id: 'matias-sanchez',      nome: "Sánchez",             posicoes: ["LEV"],       forca: 80 },
      { id: 'pablo-kukartsev',     nome: "Kukartsev",           posicoes: ["OPO"],       forca: 81 },
      { id: 'martin-ramos',        nome: "Ramos",               posicoes: ["CEN"],       forca: 81 },
      { id: 'joaquin-gallego',     nome: "Gallego",             posicoes: ["CEN"],       forca: 79 },
      { id: 'nicolas-mendez',      nome: "Méndez",              posicoes: ["PON"],       forca: 80 },
      { id: 'manuel-armoa',        nome: "Armoa",               posicoes: ["PON"],       forca: 79 },
      { id: 'jan-martinez',        nome: "Martínez",            posicoes: ["PON"],       forca: 78 },
      { id: 'tomas-aguilera',      nome: "Aguilera",            posicoes: ["LIB"],       forca: 77 }
    ]
  },

  // ─────────────────────────────────────────── VNL 2023 (Final: Gdańsk, Polônia)
  // Campeã: Polônia (1º título). Vice: EUA. 3º: Japão. 4º: Itália.
  {
    competicao: "VNL (M)",
    edicao: 2023,
    clube: "Polônia",
    jogadores: [
      { id: 'marcin-komenda',      nome: "Komenda",             posicoes: ["LEV"],       forca: 83 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 87 },
      { id: 'wilfredo-leon',       nome: "Leon",                posicoes: ["PON"],       forca: 89 },
      { id: 'tomasz-fornal',       nome: "Fornal",              posicoes: ["PON"],       forca: 85 },
      { id: 'jakub-kochanowski',   nome: "Kochanowski",         posicoes: ["CEN"],       forca: 86 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 85 },
      { id: 'aleksander-sliwka',   nome: "Śliwka",              posicoes: ["PON"],       forca: 85 },
      { id: 'kamil-semeniuk',      nome: "Semeniuk",            posicoes: ["PON"],       forca: 85 },
      { id: 'mateusz-bieniek',     nome: "Bieniek",             posicoes: ["CEN"],       forca: 83 },
      { id: 'norbert-huber',       nome: "Huber",               posicoes: ["CEN"],       forca: 82 },
      { id: 'grzegorz-lomacz',     nome: "Łomacz",              posicoes: ["LEV"],       forca: 80 },
      { id: 'bartlomiej-boladz',   nome: "Bołądź",              posicoes: ["OPO"],       forca: 82 },
      { id: 'artur-szalpuk',       nome: "Szalpuk",             posicoes: ["PON"],       forca: 80 },
      { id: 'jakub-popiwczak',     nome: "Popiwczak",           posicoes: ["LIB"],       forca: 81 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2023,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'micah-christenson',   nome: "Christenson",         posicoes: ["LEV"],       forca: 85 },
      { id: 'matt-anderson',       nome: "Anderson",            posicoes: ["OPO"],       forca: 86 },
      { id: 'aaron-russell',       nome: "Russell",             posicoes: ["PON"],       forca: 85 },
      { id: 'tj-defalco',          nome: "DeFalco",             posicoes: ["PON"],       forca: 84 },
      { id: 'taylor-averill',      nome: "Averill",             posicoes: ["CEN"],       forca: 83 },
      { id: 'erik-shoji',          nome: "Shoji",               posicoes: ["LIB"],       forca: 86 },
      { id: 'micah-ma-a',          nome: "Ma'a",                posicoes: ["LEV"],       forca: 82 },
      { id: 'garrett-muagututia',  nome: "Muagututia",          posicoes: ["PON"],       forca: 80 },
      { id: 'david-smith',         nome: "Smith",               posicoes: ["CEN"],       forca: 82 },
      { id: 'jeff-jendryk',        nome: "Jendryk",             posicoes: ["CEN"],       forca: 82 },
      { id: 'kyle-ensing',         nome: "Ensing",              posicoes: ["OPO"],       forca: 82 },
      { id: 'jordan-ewert',        nome: "Ewert",               posicoes: ["PON"],       forca: 79 },
      { id: 'cody-kessel',         nome: "Kessel",              posicoes: ["PON"],       forca: 79 },
      { id: 'erik-sikes',          nome: "Sikes",               posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2023,
    clube: "Japão",
    jogadores: [
      { id: 'masahiro-sekita',     nome: "Sekita",              posicoes: ["LEV"],       forca: 83 },
      { id: 'yuji-nishida',        nome: "Nishida",             posicoes: ["OPO"],       forca: 87 },
      { id: 'yuki-ishikawa',       nome: "Ishikawa",            posicoes: ["PON"],       forca: 87 },
      { id: 'ran-takahashi',       nome: "Takahashi",           posicoes: ["PON"],       forca: 86 },
      { id: 'akihiro-yamauchi',    nome: "Yamauchi",            posicoes: ["CEN"],       forca: 82 },
      { id: 'tomohiro-yamamoto',   nome: "Yamamoto",            posicoes: ["LIB"],       forca: 85 },
      { id: 'kentaro-takahashi',   nome: "K. Takahashi",        posicoes: ["CEN"],       forca: 81 },
      { id: 'tatsunori-otsuka',    nome: "Otsuka",              posicoes: ["PON"],       forca: 83 },
      { id: 'masaki-oya',          nome: "Ōya",                 posicoes: ["LEV"],       forca: 80 },
      { id: 'akihiro-fukatsu',     nome: "Fukatsu",             posicoes: ["LEV"],       forca: 79 },
      { id: 'taishi-onodera',      nome: "Onodera",             posicoes: ["CEN"],       forca: 80 },
      { id: 'shoma-tomita',        nome: "Tomita",              posicoes: ["PON"],       forca: 79 },
      { id: 'kento-miyaura',       nome: "Miyaura",             posicoes: ["OPO"],       forca: 83 },
      { id: 'tomohiro-ogawa',      nome: "Ogawa",               posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "VNL (M)",
    edicao: 2023,
    clube: "Itália",
    jogadores: [
      { id: 'simone-giannelli',    nome: "Giannelli",           posicoes: ["LEV"],       forca: 90 },
      { id: 'yuri-romano',         nome: "Romanò",              posicoes: ["OPO"],       forca: 86 },
      { id: 'alessandro-michieletto', nome: "Michieletto",      posicoes: ["PON"],       forca: 89 },
      { id: 'daniele-lavia',       nome: "Lavia",               posicoes: ["PON"],       forca: 86 },
      { id: 'gianluca-galassi',    nome: "Galassi",             posicoes: ["CEN"],       forca: 84 },
      { id: 'fabio-balaso',        nome: "Balaso",              posicoes: ["LIB"],       forca: 86 },
      { id: 'riccardo-sbertoli',   nome: "Sbertoli",            posicoes: ["LEV"],       forca: 82 },
      { id: 'simone-anzani',       nome: "Anzani",              posicoes: ["CEN"],       forca: 83 },
      { id: 'roberto-russo',       nome: "Russo",               posicoes: ["CEN"],       forca: 82 },
      { id: 'mattia-bottolo',      nome: "Bottolo",             posicoes: ["PON"],       forca: 83 },
      { id: 'leonardo-scanferla',  nome: "Scanferla",           posicoes: ["LIB"],       forca: 80 },
      { id: 'francesco-recine',    nome: "Recine",              posicoes: ["PON"],       forca: 80 },
      { id: 'giovanni-sanguinetti', nome: "Sanguinetti",        posicoes: ["CEN"],       forca: 79 },
      { id: 'alessandro-bovolenta', nome: "Bovolenta",          posicoes: ["OPO"],       forca: 80 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VNL_M;
}
