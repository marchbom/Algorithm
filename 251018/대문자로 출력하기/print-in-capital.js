const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(".").join("")

let result = []
for(const s of input) {
    if(!isNaN(Number(s))) continue;
    else result.push(s);
}

console.log(result.join("").toUpperCase())