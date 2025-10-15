const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input;

str = str.slice(1) + str[0]
console.log(str);

