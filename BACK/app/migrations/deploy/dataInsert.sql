-- Deploy oprojetheque:newTableRole to pg
BEGIN;


---------------------------
-- Table "therole"
---------------------------
INSERT INTO "therole" ("id", "name") VALUES
(1, 'administrator'),
(2, 'student');


---------------------------
-- Table "promo"
---------------------------
INSERT INTO "promo" ("id", "name", "logo", "starting_date", "ending_date") VALUES
(1, 'Valhalla', 'lien', '2021-06-07', '2021-11-19'),
(2, 'Astro', 'lien', '2021-01-04', '2021-06-19'),
(3, 'Tipix', 'lien', '2021-05-03', '2021-10-15');


---------------------------
-- Table "project"
---------------------------
INSERT INTO "project" ("id", "name", "logo", "description", "site_link", "site_screen", "youtube_link", "id_promo") VALUES
(1, 'Le mur', 'lien', 'Un espace de travail commun avec des personnes qui opèrent dans le même milieu créatif ', 'lien', 'lien', 'lien', 1),
(2, 'Livre Hero', 'lien', 'Une histoire dont on est le héros', 'lien', 'lien', 'lien', 1),
(3, 'Kid Oz Anges', 'lien', 'Répertoire d activitées pour enfants', 'lien', 'lien', 'lien', 1),
(4, 'Mentor me', 'lien', 'Plateforme d entraide', 'lien', 'lien', 'lien', 1),
(5, 'Paradize', 'lien', 'Recherche de lieu de vacances', 'lien', 'lien', 'lien', 1),
(6, 'Compostons', 'lien', 'Géolocalisation et tuto pour le compostage', 'lien', 'lien', 'lien', 1),
(7, 'oProjetheque', 'lien', 'Listing des projets d apothéose des étudiants de l école o clock', 'lien', 'lien', 'lien', 1),
(8, 'LDO transport', 'lien', 'Logistique de transport', 'lien', 'lien', 'lien', 1),
(9, 'Bristol', 'lien', 'Site collaboratif de partage de fiches méthodologiques', 'lien', 'lien', 'lien', 1);


