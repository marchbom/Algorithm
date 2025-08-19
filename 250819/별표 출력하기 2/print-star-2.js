const fs = require('fs');
const N = fs.readFileSync(0).toString().trim();

for(let i = 0; i < N; i++) {
    let str = ""
    for (let j = 0; j < N-i; j++) {
        str += "*" + " "
    }
    console.log(str)
}
