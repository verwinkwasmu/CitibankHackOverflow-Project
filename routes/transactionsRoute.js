const express = require('express');
const router = express.Router();

const {Transaction} = require('../models/transactions');

//get all transactions
router.get('/transactions', async (req,res) => {
    try{
        const transaction = await Transaction.find();
        res.json(transaction)
    } catch(err) {
        res.json({message: err})
    }
})


//add new transaction
router.post('/transactions/add', async (req,res) => {
    const transaction = new Transaction({
        voucherID: req.body.voucherID,
        voucherName: req.body.voucherName,
        price: req.body.price,
        value: req.body.value,
        expiryDuration: req.body.expiryDuration,
        totalAmountPaid: req.body.totalAmountPaid,
        totalAmountSaved: req.body.totalAmountSaved,
        transactionID: req.body.transactionID,
        originalValueOfProduct: req.body.originalValueOfProduct,
       
    });
    try{
        const savedTransaction = await transaction.save();
        res.json(savedTransaction)
    } catch(err){
        res.json({message: err})
    } 
});

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

// get single voucher via voucherID
// router.get('/vouchers/:voucherID', async (req,res) => {

//     try{
//         const voucher = await Voucher.find({voucherID : req.params.voucherID})
//         console.log(req.params)
//         res.json(voucher)
//     } catch(err) {
//         res.json({message : err})
//     }
    
// })


module.exports = router 