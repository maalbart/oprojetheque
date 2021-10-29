-- Deploy oprojetheque:newTableRole to pg
BEGIN;

INSERT INTO "promo" ("id", "name", "logo", "starting_date", "ending_date") VALUES
(1, 'Valhalla', 'lien', '2021-06-07', '2021-11-19'),
(2, 'Astro', 'lien', '2021-01-04', '2021-06-19'),
(3, 'Tipix', 'lien', '2021-05-03', '2021-10-15');

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


INSERT INTO "therole" ("id", "name") VALUES
(1, 'administrator'),
(2, 'student');

INSERT INTO "theuser" ("id", "firstname", "lastname","email","password", "biography","avatar","id_promo","id_project", "id_therole") VALUES
(1, 'Julien', 'Politi', 'julien@yahoo.fr', 'valhalla1', 'Développeur Fullstack spécialité React', 'lien', 1, 1, 2),
(2, 'Jean-Charles', 'Trinquet', 'JC@yahoo.fr', 'valhalla2', 'Développeur Fullstack spécialité React', 'lien', 1, 1, 2),
(3, 'Ariana', 'Bredon', 'ariana@yahoo.fr', 'valhalla3', 'Développeuse Fullstack spécialité React', 'lien', 1, 1, 2),
(4, 'Antoine', 'Sauvé', 'antoine@yahoo.fr', 'valhalla4', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 1, 2),
(5, 'Damien', 'Courcoux', 'damien@yahoo.fr', 'valhalla5', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(6, 'Guillaume', 'Bodart', 'guillaume@yahoo.fr', 'valhalla6', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(7, 'Maxence', 'Tassery', 'maxence@yahoo.fr', 'valhalla7', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(8, 'Mickael', 'Orloff', 'mickael@yahoo.fr', 'valhalla8', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(9, 'Alexandre', 'Morvan', 'alexandre@yahoo.fr', 'valhalla9', 'Développeur Fullstack spécialité React', 'lien', 1, 2, 2),
(10, 'Fabien', 'Naveau', 'fabien@yahoo.fr', 'valhalla10', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 3, 2),
(11, 'Frederic', 'Tron', 'fred@yahoo.fr', 'valhalla11', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 3, 2),
(12, 'Yanis', 'Janati', 'yanis@yahoo.fr', 'valhalla12', 'Développeur Fullstack spécialité React', 'lien', 1, 3, 2),
(13, 'Cossi', 'nnh', 'cossi@yahoo.fr', 'valhalla13', 'Développeur Fullstack spécialité React', 'lien', 1, 3, 2),
(14, 'Alexandre', 'Eugène', 'alexandre@yahoo.fr', 'valhalla14', 'Développeur Fullstack spécialité React', 'lien', 1, 3, 2),
(15, 'Thibault', 'Barrat', 'thibault@yahoo.fr', 'valhalla15', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(16, 'Florent', 'Clémenceau', 'florentC@yahoo.fr', 'valhalla16', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(17, 'David', 'Dang', 'david@yahoo.fr', 'valhalla17', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(18, 'Marion', 'Bricout', 'marion@yahoo.fr', 'valhalla18', 'Développeuse Fullstack spécialité React', 'lien', 1, 4, 2),
(19, 'Wilfried', 'Vandamme', 'wilfried@yahoo.fr', 'valhalla19', 'Développeur Fullstack spécialité React', 'lien', 1, 4, 2),
(20, 'Romain', 'Leclerc', 'romain@yahoo.fr', 'valhalla20', 'Développeur Fullstack spécialité React', 'lien', 1, 5, 2),
(21, 'Erwin', 'Bottius', 'erwin@yahoo.fr', 'valhalla21', 'Développeur Fullstack spécialité React', 'lien', 1, 5, 2),
(22, 'Pierre-Marie', 'Ferrand-Eynard', 'pims@yahoo.fr', 'valhalla22', 'Développeur Fullstack spécialité React', 'lien', 1, 5, 2),
(23, 'Benjamin', 'Vasseur', 'benjamin@yahoo.fr', 'valhalla23', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 5, 2),
(24, 'Pierre-Joel', 'PJ', 'pierrejoel@yahoo.fr', 'valhalla24', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 5, 2),
(25, 'Florian', 'Vallois', 'florianV@yahoo.fr', 'valhalla25', 'Développeur Fullstack spécialité React', 'lien', 1, 6, 2),
(26, 'Faustino', 'Piccillo', 'faustino@yahoo.fr', 'valhalla26', 'Développeur Fullstack spécialité React', 'lien', 1, 6, 2),
(27, 'Delphine', 'Estrem-Montjouste', 'delphine@yahoo.fr', 'valhalla27', 'Développeuse Fullstack spécialité React', 'lien', 1, 6, 2),
(28, 'Marc', 'C', 'marc@yahoo.fr', 'valhalla28', 'Développeur Fullstack spécialité React', 'lien', 1, 6, 2),
(29, 'Loic', 'Fort', 'loic@yahoo.fr', 'valhalla29', 'Développeur Fullstack spécialité Data/API','lien', 1, 6, 2),
(30, 'Célia', 'Tocqueville', 'celia.letort@yahoo.fr', 'valhalla30', 'Développeuse Fullstack spécialité Data/API', 'lien', 1, 7, 2),
(31, 'Sophie', 'Bayram', 'sophie.bayram@yahoo.fr', 'valhalla31', 'Développeuse Fullstack spécialité Data/API', 'lien', 1, 7, 2),
(32, 'Elias', 'Gueye', 'elias@yahoo.fr', 'valhalla32', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 7, 2),
(33, 'Emilien', 'Boucherie', 'emilien@yahoo.fr', 'valhalla33', 'Développeur Fullstack spécialité React', 'lien', 1, 7, 2),
(34, 'Morgan', 'Vaysset', 'morgan@yahoo.fr', 'valhalla34', 'Développeuse Fullstack spécialité React', 'lien', 1, 7, 2),
(35, 'Thomas', 'Capo', 'thomas@yahoo.fr', 'valhalla35', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 8, 2),
(36, 'Rémi', 'Henry', 'remiH@yahoo.fr', 'valhalla36', 'Développeur Fullstack spécialité React', 'lien', 1, 8, 2),
(37, 'Paulo', 'Goncalves Ferreira', 'paulo@yahoo.fr', 'valhalla37', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 8, 2),
(38, 'Hélène', 'Loriot', 'helene@yahoo.fr', 'valhalla38', 'Développeuse Fullstack spécialité React', 'lien', 1, 8, 2),
(39, 'Basile', 'Marguerie', 'basile@yahoo.fr', 'valhalla39', 'Développeur Fullstack spécialité React', 'lien', 1, 8, 2),
(40, 'Rémi', 'Vieille', 'remiV@yahoo.fr', 'valhalla40', 'Développeur Fullstack spécialité React', 'lien', 1, 9, 2),
(41, 'Tony', 'Dai', 'tony@yahoo.fr', 'valhalla41', 'Développeur Fullstack spécialité React', 'lien', 1, 9, 2),
(42, 'Jeremy', 'M', 'jeremy@yahoo.fr', 'valhalla42', 'Développeur Fullstack spécialité React', 'lien', 1, 9, 2),
(43, 'Michel', 'Deckert', 'michel@yahoo.fr', 'valhalla43', 'Développeur Fullstack spécialité Data/API', 'lien', 1, 9, 2),
(44, 'Simon', 'Pelletier', 'simon@yahoo.fr', 'oclock1', 'Je suis Helper', 'lien', 1, 1, 1),
(45, 'Benjamin', 'Nougadère', 'benji@yahoo.fr', 'oclock2', 'Je suis Professeur', 'lien', 1, 2, 1),
(46, 'Marc', 'Charton', 'marcc@yahoo.fr', 'oclock3', 'Je suis Helper', 'lien', 1, 3, 1),
(47, 'Jordan', 'B', 'jordan@yahoo.fr', 'oclock4', 'Je suis Helper', 'lien', 1, 4, 1),
(48, 'Benoit', 'NiB', 'Benoit@yahoo.fr', 'oclock5', 'Je suis Professeur', 'lien', 1, 5, 1),
(49, 'Clément', 'Uther', 'clement@yahoo.fr', 'oclock6', 'Je suis Professeur', 'lien', 1, 6, 1),
(50, 'Alexis', 'Batman', 'alexis@yahoo.fr', 'oclock7', 'Je suis Professeur', 'lien', 1, 7, 1),
(51, 'Yann', 'Robin', 'yann@yahoo.fr', 'oclock8', 'Je suis Professeur', 'lien', 1, 8, 1),
(52, 'Quentin', 'Logie', 'quentin@yahoo.fr', 'oclock9', 'Je suis Professeur', 'lien', 1, 9, 1);

-- PostGres with type serial does not automatically increment the sequence attached to the column!
-- It is therefore necessary to update the current value of each of the sequences by selecting the maximum id of each table
 -- When inserting another row in one of the tables, the id will be incremented automatically from the max id, no duplicate id possibleSELECT setval('promo_id_seq', (SELECT MAX(id) FROM "promo"));
SELECT setval('theuser_id_seq', (SELECT MAX(id) FROM "theuser"));
SELECT setval('project_id_seq', (SELECT MAX(id) FROM "project"));
SELECT setval('therole_id_seq', (SELECT MAX(id) FROM "therole"));


COMMIT;
