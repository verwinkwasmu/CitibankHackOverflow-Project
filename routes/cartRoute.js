const express = require('express')
const router = express.Router()
const {Cart} = require('../models/cart')

//get all products in cart
router.get('/cart/:userName', async (req,res) => {
    try{
        const cart = await Cart.find({userName : req.params.userName});
        res.json(cart)
    } catch(err) {
        res.json({message: err})
    }
    
})

// Add to Cart (*** array system ) right now im only adding one item to cart
router.post('/cart/add', async (req,res) => {
    const cart = new Cart({
        userName: req.body.userName,
        voucherID: req.body.voucherID,
        voucherName: req.body.voucherName,
        costPrice: req.body.costPrice,
        value: req.body.value,
        lazcoins: req.body.lazcoins,
        imgSRC: req.body.imgSRC
    });
    try{
        const savedCart = await cart.save();
        res.json(savedCart)
    } catch(err){
        res.json({message: err})
    }
    
})

// Delete exisiting voucher from cart
router.delete('/cart/delete/:id', (req, res) => {
    Cart.findByIdAndRemove(req.params.id, (err,data) => {
        if (!err){
            res.status(200).json({code:200, message: 'Voucher Removed Succesfully',
            deleteVoucher: data})
        }
        else{
            res.status(400).json({code:400, message: 'Failed, Please try again'})
        }
    })
})

// Delete All vouchers from cart
router.delete('/cart/delete', (req,res) => {
    Cart.deleteMany({}, (err,data) => {
        if (!err){
            res.status(200).json({code:200, message: 'Voucher Removed Succesfully',
            deleteVoucher: data})
        }
        else{
            res.status(400).json({code:400, message: 'Failed, Please try again'})
        }
    })
})


module.exports = router 