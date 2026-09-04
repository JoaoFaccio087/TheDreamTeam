/* ═══════════════════════════════════════════════════════════════════
   campanha-basquete-ui.js — camada de UI/fluxo da campanha de BASQUETE (NBA).

   Extraído de campanha.js (que estava com 2467 linhas) para reduzir o
   monolito. Contém: força/times de basquete, cards de partida, mini-quadra,
   abas (Simulação/Classificação/Playoff), bracket dos playoffs, fluxo de
   jogar/pular, e salvamento. A LÓGICA pura da liga fica em js/campanha-
   basquete.js (var CampanhaBasquete); a ANIMAÇÃO em js/animacao-basquete.js.

   Continua usando as globais compartilhadas do jogo (campanhaBasqueteAtual,
   escalacao, nomeDoTime, partidaIdBasquete, modoSelecionado, velocidade
   Simulacao, Escudos, API, COMPETICOES, UI, mostrarBotaoResumo…) — como
   todo o projeto é carregado via <script> no escopo global, a separação em
   arquivo não muda o acesso a elas. Carrega DEPOIS de campanha.js no index.
   ═══════════════════════════════════════════════════════════════════ */

// Força média de um time de basquete (0-100), média das forças dos jogadores.
function forcaTimeBasquete(t) {
  if (!t || !t.jogadores || !t.jogadores.length) return 80;
  var s = 0;
  for (var i = 0; i < t.jogadores.length; i++) s += (+t.jogadores[i].forca || 0);
  return s / t.jogadores.length;
}

// Times da competição de basquete atual (filtra os dados pela "competicao" = 'NBA').
function timesDaCompeticaoBasquete() {
  var filtro = COMPETICOES[modoSelecionado].dados;   // 'NBA'
  var fonte = [];
  if (typeof DADOS_NBA !== 'undefined') fonte = fonte.concat(DADOS_NBA);
  return fonte.filter(function (c) { return c.competicao === filtro; });
}

// Acumula as estatísticas de UMA partida de basquete nas variáveis globais do resumo.
// Basquete tem 3 estatísticas (pontos/rebotes/assistências); guardamos pontos em `gols`
// e assistências em `asis` (compat com o resumo do vôlei/futebol), e rebotes num mapa
// dedicado (statsRebotesBasquete) que o resumo do basquete lê à parte.
var statsRebotesBasquete = {};
function acumularStatsBasquete(roteiro, pontosVoce, pontosAdv) {
  if (typeof campanhaPartidas === 'undefined') return;
  campanhaPartidas++;
  campanhaGF += pontosVoce;   // "GF/GA" do resumo = pontos feitos/sofridos
  campanhaGA += pontosAdv;
  if (pontosVoce > pontosAdv) campanhaVitorias++; else campanhaDerrotas++;

  var meusNomes = {};
  escalacao.forEach(function (j) { if (j) meusNomes[j.nome] = true; });
  var stats = AnimacaoBasquete.coletarEstatisticas(roteiro);
  stats.forEach(function (s) {
    if (!meusNomes[s.nome]) return;   // só o meu time
    if (!statsJogadores[s.nome]) statsJogadores[s.nome] = { gols: 0, asis: 0 };
    statsJogadores[s.nome].gols += s.pontos;         // pontos
    statsJogadores[s.nome].asis += s.assistencias;   // assistências
    if (!statsRebotesBasquete[s.nome]) statsRebotesBasquete[s.nome] = 0;
    statsRebotesBasquete[s.nome] += s.rebotes;       // rebotes (à parte)
  });

  registrarFlagsBasquete(roteiro, pontosVoce, pontosAdv, stats, meusNomes);
}

// Eventos finos da partida de basquete p/ as conquistas — ver a nota gêmea no vôlei.
// Duplo/triplo-duplo com as 3 categorias que o motor produz (pts/reb/ast).
function registrarFlagsBasquete(roteiro, pontosVoce, pontosAdv, stats, meusNomes) {
  if (typeof campanhaFlags === 'undefined' || !campanhaFlags) return;
  var f = campanhaFlags;

  stats.forEach(function (s) {
    if (!meusNomes[s.nome]) return;
    if (s.pontos > f.bqMaxPontosJogo) f.bqMaxPontosJogo = s.pontos;
    if (s.assistencias > f.bqMaxAssistJogo) f.bqMaxAssistJogo = s.assistencias;
    var duplas = [s.pontos, s.rebotes, s.assistencias].filter(function (n) { return n >= 10; }).length;
    if (duplas >= 2) f.bqDuploDuplo = true;
    if (duplas >= 3) f.bqTriploDuplo = true;
  });

  if (pontosVoce > f.bqMaiorPontuacao) f.bqMaiorPontuacao = pontosVoce;

  if (pontosVoce > pontosAdv) {
    if ((pontosVoce - pontosAdv) > f.bqMaiorVantagem) f.bqMaiorVantagem = pontosVoce - pontosAdv;
    if (roteiro && roteiro.prorrogacao) f.bqVenciProrrogacao = true;
  }
}

// Monta a mini meia-quadra com os 5 titulares do MEU time posicionados (para exibir
// dentro do card durante o jogo). Espelha o mapa de escalação da home/perfil: usa as
// coordenadas de formacoes['basquete'] na MESMA ordem de escalacao/codigosFormacao.
function montarMiniQuadraBasquete() {
  var coords = (typeof formacoes !== 'undefined' && formacoes['basquete']) ? formacoes['basquete'] : [];
  var cods = (typeof codigosFormacao !== 'undefined' && codigosFormacao['basquete']) ? codigosFormacao['basquete'] : [];
  if (!coords.length) return '';

  var fichas = coords.map(function (c, i) {
    var jog = escalacao[i] || null;
    var cod = (jog && jog.codigo) || cods[i] || c.grupo;
    var nome = jog ? jog.nome : '\u2014';
    var vazio = jog ? '' : ' pbq-ficha-vazia';
    return '<div class="pbq-ficha' + vazio + '" style="left:' + c.left + '%;top:' + c.top + '%">' +
             '<span class="pbq-cod">' + cod + '</span>' +
             '<span class="pbq-nome">' + nome + '</span>' +
           '</div>';
  }).join('');

  return '<div class="pbq-mapa">' +
           '<div class="pbq-quadra quadra-basquete">' +
             '<div class="bq-piso"></div><div class="bq-garrafao"></div><div class="bq-linha3"></div>' +
             fichas +
           '</div>' +
         '</div>';
}

