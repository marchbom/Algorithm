const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let num = []
let sum = 0
let count = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] === 0) break;
    num.push(input[i])
    if(num[i] % 2 === 0) {
        count++
        sum += num[i] 
    }
}
console.log(count, sum)
