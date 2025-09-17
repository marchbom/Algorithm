const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0
let sum2 = 0
let avg = 0

for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 === 0) {
        sum += input[i]
    }
    avg = ((input[2] + input[5] + input[8]) / 3).toFixed(1)
}
console.log(sum, avg)