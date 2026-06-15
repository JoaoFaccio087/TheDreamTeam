const http    = require('http');
const express = require('express');
const cors    = require('cors');
const migrate = require('./migrate');
const seed    = require('./seed');

const app    = express();
const server = http.createServer(app);
const PORT   = parseInt(process.env.PORT || '3000', 10);

// Handlers globais: logam e MANTÊM o processo de pé. Um erro solto em uma sala não
// deve derrubar o servidor inteiro (e, com ele, todas as outras salas em andamento).
process.on('uncaughtException',  (err)    => console.error('[uncaughtException]', err));
process.on('unhandledRejection', (reason) => console.error('[unhandledRejection]', reason));

// Trava de segurança: não sobe sem um JWT_SECRET forte (evita rodar com
// segredo vazio/fraco, o que tornaria os tokens forjáveis).
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 16) {
  console.error('FATAL: defina JWT_SECRET (mínimo 16 caracteres) nas variáveis de ambiente.');
  process.exit(1);
}

// Origens permitidas (CORS). Aceita uma lista separada por vírgula em FRONTEND_URL,
// ex.: "https://thedreamteam.com.br,https://joaofaccio087.github.io".
// '*' libera qualquer origem (use só em desenvolvimento).
const FRONTEND_URL = process.env.FRONTEND_URL || '*';
const ORIGENS = FRONTEND_URL.split(',').map(s => s.trim()).filter(Boolean);
const corsOrigin = FRONTEND_URL === '*'
  ? true
  : function (origin, cb) {
      // Sem header Origin (curl, health checks do Render) é liberado.
      if (!origin || ORIGENS.includes(origin)) return cb(null, true);
      return cb(new Error('Origem não permitida pelo CORS'));
    };

app.use(cors({
  origin:      corsOrigin,
  credentials: true,
}));
app.use(express.json({ limit: '64kb' }));

// Socket.IO
const { setupSocket } = require('./socket');
setupSocket(server, FRONTEND_URL);

// Rotas
app.use('/auth',    require('./routes/auth'));
app.use('/me',      require('./routes/users'));
app.use('/matches', require('./routes/matches'));
app.use('/ranking', require('./routes/ranking'));
app.use('/rooms',   require('./routes/rooms'));

app.get('/health', (_, res) => res.json({ ok: true, ts: Date.now() }));

migrate()
  .then(() => seed())
  .then(() => {
    server.listen(PORT, () => console.log(`API + WS rodando na porta ${PORT}`));
  })
  .catch(err => {
    console.error('Falha ao inicializar:', err);
    process.exit(1);
  });
