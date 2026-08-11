// ============================================================
//  modal-jogar.js — modal de "Jogar agora" com 3 blocos encadeados
//
//  Fluxo (definido com João, ago/2026): ao clicar em "Jogar agora", abre um
//  modal com três blocos que se influenciam em cascata:
//    1. MODO      → Um Jogador / Multijogador
//    2. ESPORTE   → Futebol / Vôlei   (Multijogador só tem Futebol)
//    3. COMPETIÇÃO → competições do esporte escolhido
//  As escolhas já feitas na home vêm PRÉ-SELECIONADAS. Botão "Jogar" confirma
//  e leva à tela de jogo; dá pra fechar sem jogar (X, clique fora ou Esc).
//
//  BOAS PRÁTICAS (caminho híbrido): o modal é uma peça NOVA e limpa, mas NÃO
//  reimplementa a lógica de início de jogo — ele DELEGA para as funções que já
//  existem e são estáveis (selecionarModo p/ solo; escolherOnline p/ multi;
//  jogarAgora/abrirModalOnline p/ iniciar). Assim ganhamos código limpo sem
//  reconstruir a teia de listeners do multiplayer.
//
//  Segue o padrão visual do UI.modalConfirm (overlay + caixa + fechar fora/Esc).
// ============================================================

(function (global) {
  'use strict';

  // Competições por esporte. `id` casa com o data-modo do solo; `online` é o
  // rótulo que escolherOnline() espera (mapeamento solo→online).
  var COMPETICOES_MODAL = {
    futebol: [
      { id: 'libertadores', nome: 'Libertadores',    online: 'Libertadores' },
      { id: 'champions',    nome: 'Champions League', online: 'Champions' },
      { id: 'brasileirao',  nome: 'Brasileirão',      online: 'Brasileirão' },
      { id: 'copa',         nome: 'Copa do Mundo',    online: 'Copa do Mundo' },
      { id: 'premier',      nome: 'Premier League',   online: 'Premier League' },
      { id: 'serie_a',      nome: 'Serie A',          online: 'Serie A' },
      { id: 'laliga',       nome: 'La Liga',          online: 'La Liga' }
    ],
    volei: [
      { id: 'volei_m', nome: 'Mundial Masculino' },
      { id: 'volei_f', nome: 'Mundial Feminino' }
    ]
  };

  function esc(s) { return (typeof UI !== 'undefined' && UI.esc) ? UI.esc(s) : String(s); }

  // Estado corrente do modal (inicia a partir da home).
  var estado = { modo: 'solo', esporte: 'futebol', competicao: 'libertadores' };

  // Descobre o estado inicial a partir do que está selecionado na home.
  function lerEstadoDaHome() {
    // modo: solo/multi (do seletor de abas)
    var abaAtiva = document.querySelector('#modo-seletor .modo-seg.modo-seg-ativa');
    estado.modo = (abaAtiva && abaAtiva.dataset.aba === 'multi') ? 'multi' : 'solo';

    // esporte: do catálogo (esporteAtual), mas multi só permite futebol
    estado.esporte = (typeof esporteAtual !== 'undefined') ? esporteAtual : 'futebol';
    if (estado.modo === 'multi') estado.esporte = 'futebol';

    // competição: a selecionada (modoSelecionado p/ solo), senão a 1ª do esporte
    var comps = COMPETICOES_MODAL[estado.esporte] || [];
    var atual = (typeof modoSelecionado !== 'undefined') ? modoSelecionado : null;
    var existe = comps.some(function (c) { return c.id === atual; });
    estado.competicao = existe ? atual : (comps[0] ? comps[0].id : null);
  }

  // Esportes disponíveis para o modo atual (multi = só futebol).
  function esportesDoModo() {
    var todos = (typeof esportesVisiveis === 'function')
      ? esportesVisiveis().map(function (e) { return { id: e.id, nome: e.nome }; })
      : [{ id: 'futebol', nome: 'Futebol' }];
    if (estado.modo === 'multi') return todos.filter(function (e) { return e.id === 'futebol'; });
    return todos;
  }

  // Monta o HTML de um bloco de opções (botões segmentados/pílulas).
  function blocoHtml(rotulo, itens, idAtivo, dataAttr) {
    var botoes = itens.map(function (it) {
      var ativa = (it.id === idAtivo) ? ' pilula-ativa' : '';
      return '<button type="button" class="pilula' + ativa + '" ' + dataAttr + '="' + esc(it.id) + '">' +
             esc(it.nome) + '</button>';
    }).join('');
    return '<div class="mj-bloco">' +
             '<span class="mj-rotulo">' + esc(rotulo) + '</span>' +
             '<div class="mj-opcoes">' + botoes + '</div>' +
           '</div>';
  }

  // Re-renderiza os blocos de esporte e competição (após mudar modo/esporte).
  function reRender(overlay) {
    var esportes = esportesDoModo();
    // se o esporte atual não é válido no modo, cai pro 1º
    if (!esportes.some(function (e) { return e.id === estado.esporte; })) {
      estado.esporte = esportes[0] ? esportes[0].id : 'futebol';
    }
    var comps = COMPETICOES_MODAL[estado.esporte] || [];
    if (!comps.some(function (c) { return c.id === estado.competicao; })) {
      estado.competicao = comps[0] ? comps[0].id : null;
    }

    var slotEsporte = overlay.querySelector('#mj-slot-esporte');
    var slotComp    = overlay.querySelector('#mj-slot-competicao');
    if (slotEsporte) slotEsporte.innerHTML = blocoHtml('Esporte', esportes, estado.esporte, 'data-mj-esporte');
    if (slotComp)    slotComp.innerHTML    = blocoHtml('Competição', comps, estado.competicao, 'data-mj-comp');
  }

  // Abre o modal. Lê o estado da home e monta os 3 blocos encadeados.
  function abrir() {
    lerEstadoDaHome();

    var overlay = document.createElement('div');
    overlay.className = 'modal-confirm mj-overlay';   // reusa o overlay do design system
    overlay.innerHTML =
      '<div class="modal-confirm-box mj-box" role="dialog" aria-modal="true">' +
        '<button type="button" class="mj-fechar" data-mj="fechar" aria-label="Fechar">&times;</button>' +
        '<p class="modal-confirm-titulo">Jogar</p>' +
        blocoHtml('Modo', [{ id: 'solo', nome: 'Um Jogador' }, { id: 'multi', nome: 'Multijogador' }], estado.modo, 'data-mj-modo') +
        '<div id="mj-slot-esporte"></div>' +
        '<div id="mj-slot-competicao"></div>' +
        '<div class="mj-acoes">' +
          '<button type="button" class="btn-rolar btn-sec" data-mj="fechar">Cancelar</button>' +
          '<button type="button" class="btn-rolar" data-mj="jogar">Jogar &rarr;</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    reRender(overlay);

    function fechar() {
      document.removeEventListener('keydown', onKey);
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }
    function onKey(e) { if (e.key === 'Escape') fechar(); }

    overlay.addEventListener('click', function (e) {
      var t = e.target;
      if (!t) return;

      // fechar (X, Cancelar, clique fora)
      if (t.getAttribute('data-mj') === 'fechar' || t === overlay) return fechar();

      // trocou o MODO → re-renderiza esporte+competição (multi filtra p/ futebol)
      var m = t.getAttribute('data-mj-modo');
      if (m) {
        estado.modo = m;
        marcarAtivo(overlay, 'data-mj-modo', m);
        reRender(overlay);
        return;
      }
      // trocou o ESPORTE → re-renderiza competição
      var es = t.getAttribute('data-mj-esporte');
      if (es) {
        estado.esporte = es;
        reRender(overlay);
        return;
      }
      // trocou a COMPETIÇÃO
      var c = t.getAttribute('data-mj-comp');
      if (c) {
        estado.competicao = c;
        marcarAtivo(overlay, 'data-mj-comp', c);
        return;
      }
      // JOGAR → traduz a escolha para as funções existentes e inicia
      if (t.getAttribute('data-mj') === 'jogar') {
        fechar();
        confirmarEJogar();
      }
    });
    document.addEventListener('keydown', onKey);
  }

  // Marca visualmente o botão ativo dentro de um grupo (data-attr).
  function marcarAtivo(overlay, attr, valor) {
    overlay.querySelectorAll('[' + attr + ']').forEach(function (b) {
      b.classList.toggle('pilula-ativa', b.getAttribute(attr) === valor);
    });
  }

  // Traduz o estado do modal para as funções ESTÁVEIS já existentes e inicia o jogo.
  function confirmarEJogar() {
    var comps = COMPETICOES_MODAL[estado.esporte] || [];
    var comp = comps.filter(function (c) { return c.id === estado.competicao; })[0];
    if (!comp) return;

    if (estado.modo === 'multi') {
      // Multijogador (só futebol): usa escolherOnline + abre o fluxo online.
      if (typeof escolherOnline === 'function') escolherOnline(comp.online, null);
      if (typeof window.abrirModalOnline === 'function') window.abrirModalOnline();
      return;
    }

    // Um Jogador: sincroniza o esporte (se houver troca) e a competição, e joga.
    if (typeof esporteAtual !== 'undefined') esporteAtual = estado.esporte;
    if (typeof window.modoOnlineSelecionado !== 'undefined') window.modoOnlineSelecionado = false;
    if (typeof selecionarModo === 'function') selecionarModo(estado.competicao);
    if (typeof jogarAgora === 'function') jogarAgora();
  }

  // Exposto para o botão "Jogar agora" chamar.
  global.abrirModalJogar = abrir;

})(typeof window !== 'undefined' ? window : this);
