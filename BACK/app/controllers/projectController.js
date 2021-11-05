const Project = require("../models/project.js");
const Promo = require("../models/promo.js");
const User = require("../models/user.js");

const projectController = {
   /* Method to display the projects page */
   getAllProjects: async (req, res) => {
      try {
         console.log("Bienvenue sur la page des projets");
         const projects = await Project.getAllProjects();
         res.json(projects);
      } catch (error) {
         res.status(500).send(error);
         res.redirect("/404");
      }
   },
   /* ---------------------------------------------- */
   /* Method to display the project page */
   getOneProject: async (req, res) => {
      try {
         console.log("Bienvenue sur la page d'un projet");
         const projectId = await Project.getOneProject(req.params.id);
         //const promoFromProject = await Promo.getPromoFromProject(req.params.id);
         const studentFromProject = await User.getStudentFromProject(req.params.id);
         //console.log("projectId", projectId);
         res.json({projectId, studentFromProject});
      } catch (error) {
         res.status(500).send(error);
         res.redirect("/404");
      }
      next()
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
         res.redirect("/404");
      }
   }
};


/* Exports projectController */
module.exports = projectController;