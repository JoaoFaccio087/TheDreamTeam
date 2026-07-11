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
    'Vitória':             ['#E30613', '#000000']
  };

  // Aliases: nomes diferentes para o MESMO clube → apontam para a mesma entrada (sem duplicar).
  var ALIAS_CLUBES = {
    'Red Bull Bragantino': 'Bragantino',
    'Vasco da Gama':       'Vasco',
    'Holanda':             'Países Baixos'
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
    'Emirados Árabes Unidos': 'AE', 'Haiti': 'HT', 'Jordânia': 'JO', 'Uzbequistão': 'UZ'
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
