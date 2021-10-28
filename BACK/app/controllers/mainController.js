const Project = require ("../models/projects.js");

const mainController = {
    /* Method to display the home page */
    homePage:async(req,res)=>{
        console.log("Bienvenue sur la page de l'accueil");
<<<<<<< HEAD
       
        const projects = await Project.projetsRandom();
        console.log("-----------------");
        res.json(projects);
        console.log("Voici un random de tous les projets", projects);
        console.log("-----------------");
       
     }
=======
        // const id = getOneProject.id;
        const projects = await Project.getAllProjects();
        const projectsRandom = projects[Math.floor(Math.random() * projects.length)];

        // console.log("PROJECTSRANDOM", projectsRandom);
        res.json(projects);
        
     },

    //  /* Method to display the project page */
    // getOneProject:async(req,res)=>{
    //     console.log("Bienvenue sur la page d'un projet");
    //     const projectId = await Project.getOneProject(req.params.id);
    //     console.log("projectId", projectId);
    //     res.json(projectId);
    //  }

>>>>>>> ee122c0e3184fd726e49db673c53f49630d148fc
};


/* Exports mainController */
module.exports = mainController;

