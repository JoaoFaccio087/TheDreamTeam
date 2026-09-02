/* ═══════════════════════════════════════════════════════════════════
   campanha-volei-ui.js — camada de UI/fluxo da campanha de VÔLEI
   (Mundial M/F e Liga das Nações / VNL M/F).

   Extraído de campanha.js (redução do monolito, mesma abordagem do
   campanha-basquete-ui.js). Contém: força/seleções de vôlei, fluxo de
   jogar/pular do Mundial e da VNL, mata-mata (semi/final + Final Eight),
   abas (Simulação/Classificação/Mata-a-Mata) com aviso de bloqueio,
   tabela de grupo, cards de partida, e salvamento.

   A LÓGICA pura fica em js/campanha-volei.js (var CampanhaVolei); a
   ANIMAÇÃO em js/animacao-volei.js. Usa as globais compartilhadas do
   jogo (campanhaVoleiAtual, escalacao, nomeDoTime, modoSelecionado,
   velocidadeSimulacao, Escudos, API, COMPETICOES…). Carrega DEPOIS de
   campanha.js no index.
   ═══════════════════════════════════════════════════════════════════ */

function forcaSelecaoVolei(sel) {
  if (!sel || !sel.jogadores || !sel.jogadores.length) return 80;
  var s = 0;
  for (var i = 0; i < sel.jogadores.length; i++) s += (+sel.jogadores[i].forca || 0);
  return s / sel.jogadores.length;
}

// Retorna todas as seleções da competição de vôlei selecionada (via DADOS globais).
function selecoesDaCompeticaoVolei() {
  var filtro = COMPETICOES[modoSelecionado].dados;   // ex.: "Mundial de Vôlei (M)" / "VNL (M)"
  var fonte  = [];
  if (typeof DADOS_VOLEI_M !== 'undefined') fonte = fonte.concat(DADOS_VOLEI_M);
  if (typeof DADOS_VOLEI_F !== 'undefined') fonte = fonte.concat(DADOS_VOLEI_F);
  if (typeof DADOS_VNL_M !== 'undefined') fonte = fonte.concat(DADOS_VNL_M);
  if (typeof DADOS_VNL_F !== 'undefined') fonte = fonte.concat(DADOS_VNL_F);
  return fonte.filter(function (c) { return c.competicao === filtro; });
}

// Acumula as estatísticas de UMA partida de vôlei nas MESMAS variáveis globais que o
// resumo da campanha lê (statsJogadores, campanhaVitorias/…/GF/GA/Partidas). Assim o
// resumo do vôlei mostra sets, maior pontuador e mais aces — sem reescrever o resumo.
// `roteiro` vem de AnimacaoVolei.prepararPartida; `setsVoce`/`setsAdv` são o placar.
// O vôlei não tem empate, então campanhaEmpates nunca cresce.
function acumularStatsVolei(roteiro, setsVoce, setsAdv) {
  if (typeof campanhaPartidas === 'undefined') return;
  campanhaPartidas++;
  campanhaGF += setsVoce;   // no vôlei, "GF/GA" do resumo = sets feitos/sofridos
  campanhaGA += setsAdv;
  if (setsVoce > setsAdv) campanhaVitorias++; else campanhaDerrotas++;

  // Pontos/aces por jogador — só do MEU time (a lista de estatísticas do resumo é a
  // minha escalação). O autor do ponto é o nome do jogador; filtramos pelos meus.
  var meusNomes = {};
  escalacao.forEach(function (j) { if (j) meusNomes[j.nome] = true; });
  var stats = AnimacaoVolei.coletarEstatisticas(roteiro);
  stats.forEach(function (s) {
    if (!meusNomes[s.nome]) return;   // ignora pontos do adversário
    if (!statsJogadores[s.nome]) statsJogadores[s.nome] = { gols: 0, asis: 0 };
    // Reusa os campos gols/asis: no vôlei, gols=pontos e asis=aces (o resumo já rotula
    // como PTS/ACE via ehVolei). Mantém uma estrutura só para os dois esportes.
    statsJogadores[s.nome].gols += s.pontos;
    statsJogadores[s.nome].asis += s.aces;
  });
}

