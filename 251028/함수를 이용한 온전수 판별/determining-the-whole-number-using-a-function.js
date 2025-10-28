const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
function solution(a, b) {
    for(let i = a; i <= b; i++) {
        if(i % 2 !== 0 && i % 10 !== 5 && (i % 3 === 0 && i % 9 !== 0)) {
            return i
        }
    }
}
console.log(solution(3, 10))