/* Requiring dotenv allows loads environment variables from a .env file into process.env. */
require('dotenv').config();

/* -------------------------------------* /
/* Initialising Express */
const express = require('express');

/* -------------------------------------* /
/* Initialising Cloudinary */
const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

/* ------------------------------------- */
/* Calling Express */
const app = express();

/* ------------------------------------- */
/* Cloudinary configuration */
cloudinary.config({
  cloud_name: "dieupu7jn",
  api_key: '761866131662332',
  api_secret: 'Ch_tOPLd7DInTQj4S6iudmVvhEo',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "oProjethèque",
  },
});

/* Package that allows us to manage incoming files in HTTP requests*/
const upload = multer({ storage: storage });
app.post("/", upload.single("picture"), async (req, res) => {
  return res.json({ picture: req.file.path });
});

/* ------------------------------------- */
/* Requiring Express-JWT*/
const jwt = require('express-jwt');

/* ------------------------------------- */
/* Requiring jsonwebtoken */
const jsonwebtoken = require('jsonwebtoken');

/* ------------------------------------- */
/* Access rights agreement to the information of a POST via req.body -
The extented to false allows to receive only values of type string or array. 
If it is true, we can receive any type of value.
The middleware to parse the data received especially when sending a form.
*/
app.use(express.urlencoded({ extended: true }));

/* ------------------------------------- */
/* Middleware that allows to display and receive json via POST */
app.use(express.json());

/* ------------------------------------- */
/* Authorization to access the API for the whole world */
const cors = require('cors');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X_Token, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    if(req.method === 'OPTIONS'){
      res.sendStatus(200);
    }
    else{
      next();
    }
});

app.use(cors({
  origin: '*'
}));

/* ------------------------------------- */
/* MulterMiddleware */
const multerMiddleware = multer({ storage: storage });

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

/* ------------------------------------- */
/* MulterMiddleware via POST*/
app.post('/upload',
  multerMiddleware.single('mon-fichier'),
  (req, res) => {
    // at this point, MulterMiddleware already uploaded the file to Cloudinary, the uploaded image's link is accessible in "req.file"
    const fileURL = req.file.path;

    // console.log('Lien Cloudinary', fileURL)

    // save this link in your database
    res.json({ path: fileURL });
  }
);




