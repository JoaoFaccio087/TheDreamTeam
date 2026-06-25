/* ui.js — UIKit: componentes de interface reutilizados entre os modos.
   Carregar antes dos módulos de tela. */
(function () {
  'use strict';

  var UI = {};

  // Escape de HTML (& < > " '). Usar ao injetar texto em innerHTML.
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  UI.esc = esc;

  // Fisher-Yates; retorna uma cópia (não altera o original).
  UI.shuffle = function (arr) {
    var a = (arr || []).slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  // Posiciona os marcadores (NodeList/array) pelas coordenadas da formação. Só
  // posiciona; o conteúdo de cada marcador fica a cargo de quem chama. Devolve as
  // coordenadas resolvidas (ou null se `formacoes` ainda não existir).
  UI.posicionarCampo = function (marcadores, formacao) {
    var fs = (typeof formacoes !== 'undefined') ? formacoes : null;
    var coords = (fs && fs[formacao]) ? fs[formacao] : (fs ? fs['4-3-3'] : null);
    if (!coords) return null;
    Array.prototype.forEach.call(marcadores || [], function (el, i) {
      if (el && coords[i]) {
        el.style.left = coords[i].left + '%';
        el.style.top  = coords[i].top  + '%';
      }
    });
    return coords;
  };

  var SVG_VOLTAR =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';

  // Cabeçalho padrão. opts: titulo, tituloId, slogan, sloganId, info|infoHtml,
  // infoId, voltarId. Os *Id permitem que cada tela atualize os textos depois.
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

  // Cabeçalhos estáticos do single-player. O Voltar de cada tela é um link no corpo
  // (abaixo do cabeçalho), não mais dentro do header.
  UI.setHeader('hdr-jogo',      { infoId: 'jogo-header-info' });
  UI.setHeader('hdr-simulacao', { infoHtml: '<span class="sim-label-campanha">A CAMPANHA</span>' });
})();
