const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

for(const s of input) {
    if(!isNaN(Number(s))) continue;
}

console.log(input.toUpperCase())