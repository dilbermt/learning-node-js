const logger = (req,res,next)=>{ //next is necessary to pass the flow of events to the next function or middleware
    const method = req.method
    const url = req.url
    const time = new Date().getMinutes()

    console.log(method,url,time)

    next() 
}

module.exports = logger