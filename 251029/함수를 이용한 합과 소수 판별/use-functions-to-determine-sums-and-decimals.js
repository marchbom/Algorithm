const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
function primeNumber(n) {
   if(n < 2) return false;
   for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false  
   }
   return true;
}

function evenNum(n) {
    let sum = String(n).split("").reduce((a, b) => a + Number(b), 0)
    return sum % 2 === 0
}

function solution(a, b) {
    let result = []
    for(let i = a; i <= b; i++) {
        if(primeNumber(i) && evenNum(i)) {
            result.push(i)
        }
    }
    return result.length
}

console.log(solution(a, b))