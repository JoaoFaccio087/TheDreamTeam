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
      { nome: "Gianluigi Donnarumma", posicoes: ["GOL"], forca: 90 },
      { nome: "Matvey Safonov", posicoes: ["GOL"], forca: 78 },
      { nome: "Achraf Hakimi", posicoes: ["LD","MD"], forca: 88 },
      { nome: "Marquinhos", posicoes: ["ZAG"], forca: 86 },
      { nome: "Willian Pacho", posicoes: ["ZAG"], forca: 83 },
      { nome: "Lucas Beraldo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Nuno Mendes", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Vitinha", posicoes: ["MC","VOL"], forca: 88 },
      { nome: "João Neves", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Fabián Ruiz", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Warren Zaïre-Emery", posicoes: ["MC","VOL"], forca: 80 },
      { nome: "Ousmane Dembélé", posicoes: ["PD","ATA","PE"], forca: 92 },
      { nome: "Khvicha Kvaratskhelia", posicoes: ["PE","ATA","ME"], forca: 87 },
      { nome: "Bradley Barcola", posicoes: ["PE","PD","ATA"], forca: 84 },
      { nome: "Désiré Doué", posicoes: ["MEI","PD","ATA"], forca: 84 },
      { nome: "Gonçalo Ramos", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Yann Sommer", posicoes: ["GOL"], forca: 84 },
      { nome: "Josep Martínez", posicoes: ["GOL"], forca: 74 },
      { nome: "Denzel Dumfries", posicoes: ["LD","MD"], forca: 83 },
      { nome: "Alessandro Bastoni", posicoes: ["ZAG","LE"], forca: 86 },
      { nome: "Benjamin Pavard", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Francesco Acerbi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Federico Dimarco", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Carlos Augusto", posicoes: ["LE","ZAG"], forca: 78 },
      { nome: "Nicolò Barella", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Hakan Çalhanoğlu", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Henrikh Mkhitaryan", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Davide Frattesi", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Piotr Zieliński", posicoes: ["MEI","MC"], forca: 79 },
      { nome: "Lautaro Martínez", posicoes: ["ATA"], forca: 88 },
      { nome: "Marcus Thuram", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Mehdi Taremi", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Barcelona",
    jogadores: [
      { nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 86 },
      { nome: "Wojciech Szczęsny", posicoes: ["GOL"], forca: 79 },
      { nome: "Jules Koundé", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Pau Cubarsí", posicoes: ["ZAG"], forca: 83 },
      { nome: "Íñigo Martínez", posicoes: ["ZAG"], forca: 83 },
      { nome: "Ronald Araújo", posicoes: ["ZAG","LD"], forca: 84 },
      { nome: "Alejandro Balde", posicoes: ["LE"], forca: 82 },
      { nome: "Frenkie de Jong", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Marc Casadó", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Pedri", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Dani Olmo", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Fermín López", posicoes: ["MEI","MC"], forca: 80 },
      { nome: "Gavi", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Raphinha", posicoes: ["PE","ATA","MD"], forca: 89 },
      { nome: "Lamine Yamal", posicoes: ["PD","ATA","MD"], forca: 88 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Arsenal",
    jogadores: [
      { nome: "David Raya", posicoes: ["GOL"], forca: 85 },
      { nome: "Ben White", posicoes: ["LD"], forca: 81 },
      { nome: "Jurriën Timber", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "William Saliba", posicoes: ["ZAG"], forca: 87 },
      { nome: "Gabriel Magalhães", posicoes: ["ZAG"], forca: 86 },
      { nome: "Riccardo Calafiori", posicoes: ["LE","ZAG"], forca: 80 },
      { nome: "Myles Lewis-Skelly", posicoes: ["LE","VOL"], forca: 77 },
      { nome: "Declan Rice", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Thomas Partey", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Mikel Merino", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Martin Ødegaard", posicoes: ["MEI","MC"], forca: 87 },
      { nome: "Bukayo Saka", posicoes: ["PD","ATA","MD"], forca: 88 },
      { nome: "Gabriel Martinelli", posicoes: ["PE","ATA","ME"], forca: 83 },
      { nome: "Leandro Trossard", posicoes: ["PE","ATA","MEI"], forca: 82 },
      { nome: "Kai Havertz", posicoes: ["ATA","MEI"], forca: 83 },
      { nome: "Gabriel Jesus", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2024 (semifinalistas — Real Madrid campeão, 2–0 sobre o Borussia Dortmund) =====

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 89 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 80 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 86 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 81 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 82 },
      { nome: "Aurélien Tchouaméni", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Eduardo Camavinga", posicoes: ["VOL","MC","LE"], forca: 85 },
      { nome: "Federico Valverde", posicoes: ["MC","VOL","MD"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Jude Bellingham", posicoes: ["MEI","MC","ATA"], forca: 90 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 91 },
      { nome: "Rodrygo", posicoes: ["PD","ATA","PE"], forca: 86 },
      { nome: "Joselu", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 87 },
      { nome: "Sven Ulreich", posicoes: ["GOL"], forca: 73 },
      { nome: "Joshua Kimmich", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Noussair Mazraoui", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Matthijs de Ligt", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dayot Upamecano", posicoes: ["ZAG"], forca: 83 },
      { nome: "Kim Min-jae", posicoes: ["ZAG"], forca: 83 },
      { nome: "Alphonso Davies", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Leon Goretzka", posicoes: ["MC","VOL"], forca: 82 },
      { nome: "Konrad Laimer", posicoes: ["VOL","MC","LD"], forca: 79 },
      { nome: "Thomas Müller", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Jamal Musiala", posicoes: ["MEI","PE","MC"], forca: 87 },
      { nome: "Leroy Sané", posicoes: ["PD","PE","MD"], forca: 86 },
      { nome: "Kingsley Coman", posicoes: ["PE","PD","ME"], forca: 84 },
      { nome: "Serge Gnabry", posicoes: ["PD","PE","ATA"], forca: 83 },
      { nome: "Harry Kane", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Gregor Kobel", posicoes: ["GOL"], forca: 84 },
      { nome: "Alexander Meyer", posicoes: ["GOL"], forca: 71 },
      { nome: "Julian Ryerson", posicoes: ["LD","LE"], forca: 78 },
      { nome: "Mats Hummels", posicoes: ["ZAG"], forca: 83 },
      { nome: "Nico Schlotterbeck", posicoes: ["ZAG"], forca: 82 },
      { nome: "Niklas Süle", posicoes: ["ZAG","LD"], forca: 80 },
      { nome: "Ramy Bensebaini", posicoes: ["LE","ZAG"], forca: 78 },
      { nome: "Ian Maatsen", posicoes: ["LE","ME"], forca: 78 },
      { nome: "Emre Can", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Marcel Sabitzer", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Julian Brandt", posicoes: ["MEI","MC","PE"], forca: 83 },
      { nome: "Marco Reus", posicoes: ["MEI","ATA","PE"], forca: 82 },
      { nome: "Jadon Sancho", posicoes: ["PE","PD","MD"], forca: 82 },
      { nome: "Karim Adeyemi", posicoes: ["PE","PD","ATA"], forca: 80 },
      { nome: "Donyell Malen", posicoes: ["PD","PE","ATA"], forca: 81 },
      { nome: "Niclas Füllkrug", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "PSG",
    jogadores: [
      { nome: "Gianluigi Donnarumma", posicoes: ["GOL"], forca: 88 },
      { nome: "Arnau Tenas", posicoes: ["GOL"], forca: 71 },
      { nome: "Achraf Hakimi", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Nordi Mukiele", posicoes: ["LD","ZAG"], forca: 77 },
      { nome: "Marquinhos", posicoes: ["ZAG"], forca: 86 },
      { nome: "Milan Škriniar", posicoes: ["ZAG"], forca: 83 },
      { nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 82 },
      { nome: "Nuno Mendes", posicoes: ["LE","ME"], forca: 84 },
      { nome: "Vitinha", posicoes: ["MC","VOL"], forca: 84 },
      { nome: "Warren Zaïre-Emery", posicoes: ["MC","VOL"], forca: 82 },
      { nome: "Manuel Ugarte", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Fabián Ruiz", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Kang-in Lee", posicoes: ["MEI","PD","MC"], forca: 79 },
      { nome: "Ousmane Dembélé", posicoes: ["PD","PE","ATA"], forca: 85 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 93 },
      { nome: "Randal Kolo Muani", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 2023 (semifinalistas — Manchester City campeão, 1–0 sobre a Inter) =====

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Manchester City",
    jogadores: [
      { nome: "Ederson", posicoes: ["GOL"], forca: 88 },
      { nome: "Stefan Ortega", posicoes: ["GOL"], forca: 76 },
      { nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 83 },
      { nome: "Rúben Dias", posicoes: ["ZAG"], forca: 87 },
      { nome: "John Stones", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Manuel Akanji", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Nathan Aké", posicoes: ["LE","ZAG"], forca: 82 },
      { nome: "Rodri", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 91 },
      { nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 86 },
      { nome: "Jack Grealish", posicoes: ["PE","ME"], forca: 84 },
      { nome: "Phil Foden", posicoes: ["PE","PD","MEI"], forca: 85 },
      { nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Julián Álvarez", posicoes: ["ATA","MEI"], forca: 82 },
      { nome: "Erling Haaland", posicoes: ["ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "André Onana", posicoes: ["GOL"], forca: 84 },
      { nome: "Samir Handanović", posicoes: ["GOL"], forca: 76 },
      { nome: "Denzel Dumfries", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Milan Škriniar", posicoes: ["ZAG"], forca: 84 },
      { nome: "Francesco Acerbi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Alessandro Bastoni", posicoes: ["ZAG","LE"], forca: 85 },
      { nome: "Stefan de Vrij", posicoes: ["ZAG"], forca: 81 },
      { nome: "Federico Dimarco", posicoes: ["LE","ME"], forca: 83 },
      { nome: "Robin Gosens", posicoes: ["LE","ME"], forca: 78 },
      { nome: "Nicolò Barella", posicoes: ["MC","VOL"], forca: 86 },
      { nome: "Marcelo Brozović", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Hakan Çalhanoğlu", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Henrikh Mkhitaryan", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Lautaro Martínez", posicoes: ["ATA"], forca: 87 },
      { nome: "Romelu Lukaku", posicoes: ["ATA"], forca: 84 },
      { nome: "Edin Džeko", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 90 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 78 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 85 },
      { nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 84 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 80 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 81 },
      { nome: "Aurélien Tchouaméni", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Eduardo Camavinga", posicoes: ["VOL","MC","LE"], forca: 83 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Federico Valverde", posicoes: ["MC","VOL","MD"], forca: 85 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 89 },
      { nome: "Rodrygo", posicoes: ["PD","ATA","PE"], forca: 84 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Milan",
    jogadores: [
      { nome: "Mike Maignan", posicoes: ["GOL"], forca: 86 },
      { nome: "Ciprian Tătărușanu", posicoes: ["GOL"], forca: 72 },
      { nome: "Davide Calabria", posicoes: ["LD"], forca: 78 },
      { nome: "Pierre Kalulu", posicoes: ["ZAG","LD"], forca: 78 },
      { nome: "Fikayo Tomori", posicoes: ["ZAG"], forca: 82 },
      { nome: "Simon Kjær", posicoes: ["ZAG"], forca: 79 },
      { nome: "Theo Hernández", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Sandro Tonali", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Ismaël Bennacer", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Rade Krunić", posicoes: ["MC","VOL"], forca: 74 },
      { nome: "Brahim Díaz", posicoes: ["MEI","PE"], forca: 80 },
      { nome: "Rafael Leão", posicoes: ["PE","ATA"], forca: 86 },
      { nome: "Alexis Saelemaekers", posicoes: ["PD","MD"], forca: 75 },
      { nome: "Charles De Ketelaere", posicoes: ["MEI","ATA"], forca: 76 },
      { nome: "Olivier Giroud", posicoes: ["ATA"], forca: 81 },
      { nome: "Ante Rebić", posicoes: ["ATA","PE"], forca: 75 }
    ]
  },

  // ===== Edição 2022 (2021-22 — Real Madrid campeão, 1–0 sobre o Liverpool) =====

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 89 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 74 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 85 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 79 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 81 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Federico Valverde", posicoes: ["MC","MD","VOL"], forca: 84 },
      { nome: "Eduardo Camavinga", posicoes: ["MC","VOL"], forca: 80 },
      { nome: "Rodrygo", posicoes: ["PD","PE","ATA"], forca: 83 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 86 },
      { nome: "Marco Asensio", posicoes: ["PD","PE","MEI"], forca: 81 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Liverpool",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 89 },
      { nome: "Caoimhín Kelleher", posicoes: ["GOL"], forca: 75 },
      { nome: "Trent Alexander-Arnold", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Andrew Robertson", posicoes: ["LE","ME"], forca: 84 },
      { nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 89 },
      { nome: "Joël Matip", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ibrahima Konaté", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fabinho", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Jordan Henderson", posicoes: ["MC","VOL"], forca: 82 },
      { nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Naby Keïta", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Mohamed Salah", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Sadio Mané", posicoes: ["PE","ATA"], forca: 88 },
      { nome: "Luis Díaz", posicoes: ["PE","ATA","MD"], forca: 83 },
      { nome: "Diogo Jota", posicoes: ["ATA","PE"], forca: 83 },
      { nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Manchester City",
    jogadores: [
      { nome: "Ederson", posicoes: ["GOL"], forca: 88 },
      { nome: "Zack Steffen", posicoes: ["GOL"], forca: 74 },
      { nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 83 },
      { nome: "João Cancelo", posicoes: ["LD","LE"], forca: 85 },
      { nome: "Rúben Dias", posicoes: ["ZAG"], forca: 86 },
      { nome: "Aymeric Laporte", posicoes: ["ZAG","LE"], forca: 84 },
      { nome: "John Stones", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Rodri", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 91 },
      { nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 86 },
      { nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Phil Foden", posicoes: ["MEI","PE","PD"], forca: 84 },
      { nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 85 },
      { nome: "Raheem Sterling", posicoes: ["PE","PD","ATA"], forca: 84 },
      { nome: "Jack Grealish", posicoes: ["PE","ME"], forca: 83 },
      { nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Villarreal",
    jogadores: [
      { nome: "Gerónimo Rulli", posicoes: ["GOL"], forca: 80 },
      { nome: "Sergio Asenjo", posicoes: ["GOL"], forca: 75 },
      { nome: "Juan Foyth", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Pau Torres", posicoes: ["ZAG"], forca: 82 },
      { nome: "Raúl Albiol", posicoes: ["ZAG"], forca: 78 },
      { nome: "Aïssa Mandi", posicoes: ["ZAG"], forca: 77 },
      { nome: "Pervis Estupiñán", posicoes: ["LE","ME"], forca: 79 },
      { nome: "Étienne Capoue", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Dani Parejo", posicoes: ["MC","MEI","VOL"], forca: 82 },
      { nome: "Francis Coquelin", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Giovani Lo Celso", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Samuel Chukwueze", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Yéremy Pino", posicoes: ["PD","PE","MEI"], forca: 78 },
      { nome: "Arnaut Danjuma", posicoes: ["PE","ATA"], forca: 81 },
      { nome: "Gerard Moreno", posicoes: ["ATA","PE"], forca: 83 },
      { nome: "Boulaye Dia", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2021 (2020-21 — Chelsea campeão, 1–0 sobre o Manchester City) =====

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Chelsea",
    jogadores: [
      { nome: "Édouard Mendy", posicoes: ["GOL"], forca: 84 },
      { nome: "Kepa Arrizabalaga", posicoes: ["GOL"], forca: 76 },
      { nome: "César Azpilicueta", posicoes: ["ZAG","LD"], forca: 81 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 82 },
      { nome: "Andreas Christensen", posicoes: ["ZAG"], forca: 78 },
      { nome: "Reece James", posicoes: ["LD","MD"], forca: 81 },
      { nome: "Ben Chilwell", posicoes: ["LE","ME"], forca: 80 },
      { nome: "N'Golo Kanté", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Jorginho", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Mateo Kovačić", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Mason Mount", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Kai Havertz", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Christian Pulisic", posicoes: ["PE","PD","MEI"], forca: 81 },
      { nome: "Hakim Ziyech", posicoes: ["PD","MEI"], forca: 80 },
      { nome: "Timo Werner", posicoes: ["ATA","PE"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Manchester City",
    jogadores: [
      { nome: "Ederson", posicoes: ["GOL"], forca: 88 },
      { nome: "Zack Steffen", posicoes: ["GOL"], forca: 74 },
      { nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 83 },
      { nome: "João Cancelo", posicoes: ["LD","LE"], forca: 84 },
      { nome: "Rúben Dias", posicoes: ["ZAG"], forca: 86 },
      { nome: "Aymeric Laporte", posicoes: ["ZAG","LE"], forca: 83 },
      { nome: "John Stones", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Oleksandr Zinchenko", posicoes: ["LE","MC"], forca: 78 },
      { nome: "Rodri", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 91 },
      { nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 84 },
      { nome: "Phil Foden", posicoes: ["MEI","PE","PD"], forca: 83 },
      { nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Raheem Sterling", posicoes: ["PE","PD","ATA"], forca: 84 },
      { nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 88 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 73 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Lucas Vázquez", posicoes: ["LD","PD","MD"], forca: 78 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 85 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 78 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 80 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Federico Valverde", posicoes: ["MC","MD","VOL"], forca: 82 },
      { nome: "Marco Asensio", posicoes: ["PD","PE","MEI"], forca: 80 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 82 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "PSG",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 86 },
      { nome: "Sergio Rico", posicoes: ["GOL"], forca: 74 },
      { nome: "Alessandro Florenzi", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Marquinhos", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Presnel Kimpembe", posicoes: ["ZAG"], forca: 82 },
      { nome: "Thilo Kehrer", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Abdou Diallo", posicoes: ["ZAG","LE"], forca: 78 },
      { nome: "Layvin Kurzawa", posicoes: ["LE"], forca: 74 },
      { nome: "Marco Verratti", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Idrissa Gueye", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Leandro Paredes", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Ander Herrera", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Ángel Di María", posicoes: ["PD","MEI","PE"], forca: 84 },
      { nome: "Neymar", posicoes: ["PE","MEI","ATA"], forca: 90 },
      { nome: "Mauro Icardi", posicoes: ["ATA"], forca: 82 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 91 }
    ]
  },

  // ===== Edição 2020 (2019-20 — Bayern de Munique campeão, 1–0 sobre o PSG) =====

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 89 },
      { nome: "Sven Ulreich", posicoes: ["GOL"], forca: 73 },
      { nome: "Benjamin Pavard", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Joshua Kimmich", posicoes: ["VOL","LD","MC"], forca: 87 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 82 },
      { nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 85 },
      { nome: "Niklas Süle", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alphonso Davies", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Leon Goretzka", posicoes: ["MC","VOL"], forca: 83 },
      { nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 85 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 85 },
      { nome: "Serge Gnabry", posicoes: ["PD","PE","ATA"], forca: 84 },
      { nome: "Kingsley Coman", posicoes: ["PE","PD"], forca: 82 },
      { nome: "Ivan Perišić", posicoes: ["PE","ME","ATA"], forca: 80 },
      { nome: "Philippe Coutinho", posicoes: ["MEI","PE"], forca: 82 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "PSG",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 86 },
      { nome: "Sergio Rico", posicoes: ["GOL"], forca: 74 },
      { nome: "Thomas Meunier", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 85 },
      { nome: "Marquinhos", posicoes: ["ZAG","VOL"], forca: 85 },
      { nome: "Presnel Kimpembe", posicoes: ["ZAG"], forca: 81 },
      { nome: "Thilo Kehrer", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Juan Bernat", posicoes: ["LE","ME"], forca: 79 },
      { nome: "Marco Verratti", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Idrissa Gueye", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Leandro Paredes", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Ander Herrera", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Ángel Di María", posicoes: ["PD","MEI","PE"], forca: 84 },
      { nome: "Neymar", posicoes: ["PE","MEI","ATA"], forca: 91 },
      { nome: "Mauro Icardi", posicoes: ["ATA"], forca: 82 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "Lyon",
    jogadores: [
      { nome: "Anthony Lopes", posicoes: ["GOL"], forca: 82 },
      { nome: "Ciprian Tătărușanu", posicoes: ["GOL"], forca: 73 },
      { nome: "Léo Dubois", posicoes: ["LD","MD"], forca: 77 },
      { nome: "Marcelo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jason Denayer", posicoes: ["ZAG"], forca: 78 },
      { nome: "Joachim Andersen", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fernando Marçal", posicoes: ["LE"], forca: 74 },
      { nome: "Maxwel Cornet", posicoes: ["LE","PE","ME"], forca: 78 },
      { nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Houssem Aouar", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Maxence Caqueret", posicoes: ["MC","VOL"], forca: 75 },
      { nome: "Thiago Mendes", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Lucas Tousart", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Memphis Depay", posicoes: ["ATA","MEI","PE"], forca: 84 },
      { nome: "Karl Toko Ekambi", posicoes: ["PE","ATA"], forca: 78 },
      { nome: "Moussa Dembélé", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "RB Leipzig",
    jogadores: [
      { nome: "Péter Gulácsi", posicoes: ["GOL"], forca: 81 },
      { nome: "Yvon Mvogo", posicoes: ["GOL"], forca: 71 },
      { nome: "Nordi Mukiele", posicoes: ["LD","ZAG"], forca: 78 },
      { nome: "Lukas Klostermann", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Dayot Upamecano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marcel Halstenberg", posicoes: ["ZAG","LE"], forca: 77 },
      { nome: "Angeliño", posicoes: ["LE","ME"], forca: 78 },
      { nome: "Konrad Laimer", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Kevin Kampl", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Marcel Sabitzer", posicoes: ["MC","MEI","VOL"], forca: 81 },
      { nome: "Tyler Adams", posicoes: ["VOL","MC"], forca: 74 },
      { nome: "Christopher Nkunku", posicoes: ["MEI","PE","MC"], forca: 79 },
      { nome: "Dani Olmo", posicoes: ["MEI","MC"], forca: 80 },
      { nome: "Emil Forsberg", posicoes: ["MEI","PE"], forca: 79 },
      { nome: "Yussuf Poulsen", posicoes: ["ATA"], forca: 76 },
      { nome: "Patrik Schick", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Liverpool",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 89 },
      { nome: "Trent Alexander-Arnold", posicoes: ["LD"], forca: 85 },
      { nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 92 },
      { nome: "Joël Matip", posicoes: ["ZAG"], forca: 82 },
      { nome: "Joe Gomez", posicoes: ["ZAG","LD"], forca: 80 },
      { nome: "Andrew Robertson", posicoes: ["LE"], forca: 85 },
      { nome: "Fabinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Jordan Henderson", posicoes: ["MC","VOL"], forca: 83 },
      { nome: "Gini Wijnaldum", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Naby Keïta", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "James Milner", posicoes: ["MC","LD"], forca: 80 },
      { nome: "Mohamed Salah", posicoes: ["PD","ATA","MD"], forca: 91 },
      { nome: "Sadio Mané", posicoes: ["PE","ATA","ME"], forca: 90 },
      { nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 87 },
      { nome: "Xherdan Shaqiri", posicoes: ["MEI","PD"], forca: 80 },
      { nome: "Divock Origi", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Tottenham",
    jogadores: [
      { nome: "Hugo Lloris", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Gazzaniga", posicoes: ["GOL"], forca: 73 },
      { nome: "Kieran Trippier", posicoes: ["LD"], forca: 80 },
      { nome: "Toby Alderweireld", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jan Vertonghen", posicoes: ["ZAG","LE"], forca: 84 },
      { nome: "Davinson Sánchez", posicoes: ["ZAG"], forca: 80 },
      { nome: "Danny Rose", posicoes: ["LE"], forca: 79 },
      { nome: "Ben Davies", posicoes: ["LE"], forca: 78 },
      { nome: "Moussa Sissoko", posicoes: ["MC","VOL"], forca: 81 },
      { nome: "Harry Winks", posicoes: ["MC"], forca: 77 },
      { nome: "Eric Dier", posicoes: ["VOL","ZAG"], forca: 78 },
      { nome: "Christian Eriksen", posicoes: ["MEI"], forca: 87 },
      { nome: "Dele Alli", posicoes: ["MEI","ATA"], forca: 83 },
      { nome: "Heung-min Son", posicoes: ["PE","ATA","ME"], forca: 86 },
      { nome: "Harry Kane", posicoes: ["ATA"], forca: 89 },
      { nome: "Lucas Moura", posicoes: ["PD","ATA","MD"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Barcelona",
    jogadores: [
      { nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 89 },
      { nome: "Jasper Cillessen", posicoes: ["GOL"], forca: 78 },
      { nome: "Nélson Semedo", posicoes: ["LD"], forca: 80 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 86 },
      { nome: "Clément Lenglet", posicoes: ["ZAG"], forca: 82 },
      { nome: "Samuel Umtiti", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jordi Alba", posicoes: ["LE"], forca: 86 },
      { nome: "Sergi Roberto", posicoes: ["LD","MC"], forca: 80 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 87 },
      { nome: "Arturo Vidal", posicoes: ["MC","VOL"], forca: 84 },
      { nome: "Ivan Rakitić", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Arthur", posicoes: ["MC"], forca: 80 },
      { nome: "Philippe Coutinho", posicoes: ["MEI","PE"], forca: 85 },
      { nome: "Lionel Messi", posicoes: ["PD","ATA","MD"], forca: 96 },
      { nome: "Luis Suárez", posicoes: ["ATA"], forca: 89 },
      { nome: "Ousmane Dembélé", posicoes: ["PE","PD","ME"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Ajax",
    jogadores: [
      { nome: "André Onana", posicoes: ["GOL"], forca: 82 },
      { nome: "Noussair Mazraoui", posicoes: ["LD"], forca: 78 },
      { nome: "Matthijs de Ligt", posicoes: ["ZAG"], forca: 85 },
      { nome: "Daley Blind", posicoes: ["ZAG","LE"], forca: 81 },
      { nome: "Joël Veltman", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Nicolás Tagliafico", posicoes: ["LE"], forca: 80 },
      { nome: "Frenkie de Jong", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Lasse Schöne", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Donny van de Beek", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Hakim Ziyech", posicoes: ["MEI","PD","MD"], forca: 84 },
      { nome: "Dušan Tadić", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "David Neres", posicoes: ["PD","PE","ME"], forca: 81 },
      { nome: "Kasper Dolberg", posicoes: ["ATA"], forca: 78 },
      { nome: "Klaas-Jan Huntelaar", posicoes: ["ATA"], forca: 75 },
      { nome: "Carel Eiting", posicoes: ["MC"], forca: 72 },
      { nome: "Rasmus Kristensen", posicoes: ["LD"], forca: 71 }
    ]
  },

  // ===== Edição 2018 (2017-18 — Real Madrid campeão, 3–1 sobre o Liverpool, o tri seguido) =====

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 84 },
      { nome: "Kiko Casilla", posicoes: ["GOL"], forca: 73 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 78 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 88 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Mateo Kovačić", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Isco", posicoes: ["MEI","PE","MC"], forca: 84 },
      { nome: "Marco Asensio", posicoes: ["PE","PD","MEI"], forca: 80 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 86 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 84 },
      { nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Liverpool",
    jogadores: [
      { nome: "Loris Karius", posicoes: ["GOL"], forca: 74 },
      { nome: "Simon Mignolet", posicoes: ["GOL"], forca: 75 },
      { nome: "Trent Alexander-Arnold", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Andrew Robertson", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 86 },
      { nome: "Dejan Lovren", posicoes: ["ZAG"], forca: 78 },
      { nome: "Joël Matip", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joe Gomez", posicoes: ["ZAG","LD"], forca: 76 },
      { nome: "Jordan Henderson", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Georginio Wijnaldum", posicoes: ["MC","VOL"], forca: 81 },
      { nome: "James Milner", posicoes: ["MC","LD","MEI"], forca: 80 },
      { nome: "Emre Can", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Alex Oxlade-Chamberlain", posicoes: ["MC","MEI","PD"], forca: 79 },
      { nome: "Mohamed Salah", posicoes: ["PD","ATA"], forca: 91 },
      { nome: "Sadio Mané", posicoes: ["PE","ATA"], forca: 86 },
      { nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 89 },
      { nome: "Sven Ulreich", posicoes: ["GOL"], forca: 76 },
      { nome: "Joshua Kimmich", posicoes: ["LD","VOL","MD"], forca: 84 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 74 },
      { nome: "Mats Hummels", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 83 },
      { nome: "Niklas Süle", posicoes: ["ZAG"], forca: 79 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 84 },
      { nome: "Javi Martínez", posicoes: ["VOL","ZAG"], forca: 81 },
      { nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 84 },
      { nome: "Corentin Tolisso", posicoes: ["MC","VOL"], forca: 79 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE","MC"], forca: 83 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Franck Ribéry", posicoes: ["PE","ME"], forca: 83 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 84 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Roma",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 86 },
      { nome: "Łukasz Skorupski", posicoes: ["GOL"], forca: 73 },
      { nome: "Alessandro Florenzi", posicoes: ["LD","MD","PD"], forca: 78 },
      { nome: "Bruno Peres", posicoes: ["LD"], forca: 73 },
      { nome: "Kostas Manolas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Federico Fazio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Juan Jesus", posicoes: ["ZAG"], forca: 75 },
      { nome: "Aleksandar Kolarov", posicoes: ["LE","ME"], forca: 80 },
      { nome: "Daniele De Rossi", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Radja Nainggolan", posicoes: ["MC","VOL","MEI"], forca: 83 },
      { nome: "Kevin Strootman", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Lorenzo Pellegrini", posicoes: ["MEI","MC"], forca: 78 },
      { nome: "Cengiz Ünder", posicoes: ["PD","PE"], forca: 77 },
      { nome: "Stephan El Shaarawy", posicoes: ["PE","ATA"], forca: 79 },
      { nome: "Diego Perotti", posicoes: ["PE","MEI"], forca: 78 },
      { nome: "Edin Džeko", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 85 },
      { nome: "Kiko Casilla", posicoes: ["GOL"], forca: 75 },
      { nome: "Dani Carvajal", posicoes: ["LD"], forca: 84 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 89 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 80 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 87 },
      { nome: "Casemiro", posicoes: ["VOL"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC"], forca: 89 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Isco", posicoes: ["MEI","PE"], forca: 86 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE","MD"], forca: 85 },
      { nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 97 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 88 },
      { nome: "Gareth Bale", posicoes: ["PD","ATA","MD"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Juventus",
    jogadores: [
      { nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 88 },
      { nome: "Neto", posicoes: ["GOL"], forca: 76 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Leonardo Bonucci", posicoes: ["ZAG"], forca: 88 },
      { nome: "Giorgio Chiellini", posicoes: ["ZAG"], forca: 87 },
      { nome: "Andrea Barzagli", posicoes: ["ZAG"], forca: 84 },
      { nome: "Stephan Lichtsteiner", posicoes: ["LD"], forca: 79 },
      { nome: "Alex Sandro", posicoes: ["LE","ME"], forca: 84 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Miralem Pjanić", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Claudio Marchisio", posicoes: ["MC"], forca: 81 },
      { nome: "Mario Lemina", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Juan Cuadrado", posicoes: ["PD","MD"], forca: 83 },
      { nome: "Paulo Dybala", posicoes: ["MEI","ATA","PE"], forca: 88 },
      { nome: "Mario Mandžukić", posicoes: ["ATA","PE"], forca: 84 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Jan Oblak", posicoes: ["GOL"], forca: 88 },
      { nome: "Miguel Ángel Moyà", posicoes: ["GOL"], forca: 75 },
      { nome: "Juanfran", posicoes: ["LD"], forca: 81 },
      { nome: "Diego Godín", posicoes: ["ZAG"], forca: 88 },
      { nome: "José Giménez", posicoes: ["ZAG"], forca: 83 },
      { nome: "Stefan Savić", posicoes: ["ZAG"], forca: 80 },
      { nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 79 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 83 },
      { nome: "Gabi", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Koke", posicoes: ["MC","MEI","MD"], forca: 84 },
      { nome: "Saúl Ñíguez", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Thomas Partey", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Yannick Carrasco", posicoes: ["PE","ME","ATA"], forca: 83 },
      { nome: "Ángel Correa", posicoes: ["ATA","MEI","PD"], forca: 79 },
      { nome: "Antoine Griezmann", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Monaco",
    jogadores: [
      { nome: "Danijel Subašić", posicoes: ["GOL"], forca: 81 },
      { nome: "Djibril Sidibé", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Kamil Glik", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Andrea Raggi", posicoes: ["ZAG","LD"], forca: 74 },
      { nome: "Benjamin Mendy", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Fabinho", posicoes: ["VOL","LD"], forca: 83 },
      { nome: "Tiémoué Bakayoko", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "João Moutinho", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Thomas Lemar", posicoes: ["MEI","PE","ME"], forca: 82 },
      { nome: "Bernardo Silva", posicoes: ["MEI","PD","MD"], forca: 84 },
      { nome: "Nabil Dirar", posicoes: ["PD","LD","MD"], forca: 76 },
      { nome: "Valère Germain", posicoes: ["ATA"], forca: 77 },
      { nome: "Radamel Falcao", posicoes: ["ATA"], forca: 84 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE","PD"], forca: 85 },
      { nome: "Guido Carrillo", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2016 (2015-16 — Real Madrid campeão, nos pênaltis sobre o Atlético de Madrid, em Milão) =====

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 83 },
      { nome: "Kiko Casilla", posicoes: ["GOL"], forca: 73 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 81 },
      { nome: "Danilo", posicoes: ["LD"], forca: 76 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 84 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 83 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Isco", posicoes: ["MEI","PE","MC"], forca: 82 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE"], forca: 83 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 87 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 85 },
      { nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Jan Oblak", posicoes: ["GOL"], forca: 86 },
      { nome: "Miguel Ángel Moyà", posicoes: ["GOL"], forca: 74 },
      { nome: "Juanfran", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Diego Godín", posicoes: ["ZAG"], forca: 86 },
      { nome: "José María Giménez", posicoes: ["ZAG"], forca: 80 },
      { nome: "Stefan Savić", posicoes: ["ZAG"], forca: 78 },
      { nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 75 },
      { nome: "Filipe Luís", posicoes: ["LE","ME"], forca: 81 },
      { nome: "Gabi", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Augusto Fernández", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Saúl Ñíguez", posicoes: ["MC","VOL","MEI"], forca: 81 },
      { nome: "Koke", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Yannick Carrasco", posicoes: ["PE","PD","MEI"], forca: 80 },
      { nome: "Ángel Correa", posicoes: ["PD","MEI","ATA"], forca: 76 },
      { nome: "Antoine Griezmann", posicoes: ["ATA","PE"], forca: 88 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Manchester City",
    jogadores: [
      { nome: "Joe Hart", posicoes: ["GOL"], forca: 82 },
      { nome: "Willy Caballero", posicoes: ["GOL"], forca: 73 },
      { nome: "Pablo Zabaleta", posicoes: ["LD","MD"], forca: 77 },
      { nome: "Bacary Sagna", posicoes: ["LD"], forca: 76 },
      { nome: "Vincent Kompany", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nicolás Otamendi", posicoes: ["ZAG"], forca: 81 },
      { nome: "Eliaquim Mangala", posicoes: ["ZAG"], forca: 75 },
      { nome: "Aleksandar Kolarov", posicoes: ["LE","ZAG"], forca: 78 },
      { nome: "Gaël Clichy", posicoes: ["LE"], forca: 75 },
      { nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Yaya Touré", posicoes: ["MC","VOL"], forca: 84 },
      { nome: "David Silva", posicoes: ["MEI","MC"], forca: 87 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","PD","MC"], forca: 86 },
      { nome: "Jesús Navas", posicoes: ["PD","MD"], forca: 76 },
      { nome: "Raheem Sterling", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Sergio Agüero", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 76 },
      { nome: "Philipp Lahm", posicoes: ["LD","MD","VOL"], forca: 84 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 85 },
      { nome: "Javi Martínez", posicoes: ["ZAG","VOL"], forca: 82 },
      { nome: "Mehdi Benatia", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 84 },
      { nome: "Juan Bernat", posicoes: ["LE"], forca: 75 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Arturo Vidal", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 83 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 86 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 85 },
      { nome: "Douglas Costa", posicoes: ["PE","PD"], forca: 82 },
      { nome: "Franck Ribéry", posicoes: ["PE","ME"], forca: 84 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 90 }
    ]
  },

  // ===== Edição 2015 (semifinalistas — Barcelona campeão, 3–1 sobre a Juventus) =====

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Barcelona",
    jogadores: [
      { nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 84 },
      { nome: "Claudio Bravo", posicoes: ["GOL"], forca: 83 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 86 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Jérémy Mathieu", posicoes: ["ZAG","LE"], forca: 79 },
      { nome: "Marc Bartra", posicoes: ["ZAG"], forca: 76 },
      { nome: "Jordi Alba", posicoes: ["LE"], forca: 84 },
      { nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Ivan Rakitić", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Xavi", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Rafinha", posicoes: ["MC","MEI"], forca: 75 },
      { nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 96 },
      { nome: "Luis Suárez", posicoes: ["ATA"], forca: 90 },
      { nome: "Neymar", posicoes: ["PE","ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Juventus",
    jogadores: [
      { nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 88 },
      { nome: "Marco Storari", posicoes: ["GOL"], forca: 71 },
      { nome: "Stephan Lichtsteiner", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Leonardo Bonucci", posicoes: ["ZAG"], forca: 85 },
      { nome: "Giorgio Chiellini", posicoes: ["ZAG"], forca: 86 },
      { nome: "Andrea Barzagli", posicoes: ["ZAG"], forca: 83 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 80 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC","MEI"], forca: 85 },
      { nome: "Arturo Vidal", posicoes: ["MC","VOL","MEI"], forca: 86 },
      { nome: "Paul Pogba", posicoes: ["MC","MEI","VOL"], forca: 86 },
      { nome: "Claudio Marchisio", posicoes: ["MC","VOL"], forca: 83 },
      { nome: "Roberto Pereyra", posicoes: ["MEI","MC","PE"], forca: 78 },
      { nome: "Kingsley Coman", posicoes: ["PE","PD","ME"], forca: 74 },
      { nome: "Carlos Tévez", posicoes: ["ATA","MEI"], forca: 86 },
      { nome: "Álvaro Morata", posicoes: ["ATA"], forca: 80 },
      { nome: "Fernando Llorente", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 78 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 85 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mehdi Benatia", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dante", posicoes: ["ZAG"], forca: 79 },
      { nome: "Juan Bernat", posicoes: ["LE","ME"], forca: 76 },
      { nome: "David Alaba", posicoes: ["LE","ZAG","VOL"], forca: 85 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 85 },
      { nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 84 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 88 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD","ME"], forca: 87 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 86 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 84 },
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 81 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 84 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 82 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { nome: "Fábio Coentrão", posicoes: ["LE"], forca: 77 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI","VOL"], forca: 87 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE","MD"], forca: 85 },
      { nome: "Isco", posicoes: ["MEI","MC","PE"], forca: 82 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 88 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 86 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 93 }
    ]
  },

  // ===== Edição 2014 (semifinalistas — Real Madrid campeão, 4–1 sobre o Atlético, a La Décima) =====

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 85 },
      { nome: "Diego López", posicoes: ["GOL"], forca: 80 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 85 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 80 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 85 },
      { nome: "Fábio Coentrão", posicoes: ["LE"], forca: 78 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 85 },
      { nome: "Isco", posicoes: ["MEI","MC","PE"], forca: 80 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 87 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 85 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 94 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 86 },
      { nome: "Daniel Aranzubia", posicoes: ["GOL"], forca: 70 },
      { nome: "Juanfran", posicoes: ["LD","MD"], forca: 81 },
      { nome: "Diego Godín", posicoes: ["ZAG"], forca: 86 },
      { nome: "João Miranda", posicoes: ["ZAG"], forca: 83 },
      { nome: "Toby Alderweireld", posicoes: ["ZAG","LD"], forca: 80 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { nome: "Gabi", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Tiago", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Mario Suárez", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Koke", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Raúl García", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Arda Turan", posicoes: ["MEI","PE","MD"], forca: 83 },
      { nome: "Diego Costa", posicoes: ["ATA"], forca: 86 },
      { nome: "David Villa", posicoes: ["ATA"], forca: 82 },
      { nome: "Adrián López", posicoes: ["ATA","PE"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { nome: "Tom Starke", posicoes: ["GOL"], forca: 68 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 86 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dante", posicoes: ["ZAG"], forca: 80 },
      { nome: "Javi Martínez", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 84 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 75 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 84 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 88 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 88 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 85 },
      { nome: "Mario Mandžukić", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 85 },
      { nome: "Mark Schwarzer", posicoes: ["GOL"], forca: 72 },
      { nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 83 },
      { nome: "Gary Cahill", posicoes: ["ZAG"], forca: 82 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 83 },
      { nome: "César Azpilicueta", posicoes: ["LE","LD"], forca: 82 },
      { nome: "David Luiz", posicoes: ["ZAG","VOL"], forca: 82 },
      { nome: "Nemanja Matić", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Ramires", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Frank Lampard", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Oscar", posicoes: ["MEI","PE","MC"], forca: 82 },
      { nome: "Eden Hazard", posicoes: ["PE","MEI","PD"], forca: 87 },
      { nome: "Willian", posicoes: ["PD","PE","MEI"], forca: 81 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 80 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 78 },
      { nome: "Demba Ba", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2013 (semifinalistas — Bayern campeão, 2–1 sobre o Borussia, final alemã em Wembley) =====

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 89 },
      { nome: "Tom Starke", posicoes: ["GOL"], forca: 67 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 86 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dante", posicoes: ["ZAG"], forca: 80 },
      { nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 78 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 82 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 86 },
      { nome: "Javi Martínez", posicoes: ["VOL","ZAG"], forca: 83 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 84 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 88 },
      { nome: "Mario Mandžukić", posicoes: ["ATA"], forca: 82 },
      { nome: "Mario Gómez", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Roman Weidenfeller", posicoes: ["GOL"], forca: 82 },
      { nome: "Mitchell Langerak", posicoes: ["GOL"], forca: 70 },
      { nome: "Łukasz Piszczek", posicoes: ["LD","MD"], forca: 81 },
      { nome: "Mats Hummels", posicoes: ["ZAG"], forca: 85 },
      { nome: "Neven Subotić", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marcel Schmelzer", posicoes: ["LE"], forca: 79 },
      { nome: "Felipe Santana", posicoes: ["ZAG"], forca: 75 },
      { nome: "Sven Bender", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "İlkay Gündoğan", posicoes: ["VOL","MC","MEI"], forca: 81 },
      { nome: "Sebastian Kehl", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Nuri Şahin", posicoes: ["MC","MEI","VOL"], forca: 78 },
      { nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 84 },
      { nome: "Marco Reus", posicoes: ["MEI","PE","ATA"], forca: 85 },
      { nome: "Jakub Błaszczykowski", posicoes: ["PD","PE","ME"], forca: 79 },
      { nome: "Kevin Großkreutz", posicoes: ["PE","LE","ME"], forca: 76 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 85 },
      { nome: "Diego López", posicoes: ["GOL"], forca: 81 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 85 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 78 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 84 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Mesut Özil", posicoes: ["MEI","PE","MC"], forca: 86 },
      { nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 84 },
      { nome: "Kaká", posicoes: ["MEI","MC"], forca: 80 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 84 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 84 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 94 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { nome: "José Manuel Pinto", posicoes: ["GOL"], forca: 70 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 85 },
      { nome: "Carles Puyol", posicoes: ["ZAG"], forca: 84 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 83 },
      { nome: "Jordi Alba", posicoes: ["LE"], forca: 82 },
      { nome: "Adriano", posicoes: ["LE","LD"], forca: 75 },
      { nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Xavi", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Cesc Fàbregas", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 95 },
      { nome: "Alexis Sánchez", posicoes: ["PE","PD","ATA"], forca: 80 },
      { nome: "David Villa", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Pedro", posicoes: ["PD","PE","ATA"], forca: 81 }
    ]
  },

  // ===== Edição 2012 (semifinalistas — Chelsea campeão nos pênaltis sobre o Bayern, em Munique) =====

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 86 },
      { nome: "Ross Turnbull", posicoes: ["GOL"], forca: 66 },
      { nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 83 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 84 },
      { nome: "David Luiz", posicoes: ["ZAG","VOL"], forca: 81 },
      { nome: "Gary Cahill", posicoes: ["ZAG"], forca: 80 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 84 },
      { nome: "Ramires", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Frank Lampard", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "John Obi Mikel", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Raul Meireles", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Juan Mata", posicoes: ["MEI","PE","MC"], forca: 84 },
      { nome: "Florent Malouda", posicoes: ["PE","ME","MEI"], forca: 76 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 85 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 79 },
      { nome: "Daniel Sturridge", posicoes: ["ATA","PE","PD"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 88 },
      { nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 67 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 85 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 80 },
      { nome: "Holger Badstuber", posicoes: ["ZAG"], forca: 78 },
      { nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 78 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 79 },
      { nome: "Anatoliy Tymoshchuk", posicoes: ["VOL","ZAG","MC"], forca: 76 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 86 },
      { nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 83 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 86 },
      { nome: "Mario Gómez", posicoes: ["ATA"], forca: 82 },
      { nome: "Ivica Olić", posicoes: ["ATA","PE"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 88 },
      { nome: "Antonio Adán", posicoes: ["GOL"], forca: 70 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 84 },
      { nome: "Fábio Coentrão", posicoes: ["LE"], forca: 78 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Mesut Özil", posicoes: ["MEI","PE","MC"], forca: 85 },
      { nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 83 },
      { nome: "Kaká", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 93 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 83 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 85 },
      { nome: "José Manuel Pinto", posicoes: ["GOL"], forca: 70 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 85 },
      { nome: "Carles Puyol", posicoes: ["ZAG"], forca: 85 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 82 },
      { nome: "Éric Abidal", posicoes: ["LE","ZAG"], forca: 80 },
      { nome: "Adriano", posicoes: ["LE","LD"], forca: 76 },
      { nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Xavi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Cesc Fàbregas", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 95 },
      { nome: "Alexis Sánchez", posicoes: ["PE","PD","ATA"], forca: 80 },
      { nome: "David Villa", posicoes: ["ATA","PE"], forca: 83 },
      { nome: "Pedro", posicoes: ["PD","PE","ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2011 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { nome: "Dani Alves", posicoes: ["LD"], forca: 89 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 88 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 83 },
      { nome: "Eric Abidal", posicoes: ["LE","ZAG"], forca: 82 },
      { nome: "Maxwell", posicoes: ["LE"], forca: 79 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 88 },
      { nome: "Xavi", posicoes: ["MC"], forca: 94 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 93 },
      { nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Thiago Alcântara", posicoes: ["MC"], forca: 77 },
      { nome: "Pedro", posicoes: ["PD"], forca: 84 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 96 },
      { nome: "David Villa", posicoes: ["ATA","PD"], forca: 88 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { nome: "Rafael", posicoes: ["LD"], forca: 75 },
      { nome: "Fábio", posicoes: ["LD","MC"], forca: 73 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 85 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 89 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 83 },
      { nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 81 },
      { nome: "Nani", posicoes: ["PD"], forca: 84 },
      { nome: "Antonio Valencia", posicoes: ["PD"], forca: 80 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 88 },
      { nome: "Javier Hernández", posicoes: ["ATA"], forca: 82 },
      { nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { nome: "Sergio Ramos", posicoes: ["LD","ZAG"], forca: 87 },
      { nome: "Pepe", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 84 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Lassana Diarra", posicoes: ["VOL"], forca: 80 },
      { nome: "Mesut Özil", posicoes: ["MEI"], forca: 85 },
      { nome: "Ángel Di María", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 80 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 93 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 83 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 84 },
      { nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Schalke 04",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 88 },
      { nome: "Atsuto Uchida", posicoes: ["LD"], forca: 75 },
      { nome: "Benedikt Höwedes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Christoph Metzelder", posicoes: ["ZAG"], forca: 75 },
      { nome: "Kyriakos Papadopoulos", posicoes: ["ZAG","VOL"], forca: 75 },
      { nome: "Hans Sarpei", posicoes: ["LE"], forca: 72 },
      { nome: "Joel Matip", posicoes: ["ZAG","VOL"], forca: 75 },
      { nome: "Peer Kluge", posicoes: ["VOL"], forca: 73 },
      { nome: "Ivan Rakitić", posicoes: ["MC","VOL"], forca: 79 },
      { nome: "José Manuel Jurado", posicoes: ["MEI"], forca: 77 },
      { nome: "Jefferson Farfán", posicoes: ["MC","PD"], forca: 81 },
      { nome: "Julian Draxler", posicoes: ["MC","PD"], forca: 71 },
      { nome: "Christoph Moritz", posicoes: ["VOL","MC"], forca: 72 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 84 },
      { nome: "Klaas-Jan Huntelaar", posicoes: ["ATA"], forca: 82 },
      { nome: "Edu", posicoes: ["ATA"], forca: 73 }
    ]
  },

  // ===== Edição 2010 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Internazionale",
    jogadores: [
      { nome: "Júlio César", posicoes: ["GOL"], forca: 89 },
      { nome: "Maicon", posicoes: ["LD"], forca: 89 },
      { nome: "Lúcio", posicoes: ["ZAG"], forca: 88 },
      { nome: "Walter Samuel", posicoes: ["ZAG"], forca: 87 },
      { nome: "Cristian Chivu", posicoes: ["LE","ZAG"], forca: 82 },
      { nome: "Javier Zanetti", posicoes: ["LD","VOL"], forca: 88 },
      { nome: "Marco Materazzi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Esteban Cambiasso", posicoes: ["VOL"], forca: 85 },
      { nome: "Thiago Motta", posicoes: ["VOL"], forca: 82 },
      { nome: "Wesley Sneijder", posicoes: ["MEI"], forca: 91 },
      { nome: "Dejan Stanković", posicoes: ["MC"], forca: 83 },
      { nome: "Sulley Muntari", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Goran Pandev", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Samuel Eto'o", posicoes: ["ATA","PD"], forca: 88 },
      { nome: "Diego Milito", posicoes: ["ATA"], forca: 91 },
      { nome: "Mario Balotelli", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Bayern München",
    jogadores: [
      { nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 81 },
      { nome: "Philipp Lahm", posicoes: ["LD"], forca: 87 },
      { nome: "Holger Badstuber", posicoes: ["ZAG","LD"], forca: 75 },
      { nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 80 },
      { nome: "Martín Demichelis", posicoes: ["ZAG"], forca: 80 },
      { nome: "Diego Contento", posicoes: ["LE"], forca: 72 },
      { nome: "Mark van Bommel", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Hamit Altıntop", posicoes: ["MC","PD"], forca: 76 },
      { nome: "Thomas Müller", posicoes: ["MC","ATA"], forca: 82 },
      { nome: "Franck Ribéry", posicoes: ["PE"], forca: 87 },
      { nome: "Arjen Robben", posicoes: ["PD"], forca: 90 },
      { nome: "Ivica Olić", posicoes: ["ATA"], forca: 83 },
      { nome: "Mario Gómez", posicoes: ["ATA"], forca: 81 },
      { nome: "Miroslav Klose", posicoes: ["ATA"], forca: 82 },
      { nome: "Anatoliy Tymoshchuk", posicoes: ["VOL","ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { nome: "Dani Alves", posicoes: ["LD"], forca: 89 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 87 },
      { nome: "Gabriel Milito", posicoes: ["ZAG"], forca: 80 },
      { nome: "Eric Abidal", posicoes: ["LE"], forca: 82 },
      { nome: "Maxwell", posicoes: ["LE"], forca: 77 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 87 },
      { nome: "Xavi", posicoes: ["MC"], forca: 93 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 89 },
      { nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Yaya Touré", posicoes: ["VOL"], forca: 84 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 94 },
      { nome: "Pedro", posicoes: ["PD"], forca: 81 },
      { nome: "Zlatan Ibrahimović", posicoes: ["ATA"], forca: 88 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Lyon",
    jogadores: [
      { nome: "Hugo Lloris", posicoes: ["GOL"], forca: 84 },
      { nome: "Anthony Réveillère", posicoes: ["LD"], forca: 77 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jean-Alain Boumsong", posicoes: ["ZAG"], forca: 76 },
      { nome: "Aly Cissokho", posicoes: ["LE"], forca: 76 },
      { nome: "François Clerc", posicoes: ["LD"], forca: 74 },
      { nome: "Jérémy Toulalan", posicoes: ["VOL"], forca: 82 },
      { nome: "Kim Källström", posicoes: ["MC"], forca: 79 },
      { nome: "Miralem Pjanić", posicoes: ["MEI"], forca: 79 },
      { nome: "Jean II Makoun", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Maxime Gonalons", posicoes: ["VOL"], forca: 74 },
      { nome: "Michel Bastos", posicoes: ["MC","LE"], forca: 80 },
      { nome: "Sidney Govou", posicoes: ["MC","PD"], forca: 79 },
      { nome: "César Delgado", posicoes: ["ATA","PD"], forca: 77 },
      { nome: "Lisandro López", posicoes: ["ATA"], forca: 83 },
      { nome: "Bafétimbi Gomis", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2009 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { nome: "Dani Alves", posicoes: ["LD"], forca: 89 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Eric Abidal", posicoes: ["LE"], forca: 82 },
      { nome: "Sylvinho", posicoes: ["LE"], forca: 79 },
      { nome: "Yaya Touré", posicoes: ["VOL"], forca: 84 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 80 },
      { nome: "Xavi", posicoes: ["MC"], forca: 94 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 93 },
      { nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 95 },
      { nome: "Thierry Henry", posicoes: ["ATA","PD"], forca: 87 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 90 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { nome: "John O'Shea", posicoes: ["LD","ZAG"], forca: 76 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 89 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { nome: "Jonny Evans", posicoes: ["ZAG"], forca: 75 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 88 },
      { nome: "Anderson", posicoes: ["MC"], forca: 77 },
      { nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 80 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 91 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 88 },
      { nome: "Carlos Tévez", posicoes: ["ATA"], forca: 87 },
      { nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 89 },
      { nome: "José Bosingwa", posicoes: ["LD"], forca: 79 },
      { nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { nome: "Juliano Belletti", posicoes: ["LD","MC"], forca: 77 },
      { nome: "Michael Essien", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 89 },
      { nome: "Michael Ballack", posicoes: ["MC"], forca: 87 },
      { nome: "John Obi Mikel", posicoes: ["VOL"], forca: 77 },
      { nome: "Florent Malouda", posicoes: ["PE"], forca: 80 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 87 },
      { nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Arsenal",
    jogadores: [
      { nome: "Manuel Almunia", posicoes: ["GOL"], forca: 76 },
      { nome: "Bacary Sagna", posicoes: ["LD"], forca: 80 },
      { nome: "Kolo Touré", posicoes: ["ZAG"], forca: 84 },
      { nome: "William Gallas", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mikaël Silvestre", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Gaël Clichy", posicoes: ["LE"], forca: 80 },
      { nome: "Alex Song", posicoes: ["VOL","ZAG"], forca: 77 },
      { nome: "Denílson", posicoes: ["VOL","MC"], forca: 75 },
      { nome: "Cesc Fàbregas", posicoes: ["MC"], forca: 87 },
      { nome: "Samir Nasri", posicoes: ["MC","PD"], forca: 80 },
      { nome: "Theo Walcott", posicoes: ["PD"], forca: 77 },
      { nome: "Abou Diaby", posicoes: ["MC","PD"], forca: 75 },
      { nome: "Robin van Persie", posicoes: ["ATA","PD"], forca: 83 },
      { nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 82 },
      { nome: "Nicklas Bendtner", posicoes: ["ATA"], forca: 75 },
      { nome: "Eduardo da Silva", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2008 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { nome: "Wes Brown", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 89 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 88 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 87 },
      { nome: "Owen Hargreaves", posicoes: ["VOL","LD"], forca: 81 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 87 },
      { nome: "Anderson", posicoes: ["MC"], forca: 79 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 88 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 80 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 95 },
      { nome: "Nani", posicoes: ["PD"], forca: 81 },
      { nome: "Carlos Tévez", posicoes: ["ATA"], forca: 87 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 89 },
      { nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 88 },
      { nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 81 },
      { nome: "Juliano Belletti", posicoes: ["LD"], forca: 77 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { nome: "Michael Essien", posicoes: ["VOL","MC","LD"], forca: 87 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 89 },
      { nome: "Michael Ballack", posicoes: ["MC"], forca: 88 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { nome: "Florent Malouda", posicoes: ["PE"], forca: 80 },
      { nome: "Salomon Kalou", posicoes: ["ATA","PD"], forca: 77 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 88 },
      { nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { nome: "Gianluca Zambrotta", posicoes: ["LD"], forca: 87 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Gabriel Milito", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Eric Abidal", posicoes: ["LE"], forca: 82 },
      { nome: "Yaya Touré", posicoes: ["VOL"], forca: 84 },
      { nome: "Xavi", posicoes: ["MC"], forca: 88 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 87 },
      { nome: "Deco", posicoes: ["MC"], forca: 89 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 89 },
      { nome: "Ronaldinho", posicoes: ["MEI","PD"], forca: 83 },
      { nome: "Thierry Henry", posicoes: ["ATA","PD"], forca: 84 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 87 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 75 },
      { nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Liverpool",
    jogadores: [
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 84 },
      { nome: "Steve Finnan", posicoes: ["LD"], forca: 80 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Martin Škrtel", posicoes: ["ZAG"], forca: 77 },
      { nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 83 },
      { nome: "Fábio Aurélio", posicoes: ["LE"], forca: 77 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Javier Mascherano", posicoes: ["VOL"], forca: 85 },
      { nome: "Steven Gerrard", posicoes: ["MC"], forca: 90 },
      { nome: "Lucas Leiva", posicoes: ["VOL","MC"], forca: 73 },
      { nome: "Yossi Benayoun", posicoes: ["MC","PD"], forca: 77 },
      { nome: "Ryan Babel", posicoes: ["PD"], forca: 75 },
      { nome: "Dirk Kuyt", posicoes: ["ATA"], forca: 81 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 90 },
      { nome: "Peter Crouch", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2007 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Cafu", posicoes: ["LD"], forca: 87 },
      { nome: "Massimo Oddo", posicoes: ["LD"], forca: 81 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 89 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Marek Jankulovski", posicoes: ["LE"], forca: 81 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 88 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 95 },
      { nome: "Yoann Gourcuff", posicoes: ["MEI"], forca: 75 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 81 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 85 },
      { nome: "Alberto Gilardino", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Liverpool",
    jogadores: [
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 84 },
      { nome: "Steve Finnan", posicoes: ["LD"], forca: 80 },
      { nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 83 },
      { nome: "Daniel Agger", posicoes: ["ZAG"], forca: 80 },
      { nome: "John Arne Riise", posicoes: ["LD","ME"], forca: 82 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Javier Mascherano", posicoes: ["VOL"], forca: 84 },
      { nome: "Steven Gerrard", posicoes: ["MC"], forca: 90 },
      { nome: "Mohamed Sissoko", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Jermaine Pennant", posicoes: ["PD"], forca: 75 },
      { nome: "Bolo Zenden", posicoes: ["MC","PE"], forca: 75 },
      { nome: "Peter Crouch", posicoes: ["ATA"], forca: 80 },
      { nome: "Dirk Kuyt", posicoes: ["ATA"], forca: 81 },
      { nome: "Craig Bellamy", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 88 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 83 },
      { nome: "Wes Brown", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 85 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { nome: "Mikaël Silvestre", posicoes: ["LD","ZAG"], forca: 77 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 91 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 81 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 88 },
      { nome: "Louis Saha", posicoes: ["ATA"], forca: 80 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 81 },
      { nome: "Alan Smith", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 89 },
      { nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 81 },
      { nome: "Paulo Ferreira", posicoes: ["LD"], forca: 82 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { nome: "Wayne Bridge", posicoes: ["LE"], forca: 80 },
      { nome: "Michael Essien", posicoes: ["VOL","MC","LD"], forca: 87 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 89 },
      { nome: "Michael Ballack", posicoes: ["MC"], forca: 84 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { nome: "Arjen Robben", posicoes: ["PD"], forca: 84 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 89 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 82 },
      { nome: "Salomon Kalou", posicoes: ["ATA","PD"], forca: 77 }
    ]
  },

  // ===== Edição 2006 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 84 },
      { nome: "Oleguer", posicoes: ["LD","ZAG"], forca: 76 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Giovanni van Bronckhorst", posicoes: ["LE"], forca: 81 },
      { nome: "Juliano Belletti", posicoes: ["LD"], forca: 79 },
      { nome: "Sylvinho", posicoes: ["LE"], forca: 79 },
      { nome: "Edmílson", posicoes: ["VOL","ZAG"], forca: 81 },
      { nome: "Xavi", posicoes: ["MC"], forca: 85 },
      { nome: "Deco", posicoes: ["MC"], forca: 88 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 80 },
      { nome: "Ludovic Giuly", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Ronaldinho", posicoes: ["MEI","PD"], forca: 95 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 82 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 91 },
      { nome: "Henrik Larsson", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Arsenal",
    jogadores: [
      { nome: "Jens Lehmann", posicoes: ["GOL"], forca: 85 },
      { nome: "Emmanuel Eboué", posicoes: ["LD"], forca: 77 },
      { nome: "Kolo Touré", posicoes: ["ZAG"], forca: 85 },
      { nome: "Philippe Senderos", posicoes: ["ZAG"], forca: 77 },
      { nome: "Sol Campbell", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { nome: "Mathieu Flamini", posicoes: ["VOL","LD"], forca: 77 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 83 },
      { nome: "Cesc Fàbregas", posicoes: ["MC"], forca: 84 },
      { nome: "Robert Pirès", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Freddie Ljungberg", posicoes: ["MC","PD"], forca: 81 },
      { nome: "Aleksandr Hleb", posicoes: ["MC","PD"], forca: 80 },
      { nome: "José Antonio Reyes", posicoes: ["ATA","PD"], forca: 79 },
      { nome: "Dennis Bergkamp", posicoes: ["ATA"], forca: 80 },
      { nome: "Robin van Persie", posicoes: ["ATA","PD"], forca: 79 },
      { nome: "Thierry Henry", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Cafu", posicoes: ["LD"], forca: 87 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 90 },
      { nome: "Jaap Stam", posicoes: ["ZAG"], forca: 87 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 81 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 88 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 90 },
      { nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Rui Costa", posicoes: ["MEI"], forca: 85 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 80 },
      { nome: "Alberto Gilardino", posicoes: ["ATA"], forca: 81 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 88 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Villarreal",
    jogadores: [
      { nome: "Sebastián Viera", posicoes: ["GOL"], forca: 75 },
      { nome: "Mariano Barbosa", posicoes: ["GOL"], forca: 72 },
      { nome: "Javi Venta", posicoes: ["LD"], forca: 75 },
      { nome: "Gonzalo Rodríguez", posicoes: ["ZAG"], forca: 80 },
      { nome: "Juan Manuel Peña", posicoes: ["ZAG"], forca: 76 },
      { nome: "Rodolfo Arruabarrena", posicoes: ["LE"], forca: 76 },
      { nome: "Quique Álvarez", posicoes: ["ZAG"], forca: 74 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 84 },
      { nome: "Josico", posicoes: ["VOL"], forca: 75 },
      { nome: "Alessio Tacchinardi", posicoes: ["VOL"], forca: 80 },
      { nome: "Juan Román Riquelme", posicoes: ["MEI"], forca: 89 },
      { nome: "Santi Cazorla", posicoes: ["MC","PD"], forca: 77 },
      { nome: "Juan Pablo Sorín", posicoes: ["LD","ME"], forca: 81 },
      { nome: "Diego Forlán", posicoes: ["ATA"], forca: 84 },
      { nome: "José Mari", posicoes: ["ATA"], forca: 75 },
      { nome: "Guillermo Franco", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2005 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Liverpool",
    jogadores: [
      { nome: "Jerzy Dudek", posicoes: ["GOL"], forca: 82 },
      { nome: "Steve Finnan", posicoes: ["LD"], forca: 81 },
      { nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 87 },
      { nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 83 },
      { nome: "Djimi Traoré", posicoes: ["LE"], forca: 73 },
      { nome: "John Arne Riise", posicoes: ["LD","ME"], forca: 82 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Steven Gerrard", posicoes: ["MC"], forca: 91 },
      { nome: "Dietmar Hamann", posicoes: ["VOL"], forca: 81 },
      { nome: "Igor Bišćan", posicoes: ["VOL","MC"], forca: 75 },
      { nome: "Luis García", posicoes: ["MEI","PD"], forca: 83 },
      { nome: "Harry Kewell", posicoes: ["MC","PE"], forca: 80 },
      { nome: "Vladimír Šmicer", posicoes: ["MC","PD"], forca: 79 },
      { nome: "Milan Baroš", posicoes: ["ATA"], forca: 81 },
      { nome: "Djibril Cissé", posicoes: ["ATA"], forca: 79 },
      { nome: "Florent Sinama Pongolle", posicoes: ["ATA"], forca: 72 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Cafu", posicoes: ["LD"], forca: 87 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 90 },
      { nome: "Jaap Stam", posicoes: ["ZAG"], forca: 87 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 89 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 81 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 88 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { nome: "Rui Costa", posicoes: ["MEI"], forca: 85 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 80 },
      { nome: "Hernán Crespo", posicoes: ["ATA"], forca: 87 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 91 },
      { nome: "Jon Dahl Tomasson", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 88 },
      { nome: "Paulo Ferreira", posicoes: ["LD"], forca: 82 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { nome: "William Gallas", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Wayne Bridge", posicoes: ["LE"], forca: 80 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 90 },
      { nome: "Tiago", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Geremi", posicoes: ["MC","LD"], forca: 79 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { nome: "Damien Duff", posicoes: ["PE"], forca: 83 },
      { nome: "Arjen Robben", posicoes: ["PD"], forca: 84 },
      { nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 80 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 82 },
      { nome: "Mateja Kežman", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "PSV Eindhoven",
    jogadores: [
      { nome: "Heurelho Gomes", posicoes: ["GOL"], forca: 80 },
      { nome: "André Ooijer", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { nome: "Wilfred Bouma", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Lee Young-pyo", posicoes: ["LE"], forca: 79 },
      { nome: "Theo Lucius", posicoes: ["LD","MC"], forca: 75 },
      { nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Mark van Bommel", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Johann Vogel", posicoes: ["VOL"], forca: 79 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 81 },
      { nome: "DaMarcus Beasley", posicoes: ["PD"], forca: 75 },
      { nome: "John de Jong", posicoes: ["MEI"], forca: 75 },
      { nome: "Jefferson Farfán", posicoes: ["ATA","PD"], forca: 80 },
      { nome: "Jan Vennegoor of Hesselink", posicoes: ["ATA"], forca: 77 },
      { nome: "Robert", posicoes: ["ATA"], forca: 75 },
      { nome: "Gerald Sibon", posicoes: ["ATA"], forca: 73 }
    ]
  },

  // ===== Edição 2004 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Porto",
    jogadores: [
      { nome: "Vítor Baía", posicoes: ["GOL"], forca: 82 },
      { nome: "Paulo Ferreira", posicoes: ["LD"], forca: 82 },
      { nome: "Nuno Valente", posicoes: ["LE"], forca: 81 },
      { nome: "Jorge Costa", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 87 },
      { nome: "Pedro Emanuel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Ricardo Costa", posicoes: ["ZAG"], forca: 76 },
      { nome: "Costinha", posicoes: ["VOL"], forca: 82 },
      { nome: "Maniche", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Deco", posicoes: ["MEI"], forca: 90 },
      { nome: "Pedro Mendes", posicoes: ["MC"], forca: 80 },
      { nome: "Dmitri Alenichev", posicoes: ["MC","ATA"], forca: 81 },
      { nome: "Carlos Alberto", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Derlei", posicoes: ["ATA"], forca: 82 },
      { nome: "Benni McCarthy", posicoes: ["ATA"], forca: 82 },
      { nome: "Edgaras Jankauskas", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Monaco",
    jogadores: [
      { nome: "Flavio Roma", posicoes: ["GOL"], forca: 77 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 85 },
      { nome: "Gaël Givet", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Julien Rodriguez", posicoes: ["ZAG"], forca: 77 },
      { nome: "Sébastien Squillaci", posicoes: ["ZAG"], forca: 79 },
      { nome: "Hugo Ibarra", posicoes: ["LD"], forca: 80 },
      { nome: "Lucas Bernardi", posicoes: ["VOL"], forca: 79 },
      { nome: "Akis Zikos", posicoes: ["VOL"], forca: 77 },
      { nome: "Édouard Cissé", posicoes: ["VOL","MC"], forca: 75 },
      { nome: "Ludovic Giuly", posicoes: ["MC","PD"], forca: 87 },
      { nome: "Jérôme Rothen", posicoes: ["MC","PE"], forca: 84 },
      { nome: "Jaroslav Plašil", posicoes: ["MC","PD"], forca: 77 },
      { nome: "Dado Pršo", posicoes: ["ATA"], forca: 82 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 88 },
      { nome: "Shabani Nonda", posicoes: ["ATA"], forca: 77 },
      { nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Chelsea",
    jogadores: [
      { nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 81 },
      { nome: "Wayne Bridge", posicoes: ["LE"], forca: 80 },
      { nome: "William Gallas", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 85 },
      { nome: "Marcel Desailly", posicoes: ["ZAG"], forca: 81 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 87 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 88 },
      { nome: "Geremi", posicoes: ["MC","LD"], forca: 79 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 82 },
      { nome: "Damien Duff", posicoes: ["PD"], forca: 83 },
      { nome: "Juan Sebastián Verón", posicoes: ["MC"], forca: 80 },
      { nome: "Jesper Grønkjær", posicoes: ["PD"], forca: 77 },
      { nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 80 },
      { nome: "Adrian Mutu", posicoes: ["ATA","PD"], forca: 80 },
      { nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 82 },
      { nome: "Hernán Crespo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Deportivo La Coruña",
    jogadores: [
      { nome: "José Molina", posicoes: ["GOL"], forca: 80 },
      { nome: "Manuel Pablo", posicoes: ["LD"], forca: 79 },
      { nome: "Héctor", posicoes: ["LD","ZAG"], forca: 75 },
      { nome: "Jorge Andrade", posicoes: ["ZAG"], forca: 82 },
      { nome: "Noureddine Naybet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Enrique Romero", posicoes: ["LE"], forca: 77 },
      { nome: "Lionel Scaloni", posicoes: ["LD","MC"], forca: 76 },
      { nome: "Mauro Silva", posicoes: ["VOL"], forca: 82 },
      { nome: "Aldo Duscher", posicoes: ["VOL"], forca: 79 },
      { nome: "Sergio González", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Víctor Sánchez", posicoes: ["MC","PD"], forca: 79 },
      { nome: "Fran", posicoes: ["MC","PE"], forca: 80 },
      { nome: "Juan Carlos Valerón", posicoes: ["MEI"], forca: 87 },
      { nome: "Albert Luque", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Walter Pandiani", posicoes: ["ATA"], forca: 81 },
      { nome: "Diego Tristán", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2003 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 90 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 91 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 82 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Dario Šimić", posicoes: ["ZAG"], forca: 77 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 85 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 87 },
      { nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Rui Costa", posicoes: ["MEI"], forca: 85 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 81 },
      { nome: "Rivaldo", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 88 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Juventus",
    jogadores: [
      { nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 91 },
      { nome: "Lilian Thuram", posicoes: ["LD","ZAG"], forca: 89 },
      { nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 83 },
      { nome: "Paolo Montero", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gianluca Zambrotta", posicoes: ["LD"], forca: 87 },
      { nome: "Igor Tudor", posicoes: ["VOL","ZAG"], forca: 79 },
      { nome: "Edgar Davids", posicoes: ["VOL"], forca: 87 },
      { nome: "Alessio Tacchinardi", posicoes: ["VOL"], forca: 80 },
      { nome: "Pavel Nedvěd", posicoes: ["MEI"], forca: 94 },
      { nome: "Mauro Camoranesi", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Antonio Conte", posicoes: ["MC"], forca: 81 },
      { nome: "Alessandro Del Piero", posicoes: ["ATA"], forca: 88 },
      { nome: "David Trezeguet", posicoes: ["ATA"], forca: 87 },
      { nome: "Marco Di Vaio", posicoes: ["ATA"], forca: 80 },
      { nome: "Marcelo Salas", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 90 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { nome: "Francisco Pavón", posicoes: ["ZAG"], forca: 74 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { nome: "Esteban Cambiasso", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Luís Figo", posicoes: ["MC","PD"], forca: 90 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 94 },
      { nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 80 },
      { nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Guti", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 89 },
      { nome: "Ronaldo", posicoes: ["ATA"], forca: 91 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Internazionale",
    jogadores: [
      { nome: "Francesco Toldo", posicoes: ["GOL"], forca: 84 },
      { nome: "Javier Zanetti", posicoes: ["LD","ZAG"], forca: 89 },
      { nome: "Fabio Cannavaro", posicoes: ["ZAG"], forca: 89 },
      { nome: "Marco Materazzi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Iván Córdoba", posicoes: ["ZAG","LD"], forca: 84 },
      { nome: "Francesco Coco", posicoes: ["LE"], forca: 77 },
      { nome: "Luigi Di Biagio", posicoes: ["VOL"], forca: 80 },
      { nome: "Cristiano Zanetti", posicoes: ["VOL"], forca: 80 },
      { nome: "Matías Almeyda", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Emre Belözoğlu", posicoes: ["MC"], forca: 80 },
      { nome: "Sérgio Conceição", posicoes: ["MC","PD"], forca: 80 },
      { nome: "Álvaro Recoba", posicoes: ["MEI","ATA"], forca: 83 },
      { nome: "Hernán Crespo", posicoes: ["ATA"], forca: 87 },
      { nome: "Christian Vieri", posicoes: ["ATA"], forca: 89 },
      { nome: "Gabriel Batistuta", posicoes: ["ATA"], forca: 80 },
      { nome: "Obafemi Martins", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2002 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 84 },
      { nome: "César Sánchez", posicoes: ["GOL"], forca: 79 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 91 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { nome: "Francisco Pavón", posicoes: ["ZAG"], forca: 75 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { nome: "Flávio Conceição", posicoes: ["VOL"], forca: 81 },
      { nome: "Luís Figo", posicoes: ["MC","PD"], forca: 91 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 94 },
      { nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 81 },
      { nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Guti", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 90 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Bayer Leverkusen",
    jogadores: [
      { nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 81 },
      { nome: "Lúcio", posicoes: ["ZAG"], forca: 88 },
      { nome: "Jens Nowotny", posicoes: ["ZAG"], forca: 83 },
      { nome: "Boris Živković", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Diego Placente", posicoes: ["LE"], forca: 79 },
      { nome: "Zoltán Sebescen", posicoes: ["LD"], forca: 74 },
      { nome: "Carsten Ramelow", posicoes: ["VOL","ZAG"], forca: 81 },
      { nome: "Michael Ballack", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Yıldıray Baştürk", posicoes: ["MEI"], forca: 84 },
      { nome: "Bernd Schneider", posicoes: ["MC","LD"], forca: 84 },
      { nome: "Zé Roberto", posicoes: ["MC","PE"], forca: 87 },
      { nome: "Marko Babić", posicoes: ["MC","PD"], forca: 75 },
      { nome: "Robson Ponte", posicoes: ["MEI"], forca: 74 },
      { nome: "Oliver Neuville", posicoes: ["ATA","PD"], forca: 82 },
      { nome: "Ulf Kirsten", posicoes: ["ATA"], forca: 80 },
      { nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 83 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Barcelona",
    jogadores: [
      { nome: "Roberto Bonano", posicoes: ["GOL"], forca: 76 },
      { nome: "Carles Puyol", posicoes: ["LD","ZAG"], forca: 89 },
      { nome: "Michael Reiziger", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Frank de Boer", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Abelardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Sergi Barjuán", posicoes: ["LE"], forca: 82 },
      { nome: "Philippe Christanval", posicoes: ["ZAG"], forca: 75 },
      { nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Xavi", posicoes: ["MC"], forca: 81 },
      { nome: "Gabri", posicoes: ["MC","LD"], forca: 76 },
      { nome: "Luis Enrique", posicoes: ["MC","PD"], forca: 87 },
      { nome: "Rivaldo", posicoes: ["MEI","PD"], forca: 90 },
      { nome: "Marc Overmars", posicoes: ["PD"], forca: 84 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 87 },
      { nome: "Javier Saviola", posicoes: ["ATA"], forca: 82 },
      { nome: "Dani García", posicoes: ["ATA"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Manchester United",
    jogadores: [
      { nome: "Fabien Barthez", posicoes: ["GOL"], forca: 84 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 83 },
      { nome: "Phil Neville", posicoes: ["LD","ZAG"], forca: 77 },
      { nome: "Wes Brown", posicoes: ["ZAG"], forca: 79 },
      { nome: "Laurent Blanc", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mikaël Silvestre", posicoes: ["LE","ZAG"], forca: 77 },
      { nome: "Denis Irwin", posicoes: ["LE"], forca: 80 },
      { nome: "Roy Keane", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 88 },
      { nome: "Nicky Butt", posicoes: ["VOL"], forca: 80 },
      { nome: "Ryan Giggs", posicoes: ["PE"], forca: 88 },
      { nome: "David Beckham", posicoes: ["MC","PD"], forca: 90 },
      { nome: "Juan Sebastián Verón", posicoes: ["MC"], forca: 83 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Ruud van Nistelrooy", posicoes: ["ATA"], forca: 90 },
      { nome: "Diego Forlán", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 2001 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 93 },
      { nome: "Willy Sagnol", posicoes: ["LD"], forca: 84 },
      { nome: "Bixente Lizarazu", posicoes: ["LE","LD"], forca: 87 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 83 },
      { nome: "Thomas Linke", posicoes: ["ZAG"], forca: 82 },
      { nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 82 },
      { nome: "Michael Tarnat", posicoes: ["LE"], forca: 80 },
      { nome: "Stefan Effenberg", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Jens Jeremies", posicoes: ["VOL"], forca: 82 },
      { nome: "Owen Hargreaves", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Thorsten Fink", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { nome: "Hasan Salihamidžić", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 77 },
      { nome: "Carsten Jancker", posicoes: ["ATA"], forca: 81 },
      { nome: "Giovane Élber", posicoes: ["ATA"], forca: 87 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Valencia",
    jogadores: [
      { nome: "Santiago Cañizares", posicoes: ["GOL"], forca: 84 },
      { nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 81 },
      { nome: "Amedeo Carboni", posicoes: ["LE"], forca: 81 },
      { nome: "Mauricio Pellegrino", posicoes: ["ZAG"], forca: 81 },
      { nome: "Roberto Ayala", posicoes: ["ZAG"], forca: 87 },
      { nome: "Miroslav Djukić", posicoes: ["ZAG"], forca: 81 },
      { nome: "David Albelda", posicoes: ["VOL"], forca: 82 },
      { nome: "Rubén Baraja", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Gaizka Mendieta", posicoes: ["MC","LD"], forca: 90 },
      { nome: "Kily González", posicoes: ["MC","PE"], forca: 84 },
      { nome: "Pablo Aimar", posicoes: ["MEI"], forca: 84 },
      { nome: "Vicente", posicoes: ["PD","MC"], forca: 81 },
      { nome: "Miguel Ángel Angulo", posicoes: ["MC","ATA"], forca: 80 },
      { nome: "John Carew", posicoes: ["ATA"], forca: 79 },
      { nome: "Juan Sánchez", posicoes: ["ATA"], forca: 77 },
      { nome: "Diego Alonso", posicoes: ["ATA"], forca: 74 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { nome: "César Sánchez", posicoes: ["GOL"], forca: 77 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 91 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { nome: "Aitor Karanka", posicoes: ["ZAG"], forca: 76 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 88 },
      { nome: "Flávio Conceição", posicoes: ["VOL"], forca: 80 },
      { nome: "Luís Figo", posicoes: ["MC","PD"], forca: 93 },
      { nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 80 },
      { nome: "Guti", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Sávio", posicoes: ["MC","PE"], forca: 80 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 91 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Leeds United",
    jogadores: [
      { nome: "Nigel Martyn", posicoes: ["GOL"], forca: 80 },
      { nome: "Gary Kelly", posicoes: ["LD"], forca: 77 },
      { nome: "Danny Mills", posicoes: ["LD"], forca: 76 },
      { nome: "Ian Harte", posicoes: ["LE"], forca: 79 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 84 },
      { nome: "Lucas Radebe", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jonathan Woodgate", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dominic Matteo", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "David Batty", posicoes: ["VOL"], forca: 79 },
      { nome: "Olivier Dacourt", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Eirik Bakke", posicoes: ["MC"], forca: 75 },
      { nome: "Lee Bowyer", posicoes: ["MC","LD"], forca: 81 },
      { nome: "Harry Kewell", posicoes: ["MC","PE"], forca: 84 },
      { nome: "Alan Smith", posicoes: ["ATA"], forca: 80 },
      { nome: "Mark Viduka", posicoes: ["ATA"], forca: 84 },
      { nome: "Robbie Keane", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2000 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 82 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 83 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 83 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 88 },
      { nome: "Aitor Karanka", posicoes: ["ZAG"], forca: 77 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 91 },
      { nome: "Fernando Redondo", posicoes: ["VOL"], forca: 93 },
      { nome: "Christian Karembeu", posicoes: ["VOL"], forca: 81 },
      { nome: "Clarence Seedorf", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Steve McManaman", posicoes: ["MC","LD"], forca: 82 },
      { nome: "Guti", posicoes: ["MEI","PD"], forca: 82 },
      { nome: "Sávio", posicoes: ["MC","PE"], forca: 81 },
      { nome: "Geremi", posicoes: ["MC","LD"], forca: 80 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 91 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 85 },
      { nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Valencia",
    jogadores: [
      { nome: "Santiago Cañizares", posicoes: ["GOL"], forca: 84 },
      { nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 81 },
      { nome: "Amedeo Carboni", posicoes: ["LE"], forca: 81 },
      { nome: "Miroslav Djukić", posicoes: ["ZAG"], forca: 81 },
      { nome: "Mauricio Pellegrino", posicoes: ["ZAG"], forca: 81 },
      { nome: "Joachim Björklund", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gerardo", posicoes: ["LD","MC"], forca: 74 },
      { nome: "David Albelda", posicoes: ["VOL"], forca: 82 },
      { nome: "Javier Farinós", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Gerard López", posicoes: ["MC"], forca: 80 },
      { nome: "Gaizka Mendieta", posicoes: ["MC","LD"], forca: 89 },
      { nome: "Kily González", posicoes: ["MC","PE"], forca: 84 },
      { nome: "Miguel Ángel Angulo", posicoes: ["MC","ATA"], forca: 80 },
      { nome: "Claudio López", posicoes: ["ATA","PD"], forca: 87 },
      { nome: "Adrian Ilie", posicoes: ["ATA"], forca: 80 },
      { nome: "Juan Sánchez", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 90 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 83 },
      { nome: "Thomas Linke", posicoes: ["ZAG"], forca: 81 },
      { nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 82 },
      { nome: "Bixente Lizarazu", posicoes: ["LE","LD"], forca: 87 },
      { nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Michael Tarnat", posicoes: ["LE"], forca: 79 },
      { nome: "Stefan Effenberg", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Jens Jeremies", posicoes: ["VOL"], forca: 82 },
      { nome: "Thorsten Fink", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { nome: "Hasan Salihamidžić", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Paulo Sérgio", posicoes: ["MC","ATA"], forca: 79 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 76 },
      { nome: "Carsten Jancker", posicoes: ["ATA"], forca: 80 },
      { nome: "Giovane Élber", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Barcelona",
    jogadores: [
      { nome: "Ruud Hesp", posicoes: ["GOL"], forca: 77 },
      { nome: "Carles Puyol", posicoes: ["LD","ZAG"], forca: 76 },
      { nome: "Michael Reiziger", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Abelardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Frank de Boer", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Sergi Barjuán", posicoes: ["LE"], forca: 82 },
      { nome: "Winston Bogarde", posicoes: ["LD","ZAG"], forca: 77 },
      { nome: "Pep Guardiola", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Xavi", posicoes: ["MC"], forca: 77 },
      { nome: "Luis Enrique", posicoes: ["MC","PD"], forca: 87 },
      { nome: "Luís Figo", posicoes: ["PD","MC"], forca: 94 },
      { nome: "Rivaldo", posicoes: ["MEI","PD"], forca: 94 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 87 },
      { nome: "Dani García", posicoes: ["ATA"], forca: 75 },
      { nome: "Jari Litmanen", posicoes: ["MEI","ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1999 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Manchester United",
    jogadores: [
      { nome: "Peter Schmeichel", posicoes: ["GOL"], forca: 90 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 83 },
      { nome: "Denis Irwin", posicoes: ["LE"], forca: 84 },
      { nome: "Jaap Stam", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ronny Johnsen", posicoes: ["ZAG"], forca: 82 },
      { nome: "Roy Keane", posicoes: ["MC"], forca: 90 },
      { nome: "David Beckham", posicoes: ["MC","MD"], forca: 89 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 86 },
      { nome: "Ryan Giggs", posicoes: ["ME"], forca: 88 },
      { nome: "Nicky Butt", posicoes: ["MC"], forca: 82 },
      { nome: "Dwight Yorke", posicoes: ["ATA"], forca: 88 },
      { nome: "Andy Cole", posicoes: ["ATA"], forca: 86 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 84 },
      { nome: "Teddy Sheringham", posicoes: ["ATA"], forca: 83 },
      { nome: "Jesper Blomqvist", posicoes: ["ME"], forca: 79 },
      { nome: "David May", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 90 },
      { nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 83 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 84 },
      { nome: "Thomas Linke", posicoes: ["ZAG"], forca: 82 },
      { nome: "Lothar Matthäus", posicoes: ["ZAG"], forca: 86 },
      { nome: "Michael Tarnat", posicoes: ["LE"], forca: 80 },
      { nome: "Bixente Lizarazu", posicoes: ["LE"], forca: 86 },
      { nome: "Stefan Effenberg", posicoes: ["MC"], forca: 88 },
      { nome: "Jens Jeremies", posicoes: ["VOL"], forca: 83 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 84 },
      { nome: "Hasan Salihamidžić", posicoes: ["MD","ME"], forca: 82 },
      { nome: "Mario Basler", posicoes: ["PD","MEI"], forca: 84 },
      { nome: "Carsten Jancker", posicoes: ["ATA"], forca: 82 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 80 },
      { nome: "Giovane Élber", posicoes: ["ATA"], forca: 85 },
      { nome: "Thomas Helmer", posicoes: ["ZAG"], forca: 80 }
    ]
  }

];
