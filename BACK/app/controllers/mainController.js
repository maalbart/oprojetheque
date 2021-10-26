console.log("je suis dans le mainController");
// On crée le initController
const mainController = {
    init:async(req,res)=>{
        const initiation = new ;
        await initiation.save();

        return initiation;
    }

};
// Je rend exportable le initController
module.exports = mainController;