// Inicia (ou continua) a campanha de vôlei e joga a próxima partida.
function iniciarPartidaVolei() {
  if (typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') {
    console.warn('[volei] módulos do vôlei não carregados'); return;
  }

  // ── Bifurcação VNL vs Mundial ───────────────────────────────────────
  // A VNL tem estrutura própria (preliminar em liga + Final Eight). Se a
  // competição é a VNL, desvia para o fluxo dedicado e RETORNA. O caminho
  // do Mundial abaixo (grupos + mata) fica intocado.
  if (typeof ehCompeticaoVNL === 'function' && ehCompeticaoVNL(modoSelecionado)) {
    iniciarPartidaVNL();
    return;
  }

  // Monta a campanha na 1ª partida (escolhe uma edição e monta grupos+mata).
  if (!campanhaVoleiAtual) {
    var todas = selecoesDaCompeticaoVolei();
    if (!todas.length) { console.warn('[volei] sem seleções para', modoSelecionado); return; }
    var anos = [];
    todas.forEach(function (c) { if (anos.indexOf(c.edicao) < 0) anos.push(c.edicao); });
    var ano = anos[Math.floor(Math.random() * anos.length)];
    var selecoes = todas.filter(function (c) { return c.edicao === ano; });

    var voceMonta = { nome: nomeDoTime, forca: forcaDoTime(), jogadores: escalacao.filter(function (j) { return j !== null; }) };
    campanhaVoleiAtual = CampanhaVolei.montarCampanhaVolei(selecoes, voceMonta, forcaSelecaoVolei);
    campanhaVoleiAtual.edicaoAno = ano;
    campanhaVoleiAtual.jogosGrupoFeitos = 0;
    prepararAbasVolei();
  }

  var camp = campanhaVoleiAtual;

  // Fase de grupos: você enfrenta cada adversário do seu grupo, um por partida.
  var advs = CampanhaVolei.adversariosDoSeuGrupo(camp);
  var idx  = camp.jogosGrupoFeitos;
  if (idx >= advs.length) {
    return;
  }
  var adversarioTime = advs[idx];
  var adversario     = adversarioTime.clubeRef;

  // Monta o roteiro da partida com o motor de vôlei (núcleo + animação).
  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  // O resultado NÃO é registrado aqui: o commit acontece no onResultado, quando a
  // animação termina. Antes, registrar antes de animar fazia a aba Classificação já
  // mostrar a vitória enquanto a partida ainda rodava ponto a ponto.

  // Cria o card visual (reaproveita a casca do card de futebol) e anima ponto a ponto.
  var faseLabel = 'Grupo ' + String.fromCharCode(65 + camp.seuGrupo) + ' \u00B7 ' +
                  rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  // roda a animação usando a velocidade global já existente (mesma do futebol).
  // IMPORTANTE: o automático NÃO pula a animação — ele só encadeia a próxima partida
  // sozinha (igual ao futebol). Só o "Pular tudo" pula de fato as simulações.
  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    // COMMIT: só agora a partida entra na tabela e nas estatísticas. Dispara também
    // quando o "Pular tudo" finaliza esta partida, então nada deixa de ser contado.
    onResultado: function () {
      CampanhaVolei.registrarJogoGrupo(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
      acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
      camp.jogosGrupoFeitos++;
    },
    onFim: function () {
      if (btn) btn.disabled = false;
      var acabaramJogosGrupo = (camp.jogosGrupoFeitos >= advs.length);

      // Se terminou os jogos do grupo, resolve a classificação nos bastidores.
      if (acabaramJogosGrupo) {
        CampanhaVolei.simularJogosAdversariosGrupo(camp);
        mostrarTabelaGrupoVolei(camp);   // exibe o "grupinho" com a classificação final
        // Só salva AGORA se você foi eliminado nos grupos. Se classificou, o save
        // acontece no fim do mata-mata (com o resultado final, evitando duplicar).
        if (!CampanhaVolei.voceClassificou(camp)) salvarCampanhaVolei(camp);
      }

      // Atualiza o BOTÃO conforme o estado.
      if (btn) {
        if (acabaramJogosGrupo) {
          var classificou = CampanhaVolei.voceClassificou(camp);
          if (classificou) {
            // Classificou → monta o mata-mata e leva o jogador até ele.
            CampanhaVolei.montarMataVolei(camp);
            btn.innerHTML = 'Ir ao Mata-Mata \u25BA';
            acaoBotao = 'mata-volei';
          } else {
            // Eliminado na fase de grupos → montar time novo.
            btn.innerHTML = 'Montar Novo Time \u25BA';
            acaoBotao = 'novo-time';
          }
        } else {
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'proximo-volei';
        }
      }

      // Encadeamento no modo automático:
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico') {
        if (camp.jogosGrupoFeitos < advs.length) {
          // ainda há jogos de grupo → próximo jogo de grupo
          setTimeout(function () { iniciarPartidaVolei(); }, 800);
        } else if (acabaramJogosGrupo && CampanhaVolei.voceClassificou(camp)) {
          // grupos acabaram e você classificou → segue direto ao mata-mata
          setTimeout(function () { iniciarPartidaMataVolei(); }, 900);
        }
      }
    }
  });
}

