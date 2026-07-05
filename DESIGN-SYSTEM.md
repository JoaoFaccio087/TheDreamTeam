# The Dream Team — Guia do Design System + UIKit (kit de referência)

Documento interno. **Não sobe pro GitHub** (fica junto com ESTADO.md e afins).
Objetivo: manter o visual consistente e **parar de criar dívida** (variações novas
espalhadas). Ao criar telas, botões ou componentes novos, consulte este guia primeiro.

Duas camadas se complementam:
- **Design System** = tokens (`:root` do `base.css`) + regras de CSS/classes (botões, componentes).
- **UIKit** = componentes programáticos reutilizáveis em `js/ui.js` (`window.UI`), para não
  remontar HTML na mão em cada tela.

Regra de ouro: **antes de escrever HTML/CSS do zero, veja se já existe em `UI.*` ou como classe
canônica.** Se for repetir um padrão pela 2ª vez, é candidato a virar componente.

---

## 1. Tokens (todos no `:root` do `css/base.css`)

### Tipografia — `--fs-*`
| Token | Valor | Uso |
|-------|-------|-----|
| `--fs-micro` | 0.56rem | textos minúsculos (labels/nomes em cards compactos) |
| `--fs-legenda` | 0.62rem | rótulos minúsculos, tags, contadores |
| `--fs-mini` | 0.72rem | legendas, botões pequenos |
| `--fs-sm` | 0.82rem | texto secundário |
| `--fs-base` | 0.9rem | texto padrão |
| `--fs-md` | 1rem | texto de destaque |
| `--fs-lg` | 1.1rem | subtítulos |
| `--fs-xl` | 1.4rem | títulos |
| `--fs-2xl` | 2rem | títulos grandes |
| `--fs-manchete` | 4.8rem | a manchete da home |

Títulos grandes/decorativos ÚNICOS (ex.: força geral 3rem, título de seção 2.6rem)
ficam soltos de propósito — não force um token neles.

### Pesos — `--peso-*`
`--peso-normal` (400) · `--peso-medio` (600) · `--peso-forte` (700).

### Espaçamento — `--sp-1..9`
0.3rem a 1.4rem. Use em gap/margin/padding. Gaps < 0.3rem ficam soltos.

### Raios — régua 4/8
`--raio-xs` (4px) · `--raio-sm` (6px) · `--raio-md` (8px) · `--raio-lg` (12px)
· `--raio-xl` (16px) · `--raio-pill` (999px).

