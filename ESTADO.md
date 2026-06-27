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
- **Entrega arquivo-a-arquivo:** cada arquivo alterado vai **separado e completo**, sempre
  com o **caminho exato do repo** onde o João deve colar/substituir (ex.: "substitua
  `js/online.js`"). Nada de zip do projeto inteiro, nada de diff/trecho solto sem o caminho.
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
   - **Parte 3:** Champions selecionável + fiada no ciclo. **Correção importante (reconcílio
     com o repo real):** a competição se chama `'Champions'` (rótulo "Champions League"); o
     `salaState.js` JÁ define `formato` via `FORMATO_POR_COMP` e a Champions estava como
     `'mata'` (placeholder de grupos). Trocamos para um formato próprio **`'champions'`**.
     E `simularUmaRodada` já monta a **classificação ordenada de todos os times** → a
     Champions reusa o motor de rodadas (é "liga de 36, 8 rodadas, com mata-mata no fim").
     - **3a (FEITO):** núcleo + `maxParticipantes`→36 + `montarCalendarioChampions(sala)`
       (elencos → 8 rodadas no shape `[casa,fora]`, consumível pelo `simularUmaRodada`).
     - **3b (FEITO):** `salaState`: `'Champions'→'champions'` (era `'mata'`); removido o seam
       morto no `room:join` (que checava `'Champions League'`); `room:start` enche bots até
       `maxParticipantes` (36) e faz o snake draft normal (36×11); ready→playing usa
       `montarCalendarioChampions` + `totalRodadas=8`; as 8 rodadas reusam `simularUmaRodada`.
       Fim da fase → `finalizarFaseLigaChampions` aplica `cortesChampions` e emite
       `champions:faseLigaFim` `{classificacao, direto[8], playoff[16], eliminados[12]}`
       (status→`fimLiga`), tanto no `round:simulate` quanto no `round:skipAll`. Validado com
       o **motor real** (36 times, 8 jogos, tabela ordenada, cortes 8/16/12, fortes ao topo)
       e `criarSala('Champions')→formato 'champions'`. ⚠️ deploy.
     - **3c (FEITO):** playoff dos 9º–24º (ida e volta). `resolverConfrontoDuasMaos`
       (soma dos 2 jogos, mando da volta pro melhor classificado, empate no agregado →
       pênaltis), `montarPlayoffChampions` (8 confrontos 9×24…16×17) e
       `simularPlayoffChampions`. Handler `champions:advancePlayoff` (host, a partir de
       `fimLiga`): emite `champions:playoff` `{confrontos, vencedores}` e já monta as
       **oitavas** (8 diretos + 8 vencedores) via `montarChaveOnline`, emitindo
       `chave:state` — daí pra frente reaproveita o mata-mata existente (`chave:advance`,
       espectador, "X/Y prontos"). Validado (emparelhamento, agregado, pênaltis, montagem
       dos 16). Documentado no CONTRATOS. ⚠️ deploy.
   - **Parte 4 (FEITO):** semeadura fiel das oitavas. `montarChaveChampions(sala, vencedores)`
     monta a chave com 1–8 diretos + 9–16 = vencedores do playoff **na ordem dos confrontos**
     (cada vencedor HERDA a posição do melhor do seu par), pareando 1×16, 2×15, … 8×9, sem
     reordenar por pontos. Usado no handler `champions:advancePlayoff`. Validado (8 asserts:
     1º × vencedor do 16×17, 8º × vencedor do 9×24, fases 8/4/2/1). ⚠️ deploy.
   - **Parte 5:** UI do cliente. A via liga do cliente já renderiza a fase de liga (a
     `classificacao` de qualquer tamanho vira a tabela; `totalRodadas` vem do servidor).
     - **5a (FEITO):** entrada — pílula **"Champions League"** no multijogador
       (`index.html` #btn-modo-online-champions) + wiring no `main.js`
       (`escolherOnline('Champions', …)`). `criarSala` já envia `__compOnline='Champions'`
       → servidor vira formato `'champions'`. Cria sala e roda a fase de liga pela via liga.
     - **5b (FEITO):** fim da fase + cortes no cliente (`online.js`). Listener
       `champions:faseLigaFim` → `onChampionsFaseLigaFim` (marca fim, fixa a tabela final,
       libera o host). `renderClassifLista` destaca os cortes por posição na Champions
       (1–8 verde / 9–24 âmbar / 25–36 vermelho — `css/online.css`). `atualizarAcoesRodada`:
       no fim da fase o host vê **"Ir ao playoff →"** (reusa `btn-rodada-proxima`, que emite
       `champions:advancePlayoff`); não-host vê "aguardando o host". Rótulo do cabeçalho
       passou a "36 TIMES" na Champions. Tudo guardado por `formatoOnline==='champions'`
       (liga/mata intactos). Valida `node -c` + chaves CSS.
     - **5c (FEITO):** tela do playoff. Listener `champions:playoff` → `onChampionsPlayoff`
       renderiza os 8 confrontos (1ª/2ª mão, agregado, pênaltis, classificado) em cards na
       aba Partidas (`cardPlayoff` + CSS `.po-card`). Reseta `championsFimLiga`.
     - **5d (FEITO):** chave reaproveitada. `onChaveState`/`onChaveResults` já são genéricos
       (espectador + "X/Y prontos") — só faltava liberar o avanço: `onChaveState` agora chama
       `atualizarAcoesMata()` na Champions (host vê "Próxima fase →" → `chave:advance`). E o
       `onGameEnd` trata champions como chave (flag `ehChaveFinal`): render da chave, rótulo
       de competição correto ('Champions') e atualização do `chaveOnline` no auto-finish.
       **Fluxo completo no cliente:** sala → draft → 8 rodadas (tabela 36 + cortes) →
       "Ir ao playoff" → playoff ida/volta → oitavas→final (mata-mata + espectador) → fim.
   - **Validação geral:** servidor com `node -c` + harness do motor real; cliente com
     `node -c` + chaves CSS. **Revisão de consistência (FEITA):** varridos todos os ramos
     por formato (cliente e servidor). Corrigido: no `onGameEnd`, o `revelarFinal` só
     esperava a animação no `'mata'` — agora usa `ehChaveFinal` (Champions também espera a
     final). Conferidos OK: lobby (contagens dinâmicas, sem fixo), abas (tabClassif=
     'Classificação', tabChave revelada só após o playoff), guards de status (liga='playing',
     chave/playoff='mata'/'fimLiga'), "pular tudo" (trata champions), rótulo salvo no
     histórico ('Champions'), e o draft (base tem ~4073 jogadores ≫ 396 necessários).
     Falta o teste AO VIVO (2+ pessoas) após deploy.
   - **Refactor (FEITO):** extraído `montarChaveDeSementes(sala, seeds)` — base comum de
     `montarChaveOnline` (Copa/Liberta) e `montarChaveChampions`, removendo o laço duplicado.
     Regressão validada: a chave de 16/32 sai idêntica ao comportamento anterior.
   - **Teste de regressão (FEITO):** `api/socket/index.js` expõe `module.exports._champions`
     (núcleo da fase de liga + playoff + chave, sem mudar lógica) e há
     `api/socket/champions.test.js` — importa o código REAL (sem duplicar) e valida, em 24
     checks: fixture/rodadas/tabela/cortes, o playoff (pareamento 9×24…16×17, mando ida/volta,
     agregado, pênaltis no empate, 8 vencedores distintos) e a semeadura fiel das oitavas.
     Rodar antes de deploys: `node api/socket/champions.test.js`. Provado passando.
   - **Promoção espectador/pênaltis → UIKit: DESCARTADA** (avaliada). Pênaltis já são módulo
     (`js/penaltis.js`); o espectador (🏠 + seletor) é uso ÚNICO e acoplado ao estado do
     mata-mata online — promover só adicionaria indireção sem reuso. Não fazer.
2. **Pendência do usuário:** confirmar, após deploy, o respiro / tamanho de
   "A CAMPANHA" no `simulacao.css`.
3. **Refactor opcional:** promover o **🏠 / seletor de times** da barra de espectador
   para o UIKit, se forem reaproveitados em outra tela.

---

## 7. Decisão de UX em aberto (sem objeção até agora)

O modal de pênaltis **roda sozinho** com cadência + botão "Pular Pênaltis" (não é
"Próxima Cobrança" manual a cada chute). Dá para trocar para manual se preferir.

---

## 8. Ideias futuras — novos modos (anotações, sem prazo)

Ideias já conversadas para expandir o jogo com novos modos. Transversal a todas:
**exigem ampliar bastante a base de dados** — provavelmente o maior custo de cada uma.
Vale, ao começar qualquer uma, procurar **sites de referência** (já existem exemplos
prontos, ex.: um do tipo para a NBA) para inspirar formato e dados.

### 8.1 Futebol — ligas por rodadas (mais fáceis)
Seguem a **mesma lógica do Brasileirão** (campeonato por rodadas, mesmo esporte), então
reaproveitam quase tudo do que já temos; o trabalho é majoritariamente de dados:
- **Premier League**
- **Serie A (Itália)**
- **LaLiga (Espanha)**

### 8.2 Outros esportes / formatos (estrutura nova)
Fogem da lógica atual e pedem motor próprio (regras, simulação e UI específicas):
- **NBA** — basquete (já existe site de referência para se inspirar).
- **F1** — corrida: pontuação por GP, grid, temporada de etapas (nada de "confronto").
- **CS2** — e-sport: formato de partidas/mapas, possivelmente chaves/ligas.
- **Kings League** — futebol 7 com regras especiais (cartas, armas, gol de ouro etc.).
- **Vôlei Masculino** e **Vôlei Feminino** — placar por sets, lógica própria.
  - **Decidir:** dois modos separados (M e F) **ou** um "geralzão" misto. Avaliar quando
    for a vez (separar dá fidelidade; unificar reduz duplicação de código e dados).

> Nota: por ordem de esforço, o caminho natural é fazer primeiro os **3 de futebol**
> (8.1, baratos, reusam o Brasileirão) e só depois encarar os de esporte/formato novo.

## Bug do teste ao vivo — criar sala Champions online (RESOLVIDO)
Sintoma: "Invalid enum value. Expected … received 'Champions'" ao criar sala.
Duas causas, ambas corrigidas:
1. `api/routes/rooms.js` — o enum do Zod tinha `'champions'`/`'libertadores'` minúsculos;
   o cliente e o `salaState` usam as chaves capitalizadas. Corrigido para
   `['Brasileirão','Copa do Mundo','Libertadores','Champions']`.
2. `api/dados/` só tinha `copa.js`. O loader também precisa de `champions.js`,
   `brasileirao.js` e `libertadores.js` (cópias idênticas às de `js/dados/`), senão o
   pool vem vazio e a sala é recusada. Copiados os três. Provado: loader resolve as 4
   competições (Brasileirão 5820, Copa 8590, Libertadores 4678, Champions 4073 jogadores).
ATENÇÃO: o Brasileirão online tinha o mesmo problema 2 (pool vazio) — agora resolvido.

## Draft online — 2 picks por turno (EM ANDAMENTO)
Objetivo: dar dinamismo ao online — cada usuário escolhe 2 jogadores por turno (5 turnos
de 2 + 1 turno final de 1 = 11), em vez de 1 por turno. Status "1/2" no usuário ativo.
Single-player NÃO muda (não tem turnos; já é livre).

SERVIDOR (snake — Brasileirão + Champions) — FEITO e testado:
- `PICKS_POR_RODADA=[2,2,2,2,2,1]`, `TURNOS_DRAFT=6`, `picksDoTurno(sala,indice)`.
- `ordemDraft = gerarOrdemSnake(base, 6)`; `sala.picksNoTurno` conta picks no turno.
- `iniciarTurno`: manda `picksTurno`/`picksFeitosTurno`; bot completa os picks do turno;
  timeout preenche o que falta. `avancarTurno` zera `picksNoTurno`.
- Pick do humano: conta no turno; se incompleto → reabre a vez (status 1/2); senão avança.
- Eventos draft:turno / draft:pick / draft:yourTurn ganharam `picksTurno` e `picksFeitosTurno`.
- Teste: `api/socket/draft.test.js` (dirige draft de bots; 11 picks/usuário p/ N=4,20,36).

PENDENTE:
- CLIENTE (snake) — FEITO: o re-emit do servidor mantém a vez ativa; o som de "sua vez"
  toca só no início do turno; a lista de ordem mostra o badge "1/2" no usuário ativo
  (`draft-ordem-turno`); o cabeçalho mostra "Turno X / 6 · pick Y/2". Fluxo: clica vaga →
  escolhe carta → vaga preenche, vez continua → clica outra vaga → escolhe → passa a vez.
  (Pode reposicionar jogadores entre os picks via draft:move, como antes.)
- DRAFT DE GRUPOS (Copa/Liberta online) — **FEITO e testado**: mesmo "2 por rodada" do snake,
  mas adaptado à estrutura por grupo (todos do grupo escolhem em paralelo).
  - SERVIDOR (`api/socket/index.js`): `picksDoTurnoGrupo(t)` (reusa `[2,2,2,2,2,1]`, indexado
    pelo turno 0..5); `iniciarDraftGrupos` zera `pickRodada` como índice de **turno**;
    `iniciarTurnoGrupo` conta picks por uid (`sala.picksTurnoPorUid`) e só fecha o jogador
    quando atinge o alvo do turno (ou 11 no total) — bots/timeout completam o turno de uma vez;
    `gdraft:pick` faz **1 de cada vez**, reabrindo a vez via `gdraft:yourPick` até completar;
    `avancarGrupoDraft` termina o draft em `pickRodada >= TURNOS_DRAFT` (6). `emitGdraftPicked`
    agora carrega `picks` (snapshot) + `picksTurno`/`picksFeitosTurno`.
  - CLIENTE (`online.js`): novos estados `gPicksTurno`/`gPicksFeitosTurno`/`gTotalTurnos`;
    `onGdraftTurnoGrupo`/`onGdraftYourPick`/`onGdraftPicked` usam os campos do servidor;
    subtítulo "Turno X / 6 · pick Y/2"; badge "1/2" no membro ativo (`.gdraft-membro-badge`
    em `css/online.css`). O "fechou o turno" é derivado pelo total acumulado `[2,4,6,8,10,11]`
    (`picksAlvoAteTurno`/`fechouTurno`) — robusto a eventos perdidos.
  - TESTE: `api/socket/gdraft.test.js` dirige o draft de grupos só com bots e valida 11
    picks/jogador para Copa (48) e Liberta (32), status→ready e sem repetição no time
    (13 checks). Rodar antes de deploys: `node api/socket/gdraft.test.js`. Snake intacto
    (regressão `draft.test.js` segue verde).
- ⚠️ DEPLOY: servidor + cliente JUNTOS (a mudança do turno é casada; subir só um trava o draft).
  Arquivos desta tarefa: `api/socket/index.js`, `api/socket/gdraft.test.js`,
  `js/online.js`, `css/online.css` (+ docs `CONTRATOS.md`/`ESTADO.md`).

## Libertadores Online + padronização dos modos (FEITO)
Dois ajustes de frontend (o backend já suportava tudo):
- **Libertadores Online** — só faltava o botão. O servidor já mapeia `'Libertadores'→'mata'`
  (`salaState.FORMATO_POR_COMP`), o enum do Zod em `api/routes/rooms.js` já aceita, o loader
  já carrega `libertadores.js` (pool 4678 ≫ 352 necessários p/ 32×11) e o cliente já trata
  grupos+mata genericamente (sorteio/rótulo/nº de grupos vêm do servidor). Reaproveita 100%
  o caminho da Copa (sorteio → gdraft → grupos → chave), com 8 grupos de 4 em vez de 12.
  Adicionado: botão `#btn-modo-online-libertadores` no `index.html` + ref/listener no
  `main.js` (`escolherOnline('Libertadores', …)`). Validado: `criarSala('Libertadores')` →
  formato `mata`. **Sem mudança de servidor.**
- **Ordem canônica dos modos** (igual nas duas abas, decidida com o João):
  **Libertadores · Champions · Brasileirão · Copa**, com o **1º da lista pré-selecionado**.
  - Solo (`#modo-aba-solo`) já estava nessa ordem e abre com Libertadores (`modoSelecionado`
    default já era `'libertadores'`). Sem mudança.
  - Multi (`#modo-aba-multi`) reordenado para a mesma sequência; a aba agora abre com
    `escolherOnline('Libertadores', …)` (era Brasileirão); `__compOnline` default → 'Libertadores'.
  - Arquivos: `index.html` (HTML das pílulas) e `js/main.js` (refs, listeners, reset e default).
    Sem deploy de servidor — só GitHub Pages.
