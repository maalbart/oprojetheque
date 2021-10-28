/* HERE WE HAVE TO REQUIRE THE MODELS AFTER WE'VE CODED THEM */
const Project = require ("../models/projects.js");

const projectController = {
    /* Method to display the projects page */
    getAllProjects:async(req,res)=>{
       console.log("Bienvenue sur la page des projets");
       const projects = await Project.getAllProjects();
       res.json(projects);
    },
    /* Method to display the project page */
    getOneProject:async(req,res)=>{
        console.log("Bienvenue sur la page d'un projet");
        const projectId = await Project.getOneProject(req.params.id);
        //console.log("projectId", projectId);
        res.json(projectId);
     },
     projetsRandom:async(req, res)=>{
      console.log("Je suis dans la methode randomProjects de l'accueil");
      const random = await Project.projetsRandom();
      res.json(random);
     }


};


/* Exports mainController */
module.exports = projectController;