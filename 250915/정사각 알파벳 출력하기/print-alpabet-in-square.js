const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

let char = 65

for(let i = 0; i < n; i++) {
    let str = ""
    for(let j = 1; j <= n; j++) {
        str += String.fromCharCode(char)
        char++
    }
    console.log(str)
}