// "Pular tudo" do vôlei: simula sem animação todos os jogos restantes do grupo,
// registra na tabela, salva a campanha e mostra o resultado no botão. Evita cair
// no pularTudoBrasileirao/pularTudoMata (que assumem futebol e travam).
function pularTudoVolei() {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (!campanhaVoleiAtual || typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') return;
  var camp = campanhaVoleiAtual;
  var advs = CampanhaVolei.adversariosDoSeuGrupo(camp);

  while (camp.jogosGrupoFeitos < advs.length) {
    var adversarioTime = advs[camp.jogosGrupoFeitos];
    var adversario     = adversarioTime.clubeRef;
    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);
    CampanhaVolei.registrarJogoGrupo(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    var faseLabel = 'Grupo ' + String.fromCharCode(65 + camp.seuGrupo) + ' \u00B7 ' +
                    rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    // Usa a própria animação em modo "pular" (preenche o card com o resultado final
    // instantaneamente, sem ponto a ponto).
    animacaoEmCurso = AnimacaoVolei.animar({
      elCard: card,
      roteiro: roteiro,
      velocidade: function () { return velocidadeSimulacao; },
      pular: true
    });
    camp.jogosGrupoFeitos++;
  }

  CampanhaVolei.simularJogosAdversariosGrupo(camp);
  mostrarTabelaGrupoVolei(camp);   // mostra o "grupinho" também ao pular tudo
  // Só salva agora se eliminado nos grupos; se classificou, salva no fim do mata.
  if (!CampanhaVolei.voceClassificou(camp)) salvarCampanhaVolei(camp);

  var btn = document.getElementById('btn-iniciar-jogo');
  var bp = document.getElementById('btn-pular-tudo');
  if (bp) bp.classList.add('escondida');

  if (!CampanhaVolei.voceClassificou(camp)) {
    // Eliminado nos grupos → fim da campanha.
    if (btn) {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
      btn.disabled = false;
    }
    if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    return;
  }

  // Classificou → "Pular tudo" deve simular TODO o mata-mata até o fim (campeão ou
  // eliminação), sem parar no "Ir ao Mata-Mata". Monta o mata e resolve cada fase.
  CampanhaVolei.montarMataVolei(camp);
  var resultado = pularMataVolei(camp);

  if (btn) {
    if (resultado.campeao) {
      btn.innerHTML = 'Nova Campanha';
      acaoBotao = 'nova-campanha';
    } else {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
    }
    btn.disabled = false;
  }
  if (typeof mostrarBotaoResumo === 'function') {
    resumoCampeao = !!resultado.campeao;
    mostrarBotaoResumo(!!resultado.campeao);
  }
}

// Simula (sem animação) todos os confrontos do mata-mata do vôlei a partir do estado
// atual de camp.mata, até você ser campeão ou eliminado. Registra cada card e salva a
// campanha com o desfecho final. Retorna { campeao, faseAlcancada }.
function pularMataVolei(camp) {
  var ultimaFase = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'MATA-MATA';
  var res = { campeao: false, eliminado: false, proximaFase: null };

  while (true) {
    var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
    if (!adversarioTime) break;
    var adversario = adversarioTime.clubeRef;
    var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'MATA-MATA';
    ultimaFase = faseNome;

    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

    var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    AnimacaoVolei.animar({ elCard: card, roteiro: roteiro, velocidade: function () { return velocidadeSimulacao; }, pular: true });

    res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    if (res.campeao || res.eliminado) break;
  }

  // Salva o resultado final da campanha com o desfecho (alimenta resumo e conquistas).
  salvarCampanhaVolei(camp, { campeao: res.campeao, faseAlcancada: ultimaFase });
  return { campeao: res.campeao, faseAlcancada: ultimaFase };
}

// ════════════════════════════════════════════════════════════════════
//  VNL / LIGA DAS NAÇÕES — fluxo da campanha (preliminar em liga + Final Eight).
//  Espelha iniciarPartidaVolei/pularTudoVolei/iniciarPartidaMataVolei, mas usa
//  a estrutura própria da VNL (camp.vnl, tabela única, seusJogos, Final Eight).
// ════════════════════════════════════════════════════════════════════

// Joga uma rodada da FASE PRELIMINAR da VNL (você enfrenta um adversário sorteado).
function iniciarPartidaVNL() {
  if (typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') {
    console.warn('[vnl] módulos do vôlei não carregados'); return;
  }

  // Monta a campanha VNL na 1ª partida (escolhe edição e monta preliminar+Final Eight).
  if (!campanhaVoleiAtual) {
    var todas = selecoesDaCompeticaoVolei();
    if (!todas.length) { console.warn('[vnl] sem seleções para', modoSelecionado); return; }
    var anos = [];
    todas.forEach(function (c) { if (anos.indexOf(c.edicao) < 0) anos.push(c.edicao); });
    var ano = anos[Math.floor(Math.random() * anos.length)];
    var selecoes = todas.filter(function (c) { return c.edicao === ano; });

    var voceMonta = { nome: nomeDoTime, forca: forcaDoTime(), jogadores: escalacao.filter(function (j) { return j !== null; }) };
    campanhaVoleiAtual = CampanhaVolei.montarCampanhaVNL(selecoes, voceMonta, forcaSelecaoVolei);
    campanhaVoleiAtual.edicaoAno = ano;
    prepararAbasVolei();
  }

  var camp = campanhaVoleiAtual;
  var adversarioTime = CampanhaVolei.adversarioVNLRodada(camp);
  if (!adversarioTime) {
    return;
  }
  var adversario = adversarioTime.clubeRef;

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  // O resultado é registrado no onResultado (fim da animação), não aqui — senão a
  // tabela da preliminar já mostrava a vitória com a partida ainda rodando.

  var faseLabel = 'Fase Preliminar \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    // COMMIT do jogo da preliminar — ver a nota em iniciarPartidaVolei.
    onResultado: function () {
      CampanhaVolei.registrarJogoVNL(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
      acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    },
    onFim: function () {
      if (btn) btn.disabled = false;
      var acabouPreliminar = (camp.jogosFeitos >= camp.seusJogos.length);

      if (acabouPreliminar) {
        // Bastidores preenchem a preliminar e geram a classificação.
        CampanhaVolei.simularPreliminarVNL(camp, camp.formato.jogosVoce);
        mostrarTabelaVNL(camp);
        if (!CampanhaVolei.voceClassificouVNL(camp)) salvarCampanhaVolei(camp);
      }

      if (btn) {
        if (acabouPreliminar) {
          if (CampanhaVolei.voceClassificouVNL(camp)) {
            CampanhaVolei.montarFinalEightVNL(camp);
            btn.innerHTML = 'Ir \u00e0 Final Eight \u25BA';
            acaoBotao = 'final-eight-vnl';
          } else {
            btn.innerHTML = 'Montar Novo Time \u25BA';
            acaoBotao = 'novo-time';
          }
        } else {
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'proximo-vnl';
        }
      }

      // Encadeamento automático
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico') {
        if (camp.jogosFeitos < camp.seusJogos.length) {
          setTimeout(function () { iniciarPartidaVNL(); }, 800);
        } else if (acabouPreliminar && CampanhaVolei.voceClassificouVNL(camp)) {
          setTimeout(function () { iniciarPartidaFinalEightVNL(); }, 900);
        }
      }
    }
  });
}

