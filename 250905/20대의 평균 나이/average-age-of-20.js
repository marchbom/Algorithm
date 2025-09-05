const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n").map(Number);

let result = 0
let avg = 0;
let count = 0
for(let i = 0; i < input.length; i++) {
    if(input[i] > 29) {
        break;
    }
    if(input[i] < 20) {
        break;
    }
    result += input[i]
    count++;
    avg = (result / count).toFixed(2)
}

console.log(avg)