// ============================================================
//  dados.js — array DADOS do futebol, montado INCREMENTALMENTE.
//
//  ANTES: const DADOS = [...LIBERTADORES, ...CHAMPIONS, ...] juntava
//  as 7 competições no boot (~3.6 MB). Agora só a LIBERTADORES (padrão)
//  entra no boot; as demais competições de futebol são carregadas SOB
//  DEMANDA por js/dados-lazy.js e se AGREGAM aqui via DADOS.push(...).
//
//  DADOS é `var` (não const) e MUTÁVEL de propósito: cada competição,
//  ao carregar, chama agregarCompeticaoFutebol(NOME_GLOBAL). O api.js
//  cacheia o universo, então quem agrega invalida esse cache
//  (API._invalidarUniverso) para a competição nova passar a aparecer.
//
//  Para adicionar uma nova competição no futuro: crie o arquivo dela e
//  registre-a no mapa COMP_FUTEBOL de js/dados-lazy.js.
// ============================================================

// Boot: só a Libertadores (competição padrão). Guard defensivo: se por
// algum motivo não estiver carregada, começa vazio (não quebra o boot).
var DADOS = (typeof DADOS_LIBERTADORES !== 'undefined') ? DADOS_LIBERTADORES.slice() : [];

// Marca quais competições já foram agregadas em DADOS (evita duplicar).
var _compFutebolAgregadas = { 'Libertadores': true };

// Agrega os registros de uma competição de futebol já carregada ao array DADOS.
// `chave` é o rótulo em COMPETICOES[...].dados (ex.: 'Champions', 'Copa do Mundo'),
// usado só para não agregar duas vezes. `arr` é o array global da competição.
function agregarCompeticaoFutebol(chave, arr) {
  if (!arr || !arr.length) return;
  if (_compFutebolAgregadas[chave]) return;   // já está em DADOS
  Array.prototype.push.apply(DADOS, arr);
  _compFutebolAgregadas[chave] = true;
  // universo cacheado da API mudou → invalida para reconstruir com a nova competição
  if (typeof API !== 'undefined' && typeof API._invalidarUniverso === 'function') {
    API._invalidarUniverso();
  }
}

// Nota (multi-esporte): os dados de OUTROS esportes (vôlei em DADOS_VOLEI_M etc.,
// basquete em DADOS_NBA) ficam PROPOSITALMENTE FORA de DADOS, que é exclusivo do
// futebol — o código legado assume "tudo em DADOS é futebol" (posições, escudos).
// Vôlei e basquete também carregam sob demanda (js/dados-lazy.js), em arrays próprios.
