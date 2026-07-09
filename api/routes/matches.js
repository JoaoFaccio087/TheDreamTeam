const express     = require('express');
const { z }       = require('zod');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');
const { calcularDesbloqueadas, grupoDe } = require('../achievements');

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

// Grupo de posição a partir do código da vaga (ZAG/LE/MC…). Espelha POSICAO_GRUPO de js/perfil.js:
// os picks guardam o código específico da vaga, não GOL/DEF/MEI/ATA.
const POSICAO_GRUPO = {
  GOL: 'GOL', GK: 'GOL',
  ZAG: 'DEF', LE: 'DEF', LD: 'DEF', LAT: 'DEF', ZE: 'DEF', ZD: 'DEF',
  VOL: 'MEI', MC: 'MEI', MEI: 'MEI', ME: 'MEI', MD: 'MEI', MEIA: 'MEI',
  PE: 'ATA', PD: 'ATA', ATA: 'ATA', CA: 'ATA', SA: 'ATA'
};
const TOPO_POR_POSICAO = 6;   // quantos jogadores por setor devolver (o XI usa bem menos)

function statsVazias() {
  return { camp: 0, tit: 0, v: 0, e: 0, d: 0, gf: 0, ga: 0 };
}

// GET /matches/stats — estatísticas agregadas do usuário, prontas para a tela de Perfil.
// Existe para ESCALABILIDADE: antes o Perfil baixava TODAS as campanhas (com detalhes/picks, ~1KB
// cada) e somava no navegador. Aqui as somas saem do SQL e as escalações são contadas no servidor,
// devolvendo um payload pequeno e constante, independente de o usuário ter 50 ou 5000 campanhas.
router.get('/stats', requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;

    // 1) Somas por competição — direto no banco (nada de trafegar linha a linha).
    const agg = await pool.query(
      `SELECT competicao,
              COUNT(*)::int                                   AS camp,
              COALESCE(SUM(CASE WHEN campeao THEN 1 ELSE 0 END), 0)::int AS tit,
              COALESCE(SUM(vitorias), 0)::int                 AS v,
              COALESCE(SUM(empates),  0)::int                 AS e,
              COALESCE(SUM(derrotas), 0)::int                 AS d,
              COALESCE(SUM(gf), 0)::int                       AS gf,
              COALESCE(SUM(ga), 0)::int                       AS ga
         FROM matches WHERE user_id = $1
        GROUP BY competicao`,
      [userId]
    );

    const grupos = { geral: statsVazias() };
    for (const row of agg.rows) {
      const g = grupoDe(row.competicao) || 'outros';
      if (!grupos[g]) grupos[g] = statsVazias();
      for (const k of ['camp', 'tit', 'v', 'e', 'd', 'gf', 'ga']) {
        grupos[g][k]     += row[k] | 0;
        grupos.geral[k]  += row[k] | 0;
      }
    }

    // 2) Time mais escalado — lê só a coluna `detalhes` e conta no servidor. O cliente recebe
    // apenas os mais escalados por setor, não o histórico inteiro.
    const det = await pool.query(
      `SELECT competicao, detalhes FROM matches WHERE user_id = $1 AND detalhes IS NOT NULL`,
      [userId]
    );

    const contagem = {};   // grupoComp → { 'DEF|Baresi': { nome, grupo, forca, vezes } }
    const anota = (gComp, p) => {
      const gPos = POSICAO_GRUPO[String(p.codigo || '').toUpperCase()];
      if (!gPos || !p.nome) return;
      if (!contagem[gComp]) contagem[gComp] = {};
      const k = gPos + '|' + p.nome;
      if (!contagem[gComp][k]) contagem[gComp][k] = { nome: p.nome, grupo: gPos, forca: p.forca | 0, vezes: 0 };
      contagem[gComp][k].vezes++;
      if ((p.forca | 0) > contagem[gComp][k].forca) contagem[gComp][k].forca = p.forca | 0;
    };

    for (const row of det.rows) {
      let d = row.detalhes;
      if (typeof d === 'string') { try { d = JSON.parse(d); } catch (e) { continue; } }
      const picks = d && d.snapshot && d.snapshot.picks;
      if (!Array.isArray(picks)) continue;
      const gComp = grupoDe(row.competicao) || 'outros';
      for (const p of picks) {
        if (!p) continue;
        anota('geral', p);
        anota(gComp, p);
      }
    }

    // Ordena por vezes (desc) e corta o topo de cada setor.
    const escalados = {};
    for (const gComp of Object.keys(contagem)) {
      const setores = { GOL: [], DEF: [], MEI: [], ATA: [] };
      for (const k of Object.keys(contagem[gComp])) {
        const j = contagem[gComp][k];
        if (setores[j.grupo]) setores[j.grupo].push(j);
      }
      for (const s of Object.keys(setores)) {
        setores[s].sort((a, b) => (b.vezes !== a.vezes ? b.vezes - a.vezes : b.forca - a.forca));
        setores[s] = setores[s].slice(0, TOPO_POR_POSICAO);
      }
      escalados[gComp] = setores;
    }

    res.json({ grupos, escalados });
  } catch (err) {
    console.error('[GET /matches/stats]', err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// GET /matches — histórico do usuário autenticado.
// Sem limite por padrão: a tela de Perfil agrega TODAS as campanhas a partir desta lista, e um
// LIMIT fixo (era 50) travava as estatísticas — "50 campanhas", vitórias e gols só das últimas 50.
// `?limit=N` (opcional) permite paginar/limitar quando só interessam as mais recentes.
router.get('/', requireAuth, async (req, res) => {
  try {
    const pedido = parseInt(req.query.limit, 10);
    const limite = Number.isFinite(pedido) && pedido > 0 ? Math.min(pedido, 5000) : null;

    const sql =
      `SELECT id, competicao, modo, vitorias, empates, derrotas, gf, ga, posicao, campeao, detalhes, played_at
         FROM matches WHERE user_id = $1 ORDER BY played_at DESC` +
      (limite ? ' LIMIT $2' : '');
    const params = limite ? [req.user.id, limite] : [req.user.id];

    const { rows } = await pool.query(sql, params);
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
// Antes de retornar, recalcula sobre o histórico e grava as que faltam. Isso garante que
// conquistas ADICIONADAS depois (ou já merecidas mas ainda não avaliadas) apareçam sem exigir
// que o usuário jogue uma campanha nova — basta abrir a aba de Conquistas.
router.get('/achievements', requireAuth, async (req, res) => {
  try {
    try { await atualizarConquistas(req.user.id); }
    catch (errC) { console.error('[matches] erro ao sincronizar conquistas no GET:', errC); }

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
