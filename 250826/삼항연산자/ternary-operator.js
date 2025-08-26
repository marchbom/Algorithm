const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ').map(Number)

let score = input[0]

console.log(score === 100 ? "pass" : "failure")