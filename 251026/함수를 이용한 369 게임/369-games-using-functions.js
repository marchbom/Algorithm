const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
function firstFunc(n) {
    return String(n).includes("3") || String(n).includes("6") || String(n).includes("9")
}

function secondFunc(n) {
    return n % 3 === 0;
}

let count = 0;
for(let i = a; i <= b; i++) {
    if(firstFunc(i) || secondFunc(i)) {
        count++
    }
}

console.log(count)