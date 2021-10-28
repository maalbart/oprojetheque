/* Pense bete: 
    - brypt
    saltRounds (permet de hasher le mot de passe autant de fois qu'on le souhaite )
*/
const User = require ("../models/USER.js");

const userController = {
    /* Method to display the home page */
    // getAllStudents:async(req,res)=>{
    //     console.log("Bienvenue sur la page des projets");
    //     const students = await Student.getAllStudents();
    //     res.json(students);
    // },
    // getOneStudent:async(req,res)=>{
    //     console.log("Bienvenue sur la page d'une promo");
    //     const studentId = await Student.getOneStudent(req.params.id);
    //     console.log("projectId", studentId);
    //     res.json(studentId);
    //  }
    login: (req, res, next)=>{
        res.render("connexion/login");
    },
    signUp: (req, res, next)=>{
        res.render("connexion/signup");
    },
    


};


/* Exports mainController */
module.exports = userController;