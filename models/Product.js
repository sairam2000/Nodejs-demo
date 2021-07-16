const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    qtyPerUnit: {
        type: Number,
        default: 1
    },
    unitPrice: {
        type: Number,
        required: true
    },
    unitInStock: {
        type: Number
    },
    discontinued: {
        type: Boolean,
        default: false
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,            // Reference to Category model 
        ref: 'Category'
    }
})

module.exports = mongoose.model("Product", productSchema)