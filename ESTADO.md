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
- **Champions no single-player é "condensada"** (FEITO): em vez do tabelão de 10,
  mostra um resumo da sua campanha + uma janela em torno da linha de corte. A liga
  de 10 continua rodando por baixo (jogos de bastidores instantâneos); só a
  apresentação ficou enxuta. A Copa mantém a tabelinha de 4 (pequena, tudo bem).
- **Champions online = formato FIEL** (a implementar): reproduz a "fase de liga" real
  da Champions 25/26 — tabela única de 36, cada um joga 8 (4 casa / 4 fora) contra 2
  times de cada um dos 4 potes; top 8 vão direto às oitavas, 9º–24º disputam playoff
  de ida/volta, 25º–36º eliminados. Tempero do formato: melhor classificado joga a
  volta em casa nas eliminatórias, e quem elimina um time melhor herda a posição dele
  no chaveamento. Reaproveita draft, mata-mata e o modo espectador. Campanha completa,
  na pegada da Copa/Brasileirão online.
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
- **Champions condensada (single-player)** — `campanha.js` (`renderResumoFaseLiga`) +
  `css/simulacao.css`: ao fim da fase de liga, em vez do tabelão de 10, mostra
  "Xº de 10 · classificado/eliminado" + uma janela em torno da linha de corte (com
  coluna J). Copa segue com a tabela de 4.
- **Polimento de UI/responsivo** — "Voltar" virou um link com seta (`.jogo-voltar-topo`,
  sem caixa) e saiu do header para o corpo, abaixo da linha, nas duas telas (tela-jogo
  e simulação). Na simulação mobile, a ordem ficou: voltar → abas → controles →
  partida → botões → estatísticas, e a tabela de **estatísticas só aparece após a 1ª
  partida** (escondida no reinício, revelada no `iniciarPartida`).
- **"X/Y prontos" (online)** — indicador não-bloqueante no mata-mata: cada humano
  emite `chave:assisti` ao terminar de ver a fase; o servidor conta e devolve
  `chave:prontos {x,y}`; o cliente mostra "X/Y prontos" perto do botão de avançar
  (só com 2+ humanos). O host avança quando quiser. ⚠️ servidor precisa de **deploy no
  Render**.

---

## 6. Backlog (próximos passos)

1. **Champions online (formato FIEL)** — marco grande, em partes:
   - **Parte 1 (FEITO):** núcleo da fase de liga no servidor (`api/socket/index.js`) —
     `montarLigaChampions` (4 potes por força + 8 jogos/time: 2 por pote, 4 casa/4
     fora = 144 jogos), `tabelaLigaVazia`/`registrarLiga`/`ordenarTabelaLiga` (tabela
     única) e `cortesChampions` (1–8 direto / 9–24 playoff / 25–36 fora). Funções
     puras, validadas (17 asserts), **ainda não fiadas** no ciclo (zero risco). ⚠️ deploy.
   - **Parte 2 (FEITO):** decisão = **rodada a rodada** (8 matchdays, igual aos outros
     modos). Escalonador no servidor: `dividirLigaEmRodadas` (backtracking c/ guarda
     de passos divide os 144 jogos em 8 rodadas de 18, cada time 1x/rodada),
     `rodadasCirculo` (fallback garantido) e `montarFaseLigaChampions(times)` →
     `{ potes, rodadas:[ [{home,away}×18] ×8 ] }`. Validado: 200/200 trials, 0
     fallbacks, ~15ms (roda 1× no início da fase). Ainda **não fiado** no ciclo. ⚠️ deploy.
   - **Parte 3:** tornar a Champions selecionável; ciclo lobby → draft → emitir as 8
     rodadas (simular cada uma via `simularPartida`/`picksDe`, atualizar a tabela) →
     aplicar os cortes. Reusa o espectador (cada cliente assiste seu jogo da rodada).
   - **Parte 4:** playoff 9–24 (ida/volta) + chave a partir das oitavas (reusa
     mata-mata, espectador e "X/Y prontos"). Temperos: mando na volta pro melhor
     classificado; quem elimina um time melhor herda a posição.
   - **Parte 5:** UI do cliente — tabela de 36 com cortes destacados, playoff e chave.
2. **Pendência do usuário:** confirmar, após deploy, o respiro / tamanho de
   "A CAMPANHA" no `simulacao.css`.
3. **Refactor opcional:** promover o **🏠 / seletor de times** da barra de espectador
   para o UIKit, se forem reaproveitados em outra tela.

---

## 7. Decisão de UX em aberto (sem objeção até agora)

O modal de pênaltis **roda sozinho** com cadência + botão "Pular Pênaltis" (não é
"Próxima Cobrança" manual a cada chute). Dá para trocar para manual se preferir.
