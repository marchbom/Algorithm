const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

function calculator(n, m, A) {
    let sum = 0
    while(m > 0) {
        sum += A[m-1]
        if(m % 2 === 0) {
            m = Math.floor(m / 2)
        } else {
            m -= 1;
        }
    }
    return sum
}

console.log(calculator(n, m, A))