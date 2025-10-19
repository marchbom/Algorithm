const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ")

let [str1, str2] = input


console.log((str1 + str2).trim())