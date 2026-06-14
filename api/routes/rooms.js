const express     = require('express');
const crypto      = require('crypto');
const { z }       = require('zod');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');

const router = express.Router();
router.use(requireAuth);

// Alfabeto sem caracteres ambíguos (sem O, 0, I, 1, L)
const CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function gerarCodigo() {
  let c = '';
  for (let i = 0; i < 4; i++) c += CHARS[crypto.randomInt(CHARS.length)];
  return c;
}

const criarSchema = z.object({
  nome:       z.string().min(1).max(100).optional(),
  competicao: z.enum(['Brasileirão', 'libertadores', 'champions']).default('Brasileirão'),
  velocidade: z.enum(['lento', 'normal', 'rapida']).default('normal'),
});

// POST /rooms
router.post('/', async (req, res) => {
  const parsed = criarSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }
  const { nome, competicao, velocidade } = parsed.data;

  try {
    let sala = null;
    // Insere com um código aleatório; se colidir (UNIQUE, erro 23505), gera outro.
    // O banco garante a unicidade de forma atômica — sem brecha de corrida.
    for (let tentativa = 0; tentativa < 10 && !sala; tentativa++) {
      const codigo = gerarCodigo();
      try {
        const { rows } = await pool.query(
          `INSERT INTO rooms (codigo, nome, host_user_id, competicao, velocidade, status)
           VALUES ($1,$2,$3,$4,$5,'lobby') RETURNING *`,
          [codigo, nome || `Sala ${codigo}`, req.user.id, competicao, velocidade]
        );
        sala = rows[0];
      } catch (err) {
        if (err.code === '23505') continue; // código duplicado → tenta outro
        throw err;
      }
    }
    if (!sala) return res.status(500).json({ error: 'Não foi possível gerar um código único' });

    await pool.query(
      'INSERT INTO room_players (room_id, user_id, ordem) VALUES ($1,$2,1)',
      [sala.id, req.user.id]
    );
    res.status(201).json(sala);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// POST /rooms/:code/join
router.post('/:code/join', async (req, res) => {
  const code = (req.params.code || '').toUpperCase();
  try {
    const { rows: [sala] } = await pool.query(
      'SELECT * FROM rooms WHERE codigo = $1', [code]
    );
    if (!sala) return res.status(404).json({ error: 'Sala não encontrada' });
    if (sala.status !== 'lobby') return res.status(409).json({ error: 'Sala não está no lobby' });

    const { rows: [{ count }] } = await pool.query(
      'SELECT COUNT(*) AS count FROM room_players WHERE room_id = $1', [sala.id]
    );
    if (parseInt(count) >= 4) return res.status(409).json({ error: 'Sala cheia (máx. 4)' });

    const { rows: existing } = await pool.query(
      'SELECT 1 FROM room_players WHERE room_id = $1 AND user_id = $2',
      [sala.id, req.user.id]
    );
    if (!existing.length) {
      await pool.query(
        'INSERT INTO room_players (room_id, user_id, ordem) VALUES ($1,$2,$3)',
        [sala.id, req.user.id, parseInt(count) + 1]
      );
    }
    res.json(sala);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// GET /rooms/:code
router.get('/:code', async (req, res) => {
  const code = (req.params.code || '').toUpperCase();
  try {
    const { rows: [sala] } = await pool.query(
      'SELECT * FROM rooms WHERE codigo = $1', [code]
    );
    if (!sala) return res.status(404).json({ error: 'Sala não encontrada' });

    const { rows: jogadores } = await pool.query(
      `SELECT u.id, u.username, u.nome_do_time, rp.ordem, rp.pronto
       FROM room_players rp
       JOIN users u ON u.id = rp.user_id
       WHERE rp.room_id = $1 ORDER BY rp.ordem`,
      [sala.id]
    );
    res.json({ ...sala, jogadores });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
