// ============================================================
//  escudos.js — gerador de escudos GENÉRICOS (clubes) e de bandeira (seleções)
//  ------------------------------------------------------------
//  Por que existe: escudos reais de clubes são marca registrada / obra protegida
//  (ver ESTADO.md). Estes são ORIGINAIS, derivados só de cor + forma, determinísticos
//  por seed. Bandeiras de seleção são de domínio público, recortadas na mesma silhueta.
//
//  API:
//    Escudos.gerar({ tipo:'clube',   nome, cores:['#hex','#hex'], seed, estrelas })
//    Escudos.gerar({ tipo:'selecao', pais:'BR', seed, estrelas })   // pais = ISO-2
//
//  Corrige os 4 defeitos do rascunho original:
//   1) VARIEDADE: monograma (iniciais) desenhado por path dá centenas de combinações,
//      então clubes de mesma paleta não colidem (Palmeiras ≠ Goiás).
//   2) CONTORNO: claro sempre que o FUNDO do escudo for escuro (o site é #0E0F13).
//   3) IDs de clipPath únicos por instância (contador), nunca por hash → sem colisão no DOM.
//   4) Cores validadas (#RGB / #RRGGBB); inválida cai em fallback.
// ============================================================
(function () {
  'use strict';

  // Caixa útil da silhueta do escudo (o path abaixo vai de x:10..54, y:16..62).
  var BOX = { x: 10, y: 16, w: 44, h: 46 };
  var CENTRO = { x: 32, y: 39 };
  var SILHUETA = 'M 10 16 L 54 16 L 54 42 Q 54 56 32 62 Q 10 56 10 42 Z';
  var CONTORNO_CLARO = '#F4F6F8';
  var CONTORNO_ESCURO = '#111111';
  var BG_SITE = '#0E0F13';

  var _instancia = 0;   // garante clipId único por render (defeito 3)

  // ---- utilidades de cor ----------------------------------------------------
  function corValida(hex) {
    return typeof hex === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex.trim());
  }
  function normHex(hex, fallback) {
    if (!corValida(hex)) return fallback;
    hex = hex.trim();
    if (hex.length === 4) hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    return hex.toLowerCase();
  }
  function rgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function luminancia(hex) {
    var c = rgb(hex);
    var a = [c.r, c.g, c.b].map(function (v) {
      v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  function contraste(a, b) {
    var la = luminancia(a), lb = luminancia(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }
  // Contorno: claro quando o fundo do escudo é escuro (para não sumir no site escuro).
  function corContorno(fundo) {
    return contraste(fundo, BG_SITE) < 1.6 ? CONTORNO_CLARO : CONTORNO_ESCURO;
  }
  // Cor de traço interno legível sobre um fundo dado.
  function traçoSobre(fundo) {
    return luminancia(fundo) > 0.4 ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.65)';
  }

  // ---- PRNG determinístico --------------------------------------------------
  function cyrb128(str) {
    var h1 = 1779033703, h2 = 3024734710, h3 = 3362454305, h4 = 5024734719;
    for (var i = 0, k; i < str.length; i++) {
      k = str.charCodeAt(i);
      h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    return (h1 ^ h2 ^ h3 ^ h4) >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function iniciais(nome) {
    var partes = String(nome || '').trim().split(/\s+/).filter(Boolean);
    if (!partes.length) return '?';
    if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  }

  // ---- padrões internos (recortados na caixa do escudo) ---------------------
  // Desenha o padrão interno DENTRO da caixa do escudo.
  // opts: { cor2 } para tricolores (3ª cor usada como separador/segunda listra).
  function padrao(tipo, fundo, cor, opts) {
    var b = BOX, x = b.x, y = b.y, w = b.w, h = b.h;
    opts = opts || {};
    switch (tipo) {
      // Listras verticais grossas alternando fundo↔cor (camisa "listrão": Grêmio, Athletico, Bahia)
      case 'listras-v': {
        var n = opts.n || 5;                 // nº de listras da cor da frente
        var total = n * 2 + 1;               // intercala com o fundo
        var lw = w / total;
        var out = '';
        for (var i = 0; i < n; i++) {
          var lx = x + (i * 2 + 1) * lw;
          out += '<rect x="' + lx.toFixed(2) + '" y="' + y + '" width="' + lw.toFixed(2) + '" height="' + h + '" fill="' + cor + '"/>';
        }
        return out;
      }
      // Listras verticais FINAS (alvinegro tipo Atlético-MG / Botafogo listrado)
      case 'listras-finas': {
        var nf = opts.n || 7, lwf = w / (nf * 2 - 1), of = '';
        for (var j = 0; j < nf; j++)
          of += '<rect x="' + (x + j * 2 * lwf).toFixed(2) + '" y="' + y + '" width="' + lwf.toFixed(2) + '" height="' + h + '" fill="' + cor + '"/>';
        return of;
      }
      // Faixa horizontal central (uma cor) — usada com cor2 vira tricolor horizontal
      case 'faixa-h':
        return '<rect x="' + x + '" y="' + (y + h * 0.36) + '" width="' + w + '" height="' + (h * 0.28) + '" fill="' + cor + '"/>';
      // Três faixas horizontais (tricolor tipo bandeira)
      case 'tri-h': {
        var c2 = opts.cor2 || cor;
        return '<rect x="' + x + '" y="' + (y + h / 3) + '" width="' + w + '" height="' + (h / 3) + '" fill="' + cor + '"/>' +
               '<rect x="' + x + '" y="' + (y + 2 * h / 3) + '" width="' + w + '" height="' + (h / 3) + '" fill="' + c2 + '"/>';
      }
      case 'metade':
        return '<rect x="' + CENTRO.x + '" y="' + y + '" width="' + (x + w - CENTRO.x) + '" height="' + h + '" fill="' + cor + '"/>';
      // Faixa diagonal larga (Vasco, River)
      case 'diagonal':
        return '<polygon points="' + x + ',' + (y + h) + ' ' + x + ',' + (y + h * 0.62) + ' ' + (x + w) + ',' + (y + h * 0.08) + ' ' + (x + w) + ',' + (y + h * 0.46) + '" fill="' + cor + '"/>';
      case 'cruz':
        return '<rect x="' + (CENTRO.x - 4) + '" y="' + y + '" width="8" height="' + h + '" fill="' + cor + '"/>' +
               '<rect x="' + x + '" y="' + (CENTRO.y - 4) + '" width="' + w + '" height="8" fill="' + cor + '"/>';
      case 'solido':
        return '';
      // Estrela grande central (Botafogo)
      case 'estrela-central': {
        var cx = CENTRO.x, cy = CENTRO.y + 1, R = 15;
        var p = '';
        for (var k = 0; k < 10; k++) {
          var a = Math.PI / 5 * k - Math.PI / 2;
          var rr = (k % 2 === 0) ? R : R * 0.42;
          p += (cx + rr * Math.cos(a)).toFixed(1) + ',' + (cy + rr * Math.sin(a)).toFixed(1) + ' ';
        }
        return '<polygon points="' + p.trim() + '" fill="' + cor + '"/>';
      }
      // Faixa horizontal BICOLOR (São Paulo: metade da faixa cor, metade cor2)
      case 'faixa-bicolor': {
        var c2b = opts.cor2 || cor;
        var fy = y + h * 0.38, fh = h * 0.24;
        return '<rect x="' + x + '" y="' + fy + '" width="' + (w / 2) + '" height="' + fh + '" fill="' + cor + '"/>' +
               '<rect x="' + (x + w / 2) + '" y="' + fy + '" width="' + (w / 2) + '" height="' + fh + '" fill="' + c2b + '"/>';
      }
      default:
        return '';
    }
  }

  // ---- estrelas de conquista (acima do escudo) ------------------------------
  function estrela(cx, cy, r) {
    var pts = '';
    for (var i = 0; i < 10; i++) {
      var ang = Math.PI / 5 * i - Math.PI / 2;
      var rr = (i % 2 === 0) ? r : r * 0.45;
      pts += (cx + rr * Math.cos(ang)).toFixed(1) + ',' + (cy + rr * Math.sin(ang)).toFixed(1) + ' ';
    }
    return '<polygon points="' + pts.trim() + '" fill="#FFD24A" stroke="rgba(0,0,0,0.35)" stroke-width="0.4"/>';
  }
  // Estrelas de título acima do escudo (1 a 5), distribuídas em leque.
  function estrelasSVG(n) {
    n = Math.max(0, Math.min(5, n | 0));
    if (!n) return '';
    var out = '', r = n >= 4 ? 3 : 3.6;
    var larg = 9 + n * 3.5;               // leque mais largo com mais estrelas
    var x0 = 32 - larg / 2, passo = n > 1 ? larg / (n - 1) : 0;
    for (var i = 0; i < n; i++) {
      var cx = n === 1 ? 32 : x0 + i * passo;
      // leve arco: as das pontas descem um pouco
      var dy = Math.abs(i - (n - 1) / 2) * 0.9;
      out += estrela(cx, 8.5 + dy, r);
    }
    return out;
  }

  function envelope(interior, fundoContorno, estrelas) {
    var id = 'esc-' + (++_instancia);
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%">' +
      '<defs><clipPath id="' + id + '"><path d="' + SILHUETA + '"/></clipPath></defs>' +
      estrelasSVG(estrelas) +
      '<g clip-path="url(#' + id + ')">' + interior + '</g>' +
      '<path d="' + SILHUETA + '" fill="none" stroke="' + corContorno(fundoContorno) +
      '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '</svg>';
  }

  // Escurece/clareia levemente um hex (fator -1..1). Amplia a variedade sem descaracterizar a cor.
  function ajustarTom(hex, fator) {
    var c = rgb(hex);
    function m(v) { return Math.max(0, Math.min(255, Math.round(v + fator * 255))); }
    var s = [m(c.r), m(c.g), m(c.b)].map(function (v) { return ('0' + v.toString(16)).slice(-2); });
    return '#' + s.join('');
  }

  // ---- ESCUDO DE CLUBE ------------------------------------------------------
  function gerarClube(o) {
    var corA = normHex(o.cores && o.cores[0], '#3A3F4B');
    var corB = normHex(o.cores && o.cores[1], '#F4F6F8');
    var corC = normHex(o.cores && o.cores[2], null);   // 3ª cor opcional (tricolores)
    var rand = mulberry32(cyrb128(String(o.seed || o.nome || '') + '|' + (o.nome || '')));

    // Sem estilo definido, escolhe um padrão pela seed (mantém variedade dos clubes sem cor real).
    var padroesAuto = ['listras-v', 'listras-finas', 'faixa-h', 'metade', 'diagonal', 'solido'];
    var tipo = o.padrao || padroesAuto[Math.floor(rand() * padroesAuto.length)];

    // Fundo e frente: por padrão a 1ª cor é o fundo. `inverter` troca (pela seed, se não fixado).
    var inverter = (o.inverter != null) ? o.inverter : (rand() > 0.5 && !o.padrao);
    var fundo = inverter ? corB : corA;
    var frente = inverter ? corA : corB;

    var interior = '<rect x="' + BOX.x + '" y="' + BOX.y + '" width="' + BOX.w + '" height="' + BOX.h + '" fill="' + fundo + '"/>';
    interior += padrao(tipo, fundo, frente, { n: o.listras, cor2: corC });

    // Sem monograma: o nome do clube aparece ao lado do escudo na interface (decisão do João).
    return envelope(interior, fundo, o.estrelas | 0);
  }

  // ---- BANDEIRA DE SELEÇÃO (recortada na caixa do escudo) -------------------
  // Cada bandeira é declarada por camadas dentro da caixa BOX — nunca no quadrado inteiro,
  // senão o clip corta as bordas (bug relatado: listra de cima da Espanha sumindo).
  function faixasH(cores, pesos) {
    var b = BOX, total = pesos.reduce(function (a, c) { return a + c; }, 0), acc = 0, out = '';
    for (var i = 0; i < cores.length; i++) {
      var hh = b.h * pesos[i] / total;
      out += '<rect x="' + b.x + '" y="' + (b.y + acc) + '" width="' + b.w + '" height="' + (hh + 0.5) + '" fill="' + cores[i] + '"/>';
      acc += hh;
    }
    return out;
  }
  function faixasV(cores) {
    var b = BOX, lw = b.w / cores.length, out = '';
    for (var i = 0; i < cores.length; i++)
      out += '<rect x="' + (b.x + i * lw) + '" y="' + b.y + '" width="' + (lw + 0.5) + '" height="' + b.h + '" fill="' + cores[i] + '"/>';
    return out;
  }
  function disco(cor, r) {
    return '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="' + (r || 6) + '" fill="' + cor + '"/>';
  }

  var BANDEIRAS = {
    BR: function () { return '<rect x="8" y="14" width="48" height="50" fill="#009B3A"/>' +
      '<polygon points="32,19 51,39 32,59 13,39" fill="#FEDF00"/>' + disco('#002776', 8.5); },
    AR: function () { return faixasH(['#74ACDF', '#FFFFFF', '#74ACDF'], [1, 1, 1]) + disco('#F6B40E', 5); },
    DE: function () { return faixasH(['#000000', '#DD0000', '#FFCE00'], [1, 1, 1]); },
    IT: function () { return faixasV(['#008C45', '#F4F5F0', '#CD212A']); },
    FR: function () { return faixasV(['#0055A4', '#FFFFFF', '#EF4135']); },
    ES: function () { return faixasH(['#AA151B', '#F1BF00', '#AA151B'], [1, 2, 1]); },
    PT: function () { return faixasV(['#006600', '#FF0000']).replace('width="' + (BOX.w / 2 + 0.5), 'width="' + (BOX.w * 0.4 + 0.5)) + disco('#FFE800', 4); },
    NL: function () { return faixasH(['#AE1C28', '#FFFFFF', '#21468B'], [1, 1, 1]); },
    BE: function () { return faixasV(['#000000', '#FDDA24', '#EF3340']); },
    UY: function () { return '<rect x="8" y="14" width="48" height="50" fill="#FFFFFF"/>' +
      faixasStripesUY() + '<rect x="8" y="14" width="20.5" height="22.4" fill="#FFFFFF"/>' + disco2(19, 25, '#FCD116', 6.5); },
    EN: function () { return '<rect x="8" y="14" width="48" height="50" fill="#FFFFFF"/>' +
      '<rect x="8" y="34.5" width="48" height="9" fill="#CE1124"/><rect x="27.5" y="14" width="9" height="50" fill="#CE1124"/>'; },
    US: function () { return faixasH(['#B22234', '#FFFFFF', '#B22234', '#FFFFFF', '#B22234'], [1, 1, 1, 1, 1]) +
      '<rect x="8" y="14" width="20" height="24" fill="#3C3B6E"/>'; },
    MX: function () { return faixasV(['#006847', '#FFFFFF', '#CE1126']) + disco('#9D2449', 4); },
    CL: function () { return '<rect x="8" y="14" width="48" height="25" fill="#FFFFFF"/>' +
      '<rect x="8" y="39" width="48" height="25" fill="#D52B1E"/>' +
      '<rect x="8" y="14" width="20" height="25" fill="#0039A6"/>' + estrelaBranca(18, 26, 5); },
    CO: function () { return faixasH(['#FCD116', '#003893', '#CE1126'], [2, 1, 1]); },
    JP: function () { return '<rect x="8" y="14" width="48" height="50" fill="#FFFFFF"/>' + disco('#BC002D', 9); },
    HR: function () { return faixasH(['#FF0000', '#FFFFFF', '#171796'], [1, 1, 1]); },
    PL: function () { return faixasH(['#FFFFFF', '#DC143C'], [1, 1]); },
    PE: function () { return faixasV(['#D91023', '#FFFFFF', '#D91023']); },
    EC: function () { return faixasH(['#FFDD00', '#0033A0', '#CE1126'], [2, 1, 1]) +
      '<circle cx="32" cy="34" r="4.5" fill="#0033A0" stroke="#8B6914" stroke-width="0.8"/>'; }
  };
  function faixasStripesUY() {
    var out = '', ys = [26.2, 36.4, 46.7, 56.9];
    for (var i = 0; i < ys.length; i++) out += '<rect x="8" y="' + ys[i] + '" width="48" height="5.1" fill="#0038A8"/>';
    return out;
  }
  function disco2(cx, cy, cor, r) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + cor + '"/>'; }
  function estrelaBranca(cx, cy, r) {
    var pts = '';
    for (var i = 0; i < 10; i++) {
      var ang = Math.PI / 5 * i - Math.PI / 2;
      var rr = (i % 2 === 0) ? r : r * 0.45;
      pts += (cx + rr * Math.cos(ang)).toFixed(1) + ',' + (cy + rr * Math.sin(ang)).toFixed(1) + ' ';
    }
    return '<polygon points="' + pts.trim() + '" fill="#FFFFFF"/>';
  }

  function gerarSelecao(o) {
    var pais = String(o.pais || '').toUpperCase();
    var fn = BANDEIRAS[pais];
    var interior = fn ? fn()
      : '<rect x="8" y="14" width="48" height="50" fill="#3A3F4B"/>' +
        '<text x="32" y="44" text-anchor="middle" font-family="Arial" font-weight="900" font-size="15" fill="#F4F6F8">' + pais + '</text>';
    // Bandeiras têm cor variável; contorno claro é sempre seguro sobre o site escuro.
    return envelope(interior, '#000000', o.estrelas | 0);
  }

  // ---- API ------------------------------------------------------------------
  var Escudos = {
    gerar: function (o) {
      o = o || {};
      return (o.tipo === 'selecao') ? gerarSelecao(o) : gerarClube(o);
    },
    paisesSuportados: function () { return Object.keys(BANDEIRAS); }
  };

  if (typeof window !== 'undefined') window.Escudos = Escudos;
  if (typeof module !== 'undefined' && module.exports) module.exports = Escudos;
})();
