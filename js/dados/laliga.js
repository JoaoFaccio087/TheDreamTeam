// ============================================================
//  laliga.js  —  dados de La Liga (Primeira Divisão da Espanha)
//  Estrutura HÍBRIDA:
//   • Acervo CONTÍNUO a partir de 1989-90 (top-6 de cada edição,
//     14-16 jogadores). Edição = ano em que a temporada TERMINA.
//   • EDIÇÕES ESPECIAIS de times lendários anteriores (Real de
//     Di Stéfano/Puskás, Barça de Cruyff, de Maradona, dream team
//     de Romário) — cada um no SEU ANO real, como clube único.
//
//  Convenções (iguais às das outras competições):
//   - `id` = a PESSOA, reutilizado entre edições/clubes.
//   - Coloque o jogador no clube onde TERMINOU a temporada.
//   - Força: régua ~82 de média, 90+ raro (~5%).
//   - Clube "Atlético Madrid" grava-se "Atlético de Madrid".
// ============================================================

const DADOS_LALIGA = [

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1990 (temporada 1989-90) — o REAL MADRID de John Toshack campeão (62 pts),
  //  25º título e o 5º SEGUIDO (igualando o próprio recorde dos anos 60). O time bateu
  //  o RECORDE histórico de gols da liga espanhola: 107 em 38 jogos. Hugo Sánchez fez
  //  38 gols (Bota de Ouro, igualando o recorde de Zarra de 1951). Top-6: Real Madrid
  //  (62), Valencia (53), Barcelona (51), Atlético (50), Real Sociedad (44), Sevilla
  //  (43). O Barça de Cruyff (2º ano) recém trouxe Koeman; o dream team se formava.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1990,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 82 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 83 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'rafael-gordillo',     nome: "Rafael Gordillo",     posicoes: ["LE","ME"],   forca: 82 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 86 },
      { id: 'rafael-martin-vazquez', nome: "Martín Vázquez",    posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'ricardo-gallego',     nome: "Ricardo Gallego",     posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'bernd-schuster',      nome: "Bernd Schuster",      posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'hugo-sanchez',        nome: "Hugo Sánchez",        posicoes: ["ATA"],       forca: 89 },
      { id: 'emilio-butragueno',   nome: "Emilio Butragueño",   posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'gheorghe-hagi',       nome: "Gheorghe Hagi",       posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'miguel-tendillo',     nome: "Miguel Tendillo",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'paco-llorente',       nome: "Paco Llorente",       posicoes: ["PD","ATA"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1990,
    clube: "Valencia",
    jogadores: [
      { id: 'jose-manuel-sempere', nome: "José Manuel Sempere", posicoes: ["GOL"],       forca: 80 },
      { id: 'fernando',            nome: "Fernando Giner",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'ricardo-arias',       nome: "Ricardo Arias",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'roberto',             nome: "Roberto Fernández",   posicoes: ["ZAG"],       forca: 78 },
      { id: 'nando-valencia',      nome: "Nando",               posicoes: ["LE","LD"],   forca: 77 },
      { id: 'fernando-gomez',      nome: "Fernando Gómez",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'quique-sanchez-flores', nome: "Quique Sánchez Flores", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'leonardo-enrique',    nome: "Leonardo",            posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'jose-luis-arroyo',    nome: "Arroyo",              posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'luboslav-penev',      nome: "Lyuboslav Penev",     posicoes: ["ATA"],       forca: 82 },
      { id: 'fernando-salillas',   nome: "Salillas",            posicoes: ["ATA"],       forca: 77 },
      { id: 'arturo-tevar',        nome: "Arturo",              posicoes: ["MD","PD"],   forca: 76 },
      { id: 'juan-carlos-rodriguez', nome: "Juan Carlos",       posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'javier-subirats',     nome: "Javier Subirats",     posicoes: ["MEI","MD"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1990,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta',  nome: "Andoni Zubizarreta",  posicoes: ["GOL"],       forca: 85 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 79 },
      { id: 'ronald-koeman',       nome: "Ronald Koeman",       posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'jose-ramon-alexanko', nome: "José Ramón Alexanko", posicoes: ["ZAG"],       forca: 79 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'eusebio-sacristan',   nome: "Eusebio Sacristán",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 81 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 86 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'aloisio',             nome: "Aloísio",             posicoes: ["ZAG"],       forca: 77 },
      { id: 'roberto-fernandez',   nome: "Roberto",             posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'nayim',               nome: "Nayim",               posicoes: ["MEI","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1990,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'abel-resino',         nome: "Abel Resino",         posicoes: ["GOL"],       forca: 81 },
      { id: 'tomas-reñones',       nome: "Tomás Reñones",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'juan-carlos-arteche', nome: "Juan Carlos Arteche", posicoes: ["ZAG"],       forca: 78 },
      { id: 'enrique-solozabal',   nome: "Enrique Solozábal",   posicoes: ["ZAG"],       forca: 77 },
      { id: 'toni-muñoz',          nome: "Toni Muñoz",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'roberto-solozabal',   nome: "Roberto Solozábal",   posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'jose-orejuela',       nome: "Orejuela",            posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'juan-vizcaino',       nome: "Vizcaíno",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'baltazar',            nome: "Baltazar",            posicoes: ["ATA"],       forca: 81 },
      { id: 'manolo',              nome: "Manolo",              posicoes: ["ATA"],       forca: 80 },
      { id: 'paulo-futre',         nome: "Paulo Futre",         posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'juan-sabas',          nome: "Juan Sabas",          posicoes: ["ATA"],       forca: 76 },
      { id: 'marina',              nome: "Marina",              posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1990,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'luis-maria-gonzalez-rs', nome: "Luis María González", posicoes: ["GOL"],    forca: 79 },
      { id: 'agustin-gajate',      nome: "Agustín Gajate",      posicoes: ["LD","MD"],   forca: 76 },
      { id: 'jose-mari-gorriz',    nome: "José Mari Górriz",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'inaki-larrañaga',     nome: "Iñaki Larrañaga",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'agustin-fuentes',     nome: "Fuentes",             posicoes: ["LE","LD"],   forca: 76 },
      { id: 'imanol-igoa',         nome: "Igoa",                posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'luis-perez-loren',    nome: "Loren",               posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'inaki-bengoetxea',    nome: "Bengoetxea",          posicoes: ["MEI","MD"],  forca: 78 },
      { id: 'john-aldridge',       nome: "John Aldridge",       posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-vergara-rs',     nome: "Vergara",            posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'jose-mari-mentxaka',  nome: "Mentxaka",            posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'francisco-mujika',    nome: "Mujika",              posicoes: ["MD","PD"],   forca: 76 },
      { id: 'gontzal-billabona',   nome: "Billabona",           posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'inaki-goikoetxea',    nome: "Goikoetxea (RS)",     posicoes: ["LE","ME"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1990,
    clube: "Sevilla",
    jogadores: [
      { id: 'rinat-dasaev',        nome: "Rinat Dasáyev",       posicoes: ["GOL"],       forca: 84 },
      { id: 'nando-sevilla',       nome: "Nando (SEV)",         posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'manuel-jimenez-sev',  nome: "Manolo Jiménez",      posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'jose-salguero',       nome: "Salguero",            posicoes: ["ZAG"],       forca: 77 },
      { id: 'diego-sevilla',       nome: "Diego",               posicoes: ["LE","MD"],   forca: 76 },
      { id: 'jose-martagon',       nome: "Martagón",            posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'rafa-paz',            nome: "Rafa Paz",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'pablo-bengoechea',    nome: "Bengoechea",          posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'antonio-conte-sev',   nome: "Conte",               posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'toni-polster',        nome: "Toni Polster",        posicoes: ["ATA"],       forca: 83 },
      { id: 'francisco-carvajal',  nome: "Carvajal",            posicoes: ["MD","PD"],   forca: 76 },
      { id: 'fernando-sevilla',    nome: "Fernando",            posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'jose-andrades',       nome: "Andrades",            posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'ramon-vazquez-sev',   nome: "Ramón",               posicoes: ["MC","MEI"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1991 (temporada 1990-91) — o BARCELONA de Johan CRUYFF campeão (57 pts),
  //  11º título, ENCERRANDO o penta do Real Madrid (1986-90). Foi o 1º título liguero
  //  do "Dream Team" em construção, com Koeman, Stoichkov e Laudrup. Butragueño (Real)
  //  foi artilheiro (19 gols). Top-6: Barcelona (57), Atlético (47), Real Madrid (46),
  //  Osasuna (45), Sporting Gijón (44), Oviedo (42). Schuster trocou o Real pelo
  //  Atlético (rival). Abel Resino (Atlético) fez 1275 min sem sofrer gol — recorde.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1991,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta',  nome: "Andoni Zubizarreta",  posicoes: ["GOL"],       forca: 85 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 80 },
      { id: 'ronald-koeman',       nome: "Ronald Koeman",       posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'jose-ramon-alexanko', nome: "José Ramón Alexanko", posicoes: ["ZAG"],       forca: 79 },
      { id: 'eusebio-sacristan',   nome: "Eusebio Sacristán",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 81 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'fernando-muñoz-nando', nome: "Nando (BAR)",        posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'nayim',               nome: "Nayim",               posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'juan-carlos-bcn',     nome: "Juan Carlos (BAR)",   posicoes: ["LE","MD"],   forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1991,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'abel-resino',         nome: "Abel Resino",         posicoes: ["GOL"],       forca: 83 },
      { id: 'tomas-reñones',       nome: "Tomás Reñones",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'juan-carlos-arteche', nome: "Juan Carlos Arteche", posicoes: ["ZAG"],       forca: 78 },
      { id: 'roberto-solozabal',   nome: "Roberto Solozábal",   posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'toni-muñoz',          nome: "Toni Muñoz",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'bernd-schuster',      nome: "Bernd Schuster",      posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'juan-vizcaino',       nome: "Vizcaíno",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'jose-orejuela',       nome: "Orejuela",            posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'manolo',              nome: "Manolo",              posicoes: ["ATA"],       forca: 81 },
      { id: 'baltazar',            nome: "Baltazar",            posicoes: ["ATA"],       forca: 80 },
      { id: 'paulo-futre',         nome: "Paulo Futre",         posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'alfredo-santaelena',  nome: "Santaelena",          posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'sergio-marrero',      nome: "Sergio Marrero",      posicoes: ["MC","MEI"],  forca: 75 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1991,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 82 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'rafael-gordillo',     nome: "Rafael Gordillo",     posicoes: ["LE","ME"],   forca: 80 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 86 },
      { id: 'ricardo-gallego',     nome: "Ricardo Gallego",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'rafael-martin-vazquez', nome: "Martín Vázquez",    posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'hugo-sanchez',        nome: "Hugo Sánchez",        posicoes: ["ATA"],       forca: 87 },
      { id: 'emilio-butragueno',   nome: "Emilio Butragueño",   posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'gheorghe-hagi',       nome: "Gheorghe Hagi",       posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'miguel-tendillo',     nome: "Miguel Tendillo",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'paco-llorente',       nome: "Paco Llorente",       posicoes: ["PD","ATA"],  forca: 79 },
      { id: 'chuti-villarroya',    nome: "Villarroya",          posicoes: ["LE","LD"],   forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1991,
    clube: "Osasuna",
    jogadores: [
      { id: 'roberto-osasuna',     nome: "Roberto (OSA)",       posicoes: ["GOL"],       forca: 78 },
      { id: 'javier-larrainzar',   nome: "Larrainzar",          posicoes: ["ZAG"],       forca: 77 },
      { id: 'jesus-bustingorri',   nome: "Bustingorri",         posicoes: ["LD","MD"],   forca: 76 },
      { id: 'pepin-osasuna',       nome: "Pepín",               posicoes: ["ZAG","LE"],  forca: 76 },
      { id: 'javier-castañeda-osa', nome: "Castañeda",          posicoes: ["ZAG"],       forca: 76 },
      { id: 'martin-dominguez',    nome: "Martín Domínguez",    posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'martin-gonzalez',     nome: "Martín González",     posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'javier-ibañez-osa',   nome: "Ibáñez",              posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'cuco-ziganda',        nome: "Ziganda",             posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'urban-osasuna',       nome: "Urban",               posicoes: ["ATA"],       forca: 77 },
      { id: 'ramon-maria-cholo',   nome: "Cholo",               posicoes: ["MEI","MD"],  forca: 76 },
      { id: 'unanua-osasuna',      nome: "Unanua",              posicoes: ["ME","LE"],   forca: 75 },
      { id: 'ivan-merino',         nome: "Merino",              posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'sola-osasuna',        nome: "Sola",                posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1991,
    clube: "Sporting Gijón",
    jogadores: [
      { id: 'juan-carlos-ablanedo', nome: "Ablanedo II",        posicoes: ["GOL"],       forca: 78 },
      { id: 'arturo-fernandez-spo', nome: "Arturo (SPO)",       posicoes: ["LD","MD"],   forca: 76 },
      { id: 'luis-sierra-spo',     nome: "Luis Sierra",         posicoes: ["LE","LD"],   forca: 76 },
      { id: 'jose-manuel-abelardo', nome: "Abelardo",           posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'jimenez-sporting',    nome: "Jiménez",             posicoes: ["ZAG"],       forca: 76 },
      { id: 'joaquin-alonso',      nome: "Joaquín",             posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'juan-carlos-spo',     nome: "Juan Carlos (SPO)",   posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'jozef-luhovy',        nome: "Luhový",              posicoes: ["ATA"],       forca: 78 },
      { id: 'oscar-gil-spo',       nome: "Óscar",               posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'jose-manuel-manjarin', nome: "Manjarín",           posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'plamen-yordanov',     nome: "Yordanov",            posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'roland-nilsson-spo',  nome: "Nilsson",             posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'pablo-fernandez-spo', nome: "Pablo",               posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1991,
    clube: "Oviedo",
    jogadores: [
      { id: 'viti-oviedo',         nome: "Viti",                posicoes: ["GOL"],       forca: 77 },
      { id: 'antonio-rivas-ovi',   nome: "Rivas",               posicoes: ["LD","MD"],   forca: 75 },
      { id: 'elcacho-oviedo',      nome: "Elcacho",             posicoes: ["ZAG"],       forca: 76 },
      { id: 'sañudo-oviedo',       nome: "Sañudo",              posicoes: ["ZAG"],       forca: 76 },
      { id: 'gorriaran-oviedo',    nome: "Gorriarán",           posicoes: ["LE","MD"],   forca: 76 },
      { id: 'davor-jerkan',        nome: "Jerkan",              posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'berto-oviedo',        nome: "Berto",               posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'jose-carlos-bango',   nome: "Bango",               posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'goran-gracan',        nome: "Gračan",              posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'carlos-muñoz-oviedo', nome: "Carlos",              posicoes: ["ATA"],       forca: 77 },
      { id: 'zoran-jankovic-ovi',  nome: "Janković",            posicoes: ["ATA"],       forca: 76 },
      { id: 'zubeldia-oviedo',     nome: "Zubeldia",            posicoes: ["MC","VOL"],  forca: 75 },
      { id: 'juan-carlos-zuñiga',  nome: "Zúñiga",              posicoes: ["VOL","MC"],  forca: 75 },
      { id: 'sarriugarte-oviedo',  nome: "Sarriugarte",         posicoes: ["ME","LE"],   forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1992 (temporada 1991-92) — o BARCELONA de Cruyff BICAMPEÃO (55 pts), 12º
  //  título, decidido na última rodada: o Real Madrid liderava por 1 pt mas perdeu de
  //  virada para o Tenerife de Valdano (2-3), entregando a liga ao Barça. Foi o ano do
  //  "Dream Team" no auge — venceu a 1ª CHAMPIONS da história do clube em Wembley (1-0
  //  na Sampdoria, gol de falta de Koeman). Top-6: Barcelona (55), Real Madrid (54),
  //  Atlético (53), Valencia, Real Sociedad, Zaragoza. Manolo (Atlético) artilheiro (27).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1992,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta',  nome: "Andoni Zubizarreta",  posicoes: ["GOL"],       forca: 85 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 81 },
      { id: 'ronald-koeman',       nome: "Ronald Koeman",       posicoes: ["ZAG","VOL"], forca: 88 },
      { id: 'jose-ramon-alexanko', nome: "José Ramón Alexanko", posicoes: ["ZAG"],       forca: 78 },
      { id: 'juan-carlos-bcn',     nome: "Juan Carlos (BAR)",   posicoes: ["LE","MD"],   forca: 78 },
      { id: 'eusebio-sacristan',   nome: "Eusebio Sacristán",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 88 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 81 },
      { id: 'fernando-muñoz-nando', nome: "Nando (BAR)",        posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'jon-andoni-goikoetxea', nome: "Goikoetxea (BAR)",  posicoes: ["MD","PD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1992,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 82 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'rafael-martin-vazquez', nome: "Martín Vázquez",    posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 85 },
      { id: 'ricardo-gallego',     nome: "Ricardo Gallego",     posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'luis-milla',          nome: "Luis Milla",          posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'hugo-sanchez',        nome: "Hugo Sánchez",        posicoes: ["ATA"],       forca: 86 },
      { id: 'emilio-butragueno',   nome: "Emilio Butragueño",   posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'gheorghe-hagi',       nome: "Gheorghe Hagi",       posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'paco-llorente',       nome: "Paco Llorente",       posicoes: ["PD","ATA"],  forca: 79 },
      { id: 'chuti-villarroya',    nome: "Villarroya",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'jose-luis-aldana',    nome: "Aldana",              posicoes: ["ZAG"],       forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1992,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'abel-resino',         nome: "Abel Resino",         posicoes: ["GOL"],       forca: 82 },
      { id: 'tomas-reñones',       nome: "Tomás Reñones",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'juan-carlos-arteche', nome: "Juan Carlos Arteche", posicoes: ["ZAG"],       forca: 77 },
      { id: 'roberto-solozabal',   nome: "Roberto Solozábal",   posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'toni-muñoz',          nome: "Toni Muñoz",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'bernd-schuster',      nome: "Bernd Schuster",      posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'juan-vizcaino',       nome: "Vizcaíno",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'juan-antonio-pirri',  nome: "Pirri",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'manolo',              nome: "Manolo",              posicoes: ["ATA"],       forca: 82 },
      { id: 'paulo-futre',         nome: "Paulo Futre",         posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'alfredo-santaelena',  nome: "Santaelena",          posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'juan-sabas-atm',      nome: "Sabas",               posicoes: ["ATA"],       forca: 77 },
      { id: 'roberto-fernandez-atm', nome: "Roberto (ATM)",     posicoes: ["MC","MEI"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1992,
    clube: "Valencia",
    jogadores: [
      { id: 'jose-manuel-sempere', nome: "José Manuel Sempere", posicoes: ["GOL"],       forca: 80 },
      { id: 'fernando',            nome: "Fernando Giner",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'ricardo-arias',       nome: "Ricardo Arias",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'nando-valencia',      nome: "Nando",               posicoes: ["LE","LD"],   forca: 77 },
      { id: 'roberto-fernandez',   nome: "Roberto",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'fernando-gomez',      nome: "Fernando Gómez",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'leonardo-enrique',    nome: "Leonardo",            posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'juan-carlos-rodriguez', nome: "Juan Carlos",       posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'luboslav-penev',      nome: "Lyuboslav Penev",     posicoes: ["ATA"],       forca: 83 },
      { id: 'fernando-gimenez',    nome: "Fernando Giménez",    posicoes: ["ATA"],       forca: 77 },
      { id: 'quique-sanchez-flores', nome: "Quique Sánchez Flores", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'francisco-camarasa',  nome: "Camarasa",            posicoes: ["VOL","ZAG"], forca: 77 },
      { id: 'jose-luis-arroyo',    nome: "Arroyo",              posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'javier-subirats',     nome: "Javier Subirats",     posicoes: ["MEI","MD"],  forca: 75 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1992,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'luis-maria-gonzalez-rs', nome: "Luis María González", posicoes: ["GOL"],    forca: 79 },
      { id: 'agustin-gajate',      nome: "Agustín Gajate",      posicoes: ["LD","MD"],   forca: 76 },
      { id: 'jose-mari-gorriz',    nome: "José Mari Górriz",    posicoes: ["ZAG"],       forca: 79 },
      { id: 'inaki-larrañaga',     nome: "Iñaki Larrañaga",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'luis-perez-loren',    nome: "Loren",               posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'imanol-igoa',         nome: "Igoa",                posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'inaki-bengoetxea',    nome: "Bengoetxea",          posicoes: ["MEI","MD"],  forca: 78 },
      { id: 'jose-maria-lasa-rs',  nome: "Lasa",                posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'john-aldridge',       nome: "John Aldridge",       posicoes: ["ATA"],       forca: 83 },
      { id: 'kevin-richardson-rs', nome: "Richardson",          posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'jose-vergara-rs',     nome: "Vergara",            posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'francisco-mujika',    nome: "Mujika",              posicoes: ["MD","PD"],   forca: 76 },
      { id: 'gontzal-billabona',   nome: "Billabona",           posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'inaki-goikoetxea',    nome: "Goikoetxea (RS)",     posicoes: ["LE","ME"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1992,
    clube: "Zaragoza",
    jogadores: [
      { id: 'andoni-cedrun',       nome: "Cedrún",              posicoes: ["GOL"],       forca: 79 },
      { id: 'francisco-solana',    nome: "Solana",              posicoes: ["LD","LE"],   forca: 76 },
      { id: 'esteban-vigo-zar',    nome: "Esteban",             posicoes: ["MD","ME"],   forca: 75 },
      { id: 'pablo-alfaro',        nome: "Pablo Alfaro",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'xavier-aguado',       nome: "Aguado",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'dario-franco',        nome: "Darío Franco",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'gustavo-poyet',       nome: "Poyet",               posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'francisco-gay',       nome: "Gay",                 posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'ioan-sabin-mateut',   nome: "Mateuț",              posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'juan-antonio-higuera', nome: "Higuera",            posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'miguel-pardeza',      nome: "Pardeza",             posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'alberto-belsue',      nome: "Belsué",              posicoes: ["LD","MD"],   forca: 78 },
      { id: 'santiago-aragon',     nome: "Aragón",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'gustavo-julia-zar',   nome: "Julià",               posicoes: ["ATA"],       forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1993 (temporada 1992-93) — o BARCELONA de Cruyff TRICAMPEÃO (58 pts), 13º
  //  título, de novo na última rodada (Real Madrid liderava por 1 pt e perdeu 0-2 no
  //  Tenerife pela 2ª vez seguida!). O Barça bateu o Zaragoza por 1-0 e garantiu o tri.
  //  Top-6: Barcelona (58), Real Madrid (57), Deportivo (54), Valencia (48), Tenerife
  //  (44), Atlético (43). Bebeto (Deportivo) foi artilheiro (29 gols). Ainda SEM Romário
  //  (chegou só em 93-94). O Deportivo de Arsenio Iglesias emergia como potência.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1993,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta',  nome: "Andoni Zubizarreta",  posicoes: ["GOL"],       forca: 84 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 81 },
      { id: 'ronald-koeman',       nome: "Ronald Koeman",       posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'miguel-angel-nadal',  nome: "Miguel Ángel Nadal",  posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'juan-carlos-bcn',     nome: "Juan Carlos (BAR)",   posicoes: ["LE","MD"],   forca: 78 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'eusebio-sacristan',   nome: "Eusebio Sacristán",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 88 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 81 },
      { id: 'jon-andoni-goikoetxea', nome: "Goikoetxea (BAR)",  posicoes: ["MD","PD"],   forca: 79 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1993,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 82 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 78 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'rafael-alkorta',      nome: "Rafael Alkorta",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 85 },
      { id: 'luis-milla',          nome: "Luis Milla",          posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'rafael-martin-vazquez', nome: "Martín Vázquez",    posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'gheorghe-hagi',       nome: "Gheorghe Hagi",       posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'emilio-butragueno',   nome: "Emilio Butragueño",   posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'hugo-sanchez',        nome: "Hugo Sánchez",        posicoes: ["ATA"],       forca: 84 },
      { id: 'ivan-zamorano',       nome: "Iván Zamorano",       posicoes: ["ATA"],       forca: 83 },
      { id: 'paco-llorente',       nome: "Paco Llorente",       posicoes: ["PD","ATA"],  forca: 79 },
      { id: 'chuti-villarroya',    nome: "Villarroya",          posicoes: ["LE","LD"],   forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1993,
    clube: "Deportivo",
    jogadores: [
      { id: 'francisco-liaño',     nome: "Liaño",               posicoes: ["GOL"],       forca: 83 },
      { id: 'aitor-lopez-rekarte-dep', nome: "López Rekarte",   posicoes: ["LD","MD"],   forca: 77 },
      { id: 'fernando-nando-dep',  nome: "Nando (DEP)",         posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 81 },
      { id: 'jose-ramon-alberto-dep', nome: "Ribera",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'genaro-albistegi',    nome: "Albístegi",           posicoes: ["VOL","ZAG"], forca: 76 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'adolfo-aldana',       nome: "Aldana (DEP)",        posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'bebeto',              nome: "Bebeto",              posicoes: ["ATA"],       forca: 86 },
      { id: 'claudio-barragan',    nome: "Claudio",             posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'jose-yosu-mari',      nome: "Yosu",                posicoes: ["ATA"],       forca: 76 },
      { id: 'mariano-hoyas',       nome: "Mariano Hoyas",       posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'juan-manuel-canales', nome: "Canales",             posicoes: ["MD","PD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1993,
    clube: "Valencia",
    jogadores: [
      { id: 'jose-manuel-sempere', nome: "José Manuel Sempere", posicoes: ["GOL"],       forca: 80 },
      { id: 'fernando',            nome: "Fernando Giner",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'ricardo-arias',       nome: "Ricardo Arias",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'nando-valencia',      nome: "Nando",               posicoes: ["LE","LD"],   forca: 77 },
      { id: 'francisco-camarasa',  nome: "Camarasa",            posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'fernando-gomez',      nome: "Fernando Gómez",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'leonardo-enrique',    nome: "Leonardo",            posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'mazinho-oliveira-val', nome: "Mazinho",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'eloy-olaya-val',      nome: "Eloy",                posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'luboslav-penev',      nome: "Lyuboslav Penev",     posicoes: ["ATA"],       forca: 83 },
      { id: 'quique-sanchez-flores', nome: "Quique Sánchez Flores", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'roberto-fernandez',   nome: "Roberto",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'jose-luis-arroyo',    nome: "Arroyo",              posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'javier-subirats',     nome: "Javier Subirats",     posicoes: ["MEI","MD"],  forca: 75 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1993,
    clube: "Tenerife",
    jogadores: [
      { id: 'jose-manuel-ochotorena', nome: "Ochotorena",       posicoes: ["GOL"],       forca: 80 },
      { id: 'antonio-toño-ten',    nome: "Toño",                posicoes: ["LD","MD"],   forca: 76 },
      { id: 'cesar-gomez-ten',     nome: "César Gómez",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'agustin-alvarez-ten', nome: "Chano",               posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'toni-ten',            nome: "Toni",                posicoes: ["LE","LD"],   forca: 76 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'jose-del-solar',      nome: "Del Solar",           posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'quique-estebaranz',   nome: "Quique Estebaranz",   posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'felipe-miñambres',    nome: "Felipe",              posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'juan-antonio-pizzi-ten', nome: "Pizzi",            posicoes: ["ATA"],       forca: 82 },
      { id: 'antonio-dertycia',    nome: "Dertycia",            posicoes: ["ATA"],       forca: 79 },
      { id: 'manolo-tenerife',     nome: "Manolo (TEN)",        posicoes: ["LD","MD"],   forca: 76 },
      { id: 'diego-latorre-ten',   nome: "Latorre",             posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'antonio-mata-ten',    nome: "Mata",                posicoes: ["MC","VOL"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1993,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'abel-resino',         nome: "Abel Resino",         posicoes: ["GOL"],       forca: 81 },
      { id: 'tomas-reñones',       nome: "Tomás Reñones",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'roberto-solozabal',   nome: "Roberto Solozábal",   posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'juan-manuel-lopez',   nome: "López",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'toni-muñoz',          nome: "Toni Muñoz",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'juan-vizcaino',       nome: "Vizcaíno",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'bernd-schuster',      nome: "Bernd Schuster",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'luis-garcia-atm',     nome: "Luis García",         posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'manolo',              nome: "Manolo",              posicoes: ["ATA"],       forca: 81 },
      { id: 'paulo-futre',         nome: "Paulo Futre",         posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'juan-sabas-atm',      nome: "Sabas",               posicoes: ["ATA"],       forca: 77 },
      { id: 'alfredo-santaelena',  nome: "Santaelena",          posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'diego-rivas-atm',     nome: "Diego (ATM)",         posicoes: ["MD","PD"],   forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1994 (temporada 1993-94) — o BARCELONA de Cruyff TETRACAMPEÃO (56 pts), 14º
  //  título, decidido por 1 KICK: na última rodada o Deportivo (também 56 pts) precisava
  //  vencer o Valencia mas empatou 0-0 após Djukić PERDER um pênalti no fim; o Barça goleou
  //  o Sevilla 5-2 e ficou com o tetra no saldo. ROMÁRIO chegou e foi Pichichi (30 gols),
  //  formando com Stoichkov a dupla mais temida da Europa. Top-6: Barcelona (56), Deportivo
  //  (56), Zaragoza (46), Real Madrid (45), Athletic (43), Sevilla (42). Barça vice Champions.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1994,
    clube: "Barcelona",
    jogadores: [
      { id: 'andoni-zubizarreta',  nome: "Andoni Zubizarreta",  posicoes: ["GOL"],       forca: 84 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 81 },
      { id: 'ronald-koeman',       nome: "Ronald Koeman",       posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'miguel-angel-nadal',  nome: "Miguel Ángel Nadal",  posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 80 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 89 },
      { id: 'romario',             nome: "Romário",             posicoes: ["ATA"],       forca: 90 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 80 },
      { id: 'jon-andoni-goikoetxea', nome: "Goikoetxea (BAR)",  posicoes: ["MD","PD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1994,
    clube: "Deportivo",
    jogadores: [
      { id: 'francisco-liaño',     nome: "Liaño",               posicoes: ["GOL"],       forca: 84 },
      { id: 'aitor-lopez-rekarte-dep', nome: "López Rekarte",   posicoes: ["LD","MD"],   forca: 77 },
      { id: 'fernando-nando-dep',  nome: "Nando (DEP)",         posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'jose-ramon-alberto-dep', nome: "Ribera",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'voro-gonzalez',       nome: "Voro",                posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'jose-manuel-manjarin', nome: "Manjarín",          posicoes: ["MEI","MD"],  forca: 79 },
      { id: 'bebeto',              nome: "Bebeto",              posicoes: ["ATA"],       forca: 87 },
      { id: 'claudio-barragan',    nome: "Claudio",             posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'adolfo-aldana',       nome: "Aldana (DEP)",        posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'juan-manuel-canales', nome: "Canales",             posicoes: ["MD","PD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1994,
    clube: "Zaragoza",
    jogadores: [
      { id: 'andoni-cedrun',       nome: "Cedrún",              posicoes: ["GOL"],       forca: 79 },
      { id: 'francisco-solana',    nome: "Solana",              posicoes: ["LD","LE"],   forca: 76 },
      { id: 'pablo-alfaro',        nome: "Pablo Alfaro",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'xavier-aguado',       nome: "Aguado",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'alberto-belsue',      nome: "Belsué",              posicoes: ["LD","MD"],   forca: 78 },
      { id: 'dario-franco',        nome: "Darío Franco",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'gustavo-poyet',       nome: "Poyet",               posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'juan-antonio-higuera', nome: "Higuera",            posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'nayim',               nome: "Nayim",               posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'miguel-pardeza',      nome: "Pardeza",             posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'juan-esnaider',       nome: "Esnáider",            posicoes: ["ATA"],       forca: 81 },
      { id: 'santiago-aragon',     nome: "Aragón",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 78 },
      { id: 'andoni-goikoetxea-zar', nome: "Goikoetxea (ZAR)",  posicoes: ["ZAG","VOL"], forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1994,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 81 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 78 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'rafael-alkorta',      nome: "Rafael Alkorta",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'luis-milla',          nome: "Luis Milla",          posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 84 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'jose-emilio-amavisca', nome: "Amavisca",           posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'ivan-zamorano',       nome: "Iván Zamorano",       posicoes: ["ATA"],       forca: 85 },
      { id: 'emilio-butragueno',   nome: "Emilio Butragueño",   posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'gheorghe-hagi',       nome: "Gheorghe Hagi",       posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'alfonso-perez',       nome: "Alfonso",             posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1994,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'jose-luis-valencia',  nome: "Valencia",            posicoes: ["GOL"],       forca: 78 },
      { id: 'javier-larrainzar-ath', nome: "Larrainzar (ATH)",  posicoes: ["LD","ZAG"],  forca: 76 },
      { id: 'aitor-larrazabal',    nome: "Larrazábal",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'genar-andrinua',      nome: "Andrinúa",            posicoes: ["ZAG"],       forca: 77 },
      { id: 'aitor-karanka',       nome: "Karanka",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'andoni-lakabeg',      nome: "Lakabeg",             posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'ander-garitano-ath',  nome: "Garitano",            posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'aitor-uribarrena',    nome: "Uribarrena",          posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'julen-guerrero',      nome: "Julen Guerrero",      posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'ernesto-valverde-ath', nome: "Valverde",           posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'cuco-ziganda',        nome: "Ziganda",             posicoes: ["ATA"],       forca: 79 },
      { id: 'aitor-urrutia-ath',   nome: "Urrutia",             posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'inaki-eskurza',       nome: "Eskurza",             posicoes: ["MD","PD"],   forca: 76 },
      { id: 'jose-maria-tabuenka', nome: "Tabuenka",            posicoes: ["ZAG","LE"],  forca: 75 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1994,
    clube: "Sevilla",
    jogadores: [
      { id: 'juan-carlos-unzue-sev', nome: "Unzué",             posicoes: ["GOL"],       forca: 79 },
      { id: 'manuel-jimenez-sev',  nome: "Manolo Jiménez",      posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'jose-andrades',       nome: "Andrades",            posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'diego-sevilla',       nome: "Diego",               posicoes: ["LE","MD"],   forca: 76 },
      { id: 'francisco-soler-sev', nome: "Soler",               posicoes: ["LD","MD"],   forca: 76 },
      { id: 'rafa-paz',            nome: "Rafa Paz",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'jose-martagon',       nome: "Martagón",            posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'manuel-prieto-sev',   nome: "Prieto",              posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'davor-suker',         nome: "Davor Šuker",         posicoes: ["ATA"],       forca: 85 },
      { id: 'jose-maria-bango',    nome: "Bango (SEV)",         posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'jose-luis-moya-sev',  nome: "Moya",                posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'ramon-tevenet',       nome: "Tevenet",             posicoes: ["ZAG","VOL"], forca: 76 },
      { id: 'antonio-marcos-sev',  nome: "Marcos (SEV)",        posicoes: ["MD","PD"],   forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1995 (temporada 1994-95) — o REAL MADRID de Jorge VALDANO campeão (55 pts),
  //  26º título, ENCERRANDO o reinado de 4 anos do Barça. Zamorano foi Pichichi (28 gols,
  //  "Iván la Bamba") e surgiu RAÚL aos 17 anos. Laudrup trocou o Barça pelo Real (polêmico)
  //  e Redondo veio do Tenerife. Top-6: Real Madrid (55), Deportivo (51), Betis (46),
  //  Barcelona (46), Espanyol (43), Sevilla (43). ÚLTIMA temporada com 2 pts por vitória.
  //  Entram Real Betis e Espanyol. (Nota: Sevilla/Celta quase rebaixados por dívidas.)
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1995,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 81 },
      { id: 'quique-sanchez-flores', nome: "Quique Sánchez Flores", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 84 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 86 },
      { id: 'rafael-alkorta',      nome: "Rafael Alkorta",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 77 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 83 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'ivan-zamorano',       nome: "Iván Zamorano",       posicoes: ["ATA"],       forca: 86 },
      { id: 'jose-emilio-amavisca', nome: "Amavisca",           posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'alfonso-perez',       nome: "Alfonso",             posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1995,
    clube: "Deportivo",
    jogadores: [
      { id: 'francisco-liaño',     nome: "Liaño",               posicoes: ["GOL"],       forca: 84 },
      { id: 'aitor-lopez-rekarte-dep', nome: "López Rekarte",   posicoes: ["LD","MD"],   forca: 77 },
      { id: 'fernando-nando-dep',  nome: "Nando (DEP)",         posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'voro-gonzalez',       nome: "Voro",                posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'jose-manuel-manjarin', nome: "Manjarín",          posicoes: ["MEI","MD"],  forca: 79 },
      { id: 'bebeto',              nome: "Bebeto",              posicoes: ["ATA"],       forca: 86 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 79 },
      { id: 'adolfo-aldana',       nome: "Aldana (DEP)",        posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'jose-ramon-alberto-dep', nome: "Ribera",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'alfredo-santaelena-dep', nome: "Alfredo (DEP)",    posicoes: ["MC","VOL"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1995,
    clube: "Real Betis",
    jogadores: [
      { id: 'pedro-jaro',          nome: "Jaro",                posicoes: ["GOL"],       forca: 79 },
      { id: 'jaime-quesada',       nome: "Jaime Quesada",       posicoes: ["LD","MD"],   forca: 76 },
      { id: 'josete-betis',        nome: "Josete",              posicoes: ["ZAG"],       forca: 76 },
      { id: 'nenad-vidakovic',     nome: "Vidaković",           posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'juan-merino',         nome: "Merino (BET)",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'jose-ureña',          nome: "Ureña",               posicoes: ["LE","MD"],   forca: 76 },
      { id: 'alexis-trujillo',     nome: "Alexis",              posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'roberto-rios-bet',    nome: "Roberto Ríos",        posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'juan-canas',          nome: "Cañas",               posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'radoslav-stosic',     nome: "Stošić",              posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'juan-sabas-bet',      nome: "Sabas (BET)",         posicoes: ["ATA"],       forca: 78 },
      { id: 'nariman-kasumov',     nome: "Kasumov",             posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'francisco-olias',     nome: "Olías",               posicoes: ["MEI","MD"],  forca: 76 },
      { id: 'alberto-marquez-bet', nome: "Márquez",             posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1995,
    clube: "Barcelona",
    jogadores: [
      { id: 'carles-busquets',     nome: "Carles Busquets",     posicoes: ["GOL"],       forca: 78 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 81 },
      { id: 'ronald-koeman',       nome: "Ronald Koeman",       posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'miguel-angel-nadal',  nome: "Miguel Ángel Nadal",  posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 81 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'gheorghe-hagi',       nome: "Gheorghe Hagi",       posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'romario',             nome: "Romário",             posicoes: ["ATA"],       forca: 89 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'jordi-cruyff',        nome: "Jordi Cruyff",        posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'gica-popescu',        nome: "Popescu",             posicoes: ["VOL","ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1995,
    clube: "Espanyol",
    jogadores: [
      { id: 'antoni-jimenez-esp',  nome: "Toni (ESP)",          posicoes: ["GOL"],       forca: 78 },
      { id: 'jordi-mendiondo',     nome: "Mendiondo",           posicoes: ["LD","MD"],   forca: 76 },
      { id: 'enrique-torres-mestre', nome: "Torres Mestre",     posicoes: ["ZAG"],       forca: 76 },
      { id: 'mauricio-pochettino', nome: "Mauricio Pochettino", posicoes: ["ZAG"],       forca: 79 },
      { id: 'dragan-brnovic',      nome: "Brnović",             posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'roberto-fernandez-esp', nome: "Roberto (ESP)",     posicoes: ["LE","MD"],   forca: 76 },
      { id: 'francisco-arteaga',   nome: "Arteaga",             posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'jordi-lardin',        nome: "Lardín",              posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'luis-cembranos',      nome: "Cembranos",           posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'florin-raducioiu',    nome: "Răducioiu",           posicoes: ["ATA"],       forca: 81 },
      { id: 'raul-espanyol',       nome: "Raúl (ESP)",          posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'oleg-kuznetsov-esp',  nome: "Kuznetsov",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'jose-mari-esp',       nome: "José Mari",           posicoes: ["MD","PD"],   forca: 76 },
      { id: 'francisco-esp',       nome: "Francisco",           posicoes: ["MC","VOL"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1996 (temporada 1995-96) — o ATLÉTICO DE MADRID de Radomir ANTIĆ campeão do
  //  DOBLETE (87 pts), 9º título de liga + Copa del Rey, o 1º liguero em 13 anos. Título
  //  selado na última rodada (2-0 no Albacete, gols de Simeone e Kiko). Pantić (meia
  //  sérvio) e Penev foram decisivos. Pizzi (Tenerife) foi Pichichi (31 gols). Top-6:
  //  Atlético (87), Valencia (83), Barcelona (80), Espanyol (74), Tenerife (72), Real
  //  Madrid (70). Temporada especial de 42 jogos/22 times; 1ª com 3 pts por vitória.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1996,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jose-francisco-molina', nome: "Molina",            posicoes: ["GOL"],       forca: 82 },
      { id: 'toni-muñoz',          nome: "Toni Muñoz",          posicoes: ["LD","LE"],   forca: 78 },
      { id: 'santi-denia',         nome: "Santi Denia",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'roberto-solozabal',   nome: "Roberto Solozábal",   posicoes: ["ZAG"],       forca: 80 },
      { id: 'delfi-geli',          nome: "Geli",                posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'juan-vizcaino',       nome: "Vizcaíno",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'jose-luis-perez-caminero', nome: "Caminero",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'milinko-pantic',      nome: "Pantić",              posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'kiko-narvaez',        nome: "Kiko",                posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'luboslav-penev',      nome: "Lyuboslav Penev",     posicoes: ["ATA"],       forca: 83 },
      { id: 'roberto-fresnedoso',  nome: "Fresnedoso",          posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'daniel-prodan',       nome: "Prodan",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'juan-manuel-biagini', nome: "Biagini",            posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1996,
    clube: "Valencia",
    jogadores: [
      { id: 'andoni-zubizarreta-val', nome: "Zubizarreta",      posicoes: ["GOL"],       forca: 82 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'jose-serrer',         nome: "Serrer",              posicoes: ["ZAG"],       forca: 77 },
      { id: 'fernando',            nome: "Fernando Giner",      posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'francisco-camarasa',  nome: "Camarasa",            posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'fernando-gomez',      nome: "Fernando Gómez",      posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'mazinho-oliveira-val', nome: "Mazinho",            posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'juan-sanchez-val',    nome: "Juan Sánchez",        posicoes: ["ATA"],       forca: 79 },
      { id: 'predrag-mijatovic',   nome: "Predrag Mijatović",   posicoes: ["ATA"],       forca: 85 },
      { id: 'oleg-salenko',        nome: "Salenko",             posicoes: ["ATA"],       forca: 81 },
      { id: 'quique-sanchez-flores-val', nome: "Quique Flores", posicoes: ["LD","VOL"],  forca: 78 },
      { id: 'jose-manzano-val',    nome: "Manzano",             posicoes: ["LE","MD"],   forca: 76 },
      { id: 'poyatos-val',         nome: "Poyatos",             posicoes: ["MEI","MD"],  forca: 76 },
      { id: 'javier-subirats',     nome: "Javier Subirats",     posicoes: ["MEI","MD"],  forca: 75 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1996,
    clube: "Barcelona",
    jogadores: [
      { id: 'carles-busquets',     nome: "Carles Busquets",     posicoes: ["GOL"],       forca: 78 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 80 },
      { id: 'miguel-angel-nadal',  nome: "Miguel Ángel Nadal",  posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'gica-popescu',        nome: "Popescu",             posicoes: ["VOL","ZAG"], forca: 82 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 81 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 84 },
      { id: 'juan-antonio-pizzi-bcn', nome: "Juan Antonio Pizzi", posicoes: ["ATA"],     forca: 82 },
      { id: 'jordi-cruyff',        nome: "Jordi Cruyff",        posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'ivan-de-la-peña',     nome: "Iván de la Peña",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'roger-garcia-bcn',    nome: "Roger",               posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'txiki-begiristain',   nome: "Txiki Begiristain",   posicoes: ["PD","ATA"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1996,
    clube: "Espanyol",
    jogadores: [
      { id: 'antoni-jimenez-esp',  nome: "Toni (ESP)",          posicoes: ["GOL"],       forca: 78 },
      { id: 'mauricio-pochettino', nome: "Mauricio Pochettino", posicoes: ["ZAG"],       forca: 80 },
      { id: 'enrique-torres-mestre', nome: "Torres Mestre",     posicoes: ["ZAG"],       forca: 76 },
      { id: 'roberto-fernandez-esp', nome: "Roberto (ESP)",     posicoes: ["LE","MD"],   forca: 76 },
      { id: 'francisco-arteaga',   nome: "Arteaga",             posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'luis-cembranos',      nome: "Cembranos",           posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'constantin-galca',    nome: "Galca",               posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'jordi-lardin',        nome: "Lardín",              posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'florin-raducioiu',    nome: "Răducioiu",           posicoes: ["ATA"],       forca: 82 },
      { id: 'jose-oscar-flores-esp', nome: "Óscar (ESP)",       posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'sergio-santamaria-esp', nome: "Cristóbal",         posicoes: ["MD","PD"],   forca: 76 },
      { id: 'juan-pauleta-esp',    nome: "Pauleta",             posicoes: ["ATA"],       forca: 78 },
      { id: 'toni-velamazan',      nome: "Velamazán",           posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'jose-mari-esp',       nome: "José Mari",           posicoes: ["MD","PD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1996,
    clube: "Tenerife",
    jogadores: [
      { id: 'jose-manuel-ochotorena', nome: "Ochotorena",       posicoes: ["GOL"],       forca: 79 },
      { id: 'agustin-alvarez-ten', nome: "Chano",               posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'cesar-gomez-ten',     nome: "César Gómez",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'antonio-mata-ten',    nome: "Mata",                posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'jose-del-solar',      nome: "Del Solar",           posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'quique-estebaranz',   nome: "Quique Estebaranz",   posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'juan-antonio-pizzi-ten', nome: "Pizzi",            posicoes: ["ATA"],       forca: 84 },
      { id: 'antonio-dertycia',    nome: "Dertycia",            posicoes: ["ATA"],       forca: 78 },
      { id: 'juanele-tenerife',    nome: "Juanele",             posicoes: ["MEI","PD"],  forca: 78 },
      { id: 'diego-latorre-ten',   nome: "Latorre",             posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'antonito-tenerife',   nome: "Antoñito",            posicoes: ["LE","MD"],   forca: 76 },
      { id: 'aitor-aguirre-ten',   nome: "Aguirre",             posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'felipe-miñambres',    nome: "Felipe",              posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'yuri-ten',            nome: "Yuri",                posicoes: ["MD","PD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1996,
    clube: "Real Madrid",
    jogadores: [
      { id: 'francisco-buyo',      nome: "Francisco Buyo",      posicoes: ["GOL"],       forca: 80 },
      { id: 'chendo',              nome: "Chendo",              posicoes: ["LD","MD"],   forca: 76 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 83 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'rafael-alkorta',      nome: "Rafael Alkorta",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'jose-miguel-gonzalez', nome: "Míchel",             posicoes: ["MEI","MD"],  forca: 82 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'michael-laudrup',     nome: "Michael Laudrup",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'jose-emilio-amavisca', nome: "Amavisca",           posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'ivan-zamorano',       nome: "Iván Zamorano",       posicoes: ["ATA"],       forca: 85 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'luis-milla',          nome: "Luis Milla",          posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'juan-esnaider',       nome: "Esnáider",            posicoes: ["ATA"],       forca: 80 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1997 (temporada 1996-97) — o REAL MADRID de Fabio CAPELLO campeão (92 pts,
  //  RECORDE histórico à época), 27º título, com 5 pts sobre o Barça. Capello foi o 1º
  //  técnico italiano a vencer a La Liga. Chegaram Roberto Carlos, Šuker, Mijatović e
  //  Seedorf. O Barça de Bobby Robson (vice, 90 pts) tinha o RONALDO FENÔMENO (34 gols na
  //  liga, 47 no total!) em seu único ano no clube, com Figo, Luis Enrique e Giovanni.
  //  Top-6: Real Madrid (92), Barcelona (90), Deportivo (77), Betis (77), Atlético (71),
  //  Athletic (64). Última temporada com 22 times. Rivaldo brilhou no Deportivo.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1997,
    clube: "Real Madrid",
    jogadores: [
      { id: 'bodo-illgner',        nome: "Illgner",             posicoes: ["GOL"],       forca: 82 },
      { id: 'christian-panucci',   nome: "Panucci",             posicoes: ["LD","ZAG"],  forca: 82 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 87 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'clarence-seedorf',    nome: "Seedorf",             posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'victor-sanchez-rm',   nome: "Víctor",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'predrag-mijatovic',   nome: "Predrag Mijatović",   posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'davor-suker',         nome: "Davor Šuker",         posicoes: ["ATA"],       forca: 86 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'jose-emilio-amavisca', nome: "Amavisca",           posicoes: ["PE","ATA"],  forca: 79 },
      { id: 'rafael-alkorta',      nome: "Rafael Alkorta",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1997,
    clube: "Barcelona",
    jogadores: [
      { id: 'vitor-baia',          nome: "Vítor Baía",          posicoes: ["GOL"],       forca: 83 },
      { id: 'albert-ferrer',       nome: "Albert Ferrer",       posicoes: ["LD","MD"],   forca: 80 },
      { id: 'miguel-angel-nadal',  nome: "Miguel Ángel Nadal",  posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 81 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'jose-mari-bakero',    nome: "José Mari Bakero",    posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 86 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'giovanni-silva',      nome: "Giovanni",            posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'ronaldo-fenomeno',    nome: "Ronaldo",             posicoes: ["ATA"],       forca: 91 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'ivan-de-la-peña',     nome: "Iván de la Peña",     posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'laurent-blanc',       nome: "Laurent Blanc",       posicoes: ["ZAG"],       forca: 84 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1997,
    clube: "Deportivo",
    jogadores: [
      { id: 'francisco-liaño',     nome: "Liaño",               posicoes: ["GOL"],       forca: 83 },
      { id: 'armando-alvarez-dep', nome: "Armando",             posicoes: ["LD","MD"],   forca: 77 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'fernando-nando-dep',  nome: "Nando (DEP)",         posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'corentin-martins',    nome: "Corentin Martins",    posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'rivaldo',             nome: "Rivaldo",             posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'bebeto',              nome: "Bebeto",              posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-manuel-manjarin', nome: "Manjarín",          posicoes: ["MEI","MD"],  forca: 78 },
      { id: 'alfredo-santaelena-dep', nome: "Alfredo (DEP)",    posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'jose-ramon-alberto-dep', nome: "Ribera",           posicoes: ["ZAG"],       forca: 76 },
      { id: 'aitor-lopez-rekarte-dep', nome: "López Rekarte",   posicoes: ["LD","MD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1997,
    clube: "Real Betis",
    jogadores: [
      { id: 'pedro-jaro',          nome: "Jaro",                posicoes: ["GOL"],       forca: 79 },
      { id: 'juan-canas',          nome: "Cañas",               posicoes: ["LD","MD"],   forca: 77 },
      { id: 'nenad-vidakovic',     nome: "Vidaković",           posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'roberto-solozabal-bet', nome: "Solozábal (BET)",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'robert-jarni-bet',    nome: "Jarni",               posicoes: ["LE","MEI"],  forca: 81 },
      { id: 'alexis-trujillo',     nome: "Alexis",              posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'juan-merino',         nome: "Merino (BET)",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'fernando-fernandez-bet', nome: "Fernando (BET)",   posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'finidi-george',       nome: "Finidi",              posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'alfonso-perez',       nome: "Alfonso",             posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-pier-bet',       nome: "Pier",                posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'roberto-rios-bet',    nome: "Roberto Ríos",        posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'francisco-olias',     nome: "Olías",               posicoes: ["MEI","MD"],  forca: 76 },
      { id: 'ivan-cuellar-bet',    nome: "Cuéllar",             posicoes: ["LD","LE"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1997,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jose-francisco-molina', nome: "Molina",            posicoes: ["GOL"],       forca: 82 },
      { id: 'delfi-geli',          nome: "Geli",                posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'santi-denia',         nome: "Santi Denia",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'roberto-solozabal',   nome: "Roberto Solozábal",   posicoes: ["ZAG"],       forca: 79 },
      { id: 'toni-muñoz',          nome: "Toni Muñoz",          posicoes: ["LD","LE"],   forca: 77 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'radek-bejbl',         nome: "Bejbl",               posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'jose-luis-perez-caminero', nome: "Caminero",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'milinko-pantic',      nome: "Pantić",              posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'juan-esnaider',       nome: "Esnáider",            posicoes: ["ATA"],       forca: 81 },
      { id: 'kiko-narvaez',        nome: "Kiko",                posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'juan-vizcaino',       nome: "Vizcaíno",            posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'daniel-prodan',       nome: "Prodan",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'juan-carlos-aguilera', nome: "Aguilera",           posicoes: ["MD","LD"],   forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1997,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'jose-luis-valencia',  nome: "Valencia",            posicoes: ["GOL"],       forca: 78 },
      { id: 'aitor-larrazabal',    nome: "Larrazábal",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'aitor-karanka',       nome: "Karanka",             posicoes: ["ZAG"],       forca: 79 },
      { id: 'julen-guerrero',      nome: "Julen Guerrero",      posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'cuco-ziganda',        nome: "Ziganda",             posicoes: ["ATA"],       forca: 80 },
      { id: 'ismael-urzaiz',       nome: "Urzaiz",              posicoes: ["ATA"],       forca: 82 },
      { id: 'joseba-etxeberria',   nome: "Etxeberria",          posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'ernesto-valverde-ath', nome: "Valverde",           posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'genar-andrinua',      nome: "Andrinúa",            posicoes: ["ZAG"],       forca: 76 },
      { id: 'javier-larrainzar-ath', nome: "Larrainzar (ATH)",  posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'ander-garitano-ath',  nome: "Garitano",            posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'andoni-lakabeg',      nome: "Lakabeg",             posicoes: ["ZAG"],       forca: 76 },
      { id: 'jose-maria-alkiza',   nome: "Alkiza",              posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'roberto-tiko-ath',    nome: "Tiko",                posicoes: ["LD","MD"],   forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1998 (temporada 1997-98) — o BARCELONA de Louis VAN GAAL campeão (74 pts),
  //  15º título, no 1º ano do técnico holandês. Rivaldo brilhou (19 gols) ao lado de Luis
  //  Enrique, Figo, Giovanni e o jovem KLUIVERT. O Real focou na Champions (venceu a 7ª,
  //  fim de 32 anos de jejum europeu). Vieri (Atlético) foi Pichichi (24 gols) mas o time
  //  ficou em 7º. Top-6: Barcelona (74), Athletic (65), Real Sociedad (63), Real Madrid
  //  (63), Mallorca (60), Celta (60). Entram Mallorca e Celta. Volta a 20 times.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1998,
    clube: "Barcelona",
    jogadores: [
      { id: 'ruud-hesp',           nome: "Ruud Hesp",           posicoes: ["GOL"],       forca: 79 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'miguel-angel-nadal',  nome: "Miguel Ángel Nadal",  posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 81 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'philip-cocu',         nome: "Cocu",                posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 87 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'rivaldo',             nome: "Rivaldo",             posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 84 },
      { id: 'giovanni-silva',      nome: "Giovanni",            posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'sonny-anderson',      nome: "Sonny Anderson",      posicoes: ["ATA"],       forca: 82 },
      { id: 'albert-celades',      nome: "Celades",             posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1998,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'jose-luis-valencia',  nome: "Valencia",            posicoes: ["GOL"],       forca: 78 },
      { id: 'aitor-larrazabal',    nome: "Larrazábal",          posicoes: ["LE","LD"],   forca: 77 },
      { id: 'aitor-karanka',       nome: "Karanka",             posicoes: ["ZAG"],       forca: 79 },
      { id: 'roberto-tiko-ath',    nome: "Tiko",                posicoes: ["LD","MD"],   forca: 76 },
      { id: 'julen-guerrero',      nome: "Julen Guerrero",      posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'cuco-ziganda',        nome: "Ziganda",             posicoes: ["ATA"],       forca: 79 },
      { id: 'ismael-urzaiz',       nome: "Urzaiz",              posicoes: ["ATA"],       forca: 83 },
      { id: 'joseba-etxeberria',   nome: "Etxeberria",          posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'ernesto-valverde-ath', nome: "Valverde",           posicoes: ["ATA","MEI"], forca: 77 },
      { id: 'javier-larrainzar-ath', nome: "Larrainzar (ATH)",  posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'ander-garitano-ath',  nome: "Garitano",            posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'jose-maria-alkiza',   nome: "Alkiza",              posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'carmelo-lacruz',      nome: "Lacruz",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'patxi-ferreira-ath',  nome: "Ferreira (ATH)",      posicoes: ["ZAG"],       forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1998,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'agustin-elduayen',    nome: "Elduayen",            posicoes: ["GOL"],       forca: 78 },
      { id: 'agustin-aranzabal',   nome: "Aranzábal",           posicoes: ["LE","MD"],   forca: 79 },
      { id: 'bjorn-tore-kvarme',   nome: "Kvarme",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'inigo-idiakez',       nome: "Idiákez",             posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'imanol-lete',         nome: "Lete",                posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'gaizka-garitano-rs',  nome: "Garitano (RS)",       posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'javier-de-pedro',     nome: "De Pedro",            posicoes: ["ME","MEI"],  forca: 81 },
      { id: 'oscar-de-paula',      nome: "De Paula",            posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'darko-kovacevic',     nome: "Kovačević",           posicoes: ["ATA"],       forca: 83 },
      { id: 'craig-burley',        nome: "Burley",              posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'meho-kodro-rs',       nome: "Kodro",               posicoes: ["ATA"],       forca: 79 },
      { id: 'luis-perez-rs',       nome: "Luis Pérez",          posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'agustin-fuentes-rs',  nome: "Fuentes (RS)",        posicoes: ["ZAG"],       forca: 76 },
      { id: 'aitor-lopez-rekarte-rs', nome: "López Rekarte (RS)", posicoes: ["LD","MD"], forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1998,
    clube: "Real Madrid",
    jogadores: [
      { id: 'bodo-illgner',        nome: "Illgner",             posicoes: ["GOL"],       forca: 81 },
      { id: 'christian-panucci',   nome: "Panucci",             posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 88 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'clarence-seedorf',    nome: "Seedorf",             posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'christian-karembeu',  nome: "Karembeu",            posicoes: ["MD","VOL"],  forca: 81 },
      { id: 'predrag-mijatovic',   nome: "Predrag Mijatović",   posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'davor-suker',         nome: "Davor Šuker",         posicoes: ["ATA"],       forca: 84 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'fernando-morientes',  nome: "Morientes",           posicoes: ["ATA"],       forca: 83 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'jose-amavisca-rm2',   nome: "Jaime (RM)",          posicoes: ["ZAG"],       forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1998,
    clube: "Mallorca",
    jogadores: [
      { id: 'carlos-roa',          nome: "Roa",                 posicoes: ["GOL"],       forca: 81 },
      { id: 'marcelino-elena',     nome: "Marcelino",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'jose-luis-perez-siljak', nome: "Siljak",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'miquel-soler-mll',    nome: "Soler (MLL)",         posicoes: ["LE","LD"],   forca: 77 },
      { id: 'josu-olaizola-mll',   nome: "Olaizola",            posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'ivan-campo',          nome: "Iván Campo",          posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'lauren-etame',        nome: "Lauren",              posicoes: ["MD","LD"],   forca: 79 },
      { id: 'marcos-vales-mll',    nome: "Marcos",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'ariel-ibagaza',       nome: "Ibagaza",             posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'dani-garcia-mll',     nome: "Dani",                posicoes: ["ATA"],       forca: 81 },
      { id: 'jovan-stankovic',     nome: "Stanković",           posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'juan-manuel-biagini', nome: "Biagini",            posicoes: ["ATA"],       forca: 77 },
      { id: 'vicente-engonga',     nome: "Engonga",             posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'ruben-siviero-mll',   nome: "Siviero",             posicoes: ["MD","PD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1998,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'richard-dutruel',     nome: "Dutruel",             posicoes: ["GOL"],       forca: 79 },
      { id: 'eduardo-berizzo',     nome: "Berizzo",             posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'fernando-caceres',    nome: "Cáceres",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 81 },
      { id: 'goran-djorovic',      nome: "Djorović",            posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'mazinho-celta',       nome: "Mazinho (CEL)",       posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'aleksandr-mostovoi',  nome: "Mostovoi",            posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'valeri-karpin',       nome: "Karpin",              posicoes: ["MD","MEI"],  forca: 82 },
      { id: 'haim-revivo',         nome: "Revivo",              posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'lubomir-moravcik',    nome: "Moravčík",            posicoes: ["MEI","MD"],  forca: 81 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 79 },
      { id: 'juan-sanchez-val',    nome: "Juan Sánchez",        posicoes: ["ATA"],       forca: 79 },
      { id: 'vladislav-radimov',   nome: "Radimov",             posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'tomas-cadavid',       nome: "Tomás",               posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1999 (temporada 1998-99) — o BARCELONA de Van Gaal BICAMPEÃO (79 pts), 16º
  //  título, no ano em que RIVALDO ganhou a Bola de Ouro. Chegaram os irmãos De Boer,
  //  Cocu (consolidado), Zenden. Raúl (Real) foi Pichichi (25 gols). O Real terminou 2º
  //  na liga mas focava na Champions. Top-6: Barcelona (79), Real Madrid (68), Mallorca
  //  (66), Valencia (65), Celta (64), Deportivo (63). Valencia montava o time que seria
  //  vice-campeão europeu com Mendieta, Claudio López e Ilie. Entram Kily González etc.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 1999,
    clube: "Barcelona",
    jogadores: [
      { id: 'ruud-hesp',           nome: "Ruud Hesp",           posicoes: ["GOL"],       forca: 78 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'frank-de-boer',       nome: "Frank de Boer",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'mauricio-pellegrino-bcn', nome: "Pellegrino",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 80 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'philip-cocu',         nome: "Cocu",                posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 88 },
      { id: 'ronald-de-boer',      nome: "Ronald de Boer",      posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'rivaldo',             nome: "Rivaldo",             posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 85 },
      { id: 'boudewijn-zenden',    nome: "Zenden",              posicoes: ["PE","MD"],   forca: 81 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'sonny-anderson',      nome: "Sonny Anderson",      posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1999,
    clube: "Real Madrid",
    jogadores: [
      { id: 'bodo-illgner',        nome: "Illgner",             posicoes: ["GOL"],       forca: 80 },
      { id: 'christian-panucci',   nome: "Panucci",             posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'manolo-sanchis',      nome: "Manolo Sanchís",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 88 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'clarence-seedorf',    nome: "Seedorf",             posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'christian-karembeu',  nome: "Karembeu",            posicoes: ["MD","VOL"],  forca: 80 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'fernando-morientes',  nome: "Morientes",           posicoes: ["ATA"],       forca: 84 },
      { id: 'davor-suker',         nome: "Davor Šuker",         posicoes: ["ATA"],       forca: 83 },
      { id: 'predrag-mijatovic',   nome: "Predrag Mijatović",   posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'savio-bortolini',     nome: "Sávio",               posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1999,
    clube: "Mallorca",
    jogadores: [
      { id: 'carlos-roa',          nome: "Roa",                 posicoes: ["GOL"],       forca: 81 },
      { id: 'marcelino-elena',     nome: "Marcelino",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'ivan-campo',          nome: "Iván Campo",          posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'jose-luis-perez-siljak', nome: "Siljak",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'miquel-soler-mll',    nome: "Soler (MLL)",         posicoes: ["LE","LD"],   forca: 77 },
      { id: 'lauren-etame',        nome: "Lauren",              posicoes: ["MD","LD"],   forca: 80 },
      { id: 'vicente-engonga',     nome: "Engonga",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ariel-ibagaza',       nome: "Ibagaza",             posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'jovan-stankovic',     nome: "Stanković",           posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'dani-garcia-mll',     nome: "Dani",                posicoes: ["ATA"],       forca: 82 },
      { id: 'gabriel-amato',       nome: "Amato",               posicoes: ["ATA"],       forca: 81 },
      { id: 'juan-carlos-valeron', nome: "Valerón",             posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'josu-olaizola-mll',   nome: "Olaizola",            posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'fernando-niño-mll',   nome: "Niño",                posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1999,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 84 },
      { id: 'jocelyn-angloma',     nome: "Angloma",             posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'mauricio-pellegrino-val', nome: "Pellegrino (VAL)", posicoes: ["ZAG"],      forca: 79 },
      { id: 'amedeo-carboni',      nome: "Carboni",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'jose-serrer',         nome: "Serrer",              posicoes: ["ZAG"],       forca: 77 },
      { id: 'gaizka-mendieta',     nome: "Mendieta",            posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'kily-gonzalez',       nome: "Kily González",       posicoes: ["ME","MEI"],  forca: 82 },
      { id: 'adrian-ilie',         nome: "Ilie",                posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'claudio-lopez',       nome: "Claudio López",       posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'stefan-schwarz',      nome: "Schwarz",             posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'javier-farinos',      nome: "Fariñós",             posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'jose-luis-lucarelli', nome: "Lucarelli",           posicoes: ["ATA"],       forca: 78 },
      { id: 'miroslav-djukic-val', nome: "Djukić (VAL)",        posicoes: ["ZAG"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1999,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'richard-dutruel',     nome: "Dutruel",             posicoes: ["GOL"],       forca: 79 },
      { id: 'eduardo-berizzo',     nome: "Berizzo",             posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'fernando-caceres',    nome: "Cáceres",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'goran-djorovic',      nome: "Djorović",            posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'mazinho-celta',       nome: "Mazinho (CEL)",       posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'aleksandr-mostovoi',  nome: "Mostovoi",            posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'valeri-karpin',       nome: "Karpin",              posicoes: ["MD","MEI"],  forca: 82 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'lubomir-moravcik',    nome: "Moravčík",            posicoes: ["MEI","MD"],  forca: 80 },
      { id: 'haim-revivo',         nome: "Revivo",              posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'juan-sanchez-val',    nome: "Juan Sánchez",        posicoes: ["ATA"],       forca: 79 },
      { id: 'lubo-penev-cel',      nome: "Penev (CEL)",         posicoes: ["ATA"],       forca: 79 },
      { id: 'vladislav-radimov',   nome: "Radimov",             posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 1999,
    clube: "Deportivo",
    jogadores: [
      { id: 'jacques-songo-o',     nome: "Songo'o",             posicoes: ["GOL"],       forca: 81 },
      { id: 'enrique-romero-dep',  nome: "Romero",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'fernando-nando-dep',  nome: "Nando (DEP)",         posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'djalminha',           nome: "Djalminha",           posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'corentin-martins',    nome: "Corentin Martins",    posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'roy-makaay',          nome: "Makaay",              posicoes: ["ATA"],       forca: 82 },
      { id: 'jose-manuel-turu-flores', nome: "Turu Flores",     posicoes: ["ATA"],       forca: 80 },
      { id: 'walter-pandiani-dep', nome: "Pandiani",            posicoes: ["ATA"],       forca: 78 },
      { id: 'manuel-pablo-dep',    nome: "Manuel Pablo",        posicoes: ["LD","MD"],   forca: 79 },
      { id: 'noureddine-naybet',   nome: "Naybet",              posicoes: ["ZAG"],       forca: 83 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2000 (temporada 1999-2000) — o DEPORTIVO LA CORUÑA de Javier IRURETA campeão
  //  (69 pts), o 1º título HISTÓRICO e INÉDITO do clube, o "SuperDepor". Makaay artilheiro
  //  do time (22 gols). Quebrou a hegemonia dos grandes. Top-6: Deportivo (69), Barcelona
  //  (64), Valencia (64), Zaragoza (63), Real Madrid (62), Alavés (61). O Atlético foi
  //  surpreendentemente REBAIXADO. Valencia e Real Madrid faziam a final da Champions
  //  (Real campeão, a 8ª). Entra o Alavés (faria a lendária final da UEFA em 2001).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2000,
    clube: "Deportivo",
    jogadores: [
      { id: 'jacques-songo-o',     nome: "Songo'o",             posicoes: ["GOL"],       forca: 81 },
      { id: 'manuel-pablo-dep',    nome: "Manuel Pablo",        posicoes: ["LD","MD"],   forca: 80 },
      { id: 'noureddine-naybet',   nome: "Naybet",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'miroslav-djukic',     nome: "Djukić",              posicoes: ["ZAG"],       forca: 79 },
      { id: 'enrique-romero-dep',  nome: "Romero",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'emerson-moises-costa', nome: "Emerson",            posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'djalminha',           nome: "Djalminha",           posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'roy-makaay',          nome: "Makaay",              posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-manuel-turu-flores', nome: "Turu Flores",     posicoes: ["ATA"],       forca: 80 },
      { id: 'donato',              nome: "Donato",              posicoes: ["VOL","ZAG"], forca: 77 },
      { id: 'walter-pandiani-dep', nome: "Pandiani",            posicoes: ["ATA"],       forca: 79 },
      { id: 'victor-sanchez-dep',  nome: "Víctor (DEP)",        posicoes: ["MD","MEI"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2000,
    clube: "Barcelona",
    jogadores: [
      { id: 'ruud-hesp',           nome: "Ruud Hesp",           posicoes: ["GOL"],       forca: 78 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'frank-de-boer',       nome: "Frank de Boer",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'mauricio-pellegrino-bcn', nome: "Pellegrino",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 79 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'philip-cocu',         nome: "Cocu",                posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 88 },
      { id: 'rivaldo',             nome: "Rivaldo",             posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 85 },
      { id: 'luis-enrique',        nome: "Luis Enrique",        posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'simao-sabrosa',       nome: "Simão",               posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'boudewijn-zenden',    nome: "Zenden",              posicoes: ["PE","MD"],   forca: 80 },
      { id: 'dani-garcia-barcelona', nome: "Dani (BAR)",        posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2000,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 85 },
      { id: 'jocelyn-angloma',     nome: "Angloma",             posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'mauricio-pellegrino-val', nome: "Pellegrino (VAL)", posicoes: ["ZAG"],      forca: 80 },
      { id: 'amedeo-carboni',      nome: "Carboni",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'miroslav-djukic-val', nome: "Djukić (VAL)",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'gaizka-mendieta',     nome: "Mendieta",            posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'kily-gonzalez',       nome: "Kily González",       posicoes: ["ME","MEI"],  forca: 82 },
      { id: 'gerard-lopez-val',    nome: "Gerard",              posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'claudio-lopez',       nome: "Claudio López",       posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'adrian-ilie',         nome: "Ilie",                posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'juan-sanchez-val',    nome: "Juan Sánchez",        posicoes: ["ATA"],       forca: 79 },
      { id: 'javier-farinos',      nome: "Fariñós",             posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'didier-deschamps-val', nome: "Deschamps",          posicoes: ["VOL","MC"],  forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2000,
    clube: "Zaragoza",
    jogadores: [
      { id: 'juan-manuel-juanmi-zar', nome: "Juanmi",          posicoes: ["GOL"],       forca: 79 },
      { id: 'pablo-alfaro',        nome: "Pablo Alfaro",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'teddy-sundgren',      nome: "Sündgren",            posicoes: ["LD","MD"],   forca: 78 },
      { id: 'paco-jemez',          nome: "Paco Jémez",          posicoes: ["ZAG"],       forca: 79 },
      { id: 'xavier-aguado',       nome: "Aguado",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'santiago-aragon',     nome: "Aragón",              posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'roberto-acuña',       nome: "Acuña",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'ander-garitano-zar',  nome: "Garitano (ZAR)",      posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'savo-milosevic',      nome: "Milošević",           posicoes: ["ATA"],       forca: 83 },
      { id: 'juanele-zaragoza',    nome: "Juanele (ZAR)",       posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'yordi-zaragoza',      nome: "Yordi",               posicoes: ["ATA"],       forca: 79 },
      { id: 'jamelli-zaragoza',    nome: "Jamelli",             posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'marcos-vales-zar',    nome: "Marcos Vales",        posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'vladislav-radimov',   nome: "Radimov",             posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2000,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 82 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'ivan-campo',          nome: "Iván Campo",          posicoes: ["ZAG"],       forca: 79 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 88 },
      { id: 'fernando-redondo',    nome: "Fernando Redondo",    posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'clarence-seedorf',    nome: "Seedorf",             posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'steve-mcmanaman',     nome: "McManaman",           posicoes: ["MEI","MD"],  forca: 82 },
      { id: 'fernando-morientes',  nome: "Morientes",           posicoes: ["ATA"],       forca: 85 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'nicolas-anelka',      nome: "Anelka",              posicoes: ["ATA"],       forca: 82 },
      { id: 'savio-bortolini',     nome: "Sávio",               posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'geremi-njitap',       nome: "Geremi",              posicoes: ["MD","VOL"],  forca: 79 },
      { id: 'aitor-karanka',       nome: "Karanka",             posicoes: ["ZAG"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2000,
    clube: "Alavés",
    jogadores: [
      { id: 'martin-herrera-ala',  nome: "Herrera",             posicoes: ["GOL"],       forca: 79 },
      { id: 'cosmin-contra-ala',   nome: "Contra",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'oscar-tellez',        nome: "Téllez",              posicoes: ["ZAG"],       forca: 77 },
      { id: 'dan-eggen',           nome: "Eggen",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'antonio-karmona',     nome: "Karmona",             posicoes: ["LE","MD"],   forca: 77 },
      { id: 'hermes-desio',        nome: "Desio",               posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'delfi-pablo-ala',     nome: "Pablo (ALA)",         posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'javi-moreno-ala',     nome: "Javi Moreno",         posicoes: ["ATA"],       forca: 82 },
      { id: 'meho-kodro-rs',       nome: "Kodro",               posicoes: ["ATA"],       forca: 79 },
      { id: 'julio-salinas',       nome: "Julio Salinas",       posicoes: ["ATA"],       forca: 78 },
      { id: 'ibon-begoña',         nome: "Ibon Begoña",         posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'kike-alaves',         nome: "Kike",                posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'ruben-magno-ala',     nome: "Magno",               posicoes: ["MEI","PE"],  forca: 78 },
      { id: 'josete-alaves',       nome: "Josete (ALA)",        posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2001 (temporada 2000-01) — o REAL MADRID de Vicente del Bosque campeão (80
  //  pts), 28º título, INÍCIO da era dos GALÁCTICOS: FIGO chegou do Barça na transferência
  //  mais polêmica da história (Pérez cumpriu promessa eleitoral). Raúl foi Pichichi (24
  //  gols). Top-6: Real Madrid (80), Deportivo (73), Mallorca (71), Barcelona (63),
  //  Valencia (63), Celta (59). Barça em reconstrução pós-saída de Figo. Valencia rumo à
  //  2ª final de Champions seguida. Entra Villarreal na elite (7º, fora do top-6).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2001,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 84 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'ivan-helguera',       nome: "Helguera",            posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 88 },
      { id: 'claude-makelele',     nome: "Makélélé",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'flavio-conceicao',    nome: "Flávio Conceição",    posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 88 },
      { id: 'steve-mcmanaman',     nome: "McManaman",           posicoes: ["MEI","MD"],  forca: 82 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'fernando-morientes',  nome: "Morientes",           posicoes: ["ATA"],       forca: 85 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'savio-bortolini',     nome: "Sávio",               posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'aitor-karanka',       nome: "Karanka",             posicoes: ["ZAG"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2001,
    clube: "Deportivo",
    jogadores: [
      { id: 'jacques-songo-o',     nome: "Songo'o",             posicoes: ["GOL"],       forca: 81 },
      { id: 'manuel-pablo-dep',    nome: "Manuel Pablo",        posicoes: ["LD","MD"],   forca: 80 },
      { id: 'noureddine-naybet',   nome: "Naybet",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'cesar-martin-dep',    nome: "César",               posicoes: ["ZAG"],       forca: 80 },
      { id: 'enrique-romero-dep',  nome: "Romero",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'aldo-duscher',        nome: "Duscher",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'sergio-gonzalez-dep', nome: "Sergio",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'djalminha',           nome: "Djalminha",           posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'roy-makaay',          nome: "Makaay",              posicoes: ["ATA"],       forca: 85 },
      { id: 'diego-tristan',       nome: "Diego Tristán",       posicoes: ["ATA"],       forca: 84 },
      { id: 'victor-sanchez-dep',  nome: "Víctor (DEP)",        posicoes: ["MD","MEI"],  forca: 79 },
      { id: 'walter-pandiani-dep', nome: "Pandiani",            posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2001,
    clube: "Mallorca",
    jogadores: [
      { id: 'leo-franco',          nome: "Leo Franco",          posicoes: ["GOL"],       forca: 81 },
      { id: 'miquel-soler-mll',    nome: "Soler (MLL)",         posicoes: ["LE","LD"],   forca: 76 },
      { id: 'ivan-campo',          nome: "Iván Campo",          posicoes: ["ZAG"],       forca: 79 },
      { id: 'marcelino-elena',     nome: "Marcelino",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'francisco-soler-poms', nome: "Poms",               posicoes: ["LD","MD"],   forca: 77 },
      { id: 'vicente-engonga',     nome: "Engonga",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ariel-ibagaza',       nome: "Ibagaza",             posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'marcos-vales-mll',    nome: "Marcos",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'lauren-etame',        nome: "Lauren",              posicoes: ["MD","LD"],   forca: 81 },
      { id: 'samuel-etoo',         nome: "Eto'o",               posicoes: ["ATA"],       forca: 82 },
      { id: 'jovan-stankovic',     nome: "Stanković",           posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'carlos-roa',          nome: "Roa",                 posicoes: ["GOL"],       forca: 79 },
      { id: 'novo-mallorca',       nome: "Novo",                posicoes: ["ATA","PD"],  forca: 78 },
      { id: 'albert-luque-mll2',   nome: "Luque",               posicoes: ["ATA","PE"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2001,
    clube: "Barcelona",
    jogadores: [
      { id: 'pepe-reina',          nome: "Reina",               posicoes: ["GOL"],       forca: 80 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'frank-de-boer',       nome: "Frank de Boer",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 82 },
      { id: 'sergi-barjuan',       nome: "Sergi",               posicoes: ["LE","MD"],   forca: 78 },
      { id: 'josep-guardiola',     nome: "Pep Guardiola",       posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'philip-cocu',         nome: "Cocu",                posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'marc-overmars',       nome: "Overmars",            posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'rivaldo',             nome: "Rivaldo",             posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 85 },
      { id: 'simao-sabrosa',       nome: "Simão",               posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'gerard-lopez-val',    nome: "Gerard",              posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'emmanuel-petit',      nome: "Petit",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'dani-garcia-barcelona', nome: "Dani (BAR)",        posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2001,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 85 },
      { id: 'jocelyn-angloma',     nome: "Angloma",             posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'mauricio-pellegrino-val', nome: "Pellegrino (VAL)", posicoes: ["ZAG"],      forca: 80 },
      { id: 'amedeo-carboni',      nome: "Carboni",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'gaizka-mendieta',     nome: "Mendieta",            posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'kily-gonzalez',       nome: "Kily González",       posicoes: ["ME","MEI"],  forca: 82 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 82 },
      { id: 'john-carew',          nome: "Carew",               posicoes: ["ATA"],       forca: 82 },
      { id: 'juan-sanchez-val',    nome: "Juan Sánchez",        posicoes: ["ATA"],       forca: 79 },
      { id: 'zlatko-zahovic',      nome: "Zahovič",             posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE","ME"],   forca: 79 },
      { id: 'francisco-rufete',    nome: "Rufete",              posicoes: ["PD","MEI"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2001,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'pablo-cavallero',     nome: "Cavallero",           posicoes: ["GOL"],       forca: 80 },
      { id: 'eduardo-berizzo',     nome: "Berizzo",             posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'fernando-caceres',    nome: "Cáceres",             posicoes: ["ZAG"],       forca: 77 },
      { id: 'juan-manuel-vazquez-cel', nome: "Juanfran",        posicoes: ["LD","MD"],   forca: 78 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'mazinho-celta',       nome: "Mazinho (CEL)",       posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'aleksandr-mostovoi',  nome: "Mostovoi",            posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'valeri-karpin',       nome: "Karpin",              posicoes: ["MD","MEI"],  forca: 81 },
      { id: 'benni-mccarthy',      nome: "McCarthy",            posicoes: ["ATA"],       forca: 81 },
      { id: 'catanha-celta',       nome: "Catanha",             posicoes: ["ATA"],       forca: 80 },
      { id: 'claude-makelele-cel', nome: "Makélélé (CEL)",      posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'haim-revivo',         nome: "Revivo",              posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'jesuli-celta',        nome: "Jesuli",              posicoes: ["PD","ATA"],  forca: 77 },
      { id: 'vagner-celta',        nome: "Vagner",              posicoes: ["ZAG","LD"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2002 (temporada 2001-02) — o VALENCIA de Rafa BENÍTEZ campeão (75 pts), 5º
  //  título, o 1º em 31 anos, quebrando a hegemonia Madrid-Barça com a MELHOR DEFESA (só
  //  27 gols sofridos). Diego Tristán (Depor) foi Pichichi (21 gols). ZIDANE chegou ao
  //  Real por recorde mundial (€77,5M) e Saviola ao Barça. Top-6: Valencia (75), Deportivo
  //  (68), Real Madrid (66), Barcelona (64), Celta (60), Betis (59). Real venceu a 9ª
  //  Champions (gol de Zidane em Glasgow) mas só foi 3º na liga. Mendieta saiu p/ Lazio.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2002,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 85 },
      { id: 'jocelyn-angloma',     nome: "Angloma",             posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'mauricio-pellegrino-val', nome: "Pellegrino (VAL)", posicoes: ["ZAG"],      forca: 80 },
      { id: 'amedeo-carboni',      nome: "Carboni",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE","ME"],   forca: 79 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'francisco-rufete',    nome: "Rufete",              posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 83 },
      { id: 'pablo-aimar',         nome: "Aimar",               posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'john-carew',          nome: "Carew",               posicoes: ["ATA"],       forca: 82 },
      { id: 'mista-valencia',      nome: "Mista",               posicoes: ["ATA"],       forca: 81 },
      { id: 'kily-gonzalez',       nome: "Kily González",       posicoes: ["ME","MEI"],  forca: 81 },
      { id: 'salva-ballesta',      nome: "Salva",               posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2002,
    clube: "Deportivo",
    jogadores: [
      { id: 'jacques-songo-o',     nome: "Songo'o",             posicoes: ["GOL"],       forca: 80 },
      { id: 'manuel-pablo-dep',    nome: "Manuel Pablo",        posicoes: ["LD","MD"],   forca: 80 },
      { id: 'noureddine-naybet',   nome: "Naybet",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'cesar-martin-dep',    nome: "César",               posicoes: ["ZAG"],       forca: 80 },
      { id: 'enrique-romero-dep',  nome: "Romero",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'aldo-duscher',        nome: "Duscher",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'sergio-gonzalez-dep', nome: "Sergio",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'juan-carlos-valeron', nome: "Valerón",             posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'djalminha',           nome: "Djalminha",           posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'roy-makaay',          nome: "Makaay",              posicoes: ["ATA"],       forca: 85 },
      { id: 'diego-tristan',       nome: "Diego Tristán",       posicoes: ["ATA"],       forca: 85 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'victor-sanchez-dep',  nome: "Víctor (DEP)",        posicoes: ["MD","MEI"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2002,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 85 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'ivan-helguera',       nome: "Helguera",            posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 87 },
      { id: 'claude-makelele',     nome: "Makélélé",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'zinedine-zidane',     nome: "Zidane",              posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 88 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 88 },
      { id: 'fernando-morientes',  nome: "Morientes",           posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'steve-mcmanaman',     nome: "McManaman",           posicoes: ["MEI","MD"],  forca: 81 },
      { id: 'flavio-conceicao',    nome: "Flávio Conceição",    posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'santiago-solari',     nome: "Solari",              posicoes: ["PE","MEI"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2002,
    clube: "Barcelona",
    jogadores: [
      { id: 'roberto-bonano',      nome: "Bonano",              posicoes: ["GOL"],       forca: 79 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'frank-de-boer',       nome: "Frank de Boer",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'philip-cocu',         nome: "Cocu",                posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'gabri-garcia',        nome: "Gabri",               posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'marc-overmars',       nome: "Overmars",            posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'rivaldo',             nome: "Rivaldo",             posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 85 },
      { id: 'javier-saviola',      nome: "Saviola",             posicoes: ["ATA"],       forca: 83 },
      { id: 'philippe-christanval', nome: "Christanval",        posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'geovanni-deiberson',  nome: "Geovanni",            posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'fabio-rochemback',    nome: "Rochemback",          posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2002,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'pablo-cavallero',     nome: "Cavallero",           posicoes: ["GOL"],       forca: 80 },
      { id: 'eduardo-berizzo',     nome: "Berizzo",             posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'fernando-caceres',    nome: "Cáceres",             posicoes: ["ZAG"],       forca: 77 },
      { id: 'juan-manuel-vazquez-cel', nome: "Juanfran",        posicoes: ["LD","MD"],   forca: 78 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'doriva-celta',        nome: "Doriva",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'aleksandr-mostovoi',  nome: "Mostovoi",            posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'valeri-karpin',       nome: "Karpin",              posicoes: ["MD","MEI"],  forca: 81 },
      { id: 'benni-mccarthy',      nome: "McCarthy",            posicoes: ["ATA"],       forca: 81 },
      { id: 'catanha-celta',       nome: "Catanha",             posicoes: ["ATA"],       forca: 80 },
      { id: 'jesuli-celta',        nome: "Jesuli",              posicoes: ["PD","ATA"],  forca: 77 },
      { id: 'vagner-celta',        nome: "Vagner",              posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'jorge-otero-cel',     nome: "Otero",               posicoes: ["LE","MD"],   forca: 77 },
      { id: 'peter-luccin',        nome: "Luccin",              posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2002,
    clube: "Real Betis",
    jogadores: [
      { id: 'antonio-prats-bet',   nome: "Toni Prats",          posicoes: ["GOL"],       forca: 78 },
      { id: 'juanito-gutierrez-bet', nome: "Juanito",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'david-rivas-bet',     nome: "Rivas (BET)",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'nano-betis',          nome: "Nano",                posicoes: ["LD","MD"],   forca: 78 },
      { id: 'juan-jose-canas-bet', nome: "Cañas (BET)",         posicoes: ["LE","MD"],   forca: 77 },
      { id: 'joaquin-sanchez',     nome: "Joaquín (BET)",       posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'benjamin-zarandona',  nome: "Zarandona",           posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'alfonso-perez',       nome: "Alfonso",             posicoes: ["ATA"],       forca: 81 },
      { id: 'denilson-betis',      nome: "Denílson",            posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'fernando-fernandez-bet2', nome: "Fernando F. (BET)", posicoes: ["MC","VOL"], forca: 78 },
      { id: 'ricardo-oliveira-bet', nome: "Ricardo Oliveira",   posicoes: ["ATA"],       forca: 80 },
      { id: 'juan-merino',         nome: "Merino (BET)",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'assuncao-betis',      nome: "Assunção",            posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'capi-betis',          nome: "Capi",                posicoes: ["MEI","ME"],  forca: 77 }
    ]
  }

];
