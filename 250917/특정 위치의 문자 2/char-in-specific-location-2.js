const fs = require('fs')
const str = fs.readFileSync(0).toString().trim().split(" ");

let result = str[1] + " " + str[4] + " " + str[7]

console.log(result)
