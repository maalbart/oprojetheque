/* Router initialization */
const express = require("express");
const router = express.Router();

/* Controllers import */
const mainController = require('./controllers/mainController.js');
const projectController = require('./controllers/projectController.js');
const promoController = require('./controllers/promoController.js');
const userController = require('./controllers/userController.js');
const adminController = require('./controllers/adminController.js');
const adminMiddleware = require("./middlewares/adminMiddleware.js");


// const adminMiddleware = require("./middlewares/adminMiddleware.js");
// const userMiddleware = require("./middlewares/userMiddleware");
/****** All roads ******/

/**
 * Preconfigue l'application 
 * @route GET /
 * @group 
 * @returns {object} 200 - 
 * @returns {Error}  default - Une erreur est survenue
 */
router.get("/", mainController.homePage);
router.get("/projects", projectController.getAllProjects);
router.get("/project/:id", projectController.getOneProject);
router.get("/promos", promoController.getAllPromos);
router.get("/promo/:id", promoController.getOnePromo);
router.get("/students", userController.getAllStudents);
router.get("/student/:id", userController.getOneStudent);

/* ADMIN */
// Express allows us to chain middlewares / controllers by a next
// Admin route with methods to add projects, promos and students,
router.get("/admin", adminMiddleware.isAdmin, adminController.addProject);
// router.get("/admin", adminMiddleware.isAdmin, adminController.addPromo);
// router.get("/admin", adminMiddleware.isAdmin, adminController.addStudent);

// Admin route with methods for submitting  projects, promos and students add
// router.post("/admin", adminMiddleware.isAdmin, adminController.addProject);
// router.post("/admin", adminMiddleware.isAdmin, adminController.addPromo);
// router.post("/admin", adminMiddleware.isAdmin, adminController.addStudent);






/* Exportation of router */
 module.exports = router;