// home.js — ações da tela inicial e estatísticas do rodapé.

function selecionarModo(novoModo) {
  modoSelecionado = novoModo;

  pilulasModo.forEach(function (p) {
    if (p.dataset.modo === novoModo) {
      p.classList.add('pilula-ativa');
    } else {
      p.classList.remove('pilula-ativa');
    }
  });
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
