const visitorMiddleware = {
    save:(req,res,next)=>{
        //console.log("IP : ",req.headers['x-forwarded-for']);
        //console.log("Connection : ",req.connection);
        next();
    }
};

module.exports = visitorMiddleware;