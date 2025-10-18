const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let result = ""
for(const s of input) {
    if(/[a-zA-Z]/.test(s)) {
        result += s.toUpperCase()
    }
}

console.log(result)