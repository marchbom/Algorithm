const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0]
let str = ""
for(let i = 1; i <= n; i++) {   
    str = ""
    for(let j = 1; j <= (i * 2) - 1; j++) {
        str += "*"
    }
    console.log(str)
}