const validator = require("email-validator");
const User = require("../models/user.js");
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = 'IIUFHW98YW4TFHJCX7fr4r90ixjjnxcxe98208eJIHXKSIFOR9T2KAK';


// const bcrypt = require('bcrypt');
// const saltRounds = 10; // Hasher 10 times the password to make it more complex

const authController = {
    /*****************************************/
    /*               CONNECTION              */
    /*****************************************/
    /* Method for the student to log in */
    connection: (req, res, next) => {
        res.render("connection/login");
    },
    /*****************************************/
    /*               LOGIN                   */
    /*****************************************/
    /* Method for the user to connect */
    loginUser: async (req, res, next) => {
        // data entered in the login form 
        const form = req.body;
        // console.log("J'affiche ce qu'il y a dans mon req.body", form);

        // check that none of the sent properties are null!
        const isOnePropertyNull = !(form.email && form.password);

        if (isOnePropertyNull) {
            // send an error message 
            res.send("Veuillez renseigner tous les champs pour vous connecter!");
        } else {
            // check that the email is in the right format
            if (validator.validate(form.email)) {
                // returns true if it's an email
                // console.log("L'email est au bon format!");
                // console.log("MON FORM.EMAIL", form.email);
            } else {
                //Send error response here
                res.status(400).send({
                    message: "This is an error"
                });
            }
        }

        try {
            // recovery of the user by mail
            const user = await User.getOneUser(form.email);

            // check that the user is well found
            if (user) {
                // verification that the password is correct
                if ((form.password, user.password)) {
                    try {
                        const jwtContent = { userId: user.id };
                        const jwtOptions = {
                            algorithm: 'HS256',
                            expiresIn: '1h'
                        };
                        // console.log('200', user.firstname);
                        res.json({
                            logged: true,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            id_therole: user.id_therole,
                            token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions)
                        })
                    } catch (error) {
                        console.log('401, UNAUTHORIZED');
                        res.redirect("/404");
                    }
                }
                res.redirect("/");
            }
            else {
                console.log(error);
                res.redirect("/404");
            }
        } catch (error) {
            console.log(error);
        }
    },
    /*****************************************/
    /*                LOGOUT                 */
    /*****************************************/
    /* Method for the student to disconnect*/
    disconnection: (req, res, next) => {
        // redirection to the home page
        res.redirect("/");
    }
};


/* Exports authController */
module.exports = authController