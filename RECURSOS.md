# RECURSOS — The Dream Team

> Caderno de referências para consultar quando formos crescer: ferramentas de
> infraestrutura, sites úteis e — o mais importante — **fontes de dados esportivos**
> para alimentar os modos novos. Levantado em jun/2026. Preços e limites mudam:
> **reconferir antes de adotar** qualquer coisa daqui.

---

## 0. Como usar este arquivo

- O maior gargalo dos modos novos é **dados** (não código). Este doc existe para,
  quando chegar a hora, já termos as fontes mapeadas.
- Princípio para o nosso caso: o jogo usa **base estática** (`js/dados/*.js`) — a gente
  coleta os dados **uma vez** com um script e salva. Não servimos dados ao vivo. Por isso
  **limite de requisição/minuto importa pouco**: roda-se o coletor devagar, respeitando o
  limite, e pronto. O que importa é **cobertura** (tem a liga?) e **profundidade**
  (tem o elenco/jogadores, não só placares?).

---

## 1. Ferramentas de infraestrutura (do vídeo "5 ferramentas para SaaS")

Contexto: o The Dream Team hoje **não é um SaaS** (é jogo de navegador grátis;
frontend estático no GitHub Pages + backend leve no Render). Então várias dicas
genéricas de "otimize seu SaaS" miram problemas de escala que ainda não temos.
Avaliação honesta de cada uma **para o nosso caso**:

### 1.1 Google Search Console — ✅ útil já, baixo risco, grátis
- **O que é:** ferramenta gratuita do Google que mostra **como o site aparece na busca**
  (quais termos trazem visitas, posição média, erros de indexação) e deixa enviar um
  *sitemap*. NÃO "faz aparecer no Google" — o Google já indexa sozinho; isto é
  diagnóstico + visibilidade (SEO).
- **Encaixa?** Sim, quando focarmos em **alcance orgânico** (mais gente achando o jogo).
- **Custo:** zero. Só verificar a posse do domínio (já temos CNAME + GitHub Pages).
- **Próximo passo combinado:** o João quer aprender a usar (Claude ensina) quando for a vez.

### 1.2 Cloudflare R2 — ⏸️ não precisamos hoje
- **O que é:** storage de **objetos/arquivos** (imagens, vídeos, uploads) tipo Amazon S3,
  mas **sem taxa de egress** (saída de dados sempre grátis). Free tier permanente:
  **10 GB**, 1M operações classe A, 10M classe B por mês. **Exige cartão** mesmo no grátis.
- **Encaixa?** Não hoje. Nossos dados são `.js` estáticos (~2 MB) que já vão no GitHub
  Pages de graça. Não temos upload de foto/vídeo de usuário.
- **Quando voltaria à mesa:** se adicionarmos **muita mídia** — escudos/fotos de jogadores
  reais, avatares de usuário, export de imagem de campanha em volume.

### 1.3 Upstash Redis — ⏸️ não urgente, usar com critério
- **O que é:** banco **em memória** (rápido) para **cache** (guardar resultado pronto p/ não
  recalcular) e **rate limiting** (limitar ações por minuto, anti-abuso). Free tier:
  **256 MB**, **500 mil comandos/mês**.
- **Encaixa?** Não urgente. As salas já vivem na memória do servidor (`salaState`).
  Brilharia para **rate limiting** real (alguém criando salas em massa / floodando o
  socket) ou se um dia rodarmos **mais de uma instância** do servidor (estado compartilhado).
- **⚠️ Cuidado:** modelo por-comando é barato no tráfego baixo, mas um recurso de tempo
  real plugado no caminho quente de **cada evento Socket.IO** pode disparar a contagem e
  estourar o free tier. Usar só onde traz valor claro (rate limiting pontual), não como
  cache de tudo.

**Resumo:** adotar **só o Search Console** quando focarmos alcance. R2 e Redis são soluções
à espera de um problema que ainda não temos — anotados para quando o problema aparecer.

---

## 2. Sites úteis (referência/consulta — sem custo, sem risco)

- **https://publicapis.dev/** — diretório de **APIs públicas/gratuitas**. **Muito relevante
  p/ nós:** é onde garimpar APIs de dados (futebol e outros esportes) para os modos novos.
- **https://devdocs.io/** — documentação de várias linguagens/libs num só lugar, busca
  rápida, funciona offline. Bom p/ consultar JS, CSS, Node.
- **https://quickref.me/** — "colas" (cheat sheets) rápidas de comandos/sintaxe (Git, CSS, JS…).
- **https://stackshare.io/** — mostra quais techs empresas usam. Mais curiosidade/inspiração;
  o menos essencial dos quatro.

