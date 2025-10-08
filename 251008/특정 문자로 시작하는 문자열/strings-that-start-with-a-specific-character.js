const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let alp = input[input.length - 1]
let n = Number(input[0])
let result = []
let totalLength = 0;

for(let i = 1; i <= n; i++) {
    let str = input[i]

    if(str[0] === alp) {
        result.push(str);
        totalLength += str.length
    }
}
const avg = (totalLength / result.length).toFixed(2)
console.log(result.length, avg)