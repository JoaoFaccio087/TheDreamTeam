/* ═══════════════════════════════════════════════════════════════════
   MODO LEILÃO (futebol) — CAMADA 1: UI apenas.
   Esta camada monta e exibe a TELA do leilão com dados de exemplo, para
   validar o visual e a navegação. A lógica real (disputa, bots, timer,
   partidas) virá nas próximas camadas.

   Decisões já tomadas (João):
   - Bots "espertos": valorizam jogadores mais fortes (lógica futura).
   - Sem empate de lance: só é possível cobrir com valor MAIOR.
   - Orçamento padrão 50 (30/50/100). Formações Normal/Ofensivo (5 jogadores).
   ═══════════════════════════════════════════════════════════════════ */
var Leilao = (function () {
  'use strict';

  // Config escolhida na tela de montar time (lida das pílulas).
  var _orcamento = 50;
  var _formacao = 'normal';   // 'normal' | 'ofensivo'
  var _lance = 0;             // valor do lance em construção (componente +/-)

  // As 5 vagas de cada formação (rótulos das linhas; a mecânica de posições
  // aceitas por linha entra na camada de lógica).
  var FORMACOES_LEILAO = {
    normal:   { desc: 'GOL + ZAG + 2 MEIO + 1 ATA', vagas: ['GOL', 'ZAG', 'MEIO', 'MEIO', 'ATA'] },
    ofensivo: { desc: 'GOL + ZAG + 1 MEIO + 2 ATA', vagas: ['GOL', 'ZAG', 'MEIO', 'ATA', 'ATA'] }
  };

  function $(id) { return document.getElementById(id); }

  // ── Dados de EXEMPLO só para a UI (serão substituídos pelo pool real) ──
  function jogadorExemplo() {
    return { nome: 'Jogador Exemplo', clube: 'Clube', ano: '2024', posicoes: ['MC', 'MEI'], forca: 90 };
  }
  function participantesExemplo() {
    return [
      { nome: 'Você', voce: true, moedas: _orcamento, escalados: 0 },
      { nome: 'Bot Alfa', voce: false, moedas: _orcamento, escalados: 0 },
      { nome: 'Bot Beta', voce: false, moedas: _orcamento, escalados: 0 },
      { nome: 'Bot Gama', voce: false, moedas: _orcamento, escalados: 0 }
    ];
  }

  // ── Render do card do jogador em disputa ──
  function renderJogador(j) {
    var el = $('leilao-jogador');
    if (!el) return;
    el.innerHTML =
      '<div class="leilao-card">' +
        '<span class="leilao-card-nome">' + j.nome + '</span>' +
        '<span class="leilao-card-time">' + j.clube + '</span>' +
        '<span class="leilao-card-ano">' + j.ano + '</span>' +
        '<span class="leilao-card-posicoes">' + j.posicoes.join('/') + '</span>' +
        '<span class="leilao-card-forca">' + j.forca + '</span>' +
      '</div>';
  }

  // ── Render da lista de participantes (clicável — mostrará o time depois) ──
  function renderParticipantes(lista) {
    var el = $('leilao-participantes');
    if (!el) return;
    el.innerHTML = lista.map(function (p) {
      return '<div class="leilao-part' + (p.voce ? ' leilao-part-voce' : '') + '">' +
               '<span class="leilao-part-nome">' + p.nome +
                 (p.voce ? '<span class="leilao-part-tag">(você)</span>' : '') + '</span>' +
               '<span class="leilao-part-info">' +
                 '<span class="leilao-part-moedas">' + p.moedas + '💰</span>' +
                 '<span>' + p.escalados + '/5</span>' +
               '</span>' +
             '</div>';
    }).join('');
  }

  // ── Componente de lance (+/-, limites, botões) ──
  function atualizarLance() {
    var elValor = $('leilao-lance-valor');
    var elMenos = $('leilao-menos');
    var elDar = $('leilao-dar-lance');
    if (elValor) elValor.textContent = _lance;
    // '-' só habilita se > 0
    if (elMenos) elMenos.disabled = (_lance <= 0);
    // 'Dar lance' só habilita se > 0
    if (elDar) elDar.disabled = (_lance <= 0);
    // '+' respeita o orçamento disponível
    var elMais = $('leilao-mais');
    if (elMais) elMais.disabled = (_lance >= _orcamento);
  }

  function ligarControles() {
    var elMais = $('leilao-mais');
    var elMenos = $('leilao-menos');
    var elDar = $('leilao-dar-lance');
    var elPular = $('leilao-pular');

    if (elMais) elMais.onclick = function () {
      if (_lance < _orcamento) { _lance++; atualizarLance(); }
    };
    if (elMenos) elMenos.onclick = function () {
      if (_lance > 0) { _lance--; atualizarLance(); }
    };
    if (elDar) elDar.onclick = function () {
      // camada de UI: apenas registra visualmente (lógica de disputa virá depois)
      var elAtual = $('leilao-lance-atual');
      if (elAtual) elAtual.innerHTML = 'Seu lance atual: <strong>' + _lance + '</strong> moedas';
    };
    if (elPular) elPular.onclick = function () {
      var elAtual = $('leilao-lance-atual');
      if (elAtual) elAtual.textContent = 'Você pulou este jogador.';
    };
  }

  // ── Orçamento na lateral ──
  function renderOrcamento() {
    var el = $('leilao-orcamento-valor');
    if (el) el.textContent = _orcamento;
  }

  function renderRestantes(n) {
    var el = $('leilao-restantes');
    if (el) el.textContent = n + (n === 1 ? ' jogador restante' : ' jogadores restantes');
  }

  // ── Abre o overlay do leilão (por ora, com dados de exemplo) ──
  function abrir() {
    var ov = $('leilao-overlay');
    if (!ov) return;
    _lance = 0;
    renderJogador(jogadorExemplo());
    renderParticipantes(participantesExemplo());
    renderOrcamento();
    renderRestantes(50);
    atualizarLance();
    ligarControles();
    var btnFechar = $('leilao-fechar');
    if (btnFechar) btnFechar.onclick = fechar;
    ov.classList.remove('escondida');
  }

  function fechar() {
    var ov = $('leilao-overlay');
    if (ov) ov.classList.add('escondida');
  }

  // Guarda a config escolhida na tela de montar time.
  function setOrcamento(v) { _orcamento = +v || 50; renderOrcamento(); }
  function setFormacao(f) { _formacao = (f === 'ofensivo') ? 'ofensivo' : 'normal'; }
  function orcamento() { return _orcamento; }
  function formacao() { return _formacao; }
  function descFormacao(f) { return (FORMACOES_LEILAO[f] || FORMACOES_LEILAO.normal).desc; }

  return {
    abrir: abrir,
    fechar: fechar,
    setOrcamento: setOrcamento,
    setFormacao: setFormacao,
    orcamento: orcamento,
    formacao: formacao,
    descFormacao: descFormacao,
    FORMACOES_LEILAO: FORMACOES_LEILAO
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = Leilao;
