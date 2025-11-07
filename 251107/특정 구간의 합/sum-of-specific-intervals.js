const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
function resultSum(a1, a2, A) {
    let sum = 0
    for(let i = a1 - 1; i <= a2 - 1; i++) {
        sum += A[i]
    }
    return sum;
}

// 결과 
function result() {
    for(let [a1, a2] of queries) {
        console.log(resultSum(a1, a2, A))
    }
}


result()