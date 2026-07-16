// conquistas.js — Fase 2: renderização visual das conquistas (dados mock).
// Na Fase 3, a lista LISTA_CONQUISTAS e o estado "desbloqueada" virão da lógica/servidor.
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ─── Catálogo de conquistas (mock) ───────────────────────────────────────
  // id: chave estável (usada na Fase 3 para marcar desbloqueio no banco).
  // categoria: agrupa os cards. nome/desc: exibição. desbloqueada: mock (Fase 3 = real).
  var LISTA_CONQUISTAS = [
    // ── Progressão ──
    { id: 'primeira_vez',      categoria: 'Progressão', nome: 'Primeira vez',      desc: 'Jogou pela primeira vez',              desbloqueada: false },
    { id: 'primeira_vitoria',  categoria: 'Progressão', nome: 'Primeira vitória',  desc: 'Venceu a primeira partida',            desbloqueada: false },
    { id: 'primeiro_titulo',   categoria: 'Progressão', nome: 'Primeiro título',   desc: 'Venceu um torneio pela primeira vez',  desbloqueada: false },
    { id: 'veterano',          categoria: 'Progressão', nome: 'Veterano',          desc: 'Jogou 50 partidas',                    desbloqueada: false },
    { id: 'centuriao',         categoria: 'Progressão', nome: 'Centurião',         desc: 'Jogou 100 partidas',                   desbloqueada: false },
    { id: 'lenda_viva',        categoria: 'Progressão', nome: 'Lenda viva',        desc: 'Jogou 200 partidas',                   desbloqueada: false },
    { id: 'centenario',        categoria: 'Progressão', nome: 'Centenário',        desc: 'Somou 100 vitórias no total',          desbloqueada: false },
    { id: 'dinastico',         categoria: 'Progressão', nome: 'Dinástico',         desc: 'Venceu 5 torneios',                    desbloqueada: false },
    { id: 'imperador',         categoria: 'Progressão', nome: 'Imperador',         desc: 'Venceu 15 torneios',                   desbloqueada: false },
    { id: 'maquina_de_gols',   categoria: 'Progressão', nome: 'Máquina de gols',   desc: 'Marcou 100 gols no total',             desbloqueada: false },
    { id: 'artilheiro_mor',    categoria: 'Progressão', nome: 'Artilheiro-mor',    desc: 'Marcou 500 gols no total',             desbloqueada: false },
    { id: 'imortal',           categoria: 'Progressão', nome: 'Imortal',           desc: 'Jogou 300 partidas',                   desbloqueada: false },
    { id: 'milesimo',          categoria: 'Progressão', nome: 'Milésimo',          desc: 'Marcou 1000 gols no total',            desbloqueada: false },
    { id: 'bicentenario',      categoria: 'Progressão', nome: 'Bicentenário',      desc: 'Somou 200 vitórias no total',          desbloqueada: false },
    { id: 'maratonista',       categoria: 'Progressão', nome: 'Maratonista',       desc: 'Completou 50 campanhas',               desbloqueada: false },

    // ── Placar & Campanha ──
    { id: 'rolo_compressor',   categoria: 'Placar & Campanha', nome: 'Rolo compressor',  desc: 'Foi campeão sem perder e com 15+ de saldo de gols na campanha', desbloqueada: false },
    { id: 'invencivel',        categoria: 'Placar & Campanha', nome: 'Invencível',      desc: 'Completou um torneio invicto',         desbloqueada: false },
    { id: 'perfeccionista',    categoria: 'Placar & Campanha', nome: 'Perfeição',       desc: 'Campeão vencendo todas as partidas da campanha', desbloqueada: false },
    { id: 'muralha',           categoria: 'Placar & Campanha', nome: 'Muralha',         desc: 'Foi campeão sem sofrer nenhum gol na campanha', desbloqueada: false },
    { id: 'goleador_serial',   categoria: 'Placar & Campanha', nome: 'Goleador serial', desc: 'Marcou 50+ gols numa única campanha',  desbloqueada: false },
    { id: 'show_de_bola',      categoria: 'Placar & Campanha', nome: 'Show de bola',    desc: '7x0 com 5 artilheiros diferentes',     desbloqueada: false },
    { id: 'massacre',          categoria: 'Placar & Campanha', nome: 'Massacre',        desc: 'Venceu por 6+ de saldo',               desbloqueada: false },
    { id: 'aniquilacao',       categoria: 'Placar & Campanha', nome: 'Aniquilação',     desc: 'Venceu um jogo por 8+ de saldo',       desbloqueada: false },
    { id: 'hat_trick',         categoria: 'Placar & Campanha', nome: 'Hat-trick',       desc: 'Um jogador fez 3 gols num jogo',       desbloqueada: false },
    { id: 'trinca_dupla',      categoria: 'Placar & Campanha', nome: 'Trinca dupla',    desc: 'Teve hat-trick em 2 campanhas diferentes', desbloqueada: false },
    { id: 'poquer',            categoria: 'Placar & Campanha', nome: 'Pôquer',          desc: 'Um jogador fez 4 gols num jogo',       desbloqueada: false },
    { id: 'nos_penaltis',      categoria: 'Placar & Campanha', nome: 'Nos pênaltis',    desc: 'Venceu uma final nos pênaltis',        desbloqueada: false },
    { id: 'coracao_forte',     categoria: 'Placar & Campanha', nome: 'Coração forte',   desc: '2+ mata-matas decididos nos pênaltis numa campanha', desbloqueada: false },

    // ── Competições ──
    { id: 'campeao_liberta',   categoria: 'Competições', nome: 'Glória eterna',      desc: 'Campeão da Libertadores',           desbloqueada: false },
    { id: 'campeao_champions', categoria: 'Competições', nome: 'Orelhudas',          desc: 'Campeão da Champions',              desbloqueada: false },
    { id: 'campeao_brasil',    categoria: 'Competições', nome: 'Brasil, decime',     desc: 'Campeão do Brasileirão',            desbloqueada: false },
    { id: 'campeao_copa',      categoria: 'Competições', nome: 'Topo do mundo',      desc: 'Campeão da Copa do Mundo',          desbloqueada: false },
    { id: 'bi_liberta',        categoria: 'Competições', nome: 'Bi da América',      desc: 'Campeão da Libertadores 2 vezes',   desbloqueada: false },
    { id: 'bi_champions',      categoria: 'Competições', nome: 'Bi europeu',         desc: 'Campeão da Champions 2 vezes',      desbloqueada: false },
    { id: 'bi_brasil',         categoria: 'Competições', nome: 'Bi nacional',        desc: 'Campeão do Brasileirão 2 vezes',    desbloqueada: false },
    { id: 'bi_copa',           categoria: 'Competições', nome: 'Bi mundial',         desc: 'Campeão da Copa do Mundo 2 vezes',  desbloqueada: false },
    { id: 'rei_america',       categoria: 'Competições', nome: 'Rei da América',     desc: 'Campeão da Libertadores 3 vezes',   desbloqueada: false },
    { id: 'continental',       categoria: 'Competições', nome: 'Dono dos continentes', desc: 'Campeão da Libertadores e da Champions', desbloqueada: false },
    { id: 'colecionador',      categoria: 'Competições', nome: 'Colecionador',       desc: 'Campeão de todas as competições disponíveis', desbloqueada: false },

    { id: 'tri_champions',     categoria: 'Competições', nome: 'Trono europeu',      desc: 'Campeão da Champions 3 vezes',      desbloqueada: false },
    { id: 'tri_brasil',        categoria: 'Competições', nome: 'Tri nacional',       desc: 'Campeão do Brasileirão 3 vezes',    desbloqueada: false },
    { id: 'tri_copa',          categoria: 'Competições', nome: 'Tri mundial',        desc: 'Campeão da Copa do Mundo 3 vezes',  desbloqueada: false },
    { id: 'penta_liberta',     categoria: 'Competições', nome: 'Lenda da América',   desc: 'Campeão da Libertadores 5 vezes',   desbloqueada: false },
    { id: 'penta_champions',   categoria: 'Competições', nome: 'Lenda da Europa',    desc: 'Campeão da Champions 5 vezes',      desbloqueada: false },
    { id: 'penta_brasil',      categoria: 'Competições', nome: 'Penta nacional',     desc: 'Campeão do Brasileirão 5 vezes',    desbloqueada: false },
    { id: 'penta_copa',        categoria: 'Competições', nome: 'Penta mundial',      desc: 'Campeão da Copa do Mundo 5 vezes',  desbloqueada: false },
    { id: 'especialista_liberta',   categoria: 'Competições', nome: 'Alma sul-americana', desc: 'Disputou 10 campanhas da Libertadores', desbloqueada: false },
    { id: 'especialista_champions', categoria: 'Competições', nome: 'Alma europeia',      desc: 'Disputou 10 campanhas da Champions',    desbloqueada: false },
    { id: 'especialista_brasil',    categoria: 'Competições', nome: 'Coração brasileiro',  desc: 'Disputou 10 campanhas do Brasileirão',  desbloqueada: false },
    { id: 'especialista_copa',      categoria: 'Competições', nome: 'Espírito mundial',    desc: 'Disputou 10 campanhas da Copa do Mundo', desbloqueada: false },
    { id: 'matador_liberta',   categoria: 'Competições', nome: 'Matador da América',  desc: 'Marcou 100 gols na Libertadores',   desbloqueada: false },
    { id: 'matador_champions', categoria: 'Competições', nome: 'Matador da Europa',   desc: 'Marcou 100 gols na Champions',      desbloqueada: false },
    { id: 'matador_brasil',    categoria: 'Competições', nome: 'Matador nacional',    desc: 'Marcou 100 gols no Brasileirão',    desbloqueada: false },
    { id: 'matador_copa',      categoria: 'Competições', nome: 'Matador mundial',     desc: 'Marcou 100 gols na Copa do Mundo',  desbloqueada: false },

    // ── Combinações de jogadores ──
    { id: 'trio_msn',      categoria: 'Combinações', nome: 'MSN',            desc: 'Escalou Messi, Suárez e Neymar juntos', desbloqueada: false },
    { id: 'trio_bbc',      categoria: 'Combinações', nome: 'BBC',            desc: 'Escalou Bale, Benzema e Cristiano Ronaldo juntos', desbloqueada: false },
    { id: 'trio_holandes', categoria: 'Combinações', nome: 'Trio holandês',  desc: 'Escalou Gullit, Van Basten e Rijkaard juntos', desbloqueada: false },
    { id: 'trio_sfm',      categoria: 'Combinações', nome: 'Salah, Firmino e Mané', desc: 'Escalou Salah, Firmino e Mané juntos', desbloqueada: false },
    { id: 'tres_rs',       categoria: 'Combinações', nome: 'Os 3 Rs',        desc: 'Escalou Ronaldo, Rivaldo e Ronaldinho juntos', desbloqueada: false },
    { id: 'quadrado_magico', categoria: 'Combinações', nome: 'Quadrado Mágico', desc: 'Escalou Ronaldo, Adriano, Kaká e Ronaldinho juntos', desbloqueada: false },
    { id: 'pele_garrincha', categoria: 'Combinações', nome: 'Pelé & Garrincha', desc: 'Escalou Pelé e Garrincha juntos — o duo imbatível', desbloqueada: false },
    { id: 'ro_ro',         categoria: 'Combinações', nome: 'Ro-Ro',          desc: 'Escalou Romário e Ronaldo juntos', desbloqueada: false },
    { id: 'meio_barca',    categoria: 'Combinações', nome: 'Meio do Barça',   desc: 'Escalou Xavi, Iniesta e Busquets juntos', desbloqueada: false },
    { id: 'quadrado_82',   categoria: 'Combinações', nome: 'Quadrado de 82',  desc: 'Escalou Zico, Sócrates, Falcão e Cerezo juntos', desbloqueada: false },
    { id: 'zaga_milan',    categoria: 'Combinações', nome: 'Muralha rossonera', desc: 'Escalou Maldini, Baresi e Nesta juntos', desbloqueada: false },
    { id: 'alemanha_70',   categoria: 'Combinações', nome: 'Pança alemã',     desc: 'Escalou Gerd Müller, Beckenbauer e Breitner juntos', desbloqueada: false },
    { id: 'trio_argentino', categoria: 'Combinações', nome: 'Hermanos',       desc: 'Escalou Messi, Di María e Agüero juntos', desbloqueada: false },
    { id: 'eixo_bayern',   categoria: 'Combinações', nome: 'Espinha do Bayern', desc: 'Escalou Neuer, Lahm e Schweinsteiger juntos', desbloqueada: false },

    // ── Craques & Feitos (desempenho individual e composição do time) ──
    { id: 'artilheiro_camp', categoria: 'Craques & Feitos', nome: 'Artilheiro',      desc: 'Um jogador seu marcou 15+ gols numa campanha', desbloqueada: false },
    { id: 'show_individual', categoria: 'Craques & Feitos', nome: 'Show individual', desc: 'Um jogador seu marcou 20+ gols numa campanha', desbloqueada: false },
    { id: 'garcom',          categoria: 'Craques & Feitos', nome: 'Garçom',          desc: 'Um jogador seu deu 10+ assistências numa campanha', desbloqueada: false },
    { id: 'maestro',         categoria: 'Craques & Feitos', nome: 'Maestro',         desc: 'Um jogador seu deu 15+ assistências numa campanha', desbloqueada: false },
    { id: 'craque_completo', categoria: 'Craques & Feitos', nome: 'Craque completo', desc: 'Um jogador com 10+ gols e 10+ assistências na mesma campanha', desbloqueada: false },
    { id: 'galacticos',      categoria: 'Craques & Feitos', nome: 'Galácticos',      desc: 'Montou um XI com força média 90+', desbloqueada: false },
    { id: 'so_craques',      categoria: 'Craques & Feitos', nome: 'Só craques',      desc: 'Escalou 11 titulares todos com força 85+', desbloqueada: false },
    { id: 'zebra',           categoria: 'Craques & Feitos', nome: 'Zebra',           desc: 'Foi campeão com um time de força média 75 ou menos', desbloqueada: false },
  ];

  // Raridade por conquista (4 níveis, só cosmético): comum < raro < epico < lendario.
  // Mais difícil de obter = mais rara. Conquistas sem entrada aqui caem em 'comum'.
  var RARIDADE = {
    // Comuns — primeiros passos
    primeira_vez: 'comum', primeira_vitoria: 'comum', primeiro_titulo: 'comum', campeao_brasil: 'comum',
    // Raras — exigem alguma consistência
    veterano: 'raro', maquina_de_gols: 'raro', rolo_compressor: 'raro', hat_trick: 'raro',
    nos_penaltis: 'raro', campeao_liberta: 'raro', campeao_champions: 'raro', campeao_copa: 'raro',
    centuriao: 'raro', goleador_serial: 'raro', trinca_dupla: 'raro',
    bi_liberta: 'raro', bi_champions: 'raro', bi_brasil: 'raro', bi_copa: 'raro',
    // Épicas — feitos difíceis
    dinastico: 'epico', invencivel: 'epico', show_de_bola: 'epico', massacre: 'epico',
    poquer: 'epico', coracao_forte: 'epico',
    artilheiro_mor: 'epico', centenario: 'epico', perfeccionista: 'epico', muralha: 'epico',
    aniquilacao: 'epico', continental: 'epico',
    // Lendárias — muito difíceis
    lenda_viva: 'lendario', imperador: 'lendario', colecionador: 'lendario', rei_america: 'lendario',
    penta_liberta: 'lendario', penta_champions: 'lendario', penta_brasil: 'lendario', penta_copa: 'lendario',
    // Épicas por competição (tri + matador)
    tri_champions: 'epico', tri_brasil: 'epico', tri_copa: 'epico',
    matador_liberta: 'epico', matador_champions: 'epico', matador_brasil: 'epico', matador_copa: 'epico',
    // Raras por competição (especialista — acumula com o tempo)
    especialista_liberta: 'raro', especialista_champions: 'raro', especialista_brasil: 'raro', especialista_copa: 'raro',
    // Combinações de jogadores — épicas (exigem escalar craques específicos juntos)
    trio_msn: 'epico', trio_bbc: 'epico', trio_holandes: 'epico',
    trio_sfm: 'epico', tres_rs: 'epico', ro_ro: 'epico',
    meio_barca: 'epico', zaga_milan: 'epico', alemanha_70: 'epico',
    trio_argentino: 'epico', eixo_bayern: 'epico',
    // Combinações icônicas/quádruplas — lendárias
    quadrado_magico: 'lendario', pele_garrincha: 'lendario', quadrado_82: 'lendario',
    // Craques & Feitos
    artilheiro_camp: 'raro', garcom: 'raro', show_individual: 'epico', maestro: 'epico',
    craque_completo: 'epico', galacticos: 'epico', zebra: 'epico', so_craques: 'lendario',
    // Progressão avançada
    maratonista: 'raro', bicentenario: 'epico', imortal: 'lendario', milesimo: 'lendario'
  };
  var RARIDADE_ROTULO = { comum: 'Comum', raro: 'Raro', epico: 'Épico', lendario: 'Lendário' };
  function raridadeDe(id) { return RARIDADE[id] || 'comum'; }

  // Ícone (SVG inline) por estado — cadeado quando bloqueada, troféu quando desbloqueada.
  function iconeConquista(desbloqueada) {
    if (desbloqueada) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/>' +
        '<path d="M7 6H4.5v2A2.5 2.5 0 0 0 7 10.5"/><path d="M17 6h2.5v2a2.5 2.5 0 0 1-2.5 2.5"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  }

  function cardConquista(c) {
    var rar = raridadeDe(c.id);
    var cls = 'conq-card conq-rar-' + rar + (c.desbloqueada ? ' conq-desbloqueada' : ' conq-bloqueada');
    return '<div class="' + cls + '">' +
             '<span class="conq-rar-tag">' + esc(RARIDADE_ROTULO[rar] || 'Comum') + '</span>' +
             '<span class="conq-icone">' + iconeConquista(c.desbloqueada) + '</span>' +
             '<span class="conq-nome">' + esc(c.nome) + '</span>' +
             '<span class="conq-desc">' + esc(c.desc) + '</span>' +
           '</div>';
  }

  // Agrupa por categoria preservando a ordem de aparição.
  function agrupar(lista) {
    var ordem = [], grupos = {};
    lista.forEach(function (c) {
      if (!grupos[c.categoria]) { grupos[c.categoria] = []; ordem.push(c.categoria); }
      grupos[c.categoria].push(c);
    });
    return ordem.map(function (cat) { return { categoria: cat, itens: grupos[cat] }; });
  }

  function renderConquistas() {
    var cont = $('conq-lista');
    if (!cont) return;
    cont.innerHTML = '<p class="perfil-carregando">Carregando conquistas…</p>';

    // Busca as conquistas realmente desbloqueadas (backend). Fallback: nenhuma.
    var fonte = (typeof API !== 'undefined' && API.getAchievements) ? API.getAchievements()
              : (typeof api !== 'undefined' && api.getAchievements) ? api.getAchievements()
              : Promise.resolve([]);

    fonte.then(function (desbloqueadas) {
      // `null` = não consegui perguntar ao servidor. NÃO é "zero conquistas".
      // Antes isso desenhava 0/76 com o progresso inteiro salvo no banco.
      if (desbloqueadas === null) {
        cont.innerHTML = '<p class="perfil-vazio">Não foi possível carregar suas conquistas. Verifique sua conexão e tente de novo.</p>';
        return;
      }
      var setDesb = {};
      (desbloqueadas || []).forEach(function (d) {
        var id = (typeof d === 'string') ? d : (d && d.achievement_id);
        if (id) setDesb[id] = true;
      });
      // Aplica o estado real sobre o catálogo.
      LISTA_CONQUISTAS.forEach(function (c) { c.desbloqueada = !!setDesb[c.id]; });
      desenharConquistas();
    }).catch(function (err) {
      // Desenhar "tudo bloqueado" quando a chamada FALHOU é mentir: o usuário lê 0/76 e
      // acha que perdeu o progresso. Só a sessão venceu — o banco está intacto.
      var msg = (err && err.sessaoExpirada)
        ? 'Sua sessão expirou. Entre de novo para ver suas conquistas — <b>seu progresso continua salvo</b>.'
        : 'Não foi possível carregar suas conquistas. Verifique sua conexão e tente de novo.';
      cont.innerHTML = '<p class="perfil-vazio">' + msg + '</p>';
    });
  }

  function desenharConquistas() {
    var cont = $('conq-lista');
    if (!cont) return;

    var totalDesb = LISTA_CONQUISTAS.filter(function (c) { return c.desbloqueada; }).length;
    var totalGeral = LISTA_CONQUISTAS.length;
    var elTotal = $('conq-contador-total');
    if (elTotal) elTotal.textContent = totalDesb + '/' + totalGeral;

    var html = agrupar(LISTA_CONQUISTAS).map(function (g) {
      var desbCat = g.itens.filter(function (c) { return c.desbloqueada; }).length;
      var cards = g.itens.map(cardConquista).join('');
      return '<div class="conq-categoria">' +
               '<div class="conq-cat-head">' +
                 '<span class="conq-cat-nome">' + esc(g.categoria) + '</span>' +
                 '<span class="conq-cat-prog">' + desbCat + '/' + g.itens.length + '</span>' +
               '</div>' +
               '<div class="conq-grid">' + cards + '</div>' +
             '</div>';
    }).join('');

    cont.innerHTML = html;
  }

  // Exposto para o perfil.js chamar ao entrar na aba Conquistas.
  window.renderConquistas = renderConquistas;

  // ─── Toast estilo Steam (canto inferior direito, com fila) ───────────────
  var _filaToast = [];
  var _toastAtivo = false;

  function nomeConquista(id) {
    var c = LISTA_CONQUISTAS.find(function (x) { return x.id === id; });
    return c ? c.nome : id;
  }
  function descConquista(id) {
    var c = LISTA_CONQUISTAS.find(function (x) { return x.id === id; });
    return c ? c.desc : '';
  }

  // Garante o container dos toasts (criado uma vez).
  function containerToast() {
    var el = document.getElementById('conq-toast-container');
    if (!el) {
      el = document.createElement('div');
      el.id = 'conq-toast-container';
      el.className = 'conq-toast-container';
      document.body.appendChild(el);
    }
    return el;
  }

  // Enfileira e dispara os toasts das conquistas recém-desbloqueadas.
  // Aceita array de IDs (strings) ou de objetos { achievement_id }.
  function mostrarToastConquistas(novas) {
    if (!novas || !novas.length) return;
    novas.forEach(function (n) {
      var id = (typeof n === 'string') ? n : (n && n.achievement_id);
      if (id) _filaToast.push(id);
    });
    if (!_toastAtivo) proximoToast();
  }

  function proximoToast() {
    if (!_filaToast.length) { _toastAtivo = false; return; }
    _toastAtivo = true;
    var id = _filaToast.shift();

    var cont = containerToast();
    var toast = document.createElement('div');
    toast.className = 'conq-toast';
    toast.innerHTML =
      '<span class="conq-toast-icone">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/>' +
          '<path d="M7 6H4.5v2A2.5 2.5 0 0 0 7 10.5"/><path d="M17 6h2.5v2a2.5 2.5 0 0 1-2.5 2.5"/></svg>' +
      '</span>' +
      '<span class="conq-toast-texto">' +
        '<span class="conq-toast-titulo">Conquista desbloqueada!</span>' +
        '<span class="conq-toast-nome">' + esc(nomeConquista(id)) + '</span>' +
        '<span class="conq-toast-desc">' + esc(descConquista(id)) + '</span>' +
      '</span>';
    cont.appendChild(toast);

    // Anima entrada → espera → saída → próximo da fila.
    requestAnimationFrame(function () { toast.classList.add('conq-toast-visivel'); });
    setTimeout(function () {
      toast.classList.remove('conq-toast-visivel');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
        proximoToast();
      }, 350);   // dura o tempo da transição de saída
    }, 4200);    // tempo visível de cada toast
  }

  window.mostrarToastConquistas = mostrarToastConquistas;
})();
