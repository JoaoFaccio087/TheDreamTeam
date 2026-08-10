-- 009_add_esporte.sql — marca de qual ESPORTE é cada partida registrada.
--
-- POR QUÊ AGORA: o jogo está deixando de ser só futebol (vôlei a caminho, basquete
-- depois). A tabela `matches` guarda o histórico de campanhas, mas hoje não sabe
-- distinguir esportes — toda linha é implicitamente futebol. Sem esta coluna, quando
-- o vôlei começar a gravar partidas, o histórico e as estatísticas do Perfil
-- misturariam sets de vôlei com gols de futebol no mesmo balde.
--
-- POR QUÊ DEFAULT 'futebol' (e não NULL): é o que torna a migração 100% SEGURA e
-- aditiva. Toda linha JÁ EXISTENTE vira 'futebol' automaticamente — que é exatamente
-- o que ela é. E todo INSERT futuro que não informe o esporte (ou seja, todo o código
-- de futebol atual, que não passa esse campo) continua gravando 'futebol' sem alteração
-- nenhuma. O front/back de futebol NÃO precisa mudar uma linha por causa disto.
--
-- SOBRE gf/ga/empates NO VÔLEI (decisão de projeto, não muda aqui): a tabela tem campos
-- cravados em futebol (gf=gols feitos, ga=gols sofridos, empates). O vôlei NÃO tem empate
-- e conta sets/pontos, não gols. A escolha é reaproveitar sem migração destrutiva:
--   - gf/ga  → no vôlei, "sets feitos / sets sofridos" (mesma semântica de saldo)
--   - empates → sempre 0 no vôlei (não há empate)
--   - detalhes JSONB → guarda o placar por sets, se quisermos o detalhe fino
-- Assim NENHUMA coluna existente muda de tipo; só ganha um novo significado quando
-- esporte='volei'. Se um dia quisermos colunas próprias, é outra migração aditiva.
--
-- (idempotente: IF NOT EXISTS — a migração roda a cada boot, mas o migrate.js pula as já
--  aplicadas via tabela _migrations; o IF NOT EXISTS é cinto de segurança.)

ALTER TABLE matches ADD COLUMN IF NOT EXISTS esporte VARCHAR(20) NOT NULL DEFAULT 'futebol';

-- Índice: o Perfil vai filtrar/agrupar por esporte (ex.: "minhas campanhas de vôlei"),
-- então um índice por (user_id, esporte) mantém essas consultas rápidas conforme o
-- histórico cresce. Espelha o padrão dos índices já existentes em matches.
CREATE INDEX IF NOT EXISTS idx_matches_user_esporte ON matches(user_id, esporte);
