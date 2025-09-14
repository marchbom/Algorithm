const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

let num = 1
for(let i = 0; i < n; i++) {
    let str = ""
    for(let j = 0; j < i; j++) {
        str += "  "
    }
    for(let k = n - i; k >= 1; k--) {
        if(num >= 10) num = 1
        str += num + " "
        num++
    }
    console.log(str)
}