# Contratos de Dados — The Dream Team

> Formatos (JSON) que o **frontend** e o **backend** vão trocar. Hoje a maior parte
> já existe no jogo; este documento serve para o front e o back falarem a **mesma
> língua** quando a API entrar. A "porta única" no frontend é o arquivo `js/api.js`.
>
> Convenção: `?` = campo opcional. Datas em ISO 8601 (`"2025-01-30T18:00:00Z"`).

---

## 1. Dados estáticos do jogo (já existem hoje)

### 1.1 Jogador (dentro de um clube)
```json
{
  "nome": "Giorgian de Arrascaeta",
  "posicoes": ["MEI", "PE"],
  "forca": 87
}
```
- `posicoes`: lista de códigos do projeto — `GOL, ZAG, LD, LE, VOL, MC, MEI, MD, ME, PD, PE, ATA`.
- `forca`: inteiro 0–99.

### 1.2 Clube / edição (entrada de `DADOS`)
```json
{
  "competicao": "Brasileirão",
  "edicao": 2025,
  "clube": "Flamengo",
  "jogadores": [ /* lista de Jogador (1.1) */ ]
}
```
- `competicao`: `"Libertadores" | "Champions" | "Brasileirão" | "Copa do Mundo"`.
- Esses dados são **iguais para todo mundo** → podem continuar no frontend (não precisam ir pro Postgres).

### 1.3 Jogador escalado (slot do time montado)
Formato usado em `escalacao[i]` (cada uma das 11 vagas):
```json
{
  "nome": "Pedro",
  "forca": 84,
  "posicoes": ["ATA"],
  "codigo": "ATA",
  "clube": "Flamengo",
  "edicao": 2025
}
```
- `codigo`: a vaga da formação que ele ocupa (ex.: `"ATA"`).

---

## 2. Dados do usuário (vão para o backend / Postgres)

### 2.1 Usuario
```json
{
  "id": "u_123",
  "username": "joaofaccio",
  "email": "joao@exemplo.com",
  "nomeDoTime": "Faccio FC",
  "criadoEm": "2025-01-30T18:00:00Z"
}
```
- **Nunca** trafega a senha; no banco fica só o `password_hash`.
- `nomeDoTime` substitui o `'Seu time'` padrão do jogo (já existe a variável `nomeDoTime` no front).

### 2.2 Time (escalação salva)
```json
{
  "id": "t_456",
  "userId": "u_123",
  "nome": "Faccio FC",
  "competicao": "Brasileirão",
  "formacao": "4-3-3",
  "estilo": "classico",
  "jogadores": [ /* 11x Jogador escalado (1.3) */ ],
  "forca": 85
}
```
- `estilo`: `"classico" | "draft"`.
- `forca`: média do time (o jogo já calcula em `forcaDoTime()`).

### 2.3 ResultadoPartida (o que salvamos ao fim de uma campanha)
```json
{
  "userId": "u_123",
  "competicao": "Brasileirão",
  "modo": "liga",
  "vitorias": 24,
  "empates": 8,
  "derrotas": 6,
  "gf": 70,
  "ga": 35,
  "posicao": 1,
  "campeao": true,
  "detalhes": {
    "formacao": "4-3-3",
    "estilo": "classico",
    "artilheiro": { "nome": "Pedro", "gols": 18 },
    "assistente": { "nome": "Arrascaeta", "assistencias": 14 }
  },
  "jogadoEm": "2025-01-30T18:40:00Z"
}
```
- `modo`: `"liga"` (Brasileirão) | `"mata-mata"` (Libertadores/Champions/Copa do Mundo).
- `posicao`: colocação final (liga) ou rodada alcançada (mata-mata); `campeao` resume o "ganhou ou não".
- `detalhes` (JSONB no Postgres): campo flexível para o que não precisa de coluna própria.
- O jogo **já produz** quase tudo isso (acumuladores `campanhaVitorias`, `campanhaGF`, `statsJogadores`, etc.).

### 2.4 EntradaRanking (item da lista de ranking)
```json
{
  "posicao": 1,
  "username": "joaofaccio",
  "nomeDoTime": "Faccio FC",
  "titulos": 5,
  "jogos": 42,
  "aproveitamento": 78
}
```
- Pode ser calculado por consulta agregada sobre `ResultadoPartida` (não precisa de tabela própria no começo).

