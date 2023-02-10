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
    hours_worked:{
        type:Number,
        default:0
    },
    hours_available:{
        type:Number,
        default:150
    },
    fatigue:{
        type:Number,
        enum:[0,1,2,3,4,5]
    },
},{timestamps:true})

module.exports = mongoose.model('Resources',ResourceSchema);