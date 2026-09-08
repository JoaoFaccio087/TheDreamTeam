#!/usr/bin/env node
'use strict';
// run-tests.js — roda TODOS os *.test.js do projeto e resume o resultado.
//
// POR QUE EXISTE: os 15 testes eram scripts soltos, executados um a um na mão
// (`node api/socket/draft.test.js`). Na prática isso significava que não rodavam:
// o `package.json` do backend nem tinha script `test`, e 12 dos 15 arquivos ainda
// carregavam caminhos absolutos do contêiner onde foram escritos
// (`/home/claude/proj2/...`), então quebravam na primeira linha em qualquer outra
// máquina. Um teste que ninguém roda não protege contra regressão nenhuma.
//
// USO:
//   node scripts/run-tests.js          → roda tudo
//   node scripts/run-tests.js front    → só os de scripts/ (jsdom, sem backend)
//   node scripts/run-tests.js api      → só os de api/socket/
//
// CONVENÇÃO: um teste PASSA se sair com código 0. Testes que cobrem funcionalidade
// removida devem SAIR COM 0 imprimindo "PULADO" (ver scripts/filtros.test.js), para
// não mascarar falhas reais nem falhar por algo que já não existe.

const { execFileSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const filtro = (process.argv[2] || '').toLowerCase();

function achar(dir) {
  const abs = path.join(RAIZ, dir);
  if (!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs)
    .filter(f => f.endsWith('.test.js'))
    .sort()
    .map(f => path.join(dir, f));
}

let arquivos = [];
if (filtro !== 'api')   arquivos = arquivos.concat(achar('scripts'));
if (filtro !== 'front') arquivos = arquivos.concat(achar('api/socket'));

if (!arquivos.length) {
  console.log('Nenhum teste encontrado.');
  process.exit(0);
}

const passou = [], falhou = [], pulou = [];
console.log(`\nRodando ${arquivos.length} teste(s)...\n`);

for (const rel of arquivos) {
  const nome = path.basename(rel);
  process.stdout.write('  ' + nome.padEnd(30));
  try {
    const saida = execFileSync('node', [path.join(RAIZ, rel)], {
      cwd: RAIZ, encoding: 'utf8', timeout: 120000, stdio: ['ignore', 'pipe', 'pipe']
    });
    if (/PULADO/.test(saida)) { console.log('PULADO'); pulou.push(nome); }
    else                      { console.log('ok');     passou.push(nome); }
  } catch (err) {
    console.log('FALHOU');
    falhou.push({ nome, saida: ((err.stdout || '') + (err.stderr || '')).trim() });
  }
}

if (falhou.length) {
  console.log('\n--- detalhe das falhas ---');
  for (const f of falhou) {
    console.log('\n# ' + f.nome);
    console.log(f.saida.split('\n').slice(-12).map(l => '  ' + l).join('\n'));
  }
}

console.log(`\n${passou.length} ok · ${pulou.length} pulado(s) · ${falhou.length} falha(s)\n`);
process.exit(falhou.length ? 1 : 0);