---

## 3. Modo Online (IMPLEMENTADO)

> Formatos de tempo real que viajam por WebSocket (Socket.IO). A sala suporta dois
> **formatos**: `liga` (Brasileirão, pontos corridos) e `mata` (Copa do Mundo /
> Libertadores: sorteio de grupos → draft por grupo → fase de grupos → mata-mata).

### 3.1 Sala
```json
{
  "codigo": "7F3A",
  "hostUserId": "u_123",
  "competicao": "Copa do Mundo",
  "formato": "mata",
  "velocidade": "normal",
  "status": "grupos",
  "jogadores": [
    { "userId": "u_123", "username": "joaofaccio", "ordem": 1, "pronto": false }
  ],
  "grupos": { "A": ["u_123", "bot_1", "..."], "B": ["..."] },
  "classificados": ["u_123", "..."]
}
```
- `formato`: `"liga"` (Brasileirão) | `"mata"` (Copa do Mundo / Libertadores).
- `velocidade`: `"lento" | "normal" | "rapida"` (escolhida na criação da sala).
- `status`: `"aguardando" | "draft" | "sorteio" | "gdraft" | "visualizar" | "grupos" | "mata" | "simulando" | "encerrada"`.
- `grupos` e `classificados`: só no formato `mata`. Grupos A–L (Copa: 12 grupos de 4; Liberta: 8 grupos de 4).
- Vagas não preenchidas por humanos viram **bots** (com nomes próprios únicos na sala).

### 3.2 EscolhaDraft (uma jogada do draft em turnos)
```json
{
  "codigo": "DREAM-7F3A",
  "userId": "u_123",
  "slot": "ATA",
  "jogador": { "nome": "Pedro", "forca": 84, "posicoes": ["ATA"] },
  "automatica": false
}
```
- `automatica`: `true` quando o servidor escolheu por estouro dos 30s.

### 3.3 ResultadoRodada (uma rodada simulada no servidor)
```json
{
  "codigo": "DREAM-7F3A",
  "rodada": 1,
  "jogos": [
    {
      "mandante": "Faccio FC",
      "visitante": "Time B",
      "golsMandante": 2,
      "golsVisitante": 1,
      "eventos": [
        { "minuto": 23, "lado": "mandante", "autor": "Pedro", "assistente": "Arrascaeta" }
      ]
    }
  ]
}
```
- **Importante:** o servidor calcula e envia a **linha do tempo pronta** (placar + `eventos`);
  o navegador só **reproduz** na velocidade da sala. Assim todos veem o mesmo resultado.

### 3.4 Catálogo de eventos Socket.IO (nomes reais em uso)

**Sala / handshake (ambos os formatos)**

| Direção | Evento | Para quê |
|---|---|---|
| C→S | `room:join` `room:leave` `room:start` | entrar/sair da sala; host inicia |
| C→S | `lobby:config` | nome do time / formação no lobby |
| C→S | `ready:vote` | marcar pronto / votar avançar |
| S→C | `session:me` | id do próprio usuário na sessão |
| S→C | `room:state` `room:playerOrder` | estado da sala e ordem dos jogadores |
| S→C | `ready:count` | quantos já estão prontos |
| S→C | `erro` | mensagem de erro para exibir |

**Brasileirão (formato `liga`)**

| Direção | Evento | Para quê |
|---|---|---|
| C→S | `draft:pick` | escolher/remanejar jogador (draft snake) |
| C→S | `round:simulate` `round:skipAll` | simular rodada / pular tudo |
| S→C | `draft:yourTurn` `draft:turno` | é a sua vez / de quem é a vez |
| S→C | `draft:pick` `draft:moved` `draft:complete` | pick feito / time remanejado / draft encerrado |
| S→C | `round:start` `round:results` `round:skipVotes` | início/resultado da rodada e votos de pular |
| S→C | `game:end` | fim do campeonato (ver abaixo) |

**Copa do Mundo / Libertadores (formato `mata`)**

