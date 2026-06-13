const express     = require('express');
const { z }       = require('zod');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');

const router = express.Router();
router.use(requireAuth);

// GET /me
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, username, email, nome_do_time, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

const patchSchema = z.object({
  nome_do_time: z.string().min(1).max(50).optional(),
  email:        z.string().email().optional(),
}).strict();

// PATCH /me
router.patch('/', async (req, res) => {
  const parsed = patchSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }
  const updates = parsed.data;
  const fields  = Object.keys(updates);
  if (!fields.length) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const set    = fields.map((f, i) => `"${f}" = $${i + 2}`).join(', ');
  const values = [req.user.id, ...fields.map(f => updates[f])];

  try {
    const { rows } = await pool.query(
      `UPDATE users SET ${set} WHERE id = $1 RETURNING id, username, email, nome_do_time`,
      values
    );
    res.json(rows[0]);
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'Email já em uso' });
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
