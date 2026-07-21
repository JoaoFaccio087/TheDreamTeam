// tema.js — modo claro/escuro global.
//
// Aplica a classe `tema-claro` no <html> e persiste a escolha em localStorage
// (chave `dreamteam_tema`, valores 'claro' | 'escuro'; ausência = escuro, o padrão).
//
// ⚠️ Roda SÍNCRONO no <head> (sem defer/async), ANTES do <body> pintar, para não
// piscar o tema escuro antes de aplicar o claro. Por isso mexe só em
// document.documentElement — o <html> já existe quando um <script> do <head> executa.
//
// Os temas de competição (tema-libertadores etc.) moram no <body> (interface.js) e,
// por serem mais internos, sobrescrevem estes tokens base dentro do jogo. Isso é
// esperado nesta fase — a decisão sobre o claro nas telas de competição fica p/ depois.
//
// SEM alternador na UI ainda (de propósito): o claro está sendo entregue tela a tela.
// Para testar no console:  alternarTema()
(function () {
  'use strict';

  var CHAVE  = 'dreamteam_tema';
  var CLARO  = 'claro';
  var ESCURO = 'escuro';

  // Lê a preferência salva; qualquer falha (modo privado, storage bloqueado) cai no padrão.
  function lerTema() {
    try {
      return localStorage.getItem(CHAVE) === CLARO ? CLARO : ESCURO;
    } catch (e) {
      return ESCURO;
    }
  }

  // Aplica/remove a classe no <html> conforme o tema.
  function aplicar(tema) {
    document.documentElement.classList.toggle('tema-claro', tema === CLARO);
  }

  // Alterna claro↔escuro, persiste e devolve o novo tema (útil no console).
  function alternarTema() {
    var novo = lerTema() === CLARO ? ESCURO : CLARO;
    try {
      localStorage.setItem(CHAVE, novo);
    } catch (e) {
      /* storage indisponível: aplica na sessão, sem persistir */
    }
    aplicar(novo);
    return novo;
  }

  // Aplicação inicial, ainda no <head>, antes do primeiro paint.
  aplicar(lerTema());

  // Único global exposto de propósito (sem alternador na UI por enquanto).
  window.alternarTema = alternarTema;
})();
