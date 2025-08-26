const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(":").map(Number)

let h = input[0]
let m = input[1]

console.log(`${h + 1}:${m}`)