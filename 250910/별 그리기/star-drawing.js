const fs = require('fs');
const n  = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i++) {
    let str = "";
    
    for(let j = 0; j < n - 1 - i; j++) {
        str += " ";
    }
    for(let j = 0; j < 2 * i + 1; j++) {
        str += "*";
    }
    console.log(str);
}
for(let i = n-2; i >= 0; i--) {
    let str = "";
    
    for(let j = 0; j < n - 1 - i; j++) {
        str += " ";
    }
    for(let j = 0; j < 2 * i + 1; j++) {
        str += "*";
    }
    console.log(str);
}