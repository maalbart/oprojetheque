const Project = require ("../models/projects");
const Promo = require ("../models/promos.js");
const Student = require ("../models/students.js");


const adminController = {
    /* Method to display the admin page */
    addProject: async(req, res)=>{
        console.log("Je suis dans le adminController");
    }
}


/* Exports adminController */
module.exports = adminController;