const User = require("../models/user.js");
const Project = require("../models/project.js");

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
    getOneStudent: async (req, res, next) => {
        try {
            console.log("Bienvenue sur la page d'un student");
            const studentId = await User.getOneStudent(req.params.id);
            res.json(studentId);
            // console.log("projectId", studentId);
        } catch (error) {
            res.status(500).send(error);
            res.redirect("/404");
        }
        next()
    },
    /* ---------------------------------------------- */
    /* Method that displays a student's promo and project */
    // getPromoAndProjetForOneStudent: async (req, res) => {
    //     try {
    //         console.log("Bienvenue sur la page d'un student avec les informations concernant sa promo et son projet");
    //         const studentId = await User.getOneStudent(req.params.id);
    //         const studentPromoProject = await Project.getPromoAndProjetForOneStudent(req.params.id)
    //         res.json({studentId, studentPromoProject});
    //         console.log("Ma methode qui affiche ")
    //     }catch (error) {
    //         res.status(500).send(error);
    //         res.redirect("/404");
    //     }
    //     next()
    // },
    /* ---------------------------------------------- */
    /* Method that displays a student's profile */ 
    profilStudent: (req, res, next) => {
        console.log("Je suis dans la methode profil dans le studentCOntroller!");
        // res.redirect("/404");
    }
};


/* Exports studentController */
module.exports = studentController;