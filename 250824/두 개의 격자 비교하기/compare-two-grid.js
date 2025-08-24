const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = input[0].split(' ').map(Number)[0]
let m = input[0].split(' ').map(Number)[1]

let arr1 = Array(n).fill(0).map(() => Array(m).fill(0))
let arr2 = Array(n).fill(0).map(() => Array(m).fill(0))
let arr3 = Array(n).fill(0).map(() => Array(m).fill(0))


for(let i = 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
        arr1[i] = input[i + 1].split(' ').map(Number);
    }
}
for(let i = 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
        arr2[i] = input[i + 1 + n].split(' ').map(Number);
    }
}

for(let i = 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
        if(arr1[i][j] === arr2[i][j]) {
            arr3[i][j] = 0;
        } else {
            arr3[i][j] = 1
        }
    }
}

for(let i = 0; i < n; i++) {
    let str = "";
    for(let j = 0; j < m; j++) {
        str += arr3[i][j] + " ";
    }
    console.log(str)
}