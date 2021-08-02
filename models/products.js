const mongoose = require('mongoose')

const Product = mongoose.model('products', {
    productID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    expiryDuration: {
        type: Number,
        required: true
    },
})

module.exports = {Product}