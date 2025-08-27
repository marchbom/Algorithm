const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let a = input[0]
let b = input[1]

let result1 = a < b ? 1 : 0;
let result2 = a == b ? 1 : 0

console.log(result1, result2)