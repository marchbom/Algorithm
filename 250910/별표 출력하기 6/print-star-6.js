const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

// 위쪽 부분 (n줄)
for(let i = 0; i < n; i++) {
    let str = "";
    
    for(let j = 0; j < 2 * i; j++) {
        str += " ";
    }
    for(let j = 0; j < 2 * n - 1 - 2 * i; j++) {
        str += "* ";
    }
    console.log(str);
}

for(let i = n - 2; i >= 0; i--) {
    let str = "";
    
    for(let j = 0; j < 2 * i; j++) {
        str += " ";
    }
    for(let j = 0; j < 2 * n - 1 - 2 * i; j++) {
        str += "* ";
    }
    console.log(str);
}