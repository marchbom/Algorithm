const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let ab = input[0] + input[1]
let ba = input[1] + input[0]

if(ab === ba) {
    console.log("true")
} else {
    console.log("false")
}