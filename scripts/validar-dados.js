#!/usr/bin/env node
'use strict';
// ============================================================================
//  validar-dados.js — confere um arquivo de dados contra o contrato (CONTRATOS.md §1.4)
//
//  USO:  node scripts/validar-dados.js js/dados/champions.js DADOS_CHAMPIONS [esporte]
//        node scripts/validar-dados.js --todos
//
//  POR QUE ISTO EXISTE: regra escrita em documento ninguém roda, e apodrece. Em jul/2026 o
//  `champions.js` tinha o MESMO clube com dois nomes (Bayern München / Bayern de Munique).
//  `Escudos.porNome()` busca por string EXATA → 17 edições sairiam com escudo sorteado pela
//  seed. Ninguém viu por meses. Este script vê em 2 segundos.
//
//  Sai com código 1 se houver ERRO. Avisos (⚠) não derrubam: são candidatos para o olho humano.
// ============================================================================

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
let CAT = null;
try { CAT = require(path.join(RAIZ, 'js', 'esportes.js')).ESPORTES; } catch (e) {}

let erros = 0, avisos = 0;
const erro  = (m) => { erros++;  console.log('  \u001b[31m\u2717 ERRO\u001b[0m   ' + m); };
const aviso = (m) => { avisos++; console.log('  \u001b[33m\u26a0 AVISO\u001b[0m  ' + m); };
const ok    = (m) => console.log('  \u001b[32m\u2713\u001b[0m ' + m);

function carregar(arquivo, varName) {
  const src = fs.readFileSync(path.join(RAIZ, arquivo), 'utf8');
  const sandbox = {};
  new Function(src.replace('const ' + varName, 'this.' + varName)
                  .replace('var ' + varName, 'this.' + varName)).call(sandbox);
  return sandbox[varName];
}

const norm = (n) => String(n).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

// ── R1: estrutura de cada edição e de cada jogador ──────────────────────────
function checarEstrutura(D, posicoesValidas) {
  const CAMPOS_EDICAO = ['competicao', 'edicao', 'clube', 'jogadores'];
  const CAMPOS_JOGADOR = ['nome', 'posicoes', 'forca'];
  let ruins = 0;

  D.forEach((e, i) => {
    const onde = `edição #${i} (${e && e.clube} ${e && e.edicao})`;
    CAMPOS_EDICAO.forEach((c) => { if (e[c] === undefined) { erro(`${onde}: falta o campo '${c}'`); ruins++; } });
    if (!Array.isArray(e.jogadores)) { erro(`${onde}: 'jogadores' não é lista`); ruins++; return; }
    // 1930 = primeira Copa do Mundo. Cravei 1950 na primeira versão e o validador
    // reprovou a base inteira da Copa — limite inventado sem olhar o dado.
    if (!Number.isInteger(e.edicao) || e.edicao < 1930 || e.edicao > 2100) {
      erro(`${onde}: 'edicao' deve ser ano inteiro plausível — veio ${JSON.stringify(e.edicao)}`); ruins++;
    }
    // O nome do clube NÃO leva o ano junto. Isso já causou bug de lookup: em alguns caminhos
    // o dado chega como "Flamengo 2019" e o escudo/estatística não acha o clube.
    if (/\b(19|20)\d{2}\b/.test(String(e.clube))) {
      erro(`${onde}: nome do clube tem ANO embutido ("${e.clube}") — o ano vai em 'edicao'`); ruins++;
    }
    if (String(e.clube).trim() !== String(e.clube)) { erro(`${onde}: clube com espaço sobrando`); ruins++; }

    const vistos = new Set();
    e.jogadores.forEach((j, k) => {
      const q = `${onde} jogador #${k} (${j && j.nome})`;
      CAMPOS_JOGADOR.forEach((c) => { if (j[c] === undefined) { erro(`${q}: falta '${c}'`); ruins++; } });
      if (!Number.isInteger(j.forca) || j.forca < 0 || j.forca > 99) {
        erro(`${q}: 'forca' deve ser inteiro 0–99 — veio ${JSON.stringify(j.forca)}`); ruins++;
      }
      if (!Array.isArray(j.posicoes) || !j.posicoes.length) {
        erro(`${q}: 'posicoes' deve ser lista não-vazia`); ruins++;
      } else if (posicoesValidas) {
        j.posicoes.forEach((p) => {
          if (!posicoesValidas.includes(p)) {
            erro(`${q}: posição '${p}' não existe no catálogo. Válidas: ${posicoesValidas.join(', ')}`); ruins++;
          }
        });
      }
      if (vistos.has(j.nome)) { erro(`${q}: jogador repetido na MESMA edição`); ruins++; }
      vistos.add(j.nome);
    });
  });
  if (!ruins) ok(`estrutura: ${D.length} edições, todos os campos e códigos válidos`);
}

// ── R2: elenco grande o bastante para escalar ───────────────────────────────
function checarElenco(D, esporte) {
  if (!CAT || !CAT[esporte]) return;
  const titulares = CAT[esporte].titulares;
  const mapa = CAT[esporte].posicoes || {};
  const grupos = [...new Set(Object.values(mapa))];
  let ruins = 0;

  D.forEach((e) => {
    const onde = `${e.clube} ${e.edicao}`;
    if (!Array.isArray(e.jogadores)) return;
    if (e.jogadores.length < titulares) {
      erro(`${onde}: ${e.jogadores.length} jogadores, mas ${esporte} precisa de ${titulares} titulares`); ruins++;
    }
    // Um elenco sem goleiro (ou sem levantador, ou sem pivô) trava a escalação: o slot
    // existe no campo e não há ninguém elegível para ele.
    grupos.forEach((g) => {
      const tem = e.jogadores.some((j) => (j.posicoes || []).some((p) => mapa[p] === g));
      if (!tem) { erro(`${onde}: nenhum jogador do grupo '${g}' — a escalação trava`); ruins++; }
    });
  });
  if (!ruins) ok(`elencos: todos com ≥${titulares} jogadores e ao menos um de cada grupo (${grupos.join(', ')})`);
}

