const mongoose = require('mongoose')

const Cart = mongoose.model('carts', {
    voucherID: {
        type: String,
        required: true
    },
    voucherName: {
        type: String,
        required: true
    },
    costPrice: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    lazcoins: {
        type: Number,
        required: true
    },
    
})

module.exports = {Cart}