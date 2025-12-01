const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
let startDay = 11;
let startHour = 11;
let startMin = 11;

let start = startDay * 24 * 60 + startHour * 60 + startMin;
let end = A * 24 * 60 + B * 60 + C;

let diff = end - start;

if(diff < 0) diff = -1;
console.log(diff)

