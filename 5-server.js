const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Welcome to the homepage")
        res.end()
        return
    }
    if(req.url === '/about'){
        res.write("This is the about page")
        res.end()
        return
    }
    res.write(`
    <h1>Oops</h1>
    <p>We cant find the page you are looking for</p>
    <a href="/">Home</a>`)
    res.end()
    return
})

server.listen(3000)