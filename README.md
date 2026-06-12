<div align="center">

# The Dream Team

Monte o time dos sonhos com craques da Libertadores e da Champions League e leve-o ao título.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat)

</div>

---

## Sobre o projeto

The Dream Team é um jogo de navegador no qual você sorteia clubes lendários, monta uma escalação misturando craques de diferentes times e épocas, e conduz uma campanha completa: fase de grupos, mata-mata, pênaltis e, com estratégia, o título.

O jogo roda inteiramente no navegador, sem instalação e sem servidor — feito em HTML, CSS e JavaScript puro, sem frameworks nem dependências de build.

A base de dados reúne os semifinalistas reais de cada temporada da Copa Libertadores (1960 a 2025) e da UEFA Champions League (1956 a 2025). São 582 elencos e 8.751 jogadores, com a força de cada atleta calibrada individualmente. Os elencos históricos mais antigos refletem o plantel registrado da época e podem ter menos de 16 nomes.

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

- **Sorteio de clubes** lendários da Libertadores e da Champions, por edição.
- **Outro sorteio**, que re-sorteia qualquer clube ou ano da competição, com orçamento de skips por partida.
- **Dois estilos de jogo**: Clássico (sorteio de clubes) e Draft, em que você monta o XI escolhendo entre cartas aleatórias por posição, com raridade por força e re-sorteios limitados.
- **Escalação livre**: alocar, mover e trocar jogadores no campo, com a lista indicando quem pode ocupar cada posição.
- **Oito formações**: 4-3-3, 4-4-2, 4-2-3-1, 3-5-2, 4-3-2-1, 4-5-1, 3-4-3 e 4-1-2-1-2.
- **Campanha completa**, com fase de grupos e classificação seguidas de mata-mata até a final.
- **Disputa de pênaltis** quando o mata-mata termina empatado.
- **Simulação jogo a jogo ou automática**, em três velocidades.
- **Estatísticas por jogador** (gols e assistências) atualizadas ao vivo.
- **Resumo da campanha** ao final, com opção de baixar como imagem e compartilhar.
- **Dois temas** que acompanham a competição escolhida.
- **Layout responsivo** para celular e tablet.

## Como jogar

1. Escolha a competição (Libertadores ou Champions) e uma formação de amostra na tela inicial.
2. Clique em **Jogar agora**.
3. Escolha o **estilo de jogo**: Clássico ou Draft.
4. No **Clássico**: sorteie um clube (use **Outro sorteio** para trocar) e monte seu XI selecionando um jogador da lista e uma vaga compatível no campo. É possível misturar clubes.
5. No **Draft**: escolha a formação e clique em **Começar**. Clique em cada vaga do campo para abrir cinco cartas aleatórias e selecione o jogador desejado; você tem três re-sorteios por draft.
6. Com o time completo, clique em **Simular**.
7. Avance pela fase de grupos e pelo mata-mata. Vença a final para conquistar o título.
8. Ao final, abra o resumo da campanha.

## Estrutura de pastas

```text
TheDreamTeam/
├── index.html
│
├── assets/
│   └── imagens/
│       ├── favicon.svg
│       └── screenshots/
│
├── css/
│   ├── base.css
│   ├── home.css
│   ├── escalacao.css
│   ├── draft.css
│   ├── simulacao.css
│   ├── resumo.css
│   └── responsivo.css
│
└── js/
    ├── dados/
    │   ├── libertadores.js
    │   ├── champions.js
    │   └── dados.js
    │
    ├── estado.js
    ├── formacoes.js
    ├── regras.js
    ├── interface.js
    ├── sorteio.js
    ├── escalacao.js
    ├── draft.js
    ├── home.js
    ├── simulacao.js
    ├── campanha.js
    ├── resumo.js
    └── main.js
```

Os arquivos compartilham um escopo global e são carregados em ordem (com `defer`): dados e configuração primeiro, `main.js` por último. A ordem está definida no final do `index.html`.

## Tecnologias

- **HTML5** — estrutura das telas.
- **CSS3** — variáveis, temas, grid e flexbox, animações; sem pré-processadores.
- **JavaScript (vanilla)** — toda a lógica, sem frameworks nem etapa de build.
- **html2canvas** (via CDN) — exporta o resumo da campanha como imagem.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.
