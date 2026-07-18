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

// FONTE DE VERDADE ÚNICA das competições conhecidas. Ao adicionar uma competição nova (ex.:
// Premier League), inclua-a AQUI (id + matcher) e as conquistas "de todas as competições" e as
// métricas por grupo se ajustam SOZINHAS — sem manutenção espalhada.
const GRUPOS_CONHECIDOS = [
  { id: 'liberta',   eh: ehLiberta },
  { id: 'champions', eh: ehChampions },
  { id: 'brasil',    eh: ehBrasil },
  { id: 'copa',      eh: ehCopa },
];
// Grupo canônico de uma competição (ou null se não reconhecida).
function grupoDe(c) {
  for (const g of GRUPOS_CONHECIDOS) { if (g.eh(c)) return g.id; }
  return null;
}
// Quantos grupos distintos o usuário venceu (usa competicoesVencidas).
function gruposVencidos(ctx) {
  const venc = [...ctx.competicoesVencidas];
  return GRUPOS_CONHECIDOS.filter(g => venc.some(g.eh)).length;
}

// ── Combinações de jogadores (quadrados mágicos, trios) ──
// Cada combo exige que TODOS os jogadores tenham sido escalados JUNTOS numa mesma campanha.
//
// Cada entrada é uma lista de CHAVES e basta UMA bater. Prefira o `id` (js/dados/*.js):
// ele identifica a PESSOA. Nome é string e não distingue gente diferente —
// 'Ronaldo' cobria o Fenômeno, o goleiro do Bahia, o Cristiano e um zagueiro do Bangu;
// 'Luis Suárez' cobre o uruguaio, o espanhol de 1965 e um colombiano.
//
// ⚠️ Os NOMES ficam ao lado do id de propósito: campanhas antigas foram salvas antes de o
// id existir, e sem eles as conquistas de quem já jogou sumiriam. Campanha nova casa pelo
// id (preciso); campanha velha casa pelo nome (o que dá para fazer).
const COMBOS = [
  { id: 'trio_msn',        nomes: [['lionel-messi', 'Lionel Messi'], ['luis-suarez-uru', 'Luis Suárez', 'Luis Suarez'], ['neymar', 'Neymar', 'Neymar Jr']] },
  { id: 'trio_bbc',        nomes: [['Gareth Bale'], ['Karim Benzema'], ['Cristiano Ronaldo']] },
  { id: 'trio_holandes',   nomes: [['Ruud Gullit'], ['Marco van Basten'], ['Frank Rijkaard']] },
  { id: 'trio_sfm',        nomes: [['Mohamed Salah'], ['Roberto Firmino'], ['Sadio Mané', 'Sadio Mane']] },
  { id: 'tres_rs',         nomes: [['ronaldo-fenomeno', 'Ronaldo'], ['rivaldo', 'Rivaldo'], ['ronaldinho', 'Ronaldinho']] },
  { id: 'quadrado_magico', nomes: [['ronaldo-fenomeno', 'Ronaldo'], ['adriano', 'Adriano'], ['kaka', 'Kaká'], ['ronaldinho', 'Ronaldinho']] },
  { id: 'pele_garrincha',  nomes: [['Pelé'], ['Garrincha']] },
  { id: 'ro_ro',           nomes: [['romario', 'Romário'], ['ronaldo-fenomeno', 'Ronaldo']] },
  { id: 'meio_barca',      nomes: [['Xavi'], ['Andrés Iniesta'], ['Sergio Busquets']] },
  { id: 'quadrado_82',     nomes: [['zico-galinho', 'Zico'], ['socrates', 'Sócrates'], ['falcao', 'Falcão'], ['toninho-cerezo', 'Toninho Cerezo']] },
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
  // ⚠️ O `id` EXCLUI o nome — não somam.
  //
  // Guardar os dois no mesmo saco anula o id: o Suárez espanhol entraria como
  // `luis-suarez-esp` E como 'Luis Suárez', e o combo casaria pelo nome. A
  // compatibilidade com o passado destruiria a precisão do presente.
  //
  // Pick COM id (campanha nova) → só o id vale: identifica a pessoa.
  // Pick SEM id (as 81 campanhas salvas antes do id existir) → o nome, que é o que há.
  for (const p of picks) {
    if (!p) continue;
    if (p.id) set.add(p.id);
    else if (p.nome) set.add(p.nome);
  }
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

// ── Feitos individuais (usam gols/assistências por jogador em snapshot.picks) ──
// Devolve true se ALGUMA campanha tem um jogador que satisfaz o teste (recebe o pick).
function algumJogador(ctx, teste) {
  for (const m of ctx.matches) {
    const picks = m && m.detalhes && m.detalhes.snapshot && m.detalhes.snapshot.picks;
    if (!Array.isArray(picks)) continue;
    for (const p of picks) { if (p && teste(p)) return true; }
  }
  return false;
}
// Maior força média de XI entre todas as campanhas (para conquistas de "time montado").
function forcaMediaXI(picks) {
  const vivos = (picks || []).filter(p => p && p.forca);
  if (!vivos.length) return 0;
  return vivos.reduce((s, p) => s + (p.forca | 0), 0) / vivos.length;
}
function algumaCampanha(ctx, teste) {
  for (const m of ctx.matches) { if (teste(m)) return true; }
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
  { id: 'colecionador',      check: ctx => gruposVencidos(ctx) >= GRUPOS_CONHECIDOS.length },

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

  // ── Feitos individuais (gols/assistências de um jogador numa campanha) ──
  { id: 'artilheiro_camp', check: ctx => algumJogador(ctx, p => (p.gols | 0) >= 15) },
  { id: 'show_individual', check: ctx => algumJogador(ctx, p => (p.gols | 0) >= 20) },
  { id: 'garcom',          check: ctx => algumJogador(ctx, p => (p.asis | 0) >= 10) },
  { id: 'maestro',         check: ctx => algumJogador(ctx, p => (p.asis | 0) >= 15) },
  { id: 'craque_completo', check: ctx => algumJogador(ctx, p => (p.gols | 0) >= 10 && (p.asis | 0) >= 10) },

  // ── Força do time (composição do XI) ──
  { id: 'galacticos',   check: ctx => algumaCampanha(ctx, m => forcaMediaXI(m.detalhes && m.detalhes.snapshot && m.detalhes.snapshot.picks) >= 90) },
  { id: 'so_craques',   check: ctx => algumaCampanha(ctx, m => {
      const picks = m.detalhes && m.detalhes.snapshot && m.detalhes.snapshot.picks;
      const vivos = (picks || []).filter(p => p && p.forca);
      return vivos.length >= 11 && vivos.every(p => (p.forca | 0) >= 85);
  }) },
  { id: 'zebra',        check: ctx => algumaCampanha(ctx, m => m.campeao && forcaMediaXI(m.detalhes && m.detalhes.snapshot && m.detalhes.snapshot.picks) > 0 && forcaMediaXI(m.detalhes.snapshot.picks) <= 75) },

  // ── Progressão avançada (thresholds altos) ──
  { id: 'imortal',      check: ctx => ctx.totalPartidas >= 300 },
  { id: 'milesimo',     check: ctx => ctx.totalGols     >= 1000 },
  { id: 'bicentenario', check: ctx => ctx.totalVitorias >= 200 },
  { id: 'maratonista',  check: ctx => ctx.matches.length >= 50 },

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

module.exports = { CATALOGO, calcularDesbloqueadas, montarContexto, grupoDe, GRUPOS_CONHECIDOS };
