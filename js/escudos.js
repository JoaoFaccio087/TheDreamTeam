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
      // Constelação Cruzeiro do Sul (Cruzeiro) — 5 estrelas em forma de cruz, na cor da frente.
      case 'cruzeiro-do-sul': {
        var e = '', cx = CENTRO.x, cy = CENTRO.y;
        var pts = [[0, -9], [0, 7], [-6, -1], [6, 0], [1.5, 2]];   // α,β,γ,δ,ε aproximados
        var rr = [2.6, 2.6, 2.2, 2.2, 1.6];
        pts.forEach(function (p, k) { e += estrelaCor(cx + p[0], cy + p[1], rr[k], cor); });
        return e;
      }
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
      // Faixa horizontal BICOLOR empilhada (São Paulo: vermelha EM CIMA da preta, largura toda)
      case 'faixa-bicolor': {
        var c2b = opts.cor2 || cor;
        var fy = y + h * 0.36, fh = h * 0.13;
        return '<rect x="' + x + '" y="' + fy + '" width="' + w + '" height="' + fh + '" fill="' + cor + '"/>' +
               '<rect x="' + x + '" y="' + (fy + fh) + '" width="' + w + '" height="' + fh + '" fill="' + c2b + '"/>';
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
    BR: function () {                                                                     // Brasil
      var b = BOX, cx = CENTRO.x, cy = CENTRO.y;
      // Losango proporcional, com margem — não encosta nas bordas (evita o "esticado").
      var dx = b.w * 0.40, dy = b.h * 0.36;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#009B3A"/>' +
             '<polygon points="' + cx + ',' + (cy - dy) + ' ' + (cx + dx) + ',' + cy + ' ' + cx + ',' + (cy + dy) + ' ' + (cx - dx) + ',' + cy + '" fill="#FEDF00"/>' +
             '<circle cx="' + cx + '" cy="' + cy + '" r="' + (b.w * 0.19) + '" fill="#002776"/>'; },
    AR: function () { return faixasH(['#74ACDF', '#FFFFFF', '#74ACDF'], [1, 1, 1]) + disco('#F6B40E', 5); },
    DE: function () { return faixasH(['#000000', '#DD0000', '#FFCE00'], [1, 1, 1]); },
    IT: function () { return faixasV(['#008C45', '#F4F5F0', '#CD212A']); },
    FR: function () { return faixasV(['#0055A4', '#FFFFFF', '#EF4135']); },
    ES: function () { return faixasH(['#AA151B', '#F1BF00', '#AA151B'], [1, 2, 1]); },
    // Portugal: verde (2/5) + vermelho (3/5) na vertical, esfera armilar na divisa.
    PT: function () {
      var b = BOX, wv = b.w * 0.4;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + wv + '" height="' + b.h + '" fill="#006600"/>' +
             '<rect x="' + (b.x + wv) + '" y="' + b.y + '" width="' + (b.w - wv) + '" height="' + b.h + '" fill="#FF0000"/>' +
             '<circle cx="' + (b.x + wv) + '" cy="' + CENTRO.y + '" r="4.5" fill="#FFE800" stroke="#8B6914" stroke-width="0.7"/>' +
             '<circle cx="' + (b.x + wv) + '" cy="' + CENTRO.y + '" r="2.2" fill="#FFFFFF" stroke="#003399" stroke-width="0.6"/>';
    },
    NL: function () { return faixasH(['#AE1C28', '#FFFFFF', '#21468B'], [1, 1, 1]); },
    BE: function () { return faixasV(['#000000', '#FDDA24', '#EF3340']); },
    // ── Grupo 1 de novas seleções ──
    SE: function () { return cruzNordica('#006AA7', '#FECC00'); },        // Suécia
    DK: function () { return cruzNordica('#C60C30', '#FFFFFF'); },        // Dinamarca
    CH: function () {                                                     // Suíça
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#D52B1E"/>' +
             '<rect x="' + (CENTRO.x - 3) + '" y="' + (CENTRO.y - 9) + '" width="6" height="18" fill="#FFFFFF"/>' +
             '<rect x="' + (CENTRO.x - 9) + '" y="' + (CENTRO.y - 3) + '" width="18" height="6" fill="#FFFFFF"/>';
    },
    NG: function () { return faixasV(['#008751', '#FFFFFF', '#008751']); },  // Nigéria
    CM: function () { return faixasV(['#007A5E', '#CE1126', '#FCD116']) +    // Camarões
      estrelaCor(CENTRO.x, CENTRO.y, 4, '#FCD116'); },
    GH: function () { return faixasH(['#CE1126', '#FCD116', '#006B3F'], [1, 1, 1]) +  // Gana
      estrelaCor(CENTRO.x, CENTRO.y, 4, '#000000'); },
    // ── Grupo 2 de novas seleções ──
    RS: function () { return faixasH(['#C6363C', '#0C4076', '#FFFFFF'], [1, 1, 1]); },  // Sérvia
    RU: function () { return faixasH(['#FFFFFF', '#0039A6', '#D52B1E'], [1, 1, 1]); },  // Rússia
    AT: function () { return faixasH(['#ED2939', '#FFFFFF', '#ED2939'], [1, 1, 1]); },  // Áustria
    MA: function () {                                                                   // Marrocos
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#C1272D"/>' +
             estrelaCorVazada(CENTRO.x, CENTRO.y, 7, '#006233');
    },
    SN: function () { return faixasV(['#00853F', '#FDEF42', '#E31B23']) +               // Senegal
      estrelaCor(CENTRO.x, CENTRO.y, 4, '#00853F'); },
    SCO: function () {                                                                  // Escócia
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#0065BF"/>' +
             saltire('#FFFFFF');
    },
    PY: function () { return faixasH(['#D52B1E', '#FFFFFF', '#0038A8'], [1, 1, 1]) +      // Paraguai
      '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="5.5" fill="#FFFFFF" stroke="#0038A8" stroke-width="0.8"/>' +
      '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="4" fill="none" stroke="#008000" stroke-width="1"/>' +
      estrelaCor(CENTRO.x, CENTRO.y, 2.4, '#FCD116'); },
    // ── Grupo 3 de novas seleções ──
    TR: function () {                                                                    // Turquia
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#E30A17"/>' +
             '<circle cx="' + (CENTRO.x - 3) + '" cy="' + CENTRO.y + '" r="6" fill="#FFFFFF"/>' +
             '<circle cx="' + (CENTRO.x - 1) + '" cy="' + CENTRO.y + '" r="4.8" fill="#E30A17"/>' +
             estrelaCor(CENTRO.x + 5, CENTRO.y, 3, '#FFFFFF'); },
    GR: function () {                                                                    // Grécia
      var b = BOX, n = 5, fh = b.h / 9;
      var out = '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#0D5EAF"/>';
      for (var i = 0; i < 4; i++)
        out += '<rect x="' + b.x + '" y="' + (b.y + (i * 2 + 1) * fh) + '" width="' + b.w + '" height="' + fh + '" fill="#FFFFFF"/>';
      out += '<rect x="' + b.x + '" y="' + b.y + '" width="' + (b.w * 0.4) + '" height="' + (fh * 5) + '" fill="#0D5EAF"/>';
      out += '<rect x="' + (b.x + b.w * 0.16 - 2) + '" y="' + (b.y + fh) + '" width="4" height="' + (fh * 3) + '" fill="#FFFFFF"/>';
      out += '<rect x="' + (b.x + 2) + '" y="' + (b.y + fh * 2.5 - 2) + '" width="' + (b.w * 0.32) + '" height="4" fill="#FFFFFF"/>';
      return out; },
    NO: function () { return cruzNordica('#BA0C2F', '#FFFFFF') +                          // Noruega
      '<rect x="' + (BOX.x + BOX.w * 0.38 - 1.5) + '" y="' + BOX.y + '" width="3" height="' + BOX.h + '" fill="#00205B"/>' +
      '<rect x="' + BOX.x + '" y="' + (CENTRO.y - 1.5) + '" width="' + BOX.w + '" height="3" fill="#00205B"/>'; },
    HU: function () { return faixasH(['#CE2939', '#FFFFFF', '#477050'], [1, 1, 1]); },    // Hungria
    RO: function () { return faixasV(['#002B7F', '#FCD116', '#CE1126']); },               // Romênia
    BG: function () { return faixasH(['#FFFFFF', '#00966E', '#D62612'], [1, 1, 1]); },    // Bulgária
    CR: function () { return faixasH(['#002B7F', '#FFFFFF', '#CE1126', '#FFFFFF', '#002B7F'], [1, 1, 2, 1, 1]); },  // Costa Rica
    KR: function () {                                                                     // Coreia do Sul
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#FFFFFF"/>' +
             '<path d="M ' + (CENTRO.x - 6) + ' ' + CENTRO.y + ' a 6 6 0 0 1 12 0 a 3 3 0 0 1 -6 0 a 3 3 0 0 0 -6 0" fill="#CD2E3A"/>' +
             '<path d="M ' + (CENTRO.x + 6) + ' ' + CENTRO.y + ' a 6 6 0 0 1 -12 0 a 3 3 0 0 1 6 0 a 3 3 0 0 0 6 0" fill="#0047A0"/>'; },
    // ── Grupo 4 de novas seleções ──
    IE: function () { return faixasV(['#169B62', '#FFFFFF', '#FF883E']); },               // Irlanda
    UA: function () { return faixasH(['#0057B7', '#FFD700'], [1, 1]); },                  // Ucrânia
    CZ: function () {                                                                     // Tchéquia
      var b = BOX;
      return faixasH(['#FFFFFF', '#D7141A'], [1, 1]) +
             '<polygon points="' + b.x + ',' + b.y + ' ' + (b.x + b.w * 0.42) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h) + '" fill="#11457E"/>'; },
    SK: function () { return faixasH(['#FFFFFF', '#0B4EA2', '#EE1C25'], [1, 1, 1]) +       // Eslováquia
      '<rect x="' + (BOX.x + 4) + '" y="' + (BOX.y + BOX.h * 0.3) + '" width="8" height="10" rx="1" fill="#EE1C25" stroke="#FFFFFF" stroke-width="1"/>'; },
    SI: function () { return faixasH(['#FFFFFF', '#0000A0', '#DE2918'], [1, 1, 1]) +       // Eslovênia
      '<rect x="' + (BOX.x + 4) + '" y="' + (BOX.y + BOX.h * 0.22) + '" width="9" height="11" fill="#0000A0"/>' +
      estrelaCor(BOX.x + 8.5, BOX.y + BOX.h * 0.3, 1.6, '#FFDF00'); },
    IS: function () { return cruzNordica('#02529C', '#FFFFFF') +                           // Islândia
      '<rect x="' + (BOX.x + BOX.w * 0.38 - 1.3) + '" y="' + BOX.y + '" width="2.6" height="' + BOX.h + '" fill="#DC1E35"/>' +
      '<rect x="' + BOX.x + '" y="' + (CENTRO.y - 1.3) + '" width="' + BOX.w + '" height="2.6" fill="#DC1E35"/>'; },
    DZ: function () {                                                                     // Argélia
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + (b.w / 2) + '" height="' + b.h + '" fill="#006233"/>' +
             '<rect x="' + CENTRO.x + '" y="' + b.y + '" width="' + (b.w / 2) + '" height="' + b.h + '" fill="#FFFFFF"/>' +
             '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="5" fill="none" stroke="#D21034" stroke-width="1.5"/>' +
             '<circle cx="' + (CENTRO.x + 1.5) + '" cy="' + CENTRO.y + '" r="4" fill="#FFFFFF"/>' +
             estrelaCor(CENTRO.x + 2.5, CENTRO.y, 2.5, '#D21034'); },
    AU: function () {                                                                     // Austrália
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#00247D"/>' +
             '<rect x="' + b.x + '" y="' + b.y + '" width="' + (b.w * 0.42) + '" height="' + (b.h * 0.42) + '" fill="#012169"/>' +
             '<path d="M ' + b.x + ' ' + b.y + ' L ' + (b.x + b.w * 0.42) + ' ' + (b.y + b.h * 0.42) + ' M ' + (b.x + b.w * 0.42) + ' ' + b.y + ' L ' + b.x + ' ' + (b.y + b.h * 0.42) + '" stroke="#FFFFFF" stroke-width="2"/>' +
             estrelaCor(b.x + b.w * 0.21, b.y + b.h * 0.72, 2.5, '#FFFFFF') +
             estrelaCor(b.x + b.w * 0.72, b.y + b.h * 0.3, 2.8, '#FFFFFF'); },
    // ── Grupo 5 de novas seleções ──
    TN: function () {                                                                     // Tunísia
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#E70013"/>' +
             '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="8" fill="#FFFFFF"/>' +
             '<circle cx="' + (CENTRO.x + 1) + '" cy="' + CENTRO.y + '" r="4.2" fill="#E70013"/>' +
             '<circle cx="' + (CENTRO.x + 2.3) + '" cy="' + CENTRO.y + '" r="3.2" fill="#FFFFFF"/>' +
             estrelaCor(CENTRO.x + 2.5, CENTRO.y, 2.6, '#E70013'); },
    EG: function () { return faixasH(['#CE1126', '#FFFFFF', '#000000'], [1, 1, 1]) +       // Egito
      '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="3" fill="#C09300"/>'; },
    ZA: function () {                                                                     // África do Sul
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + (b.h / 2) + '" fill="#DE3831"/>' +
             '<rect x="' + b.x + '" y="' + CENTRO.y + '" width="' + b.w + '" height="' + (b.h / 2) + '" fill="#002395"/>' +
             '<polygon points="' + b.x + ',' + (b.y + b.h * 0.28) + ' ' + (b.x + b.w * 0.32) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h * 0.72) + '" fill="#007749"/>' +
             '<polygon points="' + b.x + ',' + b.y + ' ' + (b.x + b.w * 0.5) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h) + '" fill="#FFB915"/>' +
             '<polygon points="' + b.x + ',' + (b.y + b.h * 0.12) + ' ' + (b.x + b.w * 0.38) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h * 0.88) + '" fill="#007749"/>'; },
    CA: function () {                                                                     // Canadá
      var b = BOX, q = b.w * 0.26;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#FFFFFF"/>' +
             '<rect x="' + b.x + '" y="' + b.y + '" width="' + q + '" height="' + b.h + '" fill="#FF0000"/>' +
             '<rect x="' + (b.x + b.w - q) + '" y="' + b.y + '" width="' + q + '" height="' + b.h + '" fill="#FF0000"/>' +
             '<polygon points="' + cxFolha() + '" fill="#FF0000"/>'; },
    CN: function () {                                                                     // China
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#DE2910"/>' +
             estrelaCor(b.x + b.w * 0.28, b.y + b.h * 0.32, 5, '#FFDE00') +
             estrelaCor(b.x + b.w * 0.5, b.y + b.h * 0.18, 1.8, '#FFDE00') +
             estrelaCor(b.x + b.w * 0.58, b.y + b.h * 0.3, 1.8, '#FFDE00') +
             estrelaCor(b.x + b.w * 0.58, b.y + b.h * 0.46, 1.8, '#FFDE00') +
             estrelaCor(b.x + b.w * 0.5, b.y + b.h * 0.58, 1.8, '#FFDE00'); },
    SA: function () {                                                                     // Arábia Saudita
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#006C35"/>' +
             '<rect x="' + (b.x + 4) + '" y="' + (b.y + b.h * 0.62) + '" width="' + (b.w - 8) + '" height="2.5" fill="#FFFFFF"/>' +
             '<text x="' + CENTRO.x + '" y="' + (b.y + b.h * 0.5) + '" text-anchor="middle" font-family="Arial" font-size="7" fill="#FFFFFF">۩</text>'; },
    QA: function () {                                                                     // Catar
      var b = BOX, wv = b.w * 0.34;
      var out = '<rect x="' + b.x + '" y="' + b.y + '" width="' + wv + '" height="' + b.h + '" fill="#FFFFFF"/>' +
                '<rect x="' + (b.x + wv) + '" y="' + b.y + '" width="' + (b.w - wv) + '" height="' + b.h + '" fill="#8A1538"/>';
      // serrilhado entre branco e grená
      for (var i = 0; i < 9; i++) {
        var yy = b.y + i * b.h / 9;
        out += '<polygon points="' + (b.x + wv - 3) + ',' + yy + ' ' + (b.x + wv + 3) + ',' + (yy + b.h / 18) + ' ' + (b.x + wv - 3) + ',' + (yy + b.h / 9) + '" fill="' + (i % 2 ? '#FFFFFF' : '#8A1538') + '"/>';
      }
      return out; },
    IR: function () { return faixasH(['#239F40', '#FFFFFF', '#DA0000'], [1, 1, 1]) +       // Irã
      '<text x="' + CENTRO.x + '" y="' + (CENTRO.y + 2) + '" text-anchor="middle" font-family="Arial" font-size="5" fill="#DA0000">☫</text>'; },
    // ── Grupo 6 de novas seleções ──
    WAL: function () { return faixasH(['#FFFFFF', '#00AB39'], [1, 1]) +                    // País de Gales
      '<path d="M ' + (CENTRO.x - 8) + ' ' + (CENTRO.y - 2) + ' q 5 -5 10 -1 q 3 -3 6 0 q -2 2 -5 2 q 2 3 -2 4 q -3 3 -7 0 q -3 2 -5 -1 q 3 -1 3 -4 z" fill="#C8102E"/>'; },
    CI: function () { return faixasV(['#FF8200', '#FFFFFF', '#009A44']); },                // Costa do Marfim
    BO: function () { return faixasH(['#D52B1E', '#F9E300', '#007934'], [1, 1, 1]); },     // Bolívia
    HN: function () { return faixasH(['#0073CF', '#FFFFFF', '#0073CF'], [1, 1, 1]) +       // Honduras
      estrelaCor(CENTRO.x, CENTRO.y, 2, '#0073CF') +
      estrelaCor(CENTRO.x - 7, CENTRO.y - 2, 1.4, '#0073CF') + estrelaCor(CENTRO.x + 7, CENTRO.y - 2, 1.4, '#0073CF') +
      estrelaCor(CENTRO.x - 7, CENTRO.y + 2, 1.4, '#0073CF') + estrelaCor(CENTRO.x + 7, CENTRO.y + 2, 1.4, '#0073CF'); },
    PA: function () {                                                                     // Panamá
      var b = BOX, hw = b.w / 2, hh = b.h / 2;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#FFFFFF"/>' +
             '<rect x="' + (b.x + hw) + '" y="' + b.y + '" width="' + hw + '" height="' + hh + '" fill="#DA121A"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + hh) + '" width="' + hw + '" height="' + hh + '" fill="#005293"/>' +
             estrelaCor(b.x + hw * 0.5, b.y + hh * 0.5, 2.6, '#005293') +
             estrelaCor(b.x + hw * 1.5, b.y + hh * 1.5, 2.6, '#DA121A'); },
    JM: function () {                                                                     // Jamaica
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#009B3A"/>' +
             '<polygon points="' + b.x + ',' + b.y + ' ' + (b.x + b.w * 0.42) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h) + '" fill="#000000"/>' +
             '<polygon points="' + (b.x + b.w) + ',' + b.y + ' ' + (b.x + b.w * 0.58) + ',' + CENTRO.y + ' ' + (b.x + b.w) + ',' + (b.y + b.h) + '" fill="#000000"/>' +
             '<path d="M ' + b.x + ' ' + b.y + ' L ' + (b.x + b.w) + ' ' + (b.y + b.h) + ' M ' + (b.x + b.w) + ' ' + b.y + ' L ' + b.x + ' ' + (b.y + b.h) + '" stroke="#FED100" stroke-width="4"/>'; },
    NZ: function () {                                                                     // Nova Zelândia
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#00247D"/>' +
             '<rect x="' + b.x + '" y="' + b.y + '" width="' + (b.w * 0.42) + '" height="' + (b.h * 0.42) + '" fill="#012169"/>' +
             '<path d="M ' + b.x + ' ' + b.y + ' L ' + (b.x + b.w * 0.42) + ' ' + (b.y + b.h * 0.42) + ' M ' + (b.x + b.w * 0.42) + ' ' + b.y + ' L ' + b.x + ' ' + (b.y + b.h * 0.42) + '" stroke="#FFFFFF" stroke-width="1.6"/>' +
             estrelaCor(b.x + b.w * 0.72, b.y + b.h * 0.3, 2, '#CC142B') +
             estrelaCor(b.x + b.w * 0.82, b.y + b.h * 0.55, 2, '#CC142B') +
             estrelaCor(b.x + b.w * 0.62, b.y + b.h * 0.62, 2, '#CC142B') +
             estrelaCor(b.x + b.w * 0.75, b.y + b.h * 0.78, 2, '#CC142B'); },
    CU: function () {                                                                     // Cuba
      var b = BOX;
      return faixasH(['#002A8F', '#FFFFFF', '#002A8F', '#FFFFFF', '#002A8F'], [1, 1, 1, 1, 1]) +
             '<polygon points="' + b.x + ',' + b.y + ' ' + (b.x + b.w * 0.44) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h) + '" fill="#CF142B"/>' +
             estrelaCor(b.x + b.w * 0.14, CENTRO.y, 3, '#FFFFFF'); },
    // ── Grupo 7 de novas seleções ──
    AO: function () { return faixasH(['#CC092F', '#000000'], [1, 1]) +                    // Angola
      estrelaCor(CENTRO.x, CENTRO.y, 3.5, '#FFCB00'); },
    BA: function () {                                                                     // Bósnia
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#002395"/>' +
             '<polygon points="' + (b.x + b.w * 0.3) + ',' + b.y + ' ' + (b.x + b.w * 0.72) + ',' + b.y + ' ' + (b.x + b.w * 0.3) + ',' + (b.y + b.h) + '" fill="#FECB00"/>' +
             estrelaCor(b.x + b.w * 0.34, b.y + b.h * 0.24, 1.6, '#FFFFFF') + estrelaCor(b.x + b.w * 0.44, b.y + b.h * 0.5, 1.6, '#FFFFFF') + estrelaCor(b.x + b.w * 0.34, b.y + b.h * 0.76, 1.6, '#FFFFFF'); },
    SV: function () { return faixasH(['#0F47AF', '#FFFFFF', '#0F47AF'], [1, 1, 1]) +       // El Salvador
      '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="3" fill="#FCD116" stroke="#0F47AF" stroke-width="0.6"/>'; },
    IQ: function () { return faixasH(['#CE1126', '#FFFFFF', '#000000'], [1, 1, 1]) +       // Iraque
      '<text x="' + CENTRO.x + '" y="' + (CENTRO.y + 1.5) + '" text-anchor="middle" font-family="Arial" font-size="4" fill="#007A3D">الله أكبر</text>'; },
    IL: function () {                                                                     // Israel
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#FFFFFF"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + b.h * 0.14) + '" width="' + b.w + '" height="' + (b.h * 0.1) + '" fill="#0038B8"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + b.h * 0.76) + '" width="' + b.w + '" height="' + (b.h * 0.1) + '" fill="#0038B8"/>' +
             '<path d="M ' + CENTRO.x + ' ' + (CENTRO.y - 5) + ' L ' + (CENTRO.x + 4.3) + ' ' + (CENTRO.y + 2.5) + ' L ' + (CENTRO.x - 4.3) + ' ' + (CENTRO.y + 2.5) + ' Z" fill="none" stroke="#0038B8" stroke-width="1"/>' +
             '<path d="M ' + CENTRO.x + ' ' + (CENTRO.y + 5) + ' L ' + (CENTRO.x + 4.3) + ' ' + (CENTRO.y - 2.5) + ' L ' + (CENTRO.x - 4.3) + ' ' + (CENTRO.y - 2.5) + ' Z" fill="none" stroke="#0038B8" stroke-width="1"/>'; },
    TG: function () {                                                                     // Togo
      var b = BOX;
      return faixasH(['#006A4E', '#FFCE00', '#006A4E', '#FFCE00', '#006A4E'], [1, 1, 1, 1, 1]) +
             '<rect x="' + b.x + '" y="' + b.y + '" width="' + (b.w * 0.4) + '" height="' + (b.h * 0.6) + '" fill="#D21034"/>' +
             estrelaCor(b.x + b.w * 0.2, b.y + b.h * 0.3, 3, '#FFFFFF'); },
    SU: function () {                                                                     // União Soviética
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#CC0000"/>' +
             '<path d="M ' + (b.x + 6) + ' ' + (b.y + 8) + ' q 5 1 4 6 q 3 -3 1 -6 M ' + (b.x + 5) + ' ' + (b.y + 9) + ' l 4 5 l 2 -1 z" fill="#FFD700"/>' +
             estrelaCorVazada(b.x + 8, b.y + 6, 2.5, '#FFD700'); },
    NIR: function () {                                                                    // Irlanda do Norte
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#FFFFFF"/>' +
             '<rect x="' + (CENTRO.x - 3) + '" y="' + b.y + '" width="6" height="' + b.h + '" fill="#CF142B"/>' +
             '<rect x="' + b.x + '" y="' + (CENTRO.y - 3) + '" width="' + b.w + '" height="6" fill="#CF142B"/>' +
             '<circle cx="' + CENTRO.x + '" cy="' + CENTRO.y + '" r="4" fill="#FFFFFF" stroke="#CF142B" stroke-width="0.8"/>' +
             estrelaCor(CENTRO.x, CENTRO.y - 0.5, 2.6, '#CF142B'); },
    // ── Grupo 8 de novas seleções (várias históricas) ──
    YU: function () { return faixasH(['#003893', '#FFFFFF', '#DE2910'], [1, 1, 1]) +       // Iugoslávia
      estrelaCor(CENTRO.x, CENTRO.y, 3.5, '#FCD116'); },
    CS: function () {                                                                     // Tchecoslováquia
      var b = BOX;
      return faixasH(['#FFFFFF', '#D7141A'], [1, 1]) +
             '<polygon points="' + b.x + ',' + b.y + ' ' + (b.x + b.w * 0.44) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h) + '" fill="#11457E"/>'; },
    KP: function () {                                                                     // Coreia do Norte
      var b = BOX;
      return faixasH(['#024FA2', '#FFFFFF', '#ED1C27', '#FFFFFF', '#024FA2'], [1, 0.4, 2, 0.4, 1]) +
             '<circle cx="' + (b.x + b.w * 0.36) + '" cy="' + CENTRO.y + '" r="4.5" fill="#FFFFFF"/>' +
             estrelaCor(b.x + b.w * 0.36, CENTRO.y, 3, '#ED1C27'); },
    CV: function () {                                                                     // Cabo Verde
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#003893"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + b.h * 0.5) + '" width="' + b.w + '" height="' + (b.h * 0.16) + '" fill="#FFFFFF"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + b.h * 0.66) + '" width="' + b.w + '" height="' + (b.h * 0.08) + '" fill="#CF2027"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + b.h * 0.74) + '" width="' + b.w + '" height="' + (b.h * 0.16) + '" fill="#FFFFFF"/>' +
             estrelaCor(b.x + b.w * 0.38, b.y + b.h * 0.44, 2, '#F7D116'); },
    AE: function () {                                                                     // Emirados Árabes
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + (b.w * 0.28) + '" height="' + b.h + '" fill="#FF0000"/>' +
             '<rect x="' + (b.x + b.w * 0.28) + '" y="' + b.y + '" width="' + (b.w * 0.72) + '" height="' + (b.h / 3) + '" fill="#009739"/>' +
             '<rect x="' + (b.x + b.w * 0.28) + '" y="' + (b.y + b.h / 3) + '" width="' + (b.w * 0.72) + '" height="' + (b.h / 3) + '" fill="#FFFFFF"/>' +
             '<rect x="' + (b.x + b.w * 0.28) + '" y="' + (b.y + 2 * b.h / 3) + '" width="' + (b.w * 0.72) + '" height="' + (b.h / 3) + '" fill="#000000"/>'; },
    HT: function () {                                                                     // Haiti
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + (b.h / 2) + '" fill="#00209F"/>' +
             '<rect x="' + b.x + '" y="' + CENTRO.y + '" width="' + b.w + '" height="' + (b.h / 2) + '" fill="#D21034"/>' +
             '<rect x="' + (CENTRO.x - 4) + '" y="' + (CENTRO.y - 3) + '" width="8" height="6" fill="#FFFFFF"/>'; },
    JO: function () {                                                                     // Jordânia
      var b = BOX;
      return faixasH(['#000000', '#FFFFFF', '#007A3D'], [1, 1, 1]) +
             '<polygon points="' + b.x + ',' + b.y + ' ' + (b.x + b.w * 0.4) + ',' + CENTRO.y + ' ' + b.x + ',' + (b.y + b.h) + '" fill="#CE1126"/>' +
             estrelaCor(b.x + b.w * 0.14, CENTRO.y, 1.8, '#FFFFFF'); },
    UZ: function () {                                                                     // Uzbequistão
      var b = BOX;
      return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + (b.h / 3) + '" fill="#0099B5"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + b.h / 3) + '" width="' + b.w + '" height="' + (b.h / 3) + '" fill="#FFFFFF"/>' +
             '<rect x="' + b.x + '" y="' + (b.y + 2 * b.h / 3) + '" width="' + b.w + '" height="' + (b.h / 3) + '" fill="#1EB53A"/>' +
             '<circle cx="' + (b.x + b.w * 0.2) + '" cy="' + (b.y + b.h * 0.18) + '" r="2.5" fill="#FFFFFF"/>'; },
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
    HR: function () { return faixasH(['#FF0000', '#FFFFFF', '#171796'], [1, 1, 1]) +      // Croácia
      xadrez(CENTRO.x - 5, CENTRO.y - 5, 10, 5); },
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
  // Estrela de 5 pontas de cor livre (para bandeiras: Camarões, Gana…).
  function estrelaCor(cx, cy, r, cor) {
    var pts = '';
    for (var i = 0; i < 10; i++) {
      var ang = Math.PI / 5 * i - Math.PI / 2;
      var rr = (i % 2 === 0) ? r : r * 0.45;
      pts += (cx + rr * Math.cos(ang)).toFixed(1) + ',' + (cy + rr * Math.sin(ang)).toFixed(1) + ' ';
    }
    return '<polygon points="' + pts.trim() + '" fill="' + cor + '"/>';
  }
  // Cruz nórdica (Suécia, Dinamarca…): fundo + cruz deslocada para a esquerda.
  function cruzNordica(fundo, cruz) {
    var b = BOX, cxCruz = b.x + b.w * 0.38;
    return '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="' + fundo + '"/>' +
           '<rect x="' + (cxCruz - 3) + '" y="' + b.y + '" width="6" height="' + b.h + '" fill="' + cruz + '"/>' +
           '<rect x="' + b.x + '" y="' + (CENTRO.y - 3) + '" width="' + b.w + '" height="6" fill="' + cruz + '"/>';
  }
  // Cruz de Santo André (X) — Escócia. Duas faixas diagonais cruzando a caixa.
  function saltire(cor) {
    var b = BOX, x0 = b.x, y0 = b.y, x1 = b.x + b.w, y1 = b.y + b.h, t = 3;
    return '<polygon points="' + x0 + ',' + (y0) + ' ' + (x0 + t) + ',' + y0 + ' ' + x1 + ',' + (y1 - t) + ' ' + x1 + ',' + y1 + ' ' + (x1 - t) + ',' + y1 + ' ' + x0 + ',' + (y0 + t) + '" fill="' + cor + '"/>' +
           '<polygon points="' + x1 + ',' + y0 + ' ' + x1 + ',' + (y0 + t) + ' ' + (x0 + t) + ',' + y1 + ' ' + x0 + ',' + y1 + ' ' + x0 + ',' + (y1 - t) + ' ' + (x1 - t) + ',' + y0 + '" fill="' + cor + '"/>';
  }
  // Estrela de 5 pontas VAZADA (só contorno) — pentagrama de Marrocos.
  function estrelaCorVazada(cx, cy, r, cor) {
    var pts = '';
    for (var i = 0; i < 10; i++) {
      var ang = Math.PI / 5 * i - Math.PI / 2;
      var rr = (i % 2 === 0) ? r : r * 0.45;
      pts += (cx + rr * Math.cos(ang)).toFixed(1) + ',' + (cy + rr * Math.sin(ang)).toFixed(1) + ' ';
    }
    return '<polygon points="' + pts.trim() + '" fill="none" stroke="' + cor + '" stroke-width="1.4"/>';
  }
  // Folha de bordo simplificada (Canadá) — pontos de um polígono centrado na caixa.
  function cxFolha() {
    var cx = CENTRO.x, cy = CENTRO.y, s = 9;
    // 11 pontos aproximando a silhueta da folha (simétrica)
    var p = [
      [0, -1.0], [0.18, -0.55], [0.5, -0.62], [0.34, -0.28], [0.7, -0.2],
      [0.42, 0.05], [0.55, 0.5], [0.15, 0.35], [0.2, 0.85], [0, 0.6]
    ];
    // espelha para a direita
    var full = p.slice();
    for (var i = p.length - 2; i >= 1; i--) full.push([-p[i][0], p[i][1]]);
    return full.map(function (pt) { return (cx + pt[0] * s).toFixed(1) + ',' + (cy + pt[1] * s).toFixed(1); }).join(' ');
  }
  function xadrez(x, y, lado, n) {
    var c = lado / n, out = '<rect x="' + x + '" y="' + y + '" width="' + lado + '" height="' + lado + '" fill="#FFFFFF"/>';
    for (var i = 0; i < n; i++)
      for (var j = 0; j < n; j++)
        if ((i + j) % 2 === 0)
          out += '<rect x="' + (x + i * c).toFixed(2) + '" y="' + (y + j * c).toFixed(2) + '" width="' + c.toFixed(2) + '" height="' + c.toFixed(2) + '" fill="#D0122B"/>';
    return out;
  }
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
    // API única para o jogo: dado um NOME, decide entre bandeira de seleção (Copa) e escudo de
    // clube, consultando EscudosCores. Devolve '' se os módulos/cores não estiverem disponíveis.
    // Assim todos os lugares (tabela, card, simulação) usam a mesma lógica.
    porNome: function (nome) {
      if (typeof window === 'undefined' || !window.EscudosCores) return '';
      var C = window.EscudosCores;
      try {
        var iso = C.isoSelecao(nome);
        if (iso) return gerarSelecao({ pais: iso, seed: nome, estrelas: C.estrelasSelecao(nome) });
        var e = C.estiloClube(nome) || {};
        return gerarClube({ nome: nome, cores: C.coresClube(nome), seed: nome,
          padrao: e.padrao, listras: e.listras, inverter: e.inverter });
      } catch (err) { return ''; }
    },
    paisesSuportados: function () { return Object.keys(BANDEIRAS); }
  };

  if (typeof window !== 'undefined') window.Escudos = Escudos;
  if (typeof module !== 'undefined' && module.exports) module.exports = Escudos;
})();