Prioridade de favoritar hoje: **publicapis.dev** (ataca o gargalo de dados), devdocs, quickref.

---

## 3. Fontes de dados esportivos (o levantamento principal)

> Objetivo: encontrar **elencos/jogadores** (não só placares) para montar nossa base
> estática. Tudo abaixo conferido em jun/2026 — reconferir limites antes de usar.

### 3.1 FUTEBOL

| Fonte | Grátis? | Cobertura | Profundidade (jogadores?) | Observações |
|---|---|---|---|---|
| **football-data.org** | Sim, permanente | 12 grandes (Premier, LaLiga, Bundesliga, Serie A, Ligue 1, Champions, Eredivisie, Liga Portugal, Championship, **Brasileirão Série A**, Copa, Euro) | ⚠️ elenco/escalações no grátis é **limitado**; *scorers* (artilheiros) sim. Squad/lineup detalhado = add-on pago (~€29/mês) | 10 req/min. Mais limpo p/ começar. "Grátis pra sempre" prometido pelo criador. |
| **API-Football (API-Sports)** | Free tier | **1200+ ligas** | ✅ endpoint `/players` com posição, nacionalidade, idade, altura, peso, foto | **100 req/dia** no grátis (10 req/min). Cobertura ampla. ⚠️ evita chamar de IP compartilhado (serverless). Pro $19/mês = 7500 req/dia. |
| **BALLDONTLIE** | Free tier | NBA, NFL, MLB, NHL, **futebol** (Premier, LaLiga, Serie A, Champions, Bundesliga, Ligue 1, MLS), tênis, golfe, e-sports, **Copa 2026** | ✅ teams/players/rosters/lineups | **Multi-esporte numa API só** — cobre vários itens do backlog de uma vez. Tem OpenAPI spec. |
| **TheSportsDB** | Sim (comunitário) | Multi-esporte amplo (futebol, NBA, NFL, MLB, NHL, F1, MotoGP, rugby, golfe…) | Times/jogadores/imagens (escudos!) — qualidade varia (crowd-sourced) | Bom p/ **logos/escudos** e prototipagem. Conferir precisão dos dados. |
| **Sportmonks** | Trial/free estreito | 2500+ ligas | ✅ squads, stats, histórico | Mais robusto, porém **pago** p/ valer (free só 2 ligas). |
| **TheStatsAPI** | Trial 7 dias (sem free permanente) | 150 ligas (até ~1196 sob pedido), 84k+ jogadores, 10 anos histórico | ✅ completo | Caro ($50/mês). Anotado como "próximo passo" se precisarmos de muito.|
| **Transfermarkt** (site) | — | Valores de mercado, perfis de clube, elencos por temporada | ✅ (via scraping, não API oficial) | Ótima **referência de força/valor** dos jogadores p/ calibrar `forca`. |

**Para o backlog 8.1 (Premier, Serie A, LaLiga):** football-data.org cobre as três no grátis
para placares/tabelas; para **elencos** (que é o que precisamos), **API-Football** (`/players`)
ou **BALLDONTLIE** são os caminhos mais diretos no grátis. Estratégia: coletar devagar,
respeitando o limite diário, e salvar em `js/dados/<liga>.js` no nosso formato
`{ nome, posicoes, forca }`.

### 3.2 NBA (basquete)

| Fonte | Grátis? | Observações |
|---|---|---|
| **BALLDONTLIE** | Free tier | A referência. Players (posição, altura, peso, college, país, draft), teams, games, stats, contratos/salários. JSON limpo. |
| **TheSportsDB** | Sim | Times/jogadores/logos da NBA; bom complemento p/ imagens. |
| **API-Sports (API-NBA)** | Free 100/dia | Parte do mesmo guarda-chuva da API-Football (assinatura separada por esporte). |

> Para mapear ao nosso jogo: posição do basquete (G/F/C) precisaria de um modelo de
> "força" e de motor próprio (8.2 do ESTADO). BALLDONTLIE dá os jogadores; a lógica de
> jogo é trabalho à parte.

### 3.3 F1 (corrida)

| Fonte | Grátis? | Observações |
|---|---|---|
| **Jolpica-F1** (`api.jolpi.ca`) | **Sim, aberto, sem auth** | **Sucessor oficial do Ergast** (que foi desligado fim/2024). Drop-in compatível. Cobre **1950–presente** (pilotos, construtores, circuitos, resultados, qualifying, sprints, standings). Mantido por voluntários (doação opcional). **Melhor opção p/ F1.** |
| **OpenF1** (`openf1.org`) | Sim, sem auth | Telemetria/sessões ao vivo e histórico **2023+** (voltas, clima, rádio). Mais p/ telemetria do que p/ "elenco". |