// Cria o card visual de uma partida de basquete (casca reaproveitada do futebol/vôlei).
function criarCardPartidaBasquete(id, adversario, fase) {
  if (id > 1) {
    var anterior = document.getElementById('partida-basquete-' + (id - 1));
    if (anterior) anterior.classList.remove('expandido');
  }
  var div = document.createElement('div');
  div.className = 'partida-card partida-basquete expandido';
  div.id = 'partida-basquete-' + id;

  var forcaAdv = Math.round(forcaTimeBasquete(adversario));
  var escudo = (typeof Escudos !== 'undefined' && Escudos.porNomeSeModo)
    ? (function () { var s = Escudos.porNomeSeModo(adversario.clube, modoSelecionado); return s ? '<span class="partida-escudo">' + s + '</span>' : ''; })()
    : '';

  div.innerHTML =
    '<div class="partida-fase">' + fase + '</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + escudo + adversario.clube + '</span>' +
        '<span class="partida-adversario-ano">NBA \u00B7 ' + (adversario.temporada || '') + '</span>' +
        '<span class="partida-adversario-forca">Força ' + forcaAdv + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<span class="pb-placar partida-placar">0 \u2013 0</span>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="pb-status"></div>' +
      montarMiniQuadraBasquete() +
      '<div class="pb-quartos"></div>' +
      '<div class="pb-resumo"></div>' +
    '</div>';

  var hist = document.getElementById('historico-jogos');
  // Mais recente no TOPO + limite com "Ver mais" (UI.histInserir) — ver nota no vôlei.
  if (hist) UI.histInserir(hist, div);
  // Clicar no cabeçalho expande/recolhe (ver detalhes de um jogo passado) — igual ao futebol.
  var hdrB = div.querySelector('.partida-header');
  if (hdrB) hdrB.addEventListener('click', function () { div.classList.toggle('expandido'); });
  return div;
}

