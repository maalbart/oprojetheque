const adminMiddleware = {
    // method that checks if you are an administrator
    isAdmin:(req,res,next)=>{
        // console.log("-  isAdmin");
        // console.log(req.session.user);
        // Test to know if you are connected and if you have the admin role
        if(req.session.user && req.session.user.role == "admin"){
            // isadmin is true in the locals to add the css file in the header
            res.locals.isadmin = true;
            next();
        }
        else{
            // Error 403 - forbidden
            return res.status(403).send({error:"Attention!"});
        }
    }
};

module.exports = adminMiddleware;