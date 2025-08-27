const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

let a = input[0]

if(a == 5) {
    console.log("A")
} 
if(a % 2 === 0) {
    console.log("B")
} 
