const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')


const N = Number(input);
let num = 1

for(let n = 1; n <= N; n++) {
    let str = ""
    for(i = 1; i <= n; i++) {
        str += num + " ";
        num++
    }
    console.log(str)
}