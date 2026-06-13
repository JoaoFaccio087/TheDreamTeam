// loader.js — carrega os dados estáticos dos arquivos JS via vm module
// Substitui a tabela players do banco: dados ficam em arquivos, não no PostgreSQL.

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

let _entradas  = null;   // [{ competicao, clube, edicao, jogadores[] }]
let _jogadores = null;   // jogadores individuais com id numérico único

function carregarEntradas() {
  if (_entradas) return _entradas;

  const arquivos = ['libertadores.js', 'champions.js', 'brasileirao.js'];
  const dadosDir = __dirname;

  _entradas = [];
  for (const arq of arquivos) {
    const caminho = path.join(dadosDir, arq);
    if (!fs.existsSync(caminho)) {
      console.warn(`[loader] Arquivo não encontrado: ${caminho}`);
      continue;
    }
    let src = fs.readFileSync(caminho, 'utf8');
    // Converte const/let para var para funcionar no contexto do vm
    src = src.replace(/\bconst\b/g, 'var').replace(/\blet\b/g, 'var');
    const ctx = {};
    vm.runInNewContext(src, ctx);
    for (const k of Object.keys(ctx)) {
      if (Array.isArray(ctx[k]) && ctx[k].length) {
        _entradas.push(...ctx[k]);
        break;
      }
    }
  }

  console.log(`[loader] ${_entradas.length} elencos carregados dos arquivos estáticos`);
  return _entradas;
}

function carregarJogadores() {
  if (_jogadores) return _jogadores;

  const entradas = carregarEntradas();
  let idx = 0;

  _jogadores = entradas.flatMap(entrada =>
    (entrada.jogadores || []).map(j => ({
      id:         ++idx,
      nome:       j.nome,
      posicoes:   j.posicoes || [],
      forca:      j.forca   || 70,
      clube:      entrada.clube,
      edicao:     entrada.edicao,
      competicao: entrada.competicao,
    }))
  );

  console.log(`[loader] ${_jogadores.length} jogadores individuais indexados`);
  return _jogadores;
}

// Pool de jogadores de uma competição (para o draft)
function getPoolPorCompeticao(competicao) {
  const todos = carregarJogadores();
  const comp  = (competicao || '').toLowerCase();
  return todos.filter(j => j.competicao.toLowerCase() === comp);
}

// Lista de pares únicos clube+edição de uma competição (para bots)
function getClubesPorCompeticao(competicao) {
  const entradas = carregarEntradas();
  const comp = (competicao || '').toLowerCase();
  return entradas
    .filter(e => e.competicao.toLowerCase() === comp)
    .map(e => ({ clube: e.clube, edicao: e.edicao, competicao: e.competicao }));
}

// Jogadores de um clube/edição específico (elenco do bot)
function getElencoDoClube(competicao, clube, edicao) {
  const todos = carregarJogadores();
  const comp  = (competicao || '').toLowerCase();
  return todos.filter(j =>
    j.competicao.toLowerCase() === comp &&
    j.clube === clube &&
    j.edicao === Number(edicao)
  );
}

module.exports = { getPoolPorCompeticao, getClubesPorCompeticao, getElencoDoClube };
