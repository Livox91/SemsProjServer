const mongoose = require('mongoose')

const prodvaropSchema = new mongoose.Schema({
    variantopid: {
        type: Number,
        required: true,
        unique: true
    },

    variantopname: {
        type: String,
        required: true,
    },
    variant_id: {
        type: mongoose.Types.ObjectId,
        ref: 'prodvarModel'

    }
})


const prodvaropModel = mongoose.model('variation_option', prodvaropSchema)

module.exports = prodvaropModel