FROM node:20-alpine
WORKDIR /app

# Install dependencies (separate layer for caching)
COPY api/package.json ./
RUN npm install --omit=dev

# Copy API source (node_modules excluded via .dockerignore)
COPY api/ .

# Migrations
COPY db/migrations/ ./db/migrations/

# Static player data files (loader.js reads from __dirname/futebol/ = /app/dados/futebol/)
# Reorganizados em subpastas por esporte (ago/2026): os dados de futebol vivem em
# js/dados/futebol/ no repo e são copiados para /app/dados/futebol/ no container.
COPY js/dados/futebol/libertadores.js ./dados/futebol/libertadores.js
COPY js/dados/futebol/champions.js    ./dados/futebol/champions.js
COPY js/dados/futebol/brasileirao.js  ./dados/futebol/brasileirao.js
COPY js/dados/futebol/copa.js         ./dados/futebol/copa.js

# Sports catalog (single source of truth, shared with the frontend).
# Read by api/esportes-catalogo.js — which must NOT be named esportes.js,
# or `COPY api/ .` above would clash with this file.
COPY js/esportes.js ./esportes.js

EXPOSE 3000
CMD ["node", "server.js"]