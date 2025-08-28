const fs = require('fs')
const input =fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a, b, c] = input

let max = Math.max(a, b, c)

console.log(max)