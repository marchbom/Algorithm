const fs = require("fs");
const input = fs.readFileSync(0).toString().split('\n').map(Number);

let n = input[0];
let result = 0

for(let i = 1; i <= 100; i++) {
    result += i
    if(result >= n) {
        console.log(i)
        break;
    }
}
