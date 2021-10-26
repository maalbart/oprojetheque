-- Verify oprojetheque:init on PG

BEGIN;

-- -- the WHERE false is a little trick to avoid getting/ recover all the data
SELECT id, name, logo, starting_date, ending_date FROM promo WHERE false;
SELECT id, firstname, lastname, email, password, biography, avatar, id_promo, id_project FROM student WHERE false;
SELECT id, name, logo, description, site_link, site_screen, youtube_link, id_promo FROM project WHERE false;
SELECT id, firstname, lastname, email, password, job_title, avatar FROM administrator WHERE false;
SELECT id_administrator, id_promo FROM supervise WHERE false;

ROLLBACK;
