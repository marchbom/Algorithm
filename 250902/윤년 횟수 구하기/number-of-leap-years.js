const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0]
let count = 0

for(let i = 1; i <=n; i++) {
    if(i % 4 === 0) {
        if(i % 100 === 0 && i % 400 !== 0) {
            continue;
        }
        count++
    }
}
console.log(count)