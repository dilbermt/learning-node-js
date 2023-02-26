//os moddule

const os = require('os')

// info about user

const user = os.userInfo()
console.log(user)

// info about the operating system

const currentOS = {
    name : os.type(),
    release: os.release(),
    uptime: os.uptime(),
    freeMemory : os.freemem(),
    totalMemory : os.totalmem()

}

console.log(currentOS)


// path module
const path = require('path')

console.log(path.sep) //returns the current path separator

const filepath = path.join("./content","test.txt") // joins the arguments as a filepath
console.log(filepath)

const absolutePath = path.resolve(__dirname,"content","test.txt") //returns an absolute path
console.log(absolutePath)


// file system module


// synchronous methods
const {readFileSync, writeFileSync} = require('fs')

const text = readFileSync('./content/test.txt','utf-8') //pass in encoding as second parameter
console.log(text)

writeFileSync( //if there is no file, node will create one
    "./content/created.txt",`this is a created text file with the test file contents: ${text}`
) // this will override the file

// if we need to append to a file

writeFileSync(
    "./content/created.txt",`this is a test to see if it appends`,{flag:'a'}
)

// asynchronous methods

const{readFile,writeFile} = require('fs')

readFile('./content/test.txt','utf-8',(err,result)=>{  //requires a callback function
    if(err){
        console.log(err);
        return null
    }else{
        console.log(result)
        const data = result
        writeFile('./content/created.txt',`This is a created text file and here is the data from the test file: ${data}`,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    }
})