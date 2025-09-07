const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);


let n = input[0]
let result = "N"

for(let i = 2; i <= n-1; i++) {
    if(n % i === 0) {
        result = "C";
        break;
    } else {
        result = "N"
    }
}
console.log(result)