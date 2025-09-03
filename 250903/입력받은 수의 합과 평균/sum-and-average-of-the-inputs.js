const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0];
let numbers = input.slice(1);
let sum = 0
let avg = 0;
let count = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
}
avg = (sum / count).toFixed(1)

console.log(sum, avg)