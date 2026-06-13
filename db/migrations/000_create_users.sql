-- Cria a tabela base de usuários.
-- (Antes ficava só no init.sql, que o Postgres local rodava sozinho. Como bancos
--  na nuvem, tipo o Supabase, não rodam o init.sql, a criação vem como migration.)
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL       PRIMARY KEY,
  username      VARCHAR(50)  UNIQUE NOT NULL,
  email         VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT         NOT NULL,
  created_at    TIMESTAMP    NOT NULL DEFAULT NOW()
);
