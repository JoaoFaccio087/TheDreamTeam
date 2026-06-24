# ESTADO — The Dream Team

> Documento de retomada. **Num chat novo, mande este arquivo + o `CONTRATOS.md`**
> para o Claude pegar o contexto (filosofia, como trabalhamos, regras decididas e
> o que falta fazer). Mantido sempre atualizado ao fim de cada tarefa.

---

## 1. O que é

Jogo de navegador (PT-BR), estático no frontend + backend Node/Socket.IO no
online. O jogador escolhe a competição, **sorteia** um clube/edição, **escala** o
XI dos craques que estiveram lá e **simula** a campanha. Dev: João Faccio.

**Filosofia (decidida e fixa):**

- **Um Jogador = rápido e leve** (inspiração no site "7a0"): condensado, sem
  tabelões. É o modo de "montar e jogar rápido".
- **Online = a experiência completa**: fase de grupos, draft, mata-mata, tabelas,
  premiação. É onde mora a profundidade.
- **Champions no single-player deve ser "condensada"**: não mostrar o grupão numa
  tabela gigante e simular só parte dos jogos da fase de grupos. (Feature futura,
  ver backlog.)
- Decisão **arquivada**: não generalizar abas para o single-player; a ideia de aba
  "Classificação" foi descartada (o respiro no `simulacao.css` já resolveu o
  espaçamento que motivou aquilo).

---

## 2. Como trabalhamos (convenções)

- **Idioma:** responder em PT-BR. Tom direto e caloroso, sem agradecer demais, sem
  emoji em botão.
- **Entrega arquivo-a-arquivo:** cada arquivo alterado vai **separado**, com o
  **caminho exato do repo**. Nada de zip do projeto inteiro.
- **Repo correto:** `/home/claude/projeto/TheDreamTeam`. Ignorar `/mnt/project`
  (cópia velha).
- **Validação:** JS com `node -c`; CSS conferindo contagem de chaves `{` vs `}`.
- **Backend não roda no container** (sem rede): código de servidor é validado por
  sintaxe/lógica e marcado **"⚠️ deploy no Render"**. A fonte do servidor é
  `/home/claude/work/index.js`; depois de editar, **copiar** para
  `api/socket/index.js` e entregar esse caminho.
- **Comentários:** mínimos, precisos, profissionais. Manter divisores de seção e o
  comentário de uma linha por função. Nada de comentário "changelog".
- **Checklist a cada tarefa:** verificar se precisa atualizar **README**,
  **CONTRATOS**, **outros `.md`** e o **UIKit** (incluir/atualizar/reaproveitar).
- **Manter este `ESTADO.md` atualizado** ao fim de cada tarefa.

---

## 3. Arquitetura essencial

> Detalhe técnico (contratos de eventos, payloads, UIKit) está no `CONTRATOS.md`.

- **Competições:** registro `COMPETICOES` em `js/regras.js` mapeia
  `modo → { dados, label, tema }`: libertadores, champions, brasileirao, copa.
- **Jogador (DADOS):** `{ nome, posicoes: ["GOL"], forca }`.
- **Entrada de escalação:** `{ nome, forca, posicoes, codigo (vaga, ex. 'ATA'), clube }`.
- **UIKit (`js/ui.js` + `css/campo.css`):** `UI.esc`, `UI.shuffle`,
  `UI.posicionarCampo(marcadores, formacao)`, `UI.renderHeader/setHeader`.
  Está **completo** — sem consolidação pendente.
- **Ordem de carga (index.html, defer):** `ui.js` primeiro; `simulacao.js` antes de
  `penaltis.js`. CSS: `campo.css`, depois `penaltis.css`, depois `responsivo.css`.

---

## 4. Regras de jogo decididas

### Pênaltis (mata-mata) — ver `CONTRATOS.md` §6 para fórmulas

- Só ocorre em **mata-mata empatado** no tempo normal. Liga (Brasileirão) e fase de
  grupos nunca vão a pênaltis.
- **Ordem das cobranças:** os 11 mais fortes batem em **ordem decrescente de força**
  (o mais forte primeiro). Vale para usuário, bots e sala.
- **Cada cobrança** resolve em `gol | defesa | fora` por **atacante x goleiro**:
  `pGol = limita(0,74 + (Fat − Fgol)×0,006 + bônusPosição, 0,45 .. 0,90)`.
