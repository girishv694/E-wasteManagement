const jwt = require('jsonwebtoken')

module.exports = function auth (req,res,next){

    const token = req.header('auth-token')
    if(!token)
    return res.status(400).send("you are not allowed");
    try{
        const verified = jwt.verify(token,'secret123')
        req.user = verified;
        next();
    }
    catch(err){
        res.send("something wrong");
    }
}