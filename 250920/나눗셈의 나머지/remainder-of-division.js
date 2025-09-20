const fs = require('fs');
const [aStr, bStr] = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(aStr);
const b = Number(bStr);

let count = Array(b).fill(0); 

while (a > 0) {
    const remainder = a % b;
    count[remainder]++;
    a = Math.floor(a / b);
}

let result = 0;
for (let c of count) {
    result += c * c;
}

console.log(result);