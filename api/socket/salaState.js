// salaState.js — estado em memória de cada sala ativa (Map codigo → SalaState)

const salas = new Map();

function criarSala(codigo, hostUserId, competicao) {
  const state = {
    codigo,
    hostUserId,
    competicao:            competicao || 'libertadores',
    jogadores:             [],   // { userId, username, nomeDoTime, formacao, socketId, conectado, picks[], pronto }
    poolDisponivel:        [],   // players individuais: { id, nome, posicoes, forca, clube, edicao, competicao }
    ordemDraft:            [],   // snake order completo (userId[] × 11 rounds)
    indiceTurno:           0,
    timerDraft:            null,
    totalPicksNecessarios: 11,
    status:                'lobby',   // lobby | draft | ready | playing | fim
    rodadaAtual:           0,
    totalRodadas:          5,
    resultados:            {},        // userId → { vitorias, empates, derrotas, gf, ga, campeao }
    statsGols:             {},        // nome → count (acumula entre rodadas)
    statsAssists:          {},        // nome → count
    rodadaEmAndamento:     false,
  };
  salas.set(codigo, state);
  return state;
}

function getSala(codigo) { return salas.get(codigo) || null; }

function deleteSala(codigo) {
  const sala = salas.get(codigo);
  if (sala && sala.timerDraft) clearTimeout(sala.timerDraft);
  salas.delete(codigo);
}

module.exports = { salas, criarSala, getSala, deleteSala };
