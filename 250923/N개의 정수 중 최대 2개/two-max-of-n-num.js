const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")


let n = input[0]
let numbers = input[1].split(" ").map(Number)

numbers = numbers.sort((a, b) => b - a);

console.log(numbers[0], numbers[1])