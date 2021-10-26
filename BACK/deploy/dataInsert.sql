-- Deploy oprojetheque:dataInsert to PG

BEGIN;

INSERT INTO "promo" ("id", "name", "logo", "starting_date", "ending_date") VALUES
('1', 'Valhalla', 'lien', '2021-06-07', '2021-11-19'),
('2', 'Astro', 'lien', '2021-01-04', '2021-06-19'),
('3', 'Tipix', 'lien', '2021-05-03', '2021-10-15');

INSERT INTO "student" ("id", "firstname", "lastname", "email", "password", "biography", "avatar") VALUES
('1', 'Célia', 'Tocqueville', 'celia.letort@yahoo.fr', 'valhalla1', 'Developpeuse Fullstack spécialité Data/API', 'lien'),
('2', 'Sophie', 'Bayram', 'sophie.brayham@yahoo.fr', 'valhalla2', 'Développeuse Fullstack spécialité Data/API', 'lien'),
('3', 'Elias', 'Luci', 'elias@yahoo.fr', 'valhalla3', 'Développeur Fullstack spécialité Data/API', 'lien'),
('4', 'Emilien', 'Boucherie', 'emilien@yahoo.fr', 'valhalla4', 'Développeur Fullstack spécialité React', 'lien'),
('5', 'Morgan', 'O', 'morgan@yahoo.fr', 'valhalla5', 'Développeuse Fullstack spécialité React', 'lien'),
('6', 'Julien', 'Politi', 'julien@yahoo.fr', 'valhalla6', 'Développeur Fullstack spécialité React', 'lien'),
('7', 'Jean-CHarles', 'Trinquet', 'JC@yahoo.fr', 'valhalla7', 'Développeur Fullstack spécialité React', 'lien'),
('8', 'Ariana', 'Bredon', 'ariana@yahoo.fr', 'valhalla8', 'Développeuse Fullstack spécialité React', 'lien'),
('9', 'Antoine', 'Sauvé', 'antoine@yahoo.fr', 'valhalla9', 'Développeur Fullstack spécialité Data/API', 'lien'),
('10', 'Damien', 'Courcoux', 'damien@yahoo.fr', 'valhalla10', 'Développeur Fullstack spécialité React', 'lien'),
('11', 'Guillaume', 'Bodart', 'guillaume@yahoo.fr', 'valhalla11', 'Développeur Fullstack spécialité React', 'lien'),
('12', 'Maxence', 'Tassery', 'maxence@yahoo.fr', 'valhalla12', 'Développeur Fullstack spécialité React', 'lien'),
('13', 'Mickael', 'Orloff', 'mickael@yahoo.fr', 'valhalla13', 'Développeur Fullstack spécialité React', 'lien'),
('14', 'Alexandre', 'Morvan', 'alexandre@yahoo.fr', 'valhalla14', 'Développeur Fullstack spécialité React', 'lien'),
('15', 'Fabien', 'Naveau', 'fabien@yahoo.fr', 'valhalla15', 'Développeur Fullstack spécialité Data/API', 'lien'),
('16', 'Fred', 'Tron', 'fred@yahoo.fr', 'valhalla16', 'Développeur Fullstack spécialité Data/API', 'lien'),
('17', 'Yanis', 'Janati', 'yanis@yahoo.fr', 'valhalla17', 'Développeur Fullstack spécialité React', 'lien'),
('18', 'Cossi', 'nnh', 'cossi@yahoo.fr', 'valhalla18', 'Développeur Fullstack spécialité React', 'lien'),
('19', 'Alexandre', 'Eugène', 'alexanderE@yahoo.fr', 'valhalla19', 'Développeur Fullstack spécialité React', 'lien'),
('20', 'Thibault', 'Barrat', 'thibault@yahoo.fr', 'valhalla20', 'Développeur Fullstack spécialité React', 'lien'),
('21', 'Florent', 'Clémenceau', 'florentC@yahoo.fr', 'valhalla21', 'Développeur Fullstack spécialité React', 'lien'),
('22', 'David', 'Dang', 'david@yahoo.fr', 'valhalla22', 'Développeur Fullstack spécialité React', 'lien'),
('23', 'Marion', 'Bricout', 'marion@yahoo.fr', 'valhalla23', 'Développeuse Fullstack spécialité React', 'lien'),
('24', 'Wilfried', 'Vandamme', 'vilfried@yahoo.fr', 'valhalla24', 'Développeur Fullstack spécialité React', 'lien'),
('25', 'Romain', 'R', 'romain@yahoo.fr', 'valhalla25', 'Développeur Fullstack spécialité React', 'lien'),
('26', 'Erwin', 'Bottius', 'erwin@yahoo.fr', 'valhalla26', 'Développeur Fullstack spécialité React', 'lien'),
('27', 'Pierre-Marie', 'Ferrand-Eynard', 'pims@yahoo.fr', 'valhalla27', 'Développeur Fullstack spécialité React', 'lien'),
('28', 'Benjamin', 'Vasseur', 'benjamin@yahoo.fr', 'valhalla28', 'Développeur Fullstack spécialité Data/API', 'lien'),
('29', 'Pierre-Joel', 'PJ', 'pierrejoel@yahoo.fr', 'valhalla29', 'Développeur Fullstack spécialité Data/API', 'lien'),
('30', 'Florian', 'Vallois', 'florianV@yahoo.fr', 'valhalla30', 'Développeur Fullstack spécialité React', 'lien'),
('31', 'Faustino', 'Piccillo', 'faustino@yahoo.fr', 'valhalla31', 'Développeur Fullstack spécialité React', 'lien'),
('32', 'Delphine', 'Estrem-Montjouste', 'delphine@yahoo.fr', 'valhalla32', 'Développeuse Fullstack spécialité React', 'lien'),
('33', 'Marc', 'C', 'marc@yahoo.fr', 'valhalla33', 'Développeur Fullstack spécialité React', 'lien'),
('34', 'Loic', 'Fort', 'loic@yahoo.fr', 'valhalla34', 'Développeur Fullstack spécialité Data/API','lien'),
('35', 'Thomas', 'Capo', 'thomas@yahoo.fr', 'valhalla35', 'Développeur Fullstack spécialité Data/API', 'lien'),
('36', 'Rémi', 'Henri', 'remiH@yahoo.fr', 'valhalla36', 'Développeur Fullstack spécialité React', 'lien'),
('37', 'Paulo', 'Goncalves Ferreira', 'paulo@yahoo.fr', 'valhalla37', 'Développeur Fullstack spécialité Data/API', 'lien'),
('38', 'Hélène', 'Loriot', 'helene@yahoo.fr', 'valhalla38', 'Développeuse Fullstack spécialité React', 'lien'),
('39', 'Basile', 'Marguerie', 'basile@yahoo.fr', 'valhalla39', 'Développeur Fullstack spécialité React', 'lien'),
('40', 'Rémi', 'Vieille', 'remiV@yahoo.fr', 'valhalla40', 'Développeur Fullstack spécialité React', 'lien'),
('41', 'Tony', 'Dai', 'tony@yahoo.fr', 'valhalla41', 'Développeur Fullstack spécialité React', 'lien'),
('42', 'Jeremy', 'M', 'jeremy@yahoo.fr', 'valhalla42', 'Développeur Fullstack spécialité React', 'lien'),
('43', 'Michel', 'Deckert', 'michel@yahoo.fr', 'valhalla43', 'Développeur Fullstack spécialité Data/API', 'lien');

