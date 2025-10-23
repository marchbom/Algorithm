const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");


let count = 0;
let result = []
for(let i = 0; i < input.length; i++) {
    if(input[i] === "0") break;
    count++;
    if(i % 2 === 0) {
        result.push(input[i])
    }
}

console.log(count)
console.log(result.join("\n"))