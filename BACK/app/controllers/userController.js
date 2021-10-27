/*  ICI NOUS DEVRONS GERER LA CONNEXION DES ETUDIANTS ET DE L'ADMIN éventuellement sinon faire un adminController et une studentController - à checker avec l'equipe BACK)*/

/* Pense bete: 
    - brypt
    saltRounds (permet de hasher le mot de passe autant de fois qu'on le souhaite )
*/
const Student = require ("../models/student.js");

const userController = {
    /* method to display the home page */
    getAllStudents:async(req,res)=>{
        console.log("Bienvenue sur la page des projets");
        const students = await Student.getAllStudents();
        res.json(students);
     }

};


/* Exportation of mainController */
module.exports = userController;