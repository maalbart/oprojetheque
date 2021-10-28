/*  HERE WE'LL HAVE TO MANAGE USER CONNECTION (Students and Admins) - (éventuellement sinon faire un adminController et une studentController - à checker avec l'equipe BACK)*/

/* Pense bete: 
    - brypt
    saltRounds (permet de hasher le mot de passe autant de fois qu'on le souhaite )
*/
const Student = require ("../models/students.js");

const userController = {
    /* Method to display the home page */
    getAllStudents:async(req,res)=>{
        console.log("Bienvenue sur la page des projets");
        const students = await Student.getAllStudents();
        res.json(students);
    },
    getOneStudent:async(req,res)=>{
        console.log("Bienvenue sur la page d'une promo");
        const studentId = await Student.getOneStudent(req.params.id);
        console.log("projectId", studentId);
        res.json(studentId);
     }

};


/* Exports mainController */
module.exports = userController;