const { query } = require('express')
const express = require('express')
const app = express()

const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="api/products">products</a>')
})

// this way we can set a page that returns all the producs
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {id,name,image} = product;
//         return {id,name,image};
//     })
//     res.json(newProducts)
// })

// but if we want to return a page with product id 1, 2 , etc, we have to 
// set up route parameters

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req.params)

    const {productID} = req.params;

    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        res.status(404).send("product does not exist")
    }
    
    return res.json(singleProduct)
})

// query parameter
app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    // res.send("Hello world")

    const {search,limit} = req.query
    let sortedProducts = [...products]

    if(search){
        console.log(req.query)
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        console.log(req.query)
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        // res.status(200).send("No products matched your search")
        // a more better approach is to send a json response as
        return res.status(200).json({success:true,data:[]})

    }

    return res.status(200).json(sortedProducts)
})



app.listen(5000,()=>{
    console.log("listening on 5000")
})

