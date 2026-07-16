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
      'SELECT id, username, email, nome_do_time, escudo, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// Padrões que o EDITOR libera. Lista FECHADA de propósito:
//  · os dedicados (barcelona-equ, milan, bayern, atletico-mad, villarreal, lyon, dortmund,
//    juventus, real-madrid) são o brasão de um clube real — não fazem sentido como opção;
//  · `tri-v` está FORA porque é quebrado: pinta o 2º e o 3º terço, não o 1º e o 3º.
//    Não se expõe padrão torto ao usuário.
// ⚠️ Todo nome aqui TEM de existir como `case` em js/escudos.js. Padrão inexistente não dá
// erro: cai no default e o escudo sai SORTEADO pela seed — errado, e calado.
const PADROES_ESCUDO = [
  'solido', 'listras-v', 'listras-h', 'listras-finas', 'metade', 'diagonal', 'diagonal-inv',
  'faixa-v', 'faixa-h', 'faixa-bicolor', 'tri-h', 'tri-v-base', 'quartos', 'cruz',
];

const escudoSchema = z.object({
  padrao: z.enum(PADROES_ESCUDO),
  // 2 ou 3 cores: a 3ª é opcional e o gerador já a consome (o.cores[3] / tri-v-base).
  cores:  z.array(z.string().regex(/^#[0-9a-fA-F]{6}$/, 'cor deve ser hex #RRGGBB')).min(2).max(3),
  n:      z.number().int().min(2).max(8).optional(),      // nº de listras
  larg:   z.number().min(0.1).max(0.9).optional(),        // largura da faixa
}).strict();

const patchSchema = z.object({
  // null = "apagar meu escudo, voltar ao círculo da inicial"
  escudo:       escudoSchema.nullable().optional(),
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
  // JSONB: o pg serializa objeto para JSON sozinho; null limpa a coluna.
  if (d.escudo       !== undefined) add('escudo',       d.escudo === null ? null : JSON.stringify(d.escudo));

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
      `UPDATE users SET ${sets.join(', ')} WHERE id = $1 RETURNING id, username, email, nome_do_time, escudo`,
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

// DELETE /me — exclui a própria conta (LGPD: direito à eliminação).
// Exige a senha atual. O ON DELETE CASCADE do schema remove em cascata as
// partidas (matches) e a participação em salas (room_players); salas em que o
// usuário era host ficam com host_user_id = NULL (ON DELETE SET NULL).
const deleteSchema = z.object({
  senha: z.string().min(1, 'Informe sua senha para confirmar'),
}).strict();

router.delete('/', async (req, res) => {
  const parsed = deleteSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0].message });
  }

  try {
    const { rows } = await pool.query('SELECT password_hash FROM users WHERE id = $1', [req.user.id]);
    if (!rows.length) return res.status(404).json({ error: 'Usuário não encontrado' });

    const ok = await bcrypt.compare(parsed.data.senha, rows[0].password_hash);
    if (!ok) return res.status(400).json({ error: 'Senha incorreta' });

    await pool.query('DELETE FROM users WHERE id = $1', [req.user.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

module.exports = router;
