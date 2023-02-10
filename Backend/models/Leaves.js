const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    adminId:{
        type:String,
        required:true
    },
    resourceId:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    day:{
        type:Date,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Leaves',LeaveSchema);