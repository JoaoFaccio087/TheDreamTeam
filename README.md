<div align="center">

# The Dream Team

Monte o time dos sonhos com craques da Libertadores, da Champions League e do Brasileirão e leve-o ao título — sozinho ou contra outros jogadores online.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socketdotio&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat)

</div>

---

## Sobre o projeto

The Dream Team é um jogo de futebol de navegador. Você sorteia clubes lendários, monta uma escalação misturando craques de diferentes times e épocas e conduz uma campanha completa até o título — mata-mata com fase de grupos e pênaltis nas competições continentais, ou pontos corridos (20 times, 38 rodadas) no Brasileirão.

O jogo tem dois grandes modos:

- **Um jogador (offline):** roda inteiramente no navegador, sem instalação e sem servidor — HTML, CSS e JavaScript puro, sem frameworks nem etapa de build.
- **Online (multiplayer):** salas em tempo real onde vários jogadores fazem um **draft** disputado e jogam um **campeonato de pontos corridos** juntos. Esse modo usa um backend leve (Node + Socket.IO + PostgreSQL).

A base de dados reúne elencos reais de cada temporada da Copa Libertadores (1960 a 2025), da UEFA Champions League (1956 a 2025) e do Campeonato Brasileiro (1959 a 2025). São 984 elencos e mais de 14,5 mil jogadores, com a força de cada atleta calibrada individualmente. Os elencos históricos mais antigos refletem o plantel registrado da época e podem ter menos de 16 nomes.

## Demonstração

As capturas de tela ficam em `assets/imagens/screenshots/`.

<div align="center">

| Tela inicial | Escalação |
|:---:|:---:|
| ![Tela inicial](assets/imagens/screenshots/home.png) | ![Escalação](assets/imagens/screenshots/escalacao.png) |

| Simulação | Resumo da campanha |
|:---:|:---:|
| ![Simulação](assets/imagens/screenshots/simulacao.png) | ![Resumo](assets/imagens/screenshots/resumo.png) |

</div>

## Funcionalidades

### Modo um jogador (offline)

- **Sorteio de clubes** lendários da Libertadores, da Champions e do Brasileirão, por edição.
- **Outro sorteio**, que re-sorteia qualquer clube ou ano da competição, com orçamento de skips por partida.
- **Dois estilos de jogo**: Clássico (sorteio de clubes) e Draft, em que você monta o XI escolhendo entre cartas aleatórias por posição, com raridade por força e re-sorteios limitados — sem jogadores repetidos.
- **Escalação livre**: alocar, mover e trocar jogadores no campo, com a lista indicando quem pode ocupar cada posição.
- **Oito formações**: 4-3-3, 4-4-2, 4-2-3-1, 3-5-2, 4-3-2-1, 4-5-1, 3-4-3 e 4-1-2-1-2.
- **Campanha completa** na Libertadores e na Champions, com fase de grupos e classificação seguidas de mata-mata até a final.
- **Modo Brasileirão (liga)**: pontos corridos com 20 times e 38 rodadas, **Tabela** completa (P, J, V, E, D, GF, GS e SG) atualizada a cada rodada e botão **Pular tudo** para simular o restante da temporada de uma vez.
- **Disputa de pênaltis** quando o mata-mata termina empatado.
- **Simulação jogo a jogo ou automática**, em três velocidades.
- **Estatísticas por jogador** (gols e assistências) atualizadas ao vivo.
- **Resumo da campanha** ao final, com opção de baixar como imagem e compartilhar.

### Modo online (multiplayer)

- **Contas e convidados**: jogue com login (e-mail/senha) ou entre como **convidado**, sem cadastro.
- **Salas em tempo real**: crie uma sala (recebe um código) ou entre em uma existente; o **host** comanda o início e o avanço das partidas.
- **Liga do Brasileirão com 20 times**: as vagas que sobram são preenchidas por **bots** com nomes de clubes, montando seus elencos sozinhos.
- **Draft por posição (snake)**: cada jogador recebe **6 cartas aleatórias** por vez, elegíveis para suas vagas abertas — considerando **todas as posições** que cada atleta pode jogar (um ATA que também atua de MEI pode aparecer para uma vaga de MEI). As cartas não se repetem para o mesmo jogador, e ninguém pega o mesmo nome duas vezes.
- **Posicionamento e remanejamento**: aloque a carta numa vaga válida e reorganize o time movendo ou trocando jogadores no campo.
- **Campeonato de 38 rodadas**: todos contra todos, ida e volta, com **confrontos diretos** entre os times da sala.
- **Simulação animada da sua partida**: placar e relógio correndo ao vivo, com os gols (e quem marcou/assistiu) surgindo no minuto certo — clique para pular.
- **Tela em abas**: *Partidas* (seu jogo em destaque + os demais resultados + próximos confrontos) e *Classificação* (tabela completa do Brasileirão + artilharia e assistências, com o time de cada jogador).
- **Pular tudo (votação)**: qualquer jogador pode propor pular o restante da temporada; o pulo só acontece quando **todos os humanos** confirmam, com um contador de votos.
- **Premiação da temporada**: ao fim das 38 rodadas, abre um resumo com **O Campeão**, **O Pato** (último colocado), **O Goleador** (mais gols feitos) e **O Peneira** (mais gols sofridos), seguido do **resumo da sua campanha** (escalação, estatísticas e imagem para baixar).

### Geral

