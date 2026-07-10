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

  // clube → [cor primária, cor secundária, (3ª cor opcional p/ tricolores)]
  // Alguns clubes têm um "estilo" fixo: padrao (listras-v, faixa-h…) e/ou uma cor terciária.
  var CORES_CLUBES = {
    'Athletico-PR':   ['#B10000', '#000000'],
    'Atlético-GO':    ['#E30613', '#000000'],
    'Atlético-MG':    ['#000000', '#FFFFFF'],
    'Bahia':          ['#0056A7', '#E30613', '#FFFFFF'],
    'Botafogo':       ['#000000', '#FFFFFF'],
    'Bragantino':     ['#FFFFFF', '#C0142B'],
    'Ceará':          ['#000000', '#FFFFFF'],
    'Corinthians':    ['#FFFFFF', '#000000'],
    'Criciúma':       ['#F4D40C', '#000000'],
    'Cruzeiro':       ['#0A2C6B', '#FFFFFF'],
    'Cuiabá':         ['#006437', '#F4D40C'],
    'Flamengo':       ['#C52613', '#000000'],
    'Fluminense':     ['#7A0026', '#006437', '#FFFFFF'],
    'Fortaleza':      ['#003DA5', '#E30613'],
    'Goiás':          ['#006437', '#FFFFFF'],
    'Grêmio':         ['#0A9BDC', '#000000', '#FFFFFF'],
    'Internacional':  ['#C4122E', '#FFFFFF'],
    'Juventude':      ['#006437', '#FFFFFF'],
    'Palmeiras':      ['#006437', '#FFFFFF'],
    'Santos':         ['#FFFFFF', '#000000'],
    'São Paulo':      ['#FE0000', '#000000', '#FFFFFF'],
    'Sport Recife':   ['#C4122E', '#000000'],
    'Vasco da Gama':  ['#000000', '#FFFFFF'],
    'Vitória':        ['#E30613', '#000000']
  };

  // Estilo fixo por clube: padrão do desenho e nº de estrelas (só onde faz sentido).
  var ESTILO_CLUBES = {
    'Atlético-MG':   { padrao: 'listras-v' },   // alvinegro listrado
    'Botafogo':      { padrao: 'solido', estrela: 1 },
    'Athletico-PR':  { padrao: 'listras-v' },
    'Grêmio':        { padrao: 'faixa-h' },      // tricolor em faixas
    'Bahia':         { padrao: 'faixa-h' },
    'São Paulo':     { padrao: 'faixa-h' },
    'Internacional': { padrao: 'solido' },
    'Vasco da Gama': { padrao: 'diagonal' }      // a faixa diagonal característica
  };

  // seleção → ISO-2 (o gerador desenha a bandeira a partir do código do país).
  // Cobre as seleções mais frequentes; entidades históricas (URSS, Iugoslávia…) e países sem
  // bandeira desenhada no gerador caem no fallback (iniciais sobre cinza).
  var PAIS_SELECAO = {
    'Alemanha': 'DE', 'Argentina': 'AR', 'Brasil': 'BR', 'Espanha': 'ES',
    'França': 'FR', 'Holanda': 'NL', 'Países Baixos': 'NL', 'Inglaterra': 'EN', 'Itália': 'IT',
    'Portugal': 'PT', 'Uruguai': 'UY', 'Bélgica': 'BE', 'Estados Unidos': 'US',
    'México': 'MX', 'Chile': 'CL', 'Colômbia': 'CO', 'Japão': 'JP',
    'Croácia': 'HR', 'Polônia': 'PL', 'Peru': 'PE', 'Equador': 'EC'
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

  var API = {
    // Cor real (mapa) quando existe; senão, uma paleta de reserva estável derivada do nome.
    coresClube: function (nome) {
      return CORES_CLUBES[nome] || PALETA_RESERVA[hashNome(nome) % PALETA_RESERVA.length];
    },
    // Só a cor CATALOGADA (null se não houver) — útil para saber se temos a cor oficial.
    corOficialClube: function (nome) { return CORES_CLUBES[nome] || null; },
    // Estilo fixo (padrão/estrela) de um clube, se houver.
    estiloClube: function (nome) { return ESTILO_CLUBES[nome] || null; },
    isoSelecao: function (nome) { return PAIS_SELECAO[nome] || null; },
    todosClubes: function () { return Object.keys(CORES_CLUBES); },
    todasSelecoes: function () { return Object.keys(PAIS_SELECAO); }
  };

  if (typeof window !== 'undefined') window.EscudosCores = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})();
