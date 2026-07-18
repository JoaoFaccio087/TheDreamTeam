// ============================================================
//  dados_champions.js  —  clubes da UEFA Champions League
//  (edicao = ano FINAL da temporada, ex.: 2016-17 -> 2017)
//  Carregue ANTES do dados.js no index.html.
// ============================================================

const DADOS_CHAMPIONS = [

  // ===== Edição 2025 (semifinalistas — PSG campeão, 5–0 sobre a Inter) =====

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "PSG",
    jogadores: [
      { id: 'gianluigi-donnarumma', nome: "Gianluigi Donnarumma", posicoes: ["GOL"], forca: 90 },
      { id: 'matvey-safonov', nome: "Matvey Safonov", posicoes: ["GOL"], forca: 78 },
      { id: 'achraf-hakimi', nome: "Achraf Hakimi", posicoes: ["LD","MD"], forca: 88 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["ZAG"], forca: 86 },
      { id: 'willian-pacho', nome: "Willian Pacho", posicoes: ["ZAG"], forca: 83 },
      { id: 'lucas-beraldo', nome: "Lucas Beraldo", posicoes: ["ZAG"], forca: 77 },
      { id: 'nuno-mendes', nome: "Nuno Mendes", posicoes: ["LE","ME"], forca: 87 },
      { id: 'vitinha', nome: "Vitinha", posicoes: ["MC","VOL"], forca: 88 },
      { id: 'joao-neves', nome: "João Neves", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'fabian-ruiz', nome: "Fabián Ruiz", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'warren-zaire-emery', nome: "Warren Zaïre-Emery", posicoes: ["MC","VOL"], forca: 80 },
      { id: 'ousmane-dembele', nome: "Ousmane Dembélé", posicoes: ["PD","ATA","PE"], forca: 92 },
      { id: 'khvicha-kvaratskhelia', nome: "Khvicha Kvaratskhelia", posicoes: ["PE","ATA","ME"], forca: 87 },
      { id: 'bradley-barcola', nome: "Bradley Barcola", posicoes: ["PE","PD","ATA"], forca: 84 },
      { id: 'desire-doue', nome: "Désiré Doué", posicoes: ["MEI","PD","ATA"], forca: 84 },
      { id: 'goncalo-ramos', nome: "Gonçalo Ramos", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'yann-sommer', nome: "Yann Sommer", posicoes: ["GOL"], forca: 84 },
      { id: 'josep-martinez', nome: "Josep Martínez", posicoes: ["GOL"], forca: 74 },
      { id: 'denzel-dumfries', nome: "Denzel Dumfries", posicoes: ["LD","MD"], forca: 83 },
      { id: 'alessandro-bastoni', nome: "Alessandro Bastoni", posicoes: ["ZAG","LE"], forca: 86 },
      { id: 'benjamin-pavard', nome: "Benjamin Pavard", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'francesco-acerbi', nome: "Francesco Acerbi", posicoes: ["ZAG"], forca: 82 },
      { id: 'federico-dimarco', nome: "Federico Dimarco", posicoes: ["LE","ME"], forca: 85 },
      { id: 'carlos-augusto', nome: "Carlos Augusto", posicoes: ["LE","ZAG"], forca: 78 },
      { id: 'nicolo-barella', nome: "Nicolò Barella", posicoes: ["MC","VOL"], forca: 87 },
      { id: 'hakan-calhanoglu', nome: "Hakan Çalhanoğlu", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'henrikh-mkhitaryan', nome: "Henrikh Mkhitaryan", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'davide-frattesi', nome: "Davide Frattesi", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'piotr-zielinski', nome: "Piotr Zieliński", posicoes: ["MEI","MC"], forca: 79 },
      { id: 'lautaro-martinez', nome: "Lautaro Martínez", posicoes: ["ATA"], forca: 88 },
      { id: 'marcus-thuram', nome: "Marcus Thuram", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'mehdi-taremi', nome: "Mehdi Taremi", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 86 },
      { id: 'wojciech-szczesny', nome: "Wojciech Szczęsny", posicoes: ["GOL"], forca: 79 },
      { id: 'jules-kounde', nome: "Jules Koundé", posicoes: ["LD","ZAG"], forca: 85 },
      { id: 'pau-cubarsi', nome: "Pau Cubarsí", posicoes: ["ZAG"], forca: 83 },
      { id: 'inigo-martinez', nome: "Íñigo Martínez", posicoes: ["ZAG"], forca: 83 },
      { id: 'ronald-araujo', nome: "Ronald Araújo", posicoes: ["ZAG","LD"], forca: 84 },
      { id: 'alejandro-balde', nome: "Alejandro Balde", posicoes: ["LE"], forca: 82 },
      { id: 'frenkie-de-jong', nome: "Frenkie de Jong", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'marc-casado', nome: "Marc Casadó", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'pedri', nome: "Pedri", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'dani-olmo', nome: "Dani Olmo", posicoes: ["MEI","MC"], forca: 84 },
      { id: 'fermin-lopez', nome: "Fermín López", posicoes: ["MEI","MC"], forca: 80 },
      { id: 'gavi', nome: "Gavi", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'raphinha', nome: "Raphinha", posicoes: ["PE","ATA","MD"], forca: 89 },
      { id: 'lamine-yamal', nome: "Lamine Yamal", posicoes: ["PD","ATA","MD"], forca: 88 },
      { id: 'robert-lewandowski', nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Arsenal",
    jogadores: [
      { id: 'david-raya', nome: "David Raya", posicoes: ["GOL"], forca: 85 },
      { id: 'ben-white', nome: "Ben White", posicoes: ["LD"], forca: 81 },
      { id: 'jurrien-timber', nome: "Jurriën Timber", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'william-saliba', nome: "William Saliba", posicoes: ["ZAG"], forca: 87 },
      { id: 'gabriel-magalhaes', nome: "Gabriel Magalhães", posicoes: ["ZAG"], forca: 86 },
      { id: 'riccardo-calafiori', nome: "Riccardo Calafiori", posicoes: ["LE","ZAG"], forca: 80 },
      { id: 'myles-lewis-skelly', nome: "Myles Lewis-Skelly", posicoes: ["LE","VOL"], forca: 77 },
      { id: 'declan-rice', nome: "Declan Rice", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'thomas-partey', nome: "Thomas Partey", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'mikel-merino', nome: "Mikel Merino", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'martin-degaard', nome: "Martin Ødegaard", posicoes: ["MEI","MC"], forca: 87 },
      { id: 'bukayo-saka', nome: "Bukayo Saka", posicoes: ["PD","ATA","MD"], forca: 88 },
      { id: 'gabriel-martinelli', nome: "Gabriel Martinelli", posicoes: ["PE","ATA","ME"], forca: 83 },
      { id: 'leandro-trossard', nome: "Leandro Trossard", posicoes: ["PE","ATA","MEI"], forca: 82 },
      { id: 'kai-havertz', nome: "Kai Havertz", posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'gabriel-jesus', nome: "Gabriel Jesus", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2024 (semifinalistas — Real Madrid campeão, 2–0 sobre o Borussia Dortmund) =====

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois', nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 89 },
      { id: 'andriy-lunin', nome: "Andriy Lunin", posicoes: ["GOL"], forca: 80 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 85 },
      { id: 'antonio-rudiger', nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 86 },
      { id: 'eder-militao', nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { id: 'nacho', nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 81 },
      { id: 'ferland-mendy', nome: "Ferland Mendy", posicoes: ["LE"], forca: 82 },
      { id: 'aurelien-tchouameni', nome: "Aurélien Tchouaméni", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'eduardo-camavinga', nome: "Eduardo Camavinga", posicoes: ["VOL","MC","LE"], forca: 85 },
      { id: 'federico-valverde', nome: "Federico Valverde", posicoes: ["MC","VOL","MD"], forca: 86 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'jude-bellingham', nome: "Jude Bellingham", posicoes: ["MEI","MC","ATA"], forca: 90 },
      { id: 'vinicius-junior', nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 91 },
      { id: 'rodrygo', nome: "Rodrygo", posicoes: ["PD","ATA","PE"], forca: 86 },
      { id: 'joselu', nome: "Joselu", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 87 },
      { id: 'sven-ulreich', nome: "Sven Ulreich", posicoes: ["GOL"], forca: 73 },
      { id: 'joshua-kimmich', nome: "Joshua Kimmich", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'noussair-mazraoui', nome: "Noussair Mazraoui", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'matthijs-de-ligt', nome: "Matthijs de Ligt", posicoes: ["ZAG"], forca: 84 },
      { id: 'dayot-upamecano', nome: "Dayot Upamecano", posicoes: ["ZAG"], forca: 83 },
      { id: 'kim-min-jae', nome: "Kim Min-jae", posicoes: ["ZAG"], forca: 83 },
      { id: 'alphonso-davies', nome: "Alphonso Davies", posicoes: ["LE","ME"], forca: 85 },
      { id: 'leon-goretzka', nome: "Leon Goretzka", posicoes: ["MC","VOL"], forca: 82 },
      { id: 'konrad-laimer', nome: "Konrad Laimer", posicoes: ["VOL","MC","LD"], forca: 79 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'jamal-musiala', nome: "Jamal Musiala", posicoes: ["MEI","PE","MC"], forca: 87 },
      { id: 'leroy-sane', nome: "Leroy Sané", posicoes: ["PD","PE","MD"], forca: 86 },
      { id: 'kingsley-coman', nome: "Kingsley Coman", posicoes: ["PE","PD","ME"], forca: 84 },
      { id: 'serge-gnabry', nome: "Serge Gnabry", posicoes: ["PD","PE","ATA"], forca: 83 },
      { id: 'harry-kane', nome: "Harry Kane", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Borussia Dortmund",
    jogadores: [
      { id: 'gregor-kobel', nome: "Gregor Kobel", posicoes: ["GOL"], forca: 84 },
      { id: 'alexander-meyer', nome: "Alexander Meyer", posicoes: ["GOL"], forca: 71 },
      { id: 'julian-ryerson', nome: "Julian Ryerson", posicoes: ["LD","LE"], forca: 78 },
      { id: 'mats-hummels', nome: "Mats Hummels", posicoes: ["ZAG"], forca: 83 },
      { id: 'nico-schlotterbeck', nome: "Nico Schlotterbeck", posicoes: ["ZAG"], forca: 82 },
      { id: 'niklas-sule', nome: "Niklas Süle", posicoes: ["ZAG","LD"], forca: 80 },
      { id: 'ramy-bensebaini', nome: "Ramy Bensebaini", posicoes: ["LE","ZAG"], forca: 78 },
      { id: 'ian-maatsen', nome: "Ian Maatsen", posicoes: ["LE","ME"], forca: 78 },
      { id: 'emre-can', nome: "Emre Can", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'marcel-sabitzer', nome: "Marcel Sabitzer", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'julian-brandt', nome: "Julian Brandt", posicoes: ["MEI","MC","PE"], forca: 83 },
      { id: 'marco-reus', nome: "Marco Reus", posicoes: ["MEI","ATA","PE"], forca: 82 },
      { id: 'jadon-sancho', nome: "Jadon Sancho", posicoes: ["PE","PD","MD"], forca: 82 },
      { id: 'karim-adeyemi', nome: "Karim Adeyemi", posicoes: ["PE","PD","ATA"], forca: 80 },
      { id: 'donyell-malen', nome: "Donyell Malen", posicoes: ["PD","PE","ATA"], forca: 81 },
      { id: 'niclas-fullkrug', nome: "Niclas Füllkrug", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "PSG",
    jogadores: [
      { id: 'gianluigi-donnarumma', nome: "Gianluigi Donnarumma", posicoes: ["GOL"], forca: 88 },
      { id: 'arnau-tenas', nome: "Arnau Tenas", posicoes: ["GOL"], forca: 71 },
      { id: 'achraf-hakimi', nome: "Achraf Hakimi", posicoes: ["LD","MD"], forca: 87 },
      { id: 'nordi-mukiele', nome: "Nordi Mukiele", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["ZAG"], forca: 86 },
      { id: 'milan-skriniar', nome: "Milan Škriniar", posicoes: ["ZAG"], forca: 83 },
      { id: 'lucas-hernandez', nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 82 },
      { id: 'nuno-mendes', nome: "Nuno Mendes", posicoes: ["LE","ME"], forca: 84 },
      { id: 'vitinha', nome: "Vitinha", posicoes: ["MC","VOL"], forca: 84 },
      { id: 'warren-zaire-emery', nome: "Warren Zaïre-Emery", posicoes: ["MC","VOL"], forca: 82 },
      { id: 'manuel-ugarte', nome: "Manuel Ugarte", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'fabian-ruiz', nome: "Fabián Ruiz", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'kang-in-lee', nome: "Kang-in Lee", posicoes: ["MEI","PD","MC"], forca: 79 },
      { id: 'ousmane-dembele', nome: "Ousmane Dembélé", posicoes: ["PD","PE","ATA"], forca: 85 },
      { id: 'kylian-mbappe', nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 93 },
      { id: 'randal-kolo-muani', nome: "Randal Kolo Muani", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 2023 (semifinalistas — Manchester City campeão, 1–0 sobre a Inter) =====

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson', nome: "Ederson", posicoes: ["GOL"], forca: 88 },
      { id: 'stefan-ortega', nome: "Stefan Ortega", posicoes: ["GOL"], forca: 76 },
      { id: 'kyle-walker', nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'ruben-dias', nome: "Rúben Dias", posicoes: ["ZAG"], forca: 87 },
      { id: 'john-stones', nome: "John Stones", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'manuel-akanji', nome: "Manuel Akanji", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'nathan-ake', nome: "Nathan Aké", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'rodri', nome: "Rodri", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'ilkay-gundogan', nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'kevin-de-bruyne', nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 91 },
      { id: 'bernardo-silva', nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 86 },
      { id: 'jack-grealish', nome: "Jack Grealish", posicoes: ["PE","ME"], forca: 84 },
      { id: 'phil-foden', nome: "Phil Foden", posicoes: ["PE","PD","MEI"], forca: 85 },
      { id: 'riyad-mahrez', nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 84 },
      { id: 'julian-alvarez', nome: "Julián Álvarez", posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'erling-haaland', nome: "Erling Haaland", posicoes: ["ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'andre-onana', nome: "André Onana", posicoes: ["GOL"], forca: 84 },
      { id: 'samir-handanovic', nome: "Samir Handanović", posicoes: ["GOL"], forca: 76 },
      { id: 'denzel-dumfries', nome: "Denzel Dumfries", posicoes: ["LD","MD"], forca: 82 },
      { id: 'milan-skriniar', nome: "Milan Škriniar", posicoes: ["ZAG"], forca: 84 },
      { id: 'francesco-acerbi', nome: "Francesco Acerbi", posicoes: ["ZAG"], forca: 82 },
      { id: 'alessandro-bastoni', nome: "Alessandro Bastoni", posicoes: ["ZAG","LE"], forca: 85 },
      { id: 'stefan-de-vrij', nome: "Stefan de Vrij", posicoes: ["ZAG"], forca: 81 },
      { id: 'federico-dimarco', nome: "Federico Dimarco", posicoes: ["LE","ME"], forca: 83 },
      { id: 'robin-gosens', nome: "Robin Gosens", posicoes: ["LE","ME"], forca: 78 },
      { id: 'nicolo-barella', nome: "Nicolò Barella", posicoes: ["MC","VOL"], forca: 86 },
      { id: 'marcelo-brozovic', nome: "Marcelo Brozović", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'hakan-calhanoglu', nome: "Hakan Çalhanoğlu", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'henrikh-mkhitaryan', nome: "Henrikh Mkhitaryan", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'lautaro-martinez', nome: "Lautaro Martínez", posicoes: ["ATA"], forca: 87 },
      { id: 'romelu-lukaku', nome: "Romelu Lukaku", posicoes: ["ATA"], forca: 84 },
      { id: 'edin-dzeko', nome: "Edin Džeko", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois', nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 90 },
      { id: 'andriy-lunin', nome: "Andriy Lunin", posicoes: ["GOL"], forca: 78 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 84 },
      { id: 'eder-militao', nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { id: 'antonio-rudiger', nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 85 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 84 },
      { id: 'nacho', nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 80 },
      { id: 'ferland-mendy', nome: "Ferland Mendy", posicoes: ["LE"], forca: 81 },
      { id: 'aurelien-tchouameni', nome: "Aurélien Tchouaméni", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'eduardo-camavinga', nome: "Eduardo Camavinga", posicoes: ["VOL","MC","LE"], forca: 83 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'federico-valverde', nome: "Federico Valverde", posicoes: ["MC","VOL","MD"], forca: 85 },
      { id: 'vinicius-junior', nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 89 },
      { id: 'rodrygo', nome: "Rodrygo", posicoes: ["PD","ATA","PE"], forca: 84 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Milan",
    jogadores: [
      { id: 'mike-maignan', nome: "Mike Maignan", posicoes: ["GOL"], forca: 86 },
      { id: 'ciprian-tatarusanu', nome: "Ciprian Tătărușanu", posicoes: ["GOL"], forca: 72 },
      { id: 'davide-calabria', nome: "Davide Calabria", posicoes: ["LD"], forca: 78 },
      { id: 'pierre-kalulu', nome: "Pierre Kalulu", posicoes: ["ZAG","LD"], forca: 78 },
      { id: 'fikayo-tomori', nome: "Fikayo Tomori", posicoes: ["ZAG"], forca: 82 },
      { id: 'simon-kj-r', nome: "Simon Kjær", posicoes: ["ZAG"], forca: 79 },
      { id: 'theo-hernandez', nome: "Theo Hernández", posicoes: ["LE","ME"], forca: 85 },
      { id: 'sandro-tonali', nome: "Sandro Tonali", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'ismael-bennacer', nome: "Ismaël Bennacer", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'rade-krunic', nome: "Rade Krunić", posicoes: ["MC","VOL"], forca: 74 },
      { id: 'brahim-diaz', nome: "Brahim Díaz", posicoes: ["MEI","PE"], forca: 80 },
      { id: 'rafael-leao', nome: "Rafael Leão", posicoes: ["PE","ATA"], forca: 86 },
      { id: 'alexis-saelemaekers', nome: "Alexis Saelemaekers", posicoes: ["PD","MD"], forca: 75 },
      { id: 'charles-de-ketelaere', nome: "Charles De Ketelaere", posicoes: ["MEI","ATA"], forca: 76 },
      { id: 'olivier-giroud', nome: "Olivier Giroud", posicoes: ["ATA"], forca: 81 },
      { id: 'ante-rebic', nome: "Ante Rebić", posicoes: ["ATA","PE"], forca: 75 }
    ]
  },

  // ===== Edição 2022 (2021-22 — Real Madrid campeão, 1–0 sobre o Liverpool) =====

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois', nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 89 },
      { id: 'andriy-lunin', nome: "Andriy Lunin", posicoes: ["GOL"], forca: 74 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { id: 'eder-militao', nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 85 },
      { id: 'nacho', nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 79 },
      { id: 'ferland-mendy', nome: "Ferland Mendy", posicoes: ["LE"], forca: 81 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 87 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'federico-valverde', nome: "Federico Valverde", posicoes: ["MC","MD","VOL"], forca: 84 },
      { id: 'eduardo-camavinga', nome: "Eduardo Camavinga", posicoes: ["MC","VOL"], forca: 80 },
      { id: 'rodrygo', nome: "Rodrygo", posicoes: ["PD","PE","ATA"], forca: 83 },
      { id: 'vinicius-junior', nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 86 },
      { id: 'marco-asensio', nome: "Marco Asensio", posicoes: ["PD","PE","MEI"], forca: 81 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson', nome: "Alisson", posicoes: ["GOL"], forca: 89 },
      { id: 'caoimhin-kelleher', nome: "Caoimhín Kelleher", posicoes: ["GOL"], forca: 75 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD","MD"], forca: 85 },
      { id: 'andrew-robertson', nome: "Andrew Robertson", posicoes: ["LE","ME"], forca: 84 },
      { id: 'virgil-van-dijk', nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 89 },
      { id: 'joel-matip', nome: "Joël Matip", posicoes: ["ZAG"], forca: 82 },
      { id: 'ibrahima-konate', nome: "Ibrahima Konaté", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'jordan-henderson', nome: "Jordan Henderson", posicoes: ["MC","VOL"], forca: 82 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'naby-keita', nome: "Naby Keïta", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'mohamed-salah', nome: "Mohamed Salah", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'sadio-mane', nome: "Sadio Mané", posicoes: ["PE","ATA"], forca: 88 },
      { id: 'luis-diaz', nome: "Luis Díaz", posicoes: ["PE","ATA","MD"], forca: 83 },
      { id: 'diogo-jota', nome: "Diogo Jota", posicoes: ["ATA","PE"], forca: 83 },
      { id: 'roberto-firmino', nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson', nome: "Ederson", posicoes: ["GOL"], forca: 88 },
      { id: 'zack-steffen', nome: "Zack Steffen", posicoes: ["GOL"], forca: 74 },
      { id: 'kyle-walker', nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'joao-cancelo', nome: "João Cancelo", posicoes: ["LD","LE"], forca: 85 },
      { id: 'ruben-dias', nome: "Rúben Dias", posicoes: ["ZAG"], forca: 86 },
      { id: 'aymeric-laporte', nome: "Aymeric Laporte", posicoes: ["ZAG","LE"], forca: 84 },
      { id: 'john-stones', nome: "John Stones", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'rodri', nome: "Rodri", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'kevin-de-bruyne', nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 91 },
      { id: 'bernardo-silva', nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 86 },
      { id: 'ilkay-gundogan', nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'phil-foden', nome: "Phil Foden", posicoes: ["MEI","PE","PD"], forca: 84 },
      { id: 'riyad-mahrez', nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 85 },
      { id: 'raheem-sterling', nome: "Raheem Sterling", posicoes: ["PE","PD","ATA"], forca: 84 },
      { id: 'jack-grealish', nome: "Jack Grealish", posicoes: ["PE","ME"], forca: 83 },
      { id: 'gabriel-jesus', nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Villarreal",
    jogadores: [
      { id: 'geronimo-rulli', nome: "Gerónimo Rulli", posicoes: ["GOL"], forca: 80 },
      { id: 'sergio-asenjo', nome: "Sergio Asenjo", posicoes: ["GOL"], forca: 75 },
      { id: 'juan-foyth', nome: "Juan Foyth", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'pau-torres', nome: "Pau Torres", posicoes: ["ZAG"], forca: 82 },
      { id: 'raul-albiol', nome: "Raúl Albiol", posicoes: ["ZAG"], forca: 78 },
      { id: 'aissa-mandi', nome: "Aïssa Mandi", posicoes: ["ZAG"], forca: 77 },
      { id: 'pervis-estupinan', nome: "Pervis Estupiñán", posicoes: ["LE","ME"], forca: 79 },
      { id: 'etienne-capoue', nome: "Étienne Capoue", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'dani-parejo', nome: "Dani Parejo", posicoes: ["MC","MEI","VOL"], forca: 82 },
      { id: 'francis-coquelin', nome: "Francis Coquelin", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'giovani-lo-celso', nome: "Giovani Lo Celso", posicoes: ["MEI","MC"], forca: 81 },
      { id: 'samuel-chukwueze', nome: "Samuel Chukwueze", posicoes: ["PD","PE"], forca: 79 },
      { id: 'yeremy-pino', nome: "Yéremy Pino", posicoes: ["PD","PE","MEI"], forca: 78 },
      { id: 'arnaut-danjuma', nome: "Arnaut Danjuma", posicoes: ["PE","ATA"], forca: 81 },
      { id: 'gerard-moreno', nome: "Gerard Moreno", posicoes: ["ATA","PE"], forca: 83 },
      { id: 'boulaye-dia', nome: "Boulaye Dia", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2021 (2020-21 — Chelsea campeão, 1–0 sobre o Manchester City) =====

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Chelsea",
    jogadores: [
      { id: 'edouard-mendy', nome: "Édouard Mendy", posicoes: ["GOL"], forca: 84 },
      { id: 'kepa-arrizabalaga', nome: "Kepa Arrizabalaga", posicoes: ["GOL"], forca: 76 },
      { id: 'cesar-azpilicueta', nome: "César Azpilicueta", posicoes: ["ZAG","LD"], forca: 81 },
      { id: 'thiago-silva', nome: "Thiago Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'antonio-rudiger', nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 82 },
      { id: 'andreas-christensen', nome: "Andreas Christensen", posicoes: ["ZAG"], forca: 78 },
      { id: 'reece-james', nome: "Reece James", posicoes: ["LD","MD"], forca: 81 },
      { id: 'ben-chilwell', nome: "Ben Chilwell", posicoes: ["LE","ME"], forca: 80 },
      { id: 'ngolo-kante', nome: "N'Golo Kanté", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'mateo-kovacic', nome: "Mateo Kovačić", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'mason-mount', nome: "Mason Mount", posicoes: ["MEI","MC"], forca: 82 },
      { id: 'kai-havertz', nome: "Kai Havertz", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'christian-pulisic', nome: "Christian Pulisic", posicoes: ["PE","PD","MEI"], forca: 81 },
      { id: 'hakim-ziyech', nome: "Hakim Ziyech", posicoes: ["PD","MEI"], forca: 80 },
      { id: 'timo-werner', nome: "Timo Werner", posicoes: ["ATA","PE"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Manchester City",
    jogadores: [
      { id: 'ederson', nome: "Ederson", posicoes: ["GOL"], forca: 88 },
      { id: 'zack-steffen', nome: "Zack Steffen", posicoes: ["GOL"], forca: 74 },
      { id: 'kyle-walker', nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'joao-cancelo', nome: "João Cancelo", posicoes: ["LD","LE"], forca: 84 },
      { id: 'ruben-dias', nome: "Rúben Dias", posicoes: ["ZAG"], forca: 86 },
      { id: 'aymeric-laporte', nome: "Aymeric Laporte", posicoes: ["ZAG","LE"], forca: 83 },
      { id: 'john-stones', nome: "John Stones", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'oleksandr-zinchenko', nome: "Oleksandr Zinchenko", posicoes: ["LE","MC"], forca: 78 },
      { id: 'rodri', nome: "Rodri", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'ilkay-gundogan', nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'kevin-de-bruyne', nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 91 },
      { id: 'bernardo-silva', nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 84 },
      { id: 'phil-foden', nome: "Phil Foden", posicoes: ["MEI","PE","PD"], forca: 83 },
      { id: 'riyad-mahrez', nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 84 },
      { id: 'raheem-sterling', nome: "Raheem Sterling", posicoes: ["PE","PD","ATA"], forca: 84 },
      { id: 'gabriel-jesus', nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois', nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 88 },
      { id: 'andriy-lunin', nome: "Andriy Lunin", posicoes: ["GOL"], forca: 73 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { id: 'lucas-vazquez', nome: "Lucas Vázquez", posicoes: ["LD","PD","MD"], forca: 78 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 85 },
      { id: 'eder-militao', nome: "Éder Militão", posicoes: ["ZAG"], forca: 81 },
      { id: 'nacho', nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 78 },
      { id: 'ferland-mendy', nome: "Ferland Mendy", posicoes: ["LE"], forca: 80 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 87 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'federico-valverde', nome: "Federico Valverde", posicoes: ["MC","MD","VOL"], forca: 82 },
      { id: 'marco-asensio', nome: "Marco Asensio", posicoes: ["PD","PE","MEI"], forca: 80 },
      { id: 'vinicius-junior', nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "PSG",
    jogadores: [
      { id: 'keylor-navas', nome: "Keylor Navas", posicoes: ["GOL"], forca: 86 },
      { id: 'sergio-rico', nome: "Sergio Rico", posicoes: ["GOL"], forca: 74 },
      { id: 'alessandro-florenzi', nome: "Alessandro Florenzi", posicoes: ["LD","MD"], forca: 78 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'presnel-kimpembe', nome: "Presnel Kimpembe", posicoes: ["ZAG"], forca: 82 },
      { id: 'thilo-kehrer', nome: "Thilo Kehrer", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'abdou-diallo', nome: "Abdou Diallo", posicoes: ["ZAG","LE"], forca: 78 },
      { id: 'layvin-kurzawa', nome: "Layvin Kurzawa", posicoes: ["LE"], forca: 74 },
      { id: 'marco-verratti', nome: "Marco Verratti", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'idrissa-gueye', nome: "Idrissa Gueye", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'leandro-paredes', nome: "Leandro Paredes", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'ander-herrera', nome: "Ander Herrera", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'angel-di-maria', nome: "Ángel Di María", posicoes: ["PD","MEI","PE"], forca: 84 },
      { id: 'neymar', nome: "Neymar", posicoes: ["PE","MEI","ATA"], forca: 90 },
      { id: 'mauro-icardi', nome: "Mauro Icardi", posicoes: ["ATA"], forca: 82 },
      { id: 'kylian-mbappe', nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 91 }
    ]
  },

  // ===== Edição 2020 (2019-20 — Bayern de Munique campeão, 1–0 sobre o PSG) =====

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 89 },
      { id: 'sven-ulreich', nome: "Sven Ulreich", posicoes: ["GOL"], forca: 73 },
      { id: 'benjamin-pavard', nome: "Benjamin Pavard", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'joshua-kimmich', nome: "Joshua Kimmich", posicoes: ["VOL","LD","MC"], forca: 87 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 82 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 85 },
      { id: 'niklas-sule', nome: "Niklas Süle", posicoes: ["ZAG"], forca: 80 },
      { id: 'alphonso-davies', nome: "Alphonso Davies", posicoes: ["LE","ME"], forca: 82 },
      { id: 'leon-goretzka', nome: "Leon Goretzka", posicoes: ["MC","VOL"], forca: 83 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 85 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 85 },
      { id: 'serge-gnabry', nome: "Serge Gnabry", posicoes: ["PD","PE","ATA"], forca: 84 },
      { id: 'kingsley-coman', nome: "Kingsley Coman", posicoes: ["PE","PD"], forca: 82 },
      { id: 'ivan-perisic', nome: "Ivan Perišić", posicoes: ["PE","ME","ATA"], forca: 80 },
      { id: 'philippe-coutinho', nome: "Philippe Coutinho", posicoes: ["MEI","PE"], forca: 82 },
      { id: 'robert-lewandowski', nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "PSG",
    jogadores: [
      { id: 'keylor-navas', nome: "Keylor Navas", posicoes: ["GOL"], forca: 86 },
      { id: 'sergio-rico', nome: "Sergio Rico", posicoes: ["GOL"], forca: 74 },
      { id: 'thomas-meunier', nome: "Thomas Meunier", posicoes: ["LD","MD"], forca: 78 },
      { id: 'thiago-silva', nome: "Thiago Silva", posicoes: ["ZAG"], forca: 85 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'presnel-kimpembe', nome: "Presnel Kimpembe", posicoes: ["ZAG"], forca: 81 },
      { id: 'thilo-kehrer', nome: "Thilo Kehrer", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'juan-bernat', nome: "Juan Bernat", posicoes: ["LE","ME"], forca: 79 },
      { id: 'marco-verratti', nome: "Marco Verratti", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'idrissa-gueye', nome: "Idrissa Gueye", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'leandro-paredes', nome: "Leandro Paredes", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'ander-herrera', nome: "Ander Herrera", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'angel-di-maria', nome: "Ángel Di María", posicoes: ["PD","MEI","PE"], forca: 84 },
      { id: 'neymar', nome: "Neymar", posicoes: ["PE","MEI","ATA"], forca: 91 },
      { id: 'mauro-icardi', nome: "Mauro Icardi", posicoes: ["ATA"], forca: 82 },
      { id: 'kylian-mbappe', nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "Lyon",
    jogadores: [
      { id: 'anthony-lopes', nome: "Anthony Lopes", posicoes: ["GOL"], forca: 82 },
      { id: 'ciprian-tatarusanu', nome: "Ciprian Tătărușanu", posicoes: ["GOL"], forca: 73 },
      { id: 'leo-dubois', nome: "Léo Dubois", posicoes: ["LD","MD"], forca: 77 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["ZAG"], forca: 78 },
      { id: 'jason-denayer', nome: "Jason Denayer", posicoes: ["ZAG"], forca: 78 },
      { id: 'joachim-andersen', nome: "Joachim Andersen", posicoes: ["ZAG"], forca: 78 },
      { id: 'fernando-marcal', nome: "Fernando Marçal", posicoes: ["LE"], forca: 74 },
      { id: 'maxwel-cornet', nome: "Maxwel Cornet", posicoes: ["LE","PE","ME"], forca: 78 },
      { id: 'bruno-guimaraes', nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'houssem-aouar', nome: "Houssem Aouar", posicoes: ["MEI","MC"], forca: 82 },
      { id: 'maxence-caqueret', nome: "Maxence Caqueret", posicoes: ["MC","VOL"], forca: 75 },
      { id: 'thiago-mendes', nome: "Thiago Mendes", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'lucas-tousart', nome: "Lucas Tousart", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'memphis-depay', nome: "Memphis Depay", posicoes: ["ATA","MEI","PE"], forca: 84 },
      { id: 'karl-toko-ekambi', nome: "Karl Toko Ekambi", posicoes: ["PE","ATA"], forca: 78 },
      { id: 'moussa-dembele', nome: "Moussa Dembélé", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "RB Leipzig",
    jogadores: [
      { id: 'peter-gulacsi', nome: "Péter Gulácsi", posicoes: ["GOL"], forca: 81 },
      { id: 'yvon-mvogo', nome: "Yvon Mvogo", posicoes: ["GOL"], forca: 71 },
      { id: 'nordi-mukiele', nome: "Nordi Mukiele", posicoes: ["LD","ZAG"], forca: 78 },
      { id: 'lukas-klostermann', nome: "Lukas Klostermann", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'dayot-upamecano', nome: "Dayot Upamecano", posicoes: ["ZAG"], forca: 81 },
      { id: 'marcel-halstenberg', nome: "Marcel Halstenberg", posicoes: ["ZAG","LE"], forca: 77 },
      { id: 'angelino', nome: "Angeliño", posicoes: ["LE","ME"], forca: 78 },
      { id: 'konrad-laimer', nome: "Konrad Laimer", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'kevin-kampl', nome: "Kevin Kampl", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'marcel-sabitzer', nome: "Marcel Sabitzer", posicoes: ["MC","MEI","VOL"], forca: 81 },
      { id: 'tyler-adams', nome: "Tyler Adams", posicoes: ["VOL","MC"], forca: 74 },
      { id: 'christopher-nkunku', nome: "Christopher Nkunku", posicoes: ["MEI","PE","MC"], forca: 79 },
      { id: 'dani-olmo', nome: "Dani Olmo", posicoes: ["MEI","MC"], forca: 80 },
      { id: 'emil-forsberg', nome: "Emil Forsberg", posicoes: ["MEI","PE"], forca: 79 },
      { id: 'yussuf-poulsen', nome: "Yussuf Poulsen", posicoes: ["ATA"], forca: 76 },
      { id: 'patrik-schick', nome: "Patrik Schick", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Liverpool",
    jogadores: [
      { id: 'alisson', nome: "Alisson", posicoes: ["GOL"], forca: 89 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD"], forca: 85 },
      { id: 'virgil-van-dijk', nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 92 },
      { id: 'joel-matip', nome: "Joël Matip", posicoes: ["ZAG"], forca: 82 },
      { id: 'joe-gomez', nome: "Joe Gomez", posicoes: ["ZAG","LD"], forca: 80 },
      { id: 'andrew-robertson', nome: "Andrew Robertson", posicoes: ["LE"], forca: 85 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["VOL"], forca: 85 },
      { id: 'jordan-henderson', nome: "Jordan Henderson", posicoes: ["MC","VOL"], forca: 83 },
      { id: 'gini-wijnaldum', nome: "Gini Wijnaldum", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'naby-keita', nome: "Naby Keïta", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'james-milner', nome: "James Milner", posicoes: ["MC","LD"], forca: 80 },
      { id: 'mohamed-salah', nome: "Mohamed Salah", posicoes: ["PD","ATA","MD"], forca: 91 },
      { id: 'sadio-mane', nome: "Sadio Mané", posicoes: ["PE","ATA","ME"], forca: 90 },
      { id: 'roberto-firmino', nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'xherdan-shaqiri', nome: "Xherdan Shaqiri", posicoes: ["MEI","PD"], forca: 80 },
      { id: 'divock-origi', nome: "Divock Origi", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Tottenham",
    jogadores: [
      { id: 'hugo-lloris', nome: "Hugo Lloris", posicoes: ["GOL"], forca: 85 },
      { id: 'paulo-gazzaniga', nome: "Paulo Gazzaniga", posicoes: ["GOL"], forca: 73 },
      { id: 'kieran-trippier', nome: "Kieran Trippier", posicoes: ["LD"], forca: 80 },
      { id: 'toby-alderweireld', nome: "Toby Alderweireld", posicoes: ["ZAG"], forca: 84 },
      { id: 'jan-vertonghen', nome: "Jan Vertonghen", posicoes: ["ZAG","LE"], forca: 84 },
      { id: 'davinson-sanchez', nome: "Davinson Sánchez", posicoes: ["ZAG"], forca: 80 },
      { id: 'danny-rose', nome: "Danny Rose", posicoes: ["LE"], forca: 79 },
      { id: 'ben-davies', nome: "Ben Davies", posicoes: ["LE"], forca: 78 },
      { id: 'moussa-sissoko', nome: "Moussa Sissoko", posicoes: ["MC","VOL"], forca: 81 },
      { id: 'harry-winks', nome: "Harry Winks", posicoes: ["MC"], forca: 77 },
      { id: 'eric-dier', nome: "Eric Dier", posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'christian-eriksen', nome: "Christian Eriksen", posicoes: ["MEI"], forca: 87 },
      { id: 'dele-alli', nome: "Dele Alli", posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'heung-min-son', nome: "Heung-min Son", posicoes: ["PE","ATA","ME"], forca: 86 },
      { id: 'harry-kane', nome: "Harry Kane", posicoes: ["ATA"], forca: 89 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["PD","ATA","MD"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 89 },
      { id: 'jasper-cillessen', nome: "Jasper Cillessen", posicoes: ["GOL"], forca: 78 },
      { id: 'nelson-semedo', nome: "Nélson Semedo", posicoes: ["LD"], forca: 80 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 86 },
      { id: 'clement-lenglet', nome: "Clément Lenglet", posicoes: ["ZAG"], forca: 82 },
      { id: 'samuel-umtiti', nome: "Samuel Umtiti", posicoes: ["ZAG"], forca: 82 },
      { id: 'jordi-alba', nome: "Jordi Alba", posicoes: ["LE"], forca: 86 },
      { id: 'sergi-roberto', nome: "Sergi Roberto", posicoes: ["LD","MC"], forca: 80 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL"], forca: 87 },
      { id: 'arturo-vidal', nome: "Arturo Vidal", posicoes: ["MC","VOL"], forca: 84 },
      { id: 'ivan-rakitic', nome: "Ivan Rakitić", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'arthur', nome: "Arthur", posicoes: ["MC"], forca: 80 },
      { id: 'philippe-coutinho', nome: "Philippe Coutinho", posicoes: ["MEI","PE"], forca: 85 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["PD","ATA","MD"], forca: 96 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["ATA"], forca: 89 },
      { id: 'ousmane-dembele', nome: "Ousmane Dembélé", posicoes: ["PE","PD","ME"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Ajax",
    jogadores: [
      { id: 'andre-onana', nome: "André Onana", posicoes: ["GOL"], forca: 82 },
      { id: 'noussair-mazraoui', nome: "Noussair Mazraoui", posicoes: ["LD"], forca: 78 },
      { id: 'matthijs-de-ligt', nome: "Matthijs de Ligt", posicoes: ["ZAG"], forca: 85 },
      { id: 'daley-blind', nome: "Daley Blind", posicoes: ["ZAG","LE"], forca: 81 },
      { id: 'joel-veltman', nome: "Joël Veltman", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'nicolas-tagliafico', nome: "Nicolás Tagliafico", posicoes: ["LE"], forca: 80 },
      { id: 'frenkie-de-jong', nome: "Frenkie de Jong", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'lasse-schone', nome: "Lasse Schöne", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'donny-van-de-beek', nome: "Donny van de Beek", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'hakim-ziyech', nome: "Hakim Ziyech", posicoes: ["MEI","PD","MD"], forca: 84 },
      { id: 'dusan-tadic', nome: "Dušan Tadić", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'david-neres', nome: "David Neres", posicoes: ["PD","PE","ME"], forca: 81 },
      { id: 'kasper-dolberg', nome: "Kasper Dolberg", posicoes: ["ATA"], forca: 78 },
      { id: 'klaas-jan-huntelaar', nome: "Klaas-Jan Huntelaar", posicoes: ["ATA"], forca: 75 },
      { id: 'carel-eiting', nome: "Carel Eiting", posicoes: ["MC"], forca: 72 },
      { id: 'rasmus-kristensen', nome: "Rasmus Kristensen", posicoes: ["LD"], forca: 71 }
    ]
  },

  // ===== Edição 2018 (2017-18 — Real Madrid campeão, 3–1 sobre o Liverpool, o tri seguido) =====

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Real Madrid",
    jogadores: [
      { id: 'keylor-navas', nome: "Keylor Navas", posicoes: ["GOL"], forca: 84 },
      { id: 'kiko-casilla', nome: "Kiko Casilla", posicoes: ["GOL"], forca: 73 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 84 },
      { id: 'nacho', nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 78 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 88 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'mateo-kovacic', nome: "Mateo Kovačić", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'isco', nome: "Isco", posicoes: ["MEI","PE","MC"], forca: 84 },
      { id: 'marco-asensio', nome: "Marco Asensio", posicoes: ["PE","PD","MEI"], forca: 80 },
      { id: 'gareth-bale', nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 86 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 84 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Liverpool",
    jogadores: [
      { id: 'loris-karius', nome: "Loris Karius", posicoes: ["GOL"], forca: 74 },
      { id: 'simon-mignolet', nome: "Simon Mignolet", posicoes: ["GOL"], forca: 75 },
      { id: 'trent-alexander-arnold', nome: "Trent Alexander-Arnold", posicoes: ["LD","MD"], forca: 80 },
      { id: 'andrew-robertson', nome: "Andrew Robertson", posicoes: ["LE","ME"], forca: 82 },
      { id: 'virgil-van-dijk', nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 86 },
      { id: 'dejan-lovren', nome: "Dejan Lovren", posicoes: ["ZAG"], forca: 78 },
      { id: 'joel-matip', nome: "Joël Matip", posicoes: ["ZAG"], forca: 80 },
      { id: 'joe-gomez', nome: "Joe Gomez", posicoes: ["ZAG","LD"], forca: 76 },
      { id: 'jordan-henderson', nome: "Jordan Henderson", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'georginio-wijnaldum', nome: "Georginio Wijnaldum", posicoes: ["MC","VOL"], forca: 81 },
      { id: 'james-milner', nome: "James Milner", posicoes: ["MC","LD","MEI"], forca: 80 },
      { id: 'emre-can', nome: "Emre Can", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'alex-oxlade-chamberlain', nome: "Alex Oxlade-Chamberlain", posicoes: ["MC","MEI","PD"], forca: 79 },
      { id: 'mohamed-salah', nome: "Mohamed Salah", posicoes: ["PD","ATA"], forca: 91 },
      { id: 'sadio-mane', nome: "Sadio Mané", posicoes: ["PE","ATA"], forca: 86 },
      { id: 'roberto-firmino', nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 89 },
      { id: 'sven-ulreich', nome: "Sven Ulreich", posicoes: ["GOL"], forca: 76 },
      { id: 'joshua-kimmich', nome: "Joshua Kimmich", posicoes: ["LD","VOL","MD"], forca: 84 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["LD"], forca: 74 },
      { id: 'mats-hummels', nome: "Mats Hummels", posicoes: ["ZAG"], forca: 85 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 83 },
      { id: 'niklas-sule', nome: "Niklas Süle", posicoes: ["ZAG"], forca: 79 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 84 },
      { id: 'javi-martinez', nome: "Javi Martínez", posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 84 },
      { id: 'corentin-tolisso', nome: "Corentin Tolisso", posicoes: ["MC","VOL"], forca: 79 },
      { id: 'james-rodriguez', nome: "James Rodríguez", posicoes: ["MEI","PE","MC"], forca: 83 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 84 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE","ME"], forca: 83 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 84 },
      { id: 'robert-lewandowski', nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Roma",
    jogadores: [
      { id: 'alisson', nome: "Alisson", posicoes: ["GOL"], forca: 86 },
      { id: 'ukasz-skorupski', nome: "Łukasz Skorupski", posicoes: ["GOL"], forca: 73 },
      { id: 'alessandro-florenzi', nome: "Alessandro Florenzi", posicoes: ["LD","MD","PD"], forca: 78 },
      { id: 'bruno-peres', nome: "Bruno Peres", posicoes: ["LD"], forca: 73 },
      { id: 'kostas-manolas', nome: "Kostas Manolas", posicoes: ["ZAG"], forca: 82 },
      { id: 'federico-fazio', nome: "Federico Fazio", posicoes: ["ZAG"], forca: 79 },
      { id: 'juan-jesus', nome: "Juan Jesus", posicoes: ["ZAG"], forca: 75 },
      { id: 'aleksandar-kolarov', nome: "Aleksandar Kolarov", posicoes: ["LE","ME"], forca: 80 },
      { id: 'daniele-de-rossi', nome: "Daniele De Rossi", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'radja-nainggolan', nome: "Radja Nainggolan", posicoes: ["MC","VOL","MEI"], forca: 83 },
      { id: 'kevin-strootman', nome: "Kevin Strootman", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'lorenzo-pellegrini', nome: "Lorenzo Pellegrini", posicoes: ["MEI","MC"], forca: 78 },
      { id: 'cengiz-under', nome: "Cengiz Ünder", posicoes: ["PD","PE"], forca: 77 },
      { id: 'stephan-el-shaarawy', nome: "Stephan El Shaarawy", posicoes: ["PE","ATA"], forca: 79 },
      { id: 'diego-perotti', nome: "Diego Perotti", posicoes: ["PE","MEI"], forca: 78 },
      { id: 'edin-dzeko', nome: "Edin Džeko", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Real Madrid",
    jogadores: [
      { id: 'keylor-navas', nome: "Keylor Navas", posicoes: ["GOL"], forca: 85 },
      { id: 'kiko-casilla', nome: "Kiko Casilla", posicoes: ["GOL"], forca: 75 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD"], forca: 84 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 89 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 85 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG"], forca: 84 },
      { id: 'nacho', nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 80 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 87 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL"], forca: 86 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC"], forca: 89 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'isco', nome: "Isco", posicoes: ["MEI","PE"], forca: 86 },
      { id: 'james-rodriguez', nome: "James Rodríguez", posicoes: ["MEI","PE","MD"], forca: 85 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 97 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 88 },
      { id: 'gareth-bale', nome: "Gareth Bale", posicoes: ["PD","ATA","MD"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon', nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 88 },
      { id: 'neto', nome: "Neto", posicoes: ["GOL"], forca: 76 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD","MD"], forca: 84 },
      { id: 'leonardo-bonucci', nome: "Leonardo Bonucci", posicoes: ["ZAG"], forca: 88 },
      { id: 'giorgio-chiellini', nome: "Giorgio Chiellini", posicoes: ["ZAG"], forca: 87 },
      { id: 'andrea-barzagli', nome: "Andrea Barzagli", posicoes: ["ZAG"], forca: 84 },
      { id: 'stephan-lichtsteiner', nome: "Stephan Lichtsteiner", posicoes: ["LD"], forca: 79 },
      { id: 'alex-sandro', nome: "Alex Sandro", posicoes: ["LE","ME"], forca: 84 },
      { id: 'sami-khedira', nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'miralem-pjanic', nome: "Miralem Pjanić", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'claudio-marchisio', nome: "Claudio Marchisio", posicoes: ["MC"], forca: 81 },
      { id: 'mario-lemina', nome: "Mario Lemina", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'juan-cuadrado', nome: "Juan Cuadrado", posicoes: ["PD","MD"], forca: 83 },
      { id: 'paulo-dybala', nome: "Paulo Dybala", posicoes: ["MEI","ATA","PE"], forca: 88 },
      { id: 'mario-mandzukic', nome: "Mario Mandžukić", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'gonzalo-higuain', nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak', nome: "Jan Oblak", posicoes: ["GOL"], forca: 88 },
      { id: 'miguel-angel-moya', nome: "Miguel Ángel Moyà", posicoes: ["GOL"], forca: 75 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD"], forca: 81 },
      { id: 'diego-godin', nome: "Diego Godín", posicoes: ["ZAG"], forca: 88 },
      { id: 'jose-gimenez', nome: "José Giménez", posicoes: ["ZAG"], forca: 83 },
      { id: 'stefan-savic', nome: "Stefan Savić", posicoes: ["ZAG"], forca: 80 },
      { id: 'lucas-hernandez', nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 79 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 83 },
      { id: 'gabi', nome: "Gabi", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'koke', nome: "Koke", posicoes: ["MC","MEI","MD"], forca: 84 },
      { id: 'saul-niguez', nome: "Saúl Ñíguez", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'thomas-partey', nome: "Thomas Partey", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'yannick-carrasco', nome: "Yannick Carrasco", posicoes: ["PE","ME","ATA"], forca: 83 },
      { id: 'angel-correa', nome: "Ángel Correa", posicoes: ["ATA","MEI","PD"], forca: 79 },
      { id: 'antoine-griezmann', nome: "Antoine Griezmann", posicoes: ["ATA","PE"], forca: 89 },
      { id: 'fernando-torres', nome: "Fernando Torres", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Monaco",
    jogadores: [
      { id: 'danijel-subasic', nome: "Danijel Subašić", posicoes: ["GOL"], forca: 81 },
      { id: 'djibril-sidibe', nome: "Djibril Sidibé", posicoes: ["LD","MD"], forca: 80 },
      { id: 'kamil-glik', nome: "Kamil Glik", posicoes: ["ZAG"], forca: 81 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 78 },
      { id: 'andrea-raggi', nome: "Andrea Raggi", posicoes: ["ZAG","LD"], forca: 74 },
      { id: 'benjamin-mendy', nome: "Benjamin Mendy", posicoes: ["LE","ME"], forca: 82 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["VOL","LD"], forca: 83 },
      { id: 'tiemoue-bakayoko', nome: "Tiémoué Bakayoko", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'joao-moutinho', nome: "João Moutinho", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'thomas-lemar', nome: "Thomas Lemar", posicoes: ["MEI","PE","ME"], forca: 82 },
      { id: 'bernardo-silva', nome: "Bernardo Silva", posicoes: ["MEI","PD","MD"], forca: 84 },
      { id: 'nabil-dirar', nome: "Nabil Dirar", posicoes: ["PD","LD","MD"], forca: 76 },
      { id: 'valere-germain', nome: "Valère Germain", posicoes: ["ATA"], forca: 77 },
      { id: 'radamel-falcao', nome: "Radamel Falcao", posicoes: ["ATA"], forca: 84 },
      { id: 'kylian-mbappe', nome: "Kylian Mbappé", posicoes: ["ATA","PE","PD"], forca: 85 },
      { id: 'guido-carrillo', nome: "Guido Carrillo", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2016 (2015-16 — Real Madrid campeão, nos pênaltis sobre o Atlético de Madrid, em Milão) =====

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Real Madrid",
    jogadores: [
      { id: 'keylor-navas', nome: "Keylor Navas", posicoes: ["GOL"], forca: 83 },
      { id: 'kiko-casilla', nome: "Kiko Casilla", posicoes: ["GOL"], forca: 73 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 81 },
      { id: 'danilo', nome: "Danilo", posicoes: ["LD"], forca: 76 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG"], forca: 84 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 83 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 87 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'isco', nome: "Isco", posicoes: ["MEI","PE","MC"], forca: 82 },
      { id: 'james-rodriguez', nome: "James Rodríguez", posicoes: ["MEI","PE"], forca: 83 },
      { id: 'gareth-bale', nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 87 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 85 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak', nome: "Jan Oblak", posicoes: ["GOL"], forca: 86 },
      { id: 'miguel-angel-moya', nome: "Miguel Ángel Moyà", posicoes: ["GOL"], forca: 74 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD","MD"], forca: 80 },
      { id: 'diego-godin', nome: "Diego Godín", posicoes: ["ZAG"], forca: 86 },
      { id: 'jose-maria-gimenez', nome: "José María Giménez", posicoes: ["ZAG"], forca: 80 },
      { id: 'stefan-savic', nome: "Stefan Savić", posicoes: ["ZAG"], forca: 78 },
      { id: 'lucas-hernandez', nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 75 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE","ME"], forca: 81 },
      { id: 'gabi', nome: "Gabi", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'augusto-fernandez', nome: "Augusto Fernández", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'saul-niguez', nome: "Saúl Ñíguez", posicoes: ["MC","VOL","MEI"], forca: 81 },
      { id: 'koke', nome: "Koke", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'yannick-carrasco', nome: "Yannick Carrasco", posicoes: ["PE","PD","MEI"], forca: 80 },
      { id: 'angel-correa', nome: "Ángel Correa", posicoes: ["PD","MEI","ATA"], forca: 76 },
      { id: 'antoine-griezmann', nome: "Antoine Griezmann", posicoes: ["ATA","PE"], forca: 88 },
      { id: 'fernando-torres', nome: "Fernando Torres", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Manchester City",
    jogadores: [
      { id: 'joe-hart', nome: "Joe Hart", posicoes: ["GOL"], forca: 82 },
      { id: 'willy-caballero', nome: "Willy Caballero", posicoes: ["GOL"], forca: 73 },
      { id: 'pablo-zabaleta', nome: "Pablo Zabaleta", posicoes: ["LD","MD"], forca: 77 },
      { id: 'bacary-sagna', nome: "Bacary Sagna", posicoes: ["LD"], forca: 76 },
      { id: 'vincent-kompany', nome: "Vincent Kompany", posicoes: ["ZAG"], forca: 84 },
      { id: 'nicolas-otamendi', nome: "Nicolás Otamendi", posicoes: ["ZAG"], forca: 81 },
      { id: 'eliaquim-mangala', nome: "Eliaquim Mangala", posicoes: ["ZAG"], forca: 75 },
      { id: 'aleksandar-kolarov', nome: "Aleksandar Kolarov", posicoes: ["LE","ZAG"], forca: 78 },
      { id: 'gael-clichy', nome: "Gaël Clichy", posicoes: ["LE"], forca: 75 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'yaya-toure', nome: "Yaya Touré", posicoes: ["MC","VOL"], forca: 84 },
      { id: 'david-silva', nome: "David Silva", posicoes: ["MEI","MC"], forca: 87 },
      { id: 'kevin-de-bruyne', nome: "Kevin De Bruyne", posicoes: ["MEI","PD","MC"], forca: 86 },
      { id: 'jesus-navas', nome: "Jesús Navas", posicoes: ["PD","MD"], forca: 76 },
      { id: 'raheem-sterling', nome: "Raheem Sterling", posicoes: ["PE","PD"], forca: 80 },
      { id: 'sergio-aguero', nome: "Sergio Agüero", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { id: 'pepe-reina', nome: "Pepe Reina", posicoes: ["GOL"], forca: 76 },
      { id: 'philipp-lahm', nome: "Philipp Lahm", posicoes: ["LD","MD","VOL"], forca: 84 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 85 },
      { id: 'javi-martinez', nome: "Javi Martínez", posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'mehdi-benatia', nome: "Mehdi Benatia", posicoes: ["ZAG"], forca: 80 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 84 },
      { id: 'juan-bernat', nome: "Juan Bernat", posicoes: ["LE"], forca: 75 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'arturo-vidal', nome: "Arturo Vidal", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 83 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 86 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 85 },
      { id: 'douglas-costa', nome: "Douglas Costa", posicoes: ["PE","PD"], forca: 82 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE","ME"], forca: 84 },
      { id: 'robert-lewandowski', nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 90 }
    ]
  },

  // ===== Edição 2015 (semifinalistas — Barcelona campeão, 3–1 sobre a Juventus) =====

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 84 },
      { id: 'claudio-bravo', nome: "Claudio Bravo", posicoes: ["GOL"], forca: 83 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD","MD"], forca: 84 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 86 },
      { id: 'javier-mascherano', nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'jeremy-mathieu', nome: "Jérémy Mathieu", posicoes: ["ZAG","LE"], forca: 79 },
      { id: 'marc-bartra', nome: "Marc Bartra", posicoes: ["ZAG"], forca: 76 },
      { id: 'jordi-alba', nome: "Jordi Alba", posicoes: ["LE"], forca: 84 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'ivan-rakitic', nome: "Ivan Rakitić", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["MC","MEI"], forca: 75 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 96 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["ATA"], forca: 90 },
      { id: 'neymar', nome: "Neymar", posicoes: ["PE","ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon', nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 88 },
      { id: 'marco-storari', nome: "Marco Storari", posicoes: ["GOL"], forca: 71 },
      { id: 'stephan-lichtsteiner', nome: "Stephan Lichtsteiner", posicoes: ["LD","MD"], forca: 80 },
      { id: 'leonardo-bonucci', nome: "Leonardo Bonucci", posicoes: ["ZAG"], forca: 85 },
      { id: 'giorgio-chiellini', nome: "Giorgio Chiellini", posicoes: ["ZAG"], forca: 86 },
      { id: 'andrea-barzagli', nome: "Andrea Barzagli", posicoes: ["ZAG"], forca: 83 },
      { id: 'patrice-evra', nome: "Patrice Evra", posicoes: ["LE"], forca: 80 },
      { id: 'andrea-pirlo', nome: "Andrea Pirlo", posicoes: ["VOL","MC","MEI"], forca: 85 },
      { id: 'arturo-vidal', nome: "Arturo Vidal", posicoes: ["MC","VOL","MEI"], forca: 86 },
      { id: 'paul-pogba', nome: "Paul Pogba", posicoes: ["MC","MEI","VOL"], forca: 86 },
      { id: 'claudio-marchisio', nome: "Claudio Marchisio", posicoes: ["MC","VOL"], forca: 83 },
      { id: 'roberto-pereyra', nome: "Roberto Pereyra", posicoes: ["MEI","MC","PE"], forca: 78 },
      { id: 'kingsley-coman', nome: "Kingsley Coman", posicoes: ["PE","PD","ME"], forca: 74 },
      { id: 'carlos-tevez', nome: "Carlos Tévez", posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'alvaro-morata', nome: "Álvaro Morata", posicoes: ["ATA"], forca: 80 },
      { id: 'fernando-llorente', nome: "Fernando Llorente", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { id: 'pepe-reina', nome: "Pepe Reina", posicoes: ["GOL"], forca: 78 },
      { id: 'philipp-lahm', nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 85 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 85 },
      { id: 'mehdi-benatia', nome: "Mehdi Benatia", posicoes: ["ZAG"], forca: 81 },
      { id: 'dante', nome: "Dante", posicoes: ["ZAG"], forca: 79 },
      { id: 'juan-bernat', nome: "Juan Bernat", posicoes: ["LE","ME"], forca: 76 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["LE","ZAG","VOL"], forca: 85 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'bastian-schweinsteiger', nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 85 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'mario-gotze', nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 84 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 88 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE","PD","ME"], forca: 87 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 86 },
      { id: 'robert-lewandowski', nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 84 },
      { id: 'keylor-navas', nome: "Keylor Navas", posicoes: ["GOL"], forca: 81 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG"], forca: 84 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 82 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { id: 'fabio-coentrao', nome: "Fábio Coentrão", posicoes: ["LE"], forca: 77 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","MEI","VOL"], forca: 87 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'sami-khedira', nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'james-rodriguez', nome: "James Rodríguez", posicoes: ["MEI","PE","MD"], forca: 85 },
      { id: 'isco', nome: "Isco", posicoes: ["MEI","MC","PE"], forca: 82 },
      { id: 'gareth-bale', nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 88 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 86 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 93 }
    ]
  },

  // ===== Edição 2014 (semifinalistas — Real Madrid campeão, 4–1 sobre o Atlético, a La Décima) =====

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 85 },
      { id: 'diego-lopez', nome: "Diego López", posicoes: ["GOL"], forca: 80 },
      { id: 'dani-carvajal', nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 80 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG"], forca: 85 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { id: 'fabio-coentrao', nome: "Fábio Coentrão", posicoes: ["LE"], forca: 78 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'sami-khedira', nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'angel-di-maria', nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 85 },
      { id: 'isco', nome: "Isco", posicoes: ["MEI","MC","PE"], forca: 80 },
      { id: 'gareth-bale', nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 87 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 85 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 94 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'thibaut-courtois', nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 86 },
      { id: 'daniel-aranzubia', nome: "Daniel Aranzubia", posicoes: ["GOL"], forca: 70 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD","MD"], forca: 81 },
      { id: 'diego-godin', nome: "Diego Godín", posicoes: ["ZAG"], forca: 86 },
      { id: 'joao-miranda', nome: "João Miranda", posicoes: ["ZAG"], forca: 83 },
      { id: 'toby-alderweireld', nome: "Toby Alderweireld", posicoes: ["ZAG","LD"], forca: 80 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { id: 'gabi', nome: "Gabi", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'tiago', nome: "Tiago", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'mario-suarez', nome: "Mario Suárez", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'koke', nome: "Koke", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'raul-garcia', nome: "Raúl García", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'arda-turan', nome: "Arda Turan", posicoes: ["MEI","PE","MD"], forca: 83 },
      { id: 'diego-costa', nome: "Diego Costa", posicoes: ["ATA"], forca: 86 },
      { id: 'david-villa', nome: "David Villa", posicoes: ["ATA"], forca: 82 },
      { id: 'adrian-lopez', nome: "Adrián López", posicoes: ["ATA","PE"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { id: 'tom-starke', nome: "Tom Starke", posicoes: ["GOL"], forca: 68 },
      { id: 'philipp-lahm', nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 86 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 84 },
      { id: 'dante', nome: "Dante", posicoes: ["ZAG"], forca: 80 },
      { id: 'javi-martinez', nome: "Javi Martínez", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 84 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["LD"], forca: 75 },
      { id: 'bastian-schweinsteiger', nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 86 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'mario-gotze', nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 84 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 88 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 88 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 85 },
      { id: 'mario-mandzukic', nome: "Mario Mandžukić", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech', nome: "Petr Čech", posicoes: ["GOL"], forca: 85 },
      { id: 'mark-schwarzer', nome: "Mark Schwarzer", posicoes: ["GOL"], forca: 72 },
      { id: 'branislav-ivanovic', nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'gary-cahill', nome: "Gary Cahill", posicoes: ["ZAG"], forca: 82 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 83 },
      { id: 'cesar-azpilicueta', nome: "César Azpilicueta", posicoes: ["LE","LD"], forca: 82 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'nemanja-matic', nome: "Nemanja Matić", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'ramires', nome: "Ramires", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'oscar', nome: "Oscar", posicoes: ["MEI","PE","MC"], forca: 82 },
      { id: 'eden-hazard', nome: "Eden Hazard", posicoes: ["PE","MEI","PD"], forca: 87 },
      { id: 'willian', nome: "Willian", posicoes: ["PD","PE","MEI"], forca: 81 },
      { id: 'samuel-etoo', nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 80 },
      { id: 'fernando-torres', nome: "Fernando Torres", posicoes: ["ATA"], forca: 78 },
      { id: 'demba-ba', nome: "Demba Ba", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2013 (semifinalistas — Bayern campeão, 2–1 sobre o Borussia, final alemã em Wembley) =====

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 89 },
      { id: 'tom-starke', nome: "Tom Starke", posicoes: ["GOL"], forca: 67 },
      { id: 'philipp-lahm', nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 86 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 82 },
      { id: 'dante', nome: "Dante", posicoes: ["ZAG"], forca: 80 },
      { id: 'daniel-van-buyten', nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 78 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'bastian-schweinsteiger', nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 86 },
      { id: 'javi-martinez', nome: "Javi Martínez", posicoes: ["VOL","ZAG"], forca: 83 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'luiz-gustavo', nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 84 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 87 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 88 },
      { id: 'mario-mandzukic', nome: "Mario Mandžukić", posicoes: ["ATA"], forca: 82 },
      { id: 'mario-gomez', nome: "Mario Gómez", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Borussia Dortmund",
    jogadores: [
      { id: 'roman-weidenfeller', nome: "Roman Weidenfeller", posicoes: ["GOL"], forca: 82 },
      { id: 'mitchell-langerak', nome: "Mitchell Langerak", posicoes: ["GOL"], forca: 70 },
      { id: 'ukasz-piszczek', nome: "Łukasz Piszczek", posicoes: ["LD","MD"], forca: 81 },
      { id: 'mats-hummels', nome: "Mats Hummels", posicoes: ["ZAG"], forca: 85 },
      { id: 'neven-subotic', nome: "Neven Subotić", posicoes: ["ZAG"], forca: 81 },
      { id: 'marcel-schmelzer', nome: "Marcel Schmelzer", posicoes: ["LE"], forca: 79 },
      { id: 'felipe-santana', nome: "Felipe Santana", posicoes: ["ZAG"], forca: 75 },
      { id: 'sven-bender', nome: "Sven Bender", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'ilkay-gundogan', nome: "İlkay Gündoğan", posicoes: ["VOL","MC","MEI"], forca: 81 },
      { id: 'sebastian-kehl', nome: "Sebastian Kehl", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'nuri-sahin', nome: "Nuri Şahin", posicoes: ["MC","MEI","VOL"], forca: 78 },
      { id: 'mario-gotze', nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 84 },
      { id: 'marco-reus', nome: "Marco Reus", posicoes: ["MEI","PE","ATA"], forca: 85 },
      { id: 'jakub-b-aszczykowski', nome: "Jakub Błaszczykowski", posicoes: ["PD","PE","ME"], forca: 79 },
      { id: 'kevin-gro-kreutz', nome: "Kevin Großkreutz", posicoes: ["PE","LE","ME"], forca: 76 },
      { id: 'robert-lewandowski', nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 85 },
      { id: 'diego-lopez', nome: "Diego López", posicoes: ["GOL"], forca: 81 },
      { id: 'alvaro-arbeloa', nome: "Álvaro Arbeloa", posicoes: ["LD","MD"], forca: 78 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG"], forca: 85 },
      { id: 'raphael-varane', nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 84 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'sami-khedira', nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'luka-modric', nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'mesut-ozil', nome: "Mesut Özil", posicoes: ["MEI","PE","MC"], forca: 86 },
      { id: 'angel-di-maria', nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 84 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI","MC"], forca: 80 },
      { id: 'gonzalo-higuain', nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 84 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 84 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 94 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { id: 'jose-manuel-pinto', nome: "José Manuel Pinto", posicoes: ["GOL"], forca: 70 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD","MD"], forca: 84 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 85 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG"], forca: 84 },
      { id: 'javier-mascherano', nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'jordi-alba', nome: "Jordi Alba", posicoes: ["LE"], forca: 82 },
      { id: 'adriano', nome: "Adriano", posicoes: ["LE","LD"], forca: 75 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'cesc-fabregas', nome: "Cesc Fàbregas", posicoes: ["MEI","MC"], forca: 84 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 95 },
      { id: 'alexis-sanchez', nome: "Alexis Sánchez", posicoes: ["PE","PD","ATA"], forca: 80 },
      { id: 'david-villa', nome: "David Villa", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'pedro', nome: "Pedro", posicoes: ["PD","PE","ATA"], forca: 81 }
    ]
  },

  // ===== Edição 2012 (semifinalistas — Chelsea campeão nos pênaltis sobre o Bayern, em Munique) =====

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech', nome: "Petr Čech", posicoes: ["GOL"], forca: 86 },
      { id: 'ross-turnbull', nome: "Ross Turnbull", posicoes: ["GOL"], forca: 66 },
      { id: 'branislav-ivanovic', nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 84 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'gary-cahill', nome: "Gary Cahill", posicoes: ["ZAG"], forca: 80 },
      { id: 'ashley-cole', nome: "Ashley Cole", posicoes: ["LE"], forca: 84 },
      { id: 'ramires', nome: "Ramires", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'john-obi-mikel', nome: "John Obi Mikel", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'raul-meireles', nome: "Raul Meireles", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'juan-mata', nome: "Juan Mata", posicoes: ["MEI","PE","MC"], forca: 84 },
      { id: 'florent-malouda', nome: "Florent Malouda", posicoes: ["PE","ME","MEI"], forca: 76 },
      { id: 'didier-drogba', nome: "Didier Drogba", posicoes: ["ATA"], forca: 85 },
      { id: 'fernando-torres', nome: "Fernando Torres", posicoes: ["ATA"], forca: 79 },
      { id: 'daniel-sturridge', nome: "Daniel Sturridge", posicoes: ["ATA","PE","PD"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 88 },
      { id: 'hans-jorg-butt', nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 67 },
      { id: 'philipp-lahm', nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 85 },
      { id: 'jerome-boateng', nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 80 },
      { id: 'holger-badstuber', nome: "Holger Badstuber", posicoes: ["ZAG"], forca: 78 },
      { id: 'daniel-van-buyten', nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 78 },
      { id: 'david-alaba', nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 79 },
      { id: 'anatoliy-tymoshchuk', nome: "Anatoliy Tymoshchuk", posicoes: ["VOL","ZAG","MC"], forca: 76 },
      { id: 'bastian-schweinsteiger', nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 86 },
      { id: 'luiz-gustavo', nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'toni-kroos', nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 83 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 87 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 86 },
      { id: 'mario-gomez', nome: "Mario Gómez", posicoes: ["ATA"], forca: 82 },
      { id: 'ivica-olic', nome: "Ivica Olić", posicoes: ["ATA","PE"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 88 },
      { id: 'antonio-adan', nome: "Antonio Adán", posicoes: ["GOL"], forca: 70 },
      { id: 'alvaro-arbeloa', nome: "Álvaro Arbeloa", posicoes: ["LD","MD"], forca: 78 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG"], forca: 85 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 84 },
      { id: 'fabio-coentrao', nome: "Fábio Coentrão", posicoes: ["LE"], forca: 78 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'sami-khedira', nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'mesut-ozil', nome: "Mesut Özil", posicoes: ["MEI","PE","MC"], forca: 85 },
      { id: 'angel-di-maria', nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 83 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI","MC"], forca: 81 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 93 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 83 },
      { id: 'gonzalo-higuain', nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 85 },
      { id: 'jose-manuel-pinto', nome: "José Manuel Pinto", posicoes: ["GOL"], forca: 70 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD","MD"], forca: 85 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 85 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG"], forca: 85 },
      { id: 'javier-mascherano', nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'eric-abidal', nome: "Éric Abidal", posicoes: ["LE","ZAG"], forca: 80 },
      { id: 'adriano', nome: "Adriano", posicoes: ["LE","LD"], forca: 76 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'cesc-fabregas', nome: "Cesc Fàbregas", posicoes: ["MEI","MC"], forca: 84 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 95 },
      { id: 'alexis-sanchez', nome: "Alexis Sánchez", posicoes: ["PE","PD","ATA"], forca: 80 },
      { id: 'david-villa', nome: "David Villa", posicoes: ["ATA","PE"], forca: 83 },
      { id: 'pedro', nome: "Pedro", posicoes: ["PD","PE","ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2011 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD"], forca: 89 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 88 },
      { id: 'javier-mascherano', nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'eric-abidal', nome: "Eric Abidal", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'maxwell', nome: "Maxwell", posicoes: ["LE"], forca: 79 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL"], forca: 88 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 94 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC"], forca: 93 },
      { id: 'seydou-keita', nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'thiago-alcantara', nome: "Thiago Alcântara", posicoes: ["MC"], forca: 77 },
      { id: 'pedro', nome: "Pedro", posicoes: ["PD"], forca: 84 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 96 },
      { id: 'david-villa', nome: "David Villa", posicoes: ["ATA","PD"], forca: 88 },
      { id: 'bojan-krkic', nome: "Bojan Krkić", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { id: 'rafael', nome: "Rafael", posicoes: ["LD"], forca: 75 },
      { id: 'fabio', nome: "Fábio", posicoes: ["LD","MC"], forca: 73 },
      { id: 'rio-ferdinand', nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 85 },
      { id: 'nemanja-vidic', nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 89 },
      { id: 'patrice-evra', nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { id: 'michael-carrick', nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 83 },
      { id: 'darren-fletcher', nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'park-ji-sung', nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 81 },
      { id: 'nani', nome: "Nani", posicoes: ["PD"], forca: 84 },
      { id: 'antonio-valencia', nome: "Antonio Valencia", posicoes: ["PD"], forca: 80 },
      { id: 'wayne-rooney', nome: "Wayne Rooney", posicoes: ["ATA"], forca: 88 },
      { id: 'javier-hernandez', nome: "Javier Hernández", posicoes: ["ATA"], forca: 82 },
      { id: 'dimitar-berbatov', nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { id: 'sergio-ramos', nome: "Sergio Ramos", posicoes: ["LD","ZAG"], forca: 87 },
      { id: 'pepe', nome: "Pepe", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 84 },
      { id: 'alvaro-arbeloa', nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'sami-khedira', nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'lassana-diarra', nome: "Lassana Diarra", posicoes: ["VOL"], forca: 80 },
      { id: 'mesut-ozil', nome: "Mesut Özil", posicoes: ["MEI"], forca: 85 },
      { id: 'angel-di-maria', nome: "Ángel Di María", posicoes: ["MC","PD"], forca: 84 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 80 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 93 },
      { id: 'karim-benzema', nome: "Karim Benzema", posicoes: ["ATA"], forca: 83 },
      { id: 'gonzalo-higuain', nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 84 },
      { id: 'emmanuel-adebayor', nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Schalke 04",
    jogadores: [
      { id: 'manuel-neuer', nome: "Manuel Neuer", posicoes: ["GOL"], forca: 88 },
      { id: 'atsuto-uchida', nome: "Atsuto Uchida", posicoes: ["LD"], forca: 75 },
      { id: 'benedikt-howedes', nome: "Benedikt Höwedes", posicoes: ["ZAG"], forca: 79 },
      { id: 'christoph-metzelder', nome: "Christoph Metzelder", posicoes: ["ZAG"], forca: 75 },
      { id: 'kyriakos-papadopoulos', nome: "Kyriakos Papadopoulos", posicoes: ["ZAG","VOL"], forca: 75 },
      { id: 'hans-sarpei', nome: "Hans Sarpei", posicoes: ["LE"], forca: 72 },
      { id: 'joel-matip', nome: "Joel Matip", posicoes: ["ZAG","VOL"], forca: 75 },
      { id: 'peer-kluge', nome: "Peer Kluge", posicoes: ["VOL"], forca: 73 },
      { id: 'ivan-rakitic', nome: "Ivan Rakitić", posicoes: ["MC","VOL"], forca: 79 },
      { id: 'jose-manuel-jurado', nome: "José Manuel Jurado", posicoes: ["MEI"], forca: 77 },
      { id: 'jefferson-farfan', nome: "Jefferson Farfán", posicoes: ["MC","PD"], forca: 81 },
      { id: 'julian-draxler', nome: "Julian Draxler", posicoes: ["MC","PD"], forca: 71 },
      { id: 'christoph-moritz', nome: "Christoph Moritz", posicoes: ["VOL","MC"], forca: 72 },
      { id: 'raul', nome: "Raúl", posicoes: ["ATA"], forca: 84 },
      { id: 'klaas-jan-huntelaar', nome: "Klaas-Jan Huntelaar", posicoes: ["ATA"], forca: 82 },
      { id: 'edu', nome: "Edu", posicoes: ["ATA"], forca: 73 }
    ]
  },

  // ===== Edição 2010 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["GOL"], forca: 89 },
      { id: 'maicon', nome: "Maicon", posicoes: ["LD"], forca: 89 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["ZAG"], forca: 88 },
      { id: 'walter-samuel', nome: "Walter Samuel", posicoes: ["ZAG"], forca: 87 },
      { id: 'cristian-chivu', nome: "Cristian Chivu", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'javier-zanetti', nome: "Javier Zanetti", posicoes: ["LD","VOL"], forca: 88 },
      { id: 'marco-materazzi', nome: "Marco Materazzi", posicoes: ["ZAG"], forca: 82 },
      { id: 'esteban-cambiasso', nome: "Esteban Cambiasso", posicoes: ["VOL"], forca: 85 },
      { id: 'thiago-motta', nome: "Thiago Motta", posicoes: ["VOL"], forca: 82 },
      { id: 'wesley-sneijder', nome: "Wesley Sneijder", posicoes: ["MEI"], forca: 91 },
      { id: 'dejan-stankovic', nome: "Dejan Stanković", posicoes: ["MC"], forca: 83 },
      { id: 'sulley-muntari', nome: "Sulley Muntari", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'goran-pandev', nome: "Goran Pandev", posicoes: ["ATA","PD"], forca: 81 },
      { id: 'samuel-etoo', nome: "Samuel Eto'o", posicoes: ["ATA","PD"], forca: 88 },
      { id: 'diego-milito', nome: "Diego Milito", posicoes: ["ATA"], forca: 91 },
      { id: 'mario-balotelli', nome: "Mario Balotelli", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'hans-jorg-butt', nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 81 },
      { id: 'philipp-lahm', nome: "Philipp Lahm", posicoes: ["LD"], forca: 87 },
      { id: 'holger-badstuber', nome: "Holger Badstuber", posicoes: ["ZAG","LD"], forca: 75 },
      { id: 'daniel-van-buyten', nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 80 },
      { id: 'martin-demichelis', nome: "Martín Demichelis", posicoes: ["ZAG"], forca: 80 },
      { id: 'diego-contento', nome: "Diego Contento", posicoes: ["LE"], forca: 72 },
      { id: 'mark-van-bommel', nome: "Mark van Bommel", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'bastian-schweinsteiger', nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'hamit-alt-ntop', nome: "Hamit Altıntop", posicoes: ["MC","PD"], forca: 76 },
      { id: 'thomas-muller', nome: "Thomas Müller", posicoes: ["MC","ATA"], forca: 82 },
      { id: 'franck-ribery', nome: "Franck Ribéry", posicoes: ["PE"], forca: 87 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD"], forca: 90 },
      { id: 'ivica-olic', nome: "Ivica Olić", posicoes: ["ATA"], forca: 83 },
      { id: 'mario-gomez', nome: "Mario Gómez", posicoes: ["ATA"], forca: 81 },
      { id: 'miroslav-klose', nome: "Miroslav Klose", posicoes: ["ATA"], forca: 82 },
      { id: 'anatoliy-tymoshchuk', nome: "Anatoliy Tymoshchuk", posicoes: ["VOL","ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD"], forca: 89 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 87 },
      { id: 'gabriel-milito', nome: "Gabriel Milito", posicoes: ["ZAG"], forca: 80 },
      { id: 'eric-abidal', nome: "Eric Abidal", posicoes: ["LE"], forca: 82 },
      { id: 'maxwell', nome: "Maxwell", posicoes: ["LE"], forca: 77 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL"], forca: 87 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 93 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC"], forca: 89 },
      { id: 'seydou-keita', nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'yaya-toure', nome: "Yaya Touré", posicoes: ["VOL"], forca: 84 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 94 },
      { id: 'pedro', nome: "Pedro", posicoes: ["PD"], forca: 81 },
      { id: 'zlatan-ibrahimovic', nome: "Zlatan Ibrahimović", posicoes: ["ATA"], forca: 88 },
      { id: 'bojan-krkic', nome: "Bojan Krkić", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Lyon",
    jogadores: [
      { id: 'hugo-lloris', nome: "Hugo Lloris", posicoes: ["GOL"], forca: 84 },
      { id: 'anthony-reveillere', nome: "Anthony Réveillère", posicoes: ["LD"], forca: 77 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { id: 'jean-alain-boumsong', nome: "Jean-Alain Boumsong", posicoes: ["ZAG"], forca: 76 },
      { id: 'aly-cissokho', nome: "Aly Cissokho", posicoes: ["LE"], forca: 76 },
      { id: 'francois-clerc', nome: "François Clerc", posicoes: ["LD"], forca: 74 },
      { id: 'jeremy-toulalan', nome: "Jérémy Toulalan", posicoes: ["VOL"], forca: 82 },
      { id: 'kim-kallstrom', nome: "Kim Källström", posicoes: ["MC"], forca: 79 },
      { id: 'miralem-pjanic', nome: "Miralem Pjanić", posicoes: ["MEI"], forca: 79 },
      { id: 'jean-ii-makoun', nome: "Jean II Makoun", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'maxime-gonalons', nome: "Maxime Gonalons", posicoes: ["VOL"], forca: 74 },
      { id: 'michel-bastos', nome: "Michel Bastos", posicoes: ["MC","LE"], forca: 80 },
      { id: 'sidney-govou', nome: "Sidney Govou", posicoes: ["MC","PD"], forca: 79 },
      { id: 'cesar-delgado', nome: "César Delgado", posicoes: ["ATA","PD"], forca: 77 },
      { id: 'lisandro-lopez', nome: "Lisandro López", posicoes: ["ATA"], forca: 83 },
      { id: 'bafetimbi-gomis', nome: "Bafétimbi Gomis", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2009 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { id: 'dani-alves', nome: "Dani Alves", posicoes: ["LD"], forca: 89 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'gerard-pique', nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 82 },
      { id: 'rafael-marquez', nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'eric-abidal', nome: "Eric Abidal", posicoes: ["LE"], forca: 82 },
      { id: 'sylvinho', nome: "Sylvinho", posicoes: ["LE"], forca: 79 },
      { id: 'yaya-toure', nome: "Yaya Touré", posicoes: ["VOL"], forca: 84 },
      { id: 'sergio-busquets', nome: "Sergio Busquets", posicoes: ["VOL"], forca: 80 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 94 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC"], forca: 93 },
      { id: 'seydou-keita', nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 95 },
      { id: 'thierry-henry', nome: "Thierry Henry", posicoes: ["ATA","PD"], forca: 87 },
      { id: 'samuel-etoo', nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 90 },
      { id: 'bojan-krkic', nome: "Bojan Krkić", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { id: 'john-oshea', nome: "John O'Shea", posicoes: ["LD","ZAG"], forca: 76 },
      { id: 'rio-ferdinand', nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 87 },
      { id: 'nemanja-vidic', nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 89 },
      { id: 'patrice-evra', nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { id: 'jonny-evans', nome: "Jonny Evans", posicoes: ["ZAG"], forca: 75 },
      { id: 'michael-carrick', nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 88 },
      { id: 'anderson', nome: "Anderson", posicoes: ["MC"], forca: 77 },
      { id: 'darren-fletcher', nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'park-ji-sung', nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 80 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 91 },
      { id: 'wayne-rooney', nome: "Wayne Rooney", posicoes: ["ATA"], forca: 88 },
      { id: 'carlos-tevez', nome: "Carlos Tévez", posicoes: ["ATA"], forca: 87 },
      { id: 'dimitar-berbatov', nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech', nome: "Petr Čech", posicoes: ["GOL"], forca: 89 },
      { id: 'jose-bosingwa', nome: "José Bosingwa", posicoes: ["LD"], forca: 79 },
      { id: 'branislav-ivanovic', nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 82 },
      { id: 'ashley-cole', nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { id: 'juliano-belletti', nome: "Juliano Belletti", posicoes: ["LD","MC"], forca: 77 },
      { id: 'michael-essien', nome: "Michael Essien", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC"], forca: 89 },
      { id: 'michael-ballack', nome: "Michael Ballack", posicoes: ["MC"], forca: 87 },
      { id: 'john-obi-mikel', nome: "John Obi Mikel", posicoes: ["VOL"], forca: 77 },
      { id: 'florent-malouda', nome: "Florent Malouda", posicoes: ["PE"], forca: 80 },
      { id: 'joe-cole', nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { id: 'didier-drogba', nome: "Didier Drogba", posicoes: ["ATA"], forca: 87 },
      { id: 'nicolas-anelka', nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Arsenal",
    jogadores: [
      { id: 'manuel-almunia', nome: "Manuel Almunia", posicoes: ["GOL"], forca: 76 },
      { id: 'bacary-sagna', nome: "Bacary Sagna", posicoes: ["LD"], forca: 80 },
      { id: 'kolo-toure', nome: "Kolo Touré", posicoes: ["ZAG"], forca: 84 },
      { id: 'william-gallas', nome: "William Gallas", posicoes: ["ZAG"], forca: 85 },
      { id: 'mikael-silvestre', nome: "Mikaël Silvestre", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'gael-clichy', nome: "Gaël Clichy", posicoes: ["LE"], forca: 80 },
      { id: 'alex-song', nome: "Alex Song", posicoes: ["VOL","ZAG"], forca: 77 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL","MC"], forca: 75 },
      { id: 'cesc-fabregas', nome: "Cesc Fàbregas", posicoes: ["MC"], forca: 87 },
      { id: 'samir-nasri', nome: "Samir Nasri", posicoes: ["MC","PD"], forca: 80 },
      { id: 'theo-walcott', nome: "Theo Walcott", posicoes: ["PD"], forca: 77 },
      { id: 'abou-diaby', nome: "Abou Diaby", posicoes: ["MC","PD"], forca: 75 },
      { id: 'robin-van-persie', nome: "Robin van Persie", posicoes: ["ATA","PD"], forca: 83 },
      { id: 'emmanuel-adebayor', nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 82 },
      { id: 'nicklas-bendtner', nome: "Nicklas Bendtner", posicoes: ["ATA"], forca: 75 },
      { id: 'eduardo-da-silva', nome: "Eduardo da Silva", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2008 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { id: 'wes-brown', nome: "Wes Brown", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'rio-ferdinand', nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 89 },
      { id: 'nemanja-vidic', nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 88 },
      { id: 'patrice-evra', nome: "Patrice Evra", posicoes: ["LE"], forca: 87 },
      { id: 'owen-hargreaves', nome: "Owen Hargreaves", posicoes: ["VOL","LD"], forca: 81 },
      { id: 'michael-carrick', nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 87 },
      { id: 'anderson', nome: "Anderson", posicoes: ["MC"], forca: 79 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 88 },
      { id: 'park-ji-sung', nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 80 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 95 },
      { id: 'nani', nome: "Nani", posicoes: ["PD"], forca: 81 },
      { id: 'carlos-tevez', nome: "Carlos Tévez", posicoes: ["ATA"], forca: 87 },
      { id: 'wayne-rooney', nome: "Wayne Rooney", posicoes: ["ATA"], forca: 89 },
      { id: 'darren-fletcher', nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech', nome: "Petr Čech", posicoes: ["GOL"], forca: 88 },
      { id: 'carlo-cudicini', nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 81 },
      { id: 'juliano-belletti', nome: "Juliano Belletti", posicoes: ["LD"], forca: 77 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 82 },
      { id: 'ashley-cole', nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { id: 'michael-essien', nome: "Michael Essien", posicoes: ["VOL","MC","LD"], forca: 87 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC"], forca: 89 },
      { id: 'michael-ballack', nome: "Michael Ballack", posicoes: ["MC"], forca: 88 },
      { id: 'joe-cole', nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { id: 'florent-malouda', nome: "Florent Malouda", posicoes: ["PE"], forca: 80 },
      { id: 'salomon-kalou', nome: "Salomon Kalou", posicoes: ["ATA","PD"], forca: 77 },
      { id: 'didier-drogba', nome: "Didier Drogba", posicoes: ["ATA"], forca: 88 },
      { id: 'nicolas-anelka', nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { id: 'gianluca-zambrotta', nome: "Gianluca Zambrotta", posicoes: ["LD"], forca: 87 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'gabriel-milito', nome: "Gabriel Milito", posicoes: ["ZAG"], forca: 80 },
      { id: 'rafael-marquez', nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'eric-abidal', nome: "Eric Abidal", posicoes: ["LE"], forca: 82 },
      { id: 'yaya-toure', nome: "Yaya Touré", posicoes: ["VOL"], forca: 84 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 88 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC"], forca: 87 },
      { id: 'deco', nome: "Deco", posicoes: ["MC"], forca: 89 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 89 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI","PD"], forca: 83 },
      { id: 'thierry-henry', nome: "Thierry Henry", posicoes: ["ATA","PD"], forca: 84 },
      { id: 'samuel-etoo', nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 87 },
      { id: 'bojan-krkic', nome: "Bojan Krkić", posicoes: ["ATA"], forca: 75 },
      { id: 'eidur-gudjohnsen', nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Liverpool",
    jogadores: [
      { id: 'pepe-reina', nome: "Pepe Reina", posicoes: ["GOL"], forca: 84 },
      { id: 'steve-finnan', nome: "Steve Finnan", posicoes: ["LD"], forca: 80 },
      { id: 'alvaro-arbeloa', nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'jamie-carragher', nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 85 },
      { id: 'martin-skrtel', nome: "Martin Škrtel", posicoes: ["ZAG"], forca: 77 },
      { id: 'sami-hyypia', nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 83 },
      { id: 'fabio-aurelio', nome: "Fábio Aurélio", posicoes: ["LE"], forca: 77 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'javier-mascherano', nome: "Javier Mascherano", posicoes: ["VOL"], forca: 85 },
      { id: 'steven-gerrard', nome: "Steven Gerrard", posicoes: ["MC"], forca: 90 },
      { id: 'lucas-leiva', nome: "Lucas Leiva", posicoes: ["VOL","MC"], forca: 73 },
      { id: 'yossi-benayoun', nome: "Yossi Benayoun", posicoes: ["MC","PD"], forca: 77 },
      { id: 'ryan-babel', nome: "Ryan Babel", posicoes: ["PD"], forca: 75 },
      { id: 'dirk-kuyt', nome: "Dirk Kuyt", posicoes: ["ATA"], forca: 81 },
      { id: 'fernando-torres', nome: "Fernando Torres", posicoes: ["ATA"], forca: 90 },
      { id: 'peter-crouch', nome: "Peter Crouch", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2007 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Milan",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD"], forca: 87 },
      { id: 'massimo-oddo', nome: "Massimo Oddo", posicoes: ["LD"], forca: 81 },
      { id: 'alessandro-nesta', nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 89 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 85 },
      { id: 'marek-jankulovski', nome: "Marek Jankulovski", posicoes: ["LE"], forca: 81 },
      { id: 'kakha-kaladze', nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'gennaro-gattuso', nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { id: 'andrea-pirlo', nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 90 },
      { id: 'massimo-ambrosini', nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["MC"], forca: 88 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 95 },
      { id: 'yoann-gourcuff', nome: "Yoann Gourcuff", posicoes: ["MEI"], forca: 75 },
      { id: 'serginho', nome: "Serginho", posicoes: ["MC","LE"], forca: 81 },
      { id: 'filippo-inzaghi', nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 85 },
      { id: 'alberto-gilardino', nome: "Alberto Gilardino", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Liverpool",
    jogadores: [
      { id: 'pepe-reina', nome: "Pepe Reina", posicoes: ["GOL"], forca: 84 },
      { id: 'steve-finnan', nome: "Steve Finnan", posicoes: ["LD"], forca: 80 },
      { id: 'jamie-carragher', nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 85 },
      { id: 'sami-hyypia', nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 83 },
      { id: 'daniel-agger', nome: "Daniel Agger", posicoes: ["ZAG"], forca: 80 },
      { id: 'john-arne-riise', nome: "John Arne Riise", posicoes: ["LD","ME"], forca: 82 },
      { id: 'alvaro-arbeloa', nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'javier-mascherano', nome: "Javier Mascherano", posicoes: ["VOL"], forca: 84 },
      { id: 'steven-gerrard', nome: "Steven Gerrard", posicoes: ["MC"], forca: 90 },
      { id: 'mohamed-sissoko', nome: "Mohamed Sissoko", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'jermaine-pennant', nome: "Jermaine Pennant", posicoes: ["PD"], forca: 75 },
      { id: 'bolo-zenden', nome: "Bolo Zenden", posicoes: ["MC","PE"], forca: 75 },
      { id: 'peter-crouch', nome: "Peter Crouch", posicoes: ["ATA"], forca: 80 },
      { id: 'dirk-kuyt', nome: "Dirk Kuyt", posicoes: ["ATA"], forca: 81 },
      { id: 'craig-bellamy', nome: "Craig Bellamy", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Manchester United",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { id: 'gary-neville', nome: "Gary Neville", posicoes: ["LD"], forca: 83 },
      { id: 'wes-brown', nome: "Wes Brown", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'rio-ferdinand', nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 87 },
      { id: 'nemanja-vidic', nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 85 },
      { id: 'patrice-evra', nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { id: 'mikael-silvestre', nome: "Mikaël Silvestre", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'michael-carrick', nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 85 },
      { id: 'cristiano-ronaldo', nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 91 },
      { id: 'park-ji-sung', nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 81 },
      { id: 'wayne-rooney', nome: "Wayne Rooney", posicoes: ["ATA"], forca: 88 },
      { id: 'louis-saha', nome: "Louis Saha", posicoes: ["ATA"], forca: 80 },
      { id: 'ole-gunnar-solskj-r', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 81 },
      { id: 'alan-smith', nome: "Alan Smith", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech', nome: "Petr Čech", posicoes: ["GOL"], forca: 89 },
      { id: 'carlo-cudicini', nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 81 },
      { id: 'paulo-ferreira', nome: "Paulo Ferreira", posicoes: ["LD"], forca: 82 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { id: 'ashley-cole', nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { id: 'wayne-bridge', nome: "Wayne Bridge", posicoes: ["LE"], forca: 80 },
      { id: 'michael-essien', nome: "Michael Essien", posicoes: ["VOL","MC","LD"], forca: 87 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC"], forca: 89 },
      { id: 'michael-ballack', nome: "Michael Ballack", posicoes: ["MC"], forca: 84 },
      { id: 'joe-cole', nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD"], forca: 84 },
      { id: 'didier-drogba', nome: "Didier Drogba", posicoes: ["ATA"], forca: 89 },
      { id: 'andriy-shevchenko', nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 82 },
      { id: 'salomon-kalou', nome: "Salomon Kalou", posicoes: ["ATA","PD"], forca: 77 }
    ]
  },

  // ===== Edição 2006 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes', nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { id: 'oleguer', nome: "Oleguer", posicoes: ["LD","ZAG"], forca: 76 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'rafael-marquez', nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'giovanni-van-bronckhorst', nome: "Giovanni van Bronckhorst", posicoes: ["LE"], forca: 81 },
      { id: 'juliano-belletti', nome: "Juliano Belletti", posicoes: ["LD"], forca: 79 },
      { id: 'sylvinho', nome: "Sylvinho", posicoes: ["LE"], forca: 79 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 85 },
      { id: 'deco', nome: "Deco", posicoes: ["MC"], forca: 88 },
      { id: 'andres-iniesta', nome: "Andrés Iniesta", posicoes: ["MC"], forca: 80 },
      { id: 'ludovic-giuly', nome: "Ludovic Giuly", posicoes: ["MC","PD"], forca: 84 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI","PD"], forca: 95 },
      { id: 'lionel-messi', nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 82 },
      { id: 'samuel-etoo', nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 91 },
      { id: 'henrik-larsson', nome: "Henrik Larsson", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Arsenal",
    jogadores: [
      { id: 'jens-lehmann', nome: "Jens Lehmann", posicoes: ["GOL"], forca: 85 },
      { id: 'emmanuel-eboue', nome: "Emmanuel Eboué", posicoes: ["LD"], forca: 77 },
      { id: 'kolo-toure', nome: "Kolo Touré", posicoes: ["ZAG"], forca: 85 },
      { id: 'philippe-senderos', nome: "Philippe Senderos", posicoes: ["ZAG"], forca: 77 },
      { id: 'sol-campbell', nome: "Sol Campbell", posicoes: ["ZAG"], forca: 82 },
      { id: 'ashley-cole', nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { id: 'mathieu-flamini', nome: "Mathieu Flamini", posicoes: ["VOL","LD"], forca: 77 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 83 },
      { id: 'cesc-fabregas', nome: "Cesc Fàbregas", posicoes: ["MC"], forca: 84 },
      { id: 'robert-pires', nome: "Robert Pirès", posicoes: ["MC","PD"], forca: 82 },
      { id: 'freddie-ljungberg', nome: "Freddie Ljungberg", posicoes: ["MC","PD"], forca: 81 },
      { id: 'aleksandr-hleb', nome: "Aleksandr Hleb", posicoes: ["MC","PD"], forca: 80 },
      { id: 'jose-antonio-reyes', nome: "José Antonio Reyes", posicoes: ["ATA","PD"], forca: 79 },
      { id: 'dennis-bergkamp', nome: "Dennis Bergkamp", posicoes: ["ATA"], forca: 80 },
      { id: 'robin-van-persie', nome: "Robin van Persie", posicoes: ["ATA","PD"], forca: 79 },
      { id: 'thierry-henry', nome: "Thierry Henry", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Milan",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD"], forca: 87 },
      { id: 'alessandro-nesta', nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 90 },
      { id: 'jaap-stam', nome: "Jaap Stam", posicoes: ["ZAG"], forca: 87 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'kakha-kaladze', nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 81 },
      { id: 'andrea-pirlo', nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 89 },
      { id: 'gennaro-gattuso', nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["MC"], forca: 88 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 90 },
      { id: 'massimo-ambrosini', nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'rui-costa', nome: "Rui Costa", posicoes: ["MEI"], forca: 85 },
      { id: 'serginho', nome: "Serginho", posicoes: ["MC","LE"], forca: 80 },
      { id: 'alberto-gilardino', nome: "Alberto Gilardino", posicoes: ["ATA"], forca: 81 },
      { id: 'filippo-inzaghi', nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 88 },
      { id: 'andriy-shevchenko', nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Villarreal",
    jogadores: [
      { id: 'sebastian-viera', nome: "Sebastián Viera", posicoes: ["GOL"], forca: 75 },
      { id: 'mariano-barbosa', nome: "Mariano Barbosa", posicoes: ["GOL"], forca: 72 },
      { id: 'javi-venta', nome: "Javi Venta", posicoes: ["LD"], forca: 75 },
      { id: 'gonzalo-rodriguez', nome: "Gonzalo Rodríguez", posicoes: ["ZAG"], forca: 80 },
      { id: 'juan-manuel-pena', nome: "Juan Manuel Peña", posicoes: ["ZAG"], forca: 76 },
      { id: 'rodolfo-arruabarrena', nome: "Rodolfo Arruabarrena", posicoes: ["LE"], forca: 76 },
      { id: 'quique-alvarez', nome: "Quique Álvarez", posicoes: ["ZAG"], forca: 74 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 84 },
      { id: 'josico', nome: "Josico", posicoes: ["VOL"], forca: 75 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL"], forca: 80 },
      { id: 'juan-roman-riquelme', nome: "Juan Román Riquelme", posicoes: ["MEI"], forca: 89 },
      { id: 'santi-cazorla', nome: "Santi Cazorla", posicoes: ["MC","PD"], forca: 77 },
      { id: 'juan-pablo-sorin', nome: "Juan Pablo Sorín", posicoes: ["LD","ME"], forca: 81 },
      { id: 'diego-forlan', nome: "Diego Forlán", posicoes: ["ATA"], forca: 84 },
      { id: 'jose-mari', nome: "José Mari", posicoes: ["ATA"], forca: 75 },
      { id: 'guillermo-franco', nome: "Guillermo Franco", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2005 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Liverpool",
    jogadores: [
      { id: 'jerzy-dudek', nome: "Jerzy Dudek", posicoes: ["GOL"], forca: 82 },
      { id: 'steve-finnan', nome: "Steve Finnan", posicoes: ["LD"], forca: 81 },
      { id: 'jamie-carragher', nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 87 },
      { id: 'sami-hyypia', nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 83 },
      { id: 'djimi-traore', nome: "Djimi Traoré", posicoes: ["LE"], forca: 73 },
      { id: 'john-arne-riise', nome: "John Arne Riise", posicoes: ["LD","ME"], forca: 82 },
      { id: 'xabi-alonso', nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'steven-gerrard', nome: "Steven Gerrard", posicoes: ["MC"], forca: 91 },
      { id: 'dietmar-hamann', nome: "Dietmar Hamann", posicoes: ["VOL"], forca: 81 },
      { id: 'igor-biscan', nome: "Igor Bišćan", posicoes: ["VOL","MC"], forca: 75 },
      { id: 'luis-garcia', nome: "Luis García", posicoes: ["MEI","PD"], forca: 83 },
      { id: 'harry-kewell', nome: "Harry Kewell", posicoes: ["MC","PE"], forca: 80 },
      { id: 'vladimir-smicer', nome: "Vladimír Šmicer", posicoes: ["MC","PD"], forca: 79 },
      { id: 'milan-baros', nome: "Milan Baroš", posicoes: ["ATA"], forca: 81 },
      { id: 'djibril-cisse', nome: "Djibril Cissé", posicoes: ["ATA"], forca: 79 },
      { id: 'florent-sinama-pongolle', nome: "Florent Sinama Pongolle", posicoes: ["ATA"], forca: 72 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Milan",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD"], forca: 87 },
      { id: 'alessandro-nesta', nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 90 },
      { id: 'jaap-stam', nome: "Jaap Stam", posicoes: ["ZAG"], forca: 87 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 89 },
      { id: 'kakha-kaladze', nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 81 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 82 },
      { id: 'gennaro-gattuso', nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { id: 'andrea-pirlo', nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 89 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["MC"], forca: 88 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { id: 'rui-costa', nome: "Rui Costa", posicoes: ["MEI"], forca: 85 },
      { id: 'serginho', nome: "Serginho", posicoes: ["MC","LE"], forca: 80 },
      { id: 'hernan-crespo', nome: "Hernán Crespo", posicoes: ["ATA"], forca: 87 },
      { id: 'andriy-shevchenko', nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 91 },
      { id: 'jon-dahl-tomasson', nome: "Jon Dahl Tomasson", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Chelsea",
    jogadores: [
      { id: 'petr-cech', nome: "Petr Čech", posicoes: ["GOL"], forca: 88 },
      { id: 'paulo-ferreira', nome: "Paulo Ferreira", posicoes: ["LD"], forca: 82 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { id: 'william-gallas', nome: "William Gallas", posicoes: ["ZAG","LD"], forca: 85 },
      { id: 'wayne-bridge', nome: "Wayne Bridge", posicoes: ["LE"], forca: 80 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC"], forca: 90 },
      { id: 'tiago', nome: "Tiago", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'geremi', nome: "Geremi", posicoes: ["MC","LD"], forca: 79 },
      { id: 'joe-cole', nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { id: 'damien-duff', nome: "Damien Duff", posicoes: ["PE"], forca: 83 },
      { id: 'arjen-robben', nome: "Arjen Robben", posicoes: ["PD"], forca: 84 },
      { id: 'eidur-gudjohnsen', nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 80 },
      { id: 'didier-drogba', nome: "Didier Drogba", posicoes: ["ATA"], forca: 82 },
      { id: 'mateja-kezman', nome: "Mateja Kežman", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "PSV Eindhoven",
    jogadores: [
      { id: 'heurelho-gomes', nome: "Heurelho Gomes", posicoes: ["GOL"], forca: 80 },
      { id: 'andre-ooijer', nome: "André Ooijer", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { id: 'wilfred-bouma', nome: "Wilfred Bouma", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'lee-young-pyo', nome: "Lee Young-pyo", posicoes: ["LE"], forca: 79 },
      { id: 'theo-lucius', nome: "Theo Lucius", posicoes: ["LD","MC"], forca: 75 },
      { id: 'phillip-cocu', nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'mark-van-bommel', nome: "Mark van Bommel", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'johann-vogel', nome: "Johann Vogel", posicoes: ["VOL"], forca: 79 },
      { id: 'park-ji-sung', nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 81 },
      { id: 'damarcus-beasley', nome: "DaMarcus Beasley", posicoes: ["PD"], forca: 75 },
      { id: 'john-de-jong', nome: "John de Jong", posicoes: ["MEI"], forca: 75 },
      { id: 'jefferson-farfan', nome: "Jefferson Farfán", posicoes: ["ATA","PD"], forca: 80 },
      { id: 'jan-vennegoor-of-hesselink', nome: "Jan Vennegoor of Hesselink", posicoes: ["ATA"], forca: 77 },
      { id: 'robert', nome: "Robert", posicoes: ["ATA"], forca: 75 },
      { id: 'gerald-sibon', nome: "Gerald Sibon", posicoes: ["ATA"], forca: 73 }
    ]
  },

  // ===== Edição 2004 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Porto",
    jogadores: [
      { id: 'vitor-baia', nome: "Vítor Baía", posicoes: ["GOL"], forca: 82 },
      { id: 'paulo-ferreira', nome: "Paulo Ferreira", posicoes: ["LD"], forca: 82 },
      { id: 'nuno-valente', nome: "Nuno Valente", posicoes: ["LE"], forca: 81 },
      { id: 'jorge-costa', nome: "Jorge Costa", posicoes: ["ZAG"], forca: 82 },
      { id: 'ricardo-carvalho', nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { id: 'pedro-emanuel', nome: "Pedro Emanuel", posicoes: ["ZAG"], forca: 80 },
      { id: 'ricardo-costa', nome: "Ricardo Costa", posicoes: ["ZAG"], forca: 76 },
      { id: 'costinha', nome: "Costinha", posicoes: ["VOL"], forca: 82 },
      { id: 'maniche', nome: "Maniche", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 90 },
      { id: 'pedro-mendes', nome: "Pedro Mendes", posicoes: ["MC"], forca: 80 },
      { id: 'dmitri-alenichev', nome: "Dmitri Alenichev", posicoes: ["MC","ATA"], forca: 81 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'derlei', nome: "Derlei", posicoes: ["ATA"], forca: 82 },
      { id: 'benni-mccarthy', nome: "Benni McCarthy", posicoes: ["ATA"], forca: 82 },
      { id: 'edgaras-jankauskas', nome: "Edgaras Jankauskas", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Monaco",
    jogadores: [
      { id: 'flavio-roma', nome: "Flavio Roma", posicoes: ["GOL"], forca: 77 },
      { id: 'patrice-evra', nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { id: 'gael-givet', nome: "Gaël Givet", posicoes: ["ZAG","LD"], forca: 79 },
      { id: 'julien-rodriguez', nome: "Julien Rodriguez", posicoes: ["ZAG"], forca: 77 },
      { id: 'sebastien-squillaci', nome: "Sébastien Squillaci", posicoes: ["ZAG"], forca: 79 },
      { id: 'hugo-ibarra', nome: "Hugo Ibarra", posicoes: ["LD"], forca: 80 },
      { id: 'lucas-bernardi', nome: "Lucas Bernardi", posicoes: ["VOL"], forca: 79 },
      { id: 'akis-zikos', nome: "Akis Zikos", posicoes: ["VOL"], forca: 77 },
      { id: 'edouard-cisse', nome: "Édouard Cissé", posicoes: ["VOL","MC"], forca: 75 },
      { id: 'ludovic-giuly', nome: "Ludovic Giuly", posicoes: ["MC","PD"], forca: 87 },
      { id: 'jerome-rothen', nome: "Jérôme Rothen", posicoes: ["MC","PE"], forca: 84 },
      { id: 'jaroslav-plasil', nome: "Jaroslav Plašil", posicoes: ["MC","PD"], forca: 77 },
      { id: 'dado-prso', nome: "Dado Pršo", posicoes: ["ATA"], forca: 82 },
      { id: 'fernando-morientes', nome: "Fernando Morientes", posicoes: ["ATA"], forca: 88 },
      { id: 'shabani-nonda', nome: "Shabani Nonda", posicoes: ["ATA"], forca: 77 },
      { id: 'emmanuel-adebayor', nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Chelsea",
    jogadores: [
      { id: 'carlo-cudicini', nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 81 },
      { id: 'wayne-bridge', nome: "Wayne Bridge", posicoes: ["LE"], forca: 80 },
      { id: 'william-gallas', nome: "William Gallas", posicoes: ["ZAG","LD"], forca: 85 },
      { id: 'john-terry', nome: "John Terry", posicoes: ["ZAG"], forca: 85 },
      { id: 'marcel-desailly', nome: "Marcel Desailly", posicoes: ["ZAG"], forca: 81 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 87 },
      { id: 'frank-lampard', nome: "Frank Lampard", posicoes: ["MC"], forca: 88 },
      { id: 'geremi', nome: "Geremi", posicoes: ["MC","LD"], forca: 79 },
      { id: 'joe-cole', nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { id: 'damien-duff', nome: "Damien Duff", posicoes: ["PD"], forca: 83 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC"], forca: 80 },
      { id: 'jesper-gr-nkj-r', nome: "Jesper Grønkjær", posicoes: ["PD"], forca: 77 },
      { id: 'eidur-gudjohnsen', nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 80 },
      { id: 'adrian-mutu', nome: "Adrian Mutu", posicoes: ["ATA","PD"], forca: 80 },
      { id: 'jimmy-floyd-hasselbaink', nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 82 },
      { id: 'hernan-crespo', nome: "Hernán Crespo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Deportivo La Coruña",
    jogadores: [
      { id: 'jose-molina', nome: "José Molina", posicoes: ["GOL"], forca: 80 },
      { id: 'manuel-pablo', nome: "Manuel Pablo", posicoes: ["LD"], forca: 79 },
      { id: 'hector', nome: "Héctor", posicoes: ["LD","ZAG"], forca: 75 },
      { id: 'jorge-andrade', nome: "Jorge Andrade", posicoes: ["ZAG"], forca: 82 },
      { id: 'noureddine-naybet', nome: "Noureddine Naybet", posicoes: ["ZAG"], forca: 81 },
      { id: 'enrique-romero', nome: "Enrique Romero", posicoes: ["LE"], forca: 77 },
      { id: 'lionel-scaloni', nome: "Lionel Scaloni", posicoes: ["LD","MC"], forca: 76 },
      { id: 'mauro-silva', nome: "Mauro Silva", posicoes: ["VOL"], forca: 82 },
      { id: 'aldo-duscher', nome: "Aldo Duscher", posicoes: ["VOL"], forca: 79 },
      { id: 'sergio-gonzalez', nome: "Sergio González", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'victor-sanchez', nome: "Víctor Sánchez", posicoes: ["MC","PD"], forca: 79 },
      { id: 'fran', nome: "Fran", posicoes: ["MC","PE"], forca: 80 },
      { id: 'juan-carlos-valeron', nome: "Juan Carlos Valerón", posicoes: ["MEI"], forca: 87 },
      { id: 'albert-luque', nome: "Albert Luque", posicoes: ["ATA","PD"], forca: 81 },
      { id: 'walter-pandiani', nome: "Walter Pandiani", posicoes: ["ATA"], forca: 81 },
      { id: 'diego-tristan', nome: "Diego Tristán", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2003 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Milan",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 90 },
      { id: 'alessandro-nesta', nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 91 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 82 },
      { id: 'kakha-kaladze', nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'dario-simic', nome: "Dario Šimić", posicoes: ["ZAG"], forca: 77 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 77 },
      { id: 'gennaro-gattuso', nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { id: 'andrea-pirlo', nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["MC"], forca: 87 },
      { id: 'massimo-ambrosini', nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'rui-costa', nome: "Rui Costa", posicoes: ["MEI"], forca: 85 },
      { id: 'serginho', nome: "Serginho", posicoes: ["MC","LE"], forca: 81 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'filippo-inzaghi', nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 88 },
      { id: 'andriy-shevchenko', nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon', nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 91 },
      { id: 'lilian-thuram', nome: "Lilian Thuram", posicoes: ["LD","ZAG"], forca: 89 },
      { id: 'ciro-ferrara', nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 83 },
      { id: 'paolo-montero', nome: "Paolo Montero", posicoes: ["ZAG"], forca: 82 },
      { id: 'mark-iuliano', nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 77 },
      { id: 'gianluca-zambrotta', nome: "Gianluca Zambrotta", posicoes: ["LD"], forca: 87 },
      { id: 'igor-tudor', nome: "Igor Tudor", posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'edgar-davids', nome: "Edgar Davids", posicoes: ["VOL"], forca: 87 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL"], forca: 80 },
      { id: 'pavel-nedved', nome: "Pavel Nedvěd", posicoes: ["MEI"], forca: 94 },
      { id: 'mauro-camoranesi', nome: "Mauro Camoranesi", posicoes: ["MC","PD"], forca: 84 },
      { id: 'antonio-conte', nome: "Antonio Conte", posicoes: ["MC"], forca: 81 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["ATA"], forca: 88 },
      { id: 'david-trezeguet', nome: "David Trezeguet", posicoes: ["ATA"], forca: 87 },
      { id: 'marco-di-vaio', nome: "Marco Di Vaio", posicoes: ["ATA"], forca: 80 },
      { id: 'marcelo-salas', nome: "Marcelo Salas", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { id: 'michel-salgado', nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 90 },
      { id: 'fernando-hierro', nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { id: 'ivan-helguera', nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'francisco-pavon', nome: "Francisco Pavón", posicoes: ["ZAG"], forca: 74 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { id: 'esteban-cambiasso', nome: "Esteban Cambiasso", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'luis-figo', nome: "Luís Figo", posicoes: ["MC","PD"], forca: 90 },
      { id: 'zinedine-zidane', nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 94 },
      { id: 'santiago-solari', nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 80 },
      { id: 'steve-mcmanaman', nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 82 },
      { id: 'guti', nome: "Guti", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'raul', nome: "Raúl", posicoes: ["ATA"], forca: 89 },
      { id: 'ronaldo-fenomeno', nome: "Ronaldo", posicoes: ["ATA"], forca: 91 },
      { id: 'fernando-morientes', nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'francesco-toldo', nome: "Francesco Toldo", posicoes: ["GOL"], forca: 84 },
      { id: 'javier-zanetti', nome: "Javier Zanetti", posicoes: ["LD","ZAG"], forca: 89 },
      { id: 'fabio-cannavaro', nome: "Fabio Cannavaro", posicoes: ["ZAG"], forca: 89 },
      { id: 'marco-materazzi', nome: "Marco Materazzi", posicoes: ["ZAG"], forca: 82 },
      { id: 'ivan-cordoba', nome: "Iván Córdoba", posicoes: ["ZAG","LD"], forca: 84 },
      { id: 'francesco-coco', nome: "Francesco Coco", posicoes: ["LE"], forca: 77 },
      { id: 'luigi-di-biagio', nome: "Luigi Di Biagio", posicoes: ["VOL"], forca: 80 },
      { id: 'cristiano-zanetti', nome: "Cristiano Zanetti", posicoes: ["VOL"], forca: 80 },
      { id: 'matias-almeyda', nome: "Matías Almeyda", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'emre-belozoglu', nome: "Emre Belözoğlu", posicoes: ["MC"], forca: 80 },
      { id: 'sergio-conceicao', nome: "Sérgio Conceição", posicoes: ["MC","PD"], forca: 80 },
      { id: 'alvaro-recoba', nome: "Álvaro Recoba", posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'hernan-crespo', nome: "Hernán Crespo", posicoes: ["ATA"], forca: 87 },
      { id: 'christian-vieri', nome: "Christian Vieri", posicoes: ["ATA"], forca: 89 },
      { id: 'gabriel-batistuta', nome: "Gabriel Batistuta", posicoes: ["ATA"], forca: 80 },
      { id: 'obafemi-martins', nome: "Obafemi Martins", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2002 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 84 },
      { id: 'cesar-sanchez', nome: "César Sánchez", posicoes: ["GOL"], forca: 79 },
      { id: 'michel-salgado', nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 91 },
      { id: 'fernando-hierro', nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { id: 'ivan-helguera', nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'francisco-pavon', nome: "Francisco Pavón", posicoes: ["ZAG"], forca: 75 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { id: 'flavio-conceicao', nome: "Flávio Conceição", posicoes: ["VOL"], forca: 81 },
      { id: 'luis-figo', nome: "Luís Figo", posicoes: ["MC","PD"], forca: 91 },
      { id: 'zinedine-zidane', nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 94 },
      { id: 'santiago-solari', nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 81 },
      { id: 'steve-mcmanaman', nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 82 },
      { id: 'guti', nome: "Guti", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'raul', nome: "Raúl", posicoes: ["ATA"], forca: 90 },
      { id: 'fernando-morientes', nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Bayer Leverkusen",
    jogadores: [
      { id: 'hans-jorg-butt', nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 81 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["ZAG"], forca: 88 },
      { id: 'jens-nowotny', nome: "Jens Nowotny", posicoes: ["ZAG"], forca: 83 },
      { id: 'boris-zivkovic', nome: "Boris Živković", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'diego-placente', nome: "Diego Placente", posicoes: ["LE"], forca: 79 },
      { id: 'zoltan-sebescen', nome: "Zoltán Sebescen", posicoes: ["LD"], forca: 74 },
      { id: 'carsten-ramelow', nome: "Carsten Ramelow", posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'michael-ballack', nome: "Michael Ballack", posicoes: ["VOL","MC"], forca: 91 },
      { id: 'y-ld-ray-basturk', nome: "Yıldıray Baştürk", posicoes: ["MEI"], forca: 84 },
      { id: 'bernd-schneider', nome: "Bernd Schneider", posicoes: ["MC","LD"], forca: 84 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MC","PE"], forca: 87 },
      { id: 'marko-babic', nome: "Marko Babić", posicoes: ["MC","PD"], forca: 75 },
      { id: 'robson-ponte', nome: "Robson Ponte", posicoes: ["MEI"], forca: 74 },
      { id: 'oliver-neuville', nome: "Oliver Neuville", posicoes: ["ATA","PD"], forca: 82 },
      { id: 'ulf-kirsten', nome: "Ulf Kirsten", posicoes: ["ATA"], forca: 80 },
      { id: 'dimitar-berbatov', nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Barcelona",
    jogadores: [
      { id: 'roberto-bonano', nome: "Roberto Bonano", posicoes: ["GOL"], forca: 76 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["LD","ZAG"], forca: 89 },
      { id: 'michael-reiziger', nome: "Michael Reiziger", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'frank-de-boer', nome: "Frank de Boer", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'abelardo', nome: "Abelardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'sergi-barjuan', nome: "Sergi Barjuán", posicoes: ["LE"], forca: 82 },
      { id: 'philippe-christanval', nome: "Philippe Christanval", posicoes: ["ZAG"], forca: 75 },
      { id: 'phillip-cocu', nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 81 },
      { id: 'gabri', nome: "Gabri", posicoes: ["MC","LD"], forca: 76 },
      { id: 'luis-enrique', nome: "Luis Enrique", posicoes: ["MC","PD"], forca: 87 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI","PD"], forca: 90 },
      { id: 'marc-overmars', nome: "Marc Overmars", posicoes: ["PD"], forca: 84 },
      { id: 'patrick-kluivert', nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 87 },
      { id: 'javier-saviola', nome: "Javier Saviola", posicoes: ["ATA"], forca: 82 },
      { id: 'dani-garcia', nome: "Dani García", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Manchester United",
    jogadores: [
      { id: 'fabien-barthez', nome: "Fabien Barthez", posicoes: ["GOL"], forca: 84 },
      { id: 'gary-neville', nome: "Gary Neville", posicoes: ["LD"], forca: 83 },
      { id: 'phil-neville', nome: "Phil Neville", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'wes-brown', nome: "Wes Brown", posicoes: ["ZAG"], forca: 79 },
      { id: 'laurent-blanc', nome: "Laurent Blanc", posicoes: ["ZAG"], forca: 82 },
      { id: 'mikael-silvestre', nome: "Mikaël Silvestre", posicoes: ["LE","ZAG"], forca: 77 },
      { id: 'denis-irwin', nome: "Denis Irwin", posicoes: ["LE"], forca: 80 },
      { id: 'roy-keane', nome: "Roy Keane", posicoes: ["VOL","MC"], forca: 89 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { id: 'nicky-butt', nome: "Nicky Butt", posicoes: ["VOL"], forca: 80 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["PE"], forca: 88 },
      { id: 'david-beckham', nome: "David Beckham", posicoes: ["MC","PD"], forca: 90 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC"], forca: 83 },
      { id: 'ole-gunnar-solskj-r', nome: "Ole Gunnar Solskjær", posicoes: ["ATA","PD"], forca: 81 },
      { id: 'ruud-van-nistelrooy', nome: "Ruud van Nistelrooy", posicoes: ["ATA"], forca: 90 },
      { id: 'diego-forlan', nome: "Diego Forlán", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 2001 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'oliver-kahn', nome: "Oliver Kahn", posicoes: ["GOL"], forca: 93 },
      { id: 'willy-sagnol', nome: "Willy Sagnol", posicoes: ["LD"], forca: 84 },
      { id: 'bixente-lizarazu', nome: "Bixente Lizarazu", posicoes: ["LE","LD"], forca: 87 },
      { id: 'samuel-kuffour', nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 83 },
      { id: 'thomas-linke', nome: "Thomas Linke", posicoes: ["ZAG"], forca: 82 },
      { id: 'patrik-andersson', nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 82 },
      { id: 'michael-tarnat', nome: "Michael Tarnat", posicoes: ["LE"], forca: 80 },
      { id: 'stefan-effenberg', nome: "Stefan Effenberg", posicoes: ["VOL","MC"], forca: 90 },
      { id: 'jens-jeremies', nome: "Jens Jeremies", posicoes: ["VOL"], forca: 82 },
      { id: 'owen-hargreaves', nome: "Owen Hargreaves", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'thorsten-fink', nome: "Thorsten Fink", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'mehmet-scholl', nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { id: 'hasan-salihamidzic', nome: "Hasan Salihamidžić", posicoes: ["MC","PD"], forca: 82 },
      { id: 'alexander-zickler', nome: "Alexander Zickler", posicoes: ["ATA"], forca: 77 },
      { id: 'carsten-jancker', nome: "Carsten Jancker", posicoes: ["ATA"], forca: 81 },
      { id: 'giovane-elber', nome: "Giovane Élber", posicoes: ["ATA"], forca: 87 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-canizares', nome: "Santiago Cañizares", posicoes: ["GOL"], forca: 84 },
      { id: 'jocelyn-angloma', nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 81 },
      { id: 'amedeo-carboni', nome: "Amedeo Carboni", posicoes: ["LE"], forca: 81 },
      { id: 'mauricio-pellegrino', nome: "Mauricio Pellegrino", posicoes: ["ZAG"], forca: 81 },
      { id: 'roberto-ayala', nome: "Roberto Ayala", posicoes: ["ZAG"], forca: 87 },
      { id: 'miroslav-djukic', nome: "Miroslav Djukić", posicoes: ["ZAG"], forca: 81 },
      { id: 'david-albelda', nome: "David Albelda", posicoes: ["VOL"], forca: 82 },
      { id: 'ruben-baraja', nome: "Rubén Baraja", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'gaizka-mendieta', nome: "Gaizka Mendieta", posicoes: ["MC","LD"], forca: 90 },
      { id: 'kily-gonzalez', nome: "Kily González", posicoes: ["MC","PE"], forca: 84 },
      { id: 'pablo-aimar', nome: "Pablo Aimar", posicoes: ["MEI"], forca: 84 },
      { id: 'vicente', nome: "Vicente", posicoes: ["PD","MC"], forca: 81 },
      { id: 'miguel-angel-angulo', nome: "Miguel Ángel Angulo", posicoes: ["MC","ATA"], forca: 80 },
      { id: 'john-carew', nome: "John Carew", posicoes: ["ATA"], forca: 79 },
      { id: 'juan-sanchez', nome: "Juan Sánchez", posicoes: ["ATA"], forca: 77 },
      { id: 'diego-alonso', nome: "Diego Alonso", posicoes: ["ATA"], forca: 74 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { id: 'cesar-sanchez', nome: "César Sánchez", posicoes: ["GOL"], forca: 77 },
      { id: 'michel-salgado', nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 91 },
      { id: 'fernando-hierro', nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { id: 'ivan-helguera', nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'aitor-karanka', nome: "Aitor Karanka", posicoes: ["ZAG"], forca: 76 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { id: 'flavio-conceicao', nome: "Flávio Conceição", posicoes: ["VOL"], forca: 80 },
      { id: 'luis-figo', nome: "Luís Figo", posicoes: ["MC","PD"], forca: 93 },
      { id: 'steve-mcmanaman', nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 82 },
      { id: 'santiago-solari', nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 80 },
      { id: 'guti', nome: "Guti", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'savio', nome: "Sávio", posicoes: ["MC","PE"], forca: 80 },
      { id: 'raul', nome: "Raúl", posicoes: ["ATA"], forca: 91 },
      { id: 'fernando-morientes', nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Leeds United",
    jogadores: [
      { id: 'nigel-martyn', nome: "Nigel Martyn", posicoes: ["GOL"], forca: 80 },
      { id: 'gary-kelly', nome: "Gary Kelly", posicoes: ["LD"], forca: 77 },
      { id: 'danny-mills', nome: "Danny Mills", posicoes: ["LD"], forca: 76 },
      { id: 'ian-harte', nome: "Ian Harte", posicoes: ["LE"], forca: 79 },
      { id: 'rio-ferdinand', nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 84 },
      { id: 'lucas-radebe', nome: "Lucas Radebe", posicoes: ["ZAG"], forca: 81 },
      { id: 'jonathan-woodgate', nome: "Jonathan Woodgate", posicoes: ["ZAG"], forca: 80 },
      { id: 'dominic-matteo', nome: "Dominic Matteo", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'david-batty', nome: "David Batty", posicoes: ["VOL"], forca: 79 },
      { id: 'olivier-dacourt', nome: "Olivier Dacourt", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'eirik-bakke', nome: "Eirik Bakke", posicoes: ["MC"], forca: 75 },
      { id: 'lee-bowyer', nome: "Lee Bowyer", posicoes: ["MC","LD"], forca: 81 },
      { id: 'harry-kewell', nome: "Harry Kewell", posicoes: ["MC","PE"], forca: 84 },
      { id: 'alan-smith', nome: "Alan Smith", posicoes: ["ATA"], forca: 80 },
      { id: 'mark-viduka', nome: "Mark Viduka", posicoes: ["ATA"], forca: 84 },
      { id: 'robbie-keane', nome: "Robbie Keane", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2000 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas', nome: "Iker Casillas", posicoes: ["GOL"], forca: 82 },
      { id: 'michel-salgado', nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { id: 'ivan-helguera', nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'fernando-hierro', nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { id: 'aitor-karanka', nome: "Aitor Karanka", posicoes: ["ZAG"], forca: 77 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 91 },
      { id: 'fernando-redondo', nome: "Fernando Redondo", posicoes: ["VOL"], forca: 93 },
      { id: 'christian-karembeu', nome: "Christian Karembeu", posicoes: ["VOL"], forca: 81 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'steve-mcmanaman', nome: "Steve McManaman", posicoes: ["MC","LD"], forca: 82 },
      { id: 'guti', nome: "Guti", posicoes: ["MEI","PD"], forca: 82 },
      { id: 'savio', nome: "Sávio", posicoes: ["MC","PE"], forca: 81 },
      { id: 'geremi', nome: "Geremi", posicoes: ["MC","LD"], forca: 80 },
      { id: 'raul', nome: "Raúl", posicoes: ["ATA"], forca: 91 },
      { id: 'fernando-morientes', nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 },
      { id: 'nicolas-anelka', nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-canizares', nome: "Santiago Cañizares", posicoes: ["GOL"], forca: 84 },
      { id: 'jocelyn-angloma', nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 81 },
      { id: 'amedeo-carboni', nome: "Amedeo Carboni", posicoes: ["LE"], forca: 81 },
      { id: 'miroslav-djukic', nome: "Miroslav Djukić", posicoes: ["ZAG"], forca: 81 },
      { id: 'mauricio-pellegrino', nome: "Mauricio Pellegrino", posicoes: ["ZAG"], forca: 81 },
      { id: 'joachim-bjorklund', nome: "Joachim Björklund", posicoes: ["ZAG"], forca: 77 },
      { id: 'gerardo', nome: "Gerardo", posicoes: ["LD","MC"], forca: 74 },
      { id: 'david-albelda', nome: "David Albelda", posicoes: ["VOL"], forca: 82 },
      { id: 'javier-farinos', nome: "Javier Farinós", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'gerard-lopez', nome: "Gerard López", posicoes: ["MC"], forca: 80 },
      { id: 'gaizka-mendieta', nome: "Gaizka Mendieta", posicoes: ["MC","LD"], forca: 89 },
      { id: 'kily-gonzalez', nome: "Kily González", posicoes: ["MC","PE"], forca: 84 },
      { id: 'miguel-angel-angulo', nome: "Miguel Ángel Angulo", posicoes: ["MC","ATA"], forca: 80 },
      { id: 'claudio-lopez', nome: "Claudio López", posicoes: ["ATA","PD"], forca: 87 },
      { id: 'adrian-ilie', nome: "Adrian Ilie", posicoes: ["ATA"], forca: 80 },
      { id: 'juan-sanchez', nome: "Juan Sánchez", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'oliver-kahn', nome: "Oliver Kahn", posicoes: ["GOL"], forca: 90 },
      { id: 'samuel-kuffour', nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 83 },
      { id: 'thomas-linke', nome: "Thomas Linke", posicoes: ["ZAG"], forca: 81 },
      { id: 'patrik-andersson', nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 82 },
      { id: 'bixente-lizarazu', nome: "Bixente Lizarazu", posicoes: ["LE","LD"], forca: 87 },
      { id: 'markus-babbel', nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'michael-tarnat', nome: "Michael Tarnat", posicoes: ["LE"], forca: 79 },
      { id: 'stefan-effenberg', nome: "Stefan Effenberg", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'jens-jeremies', nome: "Jens Jeremies", posicoes: ["VOL"], forca: 82 },
      { id: 'thorsten-fink', nome: "Thorsten Fink", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'mehmet-scholl', nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { id: 'hasan-salihamidzic', nome: "Hasan Salihamidžić", posicoes: ["MC","PD"], forca: 82 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC","ATA"], forca: 79 },
      { id: 'alexander-zickler', nome: "Alexander Zickler", posicoes: ["ATA"], forca: 76 },
      { id: 'carsten-jancker', nome: "Carsten Jancker", posicoes: ["ATA"], forca: 80 },
      { id: 'giovane-elber', nome: "Giovane Élber", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Barcelona",
    jogadores: [
      { id: 'ruud-hesp', nome: "Ruud Hesp", posicoes: ["GOL"], forca: 77 },
      { id: 'carles-puyol', nome: "Carles Puyol", posicoes: ["LD","ZAG"], forca: 76 },
      { id: 'michael-reiziger', nome: "Michael Reiziger", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'abelardo', nome: "Abelardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'frank-de-boer', nome: "Frank de Boer", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'sergi-barjuan', nome: "Sergi Barjuán", posicoes: ["LE"], forca: 82 },
      { id: 'winston-bogarde', nome: "Winston Bogarde", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'pep-guardiola', nome: "Pep Guardiola", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'phillip-cocu', nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'xavi', nome: "Xavi", posicoes: ["MC"], forca: 77 },
      { id: 'luis-enrique', nome: "Luis Enrique", posicoes: ["MC","PD"], forca: 87 },
      { id: 'luis-figo', nome: "Luís Figo", posicoes: ["PD","MC"], forca: 94 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI","PD"], forca: 94 },
      { id: 'patrick-kluivert', nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 87 },
      { id: 'dani-garcia', nome: "Dani García", posicoes: ["ATA"], forca: 75 },
      { id: 'jari-litmanen', nome: "Jari Litmanen", posicoes: ["MEI","ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1999 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel', nome: "Peter Schmeichel", posicoes: ["GOL"], forca: 90 },
      { id: 'gary-neville', nome: "Gary Neville", posicoes: ["LD"], forca: 83 },
      { id: 'denis-irwin', nome: "Denis Irwin", posicoes: ["LE"], forca: 84 },
      { id: 'jaap-stam', nome: "Jaap Stam", posicoes: ["ZAG"], forca: 88 },
      { id: 'ronny-johnsen', nome: "Ronny Johnsen", posicoes: ["ZAG"], forca: 82 },
      { id: 'roy-keane', nome: "Roy Keane", posicoes: ["MC"], forca: 90 },
      { id: 'david-beckham', nome: "David Beckham", posicoes: ["MC","MD"], forca: 89 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 86 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["ME"], forca: 88 },
      { id: 'nicky-butt', nome: "Nicky Butt", posicoes: ["MC"], forca: 82 },
      { id: 'dwight-yorke', nome: "Dwight Yorke", posicoes: ["ATA"], forca: 88 },
      { id: 'andy-cole', nome: "Andy Cole", posicoes: ["ATA"], forca: 86 },
      { id: 'ole-gunnar-solskj-r', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 84 },
      { id: 'teddy-sheringham', nome: "Teddy Sheringham", posicoes: ["ATA"], forca: 83 },
      { id: 'jesper-blomqvist', nome: "Jesper Blomqvist", posicoes: ["ME"], forca: 79 },
      { id: 'david-may', nome: "David May", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'oliver-kahn', nome: "Oliver Kahn", posicoes: ["GOL"], forca: 90 },
      { id: 'markus-babbel', nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'samuel-kuffour', nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 84 },
      { id: 'thomas-linke', nome: "Thomas Linke", posicoes: ["ZAG"], forca: 82 },
      { id: 'lothar-matthaus', nome: "Lothar Matthäus", posicoes: ["ZAG"], forca: 86 },
      { id: 'michael-tarnat', nome: "Michael Tarnat", posicoes: ["LE"], forca: 80 },
      { id: 'bixente-lizarazu', nome: "Bixente Lizarazu", posicoes: ["LE"], forca: 86 },
      { id: 'stefan-effenberg', nome: "Stefan Effenberg", posicoes: ["MC"], forca: 88 },
      { id: 'jens-jeremies', nome: "Jens Jeremies", posicoes: ["VOL"], forca: 83 },
      { id: 'mehmet-scholl', nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { id: 'hasan-salihamidzic', nome: "Hasan Salihamidžić", posicoes: ["MD","ME"], forca: 82 },
      { id: 'mario-basler', nome: "Mario Basler", posicoes: ["PD","MEI"], forca: 84 },
      { id: 'carsten-jancker', nome: "Carsten Jancker", posicoes: ["ATA"], forca: 82 },
      { id: 'alexander-zickler', nome: "Alexander Zickler", posicoes: ["ATA"], forca: 80 },
      { id: 'giovane-elber', nome: "Giovane Élber", posicoes: ["ATA"], forca: 85 },
      { id: 'thomas-helmer', nome: "Thomas Helmer", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi', nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 86 },
      { id: 'ciro-ferrara', nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 85 },
      { id: 'paolo-montero', nome: "Paolo Montero", posicoes: ["ZAG"], forca: 84 },
      { id: 'mark-iuliano', nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 82 },
      { id: 'alessandro-birindelli', nome: "Alessandro Birindelli", posicoes: ["LD"], forca: 80 },
      { id: 'didier-deschamps', nome: "Didier Deschamps", posicoes: ["VOL"], forca: 84 },
      { id: 'edgar-davids', nome: "Edgar Davids", posicoes: ["MC"], forca: 87 },
      { id: 'zinedine-zidane', nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 92 },
      { id: 'angelo-di-livio', nome: "Angelo Di Livio", posicoes: ["MD"], forca: 82 },
      { id: 'antonio-conte', nome: "Antonio Conte", posicoes: ["MC"], forca: 82 },
      { id: 'filippo-inzaghi', nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 87 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'daniel-fonseca', nome: "Daniel Fonseca", posicoes: ["ATA"], forca: 79 },
      { id: 'moreno-torricelli', nome: "Moreno Torricelli", posicoes: ["LD","ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Dynamo Kyiv",
    jogadores: [
      { id: 'oleksandr-shovkovskyi', nome: "Oleksandr Shovkovskyi", posicoes: ["GOL"], forca: 84 },
      { id: 'oleh-luzhnyi', nome: "Oleh Luzhnyi", posicoes: ["ZAG"], forca: 84 },
      { id: 'vladyslav-vashchuk', nome: "Vladyslav Vashchuk", posicoes: ["ZAG"], forca: 82 },
      { id: 'serhiy-fedorov', nome: "Serhiy Fedorov", posicoes: ["ZAG"], forca: 80 },
      { id: 'kakha-kaladze', nome: "Kakha Kaladze", posicoes: ["LE"], forca: 83 },
      { id: 'serhiy-rebrov', nome: "Serhiy Rebrov", posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'yuriy-kalitvintsev', nome: "Yuriy Kalitvintsev", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'valentyn-belkevich', nome: "Valentyn Belkevich", posicoes: ["MC"], forca: 84 },
      { id: 'andriy-husin', nome: "Andriy Husin", posicoes: ["ME"], forca: 82 },
      { id: 'vitaliy-kosovskyi', nome: "Vitaliy Kosovskyi", posicoes: ["ME"], forca: 81 },
      { id: 'andriy-shevchenko', nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 91 },
      { id: 'oleksandr-khatskevich', nome: "Oleksandr Khatskevich", posicoes: ["MC"], forca: 81 },
      { id: 'maksim-shatskikh', nome: "Maksim Shatskikh", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1998 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Real Madrid",
    jogadores: [
      { id: 'bodo-illgner', nome: "Bodo Illgner", posicoes: ["GOL"], forca: 84 },
      { id: 'christian-panucci', nome: "Christian Panucci", posicoes: ["LD"], forca: 83 },
      { id: 'fernando-hierro', nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { id: 'manolo-sanchis', nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 84 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 90 },
      { id: 'fernando-redondo', nome: "Fernando Redondo", posicoes: ["VOL"], forca: 89 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["MC"], forca: 87 },
      { id: 'christian-karembeu', nome: "Christian Karembeu", posicoes: ["MC"], forca: 83 },
      { id: 'raul', nome: "Raúl", posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'predrag-mijatovic', nome: "Predrag Mijatović", posicoes: ["ATA"], forca: 88 },
      { id: 'fernando-morientes', nome: "Fernando Morientes", posicoes: ["ATA"], forca: 84 },
      { id: 'davor-suker', nome: "Davor Šuker", posicoes: ["ATA"], forca: 83 },
      { id: 'amavisca', nome: "Amavisca", posicoes: ["ME"], forca: 80 },
      { id: 'robert-jarni', nome: "Robert Jarni", posicoes: ["LE","ME"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi', nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 87 },
      { id: 'ciro-ferrara', nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 86 },
      { id: 'paolo-montero', nome: "Paolo Montero", posicoes: ["ZAG"], forca: 85 },
      { id: 'mark-iuliano', nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 82 },
      { id: 'gianluca-pessotto', nome: "Gianluca Pessotto", posicoes: ["LE","LD"], forca: 82 },
      { id: 'didier-deschamps', nome: "Didier Deschamps", posicoes: ["VOL"], forca: 85 },
      { id: 'edgar-davids', nome: "Edgar Davids", posicoes: ["MC"], forca: 86 },
      { id: 'zinedine-zidane', nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 91 },
      { id: 'angelo-di-livio', nome: "Angelo Di Livio", posicoes: ["MD"], forca: 83 },
      { id: 'antonio-conte', nome: "Antonio Conte", posicoes: ["MC"], forca: 83 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 92 },
      { id: 'filippo-inzaghi', nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 86 },
      { id: 'daniel-fonseca', nome: "Daniel Fonseca", posicoes: ["ATA"], forca: 80 },
      { id: 'moreno-torricelli', nome: "Moreno Torricelli", posicoes: ["LD"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Borussia Dortmund",
    jogadores: [
      { id: 'stefan-klos', nome: "Stefan Klos", posicoes: ["GOL"], forca: 84 },
      { id: 'stefan-reuter', nome: "Stefan Reuter", posicoes: ["LD"], forca: 84 },
      { id: 'jurgen-kohler', nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 86 },
      { id: 'christian-worns', nome: "Christian Wörns", posicoes: ["ZAG"], forca: 83 },
      { id: 'jorg-heinrich', nome: "Jörg Heinrich", posicoes: ["LE","ME"], forca: 83 },
      { id: 'paul-lambert', nome: "Paul Lambert", posicoes: ["MC"], forca: 83 },
      { id: 'michael-zorc', nome: "Michael Zorc", posicoes: ["MC"], forca: 82 },
      { id: 'andreas-moller', nome: "Andreas Möller", posicoes: ["MEI"], forca: 86 },
      { id: 'stephane-chapuisat', nome: "Stéphane Chapuisat", posicoes: ["ATA"], forca: 85 },
      { id: 'karl-heinz-riedle', nome: "Karl-Heinz Riedle", posicoes: ["ATA"], forca: 82 },
      { id: 'lars-ricken', nome: "Lars Ricken", posicoes: ["ATA"], forca: 82 },
      { id: 'heiko-herrlich', nome: "Heiko Herrlich", posicoes: ["ATA"], forca: 81 },
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["ZAG"], forca: 81 },
      { id: 'matthias-sammer', nome: "Matthias Sammer", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Monaco",
    jogadores: [
      { id: 'fabien-barthez', nome: "Fabien Barthez", posicoes: ["GOL"], forca: 85 },
      { id: 'willy-sagnol', nome: "Willy Sagnol", posicoes: ["LD"], forca: 80 },
      { id: 'martin-djetou', nome: "Martin Djetou", posicoes: ["ZAG"], forca: 82 },
      { id: 'philippe-christanval', nome: "Philippe Christanval", posicoes: ["ZAG"], forca: 78 },
      { id: 'sabri-lamouchi', nome: "Sabri Lamouchi", posicoes: ["MC"], forca: 83 },
      { id: 'john-collins', nome: "John Collins", posicoes: ["MC"], forca: 82 },
      { id: 'ali-benarbia', nome: "Ali Benarbia", posicoes: ["MEI"], forca: 84 },
      { id: 'ludovic-giuly', nome: "Ludovic Giuly", posicoes: ["PD","MEI"], forca: 82 },
      { id: 'thierry-henry', nome: "Thierry Henry", posicoes: ["PE","ATA"], forca: 84 },
      { id: 'david-trezeguet', nome: "David Trezeguet", posicoes: ["ATA"], forca: 83 },
      { id: 'victor-ikpeba', nome: "Victor Ikpeba", posicoes: ["ATA"], forca: 84 },
      { id: 'costinha', nome: "Costinha", posicoes: ["MC"], forca: 80 },
      { id: 'franck-dumas', nome: "Franck Dumas", posicoes: ["ZAG"], forca: 80 },
      { id: 'rui-barros', nome: "Rui Barros", posicoes: ["ME"], forca: 80 }
    ]
  },

  // ===== Edição 1997 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Borussia Dortmund",
    jogadores: [
      { id: 'stefan-klos', nome: "Stefan Klos", posicoes: ["GOL"], forca: 84 },
      { id: 'stefan-reuter', nome: "Stefan Reuter", posicoes: ["LD"], forca: 84 },
      { id: 'jurgen-kohler', nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 87 },
      { id: 'matthias-sammer', nome: "Matthias Sammer", posicoes: ["ZAG"], forca: 90 },
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["ZAG"], forca: 82 },
      { id: 'jorg-heinrich', nome: "Jörg Heinrich", posicoes: ["LE","ME"], forca: 83 },
      { id: 'paul-lambert', nome: "Paul Lambert", posicoes: ["MC"], forca: 84 },
      { id: 'paulo-sousa', nome: "Paulo Sousa", posicoes: ["MC"], forca: 85 },
      { id: 'andreas-moller', nome: "Andreas Möller", posicoes: ["MEI"], forca: 88 },
      { id: 'karl-heinz-riedle', nome: "Karl-Heinz Riedle", posicoes: ["ATA"], forca: 85 },
      { id: 'stephane-chapuisat', nome: "Stéphane Chapuisat", posicoes: ["ATA"], forca: 86 },
      { id: 'lars-ricken', nome: "Lars Ricken", posicoes: ["ATA"], forca: 82 },
      { id: 'michael-zorc', nome: "Michael Zorc", posicoes: ["MC"], forca: 83 },
      { id: 'heiko-herrlich', nome: "Heiko Herrlich", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi', nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 87 },
      { id: 'ciro-ferrara', nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 86 },
      { id: 'paolo-montero', nome: "Paolo Montero", posicoes: ["ZAG"], forca: 84 },
      { id: 'gianluca-pessotto', nome: "Gianluca Pessotto", posicoes: ["LE","LD"], forca: 82 },
      { id: 'didier-deschamps', nome: "Didier Deschamps", posicoes: ["VOL"], forca: 86 },
      { id: 'zinedine-zidane', nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 90 },
      { id: 'angelo-di-livio', nome: "Angelo Di Livio", posicoes: ["MD"], forca: 84 },
      { id: 'vladimir-jugovic', nome: "Vladimir Jugović", posicoes: ["MC"], forca: 84 },
      { id: 'antonio-conte', nome: "Antonio Conte", posicoes: ["MC"], forca: 83 },
      { id: 'alen-boksic', nome: "Alen Bokšić", posicoes: ["ATA"], forca: 86 },
      { id: 'christian-vieri', nome: "Christian Vieri", posicoes: ["ATA"], forca: 84 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 89 },
      { id: 'nicola-amoruso', nome: "Nicola Amoruso", posicoes: ["ATA"], forca: 80 },
      { id: 'mark-iuliano', nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Manchester United",
    jogadores: [
      { id: 'peter-schmeichel', nome: "Peter Schmeichel", posicoes: ["GOL"], forca: 90 },
      { id: 'gary-neville', nome: "Gary Neville", posicoes: ["LD"], forca: 82 },
      { id: 'denis-irwin', nome: "Denis Irwin", posicoes: ["LE"], forca: 84 },
      { id: 'gary-pallister', nome: "Gary Pallister", posicoes: ["ZAG"], forca: 83 },
      { id: 'ronny-johnsen', nome: "Ronny Johnsen", posicoes: ["ZAG"], forca: 81 },
      { id: 'roy-keane', nome: "Roy Keane", posicoes: ["MC"], forca: 88 },
      { id: 'david-beckham', nome: "David Beckham", posicoes: ["MD"], forca: 84 },
      { id: 'paul-scholes', nome: "Paul Scholes", posicoes: ["MC"], forca: 83 },
      { id: 'ryan-giggs', nome: "Ryan Giggs", posicoes: ["ME"], forca: 88 },
      { id: 'eric-cantona', nome: "Eric Cantona", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'andy-cole', nome: "Andy Cole", posicoes: ["ATA"], forca: 84 },
      { id: 'ole-gunnar-solskj-r', nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 82 },
      { id: 'nicky-butt', nome: "Nicky Butt", posicoes: ["MC"], forca: 80 },
      { id: 'david-may', nome: "David May", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Ajax",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 87 },
      { id: 'danny-blind', nome: "Danny Blind", posicoes: ["ZAG"], forca: 84 },
      { id: 'frank-de-boer', nome: "Frank de Boer", posicoes: ["ZAG","LE"], forca: 85 },
      { id: 'michael-reiziger', nome: "Michael Reiziger", posicoes: ["LD"], forca: 82 },
      { id: 'richard-witschge', nome: "Richard Witschge", posicoes: ["MC"], forca: 82 },
      { id: 'jari-litmanen', nome: "Jari Litmanen", posicoes: ["MEI"], forca: 88 },
      { id: 'ronald-de-boer', nome: "Ronald de Boer", posicoes: ["MEI","MC"], forca: 85 },
      { id: 'marc-overmars', nome: "Marc Overmars", posicoes: ["PE"], forca: 85 },
      { id: 'tijani-babangida', nome: "Tijani Babangida", posicoes: ["PD"], forca: 82 },
      { id: 'patrick-kluivert', nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 84 },
      { id: 'nwankwo-kanu', nome: "Nwankwo Kanu", posicoes: ["ATA"], forca: 83 },
      { id: 'kiki-musampa', nome: "Kiki Musampa", posicoes: ["ME"], forca: 80 },
      { id: 'winston-bogarde', nome: "Winston Bogarde", posicoes: ["ZAG"], forca: 81 },
      { id: 'arnold-scholten', nome: "Arnold Scholten", posicoes: ["MC"], forca: 78 }
    ]
  },

  // ===== Edição 1996 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi', nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 87 },
      { id: 'ciro-ferrara', nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 86 },
      { id: 'moreno-torricelli', nome: "Moreno Torricelli", posicoes: ["LD","LE"], forca: 83 },
      { id: 'gianluca-pessotto', nome: "Gianluca Pessotto", posicoes: ["LE","LD"], forca: 82 },
      { id: 'pietro-vierchowod', nome: "Pietro Vierchowod", posicoes: ["ZAG"], forca: 83 },
      { id: 'angelo-di-livio', nome: "Angelo Di Livio", posicoes: ["MD"], forca: 84 },
      { id: 'antonio-conte', nome: "Antonio Conte", posicoes: ["MC"], forca: 84 },
      { id: 'didier-deschamps', nome: "Didier Deschamps", posicoes: ["VOL"], forca: 86 },
      { id: 'paulo-sousa', nome: "Paulo Sousa", posicoes: ["MC"], forca: 84 },
      { id: 'vladimir-jugovic', nome: "Vladimir Jugović", posicoes: ["MC"], forca: 84 },
      { id: 'gianluca-vialli', nome: "Gianluca Vialli", posicoes: ["ATA"], forca: 88 },
      { id: 'fabrizio-ravanelli', nome: "Fabrizio Ravanelli", posicoes: ["ATA"], forca: 86 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 87 },
      { id: 'michele-padovano', nome: "Michele Padovano", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Ajax",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 87 },
      { id: 'michael-reiziger', nome: "Michael Reiziger", posicoes: ["LD"], forca: 83 },
      { id: 'frank-de-boer', nome: "Frank de Boer", posicoes: ["ZAG","LE"], forca: 86 },
      { id: 'danny-blind', nome: "Danny Blind", posicoes: ["ZAG"], forca: 85 },
      { id: 'winston-bogarde', nome: "Winston Bogarde", posicoes: ["LE","ZAG"], forca: 81 },
      { id: 'edgar-davids', nome: "Edgar Davids", posicoes: ["MC"], forca: 85 },
      { id: 'jari-litmanen', nome: "Jari Litmanen", posicoes: ["MEI"], forca: 89 },
      { id: 'ronald-de-boer', nome: "Ronald de Boer", posicoes: ["MEI","MC"], forca: 85 },
      { id: 'marc-overmars', nome: "Marc Overmars", posicoes: ["PE"], forca: 86 },
      { id: 'finidi-george', nome: "Finidi George", posicoes: ["PD"], forca: 84 },
      { id: 'patrick-kluivert', nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 85 },
      { id: 'nwankwo-kanu', nome: "Nwankwo Kanu", posicoes: ["ATA"], forca: 83 },
      { id: 'kiki-musampa', nome: "Kiki Musampa", posicoes: ["ME"], forca: 79 },
      { id: 'tijani-babangida', nome: "Tijani Babangida", posicoes: ["PD"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Nantes",
    jogadores: [
      { id: 'dominique-casagrande', nome: "Dominique Casagrande", posicoes: ["GOL"], forca: 80 },
      { id: 'serge-le-dizet', nome: "Serge Le Dizet", posicoes: ["LD"], forca: 80 },
      { id: 'nicolas-ouedec', nome: "Nicolas Ouédec", posicoes: ["ATA"], forca: 84 },
      { id: 'bruno-carotti', nome: "Bruno Carotti", posicoes: ["ZAG"], forca: 78 },
      { id: 'claude-makelele', nome: "Claude Makélélé", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'christian-karembeu', nome: "Christian Karembeu", posicoes: ["MC"], forca: 83 },
      { id: 'japhet-ndoram', nome: "Japhet N'Doram", posicoes: ["MEI"], forca: 85 },
      { id: 'reynald-pedros', nome: "Reynald Pedros", posicoes: ["ME"], forca: 83 },
      { id: 'patrice-loko', nome: "Patrice Loko", posicoes: ["ATA"], forca: 82 },
      { id: 'vulic', nome: "Vulic", posicoes: ["ATA"], forca: 78 },
      { id: 'sebastien-piocelle', nome: "Sébastien Piocelle", posicoes: ["MC"], forca: 77 },
      { id: 'eric-decroix', nome: "Éric Decroix", posicoes: ["ZAG"], forca: 78 },
      { id: 'guy-roland-ndy-assembe', nome: "Guy Roland Ndy Assembe", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Panathinaikos",
    jogadores: [
      { id: 'jozef-wandzik', nome: "Józef Wandzik", posicoes: ["GOL"], forca: 82 },
      { id: 'stratos-apostolakis', nome: "Stratos Apostolakis", posicoes: ["LD"], forca: 81 },
      { id: 'giannis-kalitzakis', nome: "Giannis Kalitzakis", posicoes: ["ZAG"], forca: 81 },
      { id: 'marinos-ouzounidis', nome: "Marinos Ouzounidis", posicoes: ["ZAG"], forca: 80 },
      { id: 'nikos-nioplias', nome: "Nikos Nioplias", posicoes: ["MC"], forca: 82 },
      { id: 'juan-jose-borrelli', nome: "Juan José Borrelli", posicoes: ["MEI"], forca: 83 },
      { id: 'giorgos-donis', nome: "Giorgos Donis", posicoes: ["ME"], forca: 82 },
      { id: 'krzysztof-warzycha', nome: "Krzysztof Warzycha", posicoes: ["ATA"], forca: 85 },
      { id: 'dimitris-markos', nome: "Dimitris Markos", posicoes: ["ATA"], forca: 79 },
      { id: 'vazha-tarasov', nome: "Vazha Tarasov", posicoes: ["ATA"], forca: 79 },
      { id: 'kostas-frantzeskos', nome: "Kostas Frantzeskos", posicoes: ["MC"], forca: 80 },
      { id: 'spyros-marangos', nome: "Spyros Marangos", posicoes: ["ZAG"], forca: 78 },
      { id: 'antonis-antoniou', nome: "Antonis Antoniou", posicoes: ["ME"], forca: 77 },
      { id: 'takis-gonias', nome: "Takis Gonias", posicoes: ["LD"], forca: 76 }
    ]
  },

  // ===== Edição 1995 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "Ajax",
    jogadores: [
      { id: 'edwin-van-der-sar', nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 86 },
      { id: 'michael-reiziger', nome: "Michael Reiziger", posicoes: ["LD"], forca: 82 },
      { id: 'frank-de-boer', nome: "Frank de Boer", posicoes: ["ZAG","LE"], forca: 86 },
      { id: 'danny-blind', nome: "Danny Blind", posicoes: ["ZAG"], forca: 86 },
      { id: 'frank-rijkaard', nome: "Frank Rijkaard", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'clarence-seedorf', nome: "Clarence Seedorf", posicoes: ["MC"], forca: 84 },
      { id: 'edgar-davids', nome: "Edgar Davids", posicoes: ["MC"], forca: 85 },
      { id: 'jari-litmanen', nome: "Jari Litmanen", posicoes: ["MEI"], forca: 89 },
      { id: 'marc-overmars', nome: "Marc Overmars", posicoes: ["PE"], forca: 86 },
      { id: 'finidi-george', nome: "Finidi George", posicoes: ["PD"], forca: 84 },
      { id: 'patrick-kluivert', nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 83 },
      { id: 'nwankwo-kanu', nome: "Nwankwo Kanu", posicoes: ["ATA"], forca: 82 },
      { id: 'ronald-de-boer', nome: "Ronald de Boer", posicoes: ["MEI"], forca: 84 },
      { id: 'winston-bogarde', nome: "Winston Bogarde", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi', nome: "Sebastiano Rossi", posicoes: ["GOL"], forca: 85 },
      { id: 'mauro-tassotti', nome: "Mauro Tassotti", posicoes: ["LD"], forca: 84 },
      { id: 'christian-panucci', nome: "Christian Panucci", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["LE"], forca: 90 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 86 },
      { id: 'franco-baresi', nome: "Franco Baresi", posicoes: ["ZAG"], forca: 90 },
      { id: 'marcel-desailly', nome: "Marcel Desailly", posicoes: ["VOL","MC"], forca: 88 },
      { id: 'demetrio-albertini', nome: "Demetrio Albertini", posicoes: ["MC"], forca: 84 },
      { id: 'roberto-donadoni', nome: "Roberto Donadoni", posicoes: ["ME"], forca: 84 },
      { id: 'zvonimir-boban', nome: "Zvonimir Boban", posicoes: ["MEI"], forca: 84 },
      { id: 'dejan-savicevic', nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'daniele-massaro', nome: "Daniele Massaro", posicoes: ["ATA"], forca: 83 },
      { id: 'marco-simone', nome: "Marco Simone", posicoes: ["ATA"], forca: 82 },
      { id: 'gianluigi-lentini', nome: "Gianluigi Lentini", posicoes: ["ME"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'oliver-kahn', nome: "Oliver Kahn", posicoes: ["GOL"], forca: 85 },
      { id: 'lothar-matthaus', nome: "Lothar Matthäus", posicoes: ["ZAG"], forca: 88 },
      { id: 'thomas-helmer', nome: "Thomas Helmer", posicoes: ["ZAG"], forca: 84 },
      { id: 'markus-babbel', nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'christian-ziege', nome: "Christian Ziege", posicoes: ["LE","ME"], forca: 82 },
      { id: 'ciriaco-sforza', nome: "Ciriaco Sforza", posicoes: ["MC"], forca: 83 },
      { id: 'thorsten-fink', nome: "Thorsten Fink", posicoes: ["MC"], forca: 80 },
      { id: 'mehmet-scholl', nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { id: 'andreas-herzog', nome: "Andreas Herzog", posicoes: ["MEI"], forca: 83 },
      { id: 'jean-pierre-papin', nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 84 },
      { id: 'alexander-zickler', nome: "Alexander Zickler", posicoes: ["ATA"], forca: 79 },
      { id: 'dietmar-hamann', nome: "Dietmar Hamann", posicoes: ["MC"], forca: 78 },
      { id: 'adolfo-valencia', nome: "Adolfo Valencia", posicoes: ["ATA"], forca: 79 },
      { id: 'samuel-kuffour', nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "PSG",
    jogadores: [
      { id: 'bernard-lama', nome: "Bernard Lama", posicoes: ["GOL"], forca: 86 },
      { id: 'alain-roche', nome: "Alain Roche", posicoes: ["ZAG"], forca: 83 },
      { id: 'ricardo-gomes', nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 84 },
      { id: 'antoine-kombouare', nome: "Antoine Kombouaré", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'paul-le-guen', nome: "Paul Le Guen", posicoes: ["MC"], forca: 83 },
      { id: 'vincent-guerin', nome: "Vincent Guérin", posicoes: ["MC"], forca: 84 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 87 },
      { id: 'david-ginola', nome: "David Ginola", posicoes: ["PE","ATA"], forca: 86 },
      { id: 'george-weah', nome: "George Weah", posicoes: ["ATA"], forca: 90 },
      { id: 'daniel-bravo', nome: "Daniel Bravo", posicoes: ["ATA","ME"], forca: 82 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MEI"], forca: 83 },
      { id: 'bruno-ngotty', nome: "Bruno N'Gotty", posicoes: ["ZAG"], forca: 80 },
      { id: 'jose-cobos', nome: "José Cobos", posicoes: ["LD"], forca: 79 },
      { id: 'francis-llacer', nome: "Francis Llacer", posicoes: ["MC"], forca: 78 }
    ]
  },

  // ===== Edição 1994 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi', nome: "Sebastiano Rossi", posicoes: ["GOL"], forca: 86 },
      { id: 'mauro-tassotti', nome: "Mauro Tassotti", posicoes: ["LD"], forca: 85 },
      { id: 'christian-panucci', nome: "Christian Panucci", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["LE"], forca: 91 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 87 },
      { id: 'franco-baresi', nome: "Franco Baresi", posicoes: ["ZAG"], forca: 91 },
      { id: 'marcel-desailly', nome: "Marcel Desailly", posicoes: ["VOL","MC"], forca: 89 },
      { id: 'demetrio-albertini', nome: "Demetrio Albertini", posicoes: ["MC"], forca: 85 },
      { id: 'roberto-donadoni', nome: "Roberto Donadoni", posicoes: ["ME"], forca: 85 },
      { id: 'dejan-savicevic', nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'daniele-massaro', nome: "Daniele Massaro", posicoes: ["ATA"], forca: 85 },
      { id: 'jean-pierre-papin', nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 84 },
      { id: 'marco-simone', nome: "Marco Simone", posicoes: ["ATA"], forca: 82 },
      { id: 'zvonimir-boban', nome: "Zvonimir Boban", posicoes: ["MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta', nome: "Andoni Zubizarreta", posicoes: ["GOL"], forca: 86 },
      { id: 'albert-ferrer', nome: "Albert Ferrer", posicoes: ["LD"], forca: 83 },
      { id: 'sergi', nome: "Sergi", posicoes: ["LE"], forca: 81 },
      { id: 'ronald-koeman', nome: "Ronald Koeman", posicoes: ["ZAG"], forca: 89 },
      { id: 'miguel-angel-nadal', nome: "Miguel Ángel Nadal", posicoes: ["ZAG","MC"], forca: 82 },
      { id: 'pep-guardiola', nome: "Pep Guardiola", posicoes: ["VOL"], forca: 85 },
      { id: 'jose-mari-bakero', nome: "José Mari Bakero", posicoes: ["MC"], forca: 85 },
      { id: 'guillermo-amor', nome: "Guillermo Amor", posicoes: ["MC"], forca: 83 },
      { id: 'michael-laudrup', nome: "Michael Laudrup", posicoes: ["MEI"], forca: 91 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 93 },
      { id: 'hristo-stoichkov', nome: "Hristo Stoichkov", posicoes: ["PE","ATA"], forca: 91 },
      { id: 'txiki-begiristain', nome: "Txiki Begiristain", posicoes: ["PE","ME"], forca: 83 },
      { id: 'julio-salinas', nome: "Julio Salinas", posicoes: ["ATA"], forca: 83 },
      { id: 'eusebio', nome: "Eusebio", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Monaco",
    jogadores: [
      { id: 'jean-luc-ettori', nome: "Jean-Luc Ettori", posicoes: ["GOL"], forca: 82 },
      { id: 'lilian-thuram', nome: "Lilian Thuram", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'emmanuel-petit', nome: "Emmanuel Petit", posicoes: ["ZAG"], forca: 84 },
      { id: 'luc-sonor', nome: "Luc Sonor", posicoes: ["ZAG"], forca: 79 },
      { id: 'claude-puel', nome: "Claude Puel", posicoes: ["MC"], forca: 82 },
      { id: 'enzo-scifo', nome: "Enzo Scifo", posicoes: ["MEI"], forca: 86 },
      { id: 'youri-djorkaeff', nome: "Youri Djorkaeff", posicoes: ["MEI"], forca: 86 },
      { id: 'rui-barros', nome: "Rui Barros", posicoes: ["ME"], forca: 83 },
      { id: 'jurgen-klinsmann', nome: "Jürgen Klinsmann", posicoes: ["ATA"], forca: 88 },
      { id: 'victor-ikpeba', nome: "Victor Ikpeba", posicoes: ["ATA"], forca: 80 },
      { id: 'sonny-anderson', nome: "Sonny Anderson", posicoes: ["ATA"], forca: 78 },
      { id: 'franck-dumas', nome: "Franck Dumas", posicoes: ["ZAG"], forca: 80 },
      { id: 'thierry-henry', nome: "Thierry Henry", posicoes: ["MC"], forca: 72 },
      { id: 'valery', nome: "Valéry", posicoes: ["ME"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Porto",
    jogadores: [
      { id: 'vitor-baia', nome: "Vítor Baía", posicoes: ["GOL"], forca: 84 },
      { id: 'joao-pinto', nome: "João Pinto", posicoes: ["LD"], forca: 83 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ZAG"], forca: 82 },
      { id: 'fernando-couto', nome: "Fernando Couto", posicoes: ["ZAG"], forca: 83 },
      { id: 'jorge-costa', nome: "Jorge Costa", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulinho-santos', nome: "Paulinho Santos", posicoes: ["VOL"], forca: 82 },
      { id: 'emerson', nome: "Emerson", posicoes: ["MC"], forca: 80 },
      { id: 'rui-barros', nome: "Rui Barros", posicoes: ["MEI"], forca: 84 },
      { id: 'timofte', nome: "Timofte", posicoes: ["ME"], forca: 82 },
      { id: 'domingos', nome: "Domingos", posicoes: ["ATA"], forca: 82 },
      { id: 'emil-kostadinov', nome: "Emil Kostadinov", posicoes: ["ATA"], forca: 83 },
      { id: 'secretario', nome: "Secretário", posicoes: ["LD","MD"], forca: 79 },
      { id: 'folha', nome: "Folha", posicoes: ["ME"], forca: 78 },
      { id: 'rabah-madjer', nome: "Rabah Madjer", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1993 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "Marseille",
    jogadores: [
      { id: 'fabien-barthez', nome: "Fabien Barthez", posicoes: ["GOL"], forca: 84 },
      { id: 'jocelyn-angloma', nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 84 },
      { id: 'basile-boli', nome: "Basile Boli", posicoes: ["ZAG"], forca: 86 },
      { id: 'marcel-desailly', nome: "Marcel Desailly", posicoes: ["ZAG","MC"], forca: 87 },
      { id: 'eric-di-meco', nome: "Éric Di Meco", posicoes: ["LE"], forca: 82 },
      { id: 'didier-deschamps', nome: "Didier Deschamps", posicoes: ["VOL"], forca: 85 },
      { id: 'jean-jacques-eydelie', nome: "Jean-Jacques Eydelie", posicoes: ["MC"], forca: 80 },
      { id: 'franck-sauzee', nome: "Franck Sauzée", posicoes: ["MC"], forca: 85 },
      { id: 'abedi-pele', nome: "Abedi Pelé", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'alen-boksic', nome: "Alen Bokšić", posicoes: ["ATA"], forca: 88 },
      { id: 'rudi-voller', nome: "Rudi Völler", posicoes: ["ATA"], forca: 86 },
      { id: 'tony-cascarino', nome: "Tony Cascarino", posicoes: ["ATA"], forca: 78 },
      { id: 'bruno-germain', nome: "Bruno Germain", posicoes: ["MC"], forca: 80 },
      { id: 'bernard-casoni', nome: "Bernard Casoni", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi', nome: "Sebastiano Rossi", posicoes: ["GOL"], forca: 85 },
      { id: 'mauro-tassotti', nome: "Mauro Tassotti", posicoes: ["LD"], forca: 85 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["LE"], forca: 90 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 86 },
      { id: 'franco-baresi', nome: "Franco Baresi", posicoes: ["ZAG"], forca: 91 },
      { id: 'demetrio-albertini', nome: "Demetrio Albertini", posicoes: ["MC"], forca: 85 },
      { id: 'roberto-donadoni', nome: "Roberto Donadoni", posicoes: ["ME"], forca: 86 },
      { id: 'frank-rijkaard', nome: "Frank Rijkaard", posicoes: ["MC"], forca: 87 },
      { id: 'stefano-eranio', nome: "Stefano Eranio", posicoes: ["ME"], forca: 82 },
      { id: 'marco-van-basten', nome: "Marco van Basten", posicoes: ["ATA"], forca: 91 },
      { id: 'jean-pierre-papin', nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 86 },
      { id: 'daniele-massaro', nome: "Daniele Massaro", posicoes: ["ATA"], forca: 82 },
      { id: 'marco-simone', nome: "Marco Simone", posicoes: ["ATA"], forca: 81 },
      { id: 'gianluigi-lentini', nome: "Gianluigi Lentini", posicoes: ["ME"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "Rangers",
    jogadores: [
      { id: 'andy-goram', nome: "Andy Goram", posicoes: ["GOL"], forca: 84 },
      { id: 'richard-gough', nome: "Richard Gough", posicoes: ["ZAG"], forca: 85 },
      { id: 'john-brown', nome: "John Brown", posicoes: ["ZAG"], forca: 81 },
      { id: 'dave-mcpherson', nome: "Dave McPherson", posicoes: ["ZAG"], forca: 80 },
      { id: 'davie-robertson', nome: "Davie Robertson", posicoes: ["LE"], forca: 81 },
      { id: 'gary-stevens', nome: "Gary Stevens", posicoes: ["LD"], forca: 81 },
      { id: 'stuart-mccall', nome: "Stuart McCall", posicoes: ["MC"], forca: 83 },
      { id: 'ian-durrant', nome: "Ian Durrant", posicoes: ["MC"], forca: 83 },
      { id: 'trevor-steven', nome: "Trevor Steven", posicoes: ["ME"], forca: 82 },
      { id: 'mark-hateley', nome: "Mark Hateley", posicoes: ["ATA"], forca: 86 },
      { id: 'ally-mccoist', nome: "Ally McCoist", posicoes: ["ATA"], forca: 85 },
      { id: 'pieter-huistra', nome: "Pieter Huistra", posicoes: ["ME"], forca: 80 },
      { id: 'gordon-durie', nome: "Gordon Durie", posicoes: ["ATA"], forca: 80 },
      { id: 'derek-ferguson', nome: "Derek Ferguson", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "IFK Göteborg",
    jogadores: [
      { id: 'thomas-ravelli', nome: "Thomas Ravelli", posicoes: ["GOL"], forca: 83 },
      { id: 'patrik-andersson', nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 81 },
      { id: 'joachim-bjorklund', nome: "Joachim Björklund", posicoes: ["ZAG"], forca: 80 },
      { id: 'mikael-nilsson', nome: "Mikael Nilsson", posicoes: ["LD"], forca: 79 },
      { id: 'hakan-mild', nome: "Håkan Mild", posicoes: ["MC"], forca: 82 },
      { id: 'stefan-rehn', nome: "Stefan Rehn", posicoes: ["MC"], forca: 80 },
      { id: 'jesper-blomqvist', nome: "Jesper Blomqvist", posicoes: ["ME"], forca: 79 },
      { id: 'magnus-erlingmark', nome: "Magnus Erlingmark", posicoes: ["MEI"], forca: 80 },
      { id: 'kennet-andersson', nome: "Kennet Andersson", posicoes: ["ATA"], forca: 83 },
      { id: 'mats-lilienberg', nome: "Mats Lilienberg", posicoes: ["ATA"], forca: 78 },
      { id: 'johnny-ekstrom', nome: "Johnny Ekström", posicoes: ["ATA"], forca: 79 },
      { id: 'pontus-kamark', nome: "Pontus Kåmark", posicoes: ["ZAG"], forca: 79 },
      { id: 'torbjorn-nilsson', nome: "Torbjörn Nilsson", posicoes: ["MC"], forca: 78 },
      { id: 'mikael-martinsson', nome: "Mikael Martinsson", posicoes: ["ME"], forca: 77 }
    ]
  },

  // ===== Edição 1992 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta', nome: "Andoni Zubizarreta", posicoes: ["GOL"], forca: 87 },
      { id: 'albert-ferrer', nome: "Albert Ferrer", posicoes: ["LD"], forca: 83 },
      { id: 'nando', nome: "Nando", posicoes: ["ZAG"], forca: 81 },
      { id: 'ronald-koeman', nome: "Ronald Koeman", posicoes: ["ZAG"], forca: 90 },
      { id: 'juan-carlos', nome: "Juan Carlos", posicoes: ["LE"], forca: 81 },
      { id: 'pep-guardiola', nome: "Pep Guardiola", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'jose-mari-bakero', nome: "José Mari Bakero", posicoes: ["MC"], forca: 85 },
      { id: 'guillermo-amor', nome: "Guillermo Amor", posicoes: ["MC"], forca: 83 },
      { id: 'michael-laudrup', nome: "Michael Laudrup", posicoes: ["MEI"], forca: 91 },
      { id: 'hristo-stoichkov', nome: "Hristo Stoichkov", posicoes: ["PE","ATA"], forca: 90 },
      { id: 'julio-salinas', nome: "Julio Salinas", posicoes: ["ATA"], forca: 84 },
      { id: 'txiki-begiristain', nome: "Txiki Begiristain", posicoes: ["PE","ME"], forca: 84 },
      { id: 'eusebio', nome: "Eusebio", posicoes: ["MC"], forca: 81 },
      { id: 'miguel-angel-nadal', nome: "Miguel Ángel Nadal", posicoes: ["ZAG","MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Sampdoria",
    jogadores: [
      { id: 'gianluca-pagliuca', nome: "Gianluca Pagliuca", posicoes: ["GOL"], forca: 85 },
      { id: 'moreno-mannini', nome: "Moreno Mannini", posicoes: ["LD"], forca: 82 },
      { id: 'amedeo-carboni', nome: "Amedeo Carboni", posicoes: ["LE"], forca: 83 },
      { id: 'pietro-vierchowod', nome: "Pietro Vierchowod", posicoes: ["ZAG"], forca: 86 },
      { id: 'srecko-katanec', nome: "Srečko Katanec", posicoes: ["ZAG","MC"], forca: 83 },
      { id: 'fausto-pari', nome: "Fausto Pari", posicoes: ["MC"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { id: 'attilio-lombardo', nome: "Attilio Lombardo", posicoes: ["ME"], forca: 84 },
      { id: 'giuseppe-dossena', nome: "Giuseppe Dossena", posicoes: ["MEI"], forca: 82 },
      { id: 'roberto-mancini', nome: "Roberto Mancini", posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'gianluca-vialli', nome: "Gianluca Vialli", posicoes: ["ATA"], forca: 90 },
      { id: 'ivano-bonetti', nome: "Ivano Bonetti", posicoes: ["ATA"], forca: 80 },
      { id: 'renato-buso', nome: "Renato Buso", posicoes: ["ATA"], forca: 78 },
      { id: 'giovanni-invernizzi', nome: "Giovanni Invernizzi", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Red Star Belgrade",
    jogadores: [
      { id: 'stevan-stojanovic', nome: "Stevan Stojanović", posicoes: ["GOL"], forca: 84 },
      { id: 'refik-sabanadzovic', nome: "Refik Šabanadžović", posicoes: ["LD"], forca: 81 },
      { id: 'ilija-najdoski', nome: "Ilija Najdoski", posicoes: ["ZAG"], forca: 82 },
      { id: 'sinisa-mihajlovic', nome: "Siniša Mihajlović", posicoes: ["LE","MEI"], forca: 85 },
      { id: 'vladimir-jugovic', nome: "Vladimir Jugović", posicoes: ["MC"], forca: 84 },
      { id: 'robert-prosinecki', nome: "Robert Prosinečki", posicoes: ["MEI"], forca: 87 },
      { id: 'dejan-savicevic', nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'darko-pancev', nome: "Darko Pančev", posicoes: ["ATA"], forca: 88 },
      { id: 'dragisa-binic', nome: "Dragiša Binić", posicoes: ["ATA"], forca: 82 },
      { id: 'rade-tosic', nome: "Rade Tošić", posicoes: ["MC"], forca: 79 },
      { id: 'slobodan-marovic', nome: "Slobodan Marović", posicoes: ["ZAG"], forca: 79 },
      { id: 'goran-vasilijevic', nome: "Goran Vasilijević", posicoes: ["ZAG"], forca: 78 },
      { id: 'milos-sestic', nome: "Miloš Šestić", posicoes: ["MC"], forca: 77 },
      { id: 'vladan-lukic', nome: "Vladan Lukić", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Sparta Prague",
    jogadores: [
      { id: 'petr-kouba', nome: "Petr Kouba", posicoes: ["GOL"], forca: 82 },
      { id: 'jozef-chovanec', nome: "Jozef Chovanec", posicoes: ["ZAG"], forca: 84 },
      { id: 'michal-hornak', nome: "Michal Horňák", posicoes: ["ZAG"], forca: 80 },
      { id: 'miroslav-kadlec', nome: "Miroslav Kadlec", posicoes: ["ZAG"], forca: 82 },
      { id: 'radoslav-latal', nome: "Radoslav Látal", posicoes: ["MC"], forca: 82 },
      { id: 'vaclav-nemecek', nome: "Václav Němeček", posicoes: ["MC"], forca: 82 },
      { id: 'martin-frydek', nome: "Martin Frýdek", posicoes: ["MEI"], forca: 81 },
      { id: 'jiri-nemec', nome: "Jiří Němec", posicoes: ["ME"], forca: 80 },
      { id: 'horst-siegl', nome: "Horst Siegl", posicoes: ["ATA"], forca: 81 },
      { id: 'pavel-kuka', nome: "Pavel Kuka", posicoes: ["ATA"], forca: 80 },
      { id: 'stanislav-griga', nome: "Stanislav Griga", posicoes: ["MC"], forca: 78 },
      { id: 'ivan-hasek', nome: "Ivan Hašek", posicoes: ["ZAG"], forca: 79 },
      { id: 'roman-kukleta', nome: "Roman Kukleta", posicoes: ["ATA"], forca: 77 },
      { id: 'petr-vrabec', nome: "Petr Vrabec", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1991 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Red Star Belgrade",
    jogadores: [
      { id: 'stevan-stojanovic', nome: "Stevan Stojanović", posicoes: ["GOL"], forca: 85 },
      { id: 'refik-sabanadzovic', nome: "Refik Šabanadžović", posicoes: ["LD"], forca: 82 },
      { id: 'miodrag-belodedici', nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 86 },
      { id: 'ilija-najdoski', nome: "Ilija Najdoski", posicoes: ["ZAG"], forca: 82 },
      { id: 'slobodan-marovic', nome: "Slobodan Marović", posicoes: ["LE"], forca: 80 },
      { id: 'vladimir-jugovic', nome: "Vladimir Jugović", posicoes: ["MC"], forca: 84 },
      { id: 'robert-prosinecki', nome: "Robert Prosinečki", posicoes: ["MEI"], forca: 88 },
      { id: 'dejan-savicevic', nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'sinisa-mihajlovic', nome: "Siniša Mihajlović", posicoes: ["LE","MEI"], forca: 84 },
      { id: 'darko-pancev', nome: "Darko Pančev", posicoes: ["ATA"], forca: 89 },
      { id: 'dragisa-binic', nome: "Dragiša Binić", posicoes: ["ATA"], forca: 83 },
      { id: 'rade-tosic', nome: "Rade Tošić", posicoes: ["MC"], forca: 79 },
      { id: 'goran-vasilijevic', nome: "Goran Vasilijević", posicoes: ["MC"], forca: 78 },
      { id: 'milorad-ratkovic', nome: "Milorad Ratković", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Marseille",
    jogadores: [
      { id: 'pascal-olmeta', nome: "Pascal Olmeta", posicoes: ["GOL"], forca: 83 },
      { id: 'manuel-amoros', nome: "Manuel Amoros", posicoes: ["LD"], forca: 86 },
      { id: 'bernard-casoni', nome: "Bernard Casoni", posicoes: ["ZAG"], forca: 82 },
      { id: 'basile-boli', nome: "Basile Boli", posicoes: ["ZAG"], forca: 84 },
      { id: 'eric-di-meco', nome: "Éric Di Meco", posicoes: ["LE"], forca: 81 },
      { id: 'didier-deschamps', nome: "Didier Deschamps", posicoes: ["VOL"], forca: 84 },
      { id: 'franck-sauzee', nome: "Franck Sauzée", posicoes: ["MC"], forca: 85 },
      { id: 'chris-waddle', nome: "Chris Waddle", posicoes: ["MEI","PD"], forca: 87 },
      { id: 'abedi-pele', nome: "Abedi Pelé", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'jean-pierre-papin', nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 92 },
      { id: 'philippe-vercruysse', nome: "Philippe Vercruysse", posicoes: ["ATA"], forca: 81 },
      { id: 'bruno-germain', nome: "Bruno Germain", posicoes: ["MC"], forca: 81 },
      { id: 'carlos-mozer', nome: "Carlos Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'jean-marc-ferreri', nome: "Jean-Marc Ferreri", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'raimond-aumann', nome: "Raimond Aumann", posicoes: ["GOL"], forca: 83 },
      { id: 'klaus-augenthaler', nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 84 },
      { id: 'jurgen-kohler', nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 86 },
      { id: 'hans-pflugler', nome: "Hans Pflügler", posicoes: ["LE"], forca: 81 },
      { id: 'stefan-reuter', nome: "Stefan Reuter", posicoes: ["LD","MC"], forca: 83 },
      { id: 'olaf-thon', nome: "Olaf Thon", posicoes: ["MC"], forca: 85 },
      { id: 'thomas-strunz', nome: "Thomas Strunz", posicoes: ["MC"], forca: 81 },
      { id: 'brian-laudrup', nome: "Brian Laudrup", posicoes: ["ME"], forca: 82 },
      { id: 'roland-wohlfarth', nome: "Roland Wohlfarth", posicoes: ["ATA"], forca: 84 },
      { id: 'alan-mcinally', nome: "Alan McInally", posicoes: ["ATA"], forca: 80 },
      { id: 'michael-sternkopf', nome: "Michael Sternkopf", posicoes: ["MC"], forca: 79 },
      { id: 'manfred-bender', nome: "Manfred Bender", posicoes: ["ZAG"], forca: 78 },
      { id: 'christian-ziege', nome: "Christian Ziege", posicoes: ["ME"], forca: 74 },
      { id: 'bruno-labbadia', nome: "Bruno Labbadia", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Spartak Moscow",
    jogadores: [
      { id: 'stanislav-cherchesov', nome: "Stanislav Cherchesov", posicoes: ["GOL"], forca: 83 },
      { id: 'viktor-onopko', nome: "Viktor Onopko", posicoes: ["ZAG"], forca: 82 },
      { id: 'dmitri-khlestov', nome: "Dmitri Khlestov", posicoes: ["ZAG"], forca: 80 },
      { id: 'vasili-kulkov', nome: "Vasili Kulkov", posicoes: ["LD"], forca: 81 },
      { id: 'igor-shalimov', nome: "Igor Shalimov", posicoes: ["MC"], forca: 84 },
      { id: 'aleksandr-mostovoi', nome: "Aleksandr Mostovoi", posicoes: ["MEI"], forca: 85 },
      { id: 'valery-karpin', nome: "Valery Karpin", posicoes: ["ME"], forca: 82 },
      { id: 'fyodor-cherenkov', nome: "Fyodor Cherenkov", posicoes: ["MEI"], forca: 84 },
      { id: 'dmitri-radchenko', nome: "Dmitri Radchenko", posicoes: ["ATA"], forca: 82 },
      { id: 'sergei-rodionov', nome: "Sergei Rodionov", posicoes: ["ATA"], forca: 81 },
      { id: 'valery-shmarov', nome: "Valery Shmarov", posicoes: ["ATA"], forca: 80 },
      { id: 'igor-ledyakhov', nome: "Igor Ledyakhov", posicoes: ["MC"], forca: 80 },
      { id: 'oleg-romantsev', nome: "Oleg Romantsev", posicoes: ["ZAG"], forca: 78 },
      { id: 'nikolai-pisarev', nome: "Nikolai Pisarev", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1990 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Milan",
    jogadores: [
      { id: 'giovanni-galli', nome: "Giovanni Galli", posicoes: ["GOL"], forca: 85 },
      { id: 'mauro-tassotti', nome: "Mauro Tassotti", posicoes: ["LD"], forca: 85 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["LE"], forca: 89 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 86 },
      { id: 'franco-baresi', nome: "Franco Baresi", posicoes: ["ZAG"], forca: 92 },
      { id: 'frank-rijkaard', nome: "Frank Rijkaard", posicoes: ["VOL","MC"], forca: 90 },
      { id: 'carlo-ancelotti', nome: "Carlo Ancelotti", posicoes: ["MC"], forca: 85 },
      { id: 'roberto-donadoni', nome: "Roberto Donadoni", posicoes: ["ME"], forca: 86 },
      { id: 'alberigo-evani', nome: "Alberigo Evani", posicoes: ["ME"], forca: 83 },
      { id: 'ruud-gullit', nome: "Ruud Gullit", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'marco-van-basten', nome: "Marco van Basten", posicoes: ["ATA"], forca: 93 },
      { id: 'daniele-massaro', nome: "Daniele Massaro", posicoes: ["ATA"], forca: 82 },
      { id: 'pietro-paolo-virdis', nome: "Pietro Paolo Virdis", posicoes: ["ATA"], forca: 79 },
      { id: 'angelo-colombo', nome: "Angelo Colombo", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Benfica",
    jogadores: [
      { id: 'silvino', nome: "Silvino", posicoes: ["GOL"], forca: 83 },
      { id: 'antonio-veloso', nome: "António Veloso", posicoes: ["LD"], forca: 83 },
      { id: 'ricardo-gomes', nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 85 },
      { id: 'aldair', nome: "Aldair", posicoes: ["ZAG"], forca: 83 },
      { id: 'samuel', nome: "Samuel", posicoes: ["LE"], forca: 81 },
      { id: 'jonas-thern', nome: "Jonas Thern", posicoes: ["MC"], forca: 84 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MEI"], forca: 85 },
      { id: 'pacheco', nome: "Pacheco", posicoes: ["PD"], forca: 82 },
      { id: 'paneira', nome: "Paneira", posicoes: ["ME"], forca: 82 },
      { id: 'mats-magnusson', nome: "Mats Magnusson", posicoes: ["ATA"], forca: 83 },
      { id: 'vata', nome: "Vata", posicoes: ["ATA"], forca: 81 },
      { id: 'cesar-brito', nome: "César Brito", posicoes: ["ATA"], forca: 80 },
      { id: 'sheu', nome: "Shéu", posicoes: ["MC"], forca: 81 },
      { id: 'rui-aguas', nome: "Rui Águas", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'raimond-aumann', nome: "Raimond Aumann", posicoes: ["GOL"], forca: 83 },
      { id: 'klaus-augenthaler', nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 85 },
      { id: 'jurgen-kohler', nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 86 },
      { id: 'hans-pflugler', nome: "Hans Pflügler", posicoes: ["LE"], forca: 81 },
      { id: 'stefan-reuter', nome: "Stefan Reuter", posicoes: ["LD","MC"], forca: 83 },
      { id: 'olaf-thon', nome: "Olaf Thon", posicoes: ["MC"], forca: 85 },
      { id: 'thomas-strunz', nome: "Thomas Strunz", posicoes: ["MC"], forca: 81 },
      { id: 'manfred-schwabl', nome: "Manfred Schwabl", posicoes: ["ME"], forca: 79 },
      { id: 'roland-wohlfarth', nome: "Roland Wohlfarth", posicoes: ["ATA"], forca: 84 },
      { id: 'alan-mcinally', nome: "Alan McInally", posicoes: ["ATA"], forca: 80 },
      { id: 'michael-rummenigge', nome: "Michael Rummenigge", posicoes: ["ATA"], forca: 80 },
      { id: 'hansi-dorfner', nome: "Hansi Dorfner", posicoes: ["MC"], forca: 80 },
      { id: 'norbert-nachtweih', nome: "Norbert Nachtweih", posicoes: ["ZAG"], forca: 78 },
      { id: 'christian-ziege', nome: "Christian Ziege", posicoes: ["ME"], forca: 73 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Marseille",
    jogadores: [
      { id: 'pascal-olmeta', nome: "Pascal Olmeta", posicoes: ["GOL"], forca: 83 },
      { id: 'manuel-amoros', nome: "Manuel Amoros", posicoes: ["LD"], forca: 86 },
      { id: 'bernard-casoni', nome: "Bernard Casoni", posicoes: ["ZAG"], forca: 82 },
      { id: 'carlos-mozer', nome: "Carlos Mozer", posicoes: ["ZAG"], forca: 85 },
      { id: 'basile-boli', nome: "Basile Boli", posicoes: ["ZAG"], forca: 83 },
      { id: 'eric-di-meco', nome: "Éric Di Meco", posicoes: ["LE"], forca: 81 },
      { id: 'jean-tigana', nome: "Jean Tigana", posicoes: ["MC"], forca: 86 },
      { id: 'franck-sauzee', nome: "Franck Sauzée", posicoes: ["MC"], forca: 84 },
      { id: 'chris-waddle', nome: "Chris Waddle", posicoes: ["PD","MEI"], forca: 87 },
      { id: 'jean-pierre-papin', nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 91 },
      { id: 'enzo-francescoli', nome: "Enzo Francescoli", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'jean-marc-ferreri', nome: "Jean-Marc Ferreri", posicoes: ["MC"], forca: 82 },
      { id: 'bruno-germain', nome: "Bruno Germain", posicoes: ["MC"], forca: 81 },
      { id: 'philippe-vercruysse', nome: "Philippe Vercruysse", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1989 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Milan",
    jogadores: [
      { id: 'giovanni-galli', nome: "Giovanni Galli", posicoes: ["GOL"], forca: 86 },
      { id: 'mauro-tassotti', nome: "Mauro Tassotti", posicoes: ["LD"], forca: 85 },
      { id: 'paolo-maldini', nome: "Paolo Maldini", posicoes: ["LE"], forca: 88 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 85 },
      { id: 'franco-baresi', nome: "Franco Baresi", posicoes: ["ZAG"], forca: 92 },
      { id: 'frank-rijkaard', nome: "Frank Rijkaard", posicoes: ["VOL","MC"], forca: 90 },
      { id: 'carlo-ancelotti', nome: "Carlo Ancelotti", posicoes: ["MC"], forca: 85 },
      { id: 'roberto-donadoni', nome: "Roberto Donadoni", posicoes: ["ME"], forca: 86 },
      { id: 'angelo-colombo', nome: "Angelo Colombo", posicoes: ["ME"], forca: 81 },
      { id: 'ruud-gullit', nome: "Ruud Gullit", posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'marco-van-basten', nome: "Marco van Basten", posicoes: ["ATA"], forca: 94 },
      { id: 'alberigo-evani', nome: "Alberigo Evani", posicoes: ["ME"], forca: 83 },
      { id: 'daniele-massaro', nome: "Daniele Massaro", posicoes: ["ATA"], forca: 82 },
      { id: 'pietro-paolo-virdis', nome: "Pietro Paolo Virdis", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Steaua București",
    jogadores: [
      { id: 'silviu-lung', nome: "Silviu Lung", posicoes: ["GOL"], forca: 83 },
      { id: 'dan-petrescu', nome: "Dan Petrescu", posicoes: ["LD"], forca: 82 },
      { id: 'miodrag-belodedici', nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 85 },
      { id: 'adrian-bumbescu', nome: "Adrian Bumbescu", posicoes: ["ZAG"], forca: 81 },
      { id: 'tudorel-stoica', nome: "Tudorel Stoica", posicoes: ["MC"], forca: 82 },
      { id: 'gheorghe-hagi', nome: "Gheorghe Hagi", posicoes: ["MEI"], forca: 90 },
      { id: 'iuliu-rotariu', nome: "Iuliu Rotariu", posicoes: ["MC"], forca: 80 },
      { id: 'ilie-dumitrescu', nome: "Ilie Dumitrescu", posicoes: ["ME"], forca: 80 },
      { id: 'marius-lacatus', nome: "Marius Lăcătuș", posicoes: ["ATA"], forca: 84 },
      { id: 'victor-piturca', nome: "Victor Pițurcă", posicoes: ["ATA"], forca: 82 },
      { id: 'gavril-balint', nome: "Gavril Balint", posicoes: ["ATA"], forca: 82 },
      { id: 'stefan-iovan', nome: "Ștefan Iovan", posicoes: ["ZAG"], forca: 82 },
      { id: 'marin-radu', nome: "Marin Radu", posicoes: ["MC"], forca: 77 },
      { id: 'gheorghe-popescu', nome: "Gheorghe Popescu", posicoes: ["LE"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo', nome: "Francisco Buyo", posicoes: ["GOL"], forca: 84 },
      { id: 'chendo', nome: "Chendo", posicoes: ["LD"], forca: 83 },
      { id: 'manolo-sanchis', nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 85 },
      { id: 'rafael-gordillo', nome: "Rafael Gordillo", posicoes: ["LE","ME"], forca: 84 },
      { id: 'ricardo-gallego', nome: "Ricardo Gallego", posicoes: ["MC"], forca: 83 },
      { id: 'bernd-schuster', nome: "Bernd Schuster", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'michel', nome: "Míchel", posicoes: ["MEI"], forca: 87 },
      { id: 'rafael-martin-vazquez', nome: "Rafael Martín Vázquez", posicoes: ["MEI"], forca: 84 },
      { id: 'emilio-butragueno', nome: "Emilio Butragueño", posicoes: ["ATA"], forca: 90 },
      { id: 'hugo-sanchez', nome: "Hugo Sánchez", posicoes: ["ATA"], forca: 91 },
      { id: 'paco-llorente', nome: "Paco Llorente", posicoes: ["ME"], forca: 80 },
      { id: 'tendillo', nome: "Tendillo", posicoes: ["ZAG"], forca: 80 },
      { id: 'losada', nome: "Losada", posicoes: ["ATA"], forca: 78 },
      { id: 'mino', nome: "Mino", posicoes: ["MC"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Galatasaray",
    jogadores: [
      { id: 'zoran-simovic', nome: "Zoran Simović", posicoes: ["GOL"], forca: 82 },
      { id: 'cuneyt-tanman', nome: "Cüneyt Tanman", posicoes: ["ZAG"], forca: 82 },
      { id: 'semih-yuvakuran', nome: "Semih Yuvakuran", posicoes: ["ZAG"], forca: 80 },
      { id: 'bulent-korkmaz', nome: "Bülent Korkmaz", posicoes: ["ZAG"], forca: 78 },
      { id: 'ugur-tutuneker', nome: "Uğur Tütüneker", posicoes: ["MC"], forca: 80 },
      { id: 'cevad-prekazi', nome: "Cevad Prekazi", posicoes: ["MEI"], forca: 83 },
      { id: 'tugay-kerimoglu', nome: "Tugay Kerimoğlu", posicoes: ["MC"], forca: 76 },
      { id: 'muhammed-alt-ntas', nome: "Muhammed Altıntaş", posicoes: ["ME"], forca: 79 },
      { id: 'tanju-colak', nome: "Tanju Çolak", posicoes: ["ATA"], forca: 85 },
      { id: 'erdal-keser', nome: "Erdal Keser", posicoes: ["ATA"], forca: 81 },
      { id: 'arif-kocab-y-k', nome: "Arif Kocabıyık", posicoes: ["ATA"], forca: 78 },
      { id: 'ismail-demiriz', nome: "İsmail Demiriz", posicoes: ["LD"], forca: 77 },
      { id: 'bulent-alk-l-c', nome: "Bülent Alkılıç", posicoes: ["MC"], forca: 76 },
      { id: 'ahmet-ceyhan', nome: "Ahmet Ceyhan", posicoes: ["ZAG"], forca: 75 }
    ]
  },

  // ===== Edição 1988 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "PSV Eindhoven",
    jogadores: [
      { id: 'hans-van-breukelen', nome: "Hans van Breukelen", posicoes: ["GOL"], forca: 87 },
      { id: 'eric-gerets', nome: "Eric Gerets", posicoes: ["LD"], forca: 85 },
      { id: 'ronald-koeman', nome: "Ronald Koeman", posicoes: ["ZAG"], forca: 89 },
      { id: 'ivan-nielsen', nome: "Ivan Nielsen", posicoes: ["ZAG"], forca: 82 },
      { id: 's-ren-lerby', nome: "Søren Lerby", posicoes: ["LE"], forca: 84 },
      { id: 'berry-van-aerle', nome: "Berry van Aerle", posicoes: ["VOL"], forca: 83 },
      { id: 'gerald-vanenburg', nome: "Gerald Vanenburg", posicoes: ["MC"], forca: 85 },
      { id: 'frank-arnesen', nome: "Frank Arnesen", posicoes: ["MC"], forca: 82 },
      { id: 'jan-heintze', nome: "Jan Heintze", posicoes: ["ME"], forca: 81 },
      { id: 'wim-kieft', nome: "Wim Kieft", posicoes: ["ATA"], forca: 84 },
      { id: 'hans-gillhaus', nome: "Hans Gillhaus", posicoes: ["ATA"], forca: 82 },
      { id: 'erwin-koeman', nome: "Erwin Koeman", posicoes: ["MC"], forca: 82 },
      { id: 'anton-janssen', nome: "Anton Janssen", posicoes: ["MC"], forca: 79 },
      { id: 'stan-valckx', nome: "Stan Valckx", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "Benfica",
    jogadores: [
      { id: 'silvino', nome: "Silvino", posicoes: ["GOL"], forca: 83 },
      { id: 'antonio-veloso', nome: "António Veloso", posicoes: ["LD"], forca: 83 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 85 },
      { id: 'dito', nome: "Dito", posicoes: ["ZAG"], forca: 81 },
      { id: 'alvaro-magalhaes', nome: "Álvaro Magalhães", posicoes: ["LE"], forca: 82 },
      { id: 'sheu', nome: "Shéu", posicoes: ["MC"], forca: 83 },
      { id: 'elzo', nome: "Elzo", posicoes: ["MC"], forca: 82 },
      { id: 'diamantino', nome: "Diamantino", posicoes: ["MEI"], forca: 84 },
      { id: 'pacheco', nome: "Pacheco", posicoes: ["PD"], forca: 82 },
      { id: 'rui-aguas', nome: "Rui Águas", posicoes: ["ATA"], forca: 84 },
      { id: 'mats-magnusson', nome: "Mats Magnusson", posicoes: ["ATA"], forca: 83 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["ATA"], forca: 80 },
      { id: 'wando', nome: "Wando", posicoes: ["ME"], forca: 79 },
      { id: 'carlos-mozer', nome: "Carlos Mozer", posicoes: ["ZAG"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo', nome: "Francisco Buyo", posicoes: ["GOL"], forca: 84 },
      { id: 'chendo', nome: "Chendo", posicoes: ["LD"], forca: 83 },
      { id: 'manolo-sanchis', nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 85 },
      { id: 'jose-antonio-camacho', nome: "José Antonio Camacho", posicoes: ["LE"], forca: 83 },
      { id: 'rafael-gordillo', nome: "Rafael Gordillo", posicoes: ["LE","ME"], forca: 84 },
      { id: 'ricardo-gallego', nome: "Ricardo Gallego", posicoes: ["MC"], forca: 83 },
      { id: 'michel', nome: "Míchel", posicoes: ["MEI"], forca: 87 },
      { id: 'rafael-martin-vazquez', nome: "Rafael Martín Vázquez", posicoes: ["MEI"], forca: 84 },
      { id: 'emilio-butragueno', nome: "Emilio Butragueño", posicoes: ["ATA"], forca: 90 },
      { id: 'hugo-sanchez', nome: "Hugo Sánchez", posicoes: ["ATA"], forca: 91 },
      { id: 'santillana', nome: "Santillana", posicoes: ["ATA"], forca: 82 },
      { id: 'tendillo', nome: "Tendillo", posicoes: ["ZAG"], forca: 80 },
      { id: 'juanito', nome: "Juanito", posicoes: ["MC"], forca: 78 },
      { id: 'paco-llorente', nome: "Paco Llorente", posicoes: ["ME"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "Steaua București",
    jogadores: [
      { id: 'silviu-lung', nome: "Silviu Lung", posicoes: ["GOL"], forca: 83 },
      { id: 'stefan-iovan', nome: "Ștefan Iovan", posicoes: ["LD"], forca: 83 },
      { id: 'miodrag-belodedici', nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 85 },
      { id: 'adrian-bumbescu', nome: "Adrian Bumbescu", posicoes: ["ZAG"], forca: 82 },
      { id: 'dan-petrescu', nome: "Dan Petrescu", posicoes: ["LE"], forca: 80 },
      { id: 'tudorel-stoica', nome: "Tudorel Stoica", posicoes: ["MC"], forca: 83 },
      { id: 'gheorghe-hagi', nome: "Gheorghe Hagi", posicoes: ["MEI"], forca: 89 },
      { id: 'ilie-dumitrescu', nome: "Ilie Dumitrescu", posicoes: ["MC"], forca: 78 },
      { id: 'marius-lacatus', nome: "Marius Lăcătuș", posicoes: ["ATA"], forca: 84 },
      { id: 'victor-piturca', nome: "Victor Pițurcă", posicoes: ["ATA"], forca: 83 },
      { id: 'gavril-balint', nome: "Gavril Balint", posicoes: ["ATA"], forca: 82 },
      { id: 'iosif-rotariu', nome: "Iosif Rotariu", posicoes: ["MC"], forca: 80 },
      { id: 'marin-radu', nome: "Marin Radu", posicoes: ["ME"], forca: 77 },
      { id: 'nicolae-ungureanu', nome: "Nicolae Ungureanu", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1987 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Porto",
    jogadores: [
      { id: 'jozef-m-ynarczyk', nome: "Józef Młynarczyk", posicoes: ["GOL"], forca: 85 },
      { id: 'joao-pinto', nome: "João Pinto", posicoes: ["LD"], forca: 84 },
      { id: 'celso', nome: "Celso", posicoes: ["ZAG"], forca: 82 },
      { id: 'eduardo-luis', nome: "Eduardo Luís", posicoes: ["ZAG"], forca: 81 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ZAG"], forca: 80 },
      { id: 'jaime-magalhaes', nome: "Jaime Magalhães", posicoes: ["MC"], forca: 84 },
      { id: 'andre', nome: "André", posicoes: ["MC"], forca: 84 },
      { id: 'antonio-sousa', nome: "António Sousa", posicoes: ["MEI"], forca: 83 },
      { id: 'paulo-futre', nome: "Paulo Futre", posicoes: ["ME","ATA"], forca: 91 },
      { id: 'madjer', nome: "Madjer", posicoes: ["ATA"], forca: 89 },
      { id: 'fernando-gomes', nome: "Fernando Gomes", posicoes: ["ATA"], forca: 88 },
      { id: 'juary', nome: "Juary", posicoes: ["ATA"], forca: 82 },
      { id: 'rui-barros', nome: "Rui Barros", posicoes: ["MEI"], forca: 80 },
      { id: 'frasco', nome: "Frasco", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'jean-marie-pfaff', nome: "Jean-Marie Pfaff", posicoes: ["GOL"], forca: 87 },
      { id: 'klaus-augenthaler', nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 86 },
      { id: 'norbert-eder', nome: "Norbert Eder", posicoes: ["ZAG"], forca: 82 },
      { id: 'hans-pflugler', nome: "Hans Pflügler", posicoes: ["LE"], forca: 82 },
      { id: 'lothar-matthaus', nome: "Lothar Matthäus", posicoes: ["MC"], forca: 91 },
      { id: 'andreas-brehme', nome: "Andreas Brehme", posicoes: ["LE","MC"], forca: 87 },
      { id: 'wolfgang-dremmler', nome: "Wolfgang Dremmler", posicoes: ["MC"], forca: 80 },
      { id: 'hansi-dorfner', nome: "Hansi Dorfner", posicoes: ["MC"], forca: 81 },
      { id: 'michael-rummenigge', nome: "Michael Rummenigge", posicoes: ["ATA"], forca: 82 },
      { id: 'dieter-hoene', nome: "Dieter Hoeneß", posicoes: ["ATA"], forca: 84 },
      { id: 'roland-wohlfarth', nome: "Roland Wohlfarth", posicoes: ["ATA"], forca: 83 },
      { id: 'ludwig-kogl', nome: "Ludwig Kögl", posicoes: ["ME"], forca: 80 },
      { id: 'helmut-winklhofer', nome: "Helmut Winklhofer", posicoes: ["LD"], forca: 81 },
      { id: 'manfred-schwabl', nome: "Manfred Schwabl", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Dynamo Kyiv",
    jogadores: [
      { id: 'viktor-chanov', nome: "Viktor Chanov", posicoes: ["GOL"], forca: 84 },
      { id: 'anatoliy-demyanenko', nome: "Anatoliy Demyanenko", posicoes: ["LE"], forca: 85 },
      { id: 'vladimir-bessonov', nome: "Vladimir Bessonov", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'sergei-baltacha', nome: "Sergei Baltacha", posicoes: ["ZAG"], forca: 83 },
      { id: 'oleg-kuznetsov', nome: "Oleg Kuznetsov", posicoes: ["ZAG"], forca: 82 },
      { id: 'pavel-yakovenko', nome: "Pavel Yakovenko", posicoes: ["MC"], forca: 84 },
      { id: 'oleksandr-zavarov', nome: "Oleksandr Zavarov", posicoes: ["MEI"], forca: 88 },
      { id: 'vasyl-rats', nome: "Vasyl Rats", posicoes: ["ME"], forca: 83 },
      { id: 'igor-belanov', nome: "Igor Belanov", posicoes: ["ATA"], forca: 90 },
      { id: 'oleg-blokhin', nome: "Oleg Blokhin", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'vadym-yevtushenko', nome: "Vadym Yevtushenko", posicoes: ["ATA"], forca: 82 },
      { id: 'ivan-yaremchuk', nome: "Ivan Yaremchuk", posicoes: ["MC"], forca: 80 },
      { id: 'oleksandr-sorokalet', nome: "Oleksandr Sorokalet", posicoes: ["ZAG"], forca: 78 },
      { id: 'viktor-khlus', nome: "Viktor Khlus", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo', nome: "Francisco Buyo", posicoes: ["GOL"], forca: 84 },
      { id: 'chendo', nome: "Chendo", posicoes: ["LD"], forca: 83 },
      { id: 'manolo-sanchis', nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 85 },
      { id: 'jose-antonio-camacho', nome: "José Antonio Camacho", posicoes: ["LE"], forca: 84 },
      { id: 'rafael-gordillo', nome: "Rafael Gordillo", posicoes: ["LE","ME"], forca: 84 },
      { id: 'ricardo-gallego', nome: "Ricardo Gallego", posicoes: ["MC"], forca: 83 },
      { id: 'michel', nome: "Míchel", posicoes: ["MEI"], forca: 87 },
      { id: 'rafael-martin-vazquez', nome: "Rafael Martín Vázquez", posicoes: ["MEI"], forca: 84 },
      { id: 'emilio-butragueno', nome: "Emilio Butragueño", posicoes: ["ATA"], forca: 89 },
      { id: 'hugo-sanchez', nome: "Hugo Sánchez", posicoes: ["ATA"], forca: 91 },
      { id: 'santillana', nome: "Santillana", posicoes: ["ATA"], forca: 82 },
      { id: 'jorge-valdano', nome: "Jorge Valdano", posicoes: ["ATA"], forca: 83 },
      { id: 'juanito', nome: "Juanito", posicoes: ["ME"], forca: 80 },
      { id: 'tendillo', nome: "Tendillo", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 1986 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "Steaua București",
    jogadores: [
      { id: 'helmut-duckadam', nome: "Helmut Duckadam", posicoes: ["GOL"], forca: 87 },
      { id: 'stefan-iovan', nome: "Ștefan Iovan", posicoes: ["LD"], forca: 83 },
      { id: 'miodrag-belodedici', nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 85 },
      { id: 'adrian-bumbescu', nome: "Adrian Bumbescu", posicoes: ["ZAG"], forca: 82 },
      { id: 'ilie-barbulescu', nome: "Ilie Bărbulescu", posicoes: ["LE"], forca: 80 },
      { id: 'tudorel-stoica', nome: "Tudorel Stoica", posicoes: ["MC"], forca: 84 },
      { id: 'laszlo-boloni', nome: "László Bölöni", posicoes: ["MC"], forca: 85 },
      { id: 'mihail-majearu', nome: "Mihail Majearu", posicoes: ["MEI"], forca: 81 },
      { id: 'marius-lacatus', nome: "Marius Lăcătuș", posicoes: ["ATA"], forca: 84 },
      { id: 'victor-piturca', nome: "Victor Pițurcă", posicoes: ["ATA"], forca: 83 },
      { id: 'gavril-balint', nome: "Gavril Balint", posicoes: ["ATA"], forca: 82 },
      { id: 'lucian-balan', nome: "Lucian Bălan", posicoes: ["MC"], forca: 80 },
      { id: 'anghel-iordanescu', nome: "Anghel Iordănescu", posicoes: ["ATA"], forca: 80 },
      { id: 'anton-weissenbacher', nome: "Anton Weissenbacher", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "Barcelona",
    jogadores: [
      { id: 'javier-urruti', nome: "Javier Urruti", posicoes: ["GOL"], forca: 84 },
      { id: 'migueli', nome: "Migueli", posicoes: ["ZAG"], forca: 84 },
      { id: 'julio-alberto', nome: "Julio Alberto", posicoes: ["LE"], forca: 83 },
      { id: 'gerardo', nome: "Gerardo", posicoes: ["ZAG"], forca: 80 },
      { id: 'victor-munoz', nome: "Víctor Muñoz", posicoes: ["MC"], forca: 84 },
      { id: 'bernd-schuster', nome: "Bernd Schuster", posicoes: ["MEI"], forca: 89 },
      { id: 'marcos-alonso', nome: "Marcos Alonso", posicoes: ["ME"], forca: 83 },
      { id: 'francisco-jose-carrasco', nome: "Francisco José Carrasco", posicoes: ["ME"], forca: 83 },
      { id: 'steve-archibald', nome: "Steve Archibald", posicoes: ["ATA"], forca: 85 },
      { id: 'pichi-alonso', nome: "Pichi Alonso", posicoes: ["ATA"], forca: 82 },
      { id: 'caldere', nome: "Calderé", posicoes: ["MC"], forca: 81 },
      { id: 'rojo', nome: "Rojo", posicoes: ["ME"], forca: 80 },
      { id: 'clos', nome: "Clos", posicoes: ["ATA"], forca: 78 },
      { id: 'sanchez', nome: "Sánchez", posicoes: ["LD"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "Anderlecht",
    jogadores: [
      { id: 'jacky-munaron', nome: "Jacky Munaron", posicoes: ["GOL"], forca: 83 },
      { id: 'hugo-broos', nome: "Hugo Broos", posicoes: ["ZAG"], forca: 83 },
      { id: 'georges-grun', nome: "Georges Grün", posicoes: ["ZAG"], forca: 82 },
      { id: 'morten-olsen', nome: "Morten Olsen", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'rene-vandereycken', nome: "René Vandereycken", posicoes: ["MC"], forca: 82 },
      { id: 'frank-vercauteren', nome: "Frank Vercauteren", posicoes: ["ME"], forca: 84 },
      { id: 'enzo-scifo', nome: "Enzo Scifo", posicoes: ["MEI"], forca: 86 },
      { id: 'juan-lozano', nome: "Juan Lozano", posicoes: ["MEI"], forca: 84 },
      { id: 'erwin-vandenbergh', nome: "Erwin Vandenbergh", posicoes: ["ATA"], forca: 85 },
      { id: 'kenneth-brylle', nome: "Kenneth Brylle", posicoes: ["ATA"], forca: 82 },
      { id: 'arnor-gu-johnsen', nome: "Arnór Guðjohnsen", posicoes: ["ATA"], forca: 80 },
      { id: 'alex-czerniatynski', nome: "Alex Czerniatynski", posicoes: ["ME"], forca: 80 },
      { id: 'michel-de-groote', nome: "Michel De Groote", posicoes: ["ZAG"], forca: 80 },
      { id: 'per-frimann', nome: "Per Frimann", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "IFK Göteborg",
    jogadores: [
      { id: 'thomas-wernerson', nome: "Thomas Wernerson", posicoes: ["GOL"], forca: 81 },
      { id: 'glenn-hysen', nome: "Glenn Hysén", posicoes: ["ZAG"], forca: 85 },
      { id: 'roland-nilsson', nome: "Roland Nilsson", posicoes: ["LD"], forca: 82 },
      { id: 'stig-fredriksson', nome: "Stig Fredriksson", posicoes: ["ZAG"], forca: 82 },
      { id: 'tord-holmgren', nome: "Tord Holmgren", posicoes: ["MC"], forca: 80 },
      { id: 'ruben-svensson', nome: "Ruben Svensson", posicoes: ["MC"], forca: 80 },
      { id: 'benny-lennartsson', nome: "Benny Lennartsson", posicoes: ["ME"], forca: 77 },
      { id: 'torbjorn-nilsson', nome: "Torbjörn Nilsson", posicoes: ["ATA"], forca: 86 },
      { id: 'johnny-ekstrom', nome: "Johnny Ekström", posicoes: ["ATA"], forca: 82 },
      { id: 'stefan-pettersson', nome: "Stefan Pettersson", posicoes: ["ATA"], forca: 81 },
      { id: 'peter-larsson', nome: "Peter Larsson", posicoes: ["ME"], forca: 78 },
      { id: 'conny-karlsson', nome: "Conny Karlsson", posicoes: ["ZAG"], forca: 78 },
      { id: 'tommy-holmgren', nome: "Tommy Holmgren", posicoes: ["MC"], forca: 77 },
      { id: 'mikael-robertsson', nome: "Mikael Robertsson", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1985 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Juventus",
    jogadores: [
      { id: 'stefano-tacconi', nome: "Stefano Tacconi", posicoes: ["GOL"], forca: 85 },
      { id: 'luciano-favero', nome: "Luciano Favero", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'antonio-cabrini', nome: "Antonio Cabrini", posicoes: ["LE"], forca: 86 },
      { id: 'gaetano-scirea', nome: "Gaetano Scirea", posicoes: ["ZAG"], forca: 89 },
      { id: 'sergio-brio', nome: "Sergio Brio", posicoes: ["ZAG"], forca: 83 },
      { id: 'massimo-bonini', nome: "Massimo Bonini", posicoes: ["VOL"], forca: 84 },
      { id: 'marco-tardelli', nome: "Marco Tardelli", posicoes: ["MC"], forca: 87 },
      { id: 'michel-platini', nome: "Michel Platini", posicoes: ["MEI"], forca: 94 },
      { id: 'zbigniew-boniek', nome: "Zbigniew Boniek", posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'paolo-rossi', nome: "Paolo Rossi", posicoes: ["ATA"], forca: 85 },
      { id: 'massimo-briaschi', nome: "Massimo Briaschi", posicoes: ["ATA"], forca: 81 },
      { id: 'beniamino-vignola', nome: "Beniamino Vignola", posicoes: ["MEI"], forca: 80 },
      { id: 'cesare-prandelli', nome: "Cesare Prandelli", posicoes: ["MC"], forca: 78 },
      { id: 'moreno-torricelli', nome: "Moreno Torricelli", posicoes: ["ZAG"], forca: 72 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Liverpool",
    jogadores: [
      { id: 'bruce-grobbelaar', nome: "Bruce Grobbelaar", posicoes: ["GOL"], forca: 85 },
      { id: 'phil-neal', nome: "Phil Neal", posicoes: ["LD"], forca: 83 },
      { id: 'steve-nicol', nome: "Steve Nicol", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'alan-hansen', nome: "Alan Hansen", posicoes: ["ZAG"], forca: 87 },
      { id: 'mark-lawrenson', nome: "Mark Lawrenson", posicoes: ["ZAG"], forca: 86 },
      { id: 'ronnie-whelan', nome: "Ronnie Whelan", posicoes: ["MC"], forca: 84 },
      { id: 'jan-m-lby', nome: "Jan Mølby", posicoes: ["MC"], forca: 83 },
      { id: 'craig-johnston', nome: "Craig Johnston", posicoes: ["ME"], forca: 83 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'ian-rush', nome: "Ian Rush", posicoes: ["ATA"], forca: 90 },
      { id: 'paul-walsh', nome: "Paul Walsh", posicoes: ["ATA"], forca: 80 },
      { id: 'michael-robinson', nome: "Michael Robinson", posicoes: ["ATA"], forca: 79 },
      { id: 'sammy-lee', nome: "Sammy Lee", posicoes: ["MC"], forca: 80 },
      { id: 'jim-beglin', nome: "Jim Beglin", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Bordeaux",
    jogadores: [
      { id: 'dominique-dropsy', nome: "Dominique Dropsy", posicoes: ["GOL"], forca: 83 },
      { id: 'patrick-battiston', nome: "Patrick Battiston", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonard-specht', nome: "Léonard Specht", posicoes: ["ZAG"], forca: 82 },
      { id: 'thierry-tusseau', nome: "Thierry Tusseau", posicoes: ["LD"], forca: 82 },
      { id: 'jean-tigana', nome: "Jean Tigana", posicoes: ["MC"], forca: 89 },
      { id: 'alain-giresse', nome: "Alain Giresse", posicoes: ["MEI"], forca: 89 },
      { id: 'jean-christophe-thouvenel', nome: "Jean-Christophe Thouvenel", posicoes: ["MC"], forca: 80 },
      { id: 'rene-girard', nome: "René Girard", posicoes: ["VOL"], forca: 82 },
      { id: 'bernard-lacombe', nome: "Bernard Lacombe", posicoes: ["ATA"], forca: 84 },
      { id: 'dieter-muller', nome: "Dieter Müller", posicoes: ["ATA"], forca: 82 },
      { id: 'uwe-reinders', nome: "Uwe Reinders", posicoes: ["ATA"], forca: 79 },
      { id: 'gernot-rohr', nome: "Gernot Rohr", posicoes: ["ZAG"], forca: 81 },
      { id: 'jose-toure', nome: "José Touré", posicoes: ["ME"], forca: 80 },
      { id: 'philippe-fargeon', nome: "Philippe Fargeon", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Panathinaikos",
    jogadores: [
      { id: 'nikos-sarganis', nome: "Nikos Sarganis", posicoes: ["GOL"], forca: 82 },
      { id: 'anthimos-kapsis', nome: "Anthimos Kapsis", posicoes: ["ZAG"], forca: 82 },
      { id: 'takis-fyssas', nome: "Takis Fyssas", posicoes: ["ZAG"], forca: 74 },
      { id: 'giannis-kyrastas', nome: "Giannis Kyrastas", posicoes: ["LD"], forca: 81 },
      { id: 'dimitris-saravakos', nome: "Dimitris Saravakos", posicoes: ["MC"], forca: 84 },
      { id: 'velimir-zajec', nome: "Velimir Zajec", posicoes: ["MC"], forca: 85 },
      { id: 'juan-ramon-rocha', nome: "Juan Ramón Rocha", posicoes: ["MEI"], forca: 84 },
      { id: 'dimitris-antoniou', nome: "Dimitris Antoniou", posicoes: ["ME"], forca: 78 },
      { id: 'charalambos-dimopoulos', nome: "Charalambos Dimopoulos", posicoes: ["ATA"], forca: 80 },
      { id: 'thanasis-dimopoulos', nome: "Thanasis Dimopoulos", posicoes: ["ATA"], forca: 77 },
      { id: 'dimitris-livathinos', nome: "Dimitris Livathinos", posicoes: ["MC"], forca: 79 },
      { id: 'stratos-apostolakis', nome: "Stratos Apostolakis", posicoes: ["LE"], forca: 80 },
      { id: 'takis-ikonomopoulos', nome: "Takis Ikonomopoulos", posicoes: ["ZAG"], forca: 76 }
    ]
  },

  // ===== Edição 1984 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Liverpool",
    jogadores: [
      { id: 'bruce-grobbelaar', nome: "Bruce Grobbelaar", posicoes: ["GOL"], forca: 85 },
      { id: 'phil-neal', nome: "Phil Neal", posicoes: ["LD"], forca: 84 },
      { id: 'alan-kennedy', nome: "Alan Kennedy", posicoes: ["LE"], forca: 83 },
      { id: 'alan-hansen', nome: "Alan Hansen", posicoes: ["ZAG"], forca: 87 },
      { id: 'mark-lawrenson', nome: "Mark Lawrenson", posicoes: ["ZAG"], forca: 86 },
      { id: 'graeme-souness', nome: "Graeme Souness", posicoes: ["MC"], forca: 89 },
      { id: 'ronnie-whelan', nome: "Ronnie Whelan", posicoes: ["MC"], forca: 84 },
      { id: 'sammy-lee', nome: "Sammy Lee", posicoes: ["MC"], forca: 81 },
      { id: 'craig-johnston', nome: "Craig Johnston", posicoes: ["ME"], forca: 83 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'ian-rush', nome: "Ian Rush", posicoes: ["ATA"], forca: 90 },
      { id: 'michael-robinson', nome: "Michael Robinson", posicoes: ["ATA"], forca: 80 },
      { id: 'steve-nicol', nome: "Steve Nicol", posicoes: ["MC"], forca: 79 },
      { id: 'paul-walsh', nome: "Paul Walsh", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Roma",
    jogadores: [
      { id: 'franco-tancredi', nome: "Franco Tancredi", posicoes: ["GOL"], forca: 84 },
      { id: 'sebastiano-nela', nome: "Sebastiano Nela", posicoes: ["LE","ZAG"], forca: 83 },
      { id: 'agostino-di-bartolomei', nome: "Agostino Di Bartolomei", posicoes: ["ZAG"], forca: 86 },
      { id: 'pietro-vierchowod', nome: "Pietro Vierchowod", posicoes: ["ZAG"], forca: 86 },
      { id: 'carlo-ancelotti', nome: "Carlo Ancelotti", posicoes: ["MC"], forca: 84 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MEI"], forca: 91 },
      { id: 'bruno-conti', nome: "Bruno Conti", posicoes: ["PD"], forca: 88 },
      { id: 'roberto-pruzzo', nome: "Roberto Pruzzo", posicoes: ["ATA"], forca: 87 },
      { id: 'francesco-graziani', nome: "Francesco Graziani", posicoes: ["ATA"], forca: 83 },
      { id: 'odoacre-chierico', nome: "Odoacre Chierico", posicoes: ["ME"], forca: 80 },
      { id: 'michele-nappi', nome: "Michele Nappi", posicoes: ["ZAG"], forca: 78 },
      { id: 'dario-bonetti', nome: "Dario Bonetti", posicoes: ["LD"], forca: 79 },
      { id: 'vincenzo-prohaska', nome: "Vincenzo Prohaska", posicoes: ["MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Dundee United",
    jogadores: [
      { id: 'hamish-mcalpine', nome: "Hamish McAlpine", posicoes: ["GOL"], forca: 82 },
      { id: 'david-narey', nome: "David Narey", posicoes: ["ZAG"], forca: 84 },
      { id: 'paul-hegarty', nome: "Paul Hegarty", posicoes: ["ZAG"], forca: 82 },
      { id: 'richard-gough', nome: "Richard Gough", posicoes: ["ZAG"], forca: 84 },
      { id: 'maurice-malpas', nome: "Maurice Malpas", posicoes: ["LE"], forca: 82 },
      { id: 'eamonn-bannon', nome: "Eamonn Bannon", posicoes: ["MC"], forca: 83 },
      { id: 'john-holt', nome: "John Holt", posicoes: ["MC"], forca: 80 },
      { id: 'ralph-milne', nome: "Ralph Milne", posicoes: ["ME"], forca: 82 },
      { id: 'paul-sturrock', nome: "Paul Sturrock", posicoes: ["ATA"], forca: 84 },
      { id: 'davie-dodds', nome: "Davie Dodds", posicoes: ["ATA"], forca: 81 },
      { id: 'billy-kirkwood', nome: "Billy Kirkwood", posicoes: ["MC"], forca: 79 },
      { id: 'ian-redford', nome: "Ian Redford", posicoes: ["ME"], forca: 78 },
      { id: 'derek-stark', nome: "Derek Stark", posicoes: ["ZAG"], forca: 77 },
      { id: 'john-reilly', nome: "John Reilly", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Dinamo București",
    jogadores: [
      { id: 'dumitru-moraru', nome: "Dumitru Moraru", posicoes: ["GOL"], forca: 82 },
      { id: 'mircea-rednic', nome: "Mircea Rednic", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'ioan-andone', nome: "Ioan Andone", posicoes: ["ZAG"], forca: 82 },
      { id: 'michael-klein', nome: "Michael Klein", posicoes: ["ZAG"], forca: 81 },
      { id: 'ion-marin', nome: "Ion Marin", posicoes: ["MC"], forca: 79 },
      { id: 'gheorghe-multescu', nome: "Gheorghe Mulțescu", posicoes: ["MC"], forca: 82 },
      { id: 'cornel-talnar', nome: "Cornel Țălnar", posicoes: ["MEI"], forca: 81 },
      { id: 'costel-orac', nome: "Costel Orac", posicoes: ["ME"], forca: 81 },
      { id: 'rodion-camataru', nome: "Rodion Cămătaru", posicoes: ["ATA"], forca: 84 },
      { id: 'marin-dragnea', nome: "Marin Dragnea", posicoes: ["ATA"], forca: 79 },
      { id: 'claudiu-vaiscovici', nome: "Claudiu Vaișcovici", posicoes: ["ATA"], forca: 78 },
      { id: 'ionel-augustin', nome: "Ionel Augustin", posicoes: ["MC"], forca: 79 },
      { id: 'nicolae-ungureanu', nome: "Nicolae Ungureanu", posicoes: ["ZAG"], forca: 78 },
      { id: 'ioan-ovidiu-sabau', nome: "Ioan Ovidiu Sabău", posicoes: ["MC"], forca: 75 }
    ]
  },

  // ===== Edição 1983 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Hamburg",
    jogadores: [
      { id: 'uli-stein', nome: "Uli Stein", posicoes: ["GOL"], forca: 85 },
      { id: 'manfred-kaltz', nome: "Manfred Kaltz", posicoes: ["LD"], forca: 86 },
      { id: 'ditmar-jakobs', nome: "Ditmar Jakobs", posicoes: ["ZAG"], forca: 83 },
      { id: 'holger-hieronymus', nome: "Holger Hieronymus", posicoes: ["ZAG"], forca: 81 },
      { id: 'felix-magath', nome: "Felix Magath", posicoes: ["MC"], forca: 88 },
      { id: 'jimmy-hartwig', nome: "Jimmy Hartwig", posicoes: ["MC"], forca: 82 },
      { id: 'wolfgang-rolff', nome: "Wolfgang Rolff", posicoes: ["MC"], forca: 81 },
      { id: 'jurgen-milewski', nome: "Jürgen Milewski", posicoes: ["ME"], forca: 80 },
      { id: 'horst-hrubesch', nome: "Horst Hrubesch", posicoes: ["ATA"], forca: 86 },
      { id: 'lars-bastrup', nome: "Lars Bastrup", posicoes: ["ATA"], forca: 80 },
      { id: 'thomas-von-heesen', nome: "Thomas von Heesen", posicoes: ["ATA"], forca: 81 },
      { id: 'caspar-memering', nome: "Caspar Memering", posicoes: ["MC"], forca: 80 },
      { id: 'jurgen-groh', nome: "Jürgen Groh", posicoes: ["ZAG"], forca: 78 },
      { id: 'rudiger-wenzel', nome: "Rüdiger Wenzel", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Juventus",
    jogadores: [
      { id: 'dino-zoff', nome: "Dino Zoff", posicoes: ["GOL"], forca: 88 },
      { id: 'claudio-gentile', nome: "Claudio Gentile", posicoes: ["LD","ZAG"], forca: 86 },
      { id: 'antonio-cabrini', nome: "Antonio Cabrini", posicoes: ["LE"], forca: 86 },
      { id: 'gaetano-scirea', nome: "Gaetano Scirea", posicoes: ["ZAG"], forca: 89 },
      { id: 'sergio-brio', nome: "Sergio Brio", posicoes: ["ZAG"], forca: 82 },
      { id: 'marco-tardelli', nome: "Marco Tardelli", posicoes: ["MC"], forca: 87 },
      { id: 'massimo-bonini', nome: "Massimo Bonini", posicoes: ["VOL"], forca: 83 },
      { id: 'michel-platini', nome: "Michel Platini", posicoes: ["MEI"], forca: 92 },
      { id: 'zbigniew-boniek', nome: "Zbigniew Boniek", posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'paolo-rossi', nome: "Paolo Rossi", posicoes: ["ATA"], forca: 88 },
      { id: 'roberto-bettega', nome: "Roberto Bettega", posicoes: ["ATA"], forca: 83 },
      { id: 'giuseppe-furino', nome: "Giuseppe Furino", posicoes: ["MC"], forca: 80 },
      { id: 'franco-causio', nome: "Franco Causio", posicoes: ["PD"], forca: 82 },
      { id: 'domenico-marocchino', nome: "Domenico Marocchino", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'luis-arconada', nome: "Luis Arconada", posicoes: ["GOL"], forca: 87 },
      { id: 'alberto-gorriz', nome: "Alberto Górriz", posicoes: ["ZAG"], forca: 82 },
      { id: 'agustin-gajate', nome: "Agustín Gajate", posicoes: ["ZAG"], forca: 80 },
      { id: 'celayeta', nome: "Celayeta", posicoes: ["LD"], forca: 80 },
      { id: 'periko-alonso', nome: "Periko Alonso", posicoes: ["MC"], forca: 83 },
      { id: 'larranaga', nome: "Larrañaga", posicoes: ["MC"], forca: 82 },
      { id: 'jesus-maria-zamora', nome: "Jesús María Zamora", posicoes: ["MEI"], forca: 84 },
      { id: 'roberto-lopez-ufarte', nome: "Roberto López Ufarte", posicoes: ["PE"], forca: 85 },
      { id: 'jesus-maria-satrustegui', nome: "Jesús María Satrústegui", posicoes: ["ATA"], forca: 84 },
      { id: 'uralde', nome: "Uralde", posicoes: ["ATA"], forca: 82 },
      { id: 'idigoras', nome: "Idígoras", posicoes: ["ME"], forca: 80 },
      { id: 'bakero', nome: "Bakero", posicoes: ["MC"], forca: 76 },
      { id: 'diego', nome: "Diego", posicoes: ["ZAG"], forca: 77 },
      { id: 'jose-mari-bakero', nome: "José Mari Bakero", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Widzew Łódź",
    jogadores: [
      { id: 'jozef-m-ynarczyk', nome: "Józef Młynarczyk", posicoes: ["GOL"], forca: 84 },
      { id: 'w-adys-aw-zmuda', nome: "Władysław Żmuda", posicoes: ["ZAG"], forca: 83 },
      { id: 'andrzej-grebosz', nome: "Andrzej Grębosz", posicoes: ["ZAG"], forca: 80 },
      { id: 'marek-pieta', nome: "Marek Pięta", posicoes: ["LD"], forca: 78 },
      { id: 'w-odzimierz-smolarek', nome: "Włodzimierz Smolarek", posicoes: ["MC"], forca: 84 },
      { id: 'miros-aw-t-okinski', nome: "Mirosław Tłokiński", posicoes: ["MC"], forca: 81 },
      { id: 'zbigniew-boniek', nome: "Zbigniew Boniek", posicoes: ["MEI"], forca: 89 },
      { id: 'tadeusz-swiatek', nome: "Tadeusz Świątek", posicoes: ["ME"], forca: 77 },
      { id: 'w-odzimierz-cio-ek', nome: "Włodzimierz Ciołek", posicoes: ["ATA"], forca: 80 },
      { id: 'janusz-turowski', nome: "Janusz Turowski", posicoes: ["ATA"], forca: 77 },
      { id: 'dariusz-dziekanowski', nome: "Dariusz Dziekanowski", posicoes: ["ATA"], forca: 76 },
      { id: 'marek-dziuba', nome: "Marek Dziuba", posicoes: ["MC"], forca: 78 },
      { id: 'andrzej-mozejko', nome: "Andrzej Możejko", posicoes: ["ZAG"], forca: 76 },
      { id: 'krzysztof-surlit', nome: "Krzysztof Surlit", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1982 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "Aston Villa",
    jogadores: [
      { id: 'jimmy-rimmer', nome: "Jimmy Rimmer", posicoes: ["GOL"], forca: 82 },
      { id: 'nigel-spink', nome: "Nigel Spink", posicoes: ["GOL"], forca: 80 },
      { id: 'kenny-swain', nome: "Kenny Swain", posicoes: ["LD"], forca: 82 },
      { id: 'allan-evans', nome: "Allan Evans", posicoes: ["ZAG"], forca: 83 },
      { id: 'ken-mcnaught', nome: "Ken McNaught", posicoes: ["ZAG"], forca: 82 },
      { id: 'gary-williams', nome: "Gary Williams", posicoes: ["LE"], forca: 81 },
      { id: 'dennis-mortimer', nome: "Dennis Mortimer", posicoes: ["MC"], forca: 85 },
      { id: 'des-bremner', nome: "Des Bremner", posicoes: ["MC"], forca: 83 },
      { id: 'gordon-cowans', nome: "Gordon Cowans", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'tony-morley', nome: "Tony Morley", posicoes: ["PE"], forca: 84 },
      { id: 'gary-shaw', nome: "Gary Shaw", posicoes: ["ATA"], forca: 85 },
      { id: 'peter-withe', nome: "Peter Withe", posicoes: ["ATA"], forca: 86 },
      { id: 'mark-walters', nome: "Mark Walters", posicoes: ["ATA"], forca: 78 },
      { id: 'colin-gibson', nome: "Colin Gibson", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'walter-junghans', nome: "Walter Junghans", posicoes: ["GOL"], forca: 82 },
      { id: 'klaus-augenthaler', nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 85 },
      { id: 'wolfgang-dremmler', nome: "Wolfgang Dremmler", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'kurt-niedermayer', nome: "Kurt Niedermayer", posicoes: ["ZAG"], forca: 80 },
      { id: 'paul-breitner', nome: "Paul Breitner", posicoes: ["MC"], forca: 88 },
      { id: 'karl-heinz-rummenigge', nome: "Karl-Heinz Rummenigge", posicoes: ["MEI","ATA"], forca: 92 },
      { id: 'dieter-hoene', nome: "Dieter Hoeneß", posicoes: ["ATA"], forca: 85 },
      { id: 'reinhold-mathy', nome: "Reinhold Mathy", posicoes: ["ATA"], forca: 79 },
      { id: 'bernd-durnberger', nome: "Bernd Dürnberger", posicoes: ["LE","ME"], forca: 80 },
      { id: 'norbert-eder', nome: "Norbert Eder", posicoes: ["ZAG"], forca: 80 },
      { id: 'wolfgang-kraus', nome: "Wolfgang Kraus", posicoes: ["MC"], forca: 79 },
      { id: 'udo-horsmann', nome: "Udo Horsmann", posicoes: ["MC"], forca: 78 },
      { id: 'kurt-welzl', nome: "Kurt Welzl", posicoes: ["ATA"], forca: 77 },
      { id: 'rainer-ohlhauser', nome: "Rainer Ohlhauser", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "Anderlecht",
    jogadores: [
      { id: 'jacky-munaron', nome: "Jacky Munaron", posicoes: ["GOL"], forca: 83 },
      { id: 'hugo-broos', nome: "Hugo Broos", posicoes: ["ZAG"], forca: 84 },
      { id: 'morten-olsen', nome: "Morten Olsen", posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'michel-de-groote', nome: "Michel De Groote", posicoes: ["ZAG"], forca: 80 },
      { id: 'ludo-coeck', nome: "Ludo Coeck", posicoes: ["MC"], forca: 84 },
      { id: 'per-frimann', nome: "Per Frimann", posicoes: ["MC"], forca: 81 },
      { id: 'frank-vercauteren', nome: "Frank Vercauteren", posicoes: ["ME","PE"], forca: 85 },
      { id: 'juan-lozano', nome: "Juan Lozano", posicoes: ["MEI"], forca: 84 },
      { id: 'erwin-vandenbergh', nome: "Erwin Vandenbergh", posicoes: ["ATA"], forca: 86 },
      { id: 'kenneth-brylle', nome: "Kenneth Brylle", posicoes: ["ATA"], forca: 82 },
      { id: 'alex-czerniatynski', nome: "Alex Czerniatynski", posicoes: ["ATA"], forca: 80 },
      { id: 'rene-vandereycken', nome: "René Vandereycken", posicoes: ["MC"], forca: 82 },
      { id: 'georges-grun', nome: "Georges Grün", posicoes: ["ZAG"], forca: 78 },
      { id: 'arnor-gu-johnsen', nome: "Arnór Guðjohnsen", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "CSKA Sofia",
    jogadores: [
      { id: 'georgi-velinov', nome: "Georgi Velinov", posicoes: ["GOL"], forca: 80 },
      { id: 'georgi-dimitrov', nome: "Georgi Dimitrov", posicoes: ["ZAG"], forca: 82 },
      { id: 'tsvetan-yonchev', nome: "Tsvetan Yonchev", posicoes: ["ZAG"], forca: 78 },
      { id: 'radoslav-zdravkov', nome: "Radoslav Zdravkov", posicoes: ["LD"], forca: 80 },
      { id: 'plamen-markov', nome: "Plamen Markov", posicoes: ["MC"], forca: 82 },
      { id: 'metodi-tomanov', nome: "Metodi Tomanov", posicoes: ["MC"], forca: 77 },
      { id: 'georgi-slavkov', nome: "Georgi Slavkov", posicoes: ["MEI"], forca: 80 },
      { id: 'stoycho-mladenov', nome: "Stoycho Mladenov", posicoes: ["ATA"], forca: 84 },
      { id: 'spas-dzhevizov', nome: "Spas Dzhevizov", posicoes: ["ATA"], forca: 81 },
      { id: 'hristo-stoichkov', nome: "Hristo Stoichkov", posicoes: ["ATA"], forca: 72 },
      { id: 'emil-kostadinov', nome: "Emil Kostadinov", posicoes: ["ME"], forca: 70 },
      { id: 'tenyo-minchev', nome: "Tenyo Minchev", posicoes: ["VOL"], forca: 76 },
      { id: 'angel-rangelov', nome: "Angel Rangelov", posicoes: ["ZAG"], forca: 76 },
      { id: 'petar-zehtinski', nome: "Petar Zehtinski", posicoes: ["MC"], forca: 75 }
    ]
  },

  // ===== Edição 1981 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Liverpool",
    jogadores: [
      { id: 'ray-clemence', nome: "Ray Clemence", posicoes: ["GOL"], forca: 87 },
      { id: 'phil-neal', nome: "Phil Neal", posicoes: ["LD"], forca: 84 },
      { id: 'alan-kennedy', nome: "Alan Kennedy", posicoes: ["LE"], forca: 83 },
      { id: 'alan-hansen', nome: "Alan Hansen", posicoes: ["ZAG"], forca: 86 },
      { id: 'phil-thompson', nome: "Phil Thompson", posicoes: ["ZAG"], forca: 84 },
      { id: 'graeme-souness', nome: "Graeme Souness", posicoes: ["MC"], forca: 88 },
      { id: 'terry-mcdermott', nome: "Terry McDermott", posicoes: ["MC"], forca: 84 },
      { id: 'ray-kennedy', nome: "Ray Kennedy", posicoes: ["MC","ME"], forca: 84 },
      { id: 'sammy-lee', nome: "Sammy Lee", posicoes: ["PD","MC"], forca: 81 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 90 },
      { id: 'david-johnson', nome: "David Johnson", posicoes: ["ATA"], forca: 82 },
      { id: 'ian-rush', nome: "Ian Rush", posicoes: ["ATA"], forca: 78 },
      { id: 'jimmy-case', nome: "Jimmy Case", posicoes: ["MC"], forca: 81 },
      { id: 'colin-irwin', nome: "Colin Irwin", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Real Madrid",
    jogadores: [
      { id: 'agustin', nome: "Agustín", posicoes: ["GOL"], forca: 82 },
      { id: 'jose-antonio-camacho', nome: "José Antonio Camacho", posicoes: ["LE"], forca: 85 },
      { id: 'sabido', nome: "Sabido", posicoes: ["ZAG"], forca: 80 },
      { id: 'garcia-navajas', nome: "García Navajas", posicoes: ["ZAG"], forca: 79 },
      { id: 'uli-stielike', nome: "Uli Stielike", posicoes: ["MC"], forca: 87 },
      { id: 'vicente-del-bosque', nome: "Vicente del Bosque", posicoes: ["MC"], forca: 82 },
      { id: 'garcia-hernandez', nome: "García Hernández", posicoes: ["MC"], forca: 80 },
      { id: 'juanito', nome: "Juanito", posicoes: ["ME","ATA"], forca: 86 },
      { id: 'santillana', nome: "Santillana", posicoes: ["ATA"], forca: 86 },
      { id: 'laurie-cunningham', nome: "Laurie Cunningham", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'angel', nome: "Ángel", posicoes: ["LD"], forca: 80 },
      { id: 'isidro', nome: "Isidro", posicoes: ["ME"], forca: 78 },
      { id: 'pineda', nome: "Pineda", posicoes: ["ATA"], forca: 77 },
      { id: 'ricardo-gallego', nome: "Ricardo Gallego", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'walter-junghans', nome: "Walter Junghans", posicoes: ["GOL"], forca: 82 },
      { id: 'klaus-augenthaler', nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 85 },
      { id: 'wolfgang-dremmler', nome: "Wolfgang Dremmler", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'kurt-niedermayer', nome: "Kurt Niedermayer", posicoes: ["ZAG"], forca: 80 },
      { id: 'paul-breitner', nome: "Paul Breitner", posicoes: ["MC"], forca: 89 },
      { id: 'norbert-janzon', nome: "Norbert Janzon", posicoes: ["MC"], forca: 78 },
      { id: 'karl-heinz-rummenigge', nome: "Karl-Heinz Rummenigge", posicoes: ["MEI","ATA"], forca: 93 },
      { id: 'dieter-hoene', nome: "Dieter Hoeneß", posicoes: ["ATA"], forca: 84 },
      { id: 'reinhold-mathy', nome: "Reinhold Mathy", posicoes: ["ATA"], forca: 78 },
      { id: 'bernd-durnberger', nome: "Bernd Dürnberger", posicoes: ["ME"], forca: 80 },
      { id: 'norbert-eder', nome: "Norbert Eder", posicoes: ["ZAG"], forca: 79 },
      { id: 'udo-horsmann', nome: "Udo Horsmann", posicoes: ["MC"], forca: 78 },
      { id: 'kurt-welzl', nome: "Kurt Welzl", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'ivano-bordon', nome: "Ivano Bordon", posicoes: ["GOL"], forca: 84 },
      { id: 'giuseppe-bergomi', nome: "Giuseppe Bergomi", posicoes: ["LD","ZAG"], forca: 78 },
      { id: 'giuseppe-baresi', nome: "Giuseppe Baresi", posicoes: ["ZAG"], forca: 84 },
      { id: 'graziano-bini', nome: "Graziano Bini", posicoes: ["ZAG"], forca: 81 },
      { id: 'gabriele-oriali', nome: "Gabriele Oriali", posicoes: ["MC"], forca: 84 },
      { id: 'evaristo-beccalossi', nome: "Evaristo Beccalossi", posicoes: ["MC"], forca: 85 },
      { id: 'giancarlo-pasinato', nome: "Giancarlo Pasinato", posicoes: ["MC"], forca: 80 },
      { id: 'herbert-prohaska', nome: "Herbert Prohaska", posicoes: ["MEI"], forca: 86 },
      { id: 'alessandro-altobelli', nome: "Alessandro Altobelli", posicoes: ["ATA"], forca: 86 },
      { id: 'carlo-muraro', nome: "Carlo Muraro", posicoes: ["ATA"], forca: 82 },
      { id: 'aldo-serena', nome: "Aldo Serena", posicoes: ["ATA"], forca: 78 },
      { id: 'giancarlo-marini', nome: "Giancarlo Marini", posicoes: ["ZAG"], forca: 80 },
      { id: 'nazzareno-canuti', nome: "Nazzareno Canuti", posicoes: ["LD"], forca: 77 },
      { id: 'roberto-mozzini', nome: "Roberto Mozzini", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1980 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Nottingham Forest",
    jogadores: [
      { id: 'peter-shilton', nome: "Peter Shilton", posicoes: ["GOL"], forca: 90 },
      { id: 'viv-anderson', nome: "Viv Anderson", posicoes: ["LD"], forca: 84 },
      { id: 'frank-clark', nome: "Frank Clark", posicoes: ["LE"], forca: 81 },
      { id: 'kenny-burns', nome: "Kenny Burns", posicoes: ["ZAG"], forca: 84 },
      { id: 'larry-lloyd', nome: "Larry Lloyd", posicoes: ["ZAG"], forca: 83 },
      { id: 'john-mcgovern', nome: "John McGovern", posicoes: ["MC"], forca: 84 },
      { id: 'ian-bowyer', nome: "Ian Bowyer", posicoes: ["MC"], forca: 82 },
      { id: 'martin-oneill', nome: "Martin O'Neill", posicoes: ["ME"], forca: 83 },
      { id: 'john-robertson', nome: "John Robertson", posicoes: ["PE"], forca: 88 },
      { id: 'garry-birtles', nome: "Garry Birtles", posicoes: ["ATA"], forca: 84 },
      { id: 'trevor-francis', nome: "Trevor Francis", posicoes: ["ATA"], forca: 86 },
      { id: 'tony-woodcock', nome: "Tony Woodcock", posicoes: ["ATA"], forca: 83 },
      { id: 'archie-gemmill', nome: "Archie Gemmill", posicoes: ["MC"], forca: 80 },
      { id: 'david-needham', nome: "David Needham", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Hamburg",
    jogadores: [
      { id: 'rudi-kargus', nome: "Rudi Kargus", posicoes: ["GOL"], forca: 82 },
      { id: 'manfred-kaltz', nome: "Manfred Kaltz", posicoes: ["LD"], forca: 86 },
      { id: 'peter-nogly', nome: "Peter Nogly", posicoes: ["ZAG"], forca: 82 },
      { id: 'ditmar-jakobs', nome: "Ditmar Jakobs", posicoes: ["ZAG"], forca: 81 },
      { id: 'felix-magath', nome: "Felix Magath", posicoes: ["MC"], forca: 86 },
      { id: 'caspar-memering', nome: "Caspar Memering", posicoes: ["MC"], forca: 82 },
      { id: 'jimmy-hartwig', nome: "Jimmy Hartwig", posicoes: ["MC"], forca: 82 },
      { id: 'horst-hrubesch', nome: "Horst Hrubesch", posicoes: ["ATA"], forca: 86 },
      { id: 'kevin-keegan', nome: "Kevin Keegan", posicoes: ["ATA","MEI"], forca: 89 },
      { id: 'reiner-reimann', nome: "Reiner Reimann", posicoes: ["ATA"], forca: 81 },
      { id: 'ivan-buljan', nome: "Ivan Buljan", posicoes: ["ZAG"], forca: 80 },
      { id: 'jurgen-milewski', nome: "Jürgen Milewski", posicoes: ["MC"], forca: 78 },
      { id: 'jurgen-groh', nome: "Jürgen Groh", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Ajax",
    jogadores: [
      { id: 'piet-schrijvers', nome: "Piet Schrijvers", posicoes: ["GOL"], forca: 84 },
      { id: 'ruud-krol', nome: "Ruud Krol", posicoes: ["ZAG","LE"], forca: 88 },
      { id: 'edo-ophof', nome: "Edo Ophof", posicoes: ["ZAG"], forca: 79 },
      { id: 'wim-meutstege', nome: "Wim Meutstege", posicoes: ["LD"], forca: 78 },
      { id: 's-ren-lerby', nome: "Søren Lerby", posicoes: ["MC"], forca: 86 },
      { id: 'frank-arnesen', nome: "Frank Arnesen", posicoes: ["MC"], forca: 84 },
      { id: 'dick-schoenaker', nome: "Dick Schoenaker", posicoes: ["MC"], forca: 82 },
      { id: 'simon-tahamata', nome: "Simon Tahamata", posicoes: ["PE"], forca: 83 },
      { id: 'tscheu-la-ling', nome: "Tscheu La Ling", posicoes: ["PD"], forca: 82 },
      { id: 'wim-kieft', nome: "Wim Kieft", posicoes: ["ATA"], forca: 80 },
      { id: 'ray-clarke', nome: "Ray Clarke", posicoes: ["ATA"], forca: 78 },
      { id: 'martin-van-geel', nome: "Martin van Geel", posicoes: ["MC"], forca: 77 },
      { id: 'peter-boeve', nome: "Peter Boeve", posicoes: ["ZAG"], forca: 77 },
      { id: 'johan-zuidema', nome: "Johan Zuidema", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Real Madrid",
    jogadores: [
      { id: 'garcia-remon', nome: "García Remón", posicoes: ["GOL"], forca: 83 },
      { id: 'jose-antonio-camacho', nome: "José Antonio Camacho", posicoes: ["LE"], forca: 85 },
      { id: 'benito', nome: "Benito", posicoes: ["ZAG"], forca: 81 },
      { id: 'pirri', nome: "Pirri", posicoes: ["ZAG","MC"], forca: 85 },
      { id: 'vicente-del-bosque', nome: "Vicente del Bosque", posicoes: ["MC"], forca: 82 },
      { id: 'uli-stielike', nome: "Uli Stielike", posicoes: ["MC"], forca: 87 },
      { id: 'juanito', nome: "Juanito", posicoes: ["PD","ATA"], forca: 86 },
      { id: 'santillana', nome: "Santillana", posicoes: ["ATA"], forca: 86 },
      { id: 'laurie-cunningham', nome: "Laurie Cunningham", posicoes: ["PE","ATA"], forca: 83 },
      { id: 'angel', nome: "Ángel", posicoes: ["LD"], forca: 80 },
      { id: 'garcia-hernandez', nome: "García Hernández", posicoes: ["MC"], forca: 80 },
      { id: 'roberto-martinez', nome: "Roberto Martínez", posicoes: ["ATA"], forca: 79 },
      { id: 'isidro', nome: "Isidro", posicoes: ["ME"], forca: 78 },
      { id: 'pineda', nome: "Pineda", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1979 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "Nottingham Forest",
    jogadores: [
      { id: 'peter-shilton', nome: "Peter Shilton", posicoes: ["GOL"], forca: 90 },
      { id: 'viv-anderson', nome: "Viv Anderson", posicoes: ["LD"], forca: 84 },
      { id: 'frank-clark', nome: "Frank Clark", posicoes: ["LE"], forca: 82 },
      { id: 'kenny-burns', nome: "Kenny Burns", posicoes: ["ZAG"], forca: 84 },
      { id: 'larry-lloyd', nome: "Larry Lloyd", posicoes: ["ZAG"], forca: 83 },
      { id: 'john-mcgovern', nome: "John McGovern", posicoes: ["MC"], forca: 84 },
      { id: 'ian-bowyer', nome: "Ian Bowyer", posicoes: ["MC"], forca: 82 },
      { id: 'martin-oneill', nome: "Martin O'Neill", posicoes: ["ME"], forca: 84 },
      { id: 'john-robertson', nome: "John Robertson", posicoes: ["PE"], forca: 87 },
      { id: 'garry-birtles', nome: "Garry Birtles", posicoes: ["ATA"], forca: 82 },
      { id: 'tony-woodcock', nome: "Tony Woodcock", posicoes: ["ATA"], forca: 85 },
      { id: 'trevor-francis', nome: "Trevor Francis", posicoes: ["ATA"], forca: 86 },
      { id: 'archie-gemmill', nome: "Archie Gemmill", posicoes: ["MC"], forca: 82 },
      { id: 'david-needham', nome: "David Needham", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "Malmö FF",
    jogadores: [
      { id: 'jan-moller', nome: "Jan Möller", posicoes: ["GOL"], forca: 81 },
      { id: 'roland-andersson', nome: "Roland Andersson", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'roy-andersson', nome: "Roy Andersson", posicoes: ["ZAG"], forca: 83 },
      { id: 'ingemar-erlandsson', nome: "Ingemar Erlandsson", posicoes: ["ZAG"], forca: 80 },
      { id: 'bo-larsson', nome: "Bo Larsson", posicoes: ["MC"], forca: 84 },
      { id: 'staffan-tapper', nome: "Staffan Tapper", posicoes: ["MC"], forca: 80 },
      { id: 'anders-ljungberg', nome: "Anders Ljungberg", posicoes: ["MEI"], forca: 79 },
      { id: 'robert-prytz', nome: "Robert Prytz", posicoes: ["ME"], forca: 78 },
      { id: 'tommy-hansson', nome: "Tommy Hansson", posicoes: ["ATA"], forca: 78 },
      { id: 'tore-cervin', nome: "Tore Cervin", posicoes: ["ATA"], forca: 79 },
      { id: 'magnus-andersson', nome: "Magnus Andersson", posicoes: ["ATA"], forca: 77 },
      { id: 'jan-olsson', nome: "Jan Olsson", posicoes: ["VOL"], forca: 78 },
      { id: 'krister-kristensson', nome: "Krister Kristensson", posicoes: ["LE"], forca: 76 },
      { id: 'conny-andersson', nome: "Conny Andersson", posicoes: ["ME"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "Austria Wien",
    jogadores: [
      { id: 'friedl-koncilia', nome: "Friedl Koncilia", posicoes: ["GOL"], forca: 83 },
      { id: 'robert-sara', nome: "Robert Sara", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'erich-obermayer', nome: "Erich Obermayer", posicoes: ["ZAG"], forca: 81 },
      { id: 'josef-sara', nome: "Josef Sara", posicoes: ["ZAG"], forca: 78 },
      { id: 'herbert-prohaska', nome: "Herbert Prohaska", posicoes: ["MC"], forca: 88 },
      { id: 'karl-daxbacher', nome: "Karl Daxbacher", posicoes: ["MC"], forca: 80 },
      { id: 'felix-gasselich', nome: "Felix Gasselich", posicoes: ["MEI"], forca: 82 },
      { id: 'thomas-parits', nome: "Thomas Parits", posicoes: ["PE"], forca: 81 },
      { id: 'walter-schachner', nome: "Walter Schachner", posicoes: ["ATA"], forca: 84 },
      { id: 'hans-pirkner', nome: "Hans Pirkner", posicoes: ["ATA"], forca: 81 },
      { id: 'julio-cesar-morales', nome: "Julio César Morales", posicoes: ["ATA"], forca: 79 },
      { id: 'hubert-baumgartner', nome: "Hubert Baumgartner", posicoes: ["VOL"], forca: 77 },
      { id: 'johann-dihanich', nome: "Johann Dihanich", posicoes: ["LE"], forca: 76 },
      { id: 'ernst-baumeister', nome: "Ernst Baumeister", posicoes: ["MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "1. FC Köln",
    jogadores: [
      { id: 'harald-schumacher', nome: "Harald Schumacher", posicoes: ["GOL"], forca: 85 },
      { id: 'harald-konopka', nome: "Harald Konopka", posicoes: ["LD"], forca: 81 },
      { id: 'herbert-zimmermann', nome: "Herbert Zimmermann", posicoes: ["ZAG"], forca: 82 },
      { id: 'bernd-cullmann', nome: "Bernd Cullmann", posicoes: ["ZAG","MC"], forca: 83 },
      { id: 'heinz-flohe', nome: "Heinz Flohe", posicoes: ["MC"], forca: 85 },
      { id: 'herbert-neumann', nome: "Herbert Neumann", posicoes: ["MC"], forca: 80 },
      { id: 'bernd-schuster', nome: "Bernd Schuster", posicoes: ["MEI"], forca: 84 },
      { id: 'yasuhiko-okudera', nome: "Yasuhiko Okudera", posicoes: ["PE","ME"], forca: 81 },
      { id: 'dieter-muller', nome: "Dieter Müller", posicoes: ["ATA"], forca: 86 },
      { id: 'hannes-lohr', nome: "Hannes Löhr", posicoes: ["ATA"], forca: 80 },
      { id: 'roger-van-gool', nome: "Roger Van Gool", posicoes: ["ATA"], forca: 79 },
      { id: 'pierre-littbarski', nome: "Pierre Littbarski", posicoes: ["ME"], forca: 77 },
      { id: 'roland-gerber', nome: "Roland Gerber", posicoes: ["ZAG"], forca: 76 },
      { id: 'friedhelm-funkel', nome: "Friedhelm Funkel", posicoes: ["MC"], forca: 76 }
    ]
  },

  // ===== Edição 1978 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Liverpool",
    jogadores: [
      { id: 'ray-clemence', nome: "Ray Clemence", posicoes: ["GOL"], forca: 87 },
      { id: 'phil-neal', nome: "Phil Neal", posicoes: ["LD"], forca: 84 },
      { id: 'alan-kennedy', nome: "Alan Kennedy", posicoes: ["LE"], forca: 82 },
      { id: 'emlyn-hughes', nome: "Emlyn Hughes", posicoes: ["ZAG"], forca: 85 },
      { id: 'phil-thompson', nome: "Phil Thompson", posicoes: ["ZAG"], forca: 84 },
      { id: 'graeme-souness', nome: "Graeme Souness", posicoes: ["MC"], forca: 86 },
      { id: 'terry-mcdermott', nome: "Terry McDermott", posicoes: ["MC"], forca: 85 },
      { id: 'ray-kennedy', nome: "Ray Kennedy", posicoes: ["MC","ME"], forca: 84 },
      { id: 'jimmy-case', nome: "Jimmy Case", posicoes: ["PD"], forca: 82 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 90 },
      { id: 'david-fairclough', nome: "David Fairclough", posicoes: ["ATA"], forca: 80 },
      { id: 'steve-heighway', nome: "Steve Heighway", posicoes: ["ATA"], forca: 82 },
      { id: 'ian-callaghan', nome: "Ian Callaghan", posicoes: ["MC"], forca: 80 },
      { id: 'david-johnson', nome: "David Johnson", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Club Brugge",
    jogadores: [
      { id: 'birger-jensen', nome: "Birger Jensen", posicoes: ["GOL"], forca: 82 },
      { id: 'fons-bastijns', nome: "Fons Bastijns", posicoes: ["LD"], forca: 80 },
      { id: 'georges-leekens', nome: "Georges Leekens", posicoes: ["ZAG"], forca: 81 },
      { id: 'gerrie-de-greef', nome: "Gerrie De Greef", posicoes: ["ZAG"], forca: 78 },
      { id: 'julien-cools', nome: "Julien Cools", posicoes: ["MC"], forca: 84 },
      { id: 'rene-vandereycken', nome: "René Vandereycken", posicoes: ["MC"], forca: 84 },
      { id: 'paul-courant', nome: "Paul Courant", posicoes: ["MC"], forca: 80 },
      { id: 'ulrik-le-fevre', nome: "Ulrik le Fèvre", posicoes: ["ME"], forca: 81 },
      { id: 'raoul-lambert', nome: "Raoul Lambert", posicoes: ["ATA"], forca: 84 },
      { id: 'roger-davies', nome: "Roger Davies", posicoes: ["ATA"], forca: 80 },
      { id: 'jan-simoen', nome: "Jan Simoen", posicoes: ["ATA"], forca: 78 },
      { id: 'leen-barth', nome: "Leen Barth", posicoes: ["MEI"], forca: 77 },
      { id: 'walter-meeuws', nome: "Walter Meeuws", posicoes: ["ZAG"], forca: 79 },
      { id: 'dirk-sanders', nome: "Dirk Sanders", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Juventus",
    jogadores: [
      { id: 'dino-zoff', nome: "Dino Zoff", posicoes: ["GOL"], forca: 89 },
      { id: 'claudio-gentile', nome: "Claudio Gentile", posicoes: ["LD","ZAG"], forca: 86 },
      { id: 'antonio-cabrini', nome: "Antonio Cabrini", posicoes: ["LE"], forca: 84 },
      { id: 'gaetano-scirea', nome: "Gaetano Scirea", posicoes: ["ZAG"], forca: 89 },
      { id: 'francesco-morini', nome: "Francesco Morini", posicoes: ["ZAG"], forca: 82 },
      { id: 'marco-tardelli', nome: "Marco Tardelli", posicoes: ["MC"], forca: 87 },
      { id: 'giuseppe-furino', nome: "Giuseppe Furino", posicoes: ["VOL"], forca: 84 },
      { id: 'romeo-benetti', nome: "Romeo Benetti", posicoes: ["MC"], forca: 83 },
      { id: 'franco-causio', nome: "Franco Causio", posicoes: ["PD"], forca: 85 },
      { id: 'roberto-bettega', nome: "Roberto Bettega", posicoes: ["ATA"], forca: 87 },
      { id: 'roberto-boninsegna', nome: "Roberto Boninsegna", posicoes: ["ATA"], forca: 82 },
      { id: 'pietro-paolo-virdis', nome: "Pietro Paolo Virdis", posicoes: ["ATA"], forca: 78 },
      { id: 'antonello-cuccureddu', nome: "Antonello Cuccureddu", posicoes: ["ZAG","MC"], forca: 83 },
      { id: 'renato-zaccarelli', nome: "Renato Zaccarelli", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Borussia Mönchengladbach",
    jogadores: [
      { id: 'wolfgang-kleff', nome: "Wolfgang Kleff", posicoes: ["GOL"], forca: 83 },
      { id: 'berti-vogts', nome: "Berti Vogts", posicoes: ["LD"], forca: 87 },
      { id: 'wilfried-hannes', nome: "Wilfried Hannes", posicoes: ["ZAG"], forca: 80 },
      { id: 'hans-jurgen-wittkamp', nome: "Hans-Jürgen Wittkamp", posicoes: ["ZAG"], forca: 79 },
      { id: 'rainer-bonhof', nome: "Rainer Bonhof", posicoes: ["MC"], forca: 86 },
      { id: 'herbert-wimmer', nome: "Herbert Wimmer", posicoes: ["MC"], forca: 83 },
      { id: 'uli-stielike', nome: "Uli Stielike", posicoes: ["MC","ZAG"], forca: 85 },
      { id: 'allan-simonsen', nome: "Allan Simonsen", posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'jupp-heynckes', nome: "Jupp Heynckes", posicoes: ["ATA"], forca: 87 },
      { id: 'ewald-lienen', nome: "Ewald Lienen", posicoes: ["PE"], forca: 80 },
      { id: 'carsten-nielsen', nome: "Carsten Nielsen", posicoes: ["ATA"], forca: 78 },
      { id: 'christian-kulik', nome: "Christian Kulik", posicoes: ["MC"], forca: 78 },
      { id: 'winfried-schafer', nome: "Winfried Schäfer", posicoes: ["ZAG"], forca: 78 },
      { id: 'harald-nickel', nome: "Harald Nickel", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1977 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Liverpool",
    jogadores: [
      { id: 'ray-clemence', nome: "Ray Clemence", posicoes: ["GOL"], forca: 87 },
      { id: 'phil-neal', nome: "Phil Neal", posicoes: ["LD"], forca: 84 },
      { id: 'joey-jones', nome: "Joey Jones", posicoes: ["LE"], forca: 80 },
      { id: 'emlyn-hughes', nome: "Emlyn Hughes", posicoes: ["ZAG"], forca: 86 },
      { id: 'phil-thompson', nome: "Phil Thompson", posicoes: ["ZAG"], forca: 84 },
      { id: 'terry-mcdermott', nome: "Terry McDermott", posicoes: ["MC"], forca: 84 },
      { id: 'jimmy-case', nome: "Jimmy Case", posicoes: ["MC"], forca: 82 },
      { id: 'ray-kennedy', nome: "Ray Kennedy", posicoes: ["MC","ME"], forca: 84 },
      { id: 'steve-heighway', nome: "Steve Heighway", posicoes: ["PE"], forca: 84 },
      { id: 'kevin-keegan', nome: "Kevin Keegan", posicoes: ["ATA","MEI"], forca: 90 },
      { id: 'john-toshack', nome: "John Toshack", posicoes: ["ATA"], forca: 83 },
      { id: 'david-fairclough', nome: "David Fairclough", posicoes: ["ATA"], forca: 80 },
      { id: 'ian-callaghan', nome: "Ian Callaghan", posicoes: ["MC"], forca: 81 },
      { id: 'tommy-smith', nome: "Tommy Smith", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Borussia Mönchengladbach",
    jogadores: [
      { id: 'wolfgang-kleff', nome: "Wolfgang Kleff", posicoes: ["GOL"], forca: 83 },
      { id: 'berti-vogts', nome: "Berti Vogts", posicoes: ["LD"], forca: 88 },
      { id: 'hans-jurgen-wittkamp', nome: "Hans-Jürgen Wittkamp", posicoes: ["ZAG"], forca: 80 },
      { id: 'wilfried-hannes', nome: "Wilfried Hannes", posicoes: ["ZAG"], forca: 79 },
      { id: 'rainer-bonhof', nome: "Rainer Bonhof", posicoes: ["MC"], forca: 87 },
      { id: 'herbert-wimmer', nome: "Herbert Wimmer", posicoes: ["MC"], forca: 84 },
      { id: 'uli-stielike', nome: "Uli Stielike", posicoes: ["MC","ZAG"], forca: 86 },
      { id: 'allan-simonsen', nome: "Allan Simonsen", posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'jupp-heynckes', nome: "Jupp Heynckes", posicoes: ["ATA"], forca: 88 },
      { id: 'henning-jensen', nome: "Henning Jensen", posicoes: ["PE","ATA"], forca: 83 },
      { id: 'ewald-lienen', nome: "Ewald Lienen", posicoes: ["ME"], forca: 80 },
      { id: 'carsten-nielsen', nome: "Carsten Nielsen", posicoes: ["ATA"], forca: 78 },
      { id: 'winfried-schafer', nome: "Winfried Schäfer", posicoes: ["ZAG"], forca: 78 },
      { id: 'christian-kulik', nome: "Christian Kulik", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Dynamo Kyiv",
    jogadores: [
      { id: 'yevhen-rudakov', nome: "Yevhen Rudakov", posicoes: ["GOL"], forca: 84 },
      { id: 'volodymyr-troshkin', nome: "Volodymyr Troshkin", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'mykhaylo-fomenko', nome: "Mykhaylo Fomenko", posicoes: ["ZAG"], forca: 83 },
      { id: 'viktor-matviyenko', nome: "Viktor Matviyenko", posicoes: ["ZAG"], forca: 81 },
      { id: 'stefan-reshko', nome: "Stefan Reshko", posicoes: ["ZAG"], forca: 80 },
      { id: 'anatoliy-konkov', nome: "Anatoliy Konkov", posicoes: ["MC"], forca: 82 },
      { id: 'viktor-kolotov', nome: "Viktor Kolotov", posicoes: ["MC"], forca: 83 },
      { id: 'volodymyr-muntyan', nome: "Volodymyr Muntyan", posicoes: ["MEI"], forca: 84 },
      { id: 'leonid-buryak', nome: "Leonid Buryak", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'oleg-blokhin', nome: "Oleg Blokhin", posicoes: ["ATA","PE"], forca: 91 },
      { id: 'vladimir-onishchenko', nome: "Vladimir Onishchenko", posicoes: ["ATA"], forca: 83 },
      { id: 'vladimir-veremeyev', nome: "Vladimir Veremeyev", posicoes: ["MC"], forca: 80 },
      { id: 'oleksandr-boyko', nome: "Oleksandr Boyko", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Zürich",
    jogadores: [
      { id: 'karl-grob', nome: "Karl Grob", posicoes: ["GOL"], forca: 82 },
      { id: 'rene-botteron', nome: "René Botteron", posicoes: ["LD"], forca: 80 },
      { id: 'fritz-kunzli', nome: "Fritz Künzli", posicoes: ["ZAG"], forca: 79 },
      { id: 'kobi-kuhn', nome: "Köbi Kuhn", posicoes: ["ZAG"], forca: 81 },
      { id: 'umberto-barberis', nome: "Umberto Barberis", posicoes: ["MC"], forca: 82 },
      { id: 'ilija-katic', nome: "Ilija Katić", posicoes: ["MC"], forca: 79 },
      { id: 'kurt-jara', nome: "Kurt Jara", posicoes: ["MEI"], forca: 81 },
      { id: 'daniel-jeandupeux', nome: "Daniel Jeandupeux", posicoes: ["ME"], forca: 80 },
      { id: 'peter-risi', nome: "Peter Risi", posicoes: ["ATA"], forca: 80 },
      { id: 'jurgen-ba-rner', nome: "Jürgen BÃ¶rner", posicoes: ["ATA"], forca: 76 },
      { id: 'hanspeter-zwicker', nome: "Hanspeter Zwicker", posicoes: ["ATA"], forca: 76 },
      { id: 'walter-muller', nome: "Walter Müller", posicoes: ["MC"], forca: 75 },
      { id: 'ruedi-elsener', nome: "Ruedi Elsener", posicoes: ["ZAG"], forca: 76 },
      { id: 'ernst-hollenstein', nome: "Ernst Hollenstein", posicoes: ["ME"], forca: 75 }
    ]
  },

  // ===== Edição 1976 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'sepp-maier', nome: "Sepp Maier", posicoes: ["GOL"], forca: 90 },
      { id: 'franz-beckenbauer', nome: "Franz Beckenbauer", posicoes: ["ZAG"], forca: 94 },
      { id: 'georg-schwarzenbeck', nome: "Georg Schwarzenbeck", posicoes: ["ZAG"], forca: 84 },
      { id: 'bjorn-andersson', nome: "Björn Andersson", posicoes: ["LD"], forca: 79 },
      { id: 'bernd-durnberger', nome: "Bernd Dürnberger", posicoes: ["LE","MC"], forca: 82 },
      { id: 'rainer-zobel', nome: "Rainer Zobel", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'franz-roth', nome: "Franz Roth", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'jupp-kapellmann', nome: "Jupp Kapellmann", posicoes: ["MC"], forca: 80 },
      { id: 'uli-hoene', nome: "Uli Hoeneß", posicoes: ["ATA","ME"], forca: 86 },
      { id: 'gerd-muller', nome: "Gerd Müller", posicoes: ["ATA"], forca: 92 },
      { id: 'karl-heinz-rummenigge', nome: "Karl-Heinz Rummenigge", posicoes: ["PD","ATA"], forca: 81 },
      { id: 'conny-torstensson', nome: "Conny Torstensson", posicoes: ["ATA","ME"], forca: 80 },
      { id: 'johnny-hansen', nome: "Johnny Hansen", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'edgar-schneider', nome: "Edgar Schneider", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "Saint-Étienne",
    jogadores: [
      { id: 'ivan-curkovic', nome: "Ivan Ćurković", posicoes: ["GOL"], forca: 85 },
      { id: 'gerard-janvion', nome: "Gérard Janvion", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'christian-lopez', nome: "Christian Lopez", posicoes: ["ZAG"], forca: 83 },
      { id: 'oswaldo-piazza', nome: "Oswaldo Piazza", posicoes: ["ZAG"], forca: 85 },
      { id: 'gerard-farison', nome: "Gérard Farison", posicoes: ["LE"], forca: 80 },
      { id: 'christian-synaeghel', nome: "Christian Synaeghel", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'dominique-bathenay', nome: "Dominique Bathenay", posicoes: ["MC"], forca: 83 },
      { id: 'jean-michel-larque', nome: "Jean-Michel Larqué", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'dominique-rocheteau', nome: "Dominique Rocheteau", posicoes: ["PE","ATA"], forca: 86 },
      { id: 'herve-revelli', nome: "Hervé Revelli", posicoes: ["ATA"], forca: 83 },
      { id: 'patrick-revelli', nome: "Patrick Revelli", posicoes: ["ATA"], forca: 81 },
      { id: 'jean-francois-larios', nome: "Jean-François Larios", posicoes: ["ME","ATA"], forca: 80 },
      { id: 'jacques-santini', nome: "Jacques Santini", posicoes: ["MC"], forca: 79 },
      { id: 'alain-merchadier', nome: "Alain Merchadier", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "Real Madrid",
    jogadores: [
      { id: 'miguel-angel', nome: "Miguel Ángel", posicoes: ["GOL"], forca: 83 },
      { id: 'jose-antonio-camacho', nome: "José Antonio Camacho", posicoes: ["LE"], forca: 84 },
      { id: 'benito', nome: "Benito", posicoes: ["ZAG"], forca: 82 },
      { id: 'pirri', nome: "Pirri", posicoes: ["ZAG","MC"], forca: 86 },
      { id: 'vicente-del-bosque', nome: "Vicente del Bosque", posicoes: ["MC"], forca: 82 },
      { id: 'paul-breitner', nome: "Paul Breitner", posicoes: ["MC"], forca: 89 },
      { id: 'gunter-netzer', nome: "Günter Netzer", posicoes: ["MEI"], forca: 87 },
      { id: 'santillana', nome: "Santillana", posicoes: ["ATA"], forca: 86 },
      { id: 'roberto-martinez', nome: "Roberto Martínez", posicoes: ["PD","ATA"], forca: 81 },
      { id: 'amancio', nome: "Amancio", posicoes: ["MEI","PD"], forca: 82 },
      { id: 'henning-jensen', nome: "Henning Jensen", posicoes: ["ME"], forca: 80 },
      { id: 'rubinan', nome: "Rubiñán", posicoes: ["LD"], forca: 78 },
      { id: 'aguilar', nome: "Aguilar", posicoes: ["ATA"], forca: 78 },
      { id: 'velazquez', nome: "Velázquez", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "PSV Eindhoven",
    jogadores: [
      { id: 'jan-van-beveren', nome: "Jan van Beveren", posicoes: ["GOL"], forca: 85 },
      { id: 'huub-stevens', nome: "Huub Stevens", posicoes: ["ZAG"], forca: 81 },
      { id: 'adrie-van-kraay', nome: "Adrie van Kraay", posicoes: ["ZAG"], forca: 81 },
      { id: 'harry-lubse', nome: "Harry Lubse", posicoes: ["LD"], forca: 77 },
      { id: 'willy-van-de-kerkhof', nome: "Willy van de Kerkhof", posicoes: ["MC"], forca: 84 },
      { id: 'rene-van-de-kerkhof', nome: "René van de Kerkhof", posicoes: ["MD","ATA"], forca: 84 },
      { id: 'kees-krijgh', nome: "Kees Krijgh", posicoes: ["MC"], forca: 79 },
      { id: 'ralf-edstrom', nome: "Ralf Edström", posicoes: ["MEI"], forca: 83 },
      { id: 'gerrie-deijkers', nome: "Gerrie Deijkers", posicoes: ["ATA"], forca: 80 },
      { id: 'nick-deacy', nome: "Nick Deacy", posicoes: ["ATA"], forca: 78 },
      { id: 'jan-poortvliet', nome: "Jan Poortvliet", posicoes: ["ME"], forca: 80 },
      { id: 'klaus-wunder', nome: "Klaus Wunder", posicoes: ["ZAG"], forca: 77 },
      { id: 'frans-van-der-kuylen', nome: "Frans van der Kuylen", posicoes: ["VOL"], forca: 78 },
      { id: 'willy-van-der-kuijlen', nome: "Willy van der Kuijlen", posicoes: ["ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1975 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'sepp-maier', nome: "Sepp Maier", posicoes: ["GOL"], forca: 90 },
      { id: 'franz-beckenbauer', nome: "Franz Beckenbauer", posicoes: ["ZAG"], forca: 94 },
      { id: 'georg-schwarzenbeck', nome: "Georg Schwarzenbeck", posicoes: ["ZAG"], forca: 84 },
      { id: 'bjorn-andersson', nome: "Björn Andersson", posicoes: ["LD"], forca: 79 },
      { id: 'bernd-durnberger', nome: "Bernd Dürnberger", posicoes: ["LE","ME"], forca: 81 },
      { id: 'rainer-zobel', nome: "Rainer Zobel", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'jupp-kapellmann', nome: "Jupp Kapellmann", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'franz-roth', nome: "Franz Roth", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'conny-torstensson', nome: "Conny Torstensson", posicoes: ["ME","ATA"], forca: 82 },
      { id: 'uli-hoene', nome: "Uli Hoeneß", posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'gerd-muller', nome: "Gerd Müller", posicoes: ["ATA"], forca: 93 },
      { id: 'karl-heinz-rummenigge', nome: "Karl-Heinz Rummenigge", posicoes: ["ATA","PD"], forca: 78 },
      { id: 'johnny-hansen', nome: "Johnny Hansen", posicoes: ["ZAG","LD"], forca: 77 },
      { id: 'edgar-schneider', nome: "Edgar Schneider", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Leeds United",
    jogadores: [
      { id: 'david-harvey', nome: "David Harvey", posicoes: ["GOL"], forca: 82 },
      { id: 'paul-reaney', nome: "Paul Reaney", posicoes: ["LD"], forca: 81 },
      { id: 'trevor-cherry', nome: "Trevor Cherry", posicoes: ["LE","ZAG"], forca: 81 },
      { id: 'norman-hunter', nome: "Norman Hunter", posicoes: ["ZAG"], forca: 86 },
      { id: 'gordon-mcqueen', nome: "Gordon McQueen", posicoes: ["ZAG"], forca: 83 },
      { id: 'paul-madeley', nome: "Paul Madeley", posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'billy-bremner', nome: "Billy Bremner", posicoes: ["MC"], forca: 88 },
      { id: 'johnny-giles', nome: "Johnny Giles", posicoes: ["MC"], forca: 86 },
      { id: 'peter-lorimer', nome: "Peter Lorimer", posicoes: ["MD","MEI"], forca: 86 },
      { id: 'eddie-gray', nome: "Eddie Gray", posicoes: ["ME","PE"], forca: 85 },
      { id: 'allan-clarke', nome: "Allan Clarke", posicoes: ["ATA"], forca: 84 },
      { id: 'joe-jordan', nome: "Joe Jordan", posicoes: ["ATA"], forca: 84 },
      { id: 'terry-yorath', nome: "Terry Yorath", posicoes: ["MC"], forca: 80 },
      { id: 'duncan-mckenzie', nome: "Duncan McKenzie", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Saint-Étienne",
    jogadores: [
      { id: 'ivan-curkovic', nome: "Ivan Ćurković", posicoes: ["GOL"], forca: 84 },
      { id: 'gerard-janvion', nome: "Gérard Janvion", posicoes: ["LD","ZAG"], forca: 83 },
      { id: 'christian-lopez', nome: "Christian Lopez", posicoes: ["ZAG"], forca: 82 },
      { id: 'oswaldo-piazza', nome: "Oswaldo Piazza", posicoes: ["ZAG"], forca: 84 },
      { id: 'gerard-farison', nome: "Gérard Farison", posicoes: ["LE"], forca: 79 },
      { id: 'christian-synaeghel', nome: "Christian Synaeghel", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'dominique-bathenay', nome: "Dominique Bathenay", posicoes: ["MC"], forca: 82 },
      { id: 'jean-michel-larque', nome: "Jean-Michel Larqué", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'dominique-rocheteau', nome: "Dominique Rocheteau", posicoes: ["PE","ATA"], forca: 85 },
      { id: 'herve-revelli', nome: "Hervé Revelli", posicoes: ["ATA"], forca: 83 },
      { id: 'patrick-revelli', nome: "Patrick Revelli", posicoes: ["ATA"], forca: 81 },
      { id: 'jacques-santini', nome: "Jacques Santini", posicoes: ["MC"], forca: 79 },
      { id: 'jean-francois-larios', nome: "Jean-François Larios", posicoes: ["PE","ME"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Barcelona",
    jogadores: [
      { id: 'pere-valenti-mora', nome: "Pere Valentí Mora", posicoes: ["GOL"], forca: 81 },
      { id: 'joaquim-rife', nome: "Joaquim Rifé", posicoes: ["LD"], forca: 80 },
      { id: 'migueli', nome: "Migueli", posicoes: ["ZAG"], forca: 84 },
      { id: 'antoni-torres', nome: "Antoni Torres", posicoes: ["ZAG"], forca: 80 },
      { id: 'antonio-de-la-cruz', nome: "Antonio de la Cruz", posicoes: ["LE"], forca: 81 },
      { id: 'johan-neeskens', nome: "Johan Neeskens", posicoes: ["MC"], forca: 89 },
      { id: 'juan-manuel-asensi', nome: "Juan Manuel Asensi", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'johan-cruyff', nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 92 },
      { id: 'carles-rexach', nome: "Carles Rexach", posicoes: ["PD","MEI"], forca: 84 },
      { id: 'marcial-pina', nome: "Marcial Pina", posicoes: ["MEI"], forca: 82 },
      { id: 'manuel-clares', nome: "Manuel Clares", posicoes: ["ATA"], forca: 81 },
      { id: 'juan-carlos-perez', nome: "Juan Carlos Pérez", posicoes: ["ATA"], forca: 78 },
      { id: 'costas', nome: "Costas", posicoes: ["VOL"], forca: 77 },
      { id: 'sotil', nome: "Sotil", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1974 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Bayern de Munique",
    jogadores: [
      { id: 'sepp-maier', nome: "Sepp Maier", posicoes: ["GOL"], forca: 90 },
      { id: 'johnny-hansen', nome: "Johnny Hansen", posicoes: ["LD"], forca: 80 },
      { id: 'franz-beckenbauer', nome: "Franz Beckenbauer", posicoes: ["ZAG"], forca: 94 },
      { id: 'georg-schwarzenbeck', nome: "Georg Schwarzenbeck", posicoes: ["ZAG"], forca: 84 },
      { id: 'paul-breitner', nome: "Paul Breitner", posicoes: ["LE","MC"], forca: 89 },
      { id: 'rainer-zobel', nome: "Rainer Zobel", posicoes: ["MC"], forca: 80 },
      { id: 'franz-roth', nome: "Franz Roth", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'jupp-kapellmann', nome: "Jupp Kapellmann", posicoes: ["MC"], forca: 81 },
      { id: 'uli-hoene', nome: "Uli Hoeneß", posicoes: ["ATA","ME"], forca: 88 },
      { id: 'gerd-muller', nome: "Gerd Müller", posicoes: ["ATA"], forca: 94 },
      { id: 'conny-torstensson', nome: "Conny Torstensson", posicoes: ["ME","ATA"], forca: 82 },
      { id: 'bjorn-andersson', nome: "Björn Andersson", posicoes: ["LD"], forca: 79 },
      { id: 'bernd-durnberger', nome: "Bernd Dürnberger", posicoes: ["LE","ME"], forca: 80 },
      { id: 'karl-heinz-rummenigge', nome: "Karl-Heinz Rummenigge", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'miguel-reina', nome: "Miguel Reina", posicoes: ["GOL"], forca: 84 },
      { id: 'jose-luis-capon', nome: "José Luis Capón", posicoes: ["LD"], forca: 82 },
      { id: 'ruben-ayala', nome: "Rubén Ayala", posicoes: ["ZAG"], forca: 84 },
      { id: 'heredia', nome: "Heredia", posicoes: ["ZAG"], forca: 83 },
      { id: 'eusebio', nome: "Eusebio", posicoes: ["LE"], forca: 81 },
      { id: 'adelardo-rodriguez', nome: "Adelardo Rodríguez", posicoes: ["MC"], forca: 86 },
      { id: 'irureta', nome: "Irureta", posicoes: ["MC"], forca: 84 },
      { id: 'luis-aragones', nome: "Luis Aragonés", posicoes: ["MEI"], forca: 88 },
      { id: 'ufarte', nome: "Ufarte", posicoes: ["PD"], forca: 83 },
      { id: 'jose-eulogio-garate', nome: "José Eulogio Gárate", posicoes: ["ATA"], forca: 86 },
      { id: 'becerra', nome: "Becerra", posicoes: ["ATA"], forca: 81 },
      { id: 'alberto', nome: "Alberto", posicoes: ["PE"], forca: 80 },
      { id: 'salcedo', nome: "Salcedo", posicoes: ["MC"], forca: 79 },
      { id: 'melo', nome: "Melo", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Újpest",
    jogadores: [
      { id: 'antal-szentmihalyi', nome: "Antal Szentmihályi", posicoes: ["GOL"], forca: 83 },
      { id: 'laszlo-nosko', nome: "László Noskó", posicoes: ["LD"], forca: 82 },
      { id: 'jozsef-horvath', nome: "József Horváth", posicoes: ["ZAG"], forca: 81 },
      { id: 'sandor-toth', nome: "Sándor Tóth", posicoes: ["LE"], forca: 80 },
      { id: 'laszlo-fazekas', nome: "László Fazekas", posicoes: ["MC"], forca: 86 },
      { id: 'janos-gorocs', nome: "János Göröcs", posicoes: ["MC"], forca: 83 },
      { id: 'istvan-nagy', nome: "István Nagy", posicoes: ["MEI"], forca: 82 },
      { id: 'ferenc-bene', nome: "Ferenc Bene", posicoes: ["PD"], forca: 88 },
      { id: 'antal-dunai', nome: "Antal Dunai", posicoes: ["ATA"], forca: 87 },
      { id: 'janos-fekete', nome: "János Fekete", posicoes: ["ATA"], forca: 81 },
      { id: 'laszlo-zambo', nome: "László Zámbó", posicoes: ["PE"], forca: 82 },
      { id: 'lajos-szucs', nome: "Lajos Szűcs", posicoes: ["MC"], forca: 80 },
      { id: 'andras-toth', nome: "András Tóth", posicoes: ["ZAG"], forca: 78 },
      { id: 'karoly-horvath', nome: "Károly Horváth", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Celtic",
    jogadores: [
      { id: 'evan-williams', nome: "Evan Williams", posicoes: ["GOL"], forca: 82 },
      { id: 'danny-mcgrain', nome: "Danny McGrain", posicoes: ["LD"], forca: 85 },
      { id: 'jim-brogan', nome: "Jim Brogan", posicoes: ["LE"], forca: 81 },
      { id: 'billy-mcneill', nome: "Billy McNeill", posicoes: ["ZAG"], forca: 85 },
      { id: 'george-connelly', nome: "George Connelly", posicoes: ["ZAG"], forca: 84 },
      { id: 'david-hay', nome: "David Hay", posicoes: ["MC"], forca: 84 },
      { id: 'bobby-murdoch', nome: "Bobby Murdoch", posicoes: ["MC"], forca: 83 },
      { id: 'jimmy-johnstone', nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 88 },
      { id: 'bobby-lennox', nome: "Bobby Lennox", posicoes: ["PE"], forca: 85 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA"], forca: 86 },
      { id: 'dixie-deans', nome: "Dixie Deans", posicoes: ["ATA"], forca: 82 },
      { id: 'harry-hood', nome: "Harry Hood", posicoes: ["ATA"], forca: 81 },
      { id: 'lou-macari', nome: "Lou Macari", posicoes: ["ATA"], forca: 82 },
      { id: 'pat-mccluskey', nome: "Pat McCluskey", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 1973 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Ajax",
    jogadores: [
      { id: 'heinz-stuy', nome: "Heinz Stuy", posicoes: ["GOL"], forca: 84 },
      { id: 'wim-suurbier', nome: "Wim Suurbier", posicoes: ["LD"], forca: 85 },
      { id: 'horst-blankenburg', nome: "Horst Blankenburg", posicoes: ["ZAG"], forca: 85 },
      { id: 'barry-hulshoff', nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 85 },
      { id: 'ruud-krol', nome: "Ruud Krol", posicoes: ["LE"], forca: 87 },
      { id: 'johan-neeskens', nome: "Johan Neeskens", posicoes: ["MC"], forca: 89 },
      { id: 'arie-haan', nome: "Arie Haan", posicoes: ["MC"], forca: 85 },
      { id: 'gerrie-muhren', nome: "Gerrie Mühren", posicoes: ["MC"], forca: 85 },
      { id: 'johan-cruyff', nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 96 },
      { id: 'piet-keizer', nome: "Piet Keizer", posicoes: ["PE"], forca: 89 },
      { id: 'johnny-rep', nome: "Johnny Rep", posicoes: ["ATA","PD"], forca: 85 },
      { id: 'sjaak-swart', nome: "Sjaak Swart", posicoes: ["PD"], forca: 82 },
      { id: 'arnold-muhren', nome: "Arnold Mühren", posicoes: ["MC"], forca: 80 },
      { id: 'dick-van-dijk', nome: "Dick van Dijk", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Juventus",
    jogadores: [
      { id: 'dino-zoff', nome: "Dino Zoff", posicoes: ["GOL"], forca: 89 },
      { id: 'luciano-spinosi', nome: "Luciano Spinosi", posicoes: ["LD"], forca: 83 },
      { id: 'sandro-salvadore', nome: "Sandro Salvadore", posicoes: ["ZAG"], forca: 85 },
      { id: 'francesco-morini', nome: "Francesco Morini", posicoes: ["ZAG"], forca: 83 },
      { id: 'giuseppe-furino', nome: "Giuseppe Furino", posicoes: ["LE"], forca: 83 },
      { id: 'fabio-capello', nome: "Fabio Capello", posicoes: ["MC"], forca: 87 },
      { id: 'antonello-cuccureddu', nome: "Antonello Cuccureddu", posicoes: ["MC"], forca: 84 },
      { id: 'franco-causio', nome: "Franco Causio", posicoes: ["ME"], forca: 86 },
      { id: 'roberto-bettega', nome: "Roberto Bettega", posicoes: ["ATA"], forca: 88 },
      { id: 'jose-altafini', nome: "José Altafini", posicoes: ["ATA"], forca: 85 },
      { id: 'pietro-anastasi', nome: "Pietro Anastasi", posicoes: ["ATA"], forca: 85 },
      { id: 'helmut-haller', nome: "Helmut Haller", posicoes: ["MC"], forca: 83 },
      { id: 'roberto-tancredi', nome: "Roberto Tancredi", posicoes: ["ZAG"], forca: 78 },
      { id: 'damiani', nome: "Damiani", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Real Madrid",
    jogadores: [
      { id: 'mariano-garcia-remon', nome: "Mariano García Remón", posicoes: ["GOL"], forca: 83 },
      { id: 'rubinan', nome: "Rubiñán", posicoes: ["LD"], forca: 80 },
      { id: 'benito', nome: "Benito", posicoes: ["ZAG"], forca: 82 },
      { id: 'pirri', nome: "Pirri", posicoes: ["ZAG","MC"], forca: 87 },
      { id: 'jose-antonio-camacho', nome: "José Antonio Camacho", posicoes: ["LE"], forca: 83 },
      { id: 'zoco', nome: "Zoco", posicoes: ["MC"], forca: 83 },
      { id: 'velazquez', nome: "Velázquez", posicoes: ["MC"], forca: 84 },
      { id: 'amancio', nome: "Amancio", posicoes: ["PD","MEI"], forca: 85 },
      { id: 'santillana', nome: "Santillana", posicoes: ["ATA"], forca: 86 },
      { id: 'aguilar', nome: "Aguilar", posicoes: ["ATA"], forca: 82 },
      { id: 'grosso', nome: "Grosso", posicoes: ["ATA"], forca: 81 },
      { id: 'del-bosque', nome: "Del Bosque", posicoes: ["MC"], forca: 80 },
      { id: 'clifford-luyk', nome: "Clifford Luyk", posicoes: ["PE"], forca: 77 },
      { id: 'planelles', nome: "Planelles", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Derby County",
    jogadores: [
      { id: 'colin-boulton', nome: "Colin Boulton", posicoes: ["GOL"], forca: 82 },
      { id: 'ron-webster', nome: "Ron Webster", posicoes: ["LD"], forca: 81 },
      { id: 'roy-mcfarland', nome: "Roy McFarland", posicoes: ["ZAG"], forca: 86 },
      { id: 'colin-todd', nome: "Colin Todd", posicoes: ["ZAG"], forca: 86 },
      { id: 'david-nish', nome: "David Nish", posicoes: ["LE"], forca: 82 },
      { id: 'archie-gemmill', nome: "Archie Gemmill", posicoes: ["MC"], forca: 86 },
      { id: 'john-mcgovern', nome: "John McGovern", posicoes: ["MC"], forca: 84 },
      { id: 'alan-hinton', nome: "Alan Hinton", posicoes: ["ME"], forca: 83 },
      { id: 'kevin-hector', nome: "Kevin Hector", posicoes: ["ATA"], forca: 86 },
      { id: 'john-ohare', nome: "John O'Hare", posicoes: ["ATA"], forca: 84 },
      { id: 'roger-davies', nome: "Roger Davies", posicoes: ["ATA"], forca: 82 },
      { id: 'alan-durban', nome: "Alan Durban", posicoes: ["MC"], forca: 82 },
      { id: 'steve-powell', nome: "Steve Powell", posicoes: ["ZAG"], forca: 78 },
      { id: 'francis-lee', nome: "Francis Lee", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1972 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Ajax",
    jogadores: [
      { id: 'heinz-stuy', nome: "Heinz Stuy", posicoes: ["GOL"], forca: 84 },
      { id: 'wim-suurbier', nome: "Wim Suurbier", posicoes: ["LD"], forca: 85 },
      { id: 'horst-blankenburg', nome: "Horst Blankenburg", posicoes: ["ZAG"], forca: 84 },
      { id: 'barry-hulshoff', nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 85 },
      { id: 'ruud-krol', nome: "Ruud Krol", posicoes: ["LE"], forca: 86 },
      { id: 'johan-neeskens', nome: "Johan Neeskens", posicoes: ["MC"], forca: 88 },
      { id: 'arie-haan', nome: "Arie Haan", posicoes: ["MC"], forca: 84 },
      { id: 'gerrie-muhren', nome: "Gerrie Mühren", posicoes: ["MC"], forca: 85 },
      { id: 'sjaak-swart', nome: "Sjaak Swart", posicoes: ["PD"], forca: 84 },
      { id: 'johan-cruyff', nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 96 },
      { id: 'piet-keizer', nome: "Piet Keizer", posicoes: ["PE"], forca: 89 },
      { id: 'dick-van-dijk', nome: "Dick van Dijk", posicoes: ["ATA"], forca: 83 },
      { id: 'nico-rijnders', nome: "Nico Rijnders", posicoes: ["MC"], forca: 81 },
      { id: 'johnny-rep', nome: "Johnny Rep", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'ivano-bordon', nome: "Ivano Bordon", posicoes: ["GOL"], forca: 84 },
      { id: 'tarcisio-burgnich', nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 85 },
      { id: 'giacinto-facchetti', nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 88 },
      { id: 'giuseppe-bellugi', nome: "Giuseppe Bellugi", posicoes: ["ZAG"], forca: 82 },
      { id: 'giancarlo-bedin', nome: "Giancarlo Bedin", posicoes: ["ZAG"], forca: 81 },
      { id: 'gabriele-oriali', nome: "Gabriele Oriali", posicoes: ["MC"], forca: 83 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MEI"], forca: 86 },
      { id: 'sandro-mazzola', nome: "Sandro Mazzola", posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'roberto-boninsegna', nome: "Roberto Boninsegna", posicoes: ["ATA"], forca: 89 },
      { id: 'mario-corso', nome: "Mario Corso", posicoes: ["PE"], forca: 85 },
      { id: 'jair-da-costa', nome: "Jair da Costa", posicoes: ["PD"], forca: 82 },
      { id: 'renato-cappellini', nome: "Renato Cappellini", posicoes: ["ATA"], forca: 80 },
      { id: 'mario-giubertoni', nome: "Mario Giubertoni", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Benfica",
    jogadores: [
      { id: 'jose-henrique', nome: "José Henrique", posicoes: ["GOL"], forca: 83 },
      { id: 'humberto-coelho', nome: "Humberto Coelho", posicoes: ["ZAG"], forca: 85 },
      { id: 'adolfo', nome: "Adolfo", posicoes: ["ZAG"], forca: 80 },
      { id: 'artur-correia', nome: "Artur Correia", posicoes: ["LE"], forca: 81 },
      { id: 'toni', nome: "Toni", posicoes: ["MC"], forca: 84 },
      { id: 'jaime-graca', nome: "Jaime Graça", posicoes: ["MC"], forca: 82 },
      { id: 'mario-coluna', nome: "Mário Coluna", posicoes: ["MEI"], forca: 84 },
      { id: 'jose-augusto', nome: "José Augusto", posicoes: ["PD"], forca: 82 },
      { id: 'antonio-simoes', nome: "António Simões", posicoes: ["PE"], forca: 86 },
      { id: 'eusebio', nome: "Eusébio", posicoes: ["ATA"], forca: 91 },
      { id: 'nene', nome: "Nené", posicoes: ["ATA"], forca: 83 },
      { id: 'artur-jorge', nome: "Artur Jorge", posicoes: ["ATA"], forca: 82 },
      { id: 'vitor-martins', nome: "Vítor Martins", posicoes: ["MC"], forca: 80 },
      { id: 'jose-torres', nome: "José Torres", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Celtic",
    jogadores: [
      { id: 'evan-williams', nome: "Evan Williams", posicoes: ["GOL"], forca: 83 },
      { id: 'danny-mcgrain', nome: "Danny McGrain", posicoes: ["LD"], forca: 84 },
      { id: 'tommy-gemmell', nome: "Tommy Gemmell", posicoes: ["LE"], forca: 84 },
      { id: 'billy-mcneill', nome: "Billy McNeill", posicoes: ["ZAG"], forca: 86 },
      { id: 'george-connelly', nome: "George Connelly", posicoes: ["ZAG"], forca: 84 },
      { id: 'bobby-murdoch', nome: "Bobby Murdoch", posicoes: ["MC"], forca: 85 },
      { id: 'david-hay', nome: "David Hay", posicoes: ["MC"], forca: 84 },
      { id: 'jimmy-johnstone', nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 89 },
      { id: 'bobby-lennox', nome: "Bobby Lennox", posicoes: ["PE"], forca: 85 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA"], forca: 84 },
      { id: 'lou-macari', nome: "Lou Macari", posicoes: ["ATA"], forca: 83 },
      { id: 'dixie-deans', nome: "Dixie Deans", posicoes: ["ATA"], forca: 82 },
      { id: 'harry-hood', nome: "Harry Hood", posicoes: ["ATA"], forca: 81 },
      { id: 'bertie-auld', nome: "Bertie Auld", posicoes: ["MC"], forca: 82 }
    ]
  },

  // ===== Edição 1971 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Ajax",
    jogadores: [
      { id: 'heinz-stuy', nome: "Heinz Stuy", posicoes: ["GOL"], forca: 84 },
      { id: 'wim-suurbier', nome: "Wim Suurbier", posicoes: ["LD"], forca: 84 },
      { id: 'velibor-vasovic', nome: "Velibor Vasović", posicoes: ["ZAG"], forca: 87 },
      { id: 'barry-hulshoff', nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 84 },
      { id: 'ruud-krol', nome: "Ruud Krol", posicoes: ["LE"], forca: 85 },
      { id: 'johan-neeskens', nome: "Johan Neeskens", posicoes: ["MC"], forca: 86 },
      { id: 'arie-haan', nome: "Arie Haan", posicoes: ["MC"], forca: 83 },
      { id: 'gerrie-muhren', nome: "Gerrie Mühren", posicoes: ["MC"], forca: 84 },
      { id: 'sjaak-swart', nome: "Sjaak Swart", posicoes: ["PD"], forca: 84 },
      { id: 'johan-cruyff', nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 95 },
      { id: 'piet-keizer', nome: "Piet Keizer", posicoes: ["PE"], forca: 88 },
      { id: 'dick-van-dijk', nome: "Dick van Dijk", posicoes: ["ATA"], forca: 84 },
      { id: 'nico-rijnders', nome: "Nico Rijnders", posicoes: ["MC"], forca: 81 },
      { id: 'horst-blankenburg', nome: "Horst Blankenburg", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Panathinaikos",
    jogadores: [
      { id: 'takis-oikonomopoulos', nome: "Takis Oikonomopoulos", posicoes: ["GOL"], forca: 84 },
      { id: 'anthimos-kapsis', nome: "Anthimos Kapsis", posicoes: ["ZAG"], forca: 83 },
      { id: 'aristidis-kamaras', nome: "Aristidis Kamaras", posicoes: ["ZAG"], forca: 81 },
      { id: 'ilias-sourpis', nome: "Ilias Sourpis", posicoes: ["LE"], forca: 80 },
      { id: 'kostas-eleftherakis', nome: "Kostas Eleftherakis", posicoes: ["MC"], forca: 83 },
      { id: 'mimis-domazos', nome: "Mimis Domazos", posicoes: ["MC"], forca: 88 },
      { id: 'filakouris', nome: "Filakouris", posicoes: ["ME"], forca: 80 },
      { id: 'antonis-antoniadis', nome: "Antonis Antoniadis", posicoes: ["ATA"], forca: 88 },
      { id: 'aristidis-grammos', nome: "Aristidis Grammos", posicoes: ["ATA"], forca: 81 },
      { id: 'dimitris-tomaras', nome: "Dimitris Tomaras", posicoes: ["ATA"], forca: 80 },
      { id: 'charis-grammos', nome: "Charis Grammos", posicoes: ["PE"], forca: 78 },
      { id: 'totis-filakouris', nome: "Totis Filakouris", posicoes: ["MC"], forca: 80 },
      { id: 'vasilis-konstantinou', nome: "Vasilis Konstantinou", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'miguel-reina', nome: "Miguel Reina", posicoes: ["GOL"], forca: 84 },
      { id: 'feliciano-rivilla', nome: "Feliciano Rivilla", posicoes: ["LD"], forca: 82 },
      { id: 'isacio-calleja', nome: "Isacio Calleja", posicoes: ["LE"], forca: 82 },
      { id: 'jorge-griffa', nome: "Jorge Griffa", posicoes: ["ZAG"], forca: 84 },
      { id: 'adelardo-rodriguez', nome: "Adelardo Rodríguez", posicoes: ["MC"], forca: 86 },
      { id: 'luis-aragones', nome: "Luis Aragonés", posicoes: ["MC"], forca: 87 },
      { id: 'jose-luis-capon', nome: "José Luis Capón", posicoes: ["MC"], forca: 80 },
      { id: 'jose-eulogio-garate', nome: "José Eulogio Gárate", posicoes: ["ATA"], forca: 87 },
      { id: 'irureta', nome: "Irureta", posicoes: ["ATA"], forca: 83 },
      { id: 'ufarte', nome: "Ufarte", posicoes: ["PD"], forca: 84 },
      { id: 'alberto', nome: "Alberto", posicoes: ["PE"], forca: 80 },
      { id: 'ovejero', nome: "Ovejero", posicoes: ["ATA"], forca: 78 },
      { id: 'melo', nome: "Melo", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Red Star Belgrade",
    jogadores: [
      { id: 'ratomir-dujkovic', nome: "Ratomir Dujković", posicoes: ["GOL"], forca: 83 },
      { id: 'vladimir-durkovic', nome: "Vladimir Durković", posicoes: ["LD"], forca: 82 },
      { id: 'dragan-holcer', nome: "Dragan Holcer", posicoes: ["ZAG"], forca: 80 },
      { id: 'miroslav-pavlovic', nome: "Miroslav Pavlović", posicoes: ["LE"], forca: 80 },
      { id: 'jovan-acimovic', nome: "Jovan Aćimović", posicoes: ["MC"], forca: 85 },
      { id: 'branko-stankovic', nome: "Branko Stanković", posicoes: ["MC"], forca: 82 },
      { id: 'dragan-dzajic', nome: "Dragan Džajić", posicoes: ["MEI"], forca: 91 },
      { id: 'stanislav-karasi', nome: "Stanislav Karasi", posicoes: ["PD"], forca: 84 },
      { id: 'vladimir-petrovic', nome: "Vladimir Petrović", posicoes: ["ATA"], forca: 80 },
      { id: 'stevan-ostojic', nome: "Stevan Ostojić", posicoes: ["ATA"], forca: 82 },
      { id: 'milorad-keri', nome: "Milorad Keri", posicoes: ["PE"], forca: 79 },
      { id: 'kiril-dojcinovski', nome: "Kiril Dojčinovski", posicoes: ["MC"], forca: 78 }
    ]
  },

  // ===== Edição 1970 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Feyenoord",
    jogadores: [
      { id: 'eddy-pieters-graafland', nome: "Eddy Pieters Graafland", posicoes: ["GOL"], forca: 85 },
      { id: 'theo-van-duivenbode', nome: "Theo van Duivenbode", posicoes: ["LD"], forca: 82 },
      { id: 'rinus-israel', nome: "Rinus Israël", posicoes: ["ZAG"], forca: 88 },
      { id: 'theo-laseroms', nome: "Theo Laseroms", posicoes: ["ZAG"], forca: 84 },
      { id: 'cor-veldhoen', nome: "Cor Veldhoen", posicoes: ["LE"], forca: 82 },
      { id: 'franz-hasil', nome: "Franz Hasil", posicoes: ["MC"], forca: 84 },
      { id: 'wim-jansen', nome: "Wim Jansen", posicoes: ["MC"], forca: 86 },
      { id: 'willem-van-hanegem', nome: "Willem van Hanegem", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'coen-moulijn', nome: "Coen Moulijn", posicoes: ["PE"], forca: 87 },
      { id: 'ove-kindvall', nome: "Ove Kindvall", posicoes: ["ATA"], forca: 90 },
      { id: 'henk-wery', nome: "Henk Wery", posicoes: ["ATA"], forca: 83 },
      { id: 'joop-van-daele', nome: "Joop van Daele", posicoes: ["ATA"], forca: 80 },
      { id: 'guus-haak', nome: "Guus Haak", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Celtic",
    jogadores: [
      { id: 'evan-williams', nome: "Evan Williams", posicoes: ["GOL"], forca: 83 },
      { id: 'jim-craig', nome: "Jim Craig", posicoes: ["LD"], forca: 81 },
      { id: 'tommy-gemmell', nome: "Tommy Gemmell", posicoes: ["LE"], forca: 86 },
      { id: 'billy-mcneill', nome: "Billy McNeill", posicoes: ["ZAG"], forca: 87 },
      { id: 'john-clark', nome: "John Clark", posicoes: ["ZAG"], forca: 82 },
      { id: 'bertie-auld', nome: "Bertie Auld", posicoes: ["MC"], forca: 85 },
      { id: 'bobby-murdoch', nome: "Bobby Murdoch", posicoes: ["MC"], forca: 87 },
      { id: 'jimmy-johnstone', nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 90 },
      { id: 'bobby-lennox', nome: "Bobby Lennox", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'stevie-chalmers', nome: "Stevie Chalmers", posicoes: ["ATA"], forca: 84 },
      { id: 'willie-wallace', nome: "Willie Wallace", posicoes: ["ATA"], forca: 84 },
      { id: 'john-hughes', nome: "John Hughes", posicoes: ["ATA"], forca: 82 },
      { id: 'george-connelly', nome: "George Connelly", posicoes: ["MC"], forca: 82 },
      { id: 'kenny-dalglish', nome: "Kenny Dalglish", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Leeds United",
    jogadores: [
      { id: 'gary-sprake', nome: "Gary Sprake", posicoes: ["GOL"], forca: 84 },
      { id: 'paul-reaney', nome: "Paul Reaney", posicoes: ["LD"], forca: 83 },
      { id: 'terry-cooper', nome: "Terry Cooper", posicoes: ["LE"], forca: 84 },
      { id: 'jack-charlton', nome: "Jack Charlton", posicoes: ["ZAG"], forca: 87 },
      { id: 'norman-hunter', nome: "Norman Hunter", posicoes: ["ZAG"], forca: 87 },
      { id: 'paul-madeley', nome: "Paul Madeley", posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'billy-bremner', nome: "Billy Bremner", posicoes: ["MC"], forca: 90 },
      { id: 'johnny-giles', nome: "Johnny Giles", posicoes: ["MC"], forca: 88 },
      { id: 'peter-lorimer', nome: "Peter Lorimer", posicoes: ["MD","MEI"], forca: 86 },
      { id: 'eddie-gray', nome: "Eddie Gray", posicoes: ["ME"], forca: 86 },
      { id: 'allan-clarke', nome: "Allan Clarke", posicoes: ["ATA"], forca: 85 },
      { id: 'mick-jones', nome: "Mick Jones", posicoes: ["ATA"], forca: 84 },
      { id: 'terry-yorath', nome: "Terry Yorath", posicoes: ["MC"], forca: 80 },
      { id: 'rod-belfitt', nome: "Rod Belfitt", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Legia Warsaw",
    jogadores: [
      { id: 'w-adys-aw-grotynski', nome: "Władysław Grotyński", posicoes: ["GOL"], forca: 81 },
      { id: 'bernard-blaut', nome: "Bernard Blaut", posicoes: ["ZAG"], forca: 83 },
      { id: 'zygmunt-anczok', nome: "Zygmunt Anczok", posicoes: ["ZAG"], forca: 82 },
      { id: 'robert-gadocha', nome: "Robert Gadocha", posicoes: ["LD"], forca: 84 },
      { id: 'kazimierz-deyna', nome: "Kazimierz Deyna", posicoes: ["MC"], forca: 89 },
      { id: 'lucjan-brychczy', nome: "Lucjan Brychczy", posicoes: ["MC"], forca: 84 },
      { id: 'jan-pieszko', nome: "Jan Pieszko", posicoes: ["MEI"], forca: 82 },
      { id: 'w-adys-aw-stachurski', nome: "Władysław Stachurski", posicoes: ["ATA"], forca: 81 },
      { id: 'janusz-zmijewski', nome: "Janusz Żmijewski", posicoes: ["ATA"], forca: 80 },
      { id: 'tadeusz-nowak', nome: "Tadeusz Nowak", posicoes: ["ZAG"], forca: 78 },
      { id: 'stefan-bia-as', nome: "Stefan Białas", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1969 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Milan",
    jogadores: [
      { id: 'fabio-cudicini', nome: "Fabio Cudicini", posicoes: ["GOL"], forca: 86 },
      { id: 'kurt-hamrin', nome: "Kurt Hamrin", posicoes: ["LD"], forca: 85 },
      { id: 'roberto-rosato', nome: "Roberto Rosato", posicoes: ["ZAG"], forca: 86 },
      { id: 'saul-malatrasi', nome: "Saul Malatrasi", posicoes: ["ZAG"], forca: 82 },
      { id: 'karl-heinz-schnellinger', nome: "Karl-Heinz Schnellinger", posicoes: ["LE"], forca: 86 },
      { id: 'giovanni-trapattoni', nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 85 },
      { id: 'giovanni-lodetti', nome: "Giovanni Lodetti", posicoes: ["MC"], forca: 82 },
      { id: 'gianni-rivera', nome: "Gianni Rivera", posicoes: ["MEI"], forca: 92 },
      { id: 'pierino-prati', nome: "Pierino Prati", posicoes: ["PD"], forca: 88 },
      { id: 'angelo-sormani', nome: "Angelo Sormani", posicoes: ["ATA"], forca: 84 },
      { id: 'bruno-mora', nome: "Bruno Mora", posicoes: ["PE"], forca: 82 },
      { id: 'angelo-anquilletti', nome: "Angelo Anquilletti", posicoes: ["LD"], forca: 83 },
      { id: 'nestor-combin', nome: "Nestor Combin", posicoes: ["ATA"], forca: 82 },
      { id: 'romeo-benetti', nome: "Romeo Benetti", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Ajax",
    jogadores: [
      { id: 'gert-bals', nome: "Gert Bals", posicoes: ["GOL"], forca: 82 },
      { id: 'wim-suurbier', nome: "Wim Suurbier", posicoes: ["LD"], forca: 83 },
      { id: 'velibor-vasovic', nome: "Velibor Vasović", posicoes: ["ZAG"], forca: 86 },
      { id: 'barry-hulshoff', nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 82 },
      { id: 'ruud-krol', nome: "Ruud Krol", posicoes: ["LE"], forca: 82 },
      { id: 'sjaak-swart', nome: "Sjaak Swart", posicoes: ["MC"], forca: 84 },
      { id: 'henk-groot', nome: "Henk Groot", posicoes: ["MC"], forca: 83 },
      { id: 'johan-cruyff', nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 92 },
      { id: 'piet-keizer', nome: "Piet Keizer", posicoes: ["PE"], forca: 88 },
      { id: 'klaas-nuninga', nome: "Klaas Nuninga", posicoes: ["ATA"], forca: 84 },
      { id: 'danielsson', nome: "Danielsson", posicoes: ["ATA"], forca: 82 },
      { id: 'bennie-muller', nome: "Bennie Muller", posicoes: ["MC"], forca: 81 },
      { id: 'nico-rijnders', nome: "Nico Rijnders", posicoes: ["ZAG"], forca: 80 },
      { id: 'dick-van-dijk', nome: "Dick van Dijk", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Manchester United",
    jogadores: [
      { id: 'alex-stepney', nome: "Alex Stepney", posicoes: ["GOL"], forca: 84 },
      { id: 'shay-brennan', nome: "Shay Brennan", posicoes: ["LD"], forca: 81 },
      { id: 'tony-dunne', nome: "Tony Dunne", posicoes: ["LE"], forca: 82 },
      { id: 'bill-foulkes', nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 82 },
      { id: 'david-sadler', nome: "David Sadler", posicoes: ["MC","ZAG"], forca: 82 },
      { id: 'nobby-stiles', nome: "Nobby Stiles", posicoes: ["VOL"], forca: 85 },
      { id: 'pat-crerand', nome: "Pat Crerand", posicoes: ["MC"], forca: 84 },
      { id: 'bobby-charlton', nome: "Bobby Charlton", posicoes: ["MEI"], forca: 91 },
      { id: 'george-best', nome: "George Best", posicoes: ["PD","ATA"], forca: 93 },
      { id: 'denis-law', nome: "Denis Law", posicoes: ["ATA"], forca: 89 },
      { id: 'john-aston-jr', nome: "John Aston Jr.", posicoes: ["PE"], forca: 83 },
      { id: 'brian-kidd', nome: "Brian Kidd", posicoes: ["ATA"], forca: 84 },
      { id: 'willie-morgan', nome: "Willie Morgan", posicoes: ["MC"], forca: 82 },
      { id: 'steve-james', nome: "Steve James", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Spartak Trnava",
    jogadores: [
      { id: 'frantisek-kozinka', nome: "František Kozinka", posicoes: ["GOL"], forca: 81 },
      { id: 'karol-dobias', nome: "Karol Dobiaš", posicoes: ["LD"], forca: 85 },
      { id: 'jan-zlocha', nome: "Ján Zlocha", posicoes: ["ZAG"], forca: 81 },
      { id: 'dusan-kabat', nome: "Dušan Kabát", posicoes: ["ZAG"], forca: 80 },
      { id: 'ladislav-kuna', nome: "Ladislav Kuna", posicoes: ["MC"], forca: 86 },
      { id: 'anton-malatinsky', nome: "Anton Malatinský", posicoes: ["MC"], forca: 82 },
      { id: 'jozef-adamec', nome: "Jozef Adamec", posicoes: ["MEI"], forca: 87 },
      { id: 'vojtech-varadin', nome: "Vojtech Varadin", posicoes: ["ATA"], forca: 82 },
      { id: 'vladimir-hagara', nome: "Vladimír Hagara", posicoes: ["ATA"], forca: 80 },
      { id: 'vojtech-masny', nome: "Vojtech Masný", posicoes: ["PE"], forca: 80 },
      { id: 'stefan-slezak', nome: "Štefan Slezák", posicoes: ["MC"], forca: 78 },
      { id: 'julius-geryk', nome: "Július Geryk", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1968 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Manchester United",
    jogadores: [
      { id: 'alex-stepney', nome: "Alex Stepney", posicoes: ["GOL"], forca: 84 },
      { id: 'shay-brennan', nome: "Shay Brennan", posicoes: ["LD"], forca: 82 },
      { id: 'tony-dunne', nome: "Tony Dunne", posicoes: ["LE"], forca: 83 },
      { id: 'bill-foulkes', nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 84 },
      { id: 'david-sadler', nome: "David Sadler", posicoes: ["MC","ZAG"], forca: 83 },
      { id: 'nobby-stiles', nome: "Nobby Stiles", posicoes: ["VOL"], forca: 86 },
      { id: 'pat-crerand', nome: "Pat Crerand", posicoes: ["MC"], forca: 85 },
      { id: 'bobby-charlton', nome: "Bobby Charlton", posicoes: ["MEI"], forca: 93 },
      { id: 'george-best', nome: "George Best", posicoes: ["PD","ATA"], forca: 94 },
      { id: 'brian-kidd', nome: "Brian Kidd", posicoes: ["ATA"], forca: 85 },
      { id: 'john-aston-jr', nome: "John Aston Jr.", posicoes: ["PE"], forca: 84 },
      { id: 'denis-law', nome: "Denis Law", posicoes: ["ATA"], forca: 89 },
      { id: 'francis-burns', nome: "Francis Burns", posicoes: ["LE"], forca: 80 },
      { id: 'jimmy-rimmer', nome: "Jimmy Rimmer", posicoes: ["GOL"], forca: 72 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Benfica",
    jogadores: [
      { id: 'jose-henrique', nome: "José Henrique", posicoes: ["GOL"], forca: 83 },
      { id: 'adolfo', nome: "Adolfo", posicoes: ["LD"], forca: 81 },
      { id: 'humberto-fernandes', nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 82 },
      { id: 'jacinto-santos', nome: "Jacinto Santos", posicoes: ["ZAG"], forca: 81 },
      { id: 'cruz', nome: "Cruz", posicoes: ["LE"], forca: 81 },
      { id: 'mario-coluna', nome: "Mário Coluna", posicoes: ["MC"], forca: 87 },
      { id: 'jaime-graca', nome: "Jaime Graça", posicoes: ["MC"], forca: 83 },
      { id: 'jose-augusto', nome: "José Augusto", posicoes: ["PD"], forca: 84 },
      { id: 'antonio-simoes', nome: "António Simões", posicoes: ["PE"], forca: 87 },
      { id: 'eusebio', nome: "Eusébio", posicoes: ["ATA"], forca: 95 },
      { id: 'jose-torres', nome: "José Torres", posicoes: ["ATA"], forca: 86 },
      { id: 'nene', nome: "Nené", posicoes: ["ATA"], forca: 80 },
      { id: 'cavem', nome: "Cavém", posicoes: ["VOL"], forca: 80 },
      { id: 'toni', nome: "Toni", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Real Madrid",
    jogadores: [
      { id: 'junquera', nome: "Junquera", posicoes: ["GOL"], forca: 82 },
      { id: 'zunzunegui', nome: "Zunzunegui", posicoes: ["LD"], forca: 79 },
      { id: 'manuel-sanchis', nome: "Manuel Sanchís", posicoes: ["ZAG"], forca: 84 },
      { id: 'pedro-de-felipe', nome: "Pedro de Felipe", posicoes: ["ZAG"], forca: 83 },
      { id: 'pirri', nome: "Pirri", posicoes: ["MC"], forca: 87 },
      { id: 'zoco', nome: "Zoco", posicoes: ["MC"], forca: 84 },
      { id: 'velazquez', nome: "Velázquez", posicoes: ["MEI"], forca: 85 },
      { id: 'amancio', nome: "Amancio", posicoes: ["PD","MEI"], forca: 87 },
      { id: 'grosso', nome: "Grosso", posicoes: ["ATA"], forca: 83 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 86 },
      { id: 'serena', nome: "Serena", posicoes: ["ATA"], forca: 81 },
      { id: 'felix-ruiz', nome: "Félix Ruiz", posicoes: ["ATA"], forca: 80 },
      { id: 'calpe', nome: "Calpe", posicoes: ["ZAG"], forca: 78 },
      { id: 'aguilar', nome: "Aguilar", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Juventus",
    jogadores: [
      { id: 'roberto-anzolin', nome: "Roberto Anzolin", posicoes: ["GOL"], forca: 83 },
      { id: 'sandro-salvadore', nome: "Sandro Salvadore", posicoes: ["ZAG"], forca: 86 },
      { id: 'ernesto-castano', nome: "Ernesto Càstano", posicoes: ["ZAG"], forca: 84 },
      { id: 'giancarlo-bercellino', nome: "Giancarlo Bercellino", posicoes: ["LD"], forca: 81 },
      { id: 'luis-del-sol', nome: "Luis del Sol", posicoes: ["MC"], forca: 85 },
      { id: 'giancarlo-de-sisti', nome: "Giancarlo De Sisti", posicoes: ["MC"], forca: 84 },
      { id: 'helmut-haller', nome: "Helmut Haller", posicoes: ["MEI"], forca: 87 },
      { id: 'menichelli', nome: "Menichelli", posicoes: ["PE"], forca: 84 },
      { id: 'gianfranco-zigoni', nome: "Gianfranco Zigoni", posicoes: ["ATA"], forca: 83 },
      { id: 'de-paoli', nome: "De Paoli", posicoes: ["ATA"], forca: 82 },
      { id: 'cinesinho', nome: "Cinesinho", posicoes: ["MC"], forca: 82 },
      { id: 'giuseppe-furino', nome: "Giuseppe Furino", posicoes: ["ZAG"], forca: 80 },
      { id: 'pietro-anastasi', nome: "Pietro Anastasi", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1967 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "Celtic",
    jogadores: [
      { id: 'ronnie-simpson', nome: "Ronnie Simpson", posicoes: ["GOL"], forca: 86 },
      { id: 'jim-craig', nome: "Jim Craig", posicoes: ["LD"], forca: 82 },
      { id: 'tommy-gemmell', nome: "Tommy Gemmell", posicoes: ["LE"], forca: 87 },
      { id: 'billy-mcneill', nome: "Billy McNeill", posicoes: ["ZAG"], forca: 88 },
      { id: 'john-clark', nome: "John Clark", posicoes: ["ZAG"], forca: 83 },
      { id: 'bertie-auld', nome: "Bertie Auld", posicoes: ["MC"], forca: 86 },
      { id: 'bobby-murdoch', nome: "Bobby Murdoch", posicoes: ["MC"], forca: 88 },
      { id: 'jimmy-johnstone', nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 91 },
      { id: 'bobby-lennox', nome: "Bobby Lennox", posicoes: ["PE","ATA"], forca: 87 },
      { id: 'stevie-chalmers', nome: "Stevie Chalmers", posicoes: ["ATA"], forca: 85 },
      { id: 'willie-wallace', nome: "Willie Wallace", posicoes: ["ATA"], forca: 85 },
      { id: 'john-hughes', nome: "John Hughes", posicoes: ["ATA","PE"], forca: 83 },
      { id: 'charlie-gallagher', nome: "Charlie Gallagher", posicoes: ["MC"], forca: 80 },
      { id: 'john-cushley', nome: "John Cushley", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'giuliano-sarti', nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 85 },
      { id: 'tarcisio-burgnich', nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 86 },
      { id: 'giacinto-facchetti', nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 89 },
      { id: 'aristide-guarneri', nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 83 },
      { id: 'armando-picchi', nome: "Armando Picchi", posicoes: ["ZAG"], forca: 86 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MC"], forca: 88 },
      { id: 'gianfranco-bedin', nome: "Gianfranco Bedin", posicoes: ["MC"], forca: 82 },
      { id: 'mario-corso', nome: "Mario Corso", posicoes: ["PE"], forca: 86 },
      { id: 'jair-da-costa', nome: "Jair da Costa", posicoes: ["PD"], forca: 84 },
      { id: 'sandro-mazzola', nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 89 },
      { id: 'renato-cappellini', nome: "Renato Cappellini", posicoes: ["ATA"], forca: 81 },
      { id: 'domenghini', nome: "Domenghini", posicoes: ["ATA"], forca: 81 },
      { id: 'carlo-tagnin', nome: "Carlo Tagnin", posicoes: ["VOL"], forca: 79 },
      { id: 'malatrasi', nome: "Malatrasi", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "Dukla Prague",
    jogadores: [
      { id: 'ivo-viktor', nome: "Ivo Viktor", posicoes: ["GOL"], forca: 85 },
      { id: 'ladislav-novak', nome: "Ladislav Novák", posicoes: ["LD"], forca: 85 },
      { id: 'svatopluk-pluskal', nome: "Svatopluk Pluskal", posicoes: ["ZAG"], forca: 85 },
      { id: 'jan-geleta', nome: "Ján Geleta", posicoes: ["ZAG"], forca: 82 },
      { id: 'jozef-masopust', nome: "Jozef Masopust", posicoes: ["MC"], forca: 89 },
      { id: 'josef-vacenovsky', nome: "Josef Vacenovský", posicoes: ["MC"], forca: 82 },
      { id: 'josef-jelinek', nome: "Josef Jelínek", posicoes: ["MEI"], forca: 83 },
      { id: 'ivan-mraz', nome: "Ivan Mráz", posicoes: ["ATA"], forca: 82 },
      { id: 'frantisek-safranek', nome: "František Šafránek", posicoes: ["ATA"], forca: 80 },
      { id: 'frantisek-stambacher', nome: "František Štambacher", posicoes: ["PE"], forca: 79 },
      { id: 'jan-brumovsky', nome: "Jan Brumovský", posicoes: ["ZAG"], forca: 78 },
      { id: 'jan-svehlik', nome: "Ján Švehlík", posicoes: ["MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "CSKA Red Flag",
    jogadores: [
      { id: 'stoyan-yordanov', nome: "Stoyan Yordanov", posicoes: ["GOL"], forca: 81 },
      { id: 'dimitar-penev', nome: "Dimitar Penev", posicoes: ["ZAG"], forca: 86 },
      { id: 'ivan-zafirov', nome: "Ivan Zafirov", posicoes: ["ZAG"], forca: 80 },
      { id: 'boris-gaganelov', nome: "Boris Gaganelov", posicoes: ["LD"], forca: 82 },
      { id: 'nikola-tsanev', nome: "Nikola Tsanev", posicoes: ["MC"], forca: 84 },
      { id: 'dimitar-yakimov', nome: "Dimitar Yakimov", posicoes: ["MC"], forca: 86 },
      { id: 'asparuh-nikodimov', nome: "Asparuh Nikodimov", posicoes: ["MEI"], forca: 83 },
      { id: 'petar-zhekov', nome: "Petar Zhekov", posicoes: ["ATA"], forca: 87 },
      { id: 'stefan-mihaylov', nome: "Stefan Mihaylov", posicoes: ["ATA"], forca: 80 },
      { id: 'dimitar-marashliev', nome: "Dimitar Marashliev", posicoes: ["PE"], forca: 82 },
      { id: 'ivan-kolev', nome: "Ivan Kolev", posicoes: ["MC"], forca: 81 },
      { id: 'georgi-velinov', nome: "Georgi Velinov", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1966 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Real Madrid",
    jogadores: [
      { id: 'betancort', nome: "Betancort", posicoes: ["GOL"], forca: 83 },
      { id: 'pachin', nome: "Pachín", posicoes: ["LD"], forca: 81 },
      { id: 'manuel-sanchis', nome: "Manuel Sanchís", posicoes: ["ZAG"], forca: 84 },
      { id: 'pedro-de-felipe', nome: "Pedro de Felipe", posicoes: ["ZAG"], forca: 83 },
      { id: 'zoco', nome: "Zoco", posicoes: ["LE"], forca: 84 },
      { id: 'pirri', nome: "Pirri", posicoes: ["MC"], forca: 87 },
      { id: 'velazquez', nome: "Velázquez", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'amancio', nome: "Amancio", posicoes: ["PD","MEI"], forca: 88 },
      { id: 'grosso', nome: "Grosso", posicoes: ["ATA"], forca: 84 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 88 },
      { id: 'serena', nome: "Serena", posicoes: ["ATA"], forca: 83 },
      { id: 'felix-ruiz', nome: "Félix Ruiz", posicoes: ["ATA"], forca: 81 },
      { id: 'ignacio-zoco', nome: "Ignacio Zoco", posicoes: ["MC"], forca: 84 },
      { id: 'aguero', nome: "Agüero", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Partizan",
    jogadores: [
      { id: 'milutin-soskic', nome: "Milutin Šoškić", posicoes: ["GOL"], forca: 86 },
      { id: 'fahrudin-jusufi', nome: "Fahrudin Jusufi", posicoes: ["LD"], forca: 86 },
      { id: 'velibor-vasovic', nome: "Velibor Vasović", posicoes: ["ZAG"], forca: 87 },
      { id: 'branko-rasovic', nome: "Branko Rašović", posicoes: ["ZAG"], forca: 82 },
      { id: 'ivan-curkovic', nome: "Ivan Ćurković", posicoes: ["LE"], forca: 80 },
      { id: 'radoslav-becejac', nome: "Radoslav Bečejac", posicoes: ["MC"], forca: 85 },
      { id: 'bora-milutinovic', nome: "Bora Milutinović", posicoes: ["MC"], forca: 82 },
      { id: 'vladica-kovacevic', nome: "Vladica Kovačević", posicoes: ["MEI"], forca: 84 },
      { id: 'josip-pirmajer', nome: "Josip Pirmajer", posicoes: ["PD"], forca: 83 },
      { id: 'mustafa-hasanagic', nome: "Mustafa Hasanagić", posicoes: ["ATA"], forca: 84 },
      { id: 'milan-galic', nome: "Milan Galić", posicoes: ["ATA"], forca: 87 },
      { id: 'zvezdan-cebinac', nome: "Zvezdan Čebinac", posicoes: ["PE"], forca: 82 },
      { id: 'bruno-belin', nome: "Bruno Belin", posicoes: ["MC"], forca: 79 },
      { id: 'vladimir-pejovic', nome: "Vladimir Pejović", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'giuliano-sarti', nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 86 },
      { id: 'tarcisio-burgnich', nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 87 },
      { id: 'giacinto-facchetti', nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 90 },
      { id: 'aristide-guarneri', nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 84 },
      { id: 'armando-picchi', nome: "Armando Picchi", posicoes: ["ZAG"], forca: 88 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MC"], forca: 89 },
      { id: 'gianfranco-bedin', nome: "Gianfranco Bedin", posicoes: ["MC"], forca: 82 },
      { id: 'jair-da-costa', nome: "Jair da Costa", posicoes: ["PD"], forca: 85 },
      { id: 'mario-corso', nome: "Mario Corso", posicoes: ["PE"], forca: 87 },
      { id: 'sandro-mazzola', nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 90 },
      { id: 'domenghini', nome: "Domenghini", posicoes: ["ATA"], forca: 82 },
      { id: 'joaquin-peiro', nome: "Joaquín Peiró", posicoes: ["ATA"], forca: 82 },
      { id: 'carlo-tagnin', nome: "Carlo Tagnin", posicoes: ["VOL"], forca: 80 },
      { id: 'malatrasi', nome: "Malatrasi", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Manchester United",
    jogadores: [
      { id: 'harry-gregg', nome: "Harry Gregg", posicoes: ["GOL"], forca: 82 },
      { id: 'shay-brennan', nome: "Shay Brennan", posicoes: ["LD"], forca: 82 },
      { id: 'tony-dunne', nome: "Tony Dunne", posicoes: ["LE"], forca: 83 },
      { id: 'bill-foulkes', nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 84 },
      { id: 'nobby-stiles', nome: "Nobby Stiles", posicoes: ["MC"], forca: 85 },
      { id: 'pat-crerand', nome: "Pat Crerand", posicoes: ["MC"], forca: 84 },
      { id: 'bobby-charlton', nome: "Bobby Charlton", posicoes: ["MEI"], forca: 91 },
      { id: 'denis-law', nome: "Denis Law", posicoes: ["ATA"], forca: 91 },
      { id: 'george-best', nome: "George Best", posicoes: ["PD","ATA"], forca: 89 },
      { id: 'david-herd', nome: "David Herd", posicoes: ["ATA"], forca: 84 },
      { id: 'john-connelly', nome: "John Connelly", posicoes: ["PE"], forca: 82 },
      { id: 'david-sadler', nome: "David Sadler", posicoes: ["MC"], forca: 80 },
      { id: 'dennis-viollet', nome: "Dennis Viollet", posicoes: ["ATA"], forca: 82 },
      { id: 'noel-cantwell', nome: "Noel Cantwell", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  // ===== Edição 1965 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'giuliano-sarti', nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 86 },
      { id: 'tarcisio-burgnich', nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 87 },
      { id: 'giacinto-facchetti', nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 90 },
      { id: 'aristide-guarneri', nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 84 },
      { id: 'armando-picchi', nome: "Armando Picchi", posicoes: ["ZAG"], forca: 88 },
      { id: 'gianfranco-bedin', nome: "Gianfranco Bedin", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MC"], forca: 90 },
      { id: 'jair-da-costa', nome: "Jair da Costa", posicoes: ["PD"], forca: 86 },
      { id: 'mario-corso', nome: "Mario Corso", posicoes: ["PE"], forca: 88 },
      { id: 'sandro-mazzola', nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 91 },
      { id: 'joaquin-peiro', nome: "Joaquín Peiró", posicoes: ["ATA"], forca: 83 },
      { id: 'domenghini', nome: "Domenghini", posicoes: ["ATA"], forca: 82 },
      { id: 'carlo-tagnin', nome: "Carlo Tagnin", posicoes: ["MC"], forca: 81 },
      { id: 'malatrasi', nome: "Malatrasi", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Benfica",
    jogadores: [
      { id: 'costa-pereira', nome: "Costa Pereira", posicoes: ["GOL"], forca: 84 },
      { id: 'angelo-martins', nome: "Ângelo Martins", posicoes: ["LD"], forca: 82 },
      { id: 'germano', nome: "Germano", posicoes: ["ZAG"], forca: 85 },
      { id: 'humberto-fernandes', nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 80 },
      { id: 'mario-coluna', nome: "Mário Coluna", posicoes: ["MC"], forca: 89 },
      { id: 'jaime-graca', nome: "Jaime Graça", posicoes: ["MC"], forca: 83 },
      { id: 'jose-augusto', nome: "José Augusto", posicoes: ["PD"], forca: 86 },
      { id: 'antonio-simoes', nome: "António Simões", posicoes: ["PE"], forca: 87 },
      { id: 'eusebio', nome: "Eusébio", posicoes: ["ATA"], forca: 95 },
      { id: 'jose-torres', nome: "José Torres", posicoes: ["ATA"], forca: 85 },
      { id: 'jose-augusto-torres', nome: "José Augusto Torres", posicoes: ["ATA"], forca: 84 },
      { id: 'cavem', nome: "Cavém", posicoes: ["VOL"], forca: 82 },
      { id: 'cruz', nome: "Cruz", posicoes: ["ZAG"], forca: 81 },
      { id: 'raul-aguas', nome: "Raúl Águas", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Liverpool",
    jogadores: [
      { id: 'tommy-lawrence', nome: "Tommy Lawrence", posicoes: ["GOL"], forca: 83 },
      { id: 'chris-lawler', nome: "Chris Lawler", posicoes: ["LD"], forca: 82 },
      { id: 'gerry-byrne', nome: "Gerry Byrne", posicoes: ["LE"], forca: 83 },
      { id: 'ron-yeats', nome: "Ron Yeats", posicoes: ["ZAG"], forca: 86 },
      { id: 'tommy-smith', nome: "Tommy Smith", posicoes: ["ZAG","MC"], forca: 84 },
      { id: 'willie-stevenson', nome: "Willie Stevenson", posicoes: ["MC"], forca: 82 },
      { id: 'gordon-milne', nome: "Gordon Milne", posicoes: ["MC"], forca: 82 },
      { id: 'ian-callaghan', nome: "Ian Callaghan", posicoes: ["PD","MC"], forca: 84 },
      { id: 'peter-thompson', nome: "Peter Thompson", posicoes: ["PE"], forca: 84 },
      { id: 'roger-hunt', nome: "Roger Hunt", posicoes: ["ATA"], forca: 87 },
      { id: 'ian-st-john', nome: "Ian St John", posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'alf-arrowsmith', nome: "Alf Arrowsmith", posicoes: ["ATA"], forca: 79 },
      { id: 'geoff-strong', nome: "Geoff Strong", posicoes: ["MC"], forca: 80 },
      { id: 'phil-ferns', nome: "Phil Ferns", posicoes: ["ZAG"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Győr",
    jogadores: [
      { id: 'tibor-toth', nome: "Tibor Tóth", posicoes: ["GOL"], forca: 79 },
      { id: 'lajos-keglovich', nome: "Lajos Keglovich", posicoes: ["ZAG"], forca: 80 },
      { id: 'erno-solymosi', nome: "Ernő Solymosi", posicoes: ["ZAG"], forca: 82 },
      { id: 'ferenc-orban', nome: "Ferenc Orbán", posicoes: ["LE"], forca: 78 },
      { id: 'karoly-palotai', nome: "Károly Palotai", posicoes: ["MC"], forca: 84 },
      { id: 'jozsef-varsanyi', nome: "József Varsányi", posicoes: ["MC"], forca: 80 },
      { id: 'tibor-farkas', nome: "Tibor Farkas", posicoes: ["MEI"], forca: 81 },
      { id: 'ferenc-povazsai', nome: "Ferenc Povázsai", posicoes: ["ATA"], forca: 80 },
      { id: 'kalman-meszoly', nome: "Kálmán Mészöly", posicoes: ["ATA"], forca: 81 },
      { id: 'jozsef-somogyi', nome: "József Somogyi", posicoes: ["PE"], forca: 78 },
      { id: 'istvan-korsos', nome: "István Korsós", posicoes: ["MC"], forca: 77 },
      { id: 'antal-szentmihalyi', nome: "Antal Szentmihályi", posicoes: ["ZAG"], forca: 76 }
    ]
  },

  // ===== Edição 1964 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'giuliano-sarti', nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 86 },
      { id: 'tarcisio-burgnich', nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 86 },
      { id: 'giacinto-facchetti', nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 89 },
      { id: 'aristide-guarneri', nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 84 },
      { id: 'armando-picchi', nome: "Armando Picchi", posicoes: ["ZAG"], forca: 88 },
      { id: 'carlo-tagnin', nome: "Carlo Tagnin", posicoes: ["VOL"], forca: 82 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MEI"], forca: 90 },
      { id: 'jair-da-costa', nome: "Jair da Costa", posicoes: ["PD"], forca: 86 },
      { id: 'mario-corso', nome: "Mario Corso", posicoes: ["PE"], forca: 88 },
      { id: 'sandro-mazzola', nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 90 },
      { id: 'aurelio-milani', nome: "Aurelio Milani", posicoes: ["ATA"], forca: 83 },
      { id: 'joaquin-peiro', nome: "Joaquín Peiró", posicoes: ["ATA"], forca: 82 },
      { id: 'gianfranco-bedin', nome: "Gianfranco Bedin", posicoes: ["MC"], forca: 80 },
      { id: 'mario-frustalupi', nome: "Mario Frustalupi", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Real Madrid",
    jogadores: [
      { id: 'vicente-araquistain', nome: "Vicente Araquistáin", posicoes: ["GOL"], forca: 82 },
      { id: 'pachin', nome: "Pachín", posicoes: ["LD"], forca: 81 },
      { id: 'jose-santamaria', nome: "José Santamaría", posicoes: ["ZAG"], forca: 86 },
      { id: 'miera', nome: "Miera", posicoes: ["LE"], forca: 80 },
      { id: 'zoco', nome: "Zoco", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'felo', nome: "Felo", posicoes: ["MC"], forca: 80 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'ferenc-puskas', nome: "Ferenc Puskás", posicoes: ["ATA"], forca: 92 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 89 },
      { id: 'amancio', nome: "Amancio", posicoes: ["PD","MEI"], forca: 86 },
      { id: 'felix-ruiz', nome: "Félix Ruiz", posicoes: ["ATA"], forca: 81 },
      { id: 'serena', nome: "Serena", posicoes: ["ATA"], forca: 80 },
      { id: 'jose-maria-vidal', nome: "José María Vidal", posicoes: ["MC"], forca: 78 },
      { id: 'isidro', nome: "Isidro", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Borussia Dortmund",
    jogadores: [
      { id: 'hans-tilkowski', nome: "Hans Tilkowski", posicoes: ["GOL"], forca: 86 },
      { id: 'wolfgang-paul', nome: "Wolfgang Paul", posicoes: ["ZAG"], forca: 83 },
      { id: 'wilhelm-burgsmuller', nome: "Wilhelm Burgsmüller", posicoes: ["ZAG"], forca: 81 },
      { id: 'lothar-geisler', nome: "Lothar Geisler", posicoes: ["LD"], forca: 79 },
      { id: 'aki-schmidt', nome: "Aki Schmidt", posicoes: ["MC"], forca: 84 },
      { id: 'helmut-bracht', nome: "Helmut Bracht", posicoes: ["MC"], forca: 80 },
      { id: 'timo-konietzka', nome: "Timo Konietzka", posicoes: ["MEI"], forca: 85 },
      { id: 'lothar-emmerich', nome: "Lothar Emmerich", posicoes: ["PE"], forca: 87 },
      { id: 'friedhelm-konietzka', nome: "Friedhelm Konietzka", posicoes: ["ATA"], forca: 84 },
      { id: 'reinhold-wosab', nome: "Reinhold Wosab", posicoes: ["PD"], forca: 82 },
      { id: 'franz-brungs', nome: "Franz Brungs", posicoes: ["ATA"], forca: 82 },
      { id: 'wilhelm-sturm', nome: "Wilhelm Sturm", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Zürich",
    jogadores: [
      { id: 'karl-grob', nome: "Karl Grob", posicoes: ["GOL"], forca: 82 },
      { id: 'kobi-kuhn', nome: "Köbi Kuhn", posicoes: ["ZAG"], forca: 83 },
      { id: 'werner-leimgruber', nome: "Werner Leimgruber", posicoes: ["ZAG"], forca: 81 },
      { id: 'rene-botteron', nome: "René Botteron", posicoes: ["LD"], forca: 80 },
      { id: 'jakob-kuhn', nome: "Jakob Kuhn", posicoes: ["MC"], forca: 83 },
      { id: 'fritz-kunzli', nome: "Fritz Künzli", posicoes: ["MC"], forca: 82 },
      { id: 'kurt-jara', nome: "Kurt Jara", posicoes: ["MEI"], forca: 81 },
      { id: 'ernst-meyer', nome: "Ernst Meyer", posicoes: ["ATA"], forca: 80 },
      { id: 'roger-vonlanthen', nome: "Roger Vonlanthen", posicoes: ["ATA"], forca: 79 },
      { id: 'rudolf-kunzli', nome: "Rudolf Künzli", posicoes: ["PE"], forca: 78 },
      { id: 'walter-muller', nome: "Walter Müller", posicoes: ["MC"], forca: 76 },
      { id: 'ruedi-elsener', nome: "Ruedi Elsener", posicoes: ["ZAG"], forca: 76 }
    ]
  },

  // ===== Edição 1963 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Milan",
    jogadores: [
      { id: 'giorgio-ghezzi', nome: "Giorgio Ghezzi", posicoes: ["GOL"], forca: 84 },
      { id: 'mario-david', nome: "Mario David", posicoes: ["LD"], forca: 82 },
      { id: 'cesare-maldini', nome: "Cesare Maldini", posicoes: ["ZAG"], forca: 87 },
      { id: 'luigi-radice', nome: "Luigi Radice", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-mora', nome: "Bruno Mora", posicoes: ["LE"], forca: 82 },
      { id: 'giovanni-trapattoni', nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 84 },
      { id: 'giovanni-lodetti', nome: "Giovanni Lodetti", posicoes: ["MC"], forca: 81 },
      { id: 'gianni-rivera', nome: "Gianni Rivera", posicoes: ["MEI"], forca: 90 },
      { id: 'dino-sani', nome: "Dino Sani", posicoes: ["PD"], forca: 84 },
      { id: 'jose-altafini', nome: "José Altafini", posicoes: ["ATA"], forca: 91 },
      { id: 'paolo-barison', nome: "Paolo Barison", posicoes: ["ATA"], forca: 83 },
      { id: 'gino-pivatelli', nome: "Gino Pivatelli", posicoes: ["ATA"], forca: 80 },
      { id: 'mario-trebbi', nome: "Mario Trebbi", posicoes: ["ZAG"], forca: 78 },
      { id: 'nereo-benetti', nome: "Nereo Benetti", posicoes: ["MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Benfica",
    jogadores: [
      { id: 'costa-pereira', nome: "Costa Pereira", posicoes: ["GOL"], forca: 85 },
      { id: 'angelo-martins', nome: "Ângelo Martins", posicoes: ["LD"], forca: 82 },
      { id: 'germano', nome: "Germano", posicoes: ["ZAG"], forca: 85 },
      { id: 'cruz', nome: "Cruz", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'mario-coluna', nome: "Mário Coluna", posicoes: ["MC"], forca: 90 },
      { id: 'jaime-graca', nome: "Jaime Graça", posicoes: ["MC"], forca: 82 },
      { id: 'jose-augusto', nome: "José Augusto", posicoes: ["PD"], forca: 86 },
      { id: 'antonio-simoes', nome: "António Simões", posicoes: ["PE"], forca: 87 },
      { id: 'eusebio', nome: "Eusébio", posicoes: ["ATA"], forca: 94 },
      { id: 'jose-torres', nome: "José Torres", posicoes: ["ATA"], forca: 84 },
      { id: 'jose-aguas', nome: "José Águas", posicoes: ["ATA"], forca: 84 },
      { id: 'cavem', nome: "Cavém", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'humberto-fernandes', nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 79 },
      { id: 'jose-neto', nome: "José Neto", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Dundee",
    jogadores: [
      { id: 'bill-brown', nome: "Bill Brown", posicoes: ["GOL"], forca: 82 },
      { id: 'alex-hamilton', nome: "Alex Hamilton", posicoes: ["LD"], forca: 81 },
      { id: 'ian-ure', nome: "Ian Ure", posicoes: ["ZAG"], forca: 84 },
      { id: 'bobby-cox', nome: "Bobby Cox", posicoes: ["ZAG"], forca: 82 },
      { id: 'doug-cowan', nome: "Doug Cowan", posicoes: ["LE"], forca: 80 },
      { id: 'andy-penman', nome: "Andy Penman", posicoes: ["MC"], forca: 83 },
      { id: 'hugh-robertson', nome: "Hugh Robertson", posicoes: ["MC"], forca: 82 },
      { id: 'gordon-smith', nome: "Gordon Smith", posicoes: ["PD"], forca: 82 },
      { id: 'alan-gilzean', nome: "Alan Gilzean", posicoes: ["ATA"], forca: 86 },
      { id: 'bobby-wishart', nome: "Bobby Wishart", posicoes: ["ATA"], forca: 81 },
      { id: 'alan-cousin', nome: "Alan Cousin", posicoes: ["PE"], forca: 80 },
      { id: 'bert-slater', nome: "Bert Slater", posicoes: ["MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Feyenoord",
    jogadores: [
      { id: 'eddy-pieters-graafland', nome: "Eddy Pieters Graafland", posicoes: ["GOL"], forca: 84 },
      { id: 'rinus-israel', nome: "Rinus Israël", posicoes: ["ZAG"], forca: 85 },
      { id: 'hans-kraay', nome: "Hans Kraay", posicoes: ["ZAG"], forca: 81 },
      { id: 'cor-veldhoen', nome: "Cor Veldhoen", posicoes: ["LE"], forca: 81 },
      { id: 'henk-schouten', nome: "Henk Schouten", posicoes: ["MC"], forca: 83 },
      { id: 'bennaars', nome: "Bennaars", posicoes: ["MC"], forca: 80 },
      { id: 'coen-moulijn', nome: "Coen Moulijn", posicoes: ["PE"], forca: 88 },
      { id: 'cor-van-der-gijp', nome: "Cor van der Gijp", posicoes: ["ATA"], forca: 84 },
      { id: 'piet-kruiver', nome: "Piet Kruiver", posicoes: ["ATA"], forca: 83 },
      { id: 'henk-groot', nome: "Henk Groot", posicoes: ["PD"], forca: 82 },
      { id: 'frans-bouwmeester', nome: "Frans Bouwmeester", posicoes: ["MC"], forca: 79 },
      { id: 'aad-bak', nome: "Aad Bak", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  // ===== Edição 1962 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Benfica",
    jogadores: [
      { id: 'costa-pereira', nome: "Costa Pereira", posicoes: ["GOL"], forca: 85 },
      { id: 'angelo-martins', nome: "Ângelo Martins", posicoes: ["LD"], forca: 82 },
      { id: 'germano', nome: "Germano", posicoes: ["ZAG"], forca: 85 },
      { id: 'cruz', nome: "Cruz", posicoes: ["LE","ZAG"], forca: 82 },
      { id: 'mario-coluna', nome: "Mário Coluna", posicoes: ["MC"], forca: 90 },
      { id: 'jaime-graca', nome: "Jaime Graça", posicoes: ["MC"], forca: 82 },
      { id: 'cavem', nome: "Cavém", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'jose-augusto', nome: "José Augusto", posicoes: ["PD"], forca: 86 },
      { id: 'antonio-simoes', nome: "António Simões", posicoes: ["PE"], forca: 86 },
      { id: 'jose-aguas', nome: "José Águas", posicoes: ["ATA"], forca: 87 },
      { id: 'eusebio', nome: "Eusébio", posicoes: ["ATA"], forca: 94 },
      { id: 'domiciano-cavem', nome: "Domiciano Cavém", posicoes: ["ATA"], forca: 82 },
      { id: 'humberto-fernandes', nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 79 },
      { id: 'jose-neto', nome: "José Neto", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Real Madrid",
    jogadores: [
      { id: 'vicente-araquistain', nome: "Vicente Araquistáin", posicoes: ["GOL"], forca: 83 },
      { id: 'isidro', nome: "Isidro", posicoes: ["LD"], forca: 80 },
      { id: 'jose-santamaria', nome: "José Santamaría", posicoes: ["ZAG"], forca: 87 },
      { id: 'pachin', nome: "Pachín", posicoes: ["LE"], forca: 80 },
      { id: 'jose-maria-zarraga', nome: "José María Zárraga", posicoes: ["MC"], forca: 84 },
      { id: 'luis-del-sol', nome: "Luis del Sol", posicoes: ["MC"], forca: 86 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["MEI","ATA"], forca: 94 },
      { id: 'ferenc-puskas', nome: "Ferenc Puskás", posicoes: ["ATA"], forca: 95 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 90 },
      { id: 'canario', nome: "Canário", posicoes: ["ATA"], forca: 82 },
      { id: 'felo', nome: "Felo", posicoes: ["ATA"], forca: 80 },
      { id: 'amancio', nome: "Amancio", posicoes: ["PD"], forca: 82 },
      { id: 'antonio-ruiz', nome: "Antonio Ruiz", posicoes: ["MC"], forca: 78 },
      { id: 'miera', nome: "Miera", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Tottenham",
    jogadores: [
      { id: 'bill-brown', nome: "Bill Brown", posicoes: ["GOL"], forca: 84 },
      { id: 'peter-baker', nome: "Peter Baker", posicoes: ["LD"], forca: 82 },
      { id: 'ron-henry', nome: "Ron Henry", posicoes: ["LE"], forca: 82 },
      { id: 'maurice-norman', nome: "Maurice Norman", posicoes: ["ZAG"], forca: 84 },
      { id: 'danny-blanchflower', nome: "Danny Blanchflower", posicoes: ["MC"], forca: 89 },
      { id: 'dave-mackay', nome: "Dave Mackay", posicoes: ["MC"], forca: 88 },
      { id: 'john-white', nome: "John White", posicoes: ["MEI"], forca: 86 },
      { id: 'cliff-jones', nome: "Cliff Jones", posicoes: ["PE"], forca: 86 },
      { id: 'bobby-smith', nome: "Bobby Smith", posicoes: ["ATA"], forca: 86 },
      { id: 'jimmy-greaves', nome: "Jimmy Greaves", posicoes: ["ATA"], forca: 90 },
      { id: 'terry-dyson', nome: "Terry Dyson", posicoes: ["ATA","ME"], forca: 82 },
      { id: 'les-allen', nome: "Les Allen", posicoes: ["ATA"], forca: 81 },
      { id: 'tony-marchi', nome: "Tony Marchi", posicoes: ["MC"], forca: 80 },
      { id: 'mel-hopkins', nome: "Mel Hopkins", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Standard Liège",
    jogadores: [
      { id: 'jean-nicolay', nome: "Jean Nicolay", posicoes: ["GOL"], forca: 85 },
      { id: 'henri-thellin', nome: "Henri Thellin", posicoes: ["ZAG"], forca: 82 },
      { id: 'jean-thissen', nome: "Jean Thissen", posicoes: ["ZAG"], forca: 82 },
      { id: 'louis-pilot', nome: "Louis Pilot", posicoes: ["LE"], forca: 81 },
      { id: 'paul-bonga-bonga', nome: "Paul Bonga Bonga", posicoes: ["MC"], forca: 83 },
      { id: 'roger-claessen', nome: "Roger Claessen", posicoes: ["MC"], forca: 83 },
      { id: 'leon-semmeling', nome: "Léon Semmeling", posicoes: ["MEI"], forca: 84 },
      { id: 'jean-jadot', nome: "Jean Jadot", posicoes: ["ATA"], forca: 79 },
      { id: 'jacques-beurlet', nome: "Jacques Beurlet", posicoes: ["PE"], forca: 79 },
      { id: 'rene-hauss', nome: "René Hauss", posicoes: ["MC"], forca: 80 },
      { id: 'marcel-paeschen', nome: "Marcel Paeschen", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1961 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Benfica",
    jogadores: [
      { id: 'costa-pereira', nome: "Costa Pereira", posicoes: ["GOL"], forca: 85 },
      { id: 'angelo-martins', nome: "Ângelo Martins", posicoes: ["LD"], forca: 82 },
      { id: 'germano', nome: "Germano", posicoes: ["ZAG"], forca: 85 },
      { id: 'mario-joao', nome: "Mário João", posicoes: ["LE","ZAG"], forca: 81 },
      { id: 'cavem', nome: "Cavém", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'mario-coluna', nome: "Mário Coluna", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'jose-neto', nome: "José Neto", posicoes: ["MC"], forca: 80 },
      { id: 'jose-augusto', nome: "José Augusto", posicoes: ["PD"], forca: 86 },
      { id: 'jose-aguas', nome: "José Águas", posicoes: ["ATA"], forca: 88 },
      { id: 'santana', nome: "Santana", posicoes: ["PE"], forca: 82 },
      { id: 'eusebio', nome: "Eusébio", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'domiciano-cavem', nome: "Domiciano Cavém", posicoes: ["ATA"], forca: 83 },
      { id: 'artur-santos', nome: "Artur Santos", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Barcelona",
    jogadores: [
      { id: 'antoni-ramallets', nome: "Antoni Ramallets", posicoes: ["GOL"], forca: 85 },
      { id: 'ferran-olivella', nome: "Ferrán Olivella", posicoes: ["LD"], forca: 83 },
      { id: 'sigfrid-gracia', nome: "Sigfrid Gràcia", posicoes: ["ZAG"], forca: 81 },
      { id: 'joan-segarra', nome: "Joan Segarra", posicoes: ["LE"], forca: 84 },
      { id: 'enric-gensana', nome: "Enric Gensana", posicoes: ["MC"], forca: 82 },
      { id: 'marti-verges', nome: "Martí Vergés", posicoes: ["MC"], forca: 82 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MEI"], forca: 91 },
      { id: 'laszlo-kubala', nome: "László Kubala", posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'evaristo', nome: "Evaristo", posicoes: ["ATA"], forca: 86 },
      { id: 'sandor-kocsis', nome: "Sándor Kocsis", posicoes: ["ATA"], forca: 87 },
      { id: 'zoltan-czibor', nome: "Zoltán Czibor", posicoes: ["PE"], forca: 86 },
      { id: 'justo-tejada', nome: "Justo Tejada", posicoes: ["PD"], forca: 82 },
      { id: 'eulogio-martinez', nome: "Eulogio Martínez", posicoes: ["ATA"], forca: 81 },
      { id: 'jesus-garay', nome: "Jesús Garay", posicoes: ["ZAG"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Rapid Wien",
    jogadores: [
      { id: 'walter-zeman', nome: "Walter Zeman", posicoes: ["GOL"], forca: 85 },
      { id: 'ernst-happel', nome: "Ernst Happel", posicoes: ["ZAG"], forca: 87 },
      { id: 'gerhard-hanappi', nome: "Gerhard Hanappi", posicoes: ["ZAG","MC"], forca: 87 },
      { id: 'karl-stotz', nome: "Karl Stotz", posicoes: ["LE"], forca: 81 },
      { id: 'robert-korner', nome: "Robert Körner", posicoes: ["MC"], forca: 82 },
      { id: 'bruno-mehsarosch', nome: "Bruno Mehsarosch", posicoes: ["MC"], forca: 80 },
      { id: 'alfred-korner', nome: "Alfred Körner", posicoes: ["PD"], forca: 85 },
      { id: 'robert-dienst', nome: "Robert Dienst", posicoes: ["ATA"], forca: 86 },
      { id: 'rudolf-flogel', nome: "Rudolf Flögel", posicoes: ["ATA"], forca: 82 },
      { id: 'erich-probst', nome: "Erich Probst", posicoes: ["PE"], forca: 82 },
      { id: 'walter-skocik', nome: "Walter Skocik", posicoes: ["MC"], forca: 78 },
      { id: 'josef-bertalan', nome: "Josef Bertalan", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Hamburg",
    jogadores: [
      { id: 'horst-schnoor', nome: "Horst Schnoor", posicoes: ["GOL"], forca: 82 },
      { id: 'jurgen-werner', nome: "Jürgen Werner", posicoes: ["ZAG"], forca: 83 },
      { id: 'jochen-meinke', nome: "Jochen Meinke", posicoes: ["ZAG"], forca: 81 },
      { id: 'gerd-krug', nome: "Gerd Krug", posicoes: ["LE"], forca: 78 },
      { id: 'dieter-seeler', nome: "Dieter Seeler", posicoes: ["MC"], forca: 82 },
      { id: 'klaus-sturmer', nome: "Klaus Stürmer", posicoes: ["MC"], forca: 83 },
      { id: 'gert-dorfel', nome: "Gert Dörfel", posicoes: ["ME"], forca: 84 },
      { id: 'uwe-seeler', nome: "Uwe Seeler", posicoes: ["ATA"], forca: 91 },
      { id: 'charly-dorfel', nome: "Charly Dörfel", posicoes: ["ATA"], forca: 84 },
      { id: 'peter-wulf', nome: "Peter Wulf", posicoes: ["ATA"], forca: 79 },
      { id: 'horst-dehn', nome: "Horst Dehn", posicoes: ["MC"], forca: 78 },
      { id: 'gerhard-krug', nome: "Gerhard Krug", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1960 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Real Madrid",
    jogadores: [
      { id: 'rogelio-dominguez', nome: "Rogelio Domínguez", posicoes: ["GOL"], forca: 84 },
      { id: 'marquitos', nome: "Marquitos", posicoes: ["ZAG"], forca: 82 },
      { id: 'jose-santamaria', nome: "José Santamaría", posicoes: ["ZAG"], forca: 88 },
      { id: 'rafael-lesmes', nome: "Rafael Lesmes", posicoes: ["LE"], forca: 81 },
      { id: 'jose-maria-zarraga', nome: "José María Zárraga", posicoes: ["MC"], forca: 85 },
      { id: 'luis-del-sol', nome: "Luis del Sol", posicoes: ["MC"], forca: 86 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["MEI","ATA"], forca: 96 },
      { id: 'ferenc-puskas', nome: "Ferenc Puskás", posicoes: ["ATA"], forca: 96 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 90 },
      { id: 'hector-rial', nome: "Héctor Rial", posicoes: ["ATA"], forca: 84 },
      { id: 'canario', nome: "Canário", posicoes: ["ATA"], forca: 82 },
      { id: 'joseito', nome: "Joseíto", posicoes: ["PD","ATA"], forca: 80 },
      { id: 'pachin', nome: "Pachín", posicoes: ["MC"], forca: 78 },
      { id: 'enrique-mateos', nome: "Enrique Mateos", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Eintracht Frankfurt",
    jogadores: [
      { id: 'egon-loy', nome: "Egon Loy", posicoes: ["GOL"], forca: 83 },
      { id: 'friedel-lutz', nome: "Friedel Lutz", posicoes: ["LD"], forca: 82 },
      { id: 'hermann-hofer', nome: "Hermann Höfer", posicoes: ["ZAG"], forca: 81 },
      { id: 'hans-weilbacher', nome: "Hans Weilbächer", posicoes: ["LE"], forca: 80 },
      { id: 'dieter-stinka', nome: "Dieter Stinka", posicoes: ["MC"], forca: 84 },
      { id: 'alfred-pfaff', nome: "Alfred Pfaff", posicoes: ["MEI"], forca: 88 },
      { id: 'richard-kre', nome: "Richard Kreß", posicoes: ["PD"], forca: 84 },
      { id: 'erwin-stein', nome: "Erwin Stein", posicoes: ["ATA"], forca: 86 },
      { id: 'eckehard-feigenspan', nome: "Eckehard Feigenspan", posicoes: ["ATA"], forca: 84 },
      { id: 'dieter-lindner', nome: "Dieter Lindner", posicoes: ["PE"], forca: 82 },
      { id: 'erich-meier', nome: "Erich Meier", posicoes: ["MC"], forca: 80 },
      { id: 'fritz-schlebrowski', nome: "Fritz Schlebrowski", posicoes: ["ZAG"], forca: 77 },
      { id: 'walter-bechtold', nome: "Walter Bechtold", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Barcelona",
    jogadores: [
      { id: 'antoni-ramallets', nome: "Antoni Ramallets", posicoes: ["GOL"], forca: 86 },
      { id: 'ferran-olivella', nome: "Ferrán Olivella", posicoes: ["LD"], forca: 83 },
      { id: 'sigfrid-gracia', nome: "Sigfrid Gràcia", posicoes: ["ZAG"], forca: 81 },
      { id: 'joan-segarra', nome: "Joan Segarra", posicoes: ["LE"], forca: 85 },
      { id: 'marti-verges', nome: "Martí Vergés", posicoes: ["MC"], forca: 82 },
      { id: 'enric-gensana', nome: "Enric Gensana", posicoes: ["MC"], forca: 82 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["MEI"], forca: 91 },
      { id: 'laszlo-kubala', nome: "László Kubala", posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'evaristo', nome: "Evaristo", posicoes: ["ATA"], forca: 86 },
      { id: 'sandor-kocsis', nome: "Sándor Kocsis", posicoes: ["ATA"], forca: 87 },
      { id: 'zoltan-czibor', nome: "Zoltán Czibor", posicoes: ["PE"], forca: 87 },
      { id: 'justo-tejada', nome: "Justo Tejada", posicoes: ["PD"], forca: 82 },
      { id: 'eulogio-martinez', nome: "Eulogio Martínez", posicoes: ["ATA"], forca: 82 },
      { id: 'luis-coll', nome: "Luis Coll", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Rangers",
    jogadores: [
      { id: 'billy-ritchie', nome: "Billy Ritchie", posicoes: ["GOL"], forca: 82 },
      { id: 'bobby-shearer', nome: "Bobby Shearer", posicoes: ["LD"], forca: 82 },
      { id: 'eric-caldow', nome: "Eric Caldow", posicoes: ["LE"], forca: 85 },
      { id: 'harold-davis', nome: "Harold Davis", posicoes: ["ZAG"], forca: 81 },
      { id: 'ian-mccoll', nome: "Ian McColl", posicoes: ["MC"], forca: 82 },
      { id: 'ian-mcmillan', nome: "Ian McMillan", posicoes: ["MC"], forca: 84 },
      { id: 'alex-scott', nome: "Alex Scott", posicoes: ["PD"], forca: 83 },
      { id: 'davie-wilson', nome: "Davie Wilson", posicoes: ["PE"], forca: 83 },
      { id: 'ralph-brand', nome: "Ralph Brand", posicoes: ["ATA"], forca: 85 },
      { id: 'max-murray', nome: "Max Murray", posicoes: ["ATA"], forca: 82 },
      { id: 'jimmy-millar', nome: "Jimmy Millar", posicoes: ["ATA"], forca: 83 },
      { id: 'davie-provan', nome: "Davie Provan", posicoes: ["MC"], forca: 80 },
      { id: 'george-niven', nome: "George Niven", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1959 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Real Madrid",
    jogadores: [
      { id: 'juan-alonso', nome: "Juan Alonso", posicoes: ["GOL"], forca: 84 },
      { id: 'marquitos', nome: "Marquitos", posicoes: ["ZAG"], forca: 83 },
      { id: 'jose-santamaria', nome: "José Santamaría", posicoes: ["ZAG"], forca: 88 },
      { id: 'rafael-lesmes', nome: "Rafael Lesmes", posicoes: ["LE"], forca: 81 },
      { id: 'jose-maria-zarraga', nome: "José María Zárraga", posicoes: ["MC"], forca: 85 },
      { id: 'miguel-munoz', nome: "Miguel Muñoz", posicoes: ["MC"], forca: 85 },
      { id: 'raymond-kopa', nome: "Raymond Kopa", posicoes: ["MEI"], forca: 90 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 96 },
      { id: 'hector-rial', nome: "Héctor Rial", posicoes: ["ATA"], forca: 86 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 90 },
      { id: 'enrique-mateos', nome: "Enrique Mateos", posicoes: ["ATA"], forca: 81 },
      { id: 'joseito', nome: "Joseíto", posicoes: ["PD","ATA"], forca: 80 },
      { id: 'juan-santisteban', nome: "Juan Santisteban", posicoes: ["MC"], forca: 78 },
      { id: 'jose-maria-vidal', nome: "José María Vidal", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Stade de Reims",
    jogadores: [
      { id: 'dominique-colonna', nome: "Dominique Colonna", posicoes: ["GOL"], forca: 84 },
      { id: 'robert-jonquet', nome: "Robert Jonquet", posicoes: ["ZAG"], forca: 86 },
      { id: 'roger-marche', nome: "Roger Marche", posicoes: ["LE"], forca: 84 },
      { id: 'robert-siatka', nome: "Robert Siatka", posicoes: ["ZAG"], forca: 80 },
      { id: 'armand-penverne', nome: "Armand Penverne", posicoes: ["MC"], forca: 84 },
      { id: 'michel-leblond', nome: "Michel Leblond", posicoes: ["MC"], forca: 82 },
      { id: 'roger-piantoni', nome: "Roger Piantoni", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'just-fontaine', nome: "Just Fontaine", posicoes: ["ATA"], forca: 91 },
      { id: 'jean-vincent', nome: "Jean Vincent", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'rene-bliard', nome: "René Bliard", posicoes: ["ATA"], forca: 83 },
      { id: 'michel-hidalgo', nome: "Michel Hidalgo", posicoes: ["ME"], forca: 80 },
      { id: 'jean-wendling', nome: "Jean Wendling", posicoes: ["MC"], forca: 79 },
      { id: 'leon-glovacki', nome: "Léon Glovacki", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'miguel-reina', nome: "Miguel Reina", posicoes: ["GOL"], forca: 80 },
      { id: 'feliciano-rivilla', nome: "Feliciano Rivilla", posicoes: ["ZAG"], forca: 82 },
      { id: 'jorge-griffa', nome: "Jorge Griffa", posicoes: ["ZAG"], forca: 84 },
      { id: 'isacio-calleja', nome: "Isacio Calleja", posicoes: ["LE"], forca: 81 },
      { id: 'adelardo-rodriguez', nome: "Adelardo Rodríguez", posicoes: ["MC"], forca: 82 },
      { id: 'jose-luis-capon', nome: "José Luis Capón", posicoes: ["MC"], forca: 78 },
      { id: 'joaquin-peiro', nome: "Joaquín Peiró", posicoes: ["PD"], forca: 86 },
      { id: 'enrique-collar', nome: "Enrique Collar", posicoes: ["PE"], forca: 86 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["ATA"], forca: 83 },
      { id: 'miguel-jones', nome: "Miguel Jones", posicoes: ["ATA"], forca: 80 },
      { id: 'chuzo', nome: "Chuzo", posicoes: ["MC"], forca: 77 },
      { id: 'verde', nome: "Verde", posicoes: ["ZAG"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Young Boys",
    jogadores: [
      { id: 'walter-eich', nome: "Walter Eich", posicoes: ["GOL"], forca: 82 },
      { id: 'heinz-bigler', nome: "Heinz Bigler", posicoes: ["ZAG"], forca: 80 },
      { id: 'eugen-meier', nome: "Eugen Meier", posicoes: ["ZAG"], forca: 81 },
      { id: 'willy-schneider', nome: "Willy Schneider", posicoes: ["LE"], forca: 78 },
      { id: 'kurt-linder', nome: "Kurt Linder", posicoes: ["MC"], forca: 82 },
      { id: 'ernst-wechselberger', nome: "Ernst Wechselberger", posicoes: ["MC"], forca: 81 },
      { id: 'geni-meier', nome: "Geni Meier", posicoes: ["ATA"], forca: 83 },
      { id: 'hanspeter-kunzler', nome: "Hanspeter Künzler", posicoes: ["ATA"], forca: 78 },
      { id: 'albert-brulls', nome: "Albert Brülls", posicoes: ["ME"], forca: 77 },
      { id: 'roland-allemann', nome: "Roland Allemann", posicoes: ["MC"], forca: 76 },
      { id: 'hans-hertig', nome: "Hans Hertig", posicoes: ["ZAG"], forca: 75 }
    ]
  },

  // ===== Edição 1958 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Real Madrid",
    jogadores: [
      { id: 'juan-alonso', nome: "Juan Alonso", posicoes: ["GOL"], forca: 84 },
      { id: 'marquitos', nome: "Marquitos", posicoes: ["ZAG"], forca: 83 },
      { id: 'jose-santamaria', nome: "José Santamaría", posicoes: ["ZAG"], forca: 88 },
      { id: 'rafael-lesmes', nome: "Rafael Lesmes", posicoes: ["LE"], forca: 81 },
      { id: 'miguel-munoz', nome: "Miguel Muñoz", posicoes: ["MC"], forca: 86 },
      { id: 'jose-maria-zarraga', nome: "José María Zárraga", posicoes: ["MC"], forca: 85 },
      { id: 'raymond-kopa', nome: "Raymond Kopa", posicoes: ["MEI"], forca: 91 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 96 },
      { id: 'hector-rial', nome: "Héctor Rial", posicoes: ["ATA"], forca: 87 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 89 },
      { id: 'enrique-mateos', nome: "Enrique Mateos", posicoes: ["ATA"], forca: 80 },
      { id: 'joseito', nome: "Joseíto", posicoes: ["PD","ATA"], forca: 81 },
      { id: 'juan-santisteban', nome: "Juan Santisteban", posicoes: ["MC"], forca: 78 },
      { id: 'jose-maria-vidal', nome: "José María Vidal", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Milan",
    jogadores: [
      { id: 'lorenzo-buffon', nome: "Lorenzo Buffon", posicoes: ["GOL"], forca: 86 },
      { id: 'cesare-maldini', nome: "Cesare Maldini", posicoes: ["ZAG"], forca: 86 },
      { id: 'francesco-zagatti', nome: "Francesco Zagatti", posicoes: ["ZAG"], forca: 80 },
      { id: 'silvano-fontana', nome: "Silvano Fontana", posicoes: ["LE"], forca: 78 },
      { id: 'giovanni-trapattoni', nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 80 },
      { id: 'nils-liedholm', nome: "Nils Liedholm", posicoes: ["MC","MEI"], forca: 89 },
      { id: 'juan-alberto-schiaffino', nome: "Juan Alberto Schiaffino", posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'gastone-bean', nome: "Gastone Bean", posicoes: ["ATA"], forca: 82 },
      { id: 'ernesto-grillo', nome: "Ernesto Grillo", posicoes: ["ATA"], forca: 82 },
      { id: 'giorgio-dal-monte', nome: "Giorgio Dal Monte", posicoes: ["ATA"], forca: 80 },
      { id: 'gino-pivatelli', nome: "Gino Pivatelli", posicoes: ["ATA"], forca: 81 },
      { id: 'eros-beraldo', nome: "Eros Beraldo", posicoes: ["MC"], forca: 78 },
      { id: 'luigi-radice', nome: "Luigi Radice", posicoes: ["PE"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Manchester United",
    jogadores: [
      { id: 'harry-gregg', nome: "Harry Gregg", posicoes: ["GOL"], forca: 83 },
      { id: 'bill-foulkes', nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 84 },
      { id: 'roger-byrne', nome: "Roger Byrne", posicoes: ["LE"], forca: 86 },
      { id: 'mark-jones', nome: "Mark Jones", posicoes: ["ZAG"], forca: 81 },
      { id: 'duncan-edwards', nome: "Duncan Edwards", posicoes: ["MC"], forca: 91 },
      { id: 'eddie-colman', nome: "Eddie Colman", posicoes: ["MC"], forca: 84 },
      { id: 'david-pegg', nome: "David Pegg", posicoes: ["PE"], forca: 83 },
      { id: 'bobby-charlton', nome: "Bobby Charlton", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'tommy-taylor', nome: "Tommy Taylor", posicoes: ["ATA"], forca: 88 },
      { id: 'dennis-viollet', nome: "Dennis Viollet", posicoes: ["ATA"], forca: 84 },
      { id: 'alex-dawson', nome: "Alex Dawson", posicoes: ["ATA"], forca: 80 },
      { id: 'stan-crowther', nome: "Stan Crowther", posicoes: ["MC"], forca: 78 },
      { id: 'johnny-berry', nome: "Johnny Berry", posicoes: ["PD"], forca: 82 },
      { id: 'ian-greaves', nome: "Ian Greaves", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Vasas",
    jogadores: [
      { id: 'gyula-grosics', nome: "Gyula Grosics", posicoes: ["GOL"], forca: 88 },
      { id: 'lajos-berendi', nome: "Lajos Berendi", posicoes: ["ZAG"], forca: 82 },
      { id: 'karoly-karpati', nome: "Károly Kárpáti", posicoes: ["ZAG"], forca: 78 },
      { id: 'rudolf-illovszky', nome: "Rudolf Illovszky", posicoes: ["LE"], forca: 81 },
      { id: 'dezso-bundzsak', nome: "Dezső Bundzsák", posicoes: ["MC"], forca: 84 },
      { id: 'karoly-lakat', nome: "Károly Lakat", posicoes: ["MC"], forca: 80 },
      { id: 'lajos-csordas', nome: "Lajos Csordás", posicoes: ["MEI"], forca: 83 },
      { id: 'sandor-szilagyi', nome: "Sándor Szilágyi", posicoes: ["ATA"], forca: 81 },
      { id: 'miklos-szilagyi', nome: "Miklós Szilágyi", posicoes: ["ATA"], forca: 80 },
      { id: 'jozsef-raduly', nome: "József Raduly", posicoes: ["PE"], forca: 78 },
      { id: 'bela-sarosi', nome: "Béla Sárosi", posicoes: ["MC"], forca: 79 },
      { id: 'janos-berendi', nome: "János Berendi", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1957 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Real Madrid",
    jogadores: [
      { id: 'juan-alonso', nome: "Juan Alonso", posicoes: ["GOL"], forca: 84 },
      { id: 'marquitos', nome: "Marquitos", posicoes: ["ZAG"], forca: 83 },
      { id: 'jose-santamaria', nome: "José Santamaría", posicoes: ["ZAG"], forca: 86 },
      { id: 'rafael-lesmes', nome: "Rafael Lesmes", posicoes: ["LE"], forca: 81 },
      { id: 'miguel-munoz', nome: "Miguel Muñoz", posicoes: ["MC"], forca: 86 },
      { id: 'jose-maria-zarraga', nome: "José María Zárraga", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'raymond-kopa', nome: "Raymond Kopa", posicoes: ["MEI"], forca: 90 },
      { id: 'joseito', nome: "Joseíto", posicoes: ["PD","ATA"], forca: 82 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 96 },
      { id: 'hector-rial', nome: "Héctor Rial", posicoes: ["ATA"], forca: 88 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 89 },
      { id: 'enrique-mateos', nome: "Enrique Mateos", posicoes: ["ATA"], forca: 80 },
      { id: 'juan-santisteban', nome: "Juan Santisteban", posicoes: ["MC"], forca: 78 },
      { id: 'roque-olsen', nome: "Roque Olsen", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Fiorentina",
    jogadores: [
      { id: 'giuliano-sarti', nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 85 },
      { id: 'ardico-magnini', nome: "Ardico Magnini", posicoes: ["LD"], forca: 82 },
      { id: 'giuseppe-chiappella', nome: "Giuseppe Chiappella", posicoes: ["ZAG"], forca: 83 },
      { id: 'sergio-cervato', nome: "Sergio Cervato", posicoes: ["LE"], forca: 86 },
      { id: 'armando-segato', nome: "Armando Segato", posicoes: ["MC"], forca: 84 },
      { id: 'guido-gratton', nome: "Guido Gratton", posicoes: ["MC"], forca: 82 },
      { id: 'miguel-montuori', nome: "Miguel Montuori", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'julinho', nome: "Julinho", posicoes: ["PD"], forca: 89 },
      { id: 'giuseppe-virgili', nome: "Giuseppe Virgili", posicoes: ["ATA"], forca: 84 },
      { id: 'maurilio-prini', nome: "Maurilio Prini", posicoes: ["PE"], forca: 80 },
      { id: 'enzo-robotti', nome: "Enzo Robotti", posicoes: ["ZAG"], forca: 78 },
      { id: 'alberto-orzan', nome: "Alberto Orzan", posicoes: ["MC"], forca: 80 },
      { id: 'beppe-chiappella', nome: "Beppe Chiappella", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Manchester United",
    jogadores: [
      { id: 'ray-wood', nome: "Ray Wood", posicoes: ["GOL"], forca: 82 },
      { id: 'roger-byrne', nome: "Roger Byrne", posicoes: ["LE"], forca: 86 },
      { id: 'bill-foulkes', nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 83 },
      { id: 'jackie-blanchflower', nome: "Jackie Blanchflower", posicoes: ["ZAG","MC"], forca: 82 },
      { id: 'duncan-edwards', nome: "Duncan Edwards", posicoes: ["MC"], forca: 91 },
      { id: 'eddie-colman', nome: "Eddie Colman", posicoes: ["MC"], forca: 85 },
      { id: 'david-pegg', nome: "David Pegg", posicoes: ["PE"], forca: 84 },
      { id: 'bobby-charlton', nome: "Bobby Charlton", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'tommy-taylor', nome: "Tommy Taylor", posicoes: ["ATA"], forca: 88 },
      { id: 'dennis-viollet', nome: "Dennis Viollet", posicoes: ["ATA"], forca: 84 },
      { id: 'billy-whelan', nome: "Billy Whelan", posicoes: ["ATA"], forca: 83 },
      { id: 'johnny-berry', nome: "Johnny Berry", posicoes: ["PD"], forca: 84 },
      { id: 'mark-jones', nome: "Mark Jones", posicoes: ["ZAG"], forca: 81 },
      { id: 'wilf-mcguinness', nome: "Wilf McGuinness", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Red Star Belgrade",
    jogadores: [
      { id: 'vladimir-beara', nome: "Vladimir Beara", posicoes: ["GOL"], forca: 87 },
      { id: 'branko-stankovic', nome: "Branko Stanković", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'vladimir-durkovic', nome: "Vladimir Durković", posicoes: ["ZAG"], forca: 80 },
      { id: 'sava-antic', nome: "Sava Antić", posicoes: ["ZAG"], forca: 78 },
      { id: 'tihomir-ognjanov', nome: "Tihomir Ognjanov", posicoes: ["MC"], forca: 81 },
      { id: 'rajko-mitic', nome: "Rajko Mitić", posicoes: ["MC","MEI"], forca: 88 },
      { id: 'dragoslav-sekularac', nome: "Dragoslav Šekularac", posicoes: ["MEI","PD"], forca: 85 },
      { id: 'bora-kostic', nome: "Bora Kostić", posicoes: ["ATA"], forca: 84 },
      { id: 'todor-veselinovic', nome: "Todor Veselinović", posicoes: ["ATA"], forca: 83 },
      { id: 'milos-milutinovic', nome: "Miloš Milutinović", posicoes: ["PE"], forca: 84 },
      { id: 'dragoslav-zupac', nome: "Dragoslav Župac", posicoes: ["MC"], forca: 77 },
      { id: 'lazar-tasic', nome: "Lazar Tasić", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1956 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Real Madrid",
    jogadores: [
      { id: 'juan-alonso', nome: "Juan Alonso", posicoes: ["GOL"], forca: 84 },
      { id: 'angel-atienza', nome: "Ángel Atienza", posicoes: ["LD","ZAG"], forca: 79 },
      { id: 'marquitos', nome: "Marquitos", posicoes: ["ZAG"], forca: 82 },
      { id: 'rafael-lesmes', nome: "Rafael Lesmes", posicoes: ["LE"], forca: 81 },
      { id: 'miguel-munoz', nome: "Miguel Muñoz", posicoes: ["MC"], forca: 86 },
      { id: 'jose-maria-zarraga', nome: "José María Zárraga", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'joseito', nome: "Joseíto", posicoes: ["PD","ATA"], forca: 82 },
      { id: 'alfredo-di-stefano', nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 95 },
      { id: 'hector-rial', nome: "Héctor Rial", posicoes: ["ATA"], forca: 88 },
      { id: 'francisco-gento', nome: "Francisco Gento", posicoes: ["PE"], forca: 88 },
      { id: 'roque-olsen', nome: "Roque Olsen", posicoes: ["ATA"], forca: 81 },
      { id: 'luis-molowny', nome: "Luis Molowny", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'enrique-mateos', nome: "Enrique Mateos", posicoes: ["ATA"], forca: 78 },
      { id: 'juan-santisteban', nome: "Juan Santisteban", posicoes: ["MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Stade de Reims",
    jogadores: [
      { id: 'dominique-colonna', nome: "Dominique Colonna", posicoes: ["GOL"], forca: 83 },
      { id: 'robert-jonquet', nome: "Robert Jonquet", posicoes: ["ZAG"], forca: 87 },
      { id: 'roger-marche', nome: "Roger Marche", posicoes: ["LE"], forca: 85 },
      { id: 'raoul-giraudo', nome: "Raoul Giraudo", posicoes: ["ZAG"], forca: 79 },
      { id: 'armand-penverne', nome: "Armand Penverne", posicoes: ["MC"], forca: 84 },
      { id: 'michel-leblond', nome: "Michel Leblond", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'raymond-kopa', nome: "Raymond Kopa", posicoes: ["MEI"], forca: 91 },
      { id: 'rene-bliard', nome: "René Bliard", posicoes: ["ATA"], forca: 84 },
      { id: 'leon-glovacki', nome: "Léon Glovacki", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'michel-hidalgo', nome: "Michel Hidalgo", posicoes: ["ME","ATA"], forca: 81 },
      { id: 'pierre-sinibaldi', nome: "Pierre Sinibaldi", posicoes: ["ATA"], forca: 80 },
      { id: 'jean-templin', nome: "Jean Templin", posicoes: ["MC"], forca: 79 },
      { id: 'jacques-meano', nome: "Jacques Méano", posicoes: ["ATA"], forca: 78 },
      { id: 'robert-siatka', nome: "Robert Siatka", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Milan",
    jogadores: [
      { id: 'lorenzo-buffon', nome: "Lorenzo Buffon", posicoes: ["GOL"], forca: 86 },
      { id: 'cesare-maldini', nome: "Cesare Maldini", posicoes: ["ZAG"], forca: 85 },
      { id: 'francesco-zagatti', nome: "Francesco Zagatti", posicoes: ["ZAG"], forca: 80 },
      { id: 'alfio-fontana', nome: "Alfio Fontana", posicoes: ["ZAG"], forca: 79 },
      { id: 'nils-liedholm', nome: "Nils Liedholm", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'juan-alberto-schiaffino', nome: "Juan Alberto Schiaffino", posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'gunnar-nordahl', nome: "Gunnar Nordahl", posicoes: ["ATA"], forca: 89 },
      { id: 'gino-pivatelli', nome: "Gino Pivatelli", posicoes: ["ATA"], forca: 82 },
      { id: 'ernesto-grillo', nome: "Ernesto Grillo", posicoes: ["ATA","ME"], forca: 82 },
      { id: 'eros-beraldo', nome: "Eros Beraldo", posicoes: ["MC"], forca: 78 },
      { id: 'giorgio-dal-monte', nome: "Giorgio Dal Monte", posicoes: ["ME"], forca: 79 },
      { id: 'giovanni-trapattoni', nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Hibernian",
    jogadores: [
      { id: 'tommy-younger', nome: "Tommy Younger", posicoes: ["GOL"], forca: 82 },
      { id: 'john-paterson', nome: "John Paterson", posicoes: ["LD"], forca: 78 },
      { id: 'john-grant', nome: "John Grant", posicoes: ["ZAG"], forca: 80 },
      { id: 'bobby-combe', nome: "Bobby Combe", posicoes: ["LE"], forca: 80 },
      { id: 'eddie-turnbull', nome: "Eddie Turnbull", posicoes: ["MC"], forca: 85 },
      { id: 'bobby-johnstone', nome: "Bobby Johnstone", posicoes: ["MC","ATA"], forca: 86 },
      { id: 'gordon-smith', nome: "Gordon Smith", posicoes: ["PD"], forca: 87 },
      { id: 'lawrie-reilly', nome: "Lawrie Reilly", posicoes: ["ATA"], forca: 86 },
      { id: 'willie-ormond', nome: "Willie Ormond", posicoes: ["ATA"], forca: 84 },
      { id: 'tommy-preston', nome: "Tommy Preston", posicoes: ["ME","ATA"], forca: 80 },
      { id: 'jock-buchanan', nome: "Jock Buchanan", posicoes: ["MC"], forca: 78 }
    ]
  }

];
