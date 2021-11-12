const pool = require("../dataClient.js");

console.log("Je suis dans le model de user");

class User {
    constructor(object) {
        this.id = object.id;
        this.firstname = object.firstname;
        this.lastname = object.lastname;
        this.email = object.email;
        this.password = object.password;
        this.biography = object.biography;
        this.avatar = object.avatar;
        this.id_promo = object.id_promo;
        this.id_project = object.id_project;
        this.id_therole = object.id_therole;
        // console.log("Mon objet user", object);
    }

    async save() {
        const query = {
            text: "INSERT INTO theuser (id, firstname, lastname, email, password, biography, avatar, id_promo, id_project, id_therole) VALUES ($1, $2, $3, &4, $5, $6, $7, $8, $9, $10) RETURNING id",
            values: [
                this.id,
                this.firstname,
                this.lastname,
                this.email,
                this.password,
                this.biography,
                this.avatar,
                this.id_promo,
                this.id_project,
                this.id_therole
            ]
        };

        const result = await pool.query(query);
        // console.log(result);
        // recovery of the generated id
        this.id = result.rows[0].id;
    }
    /* ---------------------------------------------- */
    /**
    * Return all students
    * @returns [students]
    */
    static async getAllStudents() {
        const query = {
            // Display all users with the role of student and sorted by firstname
            text: "SELECT * FROM theuser WHERE theuser.id_therole=$1 ORDER BY firstname",
            values: [2]
        };
        const dbresult = await pool.query(query);
        const studentsDB = dbresult.rows;
        const result = [];
        // Loop on the elements returned by the database  & creation of the Student instances
        for (const studentDB of studentsDB) {
            result.push(new User(studentDB));
        }
        // return a table of instances Student
        return result;

    }
    /* ---------------------------------------------- */
    /**
     * Return one student
     * @returns [student]
     */
    static async getOneStudent(id) {
        const query = {
            text: "SELECT * FROM theuser WHERE id=$1",
            values: [id]
        };
        // console.log("voici l'id", id);
        const result = await pool.query(query);
        // console.log("Resultat de getOneStudent", result);
        // console.log("Nous sommes dans la methode getOneStudent du model User");
        // console.log(result.rows);
        return result.rows[0];
    }
    /* ---------------------------------------------- */
    /**
     * Return one student profile
     * @returns [student profile]
     */
    static async getStudentProfile(id) {
        const query = {
            text: "SELECT id, firstname, lastname, email, biography, avatar, id_promo, id_project FROM theuser WHERE id=$1",
            values: [id]
        };
        // console.log("voici l'id", id);
        const result = await pool.query(query);
        // console.log("Resultat de getStudentProfile", result);
        // console.log("Nous sommes dans la methode getStudentProfile du model User");
        // console.log(result.rows);
        return result.rows[0];
    }
    /* ---------------------------------------------- */
    /**
     * Return new student
     * @returns [new student]
     */
    static async addStudent() {
        const query = {
            text: "INSERT INTO theuser (id, firstname, lastname, email, password, biography, avatar, id_promo, id_project, id_therole) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            values: [id, firstname, lastname, email, password, biography, avatar, id_promo, id_project, id_therole]
        };
        // console.log("Me voici dans la methode addStudent du model student");
        const result = await pool.query(query);
        // console.log(result);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return update student
     * @returns [update student]
     */
    static async updateStudent() {
        const query = {
            text: "UPDATE theuser SET id=$1, firstname=$2, lastname=$3, email=$4, password=$5, biography=$6, avatar=$7, id_promo=$8, id_project=$9, id_therole=$10",
            values: [id, firstname, lastname, email, password, biography, avatar, id_promo, id_project, id_therole]
        };
        // console.log("Me voici dans la methode updateStudent du model user");
        const result = await pool.query(query);
        // console.log(result);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return all students from promo
     * @returns [students from promo]
     */
    static async getStudentsFromPromo (id){
        const query = {
            text: "SELECT * FROM theuser WHERE id_promo=$1 ORDER BY firstname ",//  AND id_therole=2
            values: [id]
        };  
        const result = await pool.query(query);
        // console.log("Resultat de getStudentsFromPromo", result);
        // console.log("Nous sommes dans la methode getStudentsFromPromo du model User");
        // console.log(result.rows);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return students from project
     * @returns [students from project]
     */
    static async getStudentsFromProject (id){
        const query = {
            text: "SELECT * FROM theuser WHERE id_project=$1 AND id_therole=2",
            values: [id]
        };       
        const result = await pool.query(query);
        // console.log("Resultat de getStudentsFromPromo", result);
        // console.log("Nous sommes dans la methode getStudentsFromPromo du model User");
        // console.log(result.rows);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return student email
     * @returns [student email]
     */
    static async getLoginStudent(email) {
        const query = {
            text: "SELECT * FROM theuser WHERE email=$1",
            values: [email]
        };
        // console.log("voici l'email", email);
        const result = await pool.query(query);
        // console.log("Resultat de getOneUser", result);
        // console.log("Nous sommes dans la methode getOneUser du model");
        // console.log(result.rows);
        return result.rows;
    }
    // /* ---------------------------------------------- */
    // /**
    //  * Return admin email
    //  * @returns [admin email]
    //  */
    // static async getLoginAdmin(email) {
    //     const query = {
    //         text: "SELECT * FROM theuser WHERE email=$1 AND id_therole=1",
    //         values: [email]
    //     };
    //     // console.log("voici l'email", email);
    //     const result = await pool.query(query);
    //     // console.log("Resultat de getOneUser", result);
    //     // console.log("Nous sommes dans la methode getOneUser du model");
    //     // console.log(result.rows);
    //     return result.rows[0];
    // }
};


/* Exports User model */
module.exports = User;