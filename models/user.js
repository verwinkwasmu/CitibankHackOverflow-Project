const mongoose = require('mongoose')

const User = mongoose.model('users', {
    userID: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    loyaltyPoints: {
        type: Number,
        required: true
    },
})

module.exports = {User}