const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let num = []
let result = []
for(let i = 0; i < n; i++) {
    num.push(arr[i])
    if((i + 1) % 2 !== 0) {
        let temp = [...num].sort((a, b) => a - b);
        let mid = temp[Math.floor(temp.length / 2)]
        result.push(mid)
    }
}
console.log(result.join(" "))