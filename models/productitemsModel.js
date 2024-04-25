const mongoose = require('mongoose')

const productitemSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: 'productSchema'
    },
    qty_instock: {
        type: Number,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    }

})


const proditemModel = mongoose.model('product_items', productitemSchema)

module.exports = proditemModel