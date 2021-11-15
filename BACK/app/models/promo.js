const pool = require("../dataClient.js");

class Promo {
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.logo = object.logo;
        this.starting_date = object.starting_date;
        this.ending_date = object.ending_date;
        // console.log("Mon objet promo", object);
    }

    async save() {
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
        //console.log(result);
        // recovery of the generated id
        this.id = result.rows[0].id;

    }
    
    /* ---------------------------------------------- */
    /**
     * Return all promos
     * @returns [promos]
     */
    static async getAllPromos() {
        const query = {
            text: "SELECT * FROM promo ORDER BY name",
            values: []
        };
        const dbresult = await pool.query(query);
        const promosDB = dbresult.rows;
        const result = [];

        // Loop on the elements returned by the database  & creation of the Promo instances
        for (const promoDB of promosDB) {
            result.push(new Promo(promoDB));
        }
        // return a table of instances Promo
        return result;
    }
    /* ---------------------------------------------- */
    /**
     * Return one promo
     * @returns [promo]
     */
    static async getOnePromo(id) {
        const query = {
            text: "SELECT * FROM promo WHERE id=$1",
            values: [id]
        };
        // console.log("voici l'id", id);
        const result = await pool.query(query);
        // console.log("Resultat de getOnePromo", result);
        // console.log("Nous sommes dans la methode getOnePromo du model");
        // console.log(result.rows);
        return result.rows[0];
    }
    
    /* ---------------------------------------------- */
    /**
     * Return promo from project
     * @returns [promo from project]
     */
    static async getPromoFromProject() {
        const query = {
            text: "SELECT * FROM promo",
            values: []
        };
        // console.log("voici l'id", id);
        const result = await pool.query(query);
        // console.log("Resultat de getPromoFromProject", result);
        // console.log("Nous sommes dans la methode getPromoFromProject du model");
        // console.log(result.rows);
        return result.rows[0];
    }
    /* ---------------------------------------------- */
    /**
     * Return new promo
     * @returns [new promo]
     */
    static async addPromo(name, starting_date, ending_date) {
        console.log("je suis dans addpromo");
        const query = {
            text: "INSERT INTO promo (name, starting_date, ending_date) VALUES ($1, $2, $3)",
            values: [name, starting_date, ending_date]
        };
        console.log("Me voici dans la methode addPromo du model promo", query);
        const result = await pool.query(query);
        console.log("résultat depromojs", result);
        return result.rows[0];
    }
    /* ---------------------------------------------- */
    /**
     * Return update promo
     * @returns [update Promo]
     */
    static async updatePromo() {
        const query = {
            text: "UPDATE promo SET id=$1, name=$2, logo=$3, starting_date=$4, ending_date=$5",
            values: [id, name, logo, starting_date, ending_date]
        };
        // console.log("Me voici dans la methode updatePromo du model promo");
        const result = await pool.query(query);
        // console.log(result);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return promo from student
     * @returns [promo from student]
     */
    static async getPromoFromStudent(id) {
        const query = {
            text: "SELECT * FROM promo LEFT JOIN theuser ON promo.id = theuser.id_promo WHERE theuser.id=$1",
            values: [id]
        };
        // console.log("voici l'id", id);
        const result = await pool.query(query);
        // console.log("Resultat de getPromoFromStudent", result);
        // console.log("Nous sommes dans la methode getPromoFromStudent du model");
        // console.log(result.rows);
        return result.rows;
    }
};


/* Exports Promo model */
module.exports = Promo;