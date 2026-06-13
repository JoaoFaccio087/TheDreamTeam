FROM node:20-alpine
WORKDIR /app

# Install dependencies (separate layer for caching)
COPY api/package.json ./
RUN npm install --omit=dev

# Copy API source (node_modules excluded via .dockerignore)
COPY api/ .

# Migrations
COPY db/migrations/ ./db/migrations/

# Static player data files (loader.js reads from __dirname = /app/dados/)
COPY js/dados/libertadores.js ./dados/libertadores.js
COPY js/dados/champions.js    ./dados/champions.js
COPY js/dados/brasileirao.js  ./dados/brasileirao.js

EXPOSE 3000
CMD ["node", "server.js"]
