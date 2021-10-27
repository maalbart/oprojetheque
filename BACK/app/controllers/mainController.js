/* HERE WE HAVE TO REQUIRE THE MODELS AFTER WE'VE CODED THEM */
const Project = require ("../models/projects.js");

const mainController = {
    /* Method to display the home page */
    homePage:async(req,res)=>{
        console.log("Bienvenue sur la page de l'accueil");
        // const id = getOneProject.id;
        const projects = await Project.getAllProjects();
        // const projectsRandom = Math.floor(Math.random * projects.id.length);

        // console.log("PROJECTSRANDOM", projectsRandom);
        res.json(projects);
        // projectsRandom
     }

};


/* Exports mainController */
module.exports = mainController;

