const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[0]
let str = input[1].split(" ").join("")

for(let i = 0; i < str.length; i+= 5) {
    console.log(str.slice(i, i + 5))
}