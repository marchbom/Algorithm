const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let n = input[0]
let count = 0

while(true) {
    if(n === 1) {
        console.log(count)
        break;
    }
    
    if(n % 2 === 0) {
        n = n / 2
        count++
    } else if (n % 2 !== 0){
       n = (n * 3) + 1
       count++
    }

    

    
}