> F1 foge da lógica de "confronto": é pontuação por GP, grid, temporada de etapas
> (já anotado no ESTADO 8.2). Jolpica resolve a **fonte de dados**; o motor é específico.

### 3.4 Outros (NFL, MLB, NHL, tênis, golfe, e-sports CS2/LoL/Dota)

- **BALLDONTLIE** cobre **todos esses** numa API só (free tier) — é o "canivete suíço"
  multi-esporte. Primeiro lugar a olhar para qualquer esporte novo.
- **TheSportsDB** complementa com imagens/logos e cobertura ampla.
- **Vôlei (M/F):** não há fonte gratuita forte óbvia; provavelmente precisará de coleta
  manual/scraping quando for a vez. (Decisão M vs F vs misto segue no ESTADO 8.2.)

---

## 4. Recomendações práticas (quando começarmos a coletar)

1. **Comece pela BALLDONTLIE** — uma API, free tier, cobre futebol + NBA + NFL + MLB + NHL +
   tênis + golfe + e-sports. Resolve a maior parte do backlog de uma vez.
2. **Futebol europeu com elencos:** API-Football (`/players`) no grátis, coletando devagar
   (100/dia), OU football-data.org para tabelas + scorers.
3. **F1:** Jolpica-F1 (aberto, sem chave, histórico completo).
4. **Imagens/escudos:** TheSportsDB.
5. **Sempre** salvar no nosso formato estático (`js/dados/<x>.js`) com `{ nome, posicoes, forca }`.
   A **força** pode ser derivada/calibrada (ex.: valor de mercado do Transfermarkt como proxy).
6. **Chave de API fica no servidor**, nunca no frontend. Para base estática, a coleta é um
   script local — a chave não precisa nem ir pro repo.
7. **Licença:** conferir os termos de uso de cada fonte antes de redistribuir dados no jogo.

---

## 5. Links rápidos

- Search Console: https://search.google.com/search-console
- Cloudflare R2: https://www.cloudflare.com/products/r2/
- Upstash Redis: https://upstash.com/pricing/redis
- publicapis.dev · devdocs.io · quickref.me · stackshare.io
- football-data.org · api-football.com · balldontlie.io · thesportsdb.com/free_sports_api
- Jolpica-F1: https://github.com/jolpica/jolpica-f1 · OpenF1: https://openf1.org

---

## 6. Coletor de elencos (scripts/coletar-liga.js)

Pipeline pronto para puxar elencos de uma liga via **API-Football** e gerar um arquivo
no formato do jogo (`js/dados/<liga>.js`). **Roda na máquina do João** — o ambiente do
Claude não tem acesso de rede às APIs (`host_not_allowed`); só GitHub/npm/PyPI.

**Uso:**
```
export API_FOOTBALL_KEY="sua_chave"      # conta grátis em api-football.com (100 req/dia)
node scripts/coletar-liga.js --liga 39 --season 2023 --saida premierleague
```
IDs úteis: 39 Premier · 135 Serie A · 140 LaLiga · 78 Bundesliga · 61 Ligue 1 · 71 Brasileirão.

**O que o script faz:** pega a classificação (ordem dos times) → para cada time, baixa o
elenco paginado → converte cada jogador para `{ nome, posicoes, forca }` → escreve o `.js`
com `const DADOS_<SAIDA>` no mesmo padrão dos arquivos atuais. Respeita o rate limit
(~9 req/min) com esperas.

**Limitações conhecidas (REVISAR à mão depois):**
- **Posições**: a API classifica só em 4 grupos amplos (GK/DEF/MID/ATT). O script traduz
  para PT genérico (GOL/ZAG/MC/ATA) — **lados (LD/LE/PD/PE) e funções (VOL/MEI/MD/ME) não
  vêm da API** e precisam de refino manual onde importar.
- **Força**: a API **não dá overall pronto**. O script estima a partir do `rating` médio da
  temporada (~6.0–8.0) mapeado p/ a faixa do jogo (~70–88), via `ratingParaForca()` — é um
  PONTO DE CALIBRAÇÃO ajustável. Jogador sem rating cai numa força-base por posição.
- **Cota**: 100 req/dia no free tier. Uma liga de 20 times gasta ~40–60 req (standings +
  elencos paginados). Dá p/ ~1–2 ligas por dia no grátis.

**Passos manuais após gerar:** (1) `<script src="js/dados/<liga>.js">` no index.html antes
do dados.js; (2) somar `...DADOS_<LIGA>` no array `DADOS` de `js/dados/dados.js`;
(3) revisar posições e força.
