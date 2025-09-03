const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0]
let numbers = input.slice(1);
let sum = 0

for(let i = 0; i < n; i++) {
    if(numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
        sum += numbers[i]
    }
}
console.log(sum)