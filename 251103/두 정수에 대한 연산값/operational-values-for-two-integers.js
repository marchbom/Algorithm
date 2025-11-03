const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function calculator(a, b) {
    let result = []
    if(a > b) {
        a = a + 25;
        b = b * 2
    } else {
        a = a * 2;
        b = b + 25
    }

    return [a, b]
}

let [_a, _b] = calculator(a, b)
console.log(_a, _b);