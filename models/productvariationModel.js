const mongoose = require('mongoose')
const prodcatSchema = require('./productCategoriesModel')

const prodvarSchema = new mongoose.Schema({
    variantid: {
        type: Number,
        required: true,
        unique: true
    },
    variantname: {
        type: String,
        required: true,
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: 'prodcatModel'

    },
})

const prodvarModel = mongoose.model('prod_variant', prodvarSchema)

module.exports = prodvarModel