const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[0]
let count = 0;
let strLength = 0;

for(let i = 1; i < input.length; i++) {
    str = input[i]
    strLength += str.length;
    if(str[0] === "a") {
        count++
    }
}

console.log(strLength, count)