const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let arr = input.map(line => line.split(" ").map(Number))

for(let i =0; i < arr.length; i++) {
    let result = 0

    for(let j = 0; j < arr[i].length; j++) {
        result += arr[i][j]
    }
console.log(result)
}