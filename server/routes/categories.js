const express = require('express')
const router = express.Router()
const Category = require('../models/category')

// Getting one ticket
router.get('/:type', getByType, (req, res) => {
    res.json(res.categories)
})

router.get('/:type/:value', getSubs, (req,res) => {
    res.json(res.categories)
})

router.post('/', async (req,res)=>{
  const category = new Category({
    value: req.body.value,
    label: req.body.label,
    type: req.body.type,
  })
  try {
      const newCategory = await category.save()
      res.status(201).json(newCategory)
  } catch (err) {
      res.status(400).json({message: err.message})
  }
})


  async function getByType(req, res, next) {
    const query = req.params.type;
    const regexQuery = new RegExp(query, "i");

    let categories;
    try {
      categories = await Category.find({
          type: regexQuery 
      });
      res.categories = categories;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async function getSubs(req, res, next) {
    const typeQuery = req.params.type;
    const regexTypeQuery = new RegExp(typeQuery, "i");
    const valueQuery = req.params.value + "/"
    const regexValueQuery = new RegExp(valueQuery, "i")

    let categories;
    try {
      categories = await Category.find({
        $and: [
            { type: regexTypeQuery },
            { value: regexValueQuery },
          ],
      });
      res.categories = categories;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

module.exports = router