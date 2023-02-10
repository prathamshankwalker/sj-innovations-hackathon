const mongoose = require('mongoose')

const AssignSchema = new mongoose.Schema({
    resource_id:{
        type:String,
        required:true
    },
    w1:{
        type:Array,
        default:[]
    },
    w2:{
        type:Array,
        default:[]
    },
    w3:{
        type:Array,
        default:[]
    },
    w4:{
        type:Array,
        default:[]
    }
},{timestamps:true})

module.exports = mongoose.model('Assignment',AssignSchema);