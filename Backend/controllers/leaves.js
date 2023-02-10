const Leaves = require('../models/Leaves')
const Resource = require('../models/Resource')
const {StatusCodes} = require('http-status-codes')
const {UnauthenticatedError,BadRequestError} = require('../errors')

const addLeave = async(req,res)=>{
    const {isSuperAdmin,userId} = req.user

    const {resourceId,reason,day} = req.body;
    if(!resourceId || !reason || !day)
        throw new BadRequestError("Provide resourceId,reason,day")

    const {_doc} = await Resource.findById(resourceId)
    const hours_available = _doc.hours_available - 7.5
    await Resource.findByIdAndUpdate(resourceId,{hours_available:hours_available})
    
    const body = {"resourceId":resourceId,"adminId":userId,"reason":reason,"day":day}
    const leave = await Leaves.create({...body})
    res.status(StatusCodes.CREATED).json({leave,msg:"Leave Added"})
}
const getallLeaves = async(req,res)=>{
    const {isSuperAdmin} = req.user

    if(!isSuperAdmin)
        throw new UnauthenticatedError("You have to be super admin to get all leaves")
    
    const leaves = await Leaves.find({})
    res.status(StatusCodes.OK).json({leaves})
}
const getUserLeaves = async(req,res)=>{
    const {userId} = req.user
    const leaves = await Leaves.find({adminId:userId})
    res.status(StatusCodes.OK).json({leaves})
}
module.exports = {addLeave,getallLeaves,getUserLeaves}