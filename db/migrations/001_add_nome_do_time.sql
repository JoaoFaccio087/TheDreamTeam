-- Adiciona nome_do_time na tabela users
ALTER TABLE users ADD COLUMN IF NOT EXISTS nome_do_time VARCHAR(50) DEFAULT 'Meu Time';
