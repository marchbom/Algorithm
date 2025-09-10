const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n * 2 + 1; i++) {
    let str = ""
    for(let j = 0; j < n* 2 + 1; j++) {
        if(i % 2 !== 0 && j % 2 !== 0) { 
            str += "  "
        } else {
            str+= "* "
        }
    } 
    console.log(str) 
}
   