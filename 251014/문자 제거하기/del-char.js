const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0]
let num = input.slice(1).map(Number);


for(let i = 0; i < num.length && str.length; i++) {
    let idx = num[i];
    if(idx >= str.length) {
        idx = str.length - 1;
    } 
    str = str.slice(0, idx) + str.slice(idx + 1);
    console.log(str)
}