const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
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

// Login 
router.post('/users/login', async (req, res) => {
    const username = req.body.userName
    const password = req.body.password
    const user = await User.findOne({userName : username})

    if (!user) {
        return res.json({status: 'error' , error: 'invalid username/password'})
    } else{
        if (user.password != password){
            return res.json({status: 'error' , error: 'invalid username/password'})
        } else{
            //Create token
            const token = jwt.sign({_id : user._id, userName: user.userName}, process.env.SECRET)

            res.cookie('token', token, {expire: new Date() + 1})
            const {_id, userName, userType} = user
            return res.json({
                token,
                user : {
                    _id,
                    userName,
                    userType
                }
            })
        }
    }

})

// Log Out
router.get('/users/logout', (req,res) => {
    res.clearCookie('token')
    return res.json({
        message :"user signed out"
    })
})
module.exports = router 