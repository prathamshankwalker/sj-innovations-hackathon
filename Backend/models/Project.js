const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    adminId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    resources:{
        type:Array,
        default:[]
    },
    status:{
        type:String,
        max:30
    },
    type:{
        type:String,
        max:30
    },
    deadline:{
        type:Date,
    },
    desc:{
        type:String,
        max:500
    }
},{timestamps:true})

module.exports = mongoose.model('Projects',ProjectSchema);