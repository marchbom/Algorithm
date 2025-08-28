const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

let n = Number(input[0])

console.log((n % 3 === 0 && n % 2 !== 0) || (n % 5 ===0 && n % 2 === 0) ? "true" : "false")



