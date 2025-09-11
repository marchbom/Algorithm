const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = n; i >= 1; i--) {
    let str = ""
    for(let j = n; j >= 1; j--) {
        str += j + " "
    }
    console.log(str)
}