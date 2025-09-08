const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);


let n = input[0];
let result = false

if(n < 2) result = false;
for(let i = 2; i < n; i++) {
    if(n % i === 0) {
        result = true
        break;
    }
}
console.log(result ? "C" : "P")