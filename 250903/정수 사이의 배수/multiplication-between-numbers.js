const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;
let sum = 0;
let avg = 0;
let count = 0;

for(let i = a; i <= b; i++) {
    if(i % 5 === 0 || i % 7 === 0) {
        sum += i;
        count++
    }
    avg = (sum / count).toFixed(1)
}



console.log(sum, avg)