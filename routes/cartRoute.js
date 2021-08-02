const express = require('express')
const router = express.Router()

const {Cart} = require('../models/cart')

//get all products in cart
router.get('/cart', (req,res) => {
    Cart.find({}, (err,data) => {
        if(!err){
            res.send(data);
        }else{
            console.log(err)
        }
    })
})

// Add to Cart (*** array system ) right now im only adding one item to cart
router.post('/cart/add', (req,res) => {
    const cart = new Cart({
        productID: req.body.productID,
        productName: req.body.productName,
        price: req.body.price,
        value: req.body.value,
        expiryDuration: req.body.expiryDuration,
    });
    cart.save((err, data) => {
        res.status(200).json({code: 200, message: 'Product Added Successfully to Cart', addCart:data})
    })
})

module.exports = router 