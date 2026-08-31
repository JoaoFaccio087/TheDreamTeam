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

  return { garantir: garantir, carregado: carregado };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = DadosLazy;
