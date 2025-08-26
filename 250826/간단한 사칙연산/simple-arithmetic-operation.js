const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0]
let b = input[1]

console.log(a+b)
console.log(a-b)
console.log(parseInt(a/b))
console.log(a%b)