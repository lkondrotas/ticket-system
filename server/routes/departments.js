const express = require('express')
const router = express.Router()
const Department = require('../models/department')

// Getting one ticket
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find()
        res.json(departments)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const department = new Department({
        value: req.body.value,
        label: req.body.label,
        branch: req.body.branch,
    })
    try {
        const newDepartment = await department.save()
        res.status(201).json(newDepartment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.post('/addbranch/:value', getDepartment, async (req,res)=>{
    try {
        res.department.branch.push(req.body.branch)
        const updatedBranch = await res.department.save()
        res.json(updatedBranch)
    } catch (err) {
        res.status(400).json({message: err.message})
    }    
})

async function getDepartment(req, res, next) {
    let department
    try {
        department = await Department.findOne({value: req.params.value})
        if(!department) {
            return res.status(404).json({message:"Ticket not found"})
        }
        res.department = department
        next()
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = router