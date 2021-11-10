/* Requiring dotenv allows loads environment variables from a .env file into process.env. */
require('dotenv').config();

/* -------------------------------------* /
/* Initialising Express */
const express = require('express');

/* -------------------------------------* /
/* Initialising Node-mailer */
const nodemailer = require("nodemailer");

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
// const jwtSecret = 'IIUFHW98YW4TFHJCX7fr4r90ixjjnxcxe98208eJIHXKSIFOR9T2KAK';
/* ------------------------------------- */

/* Access rights agreement to the information of a POST via req.body -
The extented to false allows to receive only values of type string or array. 
If it is true, we can receive any type of value.
The middleware to parse the data received especially when sending a form.
*/
app.use(express.urlencoded({ extended: true }));
/* ------------------------------------- */

// const authorizationMiddleware = jwt({
//     secret: jwtSecret, 
//     algorithms: ['HS256'
// });

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
    // At this point, MulterMiddleware already uploaded the file to Cloudinary,
    // The uploaded image's link is accessible in "req.file"
    const fileURL = req.file.path;

    console.log('Lien Cloudinary', fileURL)

    // Here, you can save this link in your database.

    res.json({ path: fileURL });
  }
);

/* ------------------------------------- */
/* Nodemailer configuration */
/* Note: Gmail users need to allow third party access to let Nodemailer send emails. So turn on the 'Less Secure Apps' settings by following instructions here.*/
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // replace with your email provider
  port: 587, // default
  auth: {
    user: process.env.EMAIL,//'oprojetheque@gmail.com'
    pass: process.env.PASS,//'oProjetheque@2021'
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
},
});

/* Verify connection configuration */
/* Verify this connection to make the credentials are correct and Nodemailer is authorized to send emails from that address.*/
transporter.verify((error, success) => {
  if(error){
    console.log(error);
  } else {
    console.log("Le serveur est prêt à prendre nos messages!");
  }
});
// 2. after parsing it, create a mail object with from, to, subject and text properties.
const mailOptions = {
  from: req.body.email,
  to: process.env.EMAIL,
  subject: 'Message from oProjetheque',
  text:req.body.message,
};  
console.log("le mailOptions", mailOptions);
  
// 3. use transporter.sendMail() to send the email and done
transporter.sendMail(mailOptions, (err, info) => {
console.log("voici l'erreur",err);
  if (err) {
    res.status(500).send("Something went wrong.");
  } else {
    console.log("les info",info.response)
    res.status(200).send("Email successfully sent to recipient!");
  }
});


