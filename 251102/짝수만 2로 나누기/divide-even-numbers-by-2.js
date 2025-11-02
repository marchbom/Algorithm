const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
let result = []
function evenNum(arr) {
    for(let n of arr) {
        if(n % 2 === 0) {
            n = n / 2
            result.push(n)
        } else result.push(n)
    }
    return result;
}

console.log(evenNum(arr).join(" "))