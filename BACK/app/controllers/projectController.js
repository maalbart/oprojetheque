const Project = require("../models/project.js");
const Promo = require("../models/promo.js");
const User = require("../models/user.js");

const projectController = {
   /*****************************************/
   /*               PROJECTS                */
   /*****************************************/
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
   /*****************************************/
   /*               PROJECT                 */
   /*****************************************/
   /* Method to display the project page */
   getOneProject: async (req, res) => {
      try {
         // console.log("Bienvenue sur la page d'un projet");
         const projectId = await Project.getOneProject(req.params.id);
         const promoFromProject = await Promo.getPromoFromProject();
         const studentFromProject = await User.getStudentsFromProject(req.params.id);
         //console.log("projectId", projectId);
         res.json({projectId, promoFromProject,studentFromProject});
         // studentFromProject
      } catch (error) {
         res.status(500).send(error);
         res.redirect("/404");
      } 
   },
   /*****************************************/
   /*            PROJECT RANDOM             */
   /*****************************************/
   /* Method to random projects in homePage */
   projetsRandom: async (req, res) => {
      try {
         // console.log("Je suis dans la methode randomProjects de l'accueil");
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