// "Pular tudo" da VNL: simula suas rodadas restantes da preliminar sem animação.
function pularTudoVNL() {
  cancelarAnimacaoEmCurso();   // para qualquer partida ainda animando antes de pular
  if (!campanhaVoleiAtual || typeof CampanhaVolei === 'undefined' || typeof AnimacaoVolei === 'undefined') return;
  var camp = campanhaVoleiAtual;

  while (camp.jogosFeitos < camp.seusJogos.length) {
    var adversarioTime = CampanhaVolei.adversarioVNLRodada(camp);
    if (!adversarioTime) break;
    var adversario = adversarioTime.clubeRef;
    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);
    CampanhaVolei.registrarJogoVNL(camp, adversarioTime, roteiro.setsA, roteiro.setsB);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    var faseLabel = 'Fase Preliminar \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    AnimacaoVolei.animar({ elCard: card, roteiro: roteiro, velocidade: function () { return velocidadeSimulacao; }, pular: true });
  }

  CampanhaVolei.simularPreliminarVNL(camp, camp.formato.jogosVoce);
  mostrarTabelaVNL(camp);
  if (!CampanhaVolei.voceClassificouVNL(camp)) salvarCampanhaVolei(camp);

  var btn = document.getElementById('btn-iniciar-jogo');
  var bp = document.getElementById('btn-pular-tudo');
  if (bp) bp.classList.add('escondida');

  if (!CampanhaVolei.voceClassificouVNL(camp)) {
    if (btn) {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
      btn.disabled = false;
    }
    if (typeof mostrarBotaoResumo === 'function') mostrarBotaoResumo(false);
    return;
  }

  // Classificou → "Pular tudo" simula TODA a Final Eight até o fim.
  CampanhaVolei.montarFinalEightVNL(camp);
  var resultado = pularFinalEightVNL(camp);

  if (btn) {
    if (resultado.campeao) {
      btn.innerHTML = 'Nova Campanha';
      acaoBotao = 'nova-campanha';
    } else {
      btn.innerHTML = 'Montar Novo Time \u25BA';
      acaoBotao = 'novo-time';
    }
    btn.disabled = false;
  }
  if (typeof mostrarBotaoResumo === 'function') {
    resumoCampeao = !!resultado.campeao;
    mostrarBotaoResumo(!!resultado.campeao);
  }
}

// Simula (sem animação) toda a Final Eight da VNL a partir do estado atual de camp.mata,
// até campeão ou eliminação. Espelha pularMataVolei. Retorna { campeao, faseAlcancada }.
function pularFinalEightVNL(camp) {
  var ultimaFase = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'FINAL EIGHT';
  var res = { campeao: false, eliminado: false, proximaFase: null };

  while (true) {
    var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
    if (!adversarioTime) break;
    var adversario = adversarioTime.clubeRef;
    var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'FINAL EIGHT';
    ultimaFase = faseNome;

    var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
    var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
    var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

    var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
    var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
    partidaIdVolei = idCard;
    var card = criarCardPartidaVolei(idCard, adversario, faseLabel);
    AnimacaoVolei.animar({ elCard: card, roteiro: roteiro, velocidade: function () { return velocidadeSimulacao; }, pular: true });

    res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
    acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);
    if (res.campeao || res.eliminado) break;
  }

  salvarCampanhaVolei(camp, { campeao: res.campeao, faseAlcancada: ultimaFase });
  return { campeao: res.campeao, faseAlcancada: ultimaFase };
}

// Joga um confronto da FINAL EIGHT da VNL (quartas, semi, final). Reusa o motor de
// mata do vôlei (registrarJogoMata) — idêntico ao Mundial, só muda o rótulo/desfecho.
function iniciarPartidaFinalEightVNL() {
  var camp = campanhaVoleiAtual;
  if (!camp || !camp.mata) return;
  var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
  if (!adversarioTime) return;
  var adversario = adversarioTime.clubeRef;
  var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'FINAL EIGHT';

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,
    onFim: function () {
      if (btn) btn.disabled = false;
      var res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
      acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);

      if (btn) {
        if (res.campeao) {
          btn.innerHTML = 'Nova Campanha';
          acaoBotao = 'nova-campanha';
          if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = true; mostrarBotaoResumo(true); }
        } else if (res.eliminado) {
          btn.innerHTML = 'Montar Novo Time \u25BA';
          acaoBotao = 'novo-time';
        } else {
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'final-eight-vnl';
        }
      }

      if (res.campeao || res.eliminado) {
        salvarCampanhaVolei(camp, {
          campeao: res.campeao,
          faseAlcancada: faseNome
        });
      }

      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' && !res.campeao && !res.eliminado) {
        setTimeout(function () { iniciarPartidaFinalEightVNL(); }, 900);
      }
    }
  });
}

