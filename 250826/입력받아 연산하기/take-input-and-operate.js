const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let a = input[0]
let b = input[1]


console.log(a+87)
console.log(b%10)