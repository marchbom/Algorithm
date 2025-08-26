const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let n = input[0]

if(n >= 80) console.log("pass")
else console.log(`${80 - n} more score`)