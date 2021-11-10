const User = require("../models/user.js");
const Project = require("../models/project.js");
const Promo = require("../models/promo.js");

const studentController = {
    /*****************************************/
    /*               STUDENTS                */
    /*****************************************/
    /* Method to display the students page */
    getAllStudents: async (req, res) => {
        try {
            // console.log("Bienvenue sur la page des students");
            const students = await User.getAllStudents();
            res.json(students);
            // console.log(students);
        } catch (error) {
            res.status(500).send(error);
            res.redirect("/404");
        }
    },
    /*****************************************/
    /*                STUDENT                */
    /*****************************************/
    /* Method to display the student page */
    getOneStudent: async (req, res) => {
        try {
            // console.log("Bienvenue sur la page d'un student");
            const studentId = await User.getOneStudent(req.params.id);
            const projectFromStudent = await Project.getProjectFromStudent(req.params.id);
            const promoFromStudent = await Promo.getPromoFromStudent(req.params.id);
            res.json({studentId, projectFromStudent, promoFromStudent});
            // console.log("projectId", studentId);
        } catch (error) {
            res.status(500).send(error);
            res.redirect("/404");
        }
    },
    /*****************************************/
    /*           STUDENT PROFILE             */
    /*****************************************/
    /* Method that displays a student's profile */ 
    studentProfile: async (req, res) => {
        try {
            // console.log("Bienvenue sur la page d'un student");
            const studentProfile = await User.getStudentProfile(req.params.id);
            res.json(studentProfile);
            // console.log("voici le studentProfile", studentProfile);
        } catch (error) {
            res.status(500).send(error);
            res.redirect("/404");
        }
    },
};


/* Exports studentController */
module.exports = studentController;