// Mostra o CHAVEAMENTO (bracket) dos playoffs da sua conferência + as Finais da NBA,
// em colunas por fase. Cada confronto é um par de times; destaca você e os vencedores.
// Lê camp.playoff.bracketConf (preenchido pelo motor). Recria a cada avanço de fase.
function mostrarBracketPlayoffs(camp) {
  // Sem playoff ainda (você não chegou lá): mostra um AVISO em vez de deixar a aba vazia —
  // igual ao aviso da aba Mata-a-Mata do vôlei.
  if (!camp || !camp.playoff || !camp.playoff.bracketConf) {
    var painelVazio = document.getElementById('chave-copa');
    if (painelVazio) {
      // Se a temporada regular já acabou e você não classificou, avisa que foi eliminado.
      var acabouRegular = camp && camp.rodadaAtual >= (camp.calendario ? camp.calendario.length : 0);
      var classificou = camp && (typeof CampanhaBasquete !== 'undefined') &&
                         CampanhaBasquete.voceClassificouLigaNBA && CampanhaBasquete.voceClassificouLigaNBA(camp);
      if (acabouRegular && !classificou) {
        painelVazio.innerHTML =
          '<div class="mata-bloqueada">' +
            '<div class="mata-bloqueada-icone">✕</div>' +
            '<p class="mata-bloqueada-titulo">Você não avançou aos playoffs</p>' +
            '<p class="mata-bloqueada-sub">Terminou a temporada regular fora do top 8 da conferência. Confira a classificação na aba anterior.</p>' +
          '</div>';
      } else {
        painelVazio.innerHTML =
          '<div class="mata-bloqueada">' +
            '<div class="mata-bloqueada-icone">🔒</div>' +
            '<p class="mata-bloqueada-titulo">Playoffs ainda não liberados</p>' +
            '<p class="mata-bloqueada-sub">Termine a temporada regular no top 8 da sua conferência para disputar os playoffs.</p>' +
          '</div>';
      }
    }
    return;
  }
  var po = camp.playoff;

  function nomeT(t) {
    if (!t) return '<span class="bkt-vazio">A definir</span>';
    return t.voce ? nomeDoTime : t.nome;
  }
  // `placar` = vitórias do time NA SÉRIE (ex.: 4). Fica à direita do nome, destacado,
  // como nas chaves de playoff de verdade: sem isso a chave dizia quem passou mas não
  // COMO — o João precisava abrir os cards um a um para descobrir que a série foi 4-3.
  function celula(t, ehVenc, placar) {
    var cls = 'bkt-time' + (t && t.voce ? ' bkt-voce' : '') + (ehVenc ? ' bkt-venc' : '');
    var esc = (t && typeof Escudos !== 'undefined' && Escudos.porTime) ? (Escudos.porTime(t, modoSelecionado) || '') : '';
    var escHTML = esc ? '<span class="bkt-escudo">' + esc + '</span>' : '';
    var plHTML = (placar != null && t)
      ? '<span class="bkt-placar' + (ehVenc ? ' bkt-placar-venc' : '') + '">' + placar + '</span>' : '';
    return '<div class="' + cls + '">' + escHTML +
             '<span class="bkt-nome">' + nomeT(t) + '</span>' + plHTML +
           '</div>';
  }
  function jogoHTML(j) {
    var vencA = j.vencedor && j.a && (j.vencedor === j.a);
    var vencB = j.vencedor && j.b && (j.vencedor === j.b);
    return '<div class="bkt-jogo' + (j.seuJogo ? ' bkt-seujogo' : '') + '">' +
             celula(j.a, vencA, j.placarA) + celula(j.b, vencB, j.placarB) +
           '</div>';
  }
  var nomesFase = po.fases.map(function (f) { return f.nome; });

  // Colunas de uma conferência. `espelhado` inverte a ordem (a outra conf cresce da
  // direita para o centro), para o layout ficar simétrico em torno das Finais.
  function colunasDe(bracket, espelhado) {
    var cols = bracket.map(function (rodada, ri) {
      var titulo = tituloCurto(nomesFase[ri] || ('Rodada ' + (ri + 1)));
      return '<div class="bkt-coluna">' +
               '<div class="bkt-coluna-tit">' + titulo + '</div>' +
               rodada.map(jogoHTML).join('') +
             '</div>';
    });
    return (espelhado ? cols.reverse() : cols).join('');
  }

  // Finais da NBA no centro (você — se campeão de conf — vs campeão da outra conf).
  var meuLado = { voce: true };
  var outro = po.finalistaOutraConf;
  var euCampeaoConf = po.faseIdx >= 0 && po.fases[po.faseIdx] && po.fases[po.faseIdx].finalNBA;
  var finalHTML = '';

  // ELIMINADO: o motor completa o resto da chave (completarBracketNBA) e grava
  // `po.campeaoTorneio`. Sem desenhar isto, a aba Playoff ficava parada na fase em que
  // você caiu — parecia TRAVADA, sem dizer quem levou o título.
  if (!euCampeaoConf && po.campeaoTorneio && po.bracketFinal && po.bracketFinal[0]) {
    var f = po.bracketFinal[0];
    finalHTML =
      '<div class="bkt-coluna bkt-coluna-final">' +
        '<div class="bkt-coluna-tit">Finais NBA</div>' +
        '<div class="bkt-jogo bkt-jogo-final">' +
          celula(f.a, f.vencedor === f.a, f.placarA) +
          celula(f.b, f.vencedor === f.b, f.placarB) +
        '</div>' +
        '<div class="bkt-coluna-tit" style="margin-top:10px">Campeão</div>' +
        '<div class="bkt-jogo bkt-jogo-final bkt-campeao">' +
          celula(po.campeaoTorneio, true) +
        '</div>' +
      '</div>';
  } else if (euCampeaoConf || outro) {
    var vencFinal = null;
    var finalHist = (po.historico || []).filter(function (h) { return h.fase === 'FINAIS DA NBA'; })[0];
    if (finalHist) vencFinal = finalHist.venceu ? meuLado : outro;
    finalHTML =
      '<div class="bkt-coluna bkt-coluna-final">' +
        '<div class="bkt-coluna-tit">Finais NBA</div>' +
        '<div class="bkt-jogo bkt-seujogo bkt-jogo-final">' +
          celula(meuLado, vencFinal === meuLado) +
          celula(outro, vencFinal === outro) +
        '</div>' +
      '</div>';
  }

  // Nomes das conferências (novo formato de liga não tem camp.conferencias; deriva do id).
  function nomeConfId(id) {
    if (camp.conferencias && camp.conferencias[id]) return camp.conferencias[id].nome;
    return (id === 'LESTE') ? 'Leste' : 'Oeste';
  }
  var nomeSua = nomeConfId(camp.suaConf);
  var nomeOutra = nomeConfId(po.outraConf);

  var html = '<div class="bkt-wrap">' +
    '<div class="bkt-titulo">Chaveamento dos Playoffs</div>' +
    '<div class="bkt-conf-rotulos">' +
      '<span class="bkt-rot bkt-rot-sua">Conf. ' + nomeSua + ' (você)</span>' +
      '<span class="bkt-rot">Conf. ' + nomeOutra + '</span>' +
    '</div>' +
    '<div class="bkt-colunas">' +
      colunasDe(po.bracketConf, false) +
      finalHTML +
      colunasDe(po.bracketOutra || [], true) +
    '</div>' +
  '</div>';

  // Renderiza o chaveamento no painel da aba Playoff (#chave-copa).
  var painelChave = document.getElementById('chave-copa');
  if (painelChave) {
    painelChave.innerHTML = html;
  }
}

// Encurta o nome da fase para caber na coluna do bracket.
function tituloCurto(nome) {
  return nome
    .replace('PRIMEIRA RODADA', '1ª Rodada')
    .replace('SEMIFINAL DE CONFERÊNCIA', 'Semifinal')
    .replace('FINAL DE CONFERÊNCIA', 'Final Conf.')
    .replace('FINAIS DA NBA', 'Finais NBA');
}

