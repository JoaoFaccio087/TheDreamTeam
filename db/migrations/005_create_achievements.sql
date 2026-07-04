-- 005_create_achievements.sql — conquistas desbloqueadas por usuário.
-- Uma linha por (usuário, conquista). achievement_id é a chave estável do catálogo
-- (ex.: 'primeira_vitoria'), definida no backend em achievementsCatalog.
CREATE TABLE IF NOT EXISTS achievements (
  user_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  achievement_id VARCHAR(60) NOT NULL,
  unlocked_at    TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, achievement_id)
);

CREATE INDEX IF NOT EXISTS idx_achievements_user_id ON achievements(user_id);

-- RLS: mesma postura das outras tabelas (defesa em profundidade). O backend usa o papel
-- postgres (BYPASSRLS); o papel anônimo do Supabase fica sem acesso (nega por padrão, sem policy).
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements FORCE  ROW LEVEL SECURITY;
