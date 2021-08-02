const express = require('express')
const router = express.Router()

const {Product} = require('../models/products')

//get all products
router.get('/api/products', (req,res) => {
    Product.find({}, (err,data) => {
        if(!err){
            res.send(data);
        }else{
            console.log(err)
        }
    })
})
// // Create product
// router.post('/api/products/add', (req,res) => {
//     const product = new Product({
//         productID: req.body.productID,
//         productName: req.body.productName,
//         price: req.body.price,
//         value: req.body.value,
//         expiryDuration: req.body.expiryDuration,
//     });
//     product.save((err, data) => {
//         res.status(200).json({code: 200, message: 'Product Added Successfully', addProduct:data})
//     })
// })

// get single product (finding by default ID need to find a way to find by product)
router.get('/api/products/:id', (req,res) => {
    Product.findById(req.params.id,(err,data) => {
        if(!err){
            res.send(data);
        }else{
            console.log(err)
        }
    })
    
})

module.exports = router 