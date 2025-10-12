const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0]
let b = input[1]
let count = 0;

for(let i = 0; i < a.length; i++) {
    if(a.slice(i, i + b.length) === b) {
        count++;
    }
}
console.log(count)