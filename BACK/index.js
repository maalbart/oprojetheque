// On require le dotenv
require('dotenv').config();
// On initialise express
const express = require('express');
// On require nos routes
const router = require("./app/router");
app.use(router);

// On appel express
const app = express();

app.use(express.json());


//On paramètre notre port
const port = process.env.PORT || 5000;
// On lance le server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});