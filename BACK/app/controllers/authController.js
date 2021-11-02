const validator = require("email-validator");
const User = require("../models/user.js");

const bcrypt = require('bcrypt');
// const saltRounds = 10; // Hasher 10 times the password to make it more complex

const authController = {
    /* Method for the student to log in */
    connection: (req, res, next) => {
        res.render("connection/login");
    },
    /* ---------------------------------------------- */
    /* Method for the user to connect*/
    loginUser: async (req, res, next) => {
        // data entered in the login form 
        const form = req.body;
        console.log("J'affiche ce qu'il y a dans mon req.body", form);

        // check that none of the sent properties are null!
        const isOnePropertyNull = !(form.email && form.password);

        if (isOnePropertyNull) {
            /* send an error message */
            res.send("Veuillez renseigner tous les champs pour vous connecter!");
        } else {
            // check that the email is in the right format
            if (validator.validate(form.email)) {
                // returns true if it's an email
                console.log("L'email est au bon format!");
            } else {
                //Send error response here
                res.status(400).send({
                    message: "This is an error"
                });
            }
        }

        try {
            // recovery of the user by mail
            const user = await User.getOneStudent(form.email);

            // check that the user is well found
            if (user) {
                // verification that the password is correct
                if (bcrypt.compareSync(form.password, user.password)) {
                    // check if the student has ticked on "remember me"
                    if (form.remember == "true") {
                        // recovery of the id in session
                        const sessionID = req.session.id;

                        try {
                            // check if a session exists in DB
                            const session = await Session.getOneStudent(sessionID);

                            if (!session) {
                                // recording a new session
                                const newSession = new Session(sessionID)

                                // register a new session instance (new) to generate its id
                                await newSession.save();

                                /* 
                                Link of the session to user.
                                The setUser doesn't need a save, it automatically saves to the DB.
                                It only needs the instance (newSession) to come from it
                                */
                                await newSession.setUser(user);
                            };


                        } catch (error) {
                            console.log(error);
                            res.redirect("/404");
                        }
                    }
                }
                /* 
                Registration the user in the session
                req.session.user = user;
                delete req.session.user.password; 
                removal of the 'password' key (and thus the associated value)
                */
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    role: user.id_therole
                };

                console.log(req.session.user);

                res.redirect("/");
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    },
    /* ---------------------------------------------- */
    /* method for the student to disconnect*/
    disconnection: (req, res, next) => {
        // destruction of the session to disconnect the user
        req.session.user = null;
        // redirection to the home page
        res.redirect("/");
    }
}


/* Exports authController */
module.exports = authController;