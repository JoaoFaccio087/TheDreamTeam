const express = require('express');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const crypto  = require('crypto');
const { z }   = require('zod');
const pool    = require('../db');

const router      = express.Router();
const SALT_ROUNDS = 12;

const registerSchema = z.object({
  username:  z.string().min(3).max(30).trim(),
  email:     z.string().email().trim().toLowerCase(),
  password:  z.string().min(6).max(128),
  nomeTime:  z.string().min(1).max(50).trim().optional().default('Meu Time'),
});

const loginSchema = z.object({
  username: z.string().min(1).trim(),
  password: z.string().min(1),
});

// POST /auth/register
router.post('/register', async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }
  const { username, email, password, nomeTime } = parsed.data;

  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const { rows: [user] } = await pool.query(
      `INSERT INTO users (username, email, password_hash, nome_do_time)
       VALUES ($1, $2, $3, $4)
       RETURNING id, username, email, nome_do_time`,
      [username, email, hash, nomeTime]
    );
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({
      token,
      user: { id: user.id, username: user.username, email: user.email, nomeDoTime: user.nome_do_time },
    });
  } catch (err) {
    if (err.code === '23505') {
      const campo = err.constraint?.includes('email') ? 'E-mail' : 'Username';
      return res.status(409).json({ error: `${campo} já está em uso` });
    }
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }
  const { username, password } = parsed.data;

  try {
    const { rows: [user] } = await pool.query(
      'SELECT id, username, email, password_hash, nome_do_time FROM users WHERE username = $1',
      [username]
    );
    if (!user) return res.status(401).json({ error: 'Usuário ou senha incorretos' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Usuário ou senha incorretos' });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email, nomeDoTime: user.nome_do_time },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// POST /auth/guest — identidade temporária para jogar online SEM login.
// (Login/cadastro continua opcional, só pra salvar histórico.)
router.post('/guest', (req, res) => {
  // id negativo alto: não colide com usuários (positivos) nem com bots (-1..-19),
  // e por ser inteiro não quebra nenhuma query que filtre por id.
  const id = -(1000000 + crypto.randomInt(8000000));
  const username = 'Convidado-' + (Math.abs(id) % 10000);
  const token = jwt.sign({ id, username, guest: true }, process.env.JWT_SECRET, { expiresIn: '2d' });
  res.json({ token, user: { id, username, guest: true } });
});

module.exports = router;
