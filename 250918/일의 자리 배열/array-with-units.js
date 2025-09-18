const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);


for(let i = 2; i < 10; i++) {
    if(i === 10) break;
    input[i] = (input[i-2] + input[i-1]) % 10
}

console.log(input.join(" "))