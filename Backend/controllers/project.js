const Project = require('../models/Project')
const Resource = require('../models/Resource')
const Assignment = require('../models/Assignment')
const {StatusCodes} = require('http-status-codes')
const {UnauthenticatedError,BadRequestError} = require('../errors')

const addProjectSuper = async(req,res)=>{
    const {isSuperAdmin} = req.user

    if(!isSuperAdmin)
        throw new UnauthenticatedError("You have to be super admin to create project")

    const {adminId,title,desc,resources,status,type,deadline} = req.body;
    if(!adminId || !title || !desc || !resources || !status || !type || !deadline)
        throw new BadRequestError("Provide adminId,title,desc,resources,status,type,deadline")
    
    const project = await Project.create({...req.body})
    resources.map(async(ele)=>{
        await Resource.findByIdAndUpdate(ele,{$push:{projects:project._id}})
    })
    res.status(StatusCodes.CREATED).json({project,msg:"Project Created"})
}
const assignResource = async(req,res)=>{
    const {resourceId,projectId,hours,week} = req.body;
    
    if(!resourceId || !projectId || !hours || !week)
        throw new BadRequestError("Provide resourceId,projectId,hours,week")
    
    const {_doc} = await Resource.findById(resourceId)
    const hours_worked = _doc.hours_worked + hours
    await Resource.findByIdAndUpdate(resourceId,{hours_worked:hours_worked})
    
    switch(week){
        case 'week1':
            await Assignment.findOneAndUpdate({resource_id:resourceId},{$push:{w1:{projectId:projectId,hours:hours}}})
            break
        case 'week2':
            await Assignment.findOneAndUpdate({resource_id:resourceId},{$push:{w2:{projectId:projectId,hours:hours}}})
            break
        case 'week3':
            await Assignment.findOneAndUpdate({resource_id:resourceId},{$push:{w3:{projectId:projectId,hours:hours}}})
            break
        case 'week4':
            await Assignment.findOneAndUpdate({resource_id:resourceId},{$push:{w4:{projectId:projectId,hours:hours}}})
            break
    }
    res.status(StatusCodes.CREATED).json({msg:"Assignment successful"})
}

const deleteProject = async(req,res)=>{
    const {isSuperAdmin} = req.user;
    const {id} = req.params;

    if(!isSuperAdmin)
        throw new UnauthenticatedError("You have to be super admin to delete project")
    
    const project = await Project.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({msg:"Project Deleted"})
}

const getUserProjects = async(req,res)=>{
    const {userId} = req.user;
    const projects = await Project.find({adminId:userId})
    res.status(StatusCodes.OK).json({projects})
}
const getAllProjects = async(req,res)=>{
    const {isSuperAdmin} = req.user;

    if(!isSuperAdmin)
        throw new UnauthenticatedError("You have to be super admin to get all projects")
    
    const projects = await Project.find({})
    res.status(StatusCodes.OK).json({projects})
}


module.exports = {addProjectSuper,deleteProject,getUserProjects,getAllProjects,assignResource}