// Mostra a classificação da SUA conferência (tabela V/D/saldo), integrada no card.
// Renderiza a classificação das DUAS conferências no painel dedicado (aba Classificação).
function mostrarClassificacaoConf(camp) {
  var alvo = document.getElementById('nba-classificacao');
  if (!alvo) return;   // painel ainda não criado (montado em prepararAbasBasquete)

  function tabelaConf(confId, nomeConf) {
    var cls;
    if (camp.liga && CampanhaBasquete.classificacaoDaConf) {
      cls = CampanhaBasquete.classificacaoDaConf(camp, confId);
    } else {
      cls = CampanhaBasquete.classificacaoConf(camp, confId).map(function (l) { return l.time; });
    }
    var classificam = camp.classificamConf | 0;
    var linhas = cls.map(function (t, i) {
      var saldo = (t.pf - t.pa >= 0 ? '+' : '') + (t.pf - t.pa);
      var classe = (t.voce ? 'grupo-voce' : '') + (i < classificam ? ' grupo-classifica' : '');
      var nome = t.voce ? nomeDoTime : t.nome;
      // Clube + ano separados: o ano fica entre parênteses numa fonte menor/apagada, para o
      // nome não ficar tão longo e a tabela não ficar apertada (feedback do João).
      var nomeHTML;
      if (!t.voce && t.clube && t.temporada) {
        nomeHTML = '<span class="grupo-nome">' + t.clube +
                   ' <span class="grupo-ano">(' + t.temporada + ')</span></span>';
      } else {
        nomeHTML = '<span class="grupo-nome">' + nome + '</span>';
      }
      var esc = (typeof Escudos !== 'undefined' && Escudos.porTime) ? (Escudos.porTime(t, modoSelecionado) || '') : '';
      var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
      return '<tr class="' + classe + '">' +
               '<td class="grupo-pos">' + (i + 1) + '</td>' +
               '<td class="grupo-time">' + escHTML + nomeHTML + '</td>' +
               '<td class="grupo-num">' + t.j + '</td>' +
               '<td class="grupo-num">' + t.v + '</td>' +
               '<td class="grupo-num">' + t.d + '</td>' +
               '<td class="grupo-num">' + saldo + '</td>' +
             '</tr>';
    }).join('');
    return '<div class="grupo-tabela">' +
             '<p class="grupo-tabela-titulo">Conferência ' + nomeConf + '</p>' +
             '<table class="fl-tabela">' +
               '<thead><tr><th></th><th>Time</th><th>J</th><th>V</th><th>D</th><th>Saldo</th></tr></thead>' +
               '<tbody>' + linhas + '</tbody>' +
             '</table>' +
           '</div>';
  }

  var suaPrimeiro = (camp.suaConf === 'LESTE');
  var htmlL = tabelaConf('LESTE', 'Leste');
  var htmlO = tabelaConf('OESTE', 'Oeste');
  alvo.innerHTML =
    '<p class="nba-classif-legenda">Top ' + (camp.classificamConf | 0) + ' de cada conferência avançam aos playoffs</p>' +
    '<div class="nba-classif-grid">' + (suaPrimeiro ? htmlL + htmlO : htmlO + htmlL) + '</div>';
}

// Prepara/exibe as abas do basquete: Simulação, Classificação, Playoff.
function prepararAbasBasquete() {
  var simTabs = document.getElementById('sim-tabs');
  var tabClassif = document.getElementById('sim-tab-classif');
  var tabChave = document.getElementById('sim-tab-chave');
  if (simTabs) simTabs.classList.remove('escondida');
  if (tabClassif) tabClassif.classList.remove('escondida');
  if (tabChave) tabChave.textContent = 'Playoff';

  // Cria o painel de classificação (dentro de sim-painel-jogos, escondido por padrão) se
  // ainda não existir.
  var painelJogos = document.getElementById('sim-painel-jogos');
  if (painelJogos && !document.getElementById('nba-classif-painel')) {
    var d = document.createElement('div');
    d.id = 'nba-classif-painel';
    d.className = 'nba-classif-painel escondida';
    d.innerHTML = '<div id="nba-classificacao"></div>';
    painelJogos.appendChild(d);
  }
  selecionarAbaBasquete('jogos');
}

// Alterna entre as 3 abas do basquete (Simulação / Classificação / Playoff).
function selecionarAbaBasquete(qual) {
  var histJogos   = document.getElementById('historico-jogos');
  var painelClass = document.getElementById('nba-classif-painel');
  var painelChave = document.getElementById('chave-copa');
  var tabJogos    = document.getElementById('sim-tab-jogos');
  var tabClassif  = document.getElementById('sim-tab-classif');
  var tabChave    = document.getElementById('sim-tab-chave');
  var tabelaBras  = document.getElementById('tabela-brasileirao');

  if (tabelaBras) tabelaBras.classList.add('escondida');   // a tabela do brasileirão não é usada aqui

  var mostraJogos  = (qual === 'jogos');
  var mostraClass  = (qual === 'classif');
  var mostraChave  = (qual === 'chave');

  if (histJogos)   histJogos.classList.toggle('escondida', !mostraJogos);
  if (painelClass) painelClass.classList.toggle('escondida', !mostraClass);
  if (painelChave) painelChave.classList.toggle('escondida', !mostraChave);

  if (tabJogos)   tabJogos.classList.toggle('sim-tab-ativa', mostraJogos);
  if (tabClassif) tabClassif.classList.toggle('sim-tab-ativa', mostraClass);
  if (tabChave)   tabChave.classList.toggle('sim-tab-ativa', mostraChave);

  if (mostraClass && campanhaBasqueteAtual) mostrarClassificacaoConf(campanhaBasqueteAtual);
  // Sempre chama (mesmo sem playoff): a função mostra o AVISO de bloqueio/eliminação quando
  // ainda não há chave, em vez de deixar a aba vazia.
  if (mostraChave && campanhaBasqueteAtual) mostrarBracketPlayoffs(campanhaBasqueteAtual);

  // Amplia a largura da tela na aba de classificação (2 conferências lado a lado).
  var telaSim = document.getElementById('tela-simulacao');
  if (telaSim) telaSim.classList.toggle('nba-classif-ampla', mostraClass);
}

