const fs = require('fs')
const n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for(let i = 0; i < n.length; i++) {
    if(n[i] % 3 === 0) {
        console.log(n[i -1]) 
        break;
    }
}