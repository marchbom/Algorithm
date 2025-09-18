const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let numbers = input[1].split(" ").map(Number)
let result = []

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 ===0 ) {
        result.push(numbers[i])
    }
}
console.log(result.join(" "))