const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function LeapYear(y) {
    if(y % 400 === 0 || y % 100 !== 0 && y % 4 === 0) {
        return true
    } else return false
}

console.log(LeapYear(y))