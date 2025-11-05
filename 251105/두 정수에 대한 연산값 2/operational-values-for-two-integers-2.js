const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function solution(a, b) {
    if(a > b) {
        a = a * 2
        b = b + 10
    } else {
        a = a + 10
        b = b * 2
    }

    return [a, b]
}

let [num1, num2] = solution(a, b)
console.log(num1, num2)