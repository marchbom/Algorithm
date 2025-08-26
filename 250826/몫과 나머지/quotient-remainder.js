const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[0]
let b = input[1]

console.log(parseInt(a/b)+"..."+a%b)