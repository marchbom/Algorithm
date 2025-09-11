const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());


for(let i = 0; i < n; i++) {
    let num = 2 + (i * 2)
    let str = ""

    for(let j = 0; j < n; j++) {
        if(num >= 10) num = 2
        str += num + " "
        num += 2
    }
    console.log(str)
}