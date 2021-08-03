const mongoose = require('mongoose')

const Transaction = mongoose.model('transactions', {
    voucherID: {
        type: String,
        required: true
    },
    voucherName: {
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
    totalAmountPaid: {
        type: Number,
        required: true
    },
    totalAmountSaved: {
        type: Number,
        required: true
    },
    transactionID: {
        type: Number,
        required: true
    },
    originalValueOfProduct: {
        type: Number,
        required: true
    },
})

module.exports = {Transaction}

