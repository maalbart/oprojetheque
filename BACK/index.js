/* Requiring dotenv allows loads environment variables from a .env file into process.env. */
require('dotenv').config();

/* Initialising Express */
const express = require('express');

/* Requiring router */
const router = require("./app/router");
app.use(router);

/* Calling Express */
const app = express();

/* Access rights agreement to the information of a POST via req.body -
The extented to false allows to receive only values of type string or array. 
If it is true, we can receive any type of value.
The middleware to parse the data received especially when sending a form.
*/
app.use(express.urlencoded({ extended: true }));

/* User management through middlewares (visitor, student, administrator) */
const adminMiddleware = require(".app/middlewares/adminMiddleware");
app.use(adminMiddleware);

const studentMiddleware = require(".app/middlewares/studentMiddleware");
app.use(studentMiddleware);

const visitorMiddleware = require(".app/middlewares/visitorMiddleware");
app.use(visitorMiddleware);

/* Middleware that allows to display and receive json via POST */
app.use(express.json());

/* Port setup - support for the port chosen by the developer if there is one, otherwise 5000 */
const port = process.env.PORT || 5000;

/* Launching server */
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});