// Inicia (ou continua) a campanha da NBA e joga a próxima partida.
// Inicia (ou continua) a campanha da NBA e joga a próxima partida.
function iniciarPartidaBasquete() {
  if (typeof CampanhaBasquete === 'undefined' || typeof AnimacaoBasquete === 'undefined') {
    console.warn('[nba] módulos do basquete não carregados'); return;
  }

  // Monta a campanha na 1ª partida: LIGA de pontos corridos (82/40/20 jogos por tamanho),
  // com times de VÁRIAS EDIÇÕES misturadas (como o futebol), divididos em 2 conferências.
  if (!campanhaBasqueteAtual) {
    var todos = timesDaCompeticaoBasquete();   // TODAS as edições (não filtra uma só)
    if (!todos.length) { console.warn('[nba] sem times para', modoSelecionado); return; }

    var voceMonta = { nome: nomeDoTime, forca: forcaDoTime(), jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var tamNBA = (typeof tamanhoTemporadaNBA !== 'undefined' && tamanhoTemporadaNBA) ? tamanhoTemporadaNBA : 'regular';
    campanhaBasqueteAtual = CampanhaBasquete.montarLigaNBA(todos, voceMonta, forcaTimeBasquete, tamNBA);
    prepararAbasBasquete();
    mostrarClassificacaoConf(campanhaBasqueteAtual);
    // Estado inicial do botão "Pular tudo" (limpa escopo de playoffs de campanha anterior).
    var bpIni = document.getElementById('btn-pular-tudo');
    if (bpIni) { bpIni.textContent = 'Pular tudo'; delete bpIni.dataset.escopo; bpIni.classList.remove('escondida'); }
  }

  var camp = campanhaBasqueteAtual;
  if (camp.rodadaAtual >= camp.calendario.length) {
    // Acabou o calendário com rodadas ainda na fila (você não jogava nas últimas):
    // resolve agora, senão esses jogos nunca entrariam na tabela.
    drenarRodadasPendentesNBA(camp);
    mostrarClassificacaoConf(camp);
    return;
  }

  var conf = CampanhaBasquete.seuConfrontoNaRodada(camp, camp.rodadaAtual);
  if (!conf) {
    // Rodada sem jogo SEU: NÃO resolve os bastidores agora — enfileira. Eles entram na
    // tabela junto com o resultado da sua próxima partida (ver drenarRodadasPendentesNBA).
    if (!camp.rodadasPendentes) camp.rodadasPendentes = [];
    camp.rodadasPendentes.push(camp.rodadaAtual);
    camp.rodadaAtual++;
    return iniciarPartidaBasquete();
  }
  var advRegistro = camp.tabela[conf.advIdx];
  var adversario = advRegistro.clubeRef;

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoBasquete.prepararPartida(meuTime, advTime);

  // As estatísticas NÃO são acumuladas aqui: o commit acontece no onResultado, quando a
  // partida acaba. Antes, a tabela de estatísticas já mostrava os pontos no 1º quarto.

  var rodadaNum = camp.rodadaAtual + 1;
  var faseLabel = 'Rodada ' + rodadaNum + '/' + camp.calendario.length + ' \u00B7 NBA';
  var idCard = partidaIdBasquete + 1;
  partidaIdBasquete = idCard;
  var advComAno = adversario.clube + ' ' + adversario.temporada;
  var card = criarCardPartidaBasquete(idCard, adversario, faseLabel, advComAno);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoBasquete.animar({
    elCard: card, roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    // COMMIT: a partida só entra na tabela e nas estatísticas AGORA, no fim da animação.
    // Junto entram os bastidores: as rodadas pendentes (em que você não jogou) e os demais
    // jogos DESTA rodada. Assim os outros times nunca aparecem à frente do seu jogo.
    // Dispara também quando o "Pular tudo" finaliza esta partida — nada deixa de contar.
    onResultado: function () {
      acumularStatsBasquete(roteiro, roteiro.pontosA, roteiro.pontosB);
      CampanhaBasquete.registrarResultadoNBA(camp.tabela[0], advRegistro, roteiro.pontosA, roteiro.pontosB);
      drenarRodadasPendentesNBA(camp);
      CampanhaBasquete.resolverDemaisJogosNBA(camp, camp.rodadaAtual, placarBastidoresBasquete);
      camp.rodadaAtual++;
      mostrarClassificacaoConf(camp);
    },
    onFim: function () {
      if (btn) btn.disabled = false;

      var acabou = (camp.rodadaAtual >= camp.calendario.length);
      if (btn) {
        if (acabou) {
          salvarCampanhaBasquete(camp);
          if (CampanhaBasquete.voceClassificouLigaNBA(camp)) {
            CampanhaBasquete.montarPlayoffsLigaNBA(camp);
            mostrarBracketPlayoffs(camp);
            btn.innerHTML = 'Iniciar Mata-a-Mata \u25BA';
            acaoBotao = 'playoffs-nba';
          } else {
            btn.innerHTML = 'Montar Novo Time \u25BA';
            acaoBotao = 'novo-time';
          }
        } else {
          btn.innerHTML = 'Próximo Jogo \u25BA';
          acaoBotao = 'proximo-nba';
        }
      }
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' && !acabou) {
        setTimeout(function () { iniciarPartidaBasquete(); }, 700);
      }
    }
  });
}

// Placar de bastidores para jogos que não são seus (instantâneo, por força + sorte).
// Resolve os bastidores das rodadas que ficaram PENDENTES — aquelas em que VOCÊ não
// tinha jogo. Elas não são mais resolvidas na hora em que são puladas: ficam na fila e
// só entram na tabela junto com o resultado da sua partida seguinte. Sem isso, os
// adversários apareciam permanentemente uma rodada à frente de você na classificação
// (bug do feedback: "os outros times já aparecem com o jogo seguinte").
function drenarRodadasPendentesNBA(camp) {
  if (!camp || !camp.rodadasPendentes || !camp.rodadasPendentes.length) return;
  camp.rodadasPendentes.forEach(function (r) {
    CampanhaBasquete.resolverDemaisJogosNBA(camp, r, placarBastidoresBasquete);
  });
  camp.rodadasPendentes = [];
}

