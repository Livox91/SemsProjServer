const productmodel = require('../models/productModel');

async function getProducts(req, res) {
    result = await productmodel.find();

    res.json(result);
}

module.exports = { getProducts }
