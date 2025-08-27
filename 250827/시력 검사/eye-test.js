const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let a = input[0].toFixed(1)
let b = input[1].toFixed(1)

console.log(a >= 1.0 && b >= 1.0 ? "High" : (a >= 0.5 && b >= 0.5 ? "Middle" : "Low"))