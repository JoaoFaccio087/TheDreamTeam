# The Dream Team — Guia do Design System (kit de referência)

Documento interno. **Não sobe pro GitHub** (fica junto com ESTADO.md e afins).
Objetivo: manter o visual consistente e **parar de criar dívida** (variações novas
espalhadas). Ao criar telas ou botões novos, consulte este guia primeiro.

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
`--bg`, `--txt`, `--txt-soft`, `--surface`, `--linha`, `--btn-txt`.

---

## 2. Botões — qual usar quando

| Classe | Aparência | Quando usar |
|--------|-----------|-------------|
| `.btn-rolar` | preenchido accent, texto escuro | **ação primária** (Rolar, Começar, Simular, Confirmar) |
| `.btn-secundario` | contorno cinza (`--txt-soft`) | ação secundária neutra (Voltar) |
| `.btn-outline-accent` | contorno accent, hover preenche | **botão secundário de destaque** — use esta nos casos novos |
| `.btn-outline-soft` | contorno cinza (`--txt-soft`) | núcleo dos botões secundários neutros (Voltar, Cancelar) |
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

## 3. `.escondida`
`display: none !important` (base.css). É a forma canônica de esconder/mostrar
elementos via JS (`classList.add/remove('escondida')`). Não crie outra forma.

---

## 4. Mapa de consolidação futura (dívida antiga restante)
Pago até aqui:
- botões "contorno accent" (3 classes → núcleo `.btn-outline-accent`).
- botões "contorno cinza" (`.btn-secundario` + `.fim-btn-sec` → núcleo `.btn-outline-soft`).
  Núcleo comum consolidado; cada um mantém seu HOVER próprio de propósito (btn-secundario
  clareia; fim-btn-sec preenche).
Avaliado e NÃO consolidado (de propósito):
- `.resumo-btn` (contorno branco translúcido) — estilo ÚNICO, usado só na tela de resumo,
  e já bem estruturado (compartilha o núcleo de layout com `.resumo-btn-destaque`). Criar uma
  canônica global para um uso único seria over-engineering. Fica como está.

Dívida conhecida (aberta):
- **Cor de perigo `#ff6b6b`** — vermelho de ação destrutiva/negativa, hardcoded em vários pontos
  (hover do botão de logout do perfil, texto de logout no menu antigo, resultado de derrota, etc.).
  Não há token `--danger`/`--perigo`. Quando for mexer nesses pontos, considerar promover a um
  token no `:root` do base.css e trocar as ocorrências.

## 5. Dívida de botões — ENCERRADA
Consolidados os estilos que tinham redundância REAL (accent em 3 classes, cinza em 2).
Os demais são únicos/bem contidos e não precisam de consolidação. A régua daqui pra frente:
usar `.btn-outline-accent` ou `.btn-outline-soft` em botões novos; só criar variante nova se
o estilo for genuinamente diferente. Não há mais dívida de botões pendente.