// Joga um confronto do MATA-MATA do vôlei (semi, final...). Espelha iniciarPartidaVolei
// mas usa o adversário do chaveamento e resolve avanço/eliminação/título no fim.
function iniciarPartidaMataVolei() {
  var camp = campanhaVoleiAtual;
  if (!camp || !camp.mata) return;
  var adversarioTime = CampanhaVolei.seuAdversarioMata(camp);
  if (!adversarioTime) return;
  var adversario = adversarioTime.clubeRef;
  var faseNome = camp.mata.fases[camp.mata.faseIdx] ? camp.mata.fases[camp.mata.faseIdx].nome : 'MATA-MATA';

  var meuTime = { nome: nomeDoTime, jogadores: escalacao.filter(function (j) { return j !== null; }) };
  var advTime = { nome: adversario.clube, jogadores: adversario.jogadores };
  var roteiro = AnimacaoVolei.prepararPartida(meuTime, advTime);

  var faseLabel = faseNome + ' \u00B7 ' + rotuloCompeticao(adversario.competicao) + ' ' + camp.edicaoAno;
  var idCard = (typeof partidaIdVolei === 'undefined') ? 1 : (partidaIdVolei + 1);
  partidaIdVolei = idCard;
  var card = criarCardPartidaVolei(idCard, adversario, faseLabel);

  var btn = document.getElementById('btn-iniciar-jogo');
  if (btn) btn.disabled = true;

  animacaoEmCurso = AnimacaoVolei.animar({
    elCard: card,
    roteiro: roteiro,
    velocidade: function () { return velocidadeSimulacao; },
    pular: false,   // automático anima normalmente; só "Pular tudo" pula de fato
    onFim: function () {
      if (btn) btn.disabled = false;
      var res = CampanhaVolei.registrarJogoMata(camp, roteiro.setsA, roteiro.setsB, forcaSelecaoVolei);
      acumularStatsVolei(roteiro, roteiro.setsA, roteiro.setsB);

      if (btn) {
        if (res.campeao) {
          btn.innerHTML = 'Nova Campanha';
          acaoBotao = 'nova-campanha';
          if (typeof mostrarBotaoResumo === 'function') { resumoCampeao = true; mostrarBotaoResumo(true); }
        } else if (res.eliminado) {
          btn.innerHTML = 'Montar Novo Time \u25BA';
          acaoBotao = 'novo-time';
        } else {
          // Avançou de fase: próximo confronto do mata.
          btn.innerHTML = 'Pr\u00f3xima Partida \u25BA';
          acaoBotao = 'mata-volei';
        }
      }

      // Quando a campanha ACABA no mata (título ou eliminação), salva o resultado final
      // com o desfecho — isto alimenta o resumo e as conquistas (Campeão Mundial etc.).
      if (res.campeao || res.eliminado) {
        salvarCampanhaVolei(camp, {
          campeao: res.campeao,
          posicao: res.campeao ? 1 : null,
          faseAlcancada: faseNome   // fase em que a campanha terminou
        });
      }

      // encadeia no modo automático enquanto você seguir vivo
      if (typeof modoSimulacao !== 'undefined' && modoSimulacao === 'automatico' &&
          !res.campeao && !res.eliminado) {
        setTimeout(function () { iniciarPartidaMataVolei(); }, 800);
      }
    }
  });
}

// Mostra a tabela de classificação do grupo de vôlei (o "grupinho"), no mesmo lugar
// dos cards de partida. Destaca você e os classificados ao mata-mata.
// ─────────────────── ABAS DO VÔLEI (Simulação / Classificação / Mata-a-Mata) ───────────────────
// Reaproveita as sim-tabs compartilhadas (mesma estrutura do basquete). A aba Mata-a-Mata é
// SEMPRE acessível, mas só mostra confrontos quando você chega ao mata (ou cai antes); enquanto
// está nos grupos, exibe um AVISO de que ainda não foi liberada (como o futebol).
function prepararAbasVolei() {
  var simTabs = document.getElementById('sim-tabs');
  var tabClassif = document.getElementById('sim-tab-classif');
  var tabChave = document.getElementById('sim-tab-chave');
  if (simTabs) simTabs.classList.remove('escondida');
  if (tabClassif) tabClassif.classList.remove('escondida');
  if (tabChave) tabChave.textContent = 'Mata-a-Mata';

  // Painel de classificação do grupo (dentro de sim-painel-jogos), criado uma vez.
  var painelJogos = document.getElementById('sim-painel-jogos');
  if (painelJogos && !document.getElementById('volei-classif-painel')) {
    var d = document.createElement('div');
    d.id = 'volei-classif-painel';
    d.className = 'volei-classif-painel escondida';
    d.innerHTML = '<div id="volei-classificacao"></div>';
    painelJogos.appendChild(d);
  }
  // liga os cliques das abas para o roteador do vôlei
  // NOTA: o roteamento de cliques das sim-tabs é UNIFICADO em main.js (rotearAba), que
  // detecta o esporte ativo e chama selecionarAbaVolei/Basquete/Sim. NÃO ligamos .onclick
  // aqui — fazer isso sobrescrevia o roteador e causava o conflito vôlei×basquete.
  selecionarAbaVolei('jogos');
}

function selecionarAbaVolei(qual) {
  var histJogos   = document.getElementById('historico-jogos');
  var painelClass = document.getElementById('volei-classif-painel');
  var painelChave = document.getElementById('chave-copa');
  var tabJogos    = document.getElementById('sim-tab-jogos');
  var tabClassif  = document.getElementById('sim-tab-classif');
  var tabChave    = document.getElementById('sim-tab-chave');
  var tabelaBras  = document.getElementById('tabela-brasileirao');
  if (tabelaBras) tabelaBras.classList.add('escondida');

  var mostraJogos = (qual === 'jogos');
  var mostraClass = (qual === 'classif');
  var mostraChave = (qual === 'chave');

  if (histJogos)   histJogos.classList.toggle('escondida', !mostraJogos);
  if (painelClass) painelClass.classList.toggle('escondida', !mostraClass);
  if (painelChave) painelChave.classList.toggle('escondida', !mostraChave);

  if (tabJogos)   tabJogos.classList.toggle('sim-tab-ativa', mostraJogos);
  if (tabClassif) tabClassif.classList.toggle('sim-tab-ativa', mostraClass);
  if (tabChave)   tabChave.classList.toggle('sim-tab-ativa', mostraChave);

  if (mostraClass && campanhaVoleiAtual) renderClassificacaoVoleiAba(campanhaVoleiAtual);
  if (mostraChave) renderMataVolei(campanhaVoleiAtual);
}

