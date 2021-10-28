const pool = require("../dataClient.js");

console.log ("Je suis dans le model de projet")

class Project{
    
    constructor(object){
        this.id = object.id;
        this.name = object.name;
        this.logo = object.logo;
        this.description = object.description;
        this.site_link = object.site_link;
        this.site_screen = object.site_screen;
        this.youtube_link = object.youtube_link; 
        this.id_promo = object.id_promo;
    }


    async save(){
        const query = {
            text:"INSERT INTO project (id, name, logo, description, site_link, site_screen, youtube_link, id_promo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id",
            values:[
                this.id,
                this.name,
                this.logo,
                this.description,
                this.site_link,
                this.site_screen,
                this.youtube_link,
                this.id_promo
            ]
        };

        const result = await pool.query(query);
        console.log("RESULT du projectModel", result);
        // recovery of the generated id
        this.id = result.rows[0].id;
    }

    /**
     * Return all projects
     * @returns [Project]
     */
     static async getAllProjects(){
        const query = {
            text:"SELECT * FROM project",
            values:[]
        };

        const dbresult = await pool.query(query);

        const projectsDB = dbresult.rows;
        const result = [];
        // Loop on the elements returned by the database  & creation of the Project instances
        for(const projectDB of projectsDB){
            result.push(new Project(projectDB));
        }

        // Return a table of instances Project
        return result;
    }

    static async getOneProject(id){
        const query = {
            text:"SELECT * FROM project WHERE id=$1",
            values:[id]
        };
        console.log ("voici l'id", id);

        const result = await pool.query(query); 
        console.log("Resultat de getOneProject", result);

        console.log("Nous sommes dans la methode getOneProject du model");
        console.log(result.rows);
        return result.rows[0];
    }
    
};



module.exports = Project;