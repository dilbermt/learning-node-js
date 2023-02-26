const eventEmitter = require('events') //this is a class

const customEmitter = new eventEmitter() //instance of a class

customEmitter.on('response',(name,age)=>{  //this happens when the event is active
    console.log(`the data is received ${name}, ${age}`)
})
customEmitter.on('response',()=>{  
    console.log(`some other logic`)
})


customEmitter.emit('response','john',34) //this emits the response from the event
// emit has to be placed after the on method
 