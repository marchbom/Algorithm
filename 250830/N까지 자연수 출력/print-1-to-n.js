const fs= require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let i = 1
let n = input[0]

let result = ""
while(i <= n) {
    result += i + " "
    i++
}

console.log(result)