// Deixa as pílulas de TAMANHO DA TEMPORADA e o texto de descrição em sincronia com o
// estado (`tamanhoTemporadaNBA`). Fonte da verdade = CampanhaBasquete.TAMANHOS_TEMPORADA,
// nunca o texto estático do index.html — era esse hardcode que fazia o basquete abrir
// mostrando "Regular" selecionado com a contagem de jogos de outro preset.
function sincronizarTamanhoTemporadaNBA() {
  var bloco = document.getElementById('jogo-tamanho-bloco');
  if (!bloco || typeof CampanhaBasquete === 'undefined' || !CampanhaBasquete.TAMANHOS_TEMPORADA) return;

  var id = (typeof tamanhoTemporadaNBA !== 'undefined' && tamanhoTemporadaNBA) ? tamanhoTemporadaNBA : 'regular';
  var preset = CampanhaBasquete.TAMANHOS_TEMPORADA[id];
  if (!preset) { id = 'regular'; preset = CampanhaBasquete.TAMANHOS_TEMPORADA.regular; }
  if (!preset) return;

  bloco.querySelectorAll('.pilula').forEach(function (b) {
    b.classList.toggle('pilula-ativa', b.dataset.tamanho === id);
  });
  var desc = document.getElementById('jogo-tamanho-desc');
  if (desc) desc.textContent = preset.desc;
}

function placarBastidoresBasquete(A, B) {
  var fa = A.forca + (Math.random() - 0.5) * 16;
  var fb = B.forca + (Math.random() - 0.5) * 16;
  var base = 104;
  var pa = Math.round(base + (fa - fb) * 0.6 + (Math.random() - 0.5) * 10);
  var pb = Math.round(base + (fb - fa) * 0.6 + (Math.random() - 0.5) * 10);
  if (pa === pb) pa += (Math.random() < 0.5 ? 1 : -1) * 2;
  return { a: Math.max(80, pa), b: Math.max(80, pb) };
}

// Joga um confronto de PLAYOFF (primeira rodada → semi conf → final conf → Finais NBA).
function iniciarPartidaPlayoffNBA() {
  var camp = campanhaBasqueteAtual;
  if (!camp || !camp.playoff) return;
  var adversario_reg = CampanhaBasquete.seuAdversarioLigaPlayoff(camp);
  if (!adversario_reg) return;
  var adversario = adversario_reg.clubeRef || adversario_reg;
  var po = camp.playoff;
  var fase = po.fases[po.faseIdx];
  var faseNome = fase ? fase.nome : 'PLAYOFFS';
  var melhorDe = CampanhaBasquete.melhorDeDaFase(camp);
  var alvo = CampanhaBasquete.vitoriasParaFechar(melhorDe);

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoBasquete.prepararPartida(meuTime, advTime);

  var jogoSerie = (po.serie.vMeu + po.serie.vAdv + 1);
  var faseLabel = faseNome + ' \u00B7 Jogo ' + jogoSerie + ' (melhor de ' + melhorDe + ') \u00B7 s\u00E9rie ' + po.serie.vMeu + '-' + po.serie.vAdv;
  var idCard = partidaIdBasquete + 1;
  partidaIdBasquete = idCard;
  var card = criarCardPartidaBasquete(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  var resSerie = null;   // preenchido no onResultado, lido no onFim

  animacaoEmCurso = AnimacaoBasquete.animar({
    elCard: card, roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    // COMMIT do jogo da série (ver o padrão em iniciarPartidaBasquete). Dispara SEMPRE,
    // inclusive quando o "Pular Playoffs" finaliza esta partida — antes, pular no meio de
    // um jogo do playoff fazia esse jogo simplesmente não contar na série.
    onResultado: function () {
      resSerie = CampanhaBasquete.registrarJogoSerieNBA(camp, roteiro.pontosA, roteiro.pontosB, forcaTimeBasquete);
      registrarFlagsSerieNBA(camp, resSerie);
      acumularStatsBasquete(roteiro, roteiro.pontosA, roteiro.pontosB);
      mostrarBracketPlayoffs(camp);
    },
    onFim: function () {
      if (btn) btn.disabled = false;
      var res = resSerie;
      if (!res) return;

      var virouCampeao = false, foiEliminado = false;
      if (res.serieAcabou) {
        if (res.eliminado) { foiEliminado = true; }
        else if (!res.proximaFase) { virouCampeao = true; }   // venceu a última série
        else if (res.campeaoNBA) { virouCampeao = true; }
      }

      if (btn) {
        if (virouCampeao) {
          btn.innerHTML = 'Nova Campanha'; acaoBotao = 'nova-campanha';
          if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = true; mostrarBotaoResumo(true); }
        } else if (foiEliminado) {
          btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time';
        } else {
          btn.innerHTML = 'Próximo Jogo \u25BA'; acaoBotao = 'playoffs-nba';
        }
      }
      if (virouCampeao || foiEliminado) {
        salvarCampanhaBasquete(camp, { campeaoNBA: virouCampeao, faseAlcancada: faseNome });
      }
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' && !virouCampeao && !foiEliminado) {
        setTimeout(function () { iniciarPartidaPlayoffNBA(); }, 800);
      }
    }
  });
}

