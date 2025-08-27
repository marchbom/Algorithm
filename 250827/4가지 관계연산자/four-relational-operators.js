const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0]
let b = input[1]

console.log(a >= b ? 1 : 0)
console.log(a > b ? 1 : 0)
console.log(b >= a ? 1 : 0)
console.log(b > a ? 1 : 0)