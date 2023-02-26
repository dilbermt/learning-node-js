// local or not shared
const secret = "super secret"

// shared
const john = "john"
const peter = "peter"

console.log(module) //exports is now empty

module.exports={john,peter}


//  another way to export

module.exports.person = {
    name:"john smilga"
}