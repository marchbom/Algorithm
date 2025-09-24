const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let minArr = []
let maxArr = []
for(let i = 0; i < input.length; i++) {
    if(input[i] < 500) {
        maxArr.push(input[i])
    }
    if(input[i] > 500) {
        minArr.push(input[i])
    }
}
console.log(Math.max(...maxArr), Math.min(...minArr))