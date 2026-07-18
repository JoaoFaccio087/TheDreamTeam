// ============================================================
//  livre.js — JOGO LIVRE: o modal que monta o POTE.
//
//  O modo é o Clássico com o universo do sorteio filtrado: você escolhe de 8 a 16
//  clube+edição, o dado rola só entre eles, e o resto (rola → cai clube → escolhe 1
//  jogador → rola de novo) é o fluxo que já existe. Ver `universoDoSorteio()` em sorteio.js.
// ============================================================

(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var _obs = null;        // IntersectionObserver dos escudos
  var _busca = '';
  var _decada = '';

  function chave(d) { return d.clube + '|' + d.edicao; }

  // Todas as edições da competição escolhida, ordenadas por clube e ano.
  function edicoes() {
    var comp = COMPETICOES[modoSelecionado] && COMPETICOES[modoSelecionado].dados;
    if (!comp) return [];
    return API.getClubesPorCompeticao(comp).slice().sort(function (a, b) {
      return a.clube === b.clube ? a.edicao - b.edicao : a.clube.localeCompare(b.clube, 'pt-BR');
    });
  }

  function decadasDe(lista) {
    var set = {};
    lista.forEach(function (d) { set[Math.floor(d.edicao / 10) * 10] = 1; });
    return Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
  }

  // sem acento e minúsculo: buscar "sao paulo" tem de achar "São Paulo"
  function norm(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function filtradas() {
    var b = norm(_busca);
    return edicoes().filter(function (d) {
      if (_decada && Math.floor(d.edicao / 10) * 10 !== +_decada) return false;
      if (b && norm(d.clube).indexOf(b) < 0 && String(d.edicao).indexOf(b) < 0) return false;
      return true;
    });
  }

  function montar() {
    var ov = document.createElement('div');
    ov.id = 'modal-pote';
    ov.className = 'draft-overlay escondida';
    ov.innerHTML =
      '<div class="pote-caixa">' +
        '<div class="pote-topo">' +
          '<p class="draft-titulo" id="pote-titulo">Monte seu pote</p>' +
          '<p class="pote-ajuda">O dado vai rolar só entre os que você escolher.</p>' +
        '</div>' +
        '<div class="pote-filtros">' +
          '<input id="pote-busca" class="pote-input" type="search" placeholder="Buscar clube ou ano…" autocomplete="off" />' +
          '<div class="area-pilulas" id="pote-decadas"></div>' +
        '</div>' +
        '<div id="pote-grade" class="pote-grade scroll-fino"></div>' +
        '<div class="pote-rodape">' +
          '<span id="pote-contador" class="pote-contador"></span>' +
          '<div class="pote-acoes">' +
            // Hierarquia: só o Avançar é ação principal (verde). Limpar e Cancelar são
            // secundários — três botões verdes não dizem ao usuário o que fazer.
            '<button id="pote-limpar" class="btn-rolar btn-sec pote-btn-menor" type="button">Limpar</button>' +
            '<button id="pote-cancelar" class="btn-rolar btn-sec pote-btn-menor" type="button">Cancelar</button>' +
            '<button id="pote-avancar" class="btn-rolar" type="button" disabled>Avan&ccedil;ar &rarr;</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);
    return ov;
  }

  // ⚠️ O escudo só é desenhado quando o card ENTRA NA TELA. A Copa do Mundo tem 537
  // edições e cada SVG tem de 430 a 5.000 bytes — desenhar tudo de uma vez trava o
  // celular. O card nasce com o espaço reservado e o observer preenche sob demanda.
  function observarEscudos(raiz) {
    if (_obs) _obs.disconnect();
    if (typeof IntersectionObserver === 'undefined') {   // sem suporte: desenha tudo
      raiz.querySelectorAll('[data-escudo]').forEach(pintar);
      return;
    }
    _obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        pintar(e.target);
        _obs.unobserve(e.target);
      });
    }, { root: raiz, rootMargin: '200px' });
    raiz.querySelectorAll('[data-escudo]').forEach(function (el) { _obs.observe(el); });
  }

  function pintar(el) {
    if (el.dataset.pronto) return;
    el.dataset.pronto = '1';
    if (typeof Escudos !== 'undefined' && Escudos.porNome) {
      el.innerHTML = Escudos.porNome(el.dataset.escudo) || '';
    }
  }

  function render() {
    var grade = $('pote-grade');
    if (!grade) return;
    var lista = filtradas();

    if (!lista.length) {
      grade.innerHTML = '<p class="pote-vazio">Nenhum clube encontrado. Tente outro nome ou década.</p>';
      return;
    }
    grade.innerHTML = lista.map(function (d) {
      var k = chave(d);
      var on = poteLivre.indexOf(k) >= 0;
      return '<button class="pote-card' + (on ? ' pote-card-on' : '') + '" type="button" data-k="' +
             UI.esc(k) + '" aria-pressed="' + on + '">' +
               '<span class="pote-escudo" data-escudo="' + UI.esc(d.clube) + '"></span>' +
               '<span class="pote-nome">' + UI.esc(d.clube) + '</span>' +
               '<span class="pote-ano">' + d.edicao + '</span>' +
             '</button>';
    }).join('');

    grade.querySelectorAll('.pote-card').forEach(function (b) {
      b.onclick = function () { alternar(b.dataset.k); };
    });
    observarEscudos(grade);
    atualizarRodape();
  }

  function alternar(k) {
    var i = poteLivre.indexOf(k);
    if (i >= 0) poteLivre.splice(i, 1);
    else if (poteLivre.length < POTE_MAX) poteLivre.push(k);
    else return;   // no teto: ignora em vez de trocar por baixo dos panos

    var card = $('pote-grade').querySelector('[data-k="' + (window.CSS && CSS.escape ? CSS.escape(k) : k) + '"]');
    if (card) {
      var on = poteLivre.indexOf(k) >= 0;
      card.classList.toggle('pote-card-on', on);
      card.setAttribute('aria-pressed', String(on));
    }
    atualizarRodape();
  }

  function atualizarRodape() {
    var n = poteLivre.length;
    var cont = $('pote-contador');
    if (cont) {
      cont.textContent = n < POTE_MIN
        ? n + ' de ' + POTE_MIN + ' — escolha pelo menos ' + POTE_MIN
        : n + ' de ' + POTE_MAX + (n >= POTE_MAX ? ' — limite atingido' : '');
      cont.classList.toggle('pote-contador-ok', n >= POTE_MIN);
    }
    var av = $('pote-avancar');
    if (av) av.disabled = n < POTE_MIN;   // Avançar só libera no mínimo (pedido do João)
    var lim = $('pote-limpar');
    if (lim) lim.disabled = n === 0;
    // Nos cards, marca visualmente que o teto foi atingido (os não-escolhidos ficam inertes)
    var grade = $('pote-grade');
    if (grade) grade.classList.toggle('pote-cheio', n >= POTE_MAX);
  }

  function abrir() {
    var ov = $('modal-pote') || montar();
    _busca = ''; _decada = '';

    var t = $('pote-titulo');
    if (t) t.textContent = 'Monte seu pote · ' + (COMPETICOES[modoSelecionado].label || '');

    // Décadas da competição atual — a Copa vai de 1930, o Brasileirão de 1971.
    var dec = $('pote-decadas');
    if (dec) {
      dec.innerHTML = '<button class="pilula pilula-ativa" data-dec="">Todas</button>' +
        decadasDe(edicoes()).map(function (d) {
          return '<button class="pilula" data-dec="' + d + '">' + d + 's</button>';
        }).join('');
      dec.querySelectorAll('[data-dec]').forEach(function (b) {
        b.onclick = function () {
          _decada = b.dataset.dec;
          dec.querySelectorAll('[data-dec]').forEach(function (o) {
            o.classList.toggle('pilula-ativa', o === b);
          });
          render();
        };
      });
    }

    var busca = $('pote-busca');
    if (busca) {
      busca.value = '';
      busca.oninput = function () { _busca = busca.value; render(); };
    }

    UI.on('pote-cancelar', 'click', fechar);
    UI.on('pote-limpar', 'click', function () { poteLivre.length = 0; render(); });
    UI.on('pote-avancar', 'click', function () {
      if (poteLivre.length < POTE_MIN) return;
      fechar();
      // Com o pote montado, o "Próximo" some e o "Rolar" volta — é a mesma tabela
      // que orquestra os 4 estilos (BOTAO_DO_ESTILO, em draft.js).
      aplicarVisibilidadeEstilo();
      renderResumo();
      atualizarHeaderInfo();
    });

    document.addEventListener('keydown', _esc);
    // Clique no fundo (fora da caixa) fecha.
    ov.onclick = function (ev) { if (ev.target === ov) fechar(); };

    ov.classList.remove('escondida');
    render();
    if (busca) busca.focus();
  }

  // Depois de montado, o pote fica VISÍVEL na tela do jogo — senão você escolhe 16
  // seleções, o modal fecha, e não sobra nenhum rastro do que você montou.
  function renderResumo() {
    var box = $('pote-resumo');
    if (!box) return;
    // Some assim que a formação trava (= o primeiro sorteio rolou). Depois disso o pote
    // não pode mais ser editado — os jogadores já vieram dele. Deixar o "Editar" à vista
    // é oferecer uma ação que não existe.
    var travado = (typeof formacaoTravada !== 'undefined' && formacaoTravada);
    var mostrar = (estiloJogo === 'livre' && poteLivre.length >= POTE_MIN && !travado);
    box.classList.toggle('escondida', !mostrar);
    if (!mostrar) return;
    box.innerHTML =
      '<div class="pote-resumo-topo">' +
        '<span class="jogo-rotulo" style="margin:0">SEU POTE &middot; ' + poteLivre.length + '</span>' +
        '<button id="pote-editar" class="pote-editar" type="button">Editar</button>' +
      '</div>' +
      '<div class="pote-resumo-lista">' +
        poteLivre.map(function (k) {
          var p = k.split('|');
          return '<span class="pote-chip">' +
                   '<span class="pote-chip-escudo" data-escudo="' + UI.esc(p[0]) + '"></span>' +
                   UI.esc(p[0]) + ' <b>' + UI.esc(p[1]) + '</b></span>';
        }).join('') +
      '</div>';
    box.querySelectorAll('[data-escudo]').forEach(pintar);
    UI.on('pote-editar', 'click', abrir);
  }
  window.renderResumoPote = renderResumo;

  function fechar() {
    if (_obs) { _obs.disconnect(); _obs = null; }
    document.removeEventListener('keydown', _esc);
    var ov = $('modal-pote');
    if (ov) ov.classList.add('escondida');
  }

  // ⚠️ SAÍDA DE EMERGÊNCIA. O modal só fechava pelo botão Cancelar — e se o rodapé sair da
  // tela (celular, teclado aberto, conteúdo alto), o usuário fica PRESO e só sai
  // recarregando a página. Esc e clique fora sempre funcionam.
  function _esc(ev) { if (ev.key === 'Escape') fechar(); }

  window.abrirModalPote = abrir;
})();
