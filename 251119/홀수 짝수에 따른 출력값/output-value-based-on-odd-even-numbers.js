const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function even(n) {
    if(n === 2) return 2;
    
    return n + even(n - 2)
}

function odd(n) {
    if(n === 1) return 1;
    return n + odd(n - 2)
}

if(n % 2 === 0) {
    console.log(even(n))
} else {
    console.log(odd(n))
}