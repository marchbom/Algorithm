const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [b, a] = input;
let result = ""

for(let i = b; i >= a; i--) {
    if(i % 2 === 0) continue;
    result += i + " "
}

console.log(result)