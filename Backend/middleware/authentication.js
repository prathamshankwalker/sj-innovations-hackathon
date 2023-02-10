const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')

async function authenticationMiddleware(req,res,next){
    const token = req.cookies.jwt
    if(!token)
        throw new UnauthenticatedError("No Token provided");
    
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        const {userId,username,isSuperAdmin} = payload;
        req.user = {userId,username,isSuperAdmin};
    }catch(err){
        throw new UnauthenticatedError("Not allowed to access this route")
    }
    next();
}
module.exports = authenticationMiddleware;