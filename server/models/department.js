const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    value:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    }
})

const departmentSchema = new mongoose.Schema({
    value:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    branch:{
        type: [branchSchema],
        required: false
    }
})

module.exports = mongoose.model('Departments', departmentSchema, "Departments")