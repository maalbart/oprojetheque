-- Revert oprojetheque:init from pg

BEGIN;

DROP TABLE IF EXISTS promo, project, theuser, therole  ;

COMMIT;
