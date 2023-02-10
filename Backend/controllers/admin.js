const Admin = require('../models/Admin')
const {StatusCodes} = require('http-status-codes')
const {ForbiddenRequestError,UnauthenticatedError} = require('../errors/index')

const getUser = async (req,res)=>{
    const user = await Admin.findById(req.params.id);
    const {password,updatedAt,...other} = user._doc
    res.status(StatusCodes.OK).json(other)
}
const loadUser = async(req,res)=>{
    const {userId} = req.user;
    const user = await Admin.findById(userId);
    const {password,updatedAt,...other} = user._doc
    res.status(StatusCodes.OK).json(other)
}


module.exports = {getUser,loadUser}