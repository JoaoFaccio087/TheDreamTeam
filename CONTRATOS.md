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
- `competicao`: `"Libertadores" | "Champions" | "Brasileirão"`.
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
- `modo`: `"liga"` (Brasileirão) | `"mata-mata"` (Libertadores/Champions).
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

## 3. Modo Online (FUTURO — Fase 2)

> Formatos de tempo real que viajam por WebSocket. Rascunho para o backend já ter um norte.

### 3.1 Sala
```json
{
  "codigo": "DREAM-7F3A",
  "hostUserId": "u_123",
  "competicao": "Brasileirão",
  "velocidade": "normal",
  "status": "aguardando",
  "jogadores": [
    { "userId": "u_123", "username": "joaofaccio", "ordem": 1, "pronto": false }
  ]
}
```
- `velocidade`: `"lento" | "normal" | "rapida"` (escolhida na criação da sala).
- `status`: `"aguardando" | "draft" | "visualizar" | "simulando" | "encerrada"`.
- Vagas não preenchidas por humanos viram **bots** (igual ao modo solo).

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
> **por usuário** (partidas, histórico, ranking) e, na Fase 2, o estado das **salas**.
