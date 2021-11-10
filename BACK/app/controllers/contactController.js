// const multiparty = require("multiparty");
const contactController = {
  
    /*****************************************/
    /*               CONTACT PAGE            */
    /*****************************************/
    /* Method to display the contact page */
    
    sendContact:async(req,res)=>{
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
      // console.log('voici le req',req);
        try{
            // // 1. accepts the form data submitted and parses it using multiparty
            // const form = new multiparty.Form();
            // // console.log('voici le form',form);
            // const data = {};
            // // console.log('data', data);
            // const {email, message} = fields;
            // form.parse(req, function(err, fields) {
            //     console.log(fields);
            //     Object.keys(fields).forEach(function (property) {
            //         data[property] = fields[property].toString();
            //     });
            
                // 2. after parsing it, create a mail object with from, to, subject and text properties.
                const mailOptions = {
                    from: req.body.email,
                    to: process.env.EMAIL,
                    subject: 'Message from oProjetheque',
                    text:req.body.message,
                  };  
                  console.log("le mailOptions", mailOptions);
                    
                
            // });
                
        
            
        } catch (error){
            res.status(500).send(error);
            // res.redirect("/404");
        }
        
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
     }
};

/* Exports contactController */
module.exports = contactController;