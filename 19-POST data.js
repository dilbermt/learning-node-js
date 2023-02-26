const { query } = require('express')
const express = require('express')
const app = express()

const {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// check the index.html file in the methods-public dir and see that the form uses post method
// the action stribute is set to '/login'
// as of now when we submit, it says cannot login but in network tab we can se that method is post

// to parse the data
app.use(express.urlencoded({extended:false})) //set the extended flag to false
// read more about urlencoded in express documentation

// to handle the post request and data, we have to set up a path
app.post('/login',(req,res)=>{
    // console.log(req.body) now the data in the http body is displayed
    // res.send("posted")
    
    // we can use javascript to do useful stuff like
    const {name} = req.body
    if(name){
        res.status(200).send(`welcome ${name}`)
    }else{
        res.status(401).send("please provide credentials")
    }
})



app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log("listening on 5000")
})

