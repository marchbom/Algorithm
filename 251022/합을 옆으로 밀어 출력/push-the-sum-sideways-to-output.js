const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")


let num = input.slice(1).map(Number)
let sum = 0

for(let i = 0; i < num.length; i++) {
    sum += num[i]
}

let result = String(sum)
result = result.slice(1) + result[0]
console.log(result)
