/* Initialising Node-mailer */
const nodemailer = require("nodemailer");

const contactController = {
  /*****************************************/
  /*               CONTACT PAGE            */
  /*****************************************/
  /* Method to display the contact page */
  sendContact:async(req,res)=>{
    /* ------------------------------------- */
    /* Nodemailer configuration */
    /* Note: Gmail users need to allow third party access to let Nodemailer send emails. So turn on the 'Less Secure Apps' settings by following instructions here.*/
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // replace with your email provider
      port: 587, // default
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
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

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: 'Message from oProjetheque',
        text:req.body.message,
      };  
      console.log("le mailOptions", mailOptions);

    transporter.sendMail(mailOptions, (err, info) => {
      console.log("voici l'erreur",err);
        if (err) {
          res.status(500).send("Something went wrong.");
        } else {
          console.log("les info",info.response)
          res.status(200).send("Email successfully sent to recipient!");
        }
    });
  }
};

/* Exports contactController */
module.exports = contactController;