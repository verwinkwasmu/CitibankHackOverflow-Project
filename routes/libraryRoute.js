const express = require('express');
const router = express.Router()

const {Library} = require('../models/library')
const {Transaction} = require('../models/transactions')
// Get Vouchers based on status
router.get('/library/:userName/:status', async (req,res) => {
    try{
        const library = await Library.find({userName : req.params.userName, status : req.params.status});
        res.json(library)
    } catch(err) {
        res.json({message: err})
    }
})

// add cart items to library
router.post('/library/add',  (req,res) => {
    Library.insertMany(req.body).then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.status(400).send(error)
    })

    Transaction.insertMany(req.body).then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.status(400).send(error)
    })
    
})

// Redeem Voucher (change status to Redeemed)
router.put('/library/redeem/:id', (req,res) => {
    const status = {
        status: 'Redeemed'
    }
    Library.findByIdAndUpdate(req.params.id, {$set:status}, {new: true}, (err,data) => {
        if(!err){
            res.status(200).json({code: 200, message: 'Voucher Successfully Redeemed', updateVoucher:data})
        } else{
            console.log(err);
        }
    })
})

module.exports = router 