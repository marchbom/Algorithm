const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


let str = input;
let result = ""

for(let s of str) {
    if(/[a-z]/.test(s)) {
        result += s.toUpperCase()
    } else if(/[A-Z]/.test(s)) {
        result += s.toLowerCase()
    }
}
console.log(result)