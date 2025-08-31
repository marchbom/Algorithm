const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let n = input
let i = 0

while(i < n) {
    console.log("*")
    i++
}