const express = require('express')
const router = express.Router()

router.get("/",(req,res,next) => {
    res.status(200).json({
        message:"handle get request"
    })
})

router.post("/",(req,res,next) => {
    res.status(201).json({
        message:"handle post request"
    })
})

router.get("/:productId",(req,res,next) => {
    res.status(200).json({
        message:"handle get request for single product"
    })
})

router.patch("/:productId",(req,res,next) => {
    res.status(200).json({
        message:"handle patch request for product update"
    })
})

router.delete("/:productId",(req,res,next) => {
    res.status(200).json({
        message:"handle delete request for single product delete"
    })
})
module.exports = router