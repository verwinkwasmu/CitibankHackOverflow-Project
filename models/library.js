const mongoose = require('mongoose')

const Library = mongoose.model('libraries', {
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
    imgSRC: {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true
    }
})

module.exports = {Library}