const express     = require('express');
const bcrypt      = require('bcryptjs');
const { z }       = require('zod');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');

const router      = express.Router();
const SALT_ROUNDS = 12;

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
  username:     z.string().min(3).max(30).trim().optional(),
  nome_do_time: z.string().min(1).max(50).optional(),
  email:        z.string().email().trim().toLowerCase().optional(),
  senha_atual:  z.string().optional(),
  senha_nova:   z.string().min(6).max(128).optional(),
}).strict();

// PATCH /me — edita usuário, nome do time, e-mail e/ou senha.
// Troca de senha exige a senha atual correta (verificada via bcrypt).
router.patch('/', async (req, res) => {
  const parsed = patchSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }
  const d = parsed.data;

  const values = [req.user.id];
  const sets   = [];
  function add(col, val) { values.push(val); sets.push(`"${col}" = $${values.length}`); }

  if (d.username     !== undefined) add('username',     d.username);
  if (d.email        !== undefined) add('email',        d.email);
  if (d.nome_do_time !== undefined) add('nome_do_time', d.nome_do_time);

  // Troca de senha (opcional): exige senha atual correta.
  if (d.senha_nova !== undefined) {
    if (!d.senha_atual) return res.status(400).json({ error: 'Informe a senha atual' });
    try {
      const { rows } = await pool.query('SELECT password_hash FROM users WHERE id = $1', [req.user.id]);
      if (!rows.length) return res.status(404).json({ error: 'Usuário não encontrado' });
      const ok = await bcrypt.compare(d.senha_atual, rows[0].password_hash);
      if (!ok) return res.status(400).json({ error: 'Senha atual incorreta' });
      const hash = await bcrypt.hash(d.senha_nova, SALT_ROUNDS);
      add('password_hash', hash);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro interno' });
    }
  }

  if (!sets.length) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  try {
    const { rows } = await pool.query(
      `UPDATE users SET ${sets.join(', ')} WHERE id = $1 RETURNING id, username, email, nome_do_time`,
      values
    );
    res.json(rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      const campo = err.constraint && err.constraint.includes('email') ? 'E-mail' : 'Nome de usuário';
      return res.status(409).json({ error: `${campo} já está em uso` });
    }
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
