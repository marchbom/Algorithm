const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[0]
let numbers = input[1].split(" ").map(Number)
let unique = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

let result = Math.max(unique) === 0 ? -1 : Math.max(unique)

console.log(result)