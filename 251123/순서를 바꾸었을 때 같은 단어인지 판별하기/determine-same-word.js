const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.
function sameStr(str1, str2) {
    if(str1.length !== str2.length) {
        return "No"
    } 
    const sort1 = str1.split("").sort().join("")
    const sort2 = str2.split("").sort().join("")

    return sort1 === sort2 ? "Yes" : "No"
}

console.log(sameStr(str1, str2))
