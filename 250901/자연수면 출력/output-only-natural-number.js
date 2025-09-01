const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;
let result = ""

if(a > 0) {
    for(let i = 1; i <= b; i++) {
        result += a + ""
    }
}
if(a < 0)  {
    result = 0
}
console.log(result)