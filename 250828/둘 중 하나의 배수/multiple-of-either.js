const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ')

let a = input[0]

console.log(a % 3 ===0 || a % 5 ===0 ? 1 : 0)