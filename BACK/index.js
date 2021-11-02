/* Requiring dotenv allows loads environment variables from a .env file into process.env. */
require('dotenv').config();

/* ------------------------------------- */
/* Initialising Express */
const express = require('express');

/* ------------------------------------- */
/* Calling Express */
const app = express();

/* ------------------------------------- */
/* Requiring Express-JWT*/
const jwt = require('express-jwt');

/* ------------------------------------- */
/* Requiring jsonwebtoken */
// const jsonwebtoken = require('jsonwebtoken');

/* ------------------------------------- */
// const jwtSecret = 'IIUFHW98YW4TFHJCX7fr4r90ixjjnxcxe98208eJIHXKSIFOR9T2KAK';
/* ------------------------------------- */

/* Access rights agreement to the information of a POST via req.body -
The extented to false allows to receive only values of type string or array. 
If it is true, we can receive any type of value.
The middleware to parse the data received especially when sending a form.
*/
app.use(express.urlencoded({ extended: true }));
/* ------------------------------------- */
const authorizationMiddleware = jwt({
    secret: jwtSecret, 
    algorithms: ['HS256']
});

/* ------------------------------------- */
/* User management through middlewares (visitor, student, admin) */
/* Tracks visitors */
// const visitorMiddleware = require("./app/middlewares/visitorMiddleware.js");
// app.use(visitorMiddleware);

/* ------------------------------------- */
/* Update locals with user data */
// const userMiddleware = require("./app/middlewares/userMiddleware");
// app.use(userMiddleware);

/* ------------------------------------- */
/* Middleware that allows to display and receive json via POST */
app.use(express.json());

/* ------------------------------------- */
/* Authorization to access the API for the whole world */
const cors = require('cors');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
});
app.use(cors({
    origin: '*'}));

/* ------------------------------------- */
/* Port setup - support for the port chosen by the developer if there is one, otherwise 5000 */
const port = process.env.PORT || 5000;

/* ------------------------------------- */
/* Requiring router */
const router = require("./app/router.js");
app.use(router);

/* ------------------------------------- */
/* Launching server */
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

