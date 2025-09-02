const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let count = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 === 0 ){
        count++
    } else continue;
}
console.log(count)  