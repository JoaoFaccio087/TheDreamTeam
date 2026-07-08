// estado.js — referências de elementos do DOM e variáveis de estado globais.

// --- Elementos do DOM ---

const telaInicial    = document.getElementById('tela-inicial');
const telaJogo       = document.getElementById('tela-jogo');
const telaSimulacao  = document.getElementById('tela-simulacao');

const pilulasModo     = document.querySelectorAll('.pilula[data-modo]');
const pilulasFormacao = document.querySelectorAll('#pilulas-formacao .pilula');
const fichas          = document.querySelectorAll('.ficha');
const botaoJogar      = document.getElementById('btn-jogar');

const botaoVoltarHome     = document.getElementById('btn-voltar-home');
const btnVoltarMobile     = document.getElementById('btn-voltar-mobile');
const pilulasFormacaoJogo = document.querySelectorAll('#jogo-pilulas-formacao .pilula');
const slotsJogo           = document.querySelectorAll('.slot-jogo');
const btnRolar            = document.getElementById('btn-rolar');
const btnSimular          = document.getElementById('btn-simular');
const clubeCard           = document.getElementById('clube-card');
const clubeStatus         = document.getElementById('clube-status');
const clubeNome           = document.getElementById('clube-nome');
const clubeEdicao         = document.getElementById('clube-edicao');
const listaJogadores      = document.getElementById('lista-jogadores');
const boxScore            = document.getElementById('box-score');
const forcaGeral          = document.getElementById('forca-geral');
const forcaAtaque         = document.getElementById('forca-ataque');
const forcaDefesa         = document.getElementById('forca-defesa');
const campoJogo           = document.getElementById('campo-jogo');
const formacaoBloco       = document.getElementById('jogo-formacao-bloco');
const jogoForcaBloco      = document.getElementById('jogo-forca-bloco');
const jogoHeaderInfo      = document.getElementById('jogo-header-info');
const inputNomeTime       = document.getElementById('input-nome-time');
const jogoNomeBloco       = document.getElementById('jogo-nome-bloco');
const titulosCabecalho    = document.querySelectorAll('.jogo-header-titulo');
const blocoSkips          = document.getElementById('bloco-skips');
const btnSkip             = document.getElementById('btn-skip');
const skipContador        = document.getElementById('skip-contador');
const btnResumo           = document.getElementById('btn-resumo');
const resumoOverlay       = document.getElementById('resumo-overlay');

// Elementos do modo Draft
const pilulasEstilo      = document.querySelectorAll('#jogo-pilulas-estilo .pilula');
const estiloBloco        = document.getElementById('jogo-estilo-bloco');
const btnComecarDraft    = document.getElementById('btn-comecar-draft');
const draftOverlay       = document.getElementById('draft-overlay');
const draftCartasEl      = document.getElementById('draft-cartas');
const btnSelecionarDraft = document.getElementById('btn-selecionar-draft');
const btnResortearDraft  = document.getElementById('btn-resortear-draft');
const resortearContador  = document.getElementById('resortear-contador');
const draftTitulo        = document.getElementById('draft-titulo');

const simPilulasModo = document.querySelectorAll('[data-sim-modo]');
const simPilulasVel  = document.querySelectorAll('[data-sim-vel]');

// Elementos do modo Brasileirão (liga)
const tabelaBrasileirao      = document.getElementById('tabela-brasileirao');
const tabelaBrasileiraoCorpo = document.getElementById('tabela-brasileirao-corpo');
const btnPularTudo           = document.getElementById('btn-pular-tudo');


// --- Estado: tela inicial ---

let modoSelecionado = 'libertadores';   // chave em COMPETICOES
let modoOnlineSelecionado = false;       // true quando a pílula "Brasileirão - Online" está escolhida
let formacaoAmostra = '4-3-3';


// --- Estado: tela do jogo ---

let formacaoJogo       = '4-3-3';
let formacaoTravada    = false;
let nomeDoTime         = 'Seu time';           // nome do time do jogador (editável na escalação)
let jogadorSelecionado = null;                 // jogador escolhido na lista, aguardando um slot
let escalacao          = Array(11).fill(null); // null = vaga vazia; objeto = jogador alocado
let slotsPreenchidos   = 0;
let slotMovendo        = null;                 // índice do slot cujo jogador está sendo movido
let clubeSorteado      = '';
let edicaoSorteada     = null;                 // entrada de DADOS do sorteio atual
let skipsRestantes     = 5;                    // skips disponíveis por partida

