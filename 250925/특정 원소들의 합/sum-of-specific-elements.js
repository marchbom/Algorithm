const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let arr = input.map(line => line.split(" ").map(Number))
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j <= i; j++) {
        sum += arr[i][j]
    }
}
    console.log(sum)