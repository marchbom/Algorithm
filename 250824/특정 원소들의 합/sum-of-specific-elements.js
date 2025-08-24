const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');


let arr = input.map(line => line.split(" ").map(Number));
let sum = 0;


for(let i = 0; i < arr.length; i++) {
    let row = arr[i]
    for(let j = 0; j < i+1; j++) {
        if(i + 1 > arr.length) return 
        sum += row[j]
    }
}
console.log(sum)