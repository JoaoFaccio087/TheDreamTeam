'use strict';
// combos.test.js — as conquistas de Combinação identificam a PESSOA, não a string.
const fs = require('fs'), path = require('path');
const RAIZ = '/home/claude/proj2/TheDreamTeam';
const src = fs.readFileSync(path.join(RAIZ, 'api/achievements.js'), 'utf8');

// extrai COMBOS e as duas funções, sem subir o módulo inteiro (ele puxa o banco)
const sb = {};
const bloco = src.slice(src.indexOf('const COMBOS'), src.indexOf('];', src.indexOf('const COMBOS')) + 2);
const fNomes = src.slice(src.indexOf('function nomesEscalados'), src.indexOf('function comboFeito'));
const fCombo = src.slice(src.indexOf('function comboFeito'), src.indexOf('\n}', src.indexOf('function comboFeito')) + 2);
new Function(bloco + '\n' + fNomes + '\n' + fCombo +
  '\nthis.COMBOS = COMBOS; this.comboFeito = comboFeito;').call(sb);
const { COMBOS, comboFeito } = sb;
const combo = (id) => COMBOS.find((c) => c.id === id);

let f = 0;
const ok = (c, m) => { if (!c) { f++; console.log('  \u2717 ' + m); } else console.log('  \u2713 ' + m); };
const campanha = (picks) => ({ matches: [{ detalhes: { snapshot: { picks } } }] });

console.log('\n\u2500\u2500 MSN: o Suárez CERTO \u2500\u2500');
ok(comboFeito(campanha([
  { id: 'lionel-messi', nome: 'Lionel Messi' },
  { id: 'luis-suarez-uru', nome: 'Luis Suárez' },
  { id: 'neymar', nome: 'Neymar' },
]), combo('trio_msn')), 'Messi + Suárez URUGUAIO + Neymar \u2192 DESBLOQUEIA');

console.log('\n\u2500\u2500 MSN: o Suárez ERRADO (o bug que o João achou) \u2500\u2500');
ok(!comboFeito(campanha([
  { id: 'lionel-messi', nome: 'Lionel Messi' },
  { id: 'luis-suarez-esp', nome: 'Luis Suárez' },   // o espanhol do Inter de 1965
  { id: 'neymar', nome: 'Neymar' },
]), combo('trio_msn')), 'Messi + Suárez ESPANHOL de 1965 + Neymar \u2192 NÃO desbloqueia');

console.log('\n\u2500\u2500 Os 3 Rs: o Ronaldo errado \u2500\u2500');
ok(comboFeito(campanha([
  { id: 'ronaldo-fenomeno', nome: 'Ronaldo' }, { id: 'rivaldo', nome: 'Rivaldo' }, { id: 'ronaldinho', nome: 'Ronaldinho' },
]), combo('tres_rs')), 'Fenômeno + Rivaldo + Ronaldinho \u2192 desbloqueia');
ok(!comboFeito(campanha([
  { id: 'ronaldo-goleiro', nome: 'Ronaldo' },   // o goleiro do Bahia
  { id: 'rivaldo', nome: 'Rivaldo' }, { id: 'ronaldinho', nome: 'Ronaldinho' },
]), combo('tres_rs')), 'GOLEIRO do Bahia + Rivaldo + Ronaldinho \u2192 NÃO desbloqueia');
ok(!comboFeito(campanha([
  { id: 'cristiano-ronaldo', nome: 'Ronaldo' },
  { id: 'rivaldo', nome: 'Rivaldo' }, { id: 'ronaldinho', nome: 'Ronaldinho' },
]), combo('tres_rs')), 'CRISTIANO + Rivaldo + Ronaldinho \u2192 NÃO desbloqueia');

console.log('\n\u2500\u2500 as 81 campanhas ANTIGAS (salvas sem id) continuam valendo \u2500\u2500');
ok(comboFeito(campanha([
  { nome: 'Lionel Messi' }, { nome: 'Luis Suárez' }, { nome: 'Neymar Jr' },
]), combo('trio_msn')), 'campanha velha, sem id, só nome \u2192 ainda desbloqueia');
ok(comboFeito(campanha([
  { nome: 'Ronaldo' }, { nome: 'Rivaldo' }, { nome: 'Ronaldinho' },
]), combo('tres_rs')), 'Os 3 Rs de campanha velha \u2192 ainda desbloqueia');

console.log('\n\u2500\u2500 grafia: o que motivou tudo \u2500\u2500');
ok(comboFeito(campanha([
  { nome: 'Lionel Messi' }, { nome: 'Luis Suarez' }, { nome: 'Neymar' },   // SEM acento
]), combo('trio_msn')), '"Luis Suarez" sem acento (campanha velha) \u2192 desbloqueia');

console.log('\n\u2500\u2500 falta um \u2500\u2500');
ok(!comboFeito(campanha([
  { id: 'lionel-messi' }, { id: 'neymar' },
]), combo('trio_msn')), 'sem o Suárez \u2192 não desbloqueia');

console.log('\n' + (f === 0 ? '\u2705 COMBINAÇÕES OK' : '\u274c ' + f + ' falha(s)'));
process.exit(f === 0 ? 0 : 1);