// ── R3: UM CLUBE, UM NOME ───────────────────────────────────────────────────
// A regra que mais dói quando quebra, e a que nenhum detector decide sozinho:
//   'Real Madrid' e 'Atlético de Madrid' compartilham token e são clubes DIFERENTES.
//   'Internazionale' e 'Inter de Milão' não compartilham nenhum e são o MESMO.
// Por isso aqui é AVISO, não erro: a máquina propõe, o humano decide.
function checarNomes(D) {
  const cont = {};
  D.forEach((e) => { cont[e.clube] = (cont[e.clube] || 0) + 1; });
  const nomes = Object.keys(cont);
  const STOP = new Set(['de', 'do', 'da', 'fc', 'cf', 'sc', 'ac', 'as', 'ss', 'afc', 'cd', 'ca', 'club', 'du']);
  const toks = (n) => norm(n).split(/[^a-z0-9]+/).filter((t) => t.length >= 4 && !STOP.has(t));

  let cand = 0;
  for (let i = 0; i < nomes.length; i++) {
    for (let j = i + 1; j < nomes.length; j++) {
      const a = nomes[i], b = nomes[j];
      const na = norm(a).replace(/[^a-z0-9]/g, ''), nb = norm(b).replace(/[^a-z0-9]/g, '');
      let motivo = null;
      if (na === nb) motivo = 'IDÊNTICOS após normalizar';
      else if (na.includes(nb) || nb.includes(na)) motivo = 'um contém o outro';
      else { const c = toks(a).filter((t) => toks(b).includes(t)); if (c.length) motivo = 'token comum: ' + c.join(','); }
      if (motivo) {
        aviso(`mesmo clube? "${a}" (${cont[a]}) vs "${b}" (${cont[b]}) — ${motivo}`);
        cand++;
      }
    }
  }
  if (!cand) ok(`nomes: ${nomes.length} clubes, nenhum par suspeito`);
  else console.log(`         ↑ ${cand} par(es) para o OLHO HUMANO. Mesmo clube → normalize.\n` +
                   `           Renome histórico (Bragantino→RB Bragantino) → mantenha separado.`);
}

// ── R4: as duas cópias do arquivo têm de bater ──────────────────────────────
// `js/dados/X.js` é copiado para o container, mas `api/dados/X.js` também existe e está
// versionado. Em jul/2026 elas divergiram assim que uma foi tocada.
function checarCopia(arquivo, varName) {
  const gemeo = arquivo.replace('js/dados/', 'api/dados/');
  if (gemeo === arquivo || !fs.existsSync(path.join(RAIZ, gemeo))) return;
  try {
    const a = carregar(arquivo, varName), b = carregar(gemeo, varName);
    const ca = [...new Set(a.map((x) => x.clube))].sort();
    const cb = [...new Set(b.map((x) => x.clube))].sort();
    const dif = ca.filter((x) => !cb.includes(x)).concat(cb.filter((x) => !ca.includes(x)));
    if (a.length !== b.length || dif.length) {
      erro(`${arquivo} e ${gemeo} DIVERGEM (${a.length} vs ${b.length} edições` +
           (dif.length ? '; clubes só num deles: ' + dif.join(', ') : '') + ')');
    } else ok(`cópia ${gemeo} está idêntica`);
  } catch (e) { aviso(`não consegui comparar com ${gemeo}: ${e.message}`); }
}

// ── main ────────────────────────────────────────────────────────────────────
const BASES = [
  ['js/dados/libertadores.js', 'DADOS_LIBERTADORES', 'futebol'],
  ['js/dados/champions.js',    'DADOS_CHAMPIONS',    'futebol'],
  ['js/dados/brasileirao.js',  'DADOS_BRASILEIRAO',  'futebol'],
  ['js/dados/copa.js',         'DADOS_COPA',         'futebol'],
];

function validar(arquivo, varName, esporte) {
  console.log('\n\u2550\u2550\u2550 ' + arquivo + ' \u2550\u2550\u2550');
  let D;
  try { D = carregar(arquivo, varName); }
  catch (e) { erro(`não carregou: ${e.message}`); return; }
  if (!Array.isArray(D)) { erro(`${varName} não é uma lista`); return; }

  const posicoes = (CAT && CAT[esporte]) ? Object.keys(CAT[esporte].posicoes || {}) : null;
  if (!posicoes) aviso(`esporte '${esporte}' não está no catálogo — pulando checagem de posições`);

  checarEstrutura(D, posicoes);
  checarElenco(D, esporte);
  checarNomes(D);
  checarCopia(arquivo, varName);
}

const args = process.argv.slice(2);
if (!args.length || args[0] === '--todos') BASES.forEach((b) => validar(...b));
else validar(args[0], args[1], args[2] || 'futebol');

console.log('\n' + '\u2500'.repeat(60));
console.log(erros ? `\u001b[31m\u274c ${erros} erro(s)\u001b[0m` + (avisos ? ` e ${avisos} aviso(s)` : '')
                  : `\u001b[32m\u2705 sem erros\u001b[0m` + (avisos ? ` — ${avisos} aviso(s) para conferir no olho` : ''));
process.exit(erros ? 1 : 0);
