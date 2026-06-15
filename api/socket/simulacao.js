// simulacao.js — motor de partida server-side (sem DOM, sem globals do browser)

function sortearPoisson(lambda) {
  const L = Math.exp(-lambda);
  let k = 0, p = 1;
  do { k++; p *= Math.random(); } while (p > L);
  return k - 1;
}

function sortearPorPeso(lista, fnPeso, excluido) {
  const cands = lista.filter(j => j && j !== excluido);
  if (!cands.length) return null;
  const pesos = cands.map(fnPeso);
  const total = pesos.reduce((s, p) => s + p, 0);
  if (total === 0) return cands[Math.floor(Math.random() * cands.length)];
  let r = Math.random() * total, acum = 0;
  for (let i = 0; i < cands.length; i++) {
    acum += pesos[i];
    if (r <= acum) return cands[i];
  }
  return cands[cands.length - 1];
}

function pesoGol(j) {
  const pos = j.posicoes || [];
  let base;
  if      (['ATA','PE','PD'].some(p => pos.includes(p)))            base = 10;
  else if (['MEI','MC','ME','MD'].some(p => pos.includes(p)))       base = 5;
  else if (pos.includes('VOL'))                                      base = 2;
  else if (['LD','LE','ZAG'].some(p => pos.includes(p)))            base = 1;
  else                                                               base = 0.1;
  return base * ((j.forca || 70) / 80);
}

function pesoAssist(j) {
  const pos = j.posicoes || [];
  if (['MEI','ME','MD'].some(p => pos.includes(p)))          return 9;
  if (['ATA','PE','PD','MC'].some(p => pos.includes(p)))     return 6;
  if (pos.includes('VOL'))                                    return 2;
  if (['LD','LE','ZAG'].some(p => pos.includes(p)))          return 1;
  return 0.1;
}

function forcaDoClube(jogadores) {
  if (!jogadores || !jogadores.length) return 70;
  return jogadores.reduce((s, j) => s + (j.forca || 70), 0) / jogadores.length;
}

function distribuirMinutos(total) {
  const mins = new Set();
  while (mins.size < total) mins.add(Math.floor(Math.random() * 90) + 1);
  return [...mins].sort((a, b) => a - b);
}

/**
 * Simula uma partida sem DOM.
 * @returns {{ gMeus, gAdv, fila }}
 */
function simularPartida(meuElenco, adversario, vantagem = true) {
  const BASE = 1.30, POR_PONTO = 0.05, MANDO = 0.25;
  const mForca = forcaDoClube(meuElenco);
  const aForca = forcaDoClube(adversario.jogadores || []);
  const swing  = (mForca - aForca) * POR_PONTO;

  const gMeus = sortearPoisson(Math.max(0.20, BASE + (vantagem ? MANDO : 0) + swing));
  const gAdv  = sortearPoisson(Math.max(0.20, BASE - swing));

  const fila = [];

  distribuirMinutos(gMeus).forEach(minuto => {
    const autor  = sortearPorPeso(meuElenco, pesoGol, null);
    const assist = Math.random() < 0.70 ? sortearPorPeso(meuElenco, pesoAssist, autor) : null;
    fila.push({
      minuto,
      lado:   'meu',
      autor:  autor  ? { nome: autor.nome,  posicoes: autor.posicoes  || [], forca: autor.forca  || 70 } : { nome: '?', posicoes: [] },
      assist: assist ? { nome: assist.nome } : null,
    });
  });

  const jogAdv = adversario.jogadores || [];
  distribuirMinutos(gAdv).forEach(minuto => {
    const autorAdv  = sortearPorPeso(jogAdv, pesoGol, null);
    const assistAdv = Math.random() < 0.70 ? sortearPorPeso(jogAdv, pesoAssist, autorAdv) : null;
    fila.push({
      minuto,
      lado:      'adv',
      autorAdv:  autorAdv  ? { nome: autorAdv.nome,  posicoes: autorAdv.posicoes || [], forca: autorAdv.forca || 70 } : null,
      assistAdv: assistAdv ? { nome: assistAdv.nome } : null,
      adversario: { clube: adversario.clube, edicao: adversario.edicao, competicao: adversario.competicao },
    });
  });

  fila.sort((a, b) => a.minuto - b.minuto);
  return { gMeus, gAdv, fila };
}

module.exports = { simularPartida, forcaDoClube };
