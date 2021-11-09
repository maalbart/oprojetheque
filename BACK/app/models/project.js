const pool = require("../dataClient.js");

// console.log ("Je suis dans le model de projet")

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
        // console.log("RESULT du projectModel", result);
        // recovery of the generated id
        this.id = result.rows[0].id;
    }
    /* ---------------------------------------------- */
    /**
     * Return all projects
     * @returns [projects]
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
    /* ---------------------------------------------- */
    /**
     * Return one project
     * @returns [project]
     */
    static async getOneProject(id){
        const query = {
            text:"SELECT * FROM project WHERE id=$1",
            values:[id]
        };
        // console.log ("voici l'id", id);
        const result = await pool.query(query); 
        // console.log("Resultat de getOneProject", result);
        // console.log("Nous sommes dans la methode getOneProject du model");
        // console.log(result.rows);
        return result.rows[0];
        
    }
    /* ---------------------------------------------- */
    /**
     * Return random projects
     * @returns [random projects]
     */
    static async projetsRandom(){
        const query = {
            // display of 5 projects at random
            text:"SELECT * FROM project ORDER BY RANDOM() LIMIT 5",
            values:[]
        };
        // console.log("Me voici dans la methode projectsRandom du model project");
        const result = await pool.query(query);
        // console.log(result);
        return result.rows;
    }

    /* ---------------------------------------------- */
    /**
     * Return new project
     * @returns [new project]
     */
    static async addProject(){
        const query = {
            text: "INSERT INTO project (id, name, logo, description, site_link, site_screen, youtube_link, id_promo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            values: [id, name, logo, description, site_link, site_screen, youtube_link, id_promo]
        };
        // console.log("Me voici dans la methode addProject du model project");
        const result = await pool.query(query);
        // console.log(result);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return update project
     * @returns [update project]
     */
    static async updateProject(){
        const query = {
            text: "UPDATE project SET id=$1, name=$2, logo=$3, description=$4, site_link=$5, site_screen=$6, youtube_link=$7, id_promo=$8",
            values: [id, name, logo, description, site_link, site_screen, youtube_link, id_promo]
        };
        // console.log("Me voici dans la methode updateProject du model project");
        const result = await pool.query(query);
        // console.log(result);
        return result.rows;
    }
    /* ---------------------------------------------- */
    /**
     * Return project from student
     * @returns [project from student]
     */
    static async getProjectFromStudent(id){
        const query = {
            text:"SELECT * FROM project LEFT JOIN theuser ON project.id = theuser.id_project WHERE theuser.id=$1 ",
            values:[id]
        };
        // console.log ("voici l'id", id);
        const result = await pool.query(query); 
        // console.log("Resultat de getOneProject", result);
        // console.log("Nous sommes dans la methode getOneProject du model");
        // console.log(result.rows);
        return result.rows; 
    }
};


/* Exports Project model */
module.exports = Project;