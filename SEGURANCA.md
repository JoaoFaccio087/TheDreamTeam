# SEGURANÇA — The Dream Team

> Diagnóstico de segurança e plano de ação. Revisado em jun/2026.
> O jogo coleta **e-mail, usuário e senha** de pessoas reais → há responsabilidades
> concretas (inclusive LGPD). Este doc registra o que está OK, o que precisa de ação,
> e como fazer. Reavaliar a cada mudança no backend/autenticação.

---

## 0. Resumo executivo

**O essencial já está certo.** O backend faz hash de senha (bcrypt), valida entrada
(Zod), mantém segredos em variáveis de ambiente e usa JWT para sessão. Os ajustes
abaixo são **camadas extras** e **higiene de repositório**, não correções de falhas graves.

| Item | Estado | Ação |
|---|---|---|
| Hash de senha (bcrypt) | ✅ OK | — |
| Validação de entrada (Zod) | ✅ OK | — |
| Segredos via `process.env` (não hardcoded) | ✅ OK | manter |
| `.gitignore` | ✅ **criado agora** | conferir o que já está rastreado (§4) |
| `.env` real exposto no Git | ✅ nenhum encontrado | manter assim |
| RLS no Supabase | ⚠️ a confirmar | ativar como defesa em profundidade (§2) |
| LGPD (política, exclusão de conta) | ⚠️ pendente | implementar o básico (§3) |
| `node_modules`/`.DS_Store` no Git | ⚠️ a confirmar | remover do rastreio se preciso (§4) |

---

## 1. Exposição de chaves do banco — ✅ correto

- O backend lê `DATABASE_URL` e `JWT_SECRET` de **variáveis de ambiente**
  (`api/db/index.js`, `api/routes/auth.js`), **não** do código. Correto.
- A conexão com o Supabase liga SSL automaticamente. Correto.
- **Nenhum segredo hardcoded** foi encontrado no nosso código.
- **Rede de proteção:** o `.gitignore` (criado agora) garante que um `.env` nunca
  vá pro GitHub por engano.

**A fazer:**
- [ ] Conferir no painel do **Render** que `DATABASE_URL`, `JWT_SECRET` e `FRONTEND_URL`
      estão configuradas como env vars (e não em arquivo no repo).
- [ ] Garantir que `JWT_SECRET` seja longo e aleatório (≥ 32 chars). Se algum dia
      suspeitar de vazamento, **rotacionar** (trocar) o segredo invalida as sessões.
- [ ] `.env.example` (se existir) deve ter só **placeholders**, nunca valores reais.

---

## 2. RLS (Row Level Security) — ⚠️ ativar como defesa em profundidade

**O que é:** recurso do Postgres/Supabase que define, **no banco**, quais linhas cada
usuário pode ler/escrever.

**Contexto do nosso caso (importante):** hoje o jogo acessa o banco **através do backend**
(Node no Render), que usa a connection string com papel de servidor — o navegador **não**
fala direto com o Supabase. Então a proteção real hoje é o **backend validar o JWT** e só
consultar dados do usuário certo. Por isso o RLS **não é a defesa principal hoje**, mas é
uma **camada extra barata e valiosa**:
- Se um dia usarmos a chave pública (anon key) do Supabase no frontend, o RLS passa a ser
  essencial.
- Se uma credencial vazar, o RLS limita o estrago.

**A fazer (no painel do Supabase):**
- [ ] Ativar RLS em todas as tabelas com dados de usuário (ex.: `users`, `matches`, salas).
- [ ] Criar policies: cada usuário só acessa as próprias linhas
      (ex.: `auth.uid() = user_id` ou equivalente ao nosso modelo de id).
- [ ] Testar que o backend continua funcionando após ativar (ele usa papel de serviço,
      que normalmente bypassa RLS — confirmar o papel usado na connection string).

---

## 3. LGPD — ⚠️ implementar o básico

Coletamos dados pessoais (e-mail, usuário, senha) → a LGPD se aplica. Não é um bicho de
sete cabeças para um projeto deste tamanho. Pontos práticos:

- [x] **Política de Privacidade** ✅ FEITO — página `privacidade.html` (o que coletamos,
      por quê, base legal, direitos, retenção, contato), linkada no cadastro e no rodapé.
