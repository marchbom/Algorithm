const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0]
let c3 = 0;
let c2 = 0;
let c1 = 0;

for(let i = 1; i <= n; i++) {
    if(i % 12 === 0) {
        c3++
    } else if(i % 3 === 0) {
        c2++
    } else if(i % 2 ===0) {
        c1++
    }
}
console.log(c1, c2, c3)