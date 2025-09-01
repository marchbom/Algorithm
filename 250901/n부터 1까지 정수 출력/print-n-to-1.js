const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let result = ""
let n = input[0]

while(n >= 1) {
    result += n + " "
    n--
}
console.log(result)