- [x] **Base legal:** ✅ consentimento no cadastro — checkbox "Li e aceito a Política de
      Privacidade" (`#cad-aceite`); o cadastro é bloqueado sem o aceite.
- [x] **Direito à exclusão:** ✅ FEITO — rota `DELETE /me` (exige senha, `bcrypt.compare`)
      + botão "Excluir minha conta" na zona de perigo do modal de editar perfil, com
      confirmação por senha. O `ON DELETE CASCADE` do schema remove matches e room_players;
      salas onde era host ficam com `host_user_id = NULL`. Ao excluir, encerra a sessão.
- [ ] **Minimização:** só pedir o necessário. ✅ já fazemos (não pedimos CPF, telefone etc.).
- [ ] **Segurança dos dados:** senha com bcrypt ✅; tráfego em HTTPS ✅ (GitHub Pages/Render).
- [ ] **Contato:** um e-mail de contato para titulares exercerem direitos.

> Nota: isto é orientação geral de boas práticas, **não** aconselhamento jurídico. Para um
> projeto que cresça/monetize, vale validar com alguém especializado.

---

## 4. .gitignore e higiene do repositório — ✅ criado, conferir rastreio

O `.gitignore` foi criado cobrindo: `.env*` (segredos), `node_modules/`, `.DS_Store`,
logs, build e temporários.

**Atenção:** `.gitignore` só impede arquivos **novos** de serem rastreados. Se algo
sensível/indevido **já foi commitado** antes, precisa ser removido do rastreio.

**A fazer (rodar na sua máquina, na raiz do projeto):**

```bash
# 1) Ver o que já está rastreado indevidamente:
git ls-files | grep -E "node_modules|\.env$|\.DS_Store"

# 2) Se aparecer node_modules ou .DS_Store, remover do rastreio (mantém no disco):
git rm -r --cached api/node_modules
git rm --cached .DS_Store api/.DS_Store

# 3) Aplicar o novo .gitignore e commitar:
git add .gitignore
git commit -m "Adiciona .gitignore; remove node_modules e .DS_Store do rastreio"
git push
```

**⚠️ Se algum `.env` real já tiver sido commitado algum dia** (mesmo que apagado depois):
ele continua no **histórico** do Git e deve ser tratado como **vazado** →
rotacionar (trocar) `JWT_SECRET` e a senha do banco no Supabase, e limpar o histórico
(`git filter-repo` ou BFG). Verificamos e **não encontramos** `.env` no projeto atual,
mas confirme com: `git log --all --full-history -- "*.env"` (deve vir vazio).

---

## 5. Sobre o pacote "Anthropic-Cybersecurity-Skills" (avaliado e descartado)

Pacote da comunidade (817 skills de SOC corporativo) que avaliamos. Conclusões:
- **Não é da Anthropic** — o próprio README admite "not affiliated with Anthropic PBC".
  O nome induz a erro. Sinal de atenção por si só.
- Inspeção: **sem** código ofuscado, exfiltração ou prompt-injection escondida; os scripts
  são automações plausíveis de SOC. Mas **não se aplica** ao The Dream Team (é ferramenta de
  equipe de segurança corporativa, não de um jogo com login).
- **Decisão:** não adotar. Nossa necessidade de segurança é focada (este documento), não um
  arsenal de SOC.
- **Lição geral:** desconfiar de pacotes que usam o nome de uma empresa conhecida mas são de
  terceiros; verificar sempre o dono real do repositório antes de usar.

---

## 6. Próximos passos sugeridos (ordem)

1. ✅ `.gitignore` criado → conferir rastreio (§4) e commitar.
2. ✅ Exclusão de conta (LGPD, §3) — FEITO: rota `DELETE /me` + botão com confirmação por senha.
3. ✅ Política de Privacidade + aceite no cadastro (LGPD, §3) — FEITO.
4. Ativar RLS no Supabase (§2) — camada extra. ← PRÓXIMO
5. Conferir env vars no Render e robustez do `JWT_SECRET` (§1).

> Pendência do João: trocar o e-mail de contato placeholder em `privacidade.html`
> (`thedreamteam.contato@gmail.com`) pelo e-mail real do projeto.
