const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
function maxCount(n, arr) {
    let max = 1;
    let current = 1;
    for(let i = 1; i < n; i++) {
        if(arr[i] === arr[i - 1]) {
            current++;
            if(current > max) {
                max = current;
            }
        } else {
            current = 1
        }
    }
    return max;
}

console.log(maxCount(n, arr))