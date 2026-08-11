// home.js — ações da tela inicial e estatísticas do rodapé.

// Mostra a pílula "Orçamento" nas competições single-player onde o modo está habilitado.
// Fase 2: habilitado em todas (Libertadores, Champions, Brasileirão, Copa) — o preço vem da força,
// então a mecânica é idêntica em qualquer uma. Se algum dia uma competição não puder ter Orçamento,
// é só removê-la de ORCAMENTO_COMPETICOES.
var ORCAMENTO_COMPETICOES = Object.keys(COMPETICOES);
function sincronizarPilulaOrcamento() {
  var pilulaOrc = document.querySelector('#jogo-pilulas-estilo .pilula-orcamento');
  if (!pilulaOrc) return;
  var permite = ORCAMENTO_COMPETICOES.indexOf(modoSelecionado) >= 0;
  pilulaOrc.classList.toggle('escondida', !permite);
  if (!permite && typeof estiloJogo !== 'undefined' && estiloJogo === 'orcamento'
      && typeof selecionarEstilo === 'function') {
    selecionarEstilo('classico');
  }
}

function selecionarModo(novoModo) {
  modoSelecionado = novoModo;

  pilulasModo.forEach(function (p) {
    if (p.dataset.modo === novoModo) {
      p.classList.add('pilula-ativa');
    } else {
      p.classList.remove('pilula-ativa');
    }
  });

  sincronizarPilulaOrcamento();
}

function selecionarFormacaoAmostra(nomeFormacao) {
  formacaoAmostra = nomeFormacao;

  pilulasFormacao.forEach(function (p) {
    if (p.dataset.formacaoAmostra === nomeFormacao) {
      p.classList.add('pilula-ativa');
    } else {
      p.classList.remove('pilula-ativa');
    }
  });

  posicionarFichas(nomeFormacao);
}

function jogarAgora() {
  aplicarTema(modoSelecionado);
  iniciarTelaJogo();
  mostrarTela(telaJogo);
}

function voltarHome() {
  removerTema();
  mostrarTela(telaInicial);
}


// Conta as edições distintas e o total de jogadores em DADOS para o rodapé da home.
function calcularEstatisticasFooter() {
  var todos = API.getTodosClubes();
  var edicoes = [];
  todos.forEach(function (d) {
    if (edicoes.indexOf(d.edicao) < 0) {
      edicoes.push(d.edicao);
    }
  });

  var totalJogadores = todos.reduce(function (soma, d) {
    return soma + d.jogadores.length;
  }, 0);

  var spanEdicoes   = document.getElementById('stat-edicoes');
  var spanJogadores = document.getElementById('stat-jogadores');
  var spanComps     = document.getElementById('stat-competicoes');
  var textoEdicoes  = edicoes.length === 1 ? '1 edição' : edicoes.length + ' edições';
  if (spanEdicoes)   spanEdicoes.textContent   = textoEdicoes;
  if (spanJogadores) spanJogadores.textContent = totalJogadores + ' jogadores';
  // Nº de competições vem de COMPETICOES (fonte da verdade), então nunca defasa ao
  // adicionar uma nova (Premier, Serie A, etc.).
  if (spanComps && typeof COMPETICOES !== 'undefined') {
    var nComps = Object.keys(COMPETICOES).length;
    spanComps.textContent = nComps === 1 ? '1 competição' : nComps + ' competições';
  }
}

calcularEstatisticasFooter();


// ── FASE 5: seletor de ESPORTE na home ────────────────────────────────────────
// Só renderiza quando houver MAIS DE UM esporte habilitado em js/esportes.js.
// Hoje (só futebol) a função sai na primeira linha e a home fica idêntica.
function renderSeletorEsporte() {
  if (typeof esportesVisiveis !== 'function') return;

  var lista = esportesVisiveis();
  if (!lista || lista.length < 2) return;   // ← nada muda enquanto só existir futebol

  var bloco = document.getElementById('home-esporte');
  var pilulas = document.getElementById('pilulas-esporte');
  if (!bloco || !pilulas) return;

  pilulas.innerHTML = lista.map(function (e) {
    var ativa = (e.id === esporteAtual) ? ' pilula-ativa' : '';
    return '<button type="button" class="pilula' + ativa + '" data-esporte="' +
           UI.esc(e.id) + '">' + UI.esc(e.nome) + '</button>';
  }).join('');

  bloco.classList.remove('escondida');
}

// Roda na carga: com um esporte só, é um no-op.
renderSeletorEsporte();

// Troca de esporte na home: ao clicar numa pílula de esporte, atualiza o esporte
// ativo e mostra o bloco de competições correspondente (escondendo o do outro).
// Enquanto só houver futebol habilitado, nada disto é acionável (o seletor nem
// aparece), então o comportamento atual fica intocado.
function selecionarEsporte(idEsporte) {
  if (typeof esporteAtual !== 'undefined') esporteAtual = idEsporte;

  // marca a pílula de esporte ativa
  var pilulasEsp = document.querySelectorAll('#pilulas-esporte .pilula');
  pilulasEsp.forEach(function (p) {
    p.classList.toggle('pilula-ativa', p.getAttribute('data-esporte') === idEsporte);
  });

  // mostra o bloco de competições do esporte escolhido; esconde os demais.
  // Convenção: futebol usa #modo-aba-solo; vôlei usa #modo-aba-solo-volei.
  var blocoFutebol = document.getElementById('modo-aba-solo');
  var blocoVolei   = document.getElementById('modo-aba-solo-volei');
  var ehVolei = (idEsporte === 'volei');
  if (blocoFutebol) blocoFutebol.classList.toggle('escondida', ehVolei);
  if (blocoVolei)   blocoVolei.classList.toggle('escondida', !ehVolei);

  // seleciona a 1ª competição do esporte escolhido (ativa a pílula e o modo)
  var blocoAtivo = ehVolei ? blocoVolei : blocoFutebol;
  if (blocoAtivo) {
    var primeira = blocoAtivo.querySelector('.pilula[data-modo]');
    if (primeira && typeof selecionarModo === 'function') {
      selecionarModo(primeira.getAttribute('data-modo'));
    }
  }
}

// Liga os cliques nas pílulas de esporte (delegação simples no container).
(function ligarSeletorEsporte() {
  var cont = document.getElementById('pilulas-esporte');
  if (!cont) return;
  cont.addEventListener('click', function (ev) {
    var alvo = ev.target.closest ? ev.target.closest('.pilula') : null;
    if (!alvo) return;
    var id = alvo.getAttribute('data-esporte');
    if (id) selecionarEsporte(id);
  });
})();

if (typeof window !== 'undefined') {
  window.selecionarEsporte = selecionarEsporte;
}