// Renderiza a classificação do grupo na aba (reusa mostrarTabelaGrupoVolei, que já popula
// o painel do grupo — aqui garantimos que o alvo é o painel da aba).
function renderClassificacaoVoleiAba(camp) {
  var alvo = document.getElementById('volei-classificacao');
  if (!alvo || !camp) return;
  alvo.innerHTML = montarTabelaGrupoVoleiHTML(camp);
}

// Aba Mata-a-Mata do vôlei: aviso enquanto nos grupos; confrontos quando chega (ou caiu antes).
function renderMataVolei(camp) {
  var alvo = document.getElementById('chave-copa');
  if (!alvo) return;

  // Ainda não há mata montado E você ainda não foi eliminado nos grupos → aviso de bloqueio.
  var temMata = camp && camp.mata;
  var caiuNosGrupos = camp && !temMata && (typeof CampanhaVolei !== 'undefined') &&
                      camp.jogosGrupoFeitos >= (CampanhaVolei.adversariosDoSeuGrupo(camp) || []).length &&
                      !CampanhaVolei.voceClassificou(camp);

  if (!temMata && !caiuNosGrupos) {
    alvo.innerHTML =
      '<div class="mata-bloqueada">' +
        '<div class="mata-bloqueada-icone">🔒</div>' +
        '<p class="mata-bloqueada-titulo">Mata-a-Mata ainda não liberado</p>' +
        '<p class="mata-bloqueada-sub">Termine a fase de grupos e classifique-se para ver os confrontos aqui.</p>' +
      '</div>';
    return;
  }

  if (!temMata && caiuNosGrupos) {
    alvo.innerHTML =
      '<div class="mata-bloqueada">' +
        '<div class="mata-bloqueada-icone">✕</div>' +
        '<p class="mata-bloqueada-titulo">Você não avançou ao mata-a-mata</p>' +
        '<p class="mata-bloqueada-sub">Foi eliminado na fase de grupos. Confira a classificação na aba anterior.</p>' +
      '</div>';
    return;
  }

  // Tem mata: mostra os confrontos por fase + seus resultados (do histórico).
  var m = camp.mata;
  var html = '<div class="mata-volei">';
  (m.fases || []).forEach(function (fase, idx) {
    var reg = (m.historico || []).filter(function (h) { return h.faseIdx === idx || h.fase === fase.nome; });
    html += '<div class="mata-fase-col">';
    html += '<div class="mata-fase-titulo">' + fase.nome + '</div>';
    if (reg.length) {
      reg.forEach(function (h) {
        var venc = h.venceu;
        html += '<div class="mata-jogo' + (venc ? ' mata-venceu' : ' mata-perdeu') + '">' +
                  '<span class="mata-jogo-time">' + nomeDoTime + '</span>' +
                  '<span class="mata-jogo-placar">' + h.setsVoce + ' – ' + h.setsAdv + '</span>' +
                  '<span class="mata-jogo-time">' + (h.adversario || '—') + '</span>' +
                '</div>';
      });
    } else if (idx === (m.faseIdx | 0)) {
      html += '<div class="mata-jogo mata-atual"><span class="mata-jogo-time">Em disputa…</span></div>';
    } else {
      html += '<div class="mata-jogo mata-futuro"><span class="mata-jogo-time">A definir</span></div>';
    }
    html += '</div>';
  });
  html += '</div>';
  alvo.innerHTML = html;
}

// Gera o HTML da tabela de classificação do grupo (reutilizável: card e aba de classificação).
function montarTabelaGrupoVoleiHTML(camp) {
  var cls = CampanhaVolei.classificacaoGrupo(camp);
  var avancam = camp.avancamPorGrupo | 0;
  var nomeGrupo = 'Grupo ' + String.fromCharCode(65 + camp.seuGrupo);

  var linhas = cls.map(function (l, i) {
    var t = l.time;
    var saldo = (l.sp - l.sc >= 0 ? '+' : '') + (l.sp - l.sc);
    var classe = (t.voce ? 'grupo-voce' : '') + (i < avancam ? ' grupo-classifica' : '');
    var nome = t.voce ? nomeDoTime : t.nome;
    var esc = (typeof Escudos !== 'undefined' && Escudos.porTime)
      ? (Escudos.porTime(t, modoSelecionado) || '') : '';
    var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
    return '<tr class="' + classe + '">' +
             '<td class="grupo-pos">' + (i + 1) + '</td>' +
             '<td class="grupo-time">' + escHTML + '<span class="grupo-nome">' + nome + '</span></td>' +
             '<td class="grupo-num">' + l.v + '</td>' +
             '<td class="grupo-num">' + l.d + '</td>' +
             '<td class="grupo-num">' + saldo + '</td>' +
             '<td class="grupo-pts">' + l.pts + '</td>' +
           '</tr>';
  }).join('');

  return '<div class="grupo-tabela">' +
      '<p class="grupo-tabela-titulo">' + nomeGrupo + ' \u00B7 Classifica\u00E7\u00E3o final</p>' +
      '<table class="fl-tabela">' +
        '<thead><tr><th></th><th>Sele\u00E7\u00E3o</th><th>V</th><th>D</th><th>SS</th><th>Pts</th></tr></thead>' +
        '<tbody>' + linhas + '</tbody>' +
      '</table>' +
      '<p class="fl-legenda">Top ' + avancam + ' avan\u00E7am ao mata-mata</p>' +
    '</div>';
}

