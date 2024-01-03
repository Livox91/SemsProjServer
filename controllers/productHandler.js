const mogoose = require('mongoose')
const { prodcatModel } = require('../models/productCategoriesModel');
const productmodel = require('../models/productModel');
const proditem = require('../models/productitemsModel');
const prodvar = require('../models/productvariationModel');
const prodvarop = require('../models/productvairationoption')

async function getProducts(req, res) {
    products = await productmodel.find();
    products_price = await proditem.find({})
    arr = [products, products_price];
    res.json(arr);
}

async function getProduct(req, res) {
    const id = new mogoose.Types.ObjectId(req.params.id)
    const category = await prodcatModel.findOne({ _id: id })
    const variation = await prodvar.findOne({ category_id: id })
    const varop = await prodvarop.find({ variant_id: variation._id })

    const arr = [category, variation, varop];

    res.json(arr)


}
module.exports = { getProducts, getProduct }
