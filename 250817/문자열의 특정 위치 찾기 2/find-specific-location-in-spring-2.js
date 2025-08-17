const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let fruitsArr = ["apple", "banana", "grape", "blueberry", "orange"]
let count  = 0;
for(let i = 0; i < fruitsArr.length; i++) {
    if(fruitsArr[i][2] === input || fruitsArr[i][3] === input) {
         count++;
        console.log(fruitsArr[i]);
    }
}
    console.log(count)