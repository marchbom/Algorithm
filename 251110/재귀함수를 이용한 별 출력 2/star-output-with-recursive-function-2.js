const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function str(n) {
    if(n === 0) return;
    console.log(("*" + " ").repeat(n))
    str(n - 1)
    console.log(("*" + " ").repeat(n))
}

str(n)