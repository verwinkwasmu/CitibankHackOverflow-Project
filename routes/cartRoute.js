const express = require('express')
const router = express.Router()

const {Cart} = require('../models/cart')

//get all products in cart
router.get('/cart', async (req,res) => {

    try{
        const cart = await Cart.find();
        res.json(cart)
    } catch(err) {
        res.json({message: err})
    }
    
})

// Add to Cart (*** array system ) right now im only adding one item to cart
router.post('/cart/add', async (req,res) => {
    const cart = new Cart({
        productID: req.body.productID,
        productName: req.body.productName,
        price: req.body.price,
        value: req.body.value,
        expiryDuration: req.body.expiryDuration,
    });
    try{
        const savedCart = await cart.save();
        res.json(savedCart)
    } catch(err){
        res.json({message: err})
    }
    
})

module.exports = router 