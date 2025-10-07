const fs = require('fs')
const str = fs.readFileSync(0).toString().trim().split("\n")


console.log(str.reverse().join("\n"))