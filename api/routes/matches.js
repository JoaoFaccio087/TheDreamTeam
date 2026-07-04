const express     = require('express');
const { z }       = require('zod');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');
const { calcularDesbloqueadas } = require('../achievements');

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

    // Recalcula conquistas a partir do histórico completo e grava as novas.
    // Isolado em try/catch próprio: uma falha aqui NÃO impede o registro da campanha.
    let novasConquistas = [];
    try {
      novasConquistas = await atualizarConquistas(req.user.id);
    } catch (errC) {
      console.error('[matches] erro ao atualizar conquistas:', errC);
    }

    res.status(201).json({ ...rows[0], novasConquistas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// Recalcula as conquistas do usuário e insere as recém-desbloqueadas na tabela achievements.
// Retorna a lista de IDs que acabaram de desbloquear (para o cliente exibir o toast).
async function atualizarConquistas(userId) {
  const { rows: matches } = await pool.query(
    `SELECT competicao, vitorias, empates, derrotas, gf, ga, posicao, campeao, detalhes
       FROM matches WHERE user_id = $1`,
    [userId]
  );
  const satisfeitas = calcularDesbloqueadas(matches);
  if (!satisfeitas.length) return [];

  // Quais dessas já estão gravadas? Só inserimos as que faltam.
  const { rows: jaTem } = await pool.query(
    `SELECT achievement_id FROM achievements WHERE user_id = $1`,
    [userId]
  );
  const gravadas = new Set(jaTem.map(r => r.achievement_id));
  const novas = satisfeitas.filter(id => !gravadas.has(id));
  if (!novas.length) return [];

  // Insere as novas (ON CONFLICT protege contra corrida).
  const valores = novas.map((_, i) => `($1, $${i + 2})`).join(', ');
  await pool.query(
    `INSERT INTO achievements (user_id, achievement_id) VALUES ${valores}
       ON CONFLICT (user_id, achievement_id) DO NOTHING`,
    [userId, ...novas]
  );
  return novas;
}

// GET /matches — histórico do usuário autenticado
router.get('/', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, competicao, modo, vitorias, empates, derrotas, gf, ga, posicao, campeao, detalhes, played_at
       FROM matches WHERE user_id = $1 ORDER BY played_at DESC LIMIT 50`,
      [req.user.id]
    );
    // Garante que "detalhes" volte como objeto (a coluna pode vir como texto JSON).
    const out = rows.map((r) => {
      if (r.detalhes && typeof r.detalhes === 'string') {
        try { r.detalhes = JSON.parse(r.detalhes); } catch (e) { r.detalhes = null; }
      }
      return r;
    });
    res.json(out);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// GET /matches/achievements — IDs das conquistas desbloqueadas do usuário (+ quando).
router.get('/achievements', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT achievement_id, unlocked_at FROM achievements WHERE user_id = $1 ORDER BY unlocked_at`,
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
