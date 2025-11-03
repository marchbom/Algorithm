const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function calculator(a, b) {
    let max = Math.max(a, b) + 25;
    let min = Math.min(a, b) * 2
    return [max, min]
}

let [max, min] = calculator(a, b)
console.log(min, max);