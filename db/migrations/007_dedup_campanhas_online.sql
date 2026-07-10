-- 007_dedup_campanhas_online.sql
--
-- Corrige a DUPLICAÇÃO de campanhas do Brasileirão online.
--
-- Causa: no formato liga, `emitirFimDeJogo` (api/socket/index.js) inseria uma linha por jogador
-- humano E o cliente também gravava via POST /matches (js/online.js → salvarCampanhaOnline).
-- Resultado: a mesma campanha aparecia duas vezes no histórico e contava em dobro nas
-- estatísticas. No mata-mata isso não acontecia (só o cliente gravava).
--
-- A gravação do servidor foi removida. Esta migração limpa o que já ficou no banco.
--
-- As duas linhas são distinguíveis pelo JSONB `detalhes`:
--   servidor → { "sala": "AB12", "rodadas": 38, "numPicks": 11 }   (tem a chave 'sala')
--   cliente  → { "online": true }                                   (tem a chave 'online')
--
-- CONSERVADOR de propósito: só apaga a linha do SERVIDOR quando existe a linha GÊMEA do cliente
-- (mesmo usuário, mesmo placar, no mesmo dia). Se por algum motivo só existir a do servidor
-- (ex.: o jogador fechou a aba antes do fim), ela é PRESERVADA — melhor uma campanha órfã do
-- que uma campanha perdida.

DELETE FROM matches AS servidor
WHERE servidor.modo = 'online'
  AND servidor.detalhes ? 'sala'
  AND EXISTS (
    SELECT 1
      FROM matches AS cliente
     WHERE cliente.user_id  = servidor.user_id
       AND cliente.modo     = 'online'
       AND cliente.detalhes ? 'online'
       AND cliente.vitorias = servidor.vitorias
       AND cliente.empates  = servidor.empates
       AND cliente.derrotas = servidor.derrotas
       AND cliente.gf       = servidor.gf
       AND cliente.ga       = servidor.ga
       AND cliente.played_at BETWEEN servidor.played_at - INTERVAL '1 day'
                                 AND servidor.played_at + INTERVAL '1 day'
  );
