// home.js — ações da tela inicial e estatísticas do rodapé.

// Mostra a pílula "Orçamento" nas competições single-player onde o modo está habilitado.
// Fase 2: habilitado em todas (Libertadores, Champions, Brasileirão, Copa) — o preço vem da força,
// então a mecânica é idêntica em qualquer uma. Se algum dia uma competição não puder ter Orçamento,
// é só removê-la de ORCAMENTO_COMPETICOES.
var ORCAMENTO_COMPETICOES = ['libertadores', 'champions', 'brasileirao', 'copa'];
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
  var textoEdicoes  = edicoes.length === 1 ? '1 edição' : edicoes.length + ' edições';
  if (spanEdicoes)   spanEdicoes.textContent   = textoEdicoes;
  if (spanJogadores) spanJogadores.textContent = totalJogadores + ' jogadores';
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
