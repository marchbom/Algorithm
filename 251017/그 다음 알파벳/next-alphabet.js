const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let a = input;
a = a.charCodeAt(0)

let b = a + 1

if(b >= 122) {
    b = 97
}

console.log(String.fromCharCode(b))
