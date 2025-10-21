const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let num = input.split("")
let sum = 0;

for(let i = 0; i < num.length; i++) {
    sum += Number(num[i])
}

console.log(sum)