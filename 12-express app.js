const express = require('express');
const app = express();
const path = require('path')

// setup static and middleware
app.use(express.static('./public'))

// for home page, if name is index.html, it will automatically load without the app.get method
// app.get("/",(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
// another way is to use serer side rendering with the help of templates

app.all("*",(req,res)=>{
    res.status(404).send("page not found")
})



app.listen(5000,()=>{
    console.log('server listening on 5000')
})