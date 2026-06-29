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
      { nome: "Gianluigi Donnarumma", posicoes: ["GOL"], forca: 93 },
      { nome: "Matvey Safonov", posicoes: ["GOL"], forca: 80 },
      { nome: "Achraf Hakimi", posicoes: ["LD","MD"], forca: 91 },
      { nome: "Marquinhos", posicoes: ["ZAG"], forca: 89 },
      { nome: "Willian Pacho", posicoes: ["ZAG"], forca: 86 },
      { nome: "Lucas Beraldo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nuno Mendes", posicoes: ["LE","ME"], forca: 90 },
      { nome: "Vitinha", posicoes: ["MC","VOL"], forca: 91 },
      { nome: "João Neves", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Fabián Ruiz", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Warren Zaïre-Emery", posicoes: ["MC","VOL"], forca: 82 },
      { nome: "Ousmane Dembélé", posicoes: ["PD","ATA","PE"], forca: 94 },
      { nome: "Khvicha Kvaratskhelia", posicoes: ["PE","ATA","ME"], forca: 90 },
      { nome: "Bradley Barcola", posicoes: ["PE","PD","ATA"], forca: 87 },
      { nome: "Désiré Doué", posicoes: ["MEI","PD","ATA"], forca: 87 },
      { nome: "Gonçalo Ramos", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Yann Sommer", posicoes: ["GOL"], forca: 87 },
      { nome: "Josep Martínez", posicoes: ["GOL"], forca: 76 },
      { nome: "Denzel Dumfries", posicoes: ["LD","MD"], forca: 86 },
      { nome: "Alessandro Bastoni", posicoes: ["ZAG","LE"], forca: 89 },
      { nome: "Benjamin Pavard", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Francesco Acerbi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Federico Dimarco", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Carlos Augusto", posicoes: ["LE","ZAG"], forca: 80 },
      { nome: "Nicolò Barella", posicoes: ["MC","VOL"], forca: 90 },
      { nome: "Hakan Çalhanoğlu", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Henrikh Mkhitaryan", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Davide Frattesi", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Piotr Zieliński", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Lautaro Martínez", posicoes: ["ATA"], forca: 91 },
      { nome: "Marcus Thuram", posicoes: ["ATA","PE"], forca: 88 },
      { nome: "Mehdi Taremi", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Barcelona",
    jogadores: [
      { nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 89 },
      { nome: "Wojciech Szczęsny", posicoes: ["GOL"], forca: 81 },
      { nome: "Jules Koundé", posicoes: ["LD","ZAG"], forca: 88 },
      { nome: "Pau Cubarsí", posicoes: ["ZAG"], forca: 86 },
      { nome: "Íñigo Martínez", posicoes: ["ZAG"], forca: 86 },
      { nome: "Ronald Araújo", posicoes: ["ZAG","LD"], forca: 87 },
      { nome: "Alejandro Balde", posicoes: ["LE"], forca: 85 },
      { nome: "Frenkie de Jong", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Marc Casadó", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Pedri", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Dani Olmo", posicoes: ["MEI","MC"], forca: 87 },
      { nome: "Fermín López", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Gavi", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Raphinha", posicoes: ["PE","ATA","MD"], forca: 92 },
      { nome: "Lamine Yamal", posicoes: ["PD","ATA","MD"], forca: 91 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 89 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2025,
    clube: "Arsenal",
    jogadores: [
      { nome: "David Raya", posicoes: ["GOL"], forca: 88 },
      { nome: "Ben White", posicoes: ["LD"], forca: 84 },
      { nome: "Jurriën Timber", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "William Saliba", posicoes: ["ZAG"], forca: 90 },
      { nome: "Gabriel Magalhães", posicoes: ["ZAG"], forca: 89 },
      { nome: "Riccardo Calafiori", posicoes: ["LE","ZAG"], forca: 82 },
      { nome: "Myles Lewis-Skelly", posicoes: ["LE","VOL"], forca: 79 },
      { nome: "Declan Rice", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Thomas Partey", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Mikel Merino", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Martin Ødegaard", posicoes: ["MEI","MC"], forca: 90 },
      { nome: "Bukayo Saka", posicoes: ["PD","ATA","MD"], forca: 91 },
      { nome: "Gabriel Martinelli", posicoes: ["PE","ATA","ME"], forca: 86 },
      { nome: "Leandro Trossard", posicoes: ["PE","ATA","MEI"], forca: 85 },
      { nome: "Kai Havertz", posicoes: ["ATA","MEI"], forca: 86 },
      { nome: "Gabriel Jesus", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2024 (semifinalistas — Real Madrid campeão, 2–0 sobre o Borussia Dortmund) =====

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 92 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 82 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 88 },
      { nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 89 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 84 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 85 },
      { nome: "Aurélien Tchouaméni", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Eduardo Camavinga", posicoes: ["VOL","MC","LE"], forca: 88 },
      { nome: "Federico Valverde", posicoes: ["MC","VOL","MD"], forca: 89 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Jude Bellingham", posicoes: ["MEI","MC","ATA"], forca: 93 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 93 },
      { nome: "Rodrygo", posicoes: ["PD","ATA","PE"], forca: 89 },
      { nome: "Joselu", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 90 },
      { nome: "Sven Ulreich", posicoes: ["GOL"], forca: 75 },
      { nome: "Joshua Kimmich", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Noussair Mazraoui", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Matthijs de Ligt", posicoes: ["ZAG"], forca: 87 },
      { nome: "Dayot Upamecano", posicoes: ["ZAG"], forca: 86 },
      { nome: "Kim Min-jae", posicoes: ["ZAG"], forca: 86 },
      { nome: "Alphonso Davies", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Leon Goretzka", posicoes: ["MC","VOL"], forca: 85 },
      { nome: "Konrad Laimer", posicoes: ["VOL","MC","LD"], forca: 81 },
      { nome: "Thomas Müller", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Jamal Musiala", posicoes: ["MEI","PE","MC"], forca: 90 },
      { nome: "Leroy Sané", posicoes: ["PD","PE","MD"], forca: 89 },
      { nome: "Kingsley Coman", posicoes: ["PE","PD","ME"], forca: 87 },
      { nome: "Serge Gnabry", posicoes: ["PD","PE","ATA"], forca: 86 },
      { nome: "Harry Kane", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Gregor Kobel", posicoes: ["GOL"], forca: 87 },
      { nome: "Alexander Meyer", posicoes: ["GOL"], forca: 72 },
      { nome: "Julian Ryerson", posicoes: ["LD","LE"], forca: 80 },
      { nome: "Mats Hummels", posicoes: ["ZAG"], forca: 86 },
      { nome: "Nico Schlotterbeck", posicoes: ["ZAG"], forca: 85 },
      { nome: "Niklas Süle", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Ramy Bensebaini", posicoes: ["LE","ZAG"], forca: 80 },
      { nome: "Ian Maatsen", posicoes: ["LE","ME"], forca: 80 },
      { nome: "Emre Can", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Marcel Sabitzer", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Julian Brandt", posicoes: ["MEI","MC","PE"], forca: 86 },
      { nome: "Marco Reus", posicoes: ["MEI","ATA","PE"], forca: 85 },
      { nome: "Jadon Sancho", posicoes: ["PE","PD","MD"], forca: 85 },
      { nome: "Karim Adeyemi", posicoes: ["PE","PD","ATA"], forca: 82 },
      { nome: "Donyell Malen", posicoes: ["PD","PE","ATA"], forca: 84 },
      { nome: "Niclas Füllkrug", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2024,
    clube: "PSG",
    jogadores: [
      { nome: "Gianluigi Donnarumma", posicoes: ["GOL"], forca: 91 },
      { nome: "Arnau Tenas", posicoes: ["GOL"], forca: 72 },
      { nome: "Achraf Hakimi", posicoes: ["LD","MD"], forca: 90 },
      { nome: "Nordi Mukiele", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Marquinhos", posicoes: ["ZAG"], forca: 89 },
      { nome: "Milan Škriniar", posicoes: ["ZAG"], forca: 86 },
      { nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 85 },
      { nome: "Nuno Mendes", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Vitinha", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Warren Zaïre-Emery", posicoes: ["MC","VOL"], forca: 85 },
      { nome: "Manuel Ugarte", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Fabián Ruiz", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Kang-in Lee", posicoes: ["MEI","PD","MC"], forca: 81 },
      { nome: "Ousmane Dembélé", posicoes: ["PD","PE","ATA"], forca: 88 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 95 },
      { nome: "Randal Kolo Muani", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 2023 (semifinalistas — Manchester City campeão, 1–0 sobre a Inter) =====

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Manchester City",
    jogadores: [
      { nome: "Ederson", posicoes: ["GOL"], forca: 91 },
      { nome: "Stefan Ortega", posicoes: ["GOL"], forca: 78 },
      { nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "Rúben Dias", posicoes: ["ZAG"], forca: 90 },
      { nome: "John Stones", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Manuel Akanji", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Nathan Aké", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Rodri", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 93 },
      { nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 89 },
      { nome: "Jack Grealish", posicoes: ["PE","ME"], forca: 87 },
      { nome: "Phil Foden", posicoes: ["PE","PD","MEI"], forca: 88 },
      { nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Julián Álvarez", posicoes: ["ATA","MEI"], forca: 85 },
      { nome: "Erling Haaland", posicoes: ["ATA"], forca: 94 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "André Onana", posicoes: ["GOL"], forca: 87 },
      { nome: "Samir Handanović", posicoes: ["GOL"], forca: 78 },
      { nome: "Denzel Dumfries", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Milan Škriniar", posicoes: ["ZAG"], forca: 87 },
      { nome: "Francesco Acerbi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Alessandro Bastoni", posicoes: ["ZAG","LE"], forca: 88 },
      { nome: "Stefan de Vrij", posicoes: ["ZAG"], forca: 84 },
      { nome: "Federico Dimarco", posicoes: ["LE","ME"], forca: 86 },
      { nome: "Robin Gosens", posicoes: ["LE","ME"], forca: 80 },
      { nome: "Nicolò Barella", posicoes: ["MC","VOL"], forca: 89 },
      { nome: "Marcelo Brozović", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Hakan Çalhanoğlu", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Henrikh Mkhitaryan", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Lautaro Martínez", posicoes: ["ATA"], forca: 90 },
      { nome: "Romelu Lukaku", posicoes: ["ATA"], forca: 87 },
      { nome: "Edin Džeko", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 93 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 80 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 87 },
      { nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 88 },
      { nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 87 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 82 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 84 },
      { nome: "Aurélien Tchouaméni", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Eduardo Camavinga", posicoes: ["VOL","MC","LE"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 89 },
      { nome: "Federico Valverde", posicoes: ["MC","VOL","MD"], forca: 88 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 92 },
      { nome: "Rodrygo", posicoes: ["PD","ATA","PE"], forca: 87 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2023,
    clube: "Milan",
    jogadores: [
      { nome: "Mike Maignan", posicoes: ["GOL"], forca: 89 },
      { nome: "Ciprian Tătărușanu", posicoes: ["GOL"], forca: 73 },
      { nome: "Davide Calabria", posicoes: ["LD"], forca: 80 },
      { nome: "Pierre Kalulu", posicoes: ["ZAG","LD"], forca: 80 },
      { nome: "Fikayo Tomori", posicoes: ["ZAG"], forca: 85 },
      { nome: "Simon Kjær", posicoes: ["ZAG"], forca: 81 },
      { nome: "Theo Hernández", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Sandro Tonali", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Ismaël Bennacer", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Rade Krunić", posicoes: ["MC","VOL"], forca: 76 },
      { nome: "Brahim Díaz", posicoes: ["MEI","PE"], forca: 82 },
      { nome: "Rafael Leão", posicoes: ["PE","ATA"], forca: 89 },
      { nome: "Alexis Saelemaekers", posicoes: ["PD","MD"], forca: 77 },
      { nome: "Charles De Ketelaere", posicoes: ["MEI","ATA"], forca: 78 },
      { nome: "Olivier Giroud", posicoes: ["ATA"], forca: 84 },
      { nome: "Ante Rebić", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },

  // ===== Edição 2022 (2021-22 — Real Madrid campeão, 1–0 sobre o Liverpool) =====

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 92 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 76 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 87 },
      { nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 88 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 81 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 84 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 90 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Federico Valverde", posicoes: ["MC","MD","VOL"], forca: 87 },
      { nome: "Eduardo Camavinga", posicoes: ["MC","VOL"], forca: 82 },
      { nome: "Rodrygo", posicoes: ["PD","PE","ATA"], forca: 86 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 89 },
      { nome: "Marco Asensio", posicoes: ["PD","PE","MEI"], forca: 84 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Liverpool",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 92 },
      { nome: "Caoimhín Kelleher", posicoes: ["GOL"], forca: 77 },
      { nome: "Trent Alexander-Arnold", posicoes: ["LD","MD"], forca: 88 },
      { nome: "Andrew Robertson", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 92 },
      { nome: "Joël Matip", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ibrahima Konaté", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fabinho", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Jordan Henderson", posicoes: ["MC","VOL"], forca: 85 },
      { nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Naby Keïta", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Mohamed Salah", posicoes: ["PD","ATA"], forca: 93 },
      { nome: "Sadio Mané", posicoes: ["PE","ATA"], forca: 91 },
      { nome: "Luis Díaz", posicoes: ["PE","ATA","MD"], forca: 86 },
      { nome: "Diogo Jota", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Manchester City",
    jogadores: [
      { nome: "Ederson", posicoes: ["GOL"], forca: 91 },
      { nome: "Zack Steffen", posicoes: ["GOL"], forca: 76 },
      { nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "João Cancelo", posicoes: ["LD","LE"], forca: 88 },
      { nome: "Rúben Dias", posicoes: ["ZAG"], forca: 89 },
      { nome: "Aymeric Laporte", posicoes: ["ZAG","LE"], forca: 87 },
      { nome: "John Stones", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Rodri", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 93 },
      { nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 89 },
      { nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Phil Foden", posicoes: ["MEI","PE","PD"], forca: 87 },
      { nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 88 },
      { nome: "Raheem Sterling", posicoes: ["PE","PD","ATA"], forca: 87 },
      { nome: "Jack Grealish", posicoes: ["PE","ME"], forca: 86 },
      { nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2022,
    clube: "Villarreal",
    jogadores: [
      { nome: "Gerónimo Rulli", posicoes: ["GOL"], forca: 82 },
      { nome: "Sergio Asenjo", posicoes: ["GOL"], forca: 77 },
      { nome: "Juan Foyth", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Pau Torres", posicoes: ["ZAG"], forca: 85 },
      { nome: "Raúl Albiol", posicoes: ["ZAG"], forca: 80 },
      { nome: "Aïssa Mandi", posicoes: ["ZAG"], forca: 79 },
      { nome: "Pervis Estupiñán", posicoes: ["LE","ME"], forca: 81 },
      { nome: "Étienne Capoue", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Dani Parejo", posicoes: ["MC","MEI","VOL"], forca: 85 },
      { nome: "Francis Coquelin", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Giovani Lo Celso", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Samuel Chukwueze", posicoes: ["PD","PE"], forca: 81 },
      { nome: "Yéremy Pino", posicoes: ["PD","PE","MEI"], forca: 80 },
      { nome: "Arnaut Danjuma", posicoes: ["PE","ATA"], forca: 84 },
      { nome: "Gerard Moreno", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Boulaye Dia", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 2021 (2020-21 — Chelsea campeão, 1–0 sobre o Manchester City) =====

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Chelsea",
    jogadores: [
      { nome: "Édouard Mendy", posicoes: ["GOL"], forca: 87 },
      { nome: "Kepa Arrizabalaga", posicoes: ["GOL"], forca: 78 },
      { nome: "César Azpilicueta", posicoes: ["ZAG","LD"], forca: 84 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 87 },
      { nome: "Antonio Rüdiger", posicoes: ["ZAG"], forca: 85 },
      { nome: "Andreas Christensen", posicoes: ["ZAG"], forca: 80 },
      { nome: "Reece James", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Ben Chilwell", posicoes: ["LE","ME"], forca: 82 },
      { nome: "N'Golo Kanté", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Jorginho", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Mateo Kovačić", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Mason Mount", posicoes: ["MEI","MC"], forca: 85 },
      { nome: "Kai Havertz", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Christian Pulisic", posicoes: ["PE","PD","MEI"], forca: 84 },
      { nome: "Hakim Ziyech", posicoes: ["PD","MEI"], forca: 82 },
      { nome: "Timo Werner", posicoes: ["ATA","PE"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Manchester City",
    jogadores: [
      { nome: "Ederson", posicoes: ["GOL"], forca: 91 },
      { nome: "Zack Steffen", posicoes: ["GOL"], forca: 76 },
      { nome: "Kyle Walker", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "João Cancelo", posicoes: ["LD","LE"], forca: 87 },
      { nome: "Rúben Dias", posicoes: ["ZAG"], forca: 89 },
      { nome: "Aymeric Laporte", posicoes: ["ZAG","LE"], forca: 86 },
      { nome: "John Stones", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Oleksandr Zinchenko", posicoes: ["LE","MC"], forca: 80 },
      { nome: "Rodri", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "İlkay Gündoğan", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","MC"], forca: 93 },
      { nome: "Bernardo Silva", posicoes: ["MC","MEI","PD"], forca: 87 },
      { nome: "Phil Foden", posicoes: ["MEI","PE","PD"], forca: 86 },
      { nome: "Riyad Mahrez", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Raheem Sterling", posicoes: ["PE","PD","ATA"], forca: 87 },
      { nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 91 },
      { nome: "Andriy Lunin", posicoes: ["GOL"], forca: 75 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Lucas Vázquez", posicoes: ["LD","PD","MD"], forca: 80 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 88 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 80 },
      { nome: "Ferland Mendy", posicoes: ["LE"], forca: 82 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 90 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 89 },
      { nome: "Federico Valverde", posicoes: ["MC","MD","VOL"], forca: 85 },
      { nome: "Marco Asensio", posicoes: ["PD","PE","MEI"], forca: 82 },
      { nome: "Vinícius Júnior", posicoes: ["PE","ATA"], forca: 85 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2021,
    clube: "PSG",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 89 },
      { nome: "Sergio Rico", posicoes: ["GOL"], forca: 76 },
      { nome: "Alessandro Florenzi", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Marquinhos", posicoes: ["ZAG","VOL"], forca: 89 },
      { nome: "Presnel Kimpembe", posicoes: ["ZAG"], forca: 85 },
      { nome: "Thilo Kehrer", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Abdou Diallo", posicoes: ["ZAG","LE"], forca: 80 },
      { nome: "Layvin Kurzawa", posicoes: ["LE"], forca: 76 },
      { nome: "Marco Verratti", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Idrissa Gueye", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Leandro Paredes", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Ander Herrera", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Ángel Di María", posicoes: ["PD","MEI","PE"], forca: 87 },
      { nome: "Neymar", posicoes: ["PE","MEI","ATA"], forca: 93 },
      { nome: "Mauro Icardi", posicoes: ["ATA"], forca: 85 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 93 }
    ]
  },

  // ===== Edição 2020 (2019-20 — Bayern de Munique campeão, 1–0 sobre o PSG) =====

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 92 },
      { nome: "Sven Ulreich", posicoes: ["GOL"], forca: 75 },
      { nome: "Benjamin Pavard", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Joshua Kimmich", posicoes: ["VOL","LD","MC"], forca: 90 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 85 },
      { nome: "David Alaba", posicoes: ["ZAG","LE"], forca: 88 },
      { nome: "Niklas Süle", posicoes: ["ZAG"], forca: 82 },
      { nome: "Alphonso Davies", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Leon Goretzka", posicoes: ["MC","VOL"], forca: 86 },
      { nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 88 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 88 },
      { nome: "Serge Gnabry", posicoes: ["PD","PE","ATA"], forca: 87 },
      { nome: "Kingsley Coman", posicoes: ["PE","PD"], forca: 85 },
      { nome: "Ivan Perišić", posicoes: ["PE","ME","ATA"], forca: 82 },
      { nome: "Philippe Coutinho", posicoes: ["MEI","PE"], forca: 85 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "PSG",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 89 },
      { nome: "Sergio Rico", posicoes: ["GOL"], forca: 76 },
      { nome: "Thomas Meunier", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 88 },
      { nome: "Marquinhos", posicoes: ["ZAG","VOL"], forca: 88 },
      { nome: "Presnel Kimpembe", posicoes: ["ZAG"], forca: 84 },
      { nome: "Thilo Kehrer", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Juan Bernat", posicoes: ["LE","ME"], forca: 81 },
      { nome: "Marco Verratti", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Idrissa Gueye", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Leandro Paredes", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Ander Herrera", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Ángel Di María", posicoes: ["PD","MEI","PE"], forca: 87 },
      { nome: "Neymar", posicoes: ["PE","MEI","ATA"], forca: 93 },
      { nome: "Mauro Icardi", posicoes: ["ATA"], forca: 85 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "Lyon",
    jogadores: [
      { nome: "Anthony Lopes", posicoes: ["GOL"], forca: 85 },
      { nome: "Ciprian Tătărușanu", posicoes: ["GOL"], forca: 75 },
      { nome: "Léo Dubois", posicoes: ["LD","MD"], forca: 79 },
      { nome: "Marcelo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jason Denayer", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joachim Andersen", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fernando Marçal", posicoes: ["LE"], forca: 76 },
      { nome: "Maxwel Cornet", posicoes: ["LE","PE","ME"], forca: 80 },
      { nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Houssem Aouar", posicoes: ["MEI","MC"], forca: 85 },
      { nome: "Maxence Caqueret", posicoes: ["MC","VOL"], forca: 77 },
      { nome: "Thiago Mendes", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Lucas Tousart", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Memphis Depay", posicoes: ["ATA","MEI","PE"], forca: 87 },
      { nome: "Karl Toko Ekambi", posicoes: ["PE","ATA"], forca: 80 },
      { nome: "Moussa Dembélé", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2020,
    clube: "RB Leipzig",
    jogadores: [
      { nome: "Péter Gulácsi", posicoes: ["GOL"], forca: 84 },
      { nome: "Yvon Mvogo", posicoes: ["GOL"], forca: 72 },
      { nome: "Nordi Mukiele", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Lukas Klostermann", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Dayot Upamecano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marcel Halstenberg", posicoes: ["ZAG","LE"], forca: 79 },
      { nome: "Angeliño", posicoes: ["LE","ME"], forca: 80 },
      { nome: "Konrad Laimer", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Kevin Kampl", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Marcel Sabitzer", posicoes: ["MC","MEI","VOL"], forca: 84 },
      { nome: "Tyler Adams", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Christopher Nkunku", posicoes: ["MEI","PE","MC"], forca: 81 },
      { nome: "Dani Olmo", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Emil Forsberg", posicoes: ["MEI","PE"], forca: 81 },
      { nome: "Yussuf Poulsen", posicoes: ["ATA"], forca: 78 },
      { nome: "Patrik Schick", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Liverpool",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 92 },
      { nome: "Trent Alexander-Arnold", posicoes: ["LD"], forca: 88 },
      { nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 94 },
      { nome: "Joël Matip", posicoes: ["ZAG"], forca: 85 },
      { nome: "Joe Gomez", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Andrew Robertson", posicoes: ["LE"], forca: 88 },
      { nome: "Fabinho", posicoes: ["VOL"], forca: 88 },
      { nome: "Jordan Henderson", posicoes: ["MC","VOL"], forca: 86 },
      { nome: "Gini Wijnaldum", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Naby Keïta", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "James Milner", posicoes: ["MC","LD"], forca: 82 },
      { nome: "Mohamed Salah", posicoes: ["PD","ATA","MD"], forca: 93 },
      { nome: "Sadio Mané", posicoes: ["PE","ATA","ME"], forca: 93 },
      { nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 90 },
      { nome: "Xherdan Shaqiri", posicoes: ["MEI","PD"], forca: 82 },
      { nome: "Divock Origi", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Tottenham",
    jogadores: [
      { nome: "Hugo Lloris", posicoes: ["GOL"], forca: 88 },
      { nome: "Paulo Gazzaniga", posicoes: ["GOL"], forca: 75 },
      { nome: "Kieran Trippier", posicoes: ["LD"], forca: 82 },
      { nome: "Toby Alderweireld", posicoes: ["ZAG"], forca: 87 },
      { nome: "Jan Vertonghen", posicoes: ["ZAG","LE"], forca: 87 },
      { nome: "Davinson Sánchez", posicoes: ["ZAG"], forca: 82 },
      { nome: "Danny Rose", posicoes: ["LE"], forca: 81 },
      { nome: "Ben Davies", posicoes: ["LE"], forca: 80 },
      { nome: "Moussa Sissoko", posicoes: ["MC","VOL"], forca: 84 },
      { nome: "Harry Winks", posicoes: ["MC"], forca: 79 },
      { nome: "Eric Dier", posicoes: ["VOL","ZAG"], forca: 80 },
      { nome: "Christian Eriksen", posicoes: ["MEI"], forca: 90 },
      { nome: "Dele Alli", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Heung-min Son", posicoes: ["PE","ATA","ME"], forca: 89 },
      { nome: "Harry Kane", posicoes: ["ATA"], forca: 92 },
      { nome: "Lucas Moura", posicoes: ["PD","ATA","MD"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Barcelona",
    jogadores: [
      { nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 92 },
      { nome: "Jasper Cillessen", posicoes: ["GOL"], forca: 80 },
      { nome: "Nélson Semedo", posicoes: ["LD"], forca: 82 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 89 },
      { nome: "Clément Lenglet", posicoes: ["ZAG"], forca: 85 },
      { nome: "Samuel Umtiti", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jordi Alba", posicoes: ["LE"], forca: 89 },
      { nome: "Sergi Roberto", posicoes: ["LD","MC"], forca: 82 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 90 },
      { nome: "Arturo Vidal", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Ivan Rakitić", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Arthur", posicoes: ["MC"], forca: 82 },
      { nome: "Philippe Coutinho", posicoes: ["MEI","PE"], forca: 88 },
      { nome: "Lionel Messi", posicoes: ["PD","ATA","MD"], forca: 98 },
      { nome: "Luis Suárez", posicoes: ["ATA"], forca: 92 },
      { nome: "Ousmane Dembélé", posicoes: ["PE","PD","ME"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2019,
    clube: "Ajax",
    jogadores: [
      { nome: "André Onana", posicoes: ["GOL"], forca: 85 },
      { nome: "Noussair Mazraoui", posicoes: ["LD"], forca: 80 },
      { nome: "Matthijs de Ligt", posicoes: ["ZAG"], forca: 88 },
      { nome: "Daley Blind", posicoes: ["ZAG","LE"], forca: 84 },
      { nome: "Joël Veltman", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Nicolás Tagliafico", posicoes: ["LE"], forca: 82 },
      { nome: "Frenkie de Jong", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Lasse Schöne", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Donny van de Beek", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Hakim Ziyech", posicoes: ["MEI","PD","MD"], forca: 87 },
      { nome: "Dušan Tadić", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "David Neres", posicoes: ["PD","PE","ME"], forca: 84 },
      { nome: "Kasper Dolberg", posicoes: ["ATA"], forca: 80 },
      { nome: "Klaas-Jan Huntelaar", posicoes: ["ATA"], forca: 77 },
      { nome: "Carel Eiting", posicoes: ["MC"], forca: 73 },
      { nome: "Rasmus Kristensen", posicoes: ["LD"], forca: 72 }
    ]
  },

  // ===== Edição 2018 (2017-18 — Real Madrid campeão, 3–1 sobre o Liverpool, o tri seguido) =====

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 87 },
      { nome: "Kiko Casilla", posicoes: ["GOL"], forca: 75 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 91 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 80 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 88 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 91 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Mateo Kovačić", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Isco", posicoes: ["MEI","PE","MC"], forca: 87 },
      { nome: "Marco Asensio", posicoes: ["PE","PD","MEI"], forca: 82 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 89 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 87 },
      { nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 95 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Liverpool",
    jogadores: [
      { nome: "Loris Karius", posicoes: ["GOL"], forca: 76 },
      { nome: "Simon Mignolet", posicoes: ["GOL"], forca: 77 },
      { nome: "Trent Alexander-Arnold", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Andrew Robertson", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Virgil van Dijk", posicoes: ["ZAG"], forca: 89 },
      { nome: "Dejan Lovren", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joël Matip", posicoes: ["ZAG"], forca: 82 },
      { nome: "Joe Gomez", posicoes: ["ZAG","LD"], forca: 78 },
      { nome: "Jordan Henderson", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Georginio Wijnaldum", posicoes: ["MC","VOL"], forca: 84 },
      { nome: "James Milner", posicoes: ["MC","LD","MEI"], forca: 82 },
      { nome: "Emre Can", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Alex Oxlade-Chamberlain", posicoes: ["MC","MEI","PD"], forca: 81 },
      { nome: "Mohamed Salah", posicoes: ["PD","ATA"], forca: 93 },
      { nome: "Sadio Mané", posicoes: ["PE","ATA"], forca: 89 },
      { nome: "Roberto Firmino", posicoes: ["ATA","MEI"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 92 },
      { nome: "Sven Ulreich", posicoes: ["GOL"], forca: 78 },
      { nome: "Joshua Kimmich", posicoes: ["LD","VOL","MD"], forca: 87 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 76 },
      { nome: "Mats Hummels", posicoes: ["ZAG"], forca: 88 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 86 },
      { nome: "Niklas Süle", posicoes: ["ZAG"], forca: 81 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 87 },
      { nome: "Javi Martínez", posicoes: ["VOL","ZAG"], forca: 84 },
      { nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "Corentin Tolisso", posicoes: ["MC","VOL"], forca: 81 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE","MC"], forca: 86 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Franck Ribéry", posicoes: ["PE","ME"], forca: 86 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 87 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2018,
    clube: "Roma",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 89 },
      { nome: "Łukasz Skorupski", posicoes: ["GOL"], forca: 75 },
      { nome: "Alessandro Florenzi", posicoes: ["LD","MD","PD"], forca: 80 },
      { nome: "Bruno Peres", posicoes: ["LD"], forca: 75 },
      { nome: "Kostas Manolas", posicoes: ["ZAG"], forca: 85 },
      { nome: "Federico Fazio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Juan Jesus", posicoes: ["ZAG"], forca: 77 },
      { nome: "Aleksandar Kolarov", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Daniele De Rossi", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Radja Nainggolan", posicoes: ["MC","VOL","MEI"], forca: 86 },
      { nome: "Kevin Strootman", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Lorenzo Pellegrini", posicoes: ["MEI","MC"], forca: 80 },
      { nome: "Cengiz Ünder", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Stephan El Shaarawy", posicoes: ["PE","ATA"], forca: 81 },
      { nome: "Diego Perotti", posicoes: ["PE","MEI"], forca: 80 },
      { nome: "Edin Džeko", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 88 },
      { nome: "Kiko Casilla", posicoes: ["GOL"], forca: 77 },
      { nome: "Dani Carvajal", posicoes: ["LD"], forca: 87 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 92 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nacho", posicoes: ["ZAG","LD","LE"], forca: 82 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 90 },
      { nome: "Casemiro", posicoes: ["VOL"], forca: 89 },
      { nome: "Toni Kroos", posicoes: ["MC"], forca: 92 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Isco", posicoes: ["MEI","PE"], forca: 89 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE","MD"], forca: 88 },
      { nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 99 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 91 },
      { nome: "Gareth Bale", posicoes: ["PD","ATA","MD"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Juventus",
    jogadores: [
      { nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 91 },
      { nome: "Neto", posicoes: ["GOL"], forca: 78 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Leonardo Bonucci", posicoes: ["ZAG"], forca: 91 },
      { nome: "Giorgio Chiellini", posicoes: ["ZAG"], forca: 90 },
      { nome: "Andrea Barzagli", posicoes: ["ZAG"], forca: 87 },
      { nome: "Stephan Lichtsteiner", posicoes: ["LD"], forca: 81 },
      { nome: "Alex Sandro", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Miralem Pjanić", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Claudio Marchisio", posicoes: ["MC"], forca: 84 },
      { nome: "Mario Lemina", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Juan Cuadrado", posicoes: ["PD","MD"], forca: 86 },
      { nome: "Paulo Dybala", posicoes: ["MEI","ATA","PE"], forca: 91 },
      { nome: "Mario Mandžukić", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 91 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Jan Oblak", posicoes: ["GOL"], forca: 91 },
      { nome: "Miguel Ángel Moyà", posicoes: ["GOL"], forca: 77 },
      { nome: "Juanfran", posicoes: ["LD"], forca: 84 },
      { nome: "Diego Godín", posicoes: ["ZAG"], forca: 91 },
      { nome: "José Giménez", posicoes: ["ZAG"], forca: 86 },
      { nome: "Stefan Savić", posicoes: ["ZAG"], forca: 82 },
      { nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 81 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 86 },
      { nome: "Gabi", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Koke", posicoes: ["MC","MEI","MD"], forca: 87 },
      { nome: "Saúl Ñíguez", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Thomas Partey", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Yannick Carrasco", posicoes: ["PE","ME","ATA"], forca: 86 },
      { nome: "Ángel Correa", posicoes: ["ATA","MEI","PD"], forca: 81 },
      { nome: "Antoine Griezmann", posicoes: ["ATA","PE"], forca: 92 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2017,
    clube: "Monaco",
    jogadores: [
      { nome: "Danijel Subašić", posicoes: ["GOL"], forca: 84 },
      { nome: "Djibril Sidibé", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Kamil Glik", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Andrea Raggi", posicoes: ["ZAG","LD"], forca: 76 },
      { nome: "Benjamin Mendy", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Fabinho", posicoes: ["VOL","LD"], forca: 86 },
      { nome: "Tiémoué Bakayoko", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "João Moutinho", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Thomas Lemar", posicoes: ["MEI","PE","ME"], forca: 85 },
      { nome: "Bernardo Silva", posicoes: ["MEI","PD","MD"], forca: 87 },
      { nome: "Nabil Dirar", posicoes: ["PD","LD","MD"], forca: 78 },
      { nome: "Valère Germain", posicoes: ["ATA"], forca: 79 },
      { nome: "Radamel Falcao", posicoes: ["ATA"], forca: 87 },
      { nome: "Kylian Mbappé", posicoes: ["ATA","PE","PD"], forca: 88 },
      { nome: "Guido Carrillo", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2016 (2015-16 — Real Madrid campeão, nos pênaltis sobre o Atlético de Madrid, em Milão) =====

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 86 },
      { nome: "Kiko Casilla", posicoes: ["GOL"], forca: 75 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Danilo", posicoes: ["LD"], forca: 78 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 91 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 87 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 86 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 88 },
      { nome: "Casemiro", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","VOL"], forca: 90 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Isco", posicoes: ["MEI","PE","MC"], forca: 85 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE"], forca: 86 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 90 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 88 },
      { nome: "Cristiano Ronaldo", posicoes: ["ATA","PE"], forca: 95 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Jan Oblak", posicoes: ["GOL"], forca: 89 },
      { nome: "Miguel Ángel Moyà", posicoes: ["GOL"], forca: 76 },
      { nome: "Juanfran", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Diego Godín", posicoes: ["ZAG"], forca: 89 },
      { nome: "José María Giménez", posicoes: ["ZAG"], forca: 82 },
      { nome: "Stefan Savić", posicoes: ["ZAG"], forca: 80 },
      { nome: "Lucas Hernández", posicoes: ["ZAG","LE"], forca: 77 },
      { nome: "Filipe Luís", posicoes: ["LE","ME"], forca: 84 },
      { nome: "Gabi", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Augusto Fernández", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Saúl Ñíguez", posicoes: ["MC","VOL","MEI"], forca: 84 },
      { nome: "Koke", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Yannick Carrasco", posicoes: ["PE","PD","MEI"], forca: 82 },
      { nome: "Ángel Correa", posicoes: ["PD","MEI","ATA"], forca: 78 },
      { nome: "Antoine Griezmann", posicoes: ["ATA","PE"], forca: 91 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Manchester City",
    jogadores: [
      { nome: "Joe Hart", posicoes: ["GOL"], forca: 85 },
      { nome: "Willy Caballero", posicoes: ["GOL"], forca: 75 },
      { nome: "Pablo Zabaleta", posicoes: ["LD","MD"], forca: 79 },
      { nome: "Bacary Sagna", posicoes: ["LD"], forca: 78 },
      { nome: "Vincent Kompany", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nicolás Otamendi", posicoes: ["ZAG"], forca: 84 },
      { nome: "Eliaquim Mangala", posicoes: ["ZAG"], forca: 77 },
      { nome: "Aleksandar Kolarov", posicoes: ["LE","ZAG"], forca: 80 },
      { nome: "Gaël Clichy", posicoes: ["LE"], forca: 77 },
      { nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Yaya Touré", posicoes: ["MC","VOL"], forca: 87 },
      { nome: "David Silva", posicoes: ["MEI","MC"], forca: 90 },
      { nome: "Kevin De Bruyne", posicoes: ["MEI","PD","MC"], forca: 89 },
      { nome: "Jesús Navas", posicoes: ["PD","MD"], forca: 78 },
      { nome: "Raheem Sterling", posicoes: ["PE","PD"], forca: 82 },
      { nome: "Sergio Agüero", posicoes: ["ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2016,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 93 },
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 78 },
      { nome: "Philipp Lahm", posicoes: ["LD","MD","VOL"], forca: 87 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 88 },
      { nome: "Javi Martínez", posicoes: ["ZAG","VOL"], forca: 85 },
      { nome: "Mehdi Benatia", posicoes: ["ZAG"], forca: 82 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 87 },
      { nome: "Juan Bernat", posicoes: ["LE"], forca: 77 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Arturo Vidal", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Thiago Alcântara", posicoes: ["MC","VOL"], forca: 86 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 89 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 88 },
      { nome: "Douglas Costa", posicoes: ["PE","PD"], forca: 85 },
      { nome: "Franck Ribéry", posicoes: ["PE","ME"], forca: 87 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 93 }
    ]
  },

  // ===== Edição 2015 (semifinalistas — Barcelona campeão, 3–1 sobre a Juventus) =====

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Barcelona",
    jogadores: [
      { nome: "Marc-André ter Stegen", posicoes: ["GOL"], forca: 87 },
      { nome: "Claudio Bravo", posicoes: ["GOL"], forca: 86 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 89 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Jérémy Mathieu", posicoes: ["ZAG","LE"], forca: 81 },
      { nome: "Marc Bartra", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jordi Alba", posicoes: ["LE"], forca: 87 },
      { nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 89 },
      { nome: "Ivan Rakitić", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Xavi", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Rafinha", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 98 },
      { nome: "Luis Suárez", posicoes: ["ATA"], forca: 93 },
      { nome: "Neymar", posicoes: ["PE","ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Juventus",
    jogadores: [
      { nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 91 },
      { nome: "Marco Storari", posicoes: ["GOL"], forca: 72 },
      { nome: "Stephan Lichtsteiner", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Leonardo Bonucci", posicoes: ["ZAG"], forca: 88 },
      { nome: "Giorgio Chiellini", posicoes: ["ZAG"], forca: 89 },
      { nome: "Andrea Barzagli", posicoes: ["ZAG"], forca: 86 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 82 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC","MEI"], forca: 88 },
      { nome: "Arturo Vidal", posicoes: ["MC","VOL","MEI"], forca: 89 },
      { nome: "Paul Pogba", posicoes: ["MC","MEI","VOL"], forca: 89 },
      { nome: "Claudio Marchisio", posicoes: ["MC","VOL"], forca: 86 },
      { nome: "Roberto Pereyra", posicoes: ["MEI","MC","PE"], forca: 80 },
      { nome: "Kingsley Coman", posicoes: ["PE","PD","ME"], forca: 76 },
      { nome: "Carlos Tévez", posicoes: ["ATA","MEI"], forca: 89 },
      { nome: "Álvaro Morata", posicoes: ["ATA"], forca: 82 },
      { nome: "Fernando Llorente", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 93 },
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 80 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 88 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 88 },
      { nome: "Mehdi Benatia", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dante", posicoes: ["ZAG"], forca: 81 },
      { nome: "Juan Bernat", posicoes: ["LE","ME"], forca: 78 },
      { nome: "David Alaba", posicoes: ["LE","ZAG","VOL"], forca: 88 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 88 },
      { nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 87 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 91 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD","ME"], forca: 90 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 89 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 92 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2015,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { nome: "Keylor Navas", posicoes: ["GOL"], forca: 84 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 85 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 91 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 87 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 85 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 88 },
      { nome: "Fábio Coentrão", posicoes: ["LE"], forca: 79 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI","VOL"], forca: 90 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "James Rodríguez", posicoes: ["MEI","PE","MD"], forca: 88 },
      { nome: "Isco", posicoes: ["MEI","MC","PE"], forca: 85 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 91 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 89 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 95 }
    ]
  },

  // ===== Edição 2014 (semifinalistas — Real Madrid campeão, 4–1 sobre o Atlético, a La Décima) =====

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 88 },
      { nome: "Diego López", posicoes: ["GOL"], forca: 82 },
      { nome: "Dani Carvajal", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 91 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 88 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 82 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 88 },
      { nome: "Fábio Coentrão", posicoes: ["LE"], forca: 80 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 89 },
      { nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 88 },
      { nome: "Isco", posicoes: ["MEI","MC","PE"], forca: 82 },
      { nome: "Gareth Bale", posicoes: ["PD","PE","ATA"], forca: 90 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 88 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 96 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Thibaut Courtois", posicoes: ["GOL"], forca: 89 },
      { nome: "Daniel Aranzubia", posicoes: ["GOL"], forca: 71 },
      { nome: "Juanfran", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Diego Godín", posicoes: ["ZAG"], forca: 89 },
      { nome: "João Miranda", posicoes: ["ZAG"], forca: 86 },
      { nome: "Toby Alderweireld", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 85 },
      { nome: "Gabi", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Tiago", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Mario Suárez", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Koke", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Raúl García", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Arda Turan", posicoes: ["MEI","PE","MD"], forca: 86 },
      { nome: "Diego Costa", posicoes: ["ATA"], forca: 89 },
      { nome: "David Villa", posicoes: ["ATA"], forca: 85 },
      { nome: "Adrián López", posicoes: ["ATA","PE"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 93 },
      { nome: "Tom Starke", posicoes: ["GOL"], forca: 68 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 89 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 87 },
      { nome: "Dante", posicoes: ["ZAG"], forca: 82 },
      { nome: "Javi Martínez", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 87 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 77 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 89 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Thiago Alcântara", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 87 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 91 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 91 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 88 },
      { nome: "Mario Mandžukić", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2014,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 88 },
      { nome: "Mark Schwarzer", posicoes: ["GOL"], forca: 73 },
      { nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "Gary Cahill", posicoes: ["ZAG"], forca: 85 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 86 },
      { nome: "César Azpilicueta", posicoes: ["LE","LD"], forca: 85 },
      { nome: "David Luiz", posicoes: ["ZAG","VOL"], forca: 85 },
      { nome: "Nemanja Matić", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Ramires", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Frank Lampard", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Oscar", posicoes: ["MEI","PE","MC"], forca: 85 },
      { nome: "Eden Hazard", posicoes: ["PE","MEI","PD"], forca: 90 },
      { nome: "Willian", posicoes: ["PD","PE","MEI"], forca: 84 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 82 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 80 },
      { nome: "Demba Ba", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 2013 (semifinalistas — Bayern campeão, 2–1 sobre o Borussia, final alemã em Wembley) =====

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 92 },
      { nome: "Tom Starke", posicoes: ["GOL"], forca: 66 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 89 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dante", posicoes: ["ZAG"], forca: 82 },
      { nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 89 },
      { nome: "Javi Martínez", posicoes: ["VOL","ZAG"], forca: 86 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 87 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 90 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 91 },
      { nome: "Mario Mandžukić", posicoes: ["ATA"], forca: 85 },
      { nome: "Mario Gómez", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Roman Weidenfeller", posicoes: ["GOL"], forca: 85 },
      { nome: "Mitchell Langerak", posicoes: ["GOL"], forca: 71 },
      { nome: "Łukasz Piszczek", posicoes: ["LD","MD"], forca: 84 },
      { nome: "Mats Hummels", posicoes: ["ZAG"], forca: 88 },
      { nome: "Neven Subotić", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marcel Schmelzer", posicoes: ["LE"], forca: 81 },
      { nome: "Felipe Santana", posicoes: ["ZAG"], forca: 77 },
      { nome: "Sven Bender", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "İlkay Gündoğan", posicoes: ["VOL","MC","MEI"], forca: 84 },
      { nome: "Sebastian Kehl", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Nuri Şahin", posicoes: ["MC","MEI","VOL"], forca: 80 },
      { nome: "Mario Götze", posicoes: ["MEI","ATA","PE"], forca: 87 },
      { nome: "Marco Reus", posicoes: ["MEI","PE","ATA"], forca: 88 },
      { nome: "Jakub Błaszczykowski", posicoes: ["PD","PE","ME"], forca: 81 },
      { nome: "Kevin Großkreutz", posicoes: ["PE","LE","ME"], forca: 78 },
      { nome: "Robert Lewandowski", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 88 },
      { nome: "Diego López", posicoes: ["GOL"], forca: 84 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 91 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 88 },
      { nome: "Raphaël Varane", posicoes: ["ZAG"], forca: 80 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 87 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Luka Modrić", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Mesut Özil", posicoes: ["MEI","PE","MC"], forca: 89 },
      { nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 87 },
      { nome: "Kaká", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 87 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 87 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 96 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2013,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 87 },
      { nome: "José Manuel Pinto", posicoes: ["GOL"], forca: 71 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 88 },
      { nome: "Carles Puyol", posicoes: ["ZAG"], forca: 87 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Jordi Alba", posicoes: ["LE"], forca: 85 },
      { nome: "Adriano", posicoes: ["LE","LD"], forca: 77 },
      { nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Xavi", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Cesc Fàbregas", posicoes: ["MEI","MC"], forca: 87 },
      { nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 97 },
      { nome: "Alexis Sánchez", posicoes: ["PE","PD","ATA"], forca: 82 },
      { nome: "David Villa", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Pedro", posicoes: ["PD","PE","ATA"], forca: 84 }
    ]
  },

  // ===== Edição 2012 (semifinalistas — Chelsea campeão nos pênaltis sobre o Bayern, em Munique) =====

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 89 },
      { nome: "Ross Turnbull", posicoes: ["GOL"], forca: 64 },
      { nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 87 },
      { nome: "David Luiz", posicoes: ["ZAG","VOL"], forca: 84 },
      { nome: "Gary Cahill", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 87 },
      { nome: "Ramires", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Frank Lampard", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "John Obi Mikel", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Raul Meireles", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Juan Mata", posicoes: ["MEI","PE","MC"], forca: 87 },
      { nome: "Florent Malouda", posicoes: ["PE","ME","MEI"], forca: 78 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 88 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 81 },
      { nome: "Daniel Sturridge", posicoes: ["ATA","PE","PD"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Bayern de Munique",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 91 },
      { nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 66 },
      { nome: "Philipp Lahm", posicoes: ["LD","VOL","MD"], forca: 88 },
      { nome: "Jérôme Boateng", posicoes: ["ZAG"], forca: 82 },
      { nome: "Holger Badstuber", posicoes: ["ZAG"], forca: 80 },
      { nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Alaba", posicoes: ["LE","ZAG"], forca: 81 },
      { nome: "Anatoliy Tymoshchuk", posicoes: ["VOL","ZAG","MC"], forca: 78 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC","MEI"], forca: 89 },
      { nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Toni Kroos", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Thomas Müller", posicoes: ["MEI","PD","ATA"], forca: 86 },
      { nome: "Arjen Robben", posicoes: ["PD","PE"], forca: 90 },
      { nome: "Franck Ribéry", posicoes: ["PE","PD"], forca: 89 },
      { nome: "Mario Gómez", posicoes: ["ATA"], forca: 85 },
      { nome: "Ivica Olić", posicoes: ["ATA","PE"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 91 },
      { nome: "Antonio Adán", posicoes: ["GOL"], forca: 71 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Sergio Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Pepe", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 87 },
      { nome: "Fábio Coentrão", posicoes: ["LE"], forca: 80 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Mesut Özil", posicoes: ["MEI","PE","MC"], forca: 88 },
      { nome: "Ángel Di María", posicoes: ["MEI","PE","PD"], forca: 86 },
      { nome: "Kaká", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Cristiano Ronaldo", posicoes: ["PE","ATA"], forca: 95 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 86 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2012,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 88 },
      { nome: "José Manuel Pinto", posicoes: ["GOL"], forca: 71 },
      { nome: "Dani Alves", posicoes: ["LD","MD"], forca: 88 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 88 },
      { nome: "Carles Puyol", posicoes: ["ZAG"], forca: 88 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 85 },
      { nome: "Éric Abidal", posicoes: ["LE","ZAG"], forca: 82 },
      { nome: "Adriano", posicoes: ["LE","LD"], forca: 78 },
      { nome: "Sergio Busquets", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Xavi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Andrés Iniesta", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Cesc Fàbregas", posicoes: ["MEI","MC"], forca: 87 },
      { nome: "Lionel Messi", posicoes: ["PD","MEI","ATA"], forca: 97 },
      { nome: "Alexis Sánchez", posicoes: ["PE","PD","ATA"], forca: 82 },
      { nome: "David Villa", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Pedro", posicoes: ["PD","PE","ATA"], forca: 85 }
    ]
  },

  // ===== Edição 2011 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 87 },
      { nome: "Dani Alves", posicoes: ["LD"], forca: 92 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 91 },
      { nome: "Javier Mascherano", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Eric Abidal", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Maxwell", posicoes: ["LE"], forca: 81 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 91 },
      { nome: "Xavi", posicoes: ["MC"], forca: 96 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 95 },
      { nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Thiago Alcântara", posicoes: ["MC"], forca: 79 },
      { nome: "Pedro", posicoes: ["PD"], forca: 87 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 98 },
      { nome: "David Villa", posicoes: ["ATA","PD"], forca: 91 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 91 },
      { nome: "Rafael", posicoes: ["LD"], forca: 77 },
      { nome: "Fábio", posicoes: ["LD","MC"], forca: 75 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 88 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 92 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 88 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 91 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 86 },
      { nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Nani", posicoes: ["PD"], forca: 87 },
      { nome: "Antonio Valencia", posicoes: ["PD"], forca: 82 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 91 },
      { nome: "Javier Hernández", posicoes: ["ATA"], forca: 85 },
      { nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 87 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 90 },
      { nome: "Sergio Ramos", posicoes: ["LD","ZAG"], forca: 90 },
      { nome: "Pepe", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 90 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 87 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Sami Khedira", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Lassana Diarra", posicoes: ["VOL"], forca: 82 },
      { nome: "Mesut Özil", posicoes: ["MEI"], forca: 88 },
      { nome: "Ángel Di María", posicoes: ["MC","PD"], forca: 87 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 82 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 95 },
      { nome: "Karim Benzema", posicoes: ["ATA"], forca: 86 },
      { nome: "Gonzalo Higuaín", posicoes: ["ATA"], forca: 87 },
      { nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2011,
    clube: "Schalke 04",
    jogadores: [
      { nome: "Manuel Neuer", posicoes: ["GOL"], forca: 91 },
      { nome: "Atsuto Uchida", posicoes: ["LD"], forca: 77 },
      { nome: "Benedikt Höwedes", posicoes: ["ZAG"], forca: 81 },
      { nome: "Christoph Metzelder", posicoes: ["ZAG"], forca: 77 },
      { nome: "Kyriakos Papadopoulos", posicoes: ["ZAG","VOL"], forca: 77 },
      { nome: "Hans Sarpei", posicoes: ["LE"], forca: 73 },
      { nome: "Joel Matip", posicoes: ["ZAG","VOL"], forca: 77 },
      { nome: "Peer Kluge", posicoes: ["VOL"], forca: 75 },
      { nome: "Ivan Rakitić", posicoes: ["MC","VOL"], forca: 81 },
      { nome: "José Manuel Jurado", posicoes: ["MEI"], forca: 79 },
      { nome: "Jefferson Farfán", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Julian Draxler", posicoes: ["MC","PD"], forca: 72 },
      { nome: "Christoph Moritz", posicoes: ["VOL","MC"], forca: 73 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 87 },
      { nome: "Klaas-Jan Huntelaar", posicoes: ["ATA"], forca: 85 },
      { nome: "Edu", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2010 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Internazionale",
    jogadores: [
      { nome: "Júlio César", posicoes: ["GOL"], forca: 92 },
      { nome: "Maicon", posicoes: ["LD"], forca: 92 },
      { nome: "Lúcio", posicoes: ["ZAG"], forca: 91 },
      { nome: "Walter Samuel", posicoes: ["ZAG"], forca: 90 },
      { nome: "Cristian Chivu", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Javier Zanetti", posicoes: ["LD","VOL"], forca: 91 },
      { nome: "Marco Materazzi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Esteban Cambiasso", posicoes: ["VOL"], forca: 88 },
      { nome: "Thiago Motta", posicoes: ["VOL"], forca: 85 },
      { nome: "Wesley Sneijder", posicoes: ["MEI"], forca: 93 },
      { nome: "Dejan Stanković", posicoes: ["MC"], forca: 86 },
      { nome: "Sulley Muntari", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Goran Pandev", posicoes: ["ATA","PD"], forca: 84 },
      { nome: "Samuel Eto'o", posicoes: ["ATA","PD"], forca: 91 },
      { nome: "Diego Milito", posicoes: ["ATA"], forca: 93 },
      { nome: "Mario Balotelli", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Bayern München",
    jogadores: [
      { nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 84 },
      { nome: "Philipp Lahm", posicoes: ["LD"], forca: 90 },
      { nome: "Holger Badstuber", posicoes: ["ZAG","LD"], forca: 77 },
      { nome: "Daniel Van Buyten", posicoes: ["ZAG"], forca: 82 },
      { nome: "Martín Demichelis", posicoes: ["ZAG"], forca: 82 },
      { nome: "Diego Contento", posicoes: ["LE"], forca: 73 },
      { nome: "Mark van Bommel", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Bastian Schweinsteiger", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Hamit Altıntop", posicoes: ["MC","PD"], forca: 78 },
      { nome: "Thomas Müller", posicoes: ["MC","ATA"], forca: 85 },
      { nome: "Franck Ribéry", posicoes: ["PE"], forca: 90 },
      { nome: "Arjen Robben", posicoes: ["PD"], forca: 93 },
      { nome: "Ivica Olić", posicoes: ["ATA"], forca: 86 },
      { nome: "Mario Gómez", posicoes: ["ATA"], forca: 84 },
      { nome: "Miroslav Klose", posicoes: ["ATA"], forca: 85 },
      { nome: "Anatoliy Tymoshchuk", posicoes: ["VOL","ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 87 },
      { nome: "Dani Alves", posicoes: ["LD"], forca: 92 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 90 },
      { nome: "Gabriel Milito", posicoes: ["ZAG"], forca: 82 },
      { nome: "Eric Abidal", posicoes: ["LE"], forca: 85 },
      { nome: "Maxwell", posicoes: ["LE"], forca: 79 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 90 },
      { nome: "Xavi", posicoes: ["MC"], forca: 95 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 92 },
      { nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Yaya Touré", posicoes: ["VOL"], forca: 87 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 96 },
      { nome: "Pedro", posicoes: ["PD"], forca: 84 },
      { nome: "Zlatan Ibrahimović", posicoes: ["ATA"], forca: 91 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2010,
    clube: "Lyon",
    jogadores: [
      { nome: "Hugo Lloris", posicoes: ["GOL"], forca: 87 },
      { nome: "Anthony Réveillère", posicoes: ["LD"], forca: 79 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jean-Alain Boumsong", posicoes: ["ZAG"], forca: 78 },
      { nome: "Aly Cissokho", posicoes: ["LE"], forca: 78 },
      { nome: "François Clerc", posicoes: ["LD"], forca: 76 },
      { nome: "Jérémy Toulalan", posicoes: ["VOL"], forca: 85 },
      { nome: "Kim Källström", posicoes: ["MC"], forca: 81 },
      { nome: "Miralem Pjanić", posicoes: ["MEI"], forca: 81 },
      { nome: "Jean II Makoun", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Maxime Gonalons", posicoes: ["VOL"], forca: 76 },
      { nome: "Michel Bastos", posicoes: ["MC","LE"], forca: 82 },
      { nome: "Sidney Govou", posicoes: ["MC","PD"], forca: 81 },
      { nome: "César Delgado", posicoes: ["ATA","PD"], forca: 79 },
      { nome: "Lisandro López", posicoes: ["ATA"], forca: 86 },
      { nome: "Bafétimbi Gomis", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 2009 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 87 },
      { nome: "Dani Alves", posicoes: ["LD"], forca: 92 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Gerard Piqué", posicoes: ["ZAG"], forca: 85 },
      { nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Eric Abidal", posicoes: ["LE"], forca: 85 },
      { nome: "Sylvinho", posicoes: ["LE"], forca: 81 },
      { nome: "Yaya Touré", posicoes: ["VOL"], forca: 87 },
      { nome: "Sergio Busquets", posicoes: ["VOL"], forca: 82 },
      { nome: "Xavi", posicoes: ["MC"], forca: 96 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 95 },
      { nome: "Seydou Keita", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 97 },
      { nome: "Thierry Henry", posicoes: ["ATA","PD"], forca: 90 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 93 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 91 },
      { nome: "John O'Shea", posicoes: ["LD","ZAG"], forca: 78 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 90 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 92 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 88 },
      { nome: "Jonny Evans", posicoes: ["ZAG"], forca: 77 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 91 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 91 },
      { nome: "Anderson", posicoes: ["MC"], forca: 79 },
      { nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 93 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 91 },
      { nome: "Carlos Tévez", posicoes: ["ATA"], forca: 90 },
      { nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 92 },
      { nome: "José Bosingwa", posicoes: ["LD"], forca: 81 },
      { nome: "Branislav Ivanović", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 90 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 91 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 90 },
      { nome: "Juliano Belletti", posicoes: ["LD","MC"], forca: 79 },
      { nome: "Michael Essien", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 92 },
      { nome: "Michael Ballack", posicoes: ["MC"], forca: 90 },
      { nome: "John Obi Mikel", posicoes: ["VOL"], forca: 79 },
      { nome: "Florent Malouda", posicoes: ["PE"], forca: 82 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 85 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 90 },
      { nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2009,
    clube: "Arsenal",
    jogadores: [
      { nome: "Manuel Almunia", posicoes: ["GOL"], forca: 78 },
      { nome: "Bacary Sagna", posicoes: ["LD"], forca: 82 },
      { nome: "Kolo Touré", posicoes: ["ZAG"], forca: 87 },
      { nome: "William Gallas", posicoes: ["ZAG"], forca: 88 },
      { nome: "Mikaël Silvestre", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Gaël Clichy", posicoes: ["LE"], forca: 82 },
      { nome: "Alex Song", posicoes: ["VOL","ZAG"], forca: 79 },
      { nome: "Denílson", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Cesc Fàbregas", posicoes: ["MC"], forca: 90 },
      { nome: "Samir Nasri", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Theo Walcott", posicoes: ["PD"], forca: 79 },
      { nome: "Abou Diaby", posicoes: ["MC","PD"], forca: 77 },
      { nome: "Robin van Persie", posicoes: ["ATA","PD"], forca: 86 },
      { nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 85 },
      { nome: "Nicklas Bendtner", posicoes: ["ATA"], forca: 77 },
      { nome: "Eduardo da Silva", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2008 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 91 },
      { nome: "Wes Brown", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 92 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 91 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 90 },
      { nome: "Owen Hargreaves", posicoes: ["VOL","LD"], forca: 84 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 90 },
      { nome: "Anderson", posicoes: ["MC"], forca: 81 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 91 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 97 },
      { nome: "Nani", posicoes: ["PD"], forca: 84 },
      { nome: "Carlos Tévez", posicoes: ["ATA"], forca: 90 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 92 },
      { nome: "Darren Fletcher", posicoes: ["VOL","MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 91 },
      { nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 84 },
      { nome: "Juliano Belletti", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 90 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 91 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 90 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 91 },
      { nome: "Michael Essien", posicoes: ["VOL","MC","LD"], forca: 90 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 92 },
      { nome: "Michael Ballack", posicoes: ["MC"], forca: 91 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 85 },
      { nome: "Florent Malouda", posicoes: ["PE"], forca: 82 },
      { nome: "Salomon Kalou", posicoes: ["ATA","PD"], forca: 79 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 91 },
      { nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 87 },
      { nome: "Gianluca Zambrotta", posicoes: ["LD"], forca: 90 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Gabriel Milito", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Eric Abidal", posicoes: ["LE"], forca: 85 },
      { nome: "Yaya Touré", posicoes: ["VOL"], forca: 87 },
      { nome: "Xavi", posicoes: ["MC"], forca: 91 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 90 },
      { nome: "Deco", posicoes: ["MC"], forca: 92 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 92 },
      { nome: "Ronaldinho", posicoes: ["MEI","PD"], forca: 86 },
      { nome: "Thierry Henry", posicoes: ["ATA","PD"], forca: 87 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 90 },
      { nome: "Bojan Krkić", posicoes: ["ATA"], forca: 77 },
      { nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2008,
    clube: "Liverpool",
    jogadores: [
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 87 },
      { nome: "Steve Finnan", posicoes: ["LD"], forca: 82 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 88 },
      { nome: "Martin Škrtel", posicoes: ["ZAG"], forca: 79 },
      { nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 86 },
      { nome: "Fábio Aurélio", posicoes: ["LE"], forca: 79 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Javier Mascherano", posicoes: ["VOL"], forca: 88 },
      { nome: "Steven Gerrard", posicoes: ["MC"], forca: 93 },
      { nome: "Lucas Leiva", posicoes: ["VOL","MC"], forca: 75 },
      { nome: "Yossi Benayoun", posicoes: ["MC","PD"], forca: 79 },
      { nome: "Ryan Babel", posicoes: ["PD"], forca: 77 },
      { nome: "Dirk Kuyt", posicoes: ["ATA"], forca: 84 },
      { nome: "Fernando Torres", posicoes: ["ATA"], forca: 93 },
      { nome: "Peter Crouch", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2007 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Cafu", posicoes: ["LD"], forca: 90 },
      { nome: "Massimo Oddo", posicoes: ["LD"], forca: 84 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 92 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 88 },
      { nome: "Marek Jankulovski", posicoes: ["LE"], forca: 84 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 88 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 91 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 97 },
      { nome: "Yoann Gourcuff", posicoes: ["MEI"], forca: 77 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 84 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 88 },
      { nome: "Alberto Gilardino", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Liverpool",
    jogadores: [
      { nome: "Pepe Reina", posicoes: ["GOL"], forca: 87 },
      { nome: "Steve Finnan", posicoes: ["LD"], forca: 82 },
      { nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 88 },
      { nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 86 },
      { nome: "Daniel Agger", posicoes: ["ZAG"], forca: 82 },
      { nome: "John Arne Riise", posicoes: ["LD","ME"], forca: 85 },
      { nome: "Álvaro Arbeloa", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Javier Mascherano", posicoes: ["VOL"], forca: 87 },
      { nome: "Steven Gerrard", posicoes: ["MC"], forca: 93 },
      { nome: "Mohamed Sissoko", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Jermaine Pennant", posicoes: ["PD"], forca: 77 },
      { nome: "Bolo Zenden", posicoes: ["MC","PE"], forca: 77 },
      { nome: "Peter Crouch", posicoes: ["ATA"], forca: 82 },
      { nome: "Dirk Kuyt", posicoes: ["ATA"], forca: 84 },
      { nome: "Craig Bellamy", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Manchester United",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 91 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 86 },
      { nome: "Wes Brown", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 90 },
      { nome: "Nemanja Vidić", posicoes: ["ZAG"], forca: 88 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 88 },
      { nome: "Mikaël Silvestre", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Michael Carrick", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 91 },
      { nome: "Ryan Giggs", posicoes: ["MC","PD"], forca: 88 },
      { nome: "Cristiano Ronaldo", posicoes: ["PD","ATA"], forca: 93 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Wayne Rooney", posicoes: ["ATA"], forca: 91 },
      { nome: "Louis Saha", posicoes: ["ATA"], forca: 82 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 84 },
      { nome: "Alan Smith", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2007,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 92 },
      { nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Ferreira", posicoes: ["LD"], forca: 85 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 90 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 91 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 90 },
      { nome: "Wayne Bridge", posicoes: ["LE"], forca: 82 },
      { nome: "Michael Essien", posicoes: ["VOL","MC","LD"], forca: 90 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 91 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 92 },
      { nome: "Michael Ballack", posicoes: ["MC"], forca: 87 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 85 },
      { nome: "Arjen Robben", posicoes: ["PD"], forca: 87 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 92 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 85 },
      { nome: "Salomon Kalou", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },

  // ===== Edição 2006 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Barcelona",
    jogadores: [
      { nome: "Víctor Valdés", posicoes: ["GOL"], forca: 87 },
      { nome: "Oleguer", posicoes: ["LD","ZAG"], forca: 78 },
      { nome: "Carles Puyol", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Rafael Márquez", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Giovanni van Bronckhorst", posicoes: ["LE"], forca: 84 },
      { nome: "Juliano Belletti", posicoes: ["LD"], forca: 81 },
      { nome: "Sylvinho", posicoes: ["LE"], forca: 81 },
      { nome: "Edmílson", posicoes: ["VOL","ZAG"], forca: 84 },
      { nome: "Xavi", posicoes: ["MC"], forca: 88 },
      { nome: "Deco", posicoes: ["MC"], forca: 91 },
      { nome: "Andrés Iniesta", posicoes: ["MC"], forca: 82 },
      { nome: "Ludovic Giuly", posicoes: ["MC","PD"], forca: 87 },
      { nome: "Ronaldinho", posicoes: ["MEI","PD"], forca: 97 },
      { nome: "Lionel Messi", posicoes: ["ATA","PD"], forca: 85 },
      { nome: "Samuel Eto'o", posicoes: ["ATA"], forca: 93 },
      { nome: "Henrik Larsson", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Arsenal",
    jogadores: [
      { nome: "Jens Lehmann", posicoes: ["GOL"], forca: 88 },
      { nome: "Emmanuel Eboué", posicoes: ["LD"], forca: 79 },
      { nome: "Kolo Touré", posicoes: ["ZAG"], forca: 88 },
      { nome: "Philippe Senderos", posicoes: ["ZAG"], forca: 79 },
      { nome: "Sol Campbell", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ashley Cole", posicoes: ["LE"], forca: 90 },
      { nome: "Mathieu Flamini", posicoes: ["VOL","LD"], forca: 79 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 86 },
      { nome: "Cesc Fàbregas", posicoes: ["MC"], forca: 87 },
      { nome: "Robert Pirès", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Freddie Ljungberg", posicoes: ["MC","PD"], forca: 84 },
      { nome: "Aleksandr Hleb", posicoes: ["MC","PD"], forca: 82 },
      { nome: "José Antonio Reyes", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Dennis Bergkamp", posicoes: ["ATA"], forca: 82 },
      { nome: "Robin van Persie", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Thierry Henry", posicoes: ["ATA"], forca: 95 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Cafu", posicoes: ["LD"], forca: 90 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 93 },
      { nome: "Jaap Stam", posicoes: ["ZAG"], forca: 90 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 84 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 92 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 88 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 91 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 93 },
      { nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Rui Costa", posicoes: ["MEI"], forca: 88 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 82 },
      { nome: "Alberto Gilardino", posicoes: ["ATA"], forca: 84 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 91 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2006,
    clube: "Villarreal",
    jogadores: [
      { nome: "Sebastián Viera", posicoes: ["GOL"], forca: 77 },
      { nome: "Mariano Barbosa", posicoes: ["GOL"], forca: 73 },
      { nome: "Javi Venta", posicoes: ["LD"], forca: 77 },
      { nome: "Gonzalo Rodríguez", posicoes: ["ZAG"], forca: 82 },
      { nome: "Juan Manuel Peña", posicoes: ["ZAG"], forca: 78 },
      { nome: "Rodolfo Arruabarrena", posicoes: ["LE"], forca: 78 },
      { nome: "Quique Álvarez", posicoes: ["ZAG"], forca: 76 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 87 },
      { nome: "Josico", posicoes: ["VOL"], forca: 77 },
      { nome: "Alessio Tacchinardi", posicoes: ["VOL"], forca: 82 },
      { nome: "Juan Román Riquelme", posicoes: ["MEI"], forca: 92 },
      { nome: "Santi Cazorla", posicoes: ["MC","PD"], forca: 79 },
      { nome: "Juan Pablo Sorín", posicoes: ["LD","ME"], forca: 84 },
      { nome: "Diego Forlán", posicoes: ["ATA"], forca: 87 },
      { nome: "José Mari", posicoes: ["ATA"], forca: 77 },
      { nome: "Guillermo Franco", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 2005 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Liverpool",
    jogadores: [
      { nome: "Jerzy Dudek", posicoes: ["GOL"], forca: 85 },
      { nome: "Steve Finnan", posicoes: ["LD"], forca: 84 },
      { nome: "Jamie Carragher", posicoes: ["ZAG","LD"], forca: 90 },
      { nome: "Sami Hyypiä", posicoes: ["ZAG"], forca: 86 },
      { nome: "Djimi Traoré", posicoes: ["LE"], forca: 75 },
      { nome: "John Arne Riise", posicoes: ["LD","ME"], forca: 85 },
      { nome: "Xabi Alonso", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Steven Gerrard", posicoes: ["MC"], forca: 93 },
      { nome: "Dietmar Hamann", posicoes: ["VOL"], forca: 84 },
      { nome: "Igor Bišćan", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Luis García", posicoes: ["MEI","PD"], forca: 86 },
      { nome: "Harry Kewell", posicoes: ["MC","PE"], forca: 82 },
      { nome: "Vladimír Šmicer", posicoes: ["MC","PD"], forca: 81 },
      { nome: "Milan Baroš", posicoes: ["ATA"], forca: 84 },
      { nome: "Djibril Cissé", posicoes: ["ATA"], forca: 81 },
      { nome: "Florent Sinama Pongolle", posicoes: ["ATA"], forca: 73 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Cafu", posicoes: ["LD"], forca: 90 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 93 },
      { nome: "Jaap Stam", posicoes: ["ZAG"], forca: 90 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 92 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 84 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 88 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 92 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 91 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 92 },
      { nome: "Rui Costa", posicoes: ["MEI"], forca: 88 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 82 },
      { nome: "Hernán Crespo", posicoes: ["ATA"], forca: 90 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 93 },
      { nome: "Jon Dahl Tomasson", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "Chelsea",
    jogadores: [
      { nome: "Petr Čech", posicoes: ["GOL"], forca: 91 },
      { nome: "Paulo Ferreira", posicoes: ["LD"], forca: 85 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 90 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 91 },
      { nome: "William Gallas", posicoes: ["ZAG","LD"], forca: 88 },
      { nome: "Wayne Bridge", posicoes: ["LE"], forca: 82 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 91 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 93 },
      { nome: "Tiago", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Geremi", posicoes: ["MC","LD"], forca: 81 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 85 },
      { nome: "Damien Duff", posicoes: ["PE"], forca: 86 },
      { nome: "Arjen Robben", posicoes: ["PD"], forca: 87 },
      { nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 82 },
      { nome: "Didier Drogba", posicoes: ["ATA"], forca: 85 },
      { nome: "Mateja Kežman", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2005,
    clube: "PSV Eindhoven",
    jogadores: [
      { nome: "Heurelho Gomes", posicoes: ["GOL"], forca: 82 },
      { nome: "André Ooijer", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { nome: "Wilfred Bouma", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Lee Young-pyo", posicoes: ["LE"], forca: 81 },
      { nome: "Theo Lucius", posicoes: ["LD","MC"], forca: 77 },
      { nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Mark van Bommel", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Johann Vogel", posicoes: ["VOL"], forca: 81 },
      { nome: "Park Ji-sung", posicoes: ["MC","PD"], forca: 84 },
      { nome: "DaMarcus Beasley", posicoes: ["PD"], forca: 77 },
      { nome: "John de Jong", posicoes: ["MEI"], forca: 77 },
      { nome: "Jefferson Farfán", posicoes: ["ATA","PD"], forca: 82 },
      { nome: "Jan Vennegoor of Hesselink", posicoes: ["ATA"], forca: 79 },
      { nome: "Robert", posicoes: ["ATA"], forca: 77 },
      { nome: "Gerald Sibon", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2004 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Porto",
    jogadores: [
      { nome: "Vítor Baía", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Ferreira", posicoes: ["LD"], forca: 85 },
      { nome: "Nuno Valente", posicoes: ["LE"], forca: 84 },
      { nome: "Jorge Costa", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ricardo Carvalho", posicoes: ["ZAG"], forca: 90 },
      { nome: "Pedro Emanuel", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ricardo Costa", posicoes: ["ZAG"], forca: 78 },
      { nome: "Costinha", posicoes: ["VOL"], forca: 85 },
      { nome: "Maniche", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Deco", posicoes: ["MEI"], forca: 93 },
      { nome: "Pedro Mendes", posicoes: ["MC"], forca: 82 },
      { nome: "Dmitri Alenichev", posicoes: ["MC","ATA"], forca: 84 },
      { nome: "Carlos Alberto", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Derlei", posicoes: ["ATA"], forca: 85 },
      { nome: "Benni McCarthy", posicoes: ["ATA"], forca: 85 },
      { nome: "Edgaras Jankauskas", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Monaco",
    jogadores: [
      { nome: "Flavio Roma", posicoes: ["GOL"], forca: 79 },
      { nome: "Patrice Evra", posicoes: ["LE"], forca: 88 },
      { nome: "Gaël Givet", posicoes: ["ZAG","LD"], forca: 81 },
      { nome: "Julien Rodriguez", posicoes: ["ZAG"], forca: 79 },
      { nome: "Sébastien Squillaci", posicoes: ["ZAG"], forca: 81 },
      { nome: "Hugo Ibarra", posicoes: ["LD"], forca: 82 },
      { nome: "Lucas Bernardi", posicoes: ["VOL"], forca: 81 },
      { nome: "Akis Zikos", posicoes: ["VOL"], forca: 79 },
      { nome: "Édouard Cissé", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Ludovic Giuly", posicoes: ["MC","PD"], forca: 90 },
      { nome: "Jérôme Rothen", posicoes: ["MC","PE"], forca: 87 },
      { nome: "Jaroslav Plašil", posicoes: ["MC","PD"], forca: 79 },
      { nome: "Dado Pršo", posicoes: ["ATA"], forca: 85 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 91 },
      { nome: "Shabani Nonda", posicoes: ["ATA"], forca: 79 },
      { nome: "Emmanuel Adebayor", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Chelsea",
    jogadores: [
      { nome: "Carlo Cudicini", posicoes: ["GOL"], forca: 84 },
      { nome: "Wayne Bridge", posicoes: ["LE"], forca: 82 },
      { nome: "William Gallas", posicoes: ["ZAG","LD"], forca: 88 },
      { nome: "John Terry", posicoes: ["ZAG"], forca: 88 },
      { nome: "Marcel Desailly", posicoes: ["ZAG"], forca: 84 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 90 },
      { nome: "Frank Lampard", posicoes: ["MC"], forca: 91 },
      { nome: "Geremi", posicoes: ["MC","LD"], forca: 81 },
      { nome: "Joe Cole", posicoes: ["MEI"], forca: 85 },
      { nome: "Damien Duff", posicoes: ["PD"], forca: 86 },
      { nome: "Juan Sebastián Verón", posicoes: ["MC"], forca: 82 },
      { nome: "Jesper Grønkjær", posicoes: ["PD"], forca: 79 },
      { nome: "Eidur Gudjohnsen", posicoes: ["ATA","MC"], forca: 82 },
      { nome: "Adrian Mutu", posicoes: ["ATA","PD"], forca: 82 },
      { nome: "Jimmy Floyd Hasselbaink", posicoes: ["ATA"], forca: 85 },
      { nome: "Hernán Crespo", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2004,
    clube: "Deportivo La Coruña",
    jogadores: [
      { nome: "José Molina", posicoes: ["GOL"], forca: 82 },
      { nome: "Manuel Pablo", posicoes: ["LD"], forca: 81 },
      { nome: "Héctor", posicoes: ["LD","ZAG"], forca: 77 },
      { nome: "Jorge Andrade", posicoes: ["ZAG"], forca: 85 },
      { nome: "Noureddine Naybet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Enrique Romero", posicoes: ["LE"], forca: 79 },
      { nome: "Lionel Scaloni", posicoes: ["LD","MC"], forca: 78 },
      { nome: "Mauro Silva", posicoes: ["VOL"], forca: 85 },
      { nome: "Aldo Duscher", posicoes: ["VOL"], forca: 81 },
      { nome: "Sergio González", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Víctor Sánchez", posicoes: ["MC","PD"], forca: 81 },
      { nome: "Fran", posicoes: ["MC","PE"], forca: 82 },
      { nome: "Juan Carlos Valerón", posicoes: ["MEI"], forca: 90 },
      { nome: "Albert Luque", posicoes: ["ATA","PD"], forca: 84 },
      { nome: "Walter Pandiani", posicoes: ["ATA"], forca: 84 },
      { nome: "Diego Tristán", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 2003 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Milan",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Paolo Maldini", posicoes: ["ZAG","LD"], forca: 93 },
      { nome: "Alessandro Nesta", posicoes: ["ZAG"], forca: 93 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 85 },
      { nome: "Kakha Kaladze", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Dario Šimić", posicoes: ["ZAG"], forca: 79 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gennaro Gattuso", posicoes: ["VOL"], forca: 88 },
      { nome: "Andrea Pirlo", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 90 },
      { nome: "Massimo Ambrosini", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Rui Costa", posicoes: ["MEI"], forca: 88 },
      { nome: "Serginho", posicoes: ["MC","LE"], forca: 84 },
      { nome: "Rivaldo", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 91 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 93 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Juventus",
    jogadores: [
      { nome: "Gianluigi Buffon", posicoes: ["GOL"], forca: 93 },
      { nome: "Lilian Thuram", posicoes: ["LD","ZAG"], forca: 92 },
      { nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 86 },
      { nome: "Paolo Montero", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gianluca Zambrotta", posicoes: ["LD"], forca: 90 },
      { nome: "Igor Tudor", posicoes: ["VOL","ZAG"], forca: 81 },
      { nome: "Edgar Davids", posicoes: ["VOL"], forca: 90 },
      { nome: "Alessio Tacchinardi", posicoes: ["VOL"], forca: 82 },
      { nome: "Pavel Nedvěd", posicoes: ["MEI"], forca: 96 },
      { nome: "Mauro Camoranesi", posicoes: ["MC","PD"], forca: 87 },
      { nome: "Antonio Conte", posicoes: ["MC"], forca: 84 },
      { nome: "Alessandro Del Piero", posicoes: ["ATA"], forca: 91 },
      { nome: "David Trezeguet", posicoes: ["ATA"], forca: 90 },
      { nome: "Marco Di Vaio", posicoes: ["ATA"], forca: 82 },
      { nome: "Marcelo Salas", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 90 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 86 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 93 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 91 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Francisco Pavón", posicoes: ["ZAG"], forca: 76 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 91 },
      { nome: "Esteban Cambiasso", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Luís Figo", posicoes: ["MC","PD"], forca: 93 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 96 },
      { nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 82 },
      { nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Guti", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 92 },
      { nome: "Ronaldo", posicoes: ["ATA"], forca: 93 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2003,
    clube: "Internazionale",
    jogadores: [
      { nome: "Francesco Toldo", posicoes: ["GOL"], forca: 87 },
      { nome: "Javier Zanetti", posicoes: ["LD","ZAG"], forca: 92 },
      { nome: "Fabio Cannavaro", posicoes: ["ZAG"], forca: 92 },
      { nome: "Marco Materazzi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Iván Córdoba", posicoes: ["ZAG","LD"], forca: 87 },
      { nome: "Francesco Coco", posicoes: ["LE"], forca: 79 },
      { nome: "Luigi Di Biagio", posicoes: ["VOL"], forca: 82 },
      { nome: "Cristiano Zanetti", posicoes: ["VOL"], forca: 82 },
      { nome: "Matías Almeyda", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Emre Belözoğlu", posicoes: ["MC"], forca: 82 },
      { nome: "Sérgio Conceição", posicoes: ["MC","PD"], forca: 82 },
      { nome: "Álvaro Recoba", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Hernán Crespo", posicoes: ["ATA"], forca: 90 },
      { nome: "Christian Vieri", posicoes: ["ATA"], forca: 92 },
      { nome: "Gabriel Batistuta", posicoes: ["ATA"], forca: 82 },
      { nome: "Obafemi Martins", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2002 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 87 },
      { nome: "César Sánchez", posicoes: ["GOL"], forca: 81 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 86 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 93 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 91 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Francisco Pavón", posicoes: ["ZAG"], forca: 77 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 91 },
      { nome: "Flávio Conceição", posicoes: ["VOL"], forca: 84 },
      { nome: "Luís Figo", posicoes: ["MC","PD"], forca: 93 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 96 },
      { nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 84 },
      { nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Guti", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 93 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Bayer Leverkusen",
    jogadores: [
      { nome: "Hans-Jörg Butt", posicoes: ["GOL"], forca: 84 },
      { nome: "Lúcio", posicoes: ["ZAG"], forca: 91 },
      { nome: "Jens Nowotny", posicoes: ["ZAG"], forca: 86 },
      { nome: "Boris Živković", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Diego Placente", posicoes: ["LE"], forca: 81 },
      { nome: "Zoltán Sebescen", posicoes: ["LD"], forca: 76 },
      { nome: "Carsten Ramelow", posicoes: ["VOL","ZAG"], forca: 84 },
      { nome: "Michael Ballack", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Yıldıray Baştürk", posicoes: ["MEI"], forca: 87 },
      { nome: "Bernd Schneider", posicoes: ["MC","LD"], forca: 87 },
      { nome: "Zé Roberto", posicoes: ["MC","PE"], forca: 90 },
      { nome: "Marko Babić", posicoes: ["MC","PD"], forca: 77 },
      { nome: "Robson Ponte", posicoes: ["MEI"], forca: 76 },
      { nome: "Oliver Neuville", posicoes: ["ATA","PD"], forca: 85 },
      { nome: "Ulf Kirsten", posicoes: ["ATA"], forca: 82 },
      { nome: "Dimitar Berbatov", posicoes: ["ATA"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Barcelona",
    jogadores: [
      { nome: "Roberto Bonano", posicoes: ["GOL"], forca: 78 },
      { nome: "Carles Puyol", posicoes: ["LD","ZAG"], forca: 92 },
      { nome: "Michael Reiziger", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Frank de Boer", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Abelardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Sergi Barjuán", posicoes: ["LE"], forca: 85 },
      { nome: "Philippe Christanval", posicoes: ["ZAG"], forca: 77 },
      { nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Xavi", posicoes: ["MC"], forca: 84 },
      { nome: "Gabri", posicoes: ["MC","LD"], forca: 78 },
      { nome: "Luis Enrique", posicoes: ["MC","PD"], forca: 90 },
      { nome: "Rivaldo", posicoes: ["MEI","PD"], forca: 93 },
      { nome: "Marc Overmars", posicoes: ["PD"], forca: 87 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 90 },
      { nome: "Javier Saviola", posicoes: ["ATA"], forca: 85 },
      { nome: "Dani García", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2002,
    clube: "Manchester United",
    jogadores: [
      { nome: "Fabien Barthez", posicoes: ["GOL"], forca: 87 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 86 },
      { nome: "Phil Neville", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Wes Brown", posicoes: ["ZAG"], forca: 81 },
      { nome: "Laurent Blanc", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mikaël Silvestre", posicoes: ["LE","ZAG"], forca: 79 },
      { nome: "Denis Irwin", posicoes: ["LE"], forca: 82 },
      { nome: "Roy Keane", posicoes: ["VOL","MC"], forca: 92 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 91 },
      { nome: "Nicky Butt", posicoes: ["VOL"], forca: 82 },
      { nome: "Ryan Giggs", posicoes: ["PE"], forca: 91 },
      { nome: "David Beckham", posicoes: ["MC","PD"], forca: 93 },
      { nome: "Juan Sebastián Verón", posicoes: ["MC"], forca: 86 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA","PD"], forca: 84 },
      { nome: "Ruud van Nistelrooy", posicoes: ["ATA"], forca: 93 },
      { nome: "Diego Forlán", posicoes: ["ATA"], forca: 87 }
    ]
  },

  // ===== Edição 2001 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 95 },
      { nome: "Willy Sagnol", posicoes: ["LD"], forca: 87 },
      { nome: "Bixente Lizarazu", posicoes: ["LE","LD"], forca: 90 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 86 },
      { nome: "Thomas Linke", posicoes: ["ZAG"], forca: 85 },
      { nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 85 },
      { nome: "Michael Tarnat", posicoes: ["LE"], forca: 82 },
      { nome: "Stefan Effenberg", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Jens Jeremies", posicoes: ["VOL"], forca: 85 },
      { nome: "Owen Hargreaves", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Thorsten Fink", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 87 },
      { nome: "Hasan Salihamidžić", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 79 },
      { nome: "Carsten Jancker", posicoes: ["ATA"], forca: 84 },
      { nome: "Giovane Élber", posicoes: ["ATA"], forca: 90 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Valencia",
    jogadores: [
      { nome: "Santiago Cañizares", posicoes: ["GOL"], forca: 87 },
      { nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 84 },
      { nome: "Amedeo Carboni", posicoes: ["LE"], forca: 84 },
      { nome: "Mauricio Pellegrino", posicoes: ["ZAG"], forca: 84 },
      { nome: "Roberto Ayala", posicoes: ["ZAG"], forca: 90 },
      { nome: "Miroslav Djukić", posicoes: ["ZAG"], forca: 84 },
      { nome: "David Albelda", posicoes: ["VOL"], forca: 85 },
      { nome: "Rubén Baraja", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Gaizka Mendieta", posicoes: ["MC","LD"], forca: 93 },
      { nome: "Kily González", posicoes: ["MC","PE"], forca: 87 },
      { nome: "Pablo Aimar", posicoes: ["MEI"], forca: 87 },
      { nome: "Vicente", posicoes: ["PD","MC"], forca: 84 },
      { nome: "Miguel Ángel Angulo", posicoes: ["MC","ATA"], forca: 82 },
      { nome: "John Carew", posicoes: ["ATA"], forca: 81 },
      { nome: "Juan Sánchez", posicoes: ["ATA"], forca: 79 },
      { nome: "Diego Alonso", posicoes: ["ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 90 },
      { nome: "César Sánchez", posicoes: ["GOL"], forca: 79 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 86 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 93 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 91 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Aitor Karanka", posicoes: ["ZAG"], forca: 78 },
      { nome: "Claude Makélélé", posicoes: ["VOL"], forca: 91 },
      { nome: "Flávio Conceição", posicoes: ["VOL"], forca: 82 },
      { nome: "Luís Figo", posicoes: ["MC","PD"], forca: 95 },
      { nome: "Steve McManaman", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Santiago Solari", posicoes: ["MC","PE"], forca: 82 },
      { nome: "Guti", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Sávio", posicoes: ["MC","PE"], forca: 82 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 93 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2001,
    clube: "Leeds United",
    jogadores: [
      { nome: "Nigel Martyn", posicoes: ["GOL"], forca: 82 },
      { nome: "Gary Kelly", posicoes: ["LD"], forca: 79 },
      { nome: "Danny Mills", posicoes: ["LD"], forca: 78 },
      { nome: "Ian Harte", posicoes: ["LE"], forca: 81 },
      { nome: "Rio Ferdinand", posicoes: ["ZAG"], forca: 87 },
      { nome: "Lucas Radebe", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jonathan Woodgate", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dominic Matteo", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "David Batty", posicoes: ["VOL"], forca: 81 },
      { nome: "Olivier Dacourt", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Eirik Bakke", posicoes: ["MC"], forca: 77 },
      { nome: "Lee Bowyer", posicoes: ["MC","LD"], forca: 84 },
      { nome: "Harry Kewell", posicoes: ["MC","PE"], forca: 87 },
      { nome: "Alan Smith", posicoes: ["ATA"], forca: 82 },
      { nome: "Mark Viduka", posicoes: ["ATA"], forca: 87 },
      { nome: "Robbie Keane", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2000 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Iker Casillas", posicoes: ["GOL"], forca: 85 },
      { nome: "Míchel Salgado", posicoes: ["LD"], forca: 86 },
      { nome: "Iván Helguera", posicoes: ["ZAG","VOL"], forca: 86 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 91 },
      { nome: "Aitor Karanka", posicoes: ["ZAG"], forca: 79 },
      { nome: "Roberto Carlos", posicoes: ["LE","LD"], forca: 93 },
      { nome: "Fernando Redondo", posicoes: ["VOL"], forca: 95 },
      { nome: "Christian Karembeu", posicoes: ["VOL"], forca: 84 },
      { nome: "Clarence Seedorf", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Steve McManaman", posicoes: ["MC","LD"], forca: 85 },
      { nome: "Guti", posicoes: ["MEI","PD"], forca: 85 },
      { nome: "Sávio", posicoes: ["MC","PE"], forca: 84 },
      { nome: "Geremi", posicoes: ["MC","LD"], forca: 82 },
      { nome: "Raúl", posicoes: ["ATA"], forca: 93 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 88 },
      { nome: "Nicolas Anelka", posicoes: ["ATA"], forca: 87 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Valencia",
    jogadores: [
      { nome: "Santiago Cañizares", posicoes: ["GOL"], forca: 87 },
      { nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 84 },
      { nome: "Amedeo Carboni", posicoes: ["LE"], forca: 84 },
      { nome: "Miroslav Djukić", posicoes: ["ZAG"], forca: 84 },
      { nome: "Mauricio Pellegrino", posicoes: ["ZAG"], forca: 84 },
      { nome: "Joachim Björklund", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gerardo", posicoes: ["LD","MC"], forca: 76 },
      { nome: "David Albelda", posicoes: ["VOL"], forca: 85 },
      { nome: "Javier Farinós", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Gerard López", posicoes: ["MC"], forca: 82 },
      { nome: "Gaizka Mendieta", posicoes: ["MC","LD"], forca: 92 },
      { nome: "Kily González", posicoes: ["MC","PE"], forca: 87 },
      { nome: "Miguel Ángel Angulo", posicoes: ["MC","ATA"], forca: 82 },
      { nome: "Claudio López", posicoes: ["ATA","PD"], forca: 90 },
      { nome: "Adrian Ilie", posicoes: ["ATA"], forca: 82 },
      { nome: "Juan Sánchez", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 93 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 86 },
      { nome: "Thomas Linke", posicoes: ["ZAG"], forca: 84 },
      { nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 85 },
      { nome: "Bixente Lizarazu", posicoes: ["LE","LD"], forca: 90 },
      { nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 84 },
      { nome: "Michael Tarnat", posicoes: ["LE"], forca: 81 },
      { nome: "Stefan Effenberg", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Jens Jeremies", posicoes: ["VOL"], forca: 85 },
      { nome: "Thorsten Fink", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 87 },
      { nome: "Hasan Salihamidžić", posicoes: ["MC","PD"], forca: 85 },
      { nome: "Paulo Sérgio", posicoes: ["MC","ATA"], forca: 81 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 78 },
      { nome: "Carsten Jancker", posicoes: ["ATA"], forca: 82 },
      { nome: "Giovane Élber", posicoes: ["ATA"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 2000,
    clube: "Barcelona",
    jogadores: [
      { nome: "Ruud Hesp", posicoes: ["GOL"], forca: 79 },
      { nome: "Carles Puyol", posicoes: ["LD","ZAG"], forca: 78 },
      { nome: "Michael Reiziger", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Abelardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Frank de Boer", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Sergi Barjuán", posicoes: ["LE"], forca: 85 },
      { nome: "Winston Bogarde", posicoes: ["LD","ZAG"], forca: 79 },
      { nome: "Pep Guardiola", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Phillip Cocu", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Xavi", posicoes: ["MC"], forca: 79 },
      { nome: "Luis Enrique", posicoes: ["MC","PD"], forca: 90 },
      { nome: "Luís Figo", posicoes: ["PD","MC"], forca: 96 },
      { nome: "Rivaldo", posicoes: ["MEI","PD"], forca: 96 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 90 },
      { nome: "Dani García", posicoes: ["ATA"], forca: 77 },
      { nome: "Jari Litmanen", posicoes: ["MEI","ATA"], forca: 86 }
    ]
  },

  // ===== Edição 1999 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Manchester United",
    jogadores: [
      { nome: "Peter Schmeichel", posicoes: ["GOL"], forca: 93 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 86 },
      { nome: "Denis Irwin", posicoes: ["LE"], forca: 87 },
      { nome: "Jaap Stam", posicoes: ["ZAG"], forca: 91 },
      { nome: "Ronny Johnsen", posicoes: ["ZAG"], forca: 85 },
      { nome: "Roy Keane", posicoes: ["MC"], forca: 93 },
      { nome: "David Beckham", posicoes: ["MC","MD"], forca: 92 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 89 },
      { nome: "Ryan Giggs", posicoes: ["ME"], forca: 91 },
      { nome: "Nicky Butt", posicoes: ["MC"], forca: 85 },
      { nome: "Dwight Yorke", posicoes: ["ATA"], forca: 91 },
      { nome: "Andy Cole", posicoes: ["ATA"], forca: 89 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 87 },
      { nome: "Teddy Sheringham", posicoes: ["ATA"], forca: 86 },
      { nome: "Jesper Blomqvist", posicoes: ["ME"], forca: 81 },
      { nome: "David May", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 93 },
      { nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 87 },
      { nome: "Thomas Linke", posicoes: ["ZAG"], forca: 85 },
      { nome: "Lothar Matthäus", posicoes: ["ZAG"], forca: 89 },
      { nome: "Michael Tarnat", posicoes: ["LE"], forca: 82 },
      { nome: "Bixente Lizarazu", posicoes: ["LE"], forca: 89 },
      { nome: "Stefan Effenberg", posicoes: ["MC"], forca: 91 },
      { nome: "Jens Jeremies", posicoes: ["VOL"], forca: 86 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 87 },
      { nome: "Hasan Salihamidžić", posicoes: ["MD","ME"], forca: 85 },
      { nome: "Mario Basler", posicoes: ["PD","MEI"], forca: 87 },
      { nome: "Carsten Jancker", posicoes: ["ATA"], forca: 85 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 82 },
      { nome: "Giovane Élber", posicoes: ["ATA"], forca: 88 },
      { nome: "Thomas Helmer", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Juventus",
    jogadores: [
      { nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 89 },
      { nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 88 },
      { nome: "Paolo Montero", posicoes: ["ZAG"], forca: 87 },
      { nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 85 },
      { nome: "Alessandro Birindelli", posicoes: ["LD"], forca: 82 },
      { nome: "Didier Deschamps", posicoes: ["VOL"], forca: 87 },
      { nome: "Edgar Davids", posicoes: ["MC"], forca: 90 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 94 },
      { nome: "Angelo Di Livio", posicoes: ["MD"], forca: 85 },
      { nome: "Antonio Conte", posicoes: ["MC"], forca: 85 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 90 },
      { nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "Daniel Fonseca", posicoes: ["ATA"], forca: 81 },
      { nome: "Moreno Torricelli", posicoes: ["LD","ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1999,
    clube: "Dynamo Kyiv",
    jogadores: [
      { nome: "Oleksandr Shovkovskyi", posicoes: ["GOL"], forca: 87 },
      { nome: "Oleh Luzhnyi", posicoes: ["ZAG"], forca: 87 },
      { nome: "Vladyslav Vashchuk", posicoes: ["ZAG"], forca: 85 },
      { nome: "Serhiy Fedorov", posicoes: ["ZAG"], forca: 82 },
      { nome: "Kakha Kaladze", posicoes: ["LE"], forca: 86 },
      { nome: "Serhiy Rebrov", posicoes: ["ATA","MEI"], forca: 90 },
      { nome: "Yuriy Kalitvintsev", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Valentyn Belkevich", posicoes: ["MC"], forca: 87 },
      { nome: "Andriy Husin", posicoes: ["ME"], forca: 85 },
      { nome: "Vitaliy Kosovskyi", posicoes: ["ME"], forca: 84 },
      { nome: "Andriy Shevchenko", posicoes: ["ATA"], forca: 93 },
      { nome: "Oleksandr Khatskevich", posicoes: ["MC"], forca: 84 },
      { nome: "Maksim Shatskikh", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1998 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Bodo Illgner", posicoes: ["GOL"], forca: 87 },
      { nome: "Christian Panucci", posicoes: ["LD"], forca: 86 },
      { nome: "Fernando Hierro", posicoes: ["ZAG"], forca: 91 },
      { nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 87 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 93 },
      { nome: "Fernando Redondo", posicoes: ["VOL"], forca: 92 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 90 },
      { nome: "Christian Karembeu", posicoes: ["MC"], forca: 86 },
      { nome: "Raúl", posicoes: ["ATA","MEI"], forca: 92 },
      { nome: "Predrag Mijatović", posicoes: ["ATA"], forca: 91 },
      { nome: "Fernando Morientes", posicoes: ["ATA"], forca: 87 },
      { nome: "Davor Šuker", posicoes: ["ATA"], forca: 86 },
      { nome: "Amavisca", posicoes: ["ME"], forca: 82 },
      { nome: "Robert Jarni", posicoes: ["LE","ME"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Juventus",
    jogadores: [
      { nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 90 },
      { nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 89 },
      { nome: "Paolo Montero", posicoes: ["ZAG"], forca: 88 },
      { nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gianluca Pessotto", posicoes: ["LE","LD"], forca: 85 },
      { nome: "Didier Deschamps", posicoes: ["VOL"], forca: 88 },
      { nome: "Edgar Davids", posicoes: ["MC"], forca: 89 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 93 },
      { nome: "Angelo Di Livio", posicoes: ["MD"], forca: 86 },
      { nome: "Antonio Conte", posicoes: ["MC"], forca: 86 },
      { nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 94 },
      { nome: "Filippo Inzaghi", posicoes: ["ATA"], forca: 89 },
      { nome: "Daniel Fonseca", posicoes: ["ATA"], forca: 82 },
      { nome: "Moreno Torricelli", posicoes: ["LD"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Stefan Klos", posicoes: ["GOL"], forca: 87 },
      { nome: "Stefan Reuter", posicoes: ["LD"], forca: 87 },
      { nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 89 },
      { nome: "Christian Wörns", posicoes: ["ZAG"], forca: 86 },
      { nome: "Jörg Heinrich", posicoes: ["LE","ME"], forca: 86 },
      { nome: "Paul Lambert", posicoes: ["MC"], forca: 86 },
      { nome: "Michael Zorc", posicoes: ["MC"], forca: 85 },
      { nome: "Andreas Möller", posicoes: ["MEI"], forca: 89 },
      { nome: "Stéphane Chapuisat", posicoes: ["ATA"], forca: 88 },
      { nome: "Karl-Heinz Riedle", posicoes: ["ATA"], forca: 85 },
      { nome: "Lars Ricken", posicoes: ["ATA"], forca: 85 },
      { nome: "Heiko Herrlich", posicoes: ["ATA"], forca: 84 },
      { nome: "Júlio César", posicoes: ["ZAG"], forca: 84 },
      { nome: "Matthias Sammer", posicoes: ["ZAG"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1998,
    clube: "Monaco",
    jogadores: [
      { nome: "Fabien Barthez", posicoes: ["GOL"], forca: 88 },
      { nome: "Willy Sagnol", posicoes: ["LD"], forca: 82 },
      { nome: "Martin Djetou", posicoes: ["ZAG"], forca: 85 },
      { nome: "Philippe Christanval", posicoes: ["ZAG"], forca: 80 },
      { nome: "Sabri Lamouchi", posicoes: ["MC"], forca: 86 },
      { nome: "John Collins", posicoes: ["MC"], forca: 85 },
      { nome: "Ali Benarbia", posicoes: ["MEI"], forca: 87 },
      { nome: "Ludovic Giuly", posicoes: ["PD","MEI"], forca: 85 },
      { nome: "Thierry Henry", posicoes: ["PE","ATA"], forca: 87 },
      { nome: "David Trezeguet", posicoes: ["ATA"], forca: 86 },
      { nome: "Victor Ikpeba", posicoes: ["ATA"], forca: 87 },
      { nome: "Costinha", posicoes: ["MC"], forca: 82 },
      { nome: "Franck Dumas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rui Barros", posicoes: ["ME"], forca: 82 }
    ]
  },

  // ===== Edição 1997 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Stefan Klos", posicoes: ["GOL"], forca: 87 },
      { nome: "Stefan Reuter", posicoes: ["LD"], forca: 87 },
      { nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 90 },
      { nome: "Matthias Sammer", posicoes: ["ZAG"], forca: 93 },
      { nome: "Júlio César", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jörg Heinrich", posicoes: ["LE","ME"], forca: 86 },
      { nome: "Paul Lambert", posicoes: ["MC"], forca: 87 },
      { nome: "Paulo Sousa", posicoes: ["MC"], forca: 88 },
      { nome: "Andreas Möller", posicoes: ["MEI"], forca: 91 },
      { nome: "Karl-Heinz Riedle", posicoes: ["ATA"], forca: 88 },
      { nome: "Stéphane Chapuisat", posicoes: ["ATA"], forca: 89 },
      { nome: "Lars Ricken", posicoes: ["ATA"], forca: 85 },
      { nome: "Michael Zorc", posicoes: ["MC"], forca: 86 },
      { nome: "Heiko Herrlich", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Juventus",
    jogadores: [
      { nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 90 },
      { nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 89 },
      { nome: "Paolo Montero", posicoes: ["ZAG"], forca: 87 },
      { nome: "Gianluca Pessotto", posicoes: ["LE","LD"], forca: 85 },
      { nome: "Didier Deschamps", posicoes: ["VOL"], forca: 89 },
      { nome: "Zinedine Zidane", posicoes: ["MEI"], forca: 93 },
      { nome: "Angelo Di Livio", posicoes: ["MD"], forca: 87 },
      { nome: "Vladimir Jugović", posicoes: ["MC"], forca: 87 },
      { nome: "Antonio Conte", posicoes: ["MC"], forca: 86 },
      { nome: "Alen Bokšić", posicoes: ["ATA"], forca: 89 },
      { nome: "Christian Vieri", posicoes: ["ATA"], forca: 87 },
      { nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 92 },
      { nome: "Nicola Amoruso", posicoes: ["ATA"], forca: 82 },
      { nome: "Mark Iuliano", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Manchester United",
    jogadores: [
      { nome: "Peter Schmeichel", posicoes: ["GOL"], forca: 93 },
      { nome: "Gary Neville", posicoes: ["LD"], forca: 85 },
      { nome: "Denis Irwin", posicoes: ["LE"], forca: 87 },
      { nome: "Gary Pallister", posicoes: ["ZAG"], forca: 86 },
      { nome: "Ronny Johnsen", posicoes: ["ZAG"], forca: 84 },
      { nome: "Roy Keane", posicoes: ["MC"], forca: 91 },
      { nome: "David Beckham", posicoes: ["MD"], forca: 87 },
      { nome: "Paul Scholes", posicoes: ["MC"], forca: 86 },
      { nome: "Ryan Giggs", posicoes: ["ME"], forca: 91 },
      { nome: "Eric Cantona", posicoes: ["MEI","ATA"], forca: 92 },
      { nome: "Andy Cole", posicoes: ["ATA"], forca: 87 },
      { nome: "Ole Gunnar Solskjær", posicoes: ["ATA"], forca: 85 },
      { nome: "Nicky Butt", posicoes: ["MC"], forca: 82 },
      { nome: "David May", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1997,
    clube: "Ajax",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 90 },
      { nome: "Danny Blind", posicoes: ["ZAG"], forca: 87 },
      { nome: "Frank de Boer", posicoes: ["ZAG","LE"], forca: 88 },
      { nome: "Michael Reiziger", posicoes: ["LD"], forca: 85 },
      { nome: "Richard Witschge", posicoes: ["MC"], forca: 85 },
      { nome: "Jari Litmanen", posicoes: ["MEI"], forca: 91 },
      { nome: "Ronald de Boer", posicoes: ["MEI","MC"], forca: 88 },
      { nome: "Marc Overmars", posicoes: ["PE"], forca: 88 },
      { nome: "Tijani Babangida", posicoes: ["PD"], forca: 85 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 87 },
      { nome: "Nwankwo Kanu", posicoes: ["ATA"], forca: 86 },
      { nome: "Kiki Musampa", posicoes: ["ME"], forca: 82 },
      { nome: "Winston Bogarde", posicoes: ["ZAG"], forca: 84 },
      { nome: "Arnold Scholten", posicoes: ["MC"], forca: 80 }
    ]
  },

  // ===== Edição 1996 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Juventus",
    jogadores: [
      { nome: "Angelo Peruzzi", posicoes: ["GOL"], forca: 90 },
      { nome: "Ciro Ferrara", posicoes: ["ZAG"], forca: 89 },
      { nome: "Moreno Torricelli", posicoes: ["LD","LE"], forca: 86 },
      { nome: "Gianluca Pessotto", posicoes: ["LE","LD"], forca: 85 },
      { nome: "Pietro Vierchowod", posicoes: ["ZAG"], forca: 86 },
      { nome: "Angelo Di Livio", posicoes: ["MD"], forca: 87 },
      { nome: "Antonio Conte", posicoes: ["MC"], forca: 87 },
      { nome: "Didier Deschamps", posicoes: ["VOL"], forca: 89 },
      { nome: "Paulo Sousa", posicoes: ["MC"], forca: 87 },
      { nome: "Vladimir Jugović", posicoes: ["MC"], forca: 87 },
      { nome: "Gianluca Vialli", posicoes: ["ATA"], forca: 91 },
      { nome: "Fabrizio Ravanelli", posicoes: ["ATA"], forca: 89 },
      { nome: "Alessandro Del Piero", posicoes: ["ATA","PE"], forca: 90 },
      { nome: "Michele Padovano", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Ajax",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 90 },
      { nome: "Michael Reiziger", posicoes: ["LD"], forca: 86 },
      { nome: "Frank de Boer", posicoes: ["ZAG","LE"], forca: 89 },
      { nome: "Danny Blind", posicoes: ["ZAG"], forca: 88 },
      { nome: "Winston Bogarde", posicoes: ["LE","ZAG"], forca: 84 },
      { nome: "Edgar Davids", posicoes: ["MC"], forca: 88 },
      { nome: "Jari Litmanen", posicoes: ["MEI"], forca: 92 },
      { nome: "Ronald de Boer", posicoes: ["MEI","MC"], forca: 88 },
      { nome: "Marc Overmars", posicoes: ["PE"], forca: 89 },
      { nome: "Finidi George", posicoes: ["PD"], forca: 87 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 88 },
      { nome: "Nwankwo Kanu", posicoes: ["ATA"], forca: 86 },
      { nome: "Kiki Musampa", posicoes: ["ME"], forca: 81 },
      { nome: "Tijani Babangida", posicoes: ["PD"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Nantes",
    jogadores: [
      { nome: "Dominique Casagrande", posicoes: ["GOL"], forca: 82 },
      { nome: "Serge Le Dizet", posicoes: ["LD"], forca: 82 },
      { nome: "Nicolas Ouédec", posicoes: ["ATA"], forca: 87 },
      { nome: "Bruno Carotti", posicoes: ["ZAG"], forca: 80 },
      { nome: "Claude Makélélé", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Christian Karembeu", posicoes: ["MC"], forca: 86 },
      { nome: "Japhet N'Doram", posicoes: ["MEI"], forca: 88 },
      { nome: "Reynald Pedros", posicoes: ["ME"], forca: 86 },
      { nome: "Patrice Loko", posicoes: ["ATA"], forca: 85 },
      { nome: "Vulic", posicoes: ["ATA"], forca: 80 },
      { nome: "Sébastien Piocelle", posicoes: ["MC"], forca: 79 },
      { nome: "Éric Decroix", posicoes: ["ZAG"], forca: 80 },
      { nome: "Guy Roland Ndy Assembe", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1996,
    clube: "Panathinaikos",
    jogadores: [
      { nome: "Józef Wandzik", posicoes: ["GOL"], forca: 85 },
      { nome: "Stratos Apostolakis", posicoes: ["LD"], forca: 84 },
      { nome: "Giannis Kalitzakis", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinos Ouzounidis", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nikos Nioplias", posicoes: ["MC"], forca: 85 },
      { nome: "Juan José Borrelli", posicoes: ["MEI"], forca: 86 },
      { nome: "Giorgos Donis", posicoes: ["ME"], forca: 85 },
      { nome: "Krzysztof Warzycha", posicoes: ["ATA"], forca: 88 },
      { nome: "Dimitris Markos", posicoes: ["ATA"], forca: 81 },
      { nome: "Vazha Tarasov", posicoes: ["ATA"], forca: 81 },
      { nome: "Kostas Frantzeskos", posicoes: ["MC"], forca: 82 },
      { nome: "Spyros Marangos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Antonis Antoniou", posicoes: ["ME"], forca: 79 },
      { nome: "Takis Gonias", posicoes: ["LD"], forca: 78 }
    ]
  },

  // ===== Edição 1995 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "Ajax",
    jogadores: [
      { nome: "Edwin van der Sar", posicoes: ["GOL"], forca: 89 },
      { nome: "Michael Reiziger", posicoes: ["LD"], forca: 85 },
      { nome: "Frank de Boer", posicoes: ["ZAG","LE"], forca: 89 },
      { nome: "Danny Blind", posicoes: ["ZAG"], forca: 89 },
      { nome: "Frank Rijkaard", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Clarence Seedorf", posicoes: ["MC"], forca: 87 },
      { nome: "Edgar Davids", posicoes: ["MC"], forca: 88 },
      { nome: "Jari Litmanen", posicoes: ["MEI"], forca: 92 },
      { nome: "Marc Overmars", posicoes: ["PE"], forca: 89 },
      { nome: "Finidi George", posicoes: ["PD"], forca: 87 },
      { nome: "Patrick Kluivert", posicoes: ["ATA"], forca: 86 },
      { nome: "Nwankwo Kanu", posicoes: ["ATA"], forca: 85 },
      { nome: "Ronald de Boer", posicoes: ["MEI"], forca: 87 },
      { nome: "Winston Bogarde", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "Milan",
    jogadores: [
      { nome: "Sebastiano Rossi", posicoes: ["GOL"], forca: 88 },
      { nome: "Mauro Tassotti", posicoes: ["LD"], forca: 87 },
      { nome: "Christian Panucci", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Paolo Maldini", posicoes: ["LE"], forca: 93 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 89 },
      { nome: "Franco Baresi", posicoes: ["ZAG"], forca: 93 },
      { nome: "Marcel Desailly", posicoes: ["VOL","MC"], forca: 91 },
      { nome: "Demetrio Albertini", posicoes: ["MC"], forca: 87 },
      { nome: "Roberto Donadoni", posicoes: ["ME"], forca: 87 },
      { nome: "Zvonimir Boban", posicoes: ["MEI"], forca: 87 },
      { nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Daniele Massaro", posicoes: ["ATA"], forca: 86 },
      { nome: "Marco Simone", posicoes: ["ATA"], forca: 85 },
      { nome: "Gianluigi Lentini", posicoes: ["ME"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "Bayern München",
    jogadores: [
      { nome: "Oliver Kahn", posicoes: ["GOL"], forca: 88 },
      { nome: "Lothar Matthäus", posicoes: ["ZAG"], forca: 91 },
      { nome: "Thomas Helmer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Markus Babbel", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Christian Ziege", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Ciriaco Sforza", posicoes: ["MC"], forca: 86 },
      { nome: "Thorsten Fink", posicoes: ["MC"], forca: 82 },
      { nome: "Mehmet Scholl", posicoes: ["MEI"], forca: 87 },
      { nome: "Andreas Herzog", posicoes: ["MEI"], forca: 86 },
      { nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 87 },
      { nome: "Alexander Zickler", posicoes: ["ATA"], forca: 81 },
      { nome: "Dietmar Hamann", posicoes: ["MC"], forca: 80 },
      { nome: "Adolfo Valencia", posicoes: ["ATA"], forca: 81 },
      { nome: "Samuel Kuffour", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1995,
    clube: "PSG",
    jogadores: [
      { nome: "Bernard Lama", posicoes: ["GOL"], forca: 89 },
      { nome: "Alain Roche", posicoes: ["ZAG"], forca: 86 },
      { nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 87 },
      { nome: "Antoine Kombouaré", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Paul Le Guen", posicoes: ["MC"], forca: 86 },
      { nome: "Vincent Guérin", posicoes: ["MC"], forca: 87 },
      { nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { nome: "David Ginola", posicoes: ["PE","ATA"], forca: 89 },
      { nome: "George Weah", posicoes: ["ATA"], forca: 93 },
      { nome: "Daniel Bravo", posicoes: ["ATA","ME"], forca: 85 },
      { nome: "Valdo", posicoes: ["MEI"], forca: 86 },
      { nome: "Bruno N'Gotty", posicoes: ["ZAG"], forca: 82 },
      { nome: "José Cobos", posicoes: ["LD"], forca: 81 },
      { nome: "Francis Llacer", posicoes: ["MC"], forca: 80 }
    ]
  },

  // ===== Edição 1994 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Milan",
    jogadores: [
      { nome: "Sebastiano Rossi", posicoes: ["GOL"], forca: 89 },
      { nome: "Mauro Tassotti", posicoes: ["LD"], forca: 88 },
      { nome: "Christian Panucci", posicoes: ["LD","ZAG"], forca: 84 },
      { nome: "Paolo Maldini", posicoes: ["LE"], forca: 93 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 90 },
      { nome: "Franco Baresi", posicoes: ["ZAG"], forca: 93 },
      { nome: "Marcel Desailly", posicoes: ["VOL","MC"], forca: 92 },
      { nome: "Demetrio Albertini", posicoes: ["MC"], forca: 88 },
      { nome: "Roberto Donadoni", posicoes: ["ME"], forca: 88 },
      { nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Daniele Massaro", posicoes: ["ATA"], forca: 88 },
      { nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 87 },
      { nome: "Marco Simone", posicoes: ["ATA"], forca: 85 },
      { nome: "Zvonimir Boban", posicoes: ["MEI"], forca: 86 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Barcelona",
    jogadores: [
      { nome: "Andoni Zubizarreta", posicoes: ["GOL"], forca: 89 },
      { nome: "Albert Ferrer", posicoes: ["LD"], forca: 86 },
      { nome: "Sergi", posicoes: ["LE"], forca: 84 },
      { nome: "Ronald Koeman", posicoes: ["ZAG"], forca: 92 },
      { nome: "Miguel Ángel Nadal", posicoes: ["ZAG","MC"], forca: 85 },
      { nome: "Pep Guardiola", posicoes: ["VOL"], forca: 88 },
      { nome: "José Mari Bakero", posicoes: ["MC"], forca: 88 },
      { nome: "Guillermo Amor", posicoes: ["MC"], forca: 86 },
      { nome: "Michael Laudrup", posicoes: ["MEI"], forca: 93 },
      { nome: "Romário", posicoes: ["ATA"], forca: 95 },
      { nome: "Hristo Stoichkov", posicoes: ["PE","ATA"], forca: 93 },
      { nome: "Txiki Begiristain", posicoes: ["PE","ME"], forca: 86 },
      { nome: "Julio Salinas", posicoes: ["ATA"], forca: 86 },
      { nome: "Eusebio", posicoes: ["MC"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Monaco",
    jogadores: [
      { nome: "Jean-Luc Ettori", posicoes: ["GOL"], forca: 85 },
      { nome: "Lilian Thuram", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Emmanuel Petit", posicoes: ["ZAG"], forca: 87 },
      { nome: "Luc Sonor", posicoes: ["ZAG"], forca: 81 },
      { nome: "Claude Puel", posicoes: ["MC"], forca: 85 },
      { nome: "Enzo Scifo", posicoes: ["MEI"], forca: 89 },
      { nome: "Youri Djorkaeff", posicoes: ["MEI"], forca: 89 },
      { nome: "Rui Barros", posicoes: ["ME"], forca: 86 },
      { nome: "Jürgen Klinsmann", posicoes: ["ATA"], forca: 91 },
      { nome: "Victor Ikpeba", posicoes: ["ATA"], forca: 82 },
      { nome: "Sonny Anderson", posicoes: ["ATA"], forca: 80 },
      { nome: "Franck Dumas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Thierry Henry", posicoes: ["MC"], forca: 73 },
      { nome: "Valéry", posicoes: ["ME"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1994,
    clube: "Porto",
    jogadores: [
      { nome: "Vítor Baía", posicoes: ["GOL"], forca: 87 },
      { nome: "João Pinto", posicoes: ["LD"], forca: 86 },
      { nome: "Aloísio", posicoes: ["ZAG"], forca: 85 },
      { nome: "Fernando Couto", posicoes: ["ZAG"], forca: 86 },
      { nome: "Jorge Costa", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulinho Santos", posicoes: ["VOL"], forca: 85 },
      { nome: "Emerson", posicoes: ["MC"], forca: 82 },
      { nome: "Rui Barros", posicoes: ["MEI"], forca: 87 },
      { nome: "Timofte", posicoes: ["ME"], forca: 85 },
      { nome: "Domingos", posicoes: ["ATA"], forca: 85 },
      { nome: "Emil Kostadinov", posicoes: ["ATA"], forca: 86 },
      { nome: "Secretário", posicoes: ["LD","MD"], forca: 81 },
      { nome: "Folha", posicoes: ["ME"], forca: 80 },
      { nome: "Rabah Madjer", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1993 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "Marseille",
    jogadores: [
      { nome: "Fabien Barthez", posicoes: ["GOL"], forca: 87 },
      { nome: "Jocelyn Angloma", posicoes: ["LD"], forca: 87 },
      { nome: "Basile Boli", posicoes: ["ZAG"], forca: 89 },
      { nome: "Marcel Desailly", posicoes: ["ZAG","MC"], forca: 90 },
      { nome: "Éric Di Meco", posicoes: ["LE"], forca: 85 },
      { nome: "Didier Deschamps", posicoes: ["VOL"], forca: 88 },
      { nome: "Jean-Jacques Eydelie", posicoes: ["MC"], forca: 82 },
      { nome: "Franck Sauzée", posicoes: ["MC"], forca: 88 },
      { nome: "Abedi Pelé", posicoes: ["MEI","ATA"], forca: 91 },
      { nome: "Alen Bokšić", posicoes: ["ATA"], forca: 91 },
      { nome: "Rudi Völler", posicoes: ["ATA"], forca: 89 },
      { nome: "Tony Cascarino", posicoes: ["ATA"], forca: 80 },
      { nome: "Bruno Germain", posicoes: ["MC"], forca: 82 },
      { nome: "Bernard Casoni", posicoes: ["ZAG"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "Milan",
    jogadores: [
      { nome: "Sebastiano Rossi", posicoes: ["GOL"], forca: 88 },
      { nome: "Mauro Tassotti", posicoes: ["LD"], forca: 88 },
      { nome: "Paolo Maldini", posicoes: ["LE"], forca: 93 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 89 },
      { nome: "Franco Baresi", posicoes: ["ZAG"], forca: 93 },
      { nome: "Demetrio Albertini", posicoes: ["MC"], forca: 88 },
      { nome: "Roberto Donadoni", posicoes: ["ME"], forca: 89 },
      { nome: "Frank Rijkaard", posicoes: ["MC"], forca: 90 },
      { nome: "Stefano Eranio", posicoes: ["ME"], forca: 85 },
      { nome: "Marco van Basten", posicoes: ["ATA"], forca: 93 },
      { nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 89 },
      { nome: "Daniele Massaro", posicoes: ["ATA"], forca: 85 },
      { nome: "Marco Simone", posicoes: ["ATA"], forca: 84 },
      { nome: "Gianluigi Lentini", posicoes: ["ME"], forca: 87 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "Rangers",
    jogadores: [
      { nome: "Andy Goram", posicoes: ["GOL"], forca: 87 },
      { nome: "Richard Gough", posicoes: ["ZAG"], forca: 88 },
      { nome: "John Brown", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dave McPherson", posicoes: ["ZAG"], forca: 82 },
      { nome: "Davie Robertson", posicoes: ["LE"], forca: 84 },
      { nome: "Gary Stevens", posicoes: ["LD"], forca: 84 },
      { nome: "Stuart McCall", posicoes: ["MC"], forca: 86 },
      { nome: "Ian Durrant", posicoes: ["MC"], forca: 86 },
      { nome: "Trevor Steven", posicoes: ["ME"], forca: 85 },
      { nome: "Mark Hateley", posicoes: ["ATA"], forca: 89 },
      { nome: "Ally McCoist", posicoes: ["ATA"], forca: 88 },
      { nome: "Pieter Huistra", posicoes: ["ME"], forca: 82 },
      { nome: "Gordon Durie", posicoes: ["ATA"], forca: 82 },
      { nome: "Derek Ferguson", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1993,
    clube: "IFK Göteborg",
    jogadores: [
      { nome: "Thomas Ravelli", posicoes: ["GOL"], forca: 86 },
      { nome: "Patrik Andersson", posicoes: ["ZAG"], forca: 84 },
      { nome: "Joachim Björklund", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mikael Nilsson", posicoes: ["LD"], forca: 81 },
      { nome: "Håkan Mild", posicoes: ["MC"], forca: 85 },
      { nome: "Stefan Rehn", posicoes: ["MC"], forca: 82 },
      { nome: "Jesper Blomqvist", posicoes: ["ME"], forca: 81 },
      { nome: "Magnus Erlingmark", posicoes: ["MEI"], forca: 82 },
      { nome: "Kennet Andersson", posicoes: ["ATA"], forca: 86 },
      { nome: "Mats Lilienberg", posicoes: ["ATA"], forca: 80 },
      { nome: "Johnny Ekström", posicoes: ["ATA"], forca: 81 },
      { nome: "Pontus Kåmark", posicoes: ["ZAG"], forca: 81 },
      { nome: "Torbjörn Nilsson", posicoes: ["MC"], forca: 80 },
      { nome: "Mikael Martinsson", posicoes: ["ME"], forca: 79 }
    ]
  },

  // ===== Edição 1992 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Barcelona",
    jogadores: [
      { nome: "Andoni Zubizarreta", posicoes: ["GOL"], forca: 90 },
      { nome: "Albert Ferrer", posicoes: ["LD"], forca: 86 },
      { nome: "Nando", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ronald Koeman", posicoes: ["ZAG"], forca: 93 },
      { nome: "Juan Carlos", posicoes: ["LE"], forca: 84 },
      { nome: "Pep Guardiola", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "José Mari Bakero", posicoes: ["MC"], forca: 88 },
      { nome: "Guillermo Amor", posicoes: ["MC"], forca: 86 },
      { nome: "Michael Laudrup", posicoes: ["MEI"], forca: 93 },
      { nome: "Hristo Stoichkov", posicoes: ["PE","ATA"], forca: 93 },
      { nome: "Julio Salinas", posicoes: ["ATA"], forca: 87 },
      { nome: "Txiki Begiristain", posicoes: ["PE","ME"], forca: 87 },
      { nome: "Eusebio", posicoes: ["MC"], forca: 84 },
      { nome: "Miguel Ángel Nadal", posicoes: ["ZAG","MC"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Sampdoria",
    jogadores: [
      { nome: "Gianluca Pagliuca", posicoes: ["GOL"], forca: 88 },
      { nome: "Moreno Mannini", posicoes: ["LD"], forca: 85 },
      { nome: "Amedeo Carboni", posicoes: ["LE"], forca: 86 },
      { nome: "Pietro Vierchowod", posicoes: ["ZAG"], forca: 89 },
      { nome: "Srečko Katanec", posicoes: ["ZAG","MC"], forca: 86 },
      { nome: "Fausto Pari", posicoes: ["MC"], forca: 85 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { nome: "Attilio Lombardo", posicoes: ["ME"], forca: 87 },
      { nome: "Giuseppe Dossena", posicoes: ["MEI"], forca: 85 },
      { nome: "Roberto Mancini", posicoes: ["ATA","MEI"], forca: 92 },
      { nome: "Gianluca Vialli", posicoes: ["ATA"], forca: 93 },
      { nome: "Ivano Bonetti", posicoes: ["ATA"], forca: 82 },
      { nome: "Renato Buso", posicoes: ["ATA"], forca: 80 },
      { nome: "Giovanni Invernizzi", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Red Star Belgrade",
    jogadores: [
      { nome: "Stevan Stojanović", posicoes: ["GOL"], forca: 87 },
      { nome: "Refik Šabanadžović", posicoes: ["LD"], forca: 84 },
      { nome: "Ilija Najdoski", posicoes: ["ZAG"], forca: 85 },
      { nome: "Siniša Mihajlović", posicoes: ["LE","MEI"], forca: 88 },
      { nome: "Vladimir Jugović", posicoes: ["MC"], forca: 87 },
      { nome: "Robert Prosinečki", posicoes: ["MEI"], forca: 90 },
      { nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 92 },
      { nome: "Darko Pančev", posicoes: ["ATA"], forca: 91 },
      { nome: "Dragiša Binić", posicoes: ["ATA"], forca: 85 },
      { nome: "Rade Tošić", posicoes: ["MC"], forca: 81 },
      { nome: "Slobodan Marović", posicoes: ["ZAG"], forca: 81 },
      { nome: "Goran Vasilijević", posicoes: ["ZAG"], forca: 80 },
      { nome: "Miloš Šestić", posicoes: ["MC"], forca: 79 },
      { nome: "Vladan Lukić", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1992,
    clube: "Sparta Prague",
    jogadores: [
      { nome: "Petr Kouba", posicoes: ["GOL"], forca: 85 },
      { nome: "Jozef Chovanec", posicoes: ["ZAG"], forca: 87 },
      { nome: "Michal Horňák", posicoes: ["ZAG"], forca: 82 },
      { nome: "Miroslav Kadlec", posicoes: ["ZAG"], forca: 85 },
      { nome: "Radoslav Látal", posicoes: ["MC"], forca: 85 },
      { nome: "Václav Němeček", posicoes: ["MC"], forca: 85 },
      { nome: "Martin Frýdek", posicoes: ["MEI"], forca: 84 },
      { nome: "Jiří Němec", posicoes: ["ME"], forca: 82 },
      { nome: "Horst Siegl", posicoes: ["ATA"], forca: 84 },
      { nome: "Pavel Kuka", posicoes: ["ATA"], forca: 82 },
      { nome: "Stanislav Griga", posicoes: ["MC"], forca: 80 },
      { nome: "Ivan Hašek", posicoes: ["ZAG"], forca: 81 },
      { nome: "Roman Kukleta", posicoes: ["ATA"], forca: 79 },
      { nome: "Petr Vrabec", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 1991 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Red Star Belgrade",
    jogadores: [
      { nome: "Stevan Stojanović", posicoes: ["GOL"], forca: 88 },
      { nome: "Refik Šabanadžović", posicoes: ["LD"], forca: 85 },
      { nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 89 },
      { nome: "Ilija Najdoski", posicoes: ["ZAG"], forca: 85 },
      { nome: "Slobodan Marović", posicoes: ["LE"], forca: 82 },
      { nome: "Vladimir Jugović", posicoes: ["MC"], forca: 87 },
      { nome: "Robert Prosinečki", posicoes: ["MEI"], forca: 91 },
      { nome: "Dejan Savićević", posicoes: ["MEI","ATA"], forca: 92 },
      { nome: "Siniša Mihajlović", posicoes: ["LE","MEI"], forca: 87 },
      { nome: "Darko Pančev", posicoes: ["ATA"], forca: 92 },
      { nome: "Dragiša Binić", posicoes: ["ATA"], forca: 86 },
      { nome: "Rade Tošić", posicoes: ["MC"], forca: 81 },
      { nome: "Goran Vasilijević", posicoes: ["MC"], forca: 80 },
      { nome: "Milorad Ratković", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Marseille",
    jogadores: [
      { nome: "Pascal Olmeta", posicoes: ["GOL"], forca: 86 },
      { nome: "Manuel Amoros", posicoes: ["LD"], forca: 89 },
      { nome: "Bernard Casoni", posicoes: ["ZAG"], forca: 85 },
      { nome: "Basile Boli", posicoes: ["ZAG"], forca: 87 },
      { nome: "Éric Di Meco", posicoes: ["LE"], forca: 84 },
      { nome: "Didier Deschamps", posicoes: ["VOL"], forca: 87 },
      { nome: "Franck Sauzée", posicoes: ["MC"], forca: 88 },
      { nome: "Chris Waddle", posicoes: ["MEI","PD"], forca: 90 },
      { nome: "Abedi Pelé", posicoes: ["MEI","ATA"], forca: 91 },
      { nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 94 },
      { nome: "Philippe Vercruysse", posicoes: ["ATA"], forca: 84 },
      { nome: "Bruno Germain", posicoes: ["MC"], forca: 84 },
      { nome: "Carlos Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Jean-Marc Ferreri", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Bayern München",
    jogadores: [
      { nome: "Raimond Aumann", posicoes: ["GOL"], forca: 86 },
      { nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 87 },
      { nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 89 },
      { nome: "Hans Pflügler", posicoes: ["LE"], forca: 84 },
      { nome: "Stefan Reuter", posicoes: ["LD","MC"], forca: 86 },
      { nome: "Olaf Thon", posicoes: ["MC"], forca: 88 },
      { nome: "Thomas Strunz", posicoes: ["MC"], forca: 84 },
      { nome: "Brian Laudrup", posicoes: ["ME"], forca: 85 },
      { nome: "Roland Wohlfarth", posicoes: ["ATA"], forca: 87 },
      { nome: "Alan McInally", posicoes: ["ATA"], forca: 82 },
      { nome: "Michael Sternkopf", posicoes: ["MC"], forca: 81 },
      { nome: "Manfred Bender", posicoes: ["ZAG"], forca: 80 },
      { nome: "Christian Ziege", posicoes: ["ME"], forca: 76 },
      { nome: "Bruno Labbadia", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1991,
    clube: "Spartak Moscow",
    jogadores: [
      { nome: "Stanislav Cherchesov", posicoes: ["GOL"], forca: 86 },
      { nome: "Viktor Onopko", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dmitri Khlestov", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vasili Kulkov", posicoes: ["LD"], forca: 84 },
      { nome: "Igor Shalimov", posicoes: ["MC"], forca: 87 },
      { nome: "Aleksandr Mostovoi", posicoes: ["MEI"], forca: 88 },
      { nome: "Valery Karpin", posicoes: ["ME"], forca: 85 },
      { nome: "Fyodor Cherenkov", posicoes: ["MEI"], forca: 87 },
      { nome: "Dmitri Radchenko", posicoes: ["ATA"], forca: 85 },
      { nome: "Sergei Rodionov", posicoes: ["ATA"], forca: 84 },
      { nome: "Valery Shmarov", posicoes: ["ATA"], forca: 82 },
      { nome: "Igor Ledyakhov", posicoes: ["MC"], forca: 82 },
      { nome: "Oleg Romantsev", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nikolai Pisarev", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1990 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Milan",
    jogadores: [
      { nome: "Giovanni Galli", posicoes: ["GOL"], forca: 88 },
      { nome: "Mauro Tassotti", posicoes: ["LD"], forca: 88 },
      { nome: "Paolo Maldini", posicoes: ["LE"], forca: 92 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 89 },
      { nome: "Franco Baresi", posicoes: ["ZAG"], forca: 94 },
      { nome: "Frank Rijkaard", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Carlo Ancelotti", posicoes: ["MC"], forca: 88 },
      { nome: "Roberto Donadoni", posicoes: ["ME"], forca: 89 },
      { nome: "Alberigo Evani", posicoes: ["ME"], forca: 86 },
      { nome: "Ruud Gullit", posicoes: ["MEI","ATA"], forca: 91 },
      { nome: "Marco van Basten", posicoes: ["ATA"], forca: 95 },
      { nome: "Daniele Massaro", posicoes: ["ATA"], forca: 85 },
      { nome: "Pietro Paolo Virdis", posicoes: ["ATA"], forca: 81 },
      { nome: "Angelo Colombo", posicoes: ["MC"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Benfica",
    jogadores: [
      { nome: "Silvino", posicoes: ["GOL"], forca: 86 },
      { nome: "António Veloso", posicoes: ["LD"], forca: 86 },
      { nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 88 },
      { nome: "Aldair", posicoes: ["ZAG"], forca: 86 },
      { nome: "Samuel", posicoes: ["LE"], forca: 84 },
      { nome: "Jonas Thern", posicoes: ["MC"], forca: 87 },
      { nome: "Valdo", posicoes: ["MEI"], forca: 88 },
      { nome: "Pacheco", posicoes: ["PD"], forca: 85 },
      { nome: "Paneira", posicoes: ["ME"], forca: 85 },
      { nome: "Mats Magnusson", posicoes: ["ATA"], forca: 86 },
      { nome: "Vata", posicoes: ["ATA"], forca: 84 },
      { nome: "César Brito", posicoes: ["ATA"], forca: 82 },
      { nome: "Shéu", posicoes: ["MC"], forca: 84 },
      { nome: "Rui Águas", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Bayern München",
    jogadores: [
      { nome: "Raimond Aumann", posicoes: ["GOL"], forca: 86 },
      { nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 88 },
      { nome: "Jürgen Kohler", posicoes: ["ZAG"], forca: 89 },
      { nome: "Hans Pflügler", posicoes: ["LE"], forca: 84 },
      { nome: "Stefan Reuter", posicoes: ["LD","MC"], forca: 86 },
      { nome: "Olaf Thon", posicoes: ["MC"], forca: 88 },
      { nome: "Thomas Strunz", posicoes: ["MC"], forca: 84 },
      { nome: "Manfred Schwabl", posicoes: ["ME"], forca: 81 },
      { nome: "Roland Wohlfarth", posicoes: ["ATA"], forca: 87 },
      { nome: "Alan McInally", posicoes: ["ATA"], forca: 82 },
      { nome: "Michael Rummenigge", posicoes: ["ATA"], forca: 82 },
      { nome: "Hansi Dorfner", posicoes: ["MC"], forca: 82 },
      { nome: "Norbert Nachtweih", posicoes: ["ZAG"], forca: 80 },
      { nome: "Christian Ziege", posicoes: ["ME"], forca: 75 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1990,
    clube: "Marseille",
    jogadores: [
      { nome: "Pascal Olmeta", posicoes: ["GOL"], forca: 86 },
      { nome: "Manuel Amoros", posicoes: ["LD"], forca: 89 },
      { nome: "Bernard Casoni", posicoes: ["ZAG"], forca: 85 },
      { nome: "Carlos Mozer", posicoes: ["ZAG"], forca: 88 },
      { nome: "Basile Boli", posicoes: ["ZAG"], forca: 86 },
      { nome: "Éric Di Meco", posicoes: ["LE"], forca: 84 },
      { nome: "Jean Tigana", posicoes: ["MC"], forca: 89 },
      { nome: "Franck Sauzée", posicoes: ["MC"], forca: 87 },
      { nome: "Chris Waddle", posicoes: ["PD","MEI"], forca: 90 },
      { nome: "Jean-Pierre Papin", posicoes: ["ATA"], forca: 93 },
      { nome: "Enzo Francescoli", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Jean-Marc Ferreri", posicoes: ["MC"], forca: 85 },
      { nome: "Bruno Germain", posicoes: ["MC"], forca: 84 },
      { nome: "Philippe Vercruysse", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 1989 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Milan",
    jogadores: [
      { nome: "Giovanni Galli", posicoes: ["GOL"], forca: 89 },
      { nome: "Mauro Tassotti", posicoes: ["LD"], forca: 88 },
      { nome: "Paolo Maldini", posicoes: ["LE"], forca: 91 },
      { nome: "Alessandro Costacurta", posicoes: ["ZAG"], forca: 88 },
      { nome: "Franco Baresi", posicoes: ["ZAG"], forca: 94 },
      { nome: "Frank Rijkaard", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Carlo Ancelotti", posicoes: ["MC"], forca: 88 },
      { nome: "Roberto Donadoni", posicoes: ["ME"], forca: 89 },
      { nome: "Angelo Colombo", posicoes: ["ME"], forca: 84 },
      { nome: "Ruud Gullit", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Marco van Basten", posicoes: ["ATA"], forca: 96 },
      { nome: "Alberigo Evani", posicoes: ["ME"], forca: 86 },
      { nome: "Daniele Massaro", posicoes: ["ATA"], forca: 85 },
      { nome: "Pietro Paolo Virdis", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Steaua București",
    jogadores: [
      { nome: "Silviu Lung", posicoes: ["GOL"], forca: 86 },
      { nome: "Dan Petrescu", posicoes: ["LD"], forca: 85 },
      { nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 88 },
      { nome: "Adrian Bumbescu", posicoes: ["ZAG"], forca: 84 },
      { nome: "Tudorel Stoica", posicoes: ["MC"], forca: 85 },
      { nome: "Gheorghe Hagi", posicoes: ["MEI"], forca: 93 },
      { nome: "Iuliu Rotariu", posicoes: ["MC"], forca: 82 },
      { nome: "Ilie Dumitrescu", posicoes: ["ME"], forca: 82 },
      { nome: "Marius Lăcătuș", posicoes: ["ATA"], forca: 87 },
      { nome: "Victor Pițurcă", posicoes: ["ATA"], forca: 85 },
      { nome: "Gavril Balint", posicoes: ["ATA"], forca: 85 },
      { nome: "Ștefan Iovan", posicoes: ["ZAG"], forca: 85 },
      { nome: "Marin Radu", posicoes: ["MC"], forca: 79 },
      { nome: "Gheorghe Popescu", posicoes: ["LE"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Francisco Buyo", posicoes: ["GOL"], forca: 87 },
      { nome: "Chendo", posicoes: ["LD"], forca: 86 },
      { nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 88 },
      { nome: "Rafael Gordillo", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Ricardo Gallego", posicoes: ["MC"], forca: 86 },
      { nome: "Bernd Schuster", posicoes: ["MC","MEI"], forca: 89 },
      { nome: "Míchel", posicoes: ["MEI"], forca: 90 },
      { nome: "Rafael Martín Vázquez", posicoes: ["MEI"], forca: 87 },
      { nome: "Emilio Butragueño", posicoes: ["ATA"], forca: 93 },
      { nome: "Hugo Sánchez", posicoes: ["ATA"], forca: 93 },
      { nome: "Paco Llorente", posicoes: ["ME"], forca: 82 },
      { nome: "Tendillo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Losada", posicoes: ["ATA"], forca: 80 },
      { nome: "Mino", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1989,
    clube: "Galatasaray",
    jogadores: [
      { nome: "Zoran Simović", posicoes: ["GOL"], forca: 85 },
      { nome: "Cüneyt Tanman", posicoes: ["ZAG"], forca: 85 },
      { nome: "Semih Yuvakuran", posicoes: ["ZAG"], forca: 82 },
      { nome: "Bülent Korkmaz", posicoes: ["ZAG"], forca: 80 },
      { nome: "Uğur Tütüneker", posicoes: ["MC"], forca: 82 },
      { nome: "Cevad Prekazi", posicoes: ["MEI"], forca: 86 },
      { nome: "Tugay Kerimoğlu", posicoes: ["MC"], forca: 78 },
      { nome: "Muhammed Altıntaş", posicoes: ["ME"], forca: 81 },
      { nome: "Tanju Çolak", posicoes: ["ATA"], forca: 88 },
      { nome: "Erdal Keser", posicoes: ["ATA"], forca: 84 },
      { nome: "Arif Kocabıyık", posicoes: ["ATA"], forca: 80 },
      { nome: "İsmail Demiriz", posicoes: ["LD"], forca: 79 },
      { nome: "Bülent Alkılıç", posicoes: ["MC"], forca: 78 },
      { nome: "Ahmet Ceyhan", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1988 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "PSV Eindhoven",
    jogadores: [
      { nome: "Hans van Breukelen", posicoes: ["GOL"], forca: 90 },
      { nome: "Eric Gerets", posicoes: ["LD"], forca: 88 },
      { nome: "Ronald Koeman", posicoes: ["ZAG"], forca: 92 },
      { nome: "Ivan Nielsen", posicoes: ["ZAG"], forca: 85 },
      { nome: "Søren Lerby", posicoes: ["LE"], forca: 87 },
      { nome: "Berry van Aerle", posicoes: ["VOL"], forca: 86 },
      { nome: "Gerald Vanenburg", posicoes: ["MC"], forca: 88 },
      { nome: "Frank Arnesen", posicoes: ["MC"], forca: 85 },
      { nome: "Jan Heintze", posicoes: ["ME"], forca: 84 },
      { nome: "Wim Kieft", posicoes: ["ATA"], forca: 87 },
      { nome: "Hans Gillhaus", posicoes: ["ATA"], forca: 85 },
      { nome: "Erwin Koeman", posicoes: ["MC"], forca: 85 },
      { nome: "Anton Janssen", posicoes: ["MC"], forca: 81 },
      { nome: "Stan Valckx", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "Benfica",
    jogadores: [
      { nome: "Silvino", posicoes: ["GOL"], forca: 86 },
      { nome: "António Veloso", posicoes: ["LD"], forca: 86 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 88 },
      { nome: "Dito", posicoes: ["ZAG"], forca: 84 },
      { nome: "Álvaro Magalhães", posicoes: ["LE"], forca: 85 },
      { nome: "Shéu", posicoes: ["MC"], forca: 86 },
      { nome: "Elzo", posicoes: ["MC"], forca: 85 },
      { nome: "Diamantino", posicoes: ["MEI"], forca: 87 },
      { nome: "Pacheco", posicoes: ["PD"], forca: 85 },
      { nome: "Rui Águas", posicoes: ["ATA"], forca: 87 },
      { nome: "Mats Magnusson", posicoes: ["ATA"], forca: 86 },
      { nome: "Chiquinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Wando", posicoes: ["ME"], forca: 81 },
      { nome: "Carlos Mozer", posicoes: ["ZAG"], forca: 88 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Francisco Buyo", posicoes: ["GOL"], forca: 87 },
      { nome: "Chendo", posicoes: ["LD"], forca: 86 },
      { nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 88 },
      { nome: "José Antonio Camacho", posicoes: ["LE"], forca: 86 },
      { nome: "Rafael Gordillo", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Ricardo Gallego", posicoes: ["MC"], forca: 86 },
      { nome: "Míchel", posicoes: ["MEI"], forca: 90 },
      { nome: "Rafael Martín Vázquez", posicoes: ["MEI"], forca: 87 },
      { nome: "Emilio Butragueño", posicoes: ["ATA"], forca: 93 },
      { nome: "Hugo Sánchez", posicoes: ["ATA"], forca: 93 },
      { nome: "Santillana", posicoes: ["ATA"], forca: 85 },
      { nome: "Tendillo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Juanito", posicoes: ["MC"], forca: 80 },
      { nome: "Paco Llorente", posicoes: ["ME"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1988,
    clube: "Steaua București",
    jogadores: [
      { nome: "Silviu Lung", posicoes: ["GOL"], forca: 86 },
      { nome: "Ștefan Iovan", posicoes: ["LD"], forca: 86 },
      { nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 88 },
      { nome: "Adrian Bumbescu", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dan Petrescu", posicoes: ["LE"], forca: 82 },
      { nome: "Tudorel Stoica", posicoes: ["MC"], forca: 86 },
      { nome: "Gheorghe Hagi", posicoes: ["MEI"], forca: 92 },
      { nome: "Ilie Dumitrescu", posicoes: ["MC"], forca: 80 },
      { nome: "Marius Lăcătuș", posicoes: ["ATA"], forca: 87 },
      { nome: "Victor Pițurcă", posicoes: ["ATA"], forca: 86 },
      { nome: "Gavril Balint", posicoes: ["ATA"], forca: 85 },
      { nome: "Iosif Rotariu", posicoes: ["MC"], forca: 82 },
      { nome: "Marin Radu", posicoes: ["ME"], forca: 79 },
      { nome: "Nicolae Ungureanu", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 1987 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Porto",
    jogadores: [
      { nome: "Józef Młynarczyk", posicoes: ["GOL"], forca: 88 },
      { nome: "João Pinto", posicoes: ["LD"], forca: 87 },
      { nome: "Celso", posicoes: ["ZAG"], forca: 85 },
      { nome: "Eduardo Luís", posicoes: ["ZAG"], forca: 84 },
      { nome: "Geraldão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jaime Magalhães", posicoes: ["MC"], forca: 87 },
      { nome: "André", posicoes: ["MC"], forca: 87 },
      { nome: "António Sousa", posicoes: ["MEI"], forca: 86 },
      { nome: "Paulo Futre", posicoes: ["ME","ATA"], forca: 93 },
      { nome: "Madjer", posicoes: ["ATA"], forca: 92 },
      { nome: "Fernando Gomes", posicoes: ["ATA"], forca: 91 },
      { nome: "Juary", posicoes: ["ATA"], forca: 85 },
      { nome: "Rui Barros", posicoes: ["MEI"], forca: 82 },
      { nome: "Frasco", posicoes: ["MC"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Bayern München",
    jogadores: [
      { nome: "Jean-Marie Pfaff", posicoes: ["GOL"], forca: 90 },
      { nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 89 },
      { nome: "Norbert Eder", posicoes: ["ZAG"], forca: 85 },
      { nome: "Hans Pflügler", posicoes: ["LE"], forca: 85 },
      { nome: "Lothar Matthäus", posicoes: ["MC"], forca: 93 },
      { nome: "Andreas Brehme", posicoes: ["LE","MC"], forca: 90 },
      { nome: "Wolfgang Dremmler", posicoes: ["MC"], forca: 82 },
      { nome: "Hansi Dorfner", posicoes: ["MC"], forca: 84 },
      { nome: "Michael Rummenigge", posicoes: ["ATA"], forca: 85 },
      { nome: "Dieter Hoeneß", posicoes: ["ATA"], forca: 87 },
      { nome: "Roland Wohlfarth", posicoes: ["ATA"], forca: 86 },
      { nome: "Ludwig Kögl", posicoes: ["ME"], forca: 82 },
      { nome: "Helmut Winklhofer", posicoes: ["LD"], forca: 84 },
      { nome: "Manfred Schwabl", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Dynamo Kyiv",
    jogadores: [
      { nome: "Viktor Chanov", posicoes: ["GOL"], forca: 87 },
      { nome: "Anatoliy Demyanenko", posicoes: ["LE"], forca: 88 },
      { nome: "Vladimir Bessonov", posicoes: ["LD","ZAG"], forca: 87 },
      { nome: "Sergei Baltacha", posicoes: ["ZAG"], forca: 86 },
      { nome: "Oleg Kuznetsov", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pavel Yakovenko", posicoes: ["MC"], forca: 87 },
      { nome: "Oleksandr Zavarov", posicoes: ["MEI"], forca: 91 },
      { nome: "Vasyl Rats", posicoes: ["ME"], forca: 86 },
      { nome: "Igor Belanov", posicoes: ["ATA"], forca: 93 },
      { nome: "Oleg Blokhin", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Vadym Yevtushenko", posicoes: ["ATA"], forca: 85 },
      { nome: "Ivan Yaremchuk", posicoes: ["MC"], forca: 82 },
      { nome: "Oleksandr Sorokalet", posicoes: ["ZAG"], forca: 80 },
      { nome: "Viktor Khlus", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1987,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Francisco Buyo", posicoes: ["GOL"], forca: 87 },
      { nome: "Chendo", posicoes: ["LD"], forca: 86 },
      { nome: "Manolo Sanchís", posicoes: ["ZAG"], forca: 88 },
      { nome: "José Antonio Camacho", posicoes: ["LE"], forca: 87 },
      { nome: "Rafael Gordillo", posicoes: ["LE","ME"], forca: 87 },
      { nome: "Ricardo Gallego", posicoes: ["MC"], forca: 86 },
      { nome: "Míchel", posicoes: ["MEI"], forca: 90 },
      { nome: "Rafael Martín Vázquez", posicoes: ["MEI"], forca: 87 },
      { nome: "Emilio Butragueño", posicoes: ["ATA"], forca: 92 },
      { nome: "Hugo Sánchez", posicoes: ["ATA"], forca: 93 },
      { nome: "Santillana", posicoes: ["ATA"], forca: 85 },
      { nome: "Jorge Valdano", posicoes: ["ATA"], forca: 86 },
      { nome: "Juanito", posicoes: ["ME"], forca: 82 },
      { nome: "Tendillo", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  // ===== Edição 1986 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "Steaua București",
    jogadores: [
      { nome: "Helmut Duckadam", posicoes: ["GOL"], forca: 90 },
      { nome: "Ștefan Iovan", posicoes: ["LD"], forca: 86 },
      { nome: "Miodrag Belodedici", posicoes: ["ZAG"], forca: 88 },
      { nome: "Adrian Bumbescu", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ilie Bărbulescu", posicoes: ["LE"], forca: 82 },
      { nome: "Tudorel Stoica", posicoes: ["MC"], forca: 87 },
      { nome: "László Bölöni", posicoes: ["MC"], forca: 88 },
      { nome: "Mihail Majearu", posicoes: ["MEI"], forca: 84 },
      { nome: "Marius Lăcătuș", posicoes: ["ATA"], forca: 87 },
      { nome: "Victor Pițurcă", posicoes: ["ATA"], forca: 86 },
      { nome: "Gavril Balint", posicoes: ["ATA"], forca: 85 },
      { nome: "Lucian Bălan", posicoes: ["MC"], forca: 82 },
      { nome: "Anghel Iordănescu", posicoes: ["ATA"], forca: 82 },
      { nome: "Anton Weissenbacher", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "Barcelona",
    jogadores: [
      { nome: "Javier Urruti", posicoes: ["GOL"], forca: 87 },
      { nome: "Migueli", posicoes: ["ZAG"], forca: 87 },
      { nome: "Julio Alberto", posicoes: ["LE"], forca: 86 },
      { nome: "Gerardo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Víctor Muñoz", posicoes: ["MC"], forca: 87 },
      { nome: "Bernd Schuster", posicoes: ["MEI"], forca: 92 },
      { nome: "Marcos Alonso", posicoes: ["ME"], forca: 86 },
      { nome: "Francisco José Carrasco", posicoes: ["ME"], forca: 86 },
      { nome: "Steve Archibald", posicoes: ["ATA"], forca: 88 },
      { nome: "Pichi Alonso", posicoes: ["ATA"], forca: 85 },
      { nome: "Calderé", posicoes: ["MC"], forca: 84 },
      { nome: "Rojo", posicoes: ["ME"], forca: 82 },
      { nome: "Clos", posicoes: ["ATA"], forca: 80 },
      { nome: "Sánchez", posicoes: ["LD"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "Anderlecht",
    jogadores: [
      { nome: "Jacky Munaron", posicoes: ["GOL"], forca: 86 },
      { nome: "Hugo Broos", posicoes: ["ZAG"], forca: 86 },
      { nome: "Georges Grün", posicoes: ["ZAG"], forca: 85 },
      { nome: "Morten Olsen", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "René Vandereycken", posicoes: ["MC"], forca: 85 },
      { nome: "Frank Vercauteren", posicoes: ["ME"], forca: 87 },
      { nome: "Enzo Scifo", posicoes: ["MEI"], forca: 89 },
      { nome: "Juan Lozano", posicoes: ["MEI"], forca: 87 },
      { nome: "Erwin Vandenbergh", posicoes: ["ATA"], forca: 88 },
      { nome: "Kenneth Brylle", posicoes: ["ATA"], forca: 85 },
      { nome: "Arnór Guðjohnsen", posicoes: ["ATA"], forca: 82 },
      { nome: "Alex Czerniatynski", posicoes: ["ME"], forca: 82 },
      { nome: "Michel De Groote", posicoes: ["ZAG"], forca: 82 },
      { nome: "Per Frimann", posicoes: ["MC"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1986,
    clube: "IFK Göteborg",
    jogadores: [
      { nome: "Thomas Wernerson", posicoes: ["GOL"], forca: 84 },
      { nome: "Glenn Hysén", posicoes: ["ZAG"], forca: 88 },
      { nome: "Roland Nilsson", posicoes: ["LD"], forca: 85 },
      { nome: "Stig Fredriksson", posicoes: ["ZAG"], forca: 85 },
      { nome: "Tord Holmgren", posicoes: ["MC"], forca: 82 },
      { nome: "Ruben Svensson", posicoes: ["MC"], forca: 82 },
      { nome: "Benny Lennartsson", posicoes: ["ME"], forca: 79 },
      { nome: "Torbjörn Nilsson", posicoes: ["ATA"], forca: 89 },
      { nome: "Johnny Ekström", posicoes: ["ATA"], forca: 85 },
      { nome: "Stefan Pettersson", posicoes: ["ATA"], forca: 84 },
      { nome: "Peter Larsson", posicoes: ["ME"], forca: 80 },
      { nome: "Conny Karlsson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Tommy Holmgren", posicoes: ["MC"], forca: 79 },
      { nome: "Mikael Robertsson", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1985 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Juventus",
    jogadores: [
      { nome: "Stefano Tacconi", posicoes: ["GOL"], forca: 88 },
      { nome: "Luciano Favero", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Antonio Cabrini", posicoes: ["LE"], forca: 89 },
      { nome: "Gaetano Scirea", posicoes: ["ZAG"], forca: 92 },
      { nome: "Sergio Brio", posicoes: ["ZAG"], forca: 86 },
      { nome: "Massimo Bonini", posicoes: ["VOL"], forca: 87 },
      { nome: "Marco Tardelli", posicoes: ["MC"], forca: 90 },
      { nome: "Michel Platini", posicoes: ["MEI"], forca: 96 },
      { nome: "Zbigniew Boniek", posicoes: ["ATA","MEI"], forca: 92 },
      { nome: "Paolo Rossi", posicoes: ["ATA"], forca: 88 },
      { nome: "Massimo Briaschi", posicoes: ["ATA"], forca: 84 },
      { nome: "Beniamino Vignola", posicoes: ["MEI"], forca: 82 },
      { nome: "Cesare Prandelli", posicoes: ["MC"], forca: 80 },
      { nome: "Moreno Torricelli", posicoes: ["ZAG"], forca: 73 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Liverpool",
    jogadores: [
      { nome: "Bruce Grobbelaar", posicoes: ["GOL"], forca: 88 },
      { nome: "Phil Neal", posicoes: ["LD"], forca: 86 },
      { nome: "Steve Nicol", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Alan Hansen", posicoes: ["ZAG"], forca: 90 },
      { nome: "Mark Lawrenson", posicoes: ["ZAG"], forca: 89 },
      { nome: "Ronnie Whelan", posicoes: ["MC"], forca: 87 },
      { nome: "Jan Mølby", posicoes: ["MC"], forca: 86 },
      { nome: "Craig Johnston", posicoes: ["ME"], forca: 86 },
      { nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 91 },
      { nome: "Ian Rush", posicoes: ["ATA"], forca: 93 },
      { nome: "Paul Walsh", posicoes: ["ATA"], forca: 82 },
      { nome: "Michael Robinson", posicoes: ["ATA"], forca: 81 },
      { nome: "Sammy Lee", posicoes: ["MC"], forca: 82 },
      { nome: "Jim Beglin", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Bordeaux",
    jogadores: [
      { nome: "Dominique Dropsy", posicoes: ["GOL"], forca: 86 },
      { nome: "Patrick Battiston", posicoes: ["ZAG"], forca: 88 },
      { nome: "Léonard Specht", posicoes: ["ZAG"], forca: 85 },
      { nome: "Thierry Tusseau", posicoes: ["LD"], forca: 85 },
      { nome: "Jean Tigana", posicoes: ["MC"], forca: 92 },
      { nome: "Alain Giresse", posicoes: ["MEI"], forca: 92 },
      { nome: "Jean-Christophe Thouvenel", posicoes: ["MC"], forca: 82 },
      { nome: "René Girard", posicoes: ["VOL"], forca: 85 },
      { nome: "Bernard Lacombe", posicoes: ["ATA"], forca: 87 },
      { nome: "Dieter Müller", posicoes: ["ATA"], forca: 85 },
      { nome: "Uwe Reinders", posicoes: ["ATA"], forca: 81 },
      { nome: "Gernot Rohr", posicoes: ["ZAG"], forca: 84 },
      { nome: "José Touré", posicoes: ["ME"], forca: 82 },
      { nome: "Philippe Fargeon", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1985,
    clube: "Panathinaikos",
    jogadores: [
      { nome: "Nikos Sarganis", posicoes: ["GOL"], forca: 85 },
      { nome: "Anthimos Kapsis", posicoes: ["ZAG"], forca: 85 },
      { nome: "Takis Fyssas", posicoes: ["ZAG"], forca: 76 },
      { nome: "Giannis Kyrastas", posicoes: ["LD"], forca: 84 },
      { nome: "Dimitris Saravakos", posicoes: ["MC"], forca: 87 },
      { nome: "Velimir Zajec", posicoes: ["MC"], forca: 88 },
      { nome: "Juan Ramón Rocha", posicoes: ["MEI"], forca: 87 },
      { nome: "Dimitris Antoniou", posicoes: ["ME"], forca: 80 },
      { nome: "Charalambos Dimopoulos", posicoes: ["ATA"], forca: 82 },
      { nome: "Thanasis Dimopoulos", posicoes: ["ATA"], forca: 79 },
      { nome: "Dimitris Livathinos", posicoes: ["MC"], forca: 81 },
      { nome: "Stratos Apostolakis", posicoes: ["LE"], forca: 82 },
      { nome: "Takis Ikonomopoulos", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  // ===== Edição 1984 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Liverpool",
    jogadores: [
      { nome: "Bruce Grobbelaar", posicoes: ["GOL"], forca: 88 },
      { nome: "Phil Neal", posicoes: ["LD"], forca: 87 },
      { nome: "Alan Kennedy", posicoes: ["LE"], forca: 86 },
      { nome: "Alan Hansen", posicoes: ["ZAG"], forca: 90 },
      { nome: "Mark Lawrenson", posicoes: ["ZAG"], forca: 89 },
      { nome: "Graeme Souness", posicoes: ["MC"], forca: 92 },
      { nome: "Ronnie Whelan", posicoes: ["MC"], forca: 87 },
      { nome: "Sammy Lee", posicoes: ["MC"], forca: 84 },
      { nome: "Craig Johnston", posicoes: ["ME"], forca: 86 },
      { nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 92 },
      { nome: "Ian Rush", posicoes: ["ATA"], forca: 93 },
      { nome: "Michael Robinson", posicoes: ["ATA"], forca: 82 },
      { nome: "Steve Nicol", posicoes: ["MC"], forca: 81 },
      { nome: "Paul Walsh", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Roma",
    jogadores: [
      { nome: "Franco Tancredi", posicoes: ["GOL"], forca: 87 },
      { nome: "Sebastiano Nela", posicoes: ["LE","ZAG"], forca: 86 },
      { nome: "Agostino Di Bartolomei", posicoes: ["ZAG"], forca: 89 },
      { nome: "Pietro Vierchowod", posicoes: ["ZAG"], forca: 89 },
      { nome: "Carlo Ancelotti", posicoes: ["MC"], forca: 87 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Falcão", posicoes: ["MEI"], forca: 93 },
      { nome: "Bruno Conti", posicoes: ["PD"], forca: 91 },
      { nome: "Roberto Pruzzo", posicoes: ["ATA"], forca: 90 },
      { nome: "Francesco Graziani", posicoes: ["ATA"], forca: 86 },
      { nome: "Odoacre Chierico", posicoes: ["ME"], forca: 82 },
      { nome: "Michele Nappi", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dario Bonetti", posicoes: ["LD"], forca: 81 },
      { nome: "Vincenzo Prohaska", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Dundee United",
    jogadores: [
      { nome: "Hamish McAlpine", posicoes: ["GOL"], forca: 85 },
      { nome: "David Narey", posicoes: ["ZAG"], forca: 87 },
      { nome: "Paul Hegarty", posicoes: ["ZAG"], forca: 85 },
      { nome: "Richard Gough", posicoes: ["ZAG"], forca: 87 },
      { nome: "Maurice Malpas", posicoes: ["LE"], forca: 85 },
      { nome: "Eamonn Bannon", posicoes: ["MC"], forca: 86 },
      { nome: "John Holt", posicoes: ["MC"], forca: 82 },
      { nome: "Ralph Milne", posicoes: ["ME"], forca: 85 },
      { nome: "Paul Sturrock", posicoes: ["ATA"], forca: 87 },
      { nome: "Davie Dodds", posicoes: ["ATA"], forca: 84 },
      { nome: "Billy Kirkwood", posicoes: ["MC"], forca: 81 },
      { nome: "Ian Redford", posicoes: ["ME"], forca: 80 },
      { nome: "Derek Stark", posicoes: ["ZAG"], forca: 79 },
      { nome: "John Reilly", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1984,
    clube: "Dinamo București",
    jogadores: [
      { nome: "Dumitru Moraru", posicoes: ["GOL"], forca: 85 },
      { nome: "Mircea Rednic", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Ioan Andone", posicoes: ["ZAG"], forca: 85 },
      { nome: "Michael Klein", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ion Marin", posicoes: ["MC"], forca: 81 },
      { nome: "Gheorghe Mulțescu", posicoes: ["MC"], forca: 85 },
      { nome: "Cornel Țălnar", posicoes: ["MEI"], forca: 84 },
      { nome: "Costel Orac", posicoes: ["ME"], forca: 84 },
      { nome: "Rodion Cămătaru", posicoes: ["ATA"], forca: 87 },
      { nome: "Marin Dragnea", posicoes: ["ATA"], forca: 81 },
      { nome: "Claudiu Vaișcovici", posicoes: ["ATA"], forca: 80 },
      { nome: "Ionel Augustin", posicoes: ["MC"], forca: 81 },
      { nome: "Nicolae Ungureanu", posicoes: ["ZAG"], forca: 80 },
      { nome: "Ioan Ovidiu Sabău", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1983 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Hamburg",
    jogadores: [
      { nome: "Uli Stein", posicoes: ["GOL"], forca: 88 },
      { nome: "Manfred Kaltz", posicoes: ["LD"], forca: 89 },
      { nome: "Ditmar Jakobs", posicoes: ["ZAG"], forca: 86 },
      { nome: "Holger Hieronymus", posicoes: ["ZAG"], forca: 84 },
      { nome: "Felix Magath", posicoes: ["MC"], forca: 91 },
      { nome: "Jimmy Hartwig", posicoes: ["MC"], forca: 85 },
      { nome: "Wolfgang Rolff", posicoes: ["MC"], forca: 84 },
      { nome: "Jürgen Milewski", posicoes: ["ME"], forca: 82 },
      { nome: "Horst Hrubesch", posicoes: ["ATA"], forca: 89 },
      { nome: "Lars Bastrup", posicoes: ["ATA"], forca: 82 },
      { nome: "Thomas von Heesen", posicoes: ["ATA"], forca: 84 },
      { nome: "Caspar Memering", posicoes: ["MC"], forca: 82 },
      { nome: "Jürgen Groh", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rüdiger Wenzel", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Juventus",
    jogadores: [
      { nome: "Dino Zoff", posicoes: ["GOL"], forca: 91 },
      { nome: "Claudio Gentile", posicoes: ["LD","ZAG"], forca: 89 },
      { nome: "Antonio Cabrini", posicoes: ["LE"], forca: 89 },
      { nome: "Gaetano Scirea", posicoes: ["ZAG"], forca: 92 },
      { nome: "Sergio Brio", posicoes: ["ZAG"], forca: 85 },
      { nome: "Marco Tardelli", posicoes: ["MC"], forca: 90 },
      { nome: "Massimo Bonini", posicoes: ["VOL"], forca: 86 },
      { nome: "Michel Platini", posicoes: ["MEI"], forca: 94 },
      { nome: "Zbigniew Boniek", posicoes: ["ATA","MEI"], forca: 92 },
      { nome: "Paolo Rossi", posicoes: ["ATA"], forca: 91 },
      { nome: "Roberto Bettega", posicoes: ["ATA"], forca: 86 },
      { nome: "Giuseppe Furino", posicoes: ["MC"], forca: 82 },
      { nome: "Franco Causio", posicoes: ["PD"], forca: 85 },
      { nome: "Domenico Marocchino", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Real Sociedad",
    jogadores: [
      { nome: "Luis Arconada", posicoes: ["GOL"], forca: 90 },
      { nome: "Alberto Górriz", posicoes: ["ZAG"], forca: 85 },
      { nome: "Agustín Gajate", posicoes: ["ZAG"], forca: 82 },
      { nome: "Celayeta", posicoes: ["LD"], forca: 82 },
      { nome: "Periko Alonso", posicoes: ["MC"], forca: 86 },
      { nome: "Larrañaga", posicoes: ["MC"], forca: 85 },
      { nome: "Jesús María Zamora", posicoes: ["MEI"], forca: 87 },
      { nome: "Roberto López Ufarte", posicoes: ["PE"], forca: 88 },
      { nome: "Jesús María Satrústegui", posicoes: ["ATA"], forca: 87 },
      { nome: "Uralde", posicoes: ["ATA"], forca: 85 },
      { nome: "Idígoras", posicoes: ["ME"], forca: 82 },
      { nome: "Bakero", posicoes: ["MC"], forca: 78 },
      { nome: "Diego", posicoes: ["ZAG"], forca: 79 },
      { nome: "José Mari Bakero", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1983,
    clube: "Widzew Łódź",
    jogadores: [
      { nome: "Józef Młynarczyk", posicoes: ["GOL"], forca: 87 },
      { nome: "Władysław Żmuda", posicoes: ["ZAG"], forca: 86 },
      { nome: "Andrzej Grębosz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Marek Pięta", posicoes: ["LD"], forca: 80 },
      { nome: "Włodzimierz Smolarek", posicoes: ["MC"], forca: 87 },
      { nome: "Mirosław Tłokiński", posicoes: ["MC"], forca: 84 },
      { nome: "Zbigniew Boniek", posicoes: ["MEI"], forca: 92 },
      { nome: "Tadeusz Świątek", posicoes: ["ME"], forca: 79 },
      { nome: "Włodzimierz Ciołek", posicoes: ["ATA"], forca: 82 },
      { nome: "Janusz Turowski", posicoes: ["ATA"], forca: 79 },
      { nome: "Dariusz Dziekanowski", posicoes: ["ATA"], forca: 78 },
      { nome: "Marek Dziuba", posicoes: ["MC"], forca: 80 },
      { nome: "Andrzej Możejko", posicoes: ["ZAG"], forca: 78 },
      { nome: "Krzysztof Surlit", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 1982 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "Aston Villa",
    jogadores: [
      { nome: "Jimmy Rimmer", posicoes: ["GOL"], forca: 85 },
      { nome: "Nigel Spink", posicoes: ["GOL"], forca: 82 },
      { nome: "Kenny Swain", posicoes: ["LD"], forca: 85 },
      { nome: "Allan Evans", posicoes: ["ZAG"], forca: 86 },
      { nome: "Ken McNaught", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gary Williams", posicoes: ["LE"], forca: 84 },
      { nome: "Dennis Mortimer", posicoes: ["MC"], forca: 88 },
      { nome: "Des Bremner", posicoes: ["MC"], forca: 86 },
      { nome: "Gordon Cowans", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Tony Morley", posicoes: ["PE"], forca: 87 },
      { nome: "Gary Shaw", posicoes: ["ATA"], forca: 88 },
      { nome: "Peter Withe", posicoes: ["ATA"], forca: 89 },
      { nome: "Mark Walters", posicoes: ["ATA"], forca: 80 },
      { nome: "Colin Gibson", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "Bayern München",
    jogadores: [
      { nome: "Walter Junghans", posicoes: ["GOL"], forca: 85 },
      { nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 88 },
      { nome: "Wolfgang Dremmler", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Kurt Niedermayer", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paul Breitner", posicoes: ["MC"], forca: 91 },
      { nome: "Karl-Heinz Rummenigge", posicoes: ["MEI","ATA"], forca: 94 },
      { nome: "Dieter Hoeneß", posicoes: ["ATA"], forca: 88 },
      { nome: "Reinhold Mathy", posicoes: ["ATA"], forca: 81 },
      { nome: "Bernd Dürnberger", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Norbert Eder", posicoes: ["ZAG"], forca: 82 },
      { nome: "Wolfgang Kraus", posicoes: ["MC"], forca: 81 },
      { nome: "Udo Horsmann", posicoes: ["MC"], forca: 80 },
      { nome: "Kurt Welzl", posicoes: ["ATA"], forca: 79 },
      { nome: "Rainer Ohlhauser", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "Anderlecht",
    jogadores: [
      { nome: "Jacky Munaron", posicoes: ["GOL"], forca: 86 },
      { nome: "Hugo Broos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Morten Olsen", posicoes: ["ZAG","VOL"], forca: 88 },
      { nome: "Michel De Groote", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ludo Coeck", posicoes: ["MC"], forca: 87 },
      { nome: "Per Frimann", posicoes: ["MC"], forca: 84 },
      { nome: "Frank Vercauteren", posicoes: ["ME","PE"], forca: 88 },
      { nome: "Juan Lozano", posicoes: ["MEI"], forca: 87 },
      { nome: "Erwin Vandenbergh", posicoes: ["ATA"], forca: 89 },
      { nome: "Kenneth Brylle", posicoes: ["ATA"], forca: 85 },
      { nome: "Alex Czerniatynski", posicoes: ["ATA"], forca: 82 },
      { nome: "René Vandereycken", posicoes: ["MC"], forca: 85 },
      { nome: "Georges Grün", posicoes: ["ZAG"], forca: 80 },
      { nome: "Arnór Guðjohnsen", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1982,
    clube: "CSKA Sofia",
    jogadores: [
      { nome: "Georgi Velinov", posicoes: ["GOL"], forca: 82 },
      { nome: "Georgi Dimitrov", posicoes: ["ZAG"], forca: 85 },
      { nome: "Tsvetan Yonchev", posicoes: ["ZAG"], forca: 80 },
      { nome: "Radoslav Zdravkov", posicoes: ["LD"], forca: 82 },
      { nome: "Plamen Markov", posicoes: ["MC"], forca: 85 },
      { nome: "Metodi Tomanov", posicoes: ["MC"], forca: 79 },
      { nome: "Georgi Slavkov", posicoes: ["MEI"], forca: 82 },
      { nome: "Stoycho Mladenov", posicoes: ["ATA"], forca: 87 },
      { nome: "Spas Dzhevizov", posicoes: ["ATA"], forca: 84 },
      { nome: "Hristo Stoichkov", posicoes: ["ATA"], forca: 73 },
      { nome: "Emil Kostadinov", posicoes: ["ME"], forca: 71 },
      { nome: "Tenyo Minchev", posicoes: ["VOL"], forca: 78 },
      { nome: "Angel Rangelov", posicoes: ["ZAG"], forca: 78 },
      { nome: "Petar Zehtinski", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1981 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Liverpool",
    jogadores: [
      { nome: "Ray Clemence", posicoes: ["GOL"], forca: 90 },
      { nome: "Phil Neal", posicoes: ["LD"], forca: 87 },
      { nome: "Alan Kennedy", posicoes: ["LE"], forca: 86 },
      { nome: "Alan Hansen", posicoes: ["ZAG"], forca: 89 },
      { nome: "Phil Thompson", posicoes: ["ZAG"], forca: 87 },
      { nome: "Graeme Souness", posicoes: ["MC"], forca: 91 },
      { nome: "Terry McDermott", posicoes: ["MC"], forca: 87 },
      { nome: "Ray Kennedy", posicoes: ["MC","ME"], forca: 87 },
      { nome: "Sammy Lee", posicoes: ["PD","MC"], forca: 84 },
      { nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 93 },
      { nome: "David Johnson", posicoes: ["ATA"], forca: 85 },
      { nome: "Ian Rush", posicoes: ["ATA"], forca: 80 },
      { nome: "Jimmy Case", posicoes: ["MC"], forca: 84 },
      { nome: "Colin Irwin", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Agustín", posicoes: ["GOL"], forca: 85 },
      { nome: "José Antonio Camacho", posicoes: ["LE"], forca: 88 },
      { nome: "Sabido", posicoes: ["ZAG"], forca: 82 },
      { nome: "García Navajas", posicoes: ["ZAG"], forca: 81 },
      { nome: "Uli Stielike", posicoes: ["MC"], forca: 90 },
      { nome: "Vicente del Bosque", posicoes: ["MC"], forca: 85 },
      { nome: "García Hernández", posicoes: ["MC"], forca: 82 },
      { nome: "Juanito", posicoes: ["ME","ATA"], forca: 89 },
      { nome: "Santillana", posicoes: ["ATA"], forca: 89 },
      { nome: "Laurie Cunningham", posicoes: ["PE","ATA"], forca: 85 },
      { nome: "Ángel", posicoes: ["LD"], forca: 82 },
      { nome: "Isidro", posicoes: ["ME"], forca: 80 },
      { nome: "Pineda", posicoes: ["ATA"], forca: 79 },
      { nome: "Ricardo Gallego", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Bayern München",
    jogadores: [
      { nome: "Walter Junghans", posicoes: ["GOL"], forca: 85 },
      { nome: "Klaus Augenthaler", posicoes: ["ZAG"], forca: 88 },
      { nome: "Wolfgang Dremmler", posicoes: ["LD","ZAG"], forca: 84 },
      { nome: "Kurt Niedermayer", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paul Breitner", posicoes: ["MC"], forca: 92 },
      { nome: "Norbert Janzon", posicoes: ["MC"], forca: 80 },
      { nome: "Karl-Heinz Rummenigge", posicoes: ["MEI","ATA"], forca: 95 },
      { nome: "Dieter Hoeneß", posicoes: ["ATA"], forca: 87 },
      { nome: "Reinhold Mathy", posicoes: ["ATA"], forca: 80 },
      { nome: "Bernd Dürnberger", posicoes: ["ME"], forca: 82 },
      { nome: "Norbert Eder", posicoes: ["ZAG"], forca: 81 },
      { nome: "Udo Horsmann", posicoes: ["MC"], forca: 80 },
      { nome: "Kurt Welzl", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1981,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Ivano Bordon", posicoes: ["GOL"], forca: 87 },
      { nome: "Giuseppe Bergomi", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Giuseppe Baresi", posicoes: ["ZAG"], forca: 87 },
      { nome: "Graziano Bini", posicoes: ["ZAG"], forca: 84 },
      { nome: "Gabriele Oriali", posicoes: ["MC"], forca: 87 },
      { nome: "Evaristo Beccalossi", posicoes: ["MC"], forca: 88 },
      { nome: "Giancarlo Pasinato", posicoes: ["MC"], forca: 82 },
      { nome: "Herbert Prohaska", posicoes: ["MEI"], forca: 89 },
      { nome: "Alessandro Altobelli", posicoes: ["ATA"], forca: 89 },
      { nome: "Carlo Muraro", posicoes: ["ATA"], forca: 85 },
      { nome: "Aldo Serena", posicoes: ["ATA"], forca: 80 },
      { nome: "Giancarlo Marini", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nazzareno Canuti", posicoes: ["LD"], forca: 79 },
      { nome: "Roberto Mozzini", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1980 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Nottingham Forest",
    jogadores: [
      { nome: "Peter Shilton", posicoes: ["GOL"], forca: 93 },
      { nome: "Viv Anderson", posicoes: ["LD"], forca: 87 },
      { nome: "Frank Clark", posicoes: ["LE"], forca: 84 },
      { nome: "Kenny Burns", posicoes: ["ZAG"], forca: 87 },
      { nome: "Larry Lloyd", posicoes: ["ZAG"], forca: 86 },
      { nome: "John McGovern", posicoes: ["MC"], forca: 87 },
      { nome: "Ian Bowyer", posicoes: ["MC"], forca: 85 },
      { nome: "Martin O'Neill", posicoes: ["ME"], forca: 86 },
      { nome: "John Robertson", posicoes: ["PE"], forca: 91 },
      { nome: "Garry Birtles", posicoes: ["ATA"], forca: 87 },
      { nome: "Trevor Francis", posicoes: ["ATA"], forca: 89 },
      { nome: "Tony Woodcock", posicoes: ["ATA"], forca: 86 },
      { nome: "Archie Gemmill", posicoes: ["MC"], forca: 82 },
      { nome: "David Needham", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Hamburg",
    jogadores: [
      { nome: "Rudi Kargus", posicoes: ["GOL"], forca: 85 },
      { nome: "Manfred Kaltz", posicoes: ["LD"], forca: 89 },
      { nome: "Peter Nogly", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ditmar Jakobs", posicoes: ["ZAG"], forca: 84 },
      { nome: "Felix Magath", posicoes: ["MC"], forca: 89 },
      { nome: "Caspar Memering", posicoes: ["MC"], forca: 85 },
      { nome: "Jimmy Hartwig", posicoes: ["MC"], forca: 85 },
      { nome: "Horst Hrubesch", posicoes: ["ATA"], forca: 89 },
      { nome: "Kevin Keegan", posicoes: ["ATA","MEI"], forca: 92 },
      { nome: "Reiner Reimann", posicoes: ["ATA"], forca: 84 },
      { nome: "Ivan Buljan", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jürgen Milewski", posicoes: ["MC"], forca: 80 },
      { nome: "Jürgen Groh", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Ajax",
    jogadores: [
      { nome: "Piet Schrijvers", posicoes: ["GOL"], forca: 87 },
      { nome: "Ruud Krol", posicoes: ["ZAG","LE"], forca: 91 },
      { nome: "Edo Ophof", posicoes: ["ZAG"], forca: 81 },
      { nome: "Wim Meutstege", posicoes: ["LD"], forca: 80 },
      { nome: "Søren Lerby", posicoes: ["MC"], forca: 89 },
      { nome: "Frank Arnesen", posicoes: ["MC"], forca: 87 },
      { nome: "Dick Schoenaker", posicoes: ["MC"], forca: 85 },
      { nome: "Simon Tahamata", posicoes: ["PE"], forca: 86 },
      { nome: "Tscheu La Ling", posicoes: ["PD"], forca: 85 },
      { nome: "Wim Kieft", posicoes: ["ATA"], forca: 82 },
      { nome: "Ray Clarke", posicoes: ["ATA"], forca: 80 },
      { nome: "Martin van Geel", posicoes: ["MC"], forca: 79 },
      { nome: "Peter Boeve", posicoes: ["ZAG"], forca: 79 },
      { nome: "Johan Zuidema", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1980,
    clube: "Real Madrid",
    jogadores: [
      { nome: "García Remón", posicoes: ["GOL"], forca: 86 },
      { nome: "José Antonio Camacho", posicoes: ["LE"], forca: 88 },
      { nome: "Benito", posicoes: ["ZAG"], forca: 84 },
      { nome: "Pirri", posicoes: ["ZAG","MC"], forca: 88 },
      { nome: "Vicente del Bosque", posicoes: ["MC"], forca: 85 },
      { nome: "Uli Stielike", posicoes: ["MC"], forca: 90 },
      { nome: "Juanito", posicoes: ["PD","ATA"], forca: 89 },
      { nome: "Santillana", posicoes: ["ATA"], forca: 89 },
      { nome: "Laurie Cunningham", posicoes: ["PE","ATA"], forca: 86 },
      { nome: "Ángel", posicoes: ["LD"], forca: 82 },
      { nome: "García Hernández", posicoes: ["MC"], forca: 82 },
      { nome: "Roberto Martínez", posicoes: ["ATA"], forca: 81 },
      { nome: "Isidro", posicoes: ["ME"], forca: 80 },
      { nome: "Pineda", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1979 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "Nottingham Forest",
    jogadores: [
      { nome: "Peter Shilton", posicoes: ["GOL"], forca: 93 },
      { nome: "Viv Anderson", posicoes: ["LD"], forca: 87 },
      { nome: "Frank Clark", posicoes: ["LE"], forca: 85 },
      { nome: "Kenny Burns", posicoes: ["ZAG"], forca: 87 },
      { nome: "Larry Lloyd", posicoes: ["ZAG"], forca: 86 },
      { nome: "John McGovern", posicoes: ["MC"], forca: 87 },
      { nome: "Ian Bowyer", posicoes: ["MC"], forca: 85 },
      { nome: "Martin O'Neill", posicoes: ["ME"], forca: 87 },
      { nome: "John Robertson", posicoes: ["PE"], forca: 90 },
      { nome: "Garry Birtles", posicoes: ["ATA"], forca: 85 },
      { nome: "Tony Woodcock", posicoes: ["ATA"], forca: 88 },
      { nome: "Trevor Francis", posicoes: ["ATA"], forca: 89 },
      { nome: "Archie Gemmill", posicoes: ["MC"], forca: 85 },
      { nome: "David Needham", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "Malmö FF",
    jogadores: [
      { nome: "Jan Möller", posicoes: ["GOL"], forca: 84 },
      { nome: "Roland Andersson", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Roy Andersson", posicoes: ["ZAG"], forca: 86 },
      { nome: "Ingemar Erlandsson", posicoes: ["ZAG"], forca: 82 },
      { nome: "Bo Larsson", posicoes: ["MC"], forca: 87 },
      { nome: "Staffan Tapper", posicoes: ["MC"], forca: 82 },
      { nome: "Anders Ljungberg", posicoes: ["MEI"], forca: 81 },
      { nome: "Robert Prytz", posicoes: ["ME"], forca: 80 },
      { nome: "Tommy Hansson", posicoes: ["ATA"], forca: 80 },
      { nome: "Tore Cervin", posicoes: ["ATA"], forca: 81 },
      { nome: "Magnus Andersson", posicoes: ["ATA"], forca: 79 },
      { nome: "Jan Olsson", posicoes: ["VOL"], forca: 80 },
      { nome: "Krister Kristensson", posicoes: ["LE"], forca: 78 },
      { nome: "Conny Andersson", posicoes: ["ME"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "Austria Wien",
    jogadores: [
      { nome: "Friedl Koncilia", posicoes: ["GOL"], forca: 86 },
      { nome: "Robert Sara", posicoes: ["LD","ZAG"], forca: 87 },
      { nome: "Erich Obermayer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Josef Sara", posicoes: ["ZAG"], forca: 80 },
      { nome: "Herbert Prohaska", posicoes: ["MC"], forca: 91 },
      { nome: "Karl Daxbacher", posicoes: ["MC"], forca: 82 },
      { nome: "Felix Gasselich", posicoes: ["MEI"], forca: 85 },
      { nome: "Thomas Parits", posicoes: ["PE"], forca: 84 },
      { nome: "Walter Schachner", posicoes: ["ATA"], forca: 87 },
      { nome: "Hans Pirkner", posicoes: ["ATA"], forca: 84 },
      { nome: "Julio César Morales", posicoes: ["ATA"], forca: 81 },
      { nome: "Hubert Baumgartner", posicoes: ["VOL"], forca: 79 },
      { nome: "Johann Dihanich", posicoes: ["LE"], forca: 78 },
      { nome: "Ernst Baumeister", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1979,
    clube: "1. FC Köln",
    jogadores: [
      { nome: "Harald Schumacher", posicoes: ["GOL"], forca: 88 },
      { nome: "Harald Konopka", posicoes: ["LD"], forca: 84 },
      { nome: "Herbert Zimmermann", posicoes: ["ZAG"], forca: 85 },
      { nome: "Bernd Cullmann", posicoes: ["ZAG","MC"], forca: 86 },
      { nome: "Heinz Flohe", posicoes: ["MC"], forca: 88 },
      { nome: "Herbert Neumann", posicoes: ["MC"], forca: 82 },
      { nome: "Bernd Schuster", posicoes: ["MEI"], forca: 87 },
      { nome: "Yasuhiko Okudera", posicoes: ["PE","ME"], forca: 84 },
      { nome: "Dieter Müller", posicoes: ["ATA"], forca: 89 },
      { nome: "Hannes Löhr", posicoes: ["ATA"], forca: 82 },
      { nome: "Roger Van Gool", posicoes: ["ATA"], forca: 81 },
      { nome: "Pierre Littbarski", posicoes: ["ME"], forca: 79 },
      { nome: "Roland Gerber", posicoes: ["ZAG"], forca: 78 },
      { nome: "Friedhelm Funkel", posicoes: ["MC"], forca: 78 }
    ]
  },

  // ===== Edição 1978 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Liverpool",
    jogadores: [
      { nome: "Ray Clemence", posicoes: ["GOL"], forca: 90 },
      { nome: "Phil Neal", posicoes: ["LD"], forca: 87 },
      { nome: "Alan Kennedy", posicoes: ["LE"], forca: 85 },
      { nome: "Emlyn Hughes", posicoes: ["ZAG"], forca: 88 },
      { nome: "Phil Thompson", posicoes: ["ZAG"], forca: 87 },
      { nome: "Graeme Souness", posicoes: ["MC"], forca: 89 },
      { nome: "Terry McDermott", posicoes: ["MC"], forca: 88 },
      { nome: "Ray Kennedy", posicoes: ["MC","ME"], forca: 87 },
      { nome: "Jimmy Case", posicoes: ["PD"], forca: 85 },
      { nome: "Kenny Dalglish", posicoes: ["ATA","MEI"], forca: 93 },
      { nome: "David Fairclough", posicoes: ["ATA"], forca: 82 },
      { nome: "Steve Heighway", posicoes: ["ATA"], forca: 85 },
      { nome: "Ian Callaghan", posicoes: ["MC"], forca: 82 },
      { nome: "David Johnson", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Club Brugge",
    jogadores: [
      { nome: "Birger Jensen", posicoes: ["GOL"], forca: 85 },
      { nome: "Fons Bastijns", posicoes: ["LD"], forca: 82 },
      { nome: "Georges Leekens", posicoes: ["ZAG"], forca: 84 },
      { nome: "Gerrie De Greef", posicoes: ["ZAG"], forca: 80 },
      { nome: "Julien Cools", posicoes: ["MC"], forca: 87 },
      { nome: "René Vandereycken", posicoes: ["MC"], forca: 87 },
      { nome: "Paul Courant", posicoes: ["MC"], forca: 82 },
      { nome: "Ulrik le Fèvre", posicoes: ["ME"], forca: 84 },
      { nome: "Raoul Lambert", posicoes: ["ATA"], forca: 87 },
      { nome: "Roger Davies", posicoes: ["ATA"], forca: 82 },
      { nome: "Jan Simoen", posicoes: ["ATA"], forca: 80 },
      { nome: "Leen Barth", posicoes: ["MEI"], forca: 79 },
      { nome: "Walter Meeuws", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dirk Sanders", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Juventus",
    jogadores: [
      { nome: "Dino Zoff", posicoes: ["GOL"], forca: 92 },
      { nome: "Claudio Gentile", posicoes: ["LD","ZAG"], forca: 89 },
      { nome: "Antonio Cabrini", posicoes: ["LE"], forca: 87 },
      { nome: "Gaetano Scirea", posicoes: ["ZAG"], forca: 92 },
      { nome: "Francesco Morini", posicoes: ["ZAG"], forca: 85 },
      { nome: "Marco Tardelli", posicoes: ["MC"], forca: 90 },
      { nome: "Giuseppe Furino", posicoes: ["VOL"], forca: 87 },
      { nome: "Romeo Benetti", posicoes: ["MC"], forca: 86 },
      { nome: "Franco Causio", posicoes: ["PD"], forca: 88 },
      { nome: "Roberto Bettega", posicoes: ["ATA"], forca: 90 },
      { nome: "Roberto Boninsegna", posicoes: ["ATA"], forca: 85 },
      { nome: "Pietro Paolo Virdis", posicoes: ["ATA"], forca: 80 },
      { nome: "Antonello Cuccureddu", posicoes: ["ZAG","MC"], forca: 86 },
      { nome: "Renato Zaccarelli", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1978,
    clube: "Borussia Mönchengladbach",
    jogadores: [
      { nome: "Wolfgang Kleff", posicoes: ["GOL"], forca: 86 },
      { nome: "Berti Vogts", posicoes: ["LD"], forca: 90 },
      { nome: "Wilfried Hannes", posicoes: ["ZAG"], forca: 82 },
      { nome: "Hans-Jürgen Wittkamp", posicoes: ["ZAG"], forca: 81 },
      { nome: "Rainer Bonhof", posicoes: ["MC"], forca: 89 },
      { nome: "Herbert Wimmer", posicoes: ["MC"], forca: 86 },
      { nome: "Uli Stielike", posicoes: ["MC","ZAG"], forca: 88 },
      { nome: "Allan Simonsen", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Jupp Heynckes", posicoes: ["ATA"], forca: 90 },
      { nome: "Ewald Lienen", posicoes: ["PE"], forca: 82 },
      { nome: "Carsten Nielsen", posicoes: ["ATA"], forca: 80 },
      { nome: "Christian Kulik", posicoes: ["MC"], forca: 80 },
      { nome: "Winfried Schäfer", posicoes: ["ZAG"], forca: 80 },
      { nome: "Harald Nickel", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1977 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Liverpool",
    jogadores: [
      { nome: "Ray Clemence", posicoes: ["GOL"], forca: 90 },
      { nome: "Phil Neal", posicoes: ["LD"], forca: 87 },
      { nome: "Joey Jones", posicoes: ["LE"], forca: 82 },
      { nome: "Emlyn Hughes", posicoes: ["ZAG"], forca: 89 },
      { nome: "Phil Thompson", posicoes: ["ZAG"], forca: 87 },
      { nome: "Terry McDermott", posicoes: ["MC"], forca: 87 },
      { nome: "Jimmy Case", posicoes: ["MC"], forca: 85 },
      { nome: "Ray Kennedy", posicoes: ["MC","ME"], forca: 87 },
      { nome: "Steve Heighway", posicoes: ["PE"], forca: 87 },
      { nome: "Kevin Keegan", posicoes: ["ATA","MEI"], forca: 93 },
      { nome: "John Toshack", posicoes: ["ATA"], forca: 86 },
      { nome: "David Fairclough", posicoes: ["ATA"], forca: 82 },
      { nome: "Ian Callaghan", posicoes: ["MC"], forca: 84 },
      { nome: "Tommy Smith", posicoes: ["ZAG"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Borussia Mönchengladbach",
    jogadores: [
      { nome: "Wolfgang Kleff", posicoes: ["GOL"], forca: 86 },
      { nome: "Berti Vogts", posicoes: ["LD"], forca: 91 },
      { nome: "Hans-Jürgen Wittkamp", posicoes: ["ZAG"], forca: 82 },
      { nome: "Wilfried Hannes", posicoes: ["ZAG"], forca: 81 },
      { nome: "Rainer Bonhof", posicoes: ["MC"], forca: 90 },
      { nome: "Herbert Wimmer", posicoes: ["MC"], forca: 87 },
      { nome: "Uli Stielike", posicoes: ["MC","ZAG"], forca: 89 },
      { nome: "Allan Simonsen", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Jupp Heynckes", posicoes: ["ATA"], forca: 91 },
      { nome: "Henning Jensen", posicoes: ["PE","ATA"], forca: 86 },
      { nome: "Ewald Lienen", posicoes: ["ME"], forca: 82 },
      { nome: "Carsten Nielsen", posicoes: ["ATA"], forca: 80 },
      { nome: "Winfried Schäfer", posicoes: ["ZAG"], forca: 80 },
      { nome: "Christian Kulik", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "Dynamo Kyiv",
    jogadores: [
      { nome: "Yevhen Rudakov", posicoes: ["GOL"], forca: 87 },
      { nome: "Volodymyr Troshkin", posicoes: ["LD","ZAG"], forca: 85 },
      { nome: "Mykhaylo Fomenko", posicoes: ["ZAG"], forca: 86 },
      { nome: "Viktor Matviyenko", posicoes: ["ZAG"], forca: 84 },
      { nome: "Stefan Reshko", posicoes: ["ZAG"], forca: 82 },
      { nome: "Anatoliy Konkov", posicoes: ["MC"], forca: 85 },
      { nome: "Viktor Kolotov", posicoes: ["MC"], forca: 86 },
      { nome: "Volodymyr Muntyan", posicoes: ["MEI"], forca: 87 },
      { nome: "Leonid Buryak", posicoes: ["MEI","ATA"], forca: 88 },
      { nome: "Oleg Blokhin", posicoes: ["ATA","PE"], forca: 93 },
      { nome: "Vladimir Onishchenko", posicoes: ["ATA"], forca: 86 },
      { nome: "Vladimir Veremeyev", posicoes: ["MC"], forca: 82 },
      { nome: "Oleksandr Boyko", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1977,
    clube: "FC Zürich",
    jogadores: [
      { nome: "Karl Grob", posicoes: ["GOL"], forca: 85 },
      { nome: "René Botteron", posicoes: ["LD"], forca: 82 },
      { nome: "Fritz Künzli", posicoes: ["ZAG"], forca: 81 },
      { nome: "Köbi Kuhn", posicoes: ["ZAG"], forca: 84 },
      { nome: "Umberto Barberis", posicoes: ["MC"], forca: 85 },
      { nome: "Ilija Katić", posicoes: ["MC"], forca: 81 },
      { nome: "Kurt Jara", posicoes: ["MEI"], forca: 84 },
      { nome: "Daniel Jeandupeux", posicoes: ["ME"], forca: 82 },
      { nome: "Peter Risi", posicoes: ["ATA"], forca: 82 },
      { nome: "Jürgen BÃ¶rner", posicoes: ["ATA"], forca: 78 },
      { nome: "Hanspeter Zwicker", posicoes: ["ATA"], forca: 78 },
      { nome: "Walter Müller", posicoes: ["MC"], forca: 77 },
      { nome: "Ruedi Elsener", posicoes: ["ZAG"], forca: 78 },
      { nome: "Ernst Hollenstein", posicoes: ["ME"], forca: 77 }
    ]
  },

  // ===== Edição 1976 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "Bayern München",
    jogadores: [
      { nome: "Sepp Maier", posicoes: ["GOL"], forca: 93 },
      { nome: "Franz Beckenbauer", posicoes: ["ZAG"], forca: 96 },
      { nome: "Georg Schwarzenbeck", posicoes: ["ZAG"], forca: 87 },
      { nome: "Björn Andersson", posicoes: ["LD"], forca: 81 },
      { nome: "Bernd Dürnberger", posicoes: ["LE","MC"], forca: 85 },
      { nome: "Rainer Zobel", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Franz Roth", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Jupp Kapellmann", posicoes: ["MC"], forca: 82 },
      { nome: "Uli Hoeneß", posicoes: ["ATA","ME"], forca: 89 },
      { nome: "Gerd Müller", posicoes: ["ATA"], forca: 94 },
      { nome: "Karl-Heinz Rummenigge", posicoes: ["PD","ATA"], forca: 84 },
      { nome: "Conny Torstensson", posicoes: ["ATA","ME"], forca: 82 },
      { nome: "Johnny Hansen", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Edgar Schneider", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "Saint-Étienne",
    jogadores: [
      { nome: "Ivan Ćurković", posicoes: ["GOL"], forca: 88 },
      { nome: "Gérard Janvion", posicoes: ["LD","ZAG"], forca: 87 },
      { nome: "Christian Lopez", posicoes: ["ZAG"], forca: 86 },
      { nome: "Oswaldo Piazza", posicoes: ["ZAG"], forca: 88 },
      { nome: "Gérard Farison", posicoes: ["LE"], forca: 82 },
      { nome: "Christian Synaeghel", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Dominique Bathenay", posicoes: ["MC"], forca: 86 },
      { nome: "Jean-Michel Larqué", posicoes: ["MC","MEI"], forca: 89 },
      { nome: "Dominique Rocheteau", posicoes: ["PE","ATA"], forca: 89 },
      { nome: "Hervé Revelli", posicoes: ["ATA"], forca: 86 },
      { nome: "Patrick Revelli", posicoes: ["ATA"], forca: 84 },
      { nome: "Jean-François Larios", posicoes: ["ME","ATA"], forca: 82 },
      { nome: "Jacques Santini", posicoes: ["MC"], forca: 81 },
      { nome: "Alain Merchadier", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Miguel Ángel", posicoes: ["GOL"], forca: 86 },
      { nome: "José Antonio Camacho", posicoes: ["LE"], forca: 87 },
      { nome: "Benito", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pirri", posicoes: ["ZAG","MC"], forca: 89 },
      { nome: "Vicente del Bosque", posicoes: ["MC"], forca: 85 },
      { nome: "Paul Breitner", posicoes: ["MC"], forca: 92 },
      { nome: "Günter Netzer", posicoes: ["MEI"], forca: 90 },
      { nome: "Santillana", posicoes: ["ATA"], forca: 89 },
      { nome: "Roberto Martínez", posicoes: ["PD","ATA"], forca: 84 },
      { nome: "Amancio", posicoes: ["MEI","PD"], forca: 85 },
      { nome: "Henning Jensen", posicoes: ["ME"], forca: 82 },
      { nome: "Rubiñán", posicoes: ["LD"], forca: 80 },
      { nome: "Aguilar", posicoes: ["ATA"], forca: 80 },
      { nome: "Velázquez", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1976,
    clube: "PSV Eindhoven",
    jogadores: [
      { nome: "Jan van Beveren", posicoes: ["GOL"], forca: 88 },
      { nome: "Huub Stevens", posicoes: ["ZAG"], forca: 84 },
      { nome: "Adrie van Kraay", posicoes: ["ZAG"], forca: 84 },
      { nome: "Harry Lubse", posicoes: ["LD"], forca: 79 },
      { nome: "Willy van de Kerkhof", posicoes: ["MC"], forca: 87 },
      { nome: "René van de Kerkhof", posicoes: ["MD","ATA"], forca: 87 },
      { nome: "Kees Krijgh", posicoes: ["MC"], forca: 81 },
      { nome: "Ralf Edström", posicoes: ["MEI"], forca: 86 },
      { nome: "Gerrie Deijkers", posicoes: ["ATA"], forca: 82 },
      { nome: "Nick Deacy", posicoes: ["ATA"], forca: 80 },
      { nome: "Jan Poortvliet", posicoes: ["ME"], forca: 82 },
      { nome: "Klaus Wunder", posicoes: ["ZAG"], forca: 79 },
      { nome: "Frans van der Kuylen", posicoes: ["VOL"], forca: 80 },
      { nome: "Willy van der Kuijlen", posicoes: ["ATA"], forca: 86 }
    ]
  },

  // ===== Edição 1975 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Bayern München",
    jogadores: [
      { nome: "Sepp Maier", posicoes: ["GOL"], forca: 93 },
      { nome: "Franz Beckenbauer", posicoes: ["ZAG"], forca: 96 },
      { nome: "Georg Schwarzenbeck", posicoes: ["ZAG"], forca: 87 },
      { nome: "Björn Andersson", posicoes: ["LD"], forca: 81 },
      { nome: "Bernd Dürnberger", posicoes: ["LE","ME"], forca: 84 },
      { nome: "Rainer Zobel", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Jupp Kapellmann", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Franz Roth", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Conny Torstensson", posicoes: ["ME","ATA"], forca: 85 },
      { nome: "Uli Hoeneß", posicoes: ["ATA","MEI"], forca: 90 },
      { nome: "Gerd Müller", posicoes: ["ATA"], forca: 95 },
      { nome: "Karl-Heinz Rummenigge", posicoes: ["ATA","PD"], forca: 80 },
      { nome: "Johnny Hansen", posicoes: ["ZAG","LD"], forca: 79 },
      { nome: "Edgar Schneider", posicoes: ["ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Leeds United",
    jogadores: [
      { nome: "David Harvey", posicoes: ["GOL"], forca: 85 },
      { nome: "Paul Reaney", posicoes: ["LD"], forca: 84 },
      { nome: "Trevor Cherry", posicoes: ["LE","ZAG"], forca: 84 },
      { nome: "Norman Hunter", posicoes: ["ZAG"], forca: 89 },
      { nome: "Gordon McQueen", posicoes: ["ZAG"], forca: 86 },
      { nome: "Paul Madeley", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Billy Bremner", posicoes: ["MC"], forca: 91 },
      { nome: "Johnny Giles", posicoes: ["MC"], forca: 89 },
      { nome: "Peter Lorimer", posicoes: ["MD","MEI"], forca: 89 },
      { nome: "Eddie Gray", posicoes: ["ME","PE"], forca: 88 },
      { nome: "Allan Clarke", posicoes: ["ATA"], forca: 87 },
      { nome: "Joe Jordan", posicoes: ["ATA"], forca: 87 },
      { nome: "Terry Yorath", posicoes: ["MC"], forca: 82 },
      { nome: "Duncan McKenzie", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Saint-Étienne",
    jogadores: [
      { nome: "Ivan Ćurković", posicoes: ["GOL"], forca: 87 },
      { nome: "Gérard Janvion", posicoes: ["LD","ZAG"], forca: 86 },
      { nome: "Christian Lopez", posicoes: ["ZAG"], forca: 85 },
      { nome: "Oswaldo Piazza", posicoes: ["ZAG"], forca: 87 },
      { nome: "Gérard Farison", posicoes: ["LE"], forca: 81 },
      { nome: "Christian Synaeghel", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Dominique Bathenay", posicoes: ["MC"], forca: 85 },
      { nome: "Jean-Michel Larqué", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Dominique Rocheteau", posicoes: ["PE","ATA"], forca: 88 },
      { nome: "Hervé Revelli", posicoes: ["ATA"], forca: 86 },
      { nome: "Patrick Revelli", posicoes: ["ATA"], forca: 84 },
      { nome: "Jacques Santini", posicoes: ["MC"], forca: 81 },
      { nome: "Jean-François Larios", posicoes: ["PE","ME"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1975,
    clube: "Barcelona",
    jogadores: [
      { nome: "Pere Valentí Mora", posicoes: ["GOL"], forca: 84 },
      { nome: "Joaquim Rifé", posicoes: ["LD"], forca: 82 },
      { nome: "Migueli", posicoes: ["ZAG"], forca: 87 },
      { nome: "Antoni Torres", posicoes: ["ZAG"], forca: 82 },
      { nome: "Antonio de la Cruz", posicoes: ["LE"], forca: 84 },
      { nome: "Johan Neeskens", posicoes: ["MC"], forca: 92 },
      { nome: "Juan Manuel Asensi", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 94 },
      { nome: "Carles Rexach", posicoes: ["PD","MEI"], forca: 87 },
      { nome: "Marcial Pina", posicoes: ["MEI"], forca: 85 },
      { nome: "Manuel Clares", posicoes: ["ATA"], forca: 84 },
      { nome: "Juan Carlos Pérez", posicoes: ["ATA"], forca: 80 },
      { nome: "Costas", posicoes: ["VOL"], forca: 79 },
      { nome: "Sotil", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1974 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Bayern München",
    jogadores: [
      { nome: "Sepp Maier", posicoes: ["GOL"], forca: 93 },
      { nome: "Johnny Hansen", posicoes: ["LD"], forca: 82 },
      { nome: "Franz Beckenbauer", posicoes: ["ZAG"], forca: 96 },
      { nome: "Georg Schwarzenbeck", posicoes: ["ZAG"], forca: 87 },
      { nome: "Paul Breitner", posicoes: ["LE","MC"], forca: 92 },
      { nome: "Rainer Zobel", posicoes: ["MC"], forca: 82 },
      { nome: "Franz Roth", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Jupp Kapellmann", posicoes: ["MC"], forca: 84 },
      { nome: "Uli Hoeneß", posicoes: ["ATA","ME"], forca: 91 },
      { nome: "Gerd Müller", posicoes: ["ATA"], forca: 96 },
      { nome: "Conny Torstensson", posicoes: ["ME","ATA"], forca: 85 },
      { nome: "Björn Andersson", posicoes: ["LD"], forca: 81 },
      { nome: "Bernd Dürnberger", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Karl-Heinz Rummenigge", posicoes: ["ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Miguel Reina", posicoes: ["GOL"], forca: 87 },
      { nome: "José Luis Capón", posicoes: ["LD"], forca: 85 },
      { nome: "Rubén Ayala", posicoes: ["ZAG"], forca: 87 },
      { nome: "Heredia", posicoes: ["ZAG"], forca: 86 },
      { nome: "Eusebio", posicoes: ["LE"], forca: 84 },
      { nome: "Adelardo Rodríguez", posicoes: ["MC"], forca: 89 },
      { nome: "Irureta", posicoes: ["MC"], forca: 87 },
      { nome: "Luis Aragonés", posicoes: ["MEI"], forca: 91 },
      { nome: "Ufarte", posicoes: ["PD"], forca: 86 },
      { nome: "José Eulogio Gárate", posicoes: ["ATA"], forca: 89 },
      { nome: "Becerra", posicoes: ["ATA"], forca: 84 },
      { nome: "Alberto", posicoes: ["PE"], forca: 82 },
      { nome: "Salcedo", posicoes: ["MC"], forca: 81 },
      { nome: "Melo", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Újpest",
    jogadores: [
      { nome: "Antal Szentmihályi", posicoes: ["GOL"], forca: 86 },
      { nome: "László Noskó", posicoes: ["LD"], forca: 85 },
      { nome: "József Horváth", posicoes: ["ZAG"], forca: 84 },
      { nome: "Sándor Tóth", posicoes: ["LE"], forca: 82 },
      { nome: "László Fazekas", posicoes: ["MC"], forca: 89 },
      { nome: "János Göröcs", posicoes: ["MC"], forca: 86 },
      { nome: "István Nagy", posicoes: ["MEI"], forca: 85 },
      { nome: "Ferenc Bene", posicoes: ["PD"], forca: 91 },
      { nome: "Antal Dunai", posicoes: ["ATA"], forca: 90 },
      { nome: "János Fekete", posicoes: ["ATA"], forca: 84 },
      { nome: "László Zámbó", posicoes: ["PE"], forca: 85 },
      { nome: "Lajos Szűcs", posicoes: ["MC"], forca: 82 },
      { nome: "András Tóth", posicoes: ["ZAG"], forca: 80 },
      { nome: "Károly Horváth", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1974,
    clube: "Celtic",
    jogadores: [
      { nome: "Evan Williams", posicoes: ["GOL"], forca: 85 },
      { nome: "Danny McGrain", posicoes: ["LD"], forca: 88 },
      { nome: "Jim Brogan", posicoes: ["LE"], forca: 84 },
      { nome: "Billy McNeill", posicoes: ["ZAG"], forca: 88 },
      { nome: "George Connelly", posicoes: ["ZAG"], forca: 87 },
      { nome: "David Hay", posicoes: ["MC"], forca: 87 },
      { nome: "Bobby Murdoch", posicoes: ["MC"], forca: 86 },
      { nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 91 },
      { nome: "Bobby Lennox", posicoes: ["PE"], forca: 88 },
      { nome: "Kenny Dalglish", posicoes: ["ATA"], forca: 89 },
      { nome: "Dixie Deans", posicoes: ["ATA"], forca: 85 },
      { nome: "Harry Hood", posicoes: ["ATA"], forca: 84 },
      { nome: "Lou Macari", posicoes: ["ATA"], forca: 85 },
      { nome: "Pat McCluskey", posicoes: ["MC"], forca: 81 }
    ]
  },

  // ===== Edição 1973 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Ajax",
    jogadores: [
      { nome: "Heinz Stuy", posicoes: ["GOL"], forca: 87 },
      { nome: "Wim Suurbier", posicoes: ["LD"], forca: 88 },
      { nome: "Horst Blankenburg", posicoes: ["ZAG"], forca: 88 },
      { nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ruud Krol", posicoes: ["LE"], forca: 90 },
      { nome: "Johan Neeskens", posicoes: ["MC"], forca: 92 },
      { nome: "Arie Haan", posicoes: ["MC"], forca: 88 },
      { nome: "Gerrie Mühren", posicoes: ["MC"], forca: 88 },
      { nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 98 },
      { nome: "Piet Keizer", posicoes: ["PE"], forca: 92 },
      { nome: "Johnny Rep", posicoes: ["ATA","PD"], forca: 88 },
      { nome: "Sjaak Swart", posicoes: ["PD"], forca: 85 },
      { nome: "Arnold Mühren", posicoes: ["MC"], forca: 82 },
      { nome: "Dick van Dijk", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Juventus",
    jogadores: [
      { nome: "Dino Zoff", posicoes: ["GOL"], forca: 92 },
      { nome: "Luciano Spinosi", posicoes: ["LD"], forca: 86 },
      { nome: "Sandro Salvadore", posicoes: ["ZAG"], forca: 88 },
      { nome: "Francesco Morini", posicoes: ["ZAG"], forca: 86 },
      { nome: "Giuseppe Furino", posicoes: ["LE"], forca: 86 },
      { nome: "Fabio Capello", posicoes: ["MC"], forca: 90 },
      { nome: "Antonello Cuccureddu", posicoes: ["MC"], forca: 87 },
      { nome: "Franco Causio", posicoes: ["ME"], forca: 89 },
      { nome: "Roberto Bettega", posicoes: ["ATA"], forca: 91 },
      { nome: "José Altafini", posicoes: ["ATA"], forca: 88 },
      { nome: "Pietro Anastasi", posicoes: ["ATA"], forca: 88 },
      { nome: "Helmut Haller", posicoes: ["MC"], forca: 86 },
      { nome: "Roberto Tancredi", posicoes: ["ZAG"], forca: 80 },
      { nome: "Damiani", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Mariano García Remón", posicoes: ["GOL"], forca: 86 },
      { nome: "Rubiñán", posicoes: ["LD"], forca: 82 },
      { nome: "Benito", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pirri", posicoes: ["ZAG","MC"], forca: 90 },
      { nome: "José Antonio Camacho", posicoes: ["LE"], forca: 86 },
      { nome: "Zoco", posicoes: ["MC"], forca: 86 },
      { nome: "Velázquez", posicoes: ["MC"], forca: 87 },
      { nome: "Amancio", posicoes: ["PD","MEI"], forca: 88 },
      { nome: "Santillana", posicoes: ["ATA"], forca: 89 },
      { nome: "Aguilar", posicoes: ["ATA"], forca: 85 },
      { nome: "Grosso", posicoes: ["ATA"], forca: 84 },
      { nome: "Del Bosque", posicoes: ["MC"], forca: 82 },
      { nome: "Clifford Luyk", posicoes: ["PE"], forca: 79 },
      { nome: "Planelles", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1973,
    clube: "Derby County",
    jogadores: [
      { nome: "Colin Boulton", posicoes: ["GOL"], forca: 85 },
      { nome: "Ron Webster", posicoes: ["LD"], forca: 84 },
      { nome: "Roy McFarland", posicoes: ["ZAG"], forca: 89 },
      { nome: "Colin Todd", posicoes: ["ZAG"], forca: 89 },
      { nome: "David Nish", posicoes: ["LE"], forca: 85 },
      { nome: "Archie Gemmill", posicoes: ["MC"], forca: 89 },
      { nome: "John McGovern", posicoes: ["MC"], forca: 87 },
      { nome: "Alan Hinton", posicoes: ["ME"], forca: 86 },
      { nome: "Kevin Hector", posicoes: ["ATA"], forca: 89 },
      { nome: "John O'Hare", posicoes: ["ATA"], forca: 87 },
      { nome: "Roger Davies", posicoes: ["ATA"], forca: 85 },
      { nome: "Alan Durban", posicoes: ["MC"], forca: 85 },
      { nome: "Steve Powell", posicoes: ["ZAG"], forca: 80 },
      { nome: "Francis Lee", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1972 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Ajax",
    jogadores: [
      { nome: "Heinz Stuy", posicoes: ["GOL"], forca: 87 },
      { nome: "Wim Suurbier", posicoes: ["LD"], forca: 88 },
      { nome: "Horst Blankenburg", posicoes: ["ZAG"], forca: 87 },
      { nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ruud Krol", posicoes: ["LE"], forca: 89 },
      { nome: "Johan Neeskens", posicoes: ["MC"], forca: 91 },
      { nome: "Arie Haan", posicoes: ["MC"], forca: 87 },
      { nome: "Gerrie Mühren", posicoes: ["MC"], forca: 88 },
      { nome: "Sjaak Swart", posicoes: ["PD"], forca: 87 },
      { nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 98 },
      { nome: "Piet Keizer", posicoes: ["PE"], forca: 92 },
      { nome: "Dick van Dijk", posicoes: ["ATA"], forca: 86 },
      { nome: "Nico Rijnders", posicoes: ["MC"], forca: 84 },
      { nome: "Johnny Rep", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Ivano Bordon", posicoes: ["GOL"], forca: 87 },
      { nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 88 },
      { nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 91 },
      { nome: "Giuseppe Bellugi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Giancarlo Bedin", posicoes: ["ZAG"], forca: 84 },
      { nome: "Gabriele Oriali", posicoes: ["MC"], forca: 86 },
      { nome: "Luis Suárez", posicoes: ["MEI"], forca: 89 },
      { nome: "Sandro Mazzola", posicoes: ["ATA","MEI"], forca: 91 },
      { nome: "Roberto Boninsegna", posicoes: ["ATA"], forca: 92 },
      { nome: "Mario Corso", posicoes: ["PE"], forca: 88 },
      { nome: "Jair da Costa", posicoes: ["PD"], forca: 85 },
      { nome: "Renato Cappellini", posicoes: ["ATA"], forca: 82 },
      { nome: "Mario Giubertoni", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Benfica",
    jogadores: [
      { nome: "José Henrique", posicoes: ["GOL"], forca: 86 },
      { nome: "Humberto Coelho", posicoes: ["ZAG"], forca: 88 },
      { nome: "Adolfo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Artur Correia", posicoes: ["LE"], forca: 84 },
      { nome: "Toni", posicoes: ["MC"], forca: 87 },
      { nome: "Jaime Graça", posicoes: ["MC"], forca: 85 },
      { nome: "Mário Coluna", posicoes: ["MEI"], forca: 87 },
      { nome: "José Augusto", posicoes: ["PD"], forca: 85 },
      { nome: "António Simões", posicoes: ["PE"], forca: 89 },
      { nome: "Eusébio", posicoes: ["ATA"], forca: 93 },
      { nome: "Nené", posicoes: ["ATA"], forca: 86 },
      { nome: "Artur Jorge", posicoes: ["ATA"], forca: 85 },
      { nome: "Vítor Martins", posicoes: ["MC"], forca: 82 },
      { nome: "José Torres", posicoes: ["ATA"], forca: 85 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1972,
    clube: "Celtic",
    jogadores: [
      { nome: "Evan Williams", posicoes: ["GOL"], forca: 86 },
      { nome: "Danny McGrain", posicoes: ["LD"], forca: 87 },
      { nome: "Tommy Gemmell", posicoes: ["LE"], forca: 87 },
      { nome: "Billy McNeill", posicoes: ["ZAG"], forca: 89 },
      { nome: "George Connelly", posicoes: ["ZAG"], forca: 87 },
      { nome: "Bobby Murdoch", posicoes: ["MC"], forca: 88 },
      { nome: "David Hay", posicoes: ["MC"], forca: 87 },
      { nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 92 },
      { nome: "Bobby Lennox", posicoes: ["PE"], forca: 88 },
      { nome: "Kenny Dalglish", posicoes: ["ATA"], forca: 87 },
      { nome: "Lou Macari", posicoes: ["ATA"], forca: 86 },
      { nome: "Dixie Deans", posicoes: ["ATA"], forca: 85 },
      { nome: "Harry Hood", posicoes: ["ATA"], forca: 84 },
      { nome: "Bertie Auld", posicoes: ["MC"], forca: 85 }
    ]
  },

  // ===== Edição 1971 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Ajax",
    jogadores: [
      { nome: "Heinz Stuy", posicoes: ["GOL"], forca: 87 },
      { nome: "Wim Suurbier", posicoes: ["LD"], forca: 87 },
      { nome: "Velibor Vasović", posicoes: ["ZAG"], forca: 90 },
      { nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ruud Krol", posicoes: ["LE"], forca: 88 },
      { nome: "Johan Neeskens", posicoes: ["MC"], forca: 89 },
      { nome: "Arie Haan", posicoes: ["MC"], forca: 86 },
      { nome: "Gerrie Mühren", posicoes: ["MC"], forca: 87 },
      { nome: "Sjaak Swart", posicoes: ["PD"], forca: 87 },
      { nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Piet Keizer", posicoes: ["PE"], forca: 91 },
      { nome: "Dick van Dijk", posicoes: ["ATA"], forca: 87 },
      { nome: "Nico Rijnders", posicoes: ["MC"], forca: 84 },
      { nome: "Horst Blankenburg", posicoes: ["ATA"], forca: 82 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Panathinaikos",
    jogadores: [
      { nome: "Takis Oikonomopoulos", posicoes: ["GOL"], forca: 87 },
      { nome: "Anthimos Kapsis", posicoes: ["ZAG"], forca: 86 },
      { nome: "Aristidis Kamaras", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ilias Sourpis", posicoes: ["LE"], forca: 82 },
      { nome: "Kostas Eleftherakis", posicoes: ["MC"], forca: 86 },
      { nome: "Mimis Domazos", posicoes: ["MC"], forca: 91 },
      { nome: "Filakouris", posicoes: ["ME"], forca: 82 },
      { nome: "Antonis Antoniadis", posicoes: ["ATA"], forca: 91 },
      { nome: "Aristidis Grammos", posicoes: ["ATA"], forca: 84 },
      { nome: "Dimitris Tomaras", posicoes: ["ATA"], forca: 82 },
      { nome: "Charis Grammos", posicoes: ["PE"], forca: 80 },
      { nome: "Totis Filakouris", posicoes: ["MC"], forca: 82 },
      { nome: "Vasilis Konstantinou", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Miguel Reina", posicoes: ["GOL"], forca: 87 },
      { nome: "Feliciano Rivilla", posicoes: ["LD"], forca: 85 },
      { nome: "Isacio Calleja", posicoes: ["LE"], forca: 85 },
      { nome: "Jorge Griffa", posicoes: ["ZAG"], forca: 87 },
      { nome: "Adelardo Rodríguez", posicoes: ["MC"], forca: 89 },
      { nome: "Luis Aragonés", posicoes: ["MC"], forca: 90 },
      { nome: "José Luis Capón", posicoes: ["MC"], forca: 82 },
      { nome: "José Eulogio Gárate", posicoes: ["ATA"], forca: 90 },
      { nome: "Irureta", posicoes: ["ATA"], forca: 86 },
      { nome: "Ufarte", posicoes: ["PD"], forca: 87 },
      { nome: "Alberto", posicoes: ["PE"], forca: 82 },
      { nome: "Ovejero", posicoes: ["ATA"], forca: 80 },
      { nome: "Melo", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1971,
    clube: "Red Star Belgrade",
    jogadores: [
      { nome: "Ratomir Dujković", posicoes: ["GOL"], forca: 86 },
      { nome: "Vladimir Durković", posicoes: ["LD"], forca: 85 },
      { nome: "Dragan Holcer", posicoes: ["ZAG"], forca: 82 },
      { nome: "Miroslav Pavlović", posicoes: ["LE"], forca: 82 },
      { nome: "Jovan Aćimović", posicoes: ["MC"], forca: 88 },
      { nome: "Branko Stanković", posicoes: ["MC"], forca: 85 },
      { nome: "Dragan Džajić", posicoes: ["MEI"], forca: 93 },
      { nome: "Stanislav Karasi", posicoes: ["PD"], forca: 87 },
      { nome: "Vladimir Petrović", posicoes: ["ATA"], forca: 82 },
      { nome: "Stevan Ostojić", posicoes: ["ATA"], forca: 85 },
      { nome: "Milorad Keri", posicoes: ["PE"], forca: 81 },
      { nome: "Kiril Dojčinovski", posicoes: ["MC"], forca: 80 }
    ]
  },

  // ===== Edição 1970 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Feyenoord",
    jogadores: [
      { nome: "Eddy Pieters Graafland", posicoes: ["GOL"], forca: 88 },
      { nome: "Theo van Duivenbode", posicoes: ["LD"], forca: 85 },
      { nome: "Rinus Israël", posicoes: ["ZAG"], forca: 91 },
      { nome: "Theo Laseroms", posicoes: ["ZAG"], forca: 87 },
      { nome: "Cor Veldhoen", posicoes: ["LE"], forca: 85 },
      { nome: "Franz Hasil", posicoes: ["MC"], forca: 87 },
      { nome: "Wim Jansen", posicoes: ["MC"], forca: 89 },
      { nome: "Willem van Hanegem", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Coen Moulijn", posicoes: ["PE"], forca: 90 },
      { nome: "Ove Kindvall", posicoes: ["ATA"], forca: 93 },
      { nome: "Henk Wery", posicoes: ["ATA"], forca: 86 },
      { nome: "Joop van Daele", posicoes: ["ATA"], forca: 82 },
      { nome: "Guus Haak", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Celtic",
    jogadores: [
      { nome: "Evan Williams", posicoes: ["GOL"], forca: 86 },
      { nome: "Jim Craig", posicoes: ["LD"], forca: 84 },
      { nome: "Tommy Gemmell", posicoes: ["LE"], forca: 89 },
      { nome: "Billy McNeill", posicoes: ["ZAG"], forca: 90 },
      { nome: "John Clark", posicoes: ["ZAG"], forca: 85 },
      { nome: "Bertie Auld", posicoes: ["MC"], forca: 88 },
      { nome: "Bobby Murdoch", posicoes: ["MC"], forca: 90 },
      { nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 93 },
      { nome: "Bobby Lennox", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "Stevie Chalmers", posicoes: ["ATA"], forca: 87 },
      { nome: "Willie Wallace", posicoes: ["ATA"], forca: 87 },
      { nome: "John Hughes", posicoes: ["ATA"], forca: 85 },
      { nome: "George Connelly", posicoes: ["MC"], forca: 85 },
      { nome: "Kenny Dalglish", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Leeds United",
    jogadores: [
      { nome: "Gary Sprake", posicoes: ["GOL"], forca: 87 },
      { nome: "Paul Reaney", posicoes: ["LD"], forca: 86 },
      { nome: "Terry Cooper", posicoes: ["LE"], forca: 87 },
      { nome: "Jack Charlton", posicoes: ["ZAG"], forca: 90 },
      { nome: "Norman Hunter", posicoes: ["ZAG"], forca: 90 },
      { nome: "Paul Madeley", posicoes: ["ZAG","VOL"], forca: 88 },
      { nome: "Billy Bremner", posicoes: ["MC"], forca: 93 },
      { nome: "Johnny Giles", posicoes: ["MC"], forca: 91 },
      { nome: "Peter Lorimer", posicoes: ["MD","MEI"], forca: 89 },
      { nome: "Eddie Gray", posicoes: ["ME"], forca: 89 },
      { nome: "Allan Clarke", posicoes: ["ATA"], forca: 88 },
      { nome: "Mick Jones", posicoes: ["ATA"], forca: 87 },
      { nome: "Terry Yorath", posicoes: ["MC"], forca: 82 },
      { nome: "Rod Belfitt", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1970,
    clube: "Legia Warsaw",
    jogadores: [
      { nome: "Władysław Grotyński", posicoes: ["GOL"], forca: 84 },
      { nome: "Bernard Blaut", posicoes: ["ZAG"], forca: 86 },
      { nome: "Zygmunt Anczok", posicoes: ["ZAG"], forca: 85 },
      { nome: "Robert Gadocha", posicoes: ["LD"], forca: 87 },
      { nome: "Kazimierz Deyna", posicoes: ["MC"], forca: 92 },
      { nome: "Lucjan Brychczy", posicoes: ["MC"], forca: 87 },
      { nome: "Jan Pieszko", posicoes: ["MEI"], forca: 85 },
      { nome: "Władysław Stachurski", posicoes: ["ATA"], forca: 84 },
      { nome: "Janusz Żmijewski", posicoes: ["ATA"], forca: 82 },
      { nome: "Tadeusz Nowak", posicoes: ["ZAG"], forca: 80 },
      { nome: "Stefan Białas", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 1969 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Milan",
    jogadores: [
      { nome: "Fabio Cudicini", posicoes: ["GOL"], forca: 89 },
      { nome: "Kurt Hamrin", posicoes: ["LD"], forca: 88 },
      { nome: "Roberto Rosato", posicoes: ["ZAG"], forca: 89 },
      { nome: "Saul Malatrasi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Karl-Heinz Schnellinger", posicoes: ["LE"], forca: 89 },
      { nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 88 },
      { nome: "Giovanni Lodetti", posicoes: ["MC"], forca: 85 },
      { nome: "Gianni Rivera", posicoes: ["MEI"], forca: 94 },
      { nome: "Pierino Prati", posicoes: ["PD"], forca: 91 },
      { nome: "Angelo Sormani", posicoes: ["ATA"], forca: 87 },
      { nome: "Bruno Mora", posicoes: ["PE"], forca: 85 },
      { nome: "Angelo Anquilletti", posicoes: ["LD"], forca: 86 },
      { nome: "Nestor Combin", posicoes: ["ATA"], forca: 85 },
      { nome: "Romeo Benetti", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Ajax",
    jogadores: [
      { nome: "Gert Bals", posicoes: ["GOL"], forca: 85 },
      { nome: "Wim Suurbier", posicoes: ["LD"], forca: 86 },
      { nome: "Velibor Vasović", posicoes: ["ZAG"], forca: 89 },
      { nome: "Barry Hulshoff", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ruud Krol", posicoes: ["LE"], forca: 85 },
      { nome: "Sjaak Swart", posicoes: ["MC"], forca: 87 },
      { nome: "Henk Groot", posicoes: ["MC"], forca: 86 },
      { nome: "Johan Cruyff", posicoes: ["MEI","ATA"], forca: 94 },
      { nome: "Piet Keizer", posicoes: ["PE"], forca: 91 },
      { nome: "Klaas Nuninga", posicoes: ["ATA"], forca: 87 },
      { nome: "Danielsson", posicoes: ["ATA"], forca: 85 },
      { nome: "Bennie Muller", posicoes: ["MC"], forca: 84 },
      { nome: "Nico Rijnders", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dick van Dijk", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Manchester United",
    jogadores: [
      { nome: "Alex Stepney", posicoes: ["GOL"], forca: 87 },
      { nome: "Shay Brennan", posicoes: ["LD"], forca: 84 },
      { nome: "Tony Dunne", posicoes: ["LE"], forca: 85 },
      { nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 85 },
      { nome: "David Sadler", posicoes: ["MC","ZAG"], forca: 85 },
      { nome: "Nobby Stiles", posicoes: ["VOL"], forca: 88 },
      { nome: "Pat Crerand", posicoes: ["MC"], forca: 87 },
      { nome: "Bobby Charlton", posicoes: ["MEI"], forca: 93 },
      { nome: "George Best", posicoes: ["PD","ATA"], forca: 95 },
      { nome: "Denis Law", posicoes: ["ATA"], forca: 92 },
      { nome: "John Aston Jr.", posicoes: ["PE"], forca: 86 },
      { nome: "Brian Kidd", posicoes: ["ATA"], forca: 87 },
      { nome: "Willie Morgan", posicoes: ["MC"], forca: 85 },
      { nome: "Steve James", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1969,
    clube: "Spartak Trnava",
    jogadores: [
      { nome: "František Kozinka", posicoes: ["GOL"], forca: 84 },
      { nome: "Karol Dobiaš", posicoes: ["LD"], forca: 88 },
      { nome: "Ján Zlocha", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dušan Kabát", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ladislav Kuna", posicoes: ["MC"], forca: 89 },
      { nome: "Anton Malatinský", posicoes: ["MC"], forca: 85 },
      { nome: "Jozef Adamec", posicoes: ["MEI"], forca: 90 },
      { nome: "Vojtech Varadin", posicoes: ["ATA"], forca: 85 },
      { nome: "Vladimír Hagara", posicoes: ["ATA"], forca: 82 },
      { nome: "Vojtech Masný", posicoes: ["PE"], forca: 82 },
      { nome: "Štefan Slezák", posicoes: ["MC"], forca: 80 },
      { nome: "Július Geryk", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 1968 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Manchester United",
    jogadores: [
      { nome: "Alex Stepney", posicoes: ["GOL"], forca: 87 },
      { nome: "Shay Brennan", posicoes: ["LD"], forca: 85 },
      { nome: "Tony Dunne", posicoes: ["LE"], forca: 86 },
      { nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 87 },
      { nome: "David Sadler", posicoes: ["MC","ZAG"], forca: 86 },
      { nome: "Nobby Stiles", posicoes: ["VOL"], forca: 89 },
      { nome: "Pat Crerand", posicoes: ["MC"], forca: 88 },
      { nome: "Bobby Charlton", posicoes: ["MEI"], forca: 95 },
      { nome: "George Best", posicoes: ["PD","ATA"], forca: 96 },
      { nome: "Brian Kidd", posicoes: ["ATA"], forca: 88 },
      { nome: "John Aston Jr.", posicoes: ["PE"], forca: 87 },
      { nome: "Denis Law", posicoes: ["ATA"], forca: 92 },
      { nome: "Francis Burns", posicoes: ["LE"], forca: 82 },
      { nome: "Jimmy Rimmer", posicoes: ["GOL"], forca: 73 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Benfica",
    jogadores: [
      { nome: "José Henrique", posicoes: ["GOL"], forca: 86 },
      { nome: "Adolfo", posicoes: ["LD"], forca: 84 },
      { nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jacinto Santos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Cruz", posicoes: ["LE"], forca: 84 },
      { nome: "Mário Coluna", posicoes: ["MC"], forca: 90 },
      { nome: "Jaime Graça", posicoes: ["MC"], forca: 86 },
      { nome: "José Augusto", posicoes: ["PD"], forca: 87 },
      { nome: "António Simões", posicoes: ["PE"], forca: 90 },
      { nome: "Eusébio", posicoes: ["ATA"], forca: 97 },
      { nome: "José Torres", posicoes: ["ATA"], forca: 89 },
      { nome: "Nené", posicoes: ["ATA"], forca: 82 },
      { nome: "Cavém", posicoes: ["VOL"], forca: 82 },
      { nome: "Toni", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Junquera", posicoes: ["GOL"], forca: 85 },
      { nome: "Zunzunegui", posicoes: ["LD"], forca: 81 },
      { nome: "Manuel Sanchís", posicoes: ["ZAG"], forca: 87 },
      { nome: "Pedro de Felipe", posicoes: ["ZAG"], forca: 86 },
      { nome: "Pirri", posicoes: ["MC"], forca: 90 },
      { nome: "Zoco", posicoes: ["MC"], forca: 87 },
      { nome: "Velázquez", posicoes: ["MEI"], forca: 88 },
      { nome: "Amancio", posicoes: ["PD","MEI"], forca: 90 },
      { nome: "Grosso", posicoes: ["ATA"], forca: 86 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 89 },
      { nome: "Serena", posicoes: ["ATA"], forca: 84 },
      { nome: "Félix Ruiz", posicoes: ["ATA"], forca: 82 },
      { nome: "Calpe", posicoes: ["ZAG"], forca: 80 },
      { nome: "Aguilar", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1968,
    clube: "Juventus",
    jogadores: [
      { nome: "Roberto Anzolin", posicoes: ["GOL"], forca: 86 },
      { nome: "Sandro Salvadore", posicoes: ["ZAG"], forca: 89 },
      { nome: "Ernesto Càstano", posicoes: ["ZAG"], forca: 87 },
      { nome: "Giancarlo Bercellino", posicoes: ["LD"], forca: 84 },
      { nome: "Luis del Sol", posicoes: ["MC"], forca: 88 },
      { nome: "Giancarlo De Sisti", posicoes: ["MC"], forca: 87 },
      { nome: "Helmut Haller", posicoes: ["MEI"], forca: 90 },
      { nome: "Menichelli", posicoes: ["PE"], forca: 87 },
      { nome: "Gianfranco Zigoni", posicoes: ["ATA"], forca: 86 },
      { nome: "De Paoli", posicoes: ["ATA"], forca: 85 },
      { nome: "Cinesinho", posicoes: ["MC"], forca: 85 },
      { nome: "Giuseppe Furino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Pietro Anastasi", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 1967 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "Celtic",
    jogadores: [
      { nome: "Ronnie Simpson", posicoes: ["GOL"], forca: 89 },
      { nome: "Jim Craig", posicoes: ["LD"], forca: 85 },
      { nome: "Tommy Gemmell", posicoes: ["LE"], forca: 90 },
      { nome: "Billy McNeill", posicoes: ["ZAG"], forca: 91 },
      { nome: "John Clark", posicoes: ["ZAG"], forca: 86 },
      { nome: "Bertie Auld", posicoes: ["MC"], forca: 89 },
      { nome: "Bobby Murdoch", posicoes: ["MC"], forca: 91 },
      { nome: "Jimmy Johnstone", posicoes: ["PD"], forca: 93 },
      { nome: "Bobby Lennox", posicoes: ["PE","ATA"], forca: 90 },
      { nome: "Stevie Chalmers", posicoes: ["ATA"], forca: 88 },
      { nome: "Willie Wallace", posicoes: ["ATA"], forca: 88 },
      { nome: "John Hughes", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Charlie Gallagher", posicoes: ["MC"], forca: 82 },
      { nome: "John Cushley", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 88 },
      { nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 89 },
      { nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 92 },
      { nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 86 },
      { nome: "Armando Picchi", posicoes: ["ZAG"], forca: 89 },
      { nome: "Luis Suárez", posicoes: ["MC"], forca: 91 },
      { nome: "Gianfranco Bedin", posicoes: ["MC"], forca: 85 },
      { nome: "Mario Corso", posicoes: ["PE"], forca: 89 },
      { nome: "Jair da Costa", posicoes: ["PD"], forca: 87 },
      { nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 92 },
      { nome: "Renato Cappellini", posicoes: ["ATA"], forca: 84 },
      { nome: "Domenghini", posicoes: ["ATA"], forca: 84 },
      { nome: "Carlo Tagnin", posicoes: ["VOL"], forca: 81 },
      { nome: "Malatrasi", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "Dukla Prague",
    jogadores: [
      { nome: "Ivo Viktor", posicoes: ["GOL"], forca: 88 },
      { nome: "Ladislav Novák", posicoes: ["LD"], forca: 88 },
      { nome: "Svatopluk Pluskal", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ján Geleta", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jozef Masopust", posicoes: ["MC"], forca: 92 },
      { nome: "Josef Vacenovský", posicoes: ["MC"], forca: 85 },
      { nome: "Josef Jelínek", posicoes: ["MEI"], forca: 86 },
      { nome: "Ivan Mráz", posicoes: ["ATA"], forca: 85 },
      { nome: "František Šafránek", posicoes: ["ATA"], forca: 82 },
      { nome: "František Štambacher", posicoes: ["PE"], forca: 81 },
      { nome: "Jan Brumovský", posicoes: ["ZAG"], forca: 80 },
      { nome: "Ján Švehlík", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1967,
    clube: "CSKA Red Flag",
    jogadores: [
      { nome: "Stoyan Yordanov", posicoes: ["GOL"], forca: 84 },
      { nome: "Dimitar Penev", posicoes: ["ZAG"], forca: 89 },
      { nome: "Ivan Zafirov", posicoes: ["ZAG"], forca: 82 },
      { nome: "Boris Gaganelov", posicoes: ["LD"], forca: 85 },
      { nome: "Nikola Tsanev", posicoes: ["MC"], forca: 87 },
      { nome: "Dimitar Yakimov", posicoes: ["MC"], forca: 89 },
      { nome: "Asparuh Nikodimov", posicoes: ["MEI"], forca: 86 },
      { nome: "Petar Zhekov", posicoes: ["ATA"], forca: 90 },
      { nome: "Stefan Mihaylov", posicoes: ["ATA"], forca: 82 },
      { nome: "Dimitar Marashliev", posicoes: ["PE"], forca: 85 },
      { nome: "Ivan Kolev", posicoes: ["MC"], forca: 84 },
      { nome: "Georgi Velinov", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 1966 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Betancort", posicoes: ["GOL"], forca: 86 },
      { nome: "Pachín", posicoes: ["LD"], forca: 84 },
      { nome: "Manuel Sanchís", posicoes: ["ZAG"], forca: 87 },
      { nome: "Pedro de Felipe", posicoes: ["ZAG"], forca: 86 },
      { nome: "Zoco", posicoes: ["LE"], forca: 87 },
      { nome: "Pirri", posicoes: ["MC"], forca: 90 },
      { nome: "Velázquez", posicoes: ["MC","MEI"], forca: 88 },
      { nome: "Amancio", posicoes: ["PD","MEI"], forca: 91 },
      { nome: "Grosso", posicoes: ["ATA"], forca: 87 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 91 },
      { nome: "Serena", posicoes: ["ATA"], forca: 86 },
      { nome: "Félix Ruiz", posicoes: ["ATA"], forca: 84 },
      { nome: "Ignacio Zoco", posicoes: ["MC"], forca: 87 },
      { nome: "Agüero", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Partizan",
    jogadores: [
      { nome: "Milutin Šoškić", posicoes: ["GOL"], forca: 89 },
      { nome: "Fahrudin Jusufi", posicoes: ["LD"], forca: 89 },
      { nome: "Velibor Vasović", posicoes: ["ZAG"], forca: 90 },
      { nome: "Branko Rašović", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ivan Ćurković", posicoes: ["LE"], forca: 82 },
      { nome: "Radoslav Bečejac", posicoes: ["MC"], forca: 88 },
      { nome: "Bora Milutinović", posicoes: ["MC"], forca: 85 },
      { nome: "Vladica Kovačević", posicoes: ["MEI"], forca: 87 },
      { nome: "Josip Pirmajer", posicoes: ["PD"], forca: 86 },
      { nome: "Mustafa Hasanagić", posicoes: ["ATA"], forca: 87 },
      { nome: "Milan Galić", posicoes: ["ATA"], forca: 90 },
      { nome: "Zvezdan Čebinac", posicoes: ["PE"], forca: 85 },
      { nome: "Bruno Belin", posicoes: ["MC"], forca: 81 },
      { nome: "Vladimir Pejović", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 89 },
      { nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 90 },
      { nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 93 },
      { nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 87 },
      { nome: "Armando Picchi", posicoes: ["ZAG"], forca: 91 },
      { nome: "Luis Suárez", posicoes: ["MC"], forca: 92 },
      { nome: "Gianfranco Bedin", posicoes: ["MC"], forca: 85 },
      { nome: "Jair da Costa", posicoes: ["PD"], forca: 88 },
      { nome: "Mario Corso", posicoes: ["PE"], forca: 90 },
      { nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 93 },
      { nome: "Domenghini", posicoes: ["ATA"], forca: 85 },
      { nome: "Joaquín Peiró", posicoes: ["ATA"], forca: 85 },
      { nome: "Carlo Tagnin", posicoes: ["VOL"], forca: 82 },
      { nome: "Malatrasi", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1966,
    clube: "Manchester United",
    jogadores: [
      { nome: "Harry Gregg", posicoes: ["GOL"], forca: 85 },
      { nome: "Shay Brennan", posicoes: ["LD"], forca: 85 },
      { nome: "Tony Dunne", posicoes: ["LE"], forca: 86 },
      { nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nobby Stiles", posicoes: ["MC"], forca: 88 },
      { nome: "Pat Crerand", posicoes: ["MC"], forca: 87 },
      { nome: "Bobby Charlton", posicoes: ["MEI"], forca: 93 },
      { nome: "Denis Law", posicoes: ["ATA"], forca: 93 },
      { nome: "George Best", posicoes: ["PD","ATA"], forca: 92 },
      { nome: "David Herd", posicoes: ["ATA"], forca: 87 },
      { nome: "John Connelly", posicoes: ["PE"], forca: 85 },
      { nome: "David Sadler", posicoes: ["MC"], forca: 82 },
      { nome: "Dennis Viollet", posicoes: ["ATA"], forca: 85 },
      { nome: "Noel Cantwell", posicoes: ["ZAG"], forca: 82 }
    ]
  },

  // ===== Edição 1965 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 89 },
      { nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 90 },
      { nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 93 },
      { nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 87 },
      { nome: "Armando Picchi", posicoes: ["ZAG"], forca: 91 },
      { nome: "Gianfranco Bedin", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Luis Suárez", posicoes: ["MC"], forca: 93 },
      { nome: "Jair da Costa", posicoes: ["PD"], forca: 89 },
      { nome: "Mario Corso", posicoes: ["PE"], forca: 91 },
      { nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 93 },
      { nome: "Joaquín Peiró", posicoes: ["ATA"], forca: 86 },
      { nome: "Domenghini", posicoes: ["ATA"], forca: 85 },
      { nome: "Carlo Tagnin", posicoes: ["MC"], forca: 84 },
      { nome: "Malatrasi", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Benfica",
    jogadores: [
      { nome: "Costa Pereira", posicoes: ["GOL"], forca: 87 },
      { nome: "Ângelo Martins", posicoes: ["LD"], forca: 85 },
      { nome: "Germano", posicoes: ["ZAG"], forca: 88 },
      { nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mário Coluna", posicoes: ["MC"], forca: 92 },
      { nome: "Jaime Graça", posicoes: ["MC"], forca: 86 },
      { nome: "José Augusto", posicoes: ["PD"], forca: 89 },
      { nome: "António Simões", posicoes: ["PE"], forca: 90 },
      { nome: "Eusébio", posicoes: ["ATA"], forca: 97 },
      { nome: "José Torres", posicoes: ["ATA"], forca: 88 },
      { nome: "José Augusto Torres", posicoes: ["ATA"], forca: 87 },
      { nome: "Cavém", posicoes: ["VOL"], forca: 85 },
      { nome: "Cruz", posicoes: ["ZAG"], forca: 84 },
      { nome: "Raúl Águas", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Liverpool",
    jogadores: [
      { nome: "Tommy Lawrence", posicoes: ["GOL"], forca: 86 },
      { nome: "Chris Lawler", posicoes: ["LD"], forca: 85 },
      { nome: "Gerry Byrne", posicoes: ["LE"], forca: 86 },
      { nome: "Ron Yeats", posicoes: ["ZAG"], forca: 89 },
      { nome: "Tommy Smith", posicoes: ["ZAG","MC"], forca: 87 },
      { nome: "Willie Stevenson", posicoes: ["MC"], forca: 85 },
      { nome: "Gordon Milne", posicoes: ["MC"], forca: 85 },
      { nome: "Ian Callaghan", posicoes: ["PD","MC"], forca: 87 },
      { nome: "Peter Thompson", posicoes: ["PE"], forca: 87 },
      { nome: "Roger Hunt", posicoes: ["ATA"], forca: 90 },
      { nome: "Ian St John", posicoes: ["ATA","MEI"], forca: 89 },
      { nome: "Alf Arrowsmith", posicoes: ["ATA"], forca: 81 },
      { nome: "Geoff Strong", posicoes: ["MC"], forca: 82 },
      { nome: "Phil Ferns", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1965,
    clube: "Győr",
    jogadores: [
      { nome: "Tibor Tóth", posicoes: ["GOL"], forca: 81 },
      { nome: "Lajos Keglovich", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ernő Solymosi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ferenc Orbán", posicoes: ["LE"], forca: 80 },
      { nome: "Károly Palotai", posicoes: ["MC"], forca: 87 },
      { nome: "József Varsányi", posicoes: ["MC"], forca: 82 },
      { nome: "Tibor Farkas", posicoes: ["MEI"], forca: 84 },
      { nome: "Ferenc Povázsai", posicoes: ["ATA"], forca: 82 },
      { nome: "Kálmán Mészöly", posicoes: ["ATA"], forca: 84 },
      { nome: "József Somogyi", posicoes: ["PE"], forca: 80 },
      { nome: "István Korsós", posicoes: ["MC"], forca: 79 },
      { nome: "Antal Szentmihályi", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  // ===== Edição 1964 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Inter de Milão",
    jogadores: [
      { nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 89 },
      { nome: "Tarcisio Burgnich", posicoes: ["LD"], forca: 89 },
      { nome: "Giacinto Facchetti", posicoes: ["LE"], forca: 92 },
      { nome: "Aristide Guarneri", posicoes: ["ZAG"], forca: 87 },
      { nome: "Armando Picchi", posicoes: ["ZAG"], forca: 91 },
      { nome: "Carlo Tagnin", posicoes: ["VOL"], forca: 85 },
      { nome: "Luis Suárez", posicoes: ["MEI"], forca: 93 },
      { nome: "Jair da Costa", posicoes: ["PD"], forca: 89 },
      { nome: "Mario Corso", posicoes: ["PE"], forca: 91 },
      { nome: "Sandro Mazzola", posicoes: ["ATA"], forca: 93 },
      { nome: "Aurelio Milani", posicoes: ["ATA"], forca: 86 },
      { nome: "Joaquín Peiró", posicoes: ["ATA"], forca: 85 },
      { nome: "Gianfranco Bedin", posicoes: ["MC"], forca: 82 },
      { nome: "Mario Frustalupi", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Vicente Araquistáin", posicoes: ["GOL"], forca: 85 },
      { nome: "Pachín", posicoes: ["LD"], forca: 84 },
      { nome: "José Santamaría", posicoes: ["ZAG"], forca: 89 },
      { nome: "Miera", posicoes: ["LE"], forca: 82 },
      { nome: "Zoco", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Felo", posicoes: ["MC"], forca: 82 },
      { nome: "Alfredo Di Stéfano", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Ferenc Puskás", posicoes: ["ATA"], forca: 94 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 92 },
      { nome: "Amancio", posicoes: ["PD","MEI"], forca: 89 },
      { nome: "Félix Ruiz", posicoes: ["ATA"], forca: 84 },
      { nome: "Serena", posicoes: ["ATA"], forca: 82 },
      { nome: "José María Vidal", posicoes: ["MC"], forca: 80 },
      { nome: "Isidro", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Borussia Dortmund",
    jogadores: [
      { nome: "Hans Tilkowski", posicoes: ["GOL"], forca: 89 },
      { nome: "Wolfgang Paul", posicoes: ["ZAG"], forca: 86 },
      { nome: "Wilhelm Burgsmüller", posicoes: ["ZAG"], forca: 84 },
      { nome: "Lothar Geisler", posicoes: ["LD"], forca: 81 },
      { nome: "Aki Schmidt", posicoes: ["MC"], forca: 87 },
      { nome: "Helmut Bracht", posicoes: ["MC"], forca: 82 },
      { nome: "Timo Konietzka", posicoes: ["MEI"], forca: 88 },
      { nome: "Lothar Emmerich", posicoes: ["PE"], forca: 90 },
      { nome: "Friedhelm Konietzka", posicoes: ["ATA"], forca: 87 },
      { nome: "Reinhold Wosab", posicoes: ["PD"], forca: 85 },
      { nome: "Franz Brungs", posicoes: ["ATA"], forca: 85 },
      { nome: "Wilhelm Sturm", posicoes: ["MC"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1964,
    clube: "Zürich",
    jogadores: [
      { nome: "Karl Grob", posicoes: ["GOL"], forca: 85 },
      { nome: "Köbi Kuhn", posicoes: ["ZAG"], forca: 86 },
      { nome: "Werner Leimgruber", posicoes: ["ZAG"], forca: 84 },
      { nome: "René Botteron", posicoes: ["LD"], forca: 82 },
      { nome: "Jakob Kuhn", posicoes: ["MC"], forca: 86 },
      { nome: "Fritz Künzli", posicoes: ["MC"], forca: 85 },
      { nome: "Kurt Jara", posicoes: ["MEI"], forca: 84 },
      { nome: "Ernst Meyer", posicoes: ["ATA"], forca: 82 },
      { nome: "Roger Vonlanthen", posicoes: ["ATA"], forca: 81 },
      { nome: "Rudolf Künzli", posicoes: ["PE"], forca: 80 },
      { nome: "Walter Müller", posicoes: ["MC"], forca: 78 },
      { nome: "Ruedi Elsener", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  // ===== Edição 1963 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Milan",
    jogadores: [
      { nome: "Giorgio Ghezzi", posicoes: ["GOL"], forca: 87 },
      { nome: "Mario David", posicoes: ["LD"], forca: 85 },
      { nome: "Cesare Maldini", posicoes: ["ZAG"], forca: 90 },
      { nome: "Luigi Radice", posicoes: ["ZAG"], forca: 84 },
      { nome: "Bruno Mora", posicoes: ["LE"], forca: 85 },
      { nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 87 },
      { nome: "Giovanni Lodetti", posicoes: ["MC"], forca: 84 },
      { nome: "Gianni Rivera", posicoes: ["MEI"], forca: 93 },
      { nome: "Dino Sani", posicoes: ["PD"], forca: 87 },
      { nome: "José Altafini", posicoes: ["ATA"], forca: 93 },
      { nome: "Paolo Barison", posicoes: ["ATA"], forca: 86 },
      { nome: "Gino Pivatelli", posicoes: ["ATA"], forca: 82 },
      { nome: "Mario Trebbi", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nereo Benetti", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Benfica",
    jogadores: [
      { nome: "Costa Pereira", posicoes: ["GOL"], forca: 88 },
      { nome: "Ângelo Martins", posicoes: ["LD"], forca: 85 },
      { nome: "Germano", posicoes: ["ZAG"], forca: 88 },
      { nome: "Cruz", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Mário Coluna", posicoes: ["MC"], forca: 93 },
      { nome: "Jaime Graça", posicoes: ["MC"], forca: 85 },
      { nome: "José Augusto", posicoes: ["PD"], forca: 89 },
      { nome: "António Simões", posicoes: ["PE"], forca: 90 },
      { nome: "Eusébio", posicoes: ["ATA"], forca: 96 },
      { nome: "José Torres", posicoes: ["ATA"], forca: 87 },
      { nome: "José Águas", posicoes: ["ATA"], forca: 87 },
      { nome: "Cavém", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 81 },
      { nome: "José Neto", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Dundee",
    jogadores: [
      { nome: "Bill Brown", posicoes: ["GOL"], forca: 85 },
      { nome: "Alex Hamilton", posicoes: ["LD"], forca: 84 },
      { nome: "Ian Ure", posicoes: ["ZAG"], forca: 87 },
      { nome: "Bobby Cox", posicoes: ["ZAG"], forca: 85 },
      { nome: "Doug Cowan", posicoes: ["LE"], forca: 82 },
      { nome: "Andy Penman", posicoes: ["MC"], forca: 86 },
      { nome: "Hugh Robertson", posicoes: ["MC"], forca: 85 },
      { nome: "Gordon Smith", posicoes: ["PD"], forca: 85 },
      { nome: "Alan Gilzean", posicoes: ["ATA"], forca: 89 },
      { nome: "Bobby Wishart", posicoes: ["ATA"], forca: 84 },
      { nome: "Alan Cousin", posicoes: ["PE"], forca: 82 },
      { nome: "Bert Slater", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1963,
    clube: "Feyenoord",
    jogadores: [
      { nome: "Eddy Pieters Graafland", posicoes: ["GOL"], forca: 87 },
      { nome: "Rinus Israël", posicoes: ["ZAG"], forca: 88 },
      { nome: "Hans Kraay", posicoes: ["ZAG"], forca: 84 },
      { nome: "Cor Veldhoen", posicoes: ["LE"], forca: 84 },
      { nome: "Henk Schouten", posicoes: ["MC"], forca: 86 },
      { nome: "Bennaars", posicoes: ["MC"], forca: 82 },
      { nome: "Coen Moulijn", posicoes: ["PE"], forca: 91 },
      { nome: "Cor van der Gijp", posicoes: ["ATA"], forca: 87 },
      { nome: "Piet Kruiver", posicoes: ["ATA"], forca: 86 },
      { nome: "Henk Groot", posicoes: ["PD"], forca: 85 },
      { nome: "Frans Bouwmeester", posicoes: ["MC"], forca: 81 },
      { nome: "Aad Bak", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  // ===== Edição 1962 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Benfica",
    jogadores: [
      { nome: "Costa Pereira", posicoes: ["GOL"], forca: 88 },
      { nome: "Ângelo Martins", posicoes: ["LD"], forca: 85 },
      { nome: "Germano", posicoes: ["ZAG"], forca: 88 },
      { nome: "Cruz", posicoes: ["LE","ZAG"], forca: 85 },
      { nome: "Mário Coluna", posicoes: ["MC"], forca: 93 },
      { nome: "Jaime Graça", posicoes: ["MC"], forca: 85 },
      { nome: "Cavém", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "José Augusto", posicoes: ["PD"], forca: 89 },
      { nome: "António Simões", posicoes: ["PE"], forca: 89 },
      { nome: "José Águas", posicoes: ["ATA"], forca: 90 },
      { nome: "Eusébio", posicoes: ["ATA"], forca: 96 },
      { nome: "Domiciano Cavém", posicoes: ["ATA"], forca: 85 },
      { nome: "Humberto Fernandes", posicoes: ["ZAG"], forca: 81 },
      { nome: "José Neto", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Vicente Araquistáin", posicoes: ["GOL"], forca: 86 },
      { nome: "Isidro", posicoes: ["LD"], forca: 82 },
      { nome: "José Santamaría", posicoes: ["ZAG"], forca: 90 },
      { nome: "Pachín", posicoes: ["LE"], forca: 82 },
      { nome: "José María Zárraga", posicoes: ["MC"], forca: 87 },
      { nome: "Luis del Sol", posicoes: ["MC"], forca: 89 },
      { nome: "Alfredo Di Stéfano", posicoes: ["MEI","ATA"], forca: 96 },
      { nome: "Ferenc Puskás", posicoes: ["ATA"], forca: 97 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 93 },
      { nome: "Canário", posicoes: ["ATA"], forca: 85 },
      { nome: "Felo", posicoes: ["ATA"], forca: 82 },
      { nome: "Amancio", posicoes: ["PD"], forca: 85 },
      { nome: "Antonio Ruiz", posicoes: ["MC"], forca: 80 },
      { nome: "Miera", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Tottenham Hotspur",
    jogadores: [
      { nome: "Bill Brown", posicoes: ["GOL"], forca: 87 },
      { nome: "Peter Baker", posicoes: ["LD"], forca: 85 },
      { nome: "Ron Henry", posicoes: ["LE"], forca: 85 },
      { nome: "Maurice Norman", posicoes: ["ZAG"], forca: 87 },
      { nome: "Danny Blanchflower", posicoes: ["MC"], forca: 92 },
      { nome: "Dave Mackay", posicoes: ["MC"], forca: 91 },
      { nome: "John White", posicoes: ["MEI"], forca: 89 },
      { nome: "Cliff Jones", posicoes: ["PE"], forca: 89 },
      { nome: "Bobby Smith", posicoes: ["ATA"], forca: 89 },
      { nome: "Jimmy Greaves", posicoes: ["ATA"], forca: 93 },
      { nome: "Terry Dyson", posicoes: ["ATA","ME"], forca: 85 },
      { nome: "Les Allen", posicoes: ["ATA"], forca: 84 },
      { nome: "Tony Marchi", posicoes: ["MC"], forca: 82 },
      { nome: "Mel Hopkins", posicoes: ["ZAG"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1962,
    clube: "Standard Liège",
    jogadores: [
      { nome: "Jean Nicolay", posicoes: ["GOL"], forca: 88 },
      { nome: "Henri Thellin", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jean Thissen", posicoes: ["ZAG"], forca: 85 },
      { nome: "Louis Pilot", posicoes: ["LE"], forca: 84 },
      { nome: "Paul Bonga Bonga", posicoes: ["MC"], forca: 86 },
      { nome: "Roger Claessen", posicoes: ["MC"], forca: 86 },
      { nome: "Léon Semmeling", posicoes: ["MEI"], forca: 87 },
      { nome: "Jean Jadot", posicoes: ["ATA"], forca: 81 },
      { nome: "Jacques Beurlet", posicoes: ["PE"], forca: 81 },
      { nome: "René Hauss", posicoes: ["MC"], forca: 82 },
      { nome: "Marcel Paeschen", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1961 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Benfica",
    jogadores: [
      { nome: "Costa Pereira", posicoes: ["GOL"], forca: 88 },
      { nome: "Ângelo Martins", posicoes: ["LD"], forca: 85 },
      { nome: "Germano", posicoes: ["ZAG"], forca: 88 },
      { nome: "Mário João", posicoes: ["LE","ZAG"], forca: 84 },
      { nome: "Cavém", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Mário Coluna", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "José Neto", posicoes: ["MC"], forca: 82 },
      { nome: "José Augusto", posicoes: ["PD"], forca: 89 },
      { nome: "José Águas", posicoes: ["ATA"], forca: 91 },
      { nome: "Santana", posicoes: ["PE"], forca: 85 },
      { nome: "Eusébio", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Domiciano Cavém", posicoes: ["ATA"], forca: 86 },
      { nome: "Artur Santos", posicoes: ["ZAG"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Barcelona",
    jogadores: [
      { nome: "Antoni Ramallets", posicoes: ["GOL"], forca: 88 },
      { nome: "Ferrán Olivella", posicoes: ["LD"], forca: 86 },
      { nome: "Sigfrid Gràcia", posicoes: ["ZAG"], forca: 84 },
      { nome: "Joan Segarra", posicoes: ["LE"], forca: 87 },
      { nome: "Enric Gensana", posicoes: ["MC"], forca: 85 },
      { nome: "Martí Vergés", posicoes: ["MC"], forca: 85 },
      { nome: "Luis Suárez", posicoes: ["MEI"], forca: 93 },
      { nome: "László Kubala", posicoes: ["ATA","MEI"], forca: 90 },
      { nome: "Evaristo", posicoes: ["ATA"], forca: 89 },
      { nome: "Sándor Kocsis", posicoes: ["ATA"], forca: 90 },
      { nome: "Zoltán Czibor", posicoes: ["PE"], forca: 89 },
      { nome: "Justo Tejada", posicoes: ["PD"], forca: 85 },
      { nome: "Eulogio Martínez", posicoes: ["ATA"], forca: 84 },
      { nome: "Jesús Garay", posicoes: ["ZAG"], forca: 87 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Rapid Wien",
    jogadores: [
      { nome: "Walter Zeman", posicoes: ["GOL"], forca: 88 },
      { nome: "Ernst Happel", posicoes: ["ZAG"], forca: 90 },
      { nome: "Gerhard Hanappi", posicoes: ["ZAG","MC"], forca: 90 },
      { nome: "Karl Stotz", posicoes: ["LE"], forca: 84 },
      { nome: "Robert Körner", posicoes: ["MC"], forca: 85 },
      { nome: "Bruno Mehsarosch", posicoes: ["MC"], forca: 82 },
      { nome: "Alfred Körner", posicoes: ["PD"], forca: 88 },
      { nome: "Robert Dienst", posicoes: ["ATA"], forca: 89 },
      { nome: "Rudolf Flögel", posicoes: ["ATA"], forca: 85 },
      { nome: "Erich Probst", posicoes: ["PE"], forca: 85 },
      { nome: "Walter Skocik", posicoes: ["MC"], forca: 80 },
      { nome: "Josef Bertalan", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1961,
    clube: "Hamburg",
    jogadores: [
      { nome: "Horst Schnoor", posicoes: ["GOL"], forca: 85 },
      { nome: "Jürgen Werner", posicoes: ["ZAG"], forca: 86 },
      { nome: "Jochen Meinke", posicoes: ["ZAG"], forca: 84 },
      { nome: "Gerd Krug", posicoes: ["LE"], forca: 80 },
      { nome: "Dieter Seeler", posicoes: ["MC"], forca: 85 },
      { nome: "Klaus Stürmer", posicoes: ["MC"], forca: 86 },
      { nome: "Gert Dörfel", posicoes: ["ME"], forca: 87 },
      { nome: "Uwe Seeler", posicoes: ["ATA"], forca: 93 },
      { nome: "Charly Dörfel", posicoes: ["ATA"], forca: 87 },
      { nome: "Peter Wulf", posicoes: ["ATA"], forca: 81 },
      { nome: "Horst Dehn", posicoes: ["MC"], forca: 80 },
      { nome: "Gerhard Krug", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 1960 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Rogelio Domínguez", posicoes: ["GOL"], forca: 87 },
      { nome: "Marquitos", posicoes: ["ZAG"], forca: 85 },
      { nome: "José Santamaría", posicoes: ["ZAG"], forca: 91 },
      { nome: "Rafael Lesmes", posicoes: ["LE"], forca: 84 },
      { nome: "José María Zárraga", posicoes: ["MC"], forca: 88 },
      { nome: "Luis del Sol", posicoes: ["MC"], forca: 89 },
      { nome: "Alfredo Di Stéfano", posicoes: ["MEI","ATA"], forca: 98 },
      { nome: "Ferenc Puskás", posicoes: ["ATA"], forca: 98 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 93 },
      { nome: "Héctor Rial", posicoes: ["ATA"], forca: 87 },
      { nome: "Canário", posicoes: ["ATA"], forca: 85 },
      { nome: "Joseíto", posicoes: ["PD","ATA"], forca: 82 },
      { nome: "Pachín", posicoes: ["MC"], forca: 80 },
      { nome: "Enrique Mateos", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Eintracht Frankfurt",
    jogadores: [
      { nome: "Egon Loy", posicoes: ["GOL"], forca: 86 },
      { nome: "Friedel Lutz", posicoes: ["LD"], forca: 85 },
      { nome: "Hermann Höfer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Hans Weilbächer", posicoes: ["LE"], forca: 82 },
      { nome: "Dieter Stinka", posicoes: ["MC"], forca: 87 },
      { nome: "Alfred Pfaff", posicoes: ["MEI"], forca: 91 },
      { nome: "Richard Kreß", posicoes: ["PD"], forca: 87 },
      { nome: "Erwin Stein", posicoes: ["ATA"], forca: 89 },
      { nome: "Eckehard Feigenspan", posicoes: ["ATA"], forca: 87 },
      { nome: "Dieter Lindner", posicoes: ["PE"], forca: 85 },
      { nome: "Erich Meier", posicoes: ["MC"], forca: 82 },
      { nome: "Fritz Schlebrowski", posicoes: ["ZAG"], forca: 79 },
      { nome: "Walter Bechtold", posicoes: ["ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Barcelona",
    jogadores: [
      { nome: "Antoni Ramallets", posicoes: ["GOL"], forca: 89 },
      { nome: "Ferrán Olivella", posicoes: ["LD"], forca: 86 },
      { nome: "Sigfrid Gràcia", posicoes: ["ZAG"], forca: 84 },
      { nome: "Joan Segarra", posicoes: ["LE"], forca: 88 },
      { nome: "Martí Vergés", posicoes: ["MC"], forca: 85 },
      { nome: "Enric Gensana", posicoes: ["MC"], forca: 85 },
      { nome: "Luis Suárez", posicoes: ["MEI"], forca: 93 },
      { nome: "László Kubala", posicoes: ["ATA","MEI"], forca: 91 },
      { nome: "Evaristo", posicoes: ["ATA"], forca: 89 },
      { nome: "Sándor Kocsis", posicoes: ["ATA"], forca: 90 },
      { nome: "Zoltán Czibor", posicoes: ["PE"], forca: 90 },
      { nome: "Justo Tejada", posicoes: ["PD"], forca: 85 },
      { nome: "Eulogio Martínez", posicoes: ["ATA"], forca: 85 },
      { nome: "Luis Coll", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1960,
    clube: "Rangers",
    jogadores: [
      { nome: "Billy Ritchie", posicoes: ["GOL"], forca: 85 },
      { nome: "Bobby Shearer", posicoes: ["LD"], forca: 85 },
      { nome: "Eric Caldow", posicoes: ["LE"], forca: 88 },
      { nome: "Harold Davis", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ian McColl", posicoes: ["MC"], forca: 85 },
      { nome: "Ian McMillan", posicoes: ["MC"], forca: 87 },
      { nome: "Alex Scott", posicoes: ["PD"], forca: 86 },
      { nome: "Davie Wilson", posicoes: ["PE"], forca: 86 },
      { nome: "Ralph Brand", posicoes: ["ATA"], forca: 88 },
      { nome: "Max Murray", posicoes: ["ATA"], forca: 85 },
      { nome: "Jimmy Millar", posicoes: ["ATA"], forca: 86 },
      { nome: "Davie Provan", posicoes: ["MC"], forca: 82 },
      { nome: "George Niven", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 1959 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Juan Alonso", posicoes: ["GOL"], forca: 87 },
      { nome: "Marquitos", posicoes: ["ZAG"], forca: 86 },
      { nome: "José Santamaría", posicoes: ["ZAG"], forca: 91 },
      { nome: "Rafael Lesmes", posicoes: ["LE"], forca: 84 },
      { nome: "José María Zárraga", posicoes: ["MC"], forca: 88 },
      { nome: "Miguel Muñoz", posicoes: ["MC"], forca: 88 },
      { nome: "Raymond Kopa", posicoes: ["MEI"], forca: 93 },
      { nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 98 },
      { nome: "Héctor Rial", posicoes: ["ATA"], forca: 89 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 93 },
      { nome: "Enrique Mateos", posicoes: ["ATA"], forca: 84 },
      { nome: "Joseíto", posicoes: ["PD","ATA"], forca: 82 },
      { nome: "Juan Santisteban", posicoes: ["MC"], forca: 80 },
      { nome: "José María Vidal", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Stade de Reims",
    jogadores: [
      { nome: "Dominique Colonna", posicoes: ["GOL"], forca: 87 },
      { nome: "Robert Jonquet", posicoes: ["ZAG"], forca: 89 },
      { nome: "Roger Marche", posicoes: ["LE"], forca: 87 },
      { nome: "Robert Siatka", posicoes: ["ZAG"], forca: 82 },
      { nome: "Armand Penverne", posicoes: ["MC"], forca: 87 },
      { nome: "Michel Leblond", posicoes: ["MC"], forca: 85 },
      { nome: "Roger Piantoni", posicoes: ["MEI","ATA"], forca: 91 },
      { nome: "Just Fontaine", posicoes: ["ATA"], forca: 93 },
      { nome: "Jean Vincent", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "René Bliard", posicoes: ["ATA"], forca: 86 },
      { nome: "Michel Hidalgo", posicoes: ["ME"], forca: 82 },
      { nome: "Jean Wendling", posicoes: ["MC"], forca: 81 },
      { nome: "Léon Glovacki", posicoes: ["ATA"], forca: 84 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Atlético de Madrid",
    jogadores: [
      { nome: "Miguel Reina", posicoes: ["GOL"], forca: 82 },
      { nome: "Feliciano Rivilla", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jorge Griffa", posicoes: ["ZAG"], forca: 87 },
      { nome: "Isacio Calleja", posicoes: ["LE"], forca: 84 },
      { nome: "Adelardo Rodríguez", posicoes: ["MC"], forca: 85 },
      { nome: "José Luis Capón", posicoes: ["MC"], forca: 80 },
      { nome: "Joaquín Peiró", posicoes: ["PD"], forca: 89 },
      { nome: "Enrique Collar", posicoes: ["PE"], forca: 89 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { nome: "Mendonça", posicoes: ["ATA"], forca: 86 },
      { nome: "Miguel Jones", posicoes: ["ATA"], forca: 82 },
      { nome: "Chuzo", posicoes: ["MC"], forca: 79 },
      { nome: "Verde", posicoes: ["ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1959,
    clube: "Young Boys",
    jogadores: [
      { nome: "Walter Eich", posicoes: ["GOL"], forca: 85 },
      { nome: "Heinz Bigler", posicoes: ["ZAG"], forca: 82 },
      { nome: "Eugen Meier", posicoes: ["ZAG"], forca: 84 },
      { nome: "Willy Schneider", posicoes: ["LE"], forca: 80 },
      { nome: "Kurt Linder", posicoes: ["MC"], forca: 85 },
      { nome: "Ernst Wechselberger", posicoes: ["MC"], forca: 84 },
      { nome: "Geni Meier", posicoes: ["ATA"], forca: 86 },
      { nome: "Hanspeter Künzler", posicoes: ["ATA"], forca: 80 },
      { nome: "Albert Brülls", posicoes: ["ME"], forca: 79 },
      { nome: "Roland Allemann", posicoes: ["MC"], forca: 78 },
      { nome: "Hans Hertig", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 1958 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Juan Alonso", posicoes: ["GOL"], forca: 87 },
      { nome: "Marquitos", posicoes: ["ZAG"], forca: 86 },
      { nome: "José Santamaría", posicoes: ["ZAG"], forca: 91 },
      { nome: "Rafael Lesmes", posicoes: ["LE"], forca: 84 },
      { nome: "Miguel Muñoz", posicoes: ["MC"], forca: 89 },
      { nome: "José María Zárraga", posicoes: ["MC"], forca: 88 },
      { nome: "Raymond Kopa", posicoes: ["MEI"], forca: 93 },
      { nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 98 },
      { nome: "Héctor Rial", posicoes: ["ATA"], forca: 90 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 92 },
      { nome: "Enrique Mateos", posicoes: ["ATA"], forca: 82 },
      { nome: "Joseíto", posicoes: ["PD","ATA"], forca: 84 },
      { nome: "Juan Santisteban", posicoes: ["MC"], forca: 80 },
      { nome: "José María Vidal", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Milan",
    jogadores: [
      { nome: "Lorenzo Buffon", posicoes: ["GOL"], forca: 89 },
      { nome: "Cesare Maldini", posicoes: ["ZAG"], forca: 89 },
      { nome: "Francesco Zagatti", posicoes: ["ZAG"], forca: 82 },
      { nome: "Silvano Fontana", posicoes: ["LE"], forca: 80 },
      { nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 82 },
      { nome: "Nils Liedholm", posicoes: ["MC","MEI"], forca: 92 },
      { nome: "Juan Alberto Schiaffino", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Gastone Bean", posicoes: ["ATA"], forca: 85 },
      { nome: "Ernesto Grillo", posicoes: ["ATA"], forca: 85 },
      { nome: "Giorgio Dal Monte", posicoes: ["ATA"], forca: 82 },
      { nome: "Gino Pivatelli", posicoes: ["ATA"], forca: 84 },
      { nome: "Eros Beraldo", posicoes: ["MC"], forca: 80 },
      { nome: "Luigi Radice", posicoes: ["PE"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Manchester United",
    jogadores: [
      { nome: "Harry Gregg", posicoes: ["GOL"], forca: 86 },
      { nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 87 },
      { nome: "Roger Byrne", posicoes: ["LE"], forca: 89 },
      { nome: "Mark Jones", posicoes: ["ZAG"], forca: 84 },
      { nome: "Duncan Edwards", posicoes: ["MC"], forca: 93 },
      { nome: "Eddie Colman", posicoes: ["MC"], forca: 87 },
      { nome: "David Pegg", posicoes: ["PE"], forca: 86 },
      { nome: "Bobby Charlton", posicoes: ["MEI","ATA"], forca: 91 },
      { nome: "Tommy Taylor", posicoes: ["ATA"], forca: 91 },
      { nome: "Dennis Viollet", posicoes: ["ATA"], forca: 87 },
      { nome: "Alex Dawson", posicoes: ["ATA"], forca: 82 },
      { nome: "Stan Crowther", posicoes: ["MC"], forca: 80 },
      { nome: "Johnny Berry", posicoes: ["PD"], forca: 85 },
      { nome: "Ian Greaves", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1958,
    clube: "Vasas",
    jogadores: [
      { nome: "Gyula Grosics", posicoes: ["GOL"], forca: 91 },
      { nome: "Lajos Berendi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Károly Kárpáti", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rudolf Illovszky", posicoes: ["LE"], forca: 84 },
      { nome: "Dezső Bundzsák", posicoes: ["MC"], forca: 87 },
      { nome: "Károly Lakat", posicoes: ["MC"], forca: 82 },
      { nome: "Lajos Csordás", posicoes: ["MEI"], forca: 86 },
      { nome: "Sándor Szilágyi", posicoes: ["ATA"], forca: 84 },
      { nome: "Miklós Szilágyi", posicoes: ["ATA"], forca: 82 },
      { nome: "József Raduly", posicoes: ["PE"], forca: 80 },
      { nome: "Béla Sárosi", posicoes: ["MC"], forca: 81 },
      { nome: "János Berendi", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1957 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Juan Alonso", posicoes: ["GOL"], forca: 87 },
      { nome: "Marquitos", posicoes: ["ZAG"], forca: 86 },
      { nome: "José Santamaría", posicoes: ["ZAG"], forca: 89 },
      { nome: "Rafael Lesmes", posicoes: ["LE"], forca: 84 },
      { nome: "Miguel Muñoz", posicoes: ["MC"], forca: 89 },
      { nome: "José María Zárraga", posicoes: ["VOL","MC"], forca: 88 },
      { nome: "Raymond Kopa", posicoes: ["MEI"], forca: 93 },
      { nome: "Joseíto", posicoes: ["PD","ATA"], forca: 85 },
      { nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 98 },
      { nome: "Héctor Rial", posicoes: ["ATA"], forca: 91 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 92 },
      { nome: "Enrique Mateos", posicoes: ["ATA"], forca: 82 },
      { nome: "Juan Santisteban", posicoes: ["MC"], forca: 80 },
      { nome: "Roque Olsen", posicoes: ["ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Fiorentina",
    jogadores: [
      { nome: "Giuliano Sarti", posicoes: ["GOL"], forca: 88 },
      { nome: "Ardico Magnini", posicoes: ["LD"], forca: 85 },
      { nome: "Giuseppe Chiappella", posicoes: ["ZAG"], forca: 86 },
      { nome: "Sergio Cervato", posicoes: ["LE"], forca: 89 },
      { nome: "Armando Segato", posicoes: ["MC"], forca: 87 },
      { nome: "Guido Gratton", posicoes: ["MC"], forca: 85 },
      { nome: "Miguel Montuori", posicoes: ["MEI","ATA"], forca: 90 },
      { nome: "Julinho", posicoes: ["PD"], forca: 92 },
      { nome: "Giuseppe Virgili", posicoes: ["ATA"], forca: 87 },
      { nome: "Maurilio Prini", posicoes: ["PE"], forca: 82 },
      { nome: "Enzo Robotti", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alberto Orzan", posicoes: ["MC"], forca: 82 },
      { nome: "Beppe Chiappella", posicoes: ["ATA"], forca: 80 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Manchester United",
    jogadores: [
      { nome: "Ray Wood", posicoes: ["GOL"], forca: 85 },
      { nome: "Roger Byrne", posicoes: ["LE"], forca: 89 },
      { nome: "Bill Foulkes", posicoes: ["ZAG"], forca: 86 },
      { nome: "Jackie Blanchflower", posicoes: ["ZAG","MC"], forca: 85 },
      { nome: "Duncan Edwards", posicoes: ["MC"], forca: 93 },
      { nome: "Eddie Colman", posicoes: ["MC"], forca: 88 },
      { nome: "David Pegg", posicoes: ["PE"], forca: 87 },
      { nome: "Bobby Charlton", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Tommy Taylor", posicoes: ["ATA"], forca: 91 },
      { nome: "Dennis Viollet", posicoes: ["ATA"], forca: 87 },
      { nome: "Billy Whelan", posicoes: ["ATA"], forca: 86 },
      { nome: "Johnny Berry", posicoes: ["PD"], forca: 87 },
      { nome: "Mark Jones", posicoes: ["ZAG"], forca: 84 },
      { nome: "Wilf McGuinness", posicoes: ["MC"], forca: 81 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1957,
    clube: "Red Star Belgrade",
    jogadores: [
      { nome: "Vladimir Beara", posicoes: ["GOL"], forca: 90 },
      { nome: "Branko Stanković", posicoes: ["LD","ZAG"], forca: 87 },
      { nome: "Vladimir Durković", posicoes: ["ZAG"], forca: 82 },
      { nome: "Sava Antić", posicoes: ["ZAG"], forca: 80 },
      { nome: "Tihomir Ognjanov", posicoes: ["MC"], forca: 84 },
      { nome: "Rajko Mitić", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Dragoslav Šekularac", posicoes: ["MEI","PD"], forca: 88 },
      { nome: "Bora Kostić", posicoes: ["ATA"], forca: 87 },
      { nome: "Todor Veselinović", posicoes: ["ATA"], forca: 86 },
      { nome: "Miloš Milutinović", posicoes: ["PE"], forca: 87 },
      { nome: "Dragoslav Župac", posicoes: ["MC"], forca: 79 },
      { nome: "Lazar Tasić", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1956 (Champions — histórico) =====

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Real Madrid",
    jogadores: [
      { nome: "Juan Alonso", posicoes: ["GOL"], forca: 87 },
      { nome: "Ángel Atienza", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Marquitos", posicoes: ["ZAG"], forca: 85 },
      { nome: "Rafael Lesmes", posicoes: ["LE"], forca: 84 },
      { nome: "Miguel Muñoz", posicoes: ["MC"], forca: 89 },
      { nome: "José María Zárraga", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Joseíto", posicoes: ["PD","ATA"], forca: 85 },
      { nome: "Alfredo Di Stéfano", posicoes: ["ATA","MEI"], forca: 97 },
      { nome: "Héctor Rial", posicoes: ["ATA"], forca: 91 },
      { nome: "Francisco Gento", posicoes: ["PE"], forca: 91 },
      { nome: "Roque Olsen", posicoes: ["ATA"], forca: 84 },
      { nome: "Luis Molowny", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Enrique Mateos", posicoes: ["ATA"], forca: 80 },
      { nome: "Juan Santisteban", posicoes: ["MC"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Stade de Reims",
    jogadores: [
      { nome: "Dominique Colonna", posicoes: ["GOL"], forca: 86 },
      { nome: "Robert Jonquet", posicoes: ["ZAG"], forca: 90 },
      { nome: "Roger Marche", posicoes: ["LE"], forca: 88 },
      { nome: "Raoul Giraudo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Armand Penverne", posicoes: ["MC"], forca: 87 },
      { nome: "Michel Leblond", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Raymond Kopa", posicoes: ["MEI"], forca: 93 },
      { nome: "René Bliard", posicoes: ["ATA"], forca: 87 },
      { nome: "Léon Glovacki", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Michel Hidalgo", posicoes: ["ME","ATA"], forca: 84 },
      { nome: "Pierre Sinibaldi", posicoes: ["ATA"], forca: 82 },
      { nome: "Jean Templin", posicoes: ["MC"], forca: 81 },
      { nome: "Jacques Méano", posicoes: ["ATA"], forca: 80 },
      { nome: "Robert Siatka", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Milan",
    jogadores: [
      { nome: "Lorenzo Buffon", posicoes: ["GOL"], forca: 89 },
      { nome: "Cesare Maldini", posicoes: ["ZAG"], forca: 88 },
      { nome: "Francesco Zagatti", posicoes: ["ZAG"], forca: 82 },
      { nome: "Alfio Fontana", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nils Liedholm", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Juan Alberto Schiaffino", posicoes: ["MEI","ATA"], forca: 93 },
      { nome: "Gunnar Nordahl", posicoes: ["ATA"], forca: 92 },
      { nome: "Gino Pivatelli", posicoes: ["ATA"], forca: 85 },
      { nome: "Ernesto Grillo", posicoes: ["ATA","ME"], forca: 85 },
      { nome: "Eros Beraldo", posicoes: ["MC"], forca: 80 },
      { nome: "Giorgio Dal Monte", posicoes: ["ME"], forca: 81 },
      { nome: "Giovanni Trapattoni", posicoes: ["MC"], forca: 78 }
    ]
  },

  {
    competicao: "Champions",
    edicao: 1956,
    clube: "Hibernian",
    jogadores: [
      { nome: "Tommy Younger", posicoes: ["GOL"], forca: 85 },
      { nome: "John Paterson", posicoes: ["LD"], forca: 80 },
      { nome: "John Grant", posicoes: ["ZAG"], forca: 82 },
      { nome: "Bobby Combe", posicoes: ["LE"], forca: 82 },
      { nome: "Eddie Turnbull", posicoes: ["MC"], forca: 88 },
      { nome: "Bobby Johnstone", posicoes: ["MC","ATA"], forca: 89 },
      { nome: "Gordon Smith", posicoes: ["PD"], forca: 90 },
      { nome: "Lawrie Reilly", posicoes: ["ATA"], forca: 89 },
      { nome: "Willie Ormond", posicoes: ["ATA"], forca: 87 },
      { nome: "Tommy Preston", posicoes: ["ME","ATA"], forca: 82 },
      { nome: "Jock Buchanan", posicoes: ["MC"], forca: 80 }
    ]
  }

];
