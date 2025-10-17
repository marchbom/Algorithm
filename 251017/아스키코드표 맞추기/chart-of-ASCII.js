const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let num = input.map(Number)
let result = []

for(const n of num) {
    result.push(String.fromCharCode(n))
}

console.log(result.join(" "))