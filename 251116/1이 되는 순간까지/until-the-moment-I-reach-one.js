const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function solution(n, count = 0) {
    if(n === 1) return count;

    if(n % 2 === 0) {
        return solution(n / 2, count + 1);
    } else {
        return solution(Math.floor(n / 3), count + 1)
    }
}

console.log(solution(n))