const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0]
let result = ""

for(let i = 1; i <= n; i++) {
    if(i % 2 === 0) continue;
    if(i % 10 === 5) continue;
    if(i % 3 === 0 && i % 9 !== 0) continue;
    else result += i + " "
}

console.log(result)