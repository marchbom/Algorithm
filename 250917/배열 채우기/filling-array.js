const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = []
for(let i = 0; i < input.length; i++) {
    if(input[i] === 0) break;
    arr.push(input[i])
}
console.log(arr.reverse().join(" "))