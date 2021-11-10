const contactController = {
    /*****************************************/
    /*               CONTACT PAGE            */
    /*****************************************/
    /* Method to display the contact page */
    sendContact:async(req,res)=>{
        try{
            // 1. accepts the form data submitted and parse it using multiparty
            let form = new multiparty.Form();
            let data = {};
            form.parse(req, function(err, fields) {
                console.log(fields);
                Object.keys(fields).forEach(function (property) {
                    data[property] = fields[property].toString();
                });
            
                // 2. after parsing it, create a mail object with from, to, subject and text properties.
                const mail = {
                    from: data.email,
                    to: process.env.EMAIL,
                    subject: data.subject,
                    text: `<${data.email}> \n${data.message}`,
                  };  
                    
                // 3. use transporter.sendMail() to send the email and done
                transporter.sendMail(mail, (err, data) => {
                    if (err) {
                      console.log(err);
                      res.status(500).send("Something went wrong.");
                    } else {
                      res.status(200).send("Email successfully sent to recipient!");
                    }
                  });
            });
                
        
            
        } catch (error){
            res.status(500).send(error);
            res.redirect("/404");
        }
     }
};

/* Exports contactController */
module.exports = contactController;