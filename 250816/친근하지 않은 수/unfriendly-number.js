const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let count = 0

for(let i = 1; i <= N; i++) {
    if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
        continue;
    } else {
        count++
    }
}
console.log(count)