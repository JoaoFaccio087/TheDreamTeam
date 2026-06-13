const { Pool } = require('pg');

// Bancos na nuvem (Supabase) exigem conexão SSL. O Postgres local (Docker) não.
// Liga o SSL automaticamente quando a string de conexão for do Supabase
// (ou tiver sslmode=require); caso contrário, mantém sem SSL (ambiente local).
const conn = process.env.DATABASE_URL || '';
const precisaSSL = /supabase\.com|sslmode=require/.test(conn);

const pool = new Pool({
  connectionString: conn,
  ssl: precisaSSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
