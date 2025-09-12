const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = 1;
for(let i = 1; i <= n; i++) {
    let str = ""
    if(i % 2 !== 0) {
        for(let j = 0; j < n; j++) {
            str += num + " "
            num++;
        }
        num++;
    } else {
        for(let j = 0; j < n; j++) {
            str += num + " "
            num += 2
        }
        num--;
    }
    console.log(str)
}