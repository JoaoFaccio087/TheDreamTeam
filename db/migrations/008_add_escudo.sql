-- 008_add_escudo.sql — escudo personalizado do usuário.
--
-- POR QUÊ JSONB E NÃO COLUNAS SOLTAS: o escudo é { padrao, cores: [...] } — exatamente o
-- formato que `ESTILO_CLUBES` já usa em js/escudos-cores.js e que `Escudos.porNome()` já
-- sabe desenhar. Guardar assim significa ZERO tradução entre banco e gerador. Se amanhã
-- um padrão ganhar uma chave nova (`larg`, `n`…), o banco não muda.
--
-- NULL É O PADRÃO E É PROPOSITAL: NULL = "usuário nunca editou". Quem não editar continua
-- com o círculo verde da inicial no Perfil e SEM escudo no jogo, exatamente como hoje.
-- A partir do primeiro save o escudo aparece. Nada muda para quem não pediu nada.
--
-- (idempotente: IF NOT EXISTS — a migração roda a cada boot, mas o migrate.js pula as já
--  aplicadas via tabela _migrations; o IF NOT EXISTS é cinto de segurança.)

ALTER TABLE users ADD COLUMN IF NOT EXISTS escudo JSONB;
