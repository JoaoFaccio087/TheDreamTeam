#!/usr/bin/env node
'use strict';
// ============================================================================
//  gerar-ids.js — dá um `id` a cada jogador dos arquivos de dados.
//
//  USO:  node scripts/gerar-ids.js --check    (só relata, não escreve)
//        node scripts/gerar-ids.js --aplicar  (reescreve js/dados/*.js e api/dados/*.js)
//
//  POR QUE EXISTE
//  --------------
//  Hoje o jogador é identificado pelo NOME, e nome não identifica pessoa:
//
//   1. A MESMA pessoa aparece com nomes diferentes — `Luis Suárez` e `Luis Suarez`,
//      `Diego Godín` e `Diego Godin`. São 157 casos. O `id` por slug mata todos de
//      graça: os dois viram `luis-suarez`, sem ninguém julgar grafia.
//
//   2. Pessoas DIFERENTES compartilham o mesmo nome — `Luis Suárez` cobre o espanhol
//      do Inter de 1965 E o uruguaio do Barcelona de 2015. `Ronaldo` cobre o Fenômeno,
//      o Cristiano (Portugal 2026) e um lateral do Bangu de 1983. São 193 casos.
//      ⚠️ O slug NÃO resolve isto: `luis-suarez` continua fundindo os dois.
//      Só gente sabe separar — é para isso que existe a DESAMBIGUACAO abaixo.
//
//  A consequência prática: `api/achievements.js` compara por nome exato (`set.has`).
//  A conquista MSN não dispara com o Suárez acentuado, E dispara errado com o
//  espanhol de 1965. Os dois bugs, o mesmo motivo.
//
//  O QUE NÃO ESTÁ AQUI, DE PROPÓSITO
//  ---------------------------------
//  `nacionalidade`. Ela seria pista para separar os 193, mas é pista FALHA:
//  Davor Šuker aparece como Iugoslávia E Croácia — é o país que mudou de nome, não a
//  pessoa. José Altafini jogou por Brasil E Itália — uma pessoa, duas seleções.
//  E 3.764 jogadores nunca jogaram Copa: a nacionalidade deles teria de ser inventada.
//  Campo vazio é melhor que campo chutado — chute parece verdade.
// ============================================================================

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const BASES = [
  ['js/dados/libertadores.js', 'DADOS_LIBERTADORES'],
  ['js/dados/champions.js',    'DADOS_CHAMPIONS'],
  ['js/dados/brasileirao.js',  'DADOS_BRASILEIRAO'],
  ['js/dados/copa.js',         'DADOS_COPA'],
];

