const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function isPrime(n) {
    if(n < 2) return false
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function sumPrime(a, b) {
    let sum = 0;
    for(let i = a; i <= b; i++) {
        if(isPrime(i)) {
            sum += i
        }
    }
    return sum
}

console.log(sumPrime(a, b))
