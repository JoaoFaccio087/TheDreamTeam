/* ui.js — biblioteca de componentes de interface compartilhados entre os modos.
   Objetivo: UMA fonte de verdade para pedaços repetidos (cabeçalho, etc.), pra não
   reescrever/ajustar o mesmo HTML em cada tela. Carregar ANTES dos módulos de tela. */
(function () {
  'use strict';

  var UI = {};

  // Escapa texto para HTML (cobre & < > " ' — superset seguro). Use em TODO
  // lugar que injeta texto do usuário em innerHTML.
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  UI.esc = esc;

  // Embaralha (Fisher-Yates) retornando uma CÓPIA (não altera o array original).
  UI.shuffle = function (arr) {
    var a = (arr || []).slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  var SVG_VOLTAR =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';

  // ── Cabeçalho padrão de tela ────────────────────────────────────────────────
  // Gera SEMPRE a mesma estrutura (.jogo-header-wrap). Os *Id permitem que o código
  // de cada tela continue atualizando os textos via getElementById(...).textContent.
  //
  // opts:
  //   titulo   (def. 'THE DREAM TEAM')   tituloId?
  //   slogan   (def. 'SORTEIE · ESCALE · GOLEIE')   sloganId?
  //   info     (texto da direita)   infoId?   infoHtml? (HTML cru, ignora `info`)
  //   voltarId (se definido, mostra um botão Voltar à esquerda com esse id)
  UI.renderHeader = function (slot, opts) {
    if (!slot) return;
    opts = opts || {};
    var titulo  = opts.titulo != null ? opts.titulo : 'THE DREAM TEAM';
    var slogan  = opts.slogan != null ? opts.slogan : 'SORTEIE \u00B7 ESCALE \u00B7 GOLEIE';
    var tIdAttr = opts.tituloId ? ' id="' + opts.tituloId + '"' : '';
    var sIdAttr = opts.sloganId ? ' id="' + opts.sloganId + '"' : '';
    var iIdAttr = opts.infoId   ? ' id="' + opts.infoId   + '"' : '';
    var infoInner = opts.infoHtml != null ? opts.infoHtml
                  : (opts.info != null ? esc(opts.info) : '');

    var voltarHtml = opts.voltarId
      ? '<button id="' + opts.voltarId + '" class="jogo-voltar-topo" type="button" aria-label="Voltar">' +
          SVG_VOLTAR + '<span>Voltar</span></button>'
      : '';

    var blocoTitulo =
      '<div>' +
        '<p class="jogo-header-titulo"' + tIdAttr + '>' + esc(titulo) + '</p>' +
        '<p class="jogo-header-slogan"' + sIdAttr + '>' + esc(slogan) + '</p>' +
      '</div>';

    var esquerda = voltarHtml
      ? '<div class="jogo-header-esq">' + voltarHtml + blocoTitulo + '</div>'
      : blocoTitulo;

    slot.classList.add('jogo-header-wrap');
    slot.innerHTML =
      '<header class="jogo-header">' +
        esquerda +
        '<p class="jogo-header-info"' + iIdAttr + '>' + infoInner + '</p>' +
      '</header>' +
      '<div class="jogo-header-linha"></div>';
  };

  // Atalho: renderiza o cabeçalho num slot pelo id do elemento.
  UI.setHeader = function (slotId, opts) {
    UI.renderHeader(document.getElementById(slotId), opts);
  };

  window.UI = UI;

  // Cabeçalhos ESTÁTICOS do single-player: renderizados JÁ no load deste script.
  // ui.js é carregado com `defer` ANTES de estado.js, e `defer` garante o DOM
  // parseado — então #btn-voltar-home / #jogo-header-info passam a existir antes
  // de estado.js cacheá-los. (As telas online montam seus cabeçalhos no init delas.)
  UI.setHeader('hdr-jogo',      { voltarId: 'btn-voltar-home', infoId: 'jogo-header-info' });
  UI.setHeader('hdr-simulacao', { infoHtml: '<span class="sim-label-campanha">A CAMPANHA</span>' });
})();
