const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")

const productsRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

app.use('/products', productsRoutes)
app.use('/order',orderRoutes)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

module.exports = app
