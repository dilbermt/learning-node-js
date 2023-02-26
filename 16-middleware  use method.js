const { query } = require('express')
const express = require('express')
const app = express()

const logger = require('./logger')
// middleware sits between the req and res



// instead of adding the middleware(logger) to every url path, we can use app.use() method

app.use(logger)
// the position of app.use() matters
// if it is placed below certain url paths, it won't be applied to the ones before it

// we can also set it to work on certain paths also
// eg: app.use('/api',logger) --> applied to all api routes such as api/products or api/items



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

