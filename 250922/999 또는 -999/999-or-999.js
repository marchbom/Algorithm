const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let numbers = []
for(let i = 0; i < input.length; i++) {
    if(input[i] === 999 || input[i] === -999) break; 
    numbers.push(input[i])
}
console.log(Math.max(...numbers), Math.min(...numbers))
