/* HERE WE HAVE TO REQUIRE THE MODELS AFTER WE'VE CODED THEM */
const Promo = require ("../models/promos.js");

const promoController = {
    /* Method to display the promo page */
    getAllPromos:async(req,res)=>{
       console.log("Bienvenue sur la page des promos");
       const promos = await Promo.getAllPromos();
       res.json(promos);
    }

};


/* Exports mainController */
module.exports = promoController;