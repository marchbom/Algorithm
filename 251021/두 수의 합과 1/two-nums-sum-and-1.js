const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumStr = (input[0] + input[1]).toString()
let count = 0;

for(const str of sumStr) {
    if(str === "1") {
        count++;
    }
}
console.log(count)
