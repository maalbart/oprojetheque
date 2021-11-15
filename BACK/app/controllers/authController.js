const validator = require("email-validator");
const User = require("../models/user.js");
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = 'IIUFHW98YW4TFHJCX7fr4r90ixjjnxcxe98208eJIHXKSIFOR9T2KAK';


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
            console.log ("Je suis le student");
            console.log("leform email",form.email)
            // check that the user is well found
            if (student) {
                console.log("je suis dans le if du student", student);
                console.log("le form.password", form.password);
                console.log("le student.password", student[0].password);
                // verification that the password is correct
                if (form.password == student[0].password) {
                    // console.log("le form.password", form.password);
                    // console.log("le student.password", student.password);
                        const jwtContent = { studentId: student[0].id };
                        const jwtOptions = {
                            algorithm: 'HS256',
                            expiresIn: '1h'
                        };
                        console.log('200', student[0].firstname);
                        res.json({
                            logged: true,
                            id: student[0].id,
                            firstname: student[0].firstname,
                            lastname: student[0].lastname,
                            id_therole: student[0].id_therole,
                            token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions)
                        })
                        //console.log("le res.json",monRes);
                    
                }
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