const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function solution(a, b) {
    let result = []
    let max = 0;
    let min = 0
    if(a > b) {
        max = a
        min = b
    } else {
        max = b
        min = a
    }

    return [min + 10, max * 2].join(" ")
}

console.log(solution(a, b))