const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input
let min = Math.min(a, b, c);
let result1 = 0
let result2 = 0

if(a === min) {
    result1 = 1
} else  {
    result1 = 0
}

if(a === b && a === c) {
    result2 = 1
} else {
    result2 = 0
}

console.log(result1, result2)