const mongoose = require('mongoose')

const prodcatSchema = new mongoose.Schema({
    prodcatid: {
        type: Number,
        required: true,
        unique: true

    },
    category_name: {
        type: String,
        required: true,
        unique: true
    }
})
const prodcatModel = mongoose.model('product_category', prodcatSchema)

module.exports = { prodcatModel, prodcatSchema }