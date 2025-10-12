const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let str = input[0];
let alp = input[1];
let result = 0;

for(let i = 0; i < str.length; i++) {
    if(str.slice(i, i + alp.length) === alp) {
        result = i
        break;
    } else {
        result = -1
    }
}
console.log(result)