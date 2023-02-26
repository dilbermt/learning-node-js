// modules


const names = require('./example module')

const sayHi = require('./example utils')

sayHi("Dilber")
sayHi(names.john)
sayHi(names.peter)

// accessing the object exporeted from the example module
const john = require("./example module").person
console.log(john)

//  if we require a module that executes in the module itself, it runs automatically

require('./function util')