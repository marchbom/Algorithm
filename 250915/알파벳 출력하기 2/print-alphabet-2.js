const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

let charCode = 65

for(let i = 0; i < n; i++) {
    let str = ""
    for(let j = 0; j < i; j++) {
        str += "  "
    }
    for(let j = n - i; j >= 1; j--) {
        if(charCode > 90) charCode = 65
        str += String.fromCharCode(charCode) + " "
        charCode++
    }

    
    console.log(str)
}