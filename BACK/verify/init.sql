-- Verify oprojetheque:init on pg

BEGIN;

SELECT id,name ,logo ,starting_date ,ending_date FROM promo WHERE false;
SELECT id, firstname, lastname, email, password, biography, avatar FROM student WHERE false;
SELECT id, name, logo, description, site_link, site_screen, youtube_link FROM project WHERE false;
SELECT id,firstname, lastname, email, password, job_title, avatar FROM administrator WHERE false;

ROLLBACK;
