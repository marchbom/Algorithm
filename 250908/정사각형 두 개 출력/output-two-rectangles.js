const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let str = ""
for(let k = 0; k < 2; k++) {
    for(let i = 1; i <= input; i++) {
        str = ""
        for(let j = 1; j <= input; j++) {
            str += "*"
        }
    
    console.log(str)
    }
    console.log(" ")
}

