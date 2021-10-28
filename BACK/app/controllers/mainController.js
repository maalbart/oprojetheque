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
     },
     /* Method to display the project page */
    getOneProject:async(req,res)=>{
        console.log("Bienvenue sur la page d'un projet");
        const projectId = await Project.getOneProject(req.params.id);
        console.log("projectId", projectId);
        res.json(projectId);
     }

};


/* Exports mainController */
module.exports = mainController;

