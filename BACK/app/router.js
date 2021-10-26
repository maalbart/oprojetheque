const express = require("express");

// On require nos controllers
const mainController = require('./controllers/mainController.js');


// Je récupère les routes
const router = express.Router();

/****** ROUTES  ******
******************************/
/**
 * Preconfigue l'application 
 * @route GET /
 * @group 
 * @returns {object} 200 - 
 * @returns {Error}  default - Une erreur est survenue
 */
 router.get("/", mainController.init);

 module.exports = router;