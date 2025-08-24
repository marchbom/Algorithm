const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');


let arr = input.map(line => line.split(" ").map(Number));

for(let i = 0; i < arr.length; i++) {
        let row = arr[i]
        let sum = 0
    for(let j = 0; j < row.length; j++) {
        sum += row[j]
    }
        console.log(sum)  
}