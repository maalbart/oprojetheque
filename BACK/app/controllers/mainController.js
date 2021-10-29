const Project = require ("../models/projects.js");

const mainController = {
    /* Method to display the home page */
    homePage:async(req,res)=>{
        console.log("Bienvenue sur la page de l'accueil");
       
        const projects = await Project.projetsRandom();
        console.log("-----------------");
        res.json(projects);
        console.log("Voici un random de tous les projets", projects);
        console.log("-----------------");
       
     }
};


/* Exports mainController */
module.exports = mainController;

