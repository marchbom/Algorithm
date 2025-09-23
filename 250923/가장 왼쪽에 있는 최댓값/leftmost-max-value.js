const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

const n = input[0]
let numbers = input[1].split(" ").map(Number)

let result = []

while(numbers.length > 0) {
    let maxIndex = numbers.indexOf(Math.max(...numbers))
   result.push(maxIndex + 1);
   numbers = numbers.slice(0, maxIndex);
}

console.log(result.join(" "))