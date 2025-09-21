const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [n, m] = input[0].split(" ").map(Number)
let numbers = input[1].split(" ").map(Number);

let count = 0;

for(const num of numbers) {
    if(num === m) {
        count++;
    }
}
console.log(count)