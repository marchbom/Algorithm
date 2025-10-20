const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ")

let str = input[0]
let num = Number(input[1])

console.log(str.repeat(num))