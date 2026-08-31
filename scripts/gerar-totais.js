/* ═══════════════════════════════════════════════════════════════════
   gerar-totais.js — recalcula js/dados/dados-totais.js (o manifesto de
   contagens usado pelo rodapé da tela inicial).

   POR QUÊ: os dados dos esportes/competições agora carregam sob demanda
   (lazy-load), então o rodapé não pode contar "ao vivo" — contaria só o
   que já foi carregado (número subindo aos poucos). Este script conta
   TUDO uma vez e grava os totais num arquivo minúsculo que carrega no boot.

   QUANDO RODAR: sempre que adicionar/alterar/remover dados de jogadores
   (novas edições, seleções, temporadas). É a única "manutenção", e é
   automática — você não digita número nenhum à mão.

   COMO RODAR (na raiz do projeto):
     node scripts/gerar-totais.js

   Se adicionar um NOVO arquivo de dados, inclua-o na lista ARQUIVOS abaixo.
   ═══════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');

// Raiz do projeto (uma pasta acima de scripts/)
const RAIZ = path.resolve(__dirname, '..');

// Todos os arquivos de dados de jogadores (futebol + vôlei + basquete).
const ARQUIVOS = [
  'js/dados/futebol/libertadores.js',
  'js/dados/futebol/champions.js',
  'js/dados/futebol/brasileirao.js',
  'js/dados/futebol/copa.js',
  'js/dados/futebol/premier.js',
  'js/dados/futebol/serie-a.js',
  'js/dados/futebol/laliga.js',
  'js/dados/volei/mundial-m.js',
  'js/dados/volei/mundial-f.js',
  'js/dados/volei/vnl-m.js',
  'js/dados/volei/vnl-f.js',
  'js/dados/basquete/nba.js'
];

// Conta jogadores e edições distintas de um arquivo. As variáveis de dados são declaradas
// com `const DADOS_X` (não viram globais no vm), então trocamos por `globalThis.DADOS_X`
// para conseguir lê-las depois de executar o arquivo num sandbox isolado.
function contarArquivo(relPath) {
  const abs = path.join(RAIZ, relPath);
  let src;
  try { src = fs.readFileSync(abs, 'utf8'); }
  catch (e) { console.warn('  aviso: não achei ' + relPath + ' (ignorado)'); return { jogadores: 0, edicoes: [] }; }

  src = src.replace(/\b(const|var|let)\s+(DADOS_[A-Z_0-9]+)/g, 'globalThis.$2');
  const sandbox = {};
  vm.createContext(sandbox);
  sandbox.globalThis = sandbox;
  try { vm.runInContext(src, sandbox); }
  catch (e) { console.warn('  aviso: erro ao ler ' + relPath + ': ' + e.message); return { jogadores: 0, edicoes: [] }; }

  let jogadores = 0;
  const edicoes = {};
  Object.keys(sandbox).forEach(function (k) {
    if (!k.startsWith('DADOS_')) return;
    const arr = sandbox[k];
    if (!Array.isArray(arr)) return;
    arr.forEach(function (d) {
      jogadores += (d.jogadores ? d.jogadores.length : 0);
      // futebol/vôlei usam `edicao`; basquete usa `temporada` — conta os dois sem misturar.
      const ano = (d.temporada != null) ? ('t:' + d.temporada) : ('e:' + d.edicao);
      edicoes[ano] = 1;
    });
  });
  return { jogadores: jogadores, edicoes: Object.keys(edicoes) };
}

let totalJogadores = 0;
const todasEdicoes = {};
ARQUIVOS.forEach(function (f) {
  const r = contarArquivo(f);
  totalJogadores += r.jogadores;
  r.edicoes.forEach(function (e) { todasEdicoes[e] = 1; });
  console.log('  ' + f.split('/').pop() + ': ' + r.jogadores + ' jogadores');
});
const totalEdicoes = Object.keys(todasEdicoes).length;

const dataHoje = new Date().toISOString().slice(0, 10);
const conteudo =
'/* ═══════════════════════════════════════════════════════════════════\n' +
'   dados-totais.js — MANIFESTO de contagens (jogadores + edições).\n' +
'\n' +
'   GERADO AUTOMATICAMENTE por scripts/gerar-totais.js — NÃO edite à mão.\n' +
'   Existe para o rodapé mostrar os totais no BOOT sem precisar carregar os\n' +
'   ~4 MB de dados (que agora são lazy-load). Ao adicionar/alterar dados,\n' +
'   rode: node scripts/gerar-totais.js\n' +
'\n' +
'   Última geração: ' + dataHoje + '\n' +
'   ═══════════════════════════════════════════════════════════════════ */\n' +
'var DADOS_TOTAIS = { jogadores: ' + totalJogadores + ', edicoes: ' + totalEdicoes + ' };\n';

fs.writeFileSync(path.join(RAIZ, 'js/dados/dados-totais.js'), conteudo);
console.log('  ─────────────────');
console.log('  TOTAL: ' + totalJogadores + ' jogadores, ' + totalEdicoes + ' edições');
console.log('  ✅ js/dados/dados-totais.js atualizado');
