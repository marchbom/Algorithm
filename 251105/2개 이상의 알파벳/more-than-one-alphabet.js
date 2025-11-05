const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const a = input[0];
// Please Write your code here.

function solution(a) {
    let count = 0;
    let str = [...a].join("")
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[i + 1]) {
            count++
        }
        if(count >= 2) break;
    }
    return count >= 2 ? "Yes" : "No"
}


console.log(solution(a))
