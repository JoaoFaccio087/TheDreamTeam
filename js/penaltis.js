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

  // --- Disputa principal ---
  function disputar(opts) {
    opts = opts || {};
    var meuNome = opts.meuNome || 'Seu Time';
    var advNome = opts.advNome || 'Adversário';
    var seq     = opts.sequencia || [];
    var vencedor = opts.vencedor || 'meu';
    var cad      = cadencia(opts.velocidade);
    var onFim    = typeof opts.onFim === 'function' ? opts.onFim : function () {};

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
      var o = k.ok ? 'GOL' : (Math.random() < 0.65 ? 'DEFENDEU' : 'FORA');
      var lado = pick([-1, 0, 1]), alto = Math.random() < 0.5;
      var bx = lado * 108, by = alto ? -152 : -104, kx = lado * 72, ky = alto ? -14 : 8, rot = lado * (alto ? 46 : 30);
      if (o === 'FORA') { if (Math.random() < 0.55) { bx = pick([-1, 1]) * 195; by = -126; } else { by = -242; bx = lado * 90; } kx = pick([-1, 0, 1]) * 72; rot = (kx < 0 ? -1 : kx > 0 ? 1 : 0) * 38; }
      else if (o === 'DEFENDEU') { bx = lado * 86; by = alto ? -128 : -92; kx = lado * 72; ky = alto ? -14 : 8; rot = lado * (alto ? 46 : 30); }
      else { kx = pick([-1, 0, 1].filter(function (z) { return z !== lado; })) * 72; rot = (kx < 0 ? -1 : kx > 0 ? 1 : 0) * (alto ? 46 : 30); }

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

    function proximo() {
      if (pulado) return;
      if (idx >= seq.length) { return finalizar(); }
      var k = seq[idx++];
      animarChute(k, function () { if (!pulado) timer = setTimeout(proximo, Math.round(cad * 0.25)); });
    }

    function pular() {
      if (pulado) return;
      pulado = true; clearTimeout(timer); btnPular.disabled = true;
      for (; idx < seq.length; idx++) registrar(seq[idx]);
      render(); finalizar();
    }

    function finalizar() {
      btnPular.disabled = true;
      status.innerHTML = '<b>' + esc(vencedor === 'meu' ? meuNome : advNome) + ' venceu nos p&ecirc;naltis!</b>';
      setTimeout(function () {
        ov.classList.remove('aberto');
        setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); onFim(vencedor); }, 380);
      }, 1400);
    }

    btnPular.addEventListener('click', pular);
    render(); snap();
    timer = setTimeout(proximo, 500);
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
      var ok = Math.random() < 0.74;
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

  window.Penaltis = { disputar: disputar, demo: demo };
})();
