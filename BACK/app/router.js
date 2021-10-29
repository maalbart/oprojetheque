/* Router initialization */
const express = require("express");
const router = express.Router();

/* Controllers import */
const mainController = require('./controllers/mainController.js');
const projectController = require('./controllers/projectController.js');
const promoController = require('./controllers/promoController.js');
const studentController = require('./controllers/studentController.js');
// const adminController = require('./controllers/adminController.js');
// const adminMiddleware = require("./middlewares/adminMiddleware.js");


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
router.get("/students", studentController.getAllStudents);
router.get("/student/:id", studentController.getOneStudent);



/* CONNECTION ROUTER */ 
// router.get("/connection", studentController.login); // connection page
// router.post("/connection/:id") 


/* ADMIN */
/* Express allows us to chain middlewares / controllers by a next
Admin route with methods to add projects, promos and students
Verification that the user, who wants to use the route /admin, has the role of admin, then chain the methods add and update of the 3 tables
*/ 
// router.get("/admin", adminMiddleware.isAdmin, adminController.addProject, adminController.updateProject);
// router.get("/admin", adminMiddleware.isAdmin, adminController.addPromo, adminController.updatePromo);
// router.get("/admin", adminMiddleware.isAdmin, adminController.addStudent, adminController.updateStudent);



// Admin route with methods for submitting  projects, promos and students add
// router.post("/admin", adminMiddleware.isAdmin, adminController.addProject);
// router.post("/admin", adminMiddleware.isAdmin, adminController.addPromo);
// router.post("/admin", adminMiddleware.isAdmin, adminController.addStudent);



/* Exportation of router */
 module.exports = router;