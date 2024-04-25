const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: 'prodcatSchema'
    },
    name: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel