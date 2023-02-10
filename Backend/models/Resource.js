const mongoose = require('mongoose')

const ResourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    projects:{
        type:Array,
        default:[]
    },
    gender:{
        type:String,
        enum:['male','female']
    },
    WFH:{
        type:Boolean,
        required:true
    },
    designation:{
        type:String,
        max:500
    },
    hours:{
        type:Number,
        default:37.5
    },
    fatigue:{
        type:Number,
        enum:[0,1,2,3,4,5]
    },
},{timestamps:true})

module.exports = mongoose.model('Resources',ResourceSchema);