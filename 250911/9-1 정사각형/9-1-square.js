const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = 9;

for(let i = 1; i <= n; i++) {
    let str = ""
    for(let j = n; j >= 1; j--) {
        str += num + ""
        num--
        if(num < 1) num = 9
    }
    console.log(str)
}