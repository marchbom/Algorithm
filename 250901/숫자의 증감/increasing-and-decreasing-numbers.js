const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ");

let c = input[0]
let n = Number(input[1])
let result = ""

if(c === "A") {
    for(let i = 1; i <= n; i++) {
        result += i + " "
    }
}
if(c === "D") {
    for(let i = n; i >= 1; i--) {
        result += i + " "
    }
}
console.log(result)
