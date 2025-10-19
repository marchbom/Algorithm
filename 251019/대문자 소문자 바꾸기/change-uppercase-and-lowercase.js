const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
let result = ""
for(let s of input) {
    if(/[a-z]/.test(s)) {
        result += s.toUpperCase();
    } else if(/[A-Z]/.test(s)) {
        result += s.toLowerCase()
    }
}
console.log(result)