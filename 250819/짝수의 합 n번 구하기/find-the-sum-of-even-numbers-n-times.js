const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n')

let N = Number(input[0])



for(let i = 1; i <= N; i++) {
    let a = Number(input[i].split(' ')[0])
    let b = Number(input[i].split(' ')[1]);
    let sum = 0

    for(let j = a; j <= b; j++) {
        if(j % 2 === 0) {
            sum += j;
        }   
    }
    console.log(sum)
}




