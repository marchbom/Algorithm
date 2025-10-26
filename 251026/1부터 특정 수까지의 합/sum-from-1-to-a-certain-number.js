const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function solution(n) {
    let result = 0
    for(let i = 1; i <= n; i++) {
        result += i
    }
    result = Math.floor(result / 10)
    return result
}

console.log(solution(n))



