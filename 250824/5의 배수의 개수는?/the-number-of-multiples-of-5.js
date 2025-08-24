const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr = input.map(line => line.split(" ").map(Number));
let count = 0

for(let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for(let j = 0; j < row.length; j++) {
        if(row[j] % 5 === 0) count++
    }
}
    console.log(count)

