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
      { id: 'francisco-carvajal',  nome: "Carvajal (DEP)",            posicoes: ["MD","PD"],   forca: 76 },
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
      { id: 'joaquin-alonso',      nome: "Joaquín (SPO)",             posicoes: ["MC","VOL"],  forca: 78 },
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
      { id: 'juan-manuel-canales', nome: "Canales (DEP)",             posicoes: ["MD","PD"],   forca: 76 }
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
      { id: 'juan-manuel-canales', nome: "Canales (DEP)",             posicoes: ["MD","PD"],   forca: 76 }
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
      { id: 'francisco-soler-sev', nome: "Soler (SEV)",               posicoes: ["LD","MD"],   forca: 76 },
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
      { id: 'alfredo-santaelena-dep', nome: "Alfredo",    posicoes: ["MC","VOL"],  forca: 76 }
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
      { id: 'antonito-tenerife',   nome: "Antoñito (TEN)",      posicoes: ["LE","MD"],   forca: 76 },
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
      { id: 'alfredo-santaelena-dep', nome: "Alfredo",    posicoes: ["ZAG","VOL"], forca: 77 },
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
      { id: 'roberto-solozabal-bet', nome: "Solozábal",   posicoes: ["ZAG"],       forca: 79 },
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
      { id: 'patxi-ferreira-ath',  nome: "Ferreira",      posicoes: ["ZAG"],       forca: 76 }
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
      { id: 'jose-amavisca-rm2',   nome: "Jaime",          posicoes: ["ZAG"],       forca: 77 }
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
      { id: 'lubo-penev-cel',      nome: "Penev",         posicoes: ["ATA"],       forca: 79 },
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
      { id: 'hugo-viana-val',      nome: "Hugo Viana",          posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'benjamin-zarandona',  nome: "Zarandona",           posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'alfonso-perez',       nome: "Alfonso",             posicoes: ["ATA"],       forca: 81 },
      { id: 'denilson-betis',      nome: "Denílson",            posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'fernando-fernandez-bet2', nome: "Fernando F. (BET)", posicoes: ["MC","VOL"], forca: 78 },
      { id: 'ricardo-oliveira-bet', nome: "Ricardo Oliveira",   posicoes: ["ATA"],       forca: 80 },
      { id: 'juan-merino',         nome: "Merino (BET)",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'assuncao-betis',      nome: "Assunção",            posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'capi-betis',          nome: "Capi",                posicoes: ["MEI","ME"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2003 (temporada 2002-03) — o REAL MADRID de Del Bosque campeão (78 pts), 29º
  //  título, AUGE dos GALÁCTICOS: chegou o RONALDO FENÔMENO formando ataque estelar com
  //  Zidane, Figo, Raúl. A Real Sociedad de Denoueix fez campanha histórica (vice, quase
  //  campeã, com Xabi Alonso, Nihat 23 gols, Kovačević). Makaay Pichichi (29 gols). Top-6:
  //  Real Madrid (78), Real Sociedad, Deportivo, Celta, Valencia, Barcelona. Beckham
  //  chegaria no verão seguinte. Foi o último título antes da "seca" de 3 anos do Real.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2003,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 86 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'ivan-helguera',       nome: "Helguera",            posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'fernando-hierro',     nome: "Fernando Hierro",     posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 87 },
      { id: 'claude-makelele',     nome: "Makélélé",            posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'zinedine-zidane',     nome: "Zidane",              posicoes: ["MEI","MC"],  forca: 92 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 87 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'ronaldo-fenomeno',    nome: "Ronaldo",             posicoes: ["ATA"],       forca: 91 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'fernando-morientes',  nome: "Morientes",           posicoes: ["ATA"],       forca: 83 },
      { id: 'santiago-solari',     nome: "Solari",              posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'flavio-conceicao',    nome: "Flávio Conceição",    posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2003,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'sander-westerveld',   nome: "Westerveld",          posicoes: ["GOL"],       forca: 80 },
      { id: 'agustin-aranzabal',   nome: "Aranzábal",           posicoes: ["LE","MD"],   forca: 79 },
      { id: 'bjorn-tore-kvarme',   nome: "Kvarme",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'aitor-lopez-rekarte-rs', nome: "López Rekarte (RS)", posicoes: ["LD","MD"], forca: 78 },
      { id: 'gabriel-schurrer',    nome: "Schürrer",            posicoes: ["ZAG"],       forca: 78 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mikel-aramburu',      nome: "Aramburu",            posicoes: ["MD","MEI"],  forca: 78 },
      { id: 'javier-de-pedro',     nome: "De Pedro",            posicoes: ["ME","MEI"],  forca: 81 },
      { id: 'valeri-karpin-rs',    nome: "Karpin (RS)",         posicoes: ["MD","MEI"],  forca: 80 },
      { id: 'darko-kovacevic',     nome: "Kovačević",           posicoes: ["ATA"],       forca: 84 },
      { id: 'nihat-kahveci',       nome: "Nihat",               posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'sergio-boris-rs',     nome: "Boris",               posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'igor-jauregi-rs',     nome: "Jauregui",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'francisco-alberto-rs', nome: "Alberto",            posicoes: ["MC","VOL"],  forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2003,
    clube: "Deportivo",
    jogadores: [
      { id: 'jose-molina-dep',     nome: "Molina (DEP)",        posicoes: ["GOL"],       forca: 80 },
      { id: 'manuel-pablo-dep',    nome: "Manuel Pablo",        posicoes: ["LD","MD"],   forca: 80 },
      { id: 'noureddine-naybet',   nome: "Naybet",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'cesar-martin-dep',    nome: "César",               posicoes: ["ZAG"],       forca: 80 },
      { id: 'enrique-romero-dep',  nome: "Romero",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'aldo-duscher',        nome: "Duscher",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'sergio-gonzalez-dep', nome: "Sergio",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'juan-carlos-valeron', nome: "Valerón",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'roy-makaay',          nome: "Makaay",              posicoes: ["ATA"],       forca: 86 },
      { id: 'diego-tristan',       nome: "Diego Tristán",       posicoes: ["ATA"],       forca: 84 },
      { id: 'victor-sanchez-dep',  nome: "Víctor (DEP)",        posicoes: ["MD","MEI"],  forca: 79 },
      { id: 'fran-gonzalez',       nome: "Fran",                posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'albert-luque-mll2',   nome: "Luque",               posicoes: ["ATA","PE"],  forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2003,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'pablo-cavallero',     nome: "Cavallero",           posicoes: ["GOL"],       forca: 81 },
      { id: 'eduardo-berizzo',     nome: "Berizzo",             posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'francisco-vidal-cel', nome: "Vidal",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'juan-manuel-vazquez-cel', nome: "Juanfran",        posicoes: ["LD","MD"],   forca: 78 },
      { id: 'sylvinho-celta',      nome: "Sylvinho",            posicoes: ["LE","MD"],   forca: 80 },
      { id: 'aleksandr-mostovoi',  nome: "Mostovoi",            posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'valeri-karpin',       nome: "Karpin",              posicoes: ["MD","MEI"],  forca: 80 },
      { id: 'peter-luccin',        nome: "Luccin",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'jesuli-celta',        nome: "Jesuli",              posicoes: ["PD","ATA"],  forca: 77 },
      { id: 'catanha-celta',       nome: "Catanha",             posicoes: ["ATA"],       forca: 80 },
      { id: 'benni-mccarthy',      nome: "McCarthy",            posicoes: ["ATA"],       forca: 81 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 79 },
      { id: 'jose-ignacio-doreste', nome: "Edu",                posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'vagner-celta',        nome: "Vagner",              posicoes: ["ZAG","LD"],  forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2003,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 85 },
      { id: 'curro-torres',        nome: "Curro Torres",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'roberto-ayala',       nome: "Ayala",               posicoes: ["ZAG"],       forca: 85 },
      { id: 'amedeo-carboni',      nome: "Carboni",             posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE","ME"],   forca: 79 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 83 },
      { id: 'pablo-aimar',         nome: "Aimar",               posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'mista-valencia',      nome: "Mista",               posicoes: ["ATA"],       forca: 82 },
      { id: 'john-carew',          nome: "Carew",               posicoes: ["ATA"],       forca: 81 },
      { id: 'francisco-rufete',    nome: "Rufete",              posicoes: ["PD","MEI"],  forca: 78 },
      { id: 'miguel-angel-angulo', nome: "Angulo",              posicoes: ["PD","ATA"],  forca: 79 },
      { id: 'carlos-marchena',     nome: "Marchena",            posicoes: ["ZAG","VOL"], forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2003,
    clube: "Barcelona",
    jogadores: [
      { id: 'roberto-bonano',      nome: "Bonano",              posicoes: ["GOL"],       forca: 78 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 84 },
      { id: 'frank-de-boer',       nome: "Frank de Boer",       posicoes: ["ZAG"],       forca: 81 },
      { id: 'philip-cocu',         nome: "Cocu",                posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'gaizka-mendieta-bcn', nome: "Mendieta (BAR)",      posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'marc-overmars',       nome: "Overmars",            posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'juan-roman-riquelme', nome: "Riquelme",            posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 84 },
      { id: 'javier-saviola',      nome: "Saviola",             posicoes: ["ATA"],       forca: 83 },
      { id: 'thiago-motta-bcn',    nome: "Thiago Motta",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'gabri-garcia',        nome: "Gabri",               posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'fabio-rochemback',    nome: "Rochemback",          posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2004 (temporada 2003-04) — o VALENCIA de Rafa BENÍTEZ BICAMPEÃO (77 pts), 6º
  //  título, na temporada da DOBRADINHA histórica (La Liga + Copa da UEFA). Benítez saiu
  //  depois para o Liverpool. Mista foi artilheiro do time (19 gols liga). Ronaldo (Real)
  //  foi Pichichi (24 gols). Beckham chegou ao Real (Galácticos + midas) mas o time caiu no
  //  fim e ficou só em 4º, começando a "seca". Top-6: Valencia (77), Barcelona (72),
  //  Deportivo (71), Real Madrid (70), Athletic (56), Sevilla (55). Ronaldinho estreou!
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2004,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 85 },
      { id: 'curro-torres',        nome: "Curro Torres",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'roberto-ayala',       nome: "Ayala",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'carlos-marchena',     nome: "Marchena",            posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'amedeo-carboni',      nome: "Carboni",             posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'fabio-aurelio',       nome: "Fábio Aurélio",       posicoes: ["LE","ME"],   forca: 80 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 84 },
      { id: 'pablo-aimar',         nome: "Aimar",               posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'mista-valencia',      nome: "Mista",               posicoes: ["ATA"],       forca: 83 },
      { id: 'francisco-rufete',    nome: "Rufete",              posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'miguel-angel-angulo', nome: "Angulo",              posicoes: ["PD","ATA"],  forca: 79 },
      { id: 'mohamed-sissoko',     nome: "Sissoko",             posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2004,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 82 },
      { id: 'michael-reiziger',    nome: "Reiziger",            posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'rafael-marquez',      nome: "Rafa Márquez",        posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'gio-van-bronckhorst', nome: "Van Bronckhorst",     posicoes: ["LE","VOL"],  forca: 81 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'thiago-motta-bcn',    nome: "Thiago Motta",        posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'gerard-lopez-val',    nome: "Gerard",              posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'ronaldinho-gaucho',   nome: "Ronaldinho",          posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'patrick-kluivert',    nome: "Kluivert",            posicoes: ["ATA"],       forca: 83 },
      { id: 'javier-saviola',      nome: "Saviola",             posicoes: ["ATA"],       forca: 82 },
      { id: 'luis-garcia-bcn',     nome: "Luis García (BAR)",   posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'gabri-garcia',        nome: "Gabri",               posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'oleguer-presas',      nome: "Oleguer",             posicoes: ["LD","ZAG"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2004,
    clube: "Deportivo",
    jogadores: [
      { id: 'jose-molina-dep',     nome: "Molina (DEP)",        posicoes: ["GOL"],       forca: 80 },
      { id: 'manuel-pablo-dep',    nome: "Manuel Pablo",        posicoes: ["LD","MD"],   forca: 80 },
      { id: 'noureddine-naybet',   nome: "Naybet",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'jorge-andrade-dep',   nome: "Jorge Andrade",       posicoes: ["ZAG"],       forca: 81 },
      { id: 'enrique-romero-dep',  nome: "Romero",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'mauro-silva',         nome: "Mauro Silva",         posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'aldo-duscher',        nome: "Duscher",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'sergio-gonzalez-dep', nome: "Sergio",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'juan-carlos-valeron', nome: "Valerón",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'albert-luque-mll2',   nome: "Luque",               posicoes: ["ATA","PE"],  forca: 81 },
      { id: 'diego-tristan',       nome: "Diego Tristán",       posicoes: ["ATA"],       forca: 83 },
      { id: 'walter-pandiani-dep', nome: "Pandiani",            posicoes: ["ATA"],       forca: 79 },
      { id: 'victor-sanchez-dep',  nome: "Víctor (DEP)",        posicoes: ["MD","MEI"],  forca: 79 },
      { id: 'lionel-scaloni-dep',  nome: "Scaloni",             posicoes: ["LD","MD"],   forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2004,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 86 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 81 },
      { id: 'ivan-helguera',       nome: "Helguera",            posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'raul-bravo',          nome: "Raúl Bravo",          posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 86 },
      { id: 'david-beckham',       nome: "Beckham",             posicoes: ["MD","MC"],   forca: 86 },
      { id: 'zinedine-zidane',     nome: "Zidane",              posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 86 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'ronaldo-fenomeno',    nome: "Ronaldo",             posicoes: ["ATA"],       forca: 90 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'santiago-solari',     nome: "Solari",              posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'francisco-pavon-rm',  nome: "Pavón",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'borja-fernandez-rm',  nome: "Borja",               posicoes: ["MC","VOL"],  forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2004,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'inaki-lafuente',      nome: "Lafuente",            posicoes: ["GOL"],       forca: 78 },
      { id: 'aitor-lopez-rekarte-ath', nome: "López Rekarte (ATH)", posicoes: ["LD","MD"], forca: 77 },
      { id: 'carlos-gurpegui',     nome: "Gurpegui",            posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'aitor-ocio',          nome: "Aitor Ocio",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'josu-sarriegi',       nome: "Sarriegi",            posicoes: ["ZAG"],       forca: 77 },
      { id: 'joseba-etxeberria',   nome: "Etxeberria",          posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'julen-guerrero',      nome: "Julen Guerrero",      posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'francisco-yeste',     nome: "Yeste",               posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'ismael-urzaiz',       nome: "Urzaiz",              posicoes: ["ATA"],       forca: 81 },
      { id: 'santiago-ezquerro',   nome: "Ezquerro",            posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'pablo-orbaiz',        nome: "Orbaiz",              posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'inigo-velez',         nome: "Vélez",               posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'asier-del-horno',     nome: "Del Horno",           posicoes: ["LE","MD"],   forca: 80 },
      { id: 'fran-larrainzar-ath', nome: "Fran Larrainzar",     posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2004,
    clube: "Sevilla",
    jogadores: [
      { id: 'esteban-suarez-sev', nome: "Esteban (SEV)",       posicoes: ["GOL"],       forca: 79 },
      { id: 'david-castedo',      nome: "David Castedo",        posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'javi-navarro',       nome: "Javi Navarro",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'pablo-alfaro',      nome: "Pablo Alfaro",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'daniel-alves',       nome: "Daniel Alves",         posicoes: ["LD","MD"],   forca: 80 },
      { id: 'jose-luis-marti',    nome: "Martí",               posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'francisco-casquero', nome: "Casquero",             posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'gonzalo-javier-torrado', nome: "Torrado",          posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'julio-baptista-sev', nome: "Júlio Baptista",       posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'jose-antonio-reyes', nome: "Reyes",                posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'dario-silva-sev',    nome: "Darío Silva",          posicoes: ["ATA"],       forca: 79 },
      { id: 'francisco-gallardo-sev', nome: "Gallardo",         posicoes: ["ATA"],       forca: 78 },
      { id: 'jesus-navas',        nome: "Jesús Navas",          posicoes: ["PD","MD"],   forca: 79 },
      { id: 'antonito-sevilla',   nome: "Antoñito",             posicoes: ["LD","MD"],   forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2005 (temporada 2004-05) — o BARCELONA de Frank RIJKAARD campeão (84 pts), 17º
  //  título, encerrando 6 anos de jejum e inaugurando a era mágica de RONALDINHO e ETO'O.
  //  Chegou Deco (do Porto campeão europeu). Eto'o e Forlán (Villarreal) empataram como
  //  Pichichi (25 gols). Top-6: Barcelona (84), Real Madrid (80), Villarreal (65), Betis
  //  (62), Espanyol (61), Sevilla (60). Entra o Villarreal, o "submarino amarelo" de
  //  Riquelme e Forlán. Real ainda com Galácticos (Owen chegou) mas 2º, seguia na seca.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2005,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 83 },
      { id: 'juliano-belletti',    nome: "Belletti",            posicoes: ["LD","MD"],   forca: 81 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'rafael-marquez',      nome: "Rafa Márquez",        posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'gio-van-bronckhorst', nome: "Van Bronckhorst",     posicoes: ["LE","VOL"],  forca: 81 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'deco-souza',          nome: "Deco",                posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'edmilson-gomes',      nome: "Edmílson",            posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'ludovic-giuly',       nome: "Giuly",               posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'ronaldinho-gaucho',   nome: "Ronaldinho",          posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'samuel-etoo',         nome: "Eto'o",               posicoes: ["ATA"],       forca: 88 },
      { id: 'henrik-larsson',      nome: "Larsson",             posicoes: ["ATA"],       forca: 83 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'sylvinho-celta',      nome: "Sylvinho",            posicoes: ["LE","MD"],   forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2005,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 86 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 81 },
      { id: 'ivan-helguera',       nome: "Helguera",            posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 85 },
      { id: 'david-beckham',       nome: "Beckham",             posicoes: ["MD","MC"],   forca: 85 },
      { id: 'zinedine-zidane',     nome: "Zidane",              posicoes: ["MEI","MC"],  forca: 90 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 85 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'ronaldo-fenomeno',    nome: "Ronaldo",             posicoes: ["ATA"],       forca: 89 },
      { id: 'michael-owen',        nome: "Owen",                posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'thomas-gravesen',     nome: "Gravesen",            posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'santiago-solari',     nome: "Solari",              posicoes: ["PE","MEI"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2005,
    clube: "Villarreal",
    jogadores: [
      { id: 'jose-manuel-viera-vil', nome: "Viera",             posicoes: ["GOL"],       forca: 80 },
      { id: 'javi-venta',          nome: "Javi Venta",          posicoes: ["LD","MD"],   forca: 78 },
      { id: 'quique-alvarez-vil',  nome: "Quique Álvarez",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'gonzalo-rodriguez-vil', nome: "Gonzalo",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'rodolfo-arruabarrena-vil', nome: "Arruabarrena",   posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'marcos-senna',        nome: "Marcos Senna",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'juan-roman-riquelme', nome: "Riquelme",            posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'juan-pablo-sorin',    nome: "Sorín",               posicoes: ["LE","ME"],   forca: 81 },
      { id: 'diego-forlan',        nome: "Forlán",              posicoes: ["ATA"],       forca: 84 },
      { id: 'jose-mari-romero-vil', nome: "José Mari (VIL)",    posicoes: ["ATA"],       forca: 79 },
      { id: 'santiago-cazorla-vil', nome: "Cazorla",            posicoes: ["MEI","MD"],  forca: 79 },
      { id: 'hector-font-vil',     nome: "Font",                posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'javier-calleja-vil',  nome: "Calleja",             posicoes: ["MEI","PD"],  forca: 77 },
      { id: 'juan-manuel-pena-vil', nome: "Juan M. Peña",       posicoes: ["ZAG"],       forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2005,
    clube: "Real Betis",
    jogadores: [
      { id: 'antonio-doblas-bet',  nome: "Doblas",              posicoes: ["GOL"],       forca: 78 },
      { id: 'juanito-gutierrez-bet', nome: "Juanito",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'david-rivas-bet',     nome: "Rivas (BET)",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'arzu-betis',          nome: "Arzu",                posicoes: ["LD","MD"],   forca: 77 },
      { id: 'juan-jose-canas-bet', nome: "Cañas (BET)",         posicoes: ["LE","MD"],   forca: 77 },
      { id: 'joaquin-sanchez',     nome: "Joaquín",       posicoes: ["PD","MEI"],  forca: 84 },
      { id: 'benjamin-zarandona',  nome: "Zarandona",           posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'alberto-rico-bet',    nome: "Alberto (BET)",       posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'denilson-betis',      nome: "Denílson",            posicoes: ["PE","MEI"],  forca: 80 },
      { id: 'ricardo-oliveira-bet', nome: "Ricardo Oliveira",   posicoes: ["ATA"],       forca: 84 },
      { id: 'dani-martin-bet',     nome: "Dani (BET)",          posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'assuncao-betis',      nome: "Assunção",            posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'capi-betis',          nome: "Capi",                posicoes: ["MEI","ME"],  forca: 77 },
      { id: 'melli-betis',         nome: "Melli",               posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2005,
    clube: "Espanyol",
    jogadores: [
      { id: 'carlos-kameni',       nome: "Kameni",              posicoes: ["GOL"],       forca: 80 },
      { id: 'moises-hurtado-esp',  nome: "Moisés Hurtado",      posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'daniel-jarque',       nome: "Jarque",              posicoes: ["ZAG"],       forca: 79 },
      { id: 'alberto-lopo-esp',    nome: "Lopo",                posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'david-garcia-esp',    nome: "David García",        posicoes: ["LE","MD"],   forca: 77 },
      { id: 'ivan-de-la-peña',     nome: "Iván de la Peña",     posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'raul-tamudo',         nome: "Tamudo",              posicoes: ["ATA"],       forca: 82 },
      { id: 'maxi-rodriguez-esp',  nome: "Maxi Rodríguez",      posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'walter-pandiani-esp', nome: "Pandiani (ESP)",      posicoes: ["ATA"],       forca: 79 },
      { id: 'francisco-rufete-esp', nome: "Rufete (ESP)",       posicoes: ["PD","MEI"],  forca: 78 },
      { id: 'domenech-esp',        nome: "Domènech",            posicoes: ["LD","MD"],   forca: 76 },
      { id: 'coro-esp',            nome: "Coro",                posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'fredson-esp',         nome: "Fredson",             posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'javi-chica-esp',      nome: "Chica",               posicoes: ["LD","ZAG"],  forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2005,
    clube: "Sevilla",
    jogadores: [
      { id: 'andres-palop',        nome: "Palop",               posicoes: ["GOL"],       forca: 82 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 82 },
      { id: 'javi-navarro',        nome: "Javi Navarro",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'pablo-alfaro',        nome: "Pablo Alfaro",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'david-castedo',       nome: "David Castedo",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'aitor-ocio',          nome: "Aitor Ocio",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'jose-luis-marti',     nome: "Martí",               posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'julio-baptista-sev',  nome: "Júlio Baptista",      posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 81 },
      { id: 'adriano-correia-sev', nome: "Adriano",             posicoes: ["LE","MD"],   forca: 79 },
      { id: 'francisco-gallardo-sev', nome: "Gallardo",         posicoes: ["ATA"],       forca: 78 },
      { id: 'dario-silva-sev',     nome: "Darío Silva",         posicoes: ["ATA"],       forca: 78 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 82 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2006 (temporada 2005-06) — o BARCELONA de Rijkaard BICAMPEÃO (82 pts), 18º
  //  título, no ano da 2ª CHAMPIONS (final de Paris vs Arsenal). Eto'o Pichichi (26 gols),
  //  Ronaldinho no auge (Bola de Ouro 2005). Estreou o jovem MESSI (18 anos). Top-6:
  //  Barcelona (82), Real Madrid (70), Valencia (69), Osasuna (68), Sevilla (68), Celta
  //  (64). Osasuna fez campanha histórica (4º, vaga na Champions). Real na seca (Florentino
  //  renunciou em fev/2006). Entra Osasuna no acervo. Sevilla montava base da era gloriosa.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2006,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 84 },
      { id: 'juliano-belletti',    nome: "Belletti",            posicoes: ["LD","MD"],   forca: 81 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'rafael-marquez',      nome: "Rafa Márquez",        posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'gio-van-bronckhorst', nome: "Van Bronckhorst",     posicoes: ["LE","VOL"],  forca: 81 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'deco-souza',          nome: "Deco",                posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'edmilson-gomes',      nome: "Edmílson",            posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'ludovic-giuly',       nome: "Giuly",               posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'ronaldinho-gaucho',   nome: "Ronaldinho",          posicoes: ["MEI","ATA"], forca: 92 },
      { id: 'samuel-etoo',         nome: "Eto'o",               posicoes: ["ATA"],       forca: 89 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'mark-van-bommel',     nome: "Van Bommel",          posicoes: ["VOL","MC"],  forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2006,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 86 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 80 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'ivan-helguera',       nome: "Helguera",            posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 84 },
      { id: 'david-beckham',       nome: "Beckham",             posicoes: ["MD","MC"],   forca: 84 },
      { id: 'zinedine-zidane',     nome: "Zidane",              posicoes: ["MEI","MC"],  forca: 89 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'ronaldo-fenomeno',    nome: "Ronaldo",             posicoes: ["ATA"],       forca: 87 },
      { id: 'robinho-silva',       nome: "Robinho",             posicoes: ["PE","ATA"],  forca: 84 },
      { id: 'thomas-gravesen',     nome: "Gravesen",            posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'julio-baptista-sev',  nome: "Júlio Baptista",      posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'cicinho-rm',          nome: "Cicinho",             posicoes: ["LD","MD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2006,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 84 },
      { id: 'miguel-brito-val',    nome: "Miguel",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'roberto-ayala',       nome: "Ayala",               posicoes: ["ZAG"],       forca: 85 },
      { id: 'carlos-marchena',     nome: "Marchena",            posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'emiliano-moretti',    nome: "Moretti",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","ME"],  forca: 82 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 83 },
      { id: 'pablo-aimar',         nome: "Aimar",               posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA"],       forca: 85 },
      { id: 'miguel-angel-angulo', nome: "Angulo",              posicoes: ["PD","ATA"],  forca: 78 },
      { id: 'fernando-morientes-val', nome: "Morientes (VAL)",  posicoes: ["ATA"],       forca: 81 },
      { id: 'raul-albiol-val',     nome: "Albiol",              posicoes: ["ZAG"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2006,
    clube: "Osasuna",
    jogadores: [
      { id: 'ricardo-elizondo-osa', nome: "Ricardo",            posicoes: ["GOL"],       forca: 80 },
      { id: 'cruchaga-osasuna',    nome: "Cruchaga",            posicoes: ["ZAG"],       forca: 78 },
      { id: 'corrales-osasuna',    nome: "Corrales",            posicoes: ["ZAG"],       forca: 78 },
      { id: 'josetxo-osasuna',     nome: "Josetxo",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'delporte-osasuna',    nome: "Delporte",            posicoes: ["LE","MD"],   forca: 77 },
      { id: 'patxi-punal',         nome: "Puñal",               posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'javier-flano-osa',    nome: "Flaño",               posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'pierre-webo',         nome: "Webó",                posicoes: ["ATA"],       forca: 80 },
      { id: 'juanfran-torres-osa', nome: "Juanfran (OSA)",      posicoes: ["MD","PD"],   forca: 78 },
      { id: 'savo-milosevic',     nome: "Milošević",           posicoes: ["ATA"],       forca: 80 },
      { id: 'valdo-osasuna',       nome: "Valdo",               posicoes: ["MEI","ME"],  forca: 78 },
      { id: 'romeo-osasuna',       nome: "Romeo",               posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'moha-osasuna',        nome: "Moha",                posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'jose-izquierdo-osa',  nome: "Izquierdo",           posicoes: ["LE","LD"],   forca: 76 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2006,
    clube: "Sevilla",
    jogadores: [
      { id: 'andres-palop',        nome: "Palop",               posicoes: ["GOL"],       forca: 82 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 84 },
      { id: 'javi-navarro',        nome: "Javi Navarro",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'ivica-dragutinovic',  nome: "Dragutinović",        posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'aitor-ocio',          nome: "Aitor Ocio",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'adriano-correia-sev', nome: "Adriano",             posicoes: ["LE","MD"],   forca: 79 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'jose-luis-marti',     nome: "Martí",               posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 82 },
      { id: 'frederic-kanoute',    nome: "Kanouté",             posicoes: ["ATA"],       forca: 84 },
      { id: 'luis-fabiano',        nome: "Luís Fabiano",        posicoes: ["ATA"],       forca: 83 },
      { id: 'enzo-maresca',        nome: "Maresca",             posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'julien-escude-sev',   nome: "Escudé",              posicoes: ["ZAG"],       forca: 79 },
      { id: 'saviola-sevilla',     nome: "Saviola (SEV)",       posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2006,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'jose-manuel-pinto',   nome: "Pinto",               posicoes: ["GOL"],       forca: 80 },
      { id: 'angel-lopez-cel',     nome: "Ángel",               posicoes: ["LD","MD"],   forca: 77 },
      { id: 'fernando-caceres',    nome: "Cáceres",             posicoes: ["ZAG"],       forca: 77 },
      { id: 'roberto-lago-cel',    nome: "Lago",                posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'contreras-celta',     nome: "Contreras",           posicoes: ["ZAG"],       forca: 77 },
      { id: 'oscar-lopez-cel',     nome: "Óscar López",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'jonathan-vera-canobbio', nome: "Canobbio",         posicoes: ["MD","PD"],   forca: 78 },
      { id: 'gustavo-lopez-zar',   nome: "Gustavo López",       posicoes: ["MEI","PE"],  forca: 78 },
      { id: 'nene-celta',          nome: "Nené",                posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'catanha-celta',       nome: "Catanha",             posicoes: ["ATA"],       forca: 79 },
      { id: 'jorge-larena-cel',    nome: "Jorge Larena",        posicoes: ["PD","ATA"],  forca: 77 },
      { id: 'gustavo-varela-cel',  nome: "Varela",              posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'pablo-couñago',       nome: "Couñago",             posicoes: ["ATA"],       forca: 79 },
      { id: 'guayre-celta',        nome: "Guayre",              posicoes: ["ATA","MEI"], forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2007 (temporada 2006-07) — o REAL MADRID de Fabio CAPELLO campeão (76 pts), 30º
  //  título, encerrando a SECA de 3 anos, no head-to-head sobre o Barça (mesmos 76 pts).
  //  Título selado na última rodada (3-1 no Mallorca, virada). Van Nistelrooy Pichichi (25
  //  gols). Capello (vindo da Juve pós-Calciopoli) foi demitido logo após por recusar
  //  escalar Beckham e Ronaldo. Top-6: Real Madrid (76), Barcelona (76), Sevilla (71),
  //  Valencia (66), Villarreal (62), Zaragoza (60). Sevilla vivia sua era gloriosa.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2007,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 87 },
      { id: 'michel-salgado',      nome: "Míchel Salgado",      posicoes: ["LD","MD"],   forca: 80 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 84 },
      { id: 'fabio-cannavaro',     nome: "Cannavaro",           posicoes: ["ZAG"],       forca: 86 },
      { id: 'roberto-carlos',      nome: "Roberto Carlos",      posicoes: ["LE","ME"],   forca: 83 },
      { id: 'emerson-ferreira-rm', nome: "Emerson (RM)",        posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mahamadou-diarra',    nome: "Diarra",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'jose-antonio-reyes',  nome: "Reyes",               posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'ruud-van-nistelrooy', nome: "Van Nistelrooy",      posicoes: ["ATA"],       forca: 87 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'robinho-silva',       nome: "Robinho",             posicoes: ["PE","ATA"],  forca: 85 },
      { id: 'david-beckham',       nome: "Beckham",             posicoes: ["MD","MC"],   forca: 83 },
      { id: 'fernando-gago-rm',    nome: "Gago",                posicoes: ["VOL","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2007,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 84 },
      { id: 'gianluca-zambrotta',  nome: "Zambrotta",           posicoes: ["LD","LE"],   forca: 83 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'rafael-marquez',      nome: "Rafa Márquez",        posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'gio-van-bronckhorst', nome: "Van Bronckhorst",     posicoes: ["LE","VOL"],  forca: 80 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'deco-souza',          nome: "Deco",                posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'ronaldinho-gaucho',   nome: "Ronaldinho",          posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'samuel-etoo',         nome: "Eto'o",               posicoes: ["ATA"],       forca: 88 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 85 },
      { id: 'eidur-gudjohnsen',    nome: "Gudjohnsen",          posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'thiago-motta-bcn',    nome: "Thiago Motta",        posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'lilian-thuram',       nome: "Thuram",              posicoes: ["ZAG"],       forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2007,
    clube: "Sevilla",
    jogadores: [
      { id: 'andres-palop',        nome: "Palop",               posicoes: ["GOL"],       forca: 83 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 85 },
      { id: 'javi-navarro',        nome: "Javi Navarro",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'ivica-dragutinovic',  nome: "Dragutinović",        posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'aitor-ocio',          nome: "Aitor Ocio",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'adriano-correia-sev', nome: "Adriano",             posicoes: ["LE","MD"],   forca: 80 },
      { id: 'christian-poulsen',   nome: "Poulsen",             posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 83 },
      { id: 'frederic-kanoute',    nome: "Kanouté",             posicoes: ["ATA"],       forca: 85 },
      { id: 'luis-fabiano',        nome: "Luís Fabiano",        posicoes: ["ATA"],       forca: 84 },
      { id: 'enzo-maresca',        nome: "Maresca",             posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'seydou-keita-sev',    nome: "Keita",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'julien-escude-sev',   nome: "Escudé",              posicoes: ["ZAG"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2007,
    clube: "Valencia",
    jogadores: [
      { id: 'santiago-cañizares',  nome: "Cañizares",           posicoes: ["GOL"],       forca: 83 },
      { id: 'miguel-brito-val',    nome: "Miguel",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'roberto-ayala',       nome: "Ayala",               posicoes: ["ZAG"],       forca: 84 },
      { id: 'raul-albiol-val',     nome: "Albiol",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'emiliano-moretti',    nome: "Moretti",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","ME"],  forca: 84 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 82 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA"],       forca: 86 },
      { id: 'fernando-morientes-val', nome: "Morientes (VAL)",  posicoes: ["ATA"],       forca: 82 },
      { id: 'hugo-viana-val',      nome: "Hugo Viana",          posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'pablo-aimar',         nome: "Aimar",               posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'asier-del-horno',     nome: "Del Horno",           posicoes: ["LE","MD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2007,
    clube: "Villarreal",
    jogadores: [
      { id: 'sebastian-viera-vil', nome: "Sebastián Viera",     posicoes: ["GOL"],       forca: 80 },
      { id: 'javi-venta',          nome: "Javi Venta",          posicoes: ["LD","MD"],   forca: 78 },
      { id: 'gonzalo-rodriguez-vil', nome: "Gonzalo",           posicoes: ["ZAG"],       forca: 81 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'quique-alvarez-vil',  nome: "Quique Álvarez",      posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'marcos-senna',        nome: "Marcos Senna",        posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'juan-roman-riquelme', nome: "Riquelme",            posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'santiago-cazorla-vil', nome: "Cazorla",            posicoes: ["MEI","MD"],  forca: 82 },
      { id: 'robert-pires-vil',    nome: "Pires",               posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'nihat-kahveci',       nome: "Nihat",               posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'guillermo-franco-vil', nome: "Franco",             posicoes: ["ATA"],       forca: 80 },
      { id: 'juan-pablo-sorin',    nome: "Sorín",               posicoes: ["LE","ME"],   forca: 80 },
      { id: 'jose-mari-romero-vil', nome: "José Mari (VIL)",    posicoes: ["ATA"],       forca: 78 },
      { id: 'matias-fernandez-vil', nome: "Matías Fernández",   posicoes: ["MEI","PD"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2007,
    clube: "Zaragoza",
    jogadores: [
      { id: 'cesar-sanchez-zar',   nome: "César (ZAR)",         posicoes: ["GOL"],       forca: 80 },
      { id: 'alberto-zapater',     nome: "Zapater",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'juan-carlos-toko-zar', nome: "Toko",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'alvaro-gonzalez-zar', nome: "Álvaro",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'chus-herrero-zar',    nome: "Chus Herrero",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'juanfran-garcia-zar', nome: "Juanfran (ZAR)",      posicoes: ["LE","MD"],   forca: 78 },
      { id: 'diego-milito-zar',    nome: "Diego Milito",        posicoes: ["ATA"],       forca: 84 },
      { id: 'ewerthon-zar',        nome: "Ewerthon",            posicoes: ["ATA"],       forca: 81 },
      { id: 'ricardo-oliveira-bet', nome: "Ricardo Oliveira",   posicoes: ["ATA"],       forca: 82 },
      { id: 'sergio-garcia-zar',   nome: "Sergio García",       posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'pablo-aimar-zar',     nome: "Aimar (ZAR)",         posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'gorka-movilla-zar',   nome: "Movilla",             posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'luciano-galletti-zar', nome: "Galletti",           posicoes: ["PD","MEI"],  forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2008 (temporada 2007-08) — o REAL MADRID de Bernd SCHUSTER BICAMPEÃO (85 pts),
  //  31º título, os 1ºs títulos consecutivos desde 1990. Selado com 2-1 sobre o Osasuna
  //  (gol tardio de Higuaín). Dani Güiza (Mallorca) Pichichi (27 gols). Robinho brilhou.
  //  Top-6: Real Madrid (85), Villarreal (77), Barcelona (67), Atlético (64), Sevilla (64),
  //  Racing (60). Villarreal fez sua melhor campanha (vice). Atlético voltou à Champions
  //  após 11 anos com Agüero/Forlán. Fim da era Ronaldinho no Barça (Guardiola chegaria).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2008,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 87 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG"],       forca: 83 },
      { id: 'fabio-cannavaro',     nome: "Cannavaro",           posicoes: ["ZAG"],       forca: 85 },
      { id: 'gabriel-heinze',      nome: "Heinze",              posicoes: ["LE","ZAG"],  forca: 82 },
      { id: 'mahamadou-diarra',    nome: "Diarra",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'fernando-gago-rm',    nome: "Gago",                posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'wesley-sneijder',     nome: "Sneijder",            posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'robinho-silva',       nome: "Robinho",             posicoes: ["PE","ATA"],  forca: 86 },
      { id: 'ruud-van-nistelrooy', nome: "Van Nistelrooy",      posicoes: ["ATA"],       forca: 86 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'arjen-robben-rm',     nome: "Robben",              posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'gonzalo-higuain',     nome: "Higuaín",             posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2008,
    clube: "Villarreal",
    jogadores: [
      { id: 'diego-lopez-vil',     nome: "Diego López",         posicoes: ["GOL"],       forca: 81 },
      { id: 'javi-venta',          nome: "Javi Venta",          posicoes: ["LD","MD"],   forca: 78 },
      { id: 'gonzalo-rodriguez-vil', nome: "Gonzalo",           posicoes: ["ZAG"],       forca: 81 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 82 },
      { id: 'joan-capdevila',      nome: "Capdevila",           posicoes: ["LE","MD"],   forca: 81 },
      { id: 'marcos-senna',        nome: "Marcos Senna",        posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'santiago-cazorla-vil', nome: "Cazorla",            posicoes: ["MEI","MD"],  forca: 83 },
      { id: 'robert-pires-vil',    nome: "Pires",               posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'matias-fernandez-vil', nome: "Matías Fernández",   posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'giuseppe-rossi-vil',  nome: "Rossi",               posicoes: ["ATA"],       forca: 82 },
      { id: 'nihat-kahveci',       nome: "Nihat",               posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'guillermo-franco-vil', nome: "Franco",             posicoes: ["ATA"],       forca: 80 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'ariel-ibagaza',       nome: "Ibagaza",             posicoes: ["MEI","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2008,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 84 },
      { id: 'gianluca-zambrotta',  nome: "Zambrotta",           posicoes: ["LD","LE"],   forca: 82 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'rafael-marquez',      nome: "Rafa Márquez",        posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'lilian-thuram',       nome: "Thuram",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'deco-souza',          nome: "Deco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'ronaldinho-gaucho',   nome: "Ronaldinho",          posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'samuel-etoo',         nome: "Eto'o",               posicoes: ["ATA"],       forca: 88 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 87 },
      { id: 'thierry-henry',       nome: "Henry",               posicoes: ["ATA","PE"],  forca: 86 },
      { id: 'yaya-toure-bcn',      nome: "Yaya Touré",          posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'gabriel-milito-bcn',  nome: "Gabriel Milito",      posicoes: ["ZAG"],       forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2008,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'christian-abbiati-atm', nome: "Abbiati",           posicoes: ["GOL"],       forca: 81 },
      { id: 'antonio-lopez-atm',   nome: "Antonio López",       posicoes: ["LE","MD"],   forca: 79 },
      { id: 'luis-perea',          nome: "Perea",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'pablo-ibanez-atm',    nome: "Pablo Ibáñez",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'juanito-gutierrez-bet', nome: "Juanito",           posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'maniche-atm',         nome: "Maniche",             posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'raul-garcia-atm',     nome: "Raúl García",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'simao-sabrosa',       nome: "Simão",               posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'jose-antonio-reyes',  nome: "Reyes",               posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'sergio-aguero',       nome: "Agüero",              posicoes: ["ATA"],       forca: 85 },
      { id: 'diego-forlan',        nome: "Forlán",              posicoes: ["ATA"],       forca: 85 },
      { id: 'maxi-rodriguez-esp',  nome: "Maxi Rodríguez",      posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'jose-manuel-jurado',  nome: "Jurado",              posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'giourkas-seitaridis', nome: "Seitaridis",          posicoes: ["LD","ZAG"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2008,
    clube: "Sevilla",
    jogadores: [
      { id: 'andres-palop',        nome: "Palop",               posicoes: ["GOL"],       forca: 82 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 86 },
      { id: 'julien-escude-sev',   nome: "Escudé",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'ivica-dragutinovic',  nome: "Dragutinović",        posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'adriano-correia-sev', nome: "Adriano",             posicoes: ["LE","MD"],   forca: 81 },
      { id: 'christian-poulsen',   nome: "Poulsen",             posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'seydou-keita-sev',    nome: "Keita",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 84 },
      { id: 'diego-capel-sev',     nome: "Capel",               posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'frederic-kanoute',    nome: "Kanouté",             posicoes: ["ATA"],       forca: 85 },
      { id: 'luis-fabiano',        nome: "Luís Fabiano",        posicoes: ["ATA"],       forca: 85 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ernesto-chevanton-sev', nome: "Chevantón",         posicoes: ["ATA"],       forca: 79 },
      { id: 'aitor-ocio',          nome: "Aitor Ocio",          posicoes: ["ZAG"],       forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2008,
    clube: "Racing Santander",
    jogadores: [
      { id: 'fabio-coltorti-rac', nome: "Coltorti",            posicoes: ["GOL"],       forca: 79 },
      { id: 'pablo-pinillos-rac', nome: "Pinillos",            posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'ezequiel-garay-rac', nome: "Garay",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'cesar-navas-rac',    nome: "César Navas",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'oriol-rac',          nome: "Oriol",               posicoes: ["LD","MD"],   forca: 77 },
      { id: 'jose-moraton-rac',   nome: "Moratón",             posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'gonzalo-colsa-rac',  nome: "Colsa",               posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'aldo-duscher-rac',   nome: "Duscher (RAC)",       posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'jorge-lopez-rac',    nome: "Jorge López",         posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'oscar-serrano-rac',  nome: "Óscar Serrano",       posicoes: ["MEI","MD"],  forca: 78 },
      { id: 'pedro-munitis',      nome: "Munitis",             posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'mohamed-tchite-rac', nome: "Tchité",              posicoes: ["ATA"],       forca: 80 },
      { id: 'ebi-smolarek-rac',   nome: "Smolarek",            posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'pablo-alvarez-rac',  nome: "Pablo Álvarez",       posicoes: ["MC","VOL"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2009 (temporada 2008-09) — o BARCELONA de Pep GUARDIOLA campeão (87 pts), 19º
  //  título, INÍCIO da ERA DOURADA e ano do histórico SEXTUPLE (liga, Copa, Champions,
  //  Supercopa Espanha, Supercopa Europa, Mundial). 105 gols marcados! Trio MSX: Messi/
  //  Eto'o (34 cada em todas)/Henry. Forlán (Atlético) Pichichi (32 gols liga). Top-6:
  //  Barcelona (87), Real Madrid (78), Sevilla (70), Atlético (67), Villarreal (65),
  //  Valencia (62). Real goleado 2-6 em casa no Camp Nou (clássico histórico). Fim da seca.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2009,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 85 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 86 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 84 },
      { id: 'sylvinho-celta',      nome: "Sylvinho",            posicoes: ["LE","MD"],   forca: 79 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'yaya-toure-bcn',      nome: "Yaya Touré",          posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 90 },
      { id: 'samuel-etoo',         nome: "Eto'o",               posicoes: ["ATA"],       forca: 88 },
      { id: 'thierry-henry',       nome: "Henry",               posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'seydou-keita-sev',    nome: "Keita",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'rafael-marquez',      nome: "Rafa Márquez",        posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'bojan-krkic',         nome: "Bojan",               posicoes: ["ATA","MEI"], forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2009,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 88 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG"],       forca: 84 },
      { id: 'fabio-cannavaro',     nome: "Cannavaro",           posicoes: ["ZAG"],       forca: 84 },
      { id: 'gabriel-heinze',      nome: "Heinze",              posicoes: ["LE","ZAG"],  forca: 82 },
      { id: 'fernando-gago-rm',    nome: "Gago",                posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'mahamadou-diarra',    nome: "Diarra",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'wesley-sneijder',     nome: "Sneijder",            posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'arjen-robben-rm',     nome: "Robben",              posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'gonzalo-higuain',     nome: "Higuaín",             posicoes: ["ATA"],       forca: 84 },
      { id: 'ruud-van-nistelrooy', nome: "Van Nistelrooy",      posicoes: ["ATA"],       forca: 85 },
      { id: 'raul-gonzalez',       nome: "Raúl",                posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'rafael-van-der-vaart', nome: "Van der Vaart",      posicoes: ["MEI","MC"],  forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2009,
    clube: "Sevilla",
    jogadores: [
      { id: 'andres-palop',        nome: "Palop",               posicoes: ["GOL"],       forca: 82 },
      { id: 'abdoulay-konko-sev',  nome: "Konko",               posicoes: ["LD","MD"],   forca: 78 },
      { id: 'julien-escude-sev',   nome: "Escudé",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'ivica-dragutinovic',  nome: "Dragutinović",        posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'adriano-correia-sev', nome: "Adriano",             posicoes: ["LE","MD"],   forca: 81 },
      { id: 'christian-poulsen',   nome: "Poulsen",             posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 84 },
      { id: 'diego-capel-sev',     nome: "Capel",               posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'frederic-kanoute',    nome: "Kanouté",             posicoes: ["ATA"],       forca: 85 },
      { id: 'luis-fabiano',        nome: "Luís Fabiano",        posicoes: ["ATA"],       forca: 85 },
      { id: 'alvaro-negredo-sev',  nome: "Negredo",             posicoes: ["ATA"],       forca: 81 },
      { id: 'sebastien-squillaci', nome: "Squillaci",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'didier-zokora-sev',   nome: "Zokora",              posicoes: ["VOL","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2009,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 79 },
      { id: 'tomas-ujfalusi',      nome: "Ujfalusi",            posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'luis-perea',          nome: "Perea",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'juanito-gutierrez-bet', nome: "Juanito",           posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'antonio-lopez-atm',   nome: "Antonio López",       posicoes: ["LE","MD"],   forca: 79 },
      { id: 'maniche-atm',         nome: "Maniche",             posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'paulo-assuncao-atm',  nome: "Paulo Assunção",      posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'simao-sabrosa',       nome: "Simão",               posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'maxi-rodriguez-esp',  nome: "Maxi Rodríguez",      posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'sergio-aguero',       nome: "Agüero",              posicoes: ["ATA"],       forca: 87 },
      { id: 'diego-forlan',        nome: "Forlán",              posicoes: ["ATA"],       forca: 87 },
      { id: 'jose-antonio-reyes',  nome: "Reyes",               posicoes: ["PE","ATA"],  forca: 81 },
      { id: 'raul-garcia-atm',     nome: "Raúl García",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2009,
    clube: "Villarreal",
    jogadores: [
      { id: 'diego-lopez-vil',     nome: "Diego López",         posicoes: ["GOL"],       forca: 82 },
      { id: 'joan-capdevila',      nome: "Capdevila",           posicoes: ["LE","MD"],   forca: 81 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 82 },
      { id: 'gonzalo-rodriguez-vil', nome: "Gonzalo",           posicoes: ["ZAG"],       forca: 81 },
      { id: 'angel-villarreal',    nome: "Ángel (VIL)",         posicoes: ["LD","MD"],   forca: 78 },
      { id: 'marcos-senna',        nome: "Marcos Senna",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'santiago-cazorla-vil', nome: "Cazorla",            posicoes: ["MEI","MD"],  forca: 83 },
      { id: 'robert-pires-vil',    nome: "Pires",               posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'giuseppe-rossi-vil',  nome: "Rossi",               posicoes: ["ATA"],       forca: 83 },
      { id: 'nihat-kahveci',       nome: "Nihat",               posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'marcos-senna-fuentes', nome: "Fuentes (VIL)",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'ariel-ibagaza',       nome: "Ibagaza",             posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'joseba-llorente-vil', nome: "Llorente",            posicoes: ["ATA"],       forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2009,
    clube: "Valencia",
    jogadores: [
      { id: 'renan-brito-val',     nome: "Renan",               posicoes: ["GOL"],       forca: 79 },
      { id: 'raul-albiol-val',     nome: "Albiol",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'carlos-marchena',     nome: "Marchena",            posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'alexis-ruano-val',    nome: "Alexis (VAL)",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'jeremy-mathieu-val',  nome: "Mathieu",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","ME"],  forca: 85 },
      { id: 'vicente-rodriguez',   nome: "Vicente",             posicoes: ["PE","ME"],   forca: 80 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA"],       forca: 87 },
      { id: 'juan-manuel-mata',    nome: "Juan Mata",           posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'pablo-hernandez-val', nome: "Pablo Hernández",     posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'joaquin-sanchez',     nome: "Joaquín",             posicoes: ["PD","MEI"],  forca: 81 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2010 (temporada 2009-10) — o BARCELONA de Guardiola BICAMPEÃO (99 pts), 20º
  //  título, num DUELO ÉPICO com o Real Madrid (96 pts, recorde da época para vice). Messi
  //  Pichichi (34 gols). Chegou IBRAHIMOVIĆ ao Barça; o Real montou os novos Galácticos de
  //  Florentino com CRISTIANO RONALDO, KAKÁ, BENZEMA e Xabi Alonso (Mourinho viria no ano
  //  seguinte). Top-6: Barcelona (99), Real Madrid (96), Valencia (71), Sevilla (63),
  //  Mallorca (62), Getafe (58). Dois maiores placares de pontos da história até então.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2010,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 85 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 87 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'maxwell-scherrer',    nome: "Maxwell",             posicoes: ["LE","MD"],   forca: 80 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 92 },
      { id: 'zlatan-ibrahimovic',  nome: "Ibrahimović",         posicoes: ["ATA"],       forca: 88 },
      { id: 'thierry-henry',       nome: "Henry",               posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'pedro-rodriguez',     nome: "Pedro",               posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'seydou-keita-sev',    nome: "Keita",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'yaya-toure-bcn',      nome: "Yaya Touré",          posicoes: ["VOL","MC"],  forca: 84 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2010,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 89 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 86 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG"],       forca: 84 },
      { id: 'raul-albiol-val',      nome: "Albiol",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 84 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'lassana-diarra',      nome: "Lass Diarra",         posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'kaka-real',           nome: "Kaká",                posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 91 },
      { id: 'gonzalo-higuain',     nome: "Higuaín",             posicoes: ["ATA"],       forca: 85 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 84 },
      { id: 'rafael-van-der-vaart', nome: "Van der Vaart",      posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'jose-maria-guti',     nome: "Guti",                posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'alvaro-arbeloa',      nome: "Arbeloa",             posicoes: ["LD","LE"],   forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2010,
    clube: "Valencia",
    jogadores: [
      { id: 'cesar-sanchez-val',   nome: "César (VAL)",         posicoes: ["GOL"],       forca: 80 },
      { id: 'miguel-brito-val',    nome: "Miguel",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'david-navarro-val',   nome: "David Navarro",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'carlos-marchena',     nome: "Marchena",            posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'jeremy-mathieu-val',  nome: "Mathieu",             posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","ME"],  forca: 86 },
      { id: 'juan-manuel-mata',    nome: "Juan Mata",           posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA"],       forca: 87 },
      { id: 'pablo-hernandez-val', nome: "Pablo Hernández",     posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'ruben-baraja',        nome: "Baraja",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'alexis-ruano-val',    nome: "Alexis (VAL)",        posicoes: ["ZAG"],       forca: 78 },
      { id: 'joaquin-sanchez',     nome: "Joaquín",             posicoes: ["PD","MEI"],  forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2010,
    clube: "Sevilla",
    jogadores: [
      { id: 'andres-palop',        nome: "Palop",               posicoes: ["GOL"],       forca: 81 },
      { id: 'abdoulay-konko-sev',  nome: "Konko",               posicoes: ["LD","MD"],   forca: 78 },
      { id: 'julien-escude-sev',   nome: "Escudé",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'sebastien-squillaci', nome: "Squillaci",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'fernando-navarro-sev', nome: "Fernando Navarro",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'didier-zokora-sev',   nome: "Zokora",              posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 84 },
      { id: 'diego-capel-sev',     nome: "Capel",               posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'frederic-kanoute',    nome: "Kanouté",             posicoes: ["ATA"],       forca: 84 },
      { id: 'luis-fabiano',        nome: "Luís Fabiano",        posicoes: ["ATA"],       forca: 85 },
      { id: 'alvaro-negredo-sev',  nome: "Negredo",             posicoes: ["ATA"],       forca: 83 },
      { id: 'diego-perotti-sev',   nome: "Perotti",             posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2010,
    clube: "Mallorca",
    jogadores: [
      { id: 'dudu-aouate',         nome: "Aouate",              posicoes: ["GOL"],       forca: 80 },
      { id: 'jose-nunes-mll',      nome: "Nunes",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'ivan-ramis-mll',      nome: "Ramis",               posicoes: ["ZAG"],       forca: 79 },
      { id: 'kevin-mirallas-mll',  nome: "Mirallas",            posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'jonas-goncalves-mll', nome: "Jonás",               posicoes: ["ATA"],       forca: 82 },
      { id: 'ariel-ibagaza',       nome: "Ibagaza",             posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'jose-luis-marti-mll', nome: "Martí (MLL)",         posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'borja-valero-mll',    nome: "Borja Valero",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'aritz-aduriz-mll',    nome: "Aduriz",              posicoes: ["ATA"],       forca: 81 },
      { id: 'gonzalo-castro-mll',  nome: "Castro",              posicoes: ["LD","MD"],   forca: 78 },
      { id: 'chico-flores-mll',    nome: "Chico",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'pierre-webo',         nome: "Webó",                posicoes: ["ATA"],       forca: 79 },
      { id: 'tomas-pina-mll',      nome: "Pina",                posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'juan-arango-mll',     nome: "Arango",              posicoes: ["ME","MEI"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2010,
    clube: "Getafe",
    jogadores: [
      { id: 'oscar-ustari-get',   nome: "Ustari",              posicoes: ["GOL"],       forca: 79 },
      { id: 'miguel-torres-get',  nome: "Miguel Torres",       posicoes: ["LD","LE"],   forca: 78 },
      { id: 'cata-diaz-get',      nome: "Cata Díaz",           posicoes: ["ZAG"],       forca: 79 },
      { id: 'rafa-lopez-get',     nome: "Rafa",                posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'jose-manuel-mane-get', nome: "Mané",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'derek-boateng-get',  nome: "Boateng",             posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'francisco-casquero', nome: "Casquero",           posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'fabio-celestini-get', nome: "Celestini",          posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'daniel-parejo-get',  nome: "Parejo",              posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'pedro-leon-get',     nome: "Pedro León",          posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'roberto-soldado-get', nome: "Soldado",            posicoes: ["ATA"],       forca: 82 },
      { id: 'manu-del-moral-get', nome: "Del Moral",           posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'miku-get',           nome: "Miku",                posicoes: ["ATA"],       forca: 78 },
      { id: 'jaime-gavilan-get',  nome: "Gavilán",             posicoes: ["MEI","ME"],  forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2011 (temporada 2010-11) — o BARCELONA de Guardiola TRICAMPEÃO (96 pts), 21º
  //  título, o AUGE do time considerado um dos maiores de todos os tempos. Cristiano Ronaldo
  //  (Real) Pichichi com RECORDE de 40 gols. Temporada do histórico 5-0 do Barça sobre o
  //  Real de MOURINHO (que chegou para acender o clássico). Top-6: Barcelona (96), Real
  //  Madrid (92), Valencia (71), Villarreal (62), Sevilla (58), Athletic (58). Barça
  //  invicto por 31 jogos. Real ganhou a Copa (1-0 na final, gol de CR7 na prorrogação).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2011,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 86 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 87 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 85 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'eric-abidal',         nome: "Abidal",              posicoes: ["LE","ZAG"],  forca: 83 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 93 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'pedro-rodriguez',     nome: "Pedro",               posicoes: ["PD","ATA"],  forca: 84 },
      { id: 'seydou-keita-sev',    nome: "Keita",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'ibrahim-afellay',     nome: "Afellay",             posicoes: ["MEI","PD"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2011,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 89 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 87 },
      { id: 'ricardo-carvalho-rm', nome: "Carvalho",            posicoes: ["ZAG"],       forca: 84 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 85 },
      { id: 'alvaro-arbeloa',      nome: "Arbeloa",             posicoes: ["LD","LE"],   forca: 81 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'sami-khedira',        nome: "Khedira",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mesut-ozil',          nome: "Özil",                posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'angel-di-maria',      nome: "Di María",            posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'gonzalo-higuain',     nome: "Higuaín",             posicoes: ["ATA"],       forca: 85 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 85 },
      { id: 'mahamadou-diarra',    nome: "Diarra",              posicoes: ["VOL","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2011,
    clube: "Valencia",
    jogadores: [
      { id: 'vicente-guaita-val',  nome: "Guaita",              posicoes: ["GOL"],       forca: 80 },
      { id: 'miguel-brito-val',    nome: "Miguel",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'adil-rami-val',       nome: "Rami",                posicoes: ["ZAG"],       forca: 80 },
      { id: 'ricardo-costa-val',   nome: "Ricardo Costa",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'jeremy-mathieu-val',  nome: "Mathieu",             posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'tino-costa-val',      nome: "Tino Costa",          posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'juan-manuel-mata',    nome: "Juan Mata",           posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'roberto-soldado-get', nome: "Soldado",             posicoes: ["ATA"],       forca: 83 },
      { id: 'pablo-hernandez-val', nome: "Pablo Hernández",     posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'aritz-aduriz-mll',    nome: "Aduriz",              posicoes: ["ATA"],       forca: 80 },
      { id: 'joaquin-sanchez',     nome: "Joaquín",             posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2011,
    clube: "Villarreal",
    jogadores: [
      { id: 'diego-lopez-vil',     nome: "Diego López",         posicoes: ["GOL"],       forca: 82 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 78 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 82 },
      { id: 'carlos-marchena-vil', nome: "Marchena (VIL)",      posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'joan-capdevila',      nome: "Capdevila",           posicoes: ["LE","MD"],   forca: 80 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'borja-valero-mll',    nome: "Borja Valero",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'santiago-cazorla-vil', nome: "Cazorla",            posicoes: ["MEI","MD"],  forca: 84 },
      { id: 'cani-villarreal',     nome: "Cani",                posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'giuseppe-rossi-vil',  nome: "Rossi",               posicoes: ["ATA"],       forca: 84 },
      { id: 'nilmar-honorato-vil', nome: "Nilmar",              posicoes: ["ATA"],       forca: 81 },
      { id: 'marco-ruben-vil',     nome: "Rubén",               posicoes: ["ATA"],       forca: 78 },
      { id: 'carlos-marchena-catala', nome: "Catalá",           posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'joan-oriol-vil',      nome: "Oriol (VIL)",         posicoes: ["LE","MD"],   forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2011,
    clube: "Sevilla",
    jogadores: [
      { id: 'javi-varas-sev',      nome: "Varas",               posicoes: ["GOL"],       forca: 79 },
      { id: 'abdoulay-konko-sev',  nome: "Konko",               posicoes: ["LD","MD"],   forca: 78 },
      { id: 'julien-escude-sev',   nome: "Escudé",              posicoes: ["ZAG"],       forca: 79 },
      { id: 'federico-fazio-sev',  nome: "Fazio",               posicoes: ["ZAG"],       forca: 80 },
      { id: 'fernando-navarro-sev', nome: "Fernando Navarro",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'didier-zokora-sev',   nome: "Zokora",              posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["PD","MD"],   forca: 84 },
      { id: 'diego-perotti-sev',   nome: "Perotti",             posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'frederic-kanoute',    nome: "Kanouté",             posicoes: ["ATA"],       forca: 83 },
      { id: 'alvaro-negredo-sev',  nome: "Negredo",             posicoes: ["ATA"],       forca: 84 },
      { id: 'luis-fabiano',        nome: "Luís Fabiano",        posicoes: ["ATA"],       forca: 83 },
      { id: 'renato-dirnei',       nome: "Renato",              posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'martin-caceres-sev',  nome: "Cáceres (SEV)",       posicoes: ["ZAG","LD"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2011,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'gorka-iraizoz-ath',   nome: "Iraizoz",             posicoes: ["GOL"],       forca: 79 },
      { id: 'andoni-iraola-ath',   nome: "Iraola",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'fernando-amorebieta-ath', nome: "Amorebieta",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'javi-martinez-ath',   nome: "Javi Martínez",       posicoes: ["VOL","ZAG"], forca: 83 },
      { id: 'koikili-lertxundi-ath', nome: "Koikili",           posicoes: ["LE","MD"],   forca: 77 },
      { id: 'ander-iturraspe-ath', nome: "Iturraspe",           posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'markel-susaeta-ath',  nome: "Susaeta",             posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'iker-muniain-ath',    nome: "Muniain",             posicoes: ["MEI","PE"],  forca: 80 },
      { id: 'ander-herrera-ath',   nome: "Ander Herrera",       posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'fernando-llorente-ath', nome: "F. Llorente",       posicoes: ["ATA"],       forca: 84 },
      { id: 'gaizka-toquero-ath',  nome: "Toquero",             posicoes: ["ATA"],       forca: 77 },
      { id: 'igor-gabilondo-ath',  nome: "Gabilondo",           posicoes: ["ME","MEI"],  forca: 77 },
      { id: 'david-lopez-ath',     nome: "David López",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'pablo-orbaiz',        nome: "Orbaiz",              posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2012 (temporada 2011-12) — o REAL MADRID de José MOURINHO campeão (100 pts),
  //  32º título, quebrando a hegemonia do Barça com RECORDES históricos: mais pontos (100),
  //  mais gols (121), melhor saldo (+89), mais vitórias (32). Messi Pichichi com incríveis
  //  50 GOLS mas o Barça foi 2º (91 pts). Top-6: Real Madrid (100), Barcelona (91), Valencia
  //  (61), Málaga (58), Atlético (56), Levante (55). Entram Málaga (era Al-Thani, com Isco/
  //  Cazorla) e Levante (surpresa, brigou por Champions). Atlético de Simeone recém-chegado.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2012,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 89 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 85 },
      { id: 'alvaro-arbeloa',      nome: "Arbeloa",             posicoes: ["LD","LE"],   forca: 81 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'sami-khedira',        nome: "Khedira",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mesut-ozil',          nome: "Özil",                posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'angel-di-maria',      nome: "Di María",            posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 86 },
      { id: 'gonzalo-higuain',     nome: "Higuaín",             posicoes: ["ATA"],       forca: 85 },
      { id: 'jose-callejon-rm',    nome: "Callejón",            posicoes: ["PD","ATA"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2012,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 86 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 87 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 84 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'eric-abidal',         nome: "Abidal",              posicoes: ["LE","ZAG"],  forca: 82 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'cesc-fabregas',       nome: "Cesc",                posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'pedro-rodriguez',     nome: "Pedro",               posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'alexis-sanchez-bcn',  nome: "Alexis Sánchez",      posicoes: ["ATA","PD"],  forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2012,
    clube: "Valencia",
    jogadores: [
      { id: 'vicente-guaita-val',  nome: "Guaita",              posicoes: ["GOL"],       forca: 80 },
      { id: 'joao-pereira-val',    nome: "João Pereira",        posicoes: ["LD","MD"],   forca: 79 },
      { id: 'adil-rami-val',       nome: "Rami",                posicoes: ["ZAG"],       forca: 81 },
      { id: 'victor-ruiz-val',     nome: "Víctor Ruiz",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'jeremy-mathieu-val',  nome: "Mathieu",             posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'david-albelda',       nome: "Albelda",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'tino-costa-val',      nome: "Tino Costa",          posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'sofiane-feghouli-val', nome: "Feghouli",           posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'pablo-piatti-val',    nome: "Piatti",              posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'roberto-soldado-get', nome: "Soldado",             posicoes: ["ATA"],       forca: 84 },
      { id: 'jonas-goncalves-mll', nome: "Jonás",               posicoes: ["ATA"],       forca: 81 },
      { id: 'aritz-aduriz-mll',    nome: "Aduriz",              posicoes: ["ATA"],       forca: 80 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2012,
    clube: "Málaga",
    jogadores: [
      { id: 'willy-caballero-mal', nome: "Caballero",           posicoes: ["GOL"],       forca: 80 },
      { id: 'jesus-gamez-mal',     nome: "Gámez",               posicoes: ["LD","LE"],   forca: 79 },
      { id: 'martin-demichelis-mal', nome: "Demichelis",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'weligton-robson-mal', nome: "Weligton",            posicoes: ["ZAG"],       forca: 79 },
      { id: 'nacho-monreal-mal',   nome: "Monreal",             posicoes: ["LE","MD"],   forca: 80 },
      { id: 'jeremy-toulalan-mal', nome: "Toulalan",            posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'manuel-iturra-mal',   nome: "Iturra",              posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'santiago-cazorla-mal', nome: "Cazorla (MAL)",      posicoes: ["MEI","MD"],  forca: 84 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'joaquin-sanchez-mal', nome: "Joaquín (MAL)",       posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'ruud-van-nistelrooy', nome: "Van Nistelrooy",      posicoes: ["ATA"],       forca: 81 },
      { id: 'julio-baptista-sev',  nome: "Júlio Baptista",      posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'salomon-rondon-mal',  nome: "Rondón",              posicoes: ["ATA"],       forca: 79 },
      { id: 'diego-buonanotte-mal', nome: "Buonanotte",         posicoes: ["MEI","PE"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2012,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 84 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 82 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 84 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 82 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'mario-suarez-atm',    nome: "Mario Suárez",        posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'arda-turan-atm',      nome: "Arda Turan",          posicoes: ["MEI","PE"],  forca: 83 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'radamel-falcao-atm',  nome: "Falcao",              posicoes: ["ATA"],       forca: 87 },
      { id: 'adrian-lopez-atm',    nome: "Adrián",              posicoes: ["ATA"],       forca: 80 },
      { id: 'diego-ribas-atm',     nome: "Diego Ribas",         posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'eduardo-salvio-atm',  nome: "Salvio",              posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'cristian-rodriguez-atm', nome: "Cebolla",          posicoes: ["ME","MEI"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2012,
    clube: "Levante",
    jogadores: [
      { id: 'gustavo-munua-lev',   nome: "Munúa",               posicoes: ["GOL"],       forca: 79 },
      { id: 'sergio-ballesteros-lev', nome: "Ballesteros",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'david-navarro-lev',   nome: "Navarro",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'hector-rodas-lev',    nome: "Rodas",               posicoes: ["ZAG"],       forca: 77 },
      { id: 'juanfran-garcia-lev', nome: "Juanfran (LEV)",      posicoes: ["LD","MD"],   forca: 78 },
      { id: 'xavi-venta-lev',      nome: "Xavi Venta",          posicoes: ["LE","MD"],   forca: 77 },
      { id: 'nano-rivas-lev',      nome: "Nano (LEV)",          posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'xisco-nadal-lev',     nome: "Xisco",               posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'ruben-suarez-lev',    nome: "Rubén Suárez",        posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'arouna-kone-lev',     nome: "Koné",                posicoes: ["ATA"],       forca: 81 },
      { id: 'felipe-caicedo-lev',  nome: "Caicedo",             posicoes: ["ATA"],       forca: 79 },
      { id: 'valdo-lev',           nome: "Valdo (LEV)",         posicoes: ["ME","MEI"],  forca: 78 },
      { id: 'sergio-martinez-lev', nome: "El Zhar",             posicoes: ["PD","MEI"],  forca: 77 },
      { id: 'vicente-iborra-lev',  nome: "Iborra",              posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2013 (temporada 2012-13) — o BARCELONA de Tito VILANOVA campeão (100 pts), 22º
  //  título, IGUALANDO o recorde de pontos do Real do ano anterior, 15 pts à frente. Recorde
  //  de 115 gols marcados; Messi Pichichi (46 gols). Temporada marcada pela luta de Tito
  //  contra o câncer. Top-6: Barcelona (100), Real Madrid (85), Atlético (76), Real Sociedad
  //  (66), Valencia (65), Málaga (57). Atlético de Simeone com Falcao brilhou (venceu a Copa
  //  batendo o Real na final). Real Sociedad voltou à Champions após anos (Griezmann jovem).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2013,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 86 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 86 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 84 },
      { id: 'carles-puyol',        nome: "Puyol",               posicoes: ["ZAG","LD"],  forca: 83 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'cesc-fabregas',       nome: "Cesc",                posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'pedro-rodriguez',     nome: "Pedro",               posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'alexis-sanchez-bcn',  nome: "Alexis Sánchez",      posicoes: ["ATA","PD"],  forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2013,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 88 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 85 },
      { id: 'alvaro-arbeloa',      nome: "Arbeloa",             posicoes: ["LD","LE"],   forca: 80 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'sami-khedira',        nome: "Khedira",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'mesut-ozil',          nome: "Özil",                posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'angel-di-maria',      nome: "Di María",            posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 86 },
      { id: 'gonzalo-higuain',     nome: "Higuaín",             posicoes: ["ATA"],       forca: 85 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2013,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 86 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 83 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 85 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 83 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mario-suarez-atm',    nome: "Mario Suárez",        posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'arda-turan-atm',      nome: "Arda Turan",          posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'radamel-falcao-atm',  nome: "Falcao",              posicoes: ["ATA"],       forca: 88 },
      { id: 'diego-costa-atm',     nome: "Diego Costa",         posicoes: ["ATA"],       forca: 83 },
      { id: 'adrian-lopez-atm',    nome: "Adrián",              posicoes: ["ATA"],       forca: 80 },
      { id: 'cristian-rodriguez-atm', nome: "Cebolla",          posicoes: ["ME","MEI"],  forca: 79 },
      { id: 'emiliano-insua-atm',  nome: "Insúa",               posicoes: ["LE","MD"],   forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2013,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'claudio-bravo-rs',    nome: "Bravo",               posicoes: ["GOL"],       forca: 82 },
      { id: 'carlos-martinez-rs',  nome: "Carlos Martínez",     posicoes: ["LD","MD"],   forca: 78 },
      { id: 'inigo-martinez-rs',   nome: "Íñigo Martínez",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'mikel-gonzalez-rs',   nome: "Mikel González",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'alberto-de-la-bella-rs', nome: "De la Bella",      posicoes: ["LE","MD"],   forca: 78 },
      { id: 'asier-illarramendi-rs', nome: "Illarramendi",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'ruben-pardo-rs',      nome: "Rubén Pardo",         posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'xabi-prieto-rs',      nome: "Xabi Prieto",         posicoes: ["MEI","MD"],  forca: 81 },
      { id: 'carlos-vela-rs',      nome: "Vela",                posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'imanol-agirretxe-rs', nome: "Agirretxe",           posicoes: ["ATA"],       forca: 79 },
      { id: 'gonzalo-castro-rs',   nome: "Castro (RS)",         posicoes: ["LD","MD"],   forca: 78 },
      { id: 'sergio-canales-rs',   nome: "Sergio Canales",      posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'markel-bergara-rs',   nome: "Bergara",             posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2013,
    clube: "Valencia",
    jogadores: [
      { id: 'vicente-guaita-val',  nome: "Guaita",              posicoes: ["GOL"],       forca: 80 },
      { id: 'joao-pereira-val',    nome: "João Pereira",        posicoes: ["LD","MD"],   forca: 79 },
      { id: 'adil-rami-val',       nome: "Rami",                posicoes: ["ZAG"],       forca: 81 },
      { id: 'ricardo-costa-val',   nome: "Ricardo Costa",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'jeremy-mathieu-val',  nome: "Mathieu",             posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'tino-costa-val',      nome: "Tino Costa",          posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'daniel-parejo-get',   nome: "Parejo",              posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'sofiane-feghouli-val', nome: "Feghouli",           posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'roberto-soldado-get', nome: "Soldado",             posicoes: ["ATA"],       forca: 85 },
      { id: 'jonas-goncalves-mll', nome: "Jonás",               posicoes: ["ATA"],       forca: 81 },
      { id: 'pablo-piatti-val',    nome: "Piatti",              posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'andres-guardado-val', nome: "Guardado",            posicoes: ["ME","MEI"],  forca: 80 },
      { id: 'fernando-gago-val',   nome: "Gago (VAL)",          posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2013,
    clube: "Málaga",
    jogadores: [
      { id: 'willy-caballero-mal', nome: "Caballero",           posicoes: ["GOL"],       forca: 80 },
      { id: 'jesus-gamez-mal',     nome: "Gámez",               posicoes: ["LD","LE"],   forca: 79 },
      { id: 'martin-demichelis-mal', nome: "Demichelis",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'weligton-robson-mal', nome: "Weligton",            posicoes: ["ZAG"],       forca: 79 },
      { id: 'sergio-sanchez-mal',  nome: "Sergio Sánchez",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'jeremy-toulalan-mal', nome: "Toulalan",            posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'ignacio-camacho-mal', nome: "Camacho",             posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'francisco-portillo-mal', nome: "Portillo",         posicoes: ["MEI","PD"],  forca: 78 },
      { id: 'joaquin-sanchez-mal', nome: "Joaquín (MAL)",       posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'javier-saviola-mal',  nome: "Saviola (MAL)",       posicoes: ["ATA"],       forca: 79 },
      { id: 'roque-santa-cruz-mal', nome: "Santa Cruz",         posicoes: ["ATA"],       forca: 79 },
      { id: 'seba-fernandez-mal',  nome: "Seba",                posicoes: ["ATA","PE"],  forca: 78 },
      { id: 'manuel-iturra-mal',   nome: "Iturra",              posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2014 (temporada 2013-14) — o ATLÉTICO DE MADRID de Diego SIMEONE campeão (90
  //  pts), 10º título HISTÓRICO, quebrando o duopólio Barça-Real após uma década! Título
  //  selado com empate 1-1 no Camp Nou na última rodada, num duelo a três que durou a
  //  temporada toda. Cristiano Ronaldo Pichichi (31 gols). Top-6: Atlético (90), Barcelona
  //  (87), Real Madrid (87), Athletic (70), Sevilla (63), Villarreal (59). Atlético também
  //  foi vice na Champions (perdeu a final nos acréscimos p/ o Real). Diego Costa artilheiro.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2014,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 87 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 83 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 84 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'tiago-mendes-atm',    nome: "Tiago",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'arda-turan-atm',      nome: "Arda Turan",          posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'raul-garcia-atm',     nome: "Raúl García",         posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'diego-costa-atm',     nome: "Diego Costa",         posicoes: ["ATA"],       forca: 86 },
      { id: 'david-villa',         nome: "David Villa",         posicoes: ["ATA"],       forca: 83 },
      { id: 'adrian-lopez-atm',    nome: "Adrián",              posicoes: ["ATA"],       forca: 80 },
      { id: 'jose-sosa-atm',       nome: "Sosa",                posicoes: ["MEI","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2014,
    clube: "Barcelona",
    jogadores: [
      { id: 'victor-valdes',       nome: "Víctor Valdés",       posicoes: ["GOL"],       forca: 85 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 85 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 85 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'cesc-fabregas',       nome: "Cesc",                posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 93 },
      { id: 'neymar-junior',       nome: "Neymar",              posicoes: ["PE","ATA"],  forca: 86 },
      { id: 'alexis-sanchez-bcn',  nome: "Alexis Sánchez",      posicoes: ["ATA","PD"],  forca: 84 },
      { id: 'pedro-rodriguez',     nome: "Pedro",               posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'sergi-roberto-bcn',  nome: "Sergi Roberto",       posicoes: ["MC","LD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2014,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 86 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 86 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 81 },
      { id: 'xabi-alonso',         nome: "Xabi Alonso",         posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'angel-di-maria',      nome: "Di María",            posicoes: ["PE","MEI"],  forca: 86 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 86 },
      { id: 'gareth-bale-rm',      nome: "Bale",                posicoes: ["PD","ATA"],  forca: 88 },
      { id: 'sami-khedira',        nome: "Khedira",             posicoes: ["VOL","MC"],  forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2014,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'gorka-iraizoz-ath',   nome: "Iraizoz",             posicoes: ["GOL"],       forca: 79 },
      { id: 'andoni-iraola-ath',   nome: "Iraola",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'aymeric-laporte-ath', nome: "Laporte",             posicoes: ["ZAG"],       forca: 82 },
      { id: 'mikel-san-jose-ath',  nome: "San José",            posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'carlos-gurpegui',     nome: "Gurpegui",            posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'ander-iturraspe-ath', nome: "Iturraspe",           posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'ander-herrera-ath',   nome: "Ander Herrera",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'markel-susaeta-ath',  nome: "Susaeta",             posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'iker-muniain-ath',    nome: "Muniain",             posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'ibai-gomez-ath',      nome: "Ibai",                posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'aritz-aduriz-mll',    nome: "Aduriz",              posicoes: ["ATA"],       forca: 82 },
      { id: 'oscar-de-marcos-ath', nome: "De Marcos",           posicoes: ["MD","LD"],   forca: 79 },
      { id: 'mikel-rico-ath',      nome: "Mikel Rico",          posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'borja-viguera-ath',   nome: "Viguera",             posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2014,
    clube: "Sevilla",
    jogadores: [
      { id: 'beto-pimparel-sev',   nome: "Beto",                posicoes: ["GOL"],       forca: 80 },
      { id: 'daniel-carrico-sev',  nome: "Carriço",             posicoes: ["ZAG"],       forca: 79 },
      { id: 'federico-fazio-sev',  nome: "Fazio",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'alberto-moreno-sev',  nome: "Alberto Moreno",      posicoes: ["LE","MD"],   forca: 80 },
      { id: 'coke-galvez-sev',     nome: "Coke",                posicoes: ["LD","MD"],   forca: 79 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'stephane-mbia-sev',   nome: "M'Bia",               posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'vitolo-machin-sev',   nome: "Vitolo",              posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'jose-antonio-reyes',  nome: "Reyes",               posicoes: ["PE","ATA"],  forca: 79 },
      { id: 'carlos-bacca-sev',    nome: "Bacca",               posicoes: ["ATA"],       forca: 82 },
      { id: 'kevin-gameiro-sev',   nome: "Gameiro",             posicoes: ["ATA"],       forca: 81 },
      { id: 'marko-marin-sev',     nome: "Marin",               posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'nicolas-pareja-sev',  nome: "Pareja",              posicoes: ["ZAG"],       forca: 79 },
      { id: 'diogo-figueiras-sev', nome: "Figueiras",           posicoes: ["LD","MD"],   forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2014,
    clube: "Villarreal",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 81 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 80 },
      { id: 'gabriel-paulista-vil', nome: "Gabriel",            posicoes: ["ZAG"],       forca: 80 },
      { id: 'victor-ruiz-val',     nome: "Víctor Ruiz",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'mateo-musacchio-vil', nome: "Musacchio",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'tomas-pina-mll',      nome: "Pina",                posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'cani-villarreal',     nome: "Cani",                posicoes: ["MEI","PD"],  forca: 79 },
      { id: 'jonathan-pereira-vil', nome: "Jona",               posicoes: ["PD","MEI"],  forca: 78 },
      { id: 'giovani-dos-santos-vil', nome: "Gio dos Santos",   posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'jeremy-perbet-vil',   nome: "Perbet",              posicoes: ["ATA"],       forca: 78 },
      { id: 'ikechukwu-uche-vil',  nome: "Uche",                posicoes: ["ATA"],       forca: 79 },
      { id: 'manu-trigueros-vil',  nome: "Trigueros",           posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'moi-gomez-vil',       nome: "Moi Gómez",           posicoes: ["ME","MEI"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2015 (temporada 2014-15) — o BARCELONA de Luis ENRIQUE campeão (94 pts), 23º
  //  título, o auge do TRIO MSN (Messi-Suárez-Neymar), que marcou 122 gols juntos na
  //  temporada. Barça fez a TRÍPLICE COROA (liga, Copa, Champions). Cristiano Pichichi (48
  //  gols). Título selado no Calderón contra o Atlético. Top-6: Barcelona (94), Real Madrid
  //  (92), Atlético (78), Valencia (77), Sevilla (76), Villarreal (60). Igualou recorde de
  //  saldo (+89). Valencia de Nuno voltou forte (4º). Sevilla bi da Europa League.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2015,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 84 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 85 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 85 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'xavi-hernandez',      nome: "Xavi",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 90 },
      { id: 'neymar-junior',       nome: "Neymar",              posicoes: ["PE","ATA"],  forca: 88 },
      { id: 'pedro-rodriguez',     nome: "Pedro",               posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'sergi-roberto-bcn',  nome: "Sergi Roberto",       posicoes: ["MC","LD"],   forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2015,
    clube: "Real Madrid",
    jogadores: [
      { id: 'iker-casillas',       nome: "Casillas",            posicoes: ["GOL"],       forca: 85 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG","VOL"], forca: 85 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 87 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 83 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'james-rodriguez-rm',  nome: "James",               posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'gareth-bale-rm',      nome: "Bale",                posicoes: ["PD","ATA"],  forca: 88 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 93 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 87 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'javier-hernandez-chicharito', nome: "Chicharito",  posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2015,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 83 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 83 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'guilherme-siqueira-atm', nome: "Siqueira",         posicoes: ["LE","MD"],   forca: 80 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'tiago-mendes-atm',    nome: "Tiago",               posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'arda-turan-atm',      nome: "Arda Turan",          posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'mario-mandzukic-atm', nome: "Mandžukić",           posicoes: ["ATA"],       forca: 84 },
      { id: 'raul-garcia-atm',     nome: "Raúl García",         posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'cristian-ansaldi-atm', nome: "Ansaldi",            posicoes: ["LE","LD"],   forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2015,
    clube: "Valencia",
    jogadores: [
      { id: 'diego-alves-val',     nome: "Diego Alves",         posicoes: ["GOL"],       forca: 81 },
      { id: 'antonio-barragan-val', nome: "Barragán",           posicoes: ["LD","MD"],   forca: 79 },
      { id: 'nicolas-otamendi-val', nome: "Otamendi",           posicoes: ["ZAG"],       forca: 83 },
      { id: 'shkodran-mustafi-val', nome: "Mustafi",            posicoes: ["ZAG"],       forca: 81 },
      { id: 'jose-gaya-val',       nome: "Gayà",                posicoes: ["LE","MD"],   forca: 80 },
      { id: 'javi-fuego-val',      nome: "Javi Fuego",          posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'daniel-parejo-get',   nome: "Parejo",              posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'andre-gomes-val',     nome: "André Gomes",         posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'sofiane-feghouli-val', nome: "Feghouli",           posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'pablo-piatti-val',    nome: "Piatti",              posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'paco-alcacer-val',    nome: "Alcácer",             posicoes: ["ATA"],       forca: 81 },
      { id: 'alvaro-negredo-sev',  nome: "Negredo",             posicoes: ["ATA"],       forca: 82 },
      { id: 'rodrigo-moreno-val',  nome: "Rodrigo",             posicoes: ["ATA"],       forca: 81 },
      { id: 'lucas-orban-val',     nome: "Orbán",               posicoes: ["ZAG","LD"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2015,
    clube: "Sevilla",
    jogadores: [
      { id: 'sergio-rico-sev',     nome: "Sergio Rico",         posicoes: ["GOL"],       forca: 80 },
      { id: 'coke-galvez-sev',     nome: "Coke",                posicoes: ["LD","MD"],   forca: 79 },
      { id: 'nicolas-pareja-sev',  nome: "Pareja",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'timothee-kolodziejczak-sev', nome: "Kolo",         posicoes: ["ZAG","LE"],  forca: 79 },
      { id: 'benoit-tremoulinas-sev', nome: "Trémoulinas",      posicoes: ["LE","MD"],   forca: 79 },
      { id: 'grzegorz-krychowiak-sev', nome: "Krychowiak",      posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'vitolo-machin-sev',   nome: "Vitolo",              posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'aleix-vidal-sev',     nome: "Aleix Vidal",         posicoes: ["PD","LD"],   forca: 81 },
      { id: 'carlos-bacca-sev',    nome: "Bacca",               posicoes: ["ATA"],       forca: 83 },
      { id: 'kevin-gameiro-sev',   nome: "Gameiro",             posicoes: ["ATA"],       forca: 82 },
      { id: 'jose-antonio-reyes',  nome: "Reyes",               posicoes: ["PE","ATA"],  forca: 78 },
      { id: 'daniel-carrico-sev',  nome: "Carriço",             posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'denis-suarez-sev',    nome: "Denis Suárez",        posicoes: ["MEI","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2015,
    clube: "Villarreal",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 82 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 80 },
      { id: 'mateo-musacchio-vil', nome: "Musacchio",           posicoes: ["ZAG"],       forca: 81 },
      { id: 'victor-ruiz-val',     nome: "Víctor Ruiz",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'jaume-costa-vil',     nome: "Jaume Costa",         posicoes: ["LE","MD"],   forca: 79 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'tomas-pina-mll',      nome: "Pina",                posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'moi-gomez-vil',       nome: "Moi Gómez",           posicoes: ["ME","MEI"],  forca: 78 },
      { id: 'manu-trigueros-vil',  nome: "Trigueros",           posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'giovani-dos-santos-vil', nome: "Gio dos Santos",   posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'luciano-vietto-vil',  nome: "Vietto",              posicoes: ["ATA"],       forca: 81 },
      { id: 'ikechukwu-uche-vil',  nome: "Uche",                posicoes: ["ATA"],       forca: 78 },
      { id: 'denis-cheryshev-vil', nome: "Cheryshev",           posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'gerard-moreno-vil',   nome: "Gerard Moreno",       posicoes: ["ATA"],       forca: 80 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2016 (temporada 2015-16) — o BARCELONA de Luis ENRIQUE BICAMPEÃO (91 pts), 24º
  //  título, o trio MSN repetindo a dose numa disputa acirradíssima A TRÊS (Barça 91, Real
  //  90, Atlético 88). Suárez Pichichi (40 gols), Oblak melhor goleiro. Título selado com
  //  3-0 no Granada na última rodada. Top-6: Barcelona (91), Real Madrid (90), Atlético
  //  (88), Villarreal (64), Athletic (62), Celta (60). Real de Zidane (assumiu em jan/2016)
  //  ficou perto. Atlético foi de novo vice na Champions (perdeu p/ o Real nos pênaltis).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2016,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 85 },
      { id: 'daniel-alves',        nome: "Daniel Alves",        posicoes: ["LD","MD"],   forca: 85 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 83 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 85 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 91 },
      { id: 'neymar-junior',       nome: "Neymar",              posicoes: ["PE","ATA"],  forca: 89 },
      { id: 'arda-turan-atm',      nome: "Arda Turan",          posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'sergi-roberto-bcn',  nome: "Sergi Roberto",       posicoes: ["MC","LD"],   forca: 81 },
      { id: 'jeremy-mathieu-val',  nome: "Mathieu",             posicoes: ["ZAG","LE"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2016,
    clube: "Real Madrid",
    jogadores: [
      { id: 'keylor-navas-rm',     nome: "Keylor Navas",        posicoes: ["GOL"],       forca: 84 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'pepe-pereira',        nome: "Pepe",                posicoes: ["ZAG","VOL"], forca: 84 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 87 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 84 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'gareth-bale-rm',      nome: "Bale",                posicoes: ["PD","ATA"],  forca: 88 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 92 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 87 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'james-rodriguez-rm',  nome: "James",               posicoes: ["MEI","PE"],  forca: 84 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2016,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 85 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 83 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 83 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'augusto-fernandez-atm', nome: "Augusto",           posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 88 },
      { id: 'fernando-torres-atm', nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 82 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'jackson-martinez-atm', nome: "Jackson",            posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2016,
    clube: "Villarreal",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 83 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 81 },
      { id: 'victor-ruiz-val',     nome: "Víctor Ruiz",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'eric-bailly-vil',     nome: "Bailly",              posicoes: ["ZAG"],       forca: 81 },
      { id: 'jaume-costa-vil',     nome: "Jaume Costa",         posicoes: ["LE","MD"],   forca: 79 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'manu-trigueros-vil',  nome: "Trigueros",           posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'denis-suarez-sev',    nome: "Denis Suárez",        posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'samu-castillejo-vil', nome: "Castillejo",          posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'cedric-bakambu-vil',  nome: "Bakambu",             posicoes: ["ATA"],       forca: 81 },
      { id: 'roberto-soldado-get', nome: "Soldado",             posicoes: ["ATA"],       forca: 80 },
      { id: 'leo-baptistao-vil',   nome: "Baptistão",           posicoes: ["ATA","PE"],  forca: 78 },
      { id: 'mateo-musacchio-vil', nome: "Musacchio",           posicoes: ["ZAG"],       forca: 80 },
      { id: 'tomas-pina-mll',      nome: "Pina",                posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2016,
    clube: "Athletic Bilbao",
    jogadores: [
      { id: 'gorka-iraizoz-ath',   nome: "Iraizoz",             posicoes: ["GOL"],       forca: 79 },
      { id: 'oscar-de-marcos-ath', nome: "De Marcos",           posicoes: ["LD","MD"],   forca: 80 },
      { id: 'aymeric-laporte-ath', nome: "Laporte",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'xabier-etxeita-ath',  nome: "Etxeita",             posicoes: ["ZAG"],       forca: 78 },
      { id: 'mikel-balenziaga-ath', nome: "Balenziaga",         posicoes: ["LE","MD"],   forca: 78 },
      { id: 'ander-iturraspe-ath', nome: "Iturraspe",           posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'mikel-san-jose-ath',  nome: "San José",            posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'markel-susaeta-ath',  nome: "Susaeta",             posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'iker-muniain-ath',    nome: "Muniain",             posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'raul-garcia-ath',     nome: "Raúl García (ATH)",   posicoes: ["MC","ATA"],  forca: 81 },
      { id: 'aritz-aduriz-mll',    nome: "Aduriz",              posicoes: ["ATA"],       forca: 84 },
      { id: 'beñat-etxebarria-ath', nome: "Beñat",              posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'mikel-rico-ath',      nome: "Mikel Rico",          posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'inaki-williams-ath',  nome: "Williams",            posicoes: ["ATA","PD"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2016,
    clube: "Celta Vigo",
    jogadores: [
      { id: 'sergio-alvarez-cel',  nome: "Sergio Álvarez",      posicoes: ["GOL"],       forca: 79 },
      { id: 'hugo-mallo-cel',      nome: "Hugo Mallo",          posicoes: ["LD","MD"],   forca: 79 },
      { id: 'gustavo-cabral-cel',  nome: "Cabral",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'jonny-castro-cel',    nome: "Jonny",               posicoes: ["LE","LD"],   forca: 79 },
      { id: 'sergi-gomez-cel',     nome: "Sergi Gómez",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'nemanja-radoja-cel',  nome: "Radoja",              posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'daniel-wass-cel',     nome: "Wass",                posicoes: ["MC","MD"],   forca: 80 },
      { id: 'nolito-cel',          nome: "Nolito",              posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'fabian-orellana-cel', nome: "Orellana",            posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'iago-aspas-cel',      nome: "Iago Aspas",          posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'john-guidetti-cel',   nome: "Guidetti",            posicoes: ["ATA"],       forca: 79 },
      { id: 'pape-cheikh-cel',     nome: "Pape Cheikh",         posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'marcelo-diaz-cel',    nome: "Marcelo Díaz",        posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'pione-sisto-cel',     nome: "Sisto",               posicoes: ["PE","MEI"],  forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2017 (temporada 2016-17) — o REAL MADRID de Zinedine ZIDANE campeão (93 pts),
  //  33º título, encerrando a SECA de 5 anos na liga (desde 2011-12), 3 pts à frente do
  //  Barça (90). Messi Pichichi (37 gols). Real e Barça somaram 222 gols (recorde da dupla).
  //  Título selado com 2-0 no Málaga na última rodada. Top-6: Real Madrid (93), Barcelona
  //  (90), Atlético (78), Sevilla (72), Villarreal (67), Real Sociedad (64). Real também
  //  bi da Champions (Zidane). Sevilla de Sampaoli surpreendeu. Trio BBC no auge.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2017,
    clube: "Real Madrid",
    jogadores: [
      { id: 'keylor-navas-rm',     nome: "Keylor Navas",        posicoes: ["GOL"],       forca: 84 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 89 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'nacho-fernandez-rm',  nome: "Nacho",               posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 87 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 85 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 92 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 86 },
      { id: 'gareth-bale-rm',      nome: "Bale",                posicoes: ["PD","ATA"],  forca: 87 },
      { id: 'james-rodriguez-rm',  nome: "James",               posicoes: ["MEI","PE"],  forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2017,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 86 },
      { id: 'sergi-roberto-bcn',   nome: "Sergi Roberto",       posicoes: ["LD","MC"],   forca: 82 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'samuel-umtiti-bcn',   nome: "Umtiti",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 85 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 90 },
      { id: 'neymar-junior',       nome: "Neymar",              posicoes: ["PE","ATA"],  forca: 90 },
      { id: 'andre-gomes-val',     nome: "André Gomes",         posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'paco-alcacer-val',    nome: "Alcácer",             posicoes: ["ATA"],       forca: 80 },
      { id: 'javier-mascherano',   nome: "Mascherano",          posicoes: ["VOL","ZAG"], forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2017,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 87 },
      { id: 'juanfran-torres-atm', nome: "Juanfran (ATM)",      posicoes: ["LD","MD"],   forca: 82 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 83 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 88 },
      { id: 'kevin-gameiro-sev',   nome: "Gameiro",             posicoes: ["ATA"],       forca: 81 },
      { id: 'fernando-torres-atm', nome: "Fernando Torres",     posicoes: ["ATA"],       forca: 80 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'stefan-savic-atm',    nome: "Savić",               posicoes: ["ZAG"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2017,
    clube: "Sevilla",
    jogadores: [
      { id: 'sergio-rico-sev',     nome: "Sergio Rico",         posicoes: ["GOL"],       forca: 80 },
      { id: 'mariano-ferreira-sev', nome: "Mariano",            posicoes: ["LD","MD"],   forca: 79 },
      { id: 'nicolas-pareja-sev',  nome: "Pareja",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'adil-rami-val',       nome: "Rami",                posicoes: ["ZAG"],       forca: 80 },
      { id: 'sergio-escudero-sev', nome: "Escudero",            posicoes: ["LE","MD"],   forca: 79 },
      { id: 'steven-nzonzi-sev',   nome: "N'Zonzi",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'vicente-iborra-lev',  nome: "Iborra",              posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'samir-nasri-sev',     nome: "Nasri",               posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'vitolo-machin-sev',   nome: "Vitolo",              posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'pablo-sarabia-sev',   nome: "Sarabia",             posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'wissam-ben-yedder-sev', nome: "Ben Yedder",        posicoes: ["ATA"],       forca: 81 },
      { id: 'luciano-vietto-vil',  nome: "Vietto",              posicoes: ["ATA"],       forca: 79 },
      { id: 'stevan-jovetic-sev',  nome: "Jovetić",             posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'gabriel-mercado-sev', nome: "Mercado",             posicoes: ["ZAG","LD"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2017,
    clube: "Villarreal",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 83 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 81 },
      { id: 'victor-ruiz-val',     nome: "Víctor Ruiz",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'daniele-bonera-vil',  nome: "Bonera",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'jaume-costa-vil',     nome: "Jaume Costa",         posicoes: ["LE","MD"],   forca: 80 },
      { id: 'bruno-soriano-vil',   nome: "Bruno",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'manu-trigueros-vil',  nome: "Trigueros",           posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'roberto-soldado-get', nome: "Soldado",             posicoes: ["ATA"],       forca: 80 },
      { id: 'samu-castillejo-vil', nome: "Castillejo",          posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'cedric-bakambu-vil',  nome: "Bakambu",             posicoes: ["ATA"],       forca: 82 },
      { id: 'nicola-sansone-vil',  nome: "Sansone",             posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'denis-suarez-sev',    nome: "Denis Suárez",        posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'rodri-hernandez-vil', nome: "Rodri",               posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'alfred-njie-vil',     nome: "Njie",                posicoes: ["ATA","PE"],  forca: 77 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2017,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'geronimo-rulli-rs',   nome: "Rulli",               posicoes: ["GOL"],       forca: 80 },
      { id: 'carlos-martinez-rs',  nome: "Carlos Martínez",     posicoes: ["LD","MD"],   forca: 78 },
      { id: 'inigo-martinez-rs',   nome: "Íñigo Martínez",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'raul-navas-rs',       nome: "Raúl Navas",          posicoes: ["ZAG"],       forca: 78 },
      { id: 'yuri-berchiche-rs',   nome: "Yuri Berchiche",      posicoes: ["LE","MD"],   forca: 80 },
      { id: 'asier-illarramendi-rs', nome: "Illarramendi",      posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'david-zurutuza-rs',   nome: "Zurutuza",            posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'xabi-prieto-rs',      nome: "Xabi Prieto",         posicoes: ["MEI","MD"],  forca: 80 },
      { id: 'carlos-vela-rs',      nome: "Vela",                posicoes: ["PE","ATA"],  forca: 82 },
      { id: 'willian-jose-rs',     nome: "Willian José",        posicoes: ["ATA"],       forca: 81 },
      { id: 'juanmi-jimenez-rs',   nome: "Juanmi (RS)",         posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'mikel-oyarzabal-rs',  nome: "Oyarzabal",           posicoes: ["PE","MEI"],  forca: 81 },
      { id: 'sergio-canales-rs',   nome: "Sergio Canales",      posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'jon-bautista-rs',     nome: "Bautista",            posicoes: ["ATA"],       forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2018 (temporada 2017-18) — o BARCELONA de Ernesto VALVERDE campeão (93 pts),
  //  25º título, INVICTO na liga (recorde de 36 jogos de invencibilidade), conquistado com
  //  4 rodadas de antecedência. Fez a dobradinha (liga + Copa). Messi Pichichi (34 gols).
  //  Top-6: Barcelona (93), Atlético (79), Real Madrid (76), Valencia (73), Villarreal (61),
  //  Betis (60). Coutinho e Dembélé chegaram ao Barça. Valencia de Marcelino renasceu (4º).
  //  Betis de Quique Setién voltou à Europa jogando bonito. Entra Real Betis no acervo.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2018,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 87 },
      { id: 'nelson-semedo-bcn',   nome: "Semedo",              posicoes: ["LD","MD"],   forca: 81 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'samuel-umtiti-bcn',   nome: "Umtiti",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 86 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'andres-iniesta',      nome: "Iniesta",             posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'philippe-coutinho-bcn', nome: "Coutinho",          posicoes: ["MEI","PE"],  forca: 85 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 89 },
      { id: 'ousmane-dembele-bcn', nome: "Dembélé",             posicoes: ["PE","PD"],   forca: 82 },
      { id: 'paulinho-bezerra-bcn', nome: "Paulinho",           posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'sergi-roberto-bcn',   nome: "Sergi Roberto",       posicoes: ["LD","MC"],   forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2018,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 88 },
      { id: 'sime-vrsaljko-atm',   nome: "Vrsaljko",            posicoes: ["LD","MD"],   forca: 80 },
      { id: 'joao-miranda-atm',    nome: "Miranda",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 83 },
      { id: 'gabi-fernandez-zar',  nome: "Gabi",                posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'thomas-partey-atm',   nome: "Thomas",              posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 88 },
      { id: 'diego-costa-atm',     nome: "Diego Costa",         posicoes: ["ATA"],       forca: 84 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'kevin-gameiro-sev',   nome: "Gameiro",             posicoes: ["ATA"],       forca: 80 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2018,
    clube: "Real Madrid",
    jogadores: [
      { id: 'keylor-navas-rm',     nome: "Keylor Navas",        posicoes: ["GOL"],       forca: 84 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 84 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 89 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 87 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'cristiano-ronaldo',   nome: "Cristiano Ronaldo",   posicoes: ["ATA","PE"],  forca: 91 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 85 },
      { id: 'gareth-bale-rm',      nome: "Bale",                posicoes: ["PD","ATA"],  forca: 86 },
      { id: 'marco-asensio-rm',    nome: "Asensio",             posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'lucas-vazquez-rm',    nome: "Lucas Vázquez",       posicoes: ["PD","MD"],   forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2018,
    clube: "Valencia",
    jogadores: [
      { id: 'neto-murara-val',     nome: "Neto",                posicoes: ["GOL"],       forca: 81 },
      { id: 'martin-montoya-val',  nome: "Montoya",             posicoes: ["LD","MD"],   forca: 79 },
      { id: 'gabriel-paulista-vil', nome: "Gabriel",            posicoes: ["ZAG"],       forca: 81 },
      { id: 'ezequiel-garay-rac',  nome: "Garay",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'jose-gaya-val',       nome: "Gayà",                posicoes: ["LE","MD"],   forca: 82 },
      { id: 'daniel-parejo-get',   nome: "Parejo",              posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'geoffrey-kondogbia-val', nome: "Kondogbia",        posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'carlos-soler-val',    nome: "Soler",               posicoes: ["MC","MD"],   forca: 80 },
      { id: 'goncalo-guedes-val',  nome: "Guedes",              posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'rodrigo-moreno-val',  nome: "Rodrigo",             posicoes: ["ATA"],       forca: 83 },
      { id: 'simone-zaza-val',     nome: "Zaza",                posicoes: ["ATA"],       forca: 80 },
      { id: 'santi-mina-val',      nome: "Santi Mina",          posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'francis-coquelin-val', nome: "Coquelin",           posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'andreas-pereira-val', nome: "Andreas Pereira",     posicoes: ["MEI","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2018,
    clube: "Villarreal",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 82 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 81 },
      { id: 'victor-ruiz-val',     nome: "Víctor Ruiz",         posicoes: ["ZAG"],       forca: 81 },
      { id: 'alvaro-gonzalez-vil', nome: "Álvaro González",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'jaume-costa-vil',     nome: "Jaume Costa",         posicoes: ["LE","MD"],   forca: 80 },
      { id: 'manu-trigueros-vil',  nome: "Trigueros",           posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'rodri-hernandez-vil', nome: "Rodri",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'pablo-fornals-vil',   nome: "Fornals",             posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'samu-castillejo-vil', nome: "Castillejo",          posicoes: ["PD","MEI"],  forca: 80 },
      { id: 'carlos-bacca-sev',    nome: "Bacca",               posicoes: ["ATA"],       forca: 81 },
      { id: 'enes-unal-vil',       nome: "Ünal",                posicoes: ["ATA"],       forca: 78 },
      { id: 'cedric-bakambu-vil',  nome: "Bakambu",             posicoes: ["ATA"],       forca: 81 },
      { id: 'daniele-bonera-vil',  nome: "Bonera",              posicoes: ["ZAG"],       forca: 77 },
      { id: 'javi-fuego-val',      nome: "Javi Fuego",          posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2018,
    clube: "Real Betis",
    jogadores: [
      { id: 'antonio-adan-bet',    nome: "Adán",                posicoes: ["GOL"],       forca: 79 },
      { id: 'antonio-barragan-val', nome: "Barragán",           posicoes: ["LD","MD"],   forca: 78 },
      { id: 'aissa-mandi-bet',     nome: "Mandi",               posicoes: ["ZAG"],       forca: 80 },
      { id: 'zouhair-feddal-bet',  nome: "Feddal",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'junior-firpo-bet',    nome: "Junior Firpo",        posicoes: ["LE","MD"],   forca: 78 },
      { id: 'javi-garcia-bet',     nome: "Javi García",         posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'fabian-ruiz-bet',     nome: "Fabián",              posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'andres-guardado-val', nome: "Guardado",            posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'joaquin-sanchez-bet', nome: "Joaquín (BET)",       posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'sergio-leon-bet',     nome: "Sergio León",         posicoes: ["ATA"],       forca: 78 },
      { id: 'antonio-sanabria-bet', nome: "Sanabria",           posicoes: ["ATA"],       forca: 78 },
      { id: 'cristian-tello-bet',  nome: "Tello",               posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'francis-guerrero-bet', nome: "Francis",            posicoes: ["LE","MD"],   forca: 77 },
      { id: 'ryad-boudebouz-bet',  nome: "Boudebouz",           posicoes: ["MEI","MC"],  forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2019 (temporada 2018-19) — o BARCELONA de Valverde BICAMPEÃO (87 pts), 26º título
  //  (2º seguido, 8º em 11 anos), selado com 1-0 no Levante 3 rodadas antes. Messi Pichichi
  //  (36 gols) e 1º a chegar a 400 gols na liga. Top-6: Barcelona (87), Atlético (76), Real
  //  Madrid (68), Valencia (61), Getafe (59, RECORDE do clube), Sevilla (59). Real de Zidane
  //  (voltou em mar/2019) teve péssima temporada (3º, longe). Getafe de Bordalás surpreendeu.
  //  Ano da virada histórica do Liverpool 4-0 sobre o Barça na Champions.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2019,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 88 },
      { id: 'nelson-semedo-bcn',   nome: "Semedo",              posicoes: ["LD","MD"],   forca: 82 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 87 },
      { id: 'clement-lenglet-bcn', nome: "Lenglet",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 87 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'arthur-melo-bcn',     nome: "Arthur",              posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'philippe-coutinho-bcn', nome: "Coutinho",          posicoes: ["MEI","PE"],  forca: 84 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 94 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 88 },
      { id: 'ousmane-dembele-bcn', nome: "Dembélé",             posicoes: ["PE","PD"],   forca: 83 },
      { id: 'arturo-vidal-bcn',    nome: "Arturo Vidal",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'sergi-roberto-bcn',   nome: "Sergi Roberto",       posicoes: ["LD","MC"],   forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2019,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 89 },
      { id: 'santiago-arias-atm',  nome: "Arias",               posicoes: ["LD","MD"],   forca: 80 },
      { id: 'jose-gimenez-atm',    nome: "Giménez",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'diego-godin-vil',     nome: "Godín",               posicoes: ["ZAG"],       forca: 85 },
      { id: 'filipe-luis-atm',     nome: "Filipe Luís",         posicoes: ["LE","MD"],   forca: 82 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'rodri-hernandez-vil', nome: "Rodri",               posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'thomas-partey-atm',   nome: "Thomas",              posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 89 },
      { id: 'diego-costa-atm',     nome: "Diego Costa",         posicoes: ["ATA"],       forca: 83 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'thomas-lemar-atm',    nome: "Lemar",               posicoes: ["MEI","PE"],  forca: 82 },
      { id: 'nikola-kalinic-atm',  nome: "Kalinić",             posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2019,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 87 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 84 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 89 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'marcelo-vieira',      nome: "Marcelo",             posicoes: ["LE","MD"],   forca: 85 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 89 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 86 },
      { id: 'gareth-bale-rm',      nome: "Bale",                posicoes: ["PD","ATA"],  forca: 85 },
      { id: 'marco-asensio-rm',    nome: "Asensio",             posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'lucas-vazquez-rm',    nome: "Lucas Vázquez",       posicoes: ["PD","MD"],   forca: 81 },
      { id: 'vinicius-junior-rm',  nome: "Vinícius Jr",         posicoes: ["PE","ATA"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2019,
    clube: "Valencia",
    jogadores: [
      { id: 'neto-murara-val',     nome: "Neto",                posicoes: ["GOL"],       forca: 82 },
      { id: 'daniel-wass-cel',     nome: "Wass",                posicoes: ["LD","MC"],   forca: 80 },
      { id: 'gabriel-paulista-vil', nome: "Gabriel",            posicoes: ["ZAG"],       forca: 82 },
      { id: 'ezequiel-garay-rac',  nome: "Garay",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'jose-gaya-val',       nome: "Gayà",                posicoes: ["LE","MD"],   forca: 83 },
      { id: 'daniel-parejo-get',   nome: "Parejo",              posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'geoffrey-kondogbia-val', nome: "Kondogbia",        posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'carlos-soler-val',    nome: "Soler",               posicoes: ["MC","MD"],   forca: 81 },
      { id: 'goncalo-guedes-val',  nome: "Guedes",              posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'rodrigo-moreno-val',  nome: "Rodrigo",             posicoes: ["ATA"],       forca: 83 },
      { id: 'kevin-gameiro-sev',   nome: "Gameiro",             posicoes: ["ATA"],       forca: 80 },
      { id: 'santi-mina-val',      nome: "Santi Mina",          posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'denis-cheryshev-vil', nome: "Cheryshev",           posicoes: ["PE","MEI"],  forca: 79 },
      { id: 'francis-coquelin-val', nome: "Coquelin",           posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2019,
    clube: "Getafe",
    jogadores: [
      { id: 'david-soria-get',     nome: "David Soria",         posicoes: ["GOL"],       forca: 80 },
      { id: 'damian-suarez-get',   nome: "Damián Suárez",       posicoes: ["LD","MD"],   forca: 79 },
      { id: 'djene-dakonam-get',   nome: "Djené",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'bruno-gonzalez-get',  nome: "Bruno González",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'antunes-manuel-get',  nome: "Antunes",             posicoes: ["LE","MD"],   forca: 78 },
      { id: 'nemanja-maksimovic-get', nome: "Maksimović",       posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'mauro-arambarri-get', nome: "Arambarri",           posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'francisco-portillo-mal', nome: "Portillo",         posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'amath-ndiaye-get',    nome: "Amath",               posicoes: ["PD","PE"],   forca: 77 },
      { id: 'jaime-mata-get',      nome: "Jaime Mata",          posicoes: ["ATA"],       forca: 79 },
      { id: 'jorge-molina-get',    nome: "Jorge Molina",        posicoes: ["ATA"],       forca: 79 },
      { id: 'angel-rodriguez-get', nome: "Ángel (GET)",         posicoes: ["ATA"],       forca: 78 },
      { id: 'faycal-fajr-get',     nome: "Fajr",                posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'leandro-cabrera-get', nome: "Cabrera",             posicoes: ["ZAG"],       forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2019,
    clube: "Sevilla",
    jogadores: [
      { id: 'tomas-vaclik-sev',    nome: "Vaclík",              posicoes: ["GOL"],       forca: 80 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["LD","PD"],   forca: 81 },
      { id: 'simon-kjaer-sev',     nome: "Kjær",                posicoes: ["ZAG"],       forca: 81 },
      { id: 'gabriel-mercado-sev', nome: "Mercado",             posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'sergio-escudero-sev', nome: "Escudero",            posicoes: ["LE","MD"],   forca: 79 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'roque-mesa-sev',      nome: "Roque Mesa",          posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'pablo-sarabia-sev',   nome: "Sarabia",             posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'wissam-ben-yedder-sev', nome: "Ben Yedder",        posicoes: ["ATA"],       forca: 83 },
      { id: 'andre-silva-sev',     nome: "André Silva",         posicoes: ["ATA"],       forca: 81 },
      { id: 'munir-el-haddadi-sev', nome: "Munir",              posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'quincy-promes-sev',   nome: "Promes",              posicoes: ["PE","ATA"],  forca: 80 },
      { id: 'franco-vazquez-sev',  nome: "Franco Vázquez",      posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'daniel-carrico-sev',  nome: "Carriço",             posicoes: ["ZAG","VOL"], forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2020 (temporada 2019-20) — o REAL MADRID de Zinedine ZIDANE campeão (87 pts),
  //  34º título, conquistado na RETOMADA PÓS-PANDEMIA de COVID-19 (venceu 10 jogos seguidos
  //  após a paralisação). Selado com 2-1 no Villarreal na penúltima rodada. Courtois melhor
  //  goleiro; Messi Pichichi (25 gols). Top-6: Real Madrid (87), Barcelona (82), Atlético
  //  (70), Sevilla (70), Villarreal (60), Real Sociedad (56). Hazard chegou ao Real (lesões);
  //  Griezmann foi ao Barça. Temporada com jogos sem público. Benzema líder do Real.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2020,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 88 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 84 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 86 },
      { id: 'ferland-mendy-rm',    nome: "Mendy",               posicoes: ["LE","MD"],   forca: 82 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'fede-valverde-rm',    nome: "Fede Valverde",       posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 88 },
      { id: 'eden-hazard-rm',      nome: "Hazard",              posicoes: ["PE","MEI"],  forca: 85 },
      { id: 'marco-asensio-rm',    nome: "Asensio",             posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'isco-alarcon-mal',    nome: "Isco",                posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'vinicius-junior-rm',  nome: "Vinícius Jr",         posicoes: ["PE","ATA"],  forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2020,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 89 },
      { id: 'nelson-semedo-bcn',   nome: "Semedo",              posicoes: ["LD","MD"],   forca: 82 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 86 },
      { id: 'clement-lenglet-bcn', nome: "Lenglet",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 86 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'frenkie-de-jong-bcn', nome: "De Jong",             posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 93 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 86 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 86 },
      { id: 'ousmane-dembele-bcn', nome: "Dembélé",             posicoes: ["PE","PD"],   forca: 83 },
      { id: 'arturo-vidal-bcn',    nome: "Arturo Vidal",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'sergi-roberto-bcn',   nome: "Sergi Roberto",       posicoes: ["LD","MC"],   forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2020,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 90 },
      { id: 'kieran-trippier-atm', nome: "Trippier",            posicoes: ["LD","MD"],   forca: 82 },
      { id: 'jose-gimenez-atm',    nome: "Giménez",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'stefan-savic-atm',    nome: "Savić",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'renan-lodi-atm',      nome: "Lodi",                posicoes: ["LE","MD"],   forca: 81 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'thomas-partey-atm',   nome: "Thomas",              posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'marcos-llorente-atm', nome: "Marcos Llorente",     posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'joao-felix-atm',      nome: "João Félix",          posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'alvaro-morata-atm',   nome: "Morata",              posicoes: ["ATA"],       forca: 83 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 82 },
      { id: 'diego-costa-atm',     nome: "Diego Costa",         posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2020,
    clube: "Sevilla",
    jogadores: [
      { id: 'tomas-vaclik-sev',    nome: "Vaclík",              posicoes: ["GOL"],       forca: 80 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["LD","PD"],   forca: 81 },
      { id: 'diego-carlos-sev',    nome: "Diego Carlos",        posicoes: ["ZAG"],       forca: 83 },
      { id: 'jules-kounde-sev',    nome: "Koundé",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'sergio-reguilon-sev', nome: "Reguilón",            posicoes: ["LE","MD"],   forca: 81 },
      { id: 'fernando-reges-sev',  nome: "Fernando Reges",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'joan-jordan-sev',     nome: "Jordán",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'ever-banega-val',     nome: "Banega",              posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'lucas-ocampos-sev',   nome: "Ocampos",             posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'youssef-en-nesyri-sev', nome: "En-Nesyri",         posicoes: ["ATA"],       forca: 80 },
      { id: 'luuk-de-jong-sev',    nome: "Luuk de Jong",        posicoes: ["ATA"],       forca: 79 },
      { id: 'suso-fernandez-sev',  nome: "Suso",                posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'munir-el-haddadi-sev', nome: "Munir",              posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'nemanja-gudelj-sev',  nome: "Gudelj",              posicoes: ["VOL","ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2020,
    clube: "Villarreal",
    jogadores: [
      { id: 'sergio-asenjo-atm',   nome: "Asenjo",              posicoes: ["GOL"],       forca: 81 },
      { id: 'mario-gaspar-vil',    nome: "Mario",               posicoes: ["LD","MD"],   forca: 80 },
      { id: 'raul-albiol-val',     nome: "Albiol",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'pau-torres-vil',      nome: "Pau Torres",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'alberto-moreno-sev',  nome: "Alberto Moreno",      posicoes: ["LE","MD"],   forca: 79 },
      { id: 'vicente-iborra-lev',  nome: "Iborra",              posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'manu-trigueros-vil',  nome: "Trigueros",           posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'dani-parejo-vil',     nome: "Parejo (VIL)",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'santiago-cazorla-vil', nome: "Cazorla",            posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'gerard-moreno-vil',   nome: "Gerard Moreno",       posicoes: ["ATA"],       forca: 84 },
      { id: 'paco-alcacer-val',    nome: "Alcácer",             posicoes: ["ATA"],       forca: 81 },
      { id: 'carlos-bacca-sev',    nome: "Bacca",               posicoes: ["ATA"],       forca: 79 },
      { id: 'moi-gomez-vil',       nome: "Moi Gómez",           posicoes: ["ME","MEI"],  forca: 78 },
      { id: 'ruben-pena-vil',      nome: "Rubén Peña",          posicoes: ["LD","MD"],   forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2020,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'alex-remiro-rs',      nome: "Remiro",              posicoes: ["GOL"],       forca: 80 },
      { id: 'joseba-zaldua-rs',    nome: "Zaldua",              posicoes: ["LD","MD"],   forca: 78 },
      { id: 'diego-llorente-rs',   nome: "Diego Llorente",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'aritz-elustondo-rs',  nome: "Elustondo",           posicoes: ["ZAG"],       forca: 78 },
      { id: 'nacho-monreal-mal',   nome: "Monreal",             posicoes: ["LE","MD"],   forca: 80 },
      { id: 'asier-illarramendi-rs', nome: "Illarramendi",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'martin-odegaard-rs',  nome: "Ødegaard",            posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'mikel-merino-rs',     nome: "Mikel Merino",        posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'cristian-portu-rs',   nome: "Portu",               posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'mikel-oyarzabal-rs',  nome: "Oyarzabal",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'alexander-isak-rs',   nome: "Isak",                posicoes: ["ATA"],       forca: 80 },
      { id: 'willian-jose-rs',     nome: "Willian José",        posicoes: ["ATA"],       forca: 81 },
      { id: 'adnan-januzaj-rs',    nome: "Januzaj",             posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'robin-le-normand-rs', nome: "Le Normand",          posicoes: ["ZAG"],       forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2021 (temporada 2020-21) — o ATLÉTICO DE MADRID de Diego SIMEONE campeão (86 pts),
  //  11º título, o 1º desde 2013-14, conquistado na ÚLTIMA rodada com virada 2-1 sobre o
  //  Valladolid. LUIS SUÁREZ (veio do Barça) foi decisivo. Oblak melhor jogador da temporada;
  //  Messi Pichichi (30 gols) no seu ÚLTIMO ano no Barça (saiu em ago/2021). Top-6: Atlético
  //  (86), Real Madrid (84), Barcelona (79), Sevilla (77), Real Sociedad (62), Betis (61).
  //  Disputa Atlético×Real até a última rodada. Barça de Koeman em transição (3º).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2021,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 90 },
      { id: 'kieran-trippier-atm', nome: "Trippier",            posicoes: ["LD","MD"],   forca: 82 },
      { id: 'jose-gimenez-atm',    nome: "Giménez",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'stefan-savic-atm',    nome: "Savić",               posicoes: ["ZAG"],       forca: 82 },
      { id: 'mario-hermoso-atm',   nome: "Hermoso",             posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'renan-lodi-atm',      nome: "Lodi",                posicoes: ["LE","MD"],   forca: 81 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'marcos-llorente-atm', nome: "Marcos Llorente",     posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 85 },
      { id: 'joao-felix-atm',      nome: "João Félix",          posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'thomas-lemar-atm',    nome: "Lemar",               posicoes: ["MEI","PE"],  forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2021,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 89 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 83 },
      { id: 'sergio-ramos',        nome: "Sergio Ramos",        posicoes: ["ZAG","LD"],  forca: 88 },
      { id: 'raphael-varane-rm',   nome: "Varane",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'ferland-mendy-rm',    nome: "Mendy",               posicoes: ["LE","MD"],   forca: 83 },
      { id: 'nacho-fernandez-rm',  nome: "Nacho",               posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 88 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 88 },
      { id: 'fede-valverde-rm',    nome: "Fede Valverde",       posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 89 },
      { id: 'vinicius-junior-rm',  nome: "Vinícius Jr",         posicoes: ["PE","ATA"],  forca: 83 },
      { id: 'marco-asensio-rm',    nome: "Asensio",             posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'rodrygo-goes-rm',     nome: "Rodrygo",             posicoes: ["PD","ATA"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2021,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 87 },
      { id: 'sergino-dest-bcn',    nome: "Dest",                posicoes: ["LD","MD"],   forca: 79 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 85 },
      { id: 'clement-lenglet-bcn', nome: "Lenglet",             posicoes: ["ZAG"],       forca: 82 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 85 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'frenkie-de-jong-bcn', nome: "De Jong",             posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'pedri-gonzalez-bcn',  nome: "Pedri",               posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'lionel-messi',        nome: "Messi",               posicoes: ["PD","ATA"],  forca: 93 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'ousmane-dembele-bcn', nome: "Dembélé",             posicoes: ["PE","PD"],   forca: 83 },
      { id: 'sergi-roberto-bcn',   nome: "Sergi Roberto",       posicoes: ["LD","MC"],   forca: 80 },
      { id: 'miralem-pjanic-bcn',  nome: "Pjanić",              posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'ronald-araujo-bcn',   nome: "Araújo",              posicoes: ["ZAG"],       forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2021,
    clube: "Sevilla",
    jogadores: [
      { id: 'yassine-bounou-sev',  nome: "Bono",                posicoes: ["GOL"],       forca: 83 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["LD","PD"],   forca: 80 },
      { id: 'diego-carlos-sev',    nome: "Diego Carlos",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'jules-kounde-sev',    nome: "Koundé",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'marcos-acuna-sev',    nome: "Marcos Acuña",        posicoes: ["LE","MD"],   forca: 82 },
      { id: 'fernando-reges-sev',  nome: "Fernando Reges",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'joan-jordan-sev',     nome: "Jordán",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'lucas-ocampos-sev',   nome: "Ocampos",             posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'youssef-en-nesyri-sev', nome: "En-Nesyri",         posicoes: ["ATA"],       forca: 82 },
      { id: 'suso-fernandez-sev',  nome: "Suso",                posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'luuk-de-jong-sev',    nome: "Luuk de Jong",        posicoes: ["ATA"],       forca: 78 },
      { id: 'oscar-rodriguez-sev', nome: "Óscar (SEV)",         posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'nemanja-gudelj-sev',  nome: "Gudelj",              posicoes: ["VOL","ZAG"], forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2021,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'alex-remiro-rs',      nome: "Remiro",              posicoes: ["GOL"],       forca: 81 },
      { id: 'andoni-gorosabel-rs', nome: "Gorosabel",           posicoes: ["LD","MD"],   forca: 78 },
      { id: 'robin-le-normand-rs', nome: "Le Normand",          posicoes: ["ZAG"],       forca: 81 },
      { id: 'aritz-elustondo-rs',  nome: "Elustondo",           posicoes: ["ZAG"],       forca: 78 },
      { id: 'nacho-monreal-mal',   nome: "Monreal",             posicoes: ["LE","MD"],   forca: 79 },
      { id: 'asier-illarramendi-rs', nome: "Illarramendi",      posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'mikel-merino-rs',     nome: "Mikel Merino",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'mikel-oyarzabal-rs',  nome: "Oyarzabal",           posicoes: ["PE","MEI"],  forca: 84 },
      { id: 'alexander-isak-rs',   nome: "Isak",                posicoes: ["ATA"],       forca: 82 },
      { id: 'cristian-portu-rs',   nome: "Portu",               posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'adnan-januzaj-rs',    nome: "Januzaj",             posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'ander-barrenetxea-rs', nome: "Barrenetxea",        posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'igor-zubeldia-rs',    nome: "Igor Zubeldia",       posicoes: ["VOL","ZAG"], forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2021,
    clube: "Real Betis",
    jogadores: [
      { id: 'claudio-bravo-rs',    nome: "Bravo",               posicoes: ["GOL"],       forca: 80 },
      { id: 'martin-montoya-val',  nome: "Montoya",             posicoes: ["LD","MD"],   forca: 78 },
      { id: 'marc-bartra-bet',     nome: "Bartra",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'aissa-mandi-bet',     nome: "Mandi",               posicoes: ["ZAG"],       forca: 80 },
      { id: 'alex-moreno-bet',     nome: "Álex Moreno",         posicoes: ["LE","MD"],   forca: 79 },
      { id: 'guido-rodriguez-bet', nome: "Guido",               posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'william-carvalho-bet', nome: "William Carvalho",   posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'sergio-canales-rs',   nome: "Sergio Canales",      posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'nabil-fekir-bet',     nome: "Fekir",               posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'cristian-tello-bet',  nome: "Tello",               posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'borja-iglesias-bet',  nome: "Borja Iglesias",      posicoes: ["ATA"],       forca: 80 },
      { id: 'juanmi-jimenez-rs',   nome: "Juanmi (RS)",         posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'loren-moron-bet',     nome: "Loren (BET)",         posicoes: ["ATA"],       forca: 78 },
      { id: 'andres-guardado-val', nome: "Guardado",            posicoes: ["MC","VOL"],  forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2022 (temporada 2021-22) — o REAL MADRID de Carlo ANCELOTTI campeão (86 pts),
  //  35º título, conquistado com 4 rodadas de antecedência (4-0 no Espanyol). BENZEMA na
  //  melhor temporada da carreira: Pichichi (27 gols), melhor jogador, futuro Ballon d'Or.
  //  VINÍCIUS explodiu de vez. Real também bi da Champions (14ª). Top-6: Real Madrid (86),
  //  Barcelona (73), Atlético (71), Sevilla (70), Betis (65), Real Sociedad (62). Barça de
  //  Xavi reagiu no returno (2º). Betis venceu a Copa. Público voltou aos estádios.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2022,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 90 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 83 },
      { id: 'eder-militao-rm',     nome: "Militão",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'david-alaba-rm',      nome: "Alaba",               posicoes: ["ZAG","LE"],  forca: 85 },
      { id: 'ferland-mendy-rm',    nome: "Mendy",               posicoes: ["LE","MD"],   forca: 82 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 87 },
      { id: 'casemiro-rm',         nome: "Casemiro",            posicoes: ["VOL","MC"],  forca: 87 },
      { id: 'fede-valverde-rm',    nome: "Fede Valverde",       posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 91 },
      { id: 'vinicius-junior-rm',  nome: "Vinícius Jr",         posicoes: ["PE","ATA"],  forca: 86 },
      { id: 'rodrygo-goes-rm',     nome: "Rodrygo",             posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'marco-asensio-rm',    nome: "Asensio",             posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'nacho-fernandez-rm',  nome: "Nacho",               posicoes: ["ZAG","LD"],  forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2022,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 86 },
      { id: 'sergino-dest-bcn',    nome: "Dest",                posicoes: ["LD","MD"],   forca: 79 },
      { id: 'ronald-araujo-bcn',   nome: "Araújo",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'gerard-pique',        nome: "Piqué",               posicoes: ["ZAG"],       forca: 83 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 83 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'frenkie-de-jong-bcn', nome: "De Jong",             posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'pedri-gonzalez-bcn',  nome: "Pedri",               posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'gavi-paez-bcn',       nome: "Gavi",                posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'aubameyang-bcn',      nome: "Aubameyang",          posicoes: ["ATA"],       forca: 83 },
      { id: 'ferran-torres-bcn',   nome: "Ferran Torres",       posicoes: ["PD","ATA"],  forca: 82 },
      { id: 'ousmane-dembele-bcn', nome: "Dembélé",             posicoes: ["PE","PD"],   forca: 83 },
      { id: 'memphis-depay-bcn',   nome: "Depay",               posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'adama-traore-bcn',    nome: "Adama",               posicoes: ["PD","ATA"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2022,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 89 },
      { id: 'kieran-trippier-atm', nome: "Trippier",            posicoes: ["LD","MD"],   forca: 81 },
      { id: 'jose-gimenez-atm',    nome: "Giménez",             posicoes: ["ZAG"],       forca: 84 },
      { id: 'stefan-savic-atm',    nome: "Savić",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'mario-hermoso-atm',   nome: "Hermoso",             posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'renan-lodi-atm',      nome: "Lodi",                posicoes: ["LE","MD"],   forca: 80 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'marcos-llorente-atm', nome: "Marcos Llorente",     posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'geoffrey-kondogbia-val', nome: "Kondogbia",        posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 84 },
      { id: 'joao-felix-atm',      nome: "João Félix",          posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'luis-suarez-bcn',     nome: "Suárez",              posicoes: ["ATA"],       forca: 83 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 82 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2022,
    clube: "Sevilla",
    jogadores: [
      { id: 'yassine-bounou-sev',  nome: "Bono",                posicoes: ["GOL"],       forca: 85 },
      { id: 'jesus-navas',         nome: "Jesús Navas",         posicoes: ["LD","PD"],   forca: 80 },
      { id: 'diego-carlos-sev',    nome: "Diego Carlos",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'jules-kounde-sev',    nome: "Koundé",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'marcos-acuna-sev',    nome: "Marcos Acuña",        posicoes: ["LE","MD"],   forca: 82 },
      { id: 'fernando-reges-sev',  nome: "Fernando Reges",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'joan-jordan-sev',     nome: "Jordán",              posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'ivan-rakitic-sev',    nome: "Rakitić",             posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'papu-gomez-sev',      nome: "Papu Gómez",          posicoes: ["MEI","PE"],  forca: 81 },
      { id: 'lucas-ocampos-sev',   nome: "Ocampos",             posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'youssef-en-nesyri-sev', nome: "En-Nesyri",         posicoes: ["ATA"],       forca: 81 },
      { id: 'rafa-mir-sev',        nome: "Rafa Mir",            posicoes: ["ATA"],       forca: 79 },
      { id: 'erik-lamela-sev',     nome: "Lamela",              posicoes: ["MEI","PD"],  forca: 80 },
      { id: 'thomas-delaney-sev',  nome: "Delaney",             posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2022,
    clube: "Real Betis",
    jogadores: [
      { id: 'rui-silva-bet',       nome: "Rui Silva",           posicoes: ["GOL"],       forca: 80 },
      { id: 'martin-montoya-val',  nome: "Montoya",             posicoes: ["LD","MD"],   forca: 78 },
      { id: 'german-pezzella-bet', nome: "Pezzella",            posicoes: ["ZAG"],       forca: 80 },
      { id: 'marc-bartra-bet',     nome: "Bartra",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'alex-moreno-bet',     nome: "Álex Moreno",         posicoes: ["LE","MD"],   forca: 80 },
      { id: 'guido-rodriguez-bet', nome: "Guido",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'william-carvalho-bet', nome: "William Carvalho",   posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'sergio-canales-rs',   nome: "Sergio Canales",      posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'nabil-fekir-bet',     nome: "Fekir",               posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'juanmi-jimenez-rs',   nome: "Juanmi (RS)",         posicoes: ["ATA","PE"],  forca: 80 },
      { id: 'borja-iglesias-bet',  nome: "Borja Iglesias",      posicoes: ["ATA"],       forca: 81 },
      { id: 'cristian-tello-bet',  nome: "Tello",               posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'aitor-ruibal-bet',    nome: "Ruibal",              posicoes: ["PD","LD"],   forca: 77 },
      { id: 'andres-guardado-val', nome: "Guardado",            posicoes: ["MC","VOL"],  forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2022,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'alex-remiro-rs',      nome: "Remiro",              posicoes: ["GOL"],       forca: 82 },
      { id: 'andoni-gorosabel-rs', nome: "Gorosabel",           posicoes: ["LD","MD"],   forca: 78 },
      { id: 'robin-le-normand-rs', nome: "Le Normand",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'aritz-elustondo-rs',  nome: "Elustondo",           posicoes: ["ZAG"],       forca: 78 },
      { id: 'aihen-munoz-rs',      nome: "Aihen",               posicoes: ["LE","MD"],   forca: 78 },
      { id: 'martin-zubimendi-rs', nome: "Zubimendi",           posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'mikel-merino-rs',     nome: "Mikel Merino",        posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'mikel-oyarzabal-rs',  nome: "Oyarzabal",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'alexander-isak-rs',   nome: "Isak",                posicoes: ["ATA"],       forca: 83 },
      { id: 'adnan-januzaj-rs',    nome: "Januzaj",             posicoes: ["PD","MEI"],  forca: 79 },
      { id: 'cristian-portu-rs',   nome: "Portu",               posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'alexander-sorloth-rs', nome: "Sørloth",            posicoes: ["ATA"],       forca: 79 },
      { id: 'igor-zubeldia-rs',    nome: "Igor Zubeldia",       posicoes: ["VOL","ZAG"], forca: 79 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2023 (temporada 2022-23) — o BARCELONA de XAVI campeão (88 pts), 27º título, o
  //  1º desde 2018-19, selado com 4 rodadas de antecedência (4-2 no Espanyol). LEWANDOWSKI
  //  estreou avassalador: Pichichi (23 gols). TER STEGEN melhor jogador e melhor goleiro
  //  (recorde de poucos gols sofridos: 18 em 38 jogos). Top-6: Barcelona (88), Real Madrid
  //  (78), Atlético (77), Real Sociedad (71), Villarreal (64), Betis (60). Barça teve a
  //  melhor defesa da história da liga. Girona (7º) surpreendeu. Messi já no PSG.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "La Liga",
    edicao: 2023,
    clube: "Barcelona",
    jogadores: [
      { id: 'marc-andre-ter-stegen', nome: "Ter Stegen",        posicoes: ["GOL"],       forca: 88 },
      { id: 'jules-kounde-sev',    nome: "Koundé",              posicoes: ["ZAG","LD"],  forca: 84 },
      { id: 'ronald-araujo-bcn',   nome: "Araújo",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'andreas-christensen-bcn', nome: "Christensen",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'alejandro-balde-bcn', nome: "Balde",               posicoes: ["LE","MD"],   forca: 80 },
      { id: 'sergio-busquets',     nome: "Busquets",            posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'frenkie-de-jong-bcn', nome: "De Jong",             posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'pedri-gonzalez-bcn',  nome: "Pedri",               posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'gavi-paez-bcn',       nome: "Gavi",                posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'robert-lewandowski-bcn', nome: "Lewandowski",      posicoes: ["ATA"],       forca: 90 },
      { id: 'raphinha-dias-bcn',   nome: "Raphinha",            posicoes: ["PD","ATA"],  forca: 83 },
      { id: 'ousmane-dembele-bcn', nome: "Dembélé",             posicoes: ["PE","PD"],   forca: 83 },
      { id: 'ferran-torres-bcn',   nome: "Ferran Torres",       posicoes: ["PD","ATA"],  forca: 80 },
      { id: 'jordi-alba-val',      nome: "Jordi Alba",          posicoes: ["LE","ME"],   forca: 81 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2023,
    clube: "Real Madrid",
    jogadores: [
      { id: 'thibaut-courtois-atm', nome: "Courtois",           posicoes: ["GOL"],       forca: 90 },
      { id: 'daniel-carvajal-rm',  nome: "Carvajal",            posicoes: ["LD","MD"],   forca: 83 },
      { id: 'eder-militao-rm',     nome: "Militão",             posicoes: ["ZAG"],       forca: 85 },
      { id: 'david-alaba-rm',      nome: "Alaba",               posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'ferland-mendy-rm',    nome: "Mendy",               posicoes: ["LE","MD"],   forca: 81 },
      { id: 'toni-kroos-rm',       nome: "Kroos",               posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'luka-modric',         nome: "Modrić",              posicoes: ["MC","MEI"],  forca: 86 },
      { id: 'aurelien-tchouameni-rm', nome: "Tchouaméni",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'fede-valverde-rm',    nome: "Fede Valverde",       posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'karim-benzema',       nome: "Benzema",             posicoes: ["ATA"],       forca: 89 },
      { id: 'vinicius-junior-rm',  nome: "Vinícius Jr",         posicoes: ["PE","ATA"],  forca: 87 },
      { id: 'rodrygo-goes-rm',     nome: "Rodrygo",             posicoes: ["PD","ATA"],  forca: 84 },
      { id: 'marco-asensio-rm',    nome: "Asensio",             posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'eduardo-camavinga-rm', nome: "Camavinga",          posicoes: ["VOL","LE"],  forca: 83 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2023,
    clube: "Atlético de Madrid",
    jogadores: [
      { id: 'jan-oblak-atm',       nome: "Oblak",               posicoes: ["GOL"],       forca: 88 },
      { id: 'nahuel-molina-atm',   nome: "Nahuel Molina",       posicoes: ["LD","MD"],   forca: 81 },
      { id: 'jose-gimenez-atm',    nome: "Giménez",             posicoes: ["ZAG"],       forca: 83 },
      { id: 'stefan-savic-atm',    nome: "Savić",               posicoes: ["ZAG"],       forca: 81 },
      { id: 'reinildo-mandava-atm', nome: "Reinildo",           posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'koke-resurreccion',   nome: "Koke",                posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'marcos-llorente-atm', nome: "Marcos Llorente",     posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'rodrigo-de-paul-atm', nome: "De Paul",             posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'yannick-carrasco-atm', nome: "Carrasco",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'antoine-griezmann-rs', nome: "Griezmann",          posicoes: ["ATA","PE"],  forca: 85 },
      { id: 'alvaro-morata-atm',   nome: "Morata",              posicoes: ["ATA"],       forca: 83 },
      { id: 'memphis-depay-bcn',   nome: "Depay",               posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'angel-correa-atm',    nome: "Correa",              posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'saul-niguez-atm',     nome: "Saúl",                posicoes: ["MC","VOL"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2023,
    clube: "Real Sociedad",
    jogadores: [
      { id: 'alex-remiro-rs',      nome: "Remiro",              posicoes: ["GOL"],       forca: 83 },
      { id: 'hamari-traore-rs',    nome: "Traoré",              posicoes: ["LD","MD"],   forca: 79 },
      { id: 'robin-le-normand-rs', nome: "Le Normand",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'igor-zubeldia-rs',    nome: "Igor Zubeldia",       posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'aihen-munoz-rs',      nome: "Aihen",               posicoes: ["LE","MD"],   forca: 78 },
      { id: 'martin-zubimendi-rs', nome: "Zubimendi",           posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mikel-merino-rs',     nome: "Mikel Merino",        posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'brais-mendez-rs',     nome: "Brais Méndez",        posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'david-silva',         nome: "David Silva",         posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'mikel-oyarzabal-rs',  nome: "Oyarzabal",           posicoes: ["PE","MEI"],  forca: 83 },
      { id: 'alexander-sorloth-rs', nome: "Sørloth",            posicoes: ["ATA"],       forca: 80 },
      { id: 'takefusa-kubo-rs',    nome: "Kubo",                posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'umar-sadiq-rs',       nome: "Sadiq",               posicoes: ["ATA"],       forca: 79 },
      { id: 'robert-navarro-rs',   nome: "Navarro (RS)",        posicoes: ["MEI","ATA"], forca: 78 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2023,
    clube: "Villarreal",
    jogadores: [
      { id: 'pepe-reina',          nome: "Reina",               posicoes: ["GOL"],       forca: 80 },
      { id: 'juan-foyth-vil',      nome: "Foyth",               posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'pau-torres-vil',      nome: "Pau Torres",          posicoes: ["ZAG"],       forca: 82 },
      { id: 'raul-albiol-val',     nome: "Albiol",              posicoes: ["ZAG"],       forca: 80 },
      { id: 'alfonso-pedraza-vil', nome: "Pedraza",             posicoes: ["LE","MD"],   forca: 79 },
      { id: 'etienne-capoue-vil',  nome: "Capoue",              posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'dani-parejo-vil',     nome: "Parejo (VIL)",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'francis-coquelin-val', nome: "Coquelin",           posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'yeremy-pino-vil',     nome: "Yéremy Pino",         posicoes: ["PD","MEI"],  forca: 81 },
      { id: 'samuel-chukwueze-vil', nome: "Chukwueze",          posicoes: ["PD","ATA"],  forca: 81 },
      { id: 'gerard-moreno-vil',   nome: "Gerard Moreno",       posicoes: ["ATA"],       forca: 83 },
      { id: 'jose-luis-morales-vil', nome: "Morales",           posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'nicolas-jackson-vil', nome: "N. Jackson",          posicoes: ["ATA"],       forca: 79 },
      { id: 'alex-baena-vil',      nome: "Baena",               posicoes: ["MEI","ME"],  forca: 80 }
    ]
  },

  {
    competicao: "La Liga",
    edicao: 2023,
    clube: "Real Betis",
    jogadores: [
      { id: 'rui-silva-bet',       nome: "Rui Silva",           posicoes: ["GOL"],       forca: 81 },
      { id: 'hector-bellerin-bet', nome: "Bellerín",            posicoes: ["LD","MD"],   forca: 80 },
      { id: 'german-pezzella-bet', nome: "Pezzella",            posicoes: ["ZAG"],       forca: 80 },
      { id: 'luiz-felipe-bet',     nome: "Luiz Felipe",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'alex-moreno-bet',     nome: "Álex Moreno",         posicoes: ["LE","MD"],   forca: 80 },
      { id: 'guido-rodriguez-bet', nome: "Guido",               posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'william-carvalho-bet', nome: "William Carvalho",   posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'sergio-canales-rs',   nome: "Sergio Canales",      posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'nabil-fekir-bet',     nome: "Fekir",               posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'luiz-henrique-bet',   nome: "Luiz Henrique",       posicoes: ["PD","PE"],   forca: 78 },
      { id: 'borja-iglesias-bet',  nome: "Borja Iglesias",      posicoes: ["ATA"],       forca: 81 },
      { id: 'ayoze-perez-bet',     nome: "Ayoze",               posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'juanmi-jimenez-rs',   nome: "Juanmi (RS)",         posicoes: ["ATA","PE"],  forca: 79 },
      { id: 'rodri-sanchez-bet',   nome: "Rodri (BET)",         posicoes: ["MEI","MC"],  forca: 77 }
    ]
  }

];
