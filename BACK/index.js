// Requiring dotenv allows loads environment variables from a .env file into process.env. 
require('dotenv').config();

// Initialising Express
const express = require('express');

// Requiring router
const router = require("./app/router");
app.use(router);

// Calling express
const app = express();

// the middleware to parse the data received especially when sending a form
app.use(express.urlencoded({ extended: true }))

// Middleware that allows to display and receive json via POST
app.use(express.json());

// Port setup - support for the port chosen by the developer if there is one, otherwise 5000
const port = process.env.PORT || 5000;

// Launching server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});