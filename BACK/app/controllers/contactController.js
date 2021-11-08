const contactController = {
    /*****************************************/
    /*               CONTACT PAGE            */
    /*****************************************/
    /* Method to display the contact page */
    sendContact:async(req,res)=>{
        try{
            // const contactSend = ;
            
        } catch (error){
            res.status(500).send(error);
            res.redirect("/404");
        }
     }
};

/* Exports contactController */
module.exports = contactController;