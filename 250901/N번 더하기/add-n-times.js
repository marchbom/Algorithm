const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, n] = input;
let result = a

for(let i = 0; i < n; i++) {
    result += n
    console.log(result)
}
