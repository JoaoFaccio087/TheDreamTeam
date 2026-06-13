CREATE TABLE IF NOT EXISTS matches (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  competicao  VARCHAR(50),
  modo        VARCHAR(20) DEFAULT 'solo',
  vitorias    INTEGER DEFAULT 0,
  empates     INTEGER DEFAULT 0,
  derrotas    INTEGER DEFAULT 0,
  gf          INTEGER DEFAULT 0,
  ga          INTEGER DEFAULT 0,
  posicao     INTEGER,
  campeao     BOOLEAN DEFAULT false,
  detalhes    JSONB,
  played_at   TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_matches_user_id   ON matches(user_id);
CREATE INDEX IF NOT EXISTS idx_matches_played_at ON matches(played_at DESC);
