// const User = require("../models/user.js");

const userMiddleware = (req,res,next)=> {
    if(req.session.user){
        res.locals.user = req.session.user; // Save user info in locals
        console.log(req.url);
        console.log(res.locals.user);
    }

    next();
};

module.exports = userMiddleware;