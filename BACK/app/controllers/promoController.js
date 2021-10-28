/* HERE WE HAVE TO REQUIRE THE MODELS AFTER WE'VE CODED THEM */
const Promo = require ("../models/promos.js");

const promoController = {
    /* Method to display the promo page */
    getAllPromos:async(req,res)=>{
       console.log("Bienvenue sur la page des promos");
       const promos = await Promo.getAllPromos();
       res.json(promos);
    },
    /* Method to display the project page */
    getOnePromo:async(req,res)=>{
        console.log("Bienvenue sur la page d'une promo");
        const promoId = await Promo.getOnePromo(req.params.id);
        console.log("projectId", promoId);
        res.json(promoId);
     }

};


/* Exports mainController */
module.exports = promoController;