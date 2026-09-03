// simulacao-basquete.js — motor de partida de BASQUETE server-side.
//
// Espelha a interface de `simulacao.js` (futebol): `simularPartida(meuElenco,
// adversario, vantagem)` devolvendo `{ gMeus, gAdv, fila }`. O socket
// (api/socket/index.js) consome sempre esse contrato — tabela, artilharia e
// assistências são atualizadas a partir dele —, então manter a MESMA forma é o
// que permite ligar o online do basquete sem tocar no fluxo de rodadas.
//
// O núcleo NÃO foi reescrito: `nucleo-basquete.js` é cópia literal de
// js/simulacao-basquete.js, que já era UMD e sem DOM/globals do browser. Assim o
// online e o offline simulam com as MESMAS regras — se as regras divergirem, o
// mesmo elenco daria resultados diferentes nos dois modos.
//
// Diferenças em relação ao futebol, e por que elas não vazam para o socket:
//  - Não há empate no basquete: o núcleo resolve com prorrogação.
//  - "Gols" aqui são PONTOS (100+ por jogo). O socket já trata gf/ga como número
//    genérico; quem rotula é o front, pelo catálogo de esportes.
//  - Não há "minuto de gol": a `fila` é derivada das estatísticas por jogador,
//    para artilharia (pontos) e assistências continuarem funcionando.

const Nucleo = require('./nucleo-basquete');

// Força média do elenco — mesma semântica do forcaDoClube do futebol.
function forcaDoClube(jogadores) {
  const js = (jogadores || []).filter(Boolean);
  if (!js.length) return 70;
  return js.reduce((s, j) => s + (Number(j.forca) || 70), 0) / js.length;
}

// O núcleo lê a posição em `j.posicoes[0]` (ver posDe em nucleo-basquete.js) — NÃO
// em `j.pos`. Normalizar para o campo errado fazia `posDe` cair no default 'SF'
// para TODO jogador: os pesos por posição (armador assiste, pivô reboteia) viravam
// letra morta e a partida ficava homogênea. Preenchemos os DOIS campos.
function normalizarElenco(nome, jogadores) {
  return {
    nome: nome || 'Time',
    jogadores: (jogadores || []).filter(Boolean).map(j => {
      const pos = (Array.isArray(j.posicoes) ? j.posicoes[0] : j.posicoes) || j.pos || 'SF';
      return { nome: j.nome, pos: pos, posicoes: [pos], forca: Number(j.forca) || 70 };
    })
  };
}

// Transforma as estatísticas por jogador numa `fila` de eventos no formato que o
// socket já sabe ler. Cada evento representa UMA cesta; o socket conta 1 por
// evento, então o total bate com os pontos da partida.
//
// `minuto` existe só para ordenar a fila (o socket ordena por ele). Distribuímos
// as cestas ao longo dos 48 minutos para o placar não "chegar" todo no fim.
function filaDeEventos(statsMeu, statsAdv, adversario, forcaPorNome) {
  const fila = [];
  const forcaDe = nome => (forcaPorNome && forcaPorNome[nome]) || 70;

  function empurrar(stats, lado) {
    // Peso de assistência: armadores assistem mais. Espelha o pesoAssist do futebol.
    const assistentes = stats.filter(s => (s.assistencias || 0) > 0);

    stats.forEach(s => {
      const pontos = s.pontos || 0;
      for (let i = 0; i < pontos; i++) {
        const minuto = 1 + Math.floor(Math.random() * 48);
        // `statsTime` não devolve força — sem este lookup TODO autor ia com 70,
        // e o front do online mostra a força do artilheiro no card.
        const autor = { nome: s.nome, posicoes: [s.pos], forca: forcaDe(s.nome) };
        // Nem toda cesta tem assistência; e o assistente nunca é o próprio autor.
        const cands = assistentes.filter(a => a.nome !== s.nome);
        const assist = (cands.length && Math.random() < 0.55)
          ? { nome: cands[Math.floor(Math.random() * cands.length)].nome }
          : null;

        if (lado === 'meu') {
          fila.push({ minuto, lado: 'meu', autor, assist });
        } else {
          fila.push({
            minuto, lado: 'adv',
            autorAdv: autor,
            assistAdv: assist,
            adversario: {
              clube: adversario.clube, edicao: adversario.edicao,
              competicao: adversario.competicao
            }
          });
        }
      }
    });
  }

  empurrar(statsMeu, 'meu');
  empurrar(statsAdv, 'adv');
  fila.sort((a, b) => a.minuto - b.minuto);
  return fila;
}

// `vantagem` = mando de quadra. O núcleo não recebe mando, então aplicamos um
// bônus leve de força ao mandante — equivalente ao MANDO do futebol, na escala
// do basquete (pequeno: o mando pesa menos que no futebol).
function simularPartida(meuElenco, adversario, vantagem = true) {
  const BONUS_MANDO = 1.5;   // pontos de força, não de placar

  const meu = normalizarElenco('Casa', meuElenco);
  const adv = normalizarElenco('Fora', adversario.jogadores || []);

  if (vantagem) meu.jogadores.forEach(j => { j.forca += BONUS_MANDO; });

  const forcaPorNome = {};
  meu.jogadores.concat(adv.jogadores).forEach(j => { forcaPorNome[j.nome] = j.forca; });

  const r = Nucleo.jogarPartida(meu, adv);

  return {
    gMeus: r.pontosA,
    gAdv:  r.pontosB,
    fila:  filaDeEventos(r.statsA || [], r.statsB || [], adversario || {}, forcaPorNome),
    // Extras do basquete — o socket ignora, mas o front pode usar no card.
    quartos:     r.quartos,
    prorrogacao: r.prorrogacao,
    placar:      r.placar
  };
}

module.exports = { simularPartida, forcaDoClube };
