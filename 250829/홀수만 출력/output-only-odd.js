const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let result = []

let [a, b] = input

for(let i = a; i <=b; i++) {
    if(i % 2 === 0) continue;
    result.push(i)
}
console.log(result.join(' '))