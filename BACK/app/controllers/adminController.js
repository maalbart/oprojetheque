const Project = require ("../models/projects.js");
const Promo = require ("../models/promos.js");
const User = require ("../models/users.js");


const adminController = {
    /* Method to add new project */
    addProject: async(req, res)=>{
        console.log("Je suis dans la methode addProject de l'adminController");
        const newProject = await Project.addProject(req.body);
        res.json(newProject);
    },
    /* Method to update project */
    updateProject: async(req, res)=>{
        console.log("Je suis dans la methode updateProject de l'adminController")
        const updateProject = await Project.updateProject(req.body)
        res.json(updateProject);
    },
    
    /* -----------------------------------------*/
    
    /* Method to add new promo */
    addPromo: async(req, res)=>{
        console.log("Je suis dans la methode addPromo de l'adminController");
        const newPromo = await Promo.addPromo(req.body);
        res.json(newPromo);
    },
    /* Method to update promo */
    updatePromo: async(req, res)=>{
        console.log("Je suis dans la methode updatePromo de l'adminController")
        const updatePromo = await Promo.updatePromo(req.body)
        res.json(updatePromo);
    },
    
    /* -----------------------------------------*/
    
    /* Method to add new student */
    addStudent: async(req, res)=>{
        console.log("Je suis dans la methode addStudent de l'adminController");
        const newStudent = await User.addStudent(req.body);
        res.json(newStudent);
    },
    /* Method to update student */
    updateStudent: async(req, res)=>{
        console.log("Je suis dans la methode updateStudent de l'adminController")
        const updateStudent = await User.updateStudent(req.body)
        res.json(updateStudent);
    },
    
    
    
}


/* Exports adminController */
module.exports = adminController;