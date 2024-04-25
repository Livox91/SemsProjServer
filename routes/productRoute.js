const express = require('express')
const router = express.Router()


const { getProduct } = require('../controllers/productHandler')

router.get('/:id', getProduct)


module.exports = router