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
    /* Method for the student to connect */
    loginStudent: async (req, res, next) => {
        // data entered in the login form 
        const form = req.body;
        console.log("J'affiche ce qu'il y a dans mon req.body", form);

        // check that none of the sent properties are null!
        const isOnePropertyNull = !(form.email && form.password);
        console.log("je suis isOnePropertyNull", isOnePropertyNull);
        if (isOnePropertyNull) {
            // send an error message 
            res.send("Veuillez renseigner tous les champs pour vous connecter!");
        } else {
            // check that the email is in the right format
            if (validator.validate(form.email)) {
                console.log("L'email est au bon format!");
                console.log("MON FORM.EMAIL", form.email);
                // return true; //if it's an email
            } else {
                //Send error response here
                res.status(400).send({
                    message: "This is an error"
                });
            }
        }

        try {
            // recovery of the user by mail
            const student = await User.getLoginStudent(form.email);
            console.log ("Je suis le student", student);
            // check that the user is well found
            if (student) {
                // verification that the password is correct
                if (form.password == student.password) {
                    try {
                        const jwtContent = { studentId: student.id };
                        const jwtOptions = {
                            algorithm: 'HS256',
                            expiresIn: '1h'
                        };
                        console.log('200', student.firstname);
                        res.json({
                            logged: true,
                            firstname: student.firstname,
                            lastname: student.lastname,
                            id_therole: student.id_therole,
                            token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions)
                        })
                    } catch (error) {
                        console.log('401, UNAUTHORIZED');
                        // res.redirect("/404");
                    }
                }
                // res.redirect("/");
            }
            else {
                res.status(401).json({
                    message: "Auth failed"
                  });
                // res.redirect("/404");
            }
        } catch (error) {
            console.log(error);
        }
        next()
    },
    /* ---------------------------------------------- */
    /* Method for the admin to connect */
    loginAdmin: async(req, res, next) => {
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
                 return true; //if it's an email
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
            // recovery of the admin by mail
            const isAdmin = await User.getLoginAdmin(form.email);

            // check that the admin is well found
            if(isAdmin){
                // verification thaht the password is correct
                if(form.password, isAdmin.password){
                    try {
                        const jwtContent = { isAdminId: isAdmin.id };
                        const jwtOptions = { 
                            expiresIn: '1h'
                        };

                        // console.log('200', theuser.firstname);
                        res.json({
                            logged: true,
                            firstname: isAdmin.firstname,
                            lastname: isAdmin.lastname,
                            id_therole: isAdmin.id_therole,
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
                res.status(401).json({
                    message: "Auth failed"
                  });
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