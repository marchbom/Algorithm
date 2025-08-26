const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let w = input[0]
let h = input[1]

w += 8
h *= 3

console.log(w)
console.log(h)
console.log(w*h)