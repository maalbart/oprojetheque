const Project = require("../models/project.js");

const projectController = {
   /* Method to display the projects page */
   getAllProjects: async (req, res) => {
      try {
         console.log("Bienvenue sur la page des projets");
         const projects = await Project.getAllProjects();
         res.json(projects);
      } catch (error) {
         res.status(500).send(error);
      }
   },
   /* ---------------------------------------------- */
   /* Method to display the project page */
   getOneProject: async (req, res) => {
      try {
         console.log("Bienvenue sur la page d'un projet");
         const projectId = await Project.getOneProject(req.params.id);
         //console.log("projectId", projectId);
         res.json(projectId);
      } catch (error) {
         res.status(500).send(error);
      }
   },
   /* ---------------------------------------------- */
   /* Method to random projects in homePage */
   projetsRandom: async (req, res) => {
      try {
         console.log("Je suis dans la methode randomProjects de l'accueil");
         const random = await Project.projetsRandom();
         res.json(random);
      } catch (error) {
         res.status(500).send(error);
      }
   }
};


/* Exports projectController */
module.exports = projectController;