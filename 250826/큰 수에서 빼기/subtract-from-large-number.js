const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0]
let b = input[1]

if(a > b) console.log(a-b)
else console.log(b-a)