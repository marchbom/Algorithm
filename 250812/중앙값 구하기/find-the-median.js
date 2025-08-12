const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

input.sort((a, b) => a - b);
return console.log(input[1])
