const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    value:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Categories', categorySchema, "Categories")