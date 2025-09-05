const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let result = 0

for(let i = 0; i< input.length; i++) {
    if(input[i] % 2 !== 0) continue;
    for(let j = 1; j <= 3; j++) {
        if(input[i] % 2 === 0 ) {
           result = Math.floor(input[i] / 2)
        }
    }
    console.log(result)
}