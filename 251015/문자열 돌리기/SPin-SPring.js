const fs = require('fs')
const input = fs.readFileSync(0).toString().trim();

let str = input;
let L = str.length
console.log(str)
for(let i = 1; i <= L; i++) {
    str = str.slice(-1) + str.slice(0, -1)
    console.log(str)
}

