const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let a = input[0]
let b = input[1]
let c = input[2]
let sum = a+b+c
let avg = parseInt((a+b+c) / input.length)
console.log(sum)
console.log(avg);
console.log(sum - avg)