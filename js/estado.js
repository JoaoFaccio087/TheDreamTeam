// ============================================================
//  estado.js — referências de DOM + variáveis de estado globais
// ============================================================

// ====================================================================
// jogo.js — The Dream Team
// Controla: pílulas de modo e formação, campo de amostra, navegação,
//           e o loop principal do jogo (sorteio, escalação, box score).
// ====================================================================


// ------------------------------------------------------------------
// REFERÊNCIAS AOS ELEMENTOS DO HTML
// ------------------------------------------------------------------

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

// Pílulas de controle da tela de simulação
const simPilulasModo = document.querySelectorAll('[data-sim-modo]');
const simPilulasVel  = document.querySelectorAll('[data-sim-vel]');


// ------------------------------------------------------------------
// VARIÁVEIS DE ESTADO — TELA INICIAL
// ------------------------------------------------------------------

let modoSelecionado = 'libertadores';   // chave de COMPETICOES (id interno)
let formacaoAmostra = '4-3-3';


// ------------------------------------------------------------------
// VARIÁVEIS DE ESTADO — TELA DO JOGO
// ------------------------------------------------------------------

let formacaoJogo       = '4-3-3';
let formacaoTravada    = false;
let jogadorSelecionado = null;   // jogador da lista selecionado (aguardando slot)
let escalacao          = Array(11).fill(null); // null = vazio; objeto = jogador alocado
let slotsPreenchidos   = 0;
let slotMovendo        = null;   // índice do slot cujo jogador está sendo movido
let clubeSorteado      = '';     // nome do clube atualmente exibido na lista
let edicaoSorteada     = null;   // entrada completa do DADOS para o sorteio atual
let skipsRestantes     = 5;      // orçamento de skips por partida (compartilhado)


// ------------------------------------------------------------------
// VARIÁVEIS DE ESTADO — TELA DE SIMULAÇÃO
// ------------------------------------------------------------------

let modoSimulacao       = 'jogo-a-jogo'; // 'jogo-a-jogo' | 'automatico'
let velocidadeSimulacao = 'normal';      // 'lento' | 'normal' | 'rapida'

// Estatísticas acumuladas de todas as partidas: { 'Neymar': { gols:3, asis:1 }, ... }
var statsJogadores   = {};
// Contador de partidas para IDs únicos dos cards no histórico
var contadorPartidas = 0;
// Referência ao setTimeout do tick atual (null = sem partida rodando)
var timerPartida     = null;

// Fases do mata-mata em ordem crescente
var fasesCampanha     = [];        // preenchido por montarCampanha(): fase de grupos + mata-mata
var faseAtual         = 0;         // índice atual em fasesCampanha
var adversariosUsados = [];        // 'clube|edicao' já enfrentados — sem repetição na campanha
var grupo             = null;      // estado da fase de grupos da campanha atual
var acaoBotao         = 'iniciar'; // 'iniciar' | 'proximo' | 'nova-campanha' | 'novo-time'

// Acumuladores da campanha atual — alimentam a TELA DE RESUMO
var campanhaPartidas  = 0;          // total de partidas jogadas na campanha
var campanhaGF        = 0;          // gols feitos somados (tempo normal)
var campanhaGA        = 0;          // gols sofridos somados (tempo normal)
var campanhaVitorias  = 0;          // V/E/D da campanha (alimentam aproveitamento)
var campanhaEmpates   = 0;
var campanhaDerrotas  = 0;
var resumoCampeao     = false;      // true se a campanha terminou com o título


