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
  // ============================================================
  //  CORES — BRASILEIRÃO (clubes brasileiros)
  //  Os brasileiros que também jogam a Libertadores ficam SÓ aqui:
  //  são o mesmo clube, e duplicar criaria risco de divergência.
  // ============================================================
  var CORES_BRASILEIRAO = {
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

  };

  // ============================================================
  //  CORES — LIBERTADORES (clubes sul-americanos + convidados)
  //  Brasileiros que também disputam a Liberta e vêm de CORES_BRASILEIRAO:
  //  Flamengo · Palmeiras · Corinthians · São Paulo · Santos · Grêmio ·
  //  Internacional · Cruzeiro · Atlético-MG · Athletico-PR · Botafogo ·
  //  Fluminense · Vasco · São Caetano
  // ============================================================
  var CORES_LIBERTADORES = {
    // --- ARGENTINA ---
    'Boca Juniors':        ['#0A2A66', '#FFD100'],
    'River Plate':         ['#FFFFFF', '#E1122C'],
    'Independiente':       ['#E30613', '#FFFFFF'],
    'Racing':              ['#6CACE4', '#FFFFFF'],
    'San Lorenzo':         ['#0A2A66', '#E30613'],
    'Estudiantes':         ['#FFFFFF', '#E30613'],
    'Vélez Sarsfield':     ['#FFFFFF', '#0A2A66'],
    'Argentinos Juniors':  ['#E30613', '#FFFFFF'],
    'Newell\'s Old Boys':  ['#E30613', '#000000'],
    'Rosario Central':     ['#FFFFFF', '#0A2A66'],
    'Lanús':               ['#6E1E2E', '#FFFFFF'],
    'Huracán':             ['#FFFFFF', '#E30613'],

    // --- URUGUAI ---
    'Peñarol':             ['#FFD100', '#000000'],
    'Nacional':            ['#0A2A66', '#FFFFFF', '#E30613'],
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
    'Independiente Santa Fe': ['#FFFFFF', '#E30613'],
    'Deportivo Cali':      ['#007A33', '#FFFFFF'],
    'América de Cali':     ['#E30613', '#FFFFFF'],
    'Independiente Medellín': ['#E30613', '#0A2A66'],
    'Junior':              ['#E30613', '#FFFFFF'],
    'Once Caldas':         ['#007A33', '#FFFFFF', '#E30613', '#0A2A66'],
    'Deportes Tolima':     ['#B10000', '#FFD100'],
    'Cúcuta Deportivo':    ['#E30613', '#000000'],

    // --- PERU ---
    'Universitario':       ['#F2EDDC', '#7B1B2F'],
    'Alianza Lima':        ['#0A2A66', '#FFFFFF'],
    'Sporting Cristal':    ['#6CACE4', '#FFFFFF'],
    'Defensor Lima':       ['#7B1B2F', '#FFFFFF'],

    // --- EQUADOR ---
    'LDU':                 ['#0A2A66', '#E30613'],
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

  // Junta as competições num mapa único (o resto do código usa só este).
  // Para adicionar a Champions: criar CORES_CHAMPIONS e incluir aqui.
  // ============================================================
  //  CHAMPIONS — cor REAL + padrão FIXO  (LOTE 1 de ~5: os mais icônicos)
  //  ⚠️ Cada clube PRECISA de entrada AQUI **E** em ESTILO_CHAMPIONS.
  //     Só a cor não basta: sem ESTILO o padrão é sorteado pela seed e sai errado.
  //     Foi exatamente o que custou 25 escudos na Libertadores.
  // ============================================================
  var CORES_CHAMPIONS = {
    // --- ESPANHA ---
    'Real Madrid':          ['#FFFFFF', '#C9A227'],
    'Barcelona':            ['#004D98', '#A50044'],
    'Atlético de Madrid':   ['#FFFFFF', '#CB3524'],
    // --- ITÁLIA ---
    'Juventus':             ['#FFFFFF', '#000000'],
    'Milan':                ['#FB090B', '#000000'],
    'Inter de Milão':       ['#0068A8', '#000000'],
    // --- INGLATERRA ---
    'Liverpool':            ['#C8102E', '#F6EB61'],
    'Manchester United':    ['#DA291C', '#FBE122'],
    'Chelsea':              ['#034694', '#FFFFFF'],
    'Arsenal':              ['#FFFFFF', '#EF0107'],
    // --- ALEMANHA ---
    'Bayern de Munique':    ['#DC052D', '#0066B2'],
    'Borussia Dortmund':    ['#FDE100', '#000000'],
    // --- HOLANDA ---
    'Ajax':                 ['#FFFFFF', '#D2122E'],
    // --- FRANÇA ---
    'PSG':                  ['#004170', '#DA291C'],
    // --- PORTUGAL ---
    'Benfica':              ['#E00034', '#FFFFFF'],
    'Porto':                ['#FFFFFF', '#004B9B'],

    // --- LOTE 2: os 61 restantes (cor real + forma; refino depois) ---
    '1. FC Köln':              ['#FFFFFF', '#E32219'],
    'Anderlecht':              ['#4B2E83', '#FFFFFF'],
    'Aston Villa':             ['#95BFE5', '#670E36'],
    'Austria Wien':            ['#5B2C86', '#FFFFFF'],
    'Bayer Leverkusen':        ['#E32221', '#000000'],
    'Bordeaux':                ['#000E3C', '#FFFFFF'],
    'Borussia Mönchengladbach': ['#FFFFFF', '#000000'],
    'CSKA Red Flag':           ['#CE1126', '#FFFFFF'],
    'CSKA Sofia':              ['#CE1126', '#FFFFFF'],
    'Celtic':                  ['#FFFFFF', '#008B5A'],
    'Club Brugge':             ['#005BAA', '#000000'],
    'Deportivo La Coruña':     ['#FFFFFF', '#0070B8'],
    'Derby County':            ['#FFFFFF', '#000000'],
    'Dinamo București':        ['#FFFFFF', '#E30613'],
    'Dukla Prague':            ['#FFD700', '#E30613'],
    'Dundee':                  ['#000E3C', '#FFFFFF'],
    'Dundee United':           ['#FF6600', '#000000'],
    'Dynamo Kyiv':             ['#FFFFFF', '#005BAA'],
    'Eintracht Frankfurt':     ['#000000', '#E1000F'],
    'Feyenoord':               ['#FFFFFF', '#E30613'],
    'Fiorentina':              ['#582C83', '#FFFFFF'],
    'Galatasaray':             ['#A90432', '#FBB800'],
    'Győr':                    ['#008B5A', '#FFFFFF'],
    'Hamburg':                 ['#FFFFFF', '#0A2A66'],
    'Hibernian':               ['#008B5A', '#FFFFFF'],
    'IFK Göteborg':            ['#0057A5', '#FFFFFF'],
    'Leeds United':            ['#FFFFFF', '#1D428A'],
    'Legia Warsaw':            ['#FFFFFF', '#006A4E'],
    'Lyon':                    ['#123B85', '#E30613'],
    'Malmö FF':                ['#6CACE4', '#FFFFFF'],
    'Manchester City':         ['#6CABDD', '#FFFFFF'],
    'Marseille':               ['#FFFFFF', '#2FAEE0'],
    'Monaco':                  ['#FFFFFF', '#E30613'],
    'Nantes':                  ['#FFD100', '#008B5A'],
    'Nottingham Forest':       ['#E30613', '#FFFFFF'],
    'PSV Eindhoven':           ['#FFFFFF', '#E30613'],
    'Panathinaikos':           ['#008B5A', '#FFFFFF'],
    'Partizan':                ['#000000', '#FFFFFF'],
    'RB Leipzig':              ['#FFFFFF', '#DD0741'],
    'Rangers':                 ['#1B458F', '#FFFFFF'],
    'Rapid Wien':              ['#008B5A', '#FFFFFF'],
    'Real Sociedad':           ['#FFFFFF', '#0067B1'],
    'Red Star Belgrade':       ['#FFFFFF', '#E30613'],
    'Roma':                    ['#8E1F2F', '#F0BC42'],
    'Saint-Étienne':           ['#008B5A', '#FFFFFF'],
    'Sampdoria':               ['#0A2A66', '#FFFFFF'],
    'Schalke 04':              ['#004D9D', '#FFFFFF'],
    'Sparta Prague':           ['#8E1F2F', '#FFD700'],
    'Spartak Moscow':          ['#E30613', '#FFFFFF'],
    'Spartak Trnava':          ['#E30613', '#000000'],
    'Stade de Reims':          ['#FFFFFF', '#E30613'],
    'Standard Liège':          ['#E30613', '#FFFFFF'],
    'Steaua București':        ['#E30613', '#0A2A66'],
    'Tottenham':               ['#FFFFFF', '#132257'],
    'Valencia':                ['#FFFFFF', '#F18E00'],
    'Vasas':                   ['#E30613', '#0A2A66'],
    'Villarreal':              ['#005187', '#FFE667'],
    'Widzew Łódź':             ['#E30613', '#FFFFFF'],
    'Young Boys':              ['#FFD100', '#000000'],
    'Zürich':                  ['#FFFFFF', '#0A5CA8'],
    'Újpest':                  ['#5B2C86', '#FFFFFF'],
  }
  var CORES_CLUBES = Object.assign({}, CORES_BRASILEIRAO, CORES_LIBERTADORES, CORES_CHAMPIONS);

  // Brasileiros que TAMBÉM disputam a Libertadores. As cores deles moram em CORES_BRASILEIRAO
  // (fonte única — duplicar arriscaria divergir); esta lista existe só para EXIBIÇÃO: a demo
  // mostra estes clubes também na aba da Libertadores. Nomes = chave em CORES_BRASILEIRAO.
  var BRASILEIROS_NA_LIBERTADORES = [
    'Athletico-PR', 'Atlético-MG', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Flamengo',
    'Fluminense', 'Grêmio', 'Internacional', 'Palmeiras', 'Santos', 'São Caetano',
    'São Paulo', 'Vasco'
  ];

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

  // ============================================================
  //  ESTILO (padrão do escudo) — BRASILEIRÃO
  //  Estilo fiel à camisa/escudo. CHAVES = nome exato em js/dados/*.
  // ============================================================
  var ESTILO_BRASILEIRAO = {
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
    'São Caetano':         { padrao: 'metade' }
  };

  // ============================================================
  //  ESTILO (padrão do escudo) — LIBERTADORES
  //  IMPORTANTE: sem entrada aqui, o padrão é SORTEADO pela seed e sai errado
  //  (Boca sem a faixa, Peñarol sem listras, Nacional sem a diagonal...).
  // ============================================================
;

  var ESTILO_LIBERTADORES = {
    // --- ARGENTINA ---
    'Boca Juniors':        { padrao: 'faixa-h' },                    // azul, faixa amarela
    'River Plate':         { padrao: 'diagonal' },                   // branco, banda vermelha
    'Independiente':       { padrao: 'diagonal-inv' },               // VERMELHO, banda branca (≠ River)
    'Racing':              { padrao: 'listras-v', listras: 4 },      // celeste e branco
    'San Lorenzo':         { padrao: 'listras-v', listras: 4 },      // azul e vermelho
    'Estudiantes':         { padrao: 'listras-v', listras: 4 },      // branco e vermelho
    'Vélez Sarsfield':     { padrao: 'diagonal' },                   // branco, V azul
    'Argentinos Juniors':  { padrao: 'solido' },
    'Newell\'s Old Boys':  { padrao: 'metade' },                     // metade vermelha | metade preta
    'Rosario Central':     { padrao: 'listras-v', listras: 4 },      // azul e amarelo
    'Lanús':               { padrao: 'solido' },                     // granate
    'Huracán':             { padrao: 'solido' },
    // --- URUGUAI ---
    'Peñarol':             { padrao: 'listras-v', listras: 4 },      // amarelo e preto
    'Nacional':            { padrao: 'diagonal' },                   // AZUL, banda branca
    'Defensor Sporting':   { padrao: 'listras-v', listras: 4 },
    'Danubio':             { padrao: 'diagonal' },                   // branco, banda preta
    // --- CHILE ---
    'Colo-Colo':           { padrao: 'faixa-h' },                    // azul, faixa branca
    'Universidad de Chile': { padrao: 'solido' },                    // azul
    'Universidad Católica': { padrao: 'diagonal' },                  // branco, banda azul
    'Cobreloa':            { padrao: 'solido' },                     // laranja
    'Palestino':           { padrao: 'tri-v' },                      // branco/verde/vermelho em pé
    'Unión Española':      { padrao: 'solido' },
    'O\'Higgins':          { padrao: 'faixa-h' },                    // celeste, faixa preta
    // --- COLÔMBIA ---
    'Atlético Nacional':   { padrao: 'listras-v', listras: 4 },      // verde e branco
    'Millonarios':         { padrao: 'solido' },                     // azul
    'Independiente Santa Fe': { padrao: 'faixa-h' },                 // branco, faixa vermelha
    'Deportivo Cali':      { padrao: 'diagonal' },                   // verde, banda branca
    'América de Cali':     { padrao: 'solido' },                     // vermelho
    'Independiente Medellín': { padrao: 'listras-v', listras: 4 },
    'Junior':              { padrao: 'listras-v', listras: 5 },      // vermelho e branco (mais listras)
    'Once Caldas':         { padrao: 'tri-v-base' },                 // verde/branco/verm + base azul
    'Deportes Tolima':     { padrao: 'solido' },
    'Cúcuta Deportivo':    { padrao: 'solido' },
    // --- PERU ---
    'Universitario':       { padrao: 'solido' },                     // creme
    'Alianza Lima':        { padrao: 'solido' },                     // azul
    'Sporting Cristal':    { padrao: 'diagonal-inv' },               // celeste, banda branca ao contrário
    'Defensor Lima':       { padrao: 'solido' },                     // granate
    // --- EQUADOR ---
    'LDU':                 { padrao: 'metade' },                     // triângulo azul | vermelho
    'Barcelona-EQU':       { padrao: 'barcelona-equ' },              // escudo próprio (4 setores)
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
    'Cruz Azul':           { padrao: 'cruz-azul' },                  // azul + quadro verm + cruz
    'Chivas Guadalajara':  { padrao: 'listras-v', listras: 4 },      // branco e vermelho
    'América-MEX':         { padrao: 'solido' },                     // amarelo
    'Tigres UANL':         { padrao: 'solido' }                      // amarelo
  };

  // Junta as competições (o resto do código usa só este).
  // ============================================================
  //  CHAMPIONS — padrão FIXO por clube (LOTE 1)
  // ============================================================
  var ESTILO_CHAMPIONS = {
    'Real Madrid':          { padrao: 'solido' },                 // branco (o brasão é branco+dourado; monograma e coroa não desenhamos)
    'Barcelona':            { padrao: 'barcelona-equ' },            // cruz de São Jorge + senyera +
                                                                    // blaugrana. O Barcelona-EQU é
                                                                    // homenagem A ESTE: mesmo desenho.
    'Atlético de Madrid':   { padrao: 'atletico-mad' },           // listras + triângulo azul (sem o urso)
    'Juventus':             { padrao: 'juventus' },               // listras + faixa branca do brasão
    'Milan':                { padrao: 'milan' },                                  // oval: listras | cruz de São Jorge
    'Inter de Milão':       { padrao: 'listras-v', listras: 4 },        // azul e preto, como o uniforme
    'Liverpool':            { padrao: 'solido' },
    'Manchester United':    { padrao: 'solido' },
    'Chelsea':              { padrao: 'solido' },
    'Arsenal':              { padrao: 'faixa-v', larg: 0.62 },            // camisa: corpo vermelho, mangas brancas
    'Bayern de Munique':    { padrao: 'bayern' },                                  // anel vermelho + LOSANGOS bávaros
    'Borussia Dortmund':    { padrao: 'dortmund' },                   // amarelo com o anel preto
    'Ajax':                 { padrao: 'faixa-v' },                  // branco, faixa vermelha central
    'PSG':                  { padrao: 'faixa-v', cor2: '#FFFFFF' }, // azul, faixa vermelha debruada
    'Benfica':              { padrao: 'solido' },
    'Porto':                { padrao: 'listras-v', listras: 4 },

    // --- LOTE 2: os 61 restantes ---
    '1. FC Köln':              { padrao: 'solido' },                                  // branco, detalhe vermelho
    'Anderlecht':              { padrao: 'faixa-h' },                                 // roxo e branco
    'Aston Villa':             { padrao: 'faixa-v' },                                 // claret e azul
    'Austria Wien':            { padrao: 'solido' },                                  // violeta
    'Bayer Leverkusen':        { padrao: 'faixa-v' },                                 // vermelho e preto
    'Bordeaux':                { padrao: 'faixa-h' },                                 // marinho e branco
    'Borussia Mönchengladbach': { padrao: 'faixa-v' },                                 // branco, preto e verde
    'CSKA Red Flag':           { padrao: 'faixa-h' },                                 // vermelho (nome histórico do CSKA Sofia)
    'CSKA Sofia':              { padrao: 'faixa-h' },                                 // vermelho
    'Celtic':                  { padrao: 'listras-h' },                               // verde e branco (aros)
    'Club Brugge':             { padrao: 'listras-v', listras: 4 },                     // azul e preto
    'Deportivo La Coruña':     { padrao: 'listras-v', listras: 4 },                     // azul e branco
    'Derby County':            { padrao: 'faixa-v' },                                 // branco e preto
    'Dinamo București':        { padrao: 'metade' },                                  // vermelho e azul
    'Dukla Prague':            { padrao: 'faixa-h' },                                 // amarelo e vermelho
    'Dundee':                  { padrao: 'solido' },                                  // marinho
    'Dundee United':           { padrao: 'faixa-h' },                                 // tangerina e preto
    'Dynamo Kyiv':             { padrao: 'faixa-h' },                                 // branco e azul
    'Eintracht Frankfurt':     { padrao: 'faixa-v' },                                 // preto e vermelho
    'Feyenoord':               { padrao: 'metade' },                                  // vermelho e branco
    'Fiorentina':              { padrao: 'solido' },                                  // violeta
    'Galatasaray':             { padrao: 'metade' },                                  // vermelho e amarelo
    'Győr':                    { padrao: 'faixa-h' },                                 // verde e branco
    'Hamburg':                 { padrao: 'faixa-h' },                                 // branco e azul
    'Hibernian':               { padrao: 'faixa-h' },                                 // verde e branco
    'IFK Göteborg':            { padrao: 'faixa-h' },                                 // azul e branco
    'Leeds United':            { padrao: 'faixa-v' },                                 // branco, azul e amarelo
    'Legia Warsaw':            { padrao: 'faixa-v' },                                 // branco e verde
    'Lyon':                    { padrao: 'lyon' },                       // faixa vermelha no topo, corpo azul
    'Malmö FF':                { padrao: 'solido' },                                  // celeste
    'Manchester City':         { padrao: 'solido' },                                  // celeste
    'Marseille':               { padrao: 'faixa-h' },                                 // branco e celeste
    'Monaco':                  { padrao: 'diagonal' },                                // vermelho e branco na diagonal
    'Nantes':                  { padrao: 'faixa-h' },                                 // amarelo e verde
    'Nottingham Forest':       { padrao: 'solido' },                                  // vermelho
    'PSV Eindhoven':           { padrao: 'listras-v', listras: 4 },                     // vermelho e branco
    'Panathinaikos':           { padrao: 'faixa-h' },                                 // verde e branco (trevo)
    'Partizan':                { padrao: 'listras-v', listras: 4 },                     // preto e branco
    'RB Leipzig':              { padrao: 'faixa-h' },                                 // branco e vermelho
    'Rangers':                 { padrao: 'solido' },                                  // azul
    'Rapid Wien':              { padrao: 'faixa-h' },                                 // verde e branco
    'Real Sociedad':           { padrao: 'listras-v', listras: 4 },                     // azul e branco
    'Red Star Belgrade':       { padrao: 'metade' },                                  // vermelho e branco
    'Roma':                    { padrao: 'faixa-h' },                                 // vinho e dourado
    'Saint-Étienne':           { padrao: 'solido' },                                  // verde
    'Sampdoria':               { padrao: 'faixa-bicolor', cor2: '#E30613' },            // azul com faixa
    'Schalke 04':              { padrao: 'solido' },                                  // azul real
    'Sparta Prague':           { padrao: 'faixa-h' },                                 // vinho e amarelo
    'Spartak Moscow':          { padrao: 'diagonal' },                                // vermelho com banda branca
    'Spartak Trnava':          { padrao: 'faixa-v' },                                 // vermelho e preto
    'Stade de Reims':          { padrao: 'faixa-v' },                                 // branco e vermelho
    'Standard Liège':          { padrao: 'faixa-h' },                                 // vermelho e branco
    'Steaua București':        { padrao: 'faixa-h' },                                 // vermelho e azul
    'Tottenham':               { padrao: 'faixa-h' },                                 // branco e marinho
    'Valencia':                { padrao: 'faixa-h' },                                 // branco e laranja
    'Vasas':                   { padrao: 'metade' },                                  // vermelho e azul
    'Villarreal':              { padrao: 'villarreal' },                 // AZUL com losango da senyera (amarelo é a camisa)
    'Widzew Łódź':             { padrao: 'faixa-h' },                                 // vermelho e branco
    'Young Boys':              { padrao: 'metade' },                                  // amarelo e preto
    'Zürich':                  { padrao: 'faixa-h' },                                 // branco e azul
    'Újpest':                  { padrao: 'faixa-h' },                                 // roxo e branco
  };

  var ESTILO_CLUBES = Object.assign({}, ESTILO_BRASILEIRAO, ESTILO_LIBERTADORES, ESTILO_CHAMPIONS);

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
    // Clubes agrupados por competição — usado pela demo (escudos-demo.html) e por qualquer tela
    // que queira listar separado. Para a Champions: incluir aqui quando existir CORES_CHAMPIONS.
    // A Libertadores inclui os brasileiros que a disputam (as cores deles vêm do Brasileirão —
    // fonte única; aqui é só exibição, por isso aparecem nas duas listas).
    clubesPorCompeticao: function () {
      return {
        'Brasileirão':  Object.keys(CORES_BRASILEIRAO),
        'Libertadores': Object.keys(CORES_LIBERTADORES).concat(BRASILEIROS_NA_LIBERTADORES),
        'Champions':    Object.keys(CORES_CHAMPIONS)
      };
    },
    brasileirosNaLibertadores: function () { return BRASILEIROS_NA_LIBERTADORES.slice(); },
    todasSelecoes: function () { return Object.keys(PAIS_SELECAO); }
  };

  if (typeof window !== 'undefined') window.EscudosCores = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})();
