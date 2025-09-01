let fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [n, a] = input;
let i = 1
while(i <= n) {
    if(i % a === 0) {
        console.log(1)
    } else {
        console.log(0)
    }
    i++
}