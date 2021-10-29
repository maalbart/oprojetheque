/* Pense bete: 
    - brypt
    saltRounds (permet de hasher le mot de passe autant de fois qu'on le souhaite )
*/
const User = require ("../models/users.js");

const studentController = {
    /* Method to display the students page */
    getAllStudents:async(req,res)=>{
        console.log("Bienvenue sur la page des students");
        const students = await User.getAllStudents();
        res.json(students);
    },
    /* Method to display the student page */
    getOneStudent:async(req,res)=>{
        console.log("Bienvenue sur la page d'un student");
        const studentId = await User.getOneStudent(req.params.id);
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