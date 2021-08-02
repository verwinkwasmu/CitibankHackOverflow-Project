const express = require('express')
const router = express.Router()

const {User} = require('../models/user')

// Get All Users
router.get('/user', (req,res) => {
    User.find({}, (err,data) => {
        if(!err){
            res.send(data);
        }else{
            console.log(err)
        }
    })
})
// Create a User
router.post('/user/add', (req,res) => {
    const user = new User({
        userID: req.body.userID,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        userType: req.body.userType,
        loyaltyPoints: req.body.loyaltyPoints
    });
    user.save((err, data) => {
        res.status(200).json({code: 200, message: 'Product Added Successfully', addUser:data})
    })
})

// Authenticate User



module.exports = router 