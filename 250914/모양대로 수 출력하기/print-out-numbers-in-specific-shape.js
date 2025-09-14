const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = ""
    for(let k = 0; k < i; k++) {
        str += "  "
    }
    for(let j = n - i; j >= 1; j--) {
        str += j + " "
        
    }

    console.log(str)
}