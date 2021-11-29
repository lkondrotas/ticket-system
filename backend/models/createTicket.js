const mongoose = require('mongoose');

const createTicket = new mongoose.Schema ({
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  status: { type: String, enum: ['Open', 'Closed', 'Worked on'] },
  callerDetails: {
    name: String,
    phone: Number,
    position: String,
    phoneType: Array,
    email: String
  },
  businessInformation: {
    customerName: String,
    customerId: Number,
    email: String,
    phone: Number,
    address: String 
  },
  problem: {
    subject: {
      type: String,
      required: true
    },
    problemDescription: {
      type: String,
      required: true
    }
  },
  solution: {
    description: {
      type: String,
      required: true
    },
  notes: {
    type: String,
    required: yes
  }  
  }
});

module.exports = mongoose.model('Posts', createTicket);