const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

for(let i = 0; i < input.length - 1; i++) {
   console.log(input[i].split("").reverse().join(""))
}