// --- Estado: modo Draft ---
let estiloJogo        = 'classico';  // 'classico' | 'draft' | 'orcamento'
let draftIniciado     = false;       // true após clicar em "Começar" no modo Draft
let draftSkipsRestantes = 3;         // re-sorteios disponíveis por draft

// --- Estado: modo Orçamento (single-player) ---
// Teto fixo; cada jogador custa preco = round((forca-60)^2 / 4). Craque(99)≈380, bom(90)≈225,
// mediano(80)≈100, reserva(66)≈9. Com teto 2500 dá pra montar time forte com ~4-5 craques, nunca 11.
// (A proporção é a mesma da calibragem original; só os números foram ampliados p/ dar mais peso.)
const ORCAMENTO_TETO = 2500;
function precoJogador(forca) {
  var f = +forca || 0;
  if (f <= 60) return 2;
  return Math.round(Math.pow(f - 60, 2) / 4);
}
// Soma o custo do XI atual (jogadores já escalados).
function orcamentoGasto() {
  if (typeof escalacao === 'undefined') return 0;
  return escalacao.reduce(function (s, e) { return s + (e ? precoJogador(e.forca) : 0); }, 0);
}
function orcamentoRestante() { return ORCAMENTO_TETO - orcamentoGasto(); }

// --- Preferência: "Mostrar Força" (vale para offline e online) ---
// ON (padrão) → força sempre visível. OFF → força escondida até completar o XI.
let mostrarForca = (function () {
  try { return localStorage.getItem('dreamteam_mostrar_forca') !== '0'; }
  catch (e) { return true; }
})();
function setMostrarForca(v) {
  mostrarForca = !!v;
  try { localStorage.setItem('dreamteam_mostrar_forca', mostrarForca ? '1' : '0'); } catch (e) {}
}


// --- Estado: tela de simulação ---

let modoSimulacao       = 'jogo-a-jogo'; // 'jogo-a-jogo' | 'automatico'
let velocidadeSimulacao = 'normal';      // 'lento' | 'normal' | 'rapida'

var statsJogadores   = {};   // gols e assistências por jogador: { nome: { gols, asis } }
var contadorPartidas = 0;    // gera IDs únicos para os cards de partida
var timerPartida     = null; // setTimeout do tick atual, ou null se não há partida em andamento

var fasesCampanha     = [];        // fase de grupos + mata-mata, definidas em montarCampanha
var faseAtual         = 0;
var adversariosUsados = [];        // 'clube|edicao' já enfrentados, para não repetir na campanha
var grupo             = null;
var liga              = null;      // estado da liga (Brasileirão): tabela 20 times + rodadas
var acaoBotao         = 'iniciar'; // 'iniciar' | 'proximo' | 'nova-campanha' | 'novo-time'

// Acumuladores da campanha atual — usados na tela de resumo
var campanhaPartidas  = 0;
var campanhaGF        = 0;
var campanhaGA        = 0;
var campanhaVitorias  = 0;
var campanhaEmpates   = 0;
var campanhaDerrotas  = 0;
var resumoCampeao     = false;

// Flags de eventos finos da campanha atual (para as conquistas: hat-trick, pôquer,
// pênaltis, massacre, show de bola). Preenchidas ao longo dos jogos; enviadas em
// `detalhes` ao salvar a campanha. Zeradas em reiniciarCampanha().
var campanhaFlags = {
  hatTrick:         false,  // algum jogador fez 3+ gols num jogo
  poker:            false,  // algum jogador fez 4+ gols num jogo
  showDeBola:       false,  // venci de 7x0 com 5+ artilheiros diferentes num jogo
  maiorSaldoJogo:   0,      // maior saldo (gMeus - gAdv) num jogo vencido
  finalNosPenaltis: false,  // venci a FINAL nos pênaltis
  matasNosPenaltis: 0       // nº de mata-matas que venci nos pênaltis nesta campanha
};
