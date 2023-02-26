const { dirname } = require("path")

const num = 10

if(num<=10){
    console.log("small")
}else{
    console.log("bigg")
}
console.log(`hello world's best coder`)
console.log(__dirname)
console.log(__filename)

setInterval(()=>{
    console.log("hello world")
},1000)
