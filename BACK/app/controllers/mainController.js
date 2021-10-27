/* ICI IL FAUT REQUIRE LES MODELS APRES LES AVOIR CODER */
const Project = require ("../models/project.js");

const mainController = {
    /* method to display the home page */
    homePage:async(req,res)=>{
        console.log("Bienvenue sur la page des projets");
        const projects = await Project.getAllProjects();
        res.json(projects);
     }

};


/* Exportation of mainController */
module.exports = mainController;