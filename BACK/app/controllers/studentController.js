const User = require("../models/user.js");

const studentController = {
    /* Method to display the students page */
    getAllStudents: async (req, res) => {
        try {
            console.log("Bienvenue sur la page des students");
            const students = await User.getAllStudents();
            res.json(students);
            // console.log(students);
        } catch (error) {
            res.status(500).send(error);
            res.redirect("/404");
        }
    },
    /* ---------------------------------------------- */
    /* Method to display the student page */
    getOneStudent: async (req, res) => {
        try {
            console.log("Bienvenue sur la page d'un student");
            const studentId = await User.getOneStudent(req.params.id);
            res.json(studentId);
            // console.log("projectId", studentId);
        } catch (error) {
            res.status(500).send(error);
            res.redirect("/404");
        }
    },
    profilStudent: (req, res, next) => {
        console.log("Je suis dans la methode profil dans le studentCOntroller!");
        // res.redirect("/404");
    }
};


/* Exports studentController */
module.exports = studentController;