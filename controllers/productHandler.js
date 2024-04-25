const mogoose = require('mongoose')
const { prodcatModel } = require('../models/productCategoriesModel');
const productmodel = require('../models/productModel');
const proditem = require('../models/productitemsModel');


async function getProducts(req, res) {
    products = await productmodel.find();
    console.log(products);
    products_price = await proditem.find({})
    console.log(products_price);
    arr = [products, products_price];
    res.json(arr);
}

async function getProduct(req, res) {
    const id = mogoose.Types.ObjectId.createFromTime(req.params.id);
    // const id = new mogoose.Types.ObjectId(req.params.id);
    const category = await prodcatModel.findOne({ _id: id })


    const arr = [category];

    res.json(arr)


}
module.exports = { getProducts, getProduct }
