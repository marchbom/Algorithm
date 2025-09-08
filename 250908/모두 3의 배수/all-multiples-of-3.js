const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let result = true

for(let i = 0; i < input.length; i++) {
    if(input[i] % 3 !== 0) {
        result = false
        break;
    } 
}
console.log(result ? 1 : 0)