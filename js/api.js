// api.js — CAMADA ÚNICA DE ACESSO A DADOS.
//
// Hoje todas as funções devolvem os dados LOCAIS (a constante DADOS e stubs).
// Quando o backend existir, basta trocar o corpo destas funções para chamar o
// servidor (fetch) — o resto do jogo continua chamando API.* e não muda nada.
//
// Carregue DEPOIS de dados.js e regras.js, e ANTES dos módulos que usam dados.

const API = {

  // ===== Clubes / elencos (dados estáticos do jogo) =====

  // Todos os clubes de todas as competições (ex.: rodapé da home).
  getTodosClubes: function () {
    return DADOS;
  },

  // Clubes de uma competição pelo valor de "competicao" nos dados (ex.: 'Brasileirão').
  getClubesPorCompeticao: function (comp) {
    return DADOS.filter(function (d) { return d.competicao === comp; });
  },

  // Clubes pelo id do modo (chave em COMPETICOES, ex.: 'brasileirao').
  getClubesDoModo: function (modoId) {
    var cfg = COMPETICOES[modoId];
    return cfg ? API.getClubesPorCompeticao(cfg.dados) : [];
  },


  // ===== Dados do usuário (FUTURO: virão do backend) =====
  //
  // Hoje são stubs locais, mas já devolvem Promise — o mesmo formato que o
  // backend usará. Assim, quando ligarmos o servidor, quem chama não muda.

  // Salva o resultado de uma campanha. FUTURO: POST /matches
  salvarPartida: function (resultado) {
    if (window.console && console.debug) console.debug('[api] salvarPartida (stub local):', resultado);
    return Promise.resolve({ ok: true, local: true });
  },

  // Histórico de partidas do usuário. FUTURO: GET /matches
  getHistorico: function () {
    return Promise.resolve([]);
  },

  // Ranking geral. FUTURO: GET /ranking
  getRanking: function () {
    return Promise.resolve([]);
  }
};
