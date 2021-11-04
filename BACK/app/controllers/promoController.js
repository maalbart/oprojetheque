const Promo = require("../models/promo.js");
const User = require("../models/user");

const promoController = {
   /* Method to display the promo page */
   getAllPromos: async (req, res) => {
      try {
         // console.log("Bienvenue sur la page des promos");
         const promos = await Promo.getAllPromos();
         res.json(promos);
      } catch (error) {
         res.status(500).send(error);
         res.redirect("/404");
      }
   },
   /* ---------------------------------------------- */
   /* Method to display the project page */
   getOnePromo: async (req, res, next) => {
      try {
         console.log("Bienvenue sur la page d'une promo");
         const promoId = await Promo.getOnePromo(req.params.id);
         const studentsFromPromo = await User.getStudentsFromPromo(req.params.id);
   //       console.log("Mon req.params",req.params.id);
   //       res.json(studentsFromPromo);
         // console.log("projectId", promoId);
         res.json({promoId, studentsFromPromo});
         
         
      } catch (error) {
         res.status(500).send(error);
         res.redirect("/404");
      }
      next();
      
   },
  
};


/* Exports promoController */
module.exports = promoController;