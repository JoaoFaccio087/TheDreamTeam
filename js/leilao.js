/* ═══════════════════════════════════════════════════════════════════
   MODO LEILÃO (futebol) — MOTOR DE DISPUTA (offline, você vs bots).

   Mecânica (decisões do João):
   - Pool: jogadores força >= 86 da competição, embaralhados (dinamismo).
   - Timer FIXO ~18s por jogador; ACRÉSCIMO de +5s se houver lance nos
     últimos 3s (evita "roubo" no fim, como acréscimo de futebol).
   - Ordem das pessoas GIRA a cada jogador (rotação).
   - Cada um, na vez, PASSA ou dá um LANCE (sempre MAIOR que o atual; sem empate).
   - Maior lance ao fim leva o jogador. Ninguém deu lance → jogador SOME.
   - Bots ESPERTOS: valorizam jogadores mais fortes (teto de lance ~ força).
   - 5 vagas por formação (Normal/Ofensivo). Linha aceita famílias de posições.
   ═══════════════════════════════════════════════════════════════════ */
var Leilao = (function () {
  'use strict';

  var TIMER_BASE = 18;      // segundos por jogador
  var ACRESCIMO = 5;        // segundos somados se houver lance nos últimos...
  var JANELA_ACRESCIMO = 3; // ...segundos finais
  var POOL_MAX = 50;        // teto do pool
  var FORCA_MIN = 86;       // só jogadores fortes

  var _orcamento = 50;
  var _formacao = 'normal';
  var _lance = 0;

  var ACEITA = {
    GOL:  ['GOL'],
    ZAG:  ['LE', 'ZAG', 'LD', 'ZE', 'ZD', 'LB', 'RB'],
    MEIO: ['VOL', 'MC', 'MD', 'ME', 'MEI', 'MEIA'],
    ATA:  ['PE', 'PD', 'SA', 'ATA', 'CA']
  };
  var FORMACOES_LEILAO = {
    normal:   { desc: 'GOL + ZAG + 2 MEIO + 1 ATA', vagas: ['GOL', 'ZAG', 'MEIO', 'MEIO', 'ATA'] },
    ofensivo: { desc: 'GOL + ZAG + 1 MEIO + 2 ATA', vagas: ['GOL', 'ZAG', 'MEIO', 'ATA', 'ATA'] }
  };

  var S = null;

  function $(id) { return document.getElementById(id); }
  function embaralhar(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function montarPool() {
    var times = (typeof API !== 'undefined' && API.getClubesDoModo)
      ? API.getClubesDoModo(modoSelecionado) : [];
    var todos = [];
    times.forEach(function (t) {
      (t.jogadores || []).forEach(function (j) {
        if (j.forca >= FORCA_MIN) {
          todos.push({ id: j.id, nome: j.nome, posicoes: j.posicoes || [], forca: j.forca,
            clube: t.clube, ano: t.edicao || t.temporada || '' });
        }
      });
    });
    var porId = {};
    todos.forEach(function (j) { var k = j.id || j.nome; if (!porId[k] || j.forca > porId[k].forca) porId[k] = j; });
    var unicos = Object.keys(porId).map(function (k) { return porId[k]; });
    return embaralhar(unicos).slice(0, POOL_MAX);
  }

  function vagaAceita(vaga, jogador) {
    var fam = ACEITA[vaga] || [];
    return (jogador.posicoes || []).some(function (p) { return fam.indexOf(p) >= 0; });
  }
  function temVagaPara(part, jogador) {
    return part.vagas.some(function (v) { return v.jog === null && vagaAceita(v.pos, jogador); });
  }
  function encaixar(part, jogador) {
    for (var i = 0; i < part.vagas.length; i++) {
      if (part.vagas[i].jog === null && vagaAceita(part.vagas[i].pos, jogador)) { part.vagas[i].jog = jogador; return true; }
    }
    return false;
  }
  function escaladosDe(part) { return part.vagas.filter(function (v) { return v.jog !== null; }).length; }
  function elencoCompleto(part) { return escaladosDe(part) >= part.vagas.length; }

  function novaSessao() {
    var vagasForm = (FORMACOES_LEILAO[_formacao] || FORMACOES_LEILAO.normal).vagas;
    function fazVagas() { return vagasForm.map(function (pos) { return { pos: pos, jog: null }; }); }
    var nome = (typeof nomeDoTime !== 'undefined' && nomeDoTime) ? nomeDoTime : 'Você';
    var participantes = [
      { nome: nome, voce: true, moedas: _orcamento, vagas: fazVagas() },
      { nome: 'Bot Alfa', voce: false, moedas: _orcamento, vagas: fazVagas() },
      { nome: 'Bot Beta', voce: false, moedas: _orcamento, vagas: fazVagas() },
      { nome: 'Bot Gama', voce: false, moedas: _orcamento, vagas: fazVagas() }
    ];
    S = {
      pool: montarPool(), participantes: participantes,
      ordemBase: participantes.map(function (_, i) { return i; }),
      giro: -1, jogadorAtual: null, lanceAtual: 0, quemLidera: -1,
      passaram: [], restante: TIMER_BASE, timerId: null, encerrado: false,
      ordem: [], posOrdem: 0, vezDe: null
    };
  }

  function renderJogador(j) {
    var el = $('leilao-jogador'); if (!el) return;
    if (!j) { el.innerHTML = '<div class="leilao-card leilao-card-vazio">Leilão encerrado</div>'; return; }
    el.innerHTML = '<div class="leilao-card">' +
      '<span class="leilao-card-nome">' + j.nome + '</span>' +
      '<span class="leilao-card-time">' + j.clube + '</span>' +
      '<span class="leilao-card-ano">' + j.ano + '</span>' +
      '<span class="leilao-card-posicoes">' + (j.posicoes || []).join('/') + '</span>' +
      '<span class="leilao-card-forca">' + j.forca + '</span>' +
      '</div>';
  }
  function renderParticipantes() {
    var el = $('leilao-participantes'); if (!el || !S) return;
    el.innerHTML = S.participantes.map(function (p, i) {
      var daVez = (S.vezDe === i), lidera = (S.quemLidera === i);
      return '<div class="leilao-part' + (p.voce ? ' leilao-part-voce' : '') + (daVez ? ' leilao-part-vez' : '') + '">' +
        '<span class="leilao-part-nome">' + p.nome +
          (p.voce ? '<span class="leilao-part-tag">(você)</span>' : '') +
          (lidera ? ' <span class="leilao-part-lidera">▲ lance</span>' : '') + '</span>' +
        '<span class="leilao-part-info">' +
          '<span class="leilao-part-moedas">' + p.moedas + '💰</span>' +
          '<span>' + escaladosDe(p) + '/' + p.vagas.length + '</span>' +
        '</span></div>';
    }).join('');
  }
  function renderRestantes() {
    var el = $('leilao-restantes'); if (el && S) el.textContent = S.pool.length + (S.pool.length === 1 ? ' jogador restante' : ' jogadores restantes');
  }
  function renderOrcamento() {
    var voce = S && S.participantes.filter(function (p) { return p.voce; })[0];
    var el = $('leilao-orcamento-valor'); if (el) el.textContent = voce ? voce.moedas : _orcamento;
  }
  function renderTimer() {
    var barra = $('leilao-timer-barra'); if (!barra || !S) return;
    var escala = S.duracaoAtual || TIMER_BASE;
    barra.style.width = Math.max(0, Math.min(100, (S.restante / escala) * 100)) + '%';
    // Fica vermelha nos segundos finais (aviso visual).
    barra.style.background = (S.restante <= JANELA_ACRESCIMO) ? 'var(--vermelho, #e5484d)' : 'var(--accent)';
  }
  function renderLanceAtual() {
    var el = $('leilao-lance-atual'); if (!el || !S) return;
    if (S.quemLidera >= 0) {
      var p = S.participantes[S.quemLidera];
      var euLidero = p.voce;
      el.className = 'leilao-lance-atual ' + (euLidero ? 'lance-eu' : 'lance-outro');
      el.innerHTML = (euLidero ? '✓ Você lidera com ' : '🔨 Maior lance: ') +
                     '<strong>' + S.lanceAtual + '</strong>' +
                     (euLidero ? ' moedas' : ' — ' + p.nome);
    } else {
      el.className = 'leilao-lance-atual';
      el.textContent = 'Sem lances — dê o primeiro ou passe.';
    }
  }

  function minimoParaCobrir() { return S ? (S.lanceAtual + 1) : 1; }
  function tetoVoce() { var v = S.participantes.filter(function (p) { return p.voce; })[0]; return v ? v.moedas : 0; }
  function atualizarLance() {
    var elValor = $('leilao-lance-valor'), elMenos = $('leilao-menos'), elMais = $('leilao-mais'), elDar = $('leilao-dar-lance');
    if (elValor) elValor.textContent = _lance;
    var min = minimoParaCobrir();
    var voceDaVez = S && S.vezDe != null && S.participantes[S.vezDe] && S.participantes[S.vezDe].voce;
    if (elMenos) elMenos.disabled = (_lance <= min);
    if (elMais) elMais.disabled = (_lance >= tetoVoce());
    if (elDar) elDar.disabled = !(voceDaVez && _lance >= min && _lance <= tetoVoce());
    var elPular = $('leilao-pular'); if (elPular) elPular.disabled = !voceDaVez;
  }
  function ligarControles() {
    var elMais = $('leilao-mais'), elMenos = $('leilao-menos'), elDar = $('leilao-dar-lance'), elPular = $('leilao-pular'), elFechar = $('leilao-fechar');
    if (elMais) elMais.onclick = function () { if (_lance < tetoVoce()) { _lance++; atualizarLance(); } };
    if (elMenos) elMenos.onclick = function () {
      // não desce abaixo do mínimo necessário para cobrir o lance atual
      var min = minimoParaCobrir();
      if (_lance > min) { _lance--; atualizarLance(); }
    };
    if (elDar) elDar.onclick = darLanceVoce;
    if (elPular) elPular.onclick = passarVoce;
    if (elFechar) elFechar.onclick = fechar;
  }

  function proximoJogador() {
    if (!S || S.encerrado) return;
    if (S.pool.length === 0 || S.participantes.every(elencoCompleto)) { encerrar(); return; }
    S.jogadorAtual = S.pool.shift();
    S.lanceAtual = 0; S.quemLidera = -1; S.passaram = []; S.restante = TIMER_BASE; _lance = 0;
    S.giro = (S.giro + 1) % S.participantes.length;
    S.ordem = S.ordemBase.slice(S.giro).concat(S.ordemBase.slice(0, S.giro));
    S.posOrdem = 0; S.vezDe = S.ordem[0];
    renderJogador(S.jogadorAtual); renderParticipantes(); renderRestantes(); renderLanceAtual(); atualizarLance();
    iniciarTimer(); proximoNaVez();
  }
  function proximoNaVez() {
    if (!S || S.encerrado) return;
    var tentativas = 0;
    while (tentativas < S.ordem.length) {
      var idx = S.ordem[S.posOrdem % S.ordem.length];
      var part = S.participantes[idx];
      var pode = S.passaram.indexOf(idx) < 0 && temVagaPara(part, S.jogadorAtual) && part.moedas >= minimoParaCobrir() && idx !== S.quemLidera;
      if (pode) {
        S.vezDe = idx; renderParticipantes();
        if (part.voce) {
          // Auto-ajusta seu lance para o MÍNIMO que cobre o lance atual (senão você teria
          // que clicar '+' várias vezes até alcançar o valor da outra pessoa). Você ainda
          // pode subir com '+' ou descer com '-' (respeitando o mínimo).
          _lance = Math.min(tetoVoce(), minimoParaCobrir());
          atualizarLance();
        }
        else { (function (i) { setTimeout(function () { jogadaBot(i); }, 600 + Math.random() * 900); })(idx); }
        return;
      }
      S.posOrdem++; tentativas++;
    }
    resolverJogador();
  }
  function avancarVez() { S.posOrdem++; proximoNaVez(); }

  function darLanceVoce() {
    if (!S || S.vezDe == null) return;
    var part = S.participantes[S.vezDe]; if (!part.voce) return;
    if (_lance < minimoParaCobrir() || _lance > part.moedas) return;
    registrarLance(S.vezDe, _lance); _lance = 0; avancarVez();
  }
  function passarVoce() {
    if (!S || S.vezDe == null) return;
    if (!S.participantes[S.vezDe].voce) return;
    S.passaram.push(S.vezDe); avancarVez();
  }

  function jogadaBot(idx) {
    if (!S || S.encerrado || S.vezDe !== idx) return;
    var part = S.participantes[idx], j = S.jogadorAtual;
    var min = minimoParaCobrir();

    // Teto que o bot topa pagar por ESTE jogador: proporcional à força e ao orçamento.
    // Um craque de 95+ vale quase tudo; um de 86 vale pouco. Cada bot tem uma variação
    // aleatória de apreço (±15%), então nem todos disputam o mesmo jogador.
    var valorBase = (j.forca - FORCA_MIN) / (100 - FORCA_MIN);   // 0..1 conforme a força
    var apreco = 0.35 + valorBase * 0.65;                        // 35%..100% do orçamento
    var variacao = 0.85 + Math.random() * 0.30;                  // ±15% de gosto pessoal
    var teto = Math.floor(part.moedas * apreco * variacao);

    // Guarda quantas vagas ainda faltam: se faltam muitas, é mais econômico (não gasta tudo
    // num jogador só); se falta pouca, pode arriscar mais.
    var vagasLivres = part.vagas.filter(function (v) { return v.jog === null; }).length;
    if (vagasLivres >= 4) teto = Math.floor(teto * 0.7);   // começo do leilão: cauteloso

    // Só dá lance se: cobre o mínimo, cabe no teto que ele topa, e tem moedas. Se o preço
    // já passou do teto dele, PASSA (não entra em guerra de lance sem sentido).
    if (min <= teto && min <= part.moedas) {
      // Lance: normalmente o mínimo para cobrir; às vezes sobe um pouco para intimidar,
      // mas nunca acima do próprio teto.
      var salto = Math.random() < 0.25 ? (1 + Math.floor(Math.random() * 2)) : 0;
      var valor = Math.min(part.moedas, teto, min + salto);
      registrarLance(idx, valor);
    } else {
      S.passaram.push(idx);
    }
    avancarVez();
  }

  function registrarLance(idx, valor) {
    S.lanceAtual = valor; S.quemLidera = idx;
    // NÃO reseta S.passaram: quem passou saiu da disputa DESTE jogador de vez (decisão do
    // João). A disputa segue só entre quem ainda não passou. Garante que quem lidera não
    // esteja marcado como "passou" (ele obviamente está participando).
    var p = S.passaram.indexOf(idx);
    if (p >= 0) S.passaram.splice(p, 1);
    if (S.restante <= JANELA_ACRESCIMO) estenderTimer(ACRESCIMO);
    renderParticipantes(); renderLanceAtual(); renderTimer();
  }
  function resolverJogador() {
    if (!S) return; pararTimer();
    if (S.quemLidera >= 0) { var venc = S.participantes[S.quemLidera]; venc.moedas -= S.lanceAtual; encaixar(venc, S.jogadorAtual); }
    renderParticipantes(); renderOrcamento();
    setTimeout(proximoJogador, 700);
  }

  function iniciarTimer() {
    pararTimer();
    S.restante = S.restante || TIMER_BASE;
    S.fimEm = Date.now() + S.restante * 1000;
    S.duracaoAtual = S.restante;   // para a barra saber a escala
    renderTimer();
    // Atualiza a cada 100ms para a barra descer suave (não aos pulos de 1s).
    S.timerId = setInterval(function () {
      if (!S || S.encerrado) { pararTimer(); return; }
      var msRestante = S.fimEm - Date.now();
      S.restante = Math.max(0, msRestante / 1000);
      renderTimer();
      if (msRestante <= 0) { pararTimer(); resolverJogador(); }
    }, 100);
  }
  function estenderTimer(seg) {
    // usado pelo acréscimo: soma tempo ao alvo, sem reiniciar o intervalo
    if (!S) return;
    S.fimEm = (S.fimEm || Date.now()) + seg * 1000;
    S.duracaoAtual = (S.duracaoAtual || TIMER_BASE) + seg;
    renderTimer();
  }
  function pararTimer() { if (S && S.timerId) { clearInterval(S.timerId); S.timerId = null; } }

  function encerrar() {
    if (!S) return; S.encerrado = true; pararTimer();
    renderJogador(null); renderParticipantes();
    var elAtual = $('leilao-lance-atual'); if (elAtual) elAtual.textContent = 'Leilão encerrado! Confira os elencos.';
  }

  function abrir() {
    var ov = $('leilao-overlay'); if (!ov) return;
    novaSessao(); renderOrcamento(); ligarControles();
    ov.classList.remove('escondida'); proximoJogador();
  }
  function fechar() { pararTimer(); var ov = $('leilao-overlay'); if (ov) ov.classList.add('escondida'); }

  function setOrcamento(v) { _orcamento = +v || 50; }
  function setFormacao(f) { _formacao = (f === 'ofensivo') ? 'ofensivo' : 'normal'; }
  function orcamento() { return _orcamento; }
  function formacao() { return _formacao; }
  function descFormacao(f) { return (FORMACOES_LEILAO[f] || FORMACOES_LEILAO.normal).desc; }

  return {
    abrir: abrir, fechar: fechar,
    setOrcamento: setOrcamento, setFormacao: setFormacao,
    orcamento: orcamento, formacao: formacao, descFormacao: descFormacao,
    FORMACOES_LEILAO: FORMACOES_LEILAO
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = Leilao;
