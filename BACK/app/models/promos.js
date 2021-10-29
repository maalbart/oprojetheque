const pool = require("../dataClient.js");

class Promo {
    constructor(object){
        this.id = object.id;
        this.name = object.name;
        this.logo = object.logo;
        this.starting_date = object.starting_date;
        this.ending_date = object.ending_date;
    }

    async save(){
        const query = {
            text: "INSERT INTO promo (id, name, logo, starting_date, ending_date) VALUES ($1, $2, $3, $4, $5) RETURNING id",
            values: [
                this.id,
                this.name,
                this.logo,
                this.starting_date,
                this.ending_date
            ]
        };

        const result = await pool.query(query);
        console.log(result);
        // recovery of the generated id
        this.id = result.rows[0].id;

    }
    
    /* ---------------------------------------------- */
    
     /**
     * Return all promos
     * @returns [Promos]
     */
    static async getAllPromos(){
        const query = {
            text: "SELECT * FROM promo",
            values: []
        };

        const dbresult = await pool.query(query);
        

        const promosDB = dbresult.rows;
        const result = [];

        // Loop on the elements returned by the database  & creation of the Promo instances
        for (const promoDB of promosDB){
            result.push(new Promo(promoDB));
        }

        // return a table of instances Promo
        return result;
    }
    
    /* ---------------------------------------------- */
    
    /**
     * Return one promo
     * @returns [Promo]
     */
    static async getOnePromo(id){
        const query = {
            text:"SELECT * FROM promo WHERE id=$1",
            values:[id]
        };
        console.log ("voici l'id", id);

        const result = await pool.query(query); 
        console.log("Resultat de getOnePromo", result);

        console.log("Nous sommes dans la methode getOnePromo du model");
        console.log(result.rows);
        return result.rows[0];
    }
    
    /* ---------------------------------------------- */
    
    /**
     * Return new promo
     * @returns [addPromo]
     */
    static async addPromo(){
        const query = {
            text: "INSERT INTO promo (id, name, logo, starting_date, ending_date) VALUES ($1, $2, $3, $4, $5)",
            values: [id, name, logo, starting_date, ending_date]
    };
        
        console.log("Me voici dans la methode addPromo du model promo");
        
        const result = await pool.query(query);
        // console.log(result);
        
        return result.rows;
    }
    
    /* ---------------------------------------------- */
    
    /**
     * Return update promo
     * @returns [updatePromo]
     */
     static async updatePromo(){
        const query = {
            text: "UPDATE promo SET id=$1, name=$2, logo=$3, starting_date=$4, ending_date=$5",
            values: [id, name, logo, starting_date, ending_date]
        };
        
        console.log("Me voici dans la methode updatePromo du model promo");
        
        const result = await pool.query(query);
        // console.log(result);
        
        return result.rows;
    }
    
};

module.exports = Promo;