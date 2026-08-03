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
      { id: 'martin-vazquez',      nome: "Martín Vázquez",      posicoes: ["MEI","MC"],  forca: 84 },
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
  }

];
