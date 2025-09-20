const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let count = Array(b).fill(0); 

while (a > 1) {
    let remain = a % b;
    count[remain]++;
    a = Math.floor(a / b);
}

let result = 0;
for (let c of count) {
    result += c * c;
}

console.log(result);