// achievements.js — catálogo de conquistas do backend + cálculo de desbloqueio.
// Os IDs espelham js/conquistas.js (frontend). Cada conquista tem uma função `check(ctx)`
// que recebe o contexto do usuário e retorna true se está desbloqueada.
//
// ctx = {
//   matches:   [ { competicao, vitorias, empates, derrotas, gf, ga, posicao, campeao, detalhes } , ... ]  (todas as campanhas do usuário)
//   totalPartidas: nº de jogos somados (vitorias+empates+derrotas de todas as campanhas)
//   totalGols:     gf somado de todas as campanhas
//   titulos:       nº de campanhas com campeao=true
//   competicoesVencidas: Set de competições em que foi campeão
// }
//
// `detalhes` (JSONB da campanha) pode conter flags que o cliente envia ao salvar, ex.:
//   { hatTrick: true, poker: true, finalNosPenaltis: true, seteA0: true, invicto: true, ... }
// Conquistas que dependem de eventos finos usam esses flags (o cliente os informa).

function normComp(c) { return String(c || '').toLowerCase(); }
function ehLiberta(c)   { return normComp(c).includes('liberta'); }
function ehChampions(c) { return normComp(c).includes('champions'); }
function ehBrasil(c)    { return normComp(c).includes('brasileir'); }
function ehCopa(c)      { return normComp(c).includes('copa'); }

const CATALOGO = [
  // ── Progressão ──
  { id: 'primeira_vez',      check: ctx => ctx.matches.length >= 1 },
  { id: 'primeira_vitoria',  check: ctx => ctx.matches.some(m => (m.vitorias || 0) >= 1) },
  { id: 'primeiro_titulo',   check: ctx => ctx.titulos >= 1 },
  { id: 'veterano',          check: ctx => ctx.totalPartidas >= 50 },
  { id: 'centuriao',         check: ctx => ctx.totalPartidas >= 100 },
  { id: 'lenda_viva',        check: ctx => ctx.totalPartidas >= 200 },
  { id: 'dinastico',         check: ctx => ctx.titulos >= 5 },
  { id: 'imperador',         check: ctx => ctx.titulos >= 15 },
  { id: 'maquina_de_gols',   check: ctx => ctx.totalGols >= 100 },
  { id: 'artilheiro_mor',    check: ctx => ctx.totalGols >= 500 },
  { id: 'centenario',        check: ctx => ctx.totalVitorias >= 100 },

  // ── Placar & Campanha (dependem de stats da campanha ou de flags em detalhes) ──
  { id: 'sete_a_zero',   check: ctx => ctx.matches.some(m => (m.vitorias || 0) >= 7 && (m.derrotas || 0) === 0) },
  { id: 'invencivel',    check: ctx => ctx.matches.some(m => m.campeao && (m.derrotas || 0) === 0) },
  { id: 'perfeccionista',check: ctx => ctx.matches.some(m => m.campeao && (m.derrotas || 0) === 0 && (m.empates || 0) === 0 && (m.vitorias || 0) >= 3) },
  { id: 'muralha',       check: ctx => ctx.matches.some(m => m.campeao && (m.ga || 0) === 0 && (m.vitorias || 0) >= 1) },
  { id: 'goleador_serial',check: ctx => ctx.matches.some(m => (m.gf || 0) >= 50) },
  { id: 'show_de_bola',  check: ctx => ctx.matches.some(m => m.detalhes && m.detalhes.showDeBola) },
  { id: 'massacre',      check: ctx => ctx.matches.some(m => m.detalhes && m.detalhes.maiorSaldoJogo >= 6) },
  { id: 'aniquilacao',   check: ctx => ctx.matches.some(m => m.detalhes && (m.detalhes.maiorSaldoJogo || 0) >= 8) },
  { id: 'hat_trick',     check: ctx => ctx.matches.some(m => m.detalhes && m.detalhes.hatTrick) },
  { id: 'trinca_dupla',  check: ctx => ctx.matches.filter(m => m.detalhes && m.detalhes.hatTrick).length >= 2 },
  { id: 'poquer',        check: ctx => ctx.matches.some(m => m.detalhes && m.detalhes.poker) },
  { id: 'nos_penaltis',  check: ctx => ctx.matches.some(m => m.detalhes && m.detalhes.finalNosPenaltis) },
  { id: 'coracao_forte', check: ctx => ctx.matches.some(m => m.detalhes && (m.detalhes.matasNosPenaltis || 0) >= 2) },

  // ── Competições ──
  { id: 'campeao_liberta',   check: ctx => [...ctx.competicoesVencidas].some(ehLiberta) },
  { id: 'campeao_champions', check: ctx => [...ctx.competicoesVencidas].some(ehChampions) },
  { id: 'campeao_brasil',    check: ctx => [...ctx.competicoesVencidas].some(ehBrasil) },
  { id: 'campeao_copa',      check: ctx => [...ctx.competicoesVencidas].some(ehCopa) },
  { id: 'bi_liberta',        check: ctx => ctx.titulosPorGrupo.liberta   >= 2 },
  { id: 'bi_champions',      check: ctx => ctx.titulosPorGrupo.champions >= 2 },
  { id: 'bi_brasil',         check: ctx => ctx.titulosPorGrupo.brasil    >= 2 },
  { id: 'bi_copa',           check: ctx => ctx.titulosPorGrupo.copa      >= 2 },
  { id: 'rei_america',       check: ctx => ctx.titulosPorGrupo.liberta   >= 3 },
  { id: 'continental',       check: ctx => {
      const v = [...ctx.competicoesVencidas];
      return v.some(ehLiberta) && v.some(ehChampions);
  } },
  { id: 'colecionador',      check: ctx => {
      const v = [...ctx.competicoesVencidas];
      return v.some(ehLiberta) && v.some(ehChampions) && v.some(ehBrasil) && v.some(ehCopa);
  } },
];

// Monta o contexto agregando todas as campanhas do usuário.
function montarContexto(matches) {
  const ctx = {
    matches: matches || [],
    totalPartidas: 0,
    totalGols: 0,
    totalVitorias: 0,
    titulos: 0,
    competicoesVencidas: new Set(),
    titulosPorGrupo: { liberta: 0, champions: 0, brasil: 0, copa: 0 },  // títulos por competição
  };
  for (const m of ctx.matches) {
    ctx.totalPartidas += (m.vitorias || 0) + (m.empates || 0) + (m.derrotas || 0);
    ctx.totalGols     += (m.gf || 0);
    ctx.totalVitorias += (m.vitorias || 0);
    if (m.campeao) {
      ctx.titulos++;
      ctx.competicoesVencidas.add(m.competicao);
      if (ehLiberta(m.competicao))   ctx.titulosPorGrupo.liberta++;
      if (ehChampions(m.competicao)) ctx.titulosPorGrupo.champions++;
      if (ehBrasil(m.competicao))    ctx.titulosPorGrupo.brasil++;
      if (ehCopa(m.competicao))      ctx.titulosPorGrupo.copa++;
    }
  }
  return ctx;
}

// Retorna a lista de IDs de conquistas que o usuário SATISFAZ, dado o histórico.
function calcularDesbloqueadas(matches) {
  const ctx = montarContexto(matches);
  const ids = [];
  for (const conq of CATALOGO) {
    try { if (conq.check(ctx)) ids.push(conq.id); }
    catch (_) { /* condição malformada não derruba o cálculo */ }
  }
  return ids;
}

module.exports = { CATALOGO, calcularDesbloqueadas, montarContexto };
