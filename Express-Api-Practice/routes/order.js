const express = require("express")

const router = express.Router()

router.get("/",(req,res,next) => {
    res.status(200).json({
        message:"handle get request for order"
    })
})

router.post("/",(req,res,next) => {
    res.status(201).json({
        message:"handle post request for order"
    })
})

router.get("/:id",(req,res,next) => {
    res.status(200).json({
        message:"handle get request for single order"
    })
})

router.delete("/:id",(req,res,next) => {
    res.status(200).json({
        message:"handle delete request for single order"
    })
})

module.exports = router