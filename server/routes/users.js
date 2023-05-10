const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/getByDept/:dept/:branch', getByDept, (req, res) => {
    res.json(res.users)
})

router.get('/allusers', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getByDept(req, res, next) {
    const deptQuery = req.params.dept;
    const branchQuery = req.params.branch;
    const deptRegexQuery = new RegExp(deptQuery, "i");
    const branchRegexQuery = new RegExp(branchQuery, "i");

    let users;
    try {
        users = await User.find({
            $and: [
                { department: deptRegexQuery },
                { branch: branchRegexQuery }
            ],
        }, {projection: {password:0, admin: 0}});
        res.users = users;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router