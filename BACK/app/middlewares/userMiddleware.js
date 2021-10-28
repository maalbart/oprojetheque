const userMiddleware = (req,res,next)=> {
    if(req.session.user){
        
        const user = [student, admin];

        console.log("MON USER", user);
        res.locals.user = req.session.user; // Save user info in locals
        // console.log(req.url);
        // console.log(res.locals.user);
    }

    next();
};

module.exports = userMiddleware;