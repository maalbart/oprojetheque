// On require le dotenv
require('dotenv').config();
// On initialise expresse
const express = require('express');
// On require nos routes
const router = require("./app/router");
app.use(router);

// on appel espress
const app = express();

app.use(express.json());


//On paramètre notre port
const port = process.env.PORT || 5000;
// On lance le server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});