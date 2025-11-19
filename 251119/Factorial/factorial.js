const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please write your code here.

function fac(n) {
    if(n === 0 || n === 1) return 1;

    return n * fac(n - 1)
}

console.log(fac(n))