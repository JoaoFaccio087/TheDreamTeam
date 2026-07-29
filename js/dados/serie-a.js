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
  }


];