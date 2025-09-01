const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let [b, a] = input;
let result = [];

while (b >= a) {
    if(b % 2 === 0) {
        result.push(b);
    }
    b--;
}
console.log(result.join(" "));