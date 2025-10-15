const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input

if(str.includes("e")) {
    str = str.replace("e", "")
}

console.log(str)