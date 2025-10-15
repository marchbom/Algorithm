const fs = require('fs')
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let str = ""

for(let i = 1; i <= n; i++) {
    str += "*" 
    console.log(str)
}

