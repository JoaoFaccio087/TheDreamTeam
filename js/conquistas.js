// conquistas.js — Fase 2: renderização visual das conquistas (dados mock).
// Na Fase 3, a lista LISTA_CONQUISTAS e o estado "desbloqueada" virão da lógica/servidor.
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ─── Catálogo de conquistas (mock) ───────────────────────────────────────
  // id: chave estável (usada na Fase 3 para marcar desbloqueio no banco).
  // categoria: agrupa os cards. nome/desc: exibição. desbloqueada: mock (Fase 3 = real).
  var LISTA_CONQUISTAS = [
    // ── Progressão ──
    { id: 'primeira_vez',      categoria: 'Progressão', nome: 'Primeira vez',      desc: 'Jogou pela primeira vez',              desbloqueada: false },
    { id: 'primeira_vitoria',  categoria: 'Progressão', nome: 'Primeira vitória',  desc: 'Venceu a primeira partida',            desbloqueada: false },
    { id: 'primeiro_titulo',   categoria: 'Progressão', nome: 'Primeiro título',   desc: 'Venceu um torneio pela primeira vez',  desbloqueada: false },
    { id: 'veterano',          categoria: 'Progressão', nome: 'Veterano',          desc: 'Jogou 50 partidas',                    desbloqueada: false },
    { id: 'lenda_viva',        categoria: 'Progressão', nome: 'Lenda viva',        desc: 'Jogou 200 partidas',                   desbloqueada: false },
    { id: 'dinastico',         categoria: 'Progressão', nome: 'Dinástico',         desc: 'Venceu 5 torneios',                    desbloqueada: false },
    { id: 'imperador',         categoria: 'Progressão', nome: 'Imperador',         desc: 'Venceu 15 torneios',                   desbloqueada: false },
    { id: 'maquina_de_gols',   categoria: 'Progressão', nome: 'Máquina de gols',   desc: 'Marcou 100 gols no total',             desbloqueada: false },

    // ── Placar & Campanha ──
    { id: 'sete_a_zero',       categoria: 'Placar & Campanha', nome: '7 a 0!',          desc: 'Completou uma campanha 7 a 0 perfeita (7 vitórias, 0 derrotas)', desbloqueada: false },
    { id: 'invencivel',        categoria: 'Placar & Campanha', nome: 'Invencível',      desc: 'Completou um torneio invicto',         desbloqueada: false },
    { id: 'show_de_bola',      categoria: 'Placar & Campanha', nome: 'Show de bola',    desc: '7x0 com 5 artilheiros diferentes',     desbloqueada: false },
    { id: 'massacre',          categoria: 'Placar & Campanha', nome: 'Massacre',        desc: 'Venceu por 6+ de saldo',               desbloqueada: false },
    { id: 'hat_trick',         categoria: 'Placar & Campanha', nome: 'Hat-trick',       desc: 'Um jogador fez 3 gols num jogo',       desbloqueada: false },
    { id: 'poquer',            categoria: 'Placar & Campanha', nome: 'Pôquer',          desc: 'Um jogador fez 4 gols num jogo',       desbloqueada: false },
    { id: 'nos_penaltis',      categoria: 'Placar & Campanha', nome: 'Nos pênaltis',    desc: 'Venceu uma final nos pênaltis',        desbloqueada: false },
    { id: 'coracao_forte',     categoria: 'Placar & Campanha', nome: 'Coração forte',   desc: '2+ mata-matas decididos nos pênaltis numa campanha', desbloqueada: false },

    // ── Competições ──
    { id: 'campeao_liberta',   categoria: 'Competições', nome: 'Glória eterna',      desc: 'Campeão da Libertadores',           desbloqueada: false },
    { id: 'campeao_champions', categoria: 'Competições', nome: 'Orelhudas',          desc: 'Campeão da Champions',              desbloqueada: false },
    { id: 'campeao_brasil',    categoria: 'Competições', nome: 'Brasil, decime',     desc: 'Campeão do Brasileirão',            desbloqueada: false },
    { id: 'campeao_copa',      categoria: 'Competições', nome: 'Topo do mundo',      desc: 'Campeão da Copa do Mundo',          desbloqueada: false },
    { id: 'colecionador',      categoria: 'Competições', nome: 'Colecionador',       desc: 'Campeão de todas as 4 competições', desbloqueada: false },
  ];

  // Raridade por conquista (4 níveis, só cosmético): comum < raro < epico < lendario.
  // Mais difícil de obter = mais rara. Conquistas sem entrada aqui caem em 'comum'.
  var RARIDADE = {
    // Comuns — primeiros passos
    primeira_vez: 'comum', primeira_vitoria: 'comum', primeiro_titulo: 'comum', campeao_brasil: 'comum',
    // Raras — exigem alguma consistência
    veterano: 'raro', maquina_de_gols: 'raro', sete_a_zero: 'raro', hat_trick: 'raro',
    nos_penaltis: 'raro', campeao_liberta: 'raro', campeao_champions: 'raro', campeao_copa: 'raro',
    // Épicas — feitos difíceis
    dinastico: 'epico', invencivel: 'epico', show_de_bola: 'epico', massacre: 'epico',
    poquer: 'epico', coracao_forte: 'epico',
    // Lendárias — muito difíceis
    lenda_viva: 'lendario', imperador: 'lendario', colecionador: 'lendario'
  };
  var RARIDADE_ROTULO = { comum: 'Comum', raro: 'Raro', epico: 'Épico', lendario: 'Lendário' };
  function raridadeDe(id) { return RARIDADE[id] || 'comum'; }

  // Ícone (SVG inline) por estado — cadeado quando bloqueada, troféu quando desbloqueada.
  function iconeConquista(desbloqueada) {
    if (desbloqueada) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/>' +
        '<path d="M7 6H4.5v2A2.5 2.5 0 0 0 7 10.5"/><path d="M17 6h2.5v2a2.5 2.5 0 0 1-2.5 2.5"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  }

  function cardConquista(c) {
    var rar = raridadeDe(c.id);
    var cls = 'conq-card conq-rar-' + rar + (c.desbloqueada ? ' conq-desbloqueada' : ' conq-bloqueada');
    return '<div class="' + cls + '">' +
             '<span class="conq-rar-tag">' + esc(RARIDADE_ROTULO[rar] || 'Comum') + '</span>' +
             '<span class="conq-icone">' + iconeConquista(c.desbloqueada) + '</span>' +
             '<span class="conq-nome">' + esc(c.nome) + '</span>' +
             '<span class="conq-desc">' + esc(c.desc) + '</span>' +
           '</div>';
  }

  // Agrupa por categoria preservando a ordem de aparição.
  function agrupar(lista) {
    var ordem = [], grupos = {};
    lista.forEach(function (c) {
      if (!grupos[c.categoria]) { grupos[c.categoria] = []; ordem.push(c.categoria); }
      grupos[c.categoria].push(c);
    });
    return ordem.map(function (cat) { return { categoria: cat, itens: grupos[cat] }; });
  }

  function renderConquistas() {
    var cont = $('conq-lista');
    if (!cont) return;
    cont.innerHTML = '<p class="perfil-carregando">Carregando conquistas…</p>';

    // Busca as conquistas realmente desbloqueadas (backend). Fallback: nenhuma.
    var fonte = (typeof API !== 'undefined' && API.getAchievements) ? API.getAchievements()
              : (typeof api !== 'undefined' && api.getAchievements) ? api.getAchievements()
              : Promise.resolve([]);

    fonte.then(function (desbloqueadas) {
      var setDesb = {};
      (desbloqueadas || []).forEach(function (d) {
        var id = (typeof d === 'string') ? d : (d && d.achievement_id);
        if (id) setDesb[id] = true;
      });
      // Aplica o estado real sobre o catálogo.
      LISTA_CONQUISTAS.forEach(function (c) { c.desbloqueada = !!setDesb[c.id]; });
      desenharConquistas();
    }).catch(function () {
      desenharConquistas();   // ao menos mostra tudo bloqueado
    });
  }

  function desenharConquistas() {
    var cont = $('conq-lista');
    if (!cont) return;

    var totalDesb = LISTA_CONQUISTAS.filter(function (c) { return c.desbloqueada; }).length;
    var totalGeral = LISTA_CONQUISTAS.length;
    var elTotal = $('conq-contador-total');
    if (elTotal) elTotal.textContent = totalDesb + '/' + totalGeral;

    var html = agrupar(LISTA_CONQUISTAS).map(function (g) {
      var desbCat = g.itens.filter(function (c) { return c.desbloqueada; }).length;
      var cards = g.itens.map(cardConquista).join('');
      return '<div class="conq-categoria">' +
               '<div class="conq-cat-head">' +
                 '<span class="conq-cat-nome">' + esc(g.categoria) + '</span>' +
                 '<span class="conq-cat-prog">' + desbCat + '/' + g.itens.length + '</span>' +
               '</div>' +
               '<div class="conq-grid">' + cards + '</div>' +
             '</div>';
    }).join('');

    cont.innerHTML = html;
  }

  // Exposto para o perfil.js chamar ao entrar na aba Conquistas.
  window.renderConquistas = renderConquistas;

  // ─── Toast estilo Steam (canto inferior direito, com fila) ───────────────
  var _filaToast = [];
  var _toastAtivo = false;

  function nomeConquista(id) {
    var c = LISTA_CONQUISTAS.find(function (x) { return x.id === id; });
    return c ? c.nome : id;
  }
  function descConquista(id) {
    var c = LISTA_CONQUISTAS.find(function (x) { return x.id === id; });
    return c ? c.desc : '';
  }

  // Garante o container dos toasts (criado uma vez).
  function containerToast() {
    var el = document.getElementById('conq-toast-container');
    if (!el) {
      el = document.createElement('div');
      el.id = 'conq-toast-container';
      el.className = 'conq-toast-container';
      document.body.appendChild(el);
    }
    return el;
  }

  // Enfileira e dispara os toasts das conquistas recém-desbloqueadas.
  // Aceita array de IDs (strings) ou de objetos { achievement_id }.
  function mostrarToastConquistas(novas) {
    if (!novas || !novas.length) return;
    novas.forEach(function (n) {
      var id = (typeof n === 'string') ? n : (n && n.achievement_id);
      if (id) _filaToast.push(id);
    });
    if (!_toastAtivo) proximoToast();
  }

  function proximoToast() {
    if (!_filaToast.length) { _toastAtivo = false; return; }
    _toastAtivo = true;
    var id = _filaToast.shift();

    var cont = containerToast();
    var toast = document.createElement('div');
    toast.className = 'conq-toast';
    toast.innerHTML =
      '<span class="conq-toast-icone">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/>' +
          '<path d="M7 6H4.5v2A2.5 2.5 0 0 0 7 10.5"/><path d="M17 6h2.5v2a2.5 2.5 0 0 1-2.5 2.5"/></svg>' +
      '</span>' +
      '<span class="conq-toast-texto">' +
        '<span class="conq-toast-titulo">Conquista desbloqueada!</span>' +
        '<span class="conq-toast-nome">' + esc(nomeConquista(id)) + '</span>' +
        '<span class="conq-toast-desc">' + esc(descConquista(id)) + '</span>' +
      '</span>';
    cont.appendChild(toast);

    // Anima entrada → espera → saída → próximo da fila.
    requestAnimationFrame(function () { toast.classList.add('conq-toast-visivel'); });
    setTimeout(function () {
      toast.classList.remove('conq-toast-visivel');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
        proximoToast();
      }, 350);   // dura o tempo da transição de saída
    }, 4200);    // tempo visível de cada toast
  }

  window.mostrarToastConquistas = mostrarToastConquistas;
})();
