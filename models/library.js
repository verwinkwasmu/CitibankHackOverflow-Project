const mongoose = require('mongoose')

const Library = mongoose.model('library', {
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
    status : {
        type: String,
        required: true
    },
    // Not sure whats the input for this yet
    qrCode : {
        type: String,
        required: true
    },
})

module.exports = {Library}