const Resource = require('../models/Resource')
const {StatusCodes} = require('http-status-codes')
const {UnauthenticatedError,BadRequestError} = require('../errors')

const addResource = async(req,res)=>{
    const {isSuperAdmin} = req.user

    if(!isSuperAdmin)
        throw new UnauthenticatedError("You have to be super admin to add resource")

    const {name,dob,gender,WFH,designation,fatigue} = req.body;
    if(!name || !dob || !gender || WFH === undefined || !designation || !fatigue)
        throw new BadRequestError("Provide name,dob,gender,WFH,designation,fatigue")
    
    const resource = await Resource.create({...req.body})
    res.status(StatusCodes.CREATED).json({resource,msg:"Resource Created"})
}

const deleteResource = async(req,res)=>{
    const {isSuperAdmin} = req.user;
    const {id} = req.params;

    if(!isSuperAdmin)
        throw new UnauthenticatedError("You have to be super admin to delete resource")
    
    const resource = await Resource.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({msg:"Resource Deleted"})
}

module.exports = {addResource,deleteResource}
