// ============================================================
//  esportes.js — CATÁLOGO DE ESPORTES (fonte de verdade única)
//  Carregue ANTES de regras.js.
//
//  ⚠️ FASE 1: este arquivo apenas DECLARA a estrutura. Nada no jogo o consome ainda,
//  e nenhum esporte além do futebol está habilitado. O comportamento atual é intocado.
//
//  Princípio: um esporte só aparece na interface quando `habilitado: true`.
//  Enquanto `esportesVisiveis().length === 1`, a home não mostra seletor de esporte.
//
//  Princípio 2: AS REGRAS PERTENCEM À COMPETIÇÃO, NÃO AO ESPORTE.
//  A NBA joga 4x12min com 6 faltas; a Copa do Mundo FIBA joga 4x10min com 5 faltas.
//  É o mesmo esporte. Por isso `regras` fica dentro de cada competição.
// ============================================================

const ESPORTES = {

  // ─────────────────────────────────────────── FUTEBOL (o jogo de hoje)
  futebol: {
    id: 'futebol',
    nome: 'Futebol',
    habilitado: true,              // ← o único, por enquanto
    titulares: 11,                 // cards a escalar
    emCampo: 11,                   // quantos ficam em campo ao mesmo tempo
    mapa: 'campo-inteiro',
    // código da vaga → grupo (para mapas, agrupamentos e o "time mais escalado")
    posicoes: {
      GOL: 'GOL',
      ZAG: 'DEF', LE: 'DEF', LD: 'DEF',
      VOL: 'MEI', MC: 'MEI', MEI: 'MEI', ME: 'MEI', MD: 'MEI',
      PE: 'ATA', PD: 'ATA', ATA: 'ATA'
    },
    formacoes: ['4-3-3', '4-4-2', '4-2-3-1', '3-5-2', '4-3-2-1', '4-5-1', '3-4-3', '4-1-2-1-2'],
    estatisticas: ['gols', 'assistencias'],
    // O futebol MANTÉM o draft atual: 5 turnos de 2 picks + 1 turno de 1 = 11.
    draft: { turnos: 5, picksPorTurno: 2, picksUltimoTurno: 1 },
    competicoes: {
      libertadores: { nome: 'Libertadores',    regras: { temEmpate: true } },
      champions:    { nome: 'Champions League', regras: { temEmpate: true } },
      brasileirao:  { nome: 'Brasileirão',      regras: { temEmpate: true } },
      copa:         { nome: 'Copa do Mundo',    regras: { temEmpate: true } }
    }
  },

  // ─────────────────────────────────────────── BASQUETE (planejado)
  basquete: {
    id: 'basquete',
    nome: 'Basquete',
    habilitado: false,
    titulares: 5,
    emCampo: 5,
    mapa: 'meia-quadra',           // as 5 posições são desenhadas em meia-quadra
    posicoes: { PG: 'ARMADOR', SG: 'ARMADOR', SF: 'ALA', PF: 'ALA', C: 'PIVO' },
    formacoes: null,               // basquete não tem formação
    estatisticas: ['pontos', 'rebotes', 'assistencias'],
    draft: { turnos: 5, picksPorTurno: 1, picksUltimoTurno: 0 },   // 1 pick por turno = 5
    competicoes: {
      // Prioridade do João: começar pela NBA.
      nba: {
        nome: 'NBA',
        regras: { temEmpate: false, quartos: 4, minutosPorQuarto: 12, prorrogacaoMin: 5, faltasParaExcluir: 6 }
      }
      // Depois (mesmo esporte, REGRAS DIFERENTES — por isso ficam aqui e não no esporte):
      // mundial: { nome: 'Copa do Mundo FIBA',
      //   regras: { temEmpate: false, quartos: 4, minutosPorQuarto: 10, prorrogacaoMin: 5, faltasParaExcluir: 5 } },
      // olimpiadas: { nome: 'Olimpíadas', regras: { ...igual FIBA } }
    }
  },

  // ─────────────────────────────────────────── VÔLEI (planejado)
  volei: {
    id: 'volei',
    nome: 'Vôlei',
    habilitado: false,
    titulares: 7,                  // 6 em quadra + 1 líbero (vaga própria do elenco)
    emCampo: 6,
    mapa: 'meia-quadra',           // só o SEU lado da rede
    posicoes: { LEV: 'LEVANTADOR', OPO: 'ATAQUE', PON: 'ATAQUE', CEN: 'BLOQUEIO', LIB: 'DEFESA' },
    formacoes: null,               // não há formação: há rodízio (zonas 1..6)
    estatisticas: ['pontos', 'bloqueios', 'aces'],
    draft: { turnos: 7, picksPorTurno: 1, picksUltimoTurno: 0 },   // 1 pick por turno = 7
    competicoes: {
      // Masculino e feminino SEPARADOS: as escalas de força não são comparáveis entre si.
      mundial_m: { nome: 'Mundial de Seleções (M)', regras: { temEmpate: false, melhorDe: 5, pontosPorSet: 25, pontosTieBreak: 15 } },
      mundial_f: { nome: 'Mundial de Seleções (F)', regras: { temEmpate: false, melhorDe: 5, pontosPorSet: 25, pontosTieBreak: 15 } }
    }
  },

  // ─────────────────────────────────────────── KINGS LEAGUE (o último a fazer)
  // As regras mudam a cada temporada. Congelar o regulamento vigente na hora de implementar,
  // lendo a fonte oficial (kingsleague.pro) — não matérias, que repetem números antigos.
  kings: {
    id: 'kings',
    nome: 'Kings League',
    habilitado: false,
    titulares: 7,
    emCampo: 7,
    mapa: 'campo-inteiro',
    posicoes: { GOL: 'GOL', DEF: 'DEF', MEI: 'MEI', ATA: 'ATA' },
    formacoes: ['1-2-2-2', '1-3-1-2', '1-2-3-1'],
    estatisticas: ['gols', 'assistencias'],
    draft: { turnos: 7, picksPorTurno: 1, picksUltimoTurno: 0 },   // 1 pick por turno = 7
    competicoes: {}                // a definir quando for implementado
  }
};

