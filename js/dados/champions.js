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
  }

];
