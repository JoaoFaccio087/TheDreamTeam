// salaState.js — estado em memória de cada sala ativa (Map codigo → SalaState)

const salas = new Map();

// Formato da competição: 'liga' (pontos corridos), 'mata' (grupos + mata-mata)
// ou 'champions' (fase de liga fiel de 36 + playoff + chave).
const FORMATO_POR_COMP = {
  'Brasileirão':   'liga',
  'Copa do Mundo': 'mata',
  'Libertadores':  'mata',
  'Champions':     'champions',
};

function criarSala(codigo, hostUserId, competicao) {
  const comp    = competicao || 'Brasileirão';
  const formato = FORMATO_POR_COMP[comp] || 'liga';

  const state = {
    codigo,
    hostUserId,
    competicao:            comp,
    formato,                          // 'liga' | 'mata' | 'champions'
    jogadores:             [],   // { userId, username, nomeDoTime, formacao, socketId, conectado, picks[], pronto }
    poolDisponivel:        [],   // players individuais: { id, nome, posicoes, forca, clube, edicao, competicao }
    ordemDraft:            [],   // snake order completo (userId[] × 11 rounds) — formato 'liga'
    indiceTurno:           0,
    timerDraft:            null,
    totalPicksNecessarios: 11,
    status:                'lobby',   // lobby | sorteio | gdraft | draft | ready | playing | fim
    rodadaAtual:           0,
    totalRodadas:          38,       // Brasileirão: todos contra todos, ida e volta (20 times)
    calendario:            [],       // [rodada][ [casaUid, foraUid], ... ] — gerado ao iniciar
    resultados:            {},        // userId → { vitorias, empates, derrotas, gf, ga, campeao }
    statsGols:             {},        // nome → count (acumula entre rodadas)
    statsAssists:          {},        // nome → count
    rodadaEmAndamento:     false,
    votosPular:            [],       // userIds (humanos) que aceitaram pular tudo

    // ── Formato 'mata' (Copa/Libertadores): grupos + draft por grupo + chave ──
    grupos:                {},        // { 'A': [userId,...], 'B': [...], ... }
    ordemSorteio:          [],        // sequência do sorteio: [{ uid, grupo, nomeDoTime, ehBot }]
    grupoDraftIdx:         0,         // índice do grupo da vez no draft por grupo
    pickRodada:            0,         // rodada de pick atual (0..10)
    pickedThisTurn:        [],        // userIds que já escolheram no turno de grupo atual
    chave:                 null,      // bracket do mata-mata
    classificados:         [],        // apurados da fase de grupos (entram no mata-mata)
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
