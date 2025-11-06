const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.
function isExisting(text, pattern) {
    if(text.includes(pattern)) {
        return text.indexOf(pattern)
    } else {
        return -1
    }
}

console.log(isExisting(text, pattern))