const {readFile,writeFile} = require('fs')
const { resolve } = require('path')
console.log("started the first task")

const getText = new Promise((resolve, reject) => {
    readFile('./content/test.txt','utf-8',(err,data)=>{
        if(err){
            reject (err)
        }else{
            resolve(data)
            console.log(`read the data:${data} `)
            return
        }
    })
    
})

const writeText = new Promise((resolve,reject)=>{
    writeFile('./content/created.txt',`This is a new text added to the file`,(err,data)=>{
        if(err){
            reject(err)
            console.log(err)
        }else{
            resolve(data)
            console.log(`wrote the data:${data} `)
            return
        }
    })

})

async function startTasks(){
    try{
        await getText

        await writeText
    }
    catch(err){
        console.log(err)
    }
}
startTasks()

console.log(`This has to be the last consle log but it wont`)


// this sametask can be done using the promisify method of the util module

const util = require('util')

const getTextPromise = util.promisify(readFile)
const writeTextPromise = util.promisify(writeFile)

const startTasksImproved = async ()=>{
    try{
        await getTextPromise('./content/test.txt','utf-8')
        console.log(`read data with new method`)
        await writeTextPromise('./content/created_new.txt','this is text created with new method')
        console.log(`wrote data with new method`)
    }
    catch(error){
        console.log(error)
    }
}

startTasksImproved()

console.log(`final log`)