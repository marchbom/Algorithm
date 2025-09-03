const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;
let result = 1

for(let i = a; i <= b; i++) {
    result *= i
}

console.log(result)