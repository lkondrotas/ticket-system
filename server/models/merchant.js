const mongoose = require('mongoose')

const merchantSchema = new mongoose.Schema({
    serial:{
        type: String,
        Requires: true
    },
    merchantId:{
        type: String,
        Requires: true
    },
    DBA:{
        type: String,
        Requires: true
    },
    address:{
        type: String,
        Requires: true
    },
    phonenumber:{
        type: String,
        Requires: true
    },
    email:{
        type: String,
        Requires: true
    }
})

module.exports = mongoose.model('Merchants', merchantSchema, "Merchants")