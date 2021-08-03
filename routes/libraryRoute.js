const express = require('express')
const router = express.Router()

const {Library} = require('../models/library')


// Get Vouchers based on status
router.get('/library/:status', async (req,res) => {
    try{
        const library = await Library.find({status : req.params.status});
        res.json(library)
    } catch(err) {
        res.json({message: err})
    }
})



module.exports = router 