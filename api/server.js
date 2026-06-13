const http    = require('http');
const express = require('express');
const cors    = require('cors');
const migrate = require('./migrate');
const seed    = require('./seed');

const app    = express();
const server = http.createServer(app);
const PORT   = parseInt(process.env.PORT || '3000', 10);

const FRONTEND_URL = process.env.FRONTEND_URL || '*';

app.use(cors({
  origin:      FRONTEND_URL === '*' ? true : FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());

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
