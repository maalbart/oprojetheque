/* Router initialization */
const express = require("express");
const router = express.Router();

/* Controllers import */
const mainController = require('./controllers/mainController.js');
const projectController = require('./controllers/projectController.js');
const promoController = require('./controllers/promoController.js');
const studentController = require('./controllers/studentController.js')
const authController = require('./controllers/authController.js');
const adminController = require('./controllers/adminController.js');
const contactController = require('./controllers/contactController.js');


/***************************************/
/*             HOME PAGE               */
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
/*            CONTACT PAGE             */
/***************************************/
/**
 * Contact page of the website
 * @route POST /contact
 * @group contactPage 
 * @returns {object} 200 - Contact admin
 * @returns {Error}  default - An error has occurred
 */
 router.post("/contact", contactController. sendContact);


/***************************************/
/*          PROJECTS ROUTES            */
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
/*          PROMOS ROUTES              */
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
 * Recovery of students of one promo
 * @route GET /promo/:id
 * @group Projects - API to display students of one promo 
 * @returns {object} 200 - All students of one promo
 * @returns {Error}  default - An error has occurred
 */
router.get("/promo/:id", promoController.getOnePromo);


/***************************************/
/*          STUDENTS ROUTES            */
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
 * Recovery of one student of one 
 * @route GET /student/:id
 * @group Projects - API to display one student
 * @returns {object} 200 - One student
 * @returns {Error}  default - An error has occurred
 */
router.get("/student/:id", studentController.getOneStudent);

/**
 * Recovery of one student of one 
 * @route 
 * @group Projects - API to 
 * @returns {object} 200 - 
 * @returns {Error}  default - An error has occurred
 */
 router.get("/student/profile", studentController.studentProfile);
 router.patch("/student/profile", studentController.studentProfile);
 router.delete("/student/profile", studentController.studentProfile);


/*****************************************/
/*           LOGIN/LOGOUT ROUTE          */
/*****************************************/
/**
 * Connection page
 * @route GET /connection
 * @group Connection - API to connect
 * @returns {object} 200 - Connection
 * @returns {Error}  default - An error has occurred 
 */
router.get("/connection", authController.connection); 

/**
 * Connection page
 * @route POST /connection
 * @group Connection - API to connect
 * @returns {object} 200 - Submission of the login form
 * @returns {Error}  default - An error has occurred 
 */
//! A checker (sinon faire deux routes, une /student et une autre /admin)
router.post("/connection", authController.loginStudent); 
//router.post("/connection", authController.loginStudent, authController.loginAdmin); 


/**
 * Disconnection page
 * @route POST /disconnect
 * @group Connection - API to disconnect
 * @returns {object} 200 - Submission of disconnect form
 * @returns {Error}  default - An error has occurred 
 */
router.post("/disconnect", authController.disconnection) 



/***************************************/
/*          ADMIN ROUTES               */
/***************************************/
/******* Projects management *******/
// router.post("/admin", adminController.addProject);
// router.patch("/admin", adminController.updateProject);

// /******* Promos management *******/
router.post("/admin", adminController.addPromo);
// router.patch("/admin", adminController.updatePromo); 

// /******* Students management *******/
// router.post("/admin", adminController.addStudent)
// router.patch("/admin", adminController.updateStudent); 


/* Exportation of router */
 module.exports = router;