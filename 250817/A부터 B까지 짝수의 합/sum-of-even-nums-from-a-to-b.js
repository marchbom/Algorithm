const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0])
let b = Number(input[1])
let sum = 0

for(let i = a; i <= b; i++) {
    if(i % 2 ===0) {
        sum += i;
    }
}
console.log(sum)