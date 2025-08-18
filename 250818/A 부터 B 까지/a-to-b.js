const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let result = []
let x = a;

while(x <= b) {
    result.push(x);
    x = (x % 2 === 0) ? x + 3 : x * 2
}

console.log(result.join(' '))
