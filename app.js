const express = require('express')
const app = express()

const productRoutes = require('./api/routes/products')


app.use((req,res,next)=>{
    res.status(200).json({
        message:'It Works !'
    })
})
module.exports = app