const mongoose = require('mongoose')

const Voucher = mongoose.model('vouchers', {
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
    expiryDuration: {
        type: Number,
        required: true
    },
    imgSRC: {
        type: String,
        required: true
    },
    lazcoins: {
        type: Number,
        required: true
    },
})

module.exports = {Voucher}