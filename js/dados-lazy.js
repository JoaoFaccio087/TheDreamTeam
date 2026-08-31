/* ═══════════════════════════════════════════════════════════════════
   dados-lazy.js — CARREGAMENTO SOB DEMANDA dos dados de vôlei e basquete.

   Motivo: no boot, o jogo baixava ~682 KB de dados de vôlei + basquete
   mesmo para quem só joga futebol. Agora esses arquivos NÃO entram no
   index; este módulo os injeta só quando o esporte é necessário (o
   usuário abre o seletor daquele esporte ou vai jogar/ver o perfil dele).

   O FUTEBOL continua carregado no boot (é o esporte padrão, sempre visível).

   Segurança: todos os acessos aos arrays de vôlei e basquete no código são
   guardados por `typeof ... !== 'undefined'`, então a ausência
   temporária não quebra nada — só falta o dado até este módulo carregá-lo.
   Ao terminar de carregar um esporte, invalidamos o cache do api.js
   (API._invalidarUniverso) para o universo passar a incluir o novo esporte.
   ═══════════════════════════════════════════════════════════════════ */
var DadosLazy = (function () {
  'use strict';

  // Arquivos de cada esporte (na ordem em que devem carregar).
  var ARQUIVOS = {
    volei: [
      'js/dados/volei/mundial-m.js',
      'js/dados/volei/mundial-f.js',
      'js/dados/volei/vnl-m.js',
      'js/dados/volei/vnl-f.js'
    ],
    basquete: [
      'js/dados/basquete/nba.js'
    ]
  };

  // Competições de FUTEBOL carregadas sob demanda (a Libertadores é a padrão e já vem no
  // boot). Cada uma: o arquivo, a variável global que ela define, e a `chave` em
  // COMPETICOES[...].dados (para agregar em DADOS via agregarCompeticaoFutebol).
  // modoId (chave de COMPETICOES) → config.
  var COMP_FUTEBOL = {
    champions:   { arquivo: 'js/dados/futebol/champions.js',   global: 'DADOS_CHAMPIONS',   chave: 'Champions' },
    brasileirao: { arquivo: 'js/dados/futebol/brasileirao.js', global: 'DADOS_BRASILEIRAO', chave: 'Brasileirão' },
    copa:        { arquivo: 'js/dados/futebol/copa.js',        global: 'DADOS_COPA',        chave: 'Copa do Mundo' },
    premier:     { arquivo: 'js/dados/futebol/premier.js',     global: 'DADOS_PREMIER',     chave: 'Premier League' },
    serie_a:     { arquivo: 'js/dados/futebol/serie-a.js',     global: 'DADOS_SERIE_A',     chave: 'Serie A' },
    laliga:      { arquivo: 'js/dados/futebol/laliga.js',      global: 'DADOS_LALIGA',      chave: 'La Liga' }
  };
  var _promessasComp = {};   // por modoId de futebol

  // Estado por esporte: undefined = não carregado; Promise = carregando/carregado.
  var _promessas = {};

  // Injeta um <script> e resolve quando ele carrega (ou rejeita se falhar).
  function carregarScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;   // preserva a ordem entre os arquivos do mesmo esporte
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Falha ao carregar ' + src)); };
      document.head.appendChild(s);
    });
  }

  // Garante que os dados de um esporte estejam carregados. Retorna uma Promise.
  // Chamadas repetidas reusam a mesma Promise (carrega uma vez só).
  function garantir(esporte) {
    if (esporte === 'futebol') return Promise.resolve();   // futebol já vem no boot
    var arquivos = ARQUIVOS[esporte];
    if (!arquivos) return Promise.resolve();               // esporte desconhecido: não trava
    if (_promessas[esporte]) return _promessas[esporte];

    // carrega os arquivos do esporte em sequência (async=false preserva a ordem)
    var p = arquivos.reduce(function (acc, src) {
      return acc.then(function () { return carregarScript(src); });
    }, Promise.resolve()).then(function () {
      // dados novos disponíveis → invalida o universo cacheado da API (se existir)
      if (typeof API !== 'undefined' && typeof API._invalidarUniverso === 'function') {
        API._invalidarUniverso();
      }
    }).catch(function (err) {
      // falhou: esquece a promise p/ permitir nova tentativa depois
      _promessas[esporte] = null;
      throw err;
    });

    _promessas[esporte] = p;
    return p;
  }

  // Já está carregado (síncrono)? Útil para decidir sem esperar.
  function carregado(esporte) {
    if (esporte === 'futebol') return true;
    if (esporte === 'volei')    return typeof DADOS_VOLEI_M !== 'undefined';
    if (esporte === 'basquete') return typeof DADOS_NBA !== 'undefined';
    return false;
  }

  // Resolve o array global de uma competição pelo nome. As variáveis são `const` no escopo
  // de script, que NÃO viram propriedades de window — então acessamos por nome via uma
  // função que testa cada uma com typeof (seguro se ainda não carregou).
  function arrayGlobalFutebol(nome) {
    switch (nome) {
      case 'DADOS_CHAMPIONS':   return (typeof DADOS_CHAMPIONS   !== 'undefined') ? DADOS_CHAMPIONS   : undefined;
      case 'DADOS_BRASILEIRAO': return (typeof DADOS_BRASILEIRAO !== 'undefined') ? DADOS_BRASILEIRAO : undefined;
      case 'DADOS_COPA':        return (typeof DADOS_COPA        !== 'undefined') ? DADOS_COPA        : undefined;
      case 'DADOS_PREMIER':     return (typeof DADOS_PREMIER     !== 'undefined') ? DADOS_PREMIER     : undefined;
      case 'DADOS_SERIE_A':     return (typeof DADOS_SERIE_A     !== 'undefined') ? DADOS_SERIE_A     : undefined;
      case 'DADOS_LALIGA':      return (typeof DADOS_LALIGA      !== 'undefined') ? DADOS_LALIGA      : undefined;
      default: return undefined;
    }
  }

  // Garante que os dados de uma COMPETIÇÃO DE FUTEBOL específica (modoId) estejam carregados
  // e agregados em DADOS. A Libertadores (padrão) já vem no boot → resolve na hora. As demais
  // são baixadas sob demanda e agregadas via agregarCompeticaoFutebol (que invalida o cache
  // do universo na API). Reusa a mesma Promise em chamadas repetidas.
  function garantirCompeticao(modoId) {
    var cfg = COMP_FUTEBOL[modoId];
    if (!cfg) return Promise.resolve();                    // libertadores/desconhecido: já no boot
    var jaGlobal = arrayGlobalFutebol(cfg.global);
    if (typeof jaGlobal !== 'undefined') {
      // já carregado antes; garante que está agregado em DADOS
      if (typeof agregarCompeticaoFutebol === 'function') {
        agregarCompeticaoFutebol(cfg.chave, jaGlobal);
      }
      return Promise.resolve();
    }
    if (_promessasComp[modoId]) return _promessasComp[modoId];

    var p = carregarScript(cfg.arquivo).then(function () {
      var arr = arrayGlobalFutebol(cfg.global);
      if (typeof agregarCompeticaoFutebol === 'function' && arr) {
        agregarCompeticaoFutebol(cfg.chave, arr);
      }
    }).catch(function (err) {
      _promessasComp[modoId] = null;   // permite nova tentativa
      throw err;
    });
    _promessasComp[modoId] = p;
    return p;
  }

  return { garantir: garantir, garantirCompeticao: garantirCompeticao, carregado: carregado };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = DadosLazy;