### Cores
`--accent` (verde #2BD46A padrão/Brasil/Copa; dourado Liberta; prata Champions),
`--perigo` (#ff6b6b — ação destrutiva/negativa: logout, sair, derrota),
`--bg`, `--txt`, `--txt-soft`, `--surface`, `--linha`, `--btn-txt`.

---

## 2. Botões — qual usar quando

| Classe | Aparência | Quando usar |
|--------|-----------|-------------|
| `.btn-rolar` | preenchido accent, texto escuro | **ação primária** (Rolar, Começar, Simular, Confirmar) |
| `.btn-secundario` | contorno cinza (`--txt-soft`) | ação secundária neutra (Voltar) |
| `.btn-outline-accent` | contorno accent, hover preenche | **botão secundário de destaque** — use esta nos casos novos |
| `.btn-outline-soft` | contorno cinza (`--txt-soft`) | núcleo dos botões secundários neutros (Voltar, Cancelar) |
| `.btn-rolar.btn-perigo` | preenchido vermelho (`--perigo`) | **ação destrutiva** (excluir, sair definitivo) — combina com `.btn-rolar` |
| `.pilula` | seletor arredondado | escolher entre opções (modo, formação, velocidade) |

### Regra da dívida (IMPORTANTE)
Botão "contorno accent" (transparente + borda verde + hover que preenche) já existe
consolidado. O núcleo (cores + hover) vive **só** em `.btn-outline-accent` no base.css.
As classes `.btn-resumo`, `.fim-btn` e `.hist-resumo-btn` **herdam** esse núcleo e
adicionam só os detalhes próprios (fonte, tamanho, raio).

**Ao criar um botão secundário de destaque novo:** use `.btn-outline-accent` e adicione
só os detalhes específicos numa classe complementar. **NÃO** copie background/color/border
de novo — isso recria a dívida que acabamos de pagar.

### Variantes legítimas (mantidas de propósito, NÃO consolidar)
- `.fim-btn-sec` — contorno cinza (`--txt-soft`), não accent.
- `.resumo-btn` — contorno branco translúcido (contexto do resumo).
- `.btn-secundario` — contorno cinza neutro.

---

## 3. UIKit — componentes em `js/ui.js` (`window.UI`)

Carregado antes das telas. Sempre prefira estes a remontar HTML na mão.

| Membro | O que faz | Assinatura |
|--------|-----------|-----------|
| `UI.esc(s)` | Escapa `& < > " '` antes de injetar em innerHTML | `esc(string) → string` |
| `UI.shuffle(arr)` | Fisher-Yates; devolve **cópia** (não muta) | `shuffle(array) → array` |
| `UI.posicionarCampo(marcadores, formacao)` | Posiciona os 11 marcadores pelas coords da formação; sobe o nome quando há ficha logo abaixo | `→ coords | null` |
| `UI.renderHeader(slot, opts)` / `UI.setHeader(slotId, opts)` | Cabeçalho padrão das telas (título, slogan, info, voltar) | `opts: {titulo,tituloId,slogan,sloganId,info\|infoHtml,infoId,voltarId,brandingDireita}` |
| `UI.modalConfirm(opts)` | **Modal de confirmação** (Cancelar/Confirmar) criado sob demanda; fecha por Cancelar, clique fora e Esc; devolve `Promise<boolean>` | `opts: {titulo, texto\|html, confirmar, cancelar, onConfirmar, onCancelar, perigo}` |

**`UI.renderHeader` — dois layouts:** padrão → `[ (Voltar?) título+slogan ] … [ info ]` (telas de
jogo/simulação/online). Com `brandingDireita: true` → `[ Voltar ] … [ título+slogan à direita ]`
(tela de Perfil). A marca à direita fica em `.jogo-header-dir`.

**`UI.modalConfirm` — quando usar:** em **modais de confirmação NOVOS**. Exemplo:
```js
UI.modalConfirm({
  titulo: 'Excluir conta?',
  texto: 'Esta ação é permanente.',
  confirmar: 'Excluir', perigo: true,
  onConfirmar: excluirConta
});
```
Os 5 modais antigos (logout, sair da sala, pular tudo solo/online, pular sorteio) **ainda têm
lógica própria** (votação, estado "Saindo…") e não passam pelo helper — ver dívida na seção 5.

---

## 4. Componente CSS: modal de confirmação (`.modal-confirm`)

Estrutura canônica (vive em `base.css`, componente **global**):
```html
<div class="modal-confirm escondida">           <!-- overlay = backdrop -->
  <div class="modal-confirm-box" role="dialog" aria-modal="true">
    <p class="modal-confirm-titulo">Título?</p>
    <p class="modal-confirm-texto">Explicação.</p>
    <div class="modal-confirm-acoes">
      <button class="btn-rolar btn-sec">Cancelar</button>
      <button class="btn-rolar">Confirmar</button>
    </div>
  </div>
</div>
```
- Cancelar = `.btn-rolar.btn-sec` (contorno); Confirmar = `.btn-rolar` (ou `.btn-perigo` se destrutivo).
- Overlay É o backdrop (sem elemento `.backdrop` separado). Fechar por clique-fora: no JS,
  `if (e.target === overlay) fechar()`.
- **Usos:** logout, sair da sala, pular tudo (solo e online), pular sorteio. Antes havia um 2º
  sistema `.confirm-overlay/.confirm-card` (só no Brasileirão solo) — **consolidado** neste.

---

## 5. `.escondida`
`display: none !important` (base.css). É a forma canônica de esconder/mostrar
elementos via JS (`classList.add/remove('escondida')`). Não crie outra forma.

---

## 6. Mapa de consolidação futura (dívida antiga restante)
Pago até aqui:
- botões "contorno accent" (3 classes → núcleo `.btn-outline-accent`).
- botões "contorno cinza" (`.btn-secundario` + `.fim-btn-sec` → núcleo `.btn-outline-soft`).
  Núcleo comum consolidado; cada um mantém seu HOVER próprio de propósito (btn-secundario
  clareia; fim-btn-sec preenche).
Avaliado e NÃO consolidado (de propósito):
- `.resumo-btn` (contorno branco translúcido) — estilo ÚNICO, usado só na tela de resumo,
  e já bem estruturado (compartilha o núcleo de layout com `.resumo-btn-destaque`). Criar uma
  canônica global para um uso único seria over-engineering. Fica como está.

Dívida de cor de perigo — PARCIALMENTE PAGA:
- Token **`--perigo`** (#ff6b6b) criado no `:root` do base.css + variante `.btn-rolar.btn-perigo`.
- Já trocados p/ `var(--perigo)` os `color: #ff6b6b` diretos (auth.css e perfil.css).
- **Resta migrar** os usos em `background: #ff6b6b` e `rgba(255,107,107,…)` (ex.: hover do
  `.perfil-logout-btn`, `.btn-excluir-conta:hover`) — trocar quando mexer nesses componentes.

Modais de confirmação — lógica ainda não unificada (dívida planejada):
- Visual/HTML/CSS já consolidados em `.modal-confirm` (base.css) e há `UI.modalConfirm` p/ os novos.
- Os 5 antigos (logout, sair da sala, pular tudo solo/online, pular sorteio) mantêm seus
  listeners próprios (têm lógica especial: votação no online, estado "Saindo…" no logout).
  Migrá-los para `UI.modalConfirm` um a um é o próximo passo incremental, quando fizer sentido.

Campo de futebol (mapa de escalação) — 2 implementações parecidas (observação, ainda NÃO dívida):
- `.resumo-campo` (resumo.js/resumo.css) e `.perfil-campo-escalados` (perfil) desenham o mesmo
  gramado (linhas, círculo, áreas) com jogadores posicionados por coords da formação. Hoje são 2;
  se surgir um 3º uso, virar componente (ex.: `UI.renderCampo(coords, jogadores, opts)`). Com 2
  usos ainda contidos, consolidar agora seria prematuro.

## 7. Dívida de botões — ENCERRADA
Consolidados os estilos que tinham redundância REAL (accent em 3 classes, cinza em 2).
Os demais são únicos/bem contidos e não precisam de consolidação. A régua daqui pra frente:
usar `.btn-outline-accent` ou `.btn-outline-soft` em botões novos; só criar variante nova se
o estilo for genuinamente diferente. Não há mais dívida de botões pendente.
