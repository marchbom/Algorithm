const fs = require('fs')
const input = fs.readFileSync(0).toString().trim();

let result = ""

for(const s of input) {
    if(/[a-zA-Z_0-9]/.test(s)) {
        result += s.toLowerCase()
    }
}
console.log(result)