- **Bônus de posição:** ATA/PE/PD +0,06 · MEI/SA +0,04 · LD/LE −0,02 · ZAG −0,05 ·
  GOL −0,08 · resto 0.
- **Zebra:** os limites do `pGol` (teto 0,90 / piso 0,45) garantem o imprevisível —
  até o craque erra ~10%, e o goleiro fraco às vezes pega.
- Mesma lógica nos dois modos: single em `js/simulacao.js` (animação em
  `js/penaltis.js`), online em `api/socket/index.js`.

### Modo espectador (online) — decidido, a implementar

Cada jogador **segue um time**. Começa seguindo o próprio; quando o time seguido é
eliminado, ele re-aponta para **quem venceu** (cascata recursiva), e assim segue
sempre um time vivo até a final. A partida que o cliente anima é a do **time
seguido** (hoje o critério é `meuUserId`; passa a ser `uidSeguido`).

- **Derivável no cliente** a partir dos resultados que o servidor já envia. O único
  acréscimo do servidor é o `penSeq` (já feito; falta deploy).
- **Perspectiva dos pênaltis:** o modal roda do ponto de vista do time seguido —
  mapear `lado a/b` do `penSeq` → `meu/adv` conforme o seguido seja mandante/visitante,
  passando o nome dele como `meuNome`. Assim você só vê a disputa de um time se
  estiver seguindo-o.
- **Ao ser eliminado** (grupos OU mata-mata): abre um **painel "assistir"** com os
  times vivos, com um **sugerido em destaque** (mata-mata: quem te venceu; grupos:
  amigo / melhor do grupo). Escolha livre + botão **🏠 voltar ao início** (sai da
  sala). Quem não escolhe, fica no sugerido (fluxo automático). O painel/troca e o 🏠
  ficam sempre acessíveis.
- **Sincronia:** cada cliente anima a sua localmente (durações diferentes por causa
  dos pênaltis); o **host avança** quando termina; quem estiver no pênalti ao avançar,
  finaliza/pula pro resultado. Estado da chave é autoritativo no servidor → sem
  dessincronia. Aviso **não-bloqueante** "X/Y prontos" só como referência pro host.
- **Bots:** humano segue um time vivo (humano ou bot) até a final; bot nunca é
  espectador. Na final, todos convergem para a mesma partida.

---

## 5. Estado atual (feito)

- **UIKit finalizado** — `UI.posicionarCampo` posiciona o campo nos dois modos.
- **Pênaltis single-player** — modal animado (`penaltis.js` + `penaltis.css`),
  modelo completo (ordem por força, atacante×goleiro, bônus de posição, zebra).
- **Pênaltis online (servidor)** — simulação real + sequência (`penSeq`) enviada no
  resultado da rodada. Card do online mostra o **placar real** de pênaltis.
  ⚠️ precisa de **deploy no Render** para valer.
- **Modo espectador + pênaltis online (cliente)** — `online.js`: "time seguido"
  (começa no próprio, re-aponta para quem venceu), animação da partida do seguido,
  barra "Assistindo: <time>" com **Trocar** + **🏠 voltar ao início**, e a disputa de
  pênaltis animada na sala (consome `penSeq` na perspectiva do seguido). CSS em
  `css/online.css`. ⚠️ os pênaltis só aparecem com o **servidor no Render** (o resto
  funciona com os resultados que já chegam).

---

## 6. Backlog (próximos passos)

1. **Aviso "X/Y prontos" (não-bloqueante) no host:** pequeno indicador de quantos já
   terminaram de assistir a fase, só como referência (o host avança quando quiser).
   Precisa de um evento de socket (cliente avisa "assisti" → servidor conta). Opcional.
2. **Champions condensada (single-player):** não mostrar o grupão; simular só parte
   dos jogos da fase de grupos. (Próxima feature grande.)
3. **Pendência do usuário:** confirmar, após deploy, o respiro / tamanho de
   "A CAMPANHA" no `simulacao.css`.
4. **Refactor opcional:** promover o **🏠 / seletor de times** da barra de espectador
   para o UIKit, se forem reaproveitados em outra tela.

---

## 7. Decisão de UX em aberto (sem objeção até agora)

O modal de pênaltis **roda sozinho** com cadência + botão "Pular Pênaltis" (não é
"Próxima Cobrança" manual a cada chute). Dá para trocar para manual se preferir.
