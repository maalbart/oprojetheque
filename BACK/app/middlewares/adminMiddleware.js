const adminMiddleware = {
    // method that checks if you are an administrator
    isAdmin:(req,res,next)=>{
        console.log("-  isAdmin");
        console.log(req.session.user);
        // Test to know if you are connected and if you have the admin role
        if(req.session.user && req.session.user.id_therole == 2){
            // isadmin is true in the locals to add the css file in the header
            res.locals.isadmin = true;
            next();
        }
        else{
            // Error 403 - forbidden
            return res.status(403).send({error:"Attention! You don't have access to this road, you are not an admin"});
        }
    }
};

module.exports = adminMiddleware;