// "Pular tudo" do basquete: simula sua temporada restante e, se classificar, todo o playoff.
function pularTudoBasquete(soTemporada) {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (!campanhaBasqueteAtual) return;
  var camp = campanhaBasqueteAtual;
  if (!camp.liga) return;   // só o novo formato de liga
  drenarRodadasPendentesNBA(camp);   // rodadas em que você não jogou e ficaram na fila

  // 1) Simula (rápido, sem animar) todas as rodadas restantes da temporada regular.
  //    Para CADA jogo SEU, gera um card já preenchido (histórico) — antes o pular só
  //    atualizava a tabela e nenhum card aparecia dos jogos pulados.
  while (camp.rodadaAtual < camp.calendario.length) {
    var conf = CampanhaBasquete.seuConfrontoNaRodada(camp, camp.rodadaAtual);
    if (conf) {
      var advRegistroP = camp.tabela[conf.advIdx];
      var adversarioP = advRegistroP.clubeRef;
      var meuTimeP = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
      var advTimeP = { nome: adversarioP.clube, jogadores: adversarioP.jogadores };
      var roteiroP = AnimacaoBasquete.prepararPartida(meuTimeP, advTimeP);
      acumularStatsBasquete(roteiroP, roteiroP.pontosA, roteiroP.pontosB);

      var rodadaNumP = camp.rodadaAtual + 1;
      var faseLabelP = 'Rodada ' + rodadaNumP + '/' + camp.calendario.length + ' \u00B7 NBA';
      var idCardP = partidaIdBasquete + 1;
      partidaIdBasquete = idCardP;
      var cardP = criarCardPartidaBasquete(idCardP, adversarioP, faseLabelP, adversarioP.clube + ' ' + adversarioP.temporada);
      // preenche o card com o resultado final, sem ticks (modo pular)
      AnimacaoBasquete.animar({
        elCard: cardP, roteiro: roteiroP,
        velocidade: function () { return velocidadeSimulacao; },
        pular: true
      });
      CampanhaBasquete.registrarResultadoNBA(camp.tabela[0], advRegistroP, roteiroP.pontosA, roteiroP.pontosB);
    }
    CampanhaBasquete.resolverDemaisJogosNBA(camp, camp.rodadaAtual, placarBastidoresBasquete);
    camp.rodadaAtual++;
  }
  mostrarClassificacaoConf(camp);

  var btn = document.getElementById('btn-iniciar-jogo');
  var bp = document.getElementById('btn-pular-tudo');

  var classificou = CampanhaBasquete.voceClassificouLigaNBA(camp);

  // Se pediu só os pontos corridos: para aqui (deixa o playoff para o usuário jogar).
  if (soTemporada) {
    if (classificou) {
      if (!camp.playoff) CampanhaBasquete.montarPlayoffsLigaNBA(camp);
      mostrarBracketPlayoffs(camp);
      selecionarAbaBasquete('classif');   // mostra a classificação final
      if (btn) { btn.innerHTML = 'Iniciar Mata-a-Mata \u25BA'; acaoBotao = 'playoffs-nba'; btn.disabled = false; }
      // O "Pular tudo" continua disponível, agora só para o PLAYOFF (os pontos corridos já
      // foram). Vira "Pular Playoffs" — antes o botão sumia e não havia como pular o mata.
      if (bp) {
        bp.textContent = 'Pular Playoffs';
        bp.dataset.escopo = 'playoffs';   // main.js lê isto para pular direto o mata
        bp.classList.remove('escondida');
      }
    } else {
      salvarCampanhaBasquete(camp);
      if (btn) { btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; btn.disabled = false; }
      if (bp) bp.classList.add('escondida');
      if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    }
    return;
  }

  // 2) Pular TUDO: se não classificou, encerra; se classificou, simula o playoff inteiro.
  if (!classificou) {
    salvarCampanhaBasquete(camp);
    if (bp) bp.classList.add('escondida');
    if (btn) { btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; btn.disabled = false; }
    if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    return;
  }

  if (!camp.playoff) CampanhaBasquete.montarPlayoffsLigaNBA(camp);
  var resultado = pularPlayoffLigaNBA(camp);
  mostrarBracketPlayoffs(camp);
  if (bp) bp.classList.add('escondida');
  if (btn) {
    if (resultado.campeaoNBA) { btn.innerHTML = 'Nova Campanha'; acaoBotao = 'nova-campanha'; }
    else { btn.innerHTML = 'Montar Novo Time \u25BA'; acaoBotao = 'novo-time'; }
    btn.disabled = false;
  }
  if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = !!resultado.campeaoNBA; mostrarBotaoResumo(!!resultado.campeaoNBA); }
}

// Simula (sem animar) todo o playoff em séries até você ser campeão ou eliminado.
function pularPlayoffLigaNBA(camp) {
  var res = { campeaoNBA: false, eliminado: false };
  var guarda = 0;
  while (guarda++ < 200) {
    var adv = CampanhaBasquete.seuAdversarioLigaPlayoff(camp);
    if (!adv) break;
    var advTime = adv.clubeRef || adv;
    var po = camp.playoff;
    // joga a série inteira de uma vez, gerando UM CARD por jogo — igual ao pulo da
    // temporada regular. Antes o playoff era simulado só na estrutura de dados e NENHUM
    // card aparecia, o que dava a impressão de que "não simulou os jogos".
    var r;
    do {
      var faseAtual = po.fases[po.faseIdx];
      var faseNomeP = faseAtual ? faseAtual.nome : 'PLAYOFFS';
      var melhorDeP = CampanhaBasquete.melhorDeDaFase(camp);
      var jogoSerieP = (po.serie.vMeu + po.serie.vAdv + 1);

      var meuTimeP = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
      var advTimeP = { nome: advTime.clube, jogadores: advTime.jogadores };
      var roteiroP = AnimacaoBasquete.prepararPartida(meuTimeP, advTimeP);
      acumularStatsBasquete(roteiroP, roteiroP.pontosA, roteiroP.pontosB);

      var faseLabelP = faseNomeP + ' \u00B7 Jogo ' + jogoSerieP + ' (melhor de ' + melhorDeP +
                       ') \u00B7 s\u00E9rie ' + po.serie.vMeu + '-' + po.serie.vAdv;
      var idCardP2 = partidaIdBasquete + 1;
      partidaIdBasquete = idCardP2;
      var cardP2 = criarCardPartidaBasquete(idCardP2, advTime, faseLabelP);
      // preenche o card com o resultado final, sem ticks (modo pular)
      AnimacaoBasquete.animar({
        elCard: cardP2, roteiro: roteiroP,
        velocidade: function () { return velocidadeSimulacao; },
        pular: true
      });

      r = CampanhaBasquete.registrarJogoSerieNBA(camp, roteiroP.pontosA, roteiroP.pontosB, forcaTimeBasquete);
    } while (!r.serieAcabou);
    if (r.eliminado) { res.eliminado = true; break; }
    if (r.campeaoNBA || !r.proximaFase) { res.campeaoNBA = true; break; }
  }
  var faseFinal = camp.playoff.fases[Math.min(camp.playoff.faseIdx, camp.playoff.fases.length - 1)];
  salvarCampanhaBasquete(camp, { campeaoNBA: res.campeaoNBA, faseAlcancada: faseFinal ? faseFinal.nome : 'PLAYOFFS' });
  return res;
}


