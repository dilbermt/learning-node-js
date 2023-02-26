const express = require('express');
const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("home page")
    return
})
app.get("/about",(req,res)=>{
    res.status(200).send("about page")
    return
})
app.all('*',(req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})