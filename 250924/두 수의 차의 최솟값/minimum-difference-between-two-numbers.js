const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let numbers = input[1].split(" ").map(Number);
let minDiff = Infinity

for(let i = 1; i < numbers.length; i++) {
    let diff = numbers[i] - numbers[i - 1]
    minDiff = Math.min(minDiff, diff)
}

console.log(minDiff)