const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n").map(Number);

let n = input[0]
let count = 0;

for(let i = 1;  ; i++) {
    n = Math.floor(n / i)
    count++;
    if(n <= 1) break;
}

console.log(count)