// Flags de SÉRIE do playoff (jogo 7, vassourada, playoff invicto). Rodam quando uma
// série fecha; o placar da série vem do próprio motor (`po.serie`).
function registrarFlagsSerieNBA(camp, res) {
  if (!res || !res.serieAcabou) return;
  if (typeof campanhaFlags === 'undefined' || !campanhaFlags) return;
  var f = campanhaFlags, po = camp.playoff;
  if (!po) return;

  // O placar da série vem no retorno do motor ("v-d"): `po.serie` já pode ter sido
  // ZERADO para a fase seguinte quando esta função roda.
  if (!res.venceuSerie || !res.placarSerie) return;
  var partes = String(res.placarSerie).split('-');
  var vMeu = parseInt(partes[0], 10) | 0;
  var vAdv = parseInt(partes[1], 10) | 0;

  var melhorDe = CampanhaBasquete.melhorDeDaFase(camp);
  if (vAdv === 0) f.bqVarridaSerie = true;                  // vassourada
  if ((vMeu + vAdv) === melhorDe) f.bqJogo7 = true;         // foi ao último jogo possível
  if (res.campeaoNBA) {
    // Campeão sem perder NENHUM jogo de playoff em toda a campanha.
    var derrotas = (po.historico || []).filter(function (h) { return !h.venceu; }).length;
    if (derrotas === 0) f.bqPlayoffInvicto = true;
  }
}

// Salva a campanha de basquete (espelha salvarCampanhaVolei; usa classificação da conf).
function salvarCampanhaBasquete(camp, resultadoPlayoff) {
  if (typeof API === 'undefined' || !API.salvarPartida) return;

  // Classificação na estrutura de LIGA (não a antiga por conferências).
  var cls;
  if (camp.liga && CampanhaBasquete.classificacaoDaConf) {
    cls = CampanhaBasquete.classificacaoDaConf(camp, camp.suaConf);
  } else {
    cls = CampanhaBasquete.classificacaoConf(camp, camp.suaConf).map(function (l) { return l.time; });
  }
  var minha = cls.filter(function (t) { return t.voce; })[0] || { v: 0, d: 0, pf: 0, pa: 0 };
  var posicao = 0;
  cls.forEach(function (t, i) { if (t.voce) posicao = i + 1; });

  var classificou = camp.liga
    ? CampanhaBasquete.voceClassificouLigaNBA(camp)
    : CampanhaBasquete.voceClassificouNBA(camp);
  var campeao = !!(resultadoPlayoff && resultadoPlayoff.campeaoNBA);
  var nomeConf = (camp.conferencias && camp.conferencias[camp.suaConf])
    ? camp.conferencias[camp.suaConf].nome
    : ((camp.suaConf === 'LESTE') ? 'Leste' : 'Oeste');

  // Snapshot da SUA escalação → alimenta o "time mais escalado" no perfil. Sem isto, o
  // mapa do perfil de basquete fica vazio (era o bug: nunca salvávamos os picks).
  var picks = (typeof escalacao !== 'undefined' ? escalacao : [])
    .filter(function (j) { return j; })
    .map(function (j) {
      return { id: j.id, codigo: j.codigo, nome: j.nome, forca: j.forca | 0, gols: 0, asis: 0 };
    });

  var fl = (typeof campanhaFlags !== 'undefined' && campanhaFlags) ? campanhaFlags : {};

  API.salvarPartida({
    modo: modoSelecionado,
    competicao: (COMPETICOES[modoSelecionado] && COMPETICOES[modoSelecionado].dados) || 'NBA',
    esporte: 'basquete',
    campeao: campeao,
    vitorias: minha.v, empates: 0, derrotas: minha.d,
    golsPro: minha.pf, golsContra: minha.pa,
    detalhes: {
      // Flags de evento fino — o backend lê daqui p/ desbloquear as conquistas de basquete.
      bqMaxPontosJogo:  fl.bqMaxPontosJogo | 0,
      bqMaxAssistJogo:  fl.bqMaxAssistJogo | 0,
      bqDuploDuplo:     !!fl.bqDuploDuplo,
      bqTriploDuplo:    !!fl.bqTriploDuplo,
      bqMaiorVantagem:  fl.bqMaiorVantagem | 0,
      bqMaiorPontuacao: fl.bqMaiorPontuacao | 0,
      bqVenciProrrogacao: !!fl.bqVenciProrrogacao,
      bqJogo7:          !!fl.bqJogo7,
      bqVarridaSerie:   !!fl.bqVarridaSerie,
      bqPlayoffInvicto: !!fl.bqPlayoffInvicto,
      rebotesTotais:    Object.keys(statsRebotesBasquete).reduce(function (n, k) { return n + (statsRebotesBasquete[k] | 0); }, 0),
      forcaElenco:      Math.round(forcaDoTime() || 0),

      temporada: camp.temporada,
      formato: (camp.formato && camp.formato.id) || (camp.tamanho && camp.tamanho.id) || 'liga',
      conferencia: nomeConf,
      classificado: !!classificou,
      faseAlcancada: (resultadoPlayoff && resultadoPlayoff.faseAlcancada) ||
                     (classificou ? 'PLAYOFFS' : 'TEMPORADA REGULAR'),
      posicao: posicao,
      snapshot: { formacao: 'basquete', picks: picks }
    }
  }).then(function (resp) {
    // Toast das conquistas recém-desbloqueadas, FILTRADO para basquete (não vaza futebol/vôlei).
    if (resp && resp.novasConquistas && typeof mostrarToastConquistas === 'function') {
      mostrarToastConquistas(resp.novasConquistas, 'basquete');
    }
  }).catch(function () {});
}
