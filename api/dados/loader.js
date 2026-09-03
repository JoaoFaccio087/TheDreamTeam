// loader.js — carrega os dados estáticos dos arquivos JS via vm module
// Substitui a tabela players do banco: dados ficam em arquivos, não no PostgreSQL.

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

let _entradas  = null;   // [{ competicao, clube, edicao, jogadores[] }]
let _jogadores = null;   // jogadores individuais com id numérico único

// Normaliza a entrada de elenco para uma forma única, porque os arquivos divergem:
// o FUTEBOL usa `edicao` (número, ex. 2011) e a NBA usa `temporada` (string, ex.
// "1995-96"). Guardamos o valor original em `edicao` SEM converter para número —
// `Number("1995-96")` é NaN, e era isso que quebraria o elenco dos bots de basquete.
function normalizarEntrada(e, esporte) {
  return {
    competicao: e.competicao,
    clube:      e.clube,
    edicao:     (e.edicao != null) ? e.edicao : e.temporada,
    esporte:    esporte,
    jogadores:  e.jogadores || [],
  };
}

function carregarEntradas() {
  if (_entradas) return _entradas;

  // Arquivos por ESPORTE. O online do backend usa estas competições; o frontend tem
  // mais (Premier, Serie A, La Liga), que não têm modo online por elenco.
  const FONTES = [
    { esporte: 'futebol',  dir: 'futebol',  arquivos: ['libertadores.js', 'champions.js', 'brasileirao.js', 'copa.js'] },
    { esporte: 'basquete', dir: 'basquete', arquivos: ['nba.js'] },
  ];

  _entradas = [];
  for (const fonte of FONTES) {
    const dadosDir = path.join(__dirname, fonte.dir);
    for (const arq of fonte.arquivos) {
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
          _entradas.push(...ctx[k].map(e => normalizarEntrada(e, fonte.esporte)));
          break;
        }
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
      esporte:    entrada.esporte,
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
    .map(e => ({ clube: e.clube, edicao: e.edicao, competicao: e.competicao, esporte: e.esporte }));
}

// Jogadores de um clube/edição específico (elenco do bot)
function getElencoDoClube(competicao, clube, edicao) {
  const todos = carregarJogadores();
  const comp  = (competicao || '').toLowerCase();
  // Comparação por STRING: a edição do futebol é número (2011) e a da NBA é
  // string ("1995-96"). `Number(edicao)` daria NaN no basquete e nenhum elenco
  // seria encontrado — o bot entraria em quadra vazio.
  const ed = String(edicao);
  return todos.filter(j =>
    j.competicao.toLowerCase() === comp &&
    j.clube === clube &&
    String(j.edicao) === ed
  );
}

module.exports = { getPoolPorCompeticao, getClubesPorCompeticao, getElencoDoClube };
