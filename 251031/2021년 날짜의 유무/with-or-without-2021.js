const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function existingDate(m, d) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(m < 1 || m > 12) return false;
    if(d < 1 || d > month[m - 1]) return false;

    return true;
}

console.log(existingDate(m, d) ? "Yes" : "No");
