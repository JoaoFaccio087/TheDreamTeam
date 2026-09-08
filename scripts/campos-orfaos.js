#!/usr/bin/env node
'use strict';
// campos-orfaos.js — procura a classe de bug que mais nos custou tempo neste projeto:
// PROPRIEDADE LIDA E NUNCA ESCRITA.
//
// O caso que motivou isto: `po.finalistaOutraConf` era lido em UM lugar do render e
// gravado em NENHUM. Resultado: as Finais da NBA mostravam "A definir" para sempre — sem
// erro no console, sem exceção, sem nada. Só apareceu quando o João jogou e reclamou.
//
// COMO FUNCIONA: coleta `obj.prop` (leitura) e `obj.prop =` / `prop:` (escrita) em todo o
// JS de lógica. Reporta as propriedades que só aparecem em leitura.
//
// ⚠️ HEURÍSTICA, não prova. Dá falso positivo em: propriedades de APIs do browser/Node,
// campos vindos de JSON do servidor, e escrita dinâmica (`obj[chave] = ...`). Use como
// LISTA DE INVESTIGAÇÃO — confira cada caso antes de mexer.
//
// USO: node scripts/campos-orfaos.js

const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..');

// Propriedades de plataforma que nunca são escritas por nós.
const IGNORAR = new Set(`
length push pop shift unshift slice splice map filter forEach reduce some every sort join
indexOf lastIndexOf includes concat find findIndex reverse fill keys values entries
textContent innerHTML innerText outerHTML className classList dataset style parentNode
firstChild lastChild firstElementChild lastElementChild nextElementSibling children
previousElementSibling appendChild removeChild insertBefore querySelector querySelectorAll
getElementById createElement addEventListener removeEventListener preventDefault target
value checked disabled hidden id name type files body documentElement scrollLeft scrollTop
scrollWidth scrollHeight clientWidth clientHeight offsetLeft offsetTop offsetWidth
offsetHeight getBoundingClientRect toFixed toString charAt toUpperCase toLowerCase trim
replace split match test exec then catch finally json text status ok headers stack message
log warn error random floor ceil round abs max min now getTime toLocaleDateString
toLocaleString hasOwnProperty prototype constructor apply call bind exports require
`.trim().split(/\s+/));

function arquivos() {
  const out = [];
  (function anda(dir) {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) {
        if (/node_modules|dados|libs|\.git/.test(p)) continue;
        anda(p);
      } else if (f.endsWith('.js') && !f.endsWith('.test.js')) out.push(p);
    }
  })(path.join(RAIZ, 'js'));
  (function anda2(dir) {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) {
        if (/node_modules|dados/.test(p)) continue;
        anda2(p);
      } else if (f.endsWith('.js') && !f.endsWith('.test.js')) out.push(p);
    }
  })(path.join(RAIZ, 'api'));
  return out;
}

const lidas = new Map();     // prop -> Set(arquivo:linha)
const escritas = new Set();

for (const p of arquivos()) {
  const rel = path.relative(RAIZ, p);
  const linhas = fs.readFileSync(p, 'utf8').split('\n');
  linhas.forEach((linha, i) => {
    const l = linha.replace(/\/\/.*$/, '');           // tira comentário de linha
    if (/^\s*\*/.test(linha)) return;                  // bloco de comentário

    // ESCRITA: obj.prop = ... | prop: valor (literal de objeto) | delete obj.prop
    let m;
    const reEsc = /\.([A-Za-z_$][\w$]*)\s*(?:=[^=]|\+\+|--|\+=|-=)/g;
    while ((m = reEsc.exec(l))) escritas.add(m[1]);
    const reLit = /(?:^|[{,]\s*)([A-Za-z_$][\w$]*)\s*:/g;
    while ((m = reLit.exec(l))) escritas.add(m[1]);

    // LEITURA: qualquer obj.prop
    const reLer = /\.([A-Za-z_$][\w$]*)/g;
    while ((m = reLer.exec(l))) {
      const prop = m[1];
      if (IGNORAR.has(prop)) continue;
      if (!lidas.has(prop)) lidas.set(prop, new Set());
      lidas.get(prop).add(rel + ':' + (i + 1));
    }
  });
}

const suspeitas = [...lidas.entries()]
  .filter(([prop]) => !escritas.has(prop))
  .map(([prop, ondes]) => ({ prop, ondes: [...ondes] }))
  .sort((a, b) => a.ondes.length - b.ondes.length);

console.log(`\nPropriedades LIDAS e nunca escritas: ${suspeitas.length}\n`);
for (const s of suspeitas) {
  console.log(`  ${s.prop}  (${s.ondes.length} leitura${s.ondes.length > 1 ? 's' : ''})`);
  s.ondes.slice(0, 4).forEach(o => console.log('      ' + o));
}
console.log('\n⚠️  Heurística: confira cada caso. Falsos positivos comuns são APIs de');
console.log('    plataforma, campos vindos do servidor e escrita dinâmica obj[chave].\n');
process.exit(0);
