const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)


let n = input[0]
let result = ""
for(let i = 1; i <= n; i++) {
    result += i + " "
}

console.log(result)