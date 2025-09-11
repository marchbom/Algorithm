const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = [2,4,6,8];


for(let i = 0; i < n; i++) {
    let str = ""
    for(let j = 0; j < n; j++) {
        str += num[(i + j) % num.length] + " "
    }
    console.log(str)
}