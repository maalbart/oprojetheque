const Project = require("../models/project.js");
const Promo = require("../models/promo.js");
const User = require("../models/user.js");


const adminController = {
    /*****************************************/
    /*               PROJECT                 */
    /*****************************************/
    /* Method to add new project */
    addProject: async (req, res) => {
        try {
            // console.log("Je suis dans la méthode addProject de l'adminController");
            const newProject = await Project.addProject(req.body);
            res.json(newProject);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /* -----------------------------------------*/
    /* Method to update project */
    updateProject: async (req, res) => {
        try {
            // console.log("Je suis dans la méthode updateProject de l'adminController");
            const updateProject = await Project.updateProject(req.body);
            res.json(updateProject);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /*****************************************/
    /*                PROMO                  */
    /*****************************************/
    /* Method to add new promo */
    addPromo: async (req, res) => {
        console.log("mon req body", req.body);
        console.log("Je suis dans la méthode addPromo de l'adminController");

        const newPromo = await Promo.addPromo(req.body.name, req.body.starting_date, req.body.ending_date);
        res.json(newPromo);
       
        // res.status();
    },
    /* -----------------------------------------*/
    /* Method to update promo */
    updatePromo: async (req, res) => {
        try {
            // console.log("Je suis dans la méthode updatePromo de l'adminController")
            const updatePromo = await Promo.updatePromo(req.body)
            res.json(updatePromo);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /*****************************************/
    /*               STUDENT                 */
    /*****************************************/
    /* Method to add a new student */
    addStudent: async (req, res) => {
        try {
            // console.log("Je suis dans la méthode addStudent de l'adminController");
            const newStudent = await User.addStudent(req.body);
            res.json(newStudent);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /* -----------------------------------------*/
    /* Method to update a student */
    updateStudent: async (req, res) => {
        try {
            // console.log("Je suis dans la méthode updateStudent de l'adminController")
            const updateStudent = await User.updateStudent(req.body)
            res.json(updateStudent);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};


/* Exports adminController */
module.exports = adminController;