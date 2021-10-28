/* Database connection file */

const { Pool } = require('pg');

console.log("URL",process.env.DATABASE_URL);

const client = new Pool({
    // Heroku provides us with the DATABASE_URL
    connectionString: process.env.DATABASE_URL,
    ssl: {
      /* Request to accept the fact of not being in ssl protocol => https */
      rejectUnauthorized: false
    }
  });
  //client.connect();


/* Exportation of client */
module.exports = client;