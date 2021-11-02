
// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:8080/', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080/"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });






/* ------------------------------------- */
/* Sessions management */
// const session = require("express-session");
// app.use(session({
//     secret: process.env.SECRET,
//     resave: true, //autosave at the end of the request
//     saveUninitialized: true, // save all sessions - even empties
//     cookie: {
//         secure: false,
//         maxAge: (1000 * 60 * 60) // one hour
//     }
// }));
---------------------------------

    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    -----------------------------------

    if (form.remember == "true") {
                       

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
