const mongoose = require('mongoose')

const Library = mongoose.model('library', {
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
    status : {
        type: String,
        required: true
    }
})

module.exports = {Library}