INSERT INTO "project" ("id", "name", "logo", "descritpion", "site_link", "site_screen", "youtube_link") VALUES
('1', 'Le mur', 'lien', 'Un espae de travail commun avec des personnes qui opèrent dans le même milieu créatif ', 'lien', 'lien', 'lien'),
('2', 'Livre Hero', 'lien', 'Une histoire dont on est le héros', 'lien', 'lien', 'lien'),
('3', 'Kid Oz Anges', 'lien', 'Répertoire d activitées pour enfants', 'lien', 'lien', 'lien'),
('4', 'Mentor me', 'lien', 'Plateforme d entraide', 'lien', 'lien', 'lien'),
('5', 'Paradize', 'lien', 'Recherche de lieu de vacances', 'lien', 'lien', 'lien'),
('6', 'Compostons', 'lien', 'Géolocalisation et tuto pour le compostage', 'lien', 'lien', 'lien'),
('7', 'oProjetheque', 'lien', 'Listing des projets d apothéose des étudiants de l école o clock', 'lien', 'lien', 'lien'),
('8', 'LDO transport', 'lien', 'Logistique de transport', 'lien', 'lien', 'lien'),
('9', 'Bristol', 'lien', 'Site collaboratif de partage de fiches méthodologiques', 'lien', 'lien', 'lien');

INSERT INTO "administrator" ("id", "firstname", "lastname", "email", "password", "job_title", "avatar") VALUES
('1', 'Simon', 'Pelletier', 'simon@yahoo.fr', 'oclock1', 'Helper', 'lien'),
('2', 'Marc', 'Charton', 'marcc@yahoo.fr', 'oclock2', 'Helper', 'lien'),
('3', 'Jordan', 'B', 'jordan@yahoo.fr', 'oclock3', 'Helper', 'lien'),
('4', 'Benjamin', 'Nougadère', 'benji@yahoo.fr', 'oclock4', 'Professeur', 'lien');


COMMIT;


BEGIN;

-- PostGres with type serial does not automatically increment the sequence attached to the column!
-- It is therefore necessary to update the current value of each of the sequences by selecting the maximum id of each table
-- When inserting another row in one of the tables, the id will be incremented automatically, no duplicate id possible

SELECT nextval('promo_id_seq', (SELECT MAX(id) FROM "promo"));
SELECT nextval('student_id_seq', (SELECT MAX(id) FROM "student"));
SELECT nextval('project_id_seq', (SELECT MAX(id) FROM "project"));
SELECT nextval('administrator_id_seq', (SELECT MAX(id) FROM "administrator"));



COMMIT;