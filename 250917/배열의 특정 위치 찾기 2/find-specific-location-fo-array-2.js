const fs = require('fs')
const n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let odd = 0;
let even = 0
for(let i = 0; i < n.length; i++) {
    if(i % 2 === 0) {
        even += n[i]
    } else {
        odd += n[i]
    }
}
console.log(Math.max(even, odd) - Math.min(even, odd))