const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let result = input.slice(0, 1) + input.slice(2, input.length - 2) + input.slice(-1)
console.log(result)