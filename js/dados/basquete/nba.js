// ============================================================
//  nba.js — dados da NBA (times + elencos)
//
//  Estrutura: cada objeto é um time de uma temporada, com "competicao": "NBA"
//  (casa com COMPETICOES.nba.dados). Posições: PG/SG/SF/PF/C.
//  Balanceado: idealmente >=1 de cada posição entre os titulares.
//
//  ⚠️ VERSÃO ESQUELETO (fatia 3b): poucos times, elencos reduzidos (5-6),
//  só para o fluxo rodar e ser testável. Os elencos completos e mais times
//  vêm na fatia de DADOS (3c).
// ============================================================

var DADOS_NBA = [

  // ─────────────────────────────────────────── Temporada 2024-25 (esqueleto)
  {
    competicao: "NBA",
    temporada: "2024-25",
    clube: "Boston Celtics",
    jogadores: [
      { id: 'jayson-tatum',     nome: "Tatum",     posicoes: ["SF"], forca: 93 },
      { id: 'jaylen-brown',     nome: "Brown",     posicoes: ["SG"], forca: 90 },
      { id: 'jrue-holiday',     nome: "Holiday",   posicoes: ["PG"], forca: 85 },
      { id: 'derrick-white',    nome: "White",     posicoes: ["SG"], forca: 84 },
      { id: 'kristaps-porzingis', nome: "Porzingis", posicoes: ["C"], forca: 86 },
      { id: 'al-horford',       nome: "Horford",   posicoes: ["PF"], forca: 82 }
    ]
  },
  {
    competicao: "NBA",
    temporada: "2024-25",
    clube: "Oklahoma City Thunder",
    jogadores: [
      { id: 'shai-gilgeous-alexander', nome: "Gilgeous-Alexander", posicoes: ["PG"], forca: 94 },
      { id: 'jalen-williams',   nome: "J. Williams", posicoes: ["SF"], forca: 85 },
      { id: 'luguentz-dort',    nome: "Dort",      posicoes: ["SG"], forca: 82 },
      { id: 'chet-holmgren',    nome: "Holmgren",  posicoes: ["C"], forca: 87 },
      { id: 'isaiah-hartenstein', nome: "Hartenstein", posicoes: ["PF"], forca: 81 },
      { id: 'cason-wallace',    nome: "Wallace",   posicoes: ["PG"], forca: 78 }
    ]
  },
  {
    competicao: "NBA",
    temporada: "2024-25",
    clube: "Denver Nuggets",
    jogadores: [
      { id: 'nikola-jokic',     nome: "Jokić",     posicoes: ["C"], forca: 96 },
      { id: 'jamal-murray',     nome: "Murray",    posicoes: ["PG"], forca: 87 },
      { id: 'michael-porter-jr', nome: "Porter Jr.", posicoes: ["SF"], forca: 84 },
      { id: 'aaron-gordon',     nome: "Gordon",    posicoes: ["PF"], forca: 83 },
      { id: 'russell-westbrook', nome: "Westbrook", posicoes: ["PG"], forca: 79 },
      { id: 'christian-braun',  nome: "Braun",     posicoes: ["SG"], forca: 78 }
    ]
  },
  {
    competicao: "NBA",
    temporada: "2024-25",
    clube: "Los Angeles Lakers",
    jogadores: [
      { id: 'lebron-james',     nome: "James",     posicoes: ["SF"], forca: 90 },
      { id: 'anthony-davis',    nome: "Davis",     posicoes: ["PF"], forca: 91 },
      { id: 'austin-reaves',    nome: "Reaves",    posicoes: ["SG"], forca: 82 },
      { id: 'dangelo-russell',  nome: "Russell",   posicoes: ["PG"], forca: 80 },
      { id: 'rui-hachimura',    nome: "Hachimura", posicoes: ["PF"], forca: 79 },
      { id: 'jarred-vanderbilt', nome: "Vanderbilt", posicoes: ["C"], forca: 76 }
    ]
  },
  {
    competicao: "NBA",
    temporada: "2024-25",
    clube: "Milwaukee Bucks",
    jogadores: [
      { id: 'giannis-antetokounmpo', nome: "Antetokounmpo", posicoes: ["PF"], forca: 95 },
      { id: 'damian-lillard',   nome: "Lillard",   posicoes: ["PG"], forca: 88 },
      { id: 'khris-middleton',  nome: "Middleton", posicoes: ["SF"], forca: 83 },
      { id: 'brook-lopez',      nome: "Lopez",     posicoes: ["C"], forca: 82 },
      { id: 'bobby-portis',     nome: "Portis",    posicoes: ["PF"], forca: 79 },
      { id: 'gary-trent-jr',    nome: "Trent Jr.", posicoes: ["SG"], forca: 77 }
    ]
  },
  {
    competicao: "NBA",
    temporada: "2024-25",
    clube: "New York Knicks",
    jogadores: [
      { id: 'jalen-brunson',    nome: "Brunson",   posicoes: ["PG"], forca: 89 },
      { id: 'karl-anthony-towns', nome: "Towns",   posicoes: ["C"], forca: 87 },
      { id: 'mikal-bridges',    nome: "Bridges",   posicoes: ["SF"], forca: 84 },
      { id: 'og-anunoby',       nome: "Anunoby",   posicoes: ["SF"], forca: 83 },
      { id: 'josh-hart',        nome: "Hart",      posicoes: ["SG"], forca: 80 },
      { id: 'mitchell-robinson', nome: "Robinson", posicoes: ["C"], forca: 78 }
    ]
  }

];

// Exporta para Node (validação) e navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS_NBA;
}
