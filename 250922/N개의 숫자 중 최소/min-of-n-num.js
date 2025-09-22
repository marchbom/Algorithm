const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[0]
let numbers = input[1].split(" ").map(Number)
let count = 0
let result = 0

for(const num of numbers) {
    result = Math.min(...numbers)
    if(result === num) count++
}

console.log(result, count)