'use strict';
// Os modais novos têm SAÍDA além do botão? (Esc e clique fora)
const fs = require('fs');
const R = '/home/claude/proj2/TheDreamTeam';
let f = 0; const ok = (c,m) => { if(!c){f++;console.log('  \u2717 '+m);} else console.log('  \u2713 '+m); };
[['js/livre.js','pote'], ['js/perfil.js','escudo']].forEach(function (par) {
  const src = fs.readFileSync(R + '/' + par[0], 'utf8');
  console.log('\n\u2500\u2500 modal do ' + par[1] + ' \u2500\u2500');
  ok(/key === 'Escape'/.test(src), 'fecha com Esc');
  ok(/ev\.target === ov/.test(src), 'fecha com clique fora');
  ok(/removeEventListener\('keydown'/.test(src), 'remove o listener ao fechar (não vaza)');
});
const css = fs.readFileSync(R + '/css/perfil.css','utf8') + fs.readFileSync(R + '/css/draft.css','utf8');
console.log('\n\u2500\u2500 cabem na tela do celular? \u2500\u2500');
ok(/\.escudo-box\s*{[^}]*max-height/.test(css), 'modal do escudo tem max-height (não estoura a tela)');
ok(/\.escudo-corpo\s*{[^}]*overflow-y:\s*auto/.test(css), 'o corpo do escudo rola');
ok(/\.pote-caixa\s*{[^}]*max-height/.test(css), 'modal do pote tem max-height');
ok(/\.draft-overlay\s*{\s*overflow-y:\s*auto/.test(css), 'o overlay rola se o conteúdo passar');
console.log('\n\u2500\u2500 o scroll do celular \u2500\u2500');
const esc = fs.readFileSync(R + '/js/escalacao.js','utf8');
ok(/campoJogo\.scrollIntoView\(\{ behavior: 'smooth', block: 'start' \}\)/.test(esc),
   "scrollIntoView usa block:'start' (o 'center' empurrava o topo do campo para fora)");
console.log('\n' + (f===0 ? '\u2705 SAÍDA E CELULAR OK' : '\u274c ' + f + ' falha(s)'));
process.exit(f===0?0:1);
