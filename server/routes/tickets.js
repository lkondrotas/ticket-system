const express = require('express')
const router = express.Router()
const Ticket = require('../models/ticket')

// Getting all tickets
router.get('/', async (req, res) => {
    try{
        const tickets = await Ticket.find()
        res.json(tickets)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
// Getting one ticket
router.get('/:id', getTicket, (req, res) => {
    res.json(res.ticket)
})
// Create ticket
router.post('/', async (req, res) => {
    const ticket = new Ticket({
        ticketStatus: req.body.ticketStatus,
        merchant: req.body.merchant,
        ticketBody: req.body.ticketBody,
        ticketInfo: req.body.ticketInfo,
        departmentInfo: req.body.departmentInfo,
        categories: req.body.categories,
        reporter: req.body.reporter
    })
    try {
        const newTicket = await ticket.save()
        res.status(201).json(newTicket)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
// Update ticket
router.put('/:id', getTicket, async (req, res) => {
    try {
        if (req.body.ticketStatus != null) {
            res.ticket.ticketStatus = req.body.ticketStatus
        }
        if (req.body.merchant != null) {
            res.ticket.merchant = req.body.merchant
        }
        if (req.body.ticketBody != null) {
            res.ticket.ticketBody = req.body.ticketBody
        }
        if (req.body.ticketInfo != null) {
            res.ticket.ticketInfo = req.body.ticketInfo
        }
        if (req.body.departmentInfo != null) {
            res.ticket.departmentInfo = req.body.departmentInfo
        }
        if (req.body.categories != null) {
            res.ticket.categories = req.body.categories
        }
        if (req.body.categories != null) {
            res.ticket.reporter = req.body.reporter
        }

        const updatedTicket = await res.ticket.save()
        res.json(updatedTicket)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post('/addnote/:id', getTicket, async (req, res) => {
    try {
        res.ticket.ticketBody.notes.push(req.body.notes)
        const updatedNotes = await res.ticket.save()
        res.json(updatedNotes)
    } catch (err) {
        res.status(400).json({message: err.message})
    }    
})

async function getTicket(req, res, next) {
    let ticket
    try {
        ticket = await Ticket.findOne({ticketId: req.params.id})
        if(!ticket) {
            return res.status(404).json({message:"Ticket not found"})
        }
        res.ticket = ticket
        next()
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = router