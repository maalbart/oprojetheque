/* Pense bete: 
    - brypt
    saltRounds (permet de hasher le mot de passe autant de fois qu'on le souhaite )
*/
const Student = require ("../models/students.js");

const studentController = {
    /* Method to display the students page */
    getAllStudents:async(req,res)=>{
        console.log("Bienvenue sur la page des projets");
        const students = await Student.getAllStudents();
        res.json(students);
    },
    /* Method to display the student page */
    getOneStudent:async(req,res)=>{
        console.log("Bienvenue sur la page d'une promo");
        const studentId = await Student.getOneStudent(req.params.id);
        // console.log("projectId", studentId);
        res.json(studentId);
     },
    /* method for the student to log in */
    // login: (req, res, next)=>{
    //     res.render("connexion/login");
    // },
    /* method for the student to disconnect*/
    // disconnect: (req, res, next) => {
    // // destruction of the session to disconnect the user
    // req.session.user = null;

    // res.redirect("/");
    // }

};

/* Exports studentController */
module.exports = studentController;