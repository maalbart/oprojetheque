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
        console.log("-----------------");
        res.json(students);
        console.log(students);
        console.log("-----------------");
    },
    /* Method to display the student page */
    getOneStudent:async(req,res)=>{
        console.log("Bienvenue sur la page d'un student");
        const studentId = await User.getOneStudent(req.params.id);
        // console.log("projectId", studentId);
        res.json(studentId);
     },
    /* method for the student to log in */
    // connection: (req, res, next)=>{
    //     res.render("connexion/login");
    // },
    // /* method for the student to disconnect*/
    // disconnection: (req, res, next) => {
    // // destruction of the session to disconnect the user
    // req.session.user = null;

    // res.redirect("/");
    // },
    // /* method for the user to connect*/
    //  loginUser: (req, res, next)=>{
    //     const form = req.body;
    //     console.log(form);

    //     // check that none of the sent properties are null!
    //     const isOnePropertyNull = !(form.email && form.password);

    //      if (isOnePropertyNull) {
    //          /* return an error message */
    //      } 
    //      else {
    //     // verification that the email address is in the right format   
    //         if(validator.validate(form.email)) {
    //             // returns true if it is an email
    //             console.log("Email vérifié !");
    //             // a user can create two accounts with the same email address
                
    //         } 


    // ]


    // }


};

/* Exports studentController */
module.exports = studentController;