const Project = require ("../models/project.js");

const mainController = {
    /*****************************************/
    /*               HOMEPAGE                */
    /*****************************************/
    /* Method to display the home page */
    homePage:async(req,res)=>{
        try{
            // console.log("Bienvenue sur la page de l'accueil");
            const projects = await Project.projetsRandom();
            res.json(projects);
            // console.log("Voici un random de tous les projets", projects);
        } catch (error){
            res.status(500).send(error);
            res.redirect("/404");
        }
     }
};


/* Exports mainController */
module.exports = mainController;

