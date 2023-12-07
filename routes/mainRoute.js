const express = require('express')
const router = express.Router()

const { getProducts } = require('../controllers/productHandler');

router.get('/', getProducts)

module.exports = router

// const result = await prodvaropModel.findOne({ variantopid: 3 }).populate({ path: 'variant_id', model: prodvarModel, populate: { path: 'category_id', model: prodcatModel } }).exec()