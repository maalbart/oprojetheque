/* Requiring dotenv allows loads environment variables from a .env file into process.env. */
require('dotenv').config();

/* ------------------------------------- */
/* Initialising Express */
const express = require('express');

/* ------------------------------------- */
/* Calling Express */
const app = express();

/* ------------------------------------- */
/* Requiring router */
const router = require("./app/router.js");
app.use(router);

/* ------------------------------------- */
/* Authorization to access the API for the whole world*/
const cors = require('cors');
app.use(cors());

/* ------------------------------------- */
/* Access rights agreement to the information of a POST via req.body -
The extented to false allows to receive only values of type string or array. 
If it is true, we can receive any type of value.
The middleware to parse the data received especially when sending a form.
*/
app.use(express.urlencoded({ extended: true }));

/* ------------------------------------- */
/* Sessions management */
const session = require("express-session");
app.use(session({
    secret: process.env.SECRET,
    resave: true, //autosave at the end of the request
    saveUninitialized: true, // save all sessions - even empties
    cookie: {
        secure: false,
        maxAge: (1000 * 60 * 60) // one hour
    }
}));

/* ------------------------------------- */
/* User management through middlewares (visitor, student, admin) */
/* Tracks visitors */
const visitorMiddleware = require("./app/middlewares/visitorMiddleware");
app.use(visitorMiddleware);

/* ------------------------------------- */
/* Update locals with user data */
const userMiddleware = require("./app/middlewares/userMiddleware");
app.use(userMiddleware);

/* ------------------------------------- */
/* Middleware that allows to display and receive json via POST */
app.use(express.json());

/* ------------------------------------- */
/* Port setup - support for the port chosen by the developer if there is one, otherwise 5000 */
const port = process.env.PORT || 5000;

/* ------------------------------------- */
/* Launching server */
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

