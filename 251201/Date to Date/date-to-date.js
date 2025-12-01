const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const numOfDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let startMonth = m1;
let startDay = d1;
let endMonth = m2;
let endDay = d2

for(let i = 1; i < m1; i++) {
    startDay += numOfDays[i];
}

for(let i = 1; i < m2; i++) {
    endDay += numOfDays[i];
}

let totalDay = endDay - startDay + 1;

console.log(totalDay)