// ─────────────────────────────────────────────────────────────────────────────
//  DESAMBIGUAÇÃO — A MESA POSTA PARA OS 193
//
//  Aqui mora o conhecimento que nenhuma regra tem: QUEM é quem.
//  Cada entrada diz "este nome, nesta janela de anos, é esta pessoa".
//
//  Como preencher: rode `--check`, olhe o relatório dos colididos (ele imprime as
//  edições de cada um), e escreva a faixa. O que não estiver aqui continua fundido —
//  e isso é honesto: fundido errado é visível, separado errado é invisível.
//
//  ⚠️ As faixas TÊM de cobrir todos os anos do nome, senão sobra jogador sem dono.
//     O --check reclama se faltar.
// ─────────────────────────────────────────────────────────────────────────────
const DESAMBIGUACAO = {
  // ⚠️ A ORDEM IMPORTA: a primeira regra que casar vence. Ponha a mais específica antes.
  //
  // Filtros disponíveis: `de`/`ate` (ano), `clubes`, `posicoes`. Ano sozinho não basta —
  // o Ronaldo do Bahia 1994 (goleiro) e o do Brasil 1994 (o Fenômeno) são o MESMO ano.
  // Foi a POSIÇÃO que separou, e ela é dado que já temos.

  'ronaldo': [
    // O Fenômeno: sempre ATA, de 1994 (Brasil) a 2010 (Corinthians).
    { de: 1994, ate: 2010, posicoes: ['ATA'], id: 'ronaldo-fenomeno' },
    // Cristiano Ronaldo, catalogado só como "Ronaldo" em Portugal 2026.
    { clubes: ['Portugal'], id: 'cristiano-ronaldo' },
    // Ronaldo Passos, goleiro do Bahia (confirmado: Bahia 1979-90, Vitória 90-97).
    // O Bahia 1994 e o Corinthians 1995 também são GOL — podem ser ele ou um quarto
    // Ronaldo. Ficam juntos: é o que os dados sustentam.
    { posicoes: ['GOL'], id: 'ronaldo-goleiro' },
    // Zagueiro do Bangu 83/85 e ponta do Atlético-MG 1970: pessoas distintas, mas
    // nenhuma conquista as cita. Ficam no slug base — fundido À VISTA é melhor que
    // separado por chute.
  ],

  'luis-suarez': [
    // TRÊS pessoas sob o mesmo nome. Faixa por ano NÃO basta: `de: 1991` pegaria o
    // colombiano de 2026 junto com o uruguaio. Precisa de `clubes`.
    { clubes: ['Colômbia'], id: 'luis-suarez-col' },              // Colômbia 2026
    { ate: 1990, id: 'luis-suarez-esp' },                          // Barcelona 60-61, Inter 64-72, Espanha 62/66
    { de: 1991,  id: 'luis-suarez-uru' },                          // Barcelona 15/19, Grêmio 23, Uruguai 10-22
  ],

  'zico': [
    // Flamengo/Brasil 78-87 é ele. O Egito 2026 é outra pessoa e fica no slug base.
    { ate: 1990, id: 'zico-galinho' },
  ],

  // ── A DECIDIR (não mexer sem olhar os elencos) ──────────────────────────────
  // 'falcao' e 'romario' → NÃO desambiguar: não é colisão de nome.
  //   Internacional 1962 é cópia EXATA do 1967; Vasco 1980 = 1982 = 1984 = 1989 (e o elenco
  //   é dos anos 90: Dunga, Mazinho, Ricardo Rocha). São 403 edições assim na base — a mesma
  //   edição colada em vários anos. `id` não conserta conteúdo. Ver ESTADO.md.
  // 'luis-suarez' → espanhol (Barcelona 60-61, Inter 64-72, Espanha 62/66) vs uruguaio
  //   (Barcelona 15/19, Grêmio 23, Uruguai 10-22) vs colombiano (Colômbia 2026).
  //   TRÊS pessoas. Faixa por ano pega o colombiano junto com o uruguaio — precisa de
  //   `clubes`. Não catalogado porque o `achievements.js` cita 'Luis Suarez' sem acento
  //   e a conquista precisa apontar para o id certo, não para a string.
};

