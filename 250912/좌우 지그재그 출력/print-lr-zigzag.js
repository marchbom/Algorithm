const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = 1;
for(let i = 1; i <= n; i++) {
    let arr = []
    for(let j = 0; j < n; j++) {
        arr.push(num++);
    }
    if(i % 2 === 0) arr.reverse()
    console.log(arr.join(" "))
}