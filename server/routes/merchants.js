const express = require('express')
const router = express.Router()
const Merchant = require('../models/merchant')

// Getting all tickets
router.get('/', async (req, res) => {
    try{
        const merchants = await Merchant.find()
        res.json(merchants)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
// Getting one ticket
router.get('/:serial', getMerchant, (req, res) => {
    res.json(res.merchant)
})

router.get('/search/:query', findMerchants, (req,res) => {
    res.json(res.merchants)
})

async function getMerchant(req, res, next) {
    let merchant
    try {
        merchant = await Merchant.findOne({serial: req.params.serial})
        if(!merchant) {
            return res.status(404).json({message:"Merchant not found"})
        }
        res.merchant = merchant
        next()
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

async function findMerchants(req, res, next) {
    const query = req.params.query;
    const regexQuery = new RegExp(query, "i");

    let merchants;
    try {
      merchants = await Merchant.find({
        $or: [
          { serial: regexQuery },
          { merchantId: regexQuery },
          { DBA: regexQuery },
          { phonenumber: regexQuery}
        ],
      });
      res.merchants = merchants;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

module.exports = router