// Requiring dotenv
require('dotenv').config();

// Initialising express
const express = require('express');

// Requiring router
const router = require("./app/router");
app.use(router);

// Calling express
const app = express();

// Middleware qui permet d'afficher de recevoir du json via des POST
app.use(express.json());

// Port setup
const port = process.env.PORT || 5000;

// Launching server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});