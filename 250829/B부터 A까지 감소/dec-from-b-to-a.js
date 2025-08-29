const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] =input;
let result = ""
for(let i = b; i >= a; i--) {
    result += i + " "
}

console.log(result)