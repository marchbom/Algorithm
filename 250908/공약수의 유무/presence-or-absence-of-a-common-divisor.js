const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;
let result = false


for(let i = a; i <= b; i++) {
    if(1920 % i ===0 && 2880 % i === 0) {
        result = true;
        break;
    } 
}

console.log(result ? 1 : 0)