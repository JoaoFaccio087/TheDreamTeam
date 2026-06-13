-- ============================================================
-- init.sql — schema do banco The Dream Team
-- Executado automaticamente pelo postgres na primeira inicialização.
-- ============================================================

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL       PRIMARY KEY,
  username      VARCHAR(50)  UNIQUE NOT NULL,
  email         VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT         NOT NULL,
  created_at    TIMESTAMP    NOT NULL DEFAULT NOW()
);
