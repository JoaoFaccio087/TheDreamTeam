// ============================================================
//  volei.js  —  dados de Vôlei (Mundial de Seleções)
//  Esporte-piloto da expansão multi-esporte.
//
//  Estrutura: cada "edição" é um Mundial; cada "clube" é uma
//  SELEÇÃO. Seleções consideradas por edição: as 4 semifinalistas
//  (+ Brasil, se não estiver entre elas). Então 4 ou 5 por edição.
//
//  Competições separadas: mundial_m (masculino) e mundial_f (feminino).
//  Cada seleção tem 6 jogadores = 5 de linha + 1 líbero (líbero FIXO).
//
//  Posições do vôlei:
//   LEV = levantador · OPO = oposto · PON = ponteiro ·
//   CEN = central · LIB = líbero
//
//  Convenções (iguais às outras competições):
//   - `id` = a PESSOA, reutilizado entre edições.
//   - Força 0-100, régua ~82 de média, 90+ raro. NORMALIZADA
//     DENTRO de cada competição (90 masc. ≠ 90 fem.).
//   - Edição = ano do Mundial.
// ============================================================

const DADOS_VOLEI_M = [

  // ══════════════════════════════════════════════════════════════════════════
  //  ★ MUNDIAL MASCULINO 2022 (Polônia/Eslovênia) ★
  //  A ITÁLIA de De Giorgi campeã (4º título), batendo a anfitriã e bicampeã
  //  Polônia por 3-1 na final. Brasil levou o bronze sobre a Eslovênia.
  //  Simone GIANNELLI (levantador) foi o MVP — 1º levantador a ganhar desde 1982.
  //  Seleções (4 semifinalistas, Brasil já incluído): Itália (ouro), Polônia
  //  (prata), Brasil (bronze), Eslovênia (4º).
  //  Prêmios: MVP/Melhor levantador Giannelli; Melhor oposto Kurek (POL);
  //  Melhores ponteiros Leal (BRA) e Semeniuk (POL); Melhores centrais Bieniek
  //  (POL) e Galassi (ITA); Melhor líbero Balaso (ITA).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Itália",
    jogadores: [
      { id: 'simone-giannelli',    nome: "Giannelli",           posicoes: ["LEV"],       forca: 92 },
      { id: 'yuri-romano',         nome: "Romanò",              posicoes: ["OPO"],       forca: 87 },
      { id: 'alessandro-michieletto', nome: "Michieletto",      posicoes: ["PON"],       forca: 88 },
      { id: 'daniele-lavia',       nome: "Lavia",               posicoes: ["PON"],       forca: 87 },
      { id: 'gianluca-galassi',    nome: "Galassi",             posicoes: ["CEN"],       forca: 85 },
      { id: 'fabio-balaso',        nome: "Balaso",              posicoes: ["LIB"],       forca: 86 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Polônia",
    jogadores: [
      { id: 'marcin-janusz',       nome: "Janusz",              posicoes: ["LEV"],       forca: 84 },
      { id: 'bartosz-kurek',       nome: "Kurek",               posicoes: ["OPO"],       forca: 90 },
      { id: 'wilfredo-leon',       nome: "Leon",                posicoes: ["PON"],       forca: 91 },
      { id: 'kamil-semeniuk',      nome: "Semeniuk",            posicoes: ["PON"],       forca: 86 },
      { id: 'mateusz-bieniek',     nome: "Bieniek",             posicoes: ["CEN"],       forca: 85 },
      { id: 'pawel-zatorski',      nome: "Zatorski",            posicoes: ["LIB"],       forca: 85 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Brasil",
    jogadores: [
      { id: 'bruno-rezende',       nome: "Bruninho",            posicoes: ["LEV"],       forca: 88 },
      { id: 'alan-souza',          nome: "Alan",                posicoes: ["OPO"],       forca: 84 },
      { id: 'yoandy-leal',         nome: "Leal",                posicoes: ["PON"],       forca: 89 },
      { id: 'ricardo-lucarelli',   nome: "Lucarelli",           posicoes: ["PON"],       forca: 85 },
      { id: 'lucas-saatkamp',      nome: "Lucão",               posicoes: ["CEN"],       forca: 83 },
      { id: 'thales-hoss',         nome: "Thales",              posicoes: ["LIB"],       forca: 84 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (M)",
    edicao: 2022,
    clube: "Eslovênia",
    jogadores: [
      { id: 'gregor-ropret',       nome: "Ropret",              posicoes: ["LEV"],       forca: 82 },
      { id: 'toncek-stern',        nome: "Štern",               posicoes: ["OPO"],       forca: 83 },
      { id: 'tine-urnaut',         nome: "Urnaut",              posicoes: ["PON"],       forca: 85 },
      { id: 'rok-mozic',           nome: "Možič",               posicoes: ["PON"],       forca: 84 },
      { id: 'jan-kozamernik',      nome: "Kozamernik",          posicoes: ["CEN"],       forca: 83 },
      { id: 'jani-kovacic',        nome: "Kovačič",             posicoes: ["LIB"],       forca: 82 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VOLEI_M;
}
