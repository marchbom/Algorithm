const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let count1 = 0
let count2 = 0
for(let i = 0; i < input.length; i++) {
    if(input[i] % 3 === 0) {
        count1++
    }
    if(input[i] % 5 === 0) {
        count2++
    }
}
console.log(count1, count2)