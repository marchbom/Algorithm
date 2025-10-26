const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function solution(n) {
    let str = String(n).split("")
    return n % 2 === 0 && (Number(str[0]) + Number(str[1])) % 5 === 0;
}

let result = solution(n) ? "Yes" : "No"
console.log(result)