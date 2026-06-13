const express = require('express');
const pool    = require('../db');

const router = express.Router();

// GET /ranking — público, top 20 por títulos → vitórias → gols
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        u.username,
        u.nome_do_time,
        COUNT(*) FILTER (WHERE m.campeao = true)  AS titulos,
        SUM(m.vitorias)                            AS vitorias,
        SUM(m.empates)                             AS empates,
        SUM(m.derrotas)                            AS derrotas,
        SUM(m.gf)                                  AS gols,
        COUNT(*)                                   AS campanhas
      FROM matches m
      JOIN users u ON u.id = m.user_id
      GROUP BY u.id, u.username, u.nome_do_time
      ORDER BY titulos DESC, vitorias DESC, gols DESC
      LIMIT 20
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
