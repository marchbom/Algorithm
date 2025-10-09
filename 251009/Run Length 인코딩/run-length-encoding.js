const fs = require('fs')
const str = fs.readFileSync(0).toString().trim()

let count = 1;
let result = '';

for(let i = 1; i < str.length; i++) {
    if(str[i] === str[i - 1]) {
        count++;
    } else {
        result += str[i-1] + count;
        count = 1;
    }
}
result += str[str.length - 1] + count

console.log(result.length)
console.log(result)