// ============================================================
//  mundial-f.js  —  dados de Vôlei FEMININO (Mundial de Seleções)
//
//  Estrutura idêntica ao masculino (mundial-m.js): cada "edição" é
//  um Mundial; cada "clube" é uma SELEÇÃO. Seleções por edição: as
//  4 semifinalistas (+ Brasil, se não estiver entre elas).
//
//  Competição: mundial_f (feminino), SEPARADA do masculino.
//  Cada seleção: 6 jogadoras = 5 de linha + 1 líbero (líbero FIXO).
//
//  Posições: LEV (levantadora) · OPO (oposta) · PON (ponteira) ·
//            CEN (central) · LIB (líbero)
//
//  Convenções:
//   - `id` = a PESSOA, reutilizado entre edições.
//   - Força 0-100, régua ~82 de média, 90+ raro. NORMALIZADA DENTRO
//     do FEMININO (uma força 90 aqui NÃO se compara com 90 no
//     masculino — são competições e escalas independentes).
//   - Edição = ano do Mundial.
// ============================================================

const DADOS_VOLEI_F = [

  // ══════════════════════════════════════════════════════════════════════════
  //  ★ MUNDIAL FEMININO 2022 (Holanda/Polônia) ★
  //  A SÉRVIA de Daniele Santarelli BICAMPEÃ (2º título seguido), batendo o
  //  Brasil por 3-0 na final, INVICTA (12 vitórias em 12 jogos). Itália levou
  //  o bronze sobre os EUA. Tijana BOŠKOVIĆ foi a MVP (repetiu o feito).
  //  Seleções (4 semifinalistas, Brasil já incluído): Sérvia (ouro), Brasil
  //  (prata), Itália (bronze), EUA (4º).
  //  Prêmios: MVP/Melhor oposta Bošković (SRB); Melhor levantadora Drča (SRB);
  //  Melhores ponteiras Gabi (BRA) e Sylla (ITA); Melhores centrais Ana Carolina
  //  (BRA) e Danesi (ITA); Melhor líbero Pušić (SRB). Maior pontuadora: Egonu (ITA).
  // ══════════════════════════════════════════════════════════════════════════

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Sérvia",
    jogadores: [
      { id: 'bojana-drca',         nome: "Drča",                posicoes: ["LEV"],       forca: 86 },
      { id: 'tijana-boskovic',     nome: "Bošković",            posicoes: ["OPO"],       forca: 93 },
      { id: 'brankica-mihajlovic', nome: "Mihajlović",          posicoes: ["PON"],       forca: 86 },
      { id: 'bianka-busa',         nome: "Buša",                posicoes: ["PON"],       forca: 84 },
      { id: 'jovana-stevanovic',   nome: "Stevanović",          posicoes: ["CEN"],       forca: 84 },
      { id: 'teodora-pusic',       nome: "Pušić",               posicoes: ["LIB"],       forca: 85 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Brasil",
    jogadores: [
      { id: 'macris-carneiro',     nome: "Macris",              posicoes: ["LEV"],       forca: 85 },
      { id: 'tandara-caixeta',     nome: "Tandara",             posicoes: ["OPO"],       forca: 85 },
      { id: 'gabriela-guimaraes',  nome: "Gabi",                posicoes: ["PON"],       forca: 89 },
      { id: 'julia-bergmann',      nome: "Julia Bergmann",      posicoes: ["PON"],       forca: 83 },
      { id: 'ana-carolina-silva',  nome: "Ana Carolina",        posicoes: ["CEN"],       forca: 85 },
      { id: 'nyeme-costa',         nome: "Nyeme",               posicoes: ["LIB"],       forca: 82 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Itália",
    jogadores: [
      { id: 'alessia-orro',        nome: "Orro",                posicoes: ["LEV"],       forca: 86 },
      { id: 'paola-egonu',         nome: "Egonu",               posicoes: ["OPO"],       forca: 91 },
      { id: 'miriam-sylla',        nome: "Sylla",               posicoes: ["PON"],       forca: 87 },
      { id: 'caterina-bosetti',    nome: "Bosetti",             posicoes: ["PON"],       forca: 84 },
      { id: 'anna-danesi',         nome: "Danesi",              posicoes: ["CEN"],       forca: 85 },
      { id: 'monica-de-gennaro',   nome: "De Gennaro",          posicoes: ["LIB"],       forca: 87 }
    ]
  },

  {
    competicao: "Mundial de Vôlei (F)",
    edicao: 2022,
    clube: "Estados Unidos",
    jogadores: [
      { id: 'jordyn-poulter',      nome: "Poulter",             posicoes: ["LEV"],       forca: 84 },
      { id: 'annie-drews',         nome: "Drews",               posicoes: ["OPO"],       forca: 85 },
      { id: 'jordan-larson',       nome: "Larson",              posicoes: ["PON"],       forca: 87 },
      { id: 'michelle-bartsch',    nome: "Bartsch-Hackley",     posicoes: ["PON"],       forca: 85 },
      { id: 'chiaka-ogbogu',       nome: "Ogbogu",              posicoes: ["CEN"],       forca: 83 },
      { id: 'justine-wong-orantes', nome: "Wong-Orantes",       posicoes: ["LIB"],       forca: 84 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_VOLEI_F;
}
