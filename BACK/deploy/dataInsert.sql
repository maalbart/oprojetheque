-- Deploy oprojetheque:dataInsert to pg

BEGIN;

INSERT INTO "promo" ("name", "logo", "starting_date", "ending_date") VALUES
('Valhalla', 'lien', '2021-06-07', '2021-11-19'),
('Astro', 'lien', '2021-01-04', '2021-06-19'),
('Tipix', 'lien', '2021-05-03', '2021-10-15');

INSERT INTO "student" ("firstname", "lastname", "email", "password", "biography", "avatar") VALUES('Célia', 'Tocqueville', 'celia.letort@yahoo.fr', 'valhalla1', 'Developpeuse Fullstack spécialité Data/API', 'lien'),
('Sophie', 'Bayram', 'sophie.brayham@yahoo.fr', 'valhalla2', 'Developpeuse Fullstack spécialité Data/API', 'lien'),
('Elias', 'Luci', 'Elias@yahoo.fr', 'valhalla3', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Emilien', 'Boucherie', 'emilien@yahoo.fr', 'valhalla4', 'Developpeur Fullstack spécialité React', 'lien'),
('Morgan', 'O', 'morgan@yahoo.fr', 'valhalla5', 'Developpeuse Fullstack spécialité React', 'lien'),
('Julien', 'Politi', 'julien@yahoo.fr', 'valhalla6', 'Developpeur Fullstack spécialité React', 'lien'),
('Jean-CHarles', 'Trinquet', 'JC@yahoo.fr', 'valhalla7', 'Developpeur Fullstack spécialité React', 'lien'),
('Ariana', 'Bredon', 'ariana@yahoo.fr', 'valhalla8', 'Developpeuse Fullstack spécialité React', 'lien'),
('Antoine', 'Sauvé', 'antoine@yahoo.fr', 'valhalla9', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Damien', 'Courcoux', 'damien@yahoo.fr', 'valhalla10', 'Developpeur Fullstack spécialité React', 'lien'),
('Guillaume', 'Bodart', 'guillaume@yahoo.fr', 'valhalla11', 'Developpeur Fullstack spécialité React', 'lien'),
('Maxence', 'Tassery', 'maxence@yahoo.fr', 'valhalla12', 'Developpeur Fullstack spécialité React', 'lien'),
('Mickael', 'Orloff', 'mickael@yahoo.fr', 'valhalla13', 'Developpeur Fullstack spécialité React', 'lien'),
('Alexandre', 'Morvan', 'alexandre@yahoo.fr', 'valhalla14', 'Developpeur Fullstack spécialité React', 'lien'),
('Fabien', 'Naveau', 'fabien@yahoo.fr', 'valhalla15', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Fred', 'Tron', 'fred@yahoo.fr', 'valhalla16', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Yanis', 'Janati', 'yanis@yahoo.fr', 'valhalla17', 'Developpeur Fullstack spécialité React', 'lien'),
('Cossi', 'nnh', 'cossi@yahoo.fr', 'valhalla18', 'Developpeur Fullstack spécialité React', 'lien'),
('Alexandre', 'Eugène', 'alexanderE@yahoo.fr', 'valhalla19', 'Developpeur Fullstack spécialité React', 'lien'),
('Thibault', 'Barrat', 'thibault@yahoo.fr', 'valhalla20', 'Developpeur Fullstack spécialité React', 'lien'),
('Florent', 'Clémenceau', 'florentC@yahoo.fr', 'valhalla21', 'Developpeur Fullstack spécialité React', 'lien'),
('David', 'Dang', 'david@yahoo.fr', 'valhalla22', 'Developpeur Fullstack spécialité React', 'lien'),
('Marion', 'Bricout', 'marion@yahoo.fr', 'valhalla23', 'Developpeuse Fullstack spécialité React', 'lien'),
('Wilfried', 'Vandamme', 'vilfried@yahoo.fr', 'valhalla24', 'Developpeur Fullstack spécialité React', 'lien'),
('Romain', 'R', 'romain@yahoo.fr', 'valhalla25', 'Developpeur Fullstack spécialité React', 'lien'),
('Erwin', 'Bottius', 'erwin@yahoo.fr', 'valhalla26', 'Developpeur Fullstack spécialité React', 'lien'),
('Pierre-Marie', 'Ferrand-Eynard', 'pims@yahoo.fr', 'valhalla27', 'Developpeur Fullstack spécialité React', 'lien'),
('Benjamin', 'Vasseur', 'benjamin@yahoo.fr', 'valhalla28', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Pierre-Joel', 'PJ', 'pierrejoel@yahoo.fr', 'valhalla29', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Florian', 'Vallois', 'florianV@yahoo.fr', 'valhalla30', 'Developpeur Fullstack spécialité React', 'lien'),
('Faustino', 'Piccillo', 'faustino@yahoo.fr', 'valhalla31', 'Developpeur Fullstack spécialité React', 'lien'),
('Delphine', 'Estrem-Montjouste', 'delphine@yahoo.fr', 'valhalla32', 'Developpeuse Fullstack spécialité React', 'lien'),
('Marc', 'C', 'marc@yahoo.fr', 'valhalla33', 'Developpeur Fullstack spécialité React', 'lien'),
('Loic', 'Fort', 'loic@yahoo.fr', 'valhalla34', 'Developpeur Fullstack spécialité Data/API', 
'lien'),
('Thomas', 'Capo', 'thomas@yahoo.fr', 'valhalla35', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Rémi', 'Henri', 'remiH@yahoo.fr', 'valhalla36', 'Developpeur Fullstack spécialité React', 'lien'),
('Paulo', 'Goncalves Ferreira', 'paulo@yahoo.fr', 'valhalla37', 'Developpeur Fullstack spécialité Data/API', 'lien'),
('Hélène', 'Loriot', 'helene@yahoo.fr', 'valhalla38', 'Developpeuse Fullstack spécialité React', 'lien'),
('Basile', 'Marguerie', 'basile@yahoo.fr', 'valhalla39', 'Developpeur Fullstack spécialité React', 'lien'),
('Rémi', 'Vieille', 'remiV@yahoo.fr', 'valhalla40', 'Developpeur Fullstack spécialité React', 'lien'),
('Tony', 'Dai', 'tony@yahoo.fr', 'valhalla41', 'Developpeur Fullstack spécialité React', 'lien'),
('Jeremy', 'M', 'jeremy@yahoo.fr', 'valhalla42', 'Developpeur Fullstack spécialité React', 'lien'),
('Michel', 'Deckert', 'michel@yahoo.fr', 'valhalla43', 'Developpeur Fullstack spécialité Data/API', 'lien');

INSERT INTO "project" ("name", "logo", "descritpion", "site_link", "site_screen", "youtube_link") VALUES
('Le mur', 'lien', 'Un espae de travail commun avec des personnes qui opèrent dans le même milieu créatif ', 'lien', 'lien', 'lien'),
('Livre Hero', 'lien', 'Une histoire dont on est le héro', 'lien', 'lien', 'lien'),
('Kid Oz Anges', 'lien', 'Répertoire d activitées pour enfants', 'lien', 'lien', 'lien'),
('Mentor me', 'lien', 'Plateforme d entraide', 'lien', 'lien', 'lien'),
('Paradize', 'lien', 'Recherche de lieu de vacances', 'lien', 'lien', 'lien'),
('Compostons', 'lien', 'Geolocalisation et tuto pour le compostage', 'lien', 'lien', 'lien'),
('oProjetheque', 'lien', 'Listing des projets d apothéose des étudiants de l ecole o clock', 'lien', 'lien', 'lien'),
('LDO transport', 'lien', 'Logistique de transport', 'lien', 'lien', 'lien'),
('Bristol', 'lien', 'Site collaboratif de partage de fiches méthodologiques', 'lien', 'lien', 'lien');

INSERT INTO "administrator" ("firstname", "lastname", "email", "password", "job_title", "avatar") VALUES
('Simon', 'Pelletier', 'simon@yahoo.fr', 'oclock1', 'Helper', 'lien'),
('Marc', 'Charton', 'marcc@yahoo.fr', 'oclock2', 'Helper', 'lien'),
('Jordan', 'B', 'jordan@yahoo.fr', 'oclock3', 'Helper', 'lien'),
('Benjamin', 'Nougadère', 'benji@yahoo.fr', 'oclock4', 'Professeur', 'lien');


COMMIT;
