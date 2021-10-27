/* ICI IL FAUT REQUIRE LES MODELS APRES LES AVOIR CODER */
const Promo = require ("../models/promo.js");

const promoController = {
    /* method to display the promo page */
    getAllPromos:async(req,res)=>{
       console.log("Bienvenue sur la page des promos");
       const promos = await Promo.getAllPromos();
       res.json(promos);
    }

};


/* Exportation of mainController */
module.exports = promoController;