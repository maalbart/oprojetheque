const pool = require("../dataClient.js");

class Student {
    constructor(object){
        this.firstname = object.name;
        this.lastname = object.logo;
        this.email = object.email;
        this.password = object.password;
        this.biography = object.biography;
        this.avatar = object.avatar;
        this.id_promo = object.id_promo;
        this.id_project = object.id_project;

    }

    async save(){
        const query = {
            text: "INSERT INTO student (firstname, lastname, email, password, biography, avatar, id_promo, id_project) VALUES ($1, $2, $3, &4, $5, $6, $7, $8) RETURNING id",
            values: [
                this.firstname,
                this.lastname,
                this.email,
                this.password,
                this.biography,
                this.avatar,
                this.id_promo,
                this.id_project
            ]
        };

        const result = await pool.query(query);
        console.log(result);
        // recovery of the generated id
        this.id = result.rows[0].id;

    }

     /**
     * Return all students
     * @returns [Students]
     */
    static async getAllStudents(){
        const query = {
            text: "SELECT * FROM student",
            values: []
        };

        const dbresult = await pool.query(query);
        

        const studentsDB = dbresult.rows;
        const result = [];

        // Loop on the elements returned by the database  & creation of the Student instances
        for (const studentDB of studentsDB){
            result.push(new Student(studentDB));
        }

        // return a table of instances Student
        return result;
        
    }
    static async getOneStudent(id){
        const query = {
            text:"SELECT * FROM student WHERE id=$1",
            values:[id]
        };
        console.log ("voici l'id", id);

        const result = await pool.query(query); 
        console.log("Resultat de getOneStudent", result);

        console.log("Nous sommes dans la methode getOneStudent du model");
        console.log(result.rows);
        return result.rows[0];
    }
};

module.exports = Student;