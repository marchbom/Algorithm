const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input
let min = Math.min(a, b, c);

console.log(min)

