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
(1, 'Valhalla', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636120089/oProjetheque/logo/logo-valhalla_efxxff.png', '07 juin 2021', '19 novembre 2021'),
(2, 'Astro', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636120087/oProjetheque/logo/logo-promo2_siw77q.png', '04 janvier 2021', '19 juin 2021'),
(3, 'Tipix', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636120084/oProjetheque/logo/logo-promo1_gdvx3y.png', '03 mai 2021', '15 octobre 2021');


---------------------------
-- Table "project"
---------------------------
INSERT INTO "project" ("id", "name", "logo", "description", "site_link", "site_screen", "youtube_link", "id_promo") VALUES
(1, 'Le Mur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636062074/oProjetheque/logo%20project/lemur_logo_ap1etk.png', 'Espace de travail commun avec des personnes qui opèrent dans le même milieu créatif', 'lien', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1635709034/oProjetheque/screen/LeMur_jk1ucq.png', 'lien', 1),
(2, 'Livre Hero', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636062078/oProjetheque/logo%20project/livrehero_t6lnfa.png', 'Histoire dont on est le héros', 'https://ataleofyou.surge.sh/', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636714990/oProjetheque/screen/pageAccueilATaleofYou_r4e7ft.png', 'lien', 1),
(3, 'Kid Oz Anges', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971827/oProjetheque/logo%20project/logo-kidzoanges_wsxxu9.png', 'Espace qui répertorie des activités pour enfants', 'https://kidozanges.netlify.app/', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971915/oProjetheque/screen/kidozanges-homepage_ighsc4.png', 'lien', 1),
(4, 'Mentor Me', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636062080/oProjetheque/logo%20project/mentorme_q4tpbp.png', 'Plateforme pour aider son prochain', 'https://mentor-me-oclock.netlify.app/', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971923/oProjetheque/screen/mentorme-homepage_rqocdd.png', 'lien', 1),
(5, 'oParadize', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636445886/oProjetheque/logo%20project/oparadise-logo_nnfddb.png', 'Recherche de lieu de vacances', 'site', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971920/oProjetheque/screen/oparadize-homepage_1_t5h42s.png', 'lien', 1),
(6, 'CompOstons', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636445880/oProjetheque/logo%20project/ocompostons-logo_fbnuhd.png', 'Géolocalisation et tuto pour le compostage', '#', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971924/oProjetheque/screen/ocompostons-homepage_oanzpk.png', 'lien', 1),
(7, 'oProjethèque', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971810/oProjetheque/logo%20project/LOGO_FINAL_LETS_GO_llgmub.png', 'Listing des projets des étudiants ', 'https://oprojetheque.netlify.app/', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1635512183/oProjetheque/screen/acc_v1_r3cdhc.png', 'lien', 1),
(8, 'LDO Transport', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636062072/oProjetheque/logo%20project/ldo_1_fmnfyr.png', 'Logistique de transport', 'https://ldo-transports.netlify.app/', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636713951/oProjetheque/screen/LDO_transport_fzpbdm.png', 'lien', 1),
(9, 'Bristol', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971821/oProjetheque/logo%20project/logo-bristol_sjve3t.png', 'Site collaboratif de partage de fiches méthodologiques', '#', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971923/oProjetheque/screen/lebristol-homepage_h867j2.png', 'lien', 1),
(10, 'OnRigOle', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971801/oProjetheque/logo%20project/default-logo_alc92i.png', 'Site regroupant des blagues', 'https://www.rireetchansons.fr/blagues', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636973965/oProjetheque/screen/screendefault_ubxut4.png', 'lien', 2),
(11, 'OnTriche', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971801/oProjetheque/logo%20project/default-logo_alc92i.png', 'Site regroupant toutes les réponses des examens nationaux pour avoir une bonne note', 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636973965/oProjetheque/screen/screendefault_ubxut4.png', 'lien', 3);


---------------------------
-- Table "theuser"
---------------------------
INSERT INTO "theuser" ("id", "firstname", "lastname","email","password", "biography","avatar","id_promo","id_project", "id_therole") VALUES
(1, 'Julien', 'Politi', 'julien@oclock.io', 'valhalla1', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffins1_mwgv8l.png', 1, 1, 2),
(2, 'Jean-Charles', 'Trinquet', 'JC@oclock.io', 'valhalla2', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffin2_hm5hdb.png', 1, 1, 2),
(3, 'Ariana', 'Bredon', 'ariana@oclock.io', 'valhalla3', 'Développeuse Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-donuts_z3hip6.png', 1, 1, 2),
(4, 'Antoine', 'Sauvé', 'antoine@oclock.io', 'valhalla4', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-macarons_b4udsg.png', 1, 1, 2),
(5, 'Damien', 'Courcoux', 'damien@oclock.io', 'valhalla5', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/pommes-amour_zq5sik.png', 1, 2, 2),
(6, 'Guillaume', 'Bodart', 'guillaume@oclock.io', 'valhalla6', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/religieuse_2_a46c3r.png', 1, 2, 2),
(7, 'Maxence', 'Tassery', 'maxence@oclock.io', 'valhalla7', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/puit-amour_iqrjbo.png', 1, 2, 2),
(8, 'Mikhael', 'Orloff', 'mickael@oclock.io', 'valhalla8', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/paris-brest_ryggow.png', 1, 2, 2),
(9, 'Alexandre', 'Morvan', 'alexandre@oclock.io', 'valhalla9', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/pain-au-chocolat_uvlihs.png', 1, 2, 2),
(10, 'Fabien', 'Naveau', 'fabien@oclock.io', 'valhalla10', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/muffin-pepites_ddtgxo.png', 1, 3, 2),
(11, 'Frédéric', 'Tron', 'fred@oclock.io', 'valhalla11', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/muffin-choco-vanille_vkibue.png', 1, 3, 2),
(12, 'Yanis', 'Janati', 'yanis@oclock.io', 'valhalla12', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/merveilleux_2_ewdgpd.png', 1, 3, 2),
(13, 'Cossi', 'Nonnonhou', 'cossi@oclock.io', 'valhalla13', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/madeleines_2_yoxivr.png', 1, 3, 2),
(14, 'Alexandre', 'Eugène', 'alexandre@oclock.io', 'valhalla14', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-roses_f1bekg.png', 1, 3, 2),
(15, 'Thibault', 'Barrat', 'thibault@oclock.io', 'valhalla15', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-bleu_nrhccf.png', 1, 4, 2),
(16, 'Florent', 'Clémenceau', 'florentC@oclock.io', 'valhalla16', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macaron-rose_xyakjf.png', 1, 4, 2),
(17, 'David', 'Dang', 'david@oclock.io', 'valhalla17', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-caramel_a79ij9.png', 1, 4, 2),
(18, 'Marion', 'Bricout', 'marion@oclock.io', 'valhalla18', 'Développeuse Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/gateau-choco_l1dvus.png', 1, 4, 2),
(19, 'Wilfried', 'Vandamme', 'wilfried@oclock.io', 'valhalla19', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/gaufres_2_kqfkz2.png', 1, 4, 2),
(20, 'Romain', 'Leclerc', 'romain@oclock.io', 'valhalla20', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/donut-rose_fl6yfo.png', 1, 5, 2),
(21, 'Erwin', 'Bottius', 'erwin@oclock.io', 'valhalla21', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/donut-chocolat_ysbyrl.png', 1, 5, 2),
(22, 'Pierre-Marie', 'Ferrand-Eynard', 'pims@oclock.io', 'valhalla22', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/pims_qm6pjc.png', 1, 5, 2),
(23, 'Benjamin', 'Vasseur', 'benjamin@oclock.io', 'valhalla23', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-bleu_qeb8ik.png', 1, 5, 2),
(24, 'Pierre-Joël', 'Mbabo', 'pierrejoel@oclock.io', 'valhalla24', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-vanille_jx3if5.png', 1, 5, 2),
(25, 'Florian', 'Vallois', 'florianV@oclock.io', 'valhalla25', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-cerise_mvdsbj.png', 1, 6, 2),
(26, 'Faustino', 'Piccillo', 'faustino@oclock.io', 'valhalla26', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-rose_tdgfr0.png', 1, 6, 2),
(27, 'Delphine', 'Estrem-Montjouste', 'delphine@oclock.io', 'valhalla27', 'Développeuse Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cookies_2_vau0ca.png', 1, 6, 2),
(28, 'Marc', 'Coltat', 'marc@oclock.io', 'valhalla28', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffins1_mwgv8l.png', 1, 6, 2),
(29, 'Loïc', 'Fort', 'loic@oclock.io', 'valhalla29', 'Développeur Fullstack spécialité Data/API','https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffin2_hm5hdb.png', 1, 6, 2),
(30, 'Célia', 'Tocqueville', 'celia@oclock.io', 'valhalla30', 'Développeuse Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-donuts_z3hip6.png', 1, 7, 2),
(31, 'Sophie', 'Bayram', 'sophie@oclock.io', 'valhalla31', 'Développeuse Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cheesecake_cna9xj.png', 1, 7, 2),
(32, 'Elias', 'Gueye', 'elias@oclock.io', 'valhalla32', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-macarons_b4udsg.png', 1, 7, 2),
(33, 'Emilien', 'Boucherie', 'emilien@oclock.io', 'valhalla33', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/pommes-amour_zq5sik.png', 1, 7, 2),
(34, 'Morgan', 'Veysset', 'morgan@oclock.io', 'valhalla34', 'Développeuse Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/religieuse_2_a46c3r.png', 1, 7, 2),
(35, 'Thomas', 'Capo', 'thomas@oclock.io', 'valhalla35', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/puit-amour_iqrjbo.png', 1, 8, 2),
(36, 'Rémi', 'Henry', 'remih@oclock.io', 'valhalla36', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/paris-brest_ryggow.png', 1, 8, 2),
(37, 'Paulo', 'Goncalves Ferreira', 'paulo@oclock.io', 'valhalla37', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/muffin-pepites_ddtgxo.png', 1, 8, 2),
(38, 'Hélène', 'Loriot', 'helene@oclock.io', 'valhalla38', 'Développeuse Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/pain-au-chocolat_uvlihs.png', 1, 8, 2),
(39, 'Basile', 'Marguerie', 'basile@oclock.io', 'valhalla39', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/merveilleux_2_ewdgpd.png', 1, 8, 2),
(40, 'Rémi', 'Vieille', 'remiv@oclock.io', 'valhalla40', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/madeleines_2_yoxivr.png', 1, 9, 2),
(41, 'Tony', 'Dai', 'tony@oclock.io', 'valhalla41', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-roses_f1bekg.png', 1, 9, 2),
(42, 'Jérémy', 'Mikaleff', 'jeremy@oclock.io', 'valhalla42', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-bleu_nrhccf.png', 1, 9, 2),
(43, 'Michel', 'Deckert', 'michel@oclock.io', 'valhalla43', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-caramel_a79ij9.png', 1, 9, 2),
(44, 'Simon', 'Pelletier', 'simon@oclock.io', 'oclock1', 'Je suis Helper', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/gateau-choco_l1dvus.png', 1, 1, 1),
(45, 'Benjamin', 'Nougadère', 'benji@oclock.io', 'oclock2', 'Je suis Professeur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/gaufres_2_kqfkz2.png', 1, 2, 1),
(46, 'Marc', 'Charton', 'marcc@oclock.io', 'oclock3', 'Je suis Helper', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/donut-rose_fl6yfo.png', 1, 3, 1),
(47, 'Jordan', 'Brull', 'jordan@oclock.io', 'oclock4', 'Je suis Helper', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/donut-chocolat_ysbyrl.png', 1, 4, 1),
(48, 'Benoit', 'Schiex', 'benoit@oclock.io', 'oclock5', 'Je suis Professeur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-bleu_qeb8ik.png', 1, 5, 1),
(49, 'Clément', 'Uther', 'clement@oclock.io', 'oclock6', 'Je suis Professeur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-vanille_jx3if5.png', 1, 6, 1),
(50, 'Alexis', 'Vincent', 'alexis@oclock.io', 'oclock7', 'Je suis Professeur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-cerise_mvdsbj.png', 1, 7, 1),
(51, 'Yann', 'Gouilloux', 'yann@oclock.io', 'oclock8', 'Je suis Professeur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-rose_tdgfr0.png', 1, 8, 1),
(52, 'Quentin', 'Logie', 'quentin@oclock.io', 'oclock9', 'Je suis Professeur', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cookies_2_vau0ca.png', 1, 9, 1),
(53, 'Alain', 'Provist', 'alain@oclock.io', 'valhalla53', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffins1_mwgv8l.png', 2, 10, 2),
(54, 'Brice', 'Glace', 'brice@oclock.io', 'valhalla54', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffin2_hm5hdb.png', 2, 10, 2),
(55, 'Adrienne', 'Kepoura', 'adrienne@oclock.io', 'valhalla55', 'Développeuse Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-donuts_z3hip6.png', 2, 10, 2),
(56, 'Barack', 'Afritt', 'barack@oclock.io', 'valhalla56', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-macarons_b4udsg.png', 2, 10, 2),
(57, 'Candy', 'Ratan', 'candy@oclock.io', 'valhalla57', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/pommes-amour_zq5sik.png', 2, 10, 2),
(58, 'Djamal', 'Digéré', 'djamal@oclock.io', 'valhalla58', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/religieuse_2_a46c3r.png', 2, 10, 2),
(59, 'Eric', 'Hochet', 'eric@oclock.io', 'valhalla59', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/puit-amour_iqrjbo.png', 2, 10, 2),
(60, 'Gaspard', 'Fait', 'gaspard@oclock.io', 'valhalla60', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/paris-brest_ryggow.png', 2, 10, 2),
(61, 'Jacques', 'Ouzi', 'jacques@oclock.io', 'valhalla61', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/pain-au-chocolat_uvlihs.png', 2, 10, 2),
(62, 'Jean', 'Rigole', 'jeanr@oclock.io', 'valhalla62', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/muffin-pepites_ddtgxo.png', 2, 10, 2),
(63, 'John', 'Veuplu', 'john@oclock.io', 'valhalla63', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/madeleines_2_yoxivr.png', 2, 10, 2),
(64, 'Lucie', 'Ditée', 'lucied@oclock.io', 'valhalla64', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-roses_f1bekg.png', 2, 10, 2),
(65, 'Nordine', 'Atteur', 'nordine@oclock.io', 'valhalla65', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971514/oProjetheque/gateau/macarons-bleu_nrhccf.png', 2, 10, 2),
(66, 'Rabbi', 'Boché', 'rabbi@oclock.io', 'valhalla66', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/gaufres_2_kqfkz2.png', 2, 10, 2),
(67, 'Edith', 'Orial', 'edith@oclock.io', 'valhalla67', 'Développeuse Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/donut-rose_fl6yfo.png', 3, 11, 2),
(68, 'Guy', 'Yiotine', 'guy@oclock.io', 'valhalla68', 'Développeur Fullstack spécialité React', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971503/oProjetheque/gateau/gateau-choco_l1dvus.png', 3, 11, 2),
(69, 'Aude', 'Javel', 'audej@oclock.io', 'valhalla69', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-bleu_qeb8ik.png', 3, 11, 2),
(70, 'Beth', 'Rave', 'beth@oclock.io', 'valhalla70', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-vanille_jx3if5.png', 3, 11, 2),
(71, 'Claire', 'Voyance', 'clairev@oclock.io', 'valhalla71', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-cerise_mvdsbj.png', 3, 11, 2),
(72, 'Eva', 'Porée', 'eva@oclock.io', 'valhalla72', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cupcake-rose_tdgfr0.png', 3, 11, 2),
(73, 'Gilles', 'Parball', 'gillesp@oclock.io', 'valhalla73', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971502/oProjetheque/gateau/cookies_2_vau0ca.png', 3, 11, 2),
(74, 'Henri', 'Post', 'henrip@oclock.io', 'valhalla74', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffins1_mwgv8l.png', 3, 11, 2),
(75, 'Jean', 'Prendnote', 'jeanpr@oclock.io', 'valhalla75', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/trio-muffin2_hm5hdb.png', 3, 11, 2),
(76, 'Sophie', 'Fonfèque', 'sophief@oclock.io', 'valhalla76', 'Développeuse Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-donuts_z3hip6.png', 3, 11, 2),
(77, 'Larry', 'Golade', 'larry@oclock.io', 'valhalla77', 'Développeur Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/pommes-amour_zq5sik.png', 3, 11, 2),
(78, 'Marie', 'Rouana', 'marier@oclock.io', 'valhalla78', 'Développeuse Fullstack spécialité Data/API', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/tas-macarons_b4udsg.png', 3, 11, 2),
(79, 'Otto', 'Graff', 'otto@oclock.io', 'valhalla79', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971530/oProjetheque/gateau/religieuse_2_a46c3r.png', 3, 11, 2),
(80, 'Ray', 'Ponse', 'ray@oclock.io', 'valhalla80', 'Développeur Fullstack spécialité Réact', 'https://res.cloudinary.com/dieupu7jn/image/upload/v1636971515/oProjetheque/gateau/paris-brest_ryggow.png', 3, 11, 2);

-- PostGres with type serial does not automatically increment the sequence attached to the column!
-- It is therefore necessary to update the current value of each of the sequences by selecting the maximum id of each table
 -- When inserting another row in one of the tables, the id will be incremented automatically from the max id, no duplicate id possibleSELECT setval('promo_id_seq', (SELECT MAX(id) FROM "promo"));
SELECT setval('theuser_id_seq', (SELECT MAX(id) FROM "theuser"));
SELECT setval('project_id_seq', (SELECT MAX(id) FROM "project"));
SELECT setval('therole_id_seq', (SELECT MAX(id) FROM "therole"));
SELECT setval('promo_id_seq', (SELECT MAX(id) FROM "promo"));
COMMIT;
