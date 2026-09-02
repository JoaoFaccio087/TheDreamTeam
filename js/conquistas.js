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
    { id: 'primeira_vez',      categoria: 'Progressão', nome: 'Primeira vez',      desc: 'Jogou pela primeira vez',              esporte: 'todos', desbloqueada: false },
    { id: 'primeira_vitoria',  categoria: 'Progressão', nome: 'Primeira vitória',  desc: 'Venceu a primeira partida',            esporte: 'todos', desbloqueada: false },
    { id: 'primeiro_titulo',   categoria: 'Progressão', nome: 'Primeiro título',   desc: 'Venceu um torneio pela primeira vez',  esporte: 'todos', desbloqueada: false },
    { id: 'veterano',          categoria: 'Progressão', nome: 'Veterano',          desc: 'Jogou 50 partidas',                    esporte: 'todos', desbloqueada: false },
    { id: 'centuriao',         categoria: 'Progressão', nome: 'Centurião',         desc: 'Jogou 100 partidas',                   esporte: 'todos', desbloqueada: false },
    { id: 'lenda_viva',        categoria: 'Progressão', nome: 'Lenda viva',        desc: 'Jogou 200 partidas',                   esporte: 'todos', desbloqueada: false },
    { id: 'centenario',        categoria: 'Progressão', nome: 'Centenário',        desc: 'Somou 100 vitórias no total',          esporte: 'todos', desbloqueada: false },
    { id: 'dinastico',         categoria: 'Progressão', nome: 'Dinástico',         desc: 'Venceu 5 torneios',                    esporte: 'todos', desbloqueada: false },
    { id: 'imperador',         categoria: 'Progressão', nome: 'Imperador',         desc: 'Venceu 15 torneios',                   esporte: 'todos', desbloqueada: false },
    { id: 'maquina_de_gols',   categoria: 'Progressão', nome: 'Máquina de gols',   desc: 'Marcou 100 gols no total',             esporte: 'futebol', desbloqueada: false },
    { id: 'artilheiro_mor',    categoria: 'Progressão', nome: 'Artilheiro-mor',    desc: 'Marcou 500 gols no total',             esporte: 'futebol', desbloqueada: false },
    { id: 'imortal',           categoria: 'Progressão', nome: 'Imortal',           desc: 'Jogou 300 partidas',                   esporte: 'todos', desbloqueada: false },
    { id: 'milesimo',          categoria: 'Progressão', nome: 'Milésimo',          desc: 'Marcou 1000 gols no total',            esporte: 'futebol', desbloqueada: false },
    { id: 'bicentenario',      categoria: 'Progressão', nome: 'Bicentenário',      desc: 'Somou 200 vitórias no total',          esporte: 'todos', desbloqueada: false },
    { id: 'maratonista',       categoria: 'Progressão', nome: 'Maratonista',       desc: 'Completou 50 campanhas',               esporte: 'todos', desbloqueada: false },

    // ── Placar & Campanha ──
    { id: 'rolo_compressor',   categoria: 'Placar & Campanha', nome: 'Rolo compressor',  desc: 'Foi campeão sem perder e com 15+ de saldo de gols na campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'invencivel',        categoria: 'Placar & Campanha', nome: 'Invencível',      desc: 'Completou um torneio invicto',         esporte: 'todos', desbloqueada: false },
    { id: 'perfeccionista',    categoria: 'Placar & Campanha', nome: 'Perfeição',       desc: 'Campeão vencendo todas as partidas da campanha', esporte: 'todos', desbloqueada: false },
    { id: 'muralha',           categoria: 'Placar & Campanha', nome: 'Muralha',         desc: 'Foi campeão sem sofrer nenhum gol na campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'goleador_serial',   categoria: 'Placar & Campanha', nome: 'Goleador serial', desc: 'Marcou 50+ gols numa única campanha',  esporte: 'futebol', desbloqueada: false },
    { id: 'show_de_bola',      categoria: 'Placar & Campanha', nome: 'Show de bola',    desc: '7x0 com 5 artilheiros diferentes',     esporte: 'futebol', desbloqueada: false },
    { id: 'massacre',          categoria: 'Placar & Campanha', nome: 'Massacre',        desc: 'Venceu por 6+ de saldo',               esporte: 'futebol', desbloqueada: false },
    { id: 'aniquilacao',       categoria: 'Placar & Campanha', nome: 'Aniquilação',     desc: 'Venceu um jogo por 8+ de saldo',       esporte: 'futebol', desbloqueada: false },
    { id: 'hat_trick',         categoria: 'Placar & Campanha', nome: 'Hat-trick',       desc: 'Um jogador fez 3 gols num jogo',       esporte: 'futebol', desbloqueada: false },
    { id: 'trinca_dupla',      categoria: 'Placar & Campanha', nome: 'Trinca dupla',    desc: 'Teve hat-trick em 2 campanhas diferentes', esporte: 'futebol', desbloqueada: false },
    { id: 'poquer',            categoria: 'Placar & Campanha', nome: 'Pôquer',          desc: 'Um jogador fez 4 gols num jogo',       esporte: 'futebol', desbloqueada: false },
    { id: 'nos_penaltis',      categoria: 'Placar & Campanha', nome: 'Nos pênaltis',    desc: 'Venceu uma final nos pênaltis',        esporte: 'futebol', desbloqueada: false },
    { id: 'coracao_forte',     categoria: 'Placar & Campanha', nome: 'Coração forte',   desc: '2+ mata-matas decididos nos pênaltis numa campanha', esporte: 'futebol', desbloqueada: false },

    // ── Competições ──
    { id: 'campeao_liberta',   categoria: 'Competições', nome: 'Glória eterna',      desc: 'Campeão da Libertadores',           esporte: 'futebol', desbloqueada: false },
    { id: 'campeao_champions', categoria: 'Competições', nome: 'Orelhudas',          desc: 'Campeão da Champions',              esporte: 'futebol', desbloqueada: false },
    { id: 'campeao_brasil',    categoria: 'Competições', nome: 'Brasil, decime',     desc: 'Campeão do Brasileirão',            esporte: 'futebol', desbloqueada: false },
    { id: 'campeao_copa',      categoria: 'Competições', nome: 'Topo do mundo',      desc: 'Campeão da Copa do Mundo',          esporte: 'futebol', desbloqueada: false },
    { id: 'bi_liberta',        categoria: 'Competições', nome: 'Bi da América',      desc: 'Campeão da Libertadores 2 vezes',   esporte: 'futebol', desbloqueada: false },
    { id: 'bi_champions',      categoria: 'Competições', nome: 'Bi europeu',         desc: 'Campeão da Champions 2 vezes',      esporte: 'futebol', desbloqueada: false },
    { id: 'bi_brasil',         categoria: 'Competições', nome: 'Bi nacional',        desc: 'Campeão do Brasileirão 2 vezes',    esporte: 'futebol', desbloqueada: false },
    { id: 'bi_copa',           categoria: 'Competições', nome: 'Bi mundial',         desc: 'Campeão da Copa do Mundo 2 vezes',  esporte: 'futebol', desbloqueada: false },
    { id: 'rei_america',       categoria: 'Competições', nome: 'Rei da América',     desc: 'Campeão da Libertadores 3 vezes',   esporte: 'futebol', desbloqueada: false },
    { id: 'continental',       categoria: 'Competições', nome: 'Dono dos continentes', desc: 'Campeão da Libertadores e da Champions', esporte: 'futebol', desbloqueada: false },
    { id: 'colecionador',      categoria: 'Competições', nome: 'Colecionador',       desc: 'Campeão de todas as competições disponíveis', esporte: 'futebol', desbloqueada: false },

    { id: 'tri_champions',     categoria: 'Competições', nome: 'Trono europeu',      desc: 'Campeão da Champions 3 vezes',      esporte: 'futebol', desbloqueada: false },
    { id: 'tri_brasil',        categoria: 'Competições', nome: 'Tri nacional',       desc: 'Campeão do Brasileirão 3 vezes',    esporte: 'futebol', desbloqueada: false },
    { id: 'tri_copa',          categoria: 'Competições', nome: 'Tri mundial',        desc: 'Campeão da Copa do Mundo 3 vezes',  esporte: 'futebol', desbloqueada: false },
    { id: 'penta_liberta',     categoria: 'Competições', nome: 'Lenda da América',   desc: 'Campeão da Libertadores 5 vezes',   esporte: 'futebol', desbloqueada: false },
    { id: 'penta_champions',   categoria: 'Competições', nome: 'Lenda da Europa',    desc: 'Campeão da Champions 5 vezes',      esporte: 'futebol', desbloqueada: false },
    { id: 'penta_brasil',      categoria: 'Competições', nome: 'Penta nacional',     desc: 'Campeão do Brasileirão 5 vezes',    esporte: 'futebol', desbloqueada: false },
    { id: 'penta_copa',        categoria: 'Competições', nome: 'Penta mundial',      desc: 'Campeão da Copa do Mundo 5 vezes',  esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_liberta',   categoria: 'Competições', nome: 'Alma sul-americana', desc: 'Disputou 10 campanhas da Libertadores', esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_champions', categoria: 'Competições', nome: 'Alma europeia',      desc: 'Disputou 10 campanhas da Champions',    esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_brasil',    categoria: 'Competições', nome: 'Coração brasileiro',  desc: 'Disputou 10 campanhas do Brasileirão',  esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_copa',      categoria: 'Competições', nome: 'Espírito mundial',    desc: 'Disputou 10 campanhas da Copa do Mundo', esporte: 'futebol', desbloqueada: false },
    { id: 'matador_liberta',   categoria: 'Competições', nome: 'Matador da América',  desc: 'Marcou 100 gols na Libertadores',   esporte: 'futebol', desbloqueada: false },
    { id: 'matador_champions', categoria: 'Competições', nome: 'Matador da Europa',   desc: 'Marcou 100 gols na Champions',      esporte: 'futebol', desbloqueada: false },
    // Premier League (jul/2026) — a família é GERADA no backend a partir de GRUPOS_CONHECIDOS;
    // aqui ficam só os nomes/descrições que a tela mostra.
    { id: 'campeao_premier',      categoria: 'Competições', nome: 'Dono da Ilha',       desc: 'Campeão da Premier League',          esporte: 'futebol', desbloqueada: false },
    { id: 'bi_premier',           categoria: 'Competições', nome: 'Bi inglês',          desc: 'Campeão da Premier League 2 vezes',  esporte: 'futebol', desbloqueada: false },
    { id: 'tri_premier',          categoria: 'Competições', nome: 'Tri inglês',         desc: 'Campeão da Premier League 3 vezes',  esporte: 'futebol', desbloqueada: false },
    { id: 'penta_premier',        categoria: 'Competições', nome: 'Dinastia inglesa',   desc: 'Campeão da Premier League 5 vezes',  esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_premier', categoria: 'Competições', nome: 'Veterano da Ilha',   desc: 'Disputou 10 campanhas na Premier',   esporte: 'futebol', desbloqueada: false },
    { id: 'matador_premier',      categoria: 'Competições', nome: 'Matador da Ilha',    desc: 'Marcou 100 gols na Premier League',  esporte: 'futebol', desbloqueada: false },
    // Serie A (ago/2026) — mesma lógica: família GERADA no backend, aqui só nomes/descrições.
    { id: 'campeao_serie_a',      categoria: 'Competições', nome: 'Rei do Calcio',      desc: 'Campeão da Serie A',                 esporte: 'futebol', desbloqueada: false },
    { id: 'bi_serie_a',           categoria: 'Competições', nome: 'Bi italiano',        desc: 'Campeão da Serie A 2 vezes',         esporte: 'futebol', desbloqueada: false },
    { id: 'tri_serie_a',          categoria: 'Competições', nome: 'Tri italiano',       desc: 'Campeão da Serie A 3 vezes',         esporte: 'futebol', desbloqueada: false },
    { id: 'penta_serie_a',        categoria: 'Competições', nome: 'Dinastia italiana',  desc: 'Campeão da Serie A 5 vezes',         esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_serie_a', categoria: 'Competições', nome: 'Veterano do Calcio', desc: 'Disputou 10 campanhas na Serie A',   esporte: 'futebol', desbloqueada: false },
    { id: 'matador_serie_a',      categoria: 'Competições', nome: 'Matador do Calcio',  desc: 'Marcou 100 gols na Serie A',         esporte: 'futebol', desbloqueada: false },
    // La Liga (ago/2026) — mesma lógica: família GERADA no backend, aqui só nomes/descrições.
    { id: 'campeao_laliga',       categoria: 'Competições', nome: 'Rei da Espanha',     desc: 'Campeão da La Liga',                 esporte: 'futebol', desbloqueada: false },
    { id: 'bi_laliga',            categoria: 'Competições', nome: 'Bi espanhol',        desc: 'Campeão da La Liga 2 vezes',         esporte: 'futebol', desbloqueada: false },
    { id: 'tri_laliga',           categoria: 'Competições', nome: 'Tri espanhol',       desc: 'Campeão da La Liga 3 vezes',         esporte: 'futebol', desbloqueada: false },
    { id: 'penta_laliga',         categoria: 'Competições', nome: 'Dinastia espanhola', desc: 'Campeão da La Liga 5 vezes',         esporte: 'futebol', desbloqueada: false },
    { id: 'especialista_laliga',  categoria: 'Competições', nome: 'Veterano da Liga',   desc: 'Disputou 10 campanhas na La Liga',   esporte: 'futebol', desbloqueada: false },
    { id: 'matador_laliga',       categoria: 'Competições', nome: 'Matador da Liga',    desc: 'Marcou 100 gols na La Liga',         esporte: 'futebol', desbloqueada: false },
    // Vôlei (ago/2026) — família própria: campeão/bi/tri mundial, especialista, sacador.
    // Masculino:
    { id: 'campeao_volei_m',      categoria: 'Competições', nome: 'Campeão Mundial (M)',   desc: 'Campeão do Mundial de Vôlei masculino',        esporte: 'volei', desbloqueada: false },
    { id: 'bi_volei_m',           categoria: 'Competições', nome: 'Bicampeão Mundial (M)', desc: 'Campeão do Mundial de Vôlei masculino 2 vezes', esporte: 'volei', desbloqueada: false },
    { id: 'tri_volei_m',          categoria: 'Competições', nome: 'Tricampeão Mundial (M)',desc: 'Campeão do Mundial de Vôlei masculino 3 vezes', esporte: 'volei', desbloqueada: false },
    { id: 'especialista_volei_m', categoria: 'Competições', nome: 'Veterano das Quadras (M)', desc: 'Disputou 10 campanhas no Mundial masculino',  esporte: 'volei', desbloqueada: false },
    { id: 'sacador_volei_m',      categoria: 'Competições', nome: 'Sacador de Elite (M)',  desc: 'Fez 100 sets no Mundial masculino',            esporte: 'volei', desbloqueada: false },
    // Feminino:
    { id: 'campeao_volei_f',      categoria: 'Competições', nome: 'Campeã Mundial (F)',    desc: 'Campeã do Mundial de Vôlei feminino',          esporte: 'volei', desbloqueada: false },
    { id: 'bi_volei_f',           categoria: 'Competições', nome: 'Bicampeã Mundial (F)',  desc: 'Campeã do Mundial de Vôlei feminino 2 vezes',   esporte: 'volei', desbloqueada: false },
    { id: 'tri_volei_f',          categoria: 'Competições', nome: 'Tricampeã Mundial (F)', desc: 'Campeã do Mundial de Vôlei feminino 3 vezes',   esporte: 'volei', desbloqueada: false },
    { id: 'especialista_volei_f', categoria: 'Competições', nome: 'Veterana das Quadras (F)', desc: 'Disputou 10 campanhas no Mundial feminino',  esporte: 'volei', desbloqueada: false },
    { id: 'sacador_volei_f',      categoria: 'Competições', nome: 'Sacadora de Elite (F)', desc: 'Fez 100 sets no Mundial feminino',             esporte: 'volei', desbloqueada: false },
    // ── Basquete (NBA) ──
    { id: 'campeao_nba',      categoria: 'Competições', nome: 'Campeão da NBA',      desc: 'Venceu o título da NBA',              esporte: 'basquete', desbloqueada: false },
    { id: 'bi_nba',           categoria: 'Competições', nome: 'Bicampeão da NBA',    desc: 'Venceu o título da NBA 2 vezes',      esporte: 'basquete', desbloqueada: false },
    { id: 'tri_nba',          categoria: 'Competições', nome: 'Tricampeão da NBA',   desc: 'Venceu o título da NBA 3 vezes',      esporte: 'basquete', desbloqueada: false },
    { id: 'especialista_nba', categoria: 'Competições', nome: 'Veterano das Quadras (NBA)', desc: 'Disputou 10 temporadas na NBA',  esporte: 'basquete', desbloqueada: false },
    { id: 'cestinha_nba',     categoria: 'Competições', nome: 'Cestinha da Liga',    desc: 'Marcou 2000 pontos na NBA',           esporte: 'basquete', desbloqueada: false },
    { id: 'matador_brasil',    categoria: 'Competições', nome: 'Matador nacional',    desc: 'Marcou 100 gols no Brasileirão',    esporte: 'futebol', desbloqueada: false },
    { id: 'matador_copa',      categoria: 'Competições', nome: 'Matador mundial',     desc: 'Marcou 100 gols na Copa do Mundo',  esporte: 'futebol', desbloqueada: false },

    // ── Combinações de jogadores ──
    { id: 'trio_msn',      categoria: 'Combinações', nome: 'MSN',            desc: 'Escalou Messi, Suárez e Neymar juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'trio_bbc',      categoria: 'Combinações', nome: 'BBC',            desc: 'Escalou Bale, Benzema e Cristiano Ronaldo juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'trio_holandes', categoria: 'Combinações', nome: 'Trio holandês',  desc: 'Escalou Gullit, Van Basten e Rijkaard juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'trio_sfm',      categoria: 'Combinações', nome: 'Salah, Firmino e Mané', desc: 'Escalou Salah, Firmino e Mané juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'tres_rs',       categoria: 'Combinações', nome: 'Os 3 Rs',        desc: 'Escalou Ronaldo, Rivaldo e Ronaldinho juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'quadrado_magico', categoria: 'Combinações', nome: 'Quadrado Mágico', desc: 'Escalou Ronaldo, Adriano, Kaká e Ronaldinho juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'pele_garrincha', categoria: 'Combinações', nome: 'Pelé & Garrincha', desc: 'Escalou Pelé e Garrincha juntos — o duo imbatível', esporte: 'futebol', desbloqueada: false },
    { id: 'ro_ro',         categoria: 'Combinações', nome: 'Ro-Ro',          desc: 'Escalou Romário e Ronaldo juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'meio_barca',    categoria: 'Combinações', nome: 'Meio do Barça',   desc: 'Escalou Xavi, Iniesta e Busquets juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'quadrado_82',   categoria: 'Combinações', nome: 'Quadrado de 82',  desc: 'Escalou Zico, Sócrates, Falcão e Cerezo juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'zaga_milan',    categoria: 'Combinações', nome: 'Muralha rossonera', desc: 'Escalou Maldini, Baresi e Nesta juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'alemanha_70',   categoria: 'Combinações', nome: 'Pança alemã',     desc: 'Escalou Gerd Müller, Beckenbauer e Breitner juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'trio_argentino', categoria: 'Combinações', nome: 'Hermanos',       desc: 'Escalou Messi, Di María e Agüero juntos', esporte: 'futebol', desbloqueada: false },
    { id: 'eixo_bayern',   categoria: 'Combinações', nome: 'Espinha do Bayern', desc: 'Escalou Neuer, Lahm e Schweinsteiger juntos', esporte: 'futebol', desbloqueada: false },

    // ── Craques & Feitos (desempenho individual e composição do time) ──
    { id: 'artilheiro_camp', categoria: 'Craques & Feitos', nome: 'Artilheiro',      desc: 'Um jogador seu marcou 15+ gols numa campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'show_individual', categoria: 'Craques & Feitos', nome: 'Show individual', desc: 'Um jogador seu marcou 20+ gols numa campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'garcom',          categoria: 'Craques & Feitos', nome: 'Garçom',          desc: 'Um jogador seu deu 10+ assistências numa campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'maestro',         categoria: 'Craques & Feitos', nome: 'Maestro',         desc: 'Um jogador seu deu 15+ assistências numa campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'craque_completo', categoria: 'Craques & Feitos', nome: 'Craque completo', desc: 'Um jogador com 10+ gols e 10+ assistências na mesma campanha', esporte: 'futebol', desbloqueada: false },
    { id: 'galacticos',      categoria: 'Craques & Feitos', nome: 'Galácticos',      desc: 'Montou um XI com força média 90+', esporte: 'futebol', desbloqueada: false },
    { id: 'so_craques',      categoria: 'Craques & Feitos', nome: 'Só craques',      desc: 'Escalou 11 titulares todos com força 85+', esporte: 'futebol', desbloqueada: false },
    { id: 'zebra',           categoria: 'Craques & Feitos', nome: 'Zebra',           desc: 'Foi campeão com um time de força média 75 ou menos', esporte: 'todos', desbloqueada: false },,

    // ══ VÔLEI — versões próprias das conquistas genéricas ══════════════════════
    // O catálogo antigo só tinha as de "Competições" por esporte; as genéricas eram
    // escritas em vocabulário de FUTEBOL ("gols", "hat-trick", "artilheiro") e apareciam
    // no perfil de vôlei e basquete, onde gol não existe. Estas são as equivalentes.
    { id: 'vl_maquina_pontos', categoria: 'Progressão', nome: 'Máquina de pontos', desc: 'Marcou 1000 pontos no total', esporte: 'volei', desbloqueada: false },
    { id: 'vl_pontuador_mor',  categoria: 'Progressão', nome: 'Pontuador-mor',     desc: 'Marcou 5000 pontos no total', esporte: 'volei', desbloqueada: false },
    { id: 'vl_mil_sets',       categoria: 'Progressão', nome: 'Mil sets',          desc: 'Disputou 1000 sets no total', esporte: 'volei', desbloqueada: false },

    { id: 'vl_sem_ceder',      categoria: 'Placar & Campanha', nome: 'Sem ceder um set', desc: 'Foi campeão sem perder um único set na campanha', esporte: 'volei', desbloqueada: false },
    { id: 'vl_varridao',       categoria: 'Placar & Campanha', nome: 'Varrida',          desc: 'Venceu por 3 a 0',                                esporte: 'volei', desbloqueada: false },
    { id: 'vl_atropelo',       categoria: 'Placar & Campanha', nome: 'Atropelo',         desc: 'Venceu um set por 15 pontos ou mais de vantagem', esporte: 'volei', desbloqueada: false },
    { id: 'vl_virada',         categoria: 'Placar & Campanha', nome: 'A virada',         desc: 'Venceu por 3 a 2 depois de estar perdendo por 2 a 0', esporte: 'volei', desbloqueada: false },
    { id: 'vl_tie_break',      categoria: 'Placar & Campanha', nome: 'No tie-break',     desc: 'Venceu uma final no tie-break',                   esporte: 'volei', desbloqueada: false },
    { id: 'vl_nervos',         categoria: 'Placar & Campanha', nome: 'Nervos de aço',    desc: '2+ mata-matas decididos no tie-break numa campanha', esporte: 'volei', desbloqueada: false },

    { id: 'vl_ponteiro',       categoria: 'Craques & Feitos', nome: 'Ponteiro implacável', desc: 'Um jogador seu marcou 30+ pontos numa partida', esporte: 'volei', desbloqueada: false },
    { id: 'vl_ace_show',       categoria: 'Craques & Feitos', nome: 'Chuva de aces',       desc: 'Um jogador seu fez 5+ aces numa partida',       esporte: 'volei', desbloqueada: false },
    { id: 'vl_muralha_bloq',   categoria: 'Craques & Feitos', nome: 'Muralha de bloqueio', desc: 'Um jogador seu fez 8+ bloqueios numa partida',  esporte: 'volei', desbloqueada: false },
    { id: 'vl_levantador',     categoria: 'Craques & Feitos', nome: 'Levantador de ouro',  desc: 'Um jogador seu deu 40+ assistências numa partida', esporte: 'volei', desbloqueada: false },
    { id: 'vl_selecao_ouro',   categoria: 'Craques & Feitos', nome: 'Seleção de ouro',     desc: 'Montou um sexteto com força média 90+',         esporte: 'volei', desbloqueada: false },

    // ══ BASQUETE — versões próprias das conquistas genéricas ══════════════════
    { id: 'bq_maquina_pontos', categoria: 'Progressão', nome: 'Máquina de cestas', desc: 'Marcou 5000 pontos no total',  esporte: 'basquete', desbloqueada: false },
    { id: 'bq_pontuador_mor',  categoria: 'Progressão', nome: 'Pontuador-mor',     desc: 'Marcou 20000 pontos no total', esporte: 'basquete', desbloqueada: false },
    { id: 'bq_mil_rebotes',    categoria: 'Progressão', nome: 'Mil rebotes',       desc: 'Pegou 1000 rebotes no total',  esporte: 'basquete', desbloqueada: false },

    { id: 'bq_invicto_playoff', categoria: 'Placar & Campanha', nome: 'Playoff perfeito', desc: 'Foi campeão sem perder um jogo nos playoffs',  esporte: 'basquete', desbloqueada: false },
    { id: 'bq_atropelo',        categoria: 'Placar & Campanha', nome: 'Atropelo',         desc: 'Venceu por 30 pontos ou mais',                 esporte: 'basquete', desbloqueada: false },
    { id: 'bq_centena',         categoria: 'Placar & Campanha', nome: 'Passou de cem',    desc: 'Marcou 130+ pontos numa partida',              esporte: 'basquete', desbloqueada: false },
    { id: 'bq_prorrogacao',     categoria: 'Placar & Campanha', nome: 'Na prorrogação',   desc: 'Venceu um jogo decisivo na prorrogação',       esporte: 'basquete', desbloqueada: false },
    { id: 'bq_game7',           categoria: 'Placar & Campanha', nome: 'Jogo 7',           desc: 'Venceu uma série levada até o último jogo',    esporte: 'basquete', desbloqueada: false },
    { id: 'bq_varrida',         categoria: 'Placar & Campanha', nome: 'Vassourada',       desc: 'Venceu uma série sem perder nenhum jogo',      esporte: 'basquete', desbloqueada: false },

    { id: 'bq_cestinha_jogo',  categoria: 'Craques & Feitos', nome: 'Cestinha da noite',  desc: 'Um jogador seu marcou 40+ pontos numa partida', esporte: 'basquete', desbloqueada: false },
    { id: 'bq_duplo_duplo',    categoria: 'Craques & Feitos', nome: 'Duplo-duplo',        desc: 'Um jogador seu fez duplo-duplo numa partida',   esporte: 'basquete', desbloqueada: false },
    { id: 'bq_triplo_duplo',   categoria: 'Craques & Feitos', nome: 'Triplo-duplo',       desc: 'Um jogador seu fez triplo-duplo numa partida',  esporte: 'basquete', desbloqueada: false },
    { id: 'bq_garcom',         categoria: 'Craques & Feitos', nome: 'Armador de elite',   desc: 'Um jogador seu deu 15+ assistências numa partida', esporte: 'basquete', desbloqueada: false },
    { id: 'bq_dream_team',     categoria: 'Craques & Feitos', nome: 'Dream Team',         desc: 'Montou um quinteto com força média 90+',        esporte: 'basquete', desbloqueada: false }

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
    campeao_premier: 'raro', bi_premier: 'raro', tri_premier: 'epico',
    penta_premier: 'lendario', especialista_premier: 'epico', matador_premier: 'epico',
    campeao_serie_a: 'raro', bi_serie_a: 'raro', tri_serie_a: 'epico',
    penta_serie_a: 'lendario', especialista_serie_a: 'epico', matador_serie_a: 'epico',
    campeao_laliga: 'raro', bi_laliga: 'raro', tri_laliga: 'epico',
    penta_laliga: 'lendario', especialista_laliga: 'epico', matador_laliga: 'epico',
    campeao_volei_m: 'raro', bi_volei_m: 'raro', tri_volei_m: 'epico',
    especialista_volei_m: 'epico', sacador_volei_m: 'epico',
    campeao_volei_f: 'raro', bi_volei_f: 'raro', tri_volei_f: 'epico',
    especialista_volei_f: 'epico', sacador_volei_f: 'epico',
    campeao_nba: 'raro', bi_nba: 'raro', tri_nba: 'epico',
    especialista_nba: 'epico', cestinha_nba: 'epico',
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
    maratonista: 'raro', bicentenario: 'epico', imortal: 'lendario', milesimo: 'lendario',

    // ── Vôlei (raridades espelhando as equivalentes do futebol) ──
    vl_maquina_pontos: 'raro', vl_pontuador_mor: 'epico', vl_mil_sets: 'lendario',
    vl_sem_ceder: 'lendario', vl_varridao: 'comum', vl_atropelo: 'raro', vl_virada: 'epico',
    vl_tie_break: 'raro', vl_nervos: 'epico',
    vl_ponteiro: 'raro', vl_ace_show: 'epico', vl_muralha_bloq: 'epico',
    vl_levantador: 'epico', vl_selecao_ouro: 'epico',

    // ── Basquete ──
    bq_maquina_pontos: 'raro', bq_pontuador_mor: 'epico', bq_mil_rebotes: 'epico',
    bq_invicto_playoff: 'lendario', bq_atropelo: 'raro', bq_centena: 'raro',
    bq_prorrogacao: 'raro', bq_game7: 'epico', bq_varrida: 'epico',
    bq_cestinha_jogo: 'raro', bq_duplo_duplo: 'raro', bq_triplo_duplo: 'epico',
    bq_garcom: 'raro', bq_dream_team: 'epico'
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
    // Um objeto só (API). O fallback para um `api` minúsculo caiu junto com o objeto.
    var fonte = (typeof API !== 'undefined' && API.getAchievements)
      ? API.getAchievements()
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

  function desenharConquistas(contAlvo, esporteFiltro) {
    var cont = contAlvo || $('conq-lista');
    if (!cont) return;

    // A lista COMPLETA também respeita o esporte — antes só o bloco de destaque filtrava,
    // então "Ver todas" continuava mostrando as conquistas de futebol no perfil de vôlei.
    var universo = conquistasDoEsporte(esporteFiltro);

    var totalDesb = universo.filter(function (c) { return c.desbloqueada; }).length;
    var totalGeral = universo.length;
    var elTotal = $('conq-contador-total');
    if (elTotal) elTotal.textContent = totalDesb + '/' + totalGeral;

    var html = agrupar(universo).map(function (g) {
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

  // ─────────────── BLOCO DESTAQUE (tela única de perfil) ───────────────
  // Mostra 8 conquistas em destaque: prioriza as DESBLOQUEADAS de maior raridade
  // (lendário→comum); se faltarem, completa com BLOQUEADAS (também por raridade).
  // "Ver todas" abre um modal com o conteúdo completo (igual à antiga aba).
  var PESO_RARIDADE = { lendario: 4, epico: 3, raro: 2, comum: 1 };
  function pesoDe(c) { return PESO_RARIDADE[raridadeDe(c.id)] || 1; }

  // Esporte de uma conquista pelo id: contém 'volei' → vôlei; contém 'basquete'/'nba' →
  // basquete; senão futebol. (As conquistas gerais de progressão — 'veterano', 'centuriao'
  // etc. — não têm esporte no id e caem em 'futebol'; o filtro do toast trata isso à parte.)
  // O esporte agora vem do CAMPO `esporte` do catálogo, não mais adivinhado pelo id.
  // A heurística antiga (regex no id) classificava tudo que não tivesse "volei"/"nba" no
  // nome como futebol — e o id não diz nada sobre o VOCABULÁRIO da conquista. Por isso
  // "Máquina de gols" e "Artilheiro-mor" estavam listadas como GERAIS e apareciam no
  // perfil de vôlei e basquete, esportes onde gol não existe.
  // 'todos' = genuinamente neutra (partidas jogadas, títulos, vitórias, invencibilidade).
  function esporteDaConquista(c) {
    if (c && c.esporte) return c.esporte;
    var id = (c && c.id) || '';                       // fallback p/ ids vindos do servidor
    if (/^vl_|volei/.test(id)) return 'volei';
    if (/^bq_|basquete|nba/.test(id)) return 'basquete';
    return 'futebol';
  }
  function conquistaEhGeral(c) { return esporteDaConquista(c) === 'todos'; }

  // Mantido só para compatibilidade com o toast (que recebe um id solto do servidor).
  var CONQUISTAS_GERAIS = {};
  LISTA_CONQUISTAS.forEach(function (c) { if (c.esporte === 'todos') CONQUISTAS_GERAIS[c.id] = 1; });

  // Universo visível para um esporte: as dele + as genuinamente neutras.
  function conquistasDoEsporte(esporteFiltro) {
    if (!esporteFiltro) return LISTA_CONQUISTAS;
    return LISTA_CONQUISTAS.filter(function (c) {
      var e = esporteDaConquista(c);
      return e === esporteFiltro || e === 'todos';
    });
  }

  function renderConquistasDestaque(esporteFiltro) {
    var cont = $('conq-destaque');
    if (!cont) return;
    cont.innerHTML = '<p class="perfil-carregando">Carregando conquistas…</p>';

    var fonte = (typeof API !== 'undefined' && API.getAchievements)
      ? API.getAchievements() : Promise.resolve([]);

    fonte.then(function (desbloqueadas) {
      if (desbloqueadas === null) {
        cont.innerHTML = '<p class="perfil-vazio">Não foi possível carregar suas conquistas.</p>';
        return;
      }
      var setDesb = {};
      (desbloqueadas || []).forEach(function (d) {
        var id = (typeof d === 'string') ? d : (d && d.achievement_id);
        if (id) setDesb[id] = true;
      });
      LISTA_CONQUISTAS.forEach(function (c) { c.desbloqueada = !!setDesb[c.id]; });

      // filtra pelo esporte (se informado); senão, todas. As conquistas GERAIS de
      // progressão (veterano, primeira vitória, etc.) valem para qualquer esporte, então
      // aparecem em todos os filtros — não somem ao trocar para vôlei/basquete.
      var universo = conquistasDoEsporte(esporteFiltro);

      // ordena: desbloqueadas primeiro, e dentro de cada grupo por raridade desc
      function ordena(a, b) { return pesoDe(b) - pesoDe(a); }
      var desb = universo.filter(function (c) { return c.desbloqueada; }).sort(ordena);
      var bloq = universo.filter(function (c) { return !c.desbloqueada; }).sort(ordena);
      var destaque = desb.concat(bloq).slice(0, 12);

      var totalDesb = desb.length, totalGeral = universo.length;
      var elTotal = $('conq-destaque-total');
      if (elTotal) elTotal.textContent = totalDesb + '/' + totalGeral;

      cont.innerHTML = '<div class="conq-grid conq-grid-destaque">' +
                         destaque.map(cardConquista).join('') +
                       '</div>';
    }).catch(function () {
      cont.innerHTML = '<p class="perfil-vazio">Não foi possível carregar suas conquistas.</p>';
    });
  }

  // Modal "Ver todas as conquistas" — desenha no PRÓPRIO container (sem id duplicado).
  function abrirModalConquistas(esporteFiltro) {
    var ov = document.createElement('div');
    ov.className = 'modal-confirm mc-overlay';
    ov.innerHTML =
      // scroll-fino: padrão único de barra de rolagem do app (base.css). Existem DOIS
      // modais com a classe .mc-conq-box — este (conquistas.js) e o do perfil.js; ambos
      // precisam da classe, senão um deles sai com a scrollbar cheia do sistema.
      '<div class="modal-confirm-box mc-conq-box scroll-fino" role="dialog" aria-modal="true">' +
        '<button type="button" class="mc-conq-fechar" data-fechar aria-label="Fechar">&times;</button>' +
        '<p class="modal-confirm-titulo">Conquistas</p>' +
        '<div class="conq-lista mc-conq-lista"></div>' +
      '</div>';
    document.body.appendChild(ov);

    var alvo = ov.querySelector('.mc-conq-lista');
    alvo.innerHTML = '<p class="perfil-carregando">Carregando conquistas…</p>';

    // carrega o estado real e desenha DENTRO do container do modal
    var fonte = (typeof API !== 'undefined' && API.getAchievements)
      ? API.getAchievements() : Promise.resolve([]);
    fonte.then(function (desbloqueadas) {
      if (desbloqueadas === null) {
        alvo.innerHTML = '<p class="perfil-vazio">Não foi possível carregar suas conquistas.</p>';
        return;
      }
      var setDesb = {};
      (desbloqueadas || []).forEach(function (d) {
        var id = (typeof d === 'string') ? d : (d && d.achievement_id);
        if (id) setDesb[id] = true;
      });
      LISTA_CONQUISTAS.forEach(function (c) { c.desbloqueada = !!setDesb[c.id]; });
      desenharConquistas(alvo, esporteFiltro);   // o modal respeita o esporte do perfil
    }).catch(function () {
      alvo.innerHTML = '<p class="perfil-vazio">Não foi possível carregar suas conquistas.</p>';
    });

    function fechar() { document.removeEventListener('keydown', onKey); if (ov.parentNode) ov.parentNode.removeChild(ov); }
    function onKey(e) { if (e.key === 'Escape') fechar(); }
    ov.addEventListener('click', function (e) {
      if (e.target === ov || (e.target && e.target.hasAttribute && e.target.hasAttribute('data-fechar'))) fechar();
    });
    document.addEventListener('keydown', onKey);
  }

  window.renderConquistasDestaque = renderConquistasDestaque;
  window.abrirModalConquistas = abrirModalConquistas;

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
  // Mostra os toasts das conquistas recém-desbloqueadas.
  // `esporteCampanha` (opcional): esporte da campanha que acabou de ser jogada ('futebol' |
  // 'volei' | 'basquete'). Quando informado, conquistas ESPECÍFICAS de OUTRO esporte são
  // barradas — evita o bug de terminar um vôlei e vir uma conquista de futebol. Conquistas
  // gerais (progressão) passam sempre.
  function mostrarToastConquistas(novas, esporteCampanha) {
    if (!novas || !novas.length) return;
    novas.forEach(function (n) {
      var id = (typeof n === 'string') ? n : (n && n.achievement_id);
      if (!id) return;
      if (esporteCampanha) {
        var espConq = esporteDaConquista({ id: id });
        var geral = !!CONQUISTAS_GERAIS[id];
        if (!geral && espConq !== esporteCampanha) return;   // barra esporte diferente
      }
      _filaToast.push(id);
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