// slug: sem acento, minúsculo, hífen no lugar de espaço.
// `Luis Suárez` e `Luis Suarez` caem no MESMO slug — é o que mata os 157 de acento.
function slug(nome) {
  return String(nome)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function idDe(nome, ano, clube, posicoes) {
  const base = slug(nome);
  const regras = DESAMBIGUACAO[base];
  if (!regras) return base;
  for (const r of regras) {
    if (r.de !== undefined && ano < r.de) continue;
    if (r.ate !== undefined && ano > r.ate) continue;
    if (r.clubes && r.clubes.indexOf(clube) < 0) continue;
    if (r.posicoes && !(posicoes || []).some((p) => r.posicoes.indexOf(p) >= 0)) continue;
    return r.id;
  }
  return base;   // fora de toda faixa: fica no slug base (o --check reclama)
}

function carregar(arquivo, varName) {
  const src = fs.readFileSync(path.join(RAIZ, arquivo), 'utf8');
  const box = {};
  new Function(src.replace('const ' + varName, 'this.' + varName)
                  .replace('var ' + varName, 'this.' + varName)).call(box);
  return box[varName];
}

// ── Relatório ────────────────────────────────────────────────────────────────
function analisar() {
  const porSlug = {};   // slug → [{nome, clube, ano, sel}]
  for (const [arq, v] of BASES) {
    for (const ed of carregar(arq, v)) {
      for (const j of ed.jogadores) {
        const s = slug(j.nome);
        (porSlug[s] = porSlug[s] || []).push({
          nome: j.nome, clube: ed.clube, ano: ed.edicao, posicoes: j.posicoes,
          sel: ed.competicao === 'Copa do Mundo',
        });
      }
    }
  }

  const slugs = Object.keys(porSlug);
  const grafias = slugs.filter((s) => new Set(porSlug[s].map((x) => x.nome)).size > 1);
  const colididos = slugs.filter((s) => {
    const anos = porSlug[s].map((x) => x.ano);
    const sels = new Set(porSlug[s].filter((x) => x.sel).map((x) => x.clube));
    return (Math.max(...anos) - Math.min(...anos)) > 25 || sels.size > 1;
  });

  console.log('\n═══ IDs ═══');
  console.log('  registros de jogador : ' + slugs.reduce((n, s) => n + porSlug[s].length, 0));
  console.log('  ids distintos        : ' + slugs.length);
  console.log('  \u2713 grafias unificadas  : ' + grafias.length + '  (acento/maiúscula — resolvidos pelo slug)');
  console.log('  \u26a0 ids COLIDIDOS       : ' + colididos.length + '  (podem ser pessoas diferentes)');
  console.log('    desambiguados       : ' + colididos.filter((s) => DESAMBIGUACAO[s]).length);
  console.log('    A DECIDIR           : ' + colididos.filter((s) => !DESAMBIGUACAO[s]).length);

  // Faixa que não cobre todos os anos deixa jogador órfão — avisa.
  for (const s of Object.keys(DESAMBIGUACAO)) {
    if (!porSlug[s]) { console.log('  \u2717 desambiguação de "' + s + '" não casa com ninguém'); continue; }
    // ⚠️ TEM de passar clube e posicoes — os mesmos argumentos que o aplicar() usa.
    // Sem eles o verificador julgava com menos informação que o gerador e acusava 16
    // órfãos que não existiam. Verificador que não vê o que o gerador vê mente.
    const orfaos = porSlug[s].filter((x) => idDe(x.nome, x.ano, x.clube, x.posicoes) === s);
    if (orfaos.length) {
      console.log('  \u2717 "' + s + '": ' + orfaos.length + ' edição(ões) fora de toda faixa — ' +
                  orfaos.map((o) => o.clube + ' ' + o.ano).join(', '));
    }
  }
  return { porSlug, colididos, registros: slugs.reduce((n, s) => n + porSlug[s].length, 0) };
}

function detalhar(porSlug, colididos, n) {
  const alvo = colididos.filter((s) => !DESAMBIGUACAO[s])
    .sort((a, b) => {
      const g = (s) => { const y = porSlug[s].map((x) => x.ano); return Math.max(...y) - Math.min(...y); };
      return g(b) - g(a);
    }).slice(0, n);
  console.log('\n═══ OS ' + alvo.length + ' MAIS GRITANTES (para preencher a DESAMBIGUACAO) ═══');
  for (const s of alvo) {
    const eds = porSlug[s].slice().sort((a, b) => a.ano - b.ano);
    const anos = eds.map((e) => e.ano);
    console.log('\n  ' + s + '   (' + Math.min(...anos) + '–' + Math.max(...anos) + ', ' + eds.length + ' edições)');
    for (const e of eds) console.log('      ' + e.ano + '  ' + e.clube + (e.sel ? '  [seleção]' : ''));
  }
}

// ── Escrita ──────────────────────────────────────────────────────────────────
// Insere `id: '…'` ANTES de cada `nome:` no texto do arquivo, preservando o resto.
// Reescrever via JSON.stringify destruiria formatação e comentários dos dados.
function aplicar() {
  let total = 0;
  for (const [arq, v] of BASES) {
    for (const destino of [arq, arq.replace('js/dados/', 'api/dados/')]) {
      const p = path.join(RAIZ, destino);
      if (!fs.existsSync(p)) continue;
      let src = fs.readFileSync(p, 'utf8');
      if (/\bid:\s*'/.test(src)) { console.log('  \u26a0 ' + destino + ' já tem id — pulando'); continue; }

      let anoAtual = null, clubeAtual = null, n = 0;
      // ⚠️ DOIS FORMATOS NA MESMA BASE. libertadores/champions/brasileirao usam chave nua
      // (`nome:`); copa.js usa chave entre aspas (`"nome":`). O regex que só via a nua
      // reportou "copa.js: 0 jogadores" e ✓ verde — 8.590 jogadores (37% da base) ficariam
      // SEM id, e o script diria que deu certo. Por isso `["']?` nas chaves.
      //
      // ⚠️ O corpo do nome é `(?!\5)[^\\]` — qualquer coisa menos a aspa que ABRIU. Um
      // `[^"']` parecia mais seguro e engolia `D'Alessandro`: o apóstrofo cortava o
      // casamento e o jogador saía sem id, calado. 1 em 4.678.
      //
      // A lição comum: regex que erra não avisa. Por isso o --check conta os jogadores
      // e o teste compara com a base original.
      // Captura o bloco INTEIRO do jogador para ter as posições — a desambiguação do
      // Ronaldo depende delas (Bahia 1994 GOL vs Brasil 1994 ATA, mesmo ano).
      src = src.replace(
        /(["']?edicao["']?:\s*)(\d{4})|(["']?clube["']?:\s*)(["'])((?:\\.|(?!\4)[^\\])*)\4|(\{\s*)(["']?nome["']?:\s*)(["'])((?:\\.|(?!\8)[^\\])*)\8([^}]*\})/g,
        function (m, _e, ano, _c, _ca, clube, abre, chaveNome, aspas, nome, resto) {
          if (ano !== undefined) { anoAtual = +ano; return m; }
          if (clube !== undefined) { clubeAtual = clube; return m; }
          const pos = (resto.match(/["']?posicoes["']?:\s*\[([^\]]*)\]/) || [, ''])[1]
            .split(',').map((x) => x.replace(/["'\s]/g, '')).filter(Boolean);
          n++;
          return abre + "id: '" + idDe(nome, anoAtual, clubeAtual, pos) + "', " +
                 chaveNome + aspas + nome + aspas + resto;
        });
      fs.writeFileSync(p, src);
      console.log('  \u2713 ' + destino + ': ' + n + ' jogadores');
      total += n;
    }
  }
  console.log('\n  total: ' + total);
  return total;
}

const arg = process.argv[2];
const { porSlug, colididos, registros } = analisar();
if (arg === '--aplicar') {
  const escritos = aplicar();
  // GUARDA: o --check já contou os jogadores. Se o --aplicar escrever menos, algum
  // formato de arquivo não casou com o regex e ninguém avisou — foi o que aconteceu
  // com o copa.js (chaves entre aspas): 0 escritos e ✓ verde em cima.
  // js/dados e api/dados: cada jogador é escrito 2x quando a cópia existe.
  if (escritos < registros) {
    console.log('\n\u001b[31m\u274c ESCREVEU MENOS DO QUE EXISTE: ' + escritos + ' < ' + registros +
                '\n   Algum arquivo não casou com o regex. NÃO COMMITE.\u001b[0m');
    process.exit(1);
  }
}
else { detalhar(porSlug, colididos, 12); console.log('\n  (--check: nada foi escrito. Use --aplicar para gravar.)'); }
