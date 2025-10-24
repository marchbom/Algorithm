const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function print(N) {
    let num = 1
    for(let i = 0; i < N; i++) {
        let row = []
        for(let j = 0; j < N; j++) {
            row.push(num)
            num++
            if(num > 9) num = 1
        }
            console.log(row.join(" "))
    }
}

print(N)