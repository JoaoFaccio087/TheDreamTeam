const express     = require('express');
const { z }       = require('zod');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');

const router = express.Router();

const matchSchema = z.object({
  competicao: z.string().max(50),
  modo:       z.enum(['solo', 'online']).default('solo'),
  vitorias:   z.number().int().min(0),
  empates:    z.number().int().min(0),
  derrotas:   z.number().int().min(0),
  gf:         z.number().int().min(0),
  ga:         z.number().int().min(0),
  posicao:    z.number().int().min(1).nullable().optional(),
  campeao:    z.boolean().default(false),
  detalhes:   z.record(z.unknown()).optional(),
});

// POST /matches — requer auth
router.post('/', requireAuth, async (req, res) => {
  const parsed = matchSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }
  const d = parsed.data;
  try {
    const { rows } = await pool.query(
      `INSERT INTO matches
         (user_id, competicao, modo, vitorias, empates, derrotas, gf, ga, posicao, campeao, detalhes)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING *`,
      [req.user.id, d.competicao, d.modo,
       d.vitorias, d.empates, d.derrotas, d.gf, d.ga,
       d.posicao ?? null, d.campeao,
       d.detalhes ? JSON.stringify(d.detalhes) : null]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// GET /matches — histórico do usuário autenticado
router.get('/', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, competicao, modo, vitorias, empates, derrotas, gf, ga, posicao, campeao, played_at
       FROM matches WHERE user_id = $1 ORDER BY played_at DESC LIMIT 50`,
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
