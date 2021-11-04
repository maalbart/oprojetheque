const Project = require("../models/project.js");
const Promo = require("../models/promo.js");
const User = require("../models/user.js");

const searchController = {
 /* Method to get the searched promotion */
 searchPromo: async (req, res) => {
    try {
       console.log("Bienvenue sur la recherche d'une promo");
       const promoResearch = await Promo.searchPromo(req.body);
       res.json(promoResearch);
    } catch (error) {
       res.status(500).send(error);
       res.redirect("/404");
    }
 },
/* Method to get the searched project */
 searchProject: async (req, res) => {
    try {
       console.log("Bienvenue sur la recherche d'un projet");
       const projectResearch = await Project.searchPromo(req.body);
       res.json(projectResearch);
    } catch (error) {
       res.status(500).send(error);
       res.redirect("/404");
    }
 },
 /* Method to get the searched student */
 searchStudent: async (req, res) => {
    try {
       console.log("Bienvenue sur la recherche d'un étudiant");
       const studentResearch = await User.searchPromo(req.body);
       res.json(studentResearch);
    } catch (error) {
       res.status(500).send(error);
       res.redirect("/404");
    }
 },
}



/* Exports c */
module.exports = searchController;

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