- **Três temas** que acompanham a competição escolhida.
- **Layout responsivo** para celular e tablet.

## Como jogar

### Offline

1. Escolha a competição (Libertadores, Champions ou Brasileirão) e uma formação de amostra na tela inicial.
2. Clique em **Jogar agora**.
3. Escolha o **estilo de jogo**: Clássico ou Draft. Após rolar ou começar, o estilo e a formação ficam travados.
4. No **Clássico**: sorteie um clube (use **Outro sorteio** para trocar) e monte seu XI selecionando um jogador da lista e uma vaga compatível no campo. É possível misturar clubes.
5. No **Draft**: escolha a formação e clique em **Começar**. Clique em cada vaga do campo para abrir cartas aleatórias e selecione o jogador desejado; você tem re-sorteios limitados por draft.
6. Com o time completo, clique em **Simular**.
7. Na Libertadores e na Champions, avance pela fase de grupos e pelo mata-mata e vença a final.
8. No **Brasileirão**, dispute as 38 rodadas acompanhando a tabela; use **Pular tudo** para ir direto ao resultado final. Ser **1º colocado** é o título.
9. Ao final, abra o resumo da campanha.

### Online

1. Na tela inicial, entre no **modo online** (faça login ou entre como convidado).
2. **Crie uma sala** (compartilhe o código) ou **entre** com o código de uma sala existente.
3. Quando todos estiverem prontos, o **host** inicia o **draft**. Na sua vez, escolha uma das 6 cartas e posicione-a numa vaga válida; remaneje o time como quiser.
4. As vagas que faltarem são completadas por bots, e o campeonato de 38 rodadas começa.
5. A cada rodada, assista à **animação da sua partida** e acompanhe a tabela na aba **Classificação**. O **host** avança para a próxima rodada.
6. Ao fim das 38 rodadas, a **premiação da temporada** abre sobre a classificação (campeão, pato, goleador e peneira). Fechando-a, você pode **ver o resumo da sua campanha** ou **voltar ao início**.

## Arquitetura e deploy

O projeto é dividido em duas partes que são publicadas separadamente:

| Parte | O que é | Onde roda |
|---|---|---|
| **Frontend** (`index.html`, `css/`, `js/`) | O jogo em si (offline + cliente do modo online) | **GitHub Pages** |
| **Backend** (`api/`) | API REST + servidor Socket.IO (salas, draft, simulação online, contas, ranking) | **Render** (Docker) |
| **Banco de dados** | PostgreSQL (usuários, salas, partidas, ranking) | **Supabase** |

O frontend é estático: qualquer push na branch publicada atualiza o GitHub Pages quase imediatamente. O backend é um container Docker (`api/Dockerfile`) que o Render reconstrói a cada push (veja a observação sobre deploy mais abaixo). O cliente descobre a URL do backend em `js/api.js`.

## Estrutura de pastas

```text
TheDreamTeam/
├── index.html
│
├── assets/imagens/            # favicon e screenshots
│
├── css/
│   ├── base.css   home.css   escalacao.css   draft.css
│   ├── simulacao.css   resumo.css   auth.css   online.css
│   └── responsivo.css
│
├── js/
│   ├── dados/                 # libertadores.js, champions.js, brasileirao.js, dados.js
│   ├── estado.js   formacoes.js   regras.js   interface.js
│   ├── sorteio.js   escalacao.js   draft.js   simulacao.js
│   ├── campanha.js   brasileirao.js   resumo.js   home.js
│   ├── api.js   auth.js   online.js          # contas + modo online
│   └── main.js
│
└── api/                       # backend (Node + Express + Socket.IO)
    ├── server.js              # bootstrap HTTP + Socket.IO
    ├── db.js   migrate.js   seed.js
    ├── middleware/auth.js     # JWT
    ├── routes/                # auth, users, rooms, matches, ranking
    ├── socket/                # index.js (draft/liga), salaState.js, simulacao.js
    ├── dados/loader.js        # carrega os elencos para o servidor
    ├── Dockerfile   package.json
```

Os arquivos do **frontend** compartilham um escopo global e são carregados em ordem (com `defer`) no final do `index.html` — dados e configuração primeiro, `main.js` por último.

## Rodando localmente

O modo um jogador não precisa de nada: basta abrir o `index.html` no navegador (ou servir a pasta com qualquer servidor estático).

Para subir o backend do modo online localmente, há um `docker-compose.yml` (API + PostgreSQL). Copie o `.env.example` para `.env`, ajuste as variáveis e rode:

```bash
docker compose up --build
```

A API expõe rotas em `/auth`, `/me`, `/rooms`, `/matches`, `/ranking`, `/health` e o canal `/socket.io`. Aponte o `BACKEND_URL` em `js/api.js` para o endereço local se quiser testar o online contra o seu próprio servidor.

## Tecnologias

- **HTML5 / CSS3 / JavaScript (vanilla)** — todo o jogo no cliente, sem frameworks nem build.
- **html2canvas** (via CDN) — exporta o resumo da campanha como imagem.
- **Node.js + Express** — API REST do backend.
- **Socket.IO** — comunicação em tempo real das salas (draft e liga).
- **PostgreSQL** — persistência (usuários, salas, partidas, ranking).
- **JWT** — autenticação (incluindo tokens de convidado).
- **Docker** — empacotamento do backend.
- **GitHub Pages / Render / Supabase** — hospedagem do frontend, do backend e do banco.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.
