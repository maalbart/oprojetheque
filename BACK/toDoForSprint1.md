## SQUELETTE MIS EN PLACE  au 26 oct ET A POURSUIVRE

- création du dossier app  
      - création du sous-dossiers des controllers  
            - création du fichier mainController  
                    - méthode pour la homePage (OK)  
                          - penser à require le model nécessaire pour la homePage  
            - création du fichier du projectController  
                    - méthode pour getAllProjects (OK)  
                    - méthode pour getOneProject (OK) 
                        - penser à require le model nécessaire pour les 2 méthodes (getOne & getAll)  
            - création du fichier promoController  
                    - méthode pour getAllPromos (OK)  
                    - méthode pour getOnePromo (OK)  
                        - penser à require le model nécessaire pour les 2 méthodes (getOne & getAll)  
            - création du fichieru userController  
                    - méthode pour getAllStudents (OK) 
                    - méthode pour getOneStudent (OK)  
                        - penser à require le model nécessaire pour les 2 méthodes (getOne & getAll)  
      - création du sous-dossiers des middlewares  
            - création du fichier adminMiddlware  
                    - gestion de la session + locals (A CHECKER)  
            - création du fichier studentMiddlware  
                    - gestion de la session + locals (A CHECKER)  
            - création du fichier visitorMiddlware  
                    - gestion de la session + locals (A CHECKER) 
      - création du sous-dossiers migrations  
            - création du sous-dossiers deploy  
                    - création du fichier init.sql qui permet de créer toutes les tables en SQL (A CHECKER)  
                    - création du fichier dataInsert.sql qui permet d'insérer en BDD des données (en l'occurrence les données récoltées de la promo Valhalla) (A CHECKER)  
            - création du sous-dossiers revert (A CHECKER)  
            - création du sous-dossiers verify (A CHECKER)  
            - création du fichier sqitch.conf (GENERATION AUTOMATIQUE)  
            - création du fichier sqitch.plan (GENERATION AUTOMATIQUE)  
      - création du dossier models  
            - création du fichier project.js (OK)  
            - création du fichier promo.js (OK)  
            - création du fichier student.js (OK)  
      - création du fichier database qui nous permet de nous connecter à un client - en l'occurence à PG  
      - création du fichier router.js (A COMPLETER)  
      - création du fichier .env / .env.example / .gitignore (A COMPLETER)  
      - création du fichier index.js (A CHECKER)  
      - création du fichier test.http  
            - créer toutes les routes (GET/ POST/ PATCH) pour les tester (A CHECKER)  

## A faire d'ici vendredi 29 oct - lundi 1 nov + checkList précèdente
- Installer les dependances : npm i, dotenv, express, pg, bcrypt, email-validator, express-session, pg, joi (A VOIR)
- Créer un script dans le package.json (run dev + checker la porte d'entrée de l'API > main = index.js, etc)
- Créer la homePage (avec les carrousels des projets (méthode Math.random))
- Créer la page de profil pour la connexion (student et admin) + gestion de la validation de l'email + gestion de session ..



## A FAIRE EN FONCTION DU TIMING:
- gestion du cache avec Redis (augmenter les performances)


## A CHECKER PLUS TARD
Type de donnees des dates car la date apparait en TMPZ (voir la page d'une promo pour l'affichage) 