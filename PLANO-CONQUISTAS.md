# Plano — Tela de Perfil + Sistema de Conquistas

Documento de planejamento para aprovação. Nada implementado ainda.

## Visão geral
Transformar o **Perfil** (hoje um modal) numa **tela cheia** com **abas internas**, e adicionar
**Conquistas** como uma dessas abas. Reaproveita o sistema de telas que já existe
(`mostrarTela()` + classe `.tela`) e o padrão de abas internas (como as subviews do online).

## Decisões de UI (alinhadas com João)
- A aba/botão **Perfil** passa a abrir uma TELA (`tela-perfil`), não um modal.
- Dentro dela, ABAS internas: **Estatísticas** · **Histórico** · **Conquistas**.
- **Histórico vira aba interna** e o **botão de Histórico separado é REMOVIDO** (acesso só pela
  tela de Perfil → aba Histórico). Decisão do João: evita botão redundante/em desuso.
- Editar Perfil: continua como modal (é uma ação pontual, não uma "aba de conteúdo").
- **Roteamento por URL (hash/#): NÃO agora.** As abas funcionam via mostrar/esconder, como o
  resto do jogo. URL routing (#/perfil, resolver F5, links) vira PROJETO SEPARADO futuro que
  melhora a navegação inteira do jogo de uma vez. Registrado no backlog abaixo.

## NOTA — arquitetura atual (contexto para o futuro roteamento)
O jogo é uma SPA: um só index.html com todas as telas (.tela) dentro; mostrarTela() só
esconde/mostra divs, NÃO muda a URL. Por isso F5 volta à tela inicial (o estado só vive em
variáveis JS, zeradas no reload). Roteamento futuro: hash routing (#/perfil) é o caminho mais
simples/seguro p/ GitHub Pages (mudar o # não recarrega a página; no load, lê o # e mostra a
tela certa). History API (URLs limpas) exigiria config de servidor — mais trabalho. Fica p/ depois.

---

## FASE 1 — Tela de Perfil com abas (SEM conteúdo novo ainda)
Objetivo: reestruturar o que já existe, sem inventar conquistas. Base testável.
- Criar `tela-perfil` (div .tela) no index.html, reusando o visual do modal atual.
- Barra de abas no topo: [Estatísticas] [Histórico] [Conquistas].
- Migrar o conteúdo do modal-perfil (cabeçalho do usuário + estatísticas) para a aba Estatísticas.
- Migrar o histórico (hoje modal) para a aba Histórico.
- Ajustar o clique em "Perfil" para `mostrarTela('tela-perfil')` em vez de abrir modal.
- Botão de voltar para a tela anterior.
- ENTREGA: js/interface.js (ou perfil.js) + index.html + css. Testável: navegar Perfil→abas→voltar.
- RISCO: médio (mexe em navegação existente). Por isso é a 1ª fase, isolada.

## FASE 2 — Aba de Conquistas (visual, com dados de exemplo)
Objetivo: a aba Conquistas renderizando, com conquistas "mock" (fixas no código), sem lógica real.
- Grid de cards de conquista (ícone, nome, descrição, bloqueada/desbloqueada), agrupados por
  categoria (ex.: Progressão, Placar & Campanha), com contador "X/Y" por categoria e total.
- Estado visual: desbloqueada (destaque) vs bloqueada (esmaecida).
- Dados mock: uma lista fixa no JS só para desenhar a tela.
- ENTREGA: js + css. Testável: a aba mostra os cards bonitos.
- RISCO: baixo (só visual, dados fixos).

## FASE 3 — Lógica das conquistas (o "cérebro")
Objetivo: conquistas de verdade — detectar, persistir, exibir o progresso real.
3a. DEFINIR a lista de conquistas + condição de cada uma (a gente escreve juntos). Ex.:
    "Primeira vitória", "Jogou 50 partidas", "Campeão invicto", "7x0", "Hat-trick"...
3b. DETECTAR desbloqueio: no fim de cada campanha / ao salvar partida, checar as condições
    contra os stats que já temos (sala.resultados, matches no banco, gols/assists).
3c. PERSISTIR: onde guardar quais conquistas o usuário já tem. Opções:
    - Nova tabela `achievements` (user_id, achievement_id, unlocked_at) — mais limpo.
    - OU campo JSON no usuário. (Decidir na fase.)
3d. Migração de banco (se tabela nova) + endpoint/evento para ler/gravar.
- ENTREGA: backend (Render) + migração + frontend. Testável: jogar e ver conquista desbloquear.
- RISCO: médio (backend + banco).

## FASE 4 — Toast de notificação (estilo Steam)
Objetivo: o "pop" no canto inferior direito ao desbloquear.
- Componente de toast que aparece, mostra ícone+nome da conquista, e some sozinho (alguns seg).
- Fila: se desbloquear várias de uma vez, mostra em sequência.
- Disparado quando a Fase 3 detecta um novo desbloqueio.
- ENTREGA: js + css. Testável: desbloquear → toast aparece.
- RISCO: baixo (visual).

---

## Ordem e por que
1 → 2 → 3 → 4. Cada fase é testável e reversível. As Fases 1-2 são visuais (baixo/médio risco),
a 3 é o coração (lógica+banco), a 4 é o polimento. Se em qualquer ponto quiser parar, o que já
foi feito fica funcional.

## Decisões pendentes (a resolver quando chegar em cada fase)
- Fase 1: Histórico vira aba interna ou continua modal? (recomendo aba interna)
- Fase 3a: QUAIS conquistas e quantas (definir a lista — começar com ~15-20 e crescer).
- Fase 3c: tabela nova vs campo JSON (recomendo tabela nova, mais escalável).

---

## FASE 1 — PLANO DE EXECUÇÃO CONCRETO (mapeado no código)
Peças identificadas:
- js/perfil.js: abrirPerfil() (linha 36, popula username/email/avatar via setTexto/setAvatar +
  api.getMe + carregarAcordeoes) e abrirHistorico() (258). Disparadores: dd-perfil (323),
  dd-historico (324) no dropdown do btn-perfil.
- IDs que a lógica usa e DEVEM ser preservados: perfil-username, perfil-email, perfil-avatar,
  perfil-nome-time-txt, perfil-acordeoes (+ os do histórico).

ESTRATÉGIA SEGURA (reaproveita a lógica, troca só o invólucro):
1. Criar <div id="tela-perfil" class="tela escondida"> no index.html com: cabeçalho do usuário
   (mesmos IDs), barra de abas [Estatísticas][Histórico][Conquistas], e 3 painéis de aba. A aba
   Estatísticas recebe o #perfil-acordeoes (mesmo ID → carregarAcordeoes continua funcionando).
   A aba Histórico recebe a lista do histórico (mesmos IDs do modal-historico). Conquistas: painel
   vazio por enquanto ("Em breve") — vira Fase 2.
2. js: função mostrarTelaPerfil(aba) que faz mostrarTela(telaPerfil), ativa a aba pedida, e chama
   a lógica de popular já existente (abrirPerfil popula stats; abrirHistorico popula histórico) —
   adaptando abrir(modal) → mostrar painel de aba.
3. Trocar dd-perfil → mostrarTelaPerfil('estatisticas'); dd-historico → mostrarTelaPerfil('historico').
   REMOVER o modal-historico separado (vira aba). modal-perfil vira a tela (ou é removido).
4. Botão "voltar" na tela-perfil → mostrarTela(tela anterior / inicial).
5. Editar Perfil: continua modal (o lápis abre modal-editar-perfil como hoje).
VALIDAÇÃO: navegar btn-perfil → Perfil (abre tela na aba Stats) → trocar p/ Histórico → voltar.
Conferir que estatísticas e histórico populam igual a antes. node -c + brace count.
