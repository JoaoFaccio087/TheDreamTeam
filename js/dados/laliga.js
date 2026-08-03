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
      { id: 'aitor-begiristain-rs', nome: "Vergara",            posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'jose-mari-mentxaka',  nome: "Mentxaka",            posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'francisco-mujika',    nome: "Mujika",              posicoes: ["MD","PD"],   forca: 76 },
      { id: 'gontzal-billabona',   nome: "Billabona",           posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'inaki-goikoetxea',    nome: "Goikoetxea",          posicoes: ["LE","ME"],   forca: 76 }
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
      { id: 'jose-luis-ziganda',   nome: "Ziganda",             posicoes: ["ATA","MEI"], forca: 79 },
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
      { id: 'luis-enrique-sporting', nome: "Luis Enrique",      posicoes: ["MEI","ATA"], forca: 81 },
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
  }

];
