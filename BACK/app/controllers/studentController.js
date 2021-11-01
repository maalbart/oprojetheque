const User = require("../models/user.js");

const studentController = {
    /* Method to display the students page */
    getAllStudents: async (req, res) => {
        try {
            console.log("Bienvenue sur la page des students");
            const students = await User.getAllStudents();
            console.log("-----------------");
            res.json(students);
            console.log(students);
            console.log("-----------------");
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /* ---------------------------------------------- */
    /* Method to display the student page */
    getOneStudent: async (req, res) => {
        try {
            console.log("Bienvenue sur la page d'un student");
            const studentId = await User.getOneStudent(req.params.id);
            // console.log("projectId", studentId);
            res.json(studentId);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    profilStudent: (req, res, next) => {
        console.log("Je suis dans la methode profil dans le studentCOntroller!");
    }
};


/* Exports studentController */
module.exports = studentController;