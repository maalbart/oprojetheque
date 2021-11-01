// const validator = require("email-validator");
const { Session } = require("inspector");
const User = require("../models/user.js");


const authController = {
    /***************************************/
    /*      CONNECTION / DECONNECTION      */
    /***************************************/
    /* Method for the student to log in */
    connection: (req, res, next) => {
        res.render("connection/login");
    },
    /* ---------------------------------------------- */
    /* Method for the user to connect*/
    loginUser: async (req, res, next) => {
        // data entered in the login form 
        const form = req.body;
        console.log(form);

        // check that none of the sent properties are null!
        const isOnePropertyNull = !(form.email && form.password);

        if (isOnePropertyNull) {
            /* return an error message */
            return "Une erreur est survenue dans la tentative de connexion. Réintère!";
        }

        try {
            // recovery of the user by mail
            const user = await User.getOneStudent(req.body.email);

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
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    role: user.role
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