| Direção | Evento | Para quê |
|---|---|---|
| S→C | `grupos:sorteio` | animação do sorteio dos grupos |
| C→S | `grupos:pular` `grupos:avancar` | pular a animação / host avança para o draft |
| S→C | `gdraft:start` `gdraft:turnoGrupo` | início do draft por grupo / qual grupo escolhe |
| S→C | `gdraft:yourPick` | suas cartas da vez (ver payload) |
| C→S | `gdraft:pick` | escolher/remanejar jogador no draft por grupo |
| S→C | `gdraft:picked` `gdraft:complete` | pick registrado / draft de grupos encerrado |
| C→S | `round:simulate` `round:skipAll` | simular/pular a fase de grupos (reaproveitado da liga) |
| S→C | `round:start` `round:results` | rodada da fase de grupos (com classificação por grupo) |
| S→C | `grupos:fim` | fim da fase de grupos `{ classificacao, classificados }` |
| S→C | `chave:state` | chave montada/atualizada (ver payload) |
| C→S | `chave:advance` | host avança a fase do mata-mata |
| S→C | `chave:results` | resultado de uma fase `{ rounds, rodadaAtual, fase, resultados, artilharia, assistencias }` |
| S→C | `game:end` | fim da Copa, com campeão (ver abaixo) |

#### `gdraft:yourPick` (cartas da sua vez no draft por grupo)
```json
{
  "grupo": "C",
  "porPosicao": {
    "ATA": [ { "nome": "Ronaldo", "forca": 95, "posicoes": ["ATA"] } ],
    "MEI": [ { "nome": "Zidane",  "forca": 94, "posicoes": ["MEI"] } ]
  }
}
```
- `porPosicao`: jogadores **já validados pelo servidor** por código de vaga (≥6 por posição). O cliente exibe direto, sem refiltrar. O pool **não esgota** (pode repetir entre usuários, nunca para você mesmo).

#### `chave:state` (a chave do mata-mata)
```json
{
  "fases": ["16-AVOS", "OITAVAS", "QUARTAS", "SEMI", "FINAL"],
  "rodadaAtual": 0,
  "rounds": [
    [ { "a": {"userId":"u_123","nome":"Faccio FC"},
        "b": {"userId":"bot_4","nome":"Bot United"},
        "winner": null, "gA": null, "gB": null, "pen": null } ]
  ]
}
```
- `rounds[i]` = confrontos da fase `i`. Quando resolvido: `winner`, `gA`/`gB` e, em empate, `pen: [penA, penB]`.
- Copa: 32 classificados → 5 fases. Libertadores: 16 → 4 fases.

#### `game:end` (fim do campeonato)
```json
{
  "campeao": { "userId": "u_123", "nome": "Faccio FC" },
  "mata": true,
  "ranking": [ /* times ordenados (campeão em 1º) */ ],
  "artilharia": [ { "nome": "Ronaldo", "gols": 7, "time": "Faccio FC" } ],
  "assistencias": [ { "nome": "Zidane", "assists": 5, "time": "Faccio FC" } ]
}
```
- `mata: true` na Copa/Liberta (o cliente mostra a chave completa); ausente/`false` na liga.
- A **premiação** (Campeão, Pato, Goleador, Peneira) é derivada de `ranking` + `artilharia` no cliente.

---

## 4. Onde isso encaixa no frontend (`js/api.js`)

Hoje a `api.js` devolve dados locais. Quando o backend existir, troca-se **só o corpo** destas funções:

| Função (front)                | Hoje                | Futuro (backend)        |
|-------------------------------|---------------------|-------------------------|
| `API.getTodosClubes()`        | `DADOS`             | (continua local)        |
| `API.getClubesPorCompeticao()`| filtra `DADOS`      | (continua local)        |
| `API.salvarPartida(r)`        | stub (Promise)      | `POST /matches`         |
| `API.getHistorico()`          | `[]`                | `GET /matches`          |
| `API.getRanking()`            | `[]`                | `GET /ranking`          |

> Os clubes (dados estáticos) podem ficar no front; o que vai pro backend é o que é
> **por usuário** (partidas, histórico, ranking) e o estado das **salas** em tempo real
> (já implementado via Socket.IO — ver seção 3).
