const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");


console.log(input.length - 1);
for(let i = 0; i <= input.length; i++) {
    if(i % 2 === 0) {
        console.log(input[i])
    }
    if(input[i] === "0") {
        break;
    } 
}