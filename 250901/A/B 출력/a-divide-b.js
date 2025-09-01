const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a, b] = input;
let result = ""

result += parseInt(a/b) + ".";

a %= b;
for(let i=0; i<20; i++) {
    
}