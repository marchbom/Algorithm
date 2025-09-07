const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b, c] = input;
let result = true

for(let i = a; i <= b; i++) {
    if(i % c === 0) {
        result = true
        break;
    } else {
        result = false
    }
}
console.log(result ? "YES" : "NO")