function mostrarTabelaGrupoVolei(camp) {
  var tabelaHTML = montarTabelaGrupoVoleiHTML(camp);

  // Insere a tabela DENTRO do corpo do card da última partida (igual ao futebol),
  // para ficar integrada ao card expansivo — não como um bloco solto no topo.
  var ultimoCard = document.getElementById('partida-volei-' + partidaIdVolei);
  var corpo = ultimoCard ? ultimoCard.querySelector('.partida-corpo') : null;
  if (corpo) {
    var div = document.createElement('div');
    div.innerHTML = tabelaHTML;
    corpo.appendChild(div.firstChild);
  } else {
    // fallback: se não achar o card, insere no histórico
    var hist = document.getElementById('historico-jogos');
    if (hist) { var w = document.createElement('div'); w.innerHTML = tabelaHTML; hist.appendChild(w.firstChild); }
  }
  // atualiza também a aba de classificação, se já existir
  var alvoAba = document.getElementById('volei-classificacao');
  if (alvoAba) alvoAba.innerHTML = tabelaHTML;
}

// Mostra a tabela da FASE PRELIMINAR da VNL (liga única). Espelha mostrarTabelaGrupoVolei,
// mas é uma tabela só (não grupos) e destaca o top-`classificam` (Final Eight).
function mostrarTabelaVNL(camp) {
  var cls = CampanhaVolei.classificacaoVNL(camp);
  var classificam = camp.classificam | 0;

  var linhas = cls.map(function (l, i) {
    var t = l.time;
    var saldo = (l.sp - l.sc >= 0 ? '+' : '') + (l.sp - l.sc);
    var classe = (t.voce ? 'grupo-voce' : '') + (i < classificam ? ' grupo-classifica' : '');
    var nome = t.voce ? nomeDoTime : t.nome;
    var esc = (typeof Escudos !== 'undefined' && Escudos.porTime)
      ? (Escudos.porTime(t, modoSelecionado) || '') : '';
    var escHTML = esc ? '<span class="grupo-escudo">' + esc + '</span>' : '';
    return '<tr class="' + classe + '">' +
             '<td class="grupo-pos">' + (i + 1) + '</td>' +
             '<td class="grupo-time">' + escHTML + '<span class="grupo-nome">' + nome + '</span></td>' +
             '<td class="grupo-num">' + l.v + '</td>' +
             '<td class="grupo-num">' + l.d + '</td>' +
             '<td class="grupo-num">' + saldo + '</td>' +
             '<td class="grupo-pts">' + l.pts + '</td>' +
           '</tr>';
  }).join('');

  var tabelaHTML =
    '<div class="grupo-tabela">' +
      '<p class="grupo-tabela-titulo">Fase Preliminar \u00B7 Classifica\u00E7\u00E3o</p>' +
      '<table class="fl-tabela">' +
        '<thead><tr><th></th><th>Sele\u00E7\u00E3o</th><th>V</th><th>D</th><th>SS</th><th>Pts</th></tr></thead>' +
        '<tbody>' + linhas + '</tbody>' +
      '</table>' +
      '<p class="fl-legenda">Top ' + classificam + ' avan\u00E7am \u00E0 Final Eight</p>' +
    '</div>';

  var ultimoCard = document.getElementById('partida-volei-' + partidaIdVolei);
  var corpo = ultimoCard ? ultimoCard.querySelector('.partida-corpo') : null;
  if (corpo) {
    var div = document.createElement('div');
    div.innerHTML = tabelaHTML;
    corpo.appendChild(div.firstChild);
  } else {
    var hist = document.getElementById('historico-jogos');
    if (hist) { var w = document.createElement('div'); w.innerHTML = tabelaHTML; hist.appendChild(w.firstChild); }
  }
}

