// ============================================================
//  escudos-cores.js — paleta oficial por clube/seleção (dado, não lógica)
//  ------------------------------------------------------------
//  Alimenta o gerador js/escudos.js. Só CORES: o "formato" e o "padrão" que vinham
//  nos rascunhos do Gemini foram descartados — nosso gerador usa uma silhueta única
//  e escolhe o padrão pela seed, então aqueles campos não se aplicavam.
//
//  A CHAVE deve bater com o nome do clube como aparece nos dados do jogo (js/dados/*).
//  Ainda NÃO é consumido por ninguém — entra em uso quando ligarmos os escudos ao jogo.
//
//  Fonte: cores de marca informadas pelo João (via Gemini), conferidas e corrigidas
//  onde estavam claramente erradas (ex.: Grêmio usa azul celeste #0A9BDC, não #00A6FF).
// ============================================================
(function () {
  'use strict';

  // clube → [cor primária, cor secundária, (3ª opcional)]. CHAVES = nome exato em js/dados/*.
  var CORES_CLUBES = {

    // ============================================================
    //  BRASILEIRÃO — clubes brasileiros
    //  (os que também jogam a Libertadores estão listados de novo,
    //   como comentário, na seção da Libertadores — só para conferência)
    // ============================================================
    'América-RJ':          ['#00913F', '#FFFFFF'],
    'Athletico-PR':        ['#B10000', '#000000'],
    'Atlético-MG':         ['#000000', '#FFFFFF'],
    'Avaí':                ['#004B8D', '#FFFFFF'],
    'Bahia':               ['#0056A7', '#E30613', '#FFFFFF'],
    'Bangu':               ['#E30613', '#FFFFFF'],
    'Botafogo':            ['#000000', '#FFFFFF'],
    'Bragantino':          ['#FFFFFF', '#C0142B'],
    'Brasil de Pelotas':   ['#E30613', '#000000'],
    'Corinthians':         ['#FFFFFF', '#000000'],
    'Coritiba':            ['#00543C', '#FFFFFF'],
    'Cruzeiro':            ['#0A2C6B', '#FFFFFF'],
    'Flamengo':            ['#C52613', '#000000'],
    'Fluminense':          ['#7A0026', '#006437', '#FFFFFF'],
    'Fortaleza':           ['#003DA5', '#E30613'],
    'Goiás':               ['#006437', '#FFFFFF'],
    'Grêmio':              ['#0A9BDC', '#000000', '#FFFFFF'],
    'Guarani':             ['#006437', '#FFFFFF'],
    'Internacional':       ['#C4122E', '#FFFFFF'],
    'Londrina':            ['#003DA5', '#FFFFFF'],
    'Mirassol':            ['#FFD200', '#006437'],
    'Náutico':             ['#C4122E', '#FFFFFF'],
    'Operário-MS':         ['#000000', '#FFFFFF'],
    'Palmeiras':           ['#006437', '#FFFFFF'],
    'Paraná':              ['#004B8D', '#E30613'],
    'Ponte Preta':         ['#000000', '#FFFFFF'],
    'Portuguesa':          ['#006437', '#E30613', '#FFFFFF'],
    'Santa Cruz':          ['#C4122E', '#000000', '#FFFFFF'],
    'Santos':              ['#FFFFFF', '#000000'],
    'Sport':               ['#C4122E', '#000000'],
    'São Caetano':         ['#003DA5', '#FFD200', '#006437'],
    'São Paulo':           ['#FFFFFF', '#FE0000', '#000000'],
    'Vasco':               ['#000000', '#FFFFFF'],
    'Vitória':             ['#E30613', '#000000'],

    // ============================================================
    //  LIBERTADORES — clubes sul-americanos (cores reais dos mantos)
    //  Brasileiros que também jogam a Liberta e já estão acima:
    //  Flamengo · Palmeiras · Corinthians · São Paulo · Santos · Grêmio ·
    //  Internacional · Cruzeiro · Atlético-MG · Athletico-PR · Botafogo ·
    //  Fluminense · Vasco · São Caetano
    // ============================================================

    // --- ARGENTINA ---
    'Boca Juniors':        ['#0A2A66', '#FFD100'],
    'River Plate':         ['#FFFFFF', '#E1122C'],
    'Independiente':       ['#E30613', '#FFFFFF'],
    'Racing':              ['#6CACE4', '#FFFFFF'],
    'San Lorenzo':         ['#0A2A66', '#E30613'],
    'Estudiantes':         ['#FFFFFF', '#E30613'],
    'Vélez Sarsfield':     ['#FFFFFF', '#0A2A66'],
    'Argentinos Juniors':  ['#E30613', '#FFFFFF'],
    'Newell\'s Old Boys':  ['#FFFFFF', '#E30613'],
    'Rosario Central':     ['#FFFFFF', '#0A2A66'],
    'Lanús':               ['#6E1E2E', '#FFFFFF'],
    'Huracán':             ['#FFFFFF', '#E30613'],

    // --- URUGUAI ---
    'Peñarol':             ['#FFD100', '#000000'],
    'Nacional':            ['#FFFFFF', '#0A2A66', '#E30613'],
    'Defensor Sporting':   ['#5B2E86', '#FFFFFF'],
    'Danubio':             ['#FFFFFF', '#1A1A1A'],

    // --- CHILE ---
    'Colo-Colo':           ['#0A4C96', '#FFFFFF'],
    'Universidad de Chile': ['#0A2A66', '#E30613'],
    'Universidad Católica': ['#FFFFFF', '#0A4C96'],
    'Cobreloa':            ['#F58220', '#FFFFFF'],
    'Palestino':           ['#FFFFFF', '#007A33', '#E30613'],
    'Unión Española':      ['#E30613', '#FFFFFF'],
    'O\'Higgins':          ['#6CACE4', '#000000'],

    // --- COLÔMBIA ---
    'Atlético Nacional':   ['#007A33', '#FFFFFF'],
    'Millonarios':         ['#0A2A66', '#FFFFFF'],
    'Independiente Santa Fe': ['#E30613', '#FFFFFF'],
    'Deportivo Cali':      ['#007A33', '#FFFFFF'],
    'América de Cali':     ['#E30613', '#FFFFFF'],
    'Independiente Medellín': ['#E30613', '#0A2A66'],
    'Junior':              ['#E30613', '#FFFFFF'],
    'Once Caldas':         ['#FFFFFF', '#007A33', '#E30613'],
    'Deportes Tolima':     ['#B10000', '#FFD100'],
    'Cúcuta Deportivo':    ['#E30613', '#000000'],

    // --- PERU ---
    'Universitario':       ['#F2EDDC', '#7B1B2F'],
    'Alianza Lima':        ['#0A2A66', '#FFFFFF'],
    'Sporting Cristal':    ['#6CACE4', '#FFFFFF'],
    'Defensor Lima':       ['#7B1B2F', '#FFFFFF'],

    // --- EQUADOR ---
    'LDU':                 ['#FFFFFF', '#0A2A66'],
    'Barcelona-EQU':       ['#FFD100', '#E30613'],
    'Emelec':              ['#0A2A66', '#FFFFFF'],
    'El Nacional':         ['#E30613', '#0A2A66'],
    'Independiente del Valle': ['#FFFFFF', '#1A1A1A'],

    // --- PARAGUAI ---
    'Olimpia':             ['#FFFFFF', '#000000'],
    'Cerro Porteño':       ['#E30613', '#0A2A66'],
    'Libertad':            ['#FFFFFF', '#000000'],
    'Guaraní':             ['#000000', '#FFD100'],
    'Nacional-PAR':        ['#E30613', '#FFFFFF'],

    // --- BOLÍVIA ---
    'Bolívar':             ['#6CACE4', '#FFFFFF'],
    'Jorge Wilstermann':   ['#E30613', '#FFFFFF'],
    'Blooming':            ['#6CACE4', '#FFFFFF'],
    'San Cristóbal':       ['#FFFFFF', '#0A2A66'],
    'Universidad de Los Andes': ['#0A2A66', '#FFFFFF'],

    // --- MÉXICO (convidados) ---
    'Cruz Azul':           ['#0A2A66', '#FFFFFF'],
    'Chivas Guadalajara':  ['#FFFFFF', '#E30613'],
    'América-MEX':         ['#FFD100', '#0A2A66'],
    'Tigres UANL':         ['#FFD100', '#0A2A66']
  };

  // Aliases: nomes diferentes para o MESMO clube → apontam para a mesma entrada (sem duplicar).
  var ALIAS_CLUBES = {
    'Red Bull Bragantino': 'Bragantino',
    'Vasco da Gama':       'Vasco',
    'Holanda':             'Países Baixos',
    // Sul-americanos: a base usa nomes variados para o mesmo clube.
    // CUIDADO: os vários "Nacional" são clubes DIFERENTES (URU, PAR, Atlético Nacional-COL,
    // El Nacional-EQU) — só o "Nacional-URU" é alias do "Nacional" (uruguaio).
    'Atlético Mineiro':    'Atlético-MG',
    'LDU Quito':           'LDU',
    'Nacional-URU':        'Nacional'
  };
  function resolveAlias(nome) { return ALIAS_CLUBES[nome] || nome; }

  // Estilo fiel à camisa/escudo de cada clube. CHAVES = nome exato em js/dados/*.
  var ESTILO_CLUBES = {
    'Grêmio':              { padrao: 'listras-v', listras: 4, inverter: true },
    'Atlético-MG':         { padrao: 'listras-finas', listras: 7 },
    'Athletico-PR':        { padrao: 'listras-finas', listras: 6 },
    // Botafogo: preto com ESTRELA branca grande no centro (o escudo, não a camisa).
    'Botafogo':            { padrao: 'estrela-central' },
    'Bahia':               { padrao: 'tri-h' },
    // São Paulo: branco com faixa horizontal metade vermelha, metade preta.
    'São Paulo':           { padrao: 'faixa-bicolor' },
    'Vasco':               { padrao: 'diagonal', inverter: true },
    'Fluminense':          { padrao: 'listras-v', listras: 3 },
    'Internacional':       { padrao: 'solido' },
    'Flamengo':            { padrao: 'faixa-h' },
    'Corinthians':         { padrao: 'solido' },
    'Santos':              { padrao: 'solido' },
    'Cruzeiro':            { padrao: 'cruzeiro-do-sul' },
    'Palmeiras':           { padrao: 'solido' },
    'Goiás':               { padrao: 'solido' },
    'Coritiba':            { padrao: 'listras-finas', listras: 6 },
    'Bragantino':          { padrao: 'faixa-h' },
    'Sport':               { padrao: 'listras-v', listras: 4 },
    'Vitória':             { padrao: 'listras-v', listras: 4 },
    'Portuguesa':          { padrao: 'faixa-h' },
    'Ponte Preta':         { padrao: 'listras-finas', listras: 7 },
    'Guarani':             { padrao: 'faixa-h' },
    'Náutico':             { padrao: 'listras-v', listras: 4 },
    'Santa Cruz':          { padrao: 'tri-h' },
    'Avaí':                { padrao: 'faixa-h' },
    'Paraná':              { padrao: 'listras-v', listras: 4 },
    'Brasil de Pelotas':   { padrao: 'listras-v', listras: 4 },
    'São Caetano':         { padrao: 'metade' },

    // ============================================================
    //  LIBERTADORES — padrão de cada clube sul-americano.
    //  IMPORTANTE: sem entrada aqui, o padrão é SORTEADO pela seed e sai errado
    //  (Boca sem a faixa, Peñarol sem listras, Nacional sem a diagonal...).
    // ============================================================
    // --- ARGENTINA ---
    'Boca Juniors':        { padrao: 'faixa-h' },                    // azul, faixa amarela
    'River Plate':         { padrao: 'diagonal' },                   // branco, banda vermelha
    'Independiente':       { padrao: 'solido' },                     // todo vermelho
    'Racing':              { padrao: 'listras-v', listras: 4 },      // celeste e branco
    'San Lorenzo':         { padrao: 'listras-v', listras: 4 },      // azul e vermelho
    'Estudiantes':         { padrao: 'listras-v', listras: 4 },      // branco e vermelho
    'Vélez Sarsfield':     { padrao: 'diagonal' },                   // branco, V azul
    'Argentinos Juniors':  { padrao: 'solido' },
    'Newell\'s Old Boys':  { padrao: 'metade' },                     // metade vermelha, metade preta→usa 2ª cor
    'Rosario Central':     { padrao: 'listras-v', listras: 4 },      // azul e amarelo
    'Lanús':               { padrao: 'solido' },                     // granate
    'Huracán':             { padrao: 'solido' },
    // --- URUGUAI ---
    'Peñarol':             { padrao: 'listras-v', listras: 4 },      // amarelo e preto
    'Nacional':            { padrao: 'diagonal' },                   // branco, banda azul
    'Defensor Sporting':   { padrao: 'listras-v', listras: 4 },
    'Danubio':             { padrao: 'diagonal' },                   // branco, banda preta
    // --- CHILE ---
    'Colo-Colo':           { padrao: 'faixa-h' },                    // azul, faixa branca
    'Universidad de Chile': { padrao: 'solido' },                    // azul
    'Universidad Católica': { padrao: 'diagonal' },                  // branco, banda azul
    'Cobreloa':            { padrao: 'solido' },                     // laranja
    'Palestino':           { padrao: 'tri-v' },                      // branco/verde/vermelho em pé
    'Unión Española':      { padrao: 'solido' },
    'O\'Higgins':          { padrao: 'solido' },                     // celeste
    // --- COLÔMBIA ---
    'Atlético Nacional':   { padrao: 'listras-v', listras: 4 },      // verde e branco
    'Millonarios':         { padrao: 'solido' },                     // azul
    'Independiente Santa Fe': { padrao: 'solido' },                  // vermelho
    'Deportivo Cali':      { padrao: 'diagonal' },                   // verde, banda branca
    'América de Cali':     { padrao: 'solido' },                     // vermelho
    'Independiente Medellín': { padrao: 'listras-v', listras: 4 },
    'Junior':              { padrao: 'listras-v', listras: 4 },      // vermelho e branco
    'Once Caldas':         { padrao: 'tri-v' },                      // branco/verde/vermelho
    'Deportes Tolima':     { padrao: 'solido' },
    'Cúcuta Deportivo':    { padrao: 'solido' },
    // --- PERU ---
    'Universitario':       { padrao: 'solido' },                     // creme
    'Alianza Lima':        { padrao: 'solido' },                     // azul
    'Sporting Cristal':    { padrao: 'diagonal' },                   // celeste, banda branca
    'Defensor Lima':       { padrao: 'solido' },                     // granate
    // --- EQUADOR ---
    'LDU':                 { padrao: 'solido' },                     // todo branco (manto da LDU)
    'Barcelona-EQU':       { padrao: 'listras-v', listras: 4 },      // amarelo e vermelho
    'Emelec':              { padrao: 'solido' },                     // azul
    'El Nacional':         { padrao: 'listras-v', listras: 4 },
    'Independiente del Valle': { padrao: 'listras-v', listras: 4 },  // branco e preto
    // --- PARAGUAI ---
    'Olimpia':             { padrao: 'solido' },                     // branco
    'Cerro Porteño':       { padrao: 'listras-v', listras: 4 },      // vermelho e azul
    'Libertad':            { padrao: 'listras-v', listras: 4 },      // branco e preto
    'Guaraní':             { padrao: 'listras-v', listras: 4 },      // preto e amarelo
    'Nacional-PAR':        { padrao: 'diagonal' },                   // vermelho, banda branca
    // --- BOLÍVIA ---
    'Bolívar':             { padrao: 'solido' },                     // celeste
    'Jorge Wilstermann':   { padrao: 'solido' },
    'Blooming':            { padrao: 'solido' },                     // celeste
    'San Cristóbal':       { padrao: 'solido' },
    'Universidad de Los Andes': { padrao: 'solido' },
    // --- MÉXICO (convidados) ---
    'Cruz Azul':           { padrao: 'solido' },                     // azul
    'Chivas Guadalajara':  { padrao: 'listras-v', listras: 4 },      // branco e vermelho
    'América-MEX':         { padrao: 'solido' },                     // amarelo
    'Tigres UANL':         { padrao: 'solido' },                     // amarelo
    'Guarani':             { padrao: 'faixa-h' }
  };

  // seleção → ISO-2 (o gerador desenha a bandeira a partir do código do país).
  // Cobre as seleções mais frequentes; entidades históricas (URSS, Iugoslávia…) e países sem
  // bandeira desenhada no gerador caem no fallback (iniciais sobre cinza).
  var PAIS_SELECAO = {
    'Alemanha': 'DE', 'Argentina': 'AR', 'Brasil': 'BR', 'Espanha': 'ES',
    'França': 'FR', 'Holanda': 'NL', 'Países Baixos': 'NL', 'Inglaterra': 'EN', 'Itália': 'IT',
    'Portugal': 'PT', 'Uruguai': 'UY', 'Bélgica': 'BE', 'Estados Unidos': 'US',
    'México': 'MX', 'Chile': 'CL', 'Colômbia': 'CO', 'Japão': 'JP',
    'Croácia': 'HR', 'Polônia': 'PL', 'Peru': 'PE', 'Equador': 'EC',
    'Suécia': 'SE', 'Dinamarca': 'DK', 'Suíça': 'CH', 'Nigéria': 'NG',
    'Camarões': 'CM', 'Gana': 'GH',
    'Sérvia': 'RS', 'Rússia': 'RU', 'Áustria': 'AT', 'Marrocos': 'MA',
    'Senegal': 'SN', 'Escócia': 'SCO', 'Paraguai': 'PY',
    'Turquia': 'TR', 'Grécia': 'GR', 'Noruega': 'NO', 'Hungria': 'HU',
    'Romênia': 'RO', 'Bulgária': 'BG', 'Costa Rica': 'CR', 'Coreia do Sul': 'KR',
    'Irlanda': 'IE', 'Ucrânia': 'UA', 'Tchéquia': 'CZ', 'Eslováquia': 'SK',
    'Eslovênia': 'SI', 'Islândia': 'IS', 'Argélia': 'DZ', 'Austrália': 'AU',
    'Tunísia': 'TN', 'Egito': 'EG', 'África do Sul': 'ZA', 'Canadá': 'CA',
    'China': 'CN', 'Arábia Saudita': 'SA', 'Catar': 'QA', 'Irã': 'IR',
    'País de Gales': 'WAL', 'Costa do Marfim': 'CI', 'Bolívia': 'BO', 'Honduras': 'HN',
    'Panamá': 'PA', 'Jamaica': 'JM', 'Nova Zelândia': 'NZ', 'Cuba': 'CU',
    'Angola': 'AO', 'Bósnia e Herzegovina': 'BA', 'El Salvador': 'SV', 'Iraque': 'IQ',
    'Israel': 'IL', 'Togo': 'TG', 'União Soviética': 'SU', 'Irlanda do Norte': 'NIR',
    'Iugoslávia': 'YU', 'Tchecoslováquia': 'CS', 'Coreia do Norte': 'KP', 'Cabo Verde': 'CV',
    'Emirados Árabes Unidos': 'AE', 'Haiti': 'HT', 'Jordânia': 'JO', 'Uzbequistão': 'UZ',
    'Alemanha Oriental': 'DDR', 'Curaçao': 'CW', 'Kuwait': 'KW', 'República Democrática do Congo': 'CD',
    'Sérvia e Montenegro': 'SCG', 'Trinidad e Tobago': 'TT', 'Zaire': 'ZAI',
    'Índias Orientais Holandesas': 'NEI'
  };

  // Paleta de reserva para clubes fora do mapa manual: cores derivadas do NOME, de forma
  // determinística. Não é a cor "real" do clube, mas é estável (o mesmo clube tem sempre a mesma)
  // e evita ter de catalogar 176 clubes à mão. O mapa manual acima tem prioridade.
  var PALETA_RESERVA = [
    ['#C4122E', '#FFFFFF'], ['#006437', '#FFFFFF'], ['#0A2C6B', '#FFFFFF'],
    ['#000000', '#FFFFFF'], ['#F4D40C', '#000000'], ['#7A0026', '#F4D40C'],
    ['#003DA5', '#E30613'], ['#5A2D82', '#FFFFFF'], ['#E35205', '#000000'],
    ['#0A9BDC', '#0A2C6B']
  ];
  function hashNome(s) {
    var h = 0; s = String(s || '');
    for (var i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  // Títulos de Copa do Mundo = estrelas no escudo (dado real, não aleatório).
  // Brasil 5, Alemanha/Itália 4, Argentina 3, Uruguai/França 2, Espanha/Inglaterra 1.
  var TITULOS_SELECAO = {
    'Brasil': 5, 'Alemanha': 4, 'Itália': 4, 'Argentina': 3,
    'Uruguai': 2, 'França': 2, 'Espanha': 1, 'Inglaterra': 1
  };

  var API = {
    // Cor real (mapa) quando existe; senão, uma paleta de reserva estável derivada do nome.
    // Resolve alias antes (Red Bull Bragantino → Bragantino, etc.).
    coresClube: function (nome) {
      var n = resolveAlias(nome);
      return CORES_CLUBES[n] || PALETA_RESERVA[hashNome(n) % PALETA_RESERVA.length];
    },
    // Só a cor CATALOGADA (null se não houver) — útil para saber se temos a cor oficial.
    corOficialClube: function (nome) { return CORES_CLUBES[resolveAlias(nome)] || null; },
    // Estilo fixo (padrão) de um clube, se houver.
    estiloClube: function (nome) { return ESTILO_CLUBES[resolveAlias(nome)] || null; },
    isoSelecao: function (nome) { return PAIS_SELECAO[resolveAlias(nome)] || null; },
    // Estrelas de título mundial de uma seleção (0 se não tiver/for desconhecida).
    estrelasSelecao: function (nome) { return TITULOS_SELECAO[resolveAlias(nome)] || 0; },
    todosClubes: function () { return Object.keys(CORES_CLUBES); },
    todasSelecoes: function () { return Object.keys(PAIS_SELECAO); }
  };

  if (typeof window !== 'undefined') window.EscudosCores = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})();
