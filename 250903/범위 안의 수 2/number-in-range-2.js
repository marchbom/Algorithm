const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let sum = 0
let avg = 0;
let count = 0;
for(let i = 0; i <= input.length; i++) {
    if(input[i] >= 0 && input[i] <= 200) {
        sum += input[i]
        count++;
    }
}

avg = (sum / count).toFixed(1);

console.log(sum, avg)