// Esporte ativo. Enquanto só o futebol estiver habilitado, isto nunca muda.
let esporteAtual = 'futebol';

// Só os habilitados chegam à interface. Se sobrar 1, a home não mostra seletor.
function esportesVisiveis() {
  return Object.keys(ESPORTES)
    .filter(function (id) { return ESPORTES[id].habilitado; })
    .map(function (id) { return ESPORTES[id]; });
}

function getEsporte(id) {
  return ESPORTES[id || esporteAtual] || ESPORTES.futebol;
}

// Quantos cards o usuário escala neste esporte (substituirá os "11" cravados na Fase 2).
function titularesDe(id) {
  return getEsporte(id).titulares;
}

// Atalhos do esporte ATIVO. Usados como semente: o resto do código deriva de `escalacao.length`,
// para que exista um único ponto que conhece o número de titulares.
function titularesAtuais() {
  return titularesDe(esporteAtual);
}
function emCampoAtuais() {
  var e = getEsporte(esporteAtual);
  return e.emCampo || e.titulares;
}

// Regras de uma competição específica (ex.: NBA 12min vs FIBA 10min — mesmo esporte).
function regrasDaCompeticao(idEsporte, idCompeticao) {
  const e = getEsporte(idEsporte);
  const c = e.competicoes && e.competicoes[idCompeticao];
  return (c && c.regras) || null;
}

if (typeof window !== 'undefined') {
  window.ESPORTES = ESPORTES;
  window.esportesVisiveis = esportesVisiveis;
  window.getEsporte = getEsporte;
  window.titularesDe = titularesDe;
  window.titularesAtuais = titularesAtuais;
  window.emCampoAtuais = emCampoAtuais;
  window.regrasDaCompeticao = regrasDaCompeticao;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ESPORTES, esportesVisiveis, getEsporte, titularesDe,
                     titularesAtuais, emCampoAtuais, regrasDaCompeticao };
}
