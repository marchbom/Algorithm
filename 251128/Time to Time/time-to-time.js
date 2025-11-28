const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

let hour = a;
let min = b;
let count = 0;

while(true) {
    if(hour === c && min === d) {
        break;
    }

    count += 1;
    min += 1;

    if(min === 60) {
        hour += 1;
        min = 0;
    }
}

console.log(count)

