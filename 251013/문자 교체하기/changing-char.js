const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let str1 = input[0].split("")
let str2 = input[1].split("")

str2[0] = str1[0]
str2[1] = str1[1]
console.log(str2.join(""))