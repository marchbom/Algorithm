const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input;

console.log(Number(a + b) + Number(b + a))