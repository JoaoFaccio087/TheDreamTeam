/* =====================================================================
   PÊNALTIS — animação da disputa (modal autossuficiente)

   API:
     Penaltis.disputar({ meuNome, advNome, sequencia, vencedor,
                         velocidade, onFim })
       - sequencia: [{ lado:'meu'|'adv', nome, ok:Boolean }]  (já decidida)
       - vencedor : 'meu' | 'adv'
       - velocidade: 'lento' | 'normal' | 'rapida'  (cadência)
       - onFim(vencedor): chamado após o modal fechar

     Penaltis.demo()  — roda uma disputa aleatória só para visualizar
   ===================================================================== */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  function esc(s) { return (window.UI && UI.esc) ? UI.esc(s) : String(s == null ? '' : s); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function el(t, a) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); return e; }

  /* ===================================================================
     MODELO GEOMÉTRICO DA COBRANÇA — fonte única do offline
     ===================================================================
     A bola cai em `alvo + erro aleatório dentro do raio`. Fora da meta = FORA;
     goleiro alcança = DEFESA; senão GOL. Não há tabela de probabilidade por zona:
     a geometria produz o número.

     ONDE CADA COISA ENTRA:
       · raio          → precisão. Cresce rumo ao ângulo, encolhe com a força do atacante.
       · goleiro plantado no meio → é por isso que mirar no canto compensa.
       · altura        → bola alta ele alcança mas não segura.
       · potência      → craque chuta forte; o goleiro chega e não segura.

     ⚠️ OS NÚMEROS DE `MIRA` NÃO SÃO CHUTE. Saíram de uma calibragem Monte Carlo
     (scripts/calibra-penaltis.js, semente fixa) com três restrições:
       1. reproduzir o `resultadoCobranca` antigo dentro de ~2 p.p. em todo o espectro
          de força atacante × goleiro — senão as conquistas (matasNosPenaltis,
          finalNosPenaltis) mudariam de dificuldade;
       2. spread ≤ ~4 p.p. entre as zonas de mira: NENHUM canto pode dominar;
       3. conversão global ~80%.
     Mexeu num número? Rode o calibrador de novo e confira as três.
     =================================================================== */

  // Meta em unidades do modelo: x de -1 a 1, y de 0 (chão) a 0.707 (travessão).
  var GX = 1.0, GY = 0.707;

  // BOLA TEM RAIO. O desenho usa r=11 com escala 0.56 ao chegar no gol (~6,16 SVG) e
  // ESC=157 unidades SVG por unidade do modelo → 0,039.
  // Sem isto o teste comparava o CENTRO da bola com a trave: centro em ly=0,70 dava GOL,
  // mas a borda de cima ficava em 0,739 — a bola aparecia EM CIMA do travessão e contava.
  // A bola passa limpo ou não passa.
  var RBOLA = 0.039;

  var MIRA = {
    R_MIN:     0.064,   // raio de erro do craque
    R_MAX:     0.180,   // raio de erro do perna-de-pau
    K_DIF:     2.042,   // quanto o raio cresce rumo ao ângulo
    SIG_X:     0.540,   // espalhamento lateral do goleiro (fica perto do meio)
    MU_Y:      0.104,   // altura típica do corpo dele: pés no chão
    SIG_Y:     0.080,   // ele varia pouco na vertical
    RX:        0.432,   // alcance lateral (braço de gente)
    RY:        0.313,   // alcance vertical
    P_PEGA:    0.704,   // chance de segurar, tendo alcançado
    DECAY:     0.372,   // quanto a altura da bola atrapalha
    K_GOL_ALC: 0.484,   // ganho de alcance pela força do goleiro
    K_GOL_PEG: 0.652,   // ganho de pegada pela força do goleiro
    K_ATA:     1.159    // potência do chute do cobrador
  };

  // Limites FÍSICOS do goleiro. NÃO são ajustáveis pelo calibrador — se fossem, ele
  // espalharia o goleiro pelo gol inteiro para achatar a superfície e entregaria uma
  // nuvem aleatória que aparece fora do poste e enterrada no chão. Já aconteceu.
  var KX_LIM = 0.85;              // ele fica ENTRE AS TRAVES
  var KY_MIN = 0.02, KY_MAX = 0.55;  // PÉS NO CHÃO; nunca flutuando no travessão

  // Normal(0,1) por Box-Muller — a posição do goleiro é contínua.
  // A v1 sorteava entre 5 mergulhos fixos e isso deixava BURACOS de cobertura:
  // (0, 0.5) só era coberto por um deles e convertia 88% contra 80% do resto.
  // Buraco estrutural não se conserta com parâmetro.
  function gauss() {
    var u = 0; while (u === 0) u = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
  }



  // DUAS normalizações, e a diferença importa:
  //  · COBRADOR: a força chega já somada ao bônus de posição (simulacao.js:forcaCobranca),
  //    então sai da faixa dos dados — goleiro batendo vira ~69, atacante craque vira ~102.
  //    Normalizar em 60-99 achatava os extremos e o bônus sumia (erro de 3,5 p.p.).
  //  · GOLEIRO: força crua. Goleiro NUNCA recebe bônus de posição, então a faixa é a dos dados.
  // Usar a mesma normalização nos dois tornava impossível cumprir fidelidade E spread ao
  // mesmo tempo — separá-las destravou os dois.
  function normCob(f) { return Math.max(0, Math.min(1, ((f || 73) - 44) / 67)); }
  function normGol(f) { return Math.max(0, Math.min(1, ((f || 72) - 60) / 39)); }

  // Raio de erro do chute. Exposto porque a mira desenha ESTE círculo no cursor:
  // o usuário vê o risco antes de se comprometer.
  function raioDe(ax, ay, fAtacante) {
    var p   = normCob(fAtacante);
    var r0  = MIRA.R_MAX - (MIRA.R_MAX - MIRA.R_MIN) * p;
    var dif = Math.min(1, Math.sqrt((ax / GX) * (ax / GX) + (ay / GY) * (ay / GY)) / Math.SQRT2);
    return r0 * (1 + MIRA.K_DIF * dif);
  }

  // Uma cobrança. Devolve o resultado E a geometria, para a animação mostrar
  // exatamente o que foi calculado (a bola cai onde o modelo disse).
  function cobrar(ax, ay, fAtacante, fGoleiro) {
    var r = raioDe(ax, ay, fAtacante);

    var a = Math.random() * 2 * Math.PI, d = r * Math.sqrt(Math.random());
    var lx = ax + d * Math.cos(a), ly = ay + d * Math.sin(a);
    if (ly < 0) ly = 0;                      // rasteira: continua valendo

    var kx = Math.max(-KX_LIM, Math.min(KX_LIM, gauss() * MIRA.SIG_X));
    var ky = Math.max(KY_MIN, Math.min(KY_MAX, MIRA.MU_Y + gauss() * MIRA.SIG_Y));

    if (Math.abs(lx) > GX - RBOLA || ly > GY - RBOLA) {
      return { resultado: 'fora', bola: { x: lx, y: ly }, goleiro: { x: kx, y: ky } };
    }

    var g = normGol(fGoleiro);
    var multAlc = 1 + MIRA.K_GOL_ALC * (g - 0.5);
    var alc = Math.sqrt(
      Math.pow((lx - kx) / (MIRA.RX * multAlc), 2) +
      Math.pow((ly - ky) / (MIRA.RY * multAlc), 2)
    );
    if (alc < 1) {
      var multPega = 1 + MIRA.K_GOL_PEG * (g - 0.5);
      var pega = MIRA.P_PEGA * (1 - MIRA.DECAY * (ly / GY)) * multPega * (1 - MIRA.K_ATA * (normCob(fAtacante) - 0.5));
      if (Math.random() < pega) {
        return { resultado: 'defesa', bola: { x: lx, y: ly }, goleiro: { x: kx, y: ky } };
      }
    }
    return { resultado: 'gol', bola: { x: lx, y: ly }, goleiro: { x: kx, y: ky } };
  }

  // Mira da CPU: um cobrador COMPETENTE, não chute a esmo pelo gol.
  // A régua do modelo antigo (0.80) é um PÊNALTI BEM BATIDO — não a média de mirar em
  // qualquer lugar, inclusive rasteiro no meio, onde ninguém bate. Comparar com a média
  // do gol inteiro foi o erro que atravessou seis calibragens.
  function alvoCPU() {
    return {
      x: Math.max(-0.85, Math.min(0.85, gauss() * 0.45)),
      y: 0.15 + Math.random() * 0.40      // meia-altura: onde um cobrador decente mira
    };
  }

  // Best-of-5 + morte súbita. UMA cópia: antes vivia duplicada em `simularDisputa`
  // (simulacao.js) e em `gerarSequencia` (aqui embaixo).
  // e = { pM, pA, iM, iA, morte } → 'meu' | 'adv' | null (null = continua)
  function decidiu(e) {
    if (!e.morte) {
      var rM = Math.max(0, 5 - e.iM), rA = Math.max(0, 5 - e.iA);
      if (e.pM > e.pA + rA) return 'meu';
      if (e.pA > e.pM + rM) return 'adv';
      if (e.iM >= 5 && e.iA >= 5) {
        if (e.pM > e.pA) return 'meu';
        if (e.pA > e.pM) return 'adv';
        e.morte = true;
      }
    } else if (e.iM === e.iA) {
      if (e.pM > e.pA) return 'meu';
      if (e.pA > e.pM) return 'adv';
    }
    return null;
  }

  // Bola clássica preto e branco (pentágono central + 5 na borda + costuras).
  function bolaFutebol() {
    var g = el('g', {});
    g.appendChild(el('circle', { cx: 0, cy: 0, r: 11, fill: '#fbfbfb', stroke: '#bdbdbd', 'stroke-width': 0.7 }));
    function pent(cx, cy, R, rotDeg) {
      var p = '';
      for (var i = 0; i < 5; i++) { var a = (rotDeg + i * 72) * Math.PI / 180; p += (cx + R * Math.cos(a)).toFixed(2) + ',' + (cy + R * Math.sin(a)).toFixed(2) + ' '; }
      return p.trim();
    }
    var rim = [];
    for (var k = 0; k < 5; k++) { var ad = -54 + k * 72, ar = ad * Math.PI / 180; rim.push([8.4 * Math.cos(ar), 8.4 * Math.sin(ar), ad]); }
    rim.forEach(function (r) { g.appendChild(el('line', { x1: 0, y1: 0, x2: (r[0] * 0.62).toFixed(2), y2: (r[1] * 0.62).toFixed(2), stroke: '#d2d2d2', 'stroke-width': 0.7 })); });
    g.appendChild(el('polygon', { points: pent(0, 0, 4.4, -90), fill: '#161616' }));
    rim.forEach(function (r) { g.appendChild(el('polygon', { points: pent(r[0], r[1], 2.7, r[2]), fill: '#161616' })); });
    return g;
  }

  function cadencia(vel) {
    if (vel === 'lento')  return 1500;
    if (vel === 'rapida') return 650;
    return 1000;
  }

  // --- HTML estático da cena (partes procedurais são preenchidas depois) ---
  function montarHTML(meuNome, advNome) {
    return '' +
    '<div class="pen-modal">' +
      '<div class="pen-board">' +
        '<div class="pen-side"><div class="pen-tnome">' + esc(meuNome) + '</div><div class="pen-dots" id="pen-dM"></div></div>' +
        '<div class="pen-score"><span id="pen-sM">0</span> &times; <span id="pen-sA">0</span></div>' +
        '<div class="pen-side r"><div class="pen-tnome">' + esc(advNome) + '</div><div class="pen-dots" id="pen-dA"></div></div>' +
      '</div>' +

      '<svg class="pen-stage" viewBox="0 0 480 322" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
        '<defs>' +
          '<pattern id="penNet" width="9" height="9" patternUnits="userSpaceOnUse">' +
            '<path d="M0,4.5 L4.5,0 L9,4.5 L4.5,9 Z" fill="none" stroke="#ffffff" stroke-width="0.55" opacity="0.32"/>' +
          '</pattern>' +
        '</defs>' +

        '<rect x="0" y="0" width="480" height="322" fill="#2f9350"/>' +
        '<rect x="0" y="0" width="480" height="9" fill="#0c120e"/>' +
        '<rect x="0" y="9" width="480" height="40" fill="#243029"/>' +
        '<g class="pen-cH" id="pen-cH"></g><g class="pen-cR" id="pen-cR"></g>' +
        '<rect x="0" y="9" width="480" height="20" fill="#0a0f0c" opacity="0.3"/>' +

        // letreiro de LED com texto
        '<rect x="0" y="49" width="480" height="12" fill="#0a1812"/>' +
        '<text x="78"  y="58" text-anchor="middle" font-family="\'Archivo\',sans-serif" font-weight="700" font-size="7" letter-spacing="0.6" fill="#D9B25A">THE DREAM TEAM</text>' +
        '<text x="240" y="58" text-anchor="middle" font-family="\'Archivo\',sans-serif" font-weight="700" font-size="7" letter-spacing="0.6" fill="#e7edf0">SORTEIE &#183; ESCALE &#183; GOLEIE</text>' +
        '<text x="404" y="58" text-anchor="middle" font-family="\'Archivo\',sans-serif" font-weight="700" font-size="7" letter-spacing="0.6" fill="#D9B25A">DREAM LEAGUE</text>' +

        // gol 3D
        '<polygon points="80,72 400,72 366,62 114,62" fill="#0f2c19"/>' +
        '<polygon points="80,72 114,62 114,150 80,182" fill="#0c2415"/>' +
        '<polygon points="400,72 366,62 366,150 400,182" fill="#0c2415"/>' +
        '<rect x="114" y="62" width="252" height="88" fill="#103018"/>' +
        '<polygon points="80,72 400,72 366,62 114,62" fill="url(#penNet)"/>' +
        '<rect x="114" y="62" width="252" height="88" fill="url(#penNet)"/>' +
        '<polygon points="80,72 114,62 114,150 80,182" fill="url(#penNet)"/>' +
        '<polygon points="400,72 366,62 366,150 400,182" fill="url(#penNet)"/>' +
        '<g stroke="#cdd5cd" stroke-width="2" fill="none" opacity="0.65"><polyline points="114,150 114,62 366,62 366,150"/></g>' +
        '<rect x="76" y="66" width="328" height="7" rx="2" fill="#f4f7f4"/>' +
        '<rect x="76" y="66" width="7" height="118" rx="2" fill="#f4f7f4"/>' +
        '<rect x="397" y="66" width="7" height="118" rx="2" fill="#f4f7f4"/>' +

        '<g id="pen-grass"></g>' +
        '<line x1="0" y1="182" x2="480" y2="182" stroke="#eef2ee" stroke-width="2" opacity="0.8"/>' +
        '<line x1="14" y1="252" x2="466" y2="252" stroke="#eef2ee" stroke-width="3" opacity="0.72"/>' +
        '<circle cx="240" cy="288" r="3.2" fill="#eef2ee" opacity="0.9"/>' +

        // goleiro (cabeça sempre desenhada por último em cada pose)
        '<g id="pen-kp">' +
          '<g id="pen-kpIdle">' +
            '<ellipse cx="0" cy="25" rx="15" ry="3" fill="#000" opacity="0.2"/>' +
            '<rect x="-7.5" y="7" width="5.5" height="15" rx="2.5" fill="#f4f4f4"/><ellipse cx="-6.5" cy="24" rx="5" ry="2.4" fill="#161616"/>' +
            '<rect x="2" y="7" width="5.5" height="15" rx="2.5" fill="#f4f4f4"/><ellipse cx="6.5" cy="24" rx="5" ry="2.4" fill="#161616"/>' +
            '<rect x="-9" y="-3" width="18" height="13" rx="3" fill="#14424b"/>' +
            '<path d="M-10 9 L-11 -25 Q-11 -30 -7 -30 L7 -30 Q11 -30 11 -25 L10 9 Z" fill="#1fb6c9"/>' +
            '<path d="M-7 -30 L7 -30 L5 -25 L-5 -25 Z" fill="#178a99"/>' +
            '<path d="M-10 -26 Q-20 -22 -27 -14" stroke="#1fb6c9" stroke-width="6.5" fill="none" stroke-linecap="round"/>' +
            '<circle cx="-28" cy="-12" r="5.2" fill="#f4f4f4" stroke="#178a99" stroke-width="1.3"/>' +
            '<path d="M10 -26 Q20 -22 27 -14" stroke="#1fb6c9" stroke-width="6.5" fill="none" stroke-linecap="round"/>' +
            '<circle cx="28" cy="-12" r="5.2" fill="#f4f4f4" stroke="#178a99" stroke-width="1.3"/>' +
            '<circle cx="0" cy="-40" r="8" fill="#f1c9a0"/><path d="M-8 -41 A8 8 0 0 1 8 -41 Q3 -45 0 -45 Q-3 -45 -8 -41 Z" fill="#3a2a1a"/>' +
          '</g>' +
          '<g id="pen-kpDive">' +
            '<path d="M-4 2 Q-9 13 -13 23" stroke="#f4f4f4" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-14" cy="24" rx="5" ry="2.4" fill="#161616"/>' +
            '<path d="M4 2 Q9 13 13 23" stroke="#f4f4f4" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="14" cy="24" rx="5" ry="2.4" fill="#161616"/>' +
            '<rect x="-10" y="-6" width="20" height="13" rx="3" fill="#14424b"/>' +
            '<path d="M-11 -4 L-11 -30 Q-11 -34 -6 -34 L6 -34 Q11 -34 11 -30 L11 -4 Z" fill="#1fb6c9"/>' +
            '<path d="M-6 -34 L6 -34 L4 -29 L-4 -29 Z" fill="#178a99"/>' +
            // braços sobem retos; ao tombar o corpo, viram em direção ao canto
            '<path d="M-9 -30 Q-9 -45 -6 -54" stroke="#1fb6c9" stroke-width="6.5" fill="none" stroke-linecap="round"/>' +
            '<circle cx="-6" cy="-56" r="5.2" fill="#f4f4f4" stroke="#178a99" stroke-width="1.3"/>' +
            '<path d="M9 -30 Q9 -45 6 -54" stroke="#1fb6c9" stroke-width="6.5" fill="none" stroke-linecap="round"/>' +
            '<circle cx="6" cy="-56" r="5.2" fill="#f4f4f4" stroke="#178a99" stroke-width="1.3"/>' +
            '<circle cx="0" cy="-42" r="8" fill="#f1c9a0"/><path d="M-8 -43 A8 8 0 0 1 8 -43 Q3 -47 0 -47 Q-3 -47 -8 -43 Z" fill="#3a2a1a"/>' +
          '</g>' +
        '</g>' +

        '<g id="pen-bl"></g>' +

        // Camada de mira (só no interativo). O retângulo cobre a meta INTEIRA e um pouco
        // além: mirar no ângulo tem de ser possível, e errar para fora também.
        '<g id="pen-mira" style="display:none">' +
          '<rect id="pen-mira-hit" x="40" y="40" width="400" height="180" fill="transparent" style="cursor:crosshair"/>' +
          '<g id="pen-mira-alvo" style="pointer-events:none; opacity:0">' +
            '<circle id="pen-mira-raio" cx="0" cy="0" r="30" fill="#D9B25A" fill-opacity="0.14" stroke="#D9B25A" stroke-width="1.4" stroke-dasharray="4 3"/>' +
            '<line x1="-7" y1="0" x2="7" y2="0" stroke="#fff" stroke-width="1.6"/>' +
            '<line x1="0" y1="-7" x2="0" y2="7" stroke="#fff" stroke-width="1.6"/>' +
          '</g>' +
        '</g>' +

        '<text id="pen-fl" x="240" y="150" text-anchor="middle" font-family="\'Archivo Black\',sans-serif" font-weight="800" font-size="27" letter-spacing="1" opacity="0" style="pointer-events:none"></text>' +
      '</svg>' +

      '<div class="pen-foot">' +
        '<div class="pen-status" id="pen-status"></div>' +
        '<button class="pen-pular" id="pen-pular" type="button">Pular P&ecirc;naltis</button>' +
      '</div>' +
    '</div>';
  }

  // --- Partes procedurais: gramado em perspectiva, torcida, bola ---
  function preencherCena(root) {
    var grass = root.querySelector('#pen-grass');
    var tY = 182, bY = 322, tL = 58, tR = 422, bL = -30, bR = 510, n = 9;
    grass.appendChild(el('polygon', { points: tL + ',' + tY + ' ' + tR + ',' + tY + ' ' + bR + ',' + bY + ' ' + bL + ',' + bY, fill: '#2b8a47' }));
    for (var i = 0; i < n; i += 2) {
      var a = i / n, b = (i + 1) / n;
      grass.appendChild(el('polygon', { points:
        (tL + (tR - tL) * a) + ',' + tY + ' ' + (tL + (tR - tL) * b) + ',' + tY + ' ' +
        (bL + (bR - bL) * b) + ',' + bY + ' ' + (bL + (bR - bL) * a) + ',' + bY, fill: '#33994f' }));
    }

    var skin = ['#f1c9a0', '#caa070', '#8a5a3c'];
    var palH = ['#D9B25A', '#e7decb', '#c98f3a'], palR = ['#4a86d6', '#d7e2f2', '#2f5fa0'];
    function crowd(g, x0, x1, pal) {
      for (var row = 0; row < 3; row++) {
        var y = 15 + row * 11, sc = 0.7 + row * 0.12;
        for (var x = x0 + Math.random() * 6; x <= x1; x += 8 * sc) {
          var o = el('g', { transform: 'translate(' + (x + (Math.random() * 3 - 1.5)) + ',' + y + ') scale(' + sc + ')' });
          o.appendChild(el('path', { d: 'M-3 7 L-2.4 1 Q0 -1.6 2.4 1 L3 7 Z', fill: pick(pal) }));
          o.appendChild(el('circle', { cx: 0, cy: -1, r: 2.3, fill: pick(skin) }));
          g.appendChild(o);
        }
      }
    }
    crowd(root.querySelector('#pen-cH'), 4, 238, palH);
    crowd(root.querySelector('#pen-cR'), 242, 476, palR);

    root.querySelector('#pen-bl').appendChild(bolaFutebol());
  }

  /* --- Ponte SVG ↔ modelo -------------------------------------------------
     A meta desenhada: traves em x=83 e x=397, travessão em y=73, linha em y=184.
     Centro x=240, meia-largura 157, altura 111. E 111/157 = 0.707 = GY — ou seja,
     a escala é a MESMA nos dois eixos: 157 unidades de SVG por unidade do modelo.
     Não é coincidência: GY foi escolhido pela proporção real do gol. */
  var CX = 240, CY = 184, ESC = 157;

  function svgParaModelo(sx, sy) { return { x: (sx - CX) / ESC, y: (CY - sy) / ESC }; }
  function modeloParaSvg(mx, my) { return { x: CX + mx * ESC, y: CY - my * ESC }; }

  // --- Disputa principal ---
  function disputar(opts) {
    opts = opts || {};
    var meuNome = opts.meuNome || 'Seu Time';
    var advNome = opts.advNome || 'Adversário';
    var seq     = opts.sequencia || [];
    var vencedor = opts.vencedor || 'meu';
    var cad      = cadencia(opts.velocidade);
    var onFim    = typeof opts.onFim === 'function' ? opts.onFim : function () {};

    // MODO B (offline interativo): em vez de uma sequência pronta, recebe os elencos
    // e as forças, e decide cobrança a cobrança — porque o resultado do SEU chute só
    // pode existir depois que você mira. O MODO A (online) segue igual: sequência
    // pronta do servidor, animada.
    var interativo  = !!opts.interativo && !!window.Penaltis;
    var cobMeus     = opts.cobradoresMeus || [];
    var cobAdv      = opts.cobradoresAdv  || [];
    var golMeu      = opts.golMeu || 72;   // meu goleiro: defende as do adversário
    var golAdv      = opts.golAdv || 72;   // goleiro adversário: defende as minhas

    var ov = document.createElement('div');
    ov.className = 'pen-overlay';
    ov.innerHTML = montarHTML(meuNome, advNome);
    document.body.appendChild(ov);
    preencherCena(ov);
    requestAnimationFrame(function () { ov.classList.add('aberto'); });

    var kp = ov.querySelector('#pen-kp'), kpI = ov.querySelector('#pen-kpIdle'), kpD = ov.querySelector('#pen-kpDive'),
        bl = ov.querySelector('#pen-bl'), fl = ov.querySelector('#pen-fl'),
        sM = ov.querySelector('#pen-sM'), sA = ov.querySelector('#pen-sA'),
        dM = ov.querySelector('#pen-dM'), dA = ov.querySelector('#pen-dA'),
        cH = ov.querySelector('#pen-cH'), cR = ov.querySelector('#pen-cR'),
        status = ov.querySelector('#pen-status'), btnPular = ov.querySelector('#pen-pular');

    var resM = [], resA = [], pM = 0, pA = 0, idx = 0, pulado = false, timer = null;

    function bolinha(s) {
      var col = s === 'g' ? '#2BD46A' : s === 'r' ? '#e25b5b' : 'none',
          st  = s === 'g' ? '#15873f' : s === 'r' ? '#b23f3f' : 'rgba(255,255,255,.28)',
          sm  = s ? 'rgba(0,0,0,.34)' : 'transparent';
      return '<svg width="15" height="15" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="' + col + '" stroke="' + st + '" stroke-width="1.2"/><polygon points="8,5 10.3,6.7 9.4,9.4 6.6,9.4 5.7,6.7" fill="' + sm + '"/></svg>';
    }
    function dots(elx, arr) { var nmin = Math.max(5, arr.length), h = ''; for (var i = 0; i < nmin; i++) h += bolinha(i < arr.length ? (arr[i] ? 'g' : 'r') : ''); elx.innerHTML = h; }
    function render() { sM.textContent = pM; sA.textContent = pA; dots(dM, resM); dots(dA, resA); }

    function snap() {
      bl.style.transition = 'none'; kp.style.transition = 'none';
      kp.style.transform = 'translate(240px,180px)'; kpD.style.opacity = '0'; kpI.style.opacity = '1'; kpD.style.transform = '';
      bl.style.transform = 'translate(240px,288px)';
      bl.getBoundingClientRect();
      bl.style.transition = ''; kp.style.transition = '';
    }
    function reagir(homeFeliz) {
      var w = homeFeliz ? cH : cR, l = homeFeliz ? cR : cH;
      w.classList.remove('pen-cheer'); void w.getBBox(); w.classList.add('pen-cheer'); w.classList.remove('pen-boo');
      l.classList.add('pen-boo'); l.classList.remove('pen-cheer');
      setTimeout(function () { cH.classList.remove('pen-cheer', 'pen-boo'); cR.classList.remove('pen-cheer', 'pen-boo'); }, 1100);
    }
    function registrar(k) { if (k.lado === 'meu') { resM.push(k.ok); if (k.ok) pM++; } else { resA.push(k.ok); if (k.ok) pA++; } }

    function animarChute(k, done) {
      status.innerHTML = (k.lado === 'meu' ? esc(meuNome) : esc(advNome)) + ' &middot; bate: <b>' + esc(k.nome) + '</b>';
      var ok = (k.resultado != null) ? (k.resultado === 'gol') : !!k.ok;
      k.ok = ok; // normaliza para placar/torcida
      var o = k.resultado
            ? ({ gol: 'GOL', defesa: 'DEFENDEU', fora: 'FORA' }[k.resultado] || (ok ? 'GOL' : 'FORA'))
            : (ok ? 'GOL' : (Math.random() < 0.65 ? 'DEFENDEU' : 'FORA'));
      var lado = pick([-1, 0, 1]), alto = Math.random() < 0.5;
      var bx = lado * 108, by = alto ? -152 : -104, kx = lado * 72, ky = alto ? -14 : 8, rot = lado * (alto ? 46 : 30);
      if (o === 'FORA') { if (Math.random() < 0.55) { bx = pick([-1, 1]) * 195; by = -126; } else { by = -242; bx = lado * 90; } kx = pick([-1, 0, 1]) * 72; rot = (kx < 0 ? -1 : kx > 0 ? 1 : 0) * 38; }
      else if (o === 'DEFENDEU') { bx = lado * 86; by = alto ? -128 : -92; kx = lado * 72; ky = alto ? -14 : 8; rot = lado * (alto ? 46 : 30); }
      else { by = alto ? -152 : -124; kx = pick([-1, 0, 1].filter(function (z) { return z !== lado; })) * 72; rot = (kx < 0 ? -1 : kx > 0 ? 1 : 0) * (alto ? 46 : 30); }

      bl.style.transform = 'translate(' + (240 + bx) + 'px,' + (288 + by) + 'px) scale(.56)';
      setTimeout(function () {
        if (lado !== 0 || o === 'DEFENDEU') { kpI.style.opacity = '0'; kpD.style.opacity = '1'; }
        kp.style.transform = 'translate(' + (240 + kx) + 'px,' + (180 + ky) + 'px) rotate(' + rot + 'deg)';
      }, 110);
      setTimeout(function () {
        fl.textContent = o + '!';
        fl.setAttribute('fill', o === 'GOL' ? '#2BD46A' : (o === 'DEFENDEU' ? '#ffd76a' : '#e8e8e8'));
        fl.style.opacity = '1';
        reagir((k.lado === 'meu' && k.ok) || (k.lado === 'adv' && !k.ok));
        registrar(k); render();
      }, 560);
      setTimeout(function () { fl.style.opacity = '0'; snap(); done(); }, Math.max(900, cad));
    }

    /* ===== MODO B: disputa interativa (offline) ===================== */
    var estado = { pM: 0, pA: 0, iM: 0, iA: 0, morte: false };
    var ladoVez = 'meu', guarda = 0;
    var mira = ov.querySelector('#pen-mira'),
        miraHit = ov.querySelector('#pen-mira-hit'),
        miraAlvo = ov.querySelector('#pen-mira-alvo'),
        miraRaio = ov.querySelector('#pen-mira-raio');

    function cobradorDa(lado) {
      var lista = (lado === 'meu') ? cobMeus : cobAdv;
      var i = (lado === 'meu') ? estado.iM : estado.iA;
      return lista.length ? lista[i % lista.length] : { nome: '—', forca: 73 };
    }

    // Anima uma cobrança já resolvida pelo MODELO: a bola cai exatamente onde a
    // geometria disse. Nada de sortear a posição por fora — se a animação mostrasse
    // outra coisa, o jogador veria a conta mentindo.
    function animarModelo(lado, cob, r, done) {
      var alvoNome = (lado === 'meu' ? esc(meuNome) : esc(advNome));
      status.innerHTML = alvoNome + ' &middot; bate: <b>' + esc(cob.nome) + '</b>';

      var pB = modeloParaSvg(r.bola.x, r.bola.y);
      var pG = modeloParaSvg(r.goleiro.x, r.goleiro.y);
      var bx = pB.x - CX, by = pB.y - 288;                       // a bola parte de (240,288)
      var kx = (pG.x - CX) * 0.46;                               // goleiro anda menos que a bola
      var ky = 8 - (r.goleiro.y - 0.17) * 60;
      var mergulha = Math.abs(r.goleiro.x) > 0.3;
      var rot = (r.goleiro.x < 0 ? -1 : r.goleiro.x > 0 ? 1 : 0) * (r.goleiro.y > 0.35 ? 46 : 30);

      bl.style.transform = 'translate(' + (CX + bx) + 'px,' + (288 + by) + 'px) scale(.56)';
      setTimeout(function () {
        if (mergulha) { kpI.style.opacity = '0'; kpD.style.opacity = '1'; }
        kp.style.transform = 'translate(' + (CX + kx) + 'px,' + (180 + ky) + 'px) rotate(' + rot + 'deg)';
      }, 110);

      var rotulo = { gol: 'GOL', defesa: 'DEFENDEU', fora: 'FORA' }[r.resultado];
      var fez = (r.resultado === 'gol');
      setTimeout(function () {
        fl.textContent = rotulo + '!';
        fl.setAttribute('fill', fez ? '#2BD46A' : (r.resultado === 'defesa' ? '#ffd76a' : '#e8e8e8'));
        fl.style.opacity = '1';
        reagir((lado === 'meu') === fez);
        if (lado === 'meu') { resM.push(fez); if (fez) estado.pM++; estado.iM++; }
        else                { resA.push(fez); if (fez) estado.pA++; estado.iA++; }
        render();
      }, 560);
      setTimeout(function () { fl.style.opacity = '0'; snap(); done(); }, Math.max(900, cad));
    }

    function fecharMira() {
      mira.style.display = 'none';
      miraAlvo.style.opacity = '0';
      miraHit.onmousemove = miraHit.onclick = miraHit.ontouchstart = miraHit.ontouchmove = miraHit.ontouchend = null;
    }

    // Abre a mira e espera o clique. O círculo é o RAIO DE ERRO real (Penaltis.raioDe):
    // cresce rumo ao ângulo, encolhe com a força do cobrador. O jogador vê o risco
    // ANTES de se comprometer — a escolha é informada, não chute cego.
    function pedirMira(cob, cb) {
      mira.style.display = '';
      status.innerHTML = '<b>' + esc(cob.nome) + '</b> &middot; escolha o canto &mdash; quanto mais no &acirc;ngulo, maior o risco';

      // Prende a mira DENTRO da meta. Sem isto dava para mirar na grama, entre a linha
      // e a marca do pênalti — alvo que não existe no futebol. O cursor anda livre; o
      // alvo é que gruda na borda do gol.
      function pos(ev) {
        var pt = ov.querySelector('.pen-stage').getBoundingClientRect();
        var t = (ev.touches && ev.touches[0]) || ev;
        var sx = (t.clientX - pt.left) / pt.width * 480;
        var sy = (t.clientY - pt.top) / pt.height * 322;
        var m = svgParaModelo(sx, sy);
        m.x = Math.max(-GX, Math.min(GX, m.x));
        m.y = Math.max(0, Math.min(GY, m.y));
        var p = modeloParaSvg(m.x, m.y);
        return { sx: p.x, sy: p.y, mx: m.x, my: m.y };
      }
      function mover(ev) {
        var p = pos(ev);
        miraAlvo.style.opacity = '1';
        miraAlvo.setAttribute('transform', 'translate(' + p.sx.toFixed(1) + ',' + p.sy.toFixed(1) + ')');
        miraRaio.setAttribute('r', (raioDe(p.mx, p.my, cob.forca) * ESC).toFixed(1));
      }
      function atirar(ev) {
        if (ev.cancelable) ev.preventDefault();
        var p = pos(ev);
        fecharMira();
        cb({ x: p.mx, y: p.my });
      }
      miraHit.onmousemove = mover;
      miraHit.onclick = atirar;
      miraHit.ontouchmove = function (ev) { if (ev.cancelable) ev.preventDefault(); mover(ev); };
      miraHit.ontouchend = atirar;
    }

    function proximoInterativo() {
      if (pulado) return;
      var fim = decidiu(estado);
      if (fim || guarda++ > 60) return finalizar(fim || (estado.pM >= estado.pA ? 'meu' : 'adv'));

      var lado = ladoVez, cob = cobradorDa(lado);
      ladoVez = (lado === 'meu') ? 'adv' : 'meu';

      function bater(alvo) {
        var r = cobrar(alvo.x, alvo.y, cob.forca, lado === 'meu' ? golAdv : golMeu);
        animarModelo(lado, cob, r, function () {
          if (!pulado) timer = setTimeout(proximoInterativo, Math.round(cad * 0.25));
        });
      }
      if (lado === 'meu') pedirMira(cob, bater);
      else                bater(alvoCPU());
    }

    /* ===== MODO A: sequência pronta (online) ======================== */
    function proximo() {
      if (pulado) return;
      if (idx >= seq.length) { return finalizar(); }
      var k = seq[idx++];
      animarChute(k, function () { if (!pulado) timer = setTimeout(proximo, Math.round(cad * 0.25)); });
    }

    // "Pular": resolve o resto SEM interação. No interativo a CPU mira pelo usuário —
    // mesmo modelo, mesma matemática: pular não muda a chance de nada.
    function pular() {
      if (pulado) return;
      pulado = true; clearTimeout(timer); btnPular.disabled = true;
      if (interativo) {
        fecharMira();
        var g = 0, fim;
        while (!(fim = decidiu(estado)) && g++ < 60) {
          var lado = ladoVez, cob = cobradorDa(lado);
          ladoVez = (lado === 'meu') ? 'adv' : 'meu';
          var a = alvoCPU();
          var fez = cobrar(a.x, a.y, cob.forca, lado === 'meu' ? golAdv : golMeu).resultado === 'gol';
          if (lado === 'meu') { resM.push(fez); if (fez) estado.pM++; estado.iM++; }
          else                { resA.push(fez); if (fez) estado.pA++; estado.iA++; }
        }
        render();
        return finalizar(fim || (estado.pM >= estado.pA ? 'meu' : 'adv'));
      }
      for (; idx < seq.length; idx++) registrar(seq[idx]);
      render(); finalizar();
    }

    function finalizar(quem) {
      btnPular.disabled = true;
      fecharMira();
      var v = quem || vencedor;   // modo B decide na hora; modo A já veio decidido
      status.innerHTML = '<b>' + esc(v === 'meu' ? meuNome : advNome) + ' venceu nos p&ecirc;naltis!</b>';
      setTimeout(function () {
        ov.classList.remove('aberto');
        setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); onFim(v); }, 380);
      }, 1400);
    }

    btnPular.addEventListener('click', pular);
    render(); snap();
    timer = setTimeout(interativo ? proximoInterativo : proximo, 500);
  }

  // --- Demo: gera uma disputa aleatória e abre o modal ---
  function gerarSequencia() {
    var nomesM = ['Falc\u00e3o', 'S\u00f3crates', 'Zico', 'Cafu', 'J\u00fanior'];
    var nomesA = ['Pel\u00e9', 'Coutinho', 'Pepe', 'Cl\u00f3dado', 'Meng\u00e1lvio'];
    var seq = [], pM = 0, pA = 0, iM = 0, iA = 0, morte = false, lado = 'meu', g = 0;
    function decidiu() {
      if (!morte) {
        var rM = Math.max(0, 5 - iM), rA = Math.max(0, 5 - iA);
        if (pM > pA + rA) return 'meu'; if (pA > pM + rM) return 'adv';
        if (iM >= 5 && iA >= 5) { if (pM > pA) return 'meu'; if (pA > pM) return 'adv'; morte = true; }
      } else if (iM === iA) { if (pM > pA) return 'meu'; if (pA > pM) return 'adv'; }
      return null;
    }
    while (g++ < 60) {
      var ok = Math.random() < 0.78;   // conversão realista (~78%); antes 0.74 errava demais
      if (lado === 'meu') { seq.push({ lado: 'meu', nome: nomesM[iM % nomesM.length], ok: ok }); if (ok) pM++; iM++; }
      else { seq.push({ lado: 'adv', nome: nomesA[iA % nomesA.length], ok: ok }); if (ok) pA++; iA++; }
      var d = decidiu(); if (d) return { sequencia: seq, vencedor: d };
      lado = lado === 'meu' ? 'adv' : 'meu';
    }
    return { sequencia: seq, vencedor: pM >= pA ? 'meu' : 'adv' };
  }

  function demo() {
    var r = gerarSequencia();
    disputar({ meuNome: 'Faccio FC', advNome: 'Santos 1959', sequencia: r.sequencia, vencedor: r.vencedor, velocidade: 'normal', onFim: function () {} });
  }

  window.Penaltis = {
    disputar: disputar,
    demo: demo,
    // Modelo exposto: é a fonte única do offline (simulacao.js consome daqui) e
    // o que os testes auditam. NÃO reimplemente cobrança em outro arquivo —
    // este projeto já pagou caro por ter 4 cópias divergentes da mesma conta.
    cobrar: cobrar,
    raioDe: raioDe,
    alvoCPU: alvoCPU,
    decidiu: decidiu,
    MIRA: MIRA,
    GX: GX,
    GY: GY
  };
})();
