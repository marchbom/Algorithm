const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

const [str, alp] = input;
let count = 0;

for (const s of str) {
    if(s === alp) count++;
}

console.log(count)