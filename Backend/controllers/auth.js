const User = require('../models/Admin')
const {StatusCodes} = require('http-status-codes')
const {UnauthenticatedError,BadRequestError} = require('../errors')

const register = async(req,res)=>{
    const {email,password,username,isSuperAdmin} = req.body;
    if(!email || !password || !username || isSuperAdmin === undefined)
        throw new BadRequestError("Provide username,email,password,isSuperAdmin")
    
    const user = await User.create({...req.body})
    const token = user.createJWT();
    
    res.cookie("jwt",token,{httpOnly:true,expires:new Date(Date.now()+1.728e+8)})
    res.status(StatusCodes.CREATED).json({user:{name:user.getName(),id:user.getId()},token:token})
}
const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
        throw new BadRequestError('Please provide email & password')
    const user = await User.findOne({email})
    if(!user)
        throw new UnauthenticatedError('Invalid Credentials')
    const passCorrect = await user.comparePassword(password);
    if(!passCorrect)
        throw new UnauthenticatedError('Invalid Credentials')
    const token = user.createJWT();
    res.cookie("jwt",token,{httpOnly:true})
    res.status(StatusCodes.OK).json({user:{name:user.getName(),id:user.getId(),isSuperAdmin:user.admin()},token})
}
const logout = async(req,res)=>{
    // logout request has to go through authentication middleware
    // so if token cookie is not provided , error will be thrown
    const {userId,username} = req.user;
    res.clearCookie("jwt")
    res.status(StatusCodes.OK).json({user:{id:userId,name:username},status:"Logout Successfull"})
}

module.exports = {register,login,logout}
