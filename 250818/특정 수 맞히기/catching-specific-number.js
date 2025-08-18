const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let i = 0;
while(i < input.length) {
    console.log(input[i] === 25 ? "Good" : (input[i] < 25 ? "Higher" : "Lower"))
    i++;
}