const express = require('express')
const router = express.Router()

const {Library} = require('../models/library')

//get available vouchers
// router.get('/library/:', (req,res) => {
//     Library.find({}, (err,data) => {
//         if(!err){
//             res.send(data);
//         }else{
//             console.log(err)
//         }
//     })
// })
// //get redeemed vouchers
// router.get('/library:', (req,res) => {
//     Library.find({}, (err,data) => {
//         if(!err){
//             res.send(data);
//         }else{
//             console.log(err)
//         }
//     })
// })


module.exports = router 