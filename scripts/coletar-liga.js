#!/usr/bin/env node
/* ============================================================================
 * coletar-liga.js — coleta elencos de uma liga via API-Football (API-Sports)
 * e gera um arquivo no FORMATO DO JOGO (js/dados/<liga>.js).
 *
 * Rode na SUA máquina (o ambiente do Claude não tem acesso de rede às APIs):
 *
 *   1. Crie uma conta grátis em https://www.api-football.com/ (ou via RapidAPI)
 *      e pegue sua chave (free tier: 100 requisições/dia, 10/min).
 *   2. Exporte a chave e rode:
 *        export API_FOOTBALL_KEY="sua_chave_aqui"
 *        node scripts/coletar-liga.js --liga 39 --season 2023 --saida premierleague
 *
 *   --liga    ID da liga na API-Football (39 = Premier League, 135 = Serie A,
 *             140 = LaLiga, 78 = Bundesliga, 61 = Ligue 1, 71 = Brasileirão).
 *   --season  Ano da temporada (ex.: 2023 = 2023/24).
 *   --saida   Nome base do arquivo gerado (vira js/dados/<saida>.js).
 *   --nome    (opcional) Rótulo da competição salvo nos dados. Default: --saida.
 *   --topN    (opcional) Quantos times pegar (por ranking final). Default: todos.
 *
 * IMPORTANTE — a força (forca):
 *   A API-Football NÃO fornece uma nota de "overall" pronta. Este script estima
 *   a força a partir do rating médio do jogador na temporada (campo games.rating,
 *   escala ~6.0–8.0) e a mapeia para a faixa do jogo (~70–88). É um PONTO DE
 *   CALIBRAÇÃO: ajuste `ratingParaForca()` ao gosto do jogo. Sem rating (jogador
 *   com poucos jogos), cai num valor base por posição. REVISE o resultado.
 * ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');

// ── Configuração ────────────────────────────────────────────────────────────
const API_HOST = 'https://v3.football.api-sports.io';
const KEY = process.env.API_FOOTBALL_KEY;

const args = parseArgs(process.argv.slice(2));
const LIGA   = args.liga;
const SEASON = args.season;
const SAIDA  = args.saida;
const NOME   = args.nome || SAIDA;
const TOPN   = args.topN ? Number(args.topN) : Infinity;

if (!KEY)   bail('Defina a chave: export API_FOOTBALL_KEY="..."');
if (!LIGA || !SEASON || !SAIDA) bail('Uso: node scripts/coletar-liga.js --liga 39 --season 2023 --saida premierleague');

// ── Tradução de posição (API-Football → siglas PT do jogo) ───────────────────
// A API-Football classifica em 4 grupos amplos: Goalkeeper, Defender,
// Midfielder, Attacker. Como ela não detalha lado/função fino de forma
// confiável no endpoint de players, mapeamos para um conjunto PT plausível.
// REVISE/refine manualmente se quiser lados (LD/LE) e funções (VOL/MEI) exatos.
const POSICAO_PT = {
  Goalkeeper: ['GOL'],
  Defender:   ['ZAG'],   // genérico; ajuste p/ LD/LE quando souber o lado
  Midfielder: ['MC'],    // genérico; ajuste p/ VOL/MEI/MD/ME conforme o caso
  Attacker:   ['ATA'],   // genérico; ajuste p/ PD/PE quando souber o lado
};
const SIGLAS_VALIDAS = ['GOL','ZAG','LD','LE','MD','ME','VOL','MC','MEI','PD','PE','ATA'];

// Força-base por grupo, usada quando não há rating disponível.
const FORCA_BASE = { Goalkeeper: 74, Defender: 74, Midfielder: 75, Attacker: 75 };

// Converte o rating médio da API (~6.0–8.0) para a faixa de força do jogo.
// CALIBRAÇÃO: ajuste estes pontos âncora ao gosto do jogo.
function ratingParaForca(rating) {
  if (rating == null) return null;
  const r = Number(rating);
  if (!isFinite(r)) return null;
  // Âncoras: 6.0 → 70 ; 7.0 → 79 ; 8.0 → 88  (linear por trecho)
  const forca = Math.round(70 + (r - 6.0) * 9);
  return Math.max(68, Math.min(90, forca));   // limita à faixa do jogo
}

// ── HTTP com retry e respeito ao rate limit (10/min no free) ─────────────────
async function apiGet(endpoint, params) {
  const url = new URL(API_HOST + endpoint);
  Object.entries(params || {}).forEach(([k, v]) => url.searchParams.set(k, v));
  for (let tentativa = 1; tentativa <= 4; tentativa++) {
    const resp = await fetch(url, { headers: { 'x-apisports-key': KEY } });
    if (resp.status === 429) { await dormir(6500); continue; }   // rate limit → espera
    const json = await resp.json();
    if (json.errors && Object.keys(json.errors).length) {
      bail('Erro da API: ' + JSON.stringify(json.errors));
    }
    return json;
  }
  bail('Falhou após múltiplas tentativas (rate limit?).');
}

// ── Coleta ───────────────────────────────────────────────────────────────────
async function main() {
  log(`Liga ${LIGA} · temporada ${SEASON} · saída js/dados/${SAIDA}.js`);

  // 1) Classificação final → ordem e lista de times.
  const standings = await apiGet('/standings', { league: LIGA, season: SEASON });
  const tabela = standings.response?.[0]?.league?.standings?.[0] || [];
  if (!tabela.length) bail('Sem classificação para essa liga/temporada.');

  let times = tabela.map(t => ({ id: t.team.id, nome: t.team.name }));
  if (isFinite(TOPN)) times = times.slice(0, TOPN);
  log(`${times.length} times a coletar.`);

  const clubes = [];
  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    log(`(${i + 1}/${times.length}) ${time.nome}…`);
    const jogadores = await coletarElenco(time.id);
    clubes.push({ competicao: NOME, edicao: Number(SEASON), clube: time.nome, jogadores });
    await dormir(6500);   // ~9 req/min, dentro do free tier
  }

  escreverArquivo(clubes);
}

// Coleta o elenco de um time (paginado), convertendo cada jogador.
async function coletarElenco(teamId) {
  const jogadores = [];
  let page = 1, totalPages = 1;
  do {
    const data = await apiGet('/players', { team: teamId, season: SEASON, league: LIGA, page });
    totalPages = data.paging?.total || 1;
    for (const item of data.response || []) {
      const j = converterJogador(item);
      if (j) jogadores.push(j);
    }
    page++;
    if (page <= totalPages) await dormir(6500);
  } while (page <= totalPages);

  // Mantém os mais fortes (até 23, tamanho de elenco saudável p/ o draft).
  jogadores.sort((a, b) => b.forca - a.forca);
  return jogadores.slice(0, 23);
}

// Converte um item /players da API para { nome, posicoes, forca }.
function converterJogador(item) {
  const p = item.player || {};
  const stat = (item.statistics || [])[0] || {};
  const grupo = stat.games?.position || p.position;     // Goalkeeper/Defender/…
  const posicoes = POSICAO_PT[grupo] || ['MC'];
  const rating = stat.games?.rating ? parseFloat(stat.games.rating) : null;
  const forca = ratingParaForca(rating) ?? FORCA_BASE[grupo] ?? 74;
  const nome = p.name || ((p.firstname || '') + ' ' + (p.lastname || '')).trim();
  if (!nome) return null;
  return { nome, posicoes, forca };
}

// ── Escrita no formato do jogo ───────────────────────────────────────────────
function escreverArquivo(clubes) {
  const constName = 'DADOS_' + SAIDA.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const cab =
    '// ============================================================\n' +
    `//  ${SAIDA}.js — elencos de ${NOME} (temporada ${SEASON}).\n` +
    '//  GERADO por scripts/coletar-liga.js (API-Football).\n' +
    '//  ⚠️ Força estimada por rating — REVISAR/calibrar manualmente.\n' +
    '//  Carregue ANTES do dados.js.\n' +
    '// ============================================================\n\n' +
    `const ${constName} = [\n`;

  const corpo = clubes.map(c => {
    const linhas = c.jogadores.map(j =>
      `      { nome: ${JSON.stringify(j.nome)}, posicoes: ${JSON.stringify(j.posicoes)}, forca: ${j.forca} }`
    ).join(',\n');
    return (
      '  {\n' +
      `    competicao: ${JSON.stringify(c.competicao)},\n` +
      `    edicao: ${c.edicao},\n` +
      `    clube: ${JSON.stringify(c.clube)},\n` +
      '    jogadores: [\n' + linhas + '\n    ]\n' +
      '  }'
    );
  }).join(',\n');

  const out = cab + corpo + '\n];\n';
  const destino = path.join(__dirname, '..', 'js', 'dados', SAIDA + '.js');
  fs.writeFileSync(destino, out, 'utf8');

  const totalJ = clubes.reduce((s, c) => s + c.jogadores.length, 0);
  log(`✓ Gerado ${destino}`);
  log(`  ${clubes.length} clubes · ${totalJ} jogadores · const ${constName}`);
  log('  PRÓXIMO PASSO MANUAL:');
  log(`   1) Inclua o <script src="js/dados/${SAIDA}.js"></script> no index.html (antes do dados.js).`);
  log(`   2) Some ...${constName} no array DADOS em js/dados/dados.js.`);
  log('   3) REVISE posições (lados/funções) e a força — os valores são estimados.');
}

// ── Utilitários ──────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const o = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) { o[argv[i].slice(2)] = argv[i + 1]; i++; }
  }
  return o;
}
function dormir(ms) { return new Promise(r => setTimeout(r, ms)); }
function log(m) { console.log('[coletar] ' + m); }
function bail(m) { console.error('[coletar] ERRO: ' + m); process.exit(1); }

main().catch(e => bail(e.message || String(e)));
