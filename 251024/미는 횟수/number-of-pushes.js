const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let [a, b] = input;
let count = -1;

for (let i = 1; i <= a.length; i++) {
    a = a[a.length - 1] + a.slice(0, a.length - 1);
    
    if (a === b) {
        count = i;
        break;
    }
}
console.log(count);
