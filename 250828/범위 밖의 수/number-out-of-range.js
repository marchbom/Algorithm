const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0]

console.log(a < 10 || a > 20 ? "yes" : "no")