const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = 1;
for(let i = 1; i <= n; i++) {
    let str = ""
        if(i % 2 !== 0) {
            for(let j = 1; j <= n; j++) {
                str += j;
            }
        }
         else {
            for(let j = n; j > 0; j--) {
                str += j;
            }
        }
    console.log(str)
}