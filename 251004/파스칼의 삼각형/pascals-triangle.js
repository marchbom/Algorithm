const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim());

let num = 1
let arr = []
for(let i = 0; i < n; i++) {
    arr[i] = Array(i + 1).fill(0)
    arr[i][0] = 1;
    arr[i][i] = 1;
    for(let j = 1; j < i; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
}
for(let i = 0; i <n; i++) {
    console.log(arr[i].join(" "))
}
