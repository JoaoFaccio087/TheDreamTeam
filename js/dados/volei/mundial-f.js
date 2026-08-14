// ============================================================
//  mundial-f.js  —  dados de Vôlei FEMININO (Mundial de Seleções)
//
//  Estrutura idêntica ao masculino (mundial-m.js): cada "edição" é
//  um Mundial; cada "clube" é uma SELEÇÃO. Seleções por edição: as
//  4 semifinalistas (+ Brasil, se não estiver entre elas).
//
//  Competição: mundial_f (feminino), SEPARADA do masculino.
//  Cada seleção: 6 jogadoras = 5 de linha + 1 líbero (líbero FIXO).
//
//  Posições: LEV (levantadora) · OPO (oposta) · PON (ponteira) ·
//            CEN (central) · LIB (líbero)
//
//  Convenções:
//   - `id` = a PESSOA, reutilizado entre edições.
//   - Força 0-100, régua ~82 de média, 90+ raro. NORMALIZADA DENTRO
//     do FEMININO (uma força 90 aqui NÃO se compara com 90 no
//     masculino — são competições e escalas independentes).
//   - Edição = ano do Mundial.
// ============================================================

const DADOS_VOLEI_F = [

  // ══════════════════════════════════════════════════════════════════════════
  //  ★ MUNDIAL FEMININO 2022 (Holanda/Polônia) ★
  //  A SÉRVIA de Daniele Santarelli BICAMPEÃ (2º título seguido), batendo o
  //  Brasil por 3-0 na final, INVICTA (12 vitórias em 12 jogos). Itália levou
  //  o bronze sobre os EUA. Tijana BOŠKOVIĆ foi a MVP (repetiu o feito).
  //  Seleções (4 semifinalistas, Brasil já incluído): Sérvia (ouro), Brasil
  //  (prata), Itália (bronze), EUA (4º).
  //  Prêmios: MVP/Melhor oposta Bošković (SRB); Melhor levantadora Drča (SRB);
  //  Melhores ponteiras Gabi (BRA) e Sylla (ITA); Melhores centrais Ana Carolina
  //  (BRA) e Danesi (ITA); Melhor líbero Pušić (SRB). Maior pontuadora: Egonu (ITA).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Sérvia",
    jogadores: [
      { id: 'bojana-drca',         nome: "Drča",                posicoes: ["LEV"],       forca: 86 },
      { id: 'tijana-boskovic',     nome: "Bošković",            posicoes: ["OPO"],       forca: 93 },
      { id: 'brankica-mihajlovic', nome: "Mihajlović",          posicoes: ["PON"],       forca: 86 },
      { id: 'bianka-busa',         nome: "Buša",                posicoes: ["PON"],       forca: 84 },
      { id: 'jovana-stevanovic',   nome: "Stevanović",          posicoes: ["CEN"],       forca: 84 },
      { id: 'teodora-pusic',       nome: "Pušić",               posicoes: ["LIB"],       forca: 85 },
      { id: 'sladjana-mirkovic',   nome: "Mirković",            posicoes: ["LEV"],       forca: 79 },
      { id: 'aleksandra-uzelac',   nome: "Uzelac",              posicoes: ["OPO"],       forca: 79 },
      { id: 'katarina-lazovic',    nome: "Lazović",             posicoes: ["PON"],       forca: 82 },
      { id: 'jelena-blagojevic',   nome: "Blagojević",          posicoes: ["PON"],       forca: 80 },
      { id: 'ana-bjelica',         nome: "Bjelica",             posicoes: ["CEN"],       forca: 82 },
      { id: 'jovana-kocic',        nome: "Kocić",               posicoes: ["CEN"],       forca: 79 },
      { id: 'maja-aleksic',        nome: "Aleksić",             posicoes: ["CEN"],       forca: 80 },
      { id: 'aleksandra-jegdic',   nome: "Jegdić",              posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Brasil",
    jogadores: [
      { id: 'macris-carneiro',     nome: "Macris",              posicoes: ["LEV"],       forca: 85 },
      { id: 'tandara-caixeta',     nome: "Tandara",             posicoes: ["OPO"],       forca: 85 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 89 },
      { id: 'julia-bergmann',      nome: "Julia Bergmann",      posicoes: ["PON"],       forca: 83 },
      { id: 'ana-carolina-silva',  nome: "Ana Carolina",        posicoes: ["CEN"],       forca: 85 },
      { id: 'nyeme-costa',         nome: "Nyeme",               posicoes: ["LIB"],       forca: 82 },
      { id: 'roberta-ratzke',      nome: "Roberta",             posicoes: ["LEV"],       forca: 81 },
      { id: 'kisy-nascimento',     nome: "Kisy",                posicoes: ["OPO"],       forca: 82 },
      { id: 'priscila-daroit',     nome: "Pri Daroit",          posicoes: ["PON"],       forca: 80 },
      { id: 'ana-cristina-menezes', nome: "Ana Cristina",       posicoes: ["PON"],       forca: 80 },
      { id: 'carol-gattaz',        nome: "Carol Gattaz",        posicoes: ["CEN"],       forca: 83 },
      { id: 'lorenne-teixeira',    nome: "Lorenne",             posicoes: ["CEN"],       forca: 80 },
      { id: 'mara-leao',           nome: "Mara",                posicoes: ["OPO"],       forca: 78 },
      { id: 'laisa-santos',        nome: "Laís",                posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Itália",
    jogadores: [
      { id: 'alessia-orro',        nome: "Orro",                posicoes: ["LEV"],       forca: 86 },
      { id: 'paola-egonu',         nome: "Egonu",               posicoes: ["OPO"],       forca: 91 },
      { id: 'miriam-sylla',        nome: "Sylla",               posicoes: ["PON"],       forca: 87 },
      { id: 'caterina-bosetti',    nome: "Bosetti",             posicoes: ["PON"],       forca: 84 },
      { id: 'anna-danesi',         nome: "Danesi",              posicoes: ["CEN"],       forca: 85 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 87 },
      { id: 'ofelia-malinov',      nome: "Malinov",             posicoes: ["LEV"],       forca: 80 },
      { id: 'ekaterina-antropova', nome: "Antropova",           posicoes: ["OPO"],       forca: 82 },
      { id: 'elena-pietrini',      nome: "Pietrini",            posicoes: ["PON"],       forca: 83 },
      { id: 'loveth-omoruyi',      nome: "Omoruyi",             posicoes: ["PON"],       forca: 79 },
      { id: 'cristina-chirichella', nome: "Chirichella",        posicoes: ["CEN"],       forca: 82 },
      { id: 'sarah-fahr',          nome: "Fahr",                posicoes: ["CEN"],       forca: 81 },
      { id: 'marina-lubian',       nome: "Lubian",              posicoes: ["CEN"],       forca: 79 },
      { id: 'eleonora-fersino',    nome: "Fersino",             posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'jordyn-poulter',      nome: "Poulter",             posicoes: ["LEV"],       forca: 84 },
      { id: 'annie-drews',         nome: "Drews",               posicoes: ["OPO"],       forca: 85 },
      { id: 'jordan-larson',       nome: "Larson",              posicoes: ["PON"],       forca: 87 },
      { id: 'michelle-bartsch',    nome: "Bartsch-Hackley",     posicoes: ["PON"],       forca: 85 },
      { id: 'chiaka-ogbogu',       nome: "Ogbogu",              posicoes: ["CEN"],       forca: 83 },
      { id: 'justine-wong-orantes', nome: "Wong-Orantes",       posicoes: ["LIB"],       forca: 84 },
      { id: 'lauren-carlini',      nome: "Carlini",             posicoes: ["LEV"],       forca: 80 },
      { id: 'kelsey-robinson',     nome: "Robinson",            posicoes: ["OPO"],       forca: 82 },
      { id: 'avery-skinner',       nome: "Skinner",             posicoes: ["PON"],       forca: 81 },
      { id: 'kathryn-plummer',     nome: "Plummer",             posicoes: ["PON"],       forca: 82 },
      { id: 'haleigh-washington',  nome: "Washington",          posicoes: ["CEN"],       forca: 82 },
      { id: 'dana-rettke',         nome: "Rettke",              posicoes: ["CEN"],       forca: 81 },
      { id: 'anna-hall',           nome: "Hall",                posicoes: ["CEN"],       forca: 77 },
      { id: 'morgan-hentz',        nome: "Hentz",               posicoes: ["LIB"],       forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  ★ MUNDIAL FEMININO 2018 (Japão) ★
  //  A SÉRVIA de Zoran Terzić CAMPEÃ pela 1ª vez, batendo a Itália por 3-2 numa
  //  final histórica (1ª final 100% europeia). China levou o bronze sobre a Holanda.
  //  Tijana BOŠKOVIĆ foi a MVP; Paola EGONU (ITA) foi a maior pontuadora (324 pts).
  //  Brasil caiu antes das semis (6º) — então, pela regra (4 semifinalistas + Brasil),
  //  esta edição tem 5 SELEÇÕES: Sérvia (ouro), Itália (prata), China (bronze),
  //  Holanda (4º) e Brasil (adicionado por não estar entre as semis).
  //  Prêmios: MVP Bošković (SRB); Melhor levantadora Malinov (ITA); Melhores ponteiras
  //  Sylla (ITA) e Zhu Ting (CHN); Melhores centrais Yan Ni (CHN) e Rašić (SRB);
  //  Melhor oposta Egonu (ITA); Melhor líbero De Gennaro (ITA).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2018,
    clube: "Sérvia",
    jogadores: [
      { id: 'maja-ognjenovic',     nome: "Ognjenović",          posicoes: ["LEV"],       forca: 85 },
      { id: 'tijana-boskovic',     nome: "Bošković",            posicoes: ["OPO"],       forca: 91 },
      { id: 'brankica-mihajlovic', nome: "Mihajlović",          posicoes: ["PON"],       forca: 85 },
      { id: 'tijana-malesevic',    nome: "Malešević",           posicoes: ["PON"],       forca: 83 },
      { id: 'milena-rasic',        nome: "Rašić",               posicoes: ["CEN"],       forca: 85 },
      { id: 'silvija-popovic',     nome: "Popović",             posicoes: ["LIB"],       forca: 85 },
      { id: 'bojana-drca',         nome: "Drča",                posicoes: ["LEV"],       forca: 82 },
      { id: 'bianka-busa',         nome: "Buša",                posicoes: ["OPO"],       forca: 81 },
      { id: 'jovana-stevanovic',   nome: "Stevanović",          posicoes: ["CEN"],       forca: 83 },
      { id: 'stefana-veljkovic',   nome: "Veljković",           posicoes: ["CEN"],       forca: 82 },
      { id: 'jelena-blagojevic',   nome: "Blagojević",          posicoes: ["PON"],       forca: 80 },
      { id: 'sladjana-mirkovic',   nome: "Mirković",            posicoes: ["LEV"],       forca: 77 },
      { id: 'ana-bjelica',         nome: "Bjelica",             posicoes: ["OPO"],       forca: 79 },
      { id: 'teodora-pusic',       nome: "Pušić",               posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2018,
    clube: "Itália",
    jogadores: [
      { id: 'ofelia-malinov',      nome: "Malinov",             posicoes: ["LEV"],       forca: 86 },
      { id: 'paola-egonu',         nome: "Egonu",               posicoes: ["OPO"],       forca: 90 },
      { id: 'miriam-sylla',        nome: "Sylla",               posicoes: ["PON"],       forca: 86 },
      { id: 'lucia-bosetti',       nome: "Lucia Bosetti",       posicoes: ["PON"],       forca: 83 },
      { id: 'anna-danesi',         nome: "Danesi",              posicoes: ["CEN"],       forca: 84 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 87 },
      { id: 'carlotta-cambi',      nome: "Cambi",               posicoes: ["LEV"],       forca: 79 },
      { id: 'elena-pietrini',      nome: "Pietrini",            posicoes: ["PON"],       forca: 82 },
      { id: 'caterina-bosetti',    nome: "Bosetti",             posicoes: ["PON"],       forca: 83 },
      { id: 'cristina-chirichella', nome: "Chirichella",        posicoes: ["CEN"],       forca: 82 },
      { id: 'sarah-fahr',          nome: "Fahr",                posicoes: ["CEN"],       forca: 80 },
      { id: 'ofelia-marcelli',     nome: "Marcelli",            posicoes: ["CEN"],       forca: 77 },
      { id: 'sylvia-nwakalor',     nome: "Nwakalor",            posicoes: ["OPO"],       forca: 78 },
      { id: 'beatrice-parrocchiale', nome: "Parrocchiale",      posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2018,
    clube: "China",
    jogadores: [
      { id: 'ding-xia',            nome: "Ding Xia",            posicoes: ["LEV"],       forca: 85 },
      { id: 'gong-xiangyu',        nome: "Gong Xiangyu",        posicoes: ["OPO"],       forca: 84 },
      { id: 'zhu-ting',            nome: "Zhu Ting",            posicoes: ["PON"],       forca: 90 },
      { id: 'zhang-changning',     nome: "Zhang Changning",     posicoes: ["PON"],       forca: 85 },
      { id: 'yan-ni',              nome: "Yan Ni",              posicoes: ["CEN"],       forca: 85 },
      { id: 'wang-mengjie',        nome: "Wang Mengjie",        posicoes: ["LIB"],       forca: 83 },
      { id: 'diao-linyu',          nome: "Diao Linyu",          posicoes: ["LEV"],       forca: 79 },
      { id: 'li-yingying',         nome: "Li Yingying",         posicoes: ["PON"],       forca: 83 },
      { id: 'liu-xiaotong',        nome: "Liu Xiaotong",        posicoes: ["PON"],       forca: 82 },
      { id: 'yuan-xinyue',         nome: "Yuan Xinyue",         posicoes: ["CEN"],       forca: 84 },
      { id: 'hu-mingyuan',         nome: "Hu Mingyuan",         posicoes: ["CEN"],       forca: 78 },
      { id: 'yang-hanyu',          nome: "Yang Hanyu",          posicoes: ["OPO"],       forca: 78 },
      { id: 'gao-yi',              nome: "Gao Yi",              posicoes: ["CEN"],       forca: 77 },
      { id: 'lin-li',              nome: "Lin Li",              posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2018,
    clube: "Holanda",
    jogadores: [
      { id: 'laura-dijkema',       nome: "Dijkema",             posicoes: ["LEV"],       forca: 83 },
      { id: 'lonneke-sloetjes',    nome: "Slöetjes",            posicoes: ["OPO"],       forca: 87 },
      { id: 'lonneke-vandenberg',  nome: "Van Den Berg",        posicoes: ["PON"],       forca: 82 },
      { id: 'anne-buijs',          nome: "Buijs",               posicoes: ["PON"],       forca: 82 },
      { id: 'robin-de-kruijf',     nome: "De Kruijf",           posicoes: ["CEN"],       forca: 84 },
      { id: 'myrthe-schoot',       nome: "Schoot",              posicoes: ["LIB"],       forca: 83 },
      { id: 'britt-bongaerts',     nome: "Bongaerts",           posicoes: ["LEV"],       forca: 78 },
      { id: 'nika-daalderop',      nome: "Daalderop",           posicoes: ["PON"],       forca: 80 },
      { id: 'marrit-jasper',       nome: "Jasper",              posicoes: ["PON"],       forca: 78 },
      { id: 'juliet-lohuis',       nome: "Lohuis",              posicoes: ["CEN"],       forca: 79 },
      { id: 'yvon-belien',         nome: "Beliën",              posicoes: ["CEN"],       forca: 80 },
      { id: 'celeste-plak',        nome: "Plak",                posicoes: ["OPO"],       forca: 81 },
      { id: 'maret-grothues',      nome: "Grothues",            posicoes: ["PON"],       forca: 77 },
      { id: 'kristie-koolhaas',    nome: "Koolhaas",            posicoes: ["LIB"],       forca: 76 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2018,
    clube: "Brasil",
    jogadores: [
      { id: 'macris-carneiro',     nome: "Macris",              posicoes: ["LEV"],       forca: 84 },
      { id: 'tandara-caixeta',     nome: "Tandara",             posicoes: ["OPO"],       forca: 85 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 87 },
      { id: 'natalia-pereira',     nome: "Natália",             posicoes: ["PON"],       forca: 84 },
      { id: 'thaisa-menezes',      nome: "Thaisa",              posicoes: ["CEN"],       forca: 85 },
      { id: 'suelen-pinto',        nome: "Suelen",              posicoes: ["LIB"],       forca: 82 },
      { id: 'roberta-ratzke',      nome: "Roberta",             posicoes: ["LEV"],       forca: 81 },
      { id: 'rosamaria-montibeller', nome: "Rosamaria",         posicoes: ["OPO"],       forca: 82 },
      { id: 'drussyla-costa',      nome: "Drussyla",            posicoes: ["PON"],       forca: 80 },
      { id: 'ana-beatriz-correa',  nome: "Bia",                 posicoes: ["CEN"],       forca: 81 },
      { id: 'carol-gattaz',        nome: "Carol Gattaz",        posicoes: ["CEN"],       forca: 82 },
      { id: 'adenizia-silva',      nome: "Adenízia",            posicoes: ["CEN"],       forca: 80 },
      { id: 'lorenne-teixeira',    nome: "Lorenne",             posicoes: ["OPO"],       forca: 78 },
      { id: 'leia-henrique',       nome: "Léia",                posicoes: ["LIB"],       forca: 79 }
    ]
  },

  // ─────────────────────────────────────────── MUNDIAL 2014 (Itália, sede)
  // Campeã: EUA (1º título, MVP Kimberly Hill). Vice: China. 3º: Brasil. 4º: Itália.
  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2014,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'alisha-glass',        nome: "Glass",               posicoes: ["LEV"],       forca: 85 },
      { id: 'karsta-lowe',         nome: "Lowe",                posicoes: ["OPO"],       forca: 84 },
      { id: 'kimberly-hill',       nome: "Hill",                posicoes: ["PON"],       forca: 87 },
      { id: 'jordan-larson',       nome: "Larson",              posicoes: ["PON"],       forca: 88 },
      { id: 'christa-dietzen',     nome: "Dietzen",             posicoes: ["CEN"],       forca: 83 },
      { id: 'kayla-banwarth',      nome: "Banwarth",            posicoes: ["LIB"],       forca: 83 },
      { id: 'lauren-carlini',      nome: "Carlini",             posicoes: ["LEV"],       forca: 78 },
      { id: 'kelsey-robinson',     nome: "Robinson",            posicoes: ["PON"],       forca: 82 },
      { id: 'kelly-murphy',        nome: "Murphy",              posicoes: ["OPO"],       forca: 81 },
      { id: 'foluke-akinradewo',   nome: "Akinradewo",          posicoes: ["CEN"],       forca: 85 },
      { id: 'rachael-adams',       nome: "Adams",               posicoes: ["CEN"],       forca: 80 },
      { id: 'nicole-fawcett',      nome: "Fawcett",             posicoes: ["OPO"],       forca: 79 },
      { id: 'cursty-jackson',      nome: "Jackson",             posicoes: ["PON"],       forca: 77 },
      { id: 'nicole-davis',        nome: "Davis",               posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2014,
    clube: "China",
    jogadores: [
      { id: 'wei-qiuyue',          nome: "Wei Qiuyue",          posicoes: ["LEV"],       forca: 84 },
      { id: 'zhu-ting',            nome: "Zhu Ting",            posicoes: ["PON"],       forca: 88 },
      { id: 'hui-ruoqi',           nome: "Hui Ruoqi",           posicoes: ["PON"],       forca: 84 },
      { id: 'zeng-chunlei',        nome: "Zeng Chunlei",        posicoes: ["OPO"],       forca: 82 },
      { id: 'yang-junjing',        nome: "Yang Junjing",        posicoes: ["CEN"],       forca: 81 },
      { id: 'chen-zhanhui',        nome: "Chen Zhanhui",        posicoes: ["LIB"],       forca: 81 },
      { id: 'shen-jingsi',         nome: "Shen Jingsi",         posicoes: ["LEV"],       forca: 78 },
      { id: 'liu-yanhan',          nome: "Liu Yanhan",          posicoes: ["PON"],       forca: 80 },
      { id: 'zhang-changning',     nome: "Zhang Changning",     posicoes: ["PON"],       forca: 82 },
      { id: 'yuan-xinyue',         nome: "Yuan Xinyue",         posicoes: ["CEN"],       forca: 81 },
      { id: 'xu-yunli',            nome: "Xu Yunli",            posicoes: ["CEN"],       forca: 80 },
      { id: 'yang-fangxu',         nome: "Yang Fangxu",         posicoes: ["OPO"],       forca: 77 },
      { id: 'shan-danna',          nome: "Shan Danna",          posicoes: ["PON"],       forca: 77 },
      { id: 'wang-mengjie',        nome: "Wang Mengjie",        posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2014,
    clube: "Brasil",
    jogadores: [
      { id: 'dani-lins',           nome: "Dani Lins",           posicoes: ["LEV"],       forca: 84 },
      { id: 'sheilla-castro',      nome: "Sheilla",             posicoes: ["OPO"],       forca: 86 },
      { id: 'natalia-pereira',     nome: "Natália",             posicoes: ["PON"],       forca: 84 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 84 },
      { id: 'thaisa-menezes',      nome: "Thaisa",              posicoes: ["CEN"],       forca: 86 },
      { id: 'fabiana-claudino',    nome: "Fabiana",             posicoes: ["CEN"],       forca: 85 },
      { id: 'fabiola-almeida',     nome: "Fabíola",             posicoes: ["LEV"],       forca: 80 },
      { id: 'monique-pavao',       nome: "Monique",             posicoes: ["OPO"],       forca: 80 },
      { id: 'juciely-barreto',     nome: "Juciely",             posicoes: ["PON"],       forca: 80 },
      { id: 'adenizia-silva',      nome: "Adenízia",            posicoes: ["CEN"],       forca: 82 },
      { id: 'carol-gattaz',        nome: "Carol Gattaz",        posicoes: ["CEN"],       forca: 81 },
      { id: 'tandara-caixeta',     nome: "Tandara",             posicoes: ["OPO"],       forca: 82 },
      { id: 'natasha-farinea',     nome: "Natasha",             posicoes: ["PON"],       forca: 77 },
      { id: 'camila-brait',        nome: "Camila Brait",        posicoes: ["LIB"],       forca: 83 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2014,
    clube: "Itália",
    jogadores: [
      { id: 'ofelia-malinov',      nome: "Malinov",             posicoes: ["LEV"],       forca: 82 },
      { id: 'valentina-diouf',     nome: "Diouf",               posicoes: ["OPO"],       forca: 84 },
      { id: 'caterina-bosetti',    nome: "Bosetti",             posicoes: ["PON"],       forca: 82 },
      { id: 'lucia-bosetti',       nome: "Lucia Bosetti",       posicoes: ["PON"],       forca: 82 },
      { id: 'cristina-chirichella', nome: "Chirichella",        posicoes: ["CEN"],       forca: 81 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 85 },
      { id: 'noemi-signorile',     nome: "Signorile",           posicoes: ["LEV"],       forca: 78 },
      { id: 'serena-ortolani',     nome: "Ortolani",            posicoes: ["OPO"],       forca: 80 },
      { id: 'valentina-fiorin',    nome: "Fiorin",              posicoes: ["PON"],       forca: 78 },
      { id: 'antonella-del-core',  nome: "Del Core",            posicoes: ["PON"],       forca: 80 },
      { id: 'raphaela-folie',      nome: "Folie",               posicoes: ["CEN"],       forca: 80 },
      { id: 'valentina-arrighetti', nome: "Arrighetti",         posicoes: ["CEN"],       forca: 78 },
      { id: 'lucia-bonifacio',     nome: "Bonifacio",           posicoes: ["OPO"],       forca: 76 },
      { id: 'sara-anzanello',      nome: "Anzanello",           posicoes: ["LIB"],       forca: 77 }
    ]
  },

  // ─────────────────────────────────────────── MUNDIAL 2010 (Japão, sede)
  // Campeã: Rússia (MVP Gamova). Vice: Brasil. 3º: Japão. 4º: EUA.
  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2010,
    clube: "Rússia",
    jogadores: [
      { id: 'alexandra-korukovets', nome: "Korukovets",         posicoes: ["LEV"],       forca: 83 },
      { id: 'ekaterina-gamova',    nome: "Gamova",              posicoes: ["OPO"],       forca: 91 },
      { id: 'tatiana-kosheleva',   nome: "Kosheleva",           posicoes: ["PON"],       forca: 85 },
      { id: 'lyubov-sokolova',     nome: "Sokolova",            posicoes: ["PON"],       forca: 85 },
      { id: 'maria-borodakova',    nome: "Borodakova",          posicoes: ["CEN"],       forca: 82 },
      { id: 'svetlana-kryuchkova', nome: "Kryuchkova",          posicoes: ["LIB"],       forca: 81 },
      { id: 'evgeniya-startseva',  nome: "Startseva",           posicoes: ["LEV"],       forca: 80 },
      { id: 'natalia-obmochaeva',  nome: "Goncharova",          posicoes: ["OPO"],       forca: 84 },
      { id: 'yulia-morozova',      nome: "Morozova",            posicoes: ["CEN"],       forca: 81 },
      { id: 'ekaterina-orlova',    nome: "Orlova",              posicoes: ["PON"],       forca: 80 },
      { id: 'yevgeniya-estes',     nome: "Estes",               posicoes: ["PON"],       forca: 80 },
      { id: 'irina-zaryazhko',     nome: "Zaryazhko",           posicoes: ["CEN"],       forca: 79 },
      { id: 'yekaterina-uliakina', nome: "Uliakina",            posicoes: ["OPO"],       forca: 77 },
      { id: 'svetlana-kolosova',   nome: "Kolosova",            posicoes: ["LIB"],       forca: 77 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2010,
    clube: "Brasil",
    jogadores: [
      { id: 'dani-lins',           nome: "Dani Lins",           posicoes: ["LEV"],       forca: 83 },
      { id: 'sheilla-castro',      nome: "Sheilla",             posicoes: ["OPO"],       forca: 86 },
      { id: 'paula-pequeno',       nome: "Paula Pequeno",       posicoes: ["PON"],       forca: 85 },
      { id: 'jaqueline-carvalho',  nome: "Jaqueline",           posicoes: ["PON"],       forca: 85 },
      { id: 'thaisa-menezes',      nome: "Thaisa",              posicoes: ["CEN"],       forca: 85 },
      { id: 'fabiana-claudino',    nome: "Fabiana",             posicoes: ["CEN"],       forca: 85 },
      { id: 'fabiola-almeida',     nome: "Fabíola",             posicoes: ["LEV"],       forca: 80 },
      { id: 'welissa-gonzaga',     nome: "Sassá",               posicoes: ["OPO"],       forca: 80 },
      { id: 'natalia-pereira',     nome: "Natália",             posicoes: ["PON"],       forca: 81 },
      { id: 'fernanda-garay',      nome: "Fernanda Garay",      posicoes: ["PON"],       forca: 83 },
      { id: 'adenizia-silva',      nome: "Adenízia",            posicoes: ["CEN"],       forca: 81 },
      { id: 'carol-albuquerque',   nome: "Carol",               posicoes: ["CEN"],       forca: 80 },
      { id: 'juciely-barreto',     nome: "Juciely",             posicoes: ["OPO"],       forca: 79 },
      { id: 'fabiana-oliveira',    nome: "Fabi",                posicoes: ["LIB"],       forca: 86 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2010,
    clube: "Japão",
    jogadores: [
      { id: 'yoshie-takeshita',    nome: "Takeshita",           posicoes: ["LEV"],       forca: 84 },
      { id: 'yuko-sano',           nome: "Sano",                posicoes: ["LIB"],       forca: 85 },
      { id: 'saori-kimura',        nome: "Kimura",              posicoes: ["PON"],       forca: 84 },
      { id: 'yuki-kimura',         nome: "Y. Kimura",           posicoes: ["PON"],       forca: 80 },
      { id: 'erika-araki',         nome: "Araki",               posicoes: ["CEN"],       forca: 82 },
      { id: 'yukiko-ebata',        nome: "Ebata",               posicoes: ["PON"],       forca: 81 },
      { id: 'kaori-inoue',         nome: "Inoue",               posicoes: ["OPO"],       forca: 80 },
      { id: 'maiko-kano',          nome: "Kano",                posicoes: ["CEN"],       forca: 79 },
      { id: 'mai-yamaguchi',       nome: "Yamaguchi",           posicoes: ["CEN"],       forca: 78 },
      { id: 'nana-iwasaka',        nome: "Iwasaka",             posicoes: ["CEN"],       forca: 78 },
      { id: 'risa-shinnabe',       nome: "Shinnabe",            posicoes: ["PON"],       forca: 78 },
      { id: 'hitomi-nakamichi',    nome: "Nakamichi",           posicoes: ["LEV"],       forca: 78 },
      { id: 'mizuho-ishida',       nome: "Ishida",              posicoes: ["OPO"],       forca: 77 },
      { id: 'yoshie-miyamoto',     nome: "Miyamoto",            posicoes: ["LIB"],       forca: 76 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2010,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'lindsey-berg',        nome: "Berg",                posicoes: ["LEV"],       forca: 83 },
      { id: 'destinee-hooker',     nome: "Hooker",              posicoes: ["OPO"],       forca: 86 },
      { id: 'megan-hodge',         nome: "Hodge",               posicoes: ["PON"],       forca: 83 },
      { id: 'jordan-larson',       nome: "Larson",              posicoes: ["PON"],       forca: 84 },
      { id: 'foluke-akinradewo',   nome: "Akinradewo",          posicoes: ["CEN"],       forca: 84 },
      { id: 'nicole-davis',        nome: "Davis",               posicoes: ["LIB"],       forca: 82 },
      { id: 'courtney-thompson',   nome: "Thompson",            posicoes: ["LEV"],       forca: 79 },
      { id: 'kim-glass',           nome: "Glass",               posicoes: ["PON"],       forca: 80 },
      { id: 'tayyiba-haneef',      nome: "Haneef-Park",         posicoes: ["OPO"],       forca: 81 },
      { id: 'christa-harmotto',    nome: "Harmotto",            posicoes: ["CEN"],       forca: 81 },
      { id: 'megan-easy',          nome: "Easy",                posicoes: ["CEN"],       forca: 78 },
      { id: 'cassidy-lichtman',    nome: "Lichtman",            posicoes: ["PON"],       forca: 77 },
      { id: 'juliann-faucette',    nome: "Faucette",            posicoes: ["PON"],       forca: 77 },
      { id: 'kristin-hildebrand',  nome: "Hildebrand",          posicoes: ["LIB"],       forca: 76 }
    ]
  },

  // ─────────────────────────────────────────── MUNDIAL 2006 (Japão, sede)
  // Campeã: Rússia (MVP Gamova). Vice: Brasil. 3º: Sérvia e Montenegro. 4º: Itália.
  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2006,
    clube: "Rússia",
    jogadores: [
      { id: 'marina-sheshenina',   nome: "Sheshenina",          posicoes: ["LEV"],       forca: 82 },
      { id: 'ekaterina-gamova',    nome: "Gamova",              posicoes: ["OPO"],       forca: 91 },
      { id: 'lyubov-sokolova',     nome: "Sokolova",            posicoes: ["PON"],       forca: 85 },
      { id: 'yevgeniya-estes',     nome: "Estes",               posicoes: ["PON"],       forca: 82 },
      { id: 'marina-akulova',      nome: "Akulova",             posicoes: ["CEN"],       forca: 81 },
      { id: 'svetlana-kryuchkova', nome: "Kryuchkova",          posicoes: ["LIB"],       forca: 81 },
      { id: 'natalia-safronova',   nome: "Safronova",           posicoes: ["PON"],       forca: 82 },
      { id: 'olga-fateeva',        nome: "Fateeva",             posicoes: ["LEV"],       forca: 79 },
      { id: 'yulia-merkulova',     nome: "Merkulova",           posicoes: ["CEN"],       forca: 81 },
      { id: 'lioubov-shashkova',   nome: "Shashkova",           posicoes: ["PON"],       forca: 80 },
      { id: 'elena-plotnikova',    nome: "Plotnikova",          posicoes: ["CEN"],       forca: 78 },
      { id: 'yekaterina-krivets',  nome: "Krivets",             posicoes: ["OPO"],       forca: 78 },
      { id: 'yulia-sedova',        nome: "Sedova",              posicoes: ["CEN"],       forca: 77 },
      { id: 'olga-nikolaeva',      nome: "Nikolaeva",           posicoes: ["LIB"],       forca: 76 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2006,
    clube: "Brasil",
    jogadores: [
      { id: 'helia-souza',         nome: "Fofão",               posicoes: ["LEV"],       forca: 86 },
      { id: 'sheilla-castro',      nome: "Sheilla",             posicoes: ["OPO"],       forca: 84 },
      { id: 'paula-pequeno',       nome: "Paula Pequeno",       posicoes: ["PON"],       forca: 85 },
      { id: 'marianne-steinbrecher', nome: "Mari",              posicoes: ["OPO"],       forca: 85 },
      { id: 'walewska-oliveira',   nome: "Walewska",            posicoes: ["CEN"],       forca: 83 },
      { id: 'arlene-xavier',       nome: "Arlene",              posicoes: ["LIB"],       forca: 82 },
      { id: 'jaqueline-carvalho',  nome: "Jaqueline",           posicoes: ["PON"],       forca: 83 },
      { id: 'fabiana-claudino',    nome: "Fabiana",             posicoes: ["CEN"],       forca: 83 },
      { id: 'valeskinha-menezes',  nome: "Valeskinha",          posicoes: ["LEV"],       forca: 80 },
      { id: 'welissa-gonzaga',     nome: "Sassá",               posicoes: ["PON"],       forca: 81 },
      { id: 'carol-albuquerque',   nome: "Carol",               posicoes: ["CEN"],       forca: 80 },
      { id: 'thaisa-menezes',      nome: "Thaisa",              posicoes: ["CEN"],       forca: 81 },
      { id: 'renata-colombo',      nome: "Renata",              posicoes: ["PON"],       forca: 78 },
      { id: 'fabiana-oliveira',    nome: "Fabi",                posicoes: ["LIB"],       forca: 84 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2006,
    clube: "Sérvia e Montenegro",
    jogadores: [
      { id: 'maja-ognjenovic',     nome: "Ognjenović",          posicoes: ["LEV"],       forca: 82 },
      { id: 'jelena-nikolic',      nome: "J. Nikolić",          posicoes: ["PON"],       forca: 83 },
      { id: 'jovana-brakocevic',   nome: "Brakočević",          posicoes: ["OPO"],       forca: 84 },
      { id: 'suzana-cebic',        nome: "Ćebić",               posicoes: ["PON"],       forca: 80 },
      { id: 'natasa-krsmanovic',   nome: "Krsmanović",          posicoes: ["CEN"],       forca: 82 },
      { id: 'suzana-lazovic',      nome: "Lazović",             posicoes: ["LIB"],       forca: 80 },
      { id: 'stefana-veljkovic',   nome: "Veljković",           posicoes: ["CEN"],       forca: 80 },
      { id: 'sanja-starovic',      nome: "Starović",            posicoes: ["OPO"],       forca: 80 },
      { id: 'sanja-malagurski',    nome: "Malagurski",          posicoes: ["PON"],       forca: 79 },
      { id: 'jelena-santic',       nome: "Šantić",              posicoes: ["LEV"],       forca: 77 },
      { id: 'ivana-nesovic',       nome: "Nešović",             posicoes: ["CEN"],       forca: 78 },
      { id: 'milena-rasic',        nome: "Rašić",               posicoes: ["CEN"],       forca: 80 },
      { id: 'brizitka-molnar',     nome: "Molnar",              posicoes: ["PON"],       forca: 77 },
      { id: 'jovana-vesovic',      nome: "Vesović",             posicoes: ["LIB"],       forca: 76 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2006,
    clube: "Itália",
    jogadores: [
      { id: 'eleonora-lo-bianco',  nome: "Lo Bianco",           posicoes: ["LEV"],       forca: 84 },
      { id: 'simona-gioli',        nome: "Gioli",               posicoes: ["OPO"],       forca: 83 },
      { id: 'elisa-togut',         nome: "Togut",               posicoes: ["PON"],       forca: 82 },
      { id: 'francesca-piccinini', nome: "Piccinini",           posicoes: ["PON"],       forca: 85 },
      { id: 'paola-cardullo',      nome: "Cardullo",            posicoes: ["LIB"],       forca: 82 },
      { id: 'manuela-leggeri',     nome: "Leggeri",             posicoes: ["CEN"],       forca: 81 },
      { id: 'martina-guiggi',      nome: "Guiggi",              posicoes: ["CEN"],       forca: 80 },
      { id: 'serena-ortolani',     nome: "Ortolani",            posicoes: ["OPO"],       forca: 80 },
      { id: 'antonella-del-core',  nome: "Del Core",            posicoes: ["PON"],       forca: 81 },
      { id: 'nadia-centoni',       nome: "Centoni",             posicoes: ["OPO"],       forca: 79 },
      { id: 'jenny-barazza',       nome: "Barazza",             posicoes: ["CEN"],       forca: 79 },
      { id: 'carolina-costagrande', nome: "Costagrande",        posicoes: ["PON"],       forca: 80 },
      { id: 'valentina-fiorin',    nome: "Fiorin",              posicoes: ["PON"],       forca: 77 },
      { id: 'imma-sirressi',       nome: "Sirressi",            posicoes: ["LIB"],       forca: 77 }
    ]
  },

  // ─────────────────────────────────────────── MUNDIAL 2025 (Tailândia)
  // Campeã: Itália (título após 23 anos, MVP Orro; Egonu MVP da final). Vice: Turquia.
  // 3º: Brasil. 4º: Japão. Elencos das finais/pódio confirmados por fontes web.
  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2025,
    clube: "Itália",
    jogadores: [
      { id: 'alessia-orro',        nome: "Orro",                posicoes: ["LEV"],       forca: 90 },
      { id: 'paola-egonu',         nome: "Egonu",               posicoes: ["OPO"],       forca: 92 },
      { id: 'miriam-sylla',        nome: "Sylla",               posicoes: ["PON"],       forca: 87 },
      { id: 'stella-nervini',      nome: "Nervini",             posicoes: ["PON"],       forca: 82 },
      { id: 'anna-danesi',         nome: "Danesi",              posicoes: ["CEN"],       forca: 86 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 87 },
      { id: 'carlotta-cambi',      nome: "Cambi",               posicoes: ["LEV"],       forca: 80 },
      { id: 'ekaterina-antropova', nome: "Antropova",           posicoes: ["OPO"],       forca: 85 },
      { id: 'gaia-giovannini',     nome: "Giovannini",          posicoes: ["PON"],       forca: 81 },
      { id: 'loveth-omoruyi',      nome: "Omoruyi",             posicoes: ["PON"],       forca: 80 },
      { id: 'sarah-fahr',          nome: "Fahr",                posicoes: ["CEN"],       forca: 84 },
      { id: 'yasmina-akrari',      nome: "Akrari",              posicoes: ["CEN"],       forca: 79 },
      { id: 'linda-nwakalor',      nome: "Nwakalor",            posicoes: ["CEN"],       forca: 80 },
      { id: 'eleonora-fersino',    nome: "Fersino",             posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2025,
    clube: "Turquia",
    jogadores: [
      { id: 'cansu-ozbay',         nome: "Özbay",               posicoes: ["LEV"],       forca: 85 },
      { id: 'melissa-vargas',      nome: "Vargas",              posicoes: ["OPO"],       forca: 92 },
      { id: 'ebrar-karakurt',      nome: "Karakurt",            posicoes: ["PON"],       forca: 87 },
      { id: 'hande-baladin',       nome: "Baladın",             posicoes: ["PON"],       forca: 83 },
      { id: 'eda-erdem',           nome: "Eda Erdem",           posicoes: ["CEN"],       forca: 85 },
      { id: 'gizem-orge',          nome: "Örge",                posicoes: ["LIB"],       forca: 84 },
      { id: 'zehra-gunes',         nome: "Güneş",               posicoes: ["CEN"],       forca: 86 },
      { id: 'aslihan-kilic',       nome: "Kılıç",               posicoes: ["LEV"],       forca: 79 },
      { id: 'ilkin-aydin',         nome: "Aydın",               posicoes: ["PON"],       forca: 83 },
      { id: 'derya-cebecioglu',    nome: "Cebecioğlu",          posicoes: ["PON"],       forca: 80 },
      { id: 'saliha-sahin',        nome: "Şahin",               posicoes: ["PON"],       forca: 79 },
      { id: 'elif-sahin',          nome: "E. Şahin",            posicoes: ["OPO"],       forca: 80 },
      { id: 'ayca-aykac',          nome: "Aykaç",               posicoes: ["CEN"],       forca: 78 },
      { id: 'simge-akoz',          nome: "Aköz",                posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2025,
    clube: "Brasil",
    jogadores: [
      { id: 'macris-carneiro',     nome: "Macris",              posicoes: ["LEV"],       forca: 85 },
      { id: 'rosamaria-montibeller', nome: "Rosamaria",         posicoes: ["OPO"],       forca: 84 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 89 },
      { id: 'ana-cristina-menezes', nome: "Ana Cristina",       posicoes: ["PON"],       forca: 83 },
      { id: 'julia-kudiess',       nome: "Julia Kudiess",       posicoes: ["CEN"],       forca: 84 },
      { id: 'nyeme-costa',         nome: "Nyeme",               posicoes: ["LIB"],       forca: 82 },
      { id: 'roberta-ratzke',      nome: "Roberta",             posicoes: ["LEV"],       forca: 81 },
      { id: 'kisy-nascimento',     nome: "Kisy",                posicoes: ["OPO"],       forca: 82 },
      { id: 'julia-bergmann',      nome: "Julia Bergmann",      posicoes: ["PON"],       forca: 84 },
      { id: 'tainara-santos',      nome: "Tainara",             posicoes: ["PON"],       forca: 82 },
      { id: 'diana-duarte',        nome: "Diana",               posicoes: ["CEN"],       forca: 81 },
      { id: 'lorenne-teixeira',    nome: "Lorenne",             posicoes: ["CEN"],       forca: 80 },
      { id: 'mara-leao',           nome: "Mara",                posicoes: ["OPO"],       forca: 78 },
      { id: 'laisa-santos',        nome: "Laís",                posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2025,
    clube: "Japão",
    jogadores: [
      { id: 'nanami-seki',         nome: "Seki",                posicoes: ["LEV"],       forca: 84 },
      { id: 'mayu-ishikawa',       nome: "Ishikawa",            posicoes: ["PON"],       forca: 86 },
      { id: 'sarina-wada',         nome: "Wada",                posicoes: ["PON"],       forca: 82 },
      { id: 'yoshino-sato',        nome: "Sato",                posicoes: ["OPO"],       forca: 83 },
      { id: 'yukiko-araki',        nome: "Araki",               posicoes: ["CEN"],       forca: 82 },
      { id: 'manami-kojima',       nome: "Kojima",              posicoes: ["LIB"],       forca: 85 },
      { id: 'tsukasa-nakagawa',    nome: "Nakagawa",            posicoes: ["LEV"],       forca: 79 },
      { id: 'airi-kitamado',       nome: "Kitamado",            posicoes: ["PON"],       forca: 80 },
      { id: 'runa-akimoto',        nome: "Akimoto",             posicoes: ["PON"],       forca: 80 },
      { id: 'kotoka-shimamura',    nome: "Shimamura",           posicoes: ["CEN"],       forca: 81 },
      { id: 'nichika-yamada',      nome: "Yamada",              posicoes: ["CEN"],       forca: 79 },
      { id: 'aki-miyabe',          nome: "Miyabe",              posicoes: ["CEN"],       forca: 78 },
      { id: 'wakana-fukudome',     nome: "Fukudome",            posicoes: ["LIB"],       forca: 78 },
      { id: 'shion-iwasawa',       nome: "Iwasawa",             posicoes: ["OPO"],       forca: 77 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VOLEI_F;
}
