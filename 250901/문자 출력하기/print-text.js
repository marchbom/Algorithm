const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];
let result = ""

for(let i = 1; i <= 8; i++) {
    result += str + ""
}
console.log(result)