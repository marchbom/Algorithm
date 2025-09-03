const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;
let result = 1;

for(let i = 1; i <= b; i++) {
    if(i % a === 0) {
        result *= i
    }
}

console.log(result)