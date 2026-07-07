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
// Grupo canônico de uma competição (ou null se não reconhecida).
function grupoDe(c) {
  if (ehLiberta(c))   return 'liberta';
  if (ehChampions(c)) return 'champions';
  if (ehBrasil(c))    return 'brasil';
  if (ehCopa(c))      return 'copa';
  return null;
}

// ── Combinações de jogadores (quadrados mágicos, trios) ──
// Cada combo exige que TODOS os nomes tenham sido escalados JUNTOS numa mesma campanha.
// `nomes` usa a grafia EXATA do banco (js/dados/*.js). `alternativas` permite variações do
// mesmo jogador (ex.: 'Neymar' ou 'Neymar Jr') — basta uma bater. Curado com o João.
const COMBOS = [
  { id: 'trio_msn',        nomes: [['Lionel Messi'], ['Luis Suarez'], ['Neymar', 'Neymar Jr']] },
  { id: 'trio_bbc',        nomes: [['Gareth Bale'], ['Karim Benzema'], ['Cristiano Ronaldo']] },
  { id: 'trio_holandes',   nomes: [['Ruud Gullit'], ['Marco van Basten'], ['Frank Rijkaard']] },
  { id: 'trio_sfm',        nomes: [['Mohamed Salah'], ['Roberto Firmino'], ['Sadio Mané', 'Sadio Mane']] },
  { id: 'tres_rs',         nomes: [['Ronaldo'], ['Rivaldo'], ['Ronaldinho']] },
  { id: 'quadrado_magico', nomes: [['Ronaldo'], ['Adriano'], ['Kaká'], ['Ronaldinho']] },
  { id: 'pele_garrincha',  nomes: [['Pelé'], ['Garrincha']] },
  { id: 'ro_ro',           nomes: [['Romário'], ['Ronaldo']] },
  { id: 'meio_barca',      nomes: [['Xavi'], ['Andrés Iniesta'], ['Sergio Busquets']] },
  { id: 'quadrado_82',     nomes: [['Zico'], ['Sócrates'], ['Falcão'], ['Toninho Cerezo']] },
  { id: 'zaga_milan',      nomes: [['Paolo Maldini'], ['Franco Baresi'], ['Alessandro Nesta']] },
  { id: 'alemanha_70',     nomes: [['Gerd Müller'], ['Franz Beckenbauer'], ['Paul Breitner']] },
  { id: 'trio_argentino',  nomes: [['Lionel Messi'], ['Ángel Di María'], ['Sergio Agüero']] },
  { id: 'eixo_bayern',     nomes: [['Manuel Neuer'], ['Philipp Lahm'], ['Bastian Schweinsteiger']] },
];

// Extrai o conjunto de nomes escalados numa campanha (do snapshot.picks).
function nomesEscalados(m) {
  const picks = m && m.detalhes && m.detalhes.snapshot && m.detalhes.snapshot.picks;
  if (!Array.isArray(picks)) return null;
  const set = new Set();
  for (const p of picks) { if (p && p.nome) set.add(p.nome); }
  return set;
}

// Um combo é satisfeito se existe ALGUMA campanha onde todos os seus jogadores foram escalados.
function comboFeito(ctx, combo) {
  for (const m of ctx.matches) {
    const set = nomesEscalados(m);
    if (!set) continue;
    const todos = combo.nomes.every(function (variacoes) {
      return variacoes.some(function (nome) { return set.has(nome); });
    });
    if (todos) return true;
  }
  return false;
}

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
  { id: 'rolo_compressor', check: ctx => ctx.matches.some(m => m.campeao && (m.derrotas || 0) === 0 && ((m.gf || 0) - (m.ga || 0)) >= 15) },
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

  // ── Competições — específicas por modo (tri, penta, especialista, matador) ──
  { id: 'tri_champions',   check: ctx => ctx.titulosPorGrupo.champions >= 3 },
  { id: 'tri_brasil',      check: ctx => ctx.titulosPorGrupo.brasil    >= 3 },
  { id: 'tri_copa',        check: ctx => ctx.titulosPorGrupo.copa      >= 3 },
  { id: 'penta_liberta',   check: ctx => ctx.titulosPorGrupo.liberta   >= 5 },
  { id: 'penta_champions', check: ctx => ctx.titulosPorGrupo.champions >= 5 },
  { id: 'penta_brasil',    check: ctx => ctx.titulosPorGrupo.brasil    >= 5 },
  { id: 'penta_copa',      check: ctx => ctx.titulosPorGrupo.copa      >= 5 },
  { id: 'especialista_liberta',   check: ctx => ctx.campanhasPorGrupo.liberta   >= 10 },
  { id: 'especialista_champions', check: ctx => ctx.campanhasPorGrupo.champions >= 10 },
  { id: 'especialista_brasil',    check: ctx => ctx.campanhasPorGrupo.brasil    >= 10 },
  { id: 'especialista_copa',      check: ctx => ctx.campanhasPorGrupo.copa      >= 10 },
  { id: 'matador_liberta',   check: ctx => ctx.golsPorGrupo.liberta   >= 100 },
  { id: 'matador_champions', check: ctx => ctx.golsPorGrupo.champions >= 100 },
  { id: 'matador_brasil',    check: ctx => ctx.golsPorGrupo.brasil    >= 100 },
  { id: 'matador_copa',      check: ctx => ctx.golsPorGrupo.copa      >= 100 },

  // ── Combinações de jogadores (geradas de COMBOS) ──
  ...COMBOS.map(function (combo) {
    return { id: combo.id, check: ctx => comboFeito(ctx, combo) };
  }),
];

// Monta o contexto agregando todas as campanhas do usuário.
function montarContexto(matches) {
  const vazio = () => ({ liberta: 0, champions: 0, brasil: 0, copa: 0 });
  const ctx = {
    matches: matches || [],
    totalPartidas: 0,
    totalGols: 0,
    totalVitorias: 0,
    titulos: 0,
    competicoesVencidas: new Set(),
    titulosPorGrupo:   vazio(),  // títulos por competição
    golsPorGrupo:      vazio(),  // gols marcados por competição
    vitoriasPorGrupo:  vazio(),  // vitórias por competição
    campanhasPorGrupo: vazio(),  // campanhas disputadas por competição
  };
  for (const m of ctx.matches) {
    ctx.totalPartidas += (m.vitorias || 0) + (m.empates || 0) + (m.derrotas || 0);
    ctx.totalGols     += (m.gf || 0);
    ctx.totalVitorias += (m.vitorias || 0);
    const g = grupoDe(m.competicao);
    if (g) {
      ctx.campanhasPorGrupo[g]++;
      ctx.golsPorGrupo[g]     += (m.gf || 0);
      ctx.vitoriasPorGrupo[g] += (m.vitorias || 0);
    }
    if (m.campeao) {
      ctx.titulos++;
      ctx.competicoesVencidas.add(m.competicao);
      if (g) ctx.titulosPorGrupo[g]++;
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
