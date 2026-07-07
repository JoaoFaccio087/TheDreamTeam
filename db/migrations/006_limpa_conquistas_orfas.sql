-- 006_limpa_conquistas_orfas.sql — remove registros de conquistas que foram RENOMEADAS
-- ou removidas do catálogo (o achievement_id antigo fica órfão na tabela e não aparece mais
-- na UI, mas ocupa espaço). Idempotente: rodar de novo não faz mal.
--
-- Renomeações conhecidas:
--   'sete_a_zero' → 'rolo_compressor' (a lógica "7 vitórias/0 derrotas" era injusta em
--    competições curtas; virou "campeão invicto + saldo alto"). O id mudou, então o registro
--    antigo é descartado — o novo desbloqueia sozinho no próximo cálculo (GET/POST de conquistas).
DELETE FROM achievements WHERE achievement_id IN (
  'sete_a_zero'
);
