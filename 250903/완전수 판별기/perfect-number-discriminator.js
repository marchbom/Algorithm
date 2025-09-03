const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0];
let result = 0

for(let i = 1; i < n; i++) {
    if(n % i === 0) {
        result += i
    }
}

console.log(result === n ? "P" : "N")