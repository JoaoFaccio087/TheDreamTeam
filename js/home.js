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

  // Mantém o esporteAtual coerente com a competição escolhida. Sem isso, entrar numa
  // competição de vôlei/basquete por certos caminhos deixaria o esporteAtual em 'futebol',
  // e a escalação seria dimensionada com o nº de titulares errado (11 em vez de 5/6).
  if (typeof esporteAtual !== 'undefined' && typeof COMPETICOES !== 'undefined' &&
      COMPETICOES[novoModo]) {
    esporteAtual = COMPETICOES[novoModo].esporte || 'futebol';
  }

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


// Conta as edições distintas e o total de jogadores (futebol + vôlei) para o rodapé.
function calcularEstatisticasFooter() {
  var todos = API.getTodosClubes().slice();
  // Soma também os atletas de vôlei (Mundial + VNL) e basquete (NBA), que ficam em
  // arrays próprios de cada esporte.
  if (typeof DADOS_VOLEI_M !== 'undefined') todos = todos.concat(DADOS_VOLEI_M);
  if (typeof DADOS_VOLEI_F !== 'undefined') todos = todos.concat(DADOS_VOLEI_F);
  if (typeof DADOS_VNL_M !== 'undefined') todos = todos.concat(DADOS_VNL_M);
  if (typeof DADOS_VNL_F !== 'undefined') todos = todos.concat(DADOS_VNL_F);
  if (typeof DADOS_NBA !== 'undefined') todos = todos.concat(DADOS_NBA);
  var edicoes = [];
  todos.forEach(function (d) {
    // futebol/vôlei usam `edicao`; basquete usa `temporada` — conta os dois sem misturar.
    var ano = (d.temporada != null) ? ('t:' + d.temporada) : ('e:' + d.edicao);
    if (edicoes.indexOf(ano) < 0) {
      edicoes.push(ano);
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
  // Nº de esportes habilitados (automático, via catálogo js/esportes.js).
  var spanEsportes = document.getElementById('stat-esportes');
  if (spanEsportes && typeof esportesVisiveis === 'function') {
    var nEsp = esportesVisiveis().length;
    spanEsportes.textContent = nEsp === 1 ? '1 esporte' : nEsp + ' esportes';
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
  var cont  = document.getElementById('pilulas-esporte');
  if (!bloco || !cont) return;

  // Botões no estilo PÍLULA (igual às competições de antes), não segmentado.
  cont.innerHTML = lista.map(function (e) {
    var ativa = (e.id === esporteAtual) ? ' pilula-ativa' : '';
    return '<button type="button" class="pilula' + ativa + '" data-esporte="' +
           UI.esc(e.id) + '">' + UI.esc(e.nome) + '</button>';
  }).join('');

  bloco.classList.remove('escondida');
}

renderSeletorEsporte();

// ── MAPA-VITRINE ────────────────────────────────────────────────────────────
// O mapa da home é uma vitrine: mostra uma formação de futebol (aleatória) ou a
// quadra de vôlei. Troca só quando o usuário clica no seletor de esporte (sem
// loop automático). Só entra em ação com 2+ esportes habilitados.
var FORMACOES_FUTEBOL_AMOSTRA = ['4-3-3','4-4-2','4-2-3-1','3-5-2','4-3-2-1','4-5-1','3-4-3','4-1-2-1-2'];

function _formacaoFutebolAleatoria() {
  return FORMACOES_FUTEBOL_AMOSTRA[Math.floor(Math.random() * FORMACOES_FUTEBOL_AMOSTRA.length)];
}

// Aplica o visual de um esporte ao mapa (fichas + classe da quadra).
function pintarMapaVitrine(idEsporte) {
  var campo = document.getElementById('campo');
  if (!campo) return;
  var ehVolei = (idEsporte === 'volei');
  var ehBasquete = (idEsporte === 'basquete');

  // troca a aparência da quadra (CSS): vôlei ganha .quadra-volei; basquete .quadra-basquete;
  // futebol volta ao normal.
  campo.classList.toggle('quadra-volei', ehVolei);
  campo.classList.toggle('quadra-basquete', ehBasquete);

  // Elementos internos da QUADRA de vôlei (piso, rede no meio, 2 linhas de ataque).
  // Criados quando é vôlei, removidos ao voltar pro futebol. Os elementos do campo de
  // futebol (.campo-linha-meio/.campo-circulo/.campo-area) já existem no HTML e são
  // escondidos via CSS quando .quadra-volei está ativa.
  var elementosQuadra = ['piso', 'rede', 'linha-ataque', 'linha-ataque-baixo'];
  var elementosBasq = ['bq-piso', 'bq-garrafao', 'bq-linha3'];
  var piso = campo.querySelector('.piso');
  var bqPiso = campo.querySelector('.bq-piso');
  if (ehVolei) {
    if (!piso) {
      elementosQuadra.forEach(function (cls) {
        var el = document.createElement('div');
        el.className = cls;
        campo.insertBefore(el, campo.querySelector('.ficha') || null);
      });
    }
  } else if (ehBasquete) {
    if (!bqPiso) {
      elementosBasq.forEach(function (cls) {
        var el = document.createElement('div');
        el.className = cls;
        campo.insertBefore(el, campo.querySelector('.ficha') || null);
      });
    }
  } else if (piso) {
    // voltou pro futebol: remove os elementos da quadra + as fichas-fantasma
    elementosQuadra.forEach(function (cls) {
      var el = campo.querySelector('.' + cls);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
    Array.prototype.forEach.call(campo.querySelectorAll('.ficha-espelho'), function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }
  // limpa elementos de basquete ao sair do basquete
  if (!ehBasquete && bqPiso) {
    elementosBasq.forEach(function (cls) {
      var el = campo.querySelector('.' + cls);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
  }
  // limpa elementos de vôlei ao entrar no basquete
  if (ehBasquete && piso) {
    elementosQuadra.forEach(function (cls) {
      var el = campo.querySelector('.' + cls);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
    Array.prototype.forEach.call(campo.querySelectorAll('.ficha-espelho'), function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  // reconstrói as fichas conforme o nº de posições do esporte, e posiciona
  var formacao = ehVolei ? 'volei' : (ehBasquete ? 'basquete' : _formacaoFutebolAleatoria());
  if (typeof formacoes !== 'undefined' && formacoes[formacao] && typeof UI !== 'undefined') {
    var coords = formacoes[formacao];
    UI.montarCampo(campo, coords.length, { classe: 'ficha' });
    var novasFichas = campo.querySelectorAll('.ficha');
    UI.posicionarCampo(novasFichas, formacao);
    Array.prototype.forEach.call(novasFichas, function (f, i) {
      if (coords[i]) f.textContent = coords[i].grupo;
    });

    // Fichas-fantasma do OUTRO lado (só enfeite): espelha cada posição em torno da
    // rede (top' = 100 - top). Recriadas a cada pintura para acompanhar a formação.
    Array.prototype.forEach.call(campo.querySelectorAll('.ficha-espelho'), function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    if (ehVolei) {
      coords.forEach(function (c) {
        var g = document.createElement('div');
        g.className = 'ficha-espelho';
        g.style.left = c.left + '%';
        g.style.top  = (100 - c.top) + '%';   // espelha verticalmente (rede no meio)
        campo.insertBefore(g, campo.querySelector('.ficha') || null);
      });
    }
  }
}

// Alterna a vitrine para o "próximo" esporte automaticamente, em loop.
// Aplica um esporte à vitrine + sincroniza o seletor. Chamado no clique do
// seletor de esporte (não há mais loop automático — o mapa só troca no clique).
function aplicarEsporteVitrine(idEsporte) {
  if (typeof esporteAtual !== 'undefined') esporteAtual = idEsporte;
  pintarMapaVitrine(idEsporte);

  // sincroniza o botão ativo do seletor (estilo pílula)
  var segs = document.querySelectorAll('#pilulas-esporte .pilula');
  segs.forEach(function (s) {
    s.classList.toggle('pilula-ativa', s.getAttribute('data-esporte') === idEsporte);
  });

  // troca o bloco de competições (futebol vs vôlei vs basquete)
  var blocoFutebol = document.getElementById('modo-aba-solo');
  var blocoVolei   = document.getElementById('modo-aba-solo-volei');
  var blocoBasquete = document.getElementById('modo-aba-solo-basquete');
  var ehVolei = (idEsporte === 'volei');
  var ehBasquete = (idEsporte === 'basquete');
  if (blocoFutebol)  blocoFutebol.classList.toggle('escondida', ehVolei || ehBasquete);
  if (blocoVolei)    blocoVolei.classList.toggle('escondida', !ehVolei);
  if (blocoBasquete) blocoBasquete.classList.toggle('escondida', !ehBasquete);

  // ativa a 1ª competição do esporte
  var blocoAtivo = ehVolei ? blocoVolei : (ehBasquete ? blocoBasquete : blocoFutebol);
  if (blocoAtivo) {
    var primeira = blocoAtivo.querySelector('.pilula[data-modo]');
    if (primeira && typeof selecionarModo === 'function') {
      selecionarModo(primeira.getAttribute('data-modo'));
    }
  }
}

// Compat: mantém o nome antigo apontando para a nova função.
function selecionarEsporte(idEsporte) { aplicarEsporteVitrine(idEsporte); }

// Liga os cliques no seletor de esporte (delegação no container).
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

// Na carga, pinta o mapa no esporte inicial (sem loop). Com 1 esporte, o mapa
// já é o de futebol montado pelo interface.js — não precisa repintar.
(function pintarVitrineInicial() {
  var lista = (typeof esportesVisiveis === 'function') ? esportesVisiveis() : [];
  if (lista.length >= 2) pintarMapaVitrine(esporteAtual);
})();

if (typeof window !== 'undefined') {
  window.selecionarEsporte = selecionarEsporte;
  window.aplicarEsporteVitrine = aplicarEsporteVitrine;
}
