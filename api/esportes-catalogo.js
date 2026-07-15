// ============================================================
//  esportes-catalogo.js — PONTE entre o servidor e o catálogo `js/esportes.js`
//
//  O catálogo é do FRONTEND e continua sendo a FONTE DE VERDADE ÚNICA.
//  Aqui o servidor só o LÊ — nada é duplicado (duplicar o dado é como nascem
//  as divergências silenciosas).
//
//  ⚠️ Onde o arquivo mora:
//    · dev local  → <repo>/js/esportes.js
//    · container  → /app/esportes.js  (o `api/Dockerfile` o copia para lá)
//  O `COPY api/ .` do Dockerfile transforma `api/X` em `/app/X`; por isso esta
//  ponte NÃO pode se chamar `esportes.js` — colidiria com o catálogo copiado.
//
//  GUARDA: se o catálogo não for encontrado (ou vier incoerente), tudo cai no
//  padrão do FUTEBOL — ou seja, exatamente o comportamento de hoje.
// ============================================================

'use strict';

const fs   = require('fs');
const path = require('path');

// O que valia antes desta ponte existir. É o piso: nada pode ficar pior que isto.
const PADRAO_FUTEBOL = { esporte: 'futebol', totalPicks: 11, picksPorRodada: [2, 2, 2, 2, 2, 1] };

function padrao() {
  return { esporte: PADRAO_FUTEBOL.esporte,
           totalPicks: PADRAO_FUTEBOL.totalPicks,
           picksPorRodada: PADRAO_FUTEBOL.picksPorRodada.slice() };
}

const CANDIDATOS = [
  path.join(__dirname, 'esportes.js'),               // container (Dockerfile copia para /app/)
  path.join(__dirname, '..', 'js', 'esportes.js'),   // dev local (repositório)
];

let _cat = null, _tentou = false;

function catalogo() {
  if (_tentou) return _cat;
  _tentou = true;
  for (const caminho of CANDIDATOS) {
    try {
      if (!fs.existsSync(caminho)) continue;
      const mod = require(caminho);
      if (mod && mod.ESPORTES) {
        _cat = mod.ESPORTES;
        console.log(`[esportes] catálogo carregado de ${caminho}`);
        return _cat;
      }
    } catch (err) {
      console.warn(`[esportes] falha ao ler ${caminho}: ${err.message}`);
    }
  }
  console.warn('[esportes] catálogo não encontrado — usando o padrão do futebol (11 picks).');
  return null;
}

// 'Copa do Mundo' → 'copadomundo'. Casa o nome guardado no banco com o id/nome do catálogo.
function norm(s) {
  return String(s || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Índice competição → esporte, montado a partir do PRÓPRIO catálogo (id e nome).
// Mesma ideia do `grupoDe`/`GRUPOS_CONHECIDOS`: acrescentou a competição lá, aqui se ajusta sozinho.
let _indice = null;

function indice() {
  if (_indice) return _indice;
  _indice = new Map();
  const cat = catalogo();
  if (!cat) return _indice;

  for (const idEsporte of Object.keys(cat)) {
    const comps = cat[idEsporte].competicoes || {};
    for (const idComp of Object.keys(comps)) {
      const registrar = (chave) => {
        const k = norm(chave);
        if (!k) return;
        if (_indice.has(k) && _indice.get(k) !== idEsporte) {
          console.warn(`[esportes] competição ambígua "${chave}": ${_indice.get(k)} vs ${idEsporte} — ignorada.`);
          return;
        }
        _indice.set(k, idEsporte);
      };
      registrar(idComp);                // 'brasileirao', 'copa', 'nba'…
      registrar(comps[idComp].nome);    // 'Brasileirão', 'Copa do Mundo', 'NBA'…
    }
  }
  return _indice;
}

// Qual esporte é esta competição? Aceita o id do catálogo ou o nome do banco.
function esporteDaCompeticao(competicao) {
  return indice().get(norm(competicao)) || null;
}

// Estrutura de turnos do draft desta competição.
// futebol  → { picksPorRodada: [2,2,2,2,2,1], totalPicks: 11 }
// basquete → { picksPorRodada: [1,1,1,1,1],   totalPicks: 5  }
function estruturaDraft(competicao) {
  const cat       = catalogo();
  const idEsporte = esporteDaCompeticao(competicao);
  if (!cat || !idEsporte) return padrao();

  const esp = cat[idEsporte] || {};
  const d   = esp.draft || {};

  const turnos = Number(d.turnos) || 0;
  const porTurno = Number(d.picksPorTurno) || 0;
  const ultimo   = Number(d.picksUltimoTurno) || 0;

  const arr = [];
  for (let i = 0; i < turnos; i++) arr.push(porTurno);
  if (ultimo > 0) arr.push(ultimo);   // 0 = não existe turno final diferente

  const total     = arr.reduce((s, n) => s + n, 0);
  const titulares = Number(esp.titulares) || 0;

  // COERÊNCIA: a soma dos picks TEM de bater com os titulares do esporte.
  // Se não bater, o catálogo está errado — melhor cair no padrão do que montar um
  // draft que nunca fecha (o jogador ficaria preso esperando um pick que não vem).
  if (!arr.length || total !== titulares) {
    console.warn(`[esportes] draft de "${idEsporte}" incoerente ` +
                 `(soma ${total} ≠ ${titulares} titulares) — usando o padrão do futebol.`);
    return padrao();
  }

  return { esporte: idEsporte, totalPicks: total, picksPorRodada: arr };
}

module.exports = { esporteDaCompeticao, estruturaDraft, PADRAO_FUTEBOL };
