const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const merchantSchema = new mongoose.Schema({
    MID: {
        type: Number,
        required: false
    },
    SN: {
        type: Number,
        required: false
    }
})

const ticketBodySchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    errorMessage: {
        type: String,
        required: false
    },
    actionPlan: {
        type: String,
        required: false
    },
    solution: {
        type: String,
        required: false
    },
    notes: {
        type: [noteSchema],
        required: false
    }
})

const ticketCreationInfoSchema = new mongoose.Schema({
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    source: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    ticketStatus:{
        type: String,
        required: true
    }
})

const departmentSchema = new mongoose.Schema({
    reporter: {
        type: Object,
        required: true
    },
    department: {
        type: Object,
        required: false
    },
    branch: {
        type: Object,
        required: false
    },
    asignee: {
        type: Object,
        required: false
    }
})

const categorySchema = new mongoose.Schema({
    requestType: {
        type: Object,
        required: false
    },
    product: {
        type: Object,
        required: false
    },
    category: {
        type: Object,
        required: false
    },
    subCategory: {
        type: Object,
        required: false
    }
})

const reporterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phonenumber: {
        type: String,
        required: false
    },
    verified: {
        type: Boolean,
        required: false
    }
})

const ticketSchema = new mongoose.Schema({
    merchant: {
        type: merchantSchema,
        required: false
    },
    ticketBody: {
        type: ticketBodySchema,
        required: true
    },
    ticketInfo: {
        type: ticketCreationInfoSchema,
        required: true
    },
    departmentInfo: {
        type: departmentSchema,
        required: true
    },
    categories: {
        type: categorySchema,
        required: false
    },
    reporter: {
        type: reporterSchema,
        required: false
    },
    ticketId: {
        type: Number,
        default: 1
    }
})

// Define a separate function to get the maximum ticketId value from the database
ticketSchema.statics.getMaxTicketId = async function() {
    const result = await this.find({}).sort({ ticketId: -1 }).limit(1);
    return result.length > 0 ? result[0].ticketId : 0;
  };
  
  // Override the save method to calculate the ticketId before saving the ticket object
  ticketSchema.pre('save', async function(next) {
    if (this.isNew) {
      try {
        const maxTicketId = await this.constructor.getMaxTicketId();
        this.ticketId = maxTicketId + 1;
      } catch (err) {
        return next(err);
      }
    }
    return next();
  });

module.exports = mongoose.model('Tickets', ticketSchema, "Tickets")