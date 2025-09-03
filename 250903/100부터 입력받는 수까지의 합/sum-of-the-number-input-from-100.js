const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n = input[0]
let sum = 0;
for(let i = n; i <= 100; i++) {
    sum += i;
}

console.log(sum)