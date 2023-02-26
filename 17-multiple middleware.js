const { query } = require('express')
const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')




app.use([authorize,logger]) //order of middleware matters



app.get('/',(req,res)=>{  
    res.send("homepage")
})
app.get('/about',(req,res)=>{
    res.send("About page")
})
app.get('/api/products',(req,res)=>{  
    res.send("product page")
})
app.get('/api/items',(req,res)=>{
    res.send("Items page")
})

app.listen(5000,()=>{
    console.log("listening on 5000")
})