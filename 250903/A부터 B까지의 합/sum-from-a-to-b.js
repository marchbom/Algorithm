const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;

let sum = 0
for(let i = a; i <= b; i++) {
    sum += i
}
console.log(sum)