//ususally when reading files or writing files, we do it as one whole file
//this becomes a problem when working with big data
// we can use streams to: read, write, duplex(read and write) and transform 

//first let's create a big file

//run this only once and comment it out after

// const {writeFileSync} = require('fs')

// for(let i=0; i<10000; i++){
//     writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag: 'a'})
// }

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{encoding:'utf-8'})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('errror',(err)=>console.log(err))