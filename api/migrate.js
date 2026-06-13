// migrate.js — executa migrations SQL em ordem alfabética, idempotente

const fs   = require('fs');
const path = require('path');
const pool = require('./db');

async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS _migrations (
      id         SERIAL PRIMARY KEY,
      filename   VARCHAR(255) UNIQUE NOT NULL,
      run_at     TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  const { rows } = await pool.query('SELECT filename FROM _migrations ORDER BY filename');
  const jaRodadas = new Set(rows.map(r => r.filename));

  const dir = path.join(__dirname, 'db', 'migrations');
  let arquivos = [];
  try {
    arquivos = fs.readdirSync(dir).filter(f => f.endsWith('.sql')).sort();
  } catch {
    console.log('[migrate] Diretório de migrations não encontrado — ignorando.');
    return;
  }

  for (const arquivo of arquivos) {
    if (jaRodadas.has(arquivo)) continue;

    const sql = fs.readFileSync(path.join(dir, arquivo), 'utf8');
    console.log(`[migrate] Executando ${arquivo}…`);

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('INSERT INTO _migrations (filename) VALUES ($1)', [arquivo]);
      await client.query('COMMIT');
      console.log(`[migrate] ${arquivo} — OK`);
    } catch (err) {
      await client.query('ROLLBACK');
      throw new Error(`[migrate] Falhou em ${arquivo}: ${err.message}`);
    } finally {
      client.release();
    }
  }
}

module.exports = migrate;