// Salva a campanha de vôlei no banco/histórico (fatia 5). Espelha o formato do
// futebol (js/resumo.js), mas com esporte:'volei' e semântica de vôlei:
//  - gf/ga = sets feitos/sofridos (reaproveita as colunas; ver migração 009)
//  - empates = 0 (vôlei não empata)
//  - detalhes = placar por sets, edição, e a classificação final do grupo
// Salva a campanha de vôlei. `resultadoMata` (opcional) traz o desfecho do mata-mata:
//   { campeao, posicao, faseAlcancada } — quando ausente, salva o fim da fase de grupos.
function salvarCampanhaVolei(camp, resultadoMata) {
  if (typeof API === 'undefined' || !API.salvarPartida) return;

  // ── VNL: usa a classificação da preliminar (liga única), não grupos ──
  var ehVNL = !!camp.vnl;
  var cls = ehVNL ? CampanhaVolei.classificacaoVNL(camp) : CampanhaVolei.classificacaoGrupo(camp);
  var minhaLinha = cls.filter(function (l) { return l.time.voce; })[0] || { v: 0, d: 0, sp: 0, sc: 0 };
  var posicao = 0;
  cls.forEach(function (l, i) { if (l.time.voce) posicao = i + 1; });
  var classificou = ehVNL ? CampanhaVolei.voceClassificouVNL(camp) : CampanhaVolei.voceClassificou(camp);

  // Soma os jogos do mata-mata (se houver) às vitórias/derrotas e sets.
  var vTot = minhaLinha.v | 0, dTot = minhaLinha.d | 0;
  var spTot = minhaLinha.sp | 0, scTot = minhaLinha.sc | 0;
  if (camp.mata && camp.mata.historico) {
    camp.mata.historico.forEach(function (h) {
      if (h.venceu) vTot++; else dTot++;
      spTot += h.setsVoce | 0; scTot += h.setsAdv | 0;
    });
  }

  var ehCampeao = !!(resultadoMata && resultadoMata.campeao);

  API.salvarPartida({
    competicao: COMPETICOES[modoSelecionado].dados,   // "Mundial de Vôlei (M)" / "(F)"
    esporte:    'volei',
    modo:       'solo',
    vitorias:   vTot,
    empates:    0,                                     // vôlei não empata
    derrotas:   dTot,
    gf:         spTot,                                 // sets feitos
    ga:         scTot,                                 // sets sofridos
    posicao:    (resultadoMata && resultadoMata.posicao) || posicao || null,
    campeao:    ehCampeao,
    detalhes: {
      edicao:       camp.edicaoAno,
      formato:      camp.formato.id,
      grupo:        ehVNL ? 'Preliminar' : String.fromCharCode(65 + camp.seuGrupo),
      classificado: !!classificou,
      faseAlcancada: (resultadoMata && resultadoMata.faseAlcancada) ||
                     (ehVNL ? (classificou ? 'FINAL EIGHT' : 'FASE PRELIMINAR')
                            : (classificou ? 'MATA-MATA' : 'FASE DE GRUPOS')),
      classificacao: cls.map(function (l) {
        return { time: l.time.voce ? '(você)' : l.time.nome, pts: l.pts, sp: l.sp, sc: l.sc };
      }),
      // Snapshot da SUA escalação → alimenta o "time mais escalado" no perfil. Sem isto o
      // mapa do perfil de vôlei fica vazio (mesmo bug que o basquete tinha).
      snapshot: {
        formacao: 'volei',
        picks: (typeof escalacao !== 'undefined' ? escalacao : [])
          .filter(function (j) { return j; })
          .map(function (j) {
            return { id: j.id, codigo: j.codigo, nome: j.nome, forca: j.forca | 0, gols: 0, asis: 0 };
          })
      }
    }
  }).then(function (resp) {
    // Toast das conquistas recém-desbloqueadas, FILTRADO para vôlei (não vaza futebol/basquete).
    if (resp && resp.novasConquistas && typeof mostrarToastConquistas === 'function') {
      mostrarToastConquistas(resp.novasConquistas, 'volei');
    }
  }).catch(function () {});
}

// Cria o card visual de uma partida de vôlei. REAPROVEITA as classes do card de
// futebol (partida-card, partida-fase, partida-header, partida-adversario-bloco,
// partida-escudo, partida-corpo) e adiciona só o miolo próprio do vôlei: o contador
// de sets (pv-sets-contador) e o placar de pontos (pv-placar), além de status/resumo.
// Os seletores que a animação usa (.pv-placar, .pv-sets-contador, .pv-status,
// .pv-sets, .pv-resumo) ficam DENTRO deste card.
function criarCardPartidaVolei(id, adversario, fase) {
  // recolhe o card anterior (mesmo comportamento do futebol)
  if (id > 1) {
    var anterior = document.getElementById('partida-volei-' + (id - 1));
    if (anterior) anterior.classList.remove('expandido');
  }

  var div = document.createElement('div');
  div.className = 'partida-card partida-volei expandido';
  div.id        = 'partida-volei-' + id;

  var forcaAdv = Math.round(forcaSelecaoVolei(adversario));
  var escudo = (typeof Escudos !== 'undefined' && Escudos.porNomeSeModo)
    ? (function () { var sName = Escudos.porNomeSeModo(adversario.clube, modoSelecionado); return sName ? '<span class="partida-escudo">' + sName + '</span>' : ''; })()
    : '';

  div.innerHTML =
    '<div class="partida-fase">' + fase + '</div>' +
    '<div class="partida-header">' +
      '<div class="partida-adversario-bloco">' +
        '<span class="partida-adversario-nome">' + escudo + adversario.clube + '</span>' +
        '<span class="partida-adversario-ano">' + rotuloCompeticao(adversario.competicao) + ' \u00B7 ' + adversario.edicao + '</span>' +
        '<span class="partida-adversario-forca">Força ' + forcaAdv + '</span>' +
      '</div>' +
      '<div class="partida-placar-bloco">' +
        '<div class="pv-sets-contador"></div>' +
        '<span class="pv-placar partida-placar">0 – 0</span>' +
      '</div>' +
    '</div>' +
    '<div class="partida-corpo">' +
      '<div class="pv-status"></div>' +
      '<div class="pv-sets"></div>' +
      '<div class="pv-resumo"></div>' +
    '</div>';

  var hist = document.getElementById('historico-jogos');
  // Mais recente no TOPO + limite com "Ver mais" (UI.histInserir). Antes era appendChild:
  // os cards desciam e era preciso rolar a tela inteira para ver a última partida.
  if (hist) UI.histInserir(hist, div);
  // Clicar no cabeçalho expande/recolhe o card (ver detalhes de uma partida passada) —
  // mesmo comportamento do futebol. Sem isto, os cards de vôlei não abriam.
  var hdr = div.querySelector('.partida-header');
  if (hdr) hdr.addEventListener('click', function () { div.classList.toggle('expandido'); });
  return div;
}

var partidaIdVolei = 0;
