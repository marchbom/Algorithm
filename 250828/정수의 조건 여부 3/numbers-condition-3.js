const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ')

let a = input[0]

console.log(a % 13 === 0 || a % 19 === 0 ? "True" : "False")