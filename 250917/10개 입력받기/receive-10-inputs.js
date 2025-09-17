const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let num = []
let sum = 0;
let avg = 0;

for(let i = 0; i <input.length; i++) {
    if(input[i] === 0) break;
    num.push(input[i])
    sum += num[i]
    avg = (sum / num.length).toFixed(1)
}
console.log(sum, avg)