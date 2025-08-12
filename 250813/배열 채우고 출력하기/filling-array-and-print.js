const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');
let arr = input.reverse().join('')
console.log(arr)