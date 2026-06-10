// estado.js — referências de elementos do DOM e variáveis de estado globais.

// --- Elementos do DOM ---

const telaInicial    = document.getElementById('tela-inicial');
const telaJogo       = document.getElementById('tela-jogo');
const telaSimulacao  = document.getElementById('tela-simulacao');

const pilulasModo     = document.querySelectorAll('#pilulas-modo .pilula');
const pilulasFormacao = document.querySelectorAll('#pilulas-formacao .pilula');
const fichas          = document.querySelectorAll('.ficha');
const botaoJogar      = document.getElementById('btn-jogar');

const botaoVoltarHome     = document.getElementById('btn-voltar-home');
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
const jogoHeaderInfo      = document.getElementById('jogo-header-info');
const blocoSkips          = document.getElementById('bloco-skips');
const btnSkip             = document.getElementById('btn-skip');
const skipContador        = document.getElementById('skip-contador');
const btnResumo           = document.getElementById('btn-resumo');
const resumoOverlay       = document.getElementById('resumo-overlay');

const simPilulasModo = document.querySelectorAll('[data-sim-modo]');
const simPilulasVel  = document.querySelectorAll('[data-sim-vel]');


// --- Estado: tela inicial ---

let modoSelecionado = 'libertadores';   // chave em COMPETICOES
let formacaoAmostra = '4-3-3';


// --- Estado: tela do jogo ---

let formacaoJogo       = '4-3-3';
let formacaoTravada    = false;
let jogadorSelecionado = null;                 // jogador escolhido na lista, aguardando um slot
let escalacao          = Array(11).fill(null); // null = vaga vazia; objeto = jogador alocado
let slotsPreenchidos   = 0;
let slotMovendo        = null;                 // índice do slot cujo jogador está sendo movido
let clubeSorteado      = '';
let edicaoSorteada     = null;                 // entrada de DADOS do sorteio atual
let skipsRestantes     = 5;                    // skips disponíveis por partida


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
var acaoBotao         = 'iniciar'; // 'iniciar' | 'proximo' | 'nova-campanha' | 'novo-time'

// Acumuladores da campanha atual — usados na tela de resumo
var campanhaPartidas  = 0;
var campanhaGF        = 0;
var campanhaGA        = 0;
var campanhaVitorias  = 0;
var campanhaEmpates   = 0;
var campanhaDerrotas  = 0;
var resumoCampeao     = false;
