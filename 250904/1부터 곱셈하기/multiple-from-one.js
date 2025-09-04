const fs  = require('fs');
const input = fs.readFileSync(0).toString().split("\n").map(Number);

let n = input[0]
let result = 1;

for(let i = 1; i <= 10; i++) {
    result *= i
    if(result >= n) {
        console.log(i)
            break;

    }    
}