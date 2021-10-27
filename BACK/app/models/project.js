const pool = require("../dataClient.js");

console.log ("je suis dans le model de projet")

class Project{
    
    constructor(object){
        this.name = object.name;;
        this.logo = object.logo;
        this.descirption = object.descirption;
        this.site_link = object.site_link;
        this.site_screen = object.site_screen;
        this.youtube_link = object.youtube_link; 
        this.id_promo = object.id_promo;
        // console.log(object, "je--")
    }


    async save(){
        const query = {
            text:"INSERT INTO project (name, logo, description, site_link, site_screen, youtube_link, id_promo) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
            values:[
                this.name,
                this.logo,
                this.descirption,
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

        // return a table of instances Project
        return result;
    }
};


module.exports = Project;