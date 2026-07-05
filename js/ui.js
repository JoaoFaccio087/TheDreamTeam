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
    // Para cada slot, decide se a etiqueta do nome (que fica embaixo) colidiria
    // com alguma ficha logo abaixo. Se sim, joga o nome para CIMA. A decisão usa
    // as coordenadas reais → vale p/ todas as formações, sem mexer no desenho.
    function temFichaAbaixo(idx) {
      var c = coords[idx];
      for (var j = 0; j < coords.length; j++) {
        if (j === idx) continue;
        var o = coords[j];
        var dTop = o.top - c.top;          // o está abaixo de c?
        var dLeft = Math.abs(o.left - c.left);
        // "logo abaixo": entre 8% e 20% mais baixo e horizontalmente próximo (<28%).
        if (dTop > 8 && dTop < 20 && dLeft < 28) return true;
      }
      return false;
    }
    Array.prototype.forEach.call(marcadores || [], function (el, i) {
      if (el && coords[i]) {
        el.style.left = coords[i].left + '%';
        el.style.top  = coords[i].top  + '%';
        if (temFichaAbaixo(i)) el.classList.add('nome-acima');
        else                   el.classList.remove('nome-acima');
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

  // Modal de confirmação (Cancelar / Confirmar). Cria o overlay .modal-confirm sob demanda,
  // resolve fechar por Cancelar, clique fora e Esc, e devolve a escolha via callback/Promise.
  // Use em modais NOVOS; os antigos (logout, sair, pular) seguem com sua lógica própria.
  //   opts: { titulo, texto|html, confirmar, cancelar, onConfirmar, onCancelar, perigo }
  //   - texto: string (escapada) | html: markup já pronto (use um ou outro)
  //   - confirmar/cancelar: rótulos dos botões (default 'Confirmar'/'Cancelar')
  //   - perigo: true → botão Confirmar em tom destrutivo (classe .btn-perigo)
  // Retorna uma Promise<boolean> (true = confirmou) além de chamar os callbacks.
  UI.modalConfirm = function (opts) {
    opts = opts || {};
    var rotConf = opts.confirmar != null ? opts.confirmar : 'Confirmar';
    var rotCanc = opts.cancelar  != null ? opts.cancelar  : 'Cancelar';
    var corpo   = opts.html != null ? opts.html : esc(opts.texto != null ? opts.texto : '');
    var classeConf = 'btn-rolar' + (opts.perigo ? ' btn-perigo' : '');

    var overlay = document.createElement('div');
    overlay.className = 'modal-confirm';
    overlay.innerHTML =
      '<div class="modal-confirm-box" role="dialog" aria-modal="true">' +
        (opts.titulo ? '<p class="modal-confirm-titulo">' + esc(opts.titulo) + '</p>' : '') +
        '<p class="modal-confirm-texto">' + corpo + '</p>' +
        '<div class="modal-confirm-acoes">' +
          '<button type="button" class="btn-rolar btn-sec" data-acao="cancelar">' + esc(rotCanc) + '</button>' +
          '<button type="button" class="' + classeConf + '" data-acao="confirmar">' + esc(rotConf) + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    return new Promise(function (resolve) {
      function fechar(ok) {
        document.removeEventListener('keydown', onKey);
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        if (ok && typeof opts.onConfirmar === 'function') opts.onConfirmar();
        if (!ok && typeof opts.onCancelar === 'function') opts.onCancelar();
        resolve(ok);
      }
      function onKey(e) { if (e.key === 'Escape') fechar(false); }

      overlay.addEventListener('click', function (e) {
        var acao = e.target && e.target.getAttribute && e.target.getAttribute('data-acao');
        if (acao === 'confirmar') return fechar(true);
        if (acao === 'cancelar')  return fechar(false);
        if (e.target === overlay) fechar(false);   // clique fora da caixa
      });
      document.addEventListener('keydown', onKey);
    });
  };

  window.UI = UI;

  // Cabeçalhos estáticos do single-player. O Voltar de cada tela é um link no corpo
  // (abaixo do cabeçalho), não mais dentro do header.
  UI.setHeader('hdr-jogo',      { infoId: 'jogo-header-info' });
  UI.setHeader('hdr-simulacao', { infoHtml: '<span class="sim-label-campanha">A CAMPANHA</span>' });
})();
