const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let m = input[0]
let l = input[1]

console.log(m >= 90 ? (l >= 95 ? 100000 : 50000) : 0) 