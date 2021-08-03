const express = require('express')
const router = express.Router()

const {User} = require('../models/user')

// Get All Users
router.get('/users', async (req,res) => {
    try{
        const user = await User.find();
        res.json(user)
    } catch(err) {
        res.json({message: err})
    }
})

// Get one user via userID
router.get('/users/:userID', async (req,res) => {
    try{
        const user = await User.find({userID : req.params.userID});
        res.json(user)
    } catch(err) {
        res.json({message: err})
    }
})

// Create a User
router.post('/users/add', async (req,res) => {
    const user = new User({
        userID: req.body.userID,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        userType: req.body.userType,
        loyaltyPoints: req.body.loyaltyPoints
    });

    try{
        const savedUser = await user.save();
        res.json(savedUser)
    } catch(err){
        res.json({message: err})
    }
})

// Authenticate User



module.exports = router 