const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let str = input[0]
let alp = input[1]
let result = str.indexOf(alp)

console.log(result !== -1 ? result : "No")