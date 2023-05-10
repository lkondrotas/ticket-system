const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:false,
        default: "NO PASSWORD YET"
    },
    department:{
        type:String,
        required: false
    },
    branch:{
        type:String,
        required: false
    },
    admin:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('Users', userSchema, "Users")