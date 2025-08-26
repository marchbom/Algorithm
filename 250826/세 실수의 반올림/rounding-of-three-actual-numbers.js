const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let a = input[0]
let b = input[1]
let c = input[2]

console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))