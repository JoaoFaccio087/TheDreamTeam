// ============================================================
//  premier.js  —  clubes da Premier League (Inglaterra)
//  Carregue ANTES do dados.js no index.html.
//
//  CONVENÇÃO DE EDIÇÃO: usa o ano em que a temporada TERMINA
//  (igual à Champions). Temporada 2025-26 → edicao: 2026.
//
//  RÉGUA DE FORÇA (derivada do acervo existente, média 82.2):
//    90+     lenda      ~5%   — usar com parcimônia
//    85-89   craque    ~30%
//    80-84   destaque  ~37%   — a maior fatia
//    75-79   titular   ~24%
//    ≤74     rodízio    ~4%
// ============================================================

const DADOS_PREMIER = [

  // ===== Edição 2026 (temporada 2025-26 — Arsenal campeão, 85 pts,
  //       1º título em 22 anos; liderou a tabela por 238 dias) =====

  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-raya',          nome: "David Raya",          posicoes: ["GOL"],       forca: 88 },
      { id: 'kepa-arrizabalaga',   nome: "Kepa Arrizabalaga",   posicoes: ["GOL"],       forca: 78 },
      { id: 'william-saliba',      nome: "William Saliba",      posicoes: ["ZAG"],       forca: 89 },
      { id: 'gabriel-magalhaes',   nome: "Gabriel Magalhães",   posicoes: ["ZAG"],       forca: 88 },
      { id: 'cristhian-mosquera',  nome: "Cristhian Mosquera",  posicoes: ["ZAG"],       forca: 79 },
      { id: 'jakub-kiwior',        nome: "Jakub Kiwior",        posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'jurrien-timber',      nome: "Jurriën Timber",      posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'ben-white',           nome: "Ben White",           posicoes: ["LD"],        forca: 82 },
      { id: 'riccardo-calafiori',  nome: "Riccardo Calafiori",  posicoes: ["LE","ZAG"],  forca: 83 },
      { id: 'myles-lewis-skelly',  nome: "Myles Lewis-Skelly",  posicoes: ["LE"],        forca: 80 },
      { id: 'declan-rice',         nome: "Declan Rice",         posicoes: ["VOL","MC"],  forca: 91 },
      { id: 'martin-zubimendi',    nome: "Martin Zubimendi",    posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'christian-norgaard',  nome: "Christian Nørgaard",  posicoes: ["VOL"],       forca: 78 },
      { id: 'mikel-merino',        nome: "Mikel Merino",        posicoes: ["MC","ATA"],  forca: 83 },
      { id: 'martin-odegaard',     nome: "Martin Ødegaard",     posicoes: ["MEI","MC"],  forca: 89 },
      { id: 'ethan-nwaneri',       nome: "Ethan Nwaneri",       posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'bukayo-saka',         nome: "Bukayo Saka",         posicoes: ["PD"],        forca: 91 },
      { id: 'noni-madueke',        nome: "Noni Madueke",        posicoes: ["PD","PE"],   forca: 81 },
      { id: 'gabriel-martinelli',  nome: "Gabriel Martinelli",  posicoes: ["PE"],        forca: 84 },
      { id: 'leandro-trossard',    nome: "Leandro Trossard",    posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'viktor-gyokeres',     nome: "Viktor Gyökeres",     posicoes: ["ATA"],       forca: 86 },
      { id: 'kai-havertz',         nome: "Kai Havertz",         posicoes: ["ATA","MC"],  forca: 84 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Manchester City",
    jogadores: [
      { id: 'gianluigi-donnarumma', nome: "Gianluigi Donnarumma", posicoes: ["GOL"],      forca: 89 },
      { id: 'james-trafford',       nome: "James Trafford",       posicoes: ["GOL"],      forca: 78 },
      { id: 'stefan-ortega',        nome: "Stefan Ortega",        posicoes: ["GOL"],      forca: 77 },
      { id: 'ruben-dias',           nome: "Rúben Dias",           posicoes: ["ZAG"],      forca: 89 },
      { id: 'josko-gvardiol',       nome: "Joško Gvardiol",       posicoes: ["ZAG","LE"], forca: 86 },
      { id: 'marc-guehi',           nome: "Marc Guéhi",           posicoes: ["ZAG"],      forca: 85 },
      { id: 'john-stones',          nome: "John Stones",          posicoes: ["ZAG"],      forca: 83 },
      { id: 'nathan-ake',           nome: "Nathan Aké",           posicoes: ["ZAG","LE"], forca: 81 },
      { id: 'abdukodir-khusanov',   nome: "Abdukodir Khusanov",   posicoes: ["ZAG"],      forca: 78 },
      { id: 'matheus-nunes',        nome: "Matheus Nunes",        posicoes: ["LD","MC"],  forca: 79 },
      { id: 'rayan-ait-nouri',      nome: "Rayan Aït-Nouri",      posicoes: ["LE"],       forca: 82 },
      { id: 'nico-oreilly',         nome: "Nico O'Reilly",        posicoes: ["LE","MC"],  forca: 78 },
      { id: 'rodri',                nome: "Rodri",                posicoes: ["VOL"],      forca: 92 },
      { id: 'nico-gonzalez',        nome: "Nico González",        posicoes: ["VOL","MC"], forca: 79 },
      { id: 'bernardo-silva',       nome: "Bernardo Silva",       posicoes: ["MC","MEI"], forca: 86 },
      { id: 'tijjani-reijnders',    nome: "Tijjani Reijnders",    posicoes: ["MC"],       forca: 85 },
      { id: 'mateo-kovacic',        nome: "Mateo Kovačić",        posicoes: ["MC"],       forca: 82 },
      { id: 'phil-foden',           nome: "Phil Foden",           posicoes: ["MEI","PE"], forca: 87 },
      { id: 'rayan-cherki',         nome: "Rayan Cherki",         posicoes: ["MEI","PD"], forca: 82 },
      { id: 'jeremy-doku',          nome: "Jérémy Doku",          posicoes: ["PE"],       forca: 85 },
      { id: 'antoine-semenyo',      nome: "Antoine Semenyo",      posicoes: ["PE","ATA"], forca: 84 },
      { id: 'savinho',              nome: "Savinho",              posicoes: ["PD"],       forca: 82 },
      { id: 'oscar-bobb',           nome: "Oscar Bobb",           posicoes: ["PD"],       forca: 77 },
      { id: 'erling-haaland',       nome: "Erling Haaland",       posicoes: ["ATA"],      forca: 93 },
      { id: 'omar-marmoush',        nome: "Omar Marmoush",        posicoes: ["ATA","PE"], forca: 83 }
    ]
  },

  // 3º — 71 pts. Amorim caiu em 5/jan; Carrick assumiu em 13/jan.
  // Sem competição europeia pela 1ª vez desde 2014-15.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Manchester United",
    jogadores: [
      { id: 'senne-lammens',       nome: "Senne Lammens",       posicoes: ["GOL"],       forca: 82 },
      { id: 'altay-bayindir',      nome: "Altay Bayındır",      posicoes: ["GOL"],       forca: 77 },
      { id: 'tom-heaton',          nome: "Tom Heaton",          posicoes: ["GOL"],       forca: 72 },
      { id: 'matthijs-de-ligt',    nome: "Matthijs de Ligt",    posicoes: ["ZAG"],       forca: 85 },
      { id: 'lisandro-martinez',   nome: "Lisandro Martínez",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'leny-yoro',           nome: "Leny Yoro",           posicoes: ["ZAG"],       forca: 82 },
      { id: 'harry-maguire',       nome: "Harry Maguire",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'diogo-dalot',         nome: "Diogo Dalot",         posicoes: ["LD","LE"],   forca: 82 },
      { id: 'noussair-mazraoui',   nome: "Noussair Mazraoui",   posicoes: ["LD","LE"],   forca: 81 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'patrick-dorgu',       nome: "Patrick Dorgu",       posicoes: ["LE","ME"],   forca: 78 },
      { id: 'tyrell-malacia',      nome: "Tyrell Malacia",      posicoes: ["LE"],        forca: 75 },
      { id: 'ayden-heaven',        nome: "Ayden Heaven",        posicoes: ["ZAG"],       forca: 74 },
      { id: 'bruno-fernandes',     nome: "Bruno Fernandes",     posicoes: ["MEI","MC"],  forca: 89 },
      { id: 'kobbie-mainoo',       nome: "Kobbie Mainoo",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'manuel-ugarte',       nome: "Manuel Ugarte",       posicoes: ["VOL"],       forca: 79 },
      { id: 'casemiro',            nome: "Casemiro",            posicoes: ["VOL"],       forca: 79 },
      { id: 'mason-mount',         nome: "Mason Mount",         posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'toby-collyer',        nome: "Toby Collyer",        posicoes: ["VOL","MC"],  forca: 72 },
      { id: 'bryan-mbeumo',        nome: "Bryan Mbeumo",        posicoes: ["PD","ATA"],  forca: 85 },
      { id: 'matheus-cunha',       nome: "Matheus Cunha",       posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'benjamin-sesko',      nome: "Benjamin Šeško",      posicoes: ["ATA"],       forca: 84 },
      { id: 'amad-diallo',         nome: "Amad Diallo",         posicoes: ["PD"],        forca: 82 },
      { id: 'joshua-zirkzee',      nome: "Joshua Zirkzee",      posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'chido-obi',           nome: "Chido Obi",           posicoes: ["ATA"],       forca: 73 }
    ]
  },

  // 4º — 65 pts, com a maior sequência de vitórias da temporada (8 jogos). Unai Emery.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Aston Villa",
    jogadores: [
      { id: 'emiliano-martinez',   nome: "Emiliano Martínez",   posicoes: ["GOL"],       forca: 87 },
      { id: 'marco-bizot',         nome: "Marco Bizot",         posicoes: ["GOL"],       forca: 76 },
      { id: 'ezri-konsa',          nome: "Ezri Konsa",          posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'pau-torres',          nome: "Pau Torres",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'victor-lindelof',     nome: "Victor Lindelöf",     posicoes: ["ZAG"],       forca: 79 },
      { id: 'tyrone-mings',        nome: "Tyrone Mings",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'matty-cash',          nome: "Matty Cash",          posicoes: ["LD"],        forca: 79 },
      { id: 'lucas-digne',         nome: "Lucas Digne",         posicoes: ["LE"],        forca: 79 },
      { id: 'ian-maatsen',         nome: "Ian Maatsen",         posicoes: ["LE","ME"],   forca: 79 },
      { id: 'andres-garcia',       nome: "Andrés García",       posicoes: ["LD"],        forca: 76 },
      { id: 'lamare-bogarde',      nome: "Lamare Bogarde",      posicoes: ["ZAG","VOL"], forca: 74 },
      { id: 'morgan-rogers',       nome: "Morgan Rogers",       posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'youri-tielemans',     nome: "Youri Tielemans",     posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'boubacar-kamara',     nome: "Boubacar Kamara",     posicoes: ["VOL"],       forca: 83 },
      { id: 'amadou-onana',        nome: "Amadou Onana",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'john-mcginn',         nome: "John McGinn",         posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'harvey-elliott',      nome: "Harvey Elliott",      posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'emiliano-buendia',    nome: "Emiliano Buendía",    posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'douglas-luiz',        nome: "Douglas Luiz",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'ross-barkley',        nome: "Ross Barkley",        posicoes: ["MC"],        forca: 76 },
      { id: 'ollie-watkins',       nome: "Ollie Watkins",       posicoes: ["ATA"],       forca: 85 },
      { id: 'leon-bailey',         nome: "Leon Bailey",         posicoes: ["PD","PE"],   forca: 79 },
      { id: 'jadon-sancho',        nome: "Jadon Sancho",        posicoes: ["PE","PD"],   forca: 79 },
      { id: 'tammy-abraham',       nome: "Tammy Abraham",       posicoes: ["ATA"],       forca: 79 },
      { id: 'alysson',             nome: "Alysson",             posicoes: ["PE","ATA"],  forca: 74 }
    ]
  },

  // 5º — 60 pts. Temporada de ressaca do campeão anterior: Isak quebrou a perna em
  // dezembro, Bradley perdeu o resto do ano, e Salah/Robertson/Konaté saíram no fim.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson-becker',       nome: "Alisson Becker",       posicoes: ["GOL"],      forca: 88 },
      { id: 'giorgi-mamardashvili', nome: "Giorgi Mamardashvili", posicoes: ["GOL"],      forca: 83 },
      { id: 'freddie-woodman',      nome: "Freddie Woodman",      posicoes: ["GOL"],      forca: 72 },
      { id: 'virgil-van-dijk',      nome: "Virgil van Dijk",      posicoes: ["ZAG"],      forca: 89 },
      { id: 'ibrahima-konate',      nome: "Ibrahima Konaté",      posicoes: ["ZAG"],      forca: 84 },
      { id: 'joe-gomez',            nome: "Joe Gomez",            posicoes: ["ZAG","LD"], forca: 78 },
      { id: 'giovanni-leoni',       nome: "Giovanni Leoni",       posicoes: ["ZAG"],      forca: 75 },
      { id: 'andy-robertson',       nome: "Andy Robertson",       posicoes: ["LE"],       forca: 81 },
      { id: 'milos-kerkez',         nome: "Miloš Kerkez",         posicoes: ["LE"],       forca: 80 },
      { id: 'jeremie-frimpong',     nome: "Jeremie Frimpong",     posicoes: ["LD","MD"],  forca: 80 },
      { id: 'conor-bradley',        nome: "Conor Bradley",        posicoes: ["LD"],       forca: 79 },
      { id: 'florian-wirtz',        nome: "Florian Wirtz",        posicoes: ["MEI"],      forca: 87 },
      { id: 'alexis-mac-allister',  nome: "Alexis Mac Allister",  posicoes: ["MC","MEI"], forca: 86 },
      { id: 'ryan-gravenberch',     nome: "Ryan Gravenberch",     posicoes: ["VOL","MC"], forca: 85 },
      { id: 'dominik-szoboszlai',   nome: "Dominik Szoboszlai",   posicoes: ["MC","MEI"], forca: 84 },
      { id: 'curtis-jones',         nome: "Curtis Jones",         posicoes: ["MC","VOL"], forca: 80 },
      { id: 'wataru-endo',          nome: "Wataru Endo",          posicoes: ["VOL"],      forca: 76 },
      { id: 'trey-nyoni',           nome: "Trey Nyoni",           posicoes: ["MC","MEI"], forca: 72 },
      { id: 'mohamed-salah',        nome: "Mohamed Salah",        posicoes: ["PD"],       forca: 89 },
      { id: 'alexander-isak',       nome: "Alexander Isak",       posicoes: ["ATA"],      forca: 86 },
      { id: 'hugo-ekitike',         nome: "Hugo Ekitiké",         posicoes: ["ATA"],      forca: 83 },
      { id: 'cody-gakpo',           nome: "Cody Gakpo",           posicoes: ["PE","ATA"], forca: 83 },
      { id: 'federico-chiesa',      nome: "Federico Chiesa",      posicoes: ["PE","PD"],  forca: 79 },
      { id: 'rio-ngumoha',          nome: "Rio Ngumoha",          posicoes: ["PE"],       forca: 74 }
    ]
  },

  // 6º — 57 pts e vaga na Europa League. Maior invencibilidade da temporada: 18 jogos.
  // Última temporada de Andoni Iraola no clube.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Bournemouth",
    jogadores: [
      { id: 'djordje-petrovic',    nome: "Djordje Petrović",    posicoes: ["GOL"],       forca: 82 },
      { id: 'alex-paulsen',        nome: "Alex Paulsen",        posicoes: ["GOL"],       forca: 73 },
      { id: 'marcos-senesi',       nome: "Marcos Senesi",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'bafode-diakite',      nome: "Bafodé Diakité",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'veljko-milosavljevic', nome: "Veljko Milosavljević", posicoes: ["ZAG"],     forca: 77 },
      { id: 'james-hill',          nome: "James Hill",          posicoes: ["ZAG"],       forca: 76 },
      { id: 'adrien-truffert',     nome: "Adrien Truffert",     posicoes: ["LE"],        forca: 80 },
      { id: 'alex-jimenez',        nome: "Álex Jiménez",        posicoes: ["LD","LE"],   forca: 79 },
      { id: 'julio-soler',         nome: "Julio Soler",         posicoes: ["LE"],        forca: 76 },
      { id: 'adam-smith',          nome: "Adam Smith",          posicoes: ["LD"],        forca: 74 },
      { id: 'alex-scott',          nome: "Alex Scott",          posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'tyler-adams',         nome: "Tyler Adams",         posicoes: ["VOL"],       forca: 80 },
      { id: 'lewis-cook',          nome: "Lewis Cook",          posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ryan-christie',       nome: "Ryan Christie",       posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'marcus-tavernier',    nome: "Marcus Tavernier",    posicoes: ["ME","MEI"],  forca: 78 },
      { id: 'alex-toth',           nome: "Alex Tóth",           posicoes: ["MC"],        forca: 74 },
      { id: 'evanilson',           nome: "Evanilson",           posicoes: ["ATA"],       forca: 82 },
      { id: 'justin-kluivert',     nome: "Justin Kluivert",     posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'amine-adli',          nome: "Amine Adli",          posicoes: ["PE","PD"],   forca: 80 },
      { id: 'eli-junior-kroupi',   nome: "Eli Junior Kroupi",   posicoes: ["ATA"],       forca: 79 },
      { id: 'ben-doak',            nome: "Ben Doak",            posicoes: ["PD"],        forca: 78 },
      { id: 'david-brooks',        nome: "David Brooks",        posicoes: ["MEI","PD"],  forca: 77 },
      { id: 'enes-unal',           nome: "Enes Ünal",           posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // 7º — 54 pts e vaga europeia no ano do RETORNO à elite. Régis Le Bris.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Sunderland",
    jogadores: [
      { id: 'robin-roefs',         nome: "Robin Roefs",         posicoes: ["GOL"],       forca: 83 },
      { id: 'anthony-patterson',   nome: "Anthony Patterson",   posicoes: ["GOL"],       forca: 74 },
      { id: 'nordi-mukiele',       nome: "Nordi Mukiele",       posicoes: ["LD","ZAG"],  forca: 82 },
      { id: 'lutsharel-geertruida', nome: "Lutsharel Geertruida", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'omar-alderete',       nome: "Omar Alderete",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'dan-ballard',         nome: "Dan Ballard",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'reinildo-mandava',    nome: "Reinildo Mandava",    posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'trai-hume',           nome: "Trai Hume",           posicoes: ["LD","LE"],   forca: 77 },
      { id: 'dennis-cirkin',       nome: "Dennis Cirkin",       posicoes: ["LE"],        forca: 75 },
      { id: 'granit-xhaka',        nome: "Granit Xhaka",        posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'habib-diarra',        nome: "Habib Diarra",        posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'noah-sadiki',         nome: "Noah Sadiki",         posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'enzo-le-fee',         nome: "Enzo Le Fée",         posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'chris-rigg',          nome: "Chris Rigg",          posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'dan-neil',            nome: "Dan Neil",            posicoes: ["MC","VOL"],  forca: 75 },
      { id: 'simon-adingra',       nome: "Simon Adingra",       posicoes: ["PE","PD"],   forca: 80 },
      { id: 'chemsdine-talbi',     nome: "Chemsdine Talbi",     posicoes: ["PD","MEI"],  forca: 78 },
      { id: 'wilson-isidor',       nome: "Wilson Isidor",       posicoes: ["ATA"],       forca: 78 },
      { id: 'bertrand-traore',     nome: "Bertrand Traoré",     posicoes: ["PD","PE"],   forca: 77 },
      { id: 'eliezer-mayenda',     nome: "Eliezer Mayenda",     posicoes: ["ATA"],       forca: 77 },
      { id: 'brian-brobbey',       nome: "Brian Brobbey",       posicoes: ["ATA"],       forca: 77 },
      { id: 'marc-guiu',           nome: "Marc Guiu",           posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // CAMPEÃO DA CONFERENCE LEAGUE — o título europeu deu a vaga na Europa League.
  // Mateta marcou no 2-1 que o Arsenal venceu em Selhurst Park na rodada final.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Crystal Palace",
    jogadores: [
      { id: 'dean-henderson',      nome: "Dean Henderson",      posicoes: ["GOL"],       forca: 84 },
      { id: 'walter-benitez',      nome: "Walter Benítez",      posicoes: ["GOL"],       forca: 78 },
      { id: 'maxence-lacroix',     nome: "Maxence Lacroix",     posicoes: ["ZAG"],       forca: 84 },
      { id: 'chris-richards',      nome: "Chris Richards",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'jaydee-canvot',       nome: "Jaydee Canvot",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'chadi-riad',          nome: "Chadi Riad",          posicoes: ["ZAG"],       forca: 77 },
      { id: 'daniel-munoz',        nome: "Daniel Muñoz",        posicoes: ["LD","MD"],   forca: 83 },
      { id: 'tyrick-mitchell',     nome: "Tyrick Mitchell",     posicoes: ["LE"],        forca: 80 },
      { id: 'borna-sosa',          nome: "Borna Sosa",          posicoes: ["LE"],        forca: 77 },
      { id: 'nathaniel-clyne',     nome: "Nathaniel Clyne",     posicoes: ["LD"],        forca: 74 },
      { id: 'adam-wharton',        nome: "Adam Wharton",        posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'daichi-kamada',       nome: "Daichi Kamada",       posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'jefferson-lerma',     nome: "Jefferson Lerma",     posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'will-hughes',         nome: "Will Hughes",         posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'cheick-doucoure',     nome: "Cheick Doucouré",     posicoes: ["VOL"],       forca: 78 },
      { id: 'justin-devenny',      nome: "Justin Devenny",      posicoes: ["MC","MEI"],  forca: 74 },
      { id: 'ismaila-sarr',        nome: "Ismaïla Sarr",        posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'jean-philippe-mateta', nome: "Jean-Philippe Mateta", posicoes: ["ATA"],     forca: 83 },
      { id: 'yeremy-pino',         nome: "Yeremy Pino",         posicoes: ["PD","PE"],   forca: 81 },
      { id: 'christantus-uche',    nome: "Christantus Uche",    posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'brennan-johnson',     nome: "Brennan Johnson",     posicoes: ["PD","PE"],   forca: 79 },
      { id: 'eddie-nketiah',       nome: "Eddie Nketiah",       posicoes: ["ATA"],       forca: 77 }
    ]
  },

  // Eddie Howe. Perdeu Isak para o Liverpool e reinvestiu pesado: Elanga (£55m),
  // Woltemade, Wissa, Thiaw e Jacob Ramsey.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Newcastle United",
    jogadores: [
      { id: 'nick-pope',           nome: "Nick Pope",           posicoes: ["GOL"],       forca: 82 },
      { id: 'aaron-ramsdale',      nome: "Aaron Ramsdale",      posicoes: ["GOL"],       forca: 79 },
      { id: 'mark-gillespie',      nome: "Mark Gillespie",      posicoes: ["GOL"],       forca: 70 },
      { id: 'sven-botman',         nome: "Sven Botman",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'malick-thiaw',        nome: "Malick Thiaw",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'fabian-schar',        nome: "Fabian Schär",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'dan-burn',            nome: "Dan Burn",            posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'valentino-livramento', nome: "Valentino Livramento", posicoes: ["LD"],      forca: 82 },
      { id: 'lewis-hall',          nome: "Lewis Hall",          posicoes: ["LE"],        forca: 81 },
      { id: 'kieran-trippier',     nome: "Kieran Trippier",     posicoes: ["LD"],        forca: 79 },
      { id: 'matt-targett',        nome: "Matt Targett",        posicoes: ["LE"],        forca: 74 },
      { id: 'emil-krafth',         nome: "Emil Krafth",         posicoes: ["LD","ZAG"],  forca: 73 },
      { id: 'bruno-guimaraes',     nome: "Bruno Guimarães",     posicoes: ["MC","VOL"],  forca: 87 },
      { id: 'sandro-tonali',       nome: "Sandro Tonali",       posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'joelinton',           nome: "Joelinton",           posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'jacob-ramsey',        nome: "Jacob Ramsey",        posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'jacob-murphy',        nome: "Jacob Murphy",        posicoes: ["PD","MD"],   forca: 79 },
      { id: 'joe-willock',         nome: "Joe Willock",         posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'lewis-miley',         nome: "Lewis Miley",         posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'nick-woltemade',      nome: "Nick Woltemade",      posicoes: ["ATA"],       forca: 84 },
      { id: 'anthony-elanga',      nome: "Anthony Elanga",      posicoes: ["PD","PE"],   forca: 83 },
      { id: 'yoane-wissa',         nome: "Yoane Wissa",         posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'harvey-barnes',       nome: "Harvey Barnes",       posicoes: ["PE","PD"],   forca: 81 },
      { id: 'william-osula',       nome: "William Osula",       posicoes: ["ATA"],       forca: 74 }
    ]
  },

  // A temporada mais dramática da liga: quase o 1º rebaixamento em 49 anos. Seis derrotas
  // seguidas, 15 jogos sem vencer, TRÊS técnicos (Postecoglou → Tudor → De Zerbi) e nenhuma
  // vitória em casa no ano de 2026 até a última rodada. Salvos por 1-0 no Everton (Palhinha).
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Tottenham",
    jogadores: [
      { id: 'guglielmo-vicario',   nome: "Guglielmo Vicario",   posicoes: ["GOL"],       forca: 82 },
      { id: 'antonin-kinsky',      nome: "Antonín Kinský",      posicoes: ["GOL"],       forca: 74 },
      { id: 'cristian-romero',     nome: "Cristian Romero",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'micky-van-de-ven',    nome: "Micky van de Ven",    posicoes: ["ZAG"],       forca: 84 },
      { id: 'kevin-danso',         nome: "Kevin Danso",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'radu-dragusin',       nome: "Radu Drăgușin",       posicoes: ["ZAG"],       forca: 76 },
      { id: 'pedro-porro',         nome: "Pedro Porro",         posicoes: ["LD","MD"],   forca: 81 },
      { id: 'destiny-udogie',      nome: "Destiny Udogie",      posicoes: ["LE"],        forca: 80 },
      { id: 'djed-spence',         nome: "Djed Spence",         posicoes: ["LE","LD"],   forca: 79 },
      { id: 'archie-gray',         nome: "Archie Gray",         posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'joao-palhinha',       nome: "João Palhinha",       posicoes: ["VOL"],       forca: 82 },
      { id: 'rodrigo-bentancur',   nome: "Rodrigo Bentancur",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'conor-gallagher',     nome: "Conor Gallagher",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'pape-matar-sarr',     nome: "Pape Matar Sarr",     posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'lucas-bergvall',      nome: "Lucas Bergvall",      posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'yves-bissouma',       nome: "Yves Bissouma",       posicoes: ["VOL"],       forca: 76 },
      { id: 'xavi-simons',         nome: "Xavi Simons",         posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'dejan-kulusevski',    nome: "Dejan Kulusevski",    posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'mohammed-kudus',      nome: "Mohammed Kudus",      posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'dominic-solanke',     nome: "Dominic Solanke",     posicoes: ["ATA"],       forca: 80 },
      { id: 'randal-kolo-muani',   nome: "Randal Kolo Muani",   posicoes: ["ATA"],       forca: 79 },
      { id: 'richarlison',         nome: "Richarlison",         posicoes: ["ATA"],       forca: 79 },
      { id: 'wilson-odobert',      nome: "Wilson Odobert",      posicoes: ["PE","PD"],   forca: 77 }
    ]
  },

  // 8º — vaga no play-off da Conference League, na 9ª temporada seguida na elite.
  // Fabian Hürzeler.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Brighton",
    jogadores: [
      { id: 'bart-verbruggen',     nome: "Bart Verbruggen",     posicoes: ["GOL"],       forca: 82 },
      { id: 'jason-steele',        nome: "Jason Steele",        posicoes: ["GOL"],       forca: 74 },
      { id: 'carl-rushworth',      nome: "Carl Rushworth",      posicoes: ["GOL"],       forca: 72 },
      { id: 'jan-paul-van-hecke',  nome: "Jan Paul van Hecke",  posicoes: ["ZAG"],       forca: 82 },
      { id: 'lewis-dunk',          nome: "Lewis Dunk",          posicoes: ["ZAG"],       forca: 80 },
      { id: 'igor-julio',          nome: "Igor Júlio",          posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'joel-veltman',        nome: "Joël Veltman",        posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'adam-webster',        nome: "Adam Webster",        posicoes: ["ZAG"],       forca: 76 },
      { id: 'eiran-cashin',        nome: "Eiran Cashin",        posicoes: ["ZAG"],       forca: 75 },
      { id: 'ferdi-kadioglu',      nome: "Ferdi Kadıoğlu",      posicoes: ["LE","LD"],   forca: 80 },
      { id: 'maxim-de-cuyper',     nome: "Maxim De Cuyper",     posicoes: ["LE"],        forca: 79 },
      { id: 'olivier-boscagli',    nome: "Olivier Boscagli",    posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'carlos-baleba',       nome: "Carlos Baleba",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'matt-oriley',         nome: "Matt O'Riley",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'yasin-ayari',         nome: "Yasin Ayari",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'mats-wieffer',        nome: "Mats Wieffer",        posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'diego-gomez',         nome: "Diego Gómez",         posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'jack-hinshelwood',    nome: "Jack Hinshelwood",    posicoes: ["MC","LD"],   forca: 77 },
      { id: 'malick-yalcouye',     nome: "Malick Yalcouyé",     posicoes: ["VOL","MC"],  forca: 74 },
      { id: 'kaoru-mitoma',        nome: "Kaoru Mitoma",        posicoes: ["PE"],        forca: 84 },
      { id: 'yankuba-minteh',      nome: "Yankuba Minteh",      posicoes: ["PD"],        forca: 82 },
      { id: 'georginio-rutter',    nome: "Georginio Rutter",    posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'stefanos-tzimas',     nome: "Stefanos Tzimas",     posicoes: ["ATA"],       forca: 78 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 77 },
      { id: 'charalampos-kostoulas', nome: "Charalampos Kostoulas", posicoes: ["ATA"],   forca: 77 },
      { id: 'tom-watson',          nome: "Tom Watson",          posicoes: ["PE","PD"],   forca: 74 }
    ]
  },

  // David Moyes, primeira temporada no Hill Dickinson Stadium após a saída de Goodison Park.
  // Grealish chegou por empréstimo do City; Beto e Dewsbury-Hall foram os artilheiros (7 gols).
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Everton",
    jogadores: [
      { id: 'jordan-pickford',     nome: "Jordan Pickford",     posicoes: ["GOL"],       forca: 86 },
      { id: 'mark-travers',        nome: "Mark Travers",        posicoes: ["GOL"],       forca: 75 },
      { id: 'tom-king',            nome: "Tom King",            posicoes: ["GOL"],       forca: 70 },
      { id: 'jarrad-branthwaite',  nome: "Jarrad Branthwaite",  posicoes: ["ZAG"],       forca: 83 },
      { id: 'james-tarkowski',     nome: "James Tarkowski",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'jake-obrien',         nome: "Jake O'Brien",        posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'michael-keane',       nome: "Michael Keane",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'vitalii-mykolenko',   nome: "Vitalii Mykolenko",   posicoes: ["LE"],        forca: 79 },
      { id: 'nathan-patterson',    nome: "Nathan Patterson",    posicoes: ["LD"],        forca: 75 },
      { id: 'adam-aznou',          nome: "Adam Aznou",          posicoes: ["LE"],        forca: 74 },
      { id: 'seamus-coleman',      nome: "Séamus Coleman",      posicoes: ["LD"],        forca: 72 },
      { id: 'kiernan-dewsbury-hall', nome: "Kiernan Dewsbury-Hall", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'idrissa-gueye',       nome: "Idrissa Gueye",       posicoes: ["VOL"],       forca: 80 },
      { id: 'james-garner',        nome: "James Garner",        posicoes: ["MC","LD"],   forca: 79 },
      { id: 'carlos-alcaraz',      nome: "Carlos Alcaraz",      posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'tim-iroegbunam',      nome: "Tim Iroegbunam",      posicoes: ["VOL","MC"],  forca: 75 },
      { id: 'harrison-armstrong',  nome: "Harrison Armstrong",  posicoes: ["MC","VOL"],  forca: 73 },
      { id: 'jack-grealish',       nome: "Jack Grealish",       posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'iliman-ndiaye',       nome: "Iliman Ndiaye",       posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'dwight-mcneil',       nome: "Dwight McNeil",       posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'beto',                nome: "Beto",                posicoes: ["ATA"],       forca: 78 },
      { id: 'thierno-barry',       nome: "Thierno Barry",       posicoes: ["ATA"],       forca: 78 },
      { id: 'youssef-chermiti',    nome: "Youssef Chermiti",    posicoes: ["ATA"],       forca: 74 },
      { id: 'braiden-graham',      nome: "Braiden Graham",      posicoes: ["ATA","PD"],  forca: 72 }
    ]
  },

  // 9º — Keith Andrews no lugar de Thomas Frank. 1ª temporada desde 2018-19 sem Nørgaard
  // e Mbeumo; Nathan Collins virou capitão. Igor Thiago artilheiro com 22 gols na liga.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Brentford",
    jogadores: [
      { id: 'caoimhin-kelleher',   nome: "Caoimhín Kelleher",   posicoes: ["GOL"],       forca: 81 },
      { id: 'hakon-valdimarsson',  nome: "Hákon Valdimarsson",  posicoes: ["GOL"],       forca: 74 },
      { id: 'matthew-cox',         nome: "Matthew Cox",         posicoes: ["GOL"],       forca: 71 },
      { id: 'nathan-collins',      nome: "Nathan Collins",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'sepp-van-den-berg',   nome: "Sepp van den Berg",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'ethan-pinnock',       nome: "Ethan Pinnock",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'kristoffer-ajer',     nome: "Kristoffer Ajer",     posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'michael-kayode',      nome: "Michael Kayode",      posicoes: ["LD"],        forca: 78 },
      { id: 'aaron-hickey',        nome: "Aaron Hickey",        posicoes: ["LD","LE"],   forca: 76 },
      { id: 'rico-henry',          nome: "Rico Henry",          posicoes: ["LE"],        forca: 76 },
      { id: 'jayden-meghoma',      nome: "Jayden Meghoma",      posicoes: ["LE"],        forca: 73 },
      { id: 'mikkel-damsgaard',    nome: "Mikkel Damsgaard",    posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'yehor-yarmoliuk',     nome: "Yehor Yarmoliuk",     posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'vitaly-janelt',       nome: "Vitaly Janelt",       posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'mathias-jensen',      nome: "Mathias Jensen",      posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'antoni-milambo',      nome: "Antoni Milambo",      posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'fabio-carvalho',      nome: "Fábio Carvalho",      posicoes: ["MEI","PE"],  forca: 76 },
      { id: 'yunus-konak',         nome: "Yunus Konak",         posicoes: ["MC"],        forca: 73 },
      { id: 'igor-thiago',         nome: "Igor Thiago",         posicoes: ["ATA"],       forca: 85 },
      { id: 'kevin-schade',        nome: "Kevin Schade",        posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'dango-ouattara',      nome: "Dango Ouattara",      posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'keane-lewis-potter',  nome: "Keane Lewis-Potter",  posicoes: ["PE","LE"],   forca: 78 },
      { id: 'romelle-donovan',     nome: "Romelle Donovan",     posicoes: ["PD"],        forca: 73 },
      { id: 'kaye-furo',           nome: "Kaye Furo",           posicoes: ["ATA"],       forca: 72 }
    ]
  },

  // Marco Silva. Antonee Robinson, eleito o melhor do clube em 2023-24, teve a temporada
  // atrapalhada por lesões desde o início.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Fulham",
    jogadores: [
      { id: 'bernd-leno',          nome: "Bernd Leno",          posicoes: ["GOL"],       forca: 82 },
      { id: 'benjamin-lecomte',    nome: "Benjamin Lecomte",    posicoes: ["GOL"],       forca: 74 },
      { id: 'joachim-andersen',    nome: "Joachim Andersen",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'calvin-bassey',       nome: "Calvin Bassey",       posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'issa-diop',           nome: "Issa Diop",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'jorge-cuenca',        nome: "Jorge Cuenca",        posicoes: ["ZAG"],       forca: 75 },
      { id: 'antonee-robinson',    nome: "Antonee Robinson",    posicoes: ["LE"],        forca: 82 },
      { id: 'kenny-tete',          nome: "Kenny Tete",          posicoes: ["LD"],        forca: 78 },
      { id: 'timothy-castagne',    nome: "Timothy Castagne",    posicoes: ["LD","LE"],   forca: 78 },
      { id: 'ryan-sessegnon',      nome: "Ryan Sessegnon",      posicoes: ["LE","PE"],   forca: 76 },
      { id: 'sander-berge',        nome: "Sander Berge",        posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'sasa-lukic',          nome: "Saša Lukić",          posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'emile-smith-rowe',    nome: "Emile Smith Rowe",    posicoes: ["MEI","PE"],  forca: 79 },
      { id: 'tom-cairney',         nome: "Tom Cairney",         posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'harrison-reed',       nome: "Harrison Reed",       posicoes: ["VOL","MC"],  forca: 75 },
      { id: 'joshua-king-fulham',  nome: "Joshua King",         posicoes: ["MC","MEI"],  forca: 72 },
      { id: 'alex-iwobi',          nome: "Alex Iwobi",          posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'harry-wilson',        nome: "Harry Wilson",        posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'rodrigo-muniz',       nome: "Rodrigo Muniz",       posicoes: ["ATA"],       forca: 80 },
      { id: 'samuel-chukwueze',    nome: "Samuel Chukwueze",    posicoes: ["PD","PE"],   forca: 79 },
      { id: 'kevin-fulham',        nome: "Kevin",               posicoes: ["PE","PD"],   forca: 78 },
      { id: 'raul-jimenez',        nome: "Raúl Jiménez",        posicoes: ["ATA"],       forca: 78 },
      { id: 'jonah-kusi-asare',    nome: "Jonah Kusi-Asare",    posicoes: ["ATA"],       forca: 73 }
    ]
  },

  // Temporada instável: Maresca começou, Rosenior caiu em menos de 4 meses. Chegaram a
  // ficar 5 jogos de liga sem marcar — não acontecia desde 1912. Reece James capitão.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Chelsea",
    jogadores: [
      { id: 'robert-sanchez',      nome: "Robert Sánchez",      posicoes: ["GOL"],       forca: 82 },
      { id: 'filip-jorgensen',     nome: "Filip Jörgensen",     posicoes: ["GOL"],       forca: 78 },
      { id: 'mike-penders',        nome: "Mike Penders",        posicoes: ["GOL"],       forca: 73 },
      { id: 'levi-colwill',        nome: "Levi Colwill",        posicoes: ["ZAG","LE"],  forca: 82 },
      { id: 'tosin-adarabioyo',    nome: "Tosin Adarabioyo",    posicoes: ["ZAG"],       forca: 80 },
      { id: 'trevoh-chalobah',     nome: "Trevoh Chalobah",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'jorrel-hato',         nome: "Jorrel Hato",         posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'wesley-fofana',       nome: "Wesley Fofana",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'benoit-badiashile',   nome: "Benoît Badiashile",   posicoes: ["ZAG"],       forca: 78 },
      { id: 'josh-acheampong',     nome: "Josh Acheampong",     posicoes: ["ZAG","LD"],  forca: 75 },
      { id: 'reece-james',         nome: "Reece James",         posicoes: ["LD","VOL"],  forca: 84 },
      { id: 'marc-cucurella',      nome: "Marc Cucurella",      posicoes: ["LE"],        forca: 84 },
      { id: 'malo-gusto',          nome: "Malo Gusto",          posicoes: ["LD"],        forca: 80 },
      { id: 'moises-caicedo',      nome: "Moisés Caicedo",      posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'enzo-fernandez',      nome: "Enzo Fernández",      posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'romeo-lavia',         nome: "Roméo Lavia",         posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'andrey-santos',       nome: "Andrey Santos",       posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'facundo-buonanotte',  nome: "Facundo Buonanotte",  posicoes: ["MEI","PD"],  forca: 77 },
      { id: 'dario-essugo',        nome: "Dário Essugo",        posicoes: ["VOL"],       forca: 75 },
      { id: 'cole-palmer',         nome: "Cole Palmer",         posicoes: ["MEI","PD"],  forca: 89 },
      { id: 'joao-pedro',          nome: "João Pedro",          posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'estevao',             nome: "Estêvão",             posicoes: ["PD"],        forca: 83 },
      { id: 'pedro-neto',          nome: "Pedro Neto",          posicoes: ["PD","PE"],   forca: 82 },
      { id: 'alejandro-garnacho',  nome: "Alejandro Garnacho",  posicoes: ["PE"],        forca: 82 },
      { id: 'christopher-nkunku',  nome: "Christopher Nkunku",  posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'liam-delap',          nome: "Liam Delap",          posicoes: ["ATA"],       forca: 80 },
      { id: 'jamie-gittens',       nome: "Jamie Gittens",       posicoes: ["PE"],        forca: 79 }
    ]
  },

  // 16º na liga, mas SEMIFINALISTA da Europa League. Quatro técnicos numa temporada:
  // Nuno → Postecoglou → Dyche → Vítor Pereira. Gibbs-White capitão e artilheiro (15 gols).
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Nottingham Forest",
    jogadores: [
      { id: 'matz-sels',           nome: "Matz Sels",           posicoes: ["GOL"],       forca: 81 },
      { id: 'john-victor',         nome: "John Victor",         posicoes: ["GOL"],       forca: 76 },
      { id: 'angus-gunn',          nome: "Angus Gunn",          posicoes: ["GOL"],       forca: 74 },
      { id: 'nikola-milenkovic',   nome: "Nikola Milenković",   posicoes: ["ZAG"],       forca: 83 },
      { id: 'murillo',             nome: "Murillo",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'morato',              nome: "Morato",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'jair-cunha',          nome: "Jair Cunha",          posicoes: ["ZAG"],       forca: 76 },
      { id: 'ola-aina',            nome: "Ola Aina",            posicoes: ["LD"],        forca: 80 },
      { id: 'neco-williams',       nome: "Neco Williams",       posicoes: ["LE","LD"],   forca: 78 },
      { id: 'oleksandr-zinchenko', nome: "Oleksandr Zinchenko", posicoes: ["LE","MC"],   forca: 78 },
      { id: 'nicolo-savona',       nome: "Nicolò Savona",       posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'elliot-anderson',     nome: "Elliot Anderson",     posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'morgan-gibbs-white',  nome: "Morgan Gibbs-White",  posicoes: ["MEI"],       forca: 85 },
      { id: 'james-mcatee',        nome: "James McAtee",        posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'ibrahim-sangare',     nome: "Ibrahim Sangaré",     posicoes: ["VOL"],       forca: 78 },
      { id: 'nicolas-dominguez',   nome: "Nicolás Domínguez",   posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'ryan-yates',          nome: "Ryan Yates",          posicoes: ["VOL","MC"],  forca: 75 },
      { id: 'dan-ndoye',           nome: "Dan Ndoye",           posicoes: ["PD","PE"],   forca: 81 },
      { id: 'callum-hudson-odoi',  nome: "Callum Hudson-Odoi",  posicoes: ["PE","PD"],   forca: 80 },
      { id: 'omari-hutchinson',    nome: "Omari Hutchinson",    posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'igor-jesus',          nome: "Igor Jesus",          posicoes: ["ATA"],       forca: 79 },
      { id: 'arnaud-kalimuendo',   nome: "Arnaud Kalimuendo",   posicoes: ["ATA"],       forca: 79 },
      { id: 'chris-wood',          nome: "Chris Wood",          posicoes: ["ATA"],       forca: 79 },
      { id: 'jota-silva',          nome: "Jota Silva",          posicoes: ["PD","PE"],   forca: 76 }
    ]
  },

  // 18º, REBAIXADO com 39 pts. Potter caiu em setembro, Nuno assumiu. Bowen artilheiro (9).
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "West Ham United",
    jogadores: [
      { id: 'mads-hermansen',      nome: "Mads Hermansen",      posicoes: ["GOL"],       forca: 79 },
      { id: 'alphonse-areola',     nome: "Alphonse Areola",     posicoes: ["GOL"],       forca: 78 },
      { id: 'wes-foderingham',     nome: "Wes Foderingham",     posicoes: ["GOL"],       forca: 71 },
      { id: 'max-kilman',          nome: "Max Kilman",          posicoes: ["ZAG"],       forca: 80 },
      { id: 'jean-clair-todibo',   nome: "Jean-Clair Todibo",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'konstantinos-mavropanos', nome: "Konstantinos Mavropanos", posicoes: ["ZAG"], forca: 77 },
      { id: 'kyle-walker-peters',  nome: "Kyle Walker-Peters",  posicoes: ["LD"],        forca: 78 },
      { id: 'aaron-wan-bissaka',   nome: "Aaron Wan-Bissaka",   posicoes: ["LD"],        forca: 78 },
      { id: 'emerson-palmieri',    nome: "Emerson Palmieri",    posicoes: ["LE"],        forca: 77 },
      { id: 'malick-diouf',        nome: "El Hadji Malick Diouf", posicoes: ["LE"],      forca: 76 },
      { id: 'oliver-scarles',      nome: "Oliver Scarles",      posicoes: ["LE"],        forca: 72 },
      { id: 'lucas-paqueta',       nome: "Lucas Paquetá",       posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'tomas-soucek',        nome: "Tomáš Souček",        posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'james-ward-prowse',   nome: "James Ward-Prowse",   posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'mateus-fernandes',    nome: "Mateus Fernandes",    posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'soungoutou-magassa',  nome: "Soungoutou Magassa",  posicoes: ["VOL"],       forca: 75 },
      { id: 'freddie-potts',       nome: "Freddie Potts",       posicoes: ["VOL","MC"],  forca: 74 },
      { id: 'lewis-orford',        nome: "Lewis Orford",        posicoes: ["MC"],        forca: 71 },
      { id: 'jarrod-bowen',        nome: "Jarrod Bowen",        posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'crysencio-summerville', nome: "Crysencio Summerville", posicoes: ["PE","PD"], forca: 78 },
      { id: 'adama-traore',        nome: "Adama Traoré",        posicoes: ["PD"],        forca: 77 },
      { id: 'niclas-fullkrug',     nome: "Niclas Füllkrug",     posicoes: ["ATA"],       forca: 77 },
      { id: 'callum-wilson',       nome: "Callum Wilson",       posicoes: ["ATA"],       forca: 76 },
      { id: 'luis-guilherme',      nome: "Luis Guilherme",      posicoes: ["PD","MEI"],  forca: 74 },
      { id: 'pablo-felipe',        nome: "Pablo Felipe",        posicoes: ["PE","ATA"],  forca: 73 }
    ]
  },

  // Voltou à elite após 4 anos. Eliminou o West Ham nas quartas da FA Cup. Daniel Farke.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Leeds United",
    jogadores: [
      { id: 'lucas-perri',         nome: "Lucas Perri",         posicoes: ["GOL"],       forca: 80 },
      { id: 'karl-darlow',         nome: "Karl Darlow",         posicoes: ["GOL"],       forca: 73 },
      { id: 'jaka-bijol',          nome: "Jaka Bijol",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'joe-rodon',           nome: "Joe Rodon",           posicoes: ["ZAG"],       forca: 78 },
      { id: 'pascal-struijk',      nome: "Pascal Struijk",      posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'sebastiaan-bornauw',  nome: "Sebastiaan Bornauw",  posicoes: ["ZAG"],       forca: 75 },
      { id: 'jayden-bogle',        nome: "Jayden Bogle",        posicoes: ["LD"],        forca: 77 },
      { id: 'gabriel-gudmundsson', nome: "Gabriel Gudmundsson", posicoes: ["LE"],        forca: 76 },
      { id: 'sam-byram',           nome: "Sam Byram",           posicoes: ["LD","LE"],   forca: 73 },
      { id: 'ethan-ampadu',        nome: "Ethan Ampadu",        posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'anton-stach',         nome: "Anton Stach",         posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ao-tanaka',           nome: "Ao Tanaka",           posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'sean-longstaff',      nome: "Sean Longstaff",      posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'brenden-aaronson',    nome: "Brenden Aaronson",    posicoes: ["MEI","PD"],  forca: 77 },
      { id: 'ilia-gruev',          nome: "Ilia Gruev",          posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'daniel-james',        nome: "Daniel James",        posicoes: ["PD","PE"],   forca: 78 },
      { id: 'dominic-calvert-lewin', nome: "Dominic Calvert-Lewin", posicoes: ["ATA"],   forca: 78 },
      { id: 'noah-okafor',         nome: "Noah Okafor",         posicoes: ["PE","ATA"],  forca: 77 },
      { id: 'willy-gnonto',        nome: "Willy Gnonto",        posicoes: ["PE","PD"],   forca: 77 },
      { id: 'joel-piroe',          nome: "Joël Piroe",          posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'largie-ramazani',     nome: "Largie Ramazani",     posicoes: ["PE","PD"],   forca: 75 },
      { id: 'lukas-nmecha',        nome: "Lukas Nmecha",        posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // 19º, REBAIXADO no ano do retorno à elite. Scott Parker.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Burnley",
    jogadores: [
      { id: 'martin-dubravka',     nome: "Martin Dúbravka",     posicoes: ["GOL"],       forca: 78 },
      { id: 'vaclav-hladky',       nome: "Václav Hladký",       posicoes: ["GOL"],       forca: 73 },
      { id: 'maxime-esteve',       nome: "Maxime Estève",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'axel-tuanzebe',       nome: "Axel Tuanzebe",       posicoes: ["ZAG"],       forca: 75 },
      { id: 'jordan-beyer',        nome: "Jordan Beyer",        posicoes: ["ZAG"],       forca: 75 },
      { id: 'bashir-humphreys',    nome: "Bashir Humphreys",    posicoes: ["ZAG","LE"],  forca: 75 },
      { id: 'joe-worrall',         nome: "Joe Worrall",         posicoes: ["ZAG"],       forca: 73 },
      { id: 'connor-roberts',      nome: "Connor Roberts",      posicoes: ["LD"],        forca: 75 },
      { id: 'quilindschy-hartman', nome: "Quilindschy Hartman", posicoes: ["LE"],        forca: 76 },
      { id: 'lucas-pires',         nome: "Lucas Pires",         posicoes: ["LE"],        forca: 74 },
      { id: 'florentino-luis',     nome: "Florentino Luís",     posicoes: ["VOL"],       forca: 78 },
      { id: 'josh-cullen',         nome: "Josh Cullen",         posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'lesley-ugochukwu',    nome: "Lesley Ugochukwu",    posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'hannibal-mejbri',     nome: "Hannibal Mejbri",     posicoes: ["MEI","MC"],  forca: 76 },
      { id: 'josh-laurent',        nome: "Josh Laurent",        posicoes: ["MC","VOL"],  forca: 75 },
      { id: 'zian-flemming',       nome: "Zian Flemming",       posicoes: ["MEI","ATA"], forca: 77 },
      { id: 'marcus-edwards',      nome: "Marcus Edwards",      posicoes: ["PD","MEI"],  forca: 76 },
      { id: 'jaidon-anthony',      nome: "Jaidon Anthony",      posicoes: ["PE","PD"],   forca: 76 },
      { id: 'zeki-amdouni',        nome: "Zeki Amdouni",        posicoes: ["ATA"],       forca: 76 },
      { id: 'lyle-foster',         nome: "Lyle Foster",         posicoes: ["ATA"],       forca: 76 },
      { id: 'loum-tchaouna',       nome: "Loum Tchaouna",       posicoes: ["PD","PE"],   forca: 75 },
      { id: 'armando-broja',       nome: "Armando Broja",       posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // 20º, REBAIXADO. A pior campanha da temporada: sequência de 19 jogos sem vencer.
  {
    competicao: "Premier League",
    edicao: 2026,
    clube: "Wolverhampton",
    jogadores: [
      { id: 'jose-sa',             nome: "José Sá",             posicoes: ["GOL"],       forca: 79 },
      { id: 'sam-johnstone',       nome: "Sam Johnstone",       posicoes: ["GOL"],       forca: 76 },
      { id: 'dan-bentley',         nome: "Dan Bentley",         posicoes: ["GOL"],       forca: 71 },
      { id: 'emmanuel-agbadou',    nome: "Emmanuel Agbadou",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'toti-gomes',          nome: "Toti Gomes",          posicoes: ["ZAG"],       forca: 77 },
      { id: 'santiago-bueno',      nome: "Santiago Bueno",      posicoes: ["ZAG"],       forca: 76 },
      { id: 'yerson-mosquera',     nome: "Yerson Mosquera",     posicoes: ["ZAG"],       forca: 75 },
      { id: 'bastien-meupiyou',    nome: "Bastien Meupiyou",    posicoes: ["ZAG"],       forca: 72 },
      { id: 'rodrigo-gomes',       nome: "Rodrigo Gomes",       posicoes: ["LD","PD"],   forca: 76 },
      { id: 'ki-jana-hoever',      nome: "Ki-Jana Hoever",      posicoes: ["LD"],        forca: 74 },
      { id: 'hugo-bueno',          nome: "Hugo Bueno",          posicoes: ["LE"],        forca: 75 },
      { id: 'joao-gomes',          nome: "João Gomes",          posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'andre-wolves',        nome: "André",               posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'jean-ricner-bellegarde', nome: "Jean-Ricner Bellegarde", posicoes: ["MEI","MC"], forca: 77 },
      { id: 'marshall-munetsi',    nome: "Marshall Munetsi",    posicoes: ["MC","ATA"],  forca: 77 },
      { id: 'fer-lopez',           nome: "Fer López",           posicoes: ["MEI","PD"],  forca: 76 },
      { id: 'tommy-doyle',         nome: "Tommy Doyle",         posicoes: ["MC","VOL"],  forca: 74 },
      { id: 'jorgen-strand-larsen', nome: "Jørgen Strand Larsen", posicoes: ["ATA"],     forca: 81 },
      { id: 'jhon-arias',          nome: "Jhon Arias",          posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'hwang-hee-chan',      nome: "Hwang Hee-chan",      posicoes: ["ATA","PE"],  forca: 77 },
      { id: 'tolu-arokodare',      nome: "Tolu Arokodare",      posicoes: ["ATA"],       forca: 77 },
      { id: 'enso-gonzalez',       nome: "Enso González",       posicoes: ["PE","PD"],   forca: 72 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2004 (temporada 2003-04) — TOP-6, convenção da casa para ligas.
  //  O ano dos INVENCÍVEIS: o Arsenal terminou os 38 jogos SEM PERDER (26V 12E),
  //  feito inédito na era Premier League. Elencos enxutos (14-16), padrão histórico.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2004,
    clube: "Arsenal",
    jogadores: [
      { id: 'jens-lehmann',        nome: "Jens Lehmann",        posicoes: ["GOL"],       forca: 87 },
      { id: 'lauren',              nome: "Lauren",              posicoes: ["LD"],        forca: 84 },
      { id: 'sol-campbell',        nome: "Sol Campbell",        posicoes: ["ZAG"],       forca: 89 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 86 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 88 },
      { id: 'pascal-cygan',        nome: "Pascal Cygan",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 92 },
      { id: 'gilberto-silva',      nome: "Gilberto Silva",      posicoes: ["VOL"],       forca: 85 },
      { id: 'robert-pires',        nome: "Robert Pirès",        posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 86 },
      { id: 'edu-gaspar',          nome: "Edu",                 posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 80 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 95 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'jose-antonio-reyes',  nome: "José Antonio Reyes",  posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'sylvain-wiltord',     nome: "Sylvain Wiltord",     posicoes: ["ATA","PD"],  forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2004,
    clube: "Chelsea",
    jogadores: [
      { id: 'carlo-cudicini',      nome: "Carlo Cudicini",      posicoes: ["GOL"],       forca: 85 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG","LE"],  forca: 85 },
      { id: 'wayne-bridge',        nome: "Wayne Bridge",        posicoes: ["LE"],        forca: 82 },
      { id: 'mario-melchiot',      nome: "Mario Melchiot",      posicoes: ["LD"],        forca: 79 },
      { id: 'glen-johnson',        nome: "Glen Johnson",        posicoes: ["LD"],        forca: 79 },
      { id: 'claude-makelele',     nome: "Claude Makélélé",     posicoes: ["VOL"],       forca: 89 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'damien-duff',         nome: "Damien Duff",         posicoes: ["PE","PD"],   forca: 85 },
      { id: 'scott-parker',        nome: "Scott Parker",        posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'eidur-gudjohnsen',    nome: "Eidur Gudjohnsen",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'adrian-mutu',         nome: "Adrian Mutu",         posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 87 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2004,
    clube: "Manchester United",
    jogadores: [
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 83 },
      { id: 'roy-carroll',         nome: "Roy Carroll",         posicoes: ["GOL"],       forca: 77 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 85 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 89 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 82 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 79 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 90 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["PD","PE"],   forca: 84 },
      { id: 'ruud-van-nistelrooy', nome: "Ruud van Nistelrooy", posicoes: ["ATA"],       forca: 92 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 84 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2004,
    clube: "Liverpool",
    jogadores: [
      { id: 'jerzy-dudek',         nome: "Jerzy Dudek",         posicoes: ["GOL"],       forca: 83 },
      { id: 'steve-finnan',        nome: "Steve Finnan",        posicoes: ["LD"],        forca: 82 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 86 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG","LD"],  forca: 84 },
      { id: 'stephane-henchoz',    nome: "Stéphane Henchoz",    posicoes: ["ZAG"],       forca: 80 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 83 },
      { id: 'djimi-traore',        nome: "Djimi Traoré",        posicoes: ["ZAG","LE"],  forca: 76 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 91 },
      { id: 'dietmar-hamann',      nome: "Dietmar Hamann",      posicoes: ["VOL"],       forca: 84 },
      { id: 'danny-murphy',        nome: "Danny Murphy",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'vladimir-smicer',     nome: "Vladimír Šmicer",     posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 90 },
      { id: 'milan-baros',         nome: "Milan Baroš",         posicoes: ["ATA"],       forca: 81 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2004,
    clube: "Newcastle United",
    jogadores: [
      { id: 'shay-given',          nome: "Shay Given",          posicoes: ["GOL"],       forca: 86 },
      { id: 'aaron-hughes',        nome: "Aaron Hughes",        posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'jonathan-woodgate',   nome: "Jonathan Woodgate",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'andy-obrien',         nome: "Andy O'Brien",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'titus-bramble',       nome: "Titus Bramble",       posicoes: ["ZAG"],       forca: 76 },
      { id: 'olivier-bernard',     nome: "Olivier Bernard",     posicoes: ["LE"],        forca: 78 },
      { id: 'kieron-dyer',         nome: "Kieron Dyer",         posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'gary-speed',          nome: "Gary Speed",          posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'jermaine-jenas',      nome: "Jermaine Jenas",      posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'lee-bowyer',          nome: "Lee Bowyer",          posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'laurent-robert',      nome: "Laurent Robert",      posicoes: ["PE"],        forca: 83 },
      { id: 'nolberto-solano',     nome: "Nolberto Solano",     posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 90 },
      { id: 'craig-bellamy',       nome: "Craig Bellamy",       posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'shola-ameobi',        nome: "Shola Ameobi",        posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2004,
    clube: "Aston Villa",
    jogadores: [
      { id: 'thomas-sorensen',     nome: "Thomas Sørensen",     posicoes: ["GOL"],       forca: 84 },
      { id: 'mark-delaney',        nome: "Mark Delaney",        posicoes: ["LD"],        forca: 77 },
      { id: 'olof-mellberg',       nome: "Olof Mellberg",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'jlloyd-samuel',       nome: "Jlloyd Samuel",       posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'ulises-de-la-cruz',   nome: "Ulises de la Cruz",   posicoes: ["LD"],        forca: 76 },
      { id: 'liam-ridgewell',      nome: "Liam Ridgewell",      posicoes: ["ZAG","LE"],  forca: 74 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","LE"],   forca: 84 },
      { id: 'thomas-hitzlsperger', nome: "Thomas Hitzlsperger", posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'lee-hendrie',         nome: "Lee Hendrie",         posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'gavin-mccann',        nome: "Gavin McCann",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'steven-davis',        nome: "Steven Davis",      posicoes: ["MC","MEI"],  forca: 74 },
      { id: 'juan-pablo-angel',    nome: "Juan Pablo Ángel",    posicoes: ["ATA"],       forca: 84 },
      { id: 'darius-vassell',      nome: "Darius Vassell",      posicoes: ["ATA","PD"],  forca: 79 },
      { id: 'marcus-allback',      nome: "Marcus Allbäck",      posicoes: ["ATA"],       forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1993 (temporada 1992-93) — a PRIMEIRA Premier League.
  //  Top-6: United (84), Aston Villa (74), Norwich (72), Blackburn (71),
  //  QPR (63) e Liverpool (59). Cantona chegou em novembro e virou o título
  //  do United — o primeiro deles em 26 anos.
  //  ⚠️ `id` identifica a PESSOA, não a pessoa-naquele-ano: Shearer e Giggs
  //  reusam os ids que já existem em outras edições (padrão do acervo).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1993,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 91 },
      { id: 'paul-parker',         nome: "Paul Parker",         posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'steve-bruce',         nome: "Steve Bruce",         posicoes: ["ZAG"],       forca: 85 },
      { id: 'gary-pallister',      nome: "Gary Pallister",      posicoes: ["ZAG"],       forca: 86 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 85 },
      { id: 'lee-martin',          nome: "Lee Martin",          posicoes: ["LE"],        forca: 74 },
      { id: 'paul-ince',           nome: "Paul Ince",           posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'bryan-robson',        nome: "Bryan Robson",        posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'mike-phelan',         nome: "Mike Phelan",         posicoes: ["MC","LD"],   forca: 76 },
      { id: 'andrei-kanchelskis',  nome: "Andrei Kanchelskis",  posicoes: ["PD"],        forca: 84 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'lee-sharpe',          nome: "Lee Sharpe",          posicoes: ["PE","LE"],   forca: 80 },
      { id: 'eric-cantona',        nome: "Eric Cantona",        posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'mark-hughes',         nome: "Mark Hughes",         posicoes: ["ATA"],       forca: 87 },
      { id: 'brian-mcclair',       nome: "Brian McClair",       posicoes: ["ATA","MC"],  forca: 82 },
      { id: 'dion-dublin',         nome: "Dion Dublin",         posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1993,
    clube: "Aston Villa",
    jogadores: [
      { id: 'nigel-spink',         nome: "Nigel Spink",         posicoes: ["GOL"],       forca: 80 },
      { id: 'mark-bosnich',        nome: "Mark Bosnich",        posicoes: ["GOL"],       forca: 79 },
      { id: 'earl-barrett',        nome: "Earl Barrett",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'paul-mcgrath',        nome: "Paul McGrath",        posicoes: ["ZAG"],       forca: 89 },
      { id: 'shaun-teale',         nome: "Shaun Teale",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'steve-staunton',      nome: "Steve Staunton",      posicoes: ["LE"],        forca: 82 },
      { id: 'ugo-ehiogu',          nome: "Ugo Ehiogu",          posicoes: ["ZAG"],       forca: 77 },
      { id: 'kevin-richardson',    nome: "Kevin Richardson",    posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'garry-parker',        nome: "Garry Parker",        posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'ray-houghton',        nome: "Ray Houghton",        posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'tony-daley',          nome: "Tony Daley",          posicoes: ["PE","PD"],   forca: 78 },
      { id: 'steve-froggatt',      nome: "Steve Froggatt",      posicoes: ["PE"],        forca: 74 },
      { id: 'dean-saunders',       nome: "Dean Saunders",       posicoes: ["ATA"],       forca: 84 },
      { id: 'dalian-atkinson',     nome: "Dalian Atkinson",     posicoes: ["ATA"],       forca: 82 },
      { id: 'cyrille-regis',       nome: "Cyrille Regis",       posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1993,
    clube: "Norwich City",
    jogadores: [
      { id: 'bryan-gunn',          nome: "Bryan Gunn",          posicoes: ["GOL"],       forca: 81 },
      { id: 'ian-culverhouse',     nome: "Ian Culverhouse",     posicoes: ["LD"],        forca: 77 },
      { id: 'john-polston',        nome: "John Polston",        posicoes: ["ZAG"],       forca: 76 },
      { id: 'ian-butterworth',     nome: "Ian Butterworth",     posicoes: ["ZAG"],       forca: 76 },
      { id: 'rob-newman',          nome: "Rob Newman",          posicoes: ["ZAG","MC"],  forca: 75 },
      { id: 'mark-bowen',          nome: "Mark Bowen",          posicoes: ["LE"],        forca: 78 },
      { id: 'ian-crook',           nome: "Ian Crook",           posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'jeremy-goss',         nome: "Jeremy Goss",         posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'gary-megson',         nome: "Gary Megson",         posicoes: ["MC"],        forca: 74 },
      { id: 'david-phillips',      nome: "David Phillips",      posicoes: ["MD","MC"],   forca: 77 },
      { id: 'ruel-fox',            nome: "Ruel Fox",            posicoes: ["PD","PE"],   forca: 80 },
      { id: 'mark-robins',         nome: "Mark Robins",         posicoes: ["ATA"],       forca: 79 },
      { id: 'chris-sutton',        nome: "Chris Sutton",        posicoes: ["ATA"],       forca: 80 },
      { id: 'efan-ekoku',          nome: "Efan Ekoku",          posicoes: ["ATA"],       forca: 77 },
      { id: 'darren-beckford',     nome: "Darren Beckford",     posicoes: ["ATA"],       forca: 73 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1993,
    clube: "Blackburn Rovers",
    jogadores: [
      { id: 'bobby-mimms',         nome: "Bobby Mimms",         posicoes: ["GOL"],       forca: 78 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'colin-hendry',        nome: "Colin Hendry",        posicoes: ["ZAG"],       forca: 83 },
      { id: 'kevin-moran',         nome: "Kevin Moran",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'nicky-marker',        nome: "Nicky Marker",        posicoes: ["ZAG","VOL"], forca: 75 },
      { id: 'alan-wright',         nome: "Alan Wright",         posicoes: ["LE"],        forca: 77 },
      { id: 'tim-sherwood',        nome: "Tim Sherwood",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'mark-atkins',         nome: "Mark Atkins",         posicoes: ["MC"],        forca: 75 },
      { id: 'gordon-cowans',       nome: "Gordon Cowans",       posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'stuart-ripley',       nome: "Stuart Ripley",       posicoes: ["PD"],        forca: 80 },
      { id: 'jason-wilcox',        nome: "Jason Wilcox",        posicoes: ["PE"],        forca: 79 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 88 },
      { id: 'mike-newell',         nome: "Mike Newell",         posicoes: ["ATA"],       forca: 78 },
      { id: 'roy-wegerle',         nome: "Roy Wegerle",         posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'kevin-gallacher',     nome: "Kevin Gallacher",     posicoes: ["ATA","PD"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1993,
    clube: "Queens Park Rangers",
    jogadores: [
      { id: 'jan-stejskal',        nome: "Jan Stejskal",        posicoes: ["GOL"],       forca: 79 },
      { id: 'tony-roberts',        nome: "Tony Roberts",        posicoes: ["GOL"],       forca: 73 },
      { id: 'david-bardsley',      nome: "David Bardsley",      posicoes: ["LD"],        forca: 79 },
      { id: 'alan-mcdonald',       nome: "Alan McDonald",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'darren-peacock',      nome: "Darren Peacock",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'clive-wilson',        nome: "Clive Wilson",        posicoes: ["LE"],        forca: 78 },
      { id: 'ray-wilkins',         nome: "Ray Wilkins",         posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'ian-holloway',        nome: "Ian Holloway",        posicoes: ["MC"],        forca: 75 },
      { id: 'simon-barker',        nome: "Simon Barker",        posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'andy-sinton',         nome: "Andy Sinton",         posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'trevor-sinclair',     nome: "Trevor Sinclair",     posicoes: ["PD","PE"],   forca: 78 },
      { id: 'les-ferdinand',       nome: "Les Ferdinand",       posicoes: ["ATA"],       forca: 86 },
      { id: 'bradley-allen',       nome: "Bradley Allen",       posicoes: ["ATA"],       forca: 75 },
      { id: 'gary-penrice',        nome: "Gary Penrice",        posicoes: ["ATA","MEI"], forca: 75 },
      { id: 'devon-white',         nome: "Devon White",         posicoes: ["ATA"],       forca: 73 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1993,
    clube: "Liverpool",
    jogadores: [
      { id: 'bruce-grobbelaar',    nome: "Bruce Grobbelaar",    posicoes: ["GOL"],       forca: 82 },
      { id: 'david-james',         nome: "David James",         posicoes: ["GOL"],       forca: 79 },
      { id: 'rob-jones',           nome: "Rob Jones",           posicoes: ["LD"],        forca: 81 },
      { id: 'mark-wright',         nome: "Mark Wright",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'nick-tanner',         nome: "Nick Tanner",         posicoes: ["ZAG"],       forca: 73 },
      { id: 'steve-nicol',         nome: "Steve Nicol",         posicoes: ["LD","ZAG"],  forca: 82 },
      { id: 'david-burrows',       nome: "David Burrows",       posicoes: ["LE"],        forca: 78 },
      { id: 'ronnie-whelan',       nome: "Ronnie Whelan",       posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'don-hutchison',       nome: "Don Hutchison",       posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'steve-mcmanaman',     nome: "Steve McManaman",     posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'mark-walters',        nome: "Mark Walters",        posicoes: ["PE","PD"],   forca: 79 },
      { id: 'ian-rush',            nome: "Ian Rush",            posicoes: ["ATA"],       forca: 87 },
      { id: 'paul-stewart',        nome: "Paul Stewart",        posicoes: ["ATA","MC"],  forca: 75 },
      { id: 'ronny-rosenthal',     nome: "Ronny Rosenthal",     posicoes: ["ATA","PE"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1994 (temporada 1993-94) — o 1º "double" do United (liga + FA Cup),
  //  com 92 pontos. Top-6: United (92), Blackburn (84), Newcastle (77),
  //  Arsenal (71), Leeds (70) e Wimbledon (65) — o "Crazy Gang".
  //  Transferências no meio da temporada respeitadas: Batty saiu do Leeds para o
  //  Blackburn, Peacock do QPR e Fox do Norwich para o Newcastle.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1994,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 92 },
      { id: 'les-sealey',          nome: "Les Sealey",          posicoes: ["GOL"],       forca: 74 },
      { id: 'paul-parker',         nome: "Paul Parker",         posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'steve-bruce',         nome: "Steve Bruce",         posicoes: ["ZAG"],       forca: 85 },
      { id: 'gary-pallister',      nome: "Gary Pallister",      posicoes: ["ZAG"],       forca: 87 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 86 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'paul-ince',           nome: "Paul Ince",           posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'bryan-robson',        nome: "Bryan Robson",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'andrei-kanchelskis',  nome: "Andrei Kanchelskis",  posicoes: ["PD"],        forca: 85 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'lee-sharpe',          nome: "Lee Sharpe",          posicoes: ["PE","LE"],   forca: 81 },
      { id: 'eric-cantona',        nome: "Eric Cantona",        posicoes: ["MEI","ATA"], forca: 92 },
      { id: 'mark-hughes',         nome: "Mark Hughes",         posicoes: ["ATA"],       forca: 87 },
      { id: 'brian-mcclair',       nome: "Brian McClair",       posicoes: ["ATA","MC"],  forca: 81 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1994,
    clube: "Blackburn Rovers",
    jogadores: [
      { id: 'tim-flowers',         nome: "Tim Flowers",         posicoes: ["GOL"],       forca: 85 },
      { id: 'bobby-mimms',         nome: "Bobby Mimms",         posicoes: ["GOL"],       forca: 77 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'colin-hendry',        nome: "Colin Hendry",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'kevin-moran',         nome: "Kevin Moran",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'ian-pearce',          nome: "Ian Pearce",          posicoes: ["ZAG"],       forca: 75 },
      { id: 'henning-berg',        nome: "Henning Berg",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'graeme-le-saux',      nome: "Graeme Le Saux",      posicoes: ["LE"],        forca: 83 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'tim-sherwood',        nome: "Tim Sherwood",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'mark-atkins',         nome: "Mark Atkins",         posicoes: ["MC"],        forca: 76 },
      { id: 'stuart-ripley',       nome: "Stuart Ripley",       posicoes: ["PD"],        forca: 81 },
      { id: 'jason-wilcox',        nome: "Jason Wilcox",        posicoes: ["PE"],        forca: 80 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 90 },
      { id: 'kevin-gallacher',     nome: "Kevin Gallacher",     posicoes: ["ATA","PD"],  forca: 81 },
      { id: 'mike-newell',         nome: "Mike Newell",         posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1994,
    clube: "Newcastle United",
    jogadores: [
      { id: 'pavel-srnicek',       nome: "Pavel Srníček",       posicoes: ["GOL"],       forca: 80 },
      { id: 'mike-hooper',         nome: "Mike Hooper",         posicoes: ["GOL"],       forca: 74 },
      { id: 'barry-venison',       nome: "Barry Venison",       posicoes: ["LD","MC"],   forca: 80 },
      { id: 'steve-howey',         nome: "Steve Howey",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'kevin-scott',         nome: "Kevin Scott",         posicoes: ["ZAG"],       forca: 75 },
      { id: 'darren-peacock',      nome: "Darren Peacock",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'john-beresford',      nome: "John Beresford",      posicoes: ["LE"],        forca: 79 },
      { id: 'rob-lee',             nome: "Rob Lee",             posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'paul-bracewell',      nome: "Paul Bracewell",      posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'lee-clark',           nome: "Lee Clark",           posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'scott-sellars',       nome: "Scott Sellars",       posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'ruel-fox',            nome: "Ruel Fox",            posicoes: ["PD","PE"],   forca: 81 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 88 },
      { id: 'peter-beardsley',     nome: "Peter Beardsley",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'malcolm-allen',       nome: "Malcolm Allen",       posicoes: ["ATA"],       forca: 73 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1994,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 89 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 83 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'steve-bould',         nome: "Steve Bould",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'andy-linighan',       nome: "Andy Linighan",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'nigel-winterburn',    nome: "Nigel Winterburn",    posicoes: ["LE"],        forca: 83 },
      { id: 'paul-davis',          nome: "Paul Davis",          posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'john-jensen',         nome: "John Jensen",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'ian-selley',          nome: "Ian Selley",          posicoes: ["MC"],        forca: 74 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 76 },
      { id: 'eddie-mcgoldrick',    nome: "Eddie McGoldrick",    posicoes: ["PD","LD"],   forca: 75 },
      { id: 'paul-merson',         nome: "Paul Merson",         posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'ian-wright',          nome: "Ian Wright",          posicoes: ["ATA"],       forca: 89 },
      { id: 'kevin-campbell',      nome: "Kevin Campbell",      posicoes: ["ATA"],       forca: 78 },
      { id: 'alan-smith-arsenal',  nome: "Alan Smith",          posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1994,
    clube: "Leeds United",
    jogadores: [
      { id: 'john-lukic',          nome: "John Lukic",          posicoes: ["GOL"],       forca: 81 },
      { id: 'gary-kelly',          nome: "Gary Kelly",          posicoes: ["LD"],        forca: 80 },
      { id: 'chris-fairclough',    nome: "Chris Fairclough",    posicoes: ["ZAG"],       forca: 78 },
      { id: 'jon-newsome',         nome: "Jon Newsome",         posicoes: ["ZAG"],       forca: 76 },
      { id: 'david-wetherall',     nome: "David Wetherall",     posicoes: ["ZAG"],       forca: 76 },
      { id: 'tony-dorigo',         nome: "Tony Dorigo",         posicoes: ["LE"],        forca: 82 },
      { id: 'gary-mcallister',     nome: "Gary McAllister",     posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'gary-speed',          nome: "Gary Speed",          posicoes: ["MC","PE"],   forca: 82 },
      { id: 'gordon-strachan',     nome: "Gordon Strachan",     posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'steve-hodge',         nome: "Steve Hodge",         posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'david-white',         nome: "David White",         posicoes: ["PD"],        forca: 78 },
      { id: 'rod-wallace',         nome: "Rod Wallace",         posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'brian-deane',         nome: "Brian Deane",         posicoes: ["ATA"],       forca: 80 },
      { id: 'noel-whelan',         nome: "Noel Whelan",         posicoes: ["ATA"],       forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1994,
    clube: "Wimbledon",
    jogadores: [
      { id: 'hans-segers',         nome: "Hans Segers",         posicoes: ["GOL"],       forca: 79 },
      { id: 'warren-barton',       nome: "Warren Barton",       posicoes: ["LD"],        forca: 81 },
      { id: 'dean-blackwell',      nome: "Dean Blackwell",      posicoes: ["ZAG"],       forca: 76 },
      { id: 'scott-fitzgerald',    nome: "Scott Fitzgerald",    posicoes: ["ZAG"],       forca: 75 },
      { id: 'alan-reeves',         nome: "Alan Reeves",         posicoes: ["ZAG"],       forca: 74 },
      { id: 'gary-elkins',         nome: "Gary Elkins",         posicoes: ["LE"],        forca: 74 },
      { id: 'vinnie-jones',        nome: "Vinnie Jones",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'robbie-earle',        nome: "Robbie Earle",        posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'peter-fear',          nome: "Peter Fear",          posicoes: ["MC"],        forca: 73 },
      { id: 'andy-clarke',         nome: "Andy Clarke",         posicoes: ["PD","ATA"],  forca: 75 },
      { id: 'marcus-gayle',        nome: "Marcus Gayle",        posicoes: ["PE","ATA"],  forca: 77 },
      { id: 'dean-holdsworth',     nome: "Dean Holdsworth",     posicoes: ["ATA"],       forca: 81 },
      { id: 'john-fashanu',        nome: "John Fashanu",        posicoes: ["ATA"],       forca: 80 },
      { id: 'gary-blissett',       nome: "Gary Blissett",       posicoes: ["ATA"],       forca: 73 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1995 (temporada 1994-95) — o título do BLACKBURN de Kenny Dalglish,
  //  por 1 ponto sobre o United. Shearer fez 34 gols. Top-6: Blackburn (89),
  //  United (88), Forest (77), Liverpool (74), Leeds (73), Newcastle (72).
  //  ⚠️ Decisão: Andy Cole trocou Newcastle → United em janeiro/95 e jogou pelos
  //  dois nesta temporada. Para não repetir o mesmo jogador em dois clubes da
  //  MESMA edição, ele entra só no United (onde terminou o ano). Keith Gillespie
  //  fez o caminho inverso no mesmo negócio e entra no Newcastle.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1995,
    clube: "Blackburn Rovers",
    jogadores: [
      { id: 'tim-flowers',         nome: "Tim Flowers",         posicoes: ["GOL"],       forca: 87 },
      { id: 'jeff-kenna',          nome: "Jeff Kenna",          posicoes: ["LD"],        forca: 78 },
      { id: 'henning-berg',        nome: "Henning Berg",        posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'colin-hendry',        nome: "Colin Hendry",        posicoes: ["ZAG"],       forca: 86 },
      { id: 'ian-pearce',          nome: "Ian Pearce",          posicoes: ["ZAG"],       forca: 77 },
      { id: 'graeme-le-saux',      nome: "Graeme Le Saux",      posicoes: ["LE"],        forca: 85 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'tim-sherwood',        nome: "Tim Sherwood",        posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'mark-atkins',         nome: "Mark Atkins",         posicoes: ["MC"],        forca: 77 },
      { id: 'paul-warhurst',       nome: "Paul Warhurst",       posicoes: ["MC","ZAG"],  forca: 76 },
      { id: 'stuart-ripley',       nome: "Stuart Ripley",       posicoes: ["PD"],        forca: 82 },
      { id: 'jason-wilcox',        nome: "Jason Wilcox",        posicoes: ["PE"],        forca: 81 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 92 },
      { id: 'chris-sutton',        nome: "Chris Sutton",        posicoes: ["ATA"],       forca: 84 },
      { id: 'kevin-gallacher',     nome: "Kevin Gallacher",     posicoes: ["ATA","PD"],  forca: 81 },
      { id: 'mike-newell',         nome: "Mike Newell",         posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1995,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 92 },
      { id: 'gary-walsh',          nome: "Gary Walsh",          posicoes: ["GOL"],       forca: 74 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 77 },
      { id: 'paul-parker',         nome: "Paul Parker",         posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'steve-bruce',         nome: "Steve Bruce",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'gary-pallister',      nome: "Gary Pallister",      posicoes: ["ZAG"],       forca: 87 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 86 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'paul-ince',           nome: "Paul Ince",           posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'brian-mcclair',       nome: "Brian McClair",       posicoes: ["ATA","MC"],  forca: 80 },
      { id: 'andrei-kanchelskis',  nome: "Andrei Kanchelskis",  posicoes: ["PD"],        forca: 86 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'lee-sharpe',          nome: "Lee Sharpe",          posicoes: ["PE","LE"],   forca: 81 },
      { id: 'eric-cantona',        nome: "Eric Cantona",        posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'mark-hughes',         nome: "Mark Hughes",         posicoes: ["ATA"],       forca: 86 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 88 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1995,
    clube: "Nottingham Forest",
    jogadores: [
      { id: 'mark-crossley',       nome: "Mark Crossley",       posicoes: ["GOL"],       forca: 80 },
      { id: 'des-lyttle',          nome: "Des Lyttle",          posicoes: ["LD"],        forca: 77 },
      { id: 'colin-cooper',        nome: "Colin Cooper",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'steve-chettle',       nome: "Steve Chettle",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'stuart-pearce',       nome: "Stuart Pearce",       posicoes: ["LE"],        forca: 87 },
      { id: 'david-phillips',      nome: "David Phillips",      posicoes: ["MD","MC"],   forca: 78 },
      { id: 'scot-gemmill',        nome: "Scot Gemmill",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'lars-bohinen',        nome: "Lars Bohinen",        posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'steve-stone',         nome: "Steve Stone",         posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'ian-woan',            nome: "Ian Woan",            posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'stan-collymore',      nome: "Stan Collymore",      posicoes: ["ATA"],       forca: 87 },
      { id: 'bryan-roy',           nome: "Bryan Roy",           posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'robert-rosario',      nome: "Robert Rosario",      posicoes: ["ATA"],       forca: 73 },
      { id: 'paul-mcgregor',       nome: "Paul McGregor",       posicoes: ["ATA"],       forca: 72 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1995,
    clube: "Liverpool",
    jogadores: [
      { id: 'david-james',         nome: "David James",         posicoes: ["GOL"],       forca: 82 },
      { id: 'rob-jones',           nome: "Rob Jones",           posicoes: ["LD"],        forca: 82 },
      { id: 'john-scales',         nome: "John Scales",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'phil-babb',           nome: "Phil Babb",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'neil-ruddock',        nome: "Neil Ruddock",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'mark-wright',         nome: "Mark Wright",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'steve-nicol',         nome: "Steve Nicol",         posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'john-barnes',         nome: "John Barnes",         posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'jan-molby',           nome: "Jan Mølby",           posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'michael-thomas',      nome: "Michael Thomas",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'steve-mcmanaman',     nome: "Steve McManaman",     posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 87 },
      { id: 'ian-rush',            nome: "Ian Rush",            posicoes: ["ATA"],       forca: 84 },
      { id: 'nigel-clough',        nome: "Nigel Clough",        posicoes: ["MEI","ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1995,
    clube: "Leeds United",
    jogadores: [
      { id: 'john-lukic',          nome: "John Lukic",          posicoes: ["GOL"],       forca: 80 },
      { id: 'gary-kelly',          nome: "Gary Kelly",          posicoes: ["LD"],        forca: 81 },
      { id: 'david-wetherall',     nome: "David Wetherall",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'richard-jobson',      nome: "Richard Jobson",      posicoes: ["ZAG"],       forca: 77 },
      { id: 'chris-fairclough',    nome: "Chris Fairclough",    posicoes: ["ZAG"],       forca: 77 },
      { id: 'tony-dorigo',         nome: "Tony Dorigo",         posicoes: ["LE"],        forca: 82 },
      { id: 'gary-mcallister',     nome: "Gary McAllister",     posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'carlton-palmer',      nome: "Carlton Palmer",      posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'gary-speed',          nome: "Gary Speed",          posicoes: ["MC","PE"],   forca: 83 },
      { id: 'gordon-strachan',     nome: "Gordon Strachan",     posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'david-white',         nome: "David White",         posicoes: ["PD"],        forca: 78 },
      { id: 'rod-wallace',         nome: "Rod Wallace",         posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'tony-yeboah',         nome: "Tony Yeboah",         posicoes: ["ATA"],       forca: 86 },
      { id: 'brian-deane',         nome: "Brian Deane",         posicoes: ["ATA"],       forca: 79 },
      { id: 'phil-masinga',        nome: "Phil Masinga",        posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1995,
    clube: "Newcastle United",
    jogadores: [
      { id: 'pavel-srnicek',       nome: "Pavel Srníček",       posicoes: ["GOL"],       forca: 81 },
      { id: 'marc-hottiger',       nome: "Marc Hottiger",       posicoes: ["LD"],        forca: 79 },
      { id: 'steve-howey',         nome: "Steve Howey",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'darren-peacock',      nome: "Darren Peacock",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'barry-venison',       nome: "Barry Venison",       posicoes: ["LD","MC"],   forca: 80 },
      { id: 'john-beresford',      nome: "John Beresford",      posicoes: ["LE"],        forca: 80 },
      { id: 'rob-lee',             nome: "Rob Lee",             posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'lee-clark',           nome: "Lee Clark",           posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'scott-sellars',       nome: "Scott Sellars",       posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'ruel-fox',            nome: "Ruel Fox",            posicoes: ["PD","PE"],   forca: 82 },
      { id: 'keith-gillespie',     nome: "Keith Gillespie",     posicoes: ["PD"],        forca: 79 },
      { id: 'peter-beardsley',     nome: "Peter Beardsley",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'paul-kitson',         nome: "Paul Kitson",         posicoes: ["ATA"],       forca: 79 },
      { id: 'malcolm-allen',       nome: "Malcolm Allen",       posicoes: ["ATA"],       forca: 73 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1996 (temporada 1995-96) — o United fez o 2º "double" e o Newcastle
  //  de Keegan perdeu uma vantagem de 12 pontos ("I would love it"). Foi a
  //  estreia da Class of '92 como titular: Beckham, Scholes, Butt e os Neville.
  //  Top-6: United (82), Newcastle (78), Liverpool (71), Villa (63), Arsenal
  //  (63), Everton (61).
  //  Transferências respeitadas: Kanchelskis (United→Everton), Collymore
  //  (Forest→Liverpool), Bergkamp (Inter→Arsenal), Batty (Blackburn→Newcastle).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1996,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 91 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 80 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 77 },
      { id: 'steve-bruce',         nome: "Steve Bruce",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'gary-pallister',      nome: "Gary Pallister",      posicoes: ["ZAG"],       forca: 86 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 85 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 81 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 87 },
      { id: 'lee-sharpe',          nome: "Lee Sharpe",          posicoes: ["PE","LE"],   forca: 80 },
      { id: 'brian-mcclair',       nome: "Brian McClair",       posicoes: ["ATA","MC"],  forca: 78 },
      { id: 'eric-cantona',        nome: "Eric Cantona",        posicoes: ["MEI","ATA"], forca: 92 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 86 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1996,
    clube: "Newcastle United",
    jogadores: [
      { id: 'pavel-srnicek',       nome: "Pavel Srníček",       posicoes: ["GOL"],       forca: 81 },
      { id: 'shaka-hislop',        nome: "Shaka Hislop",        posicoes: ["GOL"],       forca: 79 },
      { id: 'warren-barton',       nome: "Warren Barton",       posicoes: ["LD"],        forca: 81 },
      { id: 'steve-howey',         nome: "Steve Howey",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'darren-peacock',      nome: "Darren Peacock",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'philippe-albert',     nome: "Philippe Albert",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'john-beresford',      nome: "John Beresford",      posicoes: ["LE"],        forca: 80 },
      { id: 'rob-lee',             nome: "Rob Lee",             posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'lee-clark',           nome: "Lee Clark",           posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'david-ginola',        nome: "David Ginola",        posicoes: ["PE","MEI"],  forca: 87 },
      { id: 'keith-gillespie',     nome: "Keith Gillespie",     posicoes: ["PD"],        forca: 80 },
      { id: 'peter-beardsley',     nome: "Peter Beardsley",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'les-ferdinand',       nome: "Les Ferdinand",       posicoes: ["ATA"],       forca: 88 },
      { id: 'faustino-asprilla',   nome: "Faustino Asprilla",   posicoes: ["ATA","MEI"], forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1996,
    clube: "Liverpool",
    jogadores: [
      { id: 'david-james',         nome: "David James",         posicoes: ["GOL"],       forca: 83 },
      { id: 'rob-jones',           nome: "Rob Jones",           posicoes: ["LD"],        forca: 82 },
      { id: 'jason-mcateer',       nome: "Jason McAteer",       posicoes: ["LD","MD"],   forca: 80 },
      { id: 'john-scales',         nome: "John Scales",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'phil-babb',           nome: "Phil Babb",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'mark-wright',         nome: "Mark Wright",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'neil-ruddock',        nome: "Neil Ruddock",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'steve-harkness',      nome: "Steve Harkness",      posicoes: ["LE"],        forca: 76 },
      { id: 'john-barnes',         nome: "John Barnes",         posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'michael-thomas',      nome: "Michael Thomas",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'steve-mcmanaman',     nome: "Steve McManaman",     posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 89 },
      { id: 'stan-collymore',      nome: "Stan Collymore",      posicoes: ["ATA"],       forca: 86 },
      { id: 'ian-rush',            nome: "Ian Rush",            posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1996,
    clube: "Aston Villa",
    jogadores: [
      { id: 'mark-bosnich',        nome: "Mark Bosnich",        posicoes: ["GOL"],       forca: 83 },
      { id: 'gary-charles',        nome: "Gary Charles",        posicoes: ["LD"],        forca: 77 },
      { id: 'ugo-ehiogu',          nome: "Ugo Ehiogu",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'paul-mcgrath',        nome: "Paul McGrath",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'gareth-southgate',    nome: "Gareth Southgate",    posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'steve-staunton',      nome: "Steve Staunton",      posicoes: ["LE","ZAG"],  forca: 82 },
      { id: 'alan-wright',         nome: "Alan Wright",         posicoes: ["LE"],        forca: 79 },
      { id: 'andy-townsend',       nome: "Andy Townsend",       posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'mark-draper',         nome: "Mark Draper",         posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'ian-taylor',          nome: "Ian Taylor",          posicoes: ["MC"],        forca: 78 },
      { id: 'alan-thompson',       nome: "Alan Thompson",       posicoes: ["PE","MC"],   forca: 77 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'savo-milosevic',      nome: "Savo Milošević",      posicoes: ["ATA"],       forca: 80 },
      { id: 'tommy-johnson',       nome: "Tommy Johnson",       posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1996,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 89 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 82 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'steve-bould',         nome: "Steve Bould",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'andy-linighan',       nome: "Andy Linighan",       posicoes: ["ZAG"],       forca: 76 },
      { id: 'nigel-winterburn',    nome: "Nigel Winterburn",    posicoes: ["LE"],        forca: 83 },
      { id: 'david-platt',         nome: "David Platt",         posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 78 },
      { id: 'john-jensen',         nome: "John Jensen",         posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'paul-merson',         nome: "Paul Merson",         posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'glenn-helder',        nome: "Glenn Helder",        posicoes: ["PE"],        forca: 75 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'ian-wright',          nome: "Ian Wright",          posicoes: ["ATA"],       forca: 88 },
      { id: 'john-hartson',        nome: "John Hartson",        posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1996,
    clube: "Everton",
    jogadores: [
      { id: 'neville-southall',    nome: "Neville Southall",    posicoes: ["GOL"],       forca: 85 },
      { id: 'matt-jackson',        nome: "Matt Jackson",        posicoes: ["LD","ZAG"],  forca: 76 },
      { id: 'earl-barrett',        nome: "Earl Barrett",        posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'dave-watson',         nome: "Dave Watson",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'craig-short',         nome: "Craig Short",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'gary-ablett',         nome: "Gary Ablett",         posicoes: ["ZAG","LE"],  forca: 76 },
      { id: 'andy-hinchcliffe',    nome: "Andy Hinchcliffe",    posicoes: ["LE"],        forca: 80 },
      { id: 'barry-horne',         nome: "Barry Horne",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'joe-parkinson',       nome: "Joe Parkinson",       posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'vinny-samways',       nome: "Vinny Samways",       posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'anders-limpar',       nome: "Anders Limpar",       posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'andrei-kanchelskis',  nome: "Andrei Kanchelskis",  posicoes: ["PD"],        forca: 86 },
      { id: 'duncan-ferguson',     nome: "Duncan Ferguson",     posicoes: ["ATA"],       forca: 83 },
      { id: 'graham-stuart',       nome: "Graham Stuart",       posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'paul-rideout',        nome: "Paul Rideout",        posicoes: ["ATA"],       forca: 77 },
      { id: 'daniel-amokachi',     nome: "Daniel Amokachi",     posicoes: ["ATA"],       forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1997 (temporada 1996-97) — o United tetracampeão em 5 anos, e a
  //  última temporada de Cantona (aposentou aos 30). Wenger assumiu o Arsenal em
  //  setembro; Shearer voltou à Inglaterra pelo Newcastle por recorde mundial.
  //  Top-6: United (75), Newcastle (68), Arsenal (68), Liverpool (68), Villa
  //  (61), Chelsea (59) — os três de 68 separados só pelo saldo.
  //  Reusam id de edições futuras: Vieira, Solskjær e Ronny Johnsen (chegaram em
  //  1996 e reaparecem em 2004), e Mark Hughes, que saiu do United para o Chelsea.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1997,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 90 },
      { id: 'raimond-van-der-gouw', nome: "Raimond van der Gouw", posicoes: ["GOL"],     forca: 75 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 82 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 79 },
      { id: 'gary-pallister',      nome: "Gary Pallister",      posicoes: ["ZAG"],       forca: 85 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 85 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 89 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 85 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 87 },
      { id: 'karel-poborsky',      nome: "Karel Poborský",      posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'jordi-cruyff',        nome: "Jordi Cruyff",        posicoes: ["MEI","ATA"], forca: 77 },
      { id: 'eric-cantona',        nome: "Eric Cantona",        posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 85 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1997,
    clube: "Newcastle United",
    jogadores: [
      { id: 'shaka-hislop',        nome: "Shaka Hislop",        posicoes: ["GOL"],       forca: 80 },
      { id: 'pavel-srnicek',       nome: "Pavel Srníček",       posicoes: ["GOL"],       forca: 80 },
      { id: 'warren-barton',       nome: "Warren Barton",       posicoes: ["LD"],        forca: 80 },
      { id: 'steve-watson',        nome: "Steve Watson",        posicoes: ["LD","MD"],   forca: 77 },
      { id: 'steve-howey',         nome: "Steve Howey",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'darren-peacock',      nome: "Darren Peacock",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'philippe-albert',     nome: "Philippe Albert",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'john-beresford',      nome: "John Beresford",      posicoes: ["LE"],        forca: 79 },
      { id: 'rob-lee',             nome: "Rob Lee",             posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'david-ginola',        nome: "David Ginola",        posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'keith-gillespie',     nome: "Keith Gillespie",     posicoes: ["PD"],        forca: 80 },
      { id: 'peter-beardsley',     nome: "Peter Beardsley",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 93 },
      { id: 'les-ferdinand',       nome: "Les Ferdinand",       posicoes: ["ATA"],       forca: 87 },
      { id: 'faustino-asprilla',   nome: "Faustino Asprilla",   posicoes: ["ATA","MEI"], forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1997,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 89 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 82 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'steve-bould',         nome: "Steve Bould",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'nigel-winterburn',    nome: "Nigel Winterburn",    posicoes: ["LE"],        forca: 82 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'david-platt',         nome: "David Platt",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'remi-garde',          nome: "Rémi Garde",          posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 80 },
      { id: 'paul-merson',         nome: "Paul Merson",         posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'ian-wright',          nome: "Ian Wright",          posicoes: ["ATA"],       forca: 88 },
      { id: 'john-hartson',        nome: "John Hartson",        posicoes: ["ATA"],       forca: 79 },
      { id: 'paul-shaw',           nome: "Paul Shaw",           posicoes: ["ATA"],       forca: 73 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1997,
    clube: "Liverpool",
    jogadores: [
      { id: 'david-james',         nome: "David James",         posicoes: ["GOL"],       forca: 83 },
      { id: 'rob-jones',           nome: "Rob Jones",           posicoes: ["LD"],        forca: 81 },
      { id: 'jason-mcateer',       nome: "Jason McAteer",       posicoes: ["LD","MD"],   forca: 81 },
      { id: 'mark-wright',         nome: "Mark Wright",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'bjorn-tore-kvarme',   nome: "Bjørn Tore Kvarme",   posicoes: ["ZAG"],       forca: 77 },
      { id: 'neil-ruddock',        nome: "Neil Ruddock",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'stig-inge-bjornebye', nome: "Stig Inge Bjørnebye", posicoes: ["LE"],        forca: 80 },
      { id: 'john-barnes',         nome: "John Barnes",         posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'michael-thomas',      nome: "Michael Thomas",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'patrik-berger',       nome: "Patrik Berger",       posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'steve-mcmanaman',     nome: "Steve McManaman",     posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 89 },
      { id: 'stan-collymore',      nome: "Stan Collymore",      posicoes: ["ATA"],       forca: 85 },
      { id: 'steve-harkness',      nome: "Steve Harkness",      posicoes: ["LE","ZAG"],  forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1997,
    clube: "Aston Villa",
    jogadores: [
      { id: 'mark-bosnich',        nome: "Mark Bosnich",        posicoes: ["GOL"],       forca: 84 },
      { id: 'gary-charles',        nome: "Gary Charles",        posicoes: ["LD"],        forca: 77 },
      { id: 'fernando-nelson',     nome: "Fernando Nelson",     posicoes: ["LD"],        forca: 77 },
      { id: 'ugo-ehiogu',          nome: "Ugo Ehiogu",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'gareth-southgate',    nome: "Gareth Southgate",    posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'riccardo-scimeca',    nome: "Riccardo Scimeca",    posicoes: ["ZAG","MC"],  forca: 75 },
      { id: 'steve-staunton',      nome: "Steve Staunton",      posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'alan-wright',         nome: "Alan Wright",         posicoes: ["LE"],        forca: 80 },
      { id: 'andy-townsend',       nome: "Andy Townsend",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'mark-draper',         nome: "Mark Draper",         posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'ian-taylor',          nome: "Ian Taylor",          posicoes: ["MC"],        forca: 78 },
      { id: 'sasa-curcic',         nome: "Saša Ćurčić",         posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'savo-milosevic',      nome: "Savo Milošević",      posicoes: ["ATA"],       forca: 80 },
      { id: 'julian-joachim',      nome: "Julian Joachim",      posicoes: ["ATA","PD"],  forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1997,
    clube: "Chelsea",
    jogadores: [
      { id: 'frode-grodas',        nome: "Frode Grødås",        posicoes: ["GOL"],       forca: 77 },
      { id: 'kevin-hitchcock',     nome: "Kevin Hitchcock",     posicoes: ["GOL"],       forca: 74 },
      { id: 'dan-petrescu',        nome: "Dan Petrescu",        posicoes: ["LD","MD"],   forca: 83 },
      { id: 'steve-clarke',        nome: "Steve Clarke",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'frank-leboeuf',       nome: "Frank Leboeuf",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'michael-duberry',     nome: "Michael Duberry",     posicoes: ["ZAG"],       forca: 77 },
      { id: 'andy-myers',          nome: "Andy Myers",          posicoes: ["LE","ZAG"],  forca: 74 },
      { id: 'scott-minto',         nome: "Scott Minto",         posicoes: ["LE"],        forca: 76 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'dennis-wise',         nome: "Dennis Wise",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'craig-burley',        nome: "Craig Burley",        posicoes: ["MC"],        forca: 78 },
      { id: 'eddie-newton',        nome: "Eddie Newton",        posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'ruud-gullit',         nome: "Ruud Gullit",         posicoes: ["MEI","ZAG"], forca: 85 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 85 },
      { id: 'mark-hughes',         nome: "Mark Hughes",         posicoes: ["ATA"],       forca: 84 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1998 (temporada 1997-98) — o 1º título de Wenger, com "double", e o
  //  United ficando 1 ponto atrás depois de liderar por 11. Top-6: Arsenal (78),
  //  United (77), Liverpool (65), Chelsea (63), Leeds (59), Blackburn (58).
  //  Muita gente reusa id de 2004, fechando o arco de carreira: Owen, Murphy,
  //  Kewell, Hasselbaink, Duff, Henchoz e Bowyer. Berg saiu do Blackburn para o
  //  United e Le Saux do Blackburn para o Chelsea — ambos no clube certo aqui.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1998,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 88 },
      { id: 'alex-manninger',      nome: "Alex Manninger",      posicoes: ["GOL"],       forca: 80 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 82 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 89 },
      { id: 'steve-bould',         nome: "Steve Bould",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'nigel-winterburn',    nome: "Nigel Winterburn",    posicoes: ["LE"],        forca: 82 },
      { id: 'gilles-grimandi',     nome: "Gilles Grimandi",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'emmanuel-petit',      nome: "Emmanuel Petit",      posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 82 },
      { id: 'stephen-hughes',      nome: "Stephen Hughes",      posicoes: ["MC","MEI"],  forca: 75 },
      { id: 'marc-overmars',       nome: "Marc Overmars",       posicoes: ["PE"],        forca: 87 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'ian-wright',          nome: "Ian Wright",          posicoes: ["ATA"],       forca: 86 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 82 },
      { id: 'christopher-wreh',    nome: "Christopher Wreh",    posicoes: ["ATA"],       forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1998,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 89 },
      { id: 'raimond-van-der-gouw', nome: "Raimond van der Gouw", posicoes: ["GOL"],     forca: 75 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 83 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 80 },
      { id: 'gary-pallister',      nome: "Gary Pallister",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'henning-berg',        nome: "Henning Berg",        posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 84 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 89 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 87 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'karel-poborsky',      nome: "Karel Poborský",      posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'teddy-sheringham',    nome: "Teddy Sheringham",    posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 86 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1998,
    clube: "Liverpool",
    jogadores: [
      { id: 'david-james',         nome: "David James",         posicoes: ["GOL"],       forca: 83 },
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 80 },
      { id: 'rob-jones',           nome: "Rob Jones",           posicoes: ["LD"],        forca: 80 },
      { id: 'jason-mcateer',       nome: "Jason McAteer",       posicoes: ["LD","MD"],   forca: 80 },
      { id: 'phil-babb',           nome: "Phil Babb",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'bjorn-tore-kvarme',   nome: "Bjørn Tore Kvarme",   posicoes: ["ZAG"],       forca: 77 },
      { id: 'stig-inge-bjornebye', nome: "Stig Inge Bjørnebye", posicoes: ["LE"],        forca: 80 },
      { id: 'steve-harkness',      nome: "Steve Harkness",      posicoes: ["LE","ZAG"],  forca: 76 },
      { id: 'paul-ince',           nome: "Paul Ince",           posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'danny-murphy',        nome: "Danny Murphy",        posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'patrik-berger',       nome: "Patrik Berger",       posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'steve-mcmanaman',     nome: "Steve McManaman",     posicoes: ["PE","MEI"],  forca: 87 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 87 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 86 },
      { id: 'karl-heinz-riedle',   nome: "Karl-Heinz Riedle",   posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1998,
    clube: "Chelsea",
    jogadores: [
      { id: 'ed-de-goey',          nome: "Ed de Goey",          posicoes: ["GOL"],       forca: 83 },
      { id: 'dan-petrescu',        nome: "Dan Petrescu",        posicoes: ["LD","MD"],   forca: 83 },
      { id: 'steve-clarke',        nome: "Steve Clarke",        posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'frank-leboeuf',       nome: "Frank Leboeuf",       posicoes: ["ZAG"],       forca: 86 },
      { id: 'michael-duberry',     nome: "Michael Duberry",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'graeme-le-saux',      nome: "Graeme Le Saux",      posicoes: ["LE"],        forca: 84 },
      { id: 'celestine-babayaro',  nome: "Celestine Babayaro",  posicoes: ["LE"],        forca: 79 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'dennis-wise',         nome: "Dennis Wise",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'gustavo-poyet',       nome: "Gustavo Poyet",       posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'eddie-newton',        nome: "Eddie Newton",        posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 84 },
      { id: 'tore-andre-flo',      nome: "Tore André Flo",      posicoes: ["ATA"],       forca: 82 },
      { id: 'mark-hughes',         nome: "Mark Hughes",         posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1998,
    clube: "Leeds United",
    jogadores: [
      { id: 'nigel-martyn',        nome: "Nigel Martyn",        posicoes: ["GOL"],       forca: 85 },
      { id: 'gary-kelly',          nome: "Gary Kelly",          posicoes: ["LD"],        forca: 81 },
      { id: 'lucas-radebe',        nome: "Lucas Radebe",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'david-wetherall',     nome: "David Wetherall",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'robert-molenaar',     nome: "Robert Molenaar",     posicoes: ["ZAG"],       forca: 76 },
      { id: 'ian-harte',           nome: "Ian Harte",           posicoes: ["LE"],        forca: 80 },
      { id: 'alf-inge-haaland',    nome: "Alf-Inge Håland",     posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'david-hopkin',        nome: "David Hopkin",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'lee-bowyer',          nome: "Lee Bowyer",          posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'gunnar-halle',        nome: "Gunnar Halle",        posicoes: ["LD","MD"],   forca: 76 },
      { id: 'bruno-ribeiro',       nome: "Bruno Ribeiro",       posicoes: ["MC","PE"],   forca: 76 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 84 },
      { id: 'rod-wallace',         nome: "Rod Wallace",         posicoes: ["ATA","PE"],  forca: 78 },
      { id: 'derek-lilley',        nome: "Derek Lilley",        posicoes: ["ATA"],       forca: 72 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1998,
    clube: "Blackburn Rovers",
    jogadores: [
      { id: 'tim-flowers',         nome: "Tim Flowers",         posicoes: ["GOL"],       forca: 84 },
      { id: 'john-filan',          nome: "John Filan",          posicoes: ["GOL"],       forca: 75 },
      { id: 'jeff-kenna',          nome: "Jeff Kenna",          posicoes: ["LD"],        forca: 78 },
      { id: 'colin-hendry',        nome: "Colin Hendry",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'stephane-henchoz',    nome: "Stéphane Henchoz",    posicoes: ["ZAG"],       forca: 81 },
      { id: 'marlon-broomes',      nome: "Marlon Broomes",      posicoes: ["ZAG"],       forca: 74 },
      { id: 'callum-davidson',     nome: "Callum Davidson",     posicoes: ["LE"],        forca: 77 },
      { id: 'tim-sherwood',        nome: "Tim Sherwood",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'garry-flitcroft',     nome: "Garry Flitcroft",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'billy-mckinlay',      nome: "Billy McKinlay",      posicoes: ["MC"],        forca: 77 },
      { id: 'jason-wilcox',        nome: "Jason Wilcox",        posicoes: ["PE"],        forca: 80 },
      { id: 'damien-duff',         nome: "Damien Duff",         posicoes: ["PE","PD"],   forca: 78 },
      { id: 'chris-sutton',        nome: "Chris Sutton",        posicoes: ["ATA"],       forca: 85 },
      { id: 'kevin-gallacher',     nome: "Kevin Gallacher",     posicoes: ["ATA","PD"],  forca: 81 },
      { id: 'martin-dahlin',       nome: "Martin Dahlin",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1999 (temporada 1998-99) — o TRÍPLICE do United: Premier League,
  //  FA Cup e Champions League. Última temporada de Schmeichel no clube.
  //  Top-6: United (79), Arsenal (78), Chelsea (75), Leeds (67), West Ham (57),
  //  Villa (55).
  //  ⚠️ HOMÔNIMOS: existem DOIS "Alan Smith" no acervo — o atacante do Arsenal de
  //  1994 (`alan-smith-arsenal`) e o do Leeds, revelado aqui (`alan-smith`).
  //  Pessoas diferentes, ids diferentes, mesmo nome — é legítimo.
  //  Transferências: Yorke (Villa→United), Stam e Ljungberg chegaram, Desailly
  //  foi para o Chelsea, Batty voltou ao Leeds e Dublin foi para o Villa.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 1999,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel',    nome: "Peter Schmeichel",    posicoes: ["GOL"],       forca: 88 },
      { id: 'raimond-van-der-gouw', nome: "Raimond van der Gouw", posicoes: ["GOL"],     forca: 76 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 84 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 80 },
      { id: 'jaap-stam',           nome: "Jaap Stam",           posicoes: ["ZAG"],       forca: 89 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'henning-berg',        nome: "Henning Berg",        posicoes: ["ZAG","LD"],  forca: 82 },
      { id: 'david-may',           nome: "David May",           posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 84 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 90 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 89 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'jesper-blomqvist',    nome: "Jesper Blomqvist",    posicoes: ["PE"],        forca: 79 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 87 },
      { id: 'teddy-sheringham',    nome: "Teddy Sheringham",    posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1999,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 87 },
      { id: 'alex-manninger',      nome: "Alex Manninger",      posicoes: ["GOL"],       forca: 80 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 81 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'steve-bould',         nome: "Steve Bould",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'nigel-winterburn',    nome: "Nigel Winterburn",    posicoes: ["LE"],        forca: 81 },
      { id: 'gilles-grimandi',     nome: "Gilles Grimandi",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'nelson-vivas',        nome: "Nelson Vivas",        posicoes: ["LD","LE"],   forca: 75 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 89 },
      { id: 'emmanuel-petit',      nome: "Emmanuel Petit",      posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 82 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'marc-overmars',       nome: "Marc Overmars",       posicoes: ["PE"],        forca: 87 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 86 },
      { id: 'kanu',                nome: "Nwankwo Kanu",        posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1999,
    clube: "Chelsea",
    jogadores: [
      { id: 'ed-de-goey',          nome: "Ed de Goey",          posicoes: ["GOL"],       forca: 83 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD"],        forca: 82 },
      { id: 'dan-petrescu',        nome: "Dan Petrescu",        posicoes: ["LD","MD"],   forca: 82 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["ZAG"],       forca: 89 },
      { id: 'frank-leboeuf',       nome: "Frank Leboeuf",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'michael-duberry',     nome: "Michael Duberry",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'graeme-le-saux',      nome: "Graeme Le Saux",      posicoes: ["LE"],        forca: 84 },
      { id: 'celestine-babayaro',  nome: "Celestine Babayaro",  posicoes: ["LE"],        forca: 80 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'dennis-wise',         nome: "Dennis Wise",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'gustavo-poyet',       nome: "Gustavo Poyet",       posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 82 },
      { id: 'tore-andre-flo',      nome: "Tore André Flo",      posicoes: ["ATA"],       forca: 83 },
      { id: 'brian-laudrup',       nome: "Brian Laudrup",       posicoes: ["MEI","PE"],  forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1999,
    clube: "Leeds United",
    jogadores: [
      { id: 'nigel-martyn',        nome: "Nigel Martyn",        posicoes: ["GOL"],       forca: 86 },
      { id: 'gary-kelly',          nome: "Gary Kelly",          posicoes: ["LD"],        forca: 81 },
      { id: 'lucas-radebe',        nome: "Lucas Radebe",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'jonathan-woodgate',   nome: "Jonathan Woodgate",   posicoes: ["ZAG"],       forca: 80 },
      { id: 'david-wetherall',     nome: "David Wetherall",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'ian-harte',           nome: "Ian Harte",           posicoes: ["LE"],        forca: 81 },
      { id: 'danny-granville',     nome: "Danny Granville",     posicoes: ["LE"],        forca: 76 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'lee-bowyer',          nome: "Lee Bowyer",          posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'alf-inge-haaland',    nome: "Alf-Inge Håland",     posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'stephen-mcphail',     nome: "Stephen McPhail",     posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 86 },
      { id: 'alan-smith',          nome: "Alan Smith",          posicoes: ["ATA"],       forca: 79 },
      { id: 'clyde-wijnhard',      nome: "Clyde Wijnhard",      posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1999,
    clube: "West Ham United",
    jogadores: [
      { id: 'shaka-hislop',        nome: "Shaka Hislop",        posicoes: ["GOL"],       forca: 81 },
      { id: 'steve-potts',         nome: "Steve Potts",         posicoes: ["LD","ZAG"],  forca: 76 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'ian-pearce',          nome: "Ian Pearce",          posicoes: ["ZAG"],       forca: 79 },
      { id: 'neil-ruddock',        nome: "Neil Ruddock",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'stuart-pearce',       nome: "Stuart Pearce",       posicoes: ["LE"],        forca: 82 },
      { id: 'scott-minto',         nome: "Scott Minto",         posicoes: ["LE"],        forca: 76 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'steve-lomas',         nome: "Steve Lomas",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'john-moncur',         nome: "John Moncur",         posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'eyal-berkovic',       nome: "Eyal Berkovic",       posicoes: ["MEI"],       forca: 83 },
      { id: 'trevor-sinclair',     nome: "Trevor Sinclair",     posicoes: ["PD","PE"],   forca: 83 },
      { id: 'ian-wright',          nome: "Ian Wright",          posicoes: ["ATA"],       forca: 83 },
      { id: 'paolo-di-canio',      nome: "Paolo Di Canio",      posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'paul-kitson',         nome: "Paul Kitson",         posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 1999,
    clube: "Aston Villa",
    jogadores: [
      { id: 'michael-oakes',       nome: "Michael Oakes",       posicoes: ["GOL"],       forca: 78 },
      { id: 'mark-bosnich',        nome: "Mark Bosnich",        posicoes: ["GOL"],       forca: 83 },
      { id: 'gary-charles',        nome: "Gary Charles",        posicoes: ["LD"],        forca: 76 },
      { id: 'ugo-ehiogu',          nome: "Ugo Ehiogu",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'gareth-southgate',    nome: "Gareth Southgate",    posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'riccardo-scimeca',    nome: "Riccardo Scimeca",    posicoes: ["ZAG","MC"],  forca: 76 },
      { id: 'alan-wright',         nome: "Alan Wright",         posicoes: ["LE"],        forca: 80 },
      { id: 'mark-draper',         nome: "Mark Draper",         posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'ian-taylor',          nome: "Ian Taylor",          posicoes: ["MC"],        forca: 79 },
      { id: 'lee-hendrie',         nome: "Lee Hendrie",         posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'alan-thompson',       nome: "Alan Thompson",       posicoes: ["PE","MC"],   forca: 78 },
      { id: 'simon-grayson',       nome: "Simon Grayson",       posicoes: ["LD","ZAG"],  forca: 75 },
      { id: 'dion-dublin',         nome: "Dion Dublin",         posicoes: ["ATA"],       forca: 83 },
      { id: 'stan-collymore',      nome: "Stan Collymore",      posicoes: ["ATA"],       forca: 80 },
      { id: 'julian-joachim',      nome: "Julian Joachim",      posicoes: ["ATA","PD"],  forca: 79 },
      { id: 'darius-vassell',      nome: "Darius Vassell",      posicoes: ["ATA","PD"],  forca: 74 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2000 (temporada 1999-2000) — o United campeão com 91 pontos e 18 de
  //  vantagem, a maior margem da era até então. Foi a chegada de Thierry Henry
  //  ao Arsenal e a explosão de Gerrard no Liverpool.
  //  Top-6: United (91), Arsenal (73), Leeds (69), Liverpool (67), Chelsea (65),
  //  Villa (58).
  //  Transferências entre clubes DESTE top-6, respeitadas: Bosnich (Villa→United),
  //  Duberry (Chelsea→Leeds), Sutton (Blackburn→Chelsea), James (Liverpool→Villa).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2000,
    clube: "Manchester United",
    jogadores: [
      { id: 'mark-bosnich',        nome: "Mark Bosnich",        posicoes: ["GOL"],       forca: 82 },
      { id: 'raimond-van-der-gouw', nome: "Raimond van der Gouw", posicoes: ["GOL"],     forca: 76 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 85 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 81 },
      { id: 'jaap-stam',           nome: "Jaap Stam",           posicoes: ["ZAG"],       forca: 90 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'henning-berg',        nome: "Henning Berg",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 78 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 83 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 91 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'quinton-fortune',     nome: "Quinton Fortune",     posicoes: ["LE","PE"],   forca: 77 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 90 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 87 },
      { id: 'teddy-sheringham',    nome: "Teddy Sheringham",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2000,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 86 },
      { id: 'alex-manninger',      nome: "Alex Manninger",      posicoes: ["GOL"],       forca: 79 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 80 },
      { id: 'oleg-luzhny',         nome: "Oleg Luzhny",         posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 87 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'gilles-grimandi',     nome: "Gilles Grimandi",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'nigel-winterburn',    nome: "Nigel Winterburn",    posicoes: ["LE"],        forca: 80 },
      { id: 'silvinho',            nome: "Silvinho",            posicoes: ["LE"],        forca: 80 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 90 },
      { id: 'emmanuel-petit',      nome: "Emmanuel Petit",      posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 82 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'marc-overmars',       nome: "Marc Overmars",       posicoes: ["PE"],        forca: 86 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'kanu',                nome: "Nwankwo Kanu",        posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'davor-suker',         nome: "Davor Šuker",         posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2000,
    clube: "Leeds United",
    jogadores: [
      { id: 'nigel-martyn',        nome: "Nigel Martyn",        posicoes: ["GOL"],       forca: 86 },
      { id: 'gary-kelly',          nome: "Gary Kelly",          posicoes: ["LD"],        forca: 81 },
      { id: 'danny-mills',         nome: "Danny Mills",         posicoes: ["LD"],        forca: 80 },
      { id: 'lucas-radebe',        nome: "Lucas Radebe",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'jonathan-woodgate',   nome: "Jonathan Woodgate",   posicoes: ["ZAG"],       forca: 83 },
      { id: 'michael-duberry',     nome: "Michael Duberry",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'ian-harte',           nome: "Ian Harte",           posicoes: ["LE"],        forca: 82 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'lee-bowyer',          nome: "Lee Bowyer",          posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'eirik-bakke',         nome: "Eirik Bakke",         posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'stephen-mcphail',     nome: "Stephen McPhail",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'michael-bridges',     nome: "Michael Bridges",     posicoes: ["ATA"],       forca: 82 },
      { id: 'alan-smith',          nome: "Alan Smith",          posicoes: ["ATA"],       forca: 81 },
      { id: 'darren-huckerby',     nome: "Darren Huckerby",     posicoes: ["ATA","PE"],  forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2000,
    clube: "Liverpool",
    jogadores: [
      { id: 'sander-westerveld',   nome: "Sander Westerveld",   posicoes: ["GOL"],       forca: 82 },
      { id: 'vegard-heggem',       nome: "Vegard Heggem",       posicoes: ["LD"],        forca: 79 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 86 },
      { id: 'stephane-henchoz',    nome: "Stéphane Henchoz",    posicoes: ["ZAG"],       forca: 83 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'dominic-matteo',      nome: "Dominic Matteo",      posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'rigobert-song',       nome: "Rigobert Song",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'dietmar-hamann',      nome: "Dietmar Hamann",      posicoes: ["VOL"],       forca: 84 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'danny-murphy',        nome: "Danny Murphy",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'vladimir-smicer',     nome: "Vladimír Šmicer",     posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'patrik-berger',       nome: "Patrik Berger",       posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 88 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 82 },
      { id: 'titi-camara',         nome: "Titi Camara",         posicoes: ["ATA","PE"],  forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2000,
    clube: "Chelsea",
    jogadores: [
      { id: 'ed-de-goey',          nome: "Ed de Goey",          posicoes: ["GOL"],       forca: 82 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD"],        forca: 81 },
      { id: 'dan-petrescu',        nome: "Dan Petrescu",        posicoes: ["LD","MD"],   forca: 81 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["ZAG"],       forca: 89 },
      { id: 'frank-leboeuf',       nome: "Frank Leboeuf",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'emerson-thome',       nome: "Emerson Thome",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'celestine-babayaro',  nome: "Celestine Babayaro",  posicoes: ["LE"],        forca: 80 },
      { id: 'didier-deschamps',    nome: "Didier Deschamps",    posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'dennis-wise',         nome: "Dennis Wise",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'gustavo-poyet',       nome: "Gustavo Poyet",       posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'gabriele-ambrosetti', nome: "Gabriele Ambrosetti", posicoes: ["PE"],        forca: 76 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'tore-andre-flo',      nome: "Tore André Flo",      posicoes: ["ATA"],       forca: 83 },
      { id: 'chris-sutton',        nome: "Chris Sutton",        posicoes: ["ATA"],       forca: 81 },
      { id: 'george-weah',         nome: "George Weah",         posicoes: ["ATA"],       forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2000,
    clube: "Aston Villa",
    jogadores: [
      { id: 'david-james',         nome: "David James",         posicoes: ["GOL"],       forca: 83 },
      { id: 'michael-oakes',       nome: "Michael Oakes",       posicoes: ["GOL"],       forca: 77 },
      { id: 'mark-delaney',        nome: "Mark Delaney",        posicoes: ["LD"],        forca: 78 },
      { id: 'steve-watson',        nome: "Steve Watson",        posicoes: ["LD","MD"],   forca: 78 },
      { id: 'ugo-ehiogu',          nome: "Ugo Ehiogu",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'gareth-southgate',    nome: "Gareth Southgate",    posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'alan-wright',         nome: "Alan Wright",         posicoes: ["LE"],        forca: 79 },
      { id: 'george-boateng',      nome: "George Boateng",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'ian-taylor',          nome: "Ian Taylor",          posicoes: ["MC"],        forca: 78 },
      { id: 'lee-hendrie',         nome: "Lee Hendrie",         posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'paul-merson',         nome: "Paul Merson",         posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'alan-thompson',       nome: "Alan Thompson",       posicoes: ["PE","MC"],   forca: 78 },
      { id: 'dion-dublin',         nome: "Dion Dublin",         posicoes: ["ATA"],       forca: 82 },
      { id: 'julian-joachim',      nome: "Julian Joachim",      posicoes: ["ATA","PD"],  forca: 79 },
      { id: 'benito-carbone',      nome: "Benito Carbone",      posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'darius-vassell',      nome: "Darius Vassell",      posicoes: ["ATA","PD"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2001 (temporada 2000-01) — o tri seguido do United e o ano em que o
  //  IPSWICH TOWN terminou em 5º logo depois de subir, garantindo vaga na UEFA.
  //  O Liverpool fez a tríplice de copas (FA, Liga e UEFA) sem levar a liga.
  //  Top-6: United (80), Arsenal (70), Liverpool (69), Leeds (68), Ipswich (66),
  //  Chelsea (61).
  //  Transferências dentro do top-6: Matteo (Liverpool→Leeds) e Rio Ferdinand
  //  (West Ham→Leeds, recorde para zagueiro na época).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2001,
    clube: "Manchester United",
    jogadores: [
      { id: 'fabien-barthez',      nome: "Fabien Barthez",      posicoes: ["GOL"],       forca: 86 },
      { id: 'raimond-van-der-gouw', nome: "Raimond van der Gouw", posicoes: ["GOL"],     forca: 76 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 85 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 81 },
      { id: 'jaap-stam',           nome: "Jaap Stam",           posicoes: ["ZAG"],       forca: 89 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 82 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 82 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 91 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'quinton-fortune',     nome: "Quinton Fortune",     posicoes: ["LE","PE"],   forca: 78 },
      { id: 'luke-chadwick',       nome: "Luke Chadwick",       posicoes: ["PD"],        forca: 74 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 90 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 85 },
      { id: 'teddy-sheringham',    nome: "Teddy Sheringham",    posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2001,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 85 },
      { id: 'alex-manninger',      nome: "Alex Manninger",      posicoes: ["GOL"],       forca: 78 },
      { id: 'lee-dixon',           nome: "Lee Dixon",           posicoes: ["LD"],        forca: 79 },
      { id: 'oleg-luzhny',         nome: "Oleg Luzhny",         posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 86 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'gilles-grimandi',     nome: "Gilles Grimandi",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 80 },
      { id: 'silvinho',            nome: "Silvinho",            posicoes: ["LE"],        forca: 80 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 91 },
      { id: 'edu-gaspar',          nome: "Edu",                 posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 82 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 84 },
      { id: 'robert-pires',        nome: "Robert Pirès",        posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 90 },
      { id: 'sylvain-wiltord',     nome: "Sylvain Wiltord",     posicoes: ["ATA","PD"],  forca: 83 },
      { id: 'kanu',                nome: "Nwankwo Kanu",        posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2001,
    clube: "Liverpool",
    jogadores: [
      { id: 'sander-westerveld',   nome: "Sander Westerveld",   posicoes: ["GOL"],       forca: 82 },
      { id: 'markus-babbel',       nome: "Markus Babbel",       posicoes: ["LD","ZAG"],  forca: 84 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 87 },
      { id: 'stephane-henchoz',    nome: "Stéphane Henchoz",    posicoes: ["ZAG"],       forca: 84 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'christian-ziege',     nome: "Christian Ziege",     posicoes: ["LE"],        forca: 81 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'dietmar-hamann',      nome: "Dietmar Hamann",      posicoes: ["VOL"],       forca: 85 },
      { id: 'gary-mcallister',     nome: "Gary McAllister",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'danny-murphy',        nome: "Danny Murphy",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'jamie-redknapp',      nome: "Jamie Redknapp",      posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'vladimir-smicer',     nome: "Vladimír Šmicer",     posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'patrik-berger',       nome: "Patrik Berger",       posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'nick-barmby',         nome: "Nick Barmby",         posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 89 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 84 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2001,
    clube: "Leeds United",
    jogadores: [
      { id: 'nigel-martyn',        nome: "Nigel Martyn",        posicoes: ["GOL"],       forca: 85 },
      { id: 'gary-kelly',          nome: "Gary Kelly",          posicoes: ["LD"],        forca: 81 },
      { id: 'danny-mills',         nome: "Danny Mills",         posicoes: ["LD"],        forca: 81 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 86 },
      { id: 'lucas-radebe',        nome: "Lucas Radebe",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'jonathan-woodgate',   nome: "Jonathan Woodgate",   posicoes: ["ZAG"],       forca: 83 },
      { id: 'dominic-matteo',      nome: "Dominic Matteo",      posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'ian-harte',           nome: "Ian Harte",           posicoes: ["LE"],        forca: 82 },
      { id: 'olivier-dacourt',     nome: "Olivier Dacourt",     posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'lee-bowyer',          nome: "Lee Bowyer",          posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'eirik-bakke',         nome: "Eirik Bakke",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'stephen-mcphail',     nome: "Stephen McPhail",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'mark-viduka',         nome: "Mark Viduka",         posicoes: ["ATA"],       forca: 86 },
      { id: 'alan-smith',          nome: "Alan Smith",          posicoes: ["ATA"],       forca: 82 },
      { id: 'michael-bridges',     nome: "Michael Bridges",     posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2001,
    clube: "Ipswich Town",
    jogadores: [
      { id: 'richard-wright',      nome: "Richard Wright",      posicoes: ["GOL"],       forca: 83 },
      { id: 'chris-makin',         nome: "Chris Makin",         posicoes: ["LD"],        forca: 77 },
      { id: 'gary-croft',          nome: "Gary Croft",          posicoes: ["LE"],        forca: 75 },
      { id: 'john-mcgreal',        nome: "John McGreal",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'mark-venus',          nome: "Mark Venus",          posicoes: ["ZAG","LE"],  forca: 76 },
      { id: 'titus-bramble',       nome: "Titus Bramble",       posicoes: ["ZAG"],       forca: 76 },
      { id: 'hermann-hreidarsson', nome: "Hermann Hreiðarsson", posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'jamie-clapham',       nome: "Jamie Clapham",       posicoes: ["LE","PE"],   forca: 77 },
      { id: 'matt-holland',        nome: "Matt Holland",        posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'jim-magilton',        nome: "Jim Magilton",        posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'jermaine-wright',     nome: "Jermaine Wright",     posicoes: ["MC","MD"],   forca: 77 },
      { id: 'martijn-reuser',      nome: "Martijn Reuser",      posicoes: ["MEI","PE"],  forca: 78 },
      { id: 'marcus-stewart',      nome: "Marcus Stewart",      posicoes: ["ATA"],       forca: 83 },
      { id: 'james-scowcroft',     nome: "James Scowcroft",     posicoes: ["ATA"],       forca: 77 },
      { id: 'alun-armstrong',      nome: "Alun Armstrong",      posicoes: ["ATA"],       forca: 76 },
      { id: 'richard-naylor',      nome: "Richard Naylor",      posicoes: ["ATA","ZAG"], forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2001,
    clube: "Chelsea",
    jogadores: [
      { id: 'carlo-cudicini',      nome: "Carlo Cudicini",      posicoes: ["GOL"],       forca: 84 },
      { id: 'ed-de-goey',          nome: "Ed de Goey",          posicoes: ["GOL"],       forca: 81 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD"],        forca: 80 },
      { id: 'mario-melchiot',      nome: "Mario Melchiot",      posicoes: ["LD"],        forca: 78 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["ZAG"],       forca: 88 },
      { id: 'frank-leboeuf',       nome: "Frank Leboeuf",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'jes-hogh',            nome: "Jes Høgh",            posicoes: ["ZAG"],       forca: 77 },
      { id: 'celestine-babayaro',  nome: "Celestine Babayaro",  posicoes: ["LE"],        forca: 80 },
      { id: 'dennis-wise',         nome: "Dennis Wise",         posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'gustavo-poyet',       nome: "Gustavo Poyet",       posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'sam-dalla-bona',      nome: "Sam Dalla Bona",      posicoes: ["MC"],        forca: 77 },
      { id: 'jody-morris',         nome: "Jody Morris",         posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'mario-stanic',        nome: "Mario Stanić",        posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 88 },
      { id: 'eidur-gudjohnsen',    nome: "Eidur Gudjohnsen",    posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'tore-andre-flo',      nome: "Tore André Flo",      posicoes: ["ATA"],       forca: 82 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2002 (temporada 2001-02) — o 2º "double" de Wenger, fechando com 13
  //  vitórias seguidas e sem perder NENHUM jogo fora de casa. Top-6: Arsenal
  //  (87), Liverpool (80), United (77), Newcastle (71), Leeds (66), Chelsea (64).
  //  Chegadas que mudam o acervo: Van Nistelrooy e Verón no United, Sol Campbell
  //  e Lauren no Arsenal, Lampard no Chelsea (saindo do West Ham de 1999).
  //  ⚠️ Robbie Fowler saiu do Liverpool para o LEEDS em novembro/01 — e o Leeds
  //  está neste top-6, então ele aparece só lá.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2002,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 84 },
      { id: 'richard-wright',      nome: "Richard Wright",      posicoes: ["GOL"],       forca: 81 },
      { id: 'lauren',              nome: "Lauren",              posicoes: ["LD"],        forca: 82 },
      { id: 'oleg-luzhny',         nome: "Oleg Luzhny",         posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'tony-adams',          nome: "Tony Adams",          posicoes: ["ZAG"],       forca: 84 },
      { id: 'sol-campbell',        nome: "Sol Campbell",        posicoes: ["ZAG"],       forca: 88 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'igors-stepanovs',     nome: "Igors Stepanovs",     posicoes: ["ZAG"],       forca: 74 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 84 },
      { id: 'gilles-grimandi',     nome: "Gilles Grimandi",     posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 92 },
      { id: 'edu-gaspar',          nome: "Edu",                 posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 82 },
      { id: 'giovanni-van-bronckhorst', nome: "Giovanni van Bronckhorst", posicoes: ["LE","MC"], forca: 82 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 87 },
      { id: 'robert-pires',        nome: "Robert Pirès",        posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 92 },
      { id: 'sylvain-wiltord',     nome: "Sylvain Wiltord",     posicoes: ["ATA","PD"],  forca: 84 },
      { id: 'kanu',                nome: "Nwankwo Kanu",        posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'francis-jeffers',     nome: "Francis Jeffers",     posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2002,
    clube: "Liverpool",
    jogadores: [
      { id: 'jerzy-dudek',         nome: "Jerzy Dudek",         posicoes: ["GOL"],       forca: 84 },
      { id: 'chris-kirkland',      nome: "Chris Kirkland",      posicoes: ["GOL"],       forca: 78 },
      { id: 'markus-babbel',       nome: "Markus Babbel",       posicoes: ["LD","ZAG"],  forca: 83 },
      { id: 'stephen-wright',      nome: "Stephen Wright",      posicoes: ["LD"],        forca: 75 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 87 },
      { id: 'stephane-henchoz',    nome: "Stéphane Henchoz",    posicoes: ["ZAG"],       forca: 84 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG","LD"],  forca: 82 },
      { id: 'abel-xavier',         nome: "Abel Xavier",         posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 83 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'dietmar-hamann',      nome: "Dietmar Hamann",      posicoes: ["VOL"],       forca: 85 },
      { id: 'danny-murphy',        nome: "Danny Murphy",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'gary-mcallister',     nome: "Gary McAllister",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'igor-biscan',         nome: "Igor Bišćan",         posicoes: ["VOL","ZAG"], forca: 77 },
      { id: 'vladimir-smicer',     nome: "Vladimír Šmicer",     posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'patrik-berger',       nome: "Patrik Berger",       posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'nick-barmby',         nome: "Nick Barmby",         posicoes: ["MEI","PE"],  forca: 79 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 90 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 83 },
      { id: 'jari-litmanen',       nome: "Jari Litmanen",       posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2002,
    clube: "Manchester United",
    jogadores: [
      { id: 'fabien-barthez',      nome: "Fabien Barthez",      posicoes: ["GOL"],       forca: 85 },
      { id: 'roy-carroll',         nome: "Roy Carroll",         posicoes: ["GOL"],       forca: 77 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 85 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 81 },
      { id: 'laurent-blanc',       nome: "Laurent Blanc",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 83 },
      { id: 'ronny-johnsen',       nome: "Ronny Johnsen",       posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'denis-irwin',         nome: "Denis Irwin",         posicoes: ["LE","LD"],   forca: 81 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 90 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'quinton-fortune',     nome: "Quinton Fortune",     posicoes: ["LE","PE"],   forca: 78 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 90 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'ruud-van-nistelrooy', nome: "Ruud van Nistelrooy", posicoes: ["ATA"],       forca: 91 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 85 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2002,
    clube: "Newcastle United",
    jogadores: [
      { id: 'shay-given',          nome: "Shay Given",          posicoes: ["GOL"],       forca: 85 },
      { id: 'andy-griffin',        nome: "Andy Griffin",        posicoes: ["LD"],        forca: 76 },
      { id: 'warren-barton',       nome: "Warren Barton",       posicoes: ["LD"],        forca: 77 },
      { id: 'aaron-hughes',        nome: "Aaron Hughes",        posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'nikos-dabizas',       nome: "Nikos Dabizas",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'sylvain-distin',      nome: "Sylvain Distin",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'robbie-elliott',      nome: "Robbie Elliott",      posicoes: ["LE"],        forca: 76 },
      { id: 'rob-lee',             nome: "Rob Lee",             posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'gary-speed',          nome: "Gary Speed",          posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'clarence-acuna',      nome: "Clarence Acuña",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'kieron-dyer',         nome: "Kieron Dyer",         posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'nolberto-solano',     nome: "Nolberto Solano",     posicoes: ["PD","MEI"],  forca: 84 },
      { id: 'laurent-robert',      nome: "Laurent Robert",      posicoes: ["PE"],        forca: 84 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 89 },
      { id: 'craig-bellamy',       nome: "Craig Bellamy",       posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'lomana-lualua',       nome: "Lomana LuaLua",       posicoes: ["ATA","PD"],  forca: 78 },
      { id: 'shola-ameobi',        nome: "Shola Ameobi",        posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2002,
    clube: "Leeds United",
    jogadores: [
      { id: 'nigel-martyn',        nome: "Nigel Martyn",        posicoes: ["GOL"],       forca: 84 },
      { id: 'paul-robinson',       nome: "Paul Robinson",       posicoes: ["GOL"],       forca: 81 },
      { id: 'danny-mills',         nome: "Danny Mills",         posicoes: ["LD"],        forca: 81 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 87 },
      { id: 'lucas-radebe',        nome: "Lucas Radebe",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'jonathan-woodgate',   nome: "Jonathan Woodgate",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'dominic-matteo',      nome: "Dominic Matteo",      posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'ian-harte',           nome: "Ian Harte",           posicoes: ["LE"],        forca: 81 },
      { id: 'olivier-dacourt',     nome: "Olivier Dacourt",     posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'david-batty',         nome: "David Batty",         posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'lee-bowyer',          nome: "Lee Bowyer",          posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'eirik-bakke',         nome: "Eirik Bakke",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'seth-johnson',        nome: "Seth Johnson",        posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'mark-viduka',         nome: "Mark Viduka",         posicoes: ["ATA"],       forca: 86 },
      { id: 'alan-smith',          nome: "Alan Smith",          posicoes: ["ATA"],       forca: 83 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 84 },
      { id: 'robbie-keane',        nome: "Robbie Keane",        posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2002,
    clube: "Chelsea",
    jogadores: [
      { id: 'carlo-cudicini',      nome: "Carlo Cudicini",      posicoes: ["GOL"],       forca: 85 },
      { id: 'ed-de-goey',          nome: "Ed de Goey",          posicoes: ["GOL"],       forca: 80 },
      { id: 'mario-melchiot',      nome: "Mario Melchiot",      posicoes: ["LD"],        forca: 79 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["ZAG"],       forca: 87 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG","LE"],  forca: 83 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'celestine-babayaro',  nome: "Celestine Babayaro",  posicoes: ["LE"],        forca: 80 },
      { id: 'graeme-le-saux',      nome: "Graeme Le Saux",      posicoes: ["LE"],        forca: 81 },
      { id: 'emmanuel-petit',      nome: "Emmanuel Petit",      posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'sam-dalla-bona',      nome: "Sam Dalla Bona",      posicoes: ["MC"],        forca: 77 },
      { id: 'jody-morris',         nome: "Jody Morris",         posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'mario-stanic',        nome: "Mario Stanić",        posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'jesper-gronkjaer',    nome: "Jesper Grønkjær",     posicoes: ["PD","PE"],   forca: 81 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 87 },
      { id: 'eidur-gudjohnsen',    nome: "Eidur Gudjohnsen",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'mikael-forssell',     nome: "Mikael Forssell",     posicoes: ["ATA"],       forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2003 (temporada 2002-03) — o United reagiu de uma desvantagem de 8
  //  pontos no fim e tirou o título do Arsenal. Top-6: United (83), Arsenal (78),
  //  Newcastle (69), Chelsea (67), Liverpool (64), Blackburn (60).
  //  Chegadas que entram no acervo: Van der Sar não (ainda no Fulham); Rio
  //  Ferdinand foi do Leeds para o United (recorde) e aparece só lá.
  //  Este é o último ano de Chelsea PRÉ-Abramovich (a compra foi em jul/2003).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2003,
    clube: "Manchester United",
    jogadores: [
      { id: 'fabien-barthez',      nome: "Fabien Barthez",      posicoes: ["GOL"],       forca: 84 },
      { id: 'roy-carroll',         nome: "Roy Carroll",         posicoes: ["GOL"],       forca: 77 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 85 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LE","MC"],   forca: 81 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 88 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 83 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'laurent-blanc',       nome: "Laurent Blanc",       posicoes: ["ZAG"],       forca: 81 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 89 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'quinton-fortune',     nome: "Quinton Fortune",     posicoes: ["LE","PE"],   forca: 78 },
      { id: 'david-beckham',       nome: "David Beckham",       posicoes: ["PD","MC"],   forca: 89 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'ruud-van-nistelrooy', nome: "Ruud van Nistelrooy", posicoes: ["ATA"],       forca: 92 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 84 },
      { id: 'diego-forlan',        nome: "Diego Forlán",        posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2003,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-seaman',        nome: "David Seaman",        posicoes: ["GOL"],       forca: 82 },
      { id: 'stuart-taylor',       nome: "Stuart Taylor",       posicoes: ["GOL"],       forca: 75 },
      { id: 'lauren',              nome: "Lauren",              posicoes: ["LD"],        forca: 83 },
      { id: 'oleg-luzhny',         nome: "Oleg Luzhny",         posicoes: ["LD","ZAG"],  forca: 76 },
      { id: 'sol-campbell',        nome: "Sol Campbell",        posicoes: ["ZAG"],       forca: 88 },
      { id: 'martin-keown',        nome: "Martin Keown",        posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'pascal-cygan',        nome: "Pascal Cygan",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 86 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 91 },
      { id: 'gilberto-silva',      nome: "Gilberto Silva",      posicoes: ["VOL"],       forca: 83 },
      { id: 'edu-gaspar',          nome: "Edu",                 posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'ray-parlour',         nome: "Ray Parlour",         posicoes: ["MC"],        forca: 81 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 86 },
      { id: 'robert-pires',        nome: "Robert Pirès",        posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'sylvain-wiltord',     nome: "Sylvain Wiltord",     posicoes: ["ATA","PD"],  forca: 83 },
      { id: 'kanu',                nome: "Nwankwo Kanu",        posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'jose-antonio-reyes',  nome: "José Antonio Reyes",  posicoes: ["PE","ATA"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2003,
    clube: "Newcastle United",
    jogadores: [
      { id: 'shay-given',          nome: "Shay Given",          posicoes: ["GOL"],       forca: 86 },
      { id: 'andy-griffin',        nome: "Andy Griffin",        posicoes: ["LD"],        forca: 76 },
      { id: 'aaron-hughes',        nome: "Aaron Hughes",        posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'nikos-dabizas',       nome: "Nikos Dabizas",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'andy-obrien',         nome: "Andy O'Brien",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'titus-bramble',       nome: "Titus Bramble",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'olivier-bernard',     nome: "Olivier Bernard",     posicoes: ["LE"],        forca: 78 },
      { id: 'jermaine-jenas',      nome: "Jermaine Jenas",      posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'gary-speed',          nome: "Gary Speed",          posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'nolberto-solano',     nome: "Nolberto Solano",     posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'kieron-dyer',         nome: "Kieron Dyer",         posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'laurent-robert',      nome: "Laurent Robert",      posicoes: ["PE"],        forca: 83 },
      { id: 'hugo-viana',          nome: "Hugo Viana",          posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'alan-shearer',        nome: "Alan Shearer",        posicoes: ["ATA"],       forca: 88 },
      { id: 'craig-bellamy',       nome: "Craig Bellamy",       posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'lomana-lualua',       nome: "Lomana LuaLua",       posicoes: ["ATA","PD"],  forca: 77 },
      { id: 'shola-ameobi',        nome: "Shola Ameobi",        posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2003,
    clube: "Chelsea",
    jogadores: [
      { id: 'carlo-cudicini',      nome: "Carlo Cudicini",      posicoes: ["GOL"],       forca: 85 },
      { id: 'mario-melchiot',      nome: "Mario Melchiot",      posicoes: ["LD"],        forca: 79 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 84 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'celestine-babayaro',  nome: "Celestine Babayaro",  posicoes: ["LE"],        forca: 79 },
      { id: 'graeme-le-saux',      nome: "Graeme Le Saux",      posicoes: ["LE"],        forca: 80 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'emmanuel-petit',      nome: "Emmanuel Petit",      posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'jesper-gronkjaer',    nome: "Jesper Grønkjær",     posicoes: ["PD","PE"],   forca: 81 },
      { id: 'boudewijn-zenden',    nome: "Boudewijn Zenden",    posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'eidur-gudjohnsen',    nome: "Eidur Gudjohnsen",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 86 },
      { id: 'carlton-cole',        nome: "Carlton Cole",        posicoes: ["ATA"],       forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2003,
    clube: "Liverpool",
    jogadores: [
      { id: 'jerzy-dudek',         nome: "Jerzy Dudek",         posicoes: ["GOL"],       forca: 83 },
      { id: 'chris-kirkland',      nome: "Chris Kirkland",      posicoes: ["GOL"],       forca: 79 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 86 },
      { id: 'stephane-henchoz',    nome: "Stéphane Henchoz",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 83 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'dietmar-hamann',      nome: "Dietmar Hamann",      posicoes: ["VOL"],       forca: 85 },
      { id: 'danny-murphy',        nome: "Danny Murphy",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'salif-diao',          nome: "Salif Diao",          posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'vladimir-smicer',     nome: "Vladimír Šmicer",     posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'el-hadji-diouf',      nome: "El Hadji Diouf",      posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'bruno-cheyrou',       nome: "Bruno Cheyrou",       posicoes: ["MEI","PE"],  forca: 77 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 89 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 82 },
      { id: 'milan-baros',         nome: "Milan Baroš",         posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2003,
    clube: "Blackburn Rovers",
    jogadores: [
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 84 },
      { id: 'john-curtis',         nome: "John Curtis",         posicoes: ["LD","ZAG"],  forca: 75 },
      { id: 'markus-babbel',       nome: "Markus Babbel",       posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'henning-berg',        nome: "Henning Berg",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'craig-short',         nome: "Craig Short",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'nils-eric-johansson', nome: "Nils-Eric Johansson", posicoes: ["ZAG","LE"],  forca: 76 },
      { id: 'vratislav-gresko',    nome: "Vratislav Greško",    posicoes: ["LE"],        forca: 76 },
      { id: 'david-dunn',          nome: "David Dunn",          posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'tugay-kerimoglu',     nome: "Tugay Kerimoğlu",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'garry-flitcroft',     nome: "Garry Flitcroft",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'damien-duff',         nome: "Damien Duff",         posicoes: ["PE","PD"],   forca: 84 },
      { id: 'keith-gillespie',     nome: "Keith Gillespie",     posicoes: ["PD"],        forca: 78 },
      { id: 'andy-cole',           nome: "Andy Cole",           posicoes: ["ATA"],       forca: 82 },
      { id: 'dwight-yorke',        nome: "Dwight Yorke",        posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'matt-jansen',         nome: "Matt Jansen",         posicoes: ["ATA","MEI"], forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2005 (temporada 2004-05) — o CHELSEA de Mourinho no 1º ano: recorde
  //  de 95 pontos e apenas 15 gols sofridos (recorde histórico). Top-6: Chelsea
  //  (95), Arsenal (83), United (77), Everton (61), Liverpool (58), Bolton (58).
  //  O Liverpool ficou em 5º na liga mas ganhou a Champions (a "noite de
  //  Istambul") — por isso está aqui. Van der Sar chegou ao United só no ano
  //  seguinte; aqui ainda é Carroll/Howard no gol.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2005,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 88 },
      { id: 'carlo-cudicini',      nome: "Carlo Cudicini",      posicoes: ["GOL"],       forca: 82 },
      { id: 'paulo-ferreira',      nome: "Paulo Ferreira",      posicoes: ["LD"],        forca: 82 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG","LE"],  forca: 85 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'ricardo-carvalho',    nome: "Ricardo Carvalho",    posicoes: ["ZAG"],       forca: 86 },
      { id: 'wayne-bridge',        nome: "Wayne Bridge",        posicoes: ["LE"],        forca: 81 },
      { id: 'claude-makelele',     nome: "Claude Makélélé",     posicoes: ["VOL"],       forca: 88 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'tiago',               nome: "Tiago",               posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'alexey-smertin',      nome: "Alexey Smertin",      posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'damien-duff',         nome: "Damien Duff",         posicoes: ["PE","PD"],   forca: 85 },
      { id: 'arjen-robben',        nome: "Arjen Robben",        posicoes: ["PD","PE"],   forca: 86 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 87 },
      { id: 'eidur-gudjohnsen',    nome: "Eidur Gudjohnsen",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'mateja-kezman',       nome: "Mateja Kežman",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2005,
    clube: "Arsenal",
    jogadores: [
      { id: 'jens-lehmann',        nome: "Jens Lehmann",        posicoes: ["GOL"],       forca: 86 },
      { id: 'manuel-almunia',      nome: "Manuel Almunia",      posicoes: ["GOL"],       forca: 78 },
      { id: 'lauren',              nome: "Lauren",              posicoes: ["LD"],        forca: 83 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 85 },
      { id: 'sol-campbell',        nome: "Sol Campbell",        posicoes: ["ZAG"],       forca: 87 },
      { id: 'philippe-senderos',   nome: "Philippe Senderos",   posicoes: ["ZAG"],       forca: 78 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 87 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 78 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 90 },
      { id: 'gilberto-silva',      nome: "Gilberto Silva",      posicoes: ["VOL"],       forca: 84 },
      { id: 'edu-gaspar',          nome: "Edu",                 posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'robert-pires',        nome: "Robert Pirès",        posicoes: ["PE","MEI"],  forca: 87 },
      { id: 'jose-antonio-reyes',  nome: "José Antonio Reyes",  posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 94 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2005,
    clube: "Manchester United",
    jogadores: [
      { id: 'roy-carroll',         nome: "Roy Carroll",         posicoes: ["GOL"],       forca: 78 },
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 81 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 84 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 88 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 82 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'gabriel-heinze',      nome: "Gabriel Heinze",      posicoes: ["LE","ZAG"],  forca: 84 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'nicky-butt',          nome: "Nicky Butt",          posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 87 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["PD","PE"],   forca: 86 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 78 },
      { id: 'alan-smith',          nome: "Alan Smith",          posicoes: ["ATA","MC"],  forca: 81 },
      { id: 'ruud-van-nistelrooy', nome: "Ruud van Nistelrooy", posicoes: ["ATA"],       forca: 90 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2005,
    clube: "Everton",
    jogadores: [
      { id: 'nigel-martyn',        nome: "Nigel Martyn",        posicoes: ["GOL"],       forca: 82 },
      { id: 'tony-hibbert',        nome: "Tony Hibbert",        posicoes: ["LD"],        forca: 77 },
      { id: 'alan-stubbs',         nome: "Alan Stubbs",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'david-weir',          nome: "David Weir",          posicoes: ["ZAG"],       forca: 79 },
      { id: 'joseph-yobo',         nome: "Joseph Yobo",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'alessandro-pistone',  nome: "Alessandro Pistone",  posicoes: ["LE"],        forca: 77 },
      { id: 'lee-carsley',         nome: "Lee Carsley",         posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'thomas-gravesen',     nome: "Thomas Gravesen",     posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'tim-cahill',          nome: "Tim Cahill",          posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'kevin-kilbane',       nome: "Kevin Kilbane",       posicoes: ["PE","LE"],   forca: 78 },
      { id: 'leon-osman',          nome: "Leon Osman",          posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'marcus-bent',         nome: "Marcus Bent",         posicoes: ["ATA"],       forca: 77 },
      { id: 'duncan-ferguson',     nome: "Duncan Ferguson",     posicoes: ["ATA"],       forca: 78 },
      { id: 'james-beattie',       nome: "James Beattie",       posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2005,
    clube: "Liverpool",
    jogadores: [
      { id: 'jerzy-dudek',         nome: "Jerzy Dudek",         posicoes: ["GOL"],       forca: 82 },
      { id: 'scott-carson',        nome: "Scott Carson",        posicoes: ["GOL"],       forca: 76 },
      { id: 'steve-finnan',        nome: "Steve Finnan",        posicoes: ["LD"],        forca: 82 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'djimi-traore',        nome: "Djimi Traoré",        posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 83 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'dietmar-hamann',      nome: "Dietmar Hamann",      posicoes: ["VOL"],       forca: 83 },
      { id: 'luis-garcia',         nome: "Luis García",         posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'igor-biscan',         nome: "Igor Bišćan",         posicoes: ["VOL","ZAG"], forca: 77 },
      { id: 'milan-baros',         nome: "Milan Baroš",         posicoes: ["ATA"],       forca: 81 },
      { id: 'djibril-cisse',       nome: "Djibril Cissé",       posicoes: ["ATA"],       forca: 82 },
      { id: 'neil-mellor',         nome: "Neil Mellor",         posicoes: ["ATA"],       forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2005,
    clube: "Bolton Wanderers",
    jogadores: [
      { id: 'jussi-jaaskelainen',  nome: "Jussi Jääskeläinen",  posicoes: ["GOL"],       forca: 82 },
      { id: 'nicky-hunt',          nome: "Nicky Hunt",          posicoes: ["LD"],        forca: 75 },
      { id: 'tal-ben-haim',        nome: "Tal Ben Haim",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'bruno-ndiaye',        nome: "Bruno N'Gotty",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'radhi-jaidi',         nome: "Radhi Jaïdi",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'ricardo-gardner',     nome: "Ricardo Gardner",     posicoes: ["LE","PE"],   forca: 77 },
      { id: 'kevin-nolan',         nome: "Kevin Nolan",         posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'gary-speed',          nome: "Gary Speed",          posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'stelios-giannakopoulos', nome: "Stelios Giannakopoulos", posicoes: ["PD","MEI"], forca: 78 },
      { id: 'jay-jay-okocha',      nome: "Jay-Jay Okocha",      posicoes: ["MEI"],       forca: 84 },
      { id: 'el-hadji-diouf',      nome: "El Hadji Diouf",      posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'kevin-davies',        nome: "Kevin Davies",        posicoes: ["ATA"],       forca: 79 },
      { id: 'henrik-pedersen',     nome: "Henrik Pedersen",     posicoes: ["ATA","PE"],  forca: 74 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2006 (temporada 2005-06) — o bi seguido do Chelsea de Mourinho (91
  //  pts). Top-6: Chelsea (91), United (83), Liverpool (82), Arsenal (67),
  //  Tottenham (65), Blackburn (63). Foi a última temporada do Highbury, antes
  //  de o Arsenal mudar para o Emirates. Van der Sar já é o goleiro do United.
  //  Michael Owen tinha voltado ao Newcastle (fora do top-6), então some daqui.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2006,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 89 },
      { id: 'paulo-ferreira',      nome: "Paulo Ferreira",      posicoes: ["LD"],        forca: 82 },
      { id: 'geremi',              nome: "Geremi",              posicoes: ["LD","MC"],   forca: 79 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 89 },
      { id: 'ricardo-carvalho',    nome: "Ricardo Carvalho",    posicoes: ["ZAG"],       forca: 87 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG","LE"],  forca: 85 },
      { id: 'asier-del-horno',     nome: "Asier del Horno",     posicoes: ["LE"],        forca: 80 },
      { id: 'claude-makelele',     nome: "Claude Makélélé",     posicoes: ["VOL"],       forca: 87 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'michael-essien',      nome: "Michael Essien",      posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'damien-duff',         nome: "Damien Duff",         posicoes: ["PE","PD"],   forca: 84 },
      { id: 'arjen-robben',        nome: "Arjen Robben",        posicoes: ["PD","PE"],   forca: 87 },
      { id: 'shaun-wright-phillips', nome: "Shaun Wright-Phillips", posicoes: ["PD"],    forca: 81 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 88 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 85 },
      { id: 'eidur-gudjohnsen',    nome: "Eidur Gudjohnsen",    posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2006,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 87 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 83 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 87 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 82 },
      { id: 'gabriel-heinze',      nome: "Gabriel Heinze",      posicoes: ["LE","ZAG"],  forca: 83 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'roy-keane',           nome: "Roy Keane",           posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 79 },
      { id: 'alan-smith',           nome: "Alan Smith",          posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["PD","PE"],   forca: 88 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 80 },
      { id: 'ruud-van-nistelrooy', nome: "Ruud van Nistelrooy", posicoes: ["ATA"],       forca: 89 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2006,
    clube: "Liverpool",
    jogadores: [
      { id: 'jose-reina',          nome: "José Reina",          posicoes: ["GOL"],       forca: 85 },
      { id: 'steve-finnan',        nome: "Steve Finnan",        posicoes: ["LD"],        forca: 82 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'daniel-agger',        nome: "Daniel Agger",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 83 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'momo-sissoko',        nome: "Momo Sissoko",        posicoes: ["VOL"],       forca: 80 },
      { id: 'luis-garcia',         nome: "Luis García",         posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'harry-kewell',        nome: "Harry Kewell",        posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'boudewijn-zenden',    nome: "Boudewijn Zenden",    posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'peter-crouch',        nome: "Peter Crouch",        posicoes: ["ATA"],       forca: 81 },
      { id: 'djibril-cisse',       nome: "Djibril Cissé",       posicoes: ["ATA"],       forca: 81 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 79 },
      { id: 'fernando-morientes',  nome: "Fernando Morientes",  posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2006,
    clube: "Arsenal",
    jogadores: [
      { id: 'jens-lehmann',        nome: "Jens Lehmann",        posicoes: ["GOL"],       forca: 86 },
      { id: 'emmanuel-eboue',      nome: "Emmanuel Eboué",      posicoes: ["LD"],        forca: 80 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 85 },
      { id: 'sol-campbell',        nome: "Sol Campbell",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'philippe-senderos',   nome: "Philippe Senderos",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 87 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 80 },
      { id: 'gilberto-silva',      nome: "Gilberto Silva",      posicoes: ["VOL"],       forca: 84 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'alexander-hleb',      nome: "Alexander Hleb",      posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'robert-pires',        nome: "Robert Pirès",        posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'jose-antonio-reyes',  nome: "José Antonio Reyes",  posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2006,
    clube: "Tottenham",
    jogadores: [
      { id: 'paul-robinson',       nome: "Paul Robinson",       posicoes: ["GOL"],       forca: 83 },
      { id: 'young-pyo-lee',       nome: "Lee Young-pyo",       posicoes: ["LE"],        forca: 80 },
      { id: 'ledley-king',         nome: "Ledley King",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'anthony-gardner',     nome: "Anthony Gardner",     posicoes: ["ZAG"],       forca: 77 },
      { id: 'paul-stalteri',       nome: "Paul Stalteri",       posicoes: ["LD"],        forca: 76 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'jermaine-jenas',      nome: "Jermaine Jenas",      posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 79 },
      { id: 'wayne-routledge',     nome: "Wayne Routledge",     posicoes: ["PD","PE"],   forca: 76 },
      { id: 'robbie-keane',        nome: "Robbie Keane",        posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'jermain-defoe',       nome: "Jermain Defoe",       posicoes: ["ATA"],       forca: 82 },
      { id: 'mido',                nome: "Mido",                posicoes: ["ATA"],       forca: 79 },
      { id: 'grzegorz-rasiak',     nome: "Grzegorz Rasiak",     posicoes: ["ATA"],       forca: 74 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2006,
    clube: "Blackburn Rovers",
    jogadores: [
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 84 },
      { id: 'zurab-khizanishvili', nome: "Zurab Khizanishvili", posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'ryan-nelsen',         nome: "Ryan Nelsen",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'andy-todd',           nome: "Andy Todd",           posicoes: ["ZAG"],       forca: 76 },
      { id: 'lucas-neill',         nome: "Lucas Neill",         posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'dominic-matteo',      nome: "Dominic Matteo",      posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'steven-reid',         nome: "Steven Reid",         posicoes: ["MC","MD"],   forca: 78 },
      { id: 'tugay-kerimoglu',     nome: "Tugay Kerimoğlu",     posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'robbie-savage',       nome: "Robbie Savage",       posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'morten-gamst-pedersen', nome: "Morten Gamst Pedersen", posicoes: ["PE","MEI"], forca: 81 },
      { id: 'david-bentley',       nome: "David Bentley",       posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'craig-bellamy',       nome: "Craig Bellamy",       posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'shefki-kuqi',         nome: "Shefki Kuqi",         posicoes: ["ATA"],       forca: 75 },
      { id: 'paul-dickov',         nome: "Paul Dickov",         posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2007 (temporada 2006-07) — o United retomou o título (89 pts) após
  //  a dupla do Chelsea, no ano da explosão de Cristiano Ronaldo (17 gols de
  //  ponta, PFA Player of the Year). Top-6: United (89), Chelsea (83), Liverpool
  //  (68), Arsenal (68), Tottenham (60), Everton (58).
  //  Carrick foi do Tottenham para o United (aparece só no United). Ballack e
  //  Shevchenko chegaram ao Chelsea; Dirk Kuyt ao Liverpool.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2007,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 87 },
      { id: 'tomasz-kuszczak',     nome: "Tomasz Kuszczak",     posicoes: ["GOL"],       forca: 76 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 82 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 88 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 86 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 84 },
      { id: 'gabriel-heinze',      nome: "Gabriel Heinze",      posicoes: ["LE","ZAG"],  forca: 82 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 79 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["PD","PE"],   forca: 91 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 80 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 90 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 82 },
      { id: 'ole-gunnar-solskjaer', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"],      forca: 80 },
      { id: 'alan-smith',          nome: "Alan Smith",          posicoes: ["ATA","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2007,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 88 },
      { id: 'henrique-hilario',    nome: "Henrique Hilário",    posicoes: ["GOL"],       forca: 74 },
      { id: 'paulo-ferreira',      nome: "Paulo Ferreira",      posicoes: ["LD"],        forca: 81 },
      { id: 'geremi',              nome: "Geremi",              posicoes: ["LD","MC"],   forca: 78 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 89 },
      { id: 'ricardo-carvalho',    nome: "Ricardo Carvalho",    posicoes: ["ZAG"],       forca: 87 },
      { id: 'khalid-boulahrouz',   nome: "Khalid Boulahrouz",   posicoes: ["ZAG"],       forca: 78 },
      { id: 'wayne-bridge',        nome: "Wayne Bridge",        posicoes: ["LE"],        forca: 80 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 87 },
      { id: 'claude-makelele',     nome: "Claude Makélélé",     posicoes: ["VOL"],       forca: 85 },
      { id: 'michael-essien',      nome: "Michael Essien",      posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'michael-ballack',     nome: "Michael Ballack",     posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'arjen-robben',        nome: "Arjen Robben",        posicoes: ["PD","PE"],   forca: 86 },
      { id: 'shaun-wright-phillips', nome: "Shaun Wright-Phillips", posicoes: ["PD"],    forca: 79 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 89 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 84 },
      { id: 'salomon-kalou',       nome: "Salomon Kalou",       posicoes: ["ATA","PE"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2007,
    clube: "Liverpool",
    jogadores: [
      { id: 'jose-reina',          nome: "José Reina",          posicoes: ["GOL"],       forca: 86 },
      { id: 'steve-finnan',        nome: "Steve Finnan",        posicoes: ["LD"],        forca: 81 },
      { id: 'alvaro-arbeloa',      nome: "Álvaro Arbeloa",      posicoes: ["LD","LE"],   forca: 80 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'daniel-agger',        nome: "Daniel Agger",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'sami-hyypia',         nome: "Sami Hyypiä",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 82 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'javier-mascherano',   nome: "Javier Mascherano",   posicoes: ["VOL"],       forca: 84 },
      { id: 'momo-sissoko',        nome: "Momo Sissoko",        posicoes: ["VOL"],       forca: 79 },
      { id: 'jermaine-pennant',    nome: "Jermaine Pennant",    posicoes: ["PD"],        forca: 79 },
      { id: 'boudewijn-zenden',    nome: "Boudewijn Zenden",    posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'dirk-kuyt',           nome: "Dirk Kuyt",           posicoes: ["ATA","PD"],  forca: 83 },
      { id: 'peter-crouch',        nome: "Peter Crouch",        posicoes: ["ATA"],       forca: 81 },
      { id: 'craig-bellamy',       nome: "Craig Bellamy",       posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'robbie-fowler',       nome: "Robbie Fowler",       posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2007,
    clube: "Arsenal",
    jogadores: [
      { id: 'jens-lehmann',        nome: "Jens Lehmann",        posicoes: ["GOL"],       forca: 85 },
      { id: 'manuel-almunia',      nome: "Manuel Almunia",      posicoes: ["GOL"],       forca: 78 },
      { id: 'emmanuel-eboue',      nome: "Emmanuel Eboué",      posicoes: ["LD"],        forca: 80 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 85 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 85 },
      { id: 'philippe-senderos',   nome: "Philippe Senderos",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'justin-hoyte',        nome: "Justin Hoyte",        posicoes: ["LD","LE"],   forca: 74 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 82 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'gilberto-silva',      nome: "Gilberto Silva",      posicoes: ["VOL"],       forca: 84 },
      { id: 'mathieu-flamini',     nome: "Mathieu Flamini",     posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'alexander-hleb',      nome: "Alexander Hleb",      posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'freddie-ljungberg',   nome: "Freddie Ljungberg",   posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'thierry-henry',       nome: "Thierry Henry",       posicoes: ["ATA","PE"],  forca: 91 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 83 },
      { id: 'julio-baptista',      nome: "Júlio Baptista",      posicoes: ["ATA","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2007,
    clube: "Tottenham",
    jogadores: [
      { id: 'paul-robinson',       nome: "Paul Robinson",       posicoes: ["GOL"],       forca: 82 },
      { id: 'pascal-chimbonda',    nome: "Pascal Chimbonda",    posicoes: ["LD"],        forca: 80 },
      { id: 'young-pyo-lee',       nome: "Lee Young-pyo",       posicoes: ["LE"],        forca: 80 },
      { id: 'ledley-king',         nome: "Ledley King",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'anthony-gardner',     nome: "Anthony Gardner",     posicoes: ["ZAG"],       forca: 77 },
      { id: 'benoit-assou-ekotto', nome: "Benoît Assou-Ekotto", posicoes: ["LE"],        forca: 78 },
      { id: 'didier-zokora',       nome: "Didier Zokora",       posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'jermaine-jenas',      nome: "Jermaine Jenas",      posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'tom-huddlestone',     nome: "Tom Huddlestone",     posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'steed-malbranque',    nome: "Steed Malbranque",    posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 81 },
      { id: 'jermain-defoe',       nome: "Jermain Defoe",       posicoes: ["ATA"],       forca: 83 },
      { id: 'dimitar-berbatov',    nome: "Dimitar Berbatov",    posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'robbie-keane',        nome: "Robbie Keane",        posicoes: ["ATA","MEI"], forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2007,
    clube: "Everton",
    jogadores: [
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 82 },
      { id: 'tony-hibbert',        nome: "Tony Hibbert",        posicoes: ["LD"],        forca: 77 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG","LE"],  forca: 82 },
      { id: 'joseph-yobo',         nome: "Joseph Yobo",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'alan-stubbs',         nome: "Alan Stubbs",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'nuno-valente',        nome: "Nuno Valente",        posicoes: ["LE"],        forca: 76 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LD","MC"],   forca: 80 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'lee-carsley',         nome: "Lee Carsley",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'leon-osman',          nome: "Leon Osman",          posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'tim-cahill',          nome: "Tim Cahill",          posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'manuel-fernandes',    nome: "Manuel Fernandes",    posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'andrew-johnson',      nome: "Andrew Johnson",      posicoes: ["ATA"],       forca: 81 },
      { id: 'james-mcfadden',      nome: "James McFadden",      posicoes: ["ATA","PE"],  forca: 78 },
      { id: 'victor-anichebe',     nome: "Victor Anichebe",     posicoes: ["ATA"],       forca: 74 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2008 (temporada 2007-08) — o bi do United (87 pts) sobre o Chelsea
  //  no saldo, e a 1ª final toda inglesa da Champions (United x Chelsea, Moscou).
  //  Ronaldo fez 31 gols na liga (recorde para meia/ponta) e ganhou a Bola de
  //  Ouro. Top-6: United (87), Chelsea (85), Arsenal (83), Liverpool (76),
  //  Everton (65), Aston Villa (60). Berbatov ainda no Tottenham (fora do top-6).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2008,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 87 },
      { id: 'tomasz-kuszczak',     nome: "Tomasz Kuszczak",     posicoes: ["GOL"],       forca: 77 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 88 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 88 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 85 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 80 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'owen-hargreaves',     nome: "Owen Hargreaves",     posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'anderson',            nome: "Anderson",            posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 79 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["PD","PE"],   forca: 93 },
      { id: 'nani',                nome: "Nani",                posicoes: ["PE","PD"],   forca: 81 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 81 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'carlos-tevez',        nome: "Carlos Tévez",        posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2008,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 88 },
      { id: 'paulo-ferreira',      nome: "Paulo Ferreira",      posicoes: ["LD"],        forca: 80 },
      { id: 'juliano-belletti',    nome: "Juliano Belletti",    posicoes: ["LD"],        forca: 80 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'ricardo-carvalho',    nome: "Ricardo Carvalho",    posicoes: ["ZAG"],       forca: 87 },
      { id: 'alex',                nome: "Alex",                posicoes: ["ZAG"],       forca: 83 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 88 },
      { id: 'wayne-bridge',        nome: "Wayne Bridge",        posicoes: ["LE"],        forca: 79 },
      { id: 'michael-essien',      nome: "Michael Essien",      posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'claude-makelele',     nome: "Claude Makélélé",     posicoes: ["VOL"],       forca: 84 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'michael-ballack',     nome: "Michael Ballack",     posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'florent-malouda',     nome: "Florent Malouda",     posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'shaun-wright-phillips', nome: "Shaun Wright-Phillips", posicoes: ["PD"],    forca: 79 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 88 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 84 },
      { id: 'salomon-kalou',       nome: "Salomon Kalou",       posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2008,
    clube: "Arsenal",
    jogadores: [
      { id: 'manuel-almunia',      nome: "Manuel Almunia",      posicoes: ["GOL"],       forca: 81 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 84 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 85 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 85 },
      { id: 'philippe-senderos',   nome: "Philippe Senderos",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 84 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'mathieu-flamini',     nome: "Mathieu Flamini",     posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'gilberto-silva',      nome: "Gilberto Silva",      posicoes: ["VOL"],       forca: 82 },
      { id: 'alexander-hleb',      nome: "Alexander Hleb",      posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'abou-diaby',          nome: "Abou Diaby",          posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'emmanuel-eboue',      nome: "Emmanuel Eboué",      posicoes: ["LD","PD"],   forca: 79 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 85 },
      { id: 'nicklas-bendtner',    nome: "Nicklas Bendtner",    posicoes: ["ATA"],       forca: 78 },
      { id: 'eduardo',             nome: "Eduardo",             posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2008,
    clube: "Liverpool",
    jogadores: [
      { id: 'jose-reina',          nome: "José Reina",          posicoes: ["GOL"],       forca: 87 },
      { id: 'steve-finnan',        nome: "Steve Finnan",        posicoes: ["LD"],        forca: 80 },
      { id: 'alvaro-arbeloa',      nome: "Álvaro Arbeloa",      posicoes: ["LD","LE"],   forca: 81 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'daniel-agger',        nome: "Daniel Agger",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'martin-skrtel',       nome: "Martin Škrtel",       posicoes: ["ZAG"],       forca: 81 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE"],        forca: 80 },
      { id: 'john-arne-riise',     nome: "John Arne Riise",     posicoes: ["LE"],        forca: 81 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'javier-mascherano',   nome: "Javier Mascherano",   posicoes: ["VOL"],       forca: 85 },
      { id: 'jermaine-pennant',    nome: "Jermaine Pennant",    posicoes: ["PD"],        forca: 78 },
      { id: 'yossi-benayoun',      nome: "Yossi Benayoun",      posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'dirk-kuyt',           nome: "Dirk Kuyt",           posicoes: ["ATA","PD"],  forca: 82 },
      { id: 'fernando-torres',     nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 89 },
      { id: 'peter-crouch',        nome: "Peter Crouch",        posicoes: ["ATA"],       forca: 80 },
      { id: 'ryan-babel',          nome: "Ryan Babel",          posicoes: ["PE","ATA"],  forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2008,
    clube: "Everton",
    jogadores: [
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 83 },
      { id: 'tony-hibbert',        nome: "Tony Hibbert",        posicoes: ["LD"],        forca: 77 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG","LE"],  forca: 83 },
      { id: 'joseph-yobo',         nome: "Joseph Yobo",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'phil-jagielka',       nome: "Phil Jagielka",       posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'leighton-baines',     nome: "Leighton Baines",     posicoes: ["LE"],        forca: 80 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LD","MC"],   forca: 80 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'lee-carsley',         nome: "Lee Carsley",         posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'leon-osman',          nome: "Leon Osman",          posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'tim-cahill',          nome: "Tim Cahill",          posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'steven-pienaar',      nome: "Steven Pienaar",      posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'andrew-johnson',      nome: "Andrew Johnson",      posicoes: ["ATA"],       forca: 80 },
      { id: 'yakubu',              nome: "Yakubu",              posicoes: ["ATA"],       forca: 83 },
      { id: 'victor-anichebe',     nome: "Victor Anichebe",     posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2008,
    clube: "Aston Villa",
    jogadores: [
      { id: 'scott-carson',        nome: "Scott Carson",        posicoes: ["GOL"],       forca: 79 },
      { id: 'craig-gardner',       nome: "Craig Gardner",       posicoes: ["LD","MC"],   forca: 76 },
      { id: 'martin-laursen',      nome: "Martin Laursen",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'zat-knight',          nome: "Zat Knight",          posicoes: ["ZAG"],       forca: 77 },
      { id: 'curtis-davies',       nome: "Curtis Davies",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'wilfred-bouma',       nome: "Wilfred Bouma",       posicoes: ["LE"],        forca: 78 },
      { id: 'nigel-reo-coker',     nome: "Nigel Reo-Coker",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","LE"],   forca: 84 },
      { id: 'stiliyan-petrov',     nome: "Stiliyan Petrov",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'gabriel-agbonlahor',  nome: "Gabriel Agbonlahor",  posicoes: ["ATA","PD"],  forca: 81 },
      { id: 'john-carew',          nome: "John Carew",          posicoes: ["ATA"],       forca: 82 },
      { id: 'marlon-harewood',     nome: "Marlon Harewood",     posicoes: ["ATA"],       forca: 76 },
      { id: 'shaun-maloney',       nome: "Shaun Maloney",       posicoes: ["MEI","PE"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2009 (temporada 2008-09) — o tri seguido do United (90 pts), último
  //  ano de Cristiano Ronaldo antes do Real Madrid. Top-6: United (90), Liverpool
  //  (86), Chelsea (83), Arsenal (72), Everton (63), Aston Villa (62).
  //  Melhor campanha do Liverpool na era Premier (86 pts, vice). Robinho foi para
  //  o City (fora do top-6). Arshavin chegou ao Arsenal em janeiro.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2009,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 88 },
      { id: 'ben-foster',          nome: "Ben Foster",          posicoes: ["GOL"],       forca: 78 },
      { id: 'wes-brown',           nome: "Wes Brown",           posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 88 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 89 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 86 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 79 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'rafael-da-silva',     nome: "Rafael",              posicoes: ["LD"],        forca: 78 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'anderson',            nome: "Anderson",            posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 81 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 81 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["PD","PE"],   forca: 93 },
      { id: 'nani',                nome: "Nani",                posicoes: ["PE","PD"],   forca: 81 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 90 },
      { id: 'carlos-tevez',        nome: "Carlos Tévez",        posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'dimitar-berbatov',    nome: "Dimitar Berbatov",    posicoes: ["ATA","MEI"], forca: 86 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2009,
    clube: "Liverpool",
    jogadores: [
      { id: 'jose-reina',          nome: "José Reina",          posicoes: ["GOL"],       forca: 87 },
      { id: 'alvaro-arbeloa',      nome: "Álvaro Arbeloa",      posicoes: ["LD","LE"],   forca: 81 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'martin-skrtel',       nome: "Martin Škrtel",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'daniel-agger',        nome: "Daniel Agger",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE"],        forca: 80 },
      { id: 'emiliano-insua',      nome: "Emiliano Insúa",      posicoes: ["LE"],        forca: 77 },
      { id: 'javier-mascherano',   nome: "Javier Mascherano",   posicoes: ["VOL"],       forca: 86 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["MC","VOL"],  forca: 87 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'dirk-kuyt',           nome: "Dirk Kuyt",           posicoes: ["ATA","PD"],  forca: 83 },
      { id: 'yossi-benayoun',      nome: "Yossi Benayoun",      posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'albert-riera',        nome: "Albert Riera",        posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'fernando-torres',     nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 90 },
      { id: 'ryan-babel',          nome: "Ryan Babel",          posicoes: ["PE","ATA"],  forca: 79 },
      { id: 'david-ngog',          nome: "David N'Gog",         posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2009,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 87 },
      { id: 'jose-bosingwa',       nome: "José Bosingwa",       posicoes: ["LD"],        forca: 82 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'ricardo-carvalho',    nome: "Ricardo Carvalho",    posicoes: ["ZAG"],       forca: 86 },
      { id: 'alex',                nome: "Alex",                posicoes: ["ZAG"],       forca: 83 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 88 },
      { id: 'michael-essien',      nome: "Michael Essien",      posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'michael-ballack',     nome: "Michael Ballack",     posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'deco',                nome: "Deco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'florent-malouda',     nome: "Florent Malouda",     posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'salomon-kalou',       nome: "Salomon Kalou",       posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 87 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2009,
    clube: "Arsenal",
    jogadores: [
      { id: 'manuel-almunia',      nome: "Manuel Almunia",      posicoes: ["GOL"],       forca: 80 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 84 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 84 },
      { id: 'mikael-silvestre',    nome: "Mikaël Silvestre",    posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 84 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'denilson',            nome: "Denílson",            posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'abou-diaby',          nome: "Abou Diaby",          posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'emmanuel-eboue',      nome: "Emmanuel Eboué",      posicoes: ["LD","PD"],   forca: 79 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD"],        forca: 82 },
      { id: 'andrey-arshavin',     nome: "Andrey Arshavin",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 86 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 84 },
      { id: 'nicklas-bendtner',    nome: "Nicklas Bendtner",    posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2009,
    clube: "Everton",
    jogadores: [
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 83 },
      { id: 'tony-hibbert',        nome: "Tony Hibbert",        posicoes: ["LD"],        forca: 77 },
      { id: 'phil-jagielka',       nome: "Phil Jagielka",       posicoes: ["ZAG","LD"],  forca: 82 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG","LE"],  forca: 83 },
      { id: 'joseph-yobo',         nome: "Joseph Yobo",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'leighton-baines',     nome: "Leighton Baines",     posicoes: ["LE"],        forca: 81 },
      { id: 'phil-neville',        nome: "Phil Neville",        posicoes: ["LD","MC"],   forca: 80 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'marouane-fellaini',   nome: "Marouane Fellaini",   posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'tim-cahill',          nome: "Tim Cahill",          posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'steven-pienaar',      nome: "Steven Pienaar",      posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'leon-osman',          nome: "Leon Osman",          posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 80 },
      { id: 'yakubu',              nome: "Yakubu",              posicoes: ["ATA"],       forca: 82 },
      { id: 'victor-anichebe',     nome: "Victor Anichebe",     posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2009,
    clube: "Aston Villa",
    jogadores: [
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 83 },
      { id: 'luke-young',          nome: "Luke Young",          posicoes: ["LD"],        forca: 78 },
      { id: 'martin-laursen',      nome: "Martin Laursen",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'curtis-davies',       nome: "Curtis Davies",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'carlos-cuellar',      nome: "Carlos Cuéllar",      posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'wilfred-bouma',       nome: "Wilfred Bouma",       posicoes: ["LE"],        forca: 77 },
      { id: 'nigel-reo-coker',     nome: "Nigel Reo-Coker",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","LE"],   forca: 85 },
      { id: 'stiliyan-petrov',     nome: "Stiliyan Petrov",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'stewart-downing',     nome: "Stewart Downing",     posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'gabriel-agbonlahor',  nome: "Gabriel Agbonlahor",  posicoes: ["ATA","PD"],  forca: 82 },
      { id: 'john-carew',          nome: "John Carew",          posicoes: ["ATA"],       forca: 82 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2010 (temporada 2009-10) — o Chelsea de Ancelotti campeão com 86 pts
  //  e RECORDE de 103 gols (primeiro time a passar de 100 na era Premier).
  //  Top-6: Chelsea (86), United (85), Arsenal (75), Tottenham (70), City (67),
  //  Aston Villa (64). Primeira vez do City recém-comprado no top-6.
  //  Valência (Wigan→United), Adebayor e Tévez foram para o City vindos de
  //  Arsenal/United — aparecem só no City.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2010,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 87 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'jose-bosingwa',       nome: "José Bosingwa",       posicoes: ["LD"],        forca: 81 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'alex',                nome: "Alex",                posicoes: ["ZAG"],       forca: 83 },
      { id: 'ricardo-carvalho',    nome: "Ricardo Carvalho",    posicoes: ["ZAG"],       forca: 85 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 88 },
      { id: 'yuri-zhirkov',        nome: "Yuri Zhirkov",        posicoes: ["LE","PE"],   forca: 81 },
      { id: 'michael-essien',      nome: "Michael Essien",      posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'michael-ballack',     nome: "Michael Ballack",     posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'deco',                nome: "Deco",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'florent-malouda',     nome: "Florent Malouda",     posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'joe-cole',            nome: "Joe Cole",            posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'salomon-kalou',       nome: "Salomon Kalou",       posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 88 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2010,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 86 },
      { id: 'tomasz-kuszczak',     nome: "Tomasz Kuszczak",     posicoes: ["GOL"],       forca: 77 },
      { id: 'rafael-da-silva',     nome: "Rafael",              posicoes: ["LD"],        forca: 80 },
      { id: 'gary-neville',        nome: "Gary Neville",        posicoes: ["LD"],        forca: 78 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 87 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 89 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 86 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 82 },
      { id: 'anderson',            nome: "Anderson",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["PD"],        forca: 83 },
      { id: 'nani',                nome: "Nani",                posicoes: ["PE","PD"],   forca: 82 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 81 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 91 },
      { id: 'dimitar-berbatov',    nome: "Dimitar Berbatov",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'michael-owen',        nome: "Michael Owen",        posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2010,
    clube: "Arsenal",
    jogadores: [
      { id: 'manuel-almunia',      nome: "Manuel Almunia",      posicoes: ["GOL"],       forca: 80 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 84 },
      { id: 'thomas-vermaelen',    nome: "Thomas Vermaelen",    posicoes: ["ZAG"],       forca: 84 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 83 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 83 },
      { id: 'sol-campbell',        nome: "Sol Campbell",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'alex-song',           nome: "Alex Song",           posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'abou-diaby',          nome: "Abou Diaby",          posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'andrey-arshavin',     nome: "Andrey Arshavin",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD"],        forca: 82 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 86 },
      { id: 'nicklas-bendtner',    nome: "Nicklas Bendtner",    posicoes: ["ATA"],       forca: 79 },
      { id: 'eduardo',             nome: "Eduardo",             posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2010,
    clube: "Tottenham",
    jogadores: [
      { id: 'heurelho-gomes',      nome: "Heurelho Gomes",      posicoes: ["GOL"],       forca: 81 },
      { id: 'alan-hutton',         nome: "Alan Hutton",         posicoes: ["LD"],        forca: 78 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'ledley-king',         nome: "Ledley King",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'jonathan-woodgate',   nome: "Jonathan Woodgate",   posicoes: ["ZAG"],       forca: 80 },
      { id: 'benoit-assou-ekotto', nome: "Benoît Assou-Ekotto", posicoes: ["LE"],        forca: 80 },
      { id: 'vedran-corluka',      nome: "Vedran Ćorluka",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'luka-modric',         nome: "Luka Modrić",         posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'tom-huddlestone',     nome: "Tom Huddlestone",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'wilson-palacios',     nome: "Wilson Palacios",     posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 82 },
      { id: 'gareth-bale',         nome: "Gareth Bale",         posicoes: ["PE","LE"],   forca: 83 },
      { id: 'niko-kranjcar',       nome: "Niko Kranjčar",       posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'jermain-defoe',       nome: "Jermain Defoe",       posicoes: ["ATA"],       forca: 83 },
      { id: 'peter-crouch',        nome: "Peter Crouch",        posicoes: ["ATA"],       forca: 81 },
      { id: 'robbie-keane',        nome: "Robbie Keane",        posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'roman-pavlyuchenko',  nome: "Roman Pavlyuchenko",  posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2010,
    clube: "Manchester City",
    jogadores: [
      { id: 'shay-given',          nome: "Shay Given",          posicoes: ["GOL"],       forca: 84 },
      { id: 'micah-richards',      nome: "Micah Richards",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'wayne-bridge',        nome: "Wayne Bridge",        posicoes: ["LE"],        forca: 79 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 81 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","LE"],   forca: 84 },
      { id: 'nigel-de-jong',       nome: "Nigel de Jong",       posicoes: ["VOL"],       forca: 82 },
      { id: 'stephen-ireland',     nome: "Stephen Ireland",     posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'shaun-wright-phillips', nome: "Shaun Wright-Phillips", posicoes: ["PD"],    forca: 80 },
      { id: 'craig-bellamy',       nome: "Craig Bellamy",       posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'martin-petrov',       nome: "Martin Petrov",       posicoes: ["PE"],        forca: 79 },
      { id: 'carlos-tevez',        nome: "Carlos Tévez",        posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 82 },
      { id: 'roque-santa-cruz',    nome: "Roque Santa Cruz",    posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2010,
    clube: "Aston Villa",
    jogadores: [
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 82 },
      { id: 'luke-young',          nome: "Luke Young",          posicoes: ["LD"],        forca: 78 },
      { id: 'richard-dunne',       nome: "Richard Dunne",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'james-collins',       nome: "James Collins",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'carlos-cuellar',      nome: "Carlos Cuéllar",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'stephen-warnock',     nome: "Stephen Warnock",     posicoes: ["LE"],        forca: 78 },
      { id: 'stiliyan-petrov',     nome: "Stiliyan Petrov",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'nigel-reo-coker',     nome: "Nigel Reo-Coker",     posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'stewart-downing',     nome: "Stewart Downing",     posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","MD"],   forca: 83 },
      { id: 'gabriel-agbonlahor',  nome: "Gabriel Agbonlahor",  posicoes: ["ATA","PD"],  forca: 81 },
      { id: 'john-carew',          nome: "John Carew",          posicoes: ["ATA"],       forca: 81 },
      { id: 'emile-heskey',        nome: "Emile Heskey",        posicoes: ["ATA"],       forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2011 (temporada 2010-11) — o United conquistou o 19º título e
  //  ultrapassou o Liverpool como maior campeão inglês (80 pts). Top-6: United
  //  (80), Chelsea (71), City (71), Arsenal (68), Tottenham (62), Liverpool (58).
  //  O City ganhou a FA Cup (1º troféu da era Abu Dhabi). Suárez chegou ao
  //  Liverpool e Andy Carroll saiu do Newcastle para lá em janeiro. David Silva
  //  e Yaya Touré no 1º ano de City.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2011,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 85 },
      { id: 'rafael-da-silva',     nome: "Rafael",              posicoes: ["LD"],        forca: 81 },
      { id: 'john-oshea',          nome: "John O'Shea",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 86 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 89 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 85 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 82 },
      { id: 'anderson',            nome: "Anderson",            posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["PD"],        forca: 83 },
      { id: 'nani',                nome: "Nani",                posicoes: ["PE","PD"],   forca: 84 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 80 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'dimitar-berbatov',    nome: "Dimitar Berbatov",    posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'javier-hernandez',    nome: "Javier Hernández",    posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2011,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 87 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'jose-bosingwa',       nome: "José Bosingwa",       posicoes: ["LD"],        forca: 80 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 87 },
      { id: 'alex',                nome: "Alex",                posicoes: ["ZAG"],       forca: 82 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 87 },
      { id: 'paulo-ferreira',      nome: "Paulo Ferreira",      posicoes: ["LD"],        forca: 78 },
      { id: 'michael-essien',      nome: "Michael Essien",      posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'ramires',             nome: "Ramires",             posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'florent-malouda',     nome: "Florent Malouda",     posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'yossi-benayoun',      nome: "Yossi Benayoun",      posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'salomon-kalou',       nome: "Salomon Kalou",       posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 86 },
      { id: 'nicolas-anelka',      nome: "Nicolas Anelka",      posicoes: ["ATA"],       forca: 83 },
      { id: 'fernando-torres',     nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2011,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart',            nome: "Joe Hart",            posicoes: ["GOL"],       forca: 85 },
      { id: 'micah-richards',      nome: "Micah Richards",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'kolo-toure',          nome: "Kolo Touré",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 82 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE"],        forca: 81 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 87 },
      { id: 'nigel-de-jong',       nome: "Nigel de Jong",       posicoes: ["VOL"],       forca: 82 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","MD"],   forca: 82 },
      { id: 'adam-johnson',        nome: "Adam Johnson",        posicoes: ["PD","PE"],   forca: 80 },
      { id: 'carlos-tevez',        nome: "Carlos Tévez",        posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'mario-balotelli',     nome: "Mario Balotelli",     posicoes: ["ATA"],       forca: 83 },
      { id: 'edin-dzeko',          nome: "Edin Džeko",          posicoes: ["ATA"],       forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2011,
    clube: "Arsenal",
    jogadores: [
      { id: 'wojciech-szczesny',   nome: "Wojciech Szczęsny",   posicoes: ["GOL"],       forca: 81 },
      { id: 'manuel-almunia',      nome: "Manuel Almunia",      posicoes: ["GOL"],       forca: 78 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 84 },
      { id: 'thomas-vermaelen',    nome: "Thomas Vermaelen",    posicoes: ["ZAG"],       forca: 84 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 82 },
      { id: 'johan-djourou',       nome: "Johan Djourou",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 83 },
      { id: 'alex-song',           nome: "Alex Song",           posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'jack-wilshere',       nome: "Jack Wilshere",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'andrey-arshavin',     nome: "Andrey Arshavin",     posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD"],        forca: 83 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'marouane-chamakh',    nome: "Marouane Chamakh",    posicoes: ["ATA"],       forca: 79 },
      { id: 'nicklas-bendtner',    nome: "Nicklas Bendtner",    posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2011,
    clube: "Tottenham",
    jogadores: [
      { id: 'heurelho-gomes',      nome: "Heurelho Gomes",      posicoes: ["GOL"],       forca: 80 },
      { id: 'alan-hutton',         nome: "Alan Hutton",         posicoes: ["LD"],        forca: 78 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'ledley-king',         nome: "Ledley King",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'benoit-assou-ekotto', nome: "Benoît Assou-Ekotto", posicoes: ["LE"],        forca: 80 },
      { id: 'vedran-corluka',      nome: "Vedran Ćorluka",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'luka-modric',         nome: "Luka Modrić",         posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'tom-huddlestone',     nome: "Tom Huddlestone",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'wilson-palacios',     nome: "Wilson Palacios",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'rafael-van-der-vaart', nome: "Rafael van der Vaart", posicoes: ["MEI"],     forca: 85 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 82 },
      { id: 'gareth-bale',         nome: "Gareth Bale",         posicoes: ["PE","LE"],   forca: 86 },
      { id: 'jermain-defoe',       nome: "Jermain Defoe",       posicoes: ["ATA"],       forca: 82 },
      { id: 'peter-crouch',        nome: "Peter Crouch",        posicoes: ["ATA"],       forca: 80 },
      { id: 'roman-pavlyuchenko',  nome: "Roman Pavlyuchenko",  posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2011,
    clube: "Liverpool",
    jogadores: [
      { id: 'jose-reina',          nome: "José Reina",          posicoes: ["GOL"],       forca: 86 },
      { id: 'martin-kelly',        nome: "Martin Kelly",        posicoes: ["LD"],        forca: 76 },
      { id: 'jamie-carragher',     nome: "Jamie Carragher",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'martin-skrtel',       nome: "Martin Škrtel",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'daniel-agger',        nome: "Daniel Agger",        posicoes: ["ZAG"],       forca: 83 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE"],        forca: 79 },
      { id: 'glen-johnson',        nome: "Glen Johnson",        posicoes: ["LD"],        forca: 82 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'lucas-leiva',         nome: "Lucas Leiva",         posicoes: ["VOL"],       forca: 82 },
      { id: 'raul-meireles',       nome: "Raul Meireles",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'dirk-kuyt',           nome: "Dirk Kuyt",           posicoes: ["ATA","PD"],  forca: 82 },
      { id: 'maxi-rodriguez',      nome: "Maxi Rodríguez",      posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'luis-suarez',         nome: "Luis Suárez",         posicoes: ["ATA"],       forca: 85 },
      { id: 'andy-carroll',        nome: "Andy Carroll",        posicoes: ["ATA"],       forca: 80 },
      { id: 'david-ngog',          nome: "David N'Gog",         posicoes: ["ATA"],       forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2012 (temporada 2011-12) — o CITY campeão no último lance ("Agüerooo",
  //  93º minuto contra o QPR), no saldo sobre o United, ambos com 89 pts. 1º
  //  título do City em 44 anos. Top-6: City (89), United (89), Arsenal (70),
  //  Tottenham (69), Newcastle (65), Chelsea (64). Chelsea ganhou a Champions.
  //  Papiss Cissé chegou ao Newcastle em janeiro; Ba já estava lá.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2012,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart',            nome: "Joe Hart",            posicoes: ["GOL"],       forca: 86 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 83 },
      { id: 'micah-richards',      nome: "Micah Richards",      posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 88 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 82 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE"],        forca: 81 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 88 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'nigel-de-jong',       nome: "Nigel de Jong",       posicoes: ["VOL"],       forca: 81 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 88 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","MD"],   forca: 82 },
      { id: 'adam-johnson',        nome: "Adam Johnson",        posicoes: ["PD","PE"],   forca: 79 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 89 },
      { id: 'carlos-tevez',        nome: "Carlos Tévez",        posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'mario-balotelli',     nome: "Mario Balotelli",     posicoes: ["ATA"],       forca: 83 },
      { id: 'edin-dzeko',          nome: "Edin Džeko",          posicoes: ["ATA"],       forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2012,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 82 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["PD","LD"],   forca: 84 },
      { id: 'rafael-da-silva',     nome: "Rafael",              posicoes: ["LD"],        forca: 81 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 87 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 84 },
      { id: 'phil-jones',          nome: "Phil Jones",          posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'jonny-evans',         nome: "Jonny Evans",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'tom-cleverley',       nome: "Tom Cleverley",       posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'darren-fletcher',     nome: "Darren Fletcher",     posicoes: ["MC"],        forca: 80 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'nani',                nome: "Nani",                posicoes: ["PE","PD"],   forca: 83 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'park-ji-sung',        nome: "Park Ji-sung",        posicoes: ["PE","MC"],   forca: 79 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'javier-hernandez',    nome: "Javier Hernández",    posicoes: ["ATA"],       forca: 82 },
      { id: 'dimitar-berbatov',    nome: "Dimitar Berbatov",    posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2012,
    clube: "Arsenal",
    jogadores: [
      { id: 'wojciech-szczesny',   nome: "Wojciech Szczęsny",   posicoes: ["GOL"],       forca: 82 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 83 },
      { id: 'per-mertesacker',     nome: "Per Mertesacker",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'thomas-vermaelen',    nome: "Thomas Vermaelen",    posicoes: ["ZAG"],       forca: 83 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 83 },
      { id: 'kieran-gibbs',        nome: "Kieran Gibbs",        posicoes: ["LE"],        forca: 79 },
      { id: 'andre-santos',        nome: "André Santos",        posicoes: ["LE"],        forca: 77 },
      { id: 'alex-song',           nome: "Alex Song",           posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD"],        forca: 84 },
      { id: 'gervinho',            nome: "Gervinho",            posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'yossi-benayoun',      nome: "Yossi Benayoun",      posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 89 },
      { id: 'ju-young-park',       nome: "Park Chu-young",      posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2012,
    clube: "Tottenham",
    jogadores: [
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 81 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 82 },
      { id: 'benoit-assou-ekotto', nome: "Benoît Assou-Ekotto", posicoes: ["LE"],        forca: 80 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'ledley-king',         nome: "Ledley King",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'younes-kaboul',       nome: "Younès Kaboul",       posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'luka-modric',         nome: "Luka Modrić",         posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'scott-parker',        nome: "Scott Parker",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'sandro',              nome: "Sandro",              posicoes: ["VOL"],       forca: 80 },
      { id: 'gareth-bale',         nome: "Gareth Bale",         posicoes: ["PE","LE"],   forca: 88 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 82 },
      { id: 'rafael-van-der-vaart', nome: "Rafael van der Vaart", posicoes: ["MEI"],     forca: 84 },
      { id: 'jermain-defoe',       nome: "Jermain Defoe",       posicoes: ["ATA"],       forca: 82 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 83 },
      { id: 'louis-saha',          nome: "Louis Saha",          posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2012,
    clube: "Newcastle United",
    jogadores: [
      { id: 'tim-krul',            nome: "Tim Krul",            posicoes: ["GOL"],       forca: 82 },
      { id: 'danny-simpson',       nome: "Danny Simpson",       posicoes: ["LD"],        forca: 77 },
      { id: 'fabricio-coloccini',  nome: "Fabricio Coloccini",  posicoes: ["ZAG"],       forca: 83 },
      { id: 'steven-taylor',       nome: "Steven Taylor",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'davide-santon',       nome: "Davide Santon",       posicoes: ["LE","LD"],   forca: 78 },
      { id: 'ryan-taylor',         nome: "Ryan Taylor",         posicoes: ["LE","MD"],   forca: 76 },
      { id: 'yohan-cabaye',        nome: "Yohan Cabaye",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'cheick-tiote',        nome: "Cheick Tioté",        posicoes: ["VOL"],       forca: 81 },
      { id: 'jonas-gutierrez',     nome: "Jonás Gutiérrez",     posicoes: ["PE","MD"],   forca: 79 },
      { id: 'hatem-ben-arfa',      nome: "Hatem Ben Arfa",      posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'gabriel-obertan',     nome: "Gabriel Obertan",     posicoes: ["PD","PE"],   forca: 76 },
      { id: 'demba-ba',            nome: "Demba Ba",            posicoes: ["ATA"],       forca: 82 },
      { id: 'papiss-cisse',        nome: "Papiss Cissé",        posicoes: ["ATA"],       forca: 82 },
      { id: 'leon-best',           nome: "Leon Best",           posicoes: ["ATA"],       forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2012,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 87 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'jose-bosingwa',       nome: "José Bosingwa",       posicoes: ["LD"],        forca: 80 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 86 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'gary-cahill',         nome: "Gary Cahill",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 86 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'ramires',             nome: "Ramires",             posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'raul-meireles',       nome: "Raul Meireles",       posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'florent-malouda',     nome: "Florent Malouda",     posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'daniel-sturridge',    nome: "Daniel Sturridge",    posicoes: ["ATA","PD"],  forca: 82 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 85 },
      { id: 'fernando-torres',     nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 82 },
      { id: 'salomon-kalou',       nome: "Salomon Kalou",       posicoes: ["ATA","PE"],  forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2013 (temporada 2012-13) — o 20º título do United (89 pts), na
  //  despedida de Sir Alex Ferguson após 26 anos. Van Persie foi do Arsenal para
  //  o United e foi artilheiro (26 gols) — aparece só no United. Top-6: United
  //  (89), City (78), Chelsea (75), Arsenal (73), Tottenham (72), Everton (63).
  //  Bale teve sua melhor temporada antes de ir ao Real. Michu brilhou no Swansea
  //  (fora do top-6). Últimos jogos de Scholes.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2013,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 84 },
      { id: 'rafael-da-silva',     nome: "Rafael",              posicoes: ["LD"],        forca: 82 },
      { id: 'phil-jones',          nome: "Phil Jones",          posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'rio-ferdinand',       nome: "Rio Ferdinand",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'nemanja-vidic',       nome: "Nemanja Vidić",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'patrice-evra',        nome: "Patrice Evra",        posicoes: ["LE"],        forca: 83 },
      { id: 'jonny-evans',         nome: "Jonny Evans",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'tom-cleverley',       nome: "Tom Cleverley",       posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'anderson',            nome: "Anderson",            posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'ryan-giggs',          nome: "Ryan Giggs",          posicoes: ["MC","PE"],   forca: 80 },
      { id: 'paul-scholes',        nome: "Paul Scholes",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["PD","LD"],   forca: 82 },
      { id: 'nani',                nome: "Nani",                posicoes: ["PE","PD"],   forca: 81 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'shinji-kagawa',       nome: "Shinji Kagawa",       posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA","PE"],  forca: 89 },
      { id: 'javier-hernandez',    nome: "Javier Hernández",    posicoes: ["ATA"],       forca: 81 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2013,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart',            nome: "Joe Hart",            posicoes: ["GOL"],       forca: 85 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 84 },
      { id: 'micah-richards',      nome: "Micah Richards",      posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 87 },
      { id: 'matija-nastasic',     nome: "Matija Nastasić",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'joleon-lescott',      nome: "Joleon Lescott",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 82 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE"],        forca: 80 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 88 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'javi-garcia',         nome: "Javi García",         posicoes: ["VOL"],       forca: 79 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","MD"],   forca: 82 },
      { id: 'david-pizarro',       nome: "David Pizarro",       posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 89 },
      { id: 'carlos-tevez',        nome: "Carlos Tévez",        posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'edin-dzeko',          nome: "Edin Džeko",          posicoes: ["ATA"],       forca: 83 },
      { id: 'mario-balotelli',     nome: "Mario Balotelli",     posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2013,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 86 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LD","LE"],   forca: 82 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 84 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'gary-cahill',         nome: "Gary Cahill",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 85 },
      { id: 'ramires',             nome: "Ramires",             posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PE"],  forca: 86 },
      { id: 'eden-hazard',         nome: "Eden Hazard",         posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'oscar',               nome: "Oscar",               posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'victor-moses',        nome: "Victor Moses",        posicoes: ["PD","PE"],   forca: 79 },
      { id: 'fernando-torres',     nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 81 },
      { id: 'demba-ba',            nome: "Demba Ba",            posicoes: ["ATA"],       forca: 80 },
      { id: 'daniel-sturridge',    nome: "Daniel Sturridge",    posicoes: ["ATA","PD"],  forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2013,
    clube: "Arsenal",
    jogadores: [
      { id: 'wojciech-szczesny',   nome: "Wojciech Szczęsny",   posicoes: ["GOL"],       forca: 82 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 82 },
      { id: 'per-mertesacker',     nome: "Per Mertesacker",     posicoes: ["ZAG"],       forca: 84 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'thomas-vermaelen',    nome: "Thomas Vermaelen",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'kieran-gibbs',        nome: "Kieran Gibbs",        posicoes: ["LE"],        forca: 80 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE"],        forca: 80 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'jack-wilshere',       nome: "Jack Wilshere",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'santi-cazorla',       nome: "Santi Cazorla",       posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD","ATA"],  forca: 84 },
      { id: 'lukas-podolski',      nome: "Lukas Podolski",      posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'gervinho',            nome: "Gervinho",            posicoes: ["PE","ATA"],  forca: 79 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 82 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2013,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 84 },
      { id: 'brad-friedel',        nome: "Brad Friedel",        posicoes: ["GOL"],       forca: 78 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 82 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'william-gallas',      nome: "William Gallas",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'benoit-assou-ekotto', nome: "Benoît Assou-Ekotto", posicoes: ["LE"],        forca: 79 },
      { id: 'kyle-naughton',       nome: "Kyle Naughton",       posicoes: ["LD","LE"],   forca: 76 },
      { id: 'moussa-dembele',      nome: "Mousa Dembélé"     ,      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'sandro',              nome: "Sandro",              posicoes: ["VOL"],       forca: 81 },
      { id: 'scott-parker',        nome: "Scott Parker",        posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'gylfi-sigurdsson',    nome: "Gylfi Sigurðsson",    posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 82 },
      { id: 'gareth-bale',         nome: "Gareth Bale",         posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'jermain-defoe',       nome: "Jermain Defoe",       posicoes: ["ATA"],       forca: 82 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 81 },
      { id: 'clint-dempsey',       nome: "Clint Dempsey",       posicoes: ["MEI","ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2013,
    clube: "Everton",
    jogadores: [
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 82 },
      { id: 'seamus-coleman',      nome: "Séamus Coleman",      posicoes: ["LD"],        forca: 81 },
      { id: 'phil-jagielka',       nome: "Phil Jagielka",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'sylvain-distin',      nome: "Sylvain Distin",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'leighton-baines',     nome: "Leighton Baines",     posicoes: ["LE"],        forca: 84 },
      { id: 'john-heitinga',       nome: "John Heitinga",       posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'marouane-fellaini',   nome: "Marouane Fellaini",   posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'leon-osman',          nome: "Leon Osman",          posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'darron-gibson',       nome: "Darron Gibson",       posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'steven-pienaar',      nome: "Steven Pienaar",      posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'kevin-mirallas',      nome: "Kevin Mirallas",      posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'nikica-jelavic',      nome: "Nikica Jelavić",      posicoes: ["ATA"],       forca: 80 },
      { id: 'victor-anichebe',     nome: "Victor Anichebe",     posicoes: ["ATA"],       forca: 77 },
      { id: 'steven-naismith',     nome: "Steven Naismith",     posicoes: ["ATA","MEI"], forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2014 (temporada 2013-14) — o City de Pellegrini campeão (86 pts),
  //  com o Liverpool de Suárez e Sturridge (o "SAS") em 2º após quase quebrar o
  //  jejum ("we go again" / o escorregão de Gerrard). Suárez fez 31 gols.
  //  Top-6: City (86), Liverpool (84), Chelsea (82), Arsenal (79), Everton (72),
  //  Tottenham (69). Özil chegou ao Arsenal (recorde do clube); Mourinho voltou
  //  ao Chelsea. Eriksen e Lamela no 1º ano do Tottenham pós-Bale.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2014,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart',            nome: "Joe Hart",            posicoes: ["GOL"],       forca: 84 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 84 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 87 },
      { id: 'martin-demichelis',   nome: "Martín Demichelis",   posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'matija-nastasic',     nome: "Matija Nastasić",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 82 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE"],        forca: 81 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 81 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 88 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'javi-garcia',         nome: "Javi García",         posicoes: ["VOL"],       forca: 79 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","MD"],   forca: 82 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD"],        forca: 81 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 90 },
      { id: 'edin-dzeko',          nome: "Edin Džeko",          posicoes: ["ATA"],       forca: 84 },
      { id: 'alvaro-negredo',      nome: "Álvaro Negredo",      posicoes: ["ATA"],       forca: 82 },
      { id: 'stevan-jovetic',      nome: "Stevan Jovetić",      posicoes: ["ATA","MEI"], forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2014,
    clube: "Liverpool",
    jogadores: [
      { id: 'simon-mignolet',      nome: "Simon Mignolet",      posicoes: ["GOL"],       forca: 81 },
      { id: 'glen-johnson',        nome: "Glen Johnson",        posicoes: ["LD"],        forca: 80 },
      { id: 'martin-skrtel',       nome: "Martin Škrtel",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'mamadou-sakho',       nome: "Mamadou Sakho",       posicoes: ["ZAG"],       forca: 81 },
      { id: 'daniel-agger',        nome: "Daniel Agger",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'jon-flanagan',        nome: "Jon Flanagan",        posicoes: ["LE","LD"],   forca: 76 },
      { id: 'aly-cissokho',        nome: "Aly Cissokho",        posicoes: ["LE"],        forca: 77 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'lucas-leiva',         nome: "Lucas Leiva",         posicoes: ["VOL"],       forca: 80 },
      { id: 'philippe-coutinho',   nome: "Philippe Coutinho",   posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 82 },
      { id: 'luis-suarez',         nome: "Luis Suárez",         posicoes: ["ATA"],       forca: 90 },
      { id: 'daniel-sturridge',    nome: "Daniel Sturridge",    posicoes: ["ATA","PD"],  forca: 85 },
      { id: 'jordon-ibe',          nome: "Jordon Ibe",          posicoes: ["PD","PE"],   forca: 74 },
      { id: 'victor-moses',        nome: "Victor Moses",        posicoes: ["PD","PE"],   forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2014,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 85 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LD","LE"],   forca: 84 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 84 },
      { id: 'gary-cahill',         nome: "Gary Cahill",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'ashley-cole',         nome: "Ashley Cole",         posicoes: ["LE"],        forca: 83 },
      { id: 'nemanja-matic',       nome: "Nemanja Matić",       posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'ramires',             nome: "Ramires",             posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'frank-lampard',       nome: "Frank Lampard",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'eden-hazard',         nome: "Eden Hazard",         posicoes: ["PE","MEI"],  forca: 88 },
      { id: 'oscar',               nome: "Oscar",               posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'willian',             nome: "Willian",             posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'andre-schurrle',      nome: "André Schürrle",      posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'samuel-etoo',         nome: "Samuel Eto'o",        posicoes: ["ATA"],       forca: 82 },
      { id: 'fernando-torres',     nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 79 },
      { id: 'demba-ba',            nome: "Demba Ba",            posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2014,
    clube: "Arsenal",
    jogadores: [
      { id: 'wojciech-szczesny',   nome: "Wojciech Szczęsny",   posicoes: ["GOL"],       forca: 83 },
      { id: 'carl-jenkinson',      nome: "Carl Jenkinson",      posicoes: ["LD"],        forca: 76 },
      { id: 'per-mertesacker',     nome: "Per Mertesacker",     posicoes: ["ZAG"],       forca: 84 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'thomas-vermaelen',    nome: "Thomas Vermaelen",    posicoes: ["ZAG"],       forca: 81 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE"],        forca: 81 },
      { id: 'kieran-gibbs',        nome: "Kieran Gibbs",        posicoes: ["LE"],        forca: 80 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'mathieu-flamini',     nome: "Mathieu Flamini",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'jack-wilshere',       nome: "Jack Wilshere",       posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'mesut-ozil',          nome: "Mesut Özil",          posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'santi-cazorla',       nome: "Santi Cazorla",       posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'tomas-rosicky',       nome: "Tomáš Rosický",       posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'lukas-podolski',      nome: "Lukas Podolski",      posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2014,
    clube: "Everton",
    jogadores: [
      { id: 'tim-howard',          nome: "Tim Howard",          posicoes: ["GOL"],       forca: 82 },
      { id: 'seamus-coleman',      nome: "Séamus Coleman",      posicoes: ["LD"],        forca: 83 },
      { id: 'phil-jagielka',       nome: "Phil Jagielka",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'sylvain-distin',      nome: "Sylvain Distin",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'leighton-baines',     nome: "Leighton Baines",     posicoes: ["LE"],        forca: 84 },
      { id: 'gareth-barry',        nome: "Gareth Barry",        posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'james-mccarthy',      nome: "James McCarthy",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'ross-barkley',        nome: "Ross Barkley",        posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'kevin-mirallas',      nome: "Kevin Mirallas",      posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'steven-pienaar',      nome: "Steven Pienaar",      posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'gerard-deulofeu',     nome: "Gerard Deulofeu",     posicoes: ["PD","PE"],   forca: 78 },
      { id: 'romelu-lukaku',       nome: "Romelu Lukaku",       posicoes: ["ATA"],       forca: 82 },
      { id: 'steven-naismith',     nome: "Steven Naismith",     posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'leon-osman',          nome: "Leon Osman",          posicoes: ["MEI","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2014,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 85 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 82 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'younes-kaboul',       nome: "Younès Kaboul",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'michael-dawson',      nome: "Michael Dawson",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'danny-rose',          nome: "Danny Rose",          posicoes: ["LE"],        forca: 79 },
      { id: 'kyle-naughton',       nome: "Kyle Naughton",       posicoes: ["LD","LE"],   forca: 76 },
      { id: 'sandro',              nome: "Sandro",              posicoes: ["VOL"],       forca: 80 },
      { id: 'moussa-dembele',      nome: "Mousa Dembélé"     ,      posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'paulinho',            nome: "Paulinho",            posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'christian-eriksen',   nome: "Christian Eriksen",   posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'aaron-lennon',        nome: "Aaron Lennon",        posicoes: ["PD"],        forca: 80 },
      { id: 'erik-lamela',         nome: "Erik Lamela",         posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'nacer-chadli',        nome: "Nacer Chadli",        posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'gylfi-sigurdsson',    nome: "Gylfi Sigurðsson",    posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'roberto-soldado',     nome: "Roberto Soldado",     posicoes: ["ATA"],       forca: 81 },
      { id: 'emmanuel-adebayor',   nome: "Emmanuel Adebayor",   posicoes: ["ATA"],       forca: 80 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2015 (temporada 2014-15) — o Chelsea de Mourinho campeão (87 pts) na
  //  2ª passagem, liderando do começo ao fim. Top-6: Chelsea (87), City (79),
  //  Arsenal (75), United (70), Tottenham (64), Liverpool (62). Ano de estreia
  //  de Diego Costa, Fàbregas e Alexis (que voltou ao acervo pelo Arsenal).
  //  Ángel Di María e Herrera chegaram ao United sob Van Gaal; Suárez saiu do
  //  Liverpool para o Barça, então some daqui.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2015,
    clube: "Chelsea",
    jogadores: [
      { id: 'thibaut-courtois',    nome: "Thibaut Courtois",    posicoes: ["GOL"],       forca: 86 },
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 84 },
      { id: 'branislav-ivanovic',  nome: "Branislav Ivanović",  posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LE","LD"],   forca: 85 },
      { id: 'john-terry',          nome: "John Terry",          posicoes: ["ZAG"],       forca: 85 },
      { id: 'gary-cahill',         nome: "Gary Cahill",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'kurt-zouma',          nome: "Kurt Zouma",          posicoes: ["ZAG"],       forca: 79 },
      { id: 'filipe-luis',         nome: "Filipe Luís",         posicoes: ["LE"],        forca: 82 },
      { id: 'nemanja-matic',       nome: "Nemanja Matić",       posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'ramires',             nome: "Ramires",             posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'jon-obi-mikel',       nome: "John Obi Mikel",      posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'eden-hazard',         nome: "Eden Hazard",         posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'oscar',               nome: "Oscar",               posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'willian',             nome: "Willian",             posicoes: ["PD","MEI"],  forca: 84 },
      { id: 'andre-schurrle',      nome: "André Schürrle",      posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'diego-costa',         nome: "Diego Costa",         posicoes: ["ATA"],       forca: 86 },
      { id: 'loic-remy',           nome: "Loïc Rémy",           posicoes: ["ATA"],       forca: 80 },
      { id: 'didier-drogba',       nome: "Didier Drogba",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2015,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart',            nome: "Joe Hart",            posicoes: ["GOL"],       forca: 85 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 83 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'eliaquim-mangala',    nome: "Eliaquim Mangala",    posicoes: ["ZAG"],       forca: 80 },
      { id: 'martin-demichelis',   nome: "Martín Demichelis",   posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 81 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 80 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE"],        forca: 80 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'fernando-reges',      nome: "Fernando",            posicoes: ["VOL"],       forca: 80 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'samir-nasri',         nome: "Samir Nasri",         posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","MD"],   forca: 82 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD"],        forca: 80 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 90 },
      { id: 'edin-dzeko',          nome: "Edin Džeko",          posicoes: ["ATA"],       forca: 83 },
      { id: 'stevan-jovetic',      nome: "Stevan Jovetić",      posicoes: ["ATA","MEI"], forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2015,
    clube: "Arsenal",
    jogadores: [
      { id: 'wojciech-szczesny',   nome: "Wojciech Szczęsny",   posicoes: ["GOL"],       forca: 82 },
      { id: 'david-ospina',        nome: "David Ospina",        posicoes: ["GOL"],       forca: 81 },
      { id: 'hector-bellerin',     nome: "Héctor Bellerín",     posicoes: ["LD"],        forca: 80 },
      { id: 'per-mertesacker',     nome: "Per Mertesacker",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'kieran-gibbs',        nome: "Kieran Gibbs",        posicoes: ["LE"],        forca: 79 },
      { id: 'francis-coquelin',    nome: "Francis Coquelin",    posicoes: ["VOL"],       forca: 81 },
      { id: 'mikel-arteta',        nome: "Mikel Arteta",        posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'santi-cazorla',       nome: "Santi Cazorla",       posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'mesut-ozil',          nome: "Mesut Özil",          posicoes: ["MEI","PE"],  forca: 86 },
      { id: 'jack-wilshere',       nome: "Jack Wilshere",       posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'alexis-sanchez',      nome: "Alexis Sánchez",      posicoes: ["PE","ATA"],  forca: 87 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 80 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2015,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 88 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["LD","PD"],   forca: 81 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'phil-jones',          nome: "Phil Jones",          posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'marcos-rojo',         nome: "Marcos Rojo",         posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 80 },
      { id: 'daley-blind',         nome: "Daley Blind",         posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'ander-herrera',       nome: "Ander Herrera",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'marouane-fellaini',   nome: "Marouane Fellaini",   posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'angel-di-maria',      nome: "Ángel Di María",      posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["PE","LE"],   forca: 79 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'robin-van-persie',    nome: "Robin van Persie",    posicoes: ["ATA"],       forca: 83 },
      { id: 'radamel-falcao',      nome: "Radamel Falcao",      posicoes: ["ATA"],       forca: 80 },
      { id: 'javier-hernandez',    nome: "Javier Hernández",    posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2015,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 85 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 82 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'federico-fazio',      nome: "Federico Fazio",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'danny-rose',          nome: "Danny Rose",          posicoes: ["LE"],        forca: 80 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["LE"],        forca: 78 },
      { id: 'nabil-bentaleb',      nome: "Nabil Bentaleb",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'ryan-mason',          nome: "Ryan Mason",          posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'moussa-dembele',      nome: "Mousa Dembélé"     ,      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'christian-eriksen',   nome: "Christian Eriksen",   posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'nacer-chadli',        nome: "Nacer Chadli",        posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'erik-lamela',         nome: "Erik Lamela",         posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'andros-townsend',     nome: "Andros Townsend",     posicoes: ["PD","PE"],   forca: 78 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 84 },
      { id: 'roberto-soldado',     nome: "Roberto Soldado",     posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2015,
    clube: "Liverpool",
    jogadores: [
      { id: 'simon-mignolet',      nome: "Simon Mignolet",      posicoes: ["GOL"],       forca: 80 },
      { id: 'brad-jones',          nome: "Brad Jones",          posicoes: ["GOL"],       forca: 73 },
      { id: 'glen-johnson',        nome: "Glen Johnson",        posicoes: ["LD"],        forca: 78 },
      { id: 'martin-skrtel',       nome: "Martin Škrtel",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'mamadou-sakho',       nome: "Mamadou Sakho",       posicoes: ["ZAG"],       forca: 81 },
      { id: 'dejan-lovren',        nome: "Dejan Lovren",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'alberto-moreno',      nome: "Alberto Moreno",      posicoes: ["LE"],        forca: 79 },
      { id: 'emre-can',            nome: "Emre Can",            posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'steven-gerrard',      nome: "Steven Gerrard",      posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'lucas-leiva',         nome: "Lucas Leiva",         posicoes: ["VOL"],       forca: 79 },
      { id: 'philippe-coutinho',   nome: "Philippe Coutinho",   posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","ATA"],  forca: 84 },
      { id: 'adam-lallana',        nome: "Adam Lallana",        posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'jordon-ibe',          nome: "Jordon Ibe",          posicoes: ["PD","PE"],   forca: 75 },
      { id: 'daniel-sturridge',    nome: "Daniel Sturridge",    posicoes: ["ATA","PD"],  forca: 84 },
      { id: 'mario-balotelli',     nome: "Mario Balotelli",     posicoes: ["ATA"],       forca: 79 },
      { id: 'rickie-lambert',      nome: "Rickie Lambert",      posicoes: ["ATA"],       forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2016 (temporada 2015-16) — O MILAGRE DO LEICESTER: campeão como
  //  azarão cotado a 5000-1 no começo da temporada, sob Ranieri, com Vardy e
  //  Mahrez. Provavelmente a maior zebra da história do esporte. Top-6: Leicester
  //  (81), Arsenal (71), Tottenham (70), City (66), United (66), Southampton (63).
  //  Kanté no 1º ano na Inglaterra (Leicester); Payet brilhou no West Ham (fora).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2016,
    clube: "Leicester City",
    jogadores: [
      { id: 'kasper-schmeichel',   nome: "Kasper Schmeichel",   posicoes: ["GOL"],       forca: 83 },
      { id: 'danny-simpson',       nome: "Danny Simpson",       posicoes: ["LD"],        forca: 78 },
      { id: 'wes-morgan',          nome: "Wes Morgan",          posicoes: ["ZAG"],       forca: 80 },
      { id: 'robert-huth',         nome: "Robert Huth",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'christian-fuchs',     nome: "Christian Fuchs",     posicoes: ["LE"],        forca: 79 },
      { id: 'ritchie-de-laet',     nome: "Ritchie De Laet",     posicoes: ["LD","ZAG"],  forca: 74 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'danny-drinkwater',    nome: "Danny Drinkwater",    posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'andy-king',           nome: "Andy King",           posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'marc-albrighton',     nome: "Marc Albrighton",     posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'riyad-mahrez',        nome: "Riyad Mahrez",        posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'shinji-okazaki',      nome: "Shinji Okazaki",      posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'jamie-vardy',         nome: "Jamie Vardy",         posicoes: ["ATA"],       forca: 84 },
      { id: 'leonardo-ulloa',      nome: "Leonardo Ulloa",      posicoes: ["ATA"],       forca: 77 },
      { id: 'jeffrey-schlupp',     nome: "Jeffrey Schlupp",     posicoes: ["LE","PE"],   forca: 75 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2016,
    clube: "Arsenal",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 84 },
      { id: 'hector-bellerin',     nome: "Héctor Bellerín",     posicoes: ["LD"],        forca: 83 },
      { id: 'per-mertesacker',     nome: "Per Mertesacker",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'gabriel-paulista',    nome: "Gabriel Paulista",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE"],        forca: 82 },
      { id: 'francis-coquelin',    nome: "Francis Coquelin",    posicoes: ["VOL"],       forca: 80 },
      { id: 'mohamed-elneny',      nome: "Mohamed Elneny",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'santi-cazorla',       nome: "Santi Cazorla",       posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'mesut-ozil',          nome: "Mesut Özil",          posicoes: ["MEI","PE"],  forca: 88 },
      { id: 'alexis-sanchez',      nome: "Alexis Sánchez",      posicoes: ["PE","ATA"],  forca: 87 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'alex-oxlade-chamberlain', nome: "Alex Oxlade-Chamberlain", posicoes: ["PD","MC"], forca: 80 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 83 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2016,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 86 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 83 },
      { id: 'toby-alderweireld',   nome: "Toby Alderweireld",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'kevin-wimmer',        nome: "Kevin Wimmer",        posicoes: ["ZAG"],       forca: 76 },
      { id: 'danny-rose',          nome: "Danny Rose",          posicoes: ["LE"],        forca: 82 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["LE"],        forca: 78 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["VOL","ZAG"], forca: 82 },
      { id: 'moussa-dembele',      nome: "Mousa Dembélé",       posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'christian-eriksen',   nome: "Christian Eriksen",   posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'dele-alli',           nome: "Dele Alli",           posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'erik-lamela',         nome: "Erik Lamela",         posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'son-heung-min',       nome: "Son Heung-min",       posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'nacer-chadli',        nome: "Nacer Chadli",        posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 87 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2016,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart',            nome: "Joe Hart",            posicoes: ["GOL"],       forca: 84 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 79 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD","LE"],   forca: 81 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'nicolas-otamendi',    nome: "Nicolás Otamendi",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'eliaquim-mangala',    nome: "Eliaquim Mangala",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 79 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'fernando-reges',      nome: "Fernando",            posicoes: ["VOL"],       forca: 79 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD"],        forca: 79 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 83 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 89 },
      { id: 'wilfried-bony',       nome: "Wilfried Bony",       posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2016,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 89 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["LD","PD"],   forca: 81 },
      { id: 'matteo-darmian',      nome: "Matteo Darmian",      posicoes: ["LD","LE"],   forca: 79 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG"],       forca: 83 },
      { id: 'daley-blind',         nome: "Daley Blind",         posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'marcos-rojo',         nome: "Marcos Rojo",         posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 80 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'morgan-schneiderlin', nome: "Morgan Schneiderlin", posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'ander-herrera',       nome: "Ander Herrera",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'bastian-schweinsteiger', nome: "Bastian Schweinsteiger", posicoes: ["MC","VOL"], forca: 82 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'memphis-depay',       nome: "Memphis Depay",       posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'jesse-lingard',       nome: "Jesse Lingard",       posicoes: ["MEI","PD"],  forca: 77 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 78 },
      { id: 'anthony-martial',     nome: "Anthony Martial",     posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2016,
    clube: "Southampton",
    jogadores: [
      { id: 'fraser-forster',      nome: "Fraser Forster",      posicoes: ["GOL"],       forca: 81 },
      { id: 'cedric-soares',       nome: "Cédric Soares",       posicoes: ["LD"],        forca: 79 },
      { id: 'jose-fonte',          nome: "José Fonte",          posicoes: ["ZAG"],       forca: 81 },
      { id: 'virgil-van-dijk',     nome: "Virgil van Dijk",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'ryan-bertrand',       nome: "Ryan Bertrand",       posicoes: ["LE"],        forca: 80 },
      { id: 'maya-yoshida',        nome: "Maya Yoshida",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'victor-wanyama',      nome: "Victor Wanyama",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'oriol-romeu',         nome: "Oriol Romeu",         posicoes: ["VOL"],       forca: 79 },
      { id: 'dusan-tadic',         nome: "Dušan Tadić",         posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'james-ward-prowse',   nome: "James Ward-Prowse",   posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'steven-davis',        nome: "Steven Davis",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'shane-long',          nome: "Shane Long",          posicoes: ["ATA"],       forca: 77 },
      { id: 'graziano-pelle',      nome: "Graziano Pellè",      posicoes: ["ATA"],       forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2017 (temporada 2016-17) — o Chelsea de Conte campeão (93 pts) com o
  //  3-4-3 e recorde de 30 vitórias. Kanté saiu do Leicester campeão para o
  //  Chelsea e ganhou de novo (aparece só no Chelsea). Top-6: Chelsea (93),
  //  Tottenham (86), City (78), Liverpool (76), Arsenal (75), United (69).
  //  1º ano de Guardiola no City e de Mourinho no United. Pogba voltou ao United
  //  por recorde mundial. Ibrahimović chegou ao United.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2017,
    clube: "Chelsea",
    jogadores: [
      { id: 'thibaut-courtois',    nome: "Thibaut Courtois",    posicoes: ["GOL"],       forca: 87 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'gary-cahill',         nome: "Gary Cahill",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG"],       forca: 85 },
      { id: 'marcos-alonso',       nome: "Marcos Alonso",       posicoes: ["LE"],        forca: 83 },
      { id: 'victor-moses',        nome: "Victor Moses",        posicoes: ["LD","PD"],   forca: 80 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'nemanja-matic',       nome: "Nemanja Matić",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'eden-hazard',         nome: "Eden Hazard",         posicoes: ["PE","MEI"],  forca: 89 },
      { id: 'pedro',               nome: "Pedro",               posicoes: ["PD","PE"],   forca: 83 },
      { id: 'willian',             nome: "Willian",             posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'diego-costa',         nome: "Diego Costa",         posicoes: ["ATA"],       forca: 86 },
      { id: 'michy-batshuayi',     nome: "Michy Batshuayi",     posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2017,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 86 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 84 },
      { id: 'kieran-trippier',     nome: "Kieran Trippier",     posicoes: ["LD"],        forca: 80 },
      { id: 'toby-alderweireld',   nome: "Toby Alderweireld",   posicoes: ["ZAG"],       forca: 86 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 85 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'danny-rose',          nome: "Danny Rose",          posicoes: ["LE"],        forca: 82 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["LE"],        forca: 79 },
      { id: 'victor-wanyama',      nome: "Victor Wanyama",      posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'moussa-dembele',      nome: "Mousa Dembélé",       posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'christian-eriksen',   nome: "Christian Eriksen",   posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'dele-alli',           nome: "Dele Alli",           posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'son-heung-min',       nome: "Son Heung-min",       posicoes: ["PE","ATA"],  forca: 84 },
      { id: 'erik-lamela',         nome: "Erik Lamela",         posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 88 },
      { id: 'vincent-janssen',     nome: "Vincent Janssen",     posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2017,
    clube: "Manchester City",
    jogadores: [
      { id: 'claudio-bravo',       nome: "Claudio Bravo",       posicoes: ["GOL"],       forca: 81 },
      { id: 'willy-caballero',     nome: "Willy Caballero",     posicoes: ["GOL"],       forca: 77 },
      { id: 'bacary-sagna',        nome: "Bacary Sagna",        posicoes: ["LD"],        forca: 78 },
      { id: 'pablo-zabaleta',      nome: "Pablo Zabaleta",      posicoes: ["LD"],        forca: 78 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'nicolas-otamendi',    nome: "Nicolás Otamendi",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'gael-clichy',         nome: "Gaël Clichy",         posicoes: ["LE"],        forca: 78 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'yaya-toure',          nome: "Yaya Touré",          posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 89 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 87 },
      { id: 'ilkay-gundogan',      nome: "İlkay Gündoğan",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 84 },
      { id: 'leroy-sane',          nome: "Leroy Sané",          posicoes: ["PE","PD"],   forca: 83 },
      { id: 'nolito',              nome: "Nolito",              posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 88 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2017,
    clube: "Liverpool",
    jogadores: [
      { id: 'simon-mignolet',      nome: "Simon Mignolet",      posicoes: ["GOL"],       forca: 80 },
      { id: 'loris-karius',        nome: "Loris Karius",        posicoes: ["GOL"],       forca: 77 },
      { id: 'nathaniel-clyne',     nome: "Nathaniel Clyne",     posicoes: ["LD"],        forca: 81 },
      { id: 'dejan-lovren',        nome: "Dejan Lovren",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'joel-matip',          nome: "Joël Matip",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'ragnar-klavan',       nome: "Ragnar Klavan",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["LE","MC"],   forca: 82 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'georginio-wijnaldum', nome: "Georginio Wijnaldum", posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'emre-can',            nome: "Emre Can",            posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'adam-lallana',        nome: "Adam Lallana",        posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'philippe-coutinho',   nome: "Philippe Coutinho",   posicoes: ["MEI","PE"],  forca: 86 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PD","ATA"],  forca: 85 },
      { id: 'roberto-firmino',     nome: "Roberto Firmino",     posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'divock-origi',        nome: "Divock Origi",        posicoes: ["ATA"],       forca: 78 },
      { id: 'daniel-sturridge',    nome: "Daniel Sturridge",    posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2017,
    clube: "Arsenal",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 83 },
      { id: 'hector-bellerin',     nome: "Héctor Bellerín",     posicoes: ["LD"],        forca: 82 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'shkodran-mustafi',    nome: "Shkodran Mustafi",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'gabriel-paulista',    nome: "Gabriel Paulista",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'granit-xhaka',        nome: "Granit Xhaka",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'francis-coquelin',    nome: "Francis Coquelin",    posicoes: ["VOL"],       forca: 79 },
      { id: 'mesut-ozil',          nome: "Mesut Özil",          posicoes: ["MEI","PE"],  forca: 86 },
      { id: 'alex-oxlade-chamberlain', nome: "Alex Oxlade-Chamberlain", posicoes: ["PD","MC"], forca: 81 },
      { id: 'theo-walcott',        nome: "Theo Walcott",        posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'alexis-sanchez',      nome: "Alexis Sánchez",      posicoes: ["ATA","PE"],  forca: 88 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 82 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2017,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 90 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["LD"],        forca: 82 },
      { id: 'eric-bailly',         nome: "Eric Bailly",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'phil-jones',          nome: "Phil Jones",          posicoes: ["ZAG"],       forca: 80 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'marcos-rojo',         nome: "Marcos Rojo",         posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'daley-blind',         nome: "Daley Blind",         posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 79 },
      { id: 'paul-pogba',          nome: "Paul Pogba",          posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'ander-herrera',       nome: "Ander Herrera",       posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'michael-carrick',     nome: "Michael Carrick",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'marouane-fellaini',   nome: "Marouane Fellaini",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'henrikh-mkhitaryan',  nome: "Henrikh Mkhitaryan",  posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'jesse-lingard',       nome: "Jesse Lingard",       posicoes: ["MEI","PD"],  forca: 78 },
      { id: 'anthony-martial',     nome: "Anthony Martial",     posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 81 },
      { id: 'zlatan-ibrahimovic',  nome: "Zlatan Ibrahimović",  posicoes: ["ATA"],       forca: 87 },
      { id: 'wayne-rooney',        nome: "Wayne Rooney",        posicoes: ["ATA","MEI"], forca: 80 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2018 (temporada 2017-18) — o CITY CENTURIÃO de Guardiola: 100 pontos,
  //  32 vitórias, 106 gols — recordes que seguem de pé. Único time a chegar aos
  //  100 na era Premier. Top-6: City (100), United (81), Tottenham (77),
  //  Liverpool (75), Chelsea (70), Arsenal (63). Salah chegou ao Liverpool e fez
  //  32 gols (recorde de temporada de 38 jogos). Ederson e Walker no 1º ano de City.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2018,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson',             nome: "Ederson",             posicoes: ["GOL"],       forca: 86 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 85 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'nicolas-otamendi',    nome: "Nicolás Otamendi",    posicoes: ["ZAG"],       forca: 83 },
      { id: 'aymeric-laporte',     nome: "Aymeric Laporte",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'benjamin-mendy',      nome: "Benjamin Mendy",      posicoes: ["LE"],        forca: 81 },
      { id: 'fabian-delph',        nome: "Fabian Delph",        posicoes: ["LE","MC"],   forca: 80 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","PE"],  forca: 88 },
      { id: 'ilkay-gundogan',      nome: "İlkay Gündoğan",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'bernardo-silva',      nome: "Bernardo Silva",      posicoes: ["MEI","PD"],  forca: 85 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 87 },
      { id: 'leroy-sane',          nome: "Leroy Sané",          posicoes: ["PE","PD"],   forca: 86 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 89 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA"],       forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2018,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 91 },
      { id: 'antonio-valencia',    nome: "Antonio Valencia",    posicoes: ["LD"],        forca: 82 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["LE","LD"],   forca: 80 },
      { id: 'eric-bailly',         nome: "Eric Bailly",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'phil-jones',          nome: "Phil Jones",          posicoes: ["ZAG"],       forca: 81 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'victor-lindelof',     nome: "Victor Lindelöf",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 79 },
      { id: 'nemanja-matic',       nome: "Nemanja Matić",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'paul-pogba',          nome: "Paul Pogba",          posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'ander-herrera',       nome: "Ander Herrera",       posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'jesse-lingard',       nome: "Jesse Lingard",       posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'anthony-martial',     nome: "Anthony Martial",     posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'alexis-sanchez',      nome: "Alexis Sánchez",      posicoes: ["PE","ATA"],  forca: 85 },
      { id: 'romelu-lukaku',       nome: "Romelu Lukaku",       posicoes: ["ATA"],       forca: 85 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2018,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 87 },
      { id: 'kieran-trippier',     nome: "Kieran Trippier",     posicoes: ["LD"],        forca: 82 },
      { id: 'serge-aurier',        nome: "Serge Aurier",        posicoes: ["LD"],        forca: 80 },
      { id: 'toby-alderweireld',   nome: "Toby Alderweireld",   posicoes: ["ZAG"],       forca: 86 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 85 },
      { id: 'davinson-sanchez',    nome: "Davinson Sánchez",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["LE"],        forca: 80 },
      { id: 'danny-rose',          nome: "Danny Rose",          posicoes: ["LE"],        forca: 81 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["VOL","ZAG"], forca: 82 },
      { id: 'moussa-dembele',      nome: "Mousa Dembélé",       posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'harry-winks',         nome: "Harry Winks",         posicoes: ["MC"],        forca: 79 },
      { id: 'christian-eriksen',   nome: "Christian Eriksen",   posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'dele-alli',           nome: "Dele Alli",           posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'son-heung-min',       nome: "Son Heung-min",       posicoes: ["PE","ATA"],  forca: 85 },
      { id: 'erik-lamela',         nome: "Erik Lamela",         posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 89 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2018,
    clube: "Liverpool",
    jogadores: [
      { id: 'loris-karius',        nome: "Loris Karius",        posicoes: ["GOL"],       forca: 78 },
      { id: 'simon-mignolet',      nome: "Simon Mignolet",      posicoes: ["GOL"],       forca: 78 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD"],  forca: 80 },
      { id: 'joe-gomez',           nome: "Joe Gomez",           posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'dejan-lovren',        nome: "Dejan Lovren",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'joel-matip',          nome: "Joël Matip",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'virgil-van-dijk',     nome: "Virgil van Dijk",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'andrew-robertson',    nome: "Andrew Robertson",    posicoes: ["LE"],        forca: 82 },
      { id: 'alberto-moreno',      nome: "Alberto Moreno",      posicoes: ["LE"],        forca: 78 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'georginio-wijnaldum', nome: "Georginio Wijnaldum", posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'emre-can',            nome: "Emre Can",            posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","LE"],   forca: 82 },
      { id: 'alex-oxlade-chamberlain', nome: "Alex Oxlade-Chamberlain", posicoes: ["MC","PD"], forca: 82 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PE","ATA"],  forca: 86 },
      { id: 'mohamed-salah',       nome: "Mohamed Salah",       posicoes: ["PD","ATA"],  forca: 89 },
      { id: 'roberto-firmino',     nome: "Roberto Firmino",     posicoes: ["ATA","MEI"], forca: 86 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2018,
    clube: "Chelsea",
    jogadores: [
      { id: 'thibaut-courtois',    nome: "Thibaut Courtois",    posicoes: ["GOL"],       forca: 87 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'gary-cahill',         nome: "Gary Cahill",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'antonio-rudiger',     nome: "Antonio Rüdiger",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'andreas-christensen', nome: "Andreas Christensen", posicoes: ["ZAG"],       forca: 80 },
      { id: 'marcos-alonso',       nome: "Marcos Alonso",       posicoes: ["LE"],        forca: 83 },
      { id: 'victor-moses',        nome: "Victor Moses",        posicoes: ["LD","PD"],   forca: 80 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'cesc-fabregas',       nome: "Cesc Fàbregas",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'tiemoue-bakayoko',    nome: "Tiémoué Bakayoko",    posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'eden-hazard',         nome: "Eden Hazard",         posicoes: ["PE","MEI"],  forca: 90 },
      { id: 'willian',             nome: "Willian",             posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'pedro',               nome: "Pedro",               posicoes: ["PD","PE"],   forca: 82 },
      { id: 'alvaro-morata',       nome: "Álvaro Morata",       posicoes: ["ATA"],       forca: 83 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2018,
    clube: "Arsenal",
    jogadores: [
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 82 },
      { id: 'david-ospina',        nome: "David Ospina",        posicoes: ["GOL"],       forca: 80 },
      { id: 'hector-bellerin',     nome: "Héctor Bellerín",     posicoes: ["LD"],        forca: 82 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 83 },
      { id: 'shkodran-mustafi',    nome: "Shkodran Mustafi",    posicoes: ["ZAG"],       forca: 81 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'sead-kolasinac',      nome: "Sead Kolašinac",      posicoes: ["LE"],        forca: 80 },
      { id: 'granit-xhaka',        nome: "Granit Xhaka",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'jack-wilshere',       nome: "Jack Wilshere",       posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'mohamed-elneny',      nome: "Mohamed Elneny",      posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'mesut-ozil',          nome: "Mesut Özil",          posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'henrikh-mkhitaryan',  nome: "Henrikh Mkhitaryan",  posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'alex-iwobi',          nome: "Alex Iwobi",          posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'pierre-emerick-aubameyang', nome: "Pierre-Emerick Aubameyang", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'alexandre-lacazette', nome: "Alexandre Lacazette", posicoes: ["ATA"],       forca: 84 },
      { id: 'danny-welbeck',       nome: "Danny Welbeck",       posicoes: ["ATA"],       forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2019 (temporada 2018-19) — a disputa mais épica da era: City 98 x 97
  //  Liverpool, decidida na última rodada. O Liverpool fez a MAIOR pontuação de
  //  vice da história (97) e perdeu só 1 jogo. Top-6: City (98), Liverpool (97),
  //  Chelsea (72), Tottenham (71), Arsenal (70), United (66).
  //  Alisson chegou ao Liverpool; Fabinho também. Riyad Mahrez foi do Leicester
  //  campeão de 2016 para o City. Hazard em sua última temporada antes do Real.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2019,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson',             nome: "Ederson",             posicoes: ["GOL"],       forca: 88 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 85 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 83 },
      { id: 'aymeric-laporte',     nome: "Aymeric Laporte",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'nicolas-otamendi',    nome: "Nicolás Otamendi",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'vincent-kompany',     nome: "Vincent Kompany",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'benjamin-mendy',      nome: "Benjamin Mendy",      posicoes: ["LE"],        forca: 80 },
      { id: 'fabian-delph',        nome: "Fabian Delph",        posicoes: ["LE","MC"],   forca: 79 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'ilkay-gundogan',      nome: "İlkay Gündoğan",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'bernardo-silva',      nome: "Bernardo Silva",      posicoes: ["MEI","PD"],  forca: 87 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 88 },
      { id: 'leroy-sane',          nome: "Leroy Sané",          posicoes: ["PE","PD"],   forca: 85 },
      { id: 'riyad-mahrez',        nome: "Riyad Mahrez",        posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 89 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA"],       forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2019,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson',             nome: "Alisson",             posicoes: ["GOL"],       forca: 89 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD"],  forca: 84 },
      { id: 'joe-gomez',           nome: "Joe Gomez",           posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'virgil-van-dijk',     nome: "Virgil van Dijk",     posicoes: ["ZAG"],       forca: 89 },
      { id: 'joel-matip',          nome: "Joël Matip",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'dejan-lovren',        nome: "Dejan Lovren",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'andrew-robertson',    nome: "Andrew Robertson",    posicoes: ["LE"],        forca: 85 },
      { id: 'fabinho',             nome: "Fabinho",             posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'georginio-wijnaldum', nome: "Georginio Wijnaldum", posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","LE"],   forca: 81 },
      { id: 'naby-keita',          nome: "Naby Keïta",          posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'xherdan-shaqiri',     nome: "Xherdan Shaqiri",     posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PE","ATA"],  forca: 88 },
      { id: 'mohamed-salah',       nome: "Mohamed Salah",       posicoes: ["PD","ATA"],  forca: 90 },
      { id: 'roberto-firmino',     nome: "Roberto Firmino",     posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'divock-origi',        nome: "Divock Origi",        posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2019,
    clube: "Chelsea",
    jogadores: [
      { id: 'kepa-arrizabalaga',   nome: "Kepa Arrizabalaga",   posicoes: ["GOL"],       forca: 84 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LD","ZAG"],  forca: 84 },
      { id: 'antonio-rudiger',     nome: "Antonio Rüdiger",     posicoes: ["ZAG"],       forca: 84 },
      { id: 'david-luiz',          nome: "David Luiz",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'andreas-christensen', nome: "Andreas Christensen", posicoes: ["ZAG"],       forca: 80 },
      { id: 'marcos-alonso',       nome: "Marcos Alonso",       posicoes: ["LE"],        forca: 83 },
      { id: 'emerson-palmieri',    nome: "Emerson Palmieri",    posicoes: ["LE"],        forca: 80 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'jorginho',            nome: "Jorginho",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mateo-kovacic',       nome: "Mateo Kovačić",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'ross-barkley',        nome: "Ross Barkley",        posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'eden-hazard',         nome: "Eden Hazard",         posicoes: ["PE","MEI"],  forca: 91 },
      { id: 'willian',             nome: "Willian",             posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'pedro',               nome: "Pedro",               posicoes: ["PD","PE"],   forca: 81 },
      { id: 'callum-hudson-odoi',  nome: "Callum Hudson-Odoi",  posicoes: ["PE","PD"],   forca: 78 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 81 },
      { id: 'gonzalo-higuain',     nome: "Gonzalo Higuaín",     posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2019,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 86 },
      { id: 'kieran-trippier',     nome: "Kieran Trippier",     posicoes: ["LD"],        forca: 82 },
      { id: 'serge-aurier',        nome: "Serge Aurier",        posicoes: ["LD"],        forca: 80 },
      { id: 'toby-alderweireld',   nome: "Toby Alderweireld",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'davinson-sanchez',    nome: "Davinson Sánchez",    posicoes: ["ZAG"],       forca: 82 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["LE"],        forca: 80 },
      { id: 'danny-rose',          nome: "Danny Rose",          posicoes: ["LE"],        forca: 80 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'moussa-sissoko',      nome: "Moussa Sissoko",      posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'harry-winks',         nome: "Harry Winks",         posicoes: ["MC"],        forca: 80 },
      { id: 'christian-eriksen',   nome: "Christian Eriksen",   posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'dele-alli',           nome: "Dele Alli",           posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'son-heung-min',       nome: "Son Heung-min",       posicoes: ["PE","ATA"],  forca: 86 },
      { id: 'lucas-moura',         nome: "Lucas Moura",         posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 89 },
      { id: 'fernando-llorente',   nome: "Fernando Llorente",   posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2019,
    clube: "Arsenal",
    jogadores: [
      { id: 'bernd-leno',          nome: "Bernd Leno",          posicoes: ["GOL"],       forca: 83 },
      { id: 'petr-cech',           nome: "Petr Čech",           posicoes: ["GOL"],       forca: 80 },
      { id: 'hector-bellerin',     nome: "Héctor Bellerín",     posicoes: ["LD"],        forca: 82 },
      { id: 'sokratis-papastathopoulos', nome: "Sokratis",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'laurent-koscielny',   nome: "Laurent Koscielny",   posicoes: ["ZAG"],       forca: 82 },
      { id: 'shkodran-mustafi',    nome: "Shkodran Mustafi",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'nacho-monreal',       nome: "Nacho Monreal",       posicoes: ["LE"],        forca: 80 },
      { id: 'sead-kolasinac',      nome: "Sead Kolašinac",      posicoes: ["LE"],        forca: 80 },
      { id: 'granit-xhaka',        nome: "Granit Xhaka",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'lucas-torreira',      nome: "Lucas Torreira",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'matteo-guendouzi',    nome: "Matteo Guendouzi",    posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'mesut-ozil',          nome: "Mesut Özil",          posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'aaron-ramsey',        nome: "Aaron Ramsey",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'henrikh-mkhitaryan',  nome: "Henrikh Mkhitaryan",  posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'alexandre-lacazette', nome: "Alexandre Lacazette", posicoes: ["ATA"],       forca: 85 },
      { id: 'pierre-emerick-aubameyang', nome: "Pierre-Emerick Aubameyang", posicoes: ["ATA","PE"], forca: 87 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2019,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 89 },
      { id: 'ashley-young',        nome: "Ashley Young",        posicoes: ["LD","LE"],   forca: 79 },
      { id: 'diogo-dalot',         nome: "Diogo Dalot",         posicoes: ["LD"],        forca: 78 },
      { id: 'victor-lindelof',     nome: "Victor Lindelöf",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'chris-smalling',      nome: "Chris Smalling",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'eric-bailly',         nome: "Eric Bailly",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 81 },
      { id: 'nemanja-matic',       nome: "Nemanja Matić",       posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'paul-pogba',          nome: "Paul Pogba",          posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'ander-herrera',       nome: "Ander Herrera",       posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'fred',                nome: "Fred",                posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'jesse-lingard',       nome: "Jesse Lingard",       posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'anthony-martial',     nome: "Anthony Martial",     posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'romelu-lukaku',       nome: "Romelu Lukaku",       posicoes: ["ATA"],       forca: 84 },
      { id: 'alexis-sanchez',      nome: "Alexis Sánchez",      posicoes: ["PE","ATA"],  forca: 81 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2020 (temporada 2019-20) — o LIVERPOOL de Klopp campeão após 30 ANOS
  //  de jejum, com 99 pontos (recorde do clube) e o título encaminhado com 7
  //  rodadas de antecedência. Temporada interrompida pela pandemia (Project
  //  Restart). Top-6: Liverpool (99), City (81), United (66), Chelsea (66),
  //  Leicester (62), Tottenham (59). Mané, Salah e Van Dijk no auge.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2020,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson',             nome: "Alisson",             posicoes: ["GOL"],       forca: 90 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD"],  forca: 87 },
      { id: 'virgil-van-dijk',     nome: "Virgil van Dijk",     posicoes: ["ZAG"],       forca: 90 },
      { id: 'joe-gomez',           nome: "Joe Gomez",           posicoes: ["ZAG"],       forca: 82 },
      { id: 'joel-matip',          nome: "Joël Matip",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'andrew-robertson',    nome: "Andrew Robertson",    posicoes: ["LE"],        forca: 87 },
      { id: 'fabinho',             nome: "Fabinho",             posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'georginio-wijnaldum', nome: "Georginio Wijnaldum", posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'naby-keita',          nome: "Naby Keïta",          posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","LE"],   forca: 80 },
      { id: 'alex-oxlade-chamberlain', nome: "Alex Oxlade-Chamberlain", posicoes: ["MC","PD"], forca: 82 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PE","ATA"],  forca: 89 },
      { id: 'mohamed-salah',       nome: "Mohamed Salah",       posicoes: ["PD","ATA"],  forca: 90 },
      { id: 'roberto-firmino',     nome: "Roberto Firmino",     posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'divock-origi',        nome: "Divock Origi",        posicoes: ["ATA"],       forca: 79 },
      { id: 'xherdan-shaqiri',     nome: "Xherdan Shaqiri",     posicoes: ["MEI","PD"],  forca: 80 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2020,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson',             nome: "Ederson",             posicoes: ["GOL"],       forca: 88 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 84 },
      { id: 'joao-cancelo',        nome: "João Cancelo",        posicoes: ["LD","LE"],   forca: 84 },
      { id: 'aymeric-laporte',     nome: "Aymeric Laporte",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'nicolas-otamendi',    nome: "Nicolás Otamendi",    posicoes: ["ZAG"],       forca: 81 },
      { id: 'benjamin-mendy',      nome: "Benjamin Mendy",      posicoes: ["LE"],        forca: 80 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'rodri',               nome: "Rodri",               posicoes: ["VOL"],       forca: 85 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'ilkay-gundogan',      nome: "İlkay Gündoğan",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'bernardo-silva',      nome: "Bernardo Silva",      posicoes: ["MEI","PD"],  forca: 86 },
      { id: 'phil-foden',          nome: "Phil Foden",          posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 88 },
      { id: 'riyad-mahrez',        nome: "Riyad Mahrez",        posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 89 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA"],       forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2020,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 87 },
      { id: 'aaron-wan-bissaka',   nome: "Aaron Wan-Bissaka",   posicoes: ["LD"],        forca: 82 },
      { id: 'victor-lindelof',     nome: "Victor Lindelöf",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'harry-maguire',       nome: "Harry Maguire",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'eric-bailly',         nome: "Eric Bailly",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 80 },
      { id: 'brandon-williams',    nome: "Brandon Williams",    posicoes: ["LE"],        forca: 75 },
      { id: 'nemanja-matic',       nome: "Nemanja Matić",       posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'fred',                nome: "Fred",                posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'scott-mctominay',     nome: "Scott McTominay",     posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'paul-pogba',          nome: "Paul Pogba",          posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'bruno-fernandes',     nome: "Bruno Fernandes",     posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'juan-mata',           nome: "Juan Mata",           posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'daniel-james',        nome: "Daniel James",        posicoes: ["PD","PE"],   forca: 77 },
      { id: 'mason-greenwood',     nome: "Mason Greenwood",     posicoes: ["ATA","PD"],  forca: 79 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'anthony-martial',     nome: "Anthony Martial",     posicoes: ["ATA","PE"],  forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2020,
    clube: "Chelsea",
    jogadores: [
      { id: 'kepa-arrizabalaga',   nome: "Kepa Arrizabalaga",   posicoes: ["GOL"],       forca: 81 },
      { id: 'willy-caballero',     nome: "Willy Caballero",     posicoes: ["GOL"],       forca: 75 },
      { id: 'reece-james',         nome: "Reece James",         posicoes: ["LD"],        forca: 80 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LD","ZAG"],  forca: 82 },
      { id: 'antonio-rudiger',     nome: "Antonio Rüdiger",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'andreas-christensen', nome: "Andreas Christensen", posicoes: ["ZAG"],       forca: 80 },
      { id: 'kurt-zouma',          nome: "Kurt Zouma",          posicoes: ["ZAG"],       forca: 80 },
      { id: 'marcos-alonso',       nome: "Marcos Alonso",       posicoes: ["LE"],        forca: 80 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'jorginho',            nome: "Jorginho",            posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mateo-kovacic',       nome: "Mateo Kovačić",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'mason-mount',         nome: "Mason Mount",         posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'ross-barkley',        nome: "Ross Barkley",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'christian-pulisic',   nome: "Christian Pulisic",   posicoes: ["PE","PD"],   forca: 82 },
      { id: 'willian',             nome: "Willian",             posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'callum-hudson-odoi',  nome: "Callum Hudson-Odoi",  posicoes: ["PE","PD"],   forca: 78 },
      { id: 'tammy-abraham',       nome: "Tammy Abraham",       posicoes: ["ATA"],       forca: 80 },
      { id: 'olivier-giroud',      nome: "Olivier Giroud",      posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2020,
    clube: "Leicester City",
    jogadores: [
      { id: 'kasper-schmeichel',   nome: "Kasper Schmeichel",   posicoes: ["GOL"],       forca: 83 },
      { id: 'ricardo-pereira',     nome: "Ricardo Pereira",     posicoes: ["LD"],        forca: 83 },
      { id: 'jonny-evans',         nome: "Jonny Evans",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'caglar-soyuncu',      nome: "Çağlar Söyüncü",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'wes-morgan',          nome: "Wes Morgan",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'ben-chilwell',        nome: "Ben Chilwell",        posicoes: ["LE"],        forca: 82 },
      { id: 'wilfred-ndidi',       nome: "Wilfred Ndidi",       posicoes: ["VOL"],       forca: 83 },
      { id: 'youri-tielemans',     nome: "Youri Tielemans",     posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'james-maddison',      nome: "James Maddison",      posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'dennis-praet',        nome: "Dennis Praet",        posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'marc-albrighton',     nome: "Marc Albrighton",     posicoes: ["PE","MEI"],  forca: 77 },
      { id: 'ayoze-perez',         nome: "Ayoze Pérez",         posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'harvey-barnes',       nome: "Harvey Barnes",       posicoes: ["PE","PD"],   forca: 78 },
      { id: 'jamie-vardy',         nome: "Jamie Vardy",         posicoes: ["ATA"],       forca: 85 },
      { id: 'kelechi-iheanacho',   nome: "Kelechi Iheanacho",   posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2020,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 85 },
      { id: 'serge-aurier',        nome: "Serge Aurier",        posicoes: ["LD"],        forca: 80 },
      { id: 'toby-alderweireld',   nome: "Toby Alderweireld",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'davinson-sanchez',    nome: "Davinson Sánchez",    posicoes: ["ZAG"],       forca: 81 },
      { id: 'jan-vertonghen',      nome: "Jan Vertonghen",      posicoes: ["ZAG","LE"],  forca: 82 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["LE"],        forca: 80 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'moussa-sissoko',      nome: "Moussa Sissoko",      posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'harry-winks',         nome: "Harry Winks",         posicoes: ["MC"],        forca: 80 },
      { id: 'giovani-lo-celso',    nome: "Giovani Lo Celso",    posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'tanguy-ndombele',     nome: "Tanguy Ndombele",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'dele-alli',           nome: "Dele Alli",           posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'son-heung-min',       nome: "Son Heung-min",       posicoes: ["PE","ATA"],  forca: 87 },
      { id: 'lucas-moura',         nome: "Lucas Moura",         posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'steven-bergwijn',     nome: "Steven Bergwijn",     posicoes: ["PE","ATA"],  forca: 79 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 88 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2021 (temporada 2020-21) — o City retomou o título (86 pts) numa
  //  temporada ainda com portões fechados. O United foi vice; o Chelsea de
  //  Tuchel ganhou a Champions. Top-6: City (86), United (74), Liverpool (69),
  //  Chelsea (67), Leicester (66), West Ham (65). West Ham no top-6 pela 1ª vez
  //  na era moderna. Rúben Dias chegou ao City e mudou a defesa.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2021,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson',             nome: "Ederson",             posicoes: ["GOL"],       forca: 88 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 84 },
      { id: 'joao-cancelo',        nome: "João Cancelo",        posicoes: ["LD","LE"],   forca: 86 },
      { id: 'ruben-dias',          nome: "Rúben Dias",          posicoes: ["ZAG"],       forca: 87 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'aymeric-laporte',     nome: "Aymeric Laporte",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'oleksandr-zinchenko', nome: "Oleksandr Zinchenko", posicoes: ["LE","MC"],   forca: 81 },
      { id: 'rodri',               nome: "Rodri",               posicoes: ["VOL"],       forca: 86 },
      { id: 'fernandinho',         nome: "Fernandinho",         posicoes: ["VOL","ZAG"], forca: 82 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'ilkay-gundogan',      nome: "İlkay Gündoğan",      posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'bernardo-silva',      nome: "Bernardo Silva",      posicoes: ["MEI","PD"],  forca: 86 },
      { id: 'phil-foden',          nome: "Phil Foden",          posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'riyad-mahrez',        nome: "Riyad Mahrez",        posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 86 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA"],       forca: 83 },
      { id: 'sergio-aguero',       nome: "Sergio Agüero",       posicoes: ["ATA"],       forca: 85 },
      { id: 'ferran-torres',       nome: "Ferran Torres",       posicoes: ["PD","ATA"],  forca: 81 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2021,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 84 },
      { id: 'dean-henderson',      nome: "Dean Henderson",      posicoes: ["GOL"],       forca: 80 },
      { id: 'aaron-wan-bissaka',   nome: "Aaron Wan-Bissaka",   posicoes: ["LD"],        forca: 82 },
      { id: 'harry-maguire',       nome: "Harry Maguire",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'victor-lindelof',     nome: "Victor Lindelöf",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'eric-bailly',         nome: "Eric Bailly",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 83 },
      { id: 'alex-telles',         nome: "Alex Telles",         posicoes: ["LE"],        forca: 80 },
      { id: 'fred',                nome: "Fred",                posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'scott-mctominay',     nome: "Scott McTominay",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'paul-pogba',          nome: "Paul Pogba",          posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'bruno-fernandes',     nome: "Bruno Fernandes",     posicoes: ["MEI","MC"],  forca: 88 },
      { id: 'mason-greenwood',     nome: "Mason Greenwood",     posicoes: ["ATA","PD"],  forca: 80 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'anthony-martial',     nome: "Anthony Martial",     posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'edinson-cavani',      nome: "Edinson Cavani",      posicoes: ["ATA"],       forca: 83 },
      { id: 'daniel-james',        nome: "Daniel James",        posicoes: ["PD","PE"],   forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2021,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson',             nome: "Alisson",             posicoes: ["GOL"],       forca: 89 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD"],  forca: 85 },
      { id: 'virgil-van-dijk',     nome: "Virgil van Dijk",     posicoes: ["ZAG"],       forca: 89 },
      { id: 'joe-gomez',           nome: "Joe Gomez",           posicoes: ["ZAG"],       forca: 81 },
      { id: 'nathaniel-phillips',  nome: "Nathaniel Phillips",  posicoes: ["ZAG"],       forca: 76 },
      { id: 'andrew-robertson',    nome: "Andrew Robertson",    posicoes: ["LE"],        forca: 86 },
      { id: 'fabinho',             nome: "Fabinho",             posicoes: ["VOL","ZAG"], forca: 85 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'georginio-wijnaldum', nome: "Georginio Wijnaldum", posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'thiago-alcantara',    nome: "Thiago Alcântara",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'james-milner',        nome: "James Milner",        posicoes: ["MC","LE"],   forca: 79 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PE","ATA"],  forca: 87 },
      { id: 'mohamed-salah',       nome: "Mohamed Salah",       posicoes: ["PD","ATA"],  forca: 90 },
      { id: 'roberto-firmino',     nome: "Roberto Firmino",     posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'diogo-jota',          nome: "Diogo Jota",          posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'xherdan-shaqiri',     nome: "Xherdan Shaqiri",     posicoes: ["MEI","PD"],  forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2021,
    clube: "Chelsea",
    jogadores: [
      { id: 'edouard-mendy',       nome: "Édouard Mendy",       posicoes: ["GOL"],       forca: 84 },
      { id: 'reece-james',         nome: "Reece James",         posicoes: ["LD"],        forca: 83 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LD","ZAG"],  forca: 82 },
      { id: 'antonio-rudiger',     nome: "Antonio Rüdiger",     posicoes: ["ZAG"],       forca: 83 },
      { id: 'thiago-silva',        nome: "Thiago Silva",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'kurt-zouma',          nome: "Kurt Zouma",          posicoes: ["ZAG"],       forca: 81 },
      { id: 'ben-chilwell',        nome: "Ben Chilwell",        posicoes: ["LE"],        forca: 82 },
      { id: 'marcos-alonso',       nome: "Marcos Alonso",       posicoes: ["LE"],        forca: 79 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'jorginho',            nome: "Jorginho",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mateo-kovacic',       nome: "Mateo Kovačić",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'mason-mount',         nome: "Mason Mount",         posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'kai-havertz',         nome: "Kai Havertz",         posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'christian-pulisic',   nome: "Christian Pulisic",   posicoes: ["PE","PD"],   forca: 82 },
      { id: 'timo-werner',         nome: "Timo Werner",         posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'hakim-ziyech',        nome: "Hakim Ziyech",        posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'tammy-abraham',       nome: "Tammy Abraham",       posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2021,
    clube: "Leicester City",
    jogadores: [
      { id: 'kasper-schmeichel',   nome: "Kasper Schmeichel",   posicoes: ["GOL"],       forca: 82 },
      { id: 'ricardo-pereira',     nome: "Ricardo Pereira",     posicoes: ["LD"],        forca: 82 },
      { id: 'timothy-castagne',    nome: "Timothy Castagne",    posicoes: ["LD","LE"],   forca: 81 },
      { id: 'jonny-evans',         nome: "Jonny Evans",         posicoes: ["ZAG"],       forca: 82 },
      { id: 'caglar-soyuncu',      nome: "Çağlar Söyüncü",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'wesley-fofana',       nome: "Wesley Fofana",       posicoes: ["ZAG"],       forca: 80 },
      { id: 'james-justin',        nome: "James Justin",        posicoes: ["LE","LD"],   forca: 78 },
      { id: 'wilfred-ndidi',       nome: "Wilfred Ndidi",       posicoes: ["VOL"],       forca: 83 },
      { id: 'youri-tielemans',     nome: "Youri Tielemans",     posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'james-maddison',      nome: "James Maddison",      posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'marc-albrighton',     nome: "Marc Albrighton",     posicoes: ["PE","MEI"],  forca: 77 },
      { id: 'harvey-barnes',       nome: "Harvey Barnes",       posicoes: ["PE","PD"],   forca: 80 },
      { id: 'ayoze-perez',         nome: "Ayoze Pérez",         posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'jamie-vardy',         nome: "Jamie Vardy",         posicoes: ["ATA"],       forca: 84 },
      { id: 'kelechi-iheanacho',   nome: "Kelechi Iheanacho",   posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2021,
    clube: "West Ham United",
    jogadores: [
      { id: 'lukasz-fabianski',    nome: "Łukasz Fabiański",    posicoes: ["GOL"],       forca: 81 },
      { id: 'vladimir-coufal',     nome: "Vladimír Coufal",     posicoes: ["LD"],        forca: 80 },
      { id: 'craig-dawson',        nome: "Craig Dawson",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'angelo-ogbonna',      nome: "Angelo Ogbonna",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'issa-diop',           nome: "Issa Diop",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'aaron-cresswell',     nome: "Aaron Cresswell",     posicoes: ["LE"],        forca: 80 },
      { id: 'declan-rice',         nome: "Declan Rice",         posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'tomas-soucek',        nome: "Tomáš Souček",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'pablo-fornals',       nome: "Pablo Fornals",       posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'jarrod-bowen',        nome: "Jarrod Bowen",        posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'said-benrahma',       nome: "Saïd Benrahma",       posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'jesse-lingard',       nome: "Jesse Lingard",       posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'michail-antonio',     nome: "Michail Antonio",     posicoes: ["ATA"],       forca: 81 },
      { id: 'sebastien-haller',    nome: "Sébastien Haller",    posicoes: ["ATA"],       forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2022 (temporada 2021-22) — mais uma decisão na última rodada: o City
  //  virou sobre o Aston Villa (de 0-2 a 3-2 em 5 minutos) e ficou com 93 pts
  //  contra 92 do Liverpool. Top-6: City (93), Liverpool (92), Chelsea (74),
  //  Tottenham (71), Arsenal (69), United (58). Grealish chegou ao City por
  //  recorde inglês; Ronaldo voltou ao United. Salah e Son dividiram a artilharia.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Premier League",
    edicao: 2022,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson',             nome: "Ederson",             posicoes: ["GOL"],       forca: 89 },
      { id: 'kyle-walker',         nome: "Kyle Walker",         posicoes: ["LD"],        forca: 84 },
      { id: 'joao-cancelo',        nome: "João Cancelo",        posicoes: ["LD","LE"],   forca: 87 },
      { id: 'ruben-dias',          nome: "Rúben Dias",          posicoes: ["ZAG"],       forca: 88 },
      { id: 'john-stones',         nome: "John Stones",         posicoes: ["ZAG"],       forca: 84 },
      { id: 'aymeric-laporte',     nome: "Aymeric Laporte",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'nathan-ake',          nome: "Nathan Aké",          posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'oleksandr-zinchenko', nome: "Oleksandr Zinchenko", posicoes: ["LE","MC"],   forca: 81 },
      { id: 'rodri',               nome: "Rodri",               posicoes: ["VOL"],       forca: 87 },
      { id: 'kevin-de-bruyne',     nome: "Kevin De Bruyne",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'bernardo-silva',      nome: "Bernardo Silva",      posicoes: ["MEI","PD"],  forca: 87 },
      { id: 'ilkay-gundogan',      nome: "İlkay Gündoğan",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'phil-foden',          nome: "Phil Foden",          posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'jack-grealish',       nome: "Jack Grealish",       posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'riyad-mahrez',        nome: "Riyad Mahrez",        posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'raheem-sterling',     nome: "Raheem Sterling",     posicoes: ["PE","PD"],   forca: 85 },
      { id: 'gabriel-jesus',       nome: "Gabriel Jesus",       posicoes: ["ATA","PD"],  forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2022,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson',             nome: "Alisson",             posicoes: ["GOL"],       forca: 89 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD"],  forca: 87 },
      { id: 'virgil-van-dijk',     nome: "Virgil van Dijk",     posicoes: ["ZAG"],       forca: 89 },
      { id: 'joel-matip',          nome: "Joël Matip",          posicoes: ["ZAG"],       forca: 83 },
      { id: 'ibrahima-konate',     nome: "Ibrahima Konaté",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'andrew-robertson',    nome: "Andrew Robertson",    posicoes: ["LE"],        forca: 86 },
      { id: 'kostas-tsimikas',     nome: "Kostas Tsimikas",     posicoes: ["LE"],        forca: 79 },
      { id: 'fabinho',             nome: "Fabinho",             posicoes: ["VOL"],       forca: 86 },
      { id: 'jordan-henderson',    nome: "Jordan Henderson",    posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'thiago-alcantara',    nome: "Thiago Alcântara",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'naby-keita',          nome: "Naby Keïta",          posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'sadio-mane',          nome: "Sadio Mané",          posicoes: ["PE","ATA"],  forca: 87 },
      { id: 'mohamed-salah',       nome: "Mohamed Salah",       posicoes: ["PD","ATA"],  forca: 90 },
      { id: 'diogo-jota',          nome: "Diogo Jota",          posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'roberto-firmino',     nome: "Roberto Firmino",     posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'luis-diaz',           nome: "Luis Díaz",           posicoes: ["PE","ATA"],  forca: 83 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2022,
    clube: "Chelsea",
    jogadores: [
      { id: 'edouard-mendy',       nome: "Édouard Mendy",       posicoes: ["GOL"],       forca: 84 },
      { id: 'reece-james',         nome: "Reece James",         posicoes: ["LD"],        forca: 84 },
      { id: 'cesar-azpilicueta',   nome: "César Azpilicueta",   posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'antonio-rudiger',     nome: "Antonio Rüdiger",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'thiago-silva',        nome: "Thiago Silva",        posicoes: ["ZAG"],       forca: 85 },
      { id: 'trevoh-chalobah',     nome: "Trevoh Chalobah",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'marcos-alonso',       nome: "Marcos Alonso",       posicoes: ["LE"],        forca: 79 },
      { id: 'ben-chilwell',        nome: "Ben Chilwell",        posicoes: ["LE"],        forca: 81 },
      { id: 'ngolo-kante',         nome: "N'Golo Kanté",        posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'jorginho',            nome: "Jorginho",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mateo-kovacic',       nome: "Mateo Kovačić",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'mason-mount',         nome: "Mason Mount",         posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'kai-havertz',         nome: "Kai Havertz",         posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'christian-pulisic',   nome: "Christian Pulisic",   posicoes: ["PE","PD"],   forca: 81 },
      { id: 'hakim-ziyech',        nome: "Hakim Ziyech",        posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'romelu-lukaku',       nome: "Romelu Lukaku",       posicoes: ["ATA"],       forca: 84 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2022,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris',         nome: "Hugo Lloris",         posicoes: ["GOL"],       forca: 85 },
      { id: 'emerson-royal',       nome: "Emerson Royal",       posicoes: ["LD"],        forca: 79 },
      { id: 'cristian-romero',     nome: "Cristian Romero",     posicoes: ["ZAG"],       forca: 84 },
      { id: 'eric-dier',           nome: "Eric Dier",           posicoes: ["ZAG"],       forca: 81 },
      { id: 'ben-davies',          nome: "Ben Davies",          posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'sergio-reguilon',     nome: "Sergio Reguilón",     posicoes: ["LE"],        forca: 80 },
      { id: 'matt-doherty',        nome: "Matt Doherty",        posicoes: ["LD"],        forca: 79 },
      { id: 'pierre-emile-hojbjerg', nome: "Pierre-Emile Højbjerg", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'rodrigo-bentancur',   nome: "Rodrigo Bentancur",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'oliver-skipp',        nome: "Oliver Skipp",        posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'dejan-kulusevski',    nome: "Dejan Kulusevski",    posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'son-heung-min',       nome: "Son Heung-min",       posicoes: ["PE","ATA"],  forca: 89 },
      { id: 'lucas-moura',         nome: "Lucas Moura",         posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'harry-kane',          nome: "Harry Kane",          posicoes: ["ATA"],       forca: 89 },
      { id: 'steven-bergwijn',     nome: "Steven Bergwijn",     posicoes: ["PE","ATA"],  forca: 78 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2022,
    clube: "Arsenal",
    jogadores: [
      { id: 'aaron-ramsdale',      nome: "Aaron Ramsdale",      posicoes: ["GOL"],       forca: 82 },
      { id: 'takehiro-tomiyasu',   nome: "Takehiro Tomiyasu",   posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'ben-white',           nome: "Ben White",           posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'gabriel-magalhaes',   nome: "Gabriel Magalhães",   posicoes: ["ZAG"],       forca: 82 },
      { id: 'nuno-tavares',        nome: "Nuno Tavares",        posicoes: ["LE"],        forca: 77 },
      { id: 'kieran-tierney',      nome: "Kieran Tierney",      posicoes: ["LE"],        forca: 82 },
      { id: 'thomas-partey',       nome: "Thomas Partey",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'granit-xhaka',        nome: "Granit Xhaka",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'martin-odegaard',     nome: "Martin Ødegaard",     posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'emile-smith-rowe',    nome: "Emile Smith Rowe",    posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'bukayo-saka',         nome: "Bukayo Saka",         posicoes: ["PD","PE"],   forca: 84 },
      { id: 'gabriel-martinelli',  nome: "Gabriel Martinelli",  posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'alexandre-lacazette', nome: "Alexandre Lacazette", posicoes: ["ATA"],       forca: 81 },
      { id: 'eddie-nketiah',       nome: "Eddie Nketiah",       posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Premier League",
    edicao: 2022,
    clube: "Manchester United",
    jogadores: [
      { id: 'david-de-gea',        nome: "David de Gea",        posicoes: ["GOL"],       forca: 84 },
      { id: 'diogo-dalot',         nome: "Diogo Dalot",         posicoes: ["LD"],        forca: 80 },
      { id: 'aaron-wan-bissaka',   nome: "Aaron Wan-Bissaka",   posicoes: ["LD"],        forca: 80 },
      { id: 'raphael-varane',      nome: "Raphaël Varane",      posicoes: ["ZAG"],       forca: 85 },
      { id: 'harry-maguire',       nome: "Harry Maguire",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'victor-lindelof',     nome: "Victor Lindelöf",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'luke-shaw',           nome: "Luke Shaw",           posicoes: ["LE"],        forca: 81 },
      { id: 'fred',                nome: "Fred",                posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'scott-mctominay',     nome: "Scott McTominay",     posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'bruno-fernandes',     nome: "Bruno Fernandes",     posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'paul-pogba',          nome: "Paul Pogba",          posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'jadon-sancho',        nome: "Jadon Sancho",        posicoes: ["PE","PD"],   forca: 82 },
      { id: 'marcus-rashford',     nome: "Marcus Rashford",     posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA"],       forca: 87 },
      { id: 'anthony-elanga',      nome: "Anthony Elanga",      posicoes: ["PE","ATA"],  forca: 76 }
    ]
  }

];
