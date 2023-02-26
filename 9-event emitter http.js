const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('welcome')
    return
})

server.listen(5000)