const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function isPalindrome(a) {
    let b = a
    return b.split("").reverse().join("") === a ? "Yes" : "No"
}

console.log(isPalindrome(str))