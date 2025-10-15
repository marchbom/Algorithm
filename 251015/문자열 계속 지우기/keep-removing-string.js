const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let aStr = input[0];
let bStr = input[1];
let result = []

while(aStr.includes(bStr)) {
    aStr = aStr.replace(bStr, "")
}
console.log(aStr)