const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = 1
for(let i = 0; i < n; i++) {
    let str = ""
    for(let j = 1; j <= n; j++) {
        if(num > 9) num = 1
        str += num
        num++
    }
    console.log(str)
}