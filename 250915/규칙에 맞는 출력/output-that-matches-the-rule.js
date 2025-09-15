const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i++) {
    let str = ""
    for(let j = n - i; j <= n; j++) {
        str += j + " "
    }
    console.log(str)
}