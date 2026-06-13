CREATE TABLE IF NOT EXISTS rooms (
  id            SERIAL PRIMARY KEY,
  codigo        CHAR(4) UNIQUE NOT NULL,
  nome          VARCHAR(100),
  host_user_id  INTEGER REFERENCES users(id) ON DELETE SET NULL,
  competicao    VARCHAR(50) DEFAULT 'libertadores',
  velocidade    VARCHAR(20) DEFAULT 'normal',
  status        VARCHAR(20) DEFAULT 'lobby',
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS room_players (
  room_id   INTEGER NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  user_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ordem     INTEGER,
  pronto    BOOLEAN DEFAULT false,
  PRIMARY KEY (room_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_rooms_codigo      ON rooms(codigo);
CREATE INDEX IF NOT EXISTS idx_room_players_room ON room_players(room_id);
