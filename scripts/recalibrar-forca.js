#!/usr/bin/env node
/* recalibrar-forca.js — aplica a curva C de re-calibração à força de todos os
 * jogadores nos arquivos de dados, no lugar (in-place). Preserva os dois
 * formatos: `forca: NN` e `"forca": NN`. Só o número muda.
 *
 * Curva C (decidida com o João): craques chegam a 99, média sobe ~80→81,3.
 *   t = (forca - 65) / (97 - 65)
 *   nova = round( 62 + t^0.78 * (99 - 62) )
 *
 * Uso: node scripts/recalibrar-forca.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ARQUIVOS = ['libertadores', 'champions', 'brasileirao', 'copa']
  .map(n => path.join(__dirname, '..', 'js', 'dados', n + '.js'));

// Limites originais da escala (medidos na base: min 65, max 97).
const MIN_ORIG = 65, MAX_ORIG = 97;

function curvaC(f) {
  const t = Math.max(0, Math.min(1, (f - MIN_ORIG) / (MAX_ORIG - MIN_ORIG)));
  return Math.round(62 + Math.pow(t, 0.78) * (99 - 62));
}

let totalMudados = 0;
for (const arq of ARQUIVOS) {
  if (!fs.existsSync(arq)) { console.log('(pulado, não existe)', arq); continue; }
  const txt = fs.readFileSync(arq, 'utf8');
  let n = 0;
  // Captura `forca` com ou sem aspas, preservando exatamente o prefixo.
  const novo = txt.replace(/("?forca"?\s*:\s*)(\d+)/g, (m, prefixo, valor) => {
    n++;
    return prefixo + curvaC(parseInt(valor, 10));
  });
  fs.writeFileSync(arq, novo, 'utf8');
  totalMudados += n;
  console.log(`✓ ${path.basename(arq)}: ${n} forças re-calibradas`);
}
console.log(`Total: ${totalMudados} jogadores re-calibrados pela curva C.`);
