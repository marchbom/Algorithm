const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());


for(let i = 0; i < n; i++) {
    let str = ""

    for(let j = 0; j < n; j++) {
        let val = (j % 2 === 0) ? i + 1 : n - i
        str += val;
    }

    console.log(str)
}