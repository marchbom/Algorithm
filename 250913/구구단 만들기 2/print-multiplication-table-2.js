const  fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;

for(let j = 1; j <= 9; j++) {
    if(j % 2 === 0) {
        let row = []
        for(let i = b; i >= a; i--) {
           row.push(`${i} * ${j} = ${i *j}`)   
        }
         console.log(row.join(" / "))
    }
}