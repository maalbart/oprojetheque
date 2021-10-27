-- Revert oprojetheque:init from pg

BEGIN;

DROP TABLE IF EXISTS promo, student, project, administrator, supervise ;

COMMIT;
