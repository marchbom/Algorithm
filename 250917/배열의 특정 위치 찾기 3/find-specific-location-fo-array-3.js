const fs = require('fs')
const numbers = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 0) {
        sum += numbers[i - 3] + numbers[i - 2] + numbers[i - 1]
        break;
    }
}
console.log(sum)