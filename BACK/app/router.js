/* Router initialization */
const express = require("express");
const router = express.Router();

/* Controllers import */
const mainController = require('./controllers/mainController.js');
const projectController = require('./controllers/projectController.js');
const promoController = require('./controllers/promoController.js');
const studentController = require('./controllers/studentController.js')
const authController = require('./controllers/authController.js');
// const adminController = require('./controllers/adminController.js');
// const adminMiddleware = require("./middlewares/adminMiddleware.js");
//const searchController = require('./controllers/searchController.js');

/***************************************/
/*          HOMEPAGE                   */
/***************************************/
/**
 * Home page of the website
 * @route GET /
 * @group homePage 
 * @returns {object} 200 - Ramdom projects
 * @returns {Error}  default - An error has occurred
 */
router.get("/", mainController.homePage);


/***************************************/
/*          ROADS OF PROJECTS          */
/***************************************/
/**
 * Recovery of all projects
 * @route GET /projects
 * @group Projects - API to display all end of course projects
 * @returns {object} 200 - All projects
 * @returns {Error}  default - An error has occurred
 */
router.get("/projects", projectController.getAllProjects);

/**
 * Recovery of one project
 * @route GET /project/:id
 * @group Projects - API to display one project
 * @returns {object} 200 - One project
 * @returns {Error}  default - An error has occurred
 */
router.get("/project/:id", projectController.getOneProject);


/***************************************/
/*          ROADS OF PROMOS         */
/***************************************/
/**
 * Recovery of all promos
 * @route GET /promos
 * @group Projects - API to display all promotions
 * @returns {object} 200 - All promos 
 * @returns {Error}  default - An error has occurred
 */
router.get("/promos", promoController.getAllPromos);

/**
 * Recovery of one promo 
 * @route GET /promo/:id
 * @group Projects - API to display one promo
 * @returns {object} 200 - One promo
 * @returns {Error}  default - An error has occurred
 */
router.get("/promo/:id", promoController.getStudentsFromPromo );
// promoController.getOnePromo 
/**
 * Recovery of students of one promo
 * @route GET /promo/:id
 * @group Projects - API to display students of one promo 
 * @returns {object} 200 - All students of one promo
 * @returns {Error}  default - An error has occurred
 */
// router.get("/promo/:id", promoController.getStudentsFromPromo);



/***************************************/
/*          ROADS OF STUDENTS          */
/***************************************/
/**
 * Recovery of all students
 * @route GET /students
 * @group Projects - API to display all students
 * @returns {object} 200 - All students 
 * @returns {Error}  default - An error has occurred
 */
router.get("/students", studentController.getAllStudents);

/**
 * Recovery of one student
 * @route GET /student/:id
 * @group Projects - API to display one student
 * @returns {object} 200 - One student
 * @returns {Error}  default - An error has occurred
 */
router.get("/student/:id", studentController.getOneStudent);

/**
 * Recovery of student's promo and project
 * @route GET /student/:id
 * @group Projects - API to display one student, his promo and his project
 * @returns {object} 200 - One student with his promo and his project
 * @returns {Error}  default - An error has occurred
 */
 router.get("/student/:id", studentController.getPromoAndProjetForOneStudent);



/*****************************************/
/*      ROAD OF SEARCH                   */
/*****************************************/
// router.post("/promos/search", searchController.searchPromo);
// router.post("/projects/search", searchController.searchProject);
// router.post("/students/search", searchController.searchStudent);


/*****************************************/
/*      ROAD OF LOGIN / DISCONNECT       */
/*****************************************/
/**
 * Connection page
 * @route GET /connection
 * @group Connection - API to connection
 * @returns {object} 200 - Connection
 * @returns {Error}  default - An error has occurred 
 */
router.get("/connection", authController.connection); 

/**
 * Connection page
 * @route POST /connection
 * @group Connection - API to connection
 * @returns {object} 200 - Submission of the login form
 * @returns {Error}  default - An error has occurred 
 */
router.post("/connection", authController.loginUser) 

/**
 * Disconnection page
 * @route POST /disconnect
 * @group Connection - API to disconnect
 * @returns {object} 200 - Submission of disconnect form
 * @returns {Error}  default - An error has occurred 
 */
router.post("/disconnect", authController.disconnection) 



/***************************************/
/*          ROADS OF ADMIN             */
/***************************************/
//! TEST ALL ADMIN ROADS
/* Express allows us to chain middlewares / controllers by a next
Admin route with methods to add projects, promos and students
Verification that the user, who wants to use the route /admin, has the role of admin, then chain the methods add and update of the 3 tables
*/ 

/******* Projects management *******/
// router.post("/admin", adminMiddleware.isAdmin, adminController.addProject);
// router.patch("/admin", adminMiddleware.isAdmin, adminController.updateProject);

// /******* Promos management *******/
// router.post("/admin", adminMiddleware.isAdmin, adminController.addPromo);
// router.patch("/admin", adminMiddleware.isAdmin,adminController.updatePromo); 

// /******* Students management *******/
// router.post("/admin", adminMiddleware.isAdmin, adminController.addStudent)
// router.patch("/admin", adminMiddleware.isAdmin, adminController.updateStudent); 



/* Exportation of router */
 module.exports = router;