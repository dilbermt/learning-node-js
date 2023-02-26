const { query } = require('express')
const express = require('express')
const app = express()

// middleware sits between the req and res

// the req,res and next parameters are added by express when called
const logger = (req,res,next)=>{ //next is necessary to pass the flow of events to the next function or middleware
    const method = req.method
    const url = req.url
    const time = new Date().getMinutes()

    console.log(method,url,time)

    next()  //passing it to the next function which is res.send in our case
}
// a better approach is to have a separate module for logger and then import it 



app.get('/',logger,(req,res)=>{  // logger is the middleware

    // const method = req.method
    // const url = req.url
    // const time = new Date().getMinutes()

    // console.log(method,url,time)
    // this functionality can be added as a separate function outside the 
    // url path


    res.send("homepage")
})
app.get('/about',logger,(req,res)=>{
    res.send("About page")
})


app.listen(5000,()=>{
    console.log("listening on 5000")
})

