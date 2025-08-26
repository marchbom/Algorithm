const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let a = input[0]

console.log(a === 1 ? "t" : "f")