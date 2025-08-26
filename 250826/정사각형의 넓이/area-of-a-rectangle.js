const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let n = input[0]
let square = n * n
console.log(square)

if(n < 5) console.log("tiny")