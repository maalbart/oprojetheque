const pool = require("../dataClient.js");

class Promo {
    constructor(object){
        this.name = object.name;
        this.logo = object.logo;
        this.starting_date = object.starting_date;
        this.ending_date = object.ending_date;
    }

    async save(){
        const query = {
            text: "INSERT INTO promo (name, logo, starting_date, ending_date) VALUES ($1, $2, $3, &4) RETURNING id",
            values: [
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
};

module.exports = Promo;