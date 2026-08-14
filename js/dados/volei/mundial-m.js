// ============================================================
//  volei.js  —  dados de Vôlei (Mundial de Seleções)
//  Esporte-piloto da expansão multi-esporte.
//
//  Estrutura: cada "edição" é um Mundial; cada "clube" é uma
//  SELEÇÃO. Seleções consideradas por edição: as 4 semifinalistas
//  (+ Brasil, se não estiver entre elas). Então 4 ou 5 por edição.
//
//  Competições separadas: mundial_m (masculino) e mundial_f (feminino).
//  Cada seleção tem 6 jogadores = 5 de linha + 1 líbero (líbero FIXO).
//
//  Posições do vôlei:
//   LEV = levantador · OPO = oposto · PON = ponteiro ·
//   CEN = central · LIB = líbero
//
//  Convenções (iguais às outras competições):
//   - `id` = a PESSOA, reutilizado entre edições.
//   - Força 0-100, régua ~82 de média, 90+ raro. NORMALIZADA
//     DENTRO de cada competição (90 masc. ≠ 90 fem.).
//   - Edição = ano do Mundial.
// ============================================================

const DADOS_VOLEI_M = [

  // ══════════════════════════════════════════════════════════════════════════
  //  ★ MUNDIAL MASCULINO 2022 (Polônia/Eslovênia) ★
  //  A ITÁLIA de De Giorgi campeã (4º título), batendo a anfitriã e bicampeã
  //  Polônia por 3-1 na final. Brasil levou o bronze sobre a Eslovênia.
  //  Simone GIANNELLI (levantador) foi o MVP — 1º levantador a ganhar desde 1982.
  //  Seleções (4 semifinalistas, Brasil já incluído): Itália (ouro), Polônia
  //  (prata), Brasil (bronze), Eslovênia (4º).
  //  Prêmios: MVP/Melhor levantador Giannelli; Melhor oposto Kurek (POL);
  //  Melhores ponteiros Leal (BRA) e Semeniuk (POL); Melhores centrais Bieniek
  //  (POL) e Galassi (ITA); Melhor líbero Balaso (ITA).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Itália",
    jogadores: [
      { id: 'simone-giannelli',    nome: "Giannelli",           posicoes: ["LEV"],       forca: 92 },
      { id: 'yuri-romano',         nome: "Romanò",              posicoes: ["OPO"],       forca: 87 },
      { id: 'alessandro-michieletto', nome: "Michieletto",      posicoes: ["PON"],       forca: 88 },
      { id: 'daniele-lavia',       nome: "Lavia",               posicoes: ["PON"],       forca: 87 },
      { id: 'gianluca-galassi',    nome: "Galassi",             posicoes: ["CEN"],       forca: 85 },
      { id: 'fabio-balaso',        nome: "Balaso",              posicoes: ["LIB"],       forca: 86 },
      { id: 'riccardo-sbertoli',   nome: "Sbertoli",            posicoes: ["LEV"],       forca: 80 },
      { id: 'giulio-pinali',       nome: "Pinali",              posicoes: ["OPO"],       forca: 80 },
      { id: 'mattia-bottolo',      nome: "Bottolo",             posicoes: ["PON"],       forca: 81 },
      { id: 'tommaso-rinaldi',     nome: "Rinaldi",             posicoes: ["PON"],       forca: 78 },
      { id: 'simone-anzani',       nome: "Anzani",              posicoes: ["CEN"],       forca: 83 },
      { id: 'roberto-russo',       nome: "Russo",               posicoes: ["CEN"],       forca: 82 },
      { id: 'leandro-mosca',       nome: "Mosca",               posicoes: ["CEN"],       forca: 78 },
      { id: 'leonardo-scanferla',  nome: "Scanferla",           posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Polônia",
    jogadores: [
      { id: 'marcin-janusz',       nome: "Janusz",              posicoes: ["LEV"],       forca: 84 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 90 },
      { id: 'wilfredo-leon',       nome: "Leon",                posicoes: ["PON"],       forca: 91 },
      { id: 'kamil-semeniuk',      nome: "Semeniuk",            posicoes: ["PON"],       forca: 86 },
      { id: 'mateusz-bieniek',     nome: "Bieniek",             posicoes: ["CEN"],       forca: 85 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 85 },
      { id: 'grzegorz-lomacz',     nome: "Łomacz",              posicoes: ["LEV"],       forca: 80 },
      { id: 'lukasz-kaczmarek',    nome: "Kaczmarek",           posicoes: ["OPO"],       forca: 83 },
      { id: 'tomasz-fornal',       nome: "Fornal",              posicoes: ["PON"],       forca: 85 },
      { id: 'aleksander-sliwka',   nome: "Śliwka",              posicoes: ["PON"],       forca: 86 },
      { id: 'jakub-kochanowski',   nome: "Kochanowski",         posicoes: ["CEN"],       forca: 84 },
      { id: 'norbert-huber',       nome: "Huber",               posicoes: ["CEN"],       forca: 82 },
      { id: 'karol-klos',          nome: "Kłos",                posicoes: ["CEN"],       forca: 80 },
      { id: 'jakub-popiwczak',     nome: "Popiwczak",           posicoes: ["LIB"],       forca: 80 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Brasil",
    jogadores: [
      { id: 'bruno-rezende',       nome: "Bruninho",            posicoes: ["LEV"],       forca: 88 },
      { id: 'alan-souza',          nome: "Alan",                posicoes: ["OPO"],       forca: 84 },
      { id: 'yoandy-leal',         nome: "Leal",                posicoes: ["PON"],       forca: 89 },
      { id: 'ricardo-lucarelli',   nome: "Lucarelli",           posicoes: ["PON"],       forca: 85 },
      { id: 'lucas-saatkamp',      nome: "Lucão",               posicoes: ["CEN"],       forca: 83 },
      { id: 'thales-hoss',         nome: "Thales",              posicoes: ["LIB"],       forca: 84 },
      { id: 'fernando-cachopa',    nome: "Cachopa",             posicoes: ["LEV"],       forca: 79 },
      { id: 'darlan-souza',        nome: "Darlan",              posicoes: ["OPO"],       forca: 84 },
      { id: 'adriano-xavier',      nome: "Honorato",            posicoes: ["PON"],       forca: 81 },
      { id: 'lukas-bergmann',      nome: "Lukas",               posicoes: ["PON"],       forca: 78 },
      { id: 'isac-santos',         nome: "Isac",                posicoes: ["CEN"],       forca: 81 },
      { id: 'flavio-gualberto',    nome: "Flávio",              posicoes: ["CEN"],       forca: 82 },
      { id: 'otavio-pinto',        nome: "Otávio",              posicoes: ["OPO"],       forca: 78 },
      { id: 'maique-reis',         nome: "Maique",              posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Eslovênia",
    jogadores: [
      { id: 'gregor-ropret',       nome: "Ropret",              posicoes: ["LEV"],       forca: 82 },
      { id: 'toncek-stern',        nome: "Štern",               posicoes: ["OPO"],       forca: 83 },
      { id: 'tine-urnaut',         nome: "Urnaut",              posicoes: ["PON"],       forca: 85 },
      { id: 'rok-mozic',           nome: "Možič",               posicoes: ["PON"],       forca: 84 },
      { id: 'jan-kozamernik',      nome: "Kozamernik",          posicoes: ["CEN"],       forca: 83 },
      { id: 'jani-kovacic',        nome: "Kovačič",             posicoes: ["LIB"],       forca: 82 },
      { id: 'dejan-vincic',        nome: "Vinčić",              posicoes: ["LEV"],       forca: 78 },
      { id: 'ziga-stern',          nome: "Ž. Štern",            posicoes: ["OPO"],       forca: 79 },
      { id: 'klemen-cebulj',       nome: "Čebulj",              posicoes: ["PON"],       forca: 82 },
      { id: 'gregor-pop',          nome: "Ropret G.",           posicoes: ["PON"],       forca: 76 },
      { id: 'alen-pajenk',         nome: "Pajenk",              posicoes: ["CEN"],       forca: 80 },
      { id: 'jan-brozic',          nome: "Brožič",              posicoes: ["CEN"],       forca: 77 },
      { id: 'danijel-koncnik',     nome: "Končnik",             posicoes: ["OPO"],       forca: 76 },
      { id: 'matic-videcnik',      nome: "Videčnik",            posicoes: ["LIB"],       forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  ★ MUNDIAL MASCULINO 2018 (Itália/Bulgária) ★
  //  A POLÔNIA de Vital Heynen BICAMPEÃ (3º título geral), batendo o Brasil por 3-0
  //  na final (revanche de 2014). EUA levou o bronze sobre a Sérvia. Bartosz KUREK
  //  foi o MVP e maior pontuador (171 pts). 5ª final seguida do Brasil no Mundial.
  //  Seleções (4 semifinalistas, Brasil já incluído): Polônia (ouro), Brasil (prata),
  //  EUA (bronze), Sérvia (4º).
  //  Prêmios: MVP Kurek (POL); Melhor levantador Christenson (USA); Melhores ponteiros
  //  Kubiak (POL) e Douglas (BRA); Melhores centrais Saatkamp (BRA) e Nowakowski (POL);
  //  Melhor oposto Anderson (USA); Melhor líbero Zatorski (POL).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2018,
    clube: "Polônia",
    jogadores: [
      { id: 'fabian-drzyzga',      nome: "Drzyzga",             posicoes: ["LEV"],       forca: 85 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 91 },
      { id: 'michal-kubiak',       nome: "Kubiak",              posicoes: ["PON"],       forca: 87 },
      { id: 'wilfredo-leon',       nome: "Leon",                posicoes: ["PON"],       forca: 88 },
      { id: 'piotr-nowakowski',    nome: "Nowakowski",          posicoes: ["CEN"],       forca: 84 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 85 },
      { id: 'grzegorz-lomacz',     nome: "Łomacz",              posicoes: ["LEV"],       forca: 80 },
      { id: 'lukasz-kaczmarek',    nome: "Kaczmarek",           posicoes: ["OPO"],       forca: 81 },
      { id: 'aleksander-sliwka',   nome: "Śliwka",              posicoes: ["PON"],       forca: 84 },
      { id: 'damian-schulz',       nome: "Schulz",              posicoes: ["PON"],       forca: 77 },
      { id: 'mateusz-bieniek',     nome: "Bieniek",             posicoes: ["CEN"],       forca: 84 },
      { id: 'karol-klos',          nome: "Kłos",                posicoes: ["CEN"],       forca: 80 },
      { id: 'artur-szalpuk',       nome: "Szalpuk",             posicoes: ["PON"],       forca: 78 },
      { id: 'damian-wojtaszek',    nome: "Wojtaszek",           posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2018,
    clube: "Brasil",
    jogadores: [
      { id: 'bruno-rezende',       nome: "Bruninho",            posicoes: ["LEV"],       forca: 89 },
      { id: 'wallace-de-souza',    nome: "Wallace",             posicoes: ["OPO"],       forca: 85 },
      { id: 'douglas-souza',       nome: "Douglas",             posicoes: ["PON"],       forca: 85 },
      { id: 'ricardo-lucarelli',   nome: "Lucarelli",           posicoes: ["PON"],       forca: 85 },
      { id: 'lucas-saatkamp',      nome: "Lucão",               posicoes: ["CEN"],       forca: 84 },
      { id: 'mauricio-borges',     nome: "Maurício Borges",     posicoes: ["PON"],       forca: 82 },
      { id: 'william-arjona',      nome: "William",             posicoes: ["LEV"],       forca: 80 },
      { id: 'evandro-guerra',      nome: "Evandro",             posicoes: ["OPO"],       forca: 80 },
      { id: 'yoandy-leal',         nome: "Leal",                posicoes: ["PON"],       forca: 88 },
      { id: 'isac-santos',         nome: "Isac",                posicoes: ["CEN"],       forca: 81 },
      { id: 'mauricio-souza',      nome: "Maurício Souza",      posicoes: ["CEN"],       forca: 82 },
      { id: 'flavio-gualberto',    nome: "Flávio",              posicoes: ["CEN"],       forca: 81 },
      { id: 'alan-souza',          nome: "Alan",                posicoes: ["OPO"],       forca: 82 },
      { id: 'thales-hoss',         nome: "Thales",              posicoes: ["LIB"],       forca: 84 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2018,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'micah-christenson',   nome: "Christenson",         posicoes: ["LEV"],       forca: 86 },
      { id: 'matt-anderson',       nome: "Anderson",            posicoes: ["OPO"],       forca: 87 },
      { id: 'aaron-russell',       nome: "Russell",             posicoes: ["PON"],       forca: 84 },
      { id: 'taylor-sander',       nome: "Sander",              posicoes: ["PON"],       forca: 83 },
      { id: 'max-holt',            nome: "Holt",                posicoes: ["CEN"],       forca: 83 },
      { id: 'erik-shoji',          nome: "E. Shoji",            posicoes: ["LIB"],       forca: 85 },
      { id: 'kawika-shoji',        nome: "K. Shoji",            posicoes: ["LEV"],       forca: 79 },
      { id: 'ben-patch',           nome: "Patch",               posicoes: ["OPO"],       forca: 79 },
      { id: 'tj-defalco',          nome: "DeFalco",             posicoes: ["PON"],       forca: 81 },
      { id: 'garrett-muagututia',  nome: "Muagututia",          posicoes: ["PON"],       forca: 78 },
      { id: 'david-smith',         nome: "Smith",               posicoes: ["CEN"],       forca: 81 },
      { id: 'mitch-stahl',         nome: "Stahl",               posicoes: ["CEN"],       forca: 77 },
      { id: 'jeffrey-jendryk',     nome: "Jendryk",             posicoes: ["CEN"],       forca: 77 },
      { id: 'dustin-watten',       nome: "Watten",              posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2018,
    clube: "Sérvia",
    jogadores: [
      { id: 'nikola-jovovic',      nome: "Jovović",             posicoes: ["LEV"],       forca: 82 },
      { id: 'aleksandar-atanasijevic', nome: "Atanasijević",    posicoes: ["OPO"],       forca: 85 },
      { id: 'uros-kovacevic',      nome: "Kovačević",           posicoes: ["PON"],       forca: 84 },
      { id: 'marko-ivovic',        nome: "Ivović",              posicoes: ["PON"],       forca: 82 },
      { id: 'marko-podrascanin',   nome: "Podrascanin",         posicoes: ["CEN"],       forca: 83 },
      { id: 'nikola-rosic',        nome: "Rosić",               posicoes: ["LIB"],       forca: 81 },
      { id: 'nemanja-petric',      nome: "Petrić",              posicoes: ["PON"],       forca: 81 },
      { id: 'drazen-luburic',      nome: "Luburić",             posicoes: ["OPO"],       forca: 80 },
      { id: 'srecko-lisinac',      nome: "Lisinac",             posicoes: ["CEN"],       forca: 83 },
      { id: 'milan-katic',         nome: "Katić",               posicoes: ["CEN"],       forca: 77 },
      { id: 'petar-krsmanovic',    nome: "Krsmanović",          posicoes: ["CEN"],       forca: 78 },
      { id: 'aleksandar-okolic',   nome: "Okolić",              posicoes: ["PON"],       forca: 78 },
      { id: 'mihajlo-mitic',       nome: "Mitić",               posicoes: ["LEV"],       forca: 76 },
      { id: 'branislav-mitrovic',  nome: "Mitrović",            posicoes: ["LIB"],       forca: 76 }
    ]
  },

  // ─────────────────────────────────────────── MUNDIAL 2014 (Polônia, em casa)
  // Campeã: Polônia (MVP Mariusz Wlazły). Vice: Brasil. 3º: Alemanha. 4º: França.
  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2014,
    clube: "Polônia",
    jogadores: [
      { id: 'grzegorz-lomacz',     nome: "Łomacz",              posicoes: ["LEV"],       forca: 83 },
      { id: 'mariusz-wlazly',      nome: "Wlazły",              posicoes: ["OPO"],       forca: 89 },
      { id: 'michal-kubiak',       nome: "Kubiak",              posicoes: ["PON"],       forca: 86 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 87 },
      { id: 'piotr-nowakowski',    nome: "Nowakowski",          posicoes: ["CEN"],       forca: 83 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 84 },
      { id: 'fabian-drzyzga',      nome: "Drzyzga",             posicoes: ["LEV"],       forca: 83 },
      { id: 'karol-klos',          nome: "Kłos",                posicoes: ["CEN"],       forca: 80 },
      { id: 'andrzej-wrona',       nome: "Wrona",               posicoes: ["CEN"],       forca: 79 },
      { id: 'rafal-buszek',        nome: "Buszek",              posicoes: ["PON"],       forca: 79 },
      { id: 'michal-winiarski',    nome: "Winiarski",           posicoes: ["PON"],       forca: 81 },
      { id: 'grzegorz-bociek',     nome: "Bociek",              posicoes: ["PON"],       forca: 76 },
      { id: 'mateusz-mika',        nome: "Mika",                posicoes: ["PON"],       forca: 78 },
      { id: 'krzysztof-ignaczak',  nome: "Ignaczak",            posicoes: ["LIB"],       forca: 79 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2014,
    clube: "Brasil",
    jogadores: [
      { id: 'bruno-rezende',       nome: "Bruninho",            posicoes: ["LEV"],       forca: 89 },
      { id: 'wallace-de-souza',    nome: "Wallace",             posicoes: ["OPO"],       forca: 84 },
      { id: 'ricardo-lucarelli',   nome: "Lucarelli",           posicoes: ["PON"],       forca: 83 },
      { id: 'murilo-endres',       nome: "Murilo",              posicoes: ["PON"],       forca: 84 },
      { id: 'lucas-saatkamp',      nome: "Lucão",               posicoes: ["CEN"],       forca: 83 },
      { id: 'serginho-escadinha',  nome: "Serginho",            posicoes: ["LIB"],       forca: 88 },
      { id: 'william-arjona',      nome: "William",             posicoes: ["LEV"],       forca: 81 },
      { id: 'evandro-guerra',      nome: "Evandro",             posicoes: ["OPO"],       forca: 81 },
      { id: 'vissotto-neto',       nome: "Vissotto",            posicoes: ["OPO"],       forca: 83 },
      { id: 'sidnei-santos',       nome: "Sidnei",              posicoes: ["CEN"],       forca: 81 },
      { id: 'eder-carbonera',      nome: "Éder",                posicoes: ["CEN"],       forca: 82 },
      { id: 'mauricio-souza',      nome: "Maurício Souza",      posicoes: ["CEN"],       forca: 80 },
      { id: 'douglas-souza',       nome: "Douglas",             posicoes: ["PON"],       forca: 80 },
      { id: 'mario-junior',        nome: "Mário Jr.",           posicoes: ["LIB"],       forca: 78 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2014,
    clube: "Alemanha",
    jogadores: [
      { id: 'lukas-kampa',         nome: "Kampa",               posicoes: ["LEV"],       forca: 82 },
      { id: 'gyorgy-grozer',       nome: "Grozer",              posicoes: ["OPO"],       forca: 87 },
      { id: 'denys-kaliberda',     nome: "Kaliberda",           posicoes: ["PON"],       forca: 82 },
      { id: 'marcus-bohme',        nome: "Böhme",               posicoes: ["CEN"],       forca: 81 },
      { id: 'ferdinand-tille',     nome: "Tille",               posicoes: ["LIB"],       forca: 81 },
      { id: 'sebastian-kuhner',    nome: "Kühner",              posicoes: ["LEV"],       forca: 77 },
      { id: 'christian-fromm',     nome: "Fromm",               posicoes: ["PON"],       forca: 80 },
      { id: 'robert-kromm',        nome: "Kromm",               posicoes: ["PON"],       forca: 80 },
      { id: 'jochen-schops',       nome: "Schöps",              posicoes: ["PON"],       forca: 81 },
      { id: 'marcus-popp',         nome: "Popp",                posicoes: ["CEN"],       forca: 77 },
      { id: 'sebastian-schwarz',   nome: "Schwarz",             posicoes: ["OPO"],       forca: 78 },
      { id: 'patrick-steuerwald',  nome: "Steuerwald",          posicoes: ["CEN"],       forca: 76 },
      { id: 'markus-steuerwald',   nome: "M. Steuerwald",       posicoes: ["LIB"],       forca: 76 },
      { id: 'simon-hirsch',        nome: "Hirsch",              posicoes: ["PON"],       forca: 77 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2014,
    clube: "França",
    jogadores: [
      { id: 'benjamin-toniutti',   nome: "Toniutti",            posicoes: ["LEV"],       forca: 85 },
      { id: 'earvin-ngapeth',      nome: "Ngapeth",             posicoes: ["PON"],       forca: 88 },
      { id: 'kevin-tillie',        nome: "Tillie",              posicoes: ["PON"],       forca: 82 },
      { id: 'antonin-rouzier',     nome: "Rouzier",             posicoes: ["OPO"],       forca: 83 },
      { id: 'nicolas-le-goff',     nome: "Le Goff",             posicoes: ["CEN"],       forca: 81 },
      { id: 'jenia-grebennikov',   nome: "Grebennikov",         posicoes: ["LIB"],       forca: 86 },
      { id: 'nicolas-marechal',    nome: "Maréchal",            posicoes: ["PON"],       forca: 81 },
      { id: 'julien-lyneel',       nome: "Lyneel",              posicoes: ["PON"],       forca: 79 },
      { id: 'kevin-le-roux',       nome: "Le Roux",             posicoes: ["CEN"],       forca: 81 },
      { id: 'franck-lafitte',      nome: "Lafitte",             posicoes: ["CEN"],       forca: 78 },
      { id: 'guillaume-samica',    nome: "Samica",              posicoes: ["CEN"],       forca: 76 },
      { id: 'pierre-pujol',        nome: "Pujol",               posicoes: ["LEV"],       forca: 77 },
      { id: 'baptiste-geiler',     nome: "Geiler",              posicoes: ["OPO"],       forca: 76 },
      { id: 'jean-patry',          nome: "Patry",               posicoes: ["OPO"],       forca: 77 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VOLEI_M;
}
