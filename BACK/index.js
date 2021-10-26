// Require dotenv
require('dotenv').config();

// Express initialization
const express = require('express');

// Require router
const router = require("./app/router");
app.use(router);

// on appelle Express
const app = express();

// Middleware qui permet d'afficher de recevoir du json via des POST
app.use(express.json());

//On paramètre notre port
const port = process.env.PORT || 5000;

// On lance le server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});