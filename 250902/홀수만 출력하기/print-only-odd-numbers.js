const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0]
let numbers = input.slice(1);

for(let i = 0; i < n; i++) {
    const num = numbers[i];
    if(num % 2 !== 0 && num % 3 === 0) {
        console.log(num)
    }
}
