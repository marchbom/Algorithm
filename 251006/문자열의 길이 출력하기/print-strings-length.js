const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split("\n")

console.log(str[0].length + str[1].length)