---------------------------
-- Table "theuser"
---------------------------
INSERT INTO "theuser" ("id", "firstname", "lastname","email","password", "biography","avatar","id_promo","id_project", "id_therole") VALUES
(1, 'Julien', 'Politi', 'julien@oclock.io', 'valhalla1', 'Développeur Fullstack spécialité React', 'lien', 1, 1, 2),
(2, 'Jean-Charles', 'Trinquet', 'JC@oclock.io', 'valhalla2', 'Développeur Fullstack spécialité React', 'lien', 1, 1, 2),
(3, 'Ariana', 'Bredon', 'ariana@oclock.io', 'valhalla3', 'Développeuse Fullstack spécialité React', 'lien', 1, 1, 2),
(4, 'Antoine', 'Sauvé', 'antoine@oclock.io', 'valhalla4', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 1, 2),
(5, 'Damien', 'Courcoux', 'damien@oclock.io', 'valhalla5', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(6, 'Guillaume', 'Bodart', 'guillaume@oclock.io', 'valhalla6', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(7, 'Maxence', 'Tassery', 'maxence@oclock.io', 'valhalla7', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(8, 'Mickael', 'Orloff', 'mickael@oclock.io', 'valhalla8', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(9, 'Alexandre', 'Morvan', 'alexandre@oclock.io', 'valhalla9', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(10, 'Fabien', 'Naveau', 'fabien@oclock.io', 'valhalla10', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 3, 2),
(11, 'Frederic', 'Tron', 'fred@oclock.io', 'valhalla11', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 3, 2),
(12, 'Yanis', 'Janati', 'yanis@oclock.io', 'valhalla12', 'Développeur Fullstack spécialité React', 'lien', 1, 3, 2),
(13, 'Cossi', 'Nonnonhou', 'cossi@oclock.io', 'valhalla13', 'Développeur Fullstack spécialité React', 'lien', 1, 3, 2),
(14, 'Alexandre', 'Eugène', 'alexandre@oclock.io', 'valhalla14', 'Développeur Fullstack spécialité React', 'lien', 1, 3, 2),
(15, 'Thibault', 'Barrat', 'thibault@oclock.io', 'valhalla15', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(16, 'Florent', 'Clémenceau', 'florentC@oclock.io', 'valhalla16', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(17, 'David', 'Dang', 'david@oclock.io', 'valhalla17', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(18, 'Marion', 'Bricout', 'marion@oclock.io', 'valhalla18', 'Développeuse Fullstack spécialité React', 'lien', 1, 4, 2),
(19, 'Wilfried', 'Vandamme', 'wilfried@oclock.io', 'valhalla19', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(20, 'Romain', 'Leclerc', 'romain@oclock.io', 'valhalla20', 'Développeur Fullstack spécialité React', 'lien', 1, 5, 2),
(21, 'Erwin', 'Bottius', 'erwin@oclock.io', 'valhalla21', 'Développeur Fullstack spécialité React', 'lien', 1, 5, 2),
(22, 'Pierre-Marie', 'Ferrand-Eynard', 'pims@oclock.io', 'valhalla22', 'Développeur Fullstack spécialité React', 'lien', 1, 5, 2),
(23, 'Benjamin', 'Vasseur', 'benjamin@oclock.io', 'valhalla23', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 5, 2),
(24, 'Pierre-Joel', 'PJ', 'pierrejoel@oclock.io', 'valhalla24', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 5, 2),
(25, 'Florian', 'Vallois', 'florianV@oclock.io', 'valhalla25', 'Développeur Fullstack spécialité React', 'lien', 1, 6, 2),
(26, 'Faustino', 'Piccillo', 'faustino@oclock.io', 'valhalla26', 'Développeur Fullstack spécialité React', 'lien', 1, 6, 2),
(27, 'Delphine', 'Estrem-Montjouste', 'delphine@oclock.io', 'valhalla27', 'Développeuse Fullstack spécialité React', 'lien', 1, 6, 2),
(28, 'Marc', 'Coltat', 'marc@oclock.io', 'valhalla28', 'Développeur Fullstack spécialité React', 'lien', 1, 6, 2),
(29, 'Loic', 'Fort', 'loic@oclock.io', 'valhalla29', 'Développeur Fullstack spécialité Data/API','lien', 1, 6, 2),
(30, 'Célia', 'Tocqueville', 'celia.letort@oclock.io', 'valhalla30', 'Développeuse Fullstack spécialité Data/API', 'lien', 1, 7, 2),
(31, 'Sophie', 'Bayram', 'sophie.bayram@oclock.io', 'valhalla31', 'Développeuse Fullstack spécialité Data/API', 'lien', 1, 7, 2),
(32, 'Elias', 'Gueye', 'elias@oclock.io', 'valhalla32', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 7, 2),
(33, 'Emilien', 'Boucherie', 'emilien@oclock.io', 'valhalla33', 'Développeur Fullstack spécialité React', 'lien', 1, 7, 2),
(34, 'Morgan', 'Veysset', 'morgan@oclock.io', 'valhalla34', 'Développeuse Fullstack spécialité React', 'lien', 1, 7, 2),
(35, 'Thomas', 'Capo', 'thomas@oclock.io', 'valhalla35', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 8, 2),
(36, 'Rémi', 'Henry', 'remiH@oclock.io', 'valhalla36', 'Développeur Fullstack spécialité React', 'lien', 1, 8, 2),
(37, 'Paulo', 'Goncalves Ferreira', 'paulo@oclock.io', 'valhalla37', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 8, 2),
(38, 'Hélène', 'Loriot', 'helene@oclock.io', 'valhalla38', 'Développeuse Fullstack spécialité React', 'lien', 1, 8, 2),
(39, 'Basile', 'Marguerie', 'basile@oclock.io', 'valhalla39', 'Développeur Fullstack spécialité React', 'lien', 1, 8, 2),
(40, 'Rémi', 'Vieille', 'remiV@oclock.io', 'valhalla40', 'Développeur Fullstack spécialité React', 'lien', 1, 9, 2),
(41, 'Tony', 'Dai', 'tony@oclock.io', 'valhalla41', 'Développeur Fullstack spécialité React', 'lien', 1, 9, 2),
(42, 'Jeremy', 'Mikaleff', 'jeremy@oclock.io', 'valhalla42', 'Développeur Fullstack spécialité React', 'lien', 1, 9, 2),
(43, 'Michel', 'Deckert', 'michel@oclock.io', 'valhalla43', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 9, 2),
(44, 'Simon', 'Pelletier', 'simon@oclock.io', 'oclock1', 'Je suis Helper', 'lien', 1, 1, 1),
(45, 'Benjamin', 'Nougadère', 'benji@oclock.io', 'oclock2', 'Je suis Professeur', 'lien', 1, 2, 1),
(46, 'Marc', 'Charton', 'marcc@oclock.io', 'oclock3', 'Je suis Helper', 'lien', 1, 3, 1),
(47, 'Jordan', 'Brull', 'jordan@oclock.io', 'oclock4', 'Je suis Helper', 'lien', 1, 4, 1),
(48, 'Benoit', 'Schiex', 'Benoit@oclock.io', 'oclock5', 'Je suis Professeur', 'lien', 1, 5, 1),
(49, 'Clément', 'Uther', 'clement@oclock.io', 'oclock6', 'Je suis Professeur', 'lien', 1, 6, 1),
(50, 'Alexis', 'Vincent', 'alexis@oclock.io', 'oclock7', 'Je suis Professeur', 'lien', 1, 7, 1),
(51, 'Yann', 'Gouilloux', 'yann@oclock.io', 'oclock8', 'Je suis Professeur', 'lien', 1, 8, 1),
(52, 'Quentin', 'Logie', 'quentin@oclock.io', 'oclock9', 'Je suis Professeur', 'lien', 1, 9, 1);


-- PostGres with type serial does not automatically increment the sequence attached to the column!
-- It is therefore necessary to update the current value of each of the sequences by selecting the maximum id of each table
 -- When inserting another row in one of the tables, the id will be incremented automatically from the max id, no duplicate id possibleSELECT setval('promo_id_seq', (SELECT MAX(id) FROM "promo"));
SELECT setval('theuser_id_seq', (SELECT MAX(id) FROM "theuser"));
SELECT setval('project_id_seq', (SELECT MAX(id) FROM "project"));
SELECT setval('therole_id_seq', (SELECT MAX(id) FROM "therole"));


COMMIT;
