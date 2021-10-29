-- Verify oprojetheque:init on PG

BEGIN;

-- the WHERE false is a little trick to avoid getting/ recover all the data
SELECT id, name, logo, starting_date, ending_date FROM promo WHERE false;
SELECT id, name, logo, description, site_link, site_screen, youtube_link, id_promo FROM project WHERE false;
SELECT * FROM theuser;
SELECT * FROM therole; 

ROLLBACK;
