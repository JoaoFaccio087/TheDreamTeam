// ============================================================
//  serie-a.js  —  dados da Serie A Italiana (Calcio)
//  Coleta cronológica a partir de 1989-90 (era moderna).
//  Formato: TOP-6 da classificação final de cada edição.
//  Elencos históricos: 14-16 jogadores. Edição = ano em que a
//  temporada TERMINA (1989-90 → 1990).
//
//  Convenções (iguais às das outras competições):
//   - `id` = a PESSOA, reutilizado entre edições/clubes.
//   - Coloque o jogador no clube onde TERMINOU a temporada.
//   - Força: régua ~82 de média, 90+ raro (~5%).
// ============================================================

const DADOS_SERIE_A = [

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1990 (temporada 1989-90) — o NAPOLI de MARADONA campeão pela 2ª vez
  //  (51 pts), o último grande título do Sul da Itália. Top-6: Napoli (51), Milan
  //  (49), Inter (44), Juventus (44), Sampdoria (42), Roma (39). O Milan de Sacchi
  //  era bicampeão europeu; a Sampdoria de Vialli/Mancini venceria a Recopa.
  //  Início da era dos três estrangeiros por clube (holandeses no Milan, alemães
  //  na Inter). Pontuação: vitória valia 2 pontos.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1990,
    clube: "Napoli",
    jogadores: [
      { id: 'giuliano-giuliani',   nome: "Giuliano Giuliani",   posicoes: ["GOL"],       forca: 80 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'alessandro-renica',   nome: "Alessandro Renica",   posicoes: ["ZAG"],       forca: 80 },
      { id: 'giancarlo-corradini', nome: "Giancarlo Corradini", posicoes: ["ZAG"],       forca: 79 },
      { id: 'tebaldo-bigliardi',   nome: "Tebaldo Bigliardi",   posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'fernando-de-napoli',  nome: "Fernando De Napoli",  posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'salvatore-bagni',     nome: "Salvatore Bagni",     posicoes: ["MC"],        forca: 79 },
      { id: 'diego-maradona',      nome: "Diego Maradona",      posicoes: ["MEI","ATA"], forca: 95 },
      { id: 'careca',              nome: "Careca",              posicoes: ["ATA"],       forca: 88 },
      { id: 'andrea-carnevale',    nome: "Andrea Carnevale",    posicoes: ["ATA"],       forca: 81 },
      { id: 'marco-baroni',        nome: "Marco Baroni",        posicoes: ["ZAG"],       forca: 77 },
      { id: 'luca-fusi',           nome: "Luca Fusi",           posicoes: ["MC","ZAG"],  forca: 78 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1990,
    clube: "Milan",
    jogadores: [
      { id: 'giovanni-galli',      nome: "Giovanni Galli",      posicoes: ["GOL"],       forca: 82 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 87 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 90 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 84 },
      { id: 'filippo-galli',       nome: "Filippo Galli",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'carlo-ancelotti',     nome: "Carlo Ancelotti",     posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 85 },
      { id: 'angelo-colombo',      nome: "Angelo Colombo",      posicoes: ["MC","MD"],   forca: 78 },
      { id: 'frank-rijkaard',      nome: "Frank Rijkaard",      posicoes: ["VOL","ZAG"], forca: 89 },
      { id: 'ruud-gullit',         nome: "Ruud Gullit",         posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'marco-van-basten',    nome: "Marco van Basten",    posicoes: ["ATA"],       forca: 93 },
      { id: 'pietro-paolo-virdis', nome: "Pietro Paolo Virdis", posicoes: ["ATA"],       forca: 79 },
      { id: 'daniele-massaro',     nome: "Daniele Massaro",     posicoes: ["ATA","MEI"], forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1990,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'walter-zenga',        nome: "Walter Zenga",        posicoes: ["GOL"],       forca: 86 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'riccardo-ferri',      nome: "Riccardo Ferri",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'andreas-brehme',      nome: "Andreas Brehme",      posicoes: ["LE"],        forca: 85 },
      { id: 'giuseppe-baresi',     nome: "Giuseppe Baresi",     posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'lothar-matthaus',     nome: "Lothar Matthäus",     posicoes: ["MC","MEI"],  forca: 91 },
      { id: 'aldo-serena',         nome: "Aldo Serena",         posicoes: ["ATA"],       forca: 82 },
      { id: 'ramon-diaz',          nome: "Ramón Díaz",          posicoes: ["ATA"],       forca: 81 },
      { id: 'juergen-klinsmann',   nome: "Jürgen Klinsmann",    posicoes: ["ATA"],       forca: 87 },
      { id: 'alessandro-bianchi',  nome: "Alessandro Bianchi",  posicoes: ["PD","MD"],   forca: 78 },
      { id: 'davide-fontolan',     nome: "Davide Fontolan",     posicoes: ["MEI","ATA"], forca: 77 },
      { id: 'stefano-pellegrini',  nome: "Stefano Pellegrini",  posicoes: ["LE","MD"],   forca: 76 },
      { id: 'enrico-cucchi',       nome: "Enrico Cucchi",       posicoes: ["MEI","ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1990,
    clube: "Juventus",
    jogadores: [
      { id: 'stefano-tacconi',     nome: "Stefano Tacconi",     posicoes: ["GOL"],       forca: 83 },
      { id: 'sergio-brio',         nome: "Sergio Brio",         posicoes: ["ZAG"],       forca: 80 },
      { id: 'luigi-de-agostini',   nome: "Luigi De Agostini",   posicoes: ["LE","MD"],   forca: 80 },
      { id: 'dario-bonetti',       nome: "Dario Bonetti",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'giancarlo-marocchi',  nome: "Giancarlo Marocchi",  posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'angelo-alessio',      nome: "Angelo Alessio",      posicoes: ["MC"],        forca: 78 },
      { id: 'roberto-galia',       nome: "Roberto Galia",       posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'thomas-hassler',      nome: "Thomas Häßler",       posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'rui-barros',          nome: "Rui Barros",          posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'pierluigi-casiraghi', nome: "Pierluigi Casiraghi", posicoes: ["ATA"],       forca: 81 },
      { id: 'salvatore-schillaci', nome: "Salvatore Schillaci", posicoes: ["ATA"],       forca: 83 },
      { id: 'alessandro-altobelli', nome: "Alessandro Altobelli", posicoes: ["ATA"],     forca: 82 },
      { id: 'stefano-pioli',       nome: "Stefano Pioli",       posicoes: ["ZAG","VOL"], forca: 76 },
      { id: 'massimo-bonini',      nome: "Massimo Bonini",      posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1990,
    clube: "Sampdoria",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 84 },
      { id: 'moreno-mannini',      nome: "Moreno Mannini",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'pietro-vierchowod',   nome: "Pietro Vierchowod",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'luca-pellegrini',     nome: "Luca Pellegrini",     posicoes: ["LE"],        forca: 79 },
      { id: 'fausto-pari',         nome: "Fausto Pari",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'toninho-cerezo',      nome: "Toninho Cerezo",      posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'victor-lozano',       nome: "Víctor Lozano",       posicoes: ["MC"],        forca: 77 },
      { id: 'attilio-lombardo',    nome: "Attilio Lombardo",    posicoes: ["PD","MD"],   forca: 83 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 88 },
      { id: 'marco-branca',        nome: "Marco Branca",        posicoes: ["ATA"],       forca: 79 },
      { id: 'giovanni-invernizzi', nome: "Giovanni Invernizzi", posicoes: ["MC","MD"],   forca: 76 },
      { id: 'srecko-katanec',      nome: "Srečko Katanec",      posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'giulio-nuciari',      nome: "Giulio Nuciari",      posicoes: ["GOL"],       forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1990,
    clube: "Roma",
    jogadores: [
      { id: 'giovanni-cervone',    nome: "Giovanni Cervone",    posicoes: ["GOL"],       forca: 79 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'sebastiano-nela',     nome: "Sebastiano Nela",     posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'stefano-desideri',    nome: "Stefano Desideri",    posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'giuseppe-giannini',   nome: "Giuseppe Giannini",   posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'thomas-berthold',     nome: "Thomas Berthold",     posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'ruggiero-rizzitelli', nome: "Ruggiero Rizzitelli", posicoes: ["ATA"],       forca: 80 },
      { id: 'rudi-voller',         nome: "Rudi Völler",         posicoes: ["ATA"],       forca: 86 },
      { id: 'roberto-policano',    nome: "Roberto Policano",    posicoes: ["LD","MD"],   forca: 76 },
      { id: 'amedeo-carboni',      nome: "Amedeo Carboni",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'fabrizio-di-mauro',   nome: "Fabrizio Di Mauro",   posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'gerald-vanenburg',    nome: "Gerald Vanenburg",    posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 74 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1991 (temporada 1990-91) — a SAMPDORIA de Vialli e Mancini campeã, o
  //  ÚNICO Scudetto da história do clube (51 pts). Vialli artilheiro com 19 gols.
  //  Top-6: Sampdoria (51), Milan (51*), Inter (46), Juventus (44*), Parma (41),
  //  Roma (38). A Sampdoria levou no critério de desempate sobre o Milan. O Parma
  //  de Nevio Scala estreava entre os grandes. A Inter venceria a Copa da UEFA.
  //  (*Milan e Juve empatados em pontos com outros; ordem pelo saldo.)
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1991,
    clube: "Sampdoria",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 85 },
      { id: 'moreno-mannini',      nome: "Moreno Mannini",      posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'pietro-vierchowod',   nome: "Pietro Vierchowod",   posicoes: ["ZAG"],       forca: 86 },
      { id: 'luca-pellegrini',     nome: "Luca Pellegrini",     posicoes: ["LE"],        forca: 80 },
      { id: 'marco-lanna',         nome: "Marco Lanna",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'fausto-pari',         nome: "Fausto Pari",         posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'toninho-cerezo',      nome: "Toninho Cerezo",      posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'srecko-katanec',      nome: "Srečko Katanec",      posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'attilio-lombardo',    nome: "Attilio Lombardo",    posicoes: ["PD","MD"],   forca: 84 },
      { id: 'giovanni-invernizzi', nome: "Giovanni Invernizzi", posicoes: ["MC","MD"],   forca: 77 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 89 },
      { id: 'marco-branca',        nome: "Marco Branca",        posicoes: ["ATA"],       forca: 79 },
      { id: 'giovanni-dossena',    nome: "Giovanni Dossena",    posicoes: ["MC","LE"],   forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1991,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi',    nome: "Sebastiano Rossi",    posicoes: ["GOL"],       forca: 82 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 88 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 90 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 85 },
      { id: 'filippo-galli',       nome: "Filippo Galli",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'carlo-ancelotti',     nome: "Carlo Ancelotti",     posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 85 },
      { id: 'angelo-colombo',      nome: "Angelo Colombo",      posicoes: ["MC","MD"],   forca: 78 },
      { id: 'frank-rijkaard',      nome: "Frank Rijkaard",      posicoes: ["VOL","ZAG"], forca: 89 },
      { id: 'ruud-gullit',         nome: "Ruud Gullit",         posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'marco-van-basten',    nome: "Marco van Basten",    posicoes: ["ATA"],       forca: 92 },
      { id: 'daniele-massaro',     nome: "Daniele Massaro",     posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1991,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'walter-zenga',        nome: "Walter Zenga",        posicoes: ["GOL"],       forca: 86 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'riccardo-ferri',      nome: "Riccardo Ferri",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'andreas-brehme',      nome: "Andreas Brehme",      posicoes: ["LE"],        forca: 85 },
      { id: 'giuseppe-baresi',     nome: "Giuseppe Baresi",     posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'lothar-matthaus',     nome: "Lothar Matthäus",     posicoes: ["MC","MEI"],  forca: 91 },
      { id: 'aldo-serena',         nome: "Aldo Serena",         posicoes: ["ATA"],       forca: 81 },
      { id: 'juergen-klinsmann',   nome: "Jürgen Klinsmann",    posicoes: ["ATA"],       forca: 87 },
      { id: 'alessandro-bianchi',  nome: "Alessandro Bianchi",  posicoes: ["PD","MD"],   forca: 78 },
      { id: 'davide-fontolan',     nome: "Davide Fontolan",     posicoes: ["MEI","ATA"], forca: 77 },
      { id: 'stefano-pellegrini',  nome: "Stefano Pellegrini",  posicoes: ["LE","MD"],   forca: 76 },
      { id: 'antonio-paganin',     nome: "Antonio Paganin",     posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'enrico-cucchi',       nome: "Enrico Cucchi",       posicoes: ["MEI","ATA"], forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1991,
    clube: "Juventus",
    jogadores: [
      { id: 'stefano-tacconi',     nome: "Stefano Tacconi",     posicoes: ["GOL"],       forca: 82 },
      { id: 'sergio-brio',         nome: "Sergio Brio",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'luigi-de-agostini',   nome: "Luigi De Agostini",   posicoes: ["LE","MD"],   forca: 80 },
      { id: 'giuseppe-bruno',      nome: "Giuseppe Bruno",      posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'giancarlo-marocchi',  nome: "Giancarlo Marocchi",  posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'roberto-galia',       nome: "Roberto Galia",       posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'thomas-hassler',      nome: "Thomas Häßler",       posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'pierluigi-casiraghi', nome: "Pierluigi Casiraghi", posicoes: ["ATA"],       forca: 82 },
      { id: 'salvatore-schillaci', nome: "Salvatore Schillaci", posicoes: ["ATA"],       forca: 84 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'marco-de-marchi',     nome: "Marco De Marchi",     posicoes: ["ZAG"],       forca: 76 },
      { id: 'angelo-alessio',      nome: "Angelo Alessio",      posicoes: ["MC"],        forca: 78 },
      { id: 'massimo-bonini',      nome: "Massimo Bonini",      posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'stefano-pioli',       nome: "Stefano Pioli",       posicoes: ["ZAG","VOL"], forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1991,
    clube: "Parma",
    jogadores: [
      { id: 'claudio-taffarel',    nome: "Cláudio Taffarel",    posicoes: ["GOL"],       forca: 84 },
      { id: 'lorenzo-minotti',     nome: "Lorenzo Minotti",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'luigi-apolloni',      nome: "Luigi Apolloni",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'georges-grun',        nome: "Georges Grün",        posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'alberto-di-chiara',   nome: "Alberto Di Chiara",   posicoes: ["LE"],        forca: 78 },
      { id: 'marco-osio',          nome: "Marco Osio",          posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'gabriele-pin',        nome: "Gabriele Pin",        posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'stefano-cuoghi',      nome: "Stefano Cuoghi",      posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'alessandro-melli',    nome: "Alessandro Melli",    posicoes: ["ATA"],       forca: 79 },
      { id: 'giovanni-bia',        nome: "Giovanni Bia",        posicoes: ["MC","MD"],   forca: 75 },
      { id: 'thomas-brolin',       nome: "Thomas Brolin",       posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'roberto-cristofoletto', nome: "R. Cristofoletto",  posicoes: ["ZAG","LD"],  forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1991,
    clube: "Roma",
    jogadores: [
      { id: 'giovanni-cervone',    nome: "Giovanni Cervone",    posicoes: ["GOL"],       forca: 79 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'sebastiano-nela',     nome: "Sebastiano Nela",     posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'amedeo-carboni',      nome: "Amedeo Carboni",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'thomas-berthold',     nome: "Thomas Berthold",     posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'giuseppe-giannini',   nome: "Giuseppe Giannini",   posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'stefano-desideri',    nome: "Stefano Desideri",    posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'ruggiero-rizzitelli', nome: "Ruggiero Rizzitelli", posicoes: ["ATA"],       forca: 80 },
      { id: 'rudi-voller',         nome: "Rudi Völler",         posicoes: ["ATA"],       forca: 85 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 75 },
      { id: 'fabrizio-di-mauro',   nome: "Fabrizio Di Mauro",   posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'gerald-vanenburg',    nome: "Gerald Vanenburg",    posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'roberto-policano',    nome: "Roberto Policano",    posicoes: ["LD","MD"],   forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1992 (temporada 1991-92) — o MILAN de Capello CAMPEÃO INVICTO (56 pts),
  //  22 vitórias e 12 empates em 34 jogos, feito raríssimo no futebol. Van Basten
  //  artilheiro (25 gols) na sua última grande temporada antes das lesões. Top-6:
  //  Milan (56), Juventus (48), Torino (46), Napoli (44), Sampdoria (43), Inter (43).
  //  O Torino de Mondonico fazia sua última grande temporada; a Juve trazia Baggio
  //  no auge. Começa aqui a dinastia rossonera que dominaria a Europa.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1992,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi',    nome: "Sebastiano Rossi",    posicoes: ["GOL"],       forca: 83 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 89 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 91 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 85 },
      { id: 'paolo-di-canio',      nome: "Paolo Di Canio",      posicoes: ["PE","MEI"],  forca: 78 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'carlo-ancelotti',     nome: "Carlo Ancelotti",     posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 85 },
      { id: 'frank-rijkaard',      nome: "Frank Rijkaard",      posicoes: ["VOL","ZAG"], forca: 88 },
      { id: 'ruud-gullit',         nome: "Ruud Gullit",         posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'marco-van-basten',    nome: "Marco van Basten",    posicoes: ["ATA"],       forca: 92 },
      { id: 'daniele-massaro',     nome: "Daniele Massaro",     posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'stefano-eranio',      nome: "Stefano Eranio",      posicoes: ["MD","MC"],   forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1992,
    clube: "Juventus",
    jogadores: [
      { id: 'stefano-tacconi',     nome: "Stefano Tacconi",     posicoes: ["GOL"],       forca: 82 },
      { id: 'luca-fusi',           nome: "Luca Fusi",           posicoes: ["MC","ZAG"],  forca: 78 },
      { id: 'giuseppe-bruno',      nome: "Giuseppe Bruno",      posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'luigi-de-agostini',   nome: "Luigi De Agostini",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'jurgen-kohler',       nome: "Jürgen Kohler",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'giancarlo-marocchi',  nome: "Giancarlo Marocchi",  posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'thomas-hassler',      nome: "Thomas Häßler",       posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 79 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'pierluigi-casiraghi', nome: "Pierluigi Casiraghi", posicoes: ["ATA"],       forca: 82 },
      { id: 'salvatore-schillaci', nome: "Salvatore Schillaci", posicoes: ["ATA"],       forca: 82 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 78 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'andreas-moeller',     nome: "Andreas Möller",      posicoes: ["MEI","MC"],  forca: 83 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1992,
    clube: "Torino",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 82 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'giorgio-bresciani',   nome: "Giorgio Bresciani",   posicoes: ["ATA"],       forca: 76 },
      { id: 'enrico-annoni',       nome: "Enrico Annoni",       posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'luigi-sartor',        nome: "Luigi Sartor",        posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'sandro-cois',         nome: "Sandro Cois",         posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 80 },
      { id: 'giorgio-venturin',    nome: "Giorgio Venturin",    posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'gianluigi-lentini',   nome: "Gianluigi Lentini",   posicoes: ["PD","MD"],   forca: 84 },
      { id: 'walter-casagrande',   nome: "Walter Casagrande",   posicoes: ["ATA"],       forca: 82 },
      { id: 'rafael-martin-vazquez', nome: "Rafael Martín Vázquez", posicoes: ["MEI","MC"], forca: 82 },
      { id: 'roberto-cravero',     nome: "Roberto Cravero",     posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'silvano-benedetti',   nome: "Silvano Benedetti",   posicoes: ["ZAG"],       forca: 76 },
      { id: 'antonino-asta',       nome: "Antonino Asta",       posicoes: ["LD","MD"],   forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1992,
    clube: "Napoli",
    jogadores: [
      { id: 'giovanni-galli',      nome: "Giovanni Galli",      posicoes: ["GOL"],       forca: 80 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'giancarlo-corradini', nome: "Giancarlo Corradini", posicoes: ["ZAG"],       forca: 78 },
      { id: 'massimo-tarantino',   nome: "Massimo Tarantino",   posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'fernando-de-napoli',  nome: "Fernando De Napoli",  posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'jonas-thern',         nome: "Jonas Thern",         posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'careca',              nome: "Careca",              posicoes: ["ATA"],       forca: 85 },
      { id: 'daniel-fonseca',      nome: "Daniel Fonseca",      posicoes: ["ATA"],       forca: 82 },
      { id: 'roberto-bordin',      nome: "Roberto Bordin",      posicoes: ["MC","MD"],   forca: 76 },
      { id: 'beto-napoli',         nome: "Beto",                posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'giovanni-francini',   nome: "Giovanni Francini",   posicoes: ["LE","LD"],   forca: 77 },
      { id: 'raffaele-di-fusco',   nome: "Raffaele Di Fusco",   posicoes: ["GOL"],       forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1992,
    clube: "Sampdoria",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 85 },
      { id: 'moreno-mannini',      nome: "Moreno Mannini",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'pietro-vierchowod',   nome: "Pietro Vierchowod",   posicoes: ["ZAG"],       forca: 85 },
      { id: 'marco-lanna',         nome: "Marco Lanna",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'luca-pellegrini',     nome: "Luca Pellegrini",     posicoes: ["LE"],        forca: 79 },
      { id: 'fausto-pari',         nome: "Fausto Pari",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'toninho-cerezo',      nome: "Toninho Cerezo",      posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'attilio-lombardo',    nome: "Attilio Lombardo",    posicoes: ["PD","MD"],   forca: 84 },
      { id: 'srecko-katanec',      nome: "Srečko Katanec",      posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 88 },
      { id: 'giovanni-invernizzi', nome: "Giovanni Invernizzi", posicoes: ["MC","MD"],   forca: 76 },
      { id: 'vladimir-jugovic',    nome: "Vladimir Jugović",    posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'giovanni-dossena',    nome: "Giovanni Dossena",    posicoes: ["MC","LE"],   forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1992,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'walter-zenga',        nome: "Walter Zenga",        posicoes: ["GOL"],       forca: 85 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 84 },
      { id: 'riccardo-ferri',      nome: "Riccardo Ferri",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'andreas-brehme',      nome: "Andreas Brehme",      posicoes: ["LE"],        forca: 84 },
      { id: 'giuseppe-baresi',     nome: "Giuseppe Baresi",     posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'lothar-matthaus',     nome: "Lothar Matthäus",     posicoes: ["MC","MEI"],  forca: 90 },
      { id: 'darko-pancev',        nome: "Darko Pančev",        posicoes: ["ATA"],       forca: 82 },
      { id: 'juergen-klinsmann',   nome: "Jürgen Klinsmann",    posicoes: ["ATA"],       forca: 86 },
      { id: 'alessandro-bianchi',  nome: "Alessandro Bianchi",  posicoes: ["PD","MD"],   forca: 77 },
      { id: 'antonio-paganin',     nome: "Antonio Paganin",     posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'davide-fontolan',     nome: "Davide Fontolan",     posicoes: ["MEI","ATA"], forca: 77 },
      { id: 'stefano-pellegrini',  nome: "Stefano Pellegrini",  posicoes: ["LE","MD"],   forca: 75 },
      { id: 'matthias-sammer',     nome: "Matthias Sammer",     posicoes: ["MEI","MC"],  forca: 83 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1993 (temporada 1992-93) — o MILAN de Capello BICAMPEÃO seguido (50 pts
  //  em novo formato de 3 pts por vitória parcial; recordes de invencibilidade que
  //  se estenderam por 58 jogos). Chegaram Papin, Lentini (transferência recordista
  //  mundial) e Gianluigi Lentini. Top-6: Milan (50), Inter (44), Parma (43),
  //  Juventus (42), Lazio (41), Roma (39). A Lazio de Cragnotti começava a investir
  //  pesado (chegada de Signori, artilheiro com 26 gols). Fim da era Vialli/Mancini
  //  na Sampdoria, que caiu de rendimento.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1993,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi',    nome: "Sebastiano Rossi",    posicoes: ["GOL"],       forca: 84 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 90 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 91 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 86 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'frank-rijkaard',      nome: "Frank Rijkaard",      posicoes: ["VOL","ZAG"], forca: 87 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 84 },
      { id: 'gianluigi-lentini',   nome: "Gianluigi Lentini",   posicoes: ["PD","MD"],   forca: 84 },
      { id: 'jean-pierre-papin',   nome: "Jean-Pierre Papin",   posicoes: ["ATA"],       forca: 87 },
      { id: 'marco-van-basten',    nome: "Marco van Basten",    posicoes: ["ATA"],       forca: 90 },
      { id: 'daniele-massaro',     nome: "Daniele Massaro",     posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'stefano-eranio',      nome: "Stefano Eranio",      posicoes: ["MD","MC"],   forca: 80 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 85 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1993,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'walter-zenga',        nome: "Walter Zenga",        posicoes: ["GOL"],       forca: 84 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 84 },
      { id: 'riccardo-ferri',      nome: "Riccardo Ferri",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'antonio-paganin',     nome: "Antonio Paganin",     posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'matthias-sammer',     nome: "Matthias Sammer",     posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'ruben-sosa',          nome: "Rubén Sosa",          posicoes: ["ATA","MEI"], forca: 84 },
      { id: 'darko-pancev',        nome: "Darko Pančev",        posicoes: ["ATA"],       forca: 80 },
      { id: 'igor-shalimov',       nome: "Igor Shalimov",       posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'alessandro-bianchi',  nome: "Alessandro Bianchi",  posicoes: ["PD","MD"],   forca: 76 },
      { id: 'fausto-pizzi',        nome: "Fausto Pizzi",        posicoes: ["MEI","ATA"], forca: 76 },
      { id: 'giuseppe-baresi',     nome: "Giuseppe Baresi",     posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'massimo-paganin',     nome: "Massimo Paganin",     posicoes: ["ZAG"],       forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1993,
    clube: "Parma",
    jogadores: [
      { id: 'claudio-taffarel',    nome: "Cláudio Taffarel",    posicoes: ["GOL"],       forca: 84 },
      { id: 'lorenzo-minotti',     nome: "Lorenzo Minotti",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'luigi-apolloni',      nome: "Luigi Apolloni",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 80 },
      { id: 'georges-grun',        nome: "Georges Grün",        posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'alberto-di-chiara',   nome: "Alberto Di Chiara",   posicoes: ["LE"],        forca: 78 },
      { id: 'gabriele-pin',        nome: "Gabriele Pin",        posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'marco-osio',          nome: "Marco Osio",          posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'thomas-brolin',       nome: "Thomas Brolin",       posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'alessandro-melli',    nome: "Alessandro Melli",    posicoes: ["ATA"],       forca: 80 },
      { id: 'faustino-asprilla',   nome: "Faustino Asprilla",   posicoes: ["ATA"],       forca: 84 },
      { id: 'stefano-cuoghi',      nome: "Stefano Cuoghi",      posicoes: ["MEI","MC"],  forca: 76 },
      { id: 'giovanni-bia',        nome: "Giovanni Bia",        posicoes: ["MC","MD"],   forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1993,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 84 },
      { id: 'jurgen-kohler',       nome: "Jürgen Kohler",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'massimo-carrera',     nome: "Massimo Carrera",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'luigi-de-agostini',   nome: "Luigi De Agostini",   posicoes: ["LE","MD"],   forca: 78 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 78 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 79 },
      { id: 'andreas-moeller',     nome: "Andreas Möller",      posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'giancarlo-marocchi',  nome: "Giancarlo Marocchi",  posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'fabrizio-ravanelli',  nome: "Fabrizio Ravanelli",  posicoes: ["ATA"],       forca: 82 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 86 },
      { id: 'david-platt',         nome: "David Platt",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'sergio-porrini',      nome: "Sergio Porrini",      posicoes: ["LD","ZAG"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1993,
    clube: "Lazio",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 83 },
      { id: 'roberto-cravero',     nome: "Roberto Cravero",     posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'aron-winter',         nome: "Aron Winter",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'claudio-sclosa',      nome: "Claudio Sclosa",      posicoes: ["MC"],        forca: 76 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 81 },
      { id: 'giuseppe-signori',    nome: "Giuseppe Signori",    posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'thomas-doll',         nome: "Thomas Doll",         posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'karlheinz-riedle',    nome: "Karl-Heinz Riedle",   posicoes: ["ATA"],       forca: 83 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'cristian-bucchi',     nome: "Cristian Bucchi",     posicoes: ["ATA"],       forca: 74 },
      { id: 'stefano-desideri',    nome: "Stefano Desideri",    posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'fernando-orsi',       nome: "Fernando Orsi",       posicoes: ["GOL"],       forca: 74 },
      { id: 'maurizio-poli',       nome: "Maurizio Poli",       posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1993,
    clube: "Roma",
    jogadores: [
      { id: 'giovanni-cervone',    nome: "Giovanni Cervone",    posicoes: ["GOL"],       forca: 78 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'amedeo-carboni',      nome: "Amedeo Carboni",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'thomas-berthold',     nome: "Thomas Berthold",     posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'giuseppe-giannini',   nome: "Giuseppe Giannini",   posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'fabrizio-di-mauro',   nome: "Fabrizio Di Mauro",   posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'ruggiero-rizzitelli', nome: "Ruggiero Rizzitelli", posicoes: ["ATA"],       forca: 80 },
      { id: 'claudio-caniggia',    nome: "Claudio Caniggia",    posicoes: ["ATA"],       forca: 84 },
      { id: 'abel-balbo',          nome: "Abel Balbo",          posicoes: ["ATA"],       forca: 83 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 76 },
      { id: 'francesco-statuto',   nome: "Francesco Statuto",   posicoes: ["LE","LD"],   forca: 76 },
      { id: 'ottavio-palladini',   nome: "Ottavio Palladini",   posicoes: ["MC","MEI"],  forca: 74 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1994 (temporada 1993-94) — o MILAN de Capello TRICAMPEÃO seguido (50 pts),
  //  campeão marcando apenas 36 gols (o menor da história da Serie A) mas com a
  //  melhor defesa (15 sofridos). Complementou com a Champions, goleando o Barça por
  //  4-0 na final. Último ano com 2 pts por vitória. Top-6: Milan (50), Juventus (47),
  //  Lazio (44), Sampdoria (44), Parma (41), Napoli (36). Signori (Lazio) artilheiro
  //  com 23 gols. A Inter caiu ao 13º lugar (mas ganhou a Copa da UEFA).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1994,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi',    nome: "Sebastiano Rossi",    posicoes: ["GOL"],       forca: 85 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 90 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 91 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 86 },
      { id: 'filippo-galli',       nome: "Filippo Galli",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["VOL","ZAG"], forca: 86 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'dejan-savicevic',     nome: "Dejan Savićević",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'jean-pierre-papin',   nome: "Jean-Pierre Papin",   posicoes: ["ATA"],       forca: 85 },
      { id: 'marco-simone',        nome: "Marco Simone",        posicoes: ["ATA"],       forca: 80 },
      { id: 'gianluigi-lentini',   nome: "Gianluigi Lentini",   posicoes: ["PD","MD"],   forca: 81 },
      { id: 'daniele-massaro',     nome: "Daniele Massaro",     posicoes: ["ATA","MEI"], forca: 81 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1994,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 85 },
      { id: 'jurgen-kohler',       nome: "Jürgen Kohler",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'massimo-carrera',     nome: "Massimo Carrera",     posicoes: ["ZAG"],       forca: 78 },
      { id: 'sergio-porrini',      nome: "Sergio Porrini",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 80 },
      { id: 'andreas-moeller',     nome: "Andreas Möller",      posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'david-platt',         nome: "David Platt",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'fabrizio-ravanelli',  nome: "Fabrizio Ravanelli",  posicoes: ["ATA"],       forca: 83 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 85 },
      { id: 'giancarlo-marocchi',  nome: "Giancarlo Marocchi",  posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'luca-fusi',           nome: "Luca Fusi",           posicoes: ["ZAG","MC"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1994,
    clube: "Lazio",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 83 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'roberto-cravero',     nome: "Roberto Cravero",     posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'aron-winter',         nome: "Aron Winter",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 82 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'thomas-doll',         nome: "Thomas Doll",         posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'giuseppe-signori',    nome: "Giuseppe Signori",    posicoes: ["ATA","MEI"], forca: 87 },
      { id: 'karlheinz-riedle',    nome: "Karl-Heinz Riedle",   posicoes: ["ATA"],       forca: 83 },
      { id: 'alen-boksic',         nome: "Alen Bokšić",         posicoes: ["ATA"],       forca: 85 },
      { id: 'cristian-bucchi',     nome: "Cristian Bucchi",     posicoes: ["ATA"],       forca: 74 },
      { id: 'maurizio-poli',       nome: "Maurizio Poli",       posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'claudio-sclosa',      nome: "Claudio Sclosa",      posicoes: ["MC"],        forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1994,
    clube: "Sampdoria",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 85 },
      { id: 'moreno-mannini',      nome: "Moreno Mannini",      posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'pietro-vierchowod',   nome: "Pietro Vierchowod",   posicoes: ["ZAG"],       forca: 84 },
      { id: 'marco-lanna',         nome: "Marco Lanna",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'michele-serena',      nome: "Michele Serena",      posicoes: ["LE","LD"],   forca: 77 },
      { id: 'vladimir-jugovic',    nome: "Vladimir Jugović",    posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'fausto-pari',         nome: "Fausto Pari",         posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'attilio-lombardo',    nome: "Attilio Lombardo",    posicoes: ["PD","MD"],   forca: 84 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'ruud-gullit',         nome: "Ruud Gullit",         posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'enrico-chiesa',       nome: "Enrico Chiesa",       posicoes: ["ATA"],       forca: 81 },
      { id: 'alberico-evani',      nome: "Alberico Evani",      posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'srecko-katanec',      nome: "Srečko Katanec",      posicoes: ["VOL","ZAG"], forca: 79 },
      { id: 'vladimir-bulatovic',  nome: "Vladimir Bulatović",  posicoes: ["MC"],        forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1994,
    clube: "Parma",
    jogadores: [
      { id: 'claudio-taffarel',    nome: "Cláudio Taffarel",    posicoes: ["GOL"],       forca: 84 },
      { id: 'lorenzo-minotti',     nome: "Lorenzo Minotti",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'luigi-apolloni',      nome: "Luigi Apolloni",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 80 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'alberto-di-chiara',   nome: "Alberto Di Chiara",   posicoes: ["LE"],        forca: 78 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'gabriele-pin',        nome: "Gabriele Pin",        posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'thomas-brolin',       nome: "Thomas Brolin",       posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'faustino-asprilla',   nome: "Faustino Asprilla",   posicoes: ["ATA"],       forca: 85 },
      { id: 'alessandro-melli',    nome: "Alessandro Melli",    posicoes: ["ATA"],       forca: 79 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'daniele-zoratto',     nome: "Daniele Zoratto",     posicoes: ["MC","MEI"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1994,
    clube: "Napoli",
    jogadores: [
      { id: 'giovanni-galli',      nome: "Giovanni Galli",      posicoes: ["GOL"],       forca: 79 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'giancarlo-corradini', nome: "Giancarlo Corradini", posicoes: ["ZAG"],       forca: 78 },
      { id: 'massimo-tarantino',   nome: "Massimo Tarantino",   posicoes: ["ZAG","LE"],  forca: 77 },
      { id: 'giovanni-francini',   nome: "Giovanni Francini",   posicoes: ["LE","LD"],   forca: 77 },
      { id: 'fernando-de-napoli',  nome: "Fernando De Napoli",  posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'jonas-thern',         nome: "Jonas Thern",         posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'roberto-bordin',      nome: "Roberto Bordin",      posicoes: ["MC","MD"],   forca: 76 },
      { id: 'antonio-buso',        nome: "Antonio Buso",        posicoes: ["ATA"],       forca: 76 },
      { id: 'careca',              nome: "Careca",              posicoes: ["ATA"],       forca: 83 },
      { id: 'daniel-fonseca',      nome: "Daniel Fonseca",      posicoes: ["ATA"],       forca: 83 },
      { id: 'beto-napoli',         nome: "Beto",                posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'raffaele-di-fusco',   nome: "Raffaele Di Fusco",   posicoes: ["GOL"],       forca: 74 },
      { id: 'stefano-bettarini',   nome: "Stefano Bettarini",   posicoes: ["LD","MD"],   forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1995 (temporada 1994-95) — a JUVENTUS de Marcello LIPPI campeã (73 pts),
  //  10 pontos à frente, no 1º ano dos 3 pts por vitória. Lippi usou um 4-3-3 muito
  //  ofensivo com o trio Vialli-Ravanelli-R.Baggio e um jovem DEL PIERO surgindo.
  //  Top-6: Juventus (73), Parma (63), Lazio (63), Milan (60), Roma (59), Inter (52).
  //  Batistuta (Fiorentina) foi artilheiro com 26 gols. A Juve fez a dobradinha com
  //  a Coppa Italia mas perdeu a final da UEFA justamente para o Parma.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1995,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 86 },
      { id: 'moreno-torricelli',   nome: "Moreno Torricelli",   posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'jurgen-kohler',       nome: "Jürgen Kohler",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'sergio-porrini',      nome: "Sergio Porrini",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 80 },
      { id: 'paulo-sousa',         nome: "Paulo Sousa",         posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 90 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 85 },
      { id: 'fabrizio-ravanelli',  nome: "Fabrizio Ravanelli",  posicoes: ["ATA"],       forca: 84 },
      { id: 'andreas-moeller',     nome: "Andreas Möller",      posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'massimo-carrera',     nome: "Massimo Carrera",     posicoes: ["ZAG"],       forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1995,
    clube: "Parma",
    jogadores: [
      { id: 'luca-bucci',          nome: "Luca Bucci",          posicoes: ["GOL"],       forca: 82 },
      { id: 'lorenzo-minotti',     nome: "Lorenzo Minotti",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'luigi-apolloni',      nome: "Luigi Apolloni",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 80 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'thomas-brolin',       nome: "Thomas Brolin",       posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'faustino-asprilla',   nome: "Faustino Asprilla",   posicoes: ["ATA"],       forca: 86 },
      { id: 'marco-branca',        nome: "Marco Branca",        posicoes: ["ATA"],       forca: 81 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'gabriele-pin',        nome: "Gabriele Pin",        posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1995,
    clube: "Lazio",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 83 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'cristiano-bergodi',   nome: "Cristiano Bergodi",   posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'roberto-cravero',     nome: "Roberto Cravero",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'aron-winter',         nome: "Aron Winter",         posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 82 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'giuseppe-signori',    nome: "Giuseppe Signori",    posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'pierluigi-casiraghi', nome: "Pierluigi Casiraghi", posicoes: ["ATA"],       forca: 82 },
      { id: 'alen-boksic',         nome: "Alen Bokšić",         posicoes: ["ATA"],       forca: 84 },
      { id: 'thomas-doll',         nome: "Thomas Doll",         posicoes: ["MEI","PD"],  forca: 81 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 78 },
      { id: 'alessandro-grandoni', nome: "Alessandro Grandoni", posicoes: ["MC","MD"],   forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1995,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi',    nome: "Sebastiano Rossi",    posicoes: ["GOL"],       forca: 84 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 81 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 90 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 90 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 86 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["VOL","ZAG"], forca: 87 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 83 },
      { id: 'dejan-savicevic',     nome: "Dejan Savićević",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'marco-simone',        nome: "Marco Simone",        posicoes: ["ATA"],       forca: 80 },
      { id: 'daniele-massaro',     nome: "Daniele Massaro",     posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'gianluigi-lentini',   nome: "Gianluigi Lentini",   posicoes: ["PD","MD"],   forca: 79 },
      { id: 'paolo-di-canio',      nome: "Paolo Di Canio",      posicoes: ["PE","MEI"],  forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1995,
    clube: "Roma",
    jogadores: [
      { id: 'giovanni-cervone',    nome: "Giovanni Cervone",    posicoes: ["GOL"],       forca: 78 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 85 },
      { id: 'amedeo-carboni',      nome: "Amedeo Carboni",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'francesco-statuto',   nome: "Francesco Statuto",   posicoes: ["LE","LD"],   forca: 76 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'giuseppe-giannini',   nome: "Giuseppe Giannini",   posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'abel-balbo',          nome: "Abel Balbo",          posicoes: ["ATA"],       forca: 84 },
      { id: 'daniel-fonseca',      nome: "Daniel Fonseca",      posicoes: ["ATA"],       forca: 82 },
      { id: 'ruggiero-rizzitelli', nome: "Ruggiero Rizzitelli", posicoes: ["ATA"],       forca: 79 },
      { id: 'francesco-moriero',   nome: "Francesco Moriero",   posicoes: ["PD","MD"],   forca: 80 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1995,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 84 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 83 },
      { id: 'riccardo-ferri',      nome: "Riccardo Ferri",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'salvatore-fresi',     nome: "Salvatore Fresi",     posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'paul-ince',           nome: "Paul Ince",           posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'wim-jonk',            nome: "Wim Jonk",            posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'dennis-bergkamp',     nome: "Dennis Bergkamp",     posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'ruben-sosa',          nome: "Rubén Sosa",          posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'maurizio-ganz',       nome: "Maurizio Ganz",       posicoes: ["ATA"],       forca: 79 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 82 },
      { id: 'gianluca-festa',      nome: "Gianluca Festa",      posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'antonio-paganin',     nome: "Antonio Paganin",     posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'fausto-pizzi',        nome: "Fausto Pizzi",        posicoes: ["MEI","ATA"], forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1996 (temporada 1995-96) — o MILAN de Capello campeão (73 pts), 15º
  //  título rossonero, com a chegada de George WEAH (Bola de Ouro 1995) e Roberto
  //  BAGGIO vindo da Juve. Top-6: Milan (73), Juventus (65), Lazio (59), Fiorentina
  //  (59), Roma (58), Parma (58). A Juventus de Lippi conquistaria a Champions neste
  //  ano (nos pênaltis sobre o Ajax). A Fiorentina de Batistuta ganhou a Coppa Italia
  //  e entra no acervo. Signori e Protti dividiram a artilharia (24 gols).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1996,
    clube: "Milan",
    jogadores: [
      { id: 'sebastiano-rossi',    nome: "Sebastiano Rossi",    posicoes: ["GOL"],       forca: 84 },
      { id: 'mauro-tassotti',      nome: "Mauro Tassotti",      posicoes: ["LD"],        forca: 80 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 90 },
      { id: 'franco-baresi',       nome: "Franco Baresi",       posicoes: ["ZAG"],       forca: 89 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 85 },
      { id: 'marcel-desailly',     nome: "Marcel Desailly",     posicoes: ["VOL","ZAG"], forca: 87 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'roberto-donadoni',    nome: "Roberto Donadoni",    posicoes: ["MEI","PD"],  forca: 82 },
      { id: 'dejan-savicevic',     nome: "Dejan Savićević",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'george-weah',         nome: "George Weah",         posicoes: ["ATA"],       forca: 88 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'marco-simone',        nome: "Marco Simone",        posicoes: ["ATA"],       forca: 80 },
      { id: 'christian-panucci',   nome: "Christian Panucci",   posicoes: ["LD","ZAG"],  forca: 82 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1996,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 86 },
      { id: 'moreno-torricelli',   nome: "Moreno Torricelli",   posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'sergio-porrini',      nome: "Sergio Porrini",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'paulo-sousa',         nome: "Paulo Sousa",         posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 80 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'gianluca-vialli',     nome: "Gianluca Vialli",     posicoes: ["ATA"],       forca: 85 },
      { id: 'fabrizio-ravanelli',  nome: "Fabrizio Ravanelli",  posicoes: ["ATA"],       forca: 84 },
      { id: 'vladimir-jugovic',    nome: "Vladimir Jugović",    posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'michele-padovano',    nome: "Michele Padovano",    posicoes: ["ATA"],       forca: 78 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1996,
    clube: "Lazio",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 83 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 79 },
      { id: 'cristiano-bergodi',   nome: "Cristiano Bergodi",   posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'aron-winter',         nome: "Aron Winter",         posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 82 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'giuseppe-signori',    nome: "Giuseppe Signori",    posicoes: ["ATA","MEI"], forca: 86 },
      { id: 'pierluigi-casiraghi', nome: "Pierluigi Casiraghi", posicoes: ["ATA"],       forca: 82 },
      { id: 'alen-boksic',         nome: "Alen Bokšić",         posicoes: ["ATA"],       forca: 84 },
      { id: 'marco-di-vaio',       nome: "Marco Di Vaio",       posicoes: ["ATA"],       forca: 76 },
      { id: 'jose-chamot',         nome: "José Chamot",         posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'alessandro-grandoni', nome: "Alessandro Grandoni", posicoes: ["MC","MD"],   forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1996,
    clube: "Fiorentina",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 84 },
      { id: 'daniele-carnasciali', nome: "Daniele Carnasciali", posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'lorenzo-amoruso',     nome: "Lorenzo Amoruso",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'pasquale-padalino',   nome: "Pasquale Padalino",   posicoes: ["ZAG"],       forca: 78 },
      { id: 'stefano-carobbi',     nome: "Stefano Carobbi",     posicoes: ["LE","ZAG"],  forca: 76 },
      { id: 'sandro-cois',         nome: "Sandro Cois",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'emiliano-bigica',     nome: "Emiliano Bigica",     posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'manuel-rui-costa',    nome: "Manuel Rui Costa",    posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'stefan-schwarz',      nome: "Stefan Schwarz",      posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'gabriel-batistuta',   nome: "Gabriel Batistuta",   posicoes: ["ATA"],       forca: 89 },
      { id: 'francesco-baiano',    nome: "Francesco Baiano",    posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'anselmo-robbiati',    nome: "Anselmo Robbiati",    posicoes: ["PE","ATA"],  forca: 77 },
      { id: 'marco-nappi',         nome: "Marco Nappi",         posicoes: ["MD","MEI"],  forca: 76 },
      { id: 'renato-buso',         nome: "Renato Buso",         posicoes: ["MEI","ATA"], forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1996,
    clube: "Roma",
    jogadores: [
      { id: 'giovanni-cervone',    nome: "Giovanni Cervone",    posicoes: ["GOL"],       forca: 78 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 84 },
      { id: 'amedeo-carboni',      nome: "Amedeo Carboni",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'francesco-statuto',   nome: "Francesco Statuto",   posicoes: ["LE","LD"],   forca: 76 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'francesco-moriero',   nome: "Francesco Moriero",   posicoes: ["PD","MD"],   forca: 80 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'abel-balbo',          nome: "Abel Balbo",          posicoes: ["ATA"],       forca: 84 },
      { id: 'daniel-fonseca',      nome: "Daniel Fonseca",      posicoes: ["ATA"],       forca: 81 },
      { id: 'marco-delvecchio',    nome: "Marco Delvecchio",    posicoes: ["ATA"],       forca: 79 },
      { id: 'fabio-petruzzi',      nome: "Fabio Petruzzi",      posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'eugenio-corini',      nome: "Eugenio Corini",      posicoes: ["MC","MEI"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1996,
    clube: "Parma",
    jogadores: [
      { id: 'luca-bucci',          nome: "Luca Bucci",          posicoes: ["GOL"],       forca: 82 },
      { id: 'lorenzo-minotti',     nome: "Lorenzo Minotti",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'luigi-apolloni',      nome: "Luigi Apolloni",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 80 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 82 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'hristo-stoichkov',    nome: "Hristo Stoichkov",    posicoes: ["ATA","PE"],  forca: 87 },
      { id: 'faustino-asprilla',   nome: "Faustino Asprilla",   posicoes: ["ATA"],       forca: 85 },
      { id: 'gabriele-pin',        nome: "Gabriele Pin",        posicoes: ["VOL","MC"],  forca: 76 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 77 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1997 (temporada 1996-97) — a JUVENTUS de Lippi bicampeã (65 pts), 24º
  //  título, decidido por 2 pts sobre o Parma. Foi a 1ª temporada do ZIDANE (contratado
  //  pós-lei Bosman) e de Christian Vieri na Juve. Top-6: Juventus (65), Parma (63),
  //  Inter (59), Lazio (55), Udinese (54), Sampdoria (53). O Parma quase surpreendeu,
  //  com o jovem Buffon estreando e o trio Thuram/Cannavaro/Crespo se formando. Inzaghi
  //  (Atalanta) foi artilheiro com 24 gols. A Udinese de Zaccheroni entra no acervo.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1997,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 86 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 84 },
      { id: 'mark-iuliano',        nome: "Mark Iuliano",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'moreno-torricelli',   nome: "Moreno Torricelli",   posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'zinedine-zidane',     nome: "Zinédine Zidane",     posicoes: ["MEI","MC"],  forca: 88 },
      { id: 'didier-deschamps',    nome: "Didier Deschamps",    posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 80 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 84 },
      { id: 'alen-boksic',         nome: "Alen Bokšić",         posicoes: ["ATA"],       forca: 83 },
      { id: 'michele-padovano',    nome: "Michele Padovano",    posicoes: ["ATA"],       forca: 78 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'nicola-amoruso',      nome: "Nicola Amoruso",      posicoes: ["ATA"],       forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1997,
    clube: "Parma",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 82 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 84 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'gianfranco-zola',     nome: "Gianfranco Zola",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'enrico-chiesa',       nome: "Enrico Chiesa",       posicoes: ["ATA"],       forca: 83 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 82 },
      { id: 'luigi-apolloni',      nome: "Luigi Apolloni",      posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 81 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1997,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 84 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 82 },
      { id: 'salvatore-fresi',     nome: "Salvatore Fresi",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'francesco-colonnese', nome: "Francesco Colonnese", posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 84 },
      { id: 'aron-winter',         nome: "Aron Winter",         posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'youri-djorkaeff',     nome: "Youri Djorkaeff",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'ciriaco-sforza',      nome: "Ciriaco Sforza",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'paul-ince',           nome: "Paul Ince",           posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'maurizio-ganz',       nome: "Maurizio Ganz",       posicoes: ["ATA"],       forca: 79 },
      { id: 'marco-branca',        nome: "Marco Branca",        posicoes: ["ATA"],       forca: 80 },
      { id: 'benito-carbone',      nome: "Benito Carbone",      posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'fabio-galante',       nome: "Fabio Galante",       posicoes: ["ZAG"],       forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1997,
    clube: "Lazio",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 82 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'jose-chamot',         nome: "José Chamot",         posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 79 },
      { id: 'roberto-rambaudi',    nome: "Roberto Rambaudi",    posicoes: ["MD","PD"],   forca: 78 },
      { id: 'roberto-di-matteo',   nome: "Roberto Di Matteo",   posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'guerino-gottardi',    nome: "Guerino Gottardi",    posicoes: ["MC","LD"],   forca: 76 },
      { id: 'giuliano-giannichedda', nome: "Giuliano Giannichedda", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'pierluigi-casiraghi', nome: "Pierluigi Casiraghi", posicoes: ["ATA"],       forca: 82 },
      { id: 'igor-protti',         nome: "Igor Protti",         posicoes: ["ATA"],       forca: 81 },
      { id: 'marco-di-vaio',       nome: "Marco Di Vaio",       posicoes: ["ATA"],       forca: 77 },
      { id: 'vladimir-jugovic',    nome: "Vladimir Jugović",    posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 82 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1997,
    clube: "Udinese",
    jogadores: [
      { id: 'luigi-turci',         nome: "Luigi Turci",         posicoes: ["GOL"],       forca: 78 },
      { id: 'thomas-helveg',       nome: "Thomas Helveg",       posicoes: ["LD","VOL"],  forca: 80 },
      { id: 'paolo-poggi',         nome: "Paolo Poggi",         posicoes: ["ATA"],       forca: 76 },
      { id: 'giovanni-bia',        nome: "Giovanni Bia",        posicoes: ["MC","MD"],   forca: 77 },
      { id: 'valerio-bertotto',    nome: "Valerio Bertotto",    posicoes: ["ZAG"],       forca: 78 },
      { id: 'stefano-bettarini',   nome: "Stefano Bettarini",   posicoes: ["LD","MD"],   forca: 76 },
      { id: 'johnnier-montano',    nome: "Johnnier Montaño",    posicoes: ["MEI","MC"],  forca: 75 },
      { id: 'oliver-bierhoff',     nome: "Oliver Bierhoff",     posicoes: ["ATA"],       forca: 84 },
      { id: 'marcio-amoroso',      nome: "Márcio Amoroso",      posicoes: ["ATA"],       forca: 83 },
      { id: 'alessandro-calori',   nome: "Alessandro Calori",   posicoes: ["ZAG","VOL"], forca: 76 },
      { id: 'tomas-locatelli',     nome: "Tomas Locatelli",     posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'alessandro-pierini',  nome: "Alessandro Pierini",  posicoes: ["LE","ZAG"], forca: 75 },
      { id: 'gennaro-ruotolo',     nome: "Gennaro Ruotolo",     posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'fabio-rossitto',      nome: "Fabio Rossitto",      posicoes: ["MC","VOL"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1997,
    clube: "Sampdoria",
    jogadores: [
      { id: 'fabrizio-ferron',     nome: "Fabrizio Ferron",     posicoes: ["GOL"],       forca: 79 },
      { id: 'moreno-mannini',      nome: "Moreno Mannini",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'pietro-vierchowod',   nome: "Pietro Vierchowod",   posicoes: ["ZAG"],       forca: 82 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'michele-serena',      nome: "Michele Serena",      posicoes: ["LE","LD"],   forca: 77 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'vincenzo-montella',   nome: "Vincenzo Montella",   posicoes: ["ATA"],       forca: 82 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'alberico-evani',      nome: "Alberico Evani",      posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'pierre-laigle',       nome: "Pierre Laigle",       posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'christian-karembeu',  nome: "Christian Karembeu",  posicoes: ["VOL","LD"],  forca: 80 },
      { id: 'fausto-salsano',      nome: "Fausto Salsano",      posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'marco-franceschetti', nome: "Marco Franceschetti", posicoes: ["LE","LD"],   forca: 74 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1998 (temporada 1997-98) — a JUVENTUS de Lippi TRICAMPEÃA (74 pts), 25º
  //  título, num ano marcado pela polêmica do pênalti não marcado no Juve 1x0 Inter.
  //  Foi a 1ª temporada de RONALDO Fenômeno na Inter (vindo do Barça, 25 gols).
  //  Top-6: Juventus (74), Inter (69), Udinese (64), Roma (59), Fiorentina (57),
  //  Parma (57). Bierhoff (Udinese) foi artilheiro com 27 gols. R.Baggio renasceu no
  //  Bologna. Del Piero e Ronaldo protagonizaram a maior rivalidade individual da era.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1998,
    clube: "Juventus",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 86 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 83 },
      { id: 'mark-iuliano',        nome: "Mark Iuliano",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'moreno-torricelli',   nome: "Moreno Torricelli",   posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'alessandro-birindelli', nome: "Alessandro Birindelli", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'zinedine-zidane',     nome: "Zinédine Zidane",     posicoes: ["MEI","MC"],  forca: 90 },
      { id: 'didier-deschamps',    nome: "Didier Deschamps",    posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 79 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 85 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1998,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'gianluca-pagliuca',   nome: "Gianluca Pagliuca",   posicoes: ["GOL"],       forca: 83 },
      { id: 'giuseppe-bergomi',    nome: "Giuseppe Bergomi",    posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'salvatore-fresi',     nome: "Salvatore Fresi",     posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'fabio-galante',       nome: "Fabio Galante",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'francesco-colonnese', nome: "Francesco Colonnese", posicoes: ["ZAG","LE"],  forca: 78 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'youri-djorkaeff',     nome: "Youri Djorkaeff",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'aron-winter',         nome: "Aron Winter",         posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'ivan-zamorano',       nome: "Iván Zamorano",       posicoes: ["ATA"],       forca: 83 },
      { id: 'ronaldo',             nome: "Ronaldo",             posicoes: ["ATA"],       forca: 92 },
      { id: 'benoit-cauet',        nome: "Benoît Cauet",        posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'taribo-west',         nome: "Taribo West",         posicoes: ["ZAG"],       forca: 79 },
      { id: 'nicola-berti',        nome: "Nicola Berti",        posicoes: ["MC","MEI"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1998,
    clube: "Udinese",
    jogadores: [
      { id: 'luigi-turci',         nome: "Luigi Turci",         posicoes: ["GOL"],       forca: 78 },
      { id: 'thomas-helveg',       nome: "Thomas Helveg",       posicoes: ["LD","VOL"],  forca: 81 },
      { id: 'valerio-bertotto',    nome: "Valerio Bertotto",    posicoes: ["ZAG"],       forca: 78 },
      { id: 'alessandro-calori',   nome: "Alessandro Calori",   posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'alessandro-pierini',  nome: "Alessandro Pierini",  posicoes: ["LE","ZAG"],  forca: 76 },
      { id: 'giuliano-giannichedda', nome: "Giuliano Giannichedda", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'stephane-guidi',      nome: "Stéphane Guidi",      posicoes: ["MC","MEI"],  forca: 76 },
      { id: 'tomas-locatelli',     nome: "Tomas Locatelli",     posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'oliver-bierhoff',     nome: "Oliver Bierhoff",     posicoes: ["ATA"],       forca: 85 },
      { id: 'marcio-amoroso',      nome: "Márcio Amoroso",      posicoes: ["ATA"],       forca: 84 },
      { id: 'paolo-poggi',         nome: "Paolo Poggi",         posicoes: ["ATA"],       forca: 76 },
      { id: 'gennaro-ruotolo',     nome: "Gennaro Ruotolo",     posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'fabio-rossitto',      nome: "Fabio Rossitto",      posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'johnnier-montano',    nome: "Johnnier Montaño",    posicoes: ["MEI","MC"],  forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1998,
    clube: "Roma",
    jogadores: [
      { id: 'giovanni-cervone',    nome: "Giovanni Cervone",    posicoes: ["GOL"],       forca: 77 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 83 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'zago',                nome: "Zago",                posicoes: ["ZAG"],       forca: 78 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 84 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'eusebio-di-francesco', nome: "Eusebio Di Francesco", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'abel-balbo',          nome: "Abel Balbo",          posicoes: ["ATA"],       forca: 83 },
      { id: 'marco-delvecchio',    nome: "Marco Delvecchio",    posicoes: ["ATA"],       forca: 80 },
      { id: 'paulo-sergio',        nome: "Paulo Sérgio",        posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'gustavo-bartelt',     nome: "Gustavo Bartelt",     posicoes: ["ATA"],       forca: 75 },
      { id: 'marcos-assuncao',     nome: "Marcos Assunção",     posicoes: ["MC","MEI"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1998,
    clube: "Fiorentina",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 85 },
      { id: 'daniele-carnasciali', nome: "Daniele Carnasciali", posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'pasquale-padalino',   nome: "Pasquale Padalino",   posicoes: ["ZAG"],       forca: 78 },
      { id: 'lorenzo-amoruso',     nome: "Lorenzo Amoruso",     posicoes: ["ZAG"],       forca: 80 },
      { id: 'tomas-repka',         nome: "Tomáš Řepka",        posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'sandro-cois',         nome: "Sandro Cois",         posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'manuel-rui-costa',    nome: "Manuel Rui Costa",    posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'andrei-kanchelskis',  nome: "Andrei Kanchelskis",  posicoes: ["PD","MD"],   forca: 80 },
      { id: 'gabriel-batistuta',   nome: "Gabriel Batistuta",   posicoes: ["ATA"],       forca: 89 },
      { id: 'luis-oliveira',       nome: "Luís Oliveira",       posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'anselmo-robbiati',    nome: "Anselmo Robbiati",    posicoes: ["PE","ATA"],  forca: 77 },
      { id: 'emiliano-bigica',     nome: "Emiliano Bigica",     posicoes: ["VOL","MC"],  forca: 75 },
      { id: 'gianmatteo-mareggini', nome: "Gianmatteo Mareggini", posicoes: ["GOL"],     forca: 73 },
      { id: 'gabriele-ammazzalorso', nome: "Gabriele Ammazzalorso", posicoes: ["ATA"],   forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1998,
    clube: "Parma",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 84 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 86 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 85 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 81 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 84 },
      { id: 'enrico-chiesa',       nome: "Enrico Chiesa",       posicoes: ["ATA"],       forca: 83 },
      { id: 'mario-stanic',        nome: "Mario Stanić",        posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'massimo-crippa',      nome: "Massimo Crippa",      posicoes: ["MC","VOL"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 1999 (temporada 1998-99) — o MILAN de Zaccheroni campeão (70 pts), 16º
  //  título, virada na reta final sobre a Lazio (que perdeu o título na última
  //  rodada). Zaccheroni trouxe Bierhoff e Helveg da Udinese e usou o 3-4-3. Top-6:
  //  Milan (70), Lazio (69), Fiorentina (56), Parma (55), Roma (54), Udinese (54).
  //  Amoroso (Udinese) foi artilheiro com 22 gols. A Lazio de Eriksson montava o time
  //  que dominaria 2000, com Vieri e Salas no ataque. Parma ganhou a Copa da UEFA.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 1999,
    clube: "Milan",
    jogadores: [
      { id: 'christian-abbiati',   nome: "Christian Abbiati",   posicoes: ["GOL"],       forca: 81 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 89 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 83 },
      { id: 'roberto-ayala',       nome: "Roberto Ayala",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'thomas-helveg',       nome: "Thomas Helveg",       posicoes: ["LD","VOL"],  forca: 81 },
      { id: 'luigi-sala',          nome: "Luigi Sala",          posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 84 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'andre-cruz',          nome: "André Cruz",          posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'oliver-bierhoff',     nome: "Oliver Bierhoff",     posicoes: ["ATA"],       forca: 84 },
      { id: 'george-weah',         nome: "George Weah",         posicoes: ["ATA"],       forca: 85 },
      { id: 'maurizio-ganz',       nome: "Maurizio Ganz",       posicoes: ["ATA"],       forca: 78 },
      { id: 'leonardo',            nome: "Leonardo",            posicoes: ["MEI","MC"],  forca: 83 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1999,
    clube: "Lazio",
    jogadores: [
      { id: 'luca-marchegiani',    nome: "Luca Marchegiani",    posicoes: ["GOL"],       forca: 82 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 85 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 79 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'matias-almeyda',      nome: "Matías Almeyda",      posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 86 },
      { id: 'marcelo-salas',       nome: "Marcelo Salas",       posicoes: ["ATA"],       forca: 84 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'guerino-gottardi',    nome: "Guerino Gottardi",    posicoes: ["MC","LD"],   forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1999,
    clube: "Fiorentina",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 85 },
      { id: 'moreno-torricelli',   nome: "Moreno Torricelli",   posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'tomas-repka',         nome: "Tomáš Řepka",         posicoes: ["ZAG","LD"],  forca: 80 },
      { id: 'daniele-adani',       nome: "Daniele Adani",       posicoes: ["ZAG"],       forca: 79 },
      { id: 'pasquale-padalino',   nome: "Pasquale Padalino",   posicoes: ["ZAG"],       forca: 77 },
      { id: 'angelo-di-livio',     nome: "Angelo Di Livio",     posicoes: ["MD","VOL"],  forca: 79 },
      { id: 'sandro-cois',         nome: "Sandro Cois",         posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'manuel-rui-costa',    nome: "Manuel Rui Costa",    posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'guillermo-amor',      nome: "Guillermo Amor",      posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'gabriel-batistuta',   nome: "Gabriel Batistuta",   posicoes: ["ATA"],       forca: 88 },
      { id: 'luis-oliveira',       nome: "Luís Oliveira",       posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'edmundo',             nome: "Edmundo",             posicoes: ["ATA"],       forca: 82 },
      { id: 'anselmo-robbiati',    nome: "Anselmo Robbiati",    posicoes: ["PE","ATA"],  forca: 77 },
      { id: 'emiliano-bigica',     nome: "Emiliano Bigica",     posicoes: ["VOL","MC"],  forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1999,
    clube: "Parma",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 85 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 86 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 78 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 81 },
      { id: 'ariel-ortega',        nome: "Ariel Ortega",        posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 86 },
      { id: 'enrico-chiesa',       nome: "Enrico Chiesa",       posicoes: ["ATA"],       forca: 83 },
      { id: 'mario-stanic',        nome: "Mario Stanić",        posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'alain-boghossian',    nome: "Alain Boghossian",    posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 76 },
      { id: 'sergio-conceicao',    nome: "Sérgio Conceição",    posicoes: ["PD","MD"],   forca: 82 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1999,
    clube: "Roma",
    jogadores: [
      { id: 'francesco-antonioli', nome: "Francesco Antonioli",  posicoes: ["GOL"],      forca: 79 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 85 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'zago',                nome: "Zago",                posicoes: ["ZAG"],       forca: 78 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'eusebio-di-francesco', nome: "Eusebio Di Francesco", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'marco-delvecchio',    nome: "Marco Delvecchio",    posicoes: ["ATA"],       forca: 80 },
      { id: 'paulo-sergio',        nome: "Paulo Sérgio",        posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'marcos-assuncao',     nome: "Marcos Assunção",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'abel-balbo',          nome: "Abel Balbo",          posicoes: ["ATA"],       forca: 80 },
      { id: 'eddy-baggio',         nome: "Eddy Baggio",         posicoes: ["MC","MD"],   forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 1999,
    clube: "Udinese",
    jogadores: [
      { id: 'luigi-turci',         nome: "Luigi Turci",         posicoes: ["GOL"],       forca: 78 },
      { id: 'valerio-bertotto',    nome: "Valerio Bertotto",    posicoes: ["ZAG"],       forca: 78 },
      { id: 'alessandro-calori',   nome: "Alessandro Calori",   posicoes: ["ZAG","VOL"], forca: 77 },
      { id: 'alessandro-pierini',  nome: "Alessandro Pierini",  posicoes: ["LE","ZAG"],  forca: 76 },
      { id: 'giuliano-giannichedda', nome: "Giuliano Giannichedda", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'tomas-locatelli',     nome: "Tomas Locatelli",     posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'fabio-rossitto',      nome: "Fabio Rossitto",      posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'marcio-amoroso',      nome: "Márcio Amoroso",      posicoes: ["ATA"],       forca: 85 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 78 },
      { id: 'stephane-guidi',      nome: "Stéphane Guidi",      posicoes: ["MC","MEI"],  forca: 75 },
      { id: 'gennaro-ruotolo',     nome: "Gennaro Ruotolo",     posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'johnnier-montano',    nome: "Johnnier Montaño",    posicoes: ["MEI","MC"],  forca: 76 },
      { id: 'paolo-poggi',         nome: "Paolo Poggi",         posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2000 (temporada 1999-2000) — a LAZIO de Sven-Göran Eriksson BICAMPEÃ
  //  nacional (72 pts), 2º título do clube, conquistado na última rodada: a Juventus
  //  liderava por 9 pts a 8 rodadas do fim, mas desabou (perdeu para Perugia no campo
  //  alagado) e a Lazio ganhou tudo. Top-6: Lazio (72), Juventus (71), Milan (61),
  //  Inter (58), Parma (58), Roma (54). Shevchenko chegou ao Milan e foi artilheiro
  //  (24 gols) logo no 1º ano. A Lazio fez a dobradinha com a Coppa Italia.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2000,
    clube: "Lazio",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 85 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 86 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 83 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 79 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'sergio-conceicao',    nome: "Sérgio Conceição",    posicoes: ["PD","MD"],   forca: 83 },
      { id: 'marcelo-salas',       nome: "Marcelo Salas",       posicoes: ["ATA"],       forca: 84 },
      { id: 'simone-inzaghi',      nome: "Simone Inzaghi",      posicoes: ["ATA"],       forca: 78 },
      { id: 'roberto-mancini',     nome: "Roberto Mancini",     posicoes: ["MEI","ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2000,
    clube: "Juventus",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 85 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'mark-iuliano',        nome: "Mark Iuliano",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'paolo-montero',       nome: "Paolo Montero",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 79 },
      { id: 'alessandro-birindelli', nome: "Alessandro Birindelli", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'zinedine-zidane',     nome: "Zinédine Zidane",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'didier-deschamps',    nome: "Didier Deschamps",    posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 86 },
      { id: 'darko-kovacevic',     nome: "Darko Kovačević",     posicoes: ["ATA"],       forca: 82 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2000,
    clube: "Milan",
    jogadores: [
      { id: 'christian-abbiati',   nome: "Christian Abbiati",   posicoes: ["GOL"],       forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 89 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 82 },
      { id: 'roberto-ayala',       nome: "Roberto Ayala",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'thomas-helveg',       nome: "Thomas Helveg",       posicoes: ["LD","VOL"],  forca: 80 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 83 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'leonardo',            nome: "Leonardo",            posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 88 },
      { id: 'george-weah',         nome: "George Weah",         posicoes: ["ATA"],       forca: 83 },
      { id: 'oliver-bierhoff',     nome: "Oliver Bierhoff",     posicoes: ["ATA"],       forca: 82 },
      { id: 'jose-mari',           nome: "José Mari",           posicoes: ["ATA","MEI"], forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2000,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 79 },
      { id: 'laurent-blanc',       nome: "Laurent Blanc",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'fabio-galante',       nome: "Fabio Galante",       posicoes: ["ZAG"],       forca: 78 },
      { id: 'christian-panucci',   nome: "Christian Panucci",   posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'grigoris-georgatos',  nome: "Grigoris Georgatos",  posicoes: ["LE","MD"],   forca: 78 },
      { id: 'benoit-cauet',        nome: "Benoît Cauet",        posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'youri-djorkaeff',     nome: "Youri Djorkaeff",     posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'ivan-zamorano',       nome: "Iván Zamorano",       posicoes: ["ATA"],       forca: 82 },
      { id: 'ronaldo',             nome: "Ronaldo",             posicoes: ["ATA"],       forca: 90 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 87 },
      { id: 'roberto-baggio',      nome: "Roberto Baggio",      posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'vladimir-jugovic',    nome: "Vladimir Jugović",    posicoes: ["MC","MEI"],  forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2000,
    clube: "Parma",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 86 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 86 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 78 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'alain-boghossian',    nome: "Alain Boghossian",    posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 81 },
      { id: 'ariel-ortega',        nome: "Ariel Ortega",        posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 87 },
      { id: 'marcio-amoroso',      nome: "Márcio Amoroso",      posicoes: ["ATA"],       forca: 84 },
      { id: 'abel-balbo',          nome: "Abel Balbo",          posicoes: ["ATA"],       forca: 78 },
      { id: 'sabri-lamouchi',      nome: "Sabri Lamouchi",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'roberto-mussi',       nome: "Roberto Mussi",       posicoes: ["LD","ZAG"],  forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2000,
    clube: "Roma",
    jogadores: [
      { id: 'francesco-antonioli', nome: "Francesco Antonioli",  posicoes: ["GOL"],      forca: 79 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 82 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 85 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'zago',                nome: "Zago",                posicoes: ["ZAG"],       forca: 78 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'cristiano-zanetti',   nome: "Cristiano Zanetti",   posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'vincenzo-montella',   nome: "Vincenzo Montella",   posicoes: ["ATA"],       forca: 83 },
      { id: 'marco-delvecchio',    nome: "Marco Delvecchio",    posicoes: ["ATA"],       forca: 80 },
      { id: 'eusebio-di-francesco', nome: "Eusebio Di Francesco", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'marcos-assuncao',     nome: "Marcos Assunção",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'gustavo-bartelt',     nome: "Gustavo Bartelt",     posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2001 (temporada 2000-01) — a ROMA de Fabio CAPELLO campeã (75 pts), 3º
  //  título giallorosso e o 1º em 18 anos (desde 1983), decidido na última rodada
  //  (3-1 no Parma, gols de Totti, Montella e Batistuta). O trio Totti-Batistuta-
  //  Montella somou 46 gols. Top-6: Roma (75), Juventus (73), Lazio (69), Parma (56),
  //  Inter (55), Milan (52). Crespo (agora na Lazio) foi artilheiro com 26 gols. A
  //  chegada de Batistuta (recorde de transferência p/ um trintão) coroou o projeto.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2001,
    clube: "Roma",
    jogadores: [
      { id: 'francesco-antonioli', nome: "Francesco Antonioli",  posicoes: ["GOL"],      forca: 79 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 85 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 81 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'jonathan-zebina',     nome: "Jonathan Zebina",     posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 81 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'cristiano-zanetti',   nome: "Cristiano Zanetti",   posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'emerson',             nome: "Emerson",             posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'gabriel-batistuta',   nome: "Gabriel Batistuta",   posicoes: ["ATA"],       forca: 86 },
      { id: 'vincenzo-montella',   nome: "Vincenzo Montella",   posicoes: ["ATA"],       forca: 84 },
      { id: 'marco-delvecchio',    nome: "Marco Delvecchio",    posicoes: ["ATA"],       forca: 80 },
      { id: 'hidetoshi-nakata',    nome: "Hidetoshi Nakata",    posicoes: ["MEI","MC"],  forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2001,
    clube: "Juventus",
    jogadores: [
      { id: 'edwin-van-der-sar',   nome: "Edwin van der Sar",   posicoes: ["GOL"],       forca: 84 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 86 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 81 },
      { id: 'paolo-montero',       nome: "Paolo Montero",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 78 },
      { id: 'zinedine-zidane',     nome: "Zinédine Zidane",     posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'gianluca-zambrotta',  nome: "Gianluca Zambrotta",  posicoes: ["LD","MD"],   forca: 82 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 85 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 85 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'darko-kovacevic',     nome: "Darko Kovačević",     posicoes: ["ATA"],       forca: 81 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2001,
    clube: "Lazio",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 85 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 86 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 82 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 87 },
      { id: 'claudio-lopez',       nome: "Claudio López",       posicoes: ["ATA","PE"],  forca: 83 },
      { id: 'marcelo-salas',       nome: "Marcelo Salas",       posicoes: ["ATA"],       forca: 82 },
      { id: 'sergio-conceicao',    nome: "Sérgio Conceição",    posicoes: ["PD","MD"],   forca: 82 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2001,
    clube: "Parma",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 87 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'nestor-sensini',      nome: "Néstor Sensini",      posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 77 },
      { id: 'matteo-ferrari',      nome: "Matteo Ferrari",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'diego-fuser',         nome: "Diego Fuser",         posicoes: ["MD","MC"],   forca: 80 },
      { id: 'dino-baggio',         nome: "Dino Baggio",         posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'johan-micoud',        nome: "Johan Micoud",        posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'marco-di-vaio',       nome: "Marco Di Vaio",       posicoes: ["ATA"],       forca: 81 },
      { id: 'savo-milosevic',      nome: "Savo Milošević",      posicoes: ["ATA"],       forca: 80 },
      { id: 'sabri-lamouchi',      nome: "Sabri Lamouchi",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'junior',              nome: "Júnior",              posicoes: ["LE","MD"],   forca: 79 },
      { id: 'daniele-bonera',      nome: "Daniele Bonera",      posicoes: ["ZAG","LD"],  forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2001,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 79 },
      { id: 'laurent-blanc',       nome: "Laurent Blanc",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'francesco-coco',      nome: "Francesco Coco",      posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'okan-buruk',          nome: "Okan Buruk",          posicoes: ["MD","MC"],   forca: 79 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'stephane-dalmat',     nome: "Stéphane Dalmat",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'vratislav-gresko',    nome: "Vratislav Greško",    posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'alvaro-recoba',       nome: "Álvaro Recoba",       posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'ronaldo',             nome: "Ronaldo",             posicoes: ["ATA"],       forca: 88 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 88 },
      { id: 'hakan-sukur',         nome: "Hakan Şükür",         posicoes: ["ATA"],       forca: 82 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2001,
    clube: "Milan",
    jogadores: [
      { id: 'christian-abbiati',   nome: "Christian Abbiati",   posicoes: ["GOL"],       forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 88 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 81 },
      { id: 'roque-junior',        nome: "Roque Júnior",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'thomas-helveg',       nome: "Thomas Helveg",       posicoes: ["LD","VOL"],  forca: 79 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 82 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'serginho',            nome: "Serginho",            posicoes: ["LE","MD"],   forca: 80 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 89 },
      { id: 'zvonimir-boban',      nome: "Zvonimir Boban",      posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'oliver-bierhoff',     nome: "Oliver Bierhoff",     posicoes: ["ATA"],       forca: 81 },
      { id: 'jose-mari',           nome: "José Mari",           posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'gianni-comandini',    nome: "Gianni Comandini",    posicoes: ["ATA"],       forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2002 (temporada 2001-02) — a JUVENTUS de Lippi campeã (71 pts), 26º
  //  título, conquistado na ÚLTIMA rodada: a Inter liderava, mas perdeu de 4-2 para
  //  a Lazio no Olímpico e entregou o Scudetto. Top-3 separado por 2 pts: Juventus
  //  (71), Roma (70), Inter (69). Top-6: +Milan (55), Chievo (54), Lazio (53). O
  //  "milagre" do CHIEVO recém-promovido, líder por 6 semanas, terminou em 5º e entra
  //  no acervo. Trezeguet e Hübner (Piacenza) dividiram a artilharia (24 gols).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2002,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 88 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 80 },
      { id: 'paolo-montero',       nome: "Paolo Montero",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'gianluca-zambrotta',  nome: "Gianluca Zambrotta",  posicoes: ["LD","MD"],   forca: 83 },
      { id: 'alessandro-birindelli', nome: "Alessandro Birindelli", posicoes: ["LD","ZAG"], forca: 77 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 78 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 86 },
      { id: 'marcelo-salas',       nome: "Marcelo Salas",       posicoes: ["ATA"],       forca: 80 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2002,
    clube: "Roma",
    jogadores: [
      { id: 'francesco-antonioli', nome: "Francesco Antonioli",  posicoes: ["GOL"],      forca: 79 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 84 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'jonathan-zebina',     nome: "Jonathan Zebina",     posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 80 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'emerson',             nome: "Emerson",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'cristiano-zanetti',   nome: "Cristiano Zanetti",   posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'gabriel-batistuta',   nome: "Gabriel Batistuta",   posicoes: ["ATA"],       forca: 84 },
      { id: 'vincenzo-montella',   nome: "Vincenzo Montella",   posicoes: ["ATA"],       forca: 84 },
      { id: 'marco-delvecchio',    nome: "Marco Delvecchio",    posicoes: ["ATA"],       forca: 79 },
      { id: 'antonio-cassano',     nome: "Antonio Cassano",     posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2002,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 85 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'francesco-coco',      nome: "Francesco Coco",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'emre-belozoglu',      nome: "Emre Belözoğlu",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'gigi-di-biagio',      nome: "Luigi Di Biagio",     posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'alvaro-recoba',       nome: "Álvaro Recoba",       posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'ronaldo',             nome: "Ronaldo",             posicoes: ["ATA"],       forca: 87 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 88 },
      { id: 'hakan-sukur',         nome: "Hakan Şükür",         posicoes: ["ATA"],       forca: 81 },
      { id: 'sergio-conceicao',    nome: "Sérgio Conceição",    posicoes: ["PD","MD"],   forca: 81 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2002,
    clube: "Milan",
    jogadores: [
      { id: 'christian-abbiati',   nome: "Christian Abbiati",   posicoes: ["GOL"],       forca: 82 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 88 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 80 },
      { id: 'roque-junior',        nome: "Roque Júnior",        posicoes: ["ZAG"],       forca: 82 },
      { id: 'martin-laursen',      nome: "Martin Laursen",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'kakha-kaladze',       nome: "Kakha Kaladze",       posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'demetrio-albertini',  nome: "Demetrio Albertini",  posicoes: ["MC","VOL"],  forca: 81 },
      { id: 'manuel-rui-costa',    nome: "Manuel Rui Costa",    posicoes: ["MEI","MC"],  forca: 85 },
      { id: 'serginho',            nome: "Serginho",            posicoes: ["LE","MD"],   forca: 80 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 89 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 85 },
      { id: 'javi-moreno',         nome: "Javi Moreno",         posicoes: ["ATA"],       forca: 78 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2002,
    clube: "Chievo",
    jogadores: [
      { id: 'cristiano-lupatelli', nome: "Cristiano Lupatelli", posicoes: ["GOL"],       forca: 78 },
      { id: 'nicola-legrottaglie', nome: "Nicola Legrottaglie", posicoes: ["ZAG"],       forca: 79 },
      { id: 'lorenzo-dangelo',     nome: "Lorenzo D'Angelo",    posicoes: ["ZAG"],       forca: 76 },
      { id: 'salvatore-lanna',     nome: "Salvatore Lanna",     posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'nicola-corrent',      nome: "Nicola Corrent",      posicoes: ["LE","LD"],   forca: 75 },
      { id: 'eugenio-corini',      nome: "Eugenio Corini",      posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'simone-perrotta',     nome: "Simone Perrotta",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'lamberto-zauli',      nome: "Lamberto Zauli",      posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'federico-cossato',    nome: "Federico Cossato",    posicoes: ["ATA"],       forca: 76 },
      { id: 'bernardo-corradi',    nome: "Bernardo Corradi",    posicoes: ["ATA"],       forca: 80 },
      { id: 'massimo-marazzina',   nome: "Massimo Marazzina",   posicoes: ["ATA"],       forca: 78 },
      { id: 'stefano-lorenzetti',  nome: "Stefano Lorenzetti",  posicoes: ["LD","MD"],   forca: 74 },
      { id: 'andrea-mandorlini',   nome: "Andrea Mandorlini",   posicoes: ["ZAG"],       forca: 73 },
      { id: 'lorenzo-marronaro',   nome: "Lorenzo Marronaro",   posicoes: ["MEI","ATA"], forca: 72 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2002,
    clube: "Lazio",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 84 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 86 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'paolo-negro',         nome: "Paolo Negro",         posicoes: ["ZAG","LD"],  forca: 77 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 78 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 81 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 87 },
      { id: 'claudio-lopez',       nome: "Claudio López",       posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'simone-inzaghi',      nome: "Simone Inzaghi",      posicoes: ["ATA"],       forca: 77 },
      { id: 'karel-poborsky',      nome: "Karel Poborský",      posicoes: ["PD","MD"],   forca: 80 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2003 (temporada 2002-03) — a JUVENTUS de Lippi bicampeã (72 pts), 27º
  //  título, com Nedvěd (que ganharia a Bola de Ouro) no auge. Top-6: Juventus (72),
  //  Inter (65), Milan (61), Lazio (60), Parma (56), Udinese (56). Foi o ano da 1ª
  //  final de Champions 100% italiana (Milan bateu a Juve nos pênaltis em Old
  //  Trafford). Vieri (Inter) foi artilheiro com 24 gols. O Milan de Ancelotti já era
  //  potência europeia, mas ficou só em 3º no nacional.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2003,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 88 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'ciro-ferrara',        nome: "Ciro Ferrara",        posicoes: ["ZAG"],       forca: 79 },
      { id: 'igor-tudor',          nome: "Igor Tudor",          posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'paolo-montero',       nome: "Paolo Montero",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'gianluca-zambrotta',  nome: "Gianluca Zambrotta",  posicoes: ["LD","MD"],   forca: 84 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 88 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mauro-camoranesi',    nome: "Mauro Camoranesi",    posicoes: ["MD","MEI"],  forca: 82 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 86 },
      { id: 'marcelo-salas',       nome: "Marcelo Salas",       posicoes: ["ATA"],       forca: 79 },
      { id: 'antonio-conte',       nome: "Antonio Conte",       posicoes: ["MC","VOL"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2003,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 84 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 86 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'francesco-coco',      nome: "Francesco Coco",      posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'emre-belozoglu',      nome: "Emre Belözoğlu",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'cristiano-zanetti',   nome: "Cristiano Zanetti",   posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'sergio-conceicao',    nome: "Sérgio Conceição",    posicoes: ["PD","MD"],   forca: 80 },
      { id: 'alvaro-recoba',       nome: "Álvaro Recoba",       posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 88 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 86 },
      { id: 'domenico-morfeo',     nome: "Domenico Morfeo",     posicoes: ["MEI","ATA"], forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2003,
    clube: "Milan",
    jogadores: [
      { id: 'dida',                nome: "Dida",                posicoes: ["GOL"],       forca: 85 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 87 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 87 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 79 },
      { id: 'kakha-kaladze',       nome: "Kakha Kaladze",       posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 83 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'andrea-pirlo',        nome: "Andrea Pirlo",        posicoes: ["MC","VOL"],  forca: 85 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'manuel-rui-costa',    nome: "Manuel Rui Costa",    posicoes: ["MEI","MC"],  forca: 84 },
      { id: 'serginho',            nome: "Serginho",            posicoes: ["LE","MD"],   forca: 80 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 89 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 85 },
      { id: 'jon-dahl-tomasson',   nome: "Jon Dahl Tomasson",   posicoes: ["ATA","MEI"], forca: 81 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2003,
    clube: "Lazio",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 84 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'giuseppe-pancaro',    nome: "Giuseppe Pancaro",    posicoes: ["LE","LD"],   forca: 78 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 80 },
      { id: 'diego-simeone',       nome: "Diego Simeone",       posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'gaizka-mendieta',     nome: "Gaizka Mendieta",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'claudio-lopez',       nome: "Claudio López",       posicoes: ["ATA","PE"],  forca: 82 },
      { id: 'bernardo-corradi',    nome: "Bernardo Corradi",    posicoes: ["ATA"],       forca: 79 },
      { id: 'simone-inzaghi',      nome: "Simone Inzaghi",      posicoes: ["ATA"],       forca: 77 },
      { id: 'massimo-oddo',        nome: "Massimo Oddo",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'giuliano-giannichedda', nome: "Giuliano Giannichedda", posicoes: ["VOL","MC"], forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2003,
    clube: "Parma",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 80 },
      { id: 'matteo-ferrari',      nome: "Matteo Ferrari",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'bruno-cirillo',       nome: "Bruno Cirillo",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'antonio-benarrivo',   nome: "Antonio Benarrivo",   posicoes: ["LE","LD"],   forca: 77 },
      { id: 'daniele-bonera',      nome: "Daniele Bonera",      posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'johan-micoud',        nome: "Johan Micoud",        posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'sabri-lamouchi',      nome: "Sabri Lamouchi",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'stefano-morrone',     nome: "Stefano Morrone",     posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'marco-marchionni',    nome: "Marco Marchionni",    posicoes: ["MD","MEI"],  forca: 77 },
      { id: 'adriano',             nome: "Adriano",             posicoes: ["ATA"],       forca: 84 },
      { id: 'adrian-mutu',         nome: "Adrian Mutu",         posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'marco-di-vaio',       nome: "Marco Di Vaio",       posicoes: ["ATA"],       forca: 80 },
      { id: 'junior',              nome: "Júnior",              posicoes: ["LE","MD"],   forca: 79 },
      { id: 'alberto-gilardino',   nome: "Alberto Gilardino",   posicoes: ["ATA"],       forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2003,
    clube: "Udinese",
    jogadores: [
      { id: 'morgan-de-sanctis',   nome: "Morgan De Sanctis",   posicoes: ["GOL"],       forca: 80 },
      { id: 'valerio-bertotto',    nome: "Valerio Bertotto",    posicoes: ["ZAG"],       forca: 77 },
      { id: 'felipe',              nome: "Felipe",              posicoes: ["ZAG"],       forca: 77 },
      { id: 'giovanni-pisano',     nome: "Giovanni Pisano",     posicoes: ["LE","LD"],   forca: 75 },
      { id: 'manuele-blasi',       nome: "Manuele Blasi",       posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'gianni-guigou',       nome: "Gianni Guigou",       posicoes: ["MD","LD"],   forca: 76 },
      { id: 'davide-pinato',       nome: "Davide Pinato",       posicoes: ["MC","MEI"],  forca: 75 },
      { id: 'david-pizarro',       nome: "David Pizarro",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'vincenzo-iaquinta',   nome: "Vincenzo Iaquinta",   posicoes: ["ATA"],       forca: 80 },
      { id: 'marcio-amoroso',      nome: "Márcio Amoroso",      posicoes: ["ATA"],       forca: 82 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 77 },
      { id: 'edgaras-jankauskas',  nome: "Edgaras Jankauskas",  posicoes: ["ATA"],       forca: 77 },
      { id: 'sulley-muntari',      nome: "Sulley Muntari",      posicoes: ["MC","VOL"],  forca: 77 },
      { id: 'massimo-gobbi',       nome: "Massimo Gobbi",       posicoes: ["LE","MD"],   forca: 75 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2004 (temporada 2003-04) — o MILAN de Ancelotti campeão (82 pts, recorde
  //  igualado), 17º título, com a chegada de KAKÁ e a dupla Shevchenko-Inzaghi. Top-6:
  //  Milan (82), Roma (71), Juventus (69), Inter (59), Parma (58), Lazio (56). A Roma
  //  de Totti e Cassano brigou até as últimas rodadas. Shevchenko foi artilheiro (24
  //  gols). O Milan fez uma campanha quase perfeita: 25 vitórias, só 2 derrotas.
  //  Última temporada de 18 clubes (viraria 20 em 2004-05).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2004,
    clube: "Milan",
    jogadores: [
      { id: 'dida',                nome: "Dida",                posicoes: ["GOL"],       forca: 85 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 83 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 88 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 86 },
      { id: 'kakha-kaladze',       nome: "Kakha Kaladze",       posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'alessandro-costacurta', nome: "Alessandro Costacurta", posicoes: ["ZAG"],   forca: 78 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'andrea-pirlo',        nome: "Andrea Pirlo",        posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'kaka',                nome: "Kaká",                posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'manuel-rui-costa',    nome: "Manuel Rui Costa",    posicoes: ["MEI","MC"],  forca: 82 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 90 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 84 },
      { id: 'jon-dahl-tomasson',   nome: "Jon Dahl Tomasson",   posicoes: ["ATA","MEI"], forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2004,
    clube: "Roma",
    jogadores: [
      { id: 'ivan-pelizzoli',      nome: "Ivan Pelizzoli",      posicoes: ["GOL"],       forca: 78 },
      { id: 'christian-panucci',   nome: "Christian Panucci",   posicoes: ["LD","ZAG"],  forca: 81 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 85 },
      { id: 'jonathan-zebina',     nome: "Jonathan Zebina",     posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 79 },
      { id: 'olivier-dacourt',     nome: "Olivier Dacourt",     posicoes: ["VOL","MC"],  forca: 81 },
      { id: 'damiano-tommasi',     nome: "Damiano Tommasi",     posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'antonio-cassano',     nome: "Antonio Cassano",     posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'vincenzo-montella',   nome: "Vincenzo Montella",   posicoes: ["ATA"],       forca: 83 },
      { id: 'gabriel-batistuta',   nome: "Gabriel Batistuta",   posicoes: ["ATA"],       forca: 80 },
      { id: 'emerson',             nome: "Emerson",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'marcos-assuncao',     nome: "Marcos Assunção",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'aldair',              nome: "Aldair",              posicoes: ["ZAG"],       forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2004,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 89 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 85 },
      { id: 'igor-tudor',          nome: "Igor Tudor",          posicoes: ["ZAG","VOL"], forca: 80 },
      { id: 'paolo-montero',       nome: "Paolo Montero",       posicoes: ["ZAG"],       forca: 82 },
      { id: 'gianluca-zambrotta',  nome: "Gianluca Zambrotta",  posicoes: ["LD","MD"],   forca: 84 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 88 },
      { id: 'edgar-davids',        nome: "Edgar Davids",        posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'mauro-camoranesi',    nome: "Mauro Camoranesi",    posicoes: ["MD","MEI"],  forca: 82 },
      { id: 'alessio-tacchinardi', nome: "Alessio Tacchinardi", posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 86 },
      { id: 'marcelo-zalayeta',    nome: "Marcelo Zalayeta",    posicoes: ["ATA"],       forca: 78 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 77 },
      { id: 'enzo-maresca',        nome: "Enzo Maresca",        posicoes: ["MC","MEI"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2004,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 84 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'francesco-coco',      nome: "Francesco Coco",      posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'giovanni-pasquale',   nome: "Giovanni Pasquale",   posicoes: ["LE","LD"],   forca: 75 },
      { id: 'emre-belozoglu',      nome: "Emre Belözoğlu",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'cristiano-zanetti',   nome: "Cristiano Zanetti",   posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'sergio-conceicao',    nome: "Sérgio Conceição",    posicoes: ["PD","MD"],   forca: 79 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 86 },
      { id: 'obafemi-martins',     nome: "Obafemi Martins",     posicoes: ["ATA"],       forca: 79 },
      { id: 'julio-cruz',          nome: "Julio Cruz",          posicoes: ["ATA"],       forca: 79 },
      { id: 'andy-van-der-meyde',  nome: "Andy van der Meyde",  posicoes: ["PD","MD"],   forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2004,
    clube: "Parma",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 81 },
      { id: 'matteo-ferrari',      nome: "Matteo Ferrari",      posicoes: ["ZAG"],       forca: 80 },
      { id: 'bruno-cirillo',       nome: "Bruno Cirillo",       posicoes: ["ZAG"],       forca: 77 },
      { id: 'daniele-bonera',      nome: "Daniele Bonera",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'domenico-morfeo',     nome: "Domenico Morfeo",     posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'johan-micoud',        nome: "Johan Micoud",        posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'sabri-lamouchi',      nome: "Sabri Lamouchi",      posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'marco-marchionni',    nome: "Marco Marchionni",    posicoes: ["MD","MEI"],  forca: 77 },
      { id: 'stefano-morrone',     nome: "Stefano Morrone",     posicoes: ["MC","VOL"],  forca: 76 },
      { id: 'adriano',             nome: "Adriano",             posicoes: ["ATA"],       forca: 86 },
      { id: 'alberto-gilardino',   nome: "Alberto Gilardino",   posicoes: ["ATA"],       forca: 82 },
      { id: 'adrian-mutu',         nome: "Adrian Mutu",         posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'junior',              nome: "Júnior",              posicoes: ["LE","MD"],   forca: 78 },
      { id: 'daniele-dessena',     nome: "Daniele Dessena",     posicoes: ["MC","VOL"],  forca: 73 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2004,
    clube: "Lazio",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 83 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 78 },
      { id: 'fernando-couto',      nome: "Fernando Couto",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'massimo-oddo',        nome: "Massimo Oddo",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'giuliano-giannichedda', nome: "Giuliano Giannichedda", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'fabio-liverani',      nome: "Fabio Liverani",      posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'cesar',               nome: "César",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'jaap-stam',           nome: "Jaap Stam",           posicoes: ["ZAG"],       forca: 84 },
      { id: 'bernardo-corradi',    nome: "Bernardo Corradi",    posicoes: ["ATA"],       forca: 78 },
      { id: 'simone-inzaghi',      nome: "Simone Inzaghi",      posicoes: ["ATA"],       forca: 76 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 76 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'ousmane-dabo',        nome: "Ousmane Dabo",        posicoes: ["VOL","MC"],  forca: 78 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2005 (temporada 2004-05) — a JUVENTUS de Capello campeã (86 pts), o
  //  título de campo (mais tarde anulado pelo Calciopoli, mas aqui registramos o
  //  resultado esportivo). 1ª temporada com 20 clubes (38 rodadas). Top-6: Juventus
  //  (86), Milan (79), Inter (72), Udinese (62), Sampdoria (61), Palermo (53). A
  //  Udinese se classificou à Champions pela 1ª vez; o Palermo, de volta à elite após
  //  30+ anos, foi 6º. Lucarelli (Livorno) foi artilheiro com 24 gols.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2005,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 89 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 84 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 87 },
      { id: 'gianluca-zambrotta',  nome: "Gianluca Zambrotta",  posicoes: ["LD","MD"],   forca: 84 },
      { id: 'jonathan-zebina',     nome: "Jonathan Zebina",     posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'gianluca-pessotto',   nome: "Gianluca Pessotto",   posicoes: ["LE","LD"],   forca: 77 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 87 },
      { id: 'emerson',             nome: "Emerson",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mauro-camoranesi',    nome: "Mauro Camoranesi",    posicoes: ["MD","MEI"],  forca: 82 },
      { id: 'stephen-appiah',      nome: "Stephen Appiah",      posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 86 },
      { id: 'zlatan-ibrahimovic',  nome: "Zlatan Ibrahimović",  posicoes: ["ATA"],       forca: 85 },
      { id: 'ruben-olivera',       nome: "Rubén Olivera",       posicoes: ["MC","LE"],   forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2005,
    clube: "Milan",
    jogadores: [
      { id: 'dida',                nome: "Dida",                posicoes: ["GOL"],       forca: 85 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 82 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 88 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 85 },
      { id: 'jaap-stam',           nome: "Jaap Stam",           posicoes: ["ZAG"],       forca: 83 },
      { id: 'kakha-kaladze',       nome: "Kakha Kaladze",       posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'andrea-pirlo',        nome: "Andrea Pirlo",        posicoes: ["MC","VOL"],  forca: 87 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 85 },
      { id: 'kaka',                nome: "Kaká",                posicoes: ["MEI","MC"],  forca: 89 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 90 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 85 },
      { id: 'jon-dahl-tomasson',   nome: "Jon Dahl Tomasson",   posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'serginho',            nome: "Serginho",            posicoes: ["LE","MD"],   forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2005,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'francesco-toldo',     nome: "Francesco Toldo",     posicoes: ["GOL"],       forca: 83 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'giovanni-pasquale',   nome: "Giovanni Pasquale",   posicoes: ["LE","LD"],   forca: 76 },
      { id: 'sinisa-mihajlovic',   nome: "Siniša Mihajlović",   posicoes: ["ZAG","VOL"], forca: 78 },
      { id: 'esteban-cambiasso',   nome: "Esteban Cambiasso",   posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 84 },
      { id: 'alvaro-recoba',       nome: "Álvaro Recoba",       posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'adriano',             nome: "Adriano",             posicoes: ["ATA"],       forca: 87 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 84 },
      { id: 'obafemi-martins',     nome: "Obafemi Martins",     posicoes: ["ATA"],       forca: 80 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2005,
    clube: "Udinese",
    jogadores: [
      { id: 'morgan-de-sanctis',   nome: "Morgan De Sanctis",   posicoes: ["GOL"],       forca: 81 },
      { id: 'felipe',              nome: "Felipe",              posicoes: ["ZAG"],       forca: 78 },
      { id: 'valerio-bertotto',    nome: "Valerio Bertotto",    posicoes: ["ZAG"],       forca: 77 },
      { id: 'daniele-mannini',     nome: "Daniele Mannini",     posicoes: ["MD","MEI"],  forca: 75 },
      { id: 'giampiero-pinzi',     nome: "Giampiero Pinzi",     posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'gaetano-dagostino',   nome: "Gaetano D'Agostino",  posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'david-pizarro',       nome: "David Pizarro",       posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'sulley-muntari',      nome: "Sulley Muntari",      posicoes: ["MC","VOL"],  forca: 79 },
      { id: 'vincenzo-iaquinta',   nome: "Vincenzo Iaquinta",   posicoes: ["ATA"],       forca: 81 },
      { id: 'antonio-di-natale',   nome: "Antonio Di Natale",   posicoes: ["ATA"],       forca: 82 },
      { id: 'marek-jankulovski',   nome: "Marek Jankulovski",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'cesare-natali',       nome: "Cesare Natali",       posicoes: ["ZAG"],       forca: 76 },
      { id: 'manuele-blasi',       nome: "Manuele Blasi",       posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'gianni-guigou',       nome: "Gianni Guigou",       posicoes: ["MD","LD"],   forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2005,
    clube: "Sampdoria",
    jogadores: [
      { id: 'francesco-antonioli',  nome: "Francesco Antonioli",  posicoes: ["GOL"],     forca: 78 },
      { id: 'cristian-zenoni',     nome: "Cristian Zenoni",     posicoes: ["LD","MD"],   forca: 76 },
      { id: 'daniele-gastaldello', nome: "Daniele Gastaldello", posicoes: ["ZAG"],       forca: 77 },
      { id: 'marco-rossi-samp',    nome: "Marco Rossi",         posicoes: ["LE","ZAG"],  forca: 76 },
      { id: 'sergio-volpi',        nome: "Sergio Volpi",        posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'angelo-palombo',      nome: "Angelo Palombo",      posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'aimo-diana',          nome: "Aimo Diana",          posicoes: ["MD","LD"],   forca: 76 },
      { id: 'cristiano-doni',      nome: "Cristiano Doni",      posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'fabio-bazzani',       nome: "Fabio Bazzani",       posicoes: ["ATA"],       forca: 77 },
      { id: 'francesco-flachi',    nome: "Francesco Flachi",    posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'fabio-quagliarella',  nome: "Fabio Quagliarella",  posicoes: ["ATA"],       forca: 78 },
      { id: 'emiliano-bonazzoli', nome: "Emiliano Bonazzoli",  posicoes: ["ATA"],       forca: 77 },
      { id: 'gennaro-delvecchio',  nome: "Gennaro Delvecchio",  posicoes: ["MC","MEI"],  forca: 74 },
      { id: 'reto-ziegler',        nome: "Reto Ziegler",        posicoes: ["LE","ZAG"],  forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2005,
    clube: "Palermo",
    jogadores: [
      { id: 'alberto-fontana',     nome: "Alberto Fontana",     posicoes: ["GOL"],       forca: 77 },
      { id: 'cesare-bovo',         nome: "Cesare Bovo",         posicoes: ["ZAG"],       forca: 77 },
      { id: 'giuseppe-biava',      nome: "Giuseppe Biava",      posicoes: ["ZAG"],       forca: 76 },
      { id: 'eugenio-corini',      nome: "Eugenio Corini",      posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'fabio-grosso',        nome: "Fabio Grosso",        posicoes: ["LE","MD"],   forca: 80 },
      { id: 'santiago-biglione',   nome: "Santiago Biglione",   posicoes: ["LD","ZAG"],  forca: 74 },
      { id: 'franco-brienza',      nome: "Franco Brienza",      posicoes: ["MEI","MC"],  forca: 77 },
      { id: 'giovanni-tedesco',    nome: "Giovanni Tedesco",    posicoes: ["MC","VOL"],  forca: 75 },
      { id: 'guilherme',           nome: "Guilherme",           posicoes: ["MEI","ATA"], forca: 77 },
      { id: 'luca-toni',           nome: "Luca Toni",           posicoes: ["ATA"],       forca: 83 },
      { id: 'andrea-caracciolo',   nome: "Andrea Caracciolo",   posicoes: ["ATA"],       forca: 77 },
      { id: 'david-di-michele',    nome: "David Di Michele",    posicoes: ["ATA"],       forca: 78 },
      { id: 'cristian-zaccardo',   nome: "Cristian Zaccardo",   posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'stephen-makinwa',     nome: "Stephen Makinwa",     posicoes: ["ATA"],       forca: 73 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2006 (temporada 2005-06) — a JUVENTUS de Capello campeã DE CAMPO (91 pts,
  //  27 vitórias, só 1 derrota), registrada aqui pelo resultado esportivo (o título
  //  foi depois anulado pelo Calciopoli e dado à Inter, mas mantemos a tabela de
  //  campo). Top-6 de campo: Juventus (91), Milan (88), Inter (76), Fiorentina (74),
  //  Roma (69), Lazio (62). Luca Toni (Fiorentina) fez 31 gols, o 1º a chegar aos 30
  //  desde 1959. Foi o ano do título mundial da Itália, com forte base da Serie A.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2006,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 90 },
      { id: 'lilian-thuram',       nome: "Lilian Thuram",       posicoes: ["LD","ZAG"],  forca: 83 },
      { id: 'fabio-cannavaro',     nome: "Fabio Cannavaro",     posicoes: ["ZAG"],       forca: 88 },
      { id: 'gianluca-zambrotta',  nome: "Gianluca Zambrotta",  posicoes: ["LD","MD"],   forca: 84 },
      { id: 'jonathan-zebina',     nome: "Jonathan Zebina",     posicoes: ["ZAG","LD"],  forca: 78 },
      { id: 'giorgio-chiellini',   nome: "Giorgio Chiellini",   posicoes: ["ZAG","LE"],  forca: 80 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 86 },
      { id: 'emerson',             nome: "Emerson",             posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'mauro-camoranesi',    nome: "Mauro Camoranesi",    posicoes: ["MD","MEI"],  forca: 82 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 87 },
      { id: 'zlatan-ibrahimovic',  nome: "Zlatan Ibrahimović",  posicoes: ["ATA"],       forca: 86 },
      { id: 'adrian-mutu',         nome: "Adrian Mutu",         posicoes: ["ATA","MEI"], forca: 82 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2006,
    clube: "Milan",
    jogadores: [
      { id: 'dida',                nome: "Dida",                posicoes: ["GOL"],       forca: 84 },
      { id: 'cafu',                nome: "Cafu",                posicoes: ["LD","MD"],   forca: 81 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 88 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 84 },
      { id: 'jaap-stam',           nome: "Jaap Stam",           posicoes: ["ZAG"],       forca: 82 },
      { id: 'marek-jankulovski',   nome: "Marek Jankulovski",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'andrea-pirlo',        nome: "Andrea Pirlo",        posicoes: ["MC","VOL"],  forca: 87 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 84 },
      { id: 'kaka',                nome: "Kaká",                posicoes: ["MEI","MC"],  forca: 90 },
      { id: 'andriy-shevchenko',   nome: "Andriy Shevchenko",   posicoes: ["ATA"],       forca: 89 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 83 },
      { id: 'alberto-gilardino',   nome: "Alberto Gilardino",   posicoes: ["ATA"],       forca: 82 },
      { id: 'serginho',            nome: "Serginho",            posicoes: ["LE","MD"],   forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2006,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'julio-cesar',         nome: "Júlio César",         posicoes: ["GOL"],       forca: 84 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'maicon',              nome: "Maicon",              posicoes: ["LD","MD"],   forca: 83 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'esteban-cambiasso',   nome: "Esteban Cambiasso",   posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'juan-sebastian-veron', nome: "Juan Sebastián Verón", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'adriano',             nome: "Adriano",             posicoes: ["ATA"],       forca: 87 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 85 },
      { id: 'obafemi-martins',     nome: "Obafemi Martins",     posicoes: ["ATA"],       forca: 80 },
      { id: 'alvaro-recoba',       nome: "Álvaro Recoba",       posicoes: ["MEI","ATA"], forca: 81 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2006,
    clube: "Fiorentina",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 83 },
      { id: 'dario-dainelli',      nome: "Dario Dainelli",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'alessandro-gamberini', nome: "Alessandro Gamberini", posicoes: ["ZAG"],     forca: 79 },
      { id: 'manuel-pasqual',      nome: "Manuel Pasqual",      posicoes: ["LE","MD"],   forca: 77 },
      { id: 'cesare-natali',       nome: "Cesare Natali",       posicoes: ["ZAG","LD"],  forca: 76 },
      { id: 'martin-jorgensen',    nome: "Martin Jørgensen",    posicoes: ["MD","MEI"],  forca: 80 },
      { id: 'fabio-liverani',      nome: "Fabio Liverani",      posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'giampaolo-pazzini',   nome: "Giampaolo Pazzini",   posicoes: ["ATA"],       forca: 78 },
      { id: 'stefano-fiore',       nome: "Stefano Fiore",       posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'luca-toni',           nome: "Luca Toni",           posicoes: ["ATA"],       forca: 86 },
      { id: 'enzo-maresca',        nome: "Enzo Maresca",        posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'tomas-ujfalusi',      nome: "Tomáš Ujfaluši",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'valeri-bojinov',      nome: "Valeri Bojinov",      posicoes: ["ATA"],       forca: 76 },
      { id: 'cristian-brocchi',    nome: "Cristian Brocchi",    posicoes: ["VOL","MC"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2006,
    clube: "Roma",
    jogadores: [
      { id: 'gianluca-curci',      nome: "Gianluca Curci",      posicoes: ["GOL"],       forca: 77 },
      { id: 'christian-panucci',   nome: "Christian Panucci",   posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'philippe-mexes',      nome: "Philippe Mexès",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'chivu',               nome: "Cristian Chivu",      posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'matteo-ferrari',      nome: "Matteo Ferrari",      posicoes: ["ZAG"],       forca: 79 },
      { id: 'vincent-candela',     nome: "Vincent Candela",     posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'daniele-de-rossi',    nome: "Daniele De Rossi",    posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'david-pizarro',       nome: "David Pizarro",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'simone-perrotta',     nome: "Simone Perrotta",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'mancini',             nome: "Mancini",             posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'vincenzo-montella',   nome: "Vincenzo Montella",   posicoes: ["ATA"],       forca: 80 },
      { id: 'shabani-nonda',       nome: "Shabani Nonda",       posicoes: ["ATA"],       forca: 78 },
      { id: 'rodrigo-taddei',      nome: "Rodrigo Taddei",      posicoes: ["MD","MEI"],  forca: 77 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2006,
    clube: "Lazio",
    jogadores: [
      { id: 'angelo-peruzzi',      nome: "Angelo Peruzzi",      posicoes: ["GOL"],       forca: 82 },
      { id: 'massimo-oddo',        nome: "Massimo Oddo",        posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'giuseppe-favalli',    nome: "Giuseppe Favalli",    posicoes: ["LE","ZAG"],  forca: 77 },
      { id: 'sebastiano-siviglia', nome: "Sebastiano Siviglia", posicoes: ["ZAG"],       forca: 77 },
      { id: 'guglielmo-stendardo', nome: "Guglielmo Stendardo", posicoes: ["ZAG"],       forca: 76 },
      { id: 'stefano-mauri',       nome: "Stefano Mauri",       posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'ousmane-dabo',        nome: "Ousmane Dabo",        posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'gaby-mudingayi',      nome: "Gaby Mudingayi",      posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'cesar',               nome: "César",               posicoes: ["ZAG"],       forca: 78 },
      { id: 'goran-pandev',        nome: "Goran Pandev",        posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'tommaso-rocchi',      nome: "Tommaso Rocchi",      posicoes: ["ATA"],       forca: 80 },
      { id: 'paolo-di-canio',      nome: "Paolo Di Canio",      posicoes: ["ATA","MEI"], forca: 78 },
      { id: 'roberto-muzzi',       nome: "Roberto Muzzi",       posicoes: ["ATA"],       forca: 75 },
      { id: 'luciano-zauri',       nome: "Luciano Zauri",       posicoes: ["LE","LD"],   forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2007 (temporada 2006-07) — a INTER de Mancini campeã (97 pts, RECORDE
  //  de pontos da Serie A à época), 1ª sem a Juventus (rebaixada à Serie B pelo
  //  Calciopoli). A Inter contratou Vieira, Ibrahimović e Maicon da Juve e teve uma
  //  sequência de 17 vitórias seguidas. Top-6: Inter (97), Roma (75), Lazio (62),
  //  Milan (61), Palermo (58), Fiorentina (58). Totti (Roma) foi artilheiro com 26
  //  gols. O Milan, mesmo docado em 8 pts, ganharia a Champions naquele ano.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2007,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'julio-cesar',         nome: "Júlio César",         posicoes: ["GOL"],       forca: 85 },
      { id: 'maicon',              nome: "Maicon",              posicoes: ["LD","MD"],   forca: 84 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 84 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 85 },
      { id: 'esteban-cambiasso',   nome: "Esteban Cambiasso",   posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 84 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'luis-figo',           nome: "Luís Figo",           posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'zlatan-ibrahimovic',  nome: "Zlatan Ibrahimović",  posicoes: ["ATA"],       forca: 87 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 84 },
      { id: 'julio-cruz',          nome: "Julio Cruz",          posicoes: ["ATA"],       forca: 79 },
      { id: 'nicolas-burdisso',    nome: "Nicolás Burdisso",    posicoes: ["ZAG","LD"],  forca: 79 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2007,
    clube: "Roma",
    jogadores: [
      { id: 'doni',                nome: "Doni",                posicoes: ["GOL"],       forca: 81 },
      { id: 'christian-panucci',   nome: "Christian Panucci",   posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'philippe-mexes',      nome: "Philippe Mexès",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'chivu',               nome: "Cristian Chivu",      posicoes: ["ZAG","LE"],  forca: 81 },
      { id: 'max-tonetto',         nome: "Max Tonetto",         posicoes: ["LE","MD"],   forca: 77 },
      { id: 'daniele-de-rossi',    nome: "Daniele De Rossi",    posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'david-pizarro',       nome: "David Pizarro",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'simone-perrotta',     nome: "Simone Perrotta",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'mancini',             nome: "Mancini",             posicoes: ["PD","MEI"],  forca: 83 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'mirko-vucinic',       nome: "Mirko Vučinić",       posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'rodrigo-taddei',      nome: "Rodrigo Taddei",      posicoes: ["MD","MEI"],  forca: 78 },
      { id: 'marco-cassetti',      nome: "Marco Cassetti",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'stefano-okaka',       nome: "Stefano Okaka",       posicoes: ["ATA"],       forca: 74 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2007,
    clube: "Lazio",
    jogadores: [
      { id: 'marco-ballotta',      nome: "Marco Ballotta",      posicoes: ["GOL"],       forca: 78 },
      { id: 'lionel-scaloni',      nome: "Lionel Scaloni",      posicoes: ["LD","ZAG"],  forca: 77 },
      { id: 'sebastiano-siviglia', nome: "Sebastiano Siviglia", posicoes: ["ZAG"],       forca: 77 },
      { id: 'guglielmo-stendardo', nome: "Guglielmo Stendardo", posicoes: ["ZAG"],       forca: 77 },
      { id: 'emilson-cribari',     nome: "Emílson Cribari",     posicoes: ["ZAG"],       forca: 77 },
      { id: 'luciano-zauri',       nome: "Luciano Zauri",       posicoes: ["LE","LD"],   forca: 76 },
      { id: 'gaby-mudingayi',      nome: "Gaby Mudingayi",      posicoes: ["VOL","MC"],  forca: 78 },
      { id: 'stefano-mauri',       nome: "Stefano Mauri",       posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'cristian-ledesma',    nome: "Cristian Ledesma",    posicoes: ["VOL","MC"],  forca: 79 },
      { id: 'aleksandar-kolarov',  nome: "Aleksandar Kolarov",  posicoes: ["LE","MD"],   forca: 77 },
      { id: 'goran-pandev',        nome: "Goran Pandev",        posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'tommaso-rocchi',      nome: "Tommaso Rocchi",      posicoes: ["ATA"],       forca: 80 },
      { id: 'valon-behrami',       nome: "Valon Behrami",       posicoes: ["MD","VOL"],  forca: 78 },
      { id: 'massimo-mutarelli',   nome: "Massimo Mutarelli",   posicoes: ["MC","VOL"],  forca: 75 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2007,
    clube: "Milan",
    jogadores: [
      { id: 'dida',                nome: "Dida",                posicoes: ["GOL"],       forca: 83 },
      { id: 'massimo-oddo',        nome: "Massimo Oddo",        posicoes: ["LD","ZAG"],  forca: 80 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 87 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 83 },
      { id: 'marek-jankulovski',   nome: "Marek Jankulovski",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'andrea-pirlo',        nome: "Andrea Pirlo",        posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'kaka',                nome: "Kaká",                posicoes: ["MEI","MC"],  forca: 91 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 82 },
      { id: 'alberto-gilardino',   nome: "Alberto Gilardino",   posicoes: ["ATA"],       forca: 82 },
      { id: 'ricardo-oliveira',    nome: "Ricardo Oliveira",    posicoes: ["ATA"],       forca: 78 },
      { id: 'yoann-gourcuff',      nome: "Yoann Gourcuff",      posicoes: ["MEI","MC"],  forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2007,
    clube: "Palermo",
    jogadores: [
      { id: 'alberto-fontana',     nome: "Alberto Fontana",     posicoes: ["GOL"],       forca: 77 },
      { id: 'cristian-zaccardo',   nome: "Cristian Zaccardo",   posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'andrea-barzagli',     nome: "Andrea Barzagli",     posicoes: ["ZAG"],       forca: 82 },
      { id: 'cesare-bovo',         nome: "Cesare Bovo",         posicoes: ["ZAG"],       forca: 78 },
      { id: 'mattia-cassani',      nome: "Mattia Cassani",      posicoes: ["LD","MD"],   forca: 76 },
      { id: 'fabio-liverani',      nome: "Fabio Liverani",      posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'giulio-migliaccio',   nome: "Giulio Migliaccio",   posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'mark-bresciano',      nome: "Mark Bresciano",      posicoes: ["MEI","MC"],  forca: 79 },
      { id: 'fabio-simplicio',     nome: "Fábio Simplício",     posicoes: ["MC","MEI"],  forca: 78 },
      { id: 'andrea-caracciolo',   nome: "Andrea Caracciolo",   posicoes: ["ATA"],       forca: 77 },
      { id: 'amauri',              nome: "Amauri",              posicoes: ["ATA"],       forca: 81 },
      { id: 'david-di-michele',    nome: "David Di Michele",    posicoes: ["ATA"],       forca: 78 },
      { id: 'fabrizio-miccoli',    nome: "Fabrizio Miccoli",    posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'eugenio-corini',      nome: "Eugenio Corini",      posicoes: ["MC","MEI"],  forca: 76 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2007,
    clube: "Fiorentina",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 83 },
      { id: 'tomas-ujfalusi',      nome: "Tomáš Ujfaluši",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'alessandro-gamberini', nome: "Alessandro Gamberini", posicoes: ["ZAG"],     forca: 79 },
      { id: 'dario-dainelli',      nome: "Dario Dainelli",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'manuel-pasqual',      nome: "Manuel Pasqual",      posicoes: ["LE","MD"],   forca: 77 },
      { id: 'martin-jorgensen',    nome: "Martin Jørgensen",    posicoes: ["MD","MEI"],  forca: 79 },
      { id: 'cristian-brocchi',    nome: "Cristian Brocchi",    posicoes: ["VOL","MC"],  forca: 77 },
      { id: 'riccardo-montolivo',  nome: "Riccardo Montolivo",  posicoes: ["MC","MEI"],  forca: 79 },
      { id: 'franco-semioli',      nome: "Franco Semioli",      posicoes: ["MD","PD"],   forca: 76 },
      { id: 'luca-toni',           nome: "Luca Toni",           posicoes: ["ATA"],       forca: 85 },
      { id: 'adrian-mutu',         nome: "Adrian Mutu",         posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'giampaolo-pazzini',   nome: "Giampaolo Pazzini",   posicoes: ["ATA"],       forca: 78 },
      { id: 'valeri-bojinov',      nome: "Valeri Bojinov",      posicoes: ["ATA"],       forca: 76 },
      { id: 'zdravko-kuzmanovic',  nome: "Zdravko Kuzmanović",  posicoes: ["MC","MEI"],  forca: 76 }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  Edição 2008 (temporada 2007-08) — a INTER de Mancini bicampeã (85 pts, 16º
  //  título), garantido na última rodada, 3 pts à frente da Roma. A JUVENTUS voltou
  //  da Serie B direto ao 3º lugar, com Del Piero artilheiro (21 gols) aos 33 anos.
  //  Top-6: Inter (85), Roma (82), Juventus (72), Fiorentina (66), Milan (64),
  //  Sampdoria (60). Foi a última temporada de Mancini na Inter antes de Mourinho.
  //  A Sampdoria de Cassano e Quagliarella voltou ao top-6.
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Serie A",
    edicao: 2008,
    clube: "Inter de Milão",
    jogadores: [
      { id: 'julio-cesar',         nome: "Júlio César",         posicoes: ["GOL"],       forca: 86 },
      { id: 'maicon',              nome: "Maicon",              posicoes: ["LD","MD"],   forca: 85 },
      { id: 'walter-samuel',       nome: "Walter Samuel",       posicoes: ["ZAG"],       forca: 83 },
      { id: 'ivan-cordoba',        nome: "Iván Córdoba",        posicoes: ["ZAG","LD"],  forca: 81 },
      { id: 'marco-materazzi',     nome: "Marco Materazzi",     posicoes: ["ZAG"],       forca: 81 },
      { id: 'javier-zanetti',      nome: "Javier Zanetti",      posicoes: ["LD","VOL"],  forca: 84 },
      { id: 'maxwell',             nome: "Maxwell",             posicoes: ["LE","MD"],   forca: 80 },
      { id: 'esteban-cambiasso',   nome: "Esteban Cambiasso",   posicoes: ["VOL","MC"],  forca: 85 },
      { id: 'patrick-vieira',      nome: "Patrick Vieira",      posicoes: ["VOL","MC"],  forca: 82 },
      { id: 'dejan-stankovic',     nome: "Dejan Stanković",     posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'luis-jimenez',        nome: "Luís Jiménez",        posicoes: ["MEI","MC"],  forca: 78 },
      { id: 'zlatan-ibrahimovic',  nome: "Zlatan Ibrahimović",  posicoes: ["ATA"],       forca: 88 },
      { id: 'julio-cruz',          nome: "Julio Cruz",          posicoes: ["ATA"],       forca: 79 },
      { id: 'hernan-crespo',       nome: "Hernán Crespo",       posicoes: ["ATA"],       forca: 82 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2008,
    clube: "Roma",
    jogadores: [
      { id: 'doni',                nome: "Doni",                posicoes: ["GOL"],       forca: 81 },
      { id: 'marco-cassetti',      nome: "Marco Cassetti",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'philippe-mexes',      nome: "Philippe Mexès",      posicoes: ["ZAG"],       forca: 81 },
      { id: 'juan',                nome: "Juan",                posicoes: ["ZAG"],       forca: 82 },
      { id: 'max-tonetto',         nome: "Max Tonetto",         posicoes: ["LE","MD"],   forca: 77 },
      { id: 'daniele-de-rossi',    nome: "Daniele De Rossi",    posicoes: ["VOL","MC"],  forca: 86 },
      { id: 'david-pizarro',       nome: "David Pizarro",       posicoes: ["MC","MEI"],  forca: 82 },
      { id: 'simone-perrotta',     nome: "Simone Perrotta",     posicoes: ["MC","MEI"],  forca: 80 },
      { id: 'mirko-vucinic',       nome: "Mirko Vučinić",       posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'francesco-totti',     nome: "Francesco Totti",     posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'mancini',             nome: "Mancini",             posicoes: ["PD","MEI"],  forca: 82 },
      { id: 'rodrigo-taddei',      nome: "Rodrigo Taddei",      posicoes: ["MD","MEI"],  forca: 77 },
      { id: 'ludovic-giuly',       nome: "Ludovic Giuly",       posicoes: ["PD","ATA"],  forca: 79 },
      { id: 'christian-panucci',   nome: "Christian Panucci",   posicoes: ["LD","ZAG"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2008,
    clube: "Juventus",
    jogadores: [
      { id: 'gianluigi-buffon',    nome: "Gianluigi Buffon",    posicoes: ["GOL"],       forca: 89 },
      { id: 'zdenek-grygera',      nome: "Zdeněk Grygera",      posicoes: ["LD","ZAG"],  forca: 78 },
      { id: 'nicola-legrottaglie', nome: "Nicola Legrottaglie", posicoes: ["ZAG"],       forca: 79 },
      { id: 'giorgio-chiellini',   nome: "Giorgio Chiellini",   posicoes: ["ZAG","LE"],  forca: 84 },
      { id: 'jean-alain-boumsong', nome: "Jean-Alain Boumsong", posicoes: ["ZAG"],       forca: 78 },
      { id: 'molinaro',            nome: "Cristian Molinaro",   posicoes: ["LE","MD"],   forca: 76 },
      { id: 'mauro-camoranesi',    nome: "Mauro Camoranesi",    posicoes: ["MD","MEI"],  forca: 81 },
      { id: 'momo-sissoko',        nome: "Momo Sissoko",        posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'claudio-marchisio',   nome: "Claudio Marchisio",   posicoes: ["MC","VOL"],  forca: 78 },
      { id: 'pavel-nedved',        nome: "Pavel Nedvěd",        posicoes: ["MEI","MC"],  forca: 83 },
      { id: 'alessandro-del-piero', nome: "Alessandro Del Piero", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'david-trezeguet',     nome: "David Trezeguet",     posicoes: ["ATA"],       forca: 85 },
      { id: 'vincenzo-iaquinta',   nome: "Vincenzo Iaquinta",   posicoes: ["ATA"],       forca: 79 },
      { id: 'tiago',               nome: "Tiago",               posicoes: ["MC","VOL"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2008,
    clube: "Fiorentina",
    jogadores: [
      { id: 'sebastien-frey',      nome: "Sébastien Frey",      posicoes: ["GOL"],       forca: 84 },
      { id: 'manuel-pasqual',      nome: "Manuel Pasqual",      posicoes: ["LE","MD"],   forca: 77 },
      { id: 'tomas-ujfalusi',      nome: "Tomáš Ujfaluši",      posicoes: ["ZAG","LD"],  forca: 79 },
      { id: 'alessandro-gamberini', nome: "Alessandro Gamberini", posicoes: ["ZAG"],     forca: 79 },
      { id: 'dario-dainelli',      nome: "Dario Dainelli",      posicoes: ["ZAG"],       forca: 78 },
      { id: 'massimo-gobbi',       nome: "Massimo Gobbi",       posicoes: ["LE","MD"],   forca: 76 },
      { id: 'riccardo-montolivo',  nome: "Riccardo Montolivo",  posicoes: ["MC","MEI"],  forca: 81 },
      { id: 'martin-jorgensen',    nome: "Martin Jørgensen",    posicoes: ["MD","MEI"],  forca: 78 },
      { id: 'zdravko-kuzmanovic',  nome: "Zdravko Kuzmanović",  posicoes: ["MC","MEI"],  forca: 77 },
      { id: 'adrian-mutu',         nome: "Adrian Mutu",         posicoes: ["ATA","MEI"], forca: 83 },
      { id: 'giampaolo-pazzini',   nome: "Giampaolo Pazzini",   posicoes: ["ATA"],       forca: 79 },
      { id: 'christian-vieri',     nome: "Christian Vieri",     posicoes: ["ATA"],       forca: 77 },
      { id: 'franco-semioli',      nome: "Franco Semioli",      posicoes: ["MD","PD"],   forca: 76 },
      { id: 'juan-manuel-vargas',  nome: "Juan Manuel Vargas",  posicoes: ["LE","MD"],   forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2008,
    clube: "Milan",
    jogadores: [
      { id: 'dida',                nome: "Dida",                posicoes: ["GOL"],       forca: 82 },
      { id: 'massimo-oddo',        nome: "Massimo Oddo",        posicoes: ["LD","ZAG"],  forca: 79 },
      { id: 'alessandro-nesta',    nome: "Alessandro Nesta",    posicoes: ["ZAG"],       forca: 86 },
      { id: 'paolo-maldini',       nome: "Paolo Maldini",       posicoes: ["LE","ZAG"],  forca: 82 },
      { id: 'marek-jankulovski',   nome: "Marek Jankulovski",   posicoes: ["LE","MD"],   forca: 79 },
      { id: 'gennaro-gattuso',     nome: "Gennaro Gattuso",     posicoes: ["VOL","MC"],  forca: 83 },
      { id: 'andrea-pirlo',        nome: "Andrea Pirlo",        posicoes: ["MC","VOL"],  forca: 86 },
      { id: 'clarence-seedorf',    nome: "Clarence Seedorf",    posicoes: ["MC","MEI"],  forca: 83 },
      { id: 'massimo-ambrosini',   nome: "Massimo Ambrosini",   posicoes: ["MC","VOL"],  forca: 80 },
      { id: 'kaka',                nome: "Kaká",                posicoes: ["MEI","MC"],  forca: 90 },
      { id: 'ronaldo',             nome: "Ronaldo",             posicoes: ["ATA"],       forca: 83 },
      { id: 'filippo-inzaghi',     nome: "Filippo Inzaghi",     posicoes: ["ATA"],       forca: 82 },
      { id: 'alberto-gilardino',   nome: "Alberto Gilardino",   posicoes: ["ATA"],       forca: 81 },
      { id: 'yoann-gourcuff',      nome: "Yoann Gourcuff",      posicoes: ["MEI","MC"],  forca: 78 }
    ]
  },

  {
    competicao: "Serie A",
    edicao: 2008,
    clube: "Sampdoria",
    jogadores: [
      { id: 'luca-castellazzi',    nome: "Luca Castellazzi",    posicoes: ["GOL"],       forca: 78 },
      { id: 'lorenzo-stovini',     nome: "Lorenzo Stovini",     posicoes: ["ZAG"],       forca: 75 },
      { id: 'daniele-gastaldello', nome: "Daniele Gastaldello", posicoes: ["ZAG"],       forca: 78 },
      { id: 'sergio-volpi',        nome: "Sergio Volpi",        posicoes: ["VOL","ZAG"], forca: 76 },
      { id: 'reto-ziegler',        nome: "Reto Ziegler",        posicoes: ["LE","ZAG"],  forca: 76 },
      { id: 'angelo-palombo',      nome: "Angelo Palombo",      posicoes: ["VOL","MC"],  forca: 80 },
      { id: 'cristian-zenoni',     nome: "Cristian Zenoni",     posicoes: ["LD","MD"],   forca: 75 },
      { id: 'gennaro-delvecchio',  nome: "Gennaro Delvecchio",  posicoes: ["MC","MEI"],  forca: 75 },
      { id: 'vitali-kutuzov',      nome: "Vitali Kutuzov",      posicoes: ["ATA"],       forca: 75 },
      { id: 'antonio-cassano',     nome: "Antonio Cassano",     posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'fabio-quagliarella',  nome: "Fabio Quagliarella",  posicoes: ["ATA"],       forca: 81 },
      { id: 'claudio-bellucci',    nome: "Claudio Bellucci",    posicoes: ["ATA"],       forca: 75 },
      { id: 'pietro-accardi',      nome: "Pietro Accardi",      posicoes: ["LD","ZAG"],  forca: 74 },
      { id: 'francesco-flachi',    nome: "Francesco Flachi",    posicoes: ["ATA","MEI"], forca: 76 }
    ]
  }

];