// regras.js — competições (fonte única) e regras de elegibilidade de posições.

// Fonte única das competições. A chave é o id usado no código; dela saem o valor de
// "competicao" no DADOS, o rótulo exibido e o tema de cor.
// Só Libertadores e Champions têm tema próprio (identidade visual da competição, no
// modo Um Jogador). Brasileirão e Copa usam a paleta da plataforma — sem `tema`, elas
// acompanham o modo claro/escuro. O Multijogador nunca aplica tema de competição.
const COMPETICOES = {
  libertadores: { dados: 'Libertadores', label: 'Libertadores',    tema: 'tema-libertadores' },
  champions:    { dados: 'Champions',    label: 'Champions League', tema: 'tema-champions' },
  brasileirao:  { dados: 'Brasileirão',  label: 'Brasileirão',      formato: 'liga' },
  copa:         { dados: 'Copa do Mundo', label: 'Copa do Mundo' },
  // Premier League — OFFLINE apenas, em BETA (jul/2026). Sem `tema`, acompanha o
  // modo claro/escuro. `formato: 'liga'` reusa o motor de 38 rodadas do Brasileirão.
  premier:      { dados: 'Premier League', label: 'Premier League',  formato: 'liga' },
  // Serie A Italiana — OFFLINE apenas, em BETA (jul/2026). Sem `tema`, acompanha o
  // modo claro/escuro. `formato: 'liga'` reusa o motor de pontos corridos.
  serie_a:      { dados: 'Serie A',        label: 'Serie A',          formato: 'liga' },
  // La Liga (ago/2026) — acervo híbrido: contínuo desde 1990 + edições especiais de
  // times lendários. `formato: 'liga'` reusa o motor de pontos corridos.
  laliga:       { dados: 'La Liga',         label: 'La Liga',          formato: 'liga' },
  // ─── VÔLEI (ago/2026) — Mundial de Seleções, masc. e fem. separados. ───
  // `esporte: 'volei'` marca a bifurcação do motor (a campanha usa isto para saber
  // que NÃO é futebol). `formato: 'mata-mata-volei'` é um formato PRÓPRIO — não colide
  // com os formatos de futebol (liga/grupo/mata-mata), então o fluxo de futebol nunca
  // cai aqui por engano. `dados` casa exatamente com o campo "competicao" dos arquivos
  // js/dados/volei/*.js. Enquanto o vôlei estiver habilitado:false no catálogo de
  // esportes, estas entradas ficam registradas mas inacessíveis pela interface.
  volei_m:      { dados: 'Mundial de Vôlei (M)', label: 'Mundial de Vôlei (M)', formato: 'mata-mata-volei', esporte: 'volei' },
  volei_f:      { dados: 'Mundial de Vôlei (F)', label: 'Mundial de Vôlei (F)', formato: 'mata-mata-volei', esporte: 'volei' },
  // ─── VNL / Liga das Nações (ago/2026) — 2º modo do vôlei. ───
  // `formato: 'vnl'` é PRÓPRIO (fase preliminar em liga + Final Eight), distinto do
  // 'mata-mata-volei' do Mundial. `esporte: 'volei'` mantém a bifurcação do motor.
  // `dados` casa com o campo "competicao" de js/dados/volei/vnl-*.js.
  volei_vnl_m:  { dados: 'VNL (M)', label: 'Liga das Nações (M)', formato: 'vnl', esporte: 'volei' },
  volei_vnl_f:  { dados: 'VNL (F)', label: 'Liga das Nações (F)', formato: 'vnl', esporte: 'volei' },
  // ─── NBA (ago/2026) — 3º esporte (basquete). ───
  // `formato: 'nba'` é PRÓPRIO (conferências + temporada regular + playoffs). `esporte:
  // 'basquete'` bifurca o motor. `dados` casa com "competicao" de js/dados/basquete/nba.js.
  nba:          { dados: 'NBA', label: 'NBA', formato: 'nba', esporte: 'basquete' }
};

// Helper: a competição roda no formato de liga (pontos corridos)?
function ehFormatoLiga(id) {
  return !!(COMPETICOES[id] && COMPETICOES[id].formato === 'liga');
}

// Helper: a competição é de vôlei? (usado para bifurcar o motor da campanha).
// Baseado no marcador `esporte` da entrada — futebol não tem esse campo, então
// retorna false para todas as competições de futebol.
function ehCompeticaoVolei(id) {
  return !!(COMPETICOES[id] && COMPETICOES[id].esporte === 'volei');
}

// Helper: a competição é de basquete? (bifurca o motor da campanha para a NBA).
function ehCompeticaoBasquete(id) {
  return !!(COMPETICOES[id] && COMPETICOES[id].esporte === 'basquete');
}

// Helper: retorna o ESPORTE de uma competição ('futebol' | 'volei' | 'basquete').
// Futebol não marca `esporte` na entrada, então é o padrão. Usado, entre outros,
// para filtrar as conquistas por esporte (evitar que conquista de um esporte apareça
// ao terminar uma campanha de outro).
function esporteDoModo(id) {
  var e = COMPETICOES[id] && COMPETICOES[id].esporte;
  return (e === 'volei' || e === 'basquete') ? e : 'futebol';
}

// Helper: a competição é a VNL / Liga das Nações? (formato 'vnl', dentro do vôlei).
// Usado para bifurcar entre o fluxo do Mundial (grupos+mata) e o da VNL
// (preliminar em liga + Final Eight). Mundial retorna false aqui.
function ehCompeticaoVNL(id) {
  return !!(COMPETICOES[id] && COMPETICOES[id].formato === 'vnl');
}

// Converte o valor de "competicao" dos dados no rótulo exibido (ex.: "Champions" → "Champions League").
function rotuloCompeticao(valorDados) {
  for (var id in COMPETICOES) {
    if (COMPETICOES[id].dados === valorDados) return COMPETICOES[id].label;
  }
  return valorDados;
}

// Códigos de posição que uma vaga aceita. As alas ME/MD também aceitam o ponta do
// mesmo lado (PE→ME, PD→MD); as demais vagas só aceitam a posição exata.
function codigosAceitos(codigoVaga) {
  var mapa = {
    'ME': ['ME', 'PE'],
    'MD': ['MD', 'PD']
  };
  return mapa[codigoVaga] || [codigoVaga];
}

// Retorna true se o jogador tem ao menos uma posição aceita pela vaga.
function podeOcupar(jogador, codigoVaga) {
  var aceitos = codigosAceitos(codigoVaga);
  return jogador.posicoes.some(function (p) { return aceitos.indexOf(p) >= 0; });
}
